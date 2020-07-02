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
import copyValue from "./copyValue";
import './nav-scroll.js';

window.debounce = debounce;
window.rwdMedia = rwdMedia;
window.Cookies = Cookies;
window.rippletInit = rippletInit;
window.scrollToId = scrollToId;
window.copyValue = copyValue;
window.AnimWithScroll = AnimWithScroll;
window.inView = inView;

$(document).ready(function(e) {

    rippletInit();

});

// jQuery.fn.jquery
// $.fn.popover.Constructor.VERSION
// $.fn.hasAttr
