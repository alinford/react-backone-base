define(['backbone'], function(Backbone) {
	'use strict';

	var Router = Backbone.Router.extend({

		initialize: function() {
			Backbone.history.start();
		},

		routes: {
			'': 'index'
		},

		'index': function() {
			alert('hello from backbone router!');
		},
	});

	return Router;
});