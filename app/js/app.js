var purple = (function (window) {
    'use strict';
    // Export Namespaced variable to window object
    window.purple = window.purple || {};

    //vars
    var anchorEl = document.querySelector("a"),
        targetEl = document.querySelectorAll('.hide')[0],
        offer = document.querySelectorAll('input[type="number"]')[0].value,
        submitOffer = document.querySelectorAll('input[type="submit"]')[0];


    //utility helpers
    function between( x, min, max ){
        return x >= min && x <= max;
    }

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }


    //event handlers
    var toggledItem = function() {
        var target = targetEl;

        if (target.style.display === 'block'){
           target.style.display = 'none';

        }else {
            target.style.display = 'block';
        }
    };

    //create function that validates the user input
    var validateOffer = function(){
        /**
         * Get the value of a querystring
         * @param  {String} field The field to get the value of
         * @param  {String} url   The URL to get the value from (optional)
         * @return {String}       The field value
         */

        //check the url param value
        if (getUrlParameter(offer) < 189000){
            console.log('Off too low.');
            console.log(getUrlParameter(offer))
            console.log(getUrlParameter('offerNum'));
        }else {
            console.log('Lets pop some champaign!');
        }


        console.log(getUrlParameter('offerNum'));







       /* if( between( offer, 180000, 200000)){
            console.log("GOOD PRICE!");
        }else{
            console.log("BAD PRICE!");
        }

        if(offer.length === 0 ){
            console.log("Please enter a valid input!");
        }else{

            console.log(offer);
        }

        console.log("Saving value", offer);*/


    };

    var ready = function () {
        console.log('html content fully loaded');
    };


    //event listeners
    anchorEl.addEventListener("click", toggledItem, false);
    submitOffer.addEventListener("click", validateOffer, false);
    document.addEventListener("DOMContentLoaded", ready);

    //api dispatcher
    return {
        toggledItem: toggledItem,
        validateOffer: validateOffer
    }
}(window));





