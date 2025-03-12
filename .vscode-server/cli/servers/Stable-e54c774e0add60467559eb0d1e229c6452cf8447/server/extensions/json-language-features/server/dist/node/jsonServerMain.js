(()=>{"use strict";var e,t,r,o={5747:(e,t,r)=>{var o,n=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,u={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(u,{config:()=>p,t:()=>d}),e.exports=(o=u,((e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of s(t))c.call(e,r)||undefined===r||n(e,r,{get:()=>t[r],enumerable:!(o=i(t,r))||o.enumerable});return e})(n({},"__esModule",{value:!0}),o));var a,f=r(9896),l=r(1943);function p(e){if("contents"in e)a="string"==typeof e.contents?JSON.parse(e.contents):e.contents;else if("fsPath"in e){const r=(t=e.fsPath,(0,f.readFileSync)(t,"utf8")),o=JSON.parse(r);a=b(o)?o.contents.bundle:o}else{var t;if(e.uri){let t=e.uri;return"string"==typeof e.uri&&(t=new URL(e.uri)),new Promise(((e,r)=>{(async function(e){if("file:"===e.protocol)return await(0,l.readFile)(e,"utf8");if("http:"===e.protocol||"https:"===e.protocol){const t=await fetch(e.toString(),{headers:{"Accept-Encoding":"gzip, deflate",Accept:"application/json"},redirect:"follow"});if(!t.ok){let r=`Unexpected ${t.status} response while trying to read ${e}`;try{r+=`: ${await t.text()}`}catch{}throw new Error(r)}return await t.text()}throw new Error("Unsupported protocol")})(t).then((t=>{try{const r=JSON.parse(t);a=b(r)?r.contents.bundle:r,e()}catch(e){r(e)}})).catch((e=>{r(e)}))}))}}}function d(...e){const t=e[0];let r,o,n;if("string"==typeof t)r=t,o=t,e.splice(0,1),n=e&&"object"==typeof e[0]?e[0]:e;else{if(t instanceof Array){const r=e.slice(1);if(t.length!==r.length+1)throw new Error("expected a string as the first argument to l10n.t");let o=t[0];for(let e=1;e<t.length;e++)o+=`{${e-1}}`+t[e];return d(o,...r)}o=t.message,r=o,t.comment&&t.comment.length>0&&(r+=`/${Array.isArray(t.comment)?t.comment.join(""):t.comment}`),n=t.args??{}}const i=a?.[r];return i?"string"==typeof i?g(i,n):i.comment?g(i.message,n):g(o,n):g(o,n)}var y=/{([^}]+)}/g;function g(e,t){return 0===Object.keys(t).length?e:e.replace(y,((e,r)=>t[r]??e))}function b(e){return!("object"!=typeof e?.contents?.bundle||"string"!=typeof e?.version)}},5474:function(e,t,r){var o,n=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||(o=function(e){return o=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t},o(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r=o(e),s=0;s<r.length;s++)"default"!==r[s]&&n(t,e,r[s]);return i(t,e),t});Object.defineProperty(t,"__esModule",{value:!0});const c=s(r(5747));!async function(){const e=[],t=process.env.VSCODE_L10N_BUNDLE_LOCATION;if(t)try{await c.config({uri:t}),e.push(`l10n: Configured to ${t.toString()}`)}catch(r){e.push(`l10n: Problems loading ${t.toString()} : ${r}`)}await Promise.all([r.e(875),r.e(774)]).then(r.t.bind(r,6774,23)),e.forEach(console.log)}()},2613:e=>{e.exports=require("assert")},5317:e=>{e.exports=require("child_process")},6982:e=>{e.exports=require("crypto")},4434:e=>{e.exports=require("events")},9896:e=>{e.exports=require("fs")},1943:e=>{e.exports=require("fs/promises")},8611:e=>{e.exports=require("http")},5692:e=>{e.exports=require("https")},9278:e=>{e.exports=require("net")},7975:e=>{e.exports=require("node:util")},857:e=>{e.exports=require("os")},6928:e=>{e.exports=require("path")},4756:e=>{e.exports=require("tls")},7016:e=>{e.exports=require("url")},9023:e=>{e.exports=require("util")},3106:e=>{e.exports=require("zlib")}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e].call(r.exports,r,r.exports,i),r.exports}i.m=o,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var n=Object.create(null);i.r(n);var s={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>s[e]=()=>r[e]));return s.default=()=>r,i.d(n,s),n},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+".jsonServerMain.js",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r={606:1},i.f.require=(e,t)=>{r[e]||(e=>{var t=e.modules,o=e.ids,n=e.runtime;for(var s in t)i.o(t,s)&&(i.m[s]=t[s]);n&&n(i);for(var c=0;c<o.length;c++)r[o[c]]=1})(require("./"+i.u(e)))};var s=i(5474),c=exports;for(var u in s)c[u]=s[u];s.__esModule&&Object.defineProperty(c,"__esModule",{value:!0})})();
//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/e54c774e0add60467559eb0d1e229c6452cf8447/extensions/json-language-features/server/dist/node/jsonServerMain.js.map