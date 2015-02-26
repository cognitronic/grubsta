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