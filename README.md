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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# graphemeClusters2iterator

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which iterates over [grapheme clusters][unicode-text-segmentation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import graphemeClusters2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-to-grapheme-cluster-iterator@v0.2.1-deno/mod.js';
```

#### graphemeClusters2iterator( src\[, mapFcn\[, thisArg]] )

Returns an iterator which iterates over each [grapheme cluster][unicode-text-segmentation] in a `string`.

```javascript
var iter = graphemeClusters2iterator( '🌷🍕' );

var v = iter.next().value;
// returns '🌷'

v = iter.next().value;
// returns '🍕'

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

var it = graphemeClusters2iterator( '🌷🍕', fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns '🌷'

v = it.next().value;
// returns '🍕'

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
import graphemeClusters2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-to-grapheme-cluster-iterator@v0.2.1-deno/mod.js';

function repeat( str ) {
    return str + str;
}

// Create an iterator which iterates over grapheme clusters:
var it = graphemeClusters2iterator( 'Iñtërnâtiônàlizætiøn', repeat );

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

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-to-iterator`][@stdlib/array/to-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object.</span>
-   <span class="package-name">[`@stdlib/string-to-grapheme-cluster-iterator-right`][@stdlib/string/to-grapheme-cluster-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates from right to left over grapheme clusters.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-to-grapheme-cluster-iterator.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-to-grapheme-cluster-iterator

[test-image]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-to-grapheme-cluster-iterator/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-to-grapheme-cluster-iterator?branch=v0.2.1

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-to-grapheme-cluster-iterator.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-to-grapheme-cluster-iterator/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-to-grapheme-cluster-iterator/main/LICENSE

[unicode-text-segmentation]: http://www.unicode.org/reports/tr29/

<!-- <related-links> -->

[@stdlib/array/to-iterator]: https://github.com/stdlib-js/array-to-iterator/tree/deno

[@stdlib/string/to-grapheme-cluster-iterator-right]: https://github.com/stdlib-js/string-to-grapheme-cluster-iterator-right/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
