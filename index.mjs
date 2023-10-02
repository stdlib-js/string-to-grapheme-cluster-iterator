// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-next-grapheme-cluster-break@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function o(d){var l,m,u,h,v;if(!n(d))throw new TypeError(i("1h1ME",d));if(arguments.length>1){if(!t(h=arguments[1]))throw new TypeError(i("1h12H,G6",h));l=arguments[2]}return v=0,e(m={},"next",h?a:p),e(m,"return",f),r&&e(m,r,g),m;function a(){var e,t;return u?{done:!0}:-1===(t=s(d,v))?(u=!0,d.length?{value:h.call(l,d.substring(v),v,d),done:!1}:{done:!0}):(e=h.call(l,d.substring(v,t),v,d),v=t,{value:e,done:!1})}function p(){var e,t;return u?{done:!0}:-1===(t=s(d,v))?(u=!0,d.length?{value:d.substring(v),done:!1}:{done:!0}):(e=d.substring(v,t),v=t,{value:e,done:!1})}function f(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){return h?o(d,h,l):o(d)}}export{o as default};
//# sourceMappingURL=index.mjs.map
