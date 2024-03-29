/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var iteratorSymbol = require( '@stdlib/symbol-iterator' );
var noop = require( '@stdlib/utils-noop' );
var numGraphemeClusters = require( '@stdlib/string-num-grapheme-clusters' );
var graphemeClusters2iterator = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof graphemeClusters2iterator, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			graphemeClusters2iterator( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a string (callback)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			graphemeClusters2iterator( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			graphemeClusters2iterator( 'beep', value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var r;
	var i;

	values = '🌷Iñtërnâtiô🌷na\u0300lizætiøn🌷c\u0302🍕\uD834\uDD1E🍕🍕';
	expected = [
		{
			'value': '🌷',
			'done': false
		},
		{
			'value': 'I',
			'done': false
		},
		{
			'value': 'ñ',
			'done': false
		},
		{
			'value': 't',
			'done': false
		},
		{
			'value': 'ë',
			'done': false
		},
		{
			'value': 'r',
			'done': false
		},
		{
			'value': 'n',
			'done': false
		},
		{
			'value': 'â',
			'done': false
		},
		{
			'value': 't',
			'done': false
		},
		{
			'value': 'i',
			'done': false
		},
		{
			'value': 'ô',
			'done': false
		},
		{
			'value': '🌷',
			'done': false
		},
		{
			'value': 'n',
			'done': false
		},
		{
			'value': 'à',
			'done': false
		},
		{
			'value': 'l',
			'done': false
		},
		{
			'value': 'i',
			'done': false
		},
		{
			'value': 'z',
			'done': false
		},
		{
			'value': 'æ',
			'done': false
		},
		{
			'value': 't',
			'done': false
		},
		{
			'value': 'i',
			'done': false
		},
		{
			'value': 'ø',
			'done': false
		},
		{
			'value': 'n',
			'done': false
		},
		{
			'value': '🌷',
			'done': false
		},
		{
			'value': 'ĉ',
			'done': false
		},
		{
			'value': '🍕',
			'done': false
		},
		{
			'value': '𝄞',
			'done': false
		},
		{
			'value': '🍕',
			'done': false
		},
		{
			'value': '🍕',
			'done': false
		},
		{
			'done': true
		}
	];

	it = graphemeClusters2iterator( values );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < numGraphemeClusters( values ); i++ ) {
		r = it.next();
		actual.push( r );
		t.equal( typeof r.value, 'string', 'returns a string' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (empty string)', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var r;
	var i;

	values = '';
	expected = [
		{
			'done': true
		}
	];

	it = graphemeClusters2iterator( values );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < numGraphemeClusters( values ); i++ ) {
		r = it.next();
		actual.push( r );
		t.equal( typeof r.value, 'string', 'returns a string' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which supports invoking a provided function for each iterated value', function test( t ) {
	var expected;
	var values;
	var it;
	var r;
	var i;

	values = 'beep';

	it = graphemeClusters2iterator( values, transform );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [];
	for ( i = 0; i < numGraphemeClusters( values ); i++ ) {
		r = it.next();
		t.equal( r.value, expected[ i ], 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.equal( expected.length, values.length, 'has expected length' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function transform( v, i ) {
		v += i;
		expected.push( v );
		return v;
	}
});

tape( 'the function returns an iterator protocol-compliant object which supports invoking a provided function for each iterated value (empty string)', function test( t ) {
	var expected;
	var values;
	var it;
	var r;
	var i;

	values = '';

	it = graphemeClusters2iterator( values, transform );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [];
	for ( i = 0; i < numGraphemeClusters( values ); i++ ) {
		r = it.next();
		t.equal( r.value, expected[ i ], 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.equal( expected.length, values.length, 'has expected length' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function transform( v, i ) {
		v += i;
		expected.push( v );
		return v;
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = graphemeClusters2iterator( 'beep' );

	r = it.next();
	t.equal( typeof r.value, 'string', 'returns a string' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'string', 'returns a string' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument; callback)', function test( t ) {
	var it;
	var r;

	it = graphemeClusters2iterator( 'beep', transform );

	r = it.next();
	t.equal( typeof r.value, 'string', 'returns a string' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'string', 'returns a string' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function transform( v, i ) {
		return v + i;
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = graphemeClusters2iterator( 'beep' );

	r = it.next();
	t.equal( typeof r.value, 'string', 'returns a string' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'string', 'returns a string' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument; callback)', function test( t ) {
	var it;
	var r;

	it = graphemeClusters2iterator( 'beep', transform );

	r = it.next();
	t.equal( typeof r.value, 'string', 'returns a string' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'string', 'returns a string' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function transform( v, i ) {
		return v + i;
	}
});

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable', function test( t ) {
	var graphemeClusters2iterator;
	var values;
	var it1;
	var it2;
	var i;

	graphemeClusters2iterator = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': '__ITERATOR_SYMBOL__'
	});

	values = 'beep';

	it1 = graphemeClusters2iterator( values );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < values.length; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable (callback)', function test( t ) {
	var graphemeClusters2iterator;
	var values;
	var it1;
	var it2;
	var i;

	graphemeClusters2iterator = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': '__ITERATOR_SYMBOL__'
	});

	values = 'beep';

	it1 = graphemeClusters2iterator( values, transform );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < values.length; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function transform( v ) {
		return v + v;
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var graphemeClusters2iterator;
	var it;

	graphemeClusters2iterator = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': false
	});

	it = graphemeClusters2iterator( 'beep' );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable" (callback)', function test( t ) {
	var graphemeClusters2iterator;
	var it;

	graphemeClusters2iterator = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': false
	});

	it = graphemeClusters2iterator( 'beep', transform );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function transform( v, i ) {
		return v + i;
	}
});
