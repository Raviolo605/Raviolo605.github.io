import{e as q,f as z,g as $}from"./react-X-gJ4u2N.js";var x={exports:{}},R={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k;function F(){if(k)return R;k=1;var n=q(),s=Symbol.for("react.element"),f=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,m=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function S(l,u,c){var r,e={},t=null,o=null;c!==void 0&&(t=""+c),u.key!==void 0&&(t=""+u.key),u.ref!==void 0&&(o=u.ref);for(r in u)v.call(u,r)&&!_.hasOwnProperty(r)&&(e[r]=u[r]);if(l&&l.defaultProps)for(r in u=l.defaultProps,u)e[r]===void 0&&(e[r]=u[r]);return{$$typeof:s,type:l,key:t,ref:o,props:e,_owner:m.current}}return R.Fragment=f,R.jsx=S,R.jsxs=S,R}var W;function N(){return W||(W=1,x.exports=F()),x.exports}var ee=N(),b={},J;function A(){if(J)return b;J=1;var n=z();return b.createRoot=n.createRoot,b.hydrateRoot=n.hydrateRoot,b}var G=A();const te=$(G);var w={exports:{}},j={},O={exports:{}},g={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L;function B(){if(L)return g;L=1;var n=q();function s(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var f=typeof Object.is=="function"?Object.is:s,v=n.useState,m=n.useEffect,_=n.useLayoutEffect,S=n.useDebugValue;function l(e,t){var o=t(),a=v({inst:{value:o,getSnapshot:t}}),i=a[0].inst,p=a[1];return _(function(){i.value=o,i.getSnapshot=t,u(i)&&p({inst:i})},[e,o,t]),m(function(){return u(i)&&p({inst:i}),e(function(){u(i)&&p({inst:i})})},[e]),S(o),o}function u(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!f(e,o)}catch{return!0}}function c(e,t){return t()}var r=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:l;return g.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:r,g}var P;function Y(){return P||(P=1,O.exports=B()),O.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T;function H(){if(T)return j;T=1;var n=q(),s=Y();function f(c,r){return c===r&&(c!==0||1/c===1/r)||c!==c&&r!==r}var v=typeof Object.is=="function"?Object.is:f,m=s.useSyncExternalStore,_=n.useRef,S=n.useEffect,l=n.useMemo,u=n.useDebugValue;return j.useSyncExternalStoreWithSelector=function(c,r,e,t,o){var a=_(null);if(a.current===null){var i={hasValue:!1,value:null};a.current=i}else i=a.current;a=l(function(){function D(d){if(!I){if(I=!0,h=d,d=t(d),o!==void 0&&i.hasValue){var y=i.value;if(o(y,d))return E=y}return E=d}if(y=E,v(h,d))return y;var V=t(d);return o!==void 0&&o(y,V)?(h=d,y):(h=d,E=V)}var I=!1,h,E,C=e===void 0?null:e;return[function(){return D(r())},C===null?void 0:function(){return D(C())}]},[r,e,t,o]);var p=m(c,a[0],a[1]);return S(function(){i.hasValue=!0,i.value=p},[p]),u(p),p},j}var U;function K(){return U||(U=1,w.exports=H()),w.exports}var Q=K();const re=$(Q),X={},M=n=>{let s;const f=new Set,v=(r,e)=>{const t=typeof r=="function"?r(s):r;if(!Object.is(t,s)){const o=s;s=e??(typeof t!="object"||t===null)?t:Object.assign({},s,t),f.forEach(a=>a(s,o))}},m=()=>s,u={setState:v,getState:m,getInitialState:()=>c,subscribe:r=>(f.add(r),()=>f.delete(r)),destroy:()=>{(X?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),f.clear()}},c=s=n(v,m,u);return u},ne=n=>n?M(n):M;export{te as R,ne as c,ee as j,re as u};
