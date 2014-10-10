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
 		{
 			name: 'project_name',
 			message: 'Enter the Project Name',
 			default: 'HelloWorld',
 			warning: 'Please give your project a name'
 		},
 		{
 			name: 'project_version',
 			message: 'Enter the Initial Project Version',
 			default: '0.0.1',
 			warning: 'Please provide an initial version'
 		},
 		{
 			name: 'author_name',
 			message: 'Enter Your Name',
 			default: 'Captain Awesome',
 			warning: 'Please enter your name'
 		},
 		{
 			name: 'firebase_name',
 			message: 'Enter the Name of your Firebase',
 			default: 'HelloWorld',
 			warning: 'Please enter the name of your Firebase'
 		}
 	],function(err,props){

 		// write package.json
 		init.writePackageJSON('package.json', {
 			name: props.project_name,
 			version: props.project_version,
 			author: {
 				'name': props.author_name
 			},
 			engines: {
 				'node': ">= 0.10.0"
 			},
 			devDependencies: {

 			}
 		});

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