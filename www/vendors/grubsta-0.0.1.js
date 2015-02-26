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