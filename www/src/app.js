/**
 * Created by Danny Schreiber on 2/16/15.
 */

(function(){
	'use strict';
	angular.module('grubsta', ['grubsta.core', 'uiGmapgoogle-maps'])
		.config(function($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider, uiGmapGoogleMapApiProvider) {

			uiGmapGoogleMapApiProvider.configure({
				key: 'AIzaSyDv-kWpcHz1JE2tFT9Sle1N5_w7kJYD52E',
				v: '3.17',
				libraries: 'weather, geometry, visualization'
			});
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