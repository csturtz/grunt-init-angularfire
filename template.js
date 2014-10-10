/*
 * grunt-init-angularfire
 * https://github.com/csturtz/grunt-init-angularfire
 *
 * Copyright (c) 2014 Chad Sturtz, contributors
 * Licensed under the MIT license.
 */

 'use strict';

 // Template Description
 exports.description = 'AngularJS, Firebase, AngularFire - SPA';

 // Notes to be displayed before prompts
 exports.notes = '';

 // Notes to be displayed after prompts
 exports.after = '';

 // Warn if any existing file/directory matches this string
 exports.warnOn = '*';

 // Template
 exports.template = function(grunt, init, done) {

 	init.process({},[
 		init.prompt(firebase_name);
 	],function(err,props){

 		// write firebase.json
 		init.writePackageJSON('firebase.json', {
 			firebase: props.firebase_name,
 			public: './dist',
 			ignore: [],
 			rewrites: [ {
 				source: "**",
 				destination: "/index.html"
 			} ]
 		});
 	});

 };