import $ from "jquery";

function copyValue(elem, id) {
    const $elem = $(elem);
    const copyText = document.getElementById(id);
    const eventSuccess = function() {
        $elem.css('min-width', $elem.outerWidth() );
        $elem.css('flex', '0 0 ' + $elem.outerWidth() );
        $elem.find('.event-ready').hide();
        $elem.find('.event-success').show();
        setTimeout( eventReady, 3000);
    }
    const eventReady = function() {
        $elem.find('.event-ready').show();
        $elem.find('.event-success').hide();
    }

    if( copyText.value.length ) {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        setTimeout( eventSuccess, 300);
    }
}

export default copyValue;
