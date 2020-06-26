import $ from "jquery";

function scrollToId(elem) {
    $("html, body").delay(200).animate({scrollTop: $(elem).offset().top - 100 }, 1000);
}

export default scrollToId;