<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# graphemeClusters2iterator

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which iterates over [grapheme clusters][unicode-text-segmentation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-to-grapheme-cluster-iterator
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var graphemeClusters2iterator = require( '@stdlib/string-to-grapheme-cluster-iterator' );
```

#### graphemeClusters2iterator( src\[, mapFcn\[, thisArg]] )

Returns an iterator which iterates over each [grapheme cluster][unicode-text-segmentation] in a `string`.

```javascript
var iter = graphemeClusters2iterator( '????????' );

var v = iter.next().value;
// returns '????'

v = iter.next().value;
// returns '????'

var bool = iter.next().done;
// returns true
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

To invoke a function for each `src` value, provide a callback function.

```javascript
function fcn( v ) {
    return v + v;
}

var it = graphemeClusters2iterator( 'beep', fcn );
// returns <Object>

var v = it.next().value;
// returns 'bb'

v = it.next().value;
// returns 'ee'

v = it.next().value;
// returns 'ee'

// ...
```

The invoked function is provided three arguments:

-   **value**: [grapheme cluster][unicode-text-segmentation].
-   **index**: iterated value index.
-   **src**: source string.

```javascript
function fcn( v, i ) {
    return v + i;
}

var it = graphemeClusters2iterator( 'bar', fcn );
// returns <Object>

var v = it.next().value;
// returns 'b0'

v = it.next().value;
// returns 'a1'

v = it.next().value;
// returns 'r2'

// ...
```

To set the callback function execution context, provide a `thisArg`.

```javascript
function fcn( v ) {
    this.count += 1;
    return v;
}

var ctx = {
    'count': 0
};

var it = graphemeClusters2iterator( '????????', fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns '????'

v = it.next().value;
// returns '????'

var count = ctx.count;
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke a string's `@@iterator` method, regardless of whether this method is defined. To convert a string to an implementation defined iterator, invoke this method directly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var graphemeClusters2iterator = require( '@stdlib/string-to-grapheme-cluster-iterator' );

function repeat( str ) {
    return str + str;
}

// Create an iterator which iterates over grapheme clusters:
var it = graphemeClusters2iterator( 'I??t??rn??ti??n??liz??ti??n', repeat );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-to-grapheme-cluster-iterator.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-to-grapheme-cluster-iterator

[test-image]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-to-grapheme-cluster-iterator/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-to-grapheme-cluster-iterator?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-to-grapheme-cluster-iterator.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-to-grapheme-cluster-iterator/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/tree/deno
[umd-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/tree/umd
[esm-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/tree/esm
[branches-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/blob/main/branches.md

[unicode-text-segmentation]: http://www.unicode.org/reports/tr29/

</section>

<!-- /.links -->
