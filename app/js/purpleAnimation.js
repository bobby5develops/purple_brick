/**
 * Created by ryarborough on 6/26/17.
 */
var purpleAnimation = (function (window) {
    'use strict';
    //Export namespace to window object
    window.purpleAnimation = window.purpleAnimation || {};

    //vars
    var fadeInFrom = 0,
        fadeOutFrom = 10,
        target,
        setting;

    //define animation methods
    function fadeIn(element) {
        //recursive function
        target.querySelector(element);
        target.style.display = 'block';
        setting = fadeInFrom / 10;
        target.style.className = "";

    }


    function fadeOut(element) {

    }




    //api dispatcher
    return {

    }
}(window));
