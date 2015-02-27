/**
 * Created by Danny Schreiber on 2/16/15.
 */

angular.module('grubsta.core', [
	'ui.router',
	'ngSanitize',
	'ngAnimate',
	'grubsta.services',
	'toaster',
	'ram-utilities.ui'
]);

angular.module('grubsta.services', [
	'grubsta.profile.service'
]);
/**
 * Created by Danny Schreiber on 2/16/15.
 */

(function(){
	'use strict';
	angular.module('grubsta', ['grubsta.core'])
		.config(function($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
			$urlMatcherFactoryProvider.strictMode(false);
			$locationProvider.html5Mode(true);
			$httpProvider.defaults.transformRequest = function (data) {
				if (data === undefined) {
					return data;
				}
				return $.param(data);
			};

			//sets the content type header globally for $http calls
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
			$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
			$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
			$httpProvider.defaults.headers['delete'] = {'Content-Type': 'application/json; charset=UTF-8'};
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('home', {
					url: '/',
					views: {
						'header@': {
							templateUrl: '/src/common/layout/header.html',
							controller: 'HeaderController as hc'
						},
						'main-content@': {
							templateUrl: 'src/home/home.html',
							controller: 'HomeController as home'
						},
						'footer@': {
							templateUrl: '/src/common/layout/footer.html',
							controller: 'FooterController as fc'
						}
					}
				})
				.state('profile', {
					url: '/profile',
					views: {
						'header@': {
							templateUrl: '/src/common/layout/header.html',
							controller: 'HeaderController as hc'
						},
						'main-content@': {
							templateUrl: 'src/profile/profile.html',
							controller: 'ProfileController as pc'
						},
						'footer@': {
							templateUrl: '/src/common/layout/footer.html'
						}
					}
				});
		});
})();
/**
 * Created by Danny Schreiber on 2/25/2015.
 */

(function(){ 'use strict';
	var fixContainer = function() {

		var link = function (scope, element, attrs) {

			function resizeContainers(containerId) {
				var heights = $(containerId).map(function () {
						return $(this).height();
					}).get(),

					maxHeight = Math.max.apply(null, heights) * 2;

				$(containerId).height(maxHeight);
			}
			resizeContainers(element);
		};
		return {
			restrict: 'EA',
			link: link
		};
	};

	angular.module('grubsta').directive('fixContainer', [fixContainer]);

})();
/**
 * Created by Danny Schreiber on 2/25/2015.
 */

(function(){
	'use strict';
	angular.module('grubsta.core').constant('Constants', {

	});
})();
/**
 * Created by Danny Schreiber on 2/25/2015.
 */

(function(){ 'use strict';
    var FooterController = function(){
		var fc = this;

	    fc.init = init;

	    init();

	    function init(){

	    }
    };
	angular.module('grubsta').controller('FooterController', [FooterController]);
})();
/**
 * Created by Danny Schreiber on 2/25/2015.
 */

(function(){ 'use strict';
	var HeaderController = function($state){

	};

	angular.module('grubsta').controller('HeaderController', ['$state', HeaderController]);
})();
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
/**
 * Created by Danny Schreiber on 2/25/2015.
 */


(function(){ 'use strict';
    var ProfileService = function(){

		return{

		};
    };
	angular.module('grubsta.profile.service', []).factory('ProfileService', [ProfileService]);
})();