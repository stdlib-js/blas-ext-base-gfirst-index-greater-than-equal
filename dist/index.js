/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first element in a strided array which is greater than or equal to a corresponding element in another strided array.
*
* @module @stdlib/blas-ext-base-gfirst-index-greater-than-equal
*
* @example
* var gfirstIndexGreaterThanEqual = require( '@stdlib/blas-ext-base-gfirst-index-greater-than-equal' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = [ 2.0, 2.0, 2.0, 2.0 ];
*
* var idx = gfirstIndexGreaterThanEqual( x.length, x, 1, y, 1 );
* // returns 1
*
* @example
* var gfirstIndexGreaterThanEqual = require( '@stdlib/blas-ext-base-gfirst-index-greater-than-equal' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = [ 2.0, 2.0, 2.0, 2.0 ];
*
* var idx = gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // returns 1
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
