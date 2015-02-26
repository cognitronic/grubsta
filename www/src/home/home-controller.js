/**
 * Created by Danny Schreiber on 2/25/2015.
 */

(function(){ 'use strict';
    var HeaderController = function(){
		var hc = this;

	    hc.init = init;

	    init();

	    function init(){

	    }
    };

	angular.module('grubsta.core').controller('HeaderController', [HeaderController]);

})();