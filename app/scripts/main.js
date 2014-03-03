require.config({
	baseUrl: 'scripts',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery',
		'underscore': '../bower_components/underscore/underscore',
		'backbone': '../bower_components/backbone/backbone',
		'react': '../bower_components/react/react',
	},
	shim: {
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		underscore: {
			deps: [],
			exports: '_'
		},
		react: {
			exports: 'React',
		}
	}
});

require(['./router'], function(Router) {
	'use strict';

	var r = new Router();
});