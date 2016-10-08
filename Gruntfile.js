#!/usr/bin/env node


/*!
 * Ångström®
 * ____________________________________________________________________
 * Grunt, http://gruntjs.com/
 * The JavaScript Task Runner.
 * ____________________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * ____________________________________________________________________
 * @date      : 08-Oct-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : Compass
 * ____________________________________________________________________
 *
 * --/The Heart of Build + Test System/-- of "Ångström®".
 * ____________________________________________________________________
 */

// # Usage: $ node -v
// # Usage: $ npm -v
// # Usage: $ grunt -version

// =========================
// Grunt Module(s) Required.
// =========================
// main module.
// @require   : grunt
// @require   : grunt-cli


// Invoking strict mode.
"use strict";

// load required NPM modules.
var chalk = require('chalk');
// load required Node modules.
var os    = require('os');
var path  = require('path');

// Note: To import project metadata into the -/Grunt/- config.
// ~~^~~
// @require   : package.json

// Grunt Task(s):--------------------------------------------------------------
// 1. Task for "Linter" - HTML, SCSS, CSS, CoffeeScript, and JavaScript,
// 2. Task for "Minifier" - HTML + CSS, and JavaScript,
// 3. Task for "Clean/Copy files and folders",
// 4. Task for "Travis CI", using ".travis.yml" from root, and
// ----------------------------------------------------------------------------
// If everything is successfully build and pass the testing,
// We have to throw it to — GitHub's gh-pages.
// ----------------------------------------------------------------------------
// 5. Task for "Releases", using "grunt-bump" from master branch.



/* ---------------------------------------------|
 * Settings for Build System.                   |
 * _____________________________________________|
 */
var SERVER_PORT     = 9000;
var LIVERELOAD_PORT = 35729;



// Default color defined.
var noop    = chalk.red;
var yeep    = chalk.green;
var okay    = chalk.blue;
var whoosh  = chalk.yellow;

// ./config/rules -> All rules defined.
// ./config/tasks -> All task defined.

// Global variables
// ~~~~~~~~~~~~~~~~
var distDir = './dist';
var pkg     = require('./package.json');
var banner  = ['/*!', pkg.name, pkg.version, '*/\n'].join(' ');

// Options for UMD.
var umdOptions = {
  exports: 'Angstrom',
  namespace: 'Angstrom'
};

// Version bump(s) ---->
var VERSIONS = ['patch', 'minor', 'major'];

// load required Node module.
var fs       = require('fs');
var message  = 'Angstrom — supported under Mac OS and Linux only!';
