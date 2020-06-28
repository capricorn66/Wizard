import $ from "jquery";

function copyValue(elem, id) {
    const $elem = $(elem);
    const copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    $elem.find('.event').hide();
    $elem.find('.event-success').show();

}

export default copyValue;
