/**
 * Created by Danny Schreiber on 2/26/2015.
 */

(function(){ 'use strict';
    var MealFeedService = function(RestService, $http, $q){

	    var _getPublicFeed = function(){

		    var deferred = $q.defer();

		    $http.jsonp("http://www.filltext.com/?callback=JSON_CALLBACK&rows=5&fname={firstName}&lname={lastName}").
			    success(function (data) {
				    deferred.resolve(data);
			    });
		    return deferred.promise;

	    };

		return{
			getPublicFeed: _getPublicFeed
		};
    };
	angular.module('grubsta.services').factory('MealFeedService', ['RestService', '$http', '$q', MealFeedService]);
})();