!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[FiveGridLine_SolidLine]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[FiveGridLine_SolidLine]"]=t(require("react")):e["rb_wixui.thunderbolt[FiveGridLine_SolidLine]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";n.r(o),n.d(o,{components:function(){return v}});var e=n(448),t=n.n(e),r=n(5329),i=n.n(r);function u(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=u(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=u(e))&&(n&&(n+=" "),n+=t);return n};const s=(...e)=>e.map((e=>e?`wixui-${e}`:"")).join(" ");const c=13,f=27;function d(e){return t=>{t.keyCode===e&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.click())}}d(32),d(c),d(f);var l={root:"horizontal-line"};const p=e=>{const{id:n,children:o,className:i,customClassNames:u=[],onMouseEnter:c,onMouseLeave:f}=e;return r.createElement("div",t()({id:n,className:a(i,s(l.root,...u))},(e=>Object.entries(e).reduce(((e,[t,r])=>(t.includes("data-")&&(e[t]=r),e)),{}))(e),((e={})=>{const t=e.tabIndex??e.tabindex??void 0;return void 0!==t?{tabIndex:Number(t)}:{}})(e.a11y),{onMouseEnter:c,onMouseLeave:f}),o)};var b="aVng1S";const v={FiveGridLine_SolidLine:{component:e=>{let{children:r,...n}=e;return i().createElement(p,t()({},n,{className:a(n.className,b)}))}}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[FiveGridLine_SolidLine].9f1c5907.bundle.min.js.map