/*!
 * Ångström®
 * ______________________________________________________________
 * SEED®      : Grunt based Build System.
 * ~~~~~
 * Examples   : =================================================
 * @require   : ./settings.json
 * ______________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/]
 * @copyright : Sequømics Corporation [http://sequomics.com/]
 * ______________________________________________________________
 * @date      : 09-Oct-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : Grunt
 * ______________________________________________________________
 */


// Invoking strict mode.
"use strict";


// load required Node modules.
var fs        = require('fs');
var path      = require('path');
// load required NPM modules.
var chalk     = require('chalk');
// Default color defined.
var noop      = chalk.red;
var yeep      = chalk.green;

// ToDo:---------------------------------------------
// 1. example directory creation,
// 2. to import configurations from 'settings.json',
// 3. file creation for html + css + script, and
// 4. to export as a module to grunt.
// ---------------------------------------------------
