includeScript('js/toggleActiveSections.js');
includeScript('js/relatedCarousel.js')
includeScript('js/similarCarousel.js');
includeScript('js/gallery.js');


window.onload = function() {
    toggleActiveSections();
    relatedCarousel();
    similarCarousel();
    gallery();
};

function includeScript (url) {
    var head = document.getElementsByTagName('head').item(0);
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', url);
    head.appendChild(script);
}