/*!
 * Ångström®
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
 * ____________________________________________________________________
 */

// Find the first file matching a given pattern in,
// the current directory or the nearest ancestor directory.
var findup = require('findup-sync');
// Export version from 'package.json' after finding it.
module.exports = require(findup('package.json', {cwd: __dirname })).version;
