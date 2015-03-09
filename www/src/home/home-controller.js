/**
 * Created by Danny Schreiber on 2/25/2015.
 */

(function(){ 'use strict';
    var HomeController = function(MealFeedService){
		var hc = this;
		hc.feed = [];
		hc.map = {};
	    hc.init = init;
	    hc.loadMap = loadMap;

	    init();

	    function init(){
			MealFeedService.getPublicFeed()
		        .then(function(data){
					console.log(data);
					hc.feed = data;
				});

		    hc.loadMap();
	    }

	    function loadMap(){
		    hc.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
	    }
    };

	angular.module('grubsta.core').controller('HomeController', ['MealFeedService', HomeController]);

})();