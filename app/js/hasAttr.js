import $ from "jquery";

$.fn.hasAttr = function(name) {
	return this.attr(name) !== undefined;
};
