/// always-open-links-in-newtab.js
(function() {
    document.addEventListener('click', function(ev) {
        var target = ev.target;
        while ( target !== null ) {
            if ( target.localName === 'a' ) {
                target.setAttribute("target", "_blank");
                break;
            }
            target = target.parentNode;
        }
    });
})();
