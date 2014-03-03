require.config({
	baseUrl: 'scripts',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery',
		'underscore': '../bower_components/underscore/underscore',
	},
	shim: {
		'jquery': {
			deps: [],
			exports: '$'
		},
		'underscore': {
			deps: [],
			exports: '_'
		}
	}
});

require(['jquery', 'underscore'], function($, _) {
	$('body').remove();
});