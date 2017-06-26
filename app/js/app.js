var purple = (function (window) {
    'use strict';
    // Export Namespaced variable to window object
    window.purple = window.purple || {};

    //vars
    var anchorEl = document.querySelector("a"),
        targetEl = document.querySelectorAll('.hide')[0];
        console.log(targetEl);


    //event dispatchers
    var toggledItem = function() {
        var target = targetEl;

        if (target.style.display === 'block'){
            target.className = 'animated fadeInDown';
           target.style.display = 'none';



        }else {
            target.style.display = 'block';
        }

        //console.log('toggled Element fired!!!');
    };

    var ready = function () {
        console.log('html content fully loaded');
    };


    //event listeners
    anchorEl.addEventListener("click", toggledItem, false);
    document.addEventListener("DOMContentLoaded", ready);

    //api dispatcher
    return {
        toggledItem: toggledItem
    }
}(window));





