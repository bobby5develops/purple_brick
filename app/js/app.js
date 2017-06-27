var purple = (function (window) {
    'use strict';
    // Export Namespaced variable to window object
    window.purple = window.purple || {};

    //vars
    var anchorEl = document.querySelector("a"),
        targetEl = document.querySelectorAll('.hide')[0],
        submitOffer = document.querySelectorAll('input[type="submit"]')[0],
        parsedOffer;


    //utility helpers

    /**
     *
     *
     */

    function between( x, min, max ){
        return x >= min && x <= max;
    }

    /**
     *
     *
     */

    function showError() {
        var e1 = document.getElementById("offerLabel");
        e1.setAttribute("style","display:inline;");
        e1.setAttribute("aria-invalid","true");
        e1.innerHTML="&nbsp;<b>ERROR</b> - Please Match the Bidding Price!";
        document.getElementById("offerNum").setAttribute("aria-invalid", "true");
    }

    /**
     *
     *
     */

    function showMessage() {
        var e1 = document.getElementById("offerLabel");
        e1.setAttribute("style","display:inline;");
        e1.setAttribute("aria-invalid","true");
        e1.innerHTML="&nbsp;<b>MESSAGE</b> - Deal!";
        document.getElementById("offerNum").setAttribute("aria-invalid", "true");
    }

    /**
     *
     *
     */

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }


    /**
     *
     *
     */

    //event handlers
    var toggledItem = function() {
        var target = targetEl;

        if (target.style.display === 'block'){
           target.style.display = 'none';

        }else {
            target.style.display = 'block';
        }
    };


    /**
     *
     *
     */

    //create function that validates the user input
    var validateOffer = function(ev){
        //declare the storage object
        var storage = {};
        //parse the current string offer value to an integer
        parsedOffer = parseInt(offerNum.value);


        if (parsedOffer < 180000){
            //store the value
            storage["offer"] = parsedOffer;
            console.log(storage);
            showError();
        }else {
            //store the value
            storage["offer"] = parsedOffer;
            console.log(storage);
            showMessage();
        }


        ev.preventDefault();

    };

    /**
     * Function for checking the loading of 'all' dom content
     *
     */

    var ready = function () {
        console.log('html content fully loaded');
    };


    //event listeners

    anchorEl.addEventListener("click", toggledItem, false);
    submitOffer.addEventListener("click", validateOffer, false);
    document.addEventListener("DOMContentLoaded", ready);


    /**
     *
     *
     */

    //api dispatcher
    return {
        toggleItem: toggledItem,
        validateOffer: validateOffer
    }

}(window));





