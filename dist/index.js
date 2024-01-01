/** @license Apache-2.0 */

'use strict';

/**
* Create an iterator which iterates over grapheme clusters.
*
* @module @stdlib/string-to-grapheme-cluster-iterator
*
* @example
* var graphemeClusters2iterator = require( '@stdlib/string-to-grapheme-cluster-iterator' );
*
* var iter = graphemeClusters2iterator( '🌷🍕' );
*
* var v = iter.next().value;
* // returns '🌷'
*
* v = iter.next().value;
* // returns '🍕'
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
