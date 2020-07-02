import debounce from 'lodash.debounce';
import {rwdMedia} from "./rwdMedia";

class AnimWithScroll {

    constructor(data) {

        'use strict';

        this.data = data;
        this.$elem = this.isArray(this.data.elem) ? document.querySelector(this.data.elem[0]) : document.querySelector(this.data.elem);

        this.setMedia();

        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(() => this.initAnim() );
        });

        window.addEventListener('resize', debounce(() => {
            this.reInit();
        }, 250));

        this.initAnim();
    }

    calculateValue(value) {

        value = 'return ' + value;
        const calculateVal = new Function(value);
        return calculateVal(value);
    }

    calculateShift(start, end, scrollYStartAt, scrollYEndAt) {
        const scale = (end - start) / (scrollYEndAt - scrollYStartAt);
        const scaleScrollYStartAt = scrollYStartAt * scale;
        let value =((window.pageYOffset  * scale) - scaleScrollYStartAt) + start;

        if (start > end) {
            value = value > start ? start : value;
            value = value < end ? end : value;
        } else {
            value = value < start ? start : value;
            value = value > end ? end : value;
        }
        return value;
    }

    isArray(value) {

        return value && typeof value === 'object' && value.constructor === Array;
    }

    isObject(value) {

        return value && typeof value === 'object' && value.constructor === Object;
    }

    checkSuffix(property) {

        if ( property.indexOf('translate') === 0 ) {
            return 'px';
        } else if (property.indexOf('rotate') === 0) {
            return 'deg';
        } else {
            return '';
        }
    }

    setMedia() {

        this.scrollStartAt = this.calculateValue(this.data.scrollStartAt);
        this.scrollEndAt = this.calculateValue(this.data.scrollEndAt);

        this.media = {
            xs: false,
            sm: false,
            md: false,
            lg: false,
            xl: false
        };

        this.mediaAll = false;

        if( this.data.breakpoint.length ) {

            this.data.breakpoint.map(item => {
                this.media[item] = rwdMedia[item]();
            });

        } else {
            this.mediaAll = true;
        }
    }

    reInit() {

        this.setMedia();
        this.$elem.removeAttribute('style','');
        this.initAnim();
    }

    initAnim() {

        if ( !(this.media.xs || this.media.sm || this.media.md || this.media.lg || this.media.xl || this.mediaAll)) {
            return;
        }

        for (const prop in this.data.styles) {

            if ( this.isArray(this.data.styles[prop]) ) {

                const arr = this.data.styles[prop];
                const valShift = this.calculateShift( arr[0], arr[1], this.scrollStartAt, this.scrollEndAt );

                if (this.isArray(this.data.elem)) {
                    for (let j = 0; j < this.data.elem.length; j++)
                    {
                        document.querySelector(this.data.elem[j]).style[prop] = valShift;
                    }
                } else {
                    this.$elem.style[prop] = valShift;
                }

            }
            else if ( this.isObject(this.data.styles[prop]) ) {
                const obj = this.data.styles[prop];
                const key = prop;
                let valShift = [];
                let allValShift = '';
                let suffix = '';

                for (const propItem in obj) {
                    const arr = obj[propItem];
                    suffix = this.checkSuffix(propItem);
                    valShift = propItem + '(' +  this.calculateShift( arr[0], arr[1], this.scrollStartAt, this.scrollEndAt ) + suffix + ')';
                    allValShift = allValShift + ' ' + valShift;
                }

                console.log(this.scrollStartAt +' ,  ' + this.scrollEndAt)

                if (this.isArray(this.data.elem)) {
                    for (let j = 0; j < this.data.elem.length; j++)
                    {
                        document.querySelector(this.data.elem[j]).style[key] = allValShift;
                    }
                } else {
                    this.$elem.style[key] = allValShift;
                }

            }
        }
    }
}

export default AnimWithScroll;