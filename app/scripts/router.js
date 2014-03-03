define(['backbone'], function(Backbone) {
	'use strict';

	var Router = Backbone.Router.extend({

		initialize: function() {
			Backbone.history.start();
		},

		routes: {
			'': 'job/add',
			'job/add/step=0/select': 'job/add/step=0/select',
		},

		'job/add': function(step) {
			this.navigate('job/add/step=0/select', {trigger: true});
			console.log(step);
		},

		'job/add/step=0/select': function() {
			alert('hello!');
		},
	});

	return Router;
});