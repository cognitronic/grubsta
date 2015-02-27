/**
 * Created by Danny Schreiber on 2/25/2015.
 */

(function(){ 'use strict';
    var HomeController = function(MealFeedService){
		var hc = this;
		hc.feed = [];

	    hc.init = init;

	    init();

	    function init(){
			MealFeedService.getPublicFeed()
		        .then(function(data){
					console.log(data);
					hc.feed = data;
				});
	    }
    };

	angular.module('grubsta.core').controller('HomeController', ['MealFeedService', HomeController]);

})();