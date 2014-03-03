require.config({
	baseUrl: 'scripts',
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery',
		'underscore': '../bower_components/underscore/underscore',
		'backbone': '../bower_components/backbone/backbone'
	},
	shim: {
		'jquery': {
			deps: [],
			exports: '$'
		},
		'underscore': {
			deps: [],
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	}
});

require(['jquery', 'underscore', 'backbone', './zombie.js'], function($, _, Backbone, Zombie) {
	$('body').remove();

	var z = new Zombie();
});