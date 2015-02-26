/**
 * Created by Danny Schreiber on 2/25/2015.
 */

(function(){ 'use strict';
    var ProfileController = function(ProfileService){
		var pc = this;

	    pc.init = init;

	    init();

	    function init(){

	    }
    };
	angular.module('grubsta.core').controller('ProfileController', ['ProfileService', ProfileController]);
})();