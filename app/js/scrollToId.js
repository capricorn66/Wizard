import $ from "jquery";

function scrollToId(elem) {
    const scrollPos = rwdMedia.xs() || rwdMedia.sm() ? $(elem).offset().top - 20 : $(elem).offset().top - 100;
    $("html, body").delay(200).animate({scrollTop: scrollPos }, 1000);
}

export default scrollToId;