// JavaScript Document

import $ from "jquery";
import debounce from 'lodash.debounce';
import "./hasAttr";
import {rwdMedia} from "./rwdMedia";
import {rippletInit} from './ripplet';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/collapse';
import Cookies from 'js-cookie';
import AnimWithScroll from "./AnimWithScroll";
import inView from "in-view";
import scrollToId from "./scrollToId";


window.debounce = debounce;
window.rwdMedia = rwdMedia;
window.Cookies = Cookies;
window.rippletInit = rippletInit;
window.scrollToId = scrollToId;

$(document).ready(function(e) {

    window.onscroll = function() {handleHeader()};
    handleHeader();
    rippletInit();

    configElem.map(
        elemCfg => new AnimWithScroll( elemCfg )
    );

    inView('.section-welcome')
        .on('enter', el => {
            el.classList.add("section-enter");
        });

    inView('.section-wizard-step-1_1')
        .on('enter', el => {
            el.classList.add("section-enter");
        });

    inView('.section-wizard-step-1_3')
        .on('enter', el => {
            el.classList.add("section-enter");
        });

    inView('.section-wizard-step-2-header')
        .on('enter', el => {
            el.classList.add("section-enter");
        });

    inView('.section-wizard-step-2-body')
        .on('enter', el => {
            el.classList.add("section-enter");
        });

    inView('.section-wizard-step-3-header')
        .on('enter', el => {
            el.classList.add("section-enter");
        });

    inView('.section-wizard-step-3-body')
        .on('enter', el => {
            el.classList.add("section-enter");
        });

    inView.offset({bottom: 260});


});




function handleHeader() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.body.className = "sm";
    } else {
        document.body.className = "";
    }
}

// jQuery.fn.jquery
// $.fn.popover.Constructor.VERSION
// $.fn.hasAttr


const configElem = [
    {
        elem: '#js-gfx-floor_brighter',
        scrollStartAt: '$(".section-wizard-step-1_2").offset().top - ($(".section-wizard-step-1_2").height() * .7)',
        scrollEndAt: '$(".section-wizard-step-1_2").offset().top',
        styles: {
            transform: {
                scale: [1,.7]
            }
        },
        breakpoint: ['md' ,'lg', 'xl']
    },
    {
        elem: '#js-gfx-floor_bright',
        scrollStartAt: '$(".section-wizard-step-1_2").offset().top - ($(".section-wizard-step-1_2").height() * .7)',
        scrollEndAt: '$(".section-wizard-step-1_2").offset().top',
        styles: {
            transform: {
                scale: [1,.7]
            }
        },
        breakpoint: ['md' ,'lg', 'xl']
    },
    {
        elem: '#js-gfx-floor_dark',
        scrollStartAt: '$(".section-wizard-step-1_2").offset().top - ($(".section-wizard-step-1_2").height() * .7)',
        scrollEndAt: '$(".section-wizard-step-1_2").offset().top',
        styles: {
            transform: {
                scale: [1,.7]
            }
        },
        breakpoint: ['md' ,'lg', 'xl']
    }
];
