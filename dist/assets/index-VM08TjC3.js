function fh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dh={exports:{}},Sl={},ph={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=Symbol.for("react.element"),o0=Symbol.for("react.portal"),l0=Symbol.for("react.fragment"),s0=Symbol.for("react.strict_mode"),u0=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),f0=Symbol.for("react.context"),d0=Symbol.for("react.forward_ref"),p0=Symbol.for("react.suspense"),h0=Symbol.for("react.memo"),m0=Symbol.for("react.lazy"),Hf=Symbol.iterator;function v0(e){return e===null||typeof e!="object"?null:(e=Hf&&e[Hf]||e["@@iterator"],typeof e=="function"?e:null)}var hh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mh=Object.assign,vh={};function sa(e,t,n){this.props=e,this.context=t,this.refs=vh,this.updater=n||hh}sa.prototype.isReactComponent={};sa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gh(){}gh.prototype=sa.prototype;function hc(e,t,n){this.props=e,this.context=t,this.refs=vh,this.updater=n||hh}var mc=hc.prototype=new gh;mc.constructor=hc;mh(mc,sa.prototype);mc.isPureReactComponent=!0;var Vf=Array.isArray,yh=Object.prototype.hasOwnProperty,vc={current:null},xh={key:!0,ref:!0,__self:!0,__source:!0};function wh(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)yh.call(t,r)&&!xh.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:ji,type:e,key:i,ref:o,props:a,_owner:vc.current}}function g0(e,t){return{$$typeof:ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gc(e){return typeof e=="object"&&e!==null&&e.$$typeof===ji}function y0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wf=/\/+/g;function ns(e,t){return typeof e=="object"&&e!==null&&e.key!=null?y0(""+e.key):t.toString(36)}function ko(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ji:case o0:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+ns(o,0):r,Vf(a)?(n="",e!=null&&(n=e.replace(Wf,"$&/")+"/"),ko(a,t,n,"",function(u){return u})):a!=null&&(gc(a)&&(a=g0(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Wf,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Vf(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+ns(i,l);o+=ko(i,t,n,s,a)}else if(s=v0(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+ns(i,l++),o+=ko(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Hi(e,t,n){if(e==null)return e;var r=[],a=0;return ko(e,r,"","",function(i){return t.call(n,i,a++)}),r}function x0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Eo={transition:null},w0={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:vc};J.Children={map:Hi,forEach:function(e,t,n){Hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hi(e,function(){t++}),t},toArray:function(e){return Hi(e,function(t){return t})||[]},only:function(e){if(!gc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=sa;J.Fragment=l0;J.Profiler=u0;J.PureComponent=hc;J.StrictMode=s0;J.Suspense=p0;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mh({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=vc.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)yh.call(t,s)&&!xh.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ji,type:e.type,key:a,ref:i,props:r,_owner:o}};J.createContext=function(e){return e={$$typeof:f0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:c0,_context:e},e.Consumer=e};J.createElement=wh;J.createFactory=function(e){var t=wh.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:d0,render:e}};J.isValidElement=gc;J.lazy=function(e){return{$$typeof:m0,_payload:{_status:-1,_result:e},_init:x0}};J.memo=function(e,t){return{$$typeof:h0,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=t}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(e,t){return Ze.current.useCallback(e,t)};J.useContext=function(e){return Ze.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};J.useEffect=function(e,t){return Ze.current.useEffect(e,t)};J.useId=function(){return Ze.current.useId()};J.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Ze.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};J.useRef=function(e){return Ze.current.useRef(e)};J.useState=function(e){return Ze.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Ze.current.useTransition()};J.version="18.2.0";ph.exports=J;var j=ph.exports;const pt=pc(j),S0=fh({__proto__:null,default:pt},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0=j,E0=Symbol.for("react.element"),C0=Symbol.for("react.fragment"),b0=Object.prototype.hasOwnProperty,P0=k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j0={key:!0,ref:!0,__self:!0,__source:!0};function Sh(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)b0.call(t,r)&&!j0.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:E0,type:e,key:i,ref:o,props:a,_owner:P0.current}}Sl.Fragment=C0;Sl.jsx=Sh;Sl.jsxs=Sh;dh.exports=Sl;var f=dh.exports,Ws={},kh={exports:{}},gt={},Eh={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,F){var B=I.length;I.push(F);e:for(;0<B;){var K=B-1>>>1,ee=I[K];if(0<a(ee,F))I[K]=F,I[B]=ee,B=K;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var F=I[0],B=I.pop();if(B!==F){I[0]=B;e:for(var K=0,ee=I.length,st=ee>>>1;K<st;){var Ce=2*(K+1)-1,We=I[Ce],be=Ce+1,ut=I[be];if(0>a(We,B))be<ee&&0>a(ut,We)?(I[K]=ut,I[be]=B,K=be):(I[K]=We,I[Ce]=B,K=Ce);else if(be<ee&&0>a(ut,B))I[K]=ut,I[be]=B,K=be;else break e}}return F}function a(I,F){var B=I.sortIndex-F.sortIndex;return B!==0?B:I.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,d=null,v=3,y=!1,S=!1,x=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=I)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function w(I){if(x=!1,h(I),!S)if(n(s)!==null)S=!0,wt(P);else{var F=n(u);F!==null&&ae(w,F.startTime-I)}}function P(I,F){S=!1,x&&(x=!1,m(R),R=-1),y=!0;var B=v;try{for(h(F),d=n(s);d!==null&&(!(d.expirationTime>F)||I&&!q());){var K=d.callback;if(typeof K=="function"){d.callback=null,v=d.priorityLevel;var ee=K(d.expirationTime<=F);F=e.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(s)&&r(s),h(F)}else r(s);d=n(s)}if(d!==null)var st=!0;else{var Ce=n(u);Ce!==null&&ae(w,Ce.startTime-F),st=!1}return st}finally{d=null,v=B,y=!1}}var g=!1,C=null,R=-1,O=5,$=-1;function q(){return!(e.unstable_now()-$<O)}function ve(){if(C!==null){var I=e.unstable_now();$=I;var F=!0;try{F=C(!0,I)}finally{F?he():(g=!1,C=null)}}else g=!1}var he;if(typeof p=="function")he=function(){p(ve)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Ft=Ve.port2;Ve.port1.onmessage=ve,he=function(){Ft.postMessage(null)}}else he=function(){k(ve,0)};function wt(I){C=I,g||(g=!0,he())}function ae(I,F){R=k(function(){I(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,wt(P))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(I){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var B=v;v=F;try{return I()}finally{v=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,F){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=v;v=I;try{return F()}finally{v=B}},e.unstable_scheduleCallback=function(I,F,B){var K=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?K+B:K):B=K,I){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=B+ee,I={id:c++,callback:F,priorityLevel:I,startTime:B,expirationTime:ee,sortIndex:-1},B>K?(I.sortIndex=B,t(u,I),n(s)===null&&I===n(u)&&(x?(m(R),R=-1):x=!0,ae(w,B-K))):(I.sortIndex=ee,t(s,I),S||y||(S=!0,wt(P))),I},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(I){var F=v;return function(){var B=v;v=F;try{return I.apply(this,arguments)}finally{v=B}}}})(Ch);Eh.exports=Ch;var _0=Eh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh=j,vt=_0;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ph=new Set,Za={};function mr(e,t){Gr(e,t),Gr(e+"Capture",t)}function Gr(e,t){for(Za[e]=t,e=0;e<t.length;e++)Ph.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ys=Object.prototype.hasOwnProperty,N0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yf={},Qf={};function R0(e){return Ys.call(Qf,e)?!0:Ys.call(Yf,e)?!1:N0.test(e)?Qf[e]=!0:(Yf[e]=!0,!1)}function T0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function O0(e,t,n,r){if(t===null||typeof t>"u"||T0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var yc=/[\-:]([a-z])/g;function xc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yc,xc);He[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yc,xc);He[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yc,xc);He[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function wc(e,t,n,r){var a=He.hasOwnProperty(t)?He[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(O0(t,n,a,r)&&(n=null),r||a===null?R0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),Qs=Symbol.for("react.profiler"),jh=Symbol.for("react.provider"),_h=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),Gs=Symbol.for("react.suspense"),Ks=Symbol.for("react.suspense_list"),Ec=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),Nh=Symbol.for("react.offscreen"),Gf=Symbol.iterator;function wa(e){return e===null||typeof e!="object"?null:(e=Gf&&e[Gf]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,rs;function Aa(e){if(rs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rs=t&&t[1]||""}return`
`+rs+e}var as=!1;function is(e,t){if(!e||as)return"";as=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{as=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Aa(e):""}function A0(e){switch(e.tag){case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return e=is(e.type,!1),e;case 11:return e=is(e.type.render,!1),e;case 1:return e=is(e.type,!0),e;default:return""}}function Xs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case Er:return"Portal";case Qs:return"Profiler";case Sc:return"StrictMode";case Gs:return"Suspense";case Ks:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _h:return(e.displayName||"Context")+".Consumer";case jh:return(e._context.displayName||"Context")+".Provider";case kc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ec:return t=e.displayName||null,t!==null?t:Xs(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return Xs(e(t))}catch{}}return null}function I0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xs(t);case 8:return t===Sc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ln(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function L0(e){var t=Rh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wi(e){e._valueTracker||(e._valueTracker=L0(e))}function Th(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qs(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ln(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oh(e,t){t=t.checked,t!=null&&wc(e,"checked",t,!1)}function Js(e,t){Oh(e,t);var n=Ln(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zs(e,t.type,Ln(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zs(e,t,n){(t!=="number"||Bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ia=Array.isArray;function Ur(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ln(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function eu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Ia(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ln(n)}}function Ah(e,t){var n=Ln(t.value),r=Ln(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ih(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ih(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yi,Lh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yi=Yi||document.createElement("div"),Yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z0=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(e){z0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fa[t]=Fa[e]})});function zh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fa.hasOwnProperty(e)&&Fa[e]?(""+t).trim():t+"px"}function Mh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=zh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var M0=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(e,t){if(t){if(M0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function Cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var iu=null,Br=null,Hr=null;function Zf(e){if(e=Ri(e)){if(typeof iu!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Pl(t),iu(e.stateNode,e.type,t))}}function Dh(e){Br?Hr?Hr.push(e):Hr=[e]:Br=e}function Fh(){if(Br){var e=Br,t=Hr;if(Hr=Br=null,Zf(e),t)for(e=0;e<t.length;e++)Zf(t[e])}}function $h(e,t){return e(t)}function Uh(){}var os=!1;function Bh(e,t,n){if(os)return e(t,n);os=!0;try{return $h(e,t,n)}finally{os=!1,(Br!==null||Hr!==null)&&(Uh(),Fh())}}function ti(e,t){var n=e.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ou=!1;if(tn)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{ou=!1}function D0(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var $a=!1,Ho=null,Vo=!1,lu=null,F0={onError:function(e){$a=!0,Ho=e}};function $0(e,t,n,r,a,i,o,l,s){$a=!1,Ho=null,D0.apply(F0,arguments)}function U0(e,t,n,r,a,i,o,l,s){if($0.apply(this,arguments),$a){if($a){var u=Ho;$a=!1,Ho=null}else throw Error(N(198));Vo||(Vo=!0,lu=u)}}function vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ed(e){if(vr(e)!==e)throw Error(N(188))}function B0(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return ed(a),e;if(i===r)return ed(a),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Vh(e){return e=B0(e),e!==null?Wh(e):null}function Wh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wh(e);if(t!==null)return t;e=e.sibling}return null}var Yh=vt.unstable_scheduleCallback,td=vt.unstable_cancelCallback,H0=vt.unstable_shouldYield,V0=vt.unstable_requestPaint,je=vt.unstable_now,W0=vt.unstable_getCurrentPriorityLevel,bc=vt.unstable_ImmediatePriority,Qh=vt.unstable_UserBlockingPriority,Wo=vt.unstable_NormalPriority,Y0=vt.unstable_LowPriority,Gh=vt.unstable_IdlePriority,kl=null,Wt=null;function Q0(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:X0,G0=Math.log,K0=Math.LN2;function X0(e){return e>>>=0,e===0?32:31-(G0(e)/K0|0)|0}var Qi=64,Gi=4194304;function La(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=La(l):(i&=o,i!==0&&(r=La(i)))}else o=n&~a,o!==0?r=La(o):i!==0&&(r=La(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),a=1<<n,r|=e[n],t&=~a;return r}function q0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Lt(i),l=1<<o,s=a[o];s===-1?(!(l&n)||l&r)&&(a[o]=q0(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kh(){var e=Qi;return Qi<<=1,!(Qi&4194240)&&(Qi=64),e}function ls(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function Z0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Lt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Pc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ie=0;function Xh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qh,jc,Jh,Zh,em,uu=!1,Ki=[],Pn=null,jn=null,_n=null,ni=new Map,ri=new Map,Sn=[],e1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nd(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ri.delete(t.pointerId)}}function ka(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ri(t),t!==null&&jc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function t1(e,t,n,r,a){switch(t){case"focusin":return Pn=ka(Pn,e,t,n,r,a),!0;case"dragenter":return jn=ka(jn,e,t,n,r,a),!0;case"mouseover":return _n=ka(_n,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return ni.set(i,ka(ni.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,ri.set(i,ka(ri.get(i)||null,e,t,n,r,a)),!0}return!1}function tm(e){var t=Xn(e.target);if(t!==null){var n=vr(t);if(n!==null){if(t=n.tag,t===13){if(t=Hh(n),t!==null){e.blockedOn=t,em(e.priority,function(){Jh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);au=r,n.target.dispatchEvent(r),au=null}else return t=Ri(n),t!==null&&jc(t),e.blockedOn=n,!1;t.shift()}return!0}function rd(e,t,n){Co(e)&&n.delete(t)}function n1(){uu=!1,Pn!==null&&Co(Pn)&&(Pn=null),jn!==null&&Co(jn)&&(jn=null),_n!==null&&Co(_n)&&(_n=null),ni.forEach(rd),ri.forEach(rd)}function Ea(e,t){e.blockedOn===t&&(e.blockedOn=null,uu||(uu=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,n1)))}function ai(e){function t(a){return Ea(a,e)}if(0<Ki.length){Ea(Ki[0],e);for(var n=1;n<Ki.length;n++){var r=Ki[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Ea(Pn,e),jn!==null&&Ea(jn,e),_n!==null&&Ea(_n,e),ni.forEach(t),ri.forEach(t),n=0;n<Sn.length;n++)r=Sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)tm(n),n.blockedOn===null&&Sn.shift()}var Vr=un.ReactCurrentBatchConfig,Qo=!0;function r1(e,t,n,r){var a=ie,i=Vr.transition;Vr.transition=null;try{ie=1,_c(e,t,n,r)}finally{ie=a,Vr.transition=i}}function a1(e,t,n,r){var a=ie,i=Vr.transition;Vr.transition=null;try{ie=4,_c(e,t,n,r)}finally{ie=a,Vr.transition=i}}function _c(e,t,n,r){if(Qo){var a=cu(e,t,n,r);if(a===null)gs(e,t,r,Go,n),nd(e,r);else if(t1(a,e,t,n,r))r.stopPropagation();else if(nd(e,r),t&4&&-1<e1.indexOf(e)){for(;a!==null;){var i=Ri(a);if(i!==null&&qh(i),i=cu(e,t,n,r),i===null&&gs(e,t,r,Go,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else gs(e,t,r,null,n)}}var Go=null;function cu(e,t,n,r){if(Go=null,e=Cc(r),e=Xn(e),e!==null)if(t=vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Go=e,null}function nm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W0()){case bc:return 1;case Qh:return 4;case Wo:case Y0:return 16;case Gh:return 536870912;default:return 16}default:return 16}}var En=null,Nc=null,bo=null;function rm(){if(bo)return bo;var e,t=Nc,n=t.length,r,a="value"in En?En.value:En.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return bo=a.slice(e,1<r?1-r:void 0)}function Po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function ad(){return!1}function yt(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xi:ad,this.isPropagationStopped=ad,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rc=yt(ua),Ni=xe({},ua,{view:0,detail:0}),i1=yt(Ni),ss,us,Ca,El=xe({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ca&&(Ca&&e.type==="mousemove"?(ss=e.screenX-Ca.screenX,us=e.screenY-Ca.screenY):us=ss=0,Ca=e),ss)},movementY:function(e){return"movementY"in e?e.movementY:us}}),id=yt(El),o1=xe({},El,{dataTransfer:0}),l1=yt(o1),s1=xe({},Ni,{relatedTarget:0}),cs=yt(s1),u1=xe({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),c1=yt(u1),f1=xe({},ua,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),d1=yt(f1),p1=xe({},ua,{data:0}),od=yt(p1),h1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=v1[e])?!!t[e]:!1}function Tc(){return g1}var y1=xe({},Ni,{key:function(e){if(e.key){var t=h1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?m1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),x1=yt(y1),w1=xe({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=yt(w1),S1=xe({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),k1=yt(S1),E1=xe({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),C1=yt(E1),b1=xe({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),P1=yt(b1),j1=[9,13,27,32],Oc=tn&&"CompositionEvent"in window,Ua=null;tn&&"documentMode"in document&&(Ua=document.documentMode);var _1=tn&&"TextEvent"in window&&!Ua,am=tn&&(!Oc||Ua&&8<Ua&&11>=Ua),sd=" ",ud=!1;function im(e,t){switch(e){case"keyup":return j1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function N1(e,t){switch(e){case"compositionend":return om(t);case"keypress":return t.which!==32?null:(ud=!0,sd);case"textInput":return e=t.data,e===sd&&ud?null:e;default:return null}}function R1(e,t){if(br)return e==="compositionend"||!Oc&&im(e,t)?(e=rm(),bo=Nc=En=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return am&&t.locale!=="ko"?null:t.data;default:return null}}var T1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!T1[e.type]:t==="textarea"}function lm(e,t,n,r){Dh(r),t=Ko(t,"onChange"),0<t.length&&(n=new Rc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ba=null,ii=null;function O1(e){ym(e,0)}function Cl(e){var t=_r(e);if(Th(t))return e}function A1(e,t){if(e==="change")return t}var sm=!1;if(tn){var fs;if(tn){var ds="oninput"in document;if(!ds){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),ds=typeof fd.oninput=="function"}fs=ds}else fs=!1;sm=fs&&(!document.documentMode||9<document.documentMode)}function dd(){Ba&&(Ba.detachEvent("onpropertychange",um),ii=Ba=null)}function um(e){if(e.propertyName==="value"&&Cl(ii)){var t=[];lm(t,ii,e,Cc(e)),Bh(O1,t)}}function I1(e,t,n){e==="focusin"?(dd(),Ba=t,ii=n,Ba.attachEvent("onpropertychange",um)):e==="focusout"&&dd()}function L1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(ii)}function z1(e,t){if(e==="click")return Cl(t)}function M1(e,t){if(e==="input"||e==="change")return Cl(t)}function D1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:D1;function oi(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Ys.call(t,a)||!Dt(e[a],t[a]))return!1}return!0}function pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hd(e,t){var n=pd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pd(n)}}function cm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fm(){for(var e=window,t=Bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bo(e.document)}return t}function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function F1(e){var t=fm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cm(n.ownerDocument.documentElement,n)){if(r!==null&&Ac(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=hd(n,i);var o=hd(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $1=tn&&"documentMode"in document&&11>=document.documentMode,Pr=null,fu=null,Ha=null,du=!1;function md(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||Pr==null||Pr!==Bo(r)||(r=Pr,"selectionStart"in r&&Ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ha&&oi(Ha,r)||(Ha=r,r=Ko(fu,"onSelect"),0<r.length&&(t=new Rc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jr={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},ps={},dm={};tn&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function bl(e){if(ps[e])return ps[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dm)return ps[e]=t[n];return e}var pm=bl("animationend"),hm=bl("animationiteration"),mm=bl("animationstart"),vm=bl("transitionend"),gm=new Map,vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){gm.set(e,t),mr(t,[e])}for(var hs=0;hs<vd.length;hs++){var ms=vd[hs],U1=ms.toLowerCase(),B1=ms[0].toUpperCase()+ms.slice(1);$n(U1,"on"+B1)}$n(pm,"onAnimationEnd");$n(hm,"onAnimationIteration");$n(mm,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(vm,"onTransitionEnd");Gr("onMouseEnter",["mouseout","mouseover"]);Gr("onMouseLeave",["mouseout","mouseover"]);Gr("onPointerEnter",["pointerout","pointerover"]);Gr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H1=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function gd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,U0(r,t,void 0,e),e.currentTarget=null}function ym(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;gd(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;gd(a,l,u),i=s}}}if(Vo)throw e=lu,Vo=!1,lu=null,e}function ue(e,t){var n=t[gu];n===void 0&&(n=t[gu]=new Set);var r=e+"__bubble";n.has(r)||(xm(t,e,2,!1),n.add(r))}function vs(e,t,n){var r=0;t&&(r|=4),xm(n,e,r,t)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function li(e){if(!e[Ji]){e[Ji]=!0,Ph.forEach(function(n){n!=="selectionchange"&&(H1.has(n)||vs(n,!1,e),vs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ji]||(t[Ji]=!0,vs("selectionchange",!1,t))}}function xm(e,t,n,r){switch(nm(t)){case 1:var a=r1;break;case 4:a=a1;break;default:a=_c}n=a.bind(null,t,n,e),a=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function gs(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=Xn(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Bh(function(){var u=i,c=Cc(n),d=[];e:{var v=gm.get(e);if(v!==void 0){var y=Rc,S=e;switch(e){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":y=x1;break;case"focusin":S="focus",y=cs;break;case"focusout":S="blur",y=cs;break;case"beforeblur":case"afterblur":y=cs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=l1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=k1;break;case pm:case hm:case mm:y=c1;break;case vm:y=C1;break;case"scroll":y=i1;break;case"wheel":y=P1;break;case"copy":case"cut":case"paste":y=d1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ld}var x=(t&4)!==0,k=!x&&e==="scroll",m=x?v!==null?v+"Capture":null:v;x=[];for(var p=u,h;p!==null;){h=p;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,m!==null&&(w=ti(p,m),w!=null&&x.push(si(p,w,h)))),k)break;p=p.return}0<x.length&&(v=new y(v,S,null,n,c),d.push({event:v,listeners:x}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&n!==au&&(S=n.relatedTarget||n.fromElement)&&(Xn(S)||S[nn]))break e;if((y||v)&&(v=c.window===c?c:(v=c.ownerDocument)?v.defaultView||v.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=u,S=S?Xn(S):null,S!==null&&(k=vr(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=u),y!==S)){if(x=id,w="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=ld,w="onPointerLeave",m="onPointerEnter",p="pointer"),k=y==null?v:_r(y),h=S==null?v:_r(S),v=new x(w,p+"leave",y,n,c),v.target=k,v.relatedTarget=h,w=null,Xn(c)===u&&(x=new x(m,p+"enter",S,n,c),x.target=h,x.relatedTarget=k,w=x),k=w,y&&S)t:{for(x=y,m=S,p=0,h=x;h;h=wr(h))p++;for(h=0,w=m;w;w=wr(w))h++;for(;0<p-h;)x=wr(x),p--;for(;0<h-p;)m=wr(m),h--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break t;x=wr(x),m=wr(m)}x=null}else x=null;y!==null&&yd(d,v,y,x,!1),S!==null&&k!==null&&yd(d,k,S,x,!0)}}e:{if(v=u?_r(u):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var P=A1;else if(cd(v))if(sm)P=M1;else{P=L1;var g=I1}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(P=z1);if(P&&(P=P(e,u))){lm(d,P,n,c);break e}g&&g(e,v,u),e==="focusout"&&(g=v._wrapperState)&&g.controlled&&v.type==="number"&&Zs(v,"number",v.value)}switch(g=u?_r(u):window,e){case"focusin":(cd(g)||g.contentEditable==="true")&&(Pr=g,fu=u,Ha=null);break;case"focusout":Ha=fu=Pr=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,md(d,n,c);break;case"selectionchange":if($1)break;case"keydown":case"keyup":md(d,n,c)}var C;if(Oc)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else br?im(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(am&&n.locale!=="ko"&&(br||R!=="onCompositionStart"?R==="onCompositionEnd"&&br&&(C=rm()):(En=c,Nc="value"in En?En.value:En.textContent,br=!0)),g=Ko(u,R),0<g.length&&(R=new od(R,e,null,n,c),d.push({event:R,listeners:g}),C?R.data=C:(C=om(n),C!==null&&(R.data=C)))),(C=_1?N1(e,n):R1(e,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(c=new od("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}ym(d,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ti(e,n),i!=null&&r.unshift(si(e,i,a)),i=ti(e,t),i!=null&&r.push(si(e,i,a))),e=e.return}return r}function wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yd(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=ti(n,i),s!=null&&o.unshift(si(n,s,l))):a||(s=ti(n,i),s!=null&&o.push(si(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var V1=/\r\n?/g,W1=/\u0000|\uFFFD/g;function xd(e){return(typeof e=="string"?e:""+e).replace(V1,`
`).replace(W1,"")}function Zi(e,t,n){if(t=xd(t),xd(e)!==t&&n)throw Error(N(425))}function Xo(){}var pu=null,hu=null;function mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0,wd=typeof Promise=="function"?Promise:void 0,Q1=typeof queueMicrotask=="function"?queueMicrotask:typeof wd<"u"?function(e){return wd.resolve(null).then(e).catch(G1)}:vu;function G1(e){setTimeout(function(){throw e})}function ys(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),ai(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);ai(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ca=Math.random().toString(36).slice(2),Ht="__reactFiber$"+ca,ui="__reactProps$"+ca,nn="__reactContainer$"+ca,gu="__reactEvents$"+ca,K1="__reactListeners$"+ca,X1="__reactHandles$"+ca;function Xn(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sd(e);e!==null;){if(n=e[Ht])return n;e=Sd(e)}return t}e=n,n=e.parentNode}return null}function Ri(e){return e=e[Ht]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Pl(e){return e[ui]||null}var yu=[],Nr=-1;function Un(e){return{current:e}}function de(e){0>Nr||(e.current=yu[Nr],yu[Nr]=null,Nr--)}function se(e,t){Nr++,yu[Nr]=e.current,e.current=t}var zn={},Xe=Un(zn),it=Un(!1),lr=zn;function Kr(e,t){var n=e.type.contextTypes;if(!n)return zn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ot(e){return e=e.childContextTypes,e!=null}function qo(){de(it),de(Xe)}function kd(e,t,n){if(Xe.current!==zn)throw Error(N(168));se(Xe,t),se(it,n)}function wm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(N(108,I0(e)||"Unknown",a));return xe({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,lr=Xe.current,se(Xe,e),se(it,it.current),!0}function Ed(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=wm(e,t,lr),r.__reactInternalMemoizedMergedChildContext=e,de(it),de(Xe),se(Xe,e)):de(it),se(it,n)}var Xt=null,jl=!1,xs=!1;function Sm(e){Xt===null?Xt=[e]:Xt.push(e)}function q1(e){jl=!0,Sm(e)}function Bn(){if(!xs&&Xt!==null){xs=!0;var e=0,t=ie;try{var n=Xt;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xt=null,jl=!1}catch(a){throw Xt!==null&&(Xt=Xt.slice(e+1)),Yh(bc,Bn),a}finally{ie=t,xs=!1}}return null}var Rr=[],Tr=0,Zo=null,el=0,kt=[],Et=0,sr=null,qt=1,Jt="";function Gn(e,t){Rr[Tr++]=el,Rr[Tr++]=Zo,Zo=e,el=t}function km(e,t,n){kt[Et++]=qt,kt[Et++]=Jt,kt[Et++]=sr,sr=e;var r=qt;e=Jt;var a=32-Lt(r)-1;r&=~(1<<a),n+=1;var i=32-Lt(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,qt=1<<32-Lt(t)+a|n<<a|r,Jt=i+e}else qt=1<<i|n<<a|r,Jt=e}function Ic(e){e.return!==null&&(Gn(e,1),km(e,1,0))}function Lc(e){for(;e===Zo;)Zo=Rr[--Tr],Rr[Tr]=null,el=Rr[--Tr],Rr[Tr]=null;for(;e===sr;)sr=kt[--Et],kt[Et]=null,Jt=kt[--Et],kt[Et]=null,qt=kt[--Et],kt[Et]=null}var mt=null,ht=null,me=!1,At=null;function Em(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mt=e,ht=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mt=e,ht=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sr!==null?{id:qt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,mt=e,ht=null,!0):!1;default:return!1}}function xu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wu(e){if(me){var t=ht;if(t){var n=t;if(!Cd(e,t)){if(xu(e))throw Error(N(418));t=Nn(n.nextSibling);var r=mt;t&&Cd(e,t)?Em(r,n):(e.flags=e.flags&-4097|2,me=!1,mt=e)}}else{if(xu(e))throw Error(N(418));e.flags=e.flags&-4097|2,me=!1,mt=e}}}function bd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function eo(e){if(e!==mt)return!1;if(!me)return bd(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!mu(e.type,e.memoizedProps)),t&&(t=ht)){if(xu(e))throw Cm(),Error(N(418));for(;t;)Em(e,t),t=Nn(t.nextSibling)}if(bd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ht=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ht=null}}else ht=mt?Nn(e.stateNode.nextSibling):null;return!0}function Cm(){for(var e=ht;e;)e=Nn(e.nextSibling)}function Xr(){ht=mt=null,me=!1}function zc(e){At===null?At=[e]:At.push(e)}var J1=un.ReactCurrentBatchConfig;function Rt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var tl=Un(null),nl=null,Or=null,Mc=null;function Dc(){Mc=Or=nl=null}function Fc(e){var t=tl.current;de(tl),e._currentValue=t}function Su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wr(e,t){nl=e,Mc=Or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(Mc!==e)if(e={context:e,memoizedValue:t,next:null},Or===null){if(nl===null)throw Error(N(308));Or=e,nl.dependencies={lanes:0,firstContext:e}}else Or=Or.next=e;return t}var qn=null;function $c(e){qn===null?qn=[e]:qn.push(e)}function bm(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,$c(t)):(n.next=a.next,a.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function Uc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,rn(e,n)}return a=r.interleaved,a===null?(t.next=t,$c(r)):(t.next=a.next,a.next=t),r.interleaved=t,rn(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pc(e,n)}}function Pd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var a=e.updateQueue;wn=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var d=a.baseState;o=0,c=u=s=null,l=i;do{var v=l.lane,y=l.eventTime;if((r&v)===v){c!==null&&(c=c.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,x=l;switch(v=t,y=n,x.tag){case 1:if(S=x.payload,typeof S=="function"){d=S.call(y,d,v);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,v=typeof S=="function"?S.call(y,d,v):S,v==null)break e;d=xe({},d,v);break e;case 2:wn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=a.effects,v===null?a.effects=[l]:v.push(l))}else y={eventTime:y,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=y,s=d):c=c.next=y,o|=v;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;v=l,l=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);if(c===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);cr|=o,e.lanes=o,e.memoizedState=d}}function jd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(N(191,a));a.call(r)}}}var jm=new bh.Component().refs;function ku(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _l={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),a=On(e),i=Zt(r,a);i.payload=t,n!=null&&(i.callback=n),t=Rn(e,i,a),t!==null&&(zt(t,e,a,r),jo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),a=On(e),i=Zt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Rn(e,i,a),t!==null&&(zt(t,e,a,r),jo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=On(e),a=Zt(n,r);a.tag=2,t!=null&&(a.callback=t),t=Rn(e,a,r),t!==null&&(zt(t,e,r,n),jo(t,e,r))}};function _d(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!oi(n,r)||!oi(a,i):!0}function _m(e,t,n){var r=!1,a=zn,i=t.contextType;return typeof i=="object"&&i!==null?i=Pt(i):(a=ot(t)?lr:Xe.current,r=t.contextTypes,i=(r=r!=null)?Kr(e,a):zn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Nd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_l.enqueueReplaceState(t,t.state,null)}function Eu(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=jm,Uc(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Pt(i):(i=ot(t)?lr:Xe.current,a.context=Kr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ku(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&_l.enqueueReplaceState(a,a.state,null),rl(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ba(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===jm&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rd(e){var t=e._init;return t(e._payload)}function Nm(e){function t(m,p){if(e){var h=m.deletions;h===null?(m.deletions=[p],m.flags|=16):h.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function a(m,p){return m=An(m,p),m.index=0,m.sibling=null,m}function i(m,p,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<p?(m.flags|=2,p):h):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,h,w){return p===null||p.tag!==6?(p=Ps(h,m.mode,w),p.return=m,p):(p=a(p,h),p.return=m,p)}function s(m,p,h,w){var P=h.type;return P===Cr?c(m,p,h.props.children,w,h.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xn&&Rd(P)===p.type)?(w=a(p,h.props),w.ref=ba(m,p,h),w.return=m,w):(w=Ao(h.type,h.key,h.props,null,m.mode,w),w.ref=ba(m,p,h),w.return=m,w)}function u(m,p,h,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=js(h,m.mode,w),p.return=m,p):(p=a(p,h.children||[]),p.return=m,p)}function c(m,p,h,w,P){return p===null||p.tag!==7?(p=ir(h,m.mode,w,P),p.return=m,p):(p=a(p,h),p.return=m,p)}function d(m,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ps(""+p,m.mode,h),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vi:return h=Ao(p.type,p.key,p.props,null,m.mode,h),h.ref=ba(m,null,p),h.return=m,h;case Er:return p=js(p,m.mode,h),p.return=m,p;case xn:var w=p._init;return d(m,w(p._payload),h)}if(Ia(p)||wa(p))return p=ir(p,m.mode,h,null),p.return=m,p;to(m,p)}return null}function v(m,p,h,w){var P=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:l(m,p,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vi:return h.key===P?s(m,p,h,w):null;case Er:return h.key===P?u(m,p,h,w):null;case xn:return P=h._init,v(m,p,P(h._payload),w)}if(Ia(h)||wa(h))return P!==null?null:c(m,p,h,w,null);to(m,h)}return null}function y(m,p,h,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(h)||null,l(p,m,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Vi:return m=m.get(w.key===null?h:w.key)||null,s(p,m,w,P);case Er:return m=m.get(w.key===null?h:w.key)||null,u(p,m,w,P);case xn:var g=w._init;return y(m,p,h,g(w._payload),P)}if(Ia(w)||wa(w))return m=m.get(h)||null,c(p,m,w,P,null);to(p,w)}return null}function S(m,p,h,w){for(var P=null,g=null,C=p,R=p=0,O=null;C!==null&&R<h.length;R++){C.index>R?(O=C,C=null):O=C.sibling;var $=v(m,C,h[R],w);if($===null){C===null&&(C=O);break}e&&C&&$.alternate===null&&t(m,C),p=i($,p,R),g===null?P=$:g.sibling=$,g=$,C=O}if(R===h.length)return n(m,C),me&&Gn(m,R),P;if(C===null){for(;R<h.length;R++)C=d(m,h[R],w),C!==null&&(p=i(C,p,R),g===null?P=C:g.sibling=C,g=C);return me&&Gn(m,R),P}for(C=r(m,C);R<h.length;R++)O=y(C,m,R,h[R],w),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?R:O.key),p=i(O,p,R),g===null?P=O:g.sibling=O,g=O);return e&&C.forEach(function(q){return t(m,q)}),me&&Gn(m,R),P}function x(m,p,h,w){var P=wa(h);if(typeof P!="function")throw Error(N(150));if(h=P.call(h),h==null)throw Error(N(151));for(var g=P=null,C=p,R=p=0,O=null,$=h.next();C!==null&&!$.done;R++,$=h.next()){C.index>R?(O=C,C=null):O=C.sibling;var q=v(m,C,$.value,w);if(q===null){C===null&&(C=O);break}e&&C&&q.alternate===null&&t(m,C),p=i(q,p,R),g===null?P=q:g.sibling=q,g=q,C=O}if($.done)return n(m,C),me&&Gn(m,R),P;if(C===null){for(;!$.done;R++,$=h.next())$=d(m,$.value,w),$!==null&&(p=i($,p,R),g===null?P=$:g.sibling=$,g=$);return me&&Gn(m,R),P}for(C=r(m,C);!$.done;R++,$=h.next())$=y(C,m,R,$.value,w),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?R:$.key),p=i($,p,R),g===null?P=$:g.sibling=$,g=$);return e&&C.forEach(function(ve){return t(m,ve)}),me&&Gn(m,R),P}function k(m,p,h,w){if(typeof h=="object"&&h!==null&&h.type===Cr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Vi:e:{for(var P=h.key,g=p;g!==null;){if(g.key===P){if(P=h.type,P===Cr){if(g.tag===7){n(m,g.sibling),p=a(g,h.props.children),p.return=m,m=p;break e}}else if(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===xn&&Rd(P)===g.type){n(m,g.sibling),p=a(g,h.props),p.ref=ba(m,g,h),p.return=m,m=p;break e}n(m,g);break}else t(m,g);g=g.sibling}h.type===Cr?(p=ir(h.props.children,m.mode,w,h.key),p.return=m,m=p):(w=Ao(h.type,h.key,h.props,null,m.mode,w),w.ref=ba(m,p,h),w.return=m,m=w)}return o(m);case Er:e:{for(g=h.key;p!==null;){if(p.key===g)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(m,p.sibling),p=a(p,h.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=js(h,m.mode,w),p.return=m,m=p}return o(m);case xn:return g=h._init,k(m,p,g(h._payload),w)}if(Ia(h))return S(m,p,h,w);if(wa(h))return x(m,p,h,w);to(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(m,p.sibling),p=a(p,h),p.return=m,m=p):(n(m,p),p=Ps(h,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return k}var qr=Nm(!0),Rm=Nm(!1),Ti={},Yt=Un(Ti),ci=Un(Ti),fi=Un(Ti);function Jn(e){if(e===Ti)throw Error(N(174));return e}function Bc(e,t){switch(se(fi,t),se(ci,e),se(Yt,Ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tu(t,e)}de(Yt),se(Yt,t)}function Jr(){de(Yt),de(ci),de(fi)}function Tm(e){Jn(fi.current);var t=Jn(Yt.current),n=tu(t,e.type);t!==n&&(se(ci,e),se(Yt,n))}function Hc(e){ci.current===e&&(de(Yt),de(ci))}var ge=Un(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=[];function Vc(){for(var e=0;e<ws.length;e++)ws[e]._workInProgressVersionPrimary=null;ws.length=0}var _o=un.ReactCurrentDispatcher,Ss=un.ReactCurrentBatchConfig,ur=0,ye=null,Re=null,Me=null,il=!1,Va=!1,di=0,Z1=0;function Ye(){throw Error(N(321))}function Wc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function Yc(e,t,n,r,a,i){if(ur=i,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_o.current=e===null||e.memoizedState===null?ry:ay,e=n(r,a),Va){i=0;do{if(Va=!1,di=0,25<=i)throw Error(N(301));i+=1,Me=Re=null,t.updateQueue=null,_o.current=iy,e=n(r,a)}while(Va)}if(_o.current=ol,t=Re!==null&&Re.next!==null,ur=0,Me=Re=ye=null,il=!1,t)throw Error(N(300));return e}function Qc(){var e=di!==0;return di=0,e}function Ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ye.memoizedState=Me=e:Me=Me.next=e,Me}function jt(){if(Re===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Me===null?ye.memoizedState:Me.next;if(t!==null)Me=t,Re=e;else{if(e===null)throw Error(N(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Me===null?ye.memoizedState=Me=e:Me=Me.next=e}return Me}function pi(e,t){return typeof t=="function"?t(e):t}function ks(e){var t=jt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Re,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var c=u.lane;if((ur&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,ye.lanes|=c,cr|=c}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,Dt(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ye.lanes|=i,cr|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Es(e){var t=jt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Dt(i,t.memoizedState)||(at=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Om(){}function Am(e,t){var n=ye,r=jt(),a=t(),i=!Dt(r.memoizedState,a);if(i&&(r.memoizedState=a,at=!0),r=r.queue,Gc(zm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,hi(9,Lm.bind(null,n,r,a,t),void 0,null),Fe===null)throw Error(N(349));ur&30||Im(n,t,a)}return a}function Im(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lm(e,t,n,r){t.value=n,t.getSnapshot=r,Mm(t)&&Dm(e)}function zm(e,t,n){return n(function(){Mm(t)&&Dm(e)})}function Mm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Dm(e){var t=rn(e,1);t!==null&&zt(t,e,1,-1)}function Td(e){var t=Ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},t.queue=e,e=e.dispatch=ny.bind(null,ye,e),[t.memoizedState,e]}function hi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fm(){return jt().memoizedState}function No(e,t,n,r){var a=Ut();ye.flags|=e,a.memoizedState=hi(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var a=jt();r=r===void 0?null:r;var i=void 0;if(Re!==null){var o=Re.memoizedState;if(i=o.destroy,r!==null&&Wc(r,o.deps)){a.memoizedState=hi(t,n,i,r);return}}ye.flags|=e,a.memoizedState=hi(1|t,n,i,r)}function Od(e,t){return No(8390656,8,e,t)}function Gc(e,t){return Nl(2048,8,e,t)}function $m(e,t){return Nl(4,2,e,t)}function Um(e,t){return Nl(4,4,e,t)}function Bm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hm(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,Bm.bind(null,t,e),n)}function Kc(){}function Vm(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wm(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ym(e,t,n){return ur&21?(Dt(n,t)||(n=Kh(),ye.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function ey(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=Ss.transition;Ss.transition={};try{e(!1),t()}finally{ie=n,Ss.transition=r}}function Qm(){return jt().memoizedState}function ty(e,t,n){var r=On(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gm(e))Km(t,n);else if(n=bm(e,t,n,r),n!==null){var a=Je();zt(n,e,r,a),Xm(n,t,r)}}function ny(e,t,n){var r=On(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gm(e))Km(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Dt(l,o)){var s=t.interleaved;s===null?(a.next=a,$c(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=bm(e,t,a,r),n!==null&&(a=Je(),zt(n,e,r,a),Xm(n,t,r))}}function Gm(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Km(e,t){Va=il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pc(e,n)}}var ol={readContext:Pt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},ry={readContext:Pt,useCallback:function(e,t){return Ut().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Od,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,No(4194308,4,Bm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var n=Ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ty.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Ut();return e={current:e},t.memoizedState=e},useState:Td,useDebugValue:Kc,useDeferredValue:function(e){return Ut().memoizedState=e},useTransition:function(){var e=Td(!1),t=e[0];return e=ey.bind(null,e[1]),Ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,a=Ut();if(me){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Fe===null)throw Error(N(349));ur&30||Im(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Od(zm.bind(null,r,i,e),[e]),r.flags|=2048,hi(9,Lm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ut(),t=Fe.identifierPrefix;if(me){var n=Jt,r=qt;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Z1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ay={readContext:Pt,useCallback:Vm,useContext:Pt,useEffect:Gc,useImperativeHandle:Hm,useInsertionEffect:$m,useLayoutEffect:Um,useMemo:Wm,useReducer:ks,useRef:Fm,useState:function(){return ks(pi)},useDebugValue:Kc,useDeferredValue:function(e){var t=jt();return Ym(t,Re.memoizedState,e)},useTransition:function(){var e=ks(pi)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Om,useSyncExternalStore:Am,useId:Qm,unstable_isNewReconciler:!1},iy={readContext:Pt,useCallback:Vm,useContext:Pt,useEffect:Gc,useImperativeHandle:Hm,useInsertionEffect:$m,useLayoutEffect:Um,useMemo:Wm,useReducer:Es,useRef:Fm,useState:function(){return Es(pi)},useDebugValue:Kc,useDeferredValue:function(e){var t=jt();return Re===null?t.memoizedState=e:Ym(t,Re.memoizedState,e)},useTransition:function(){var e=Es(pi)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Om,useSyncExternalStore:Am,useId:Qm,unstable_isNewReconciler:!1};function Zr(e,t){try{var n="",r=t;do n+=A0(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Cs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var oy=typeof WeakMap=="function"?WeakMap:Map;function qm(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,Iu=r),Cu(e,t)},n}function Jm(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Cu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Cu(e,t),typeof r!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ad(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new oy;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=wy.bind(null,e,t,n),t.then(e,e))}function Id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ld(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,Rn(n,t,1))),n.lanes|=1),e)}var ly=un.ReactCurrentOwner,at=!1;function qe(e,t,n,r){t.child=e===null?Rm(t,null,n,r):qr(t,e.child,n,r)}function zd(e,t,n,r,a){n=n.render;var i=t.ref;return Wr(t,a),r=Yc(e,t,n,r,i,a),n=Qc(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,an(e,t,a)):(me&&n&&Ic(t),t.flags|=1,qe(e,t,r,a),t.child)}function Md(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!rf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Zm(e,t,i,r,a)):(e=Ao(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:oi,n(o,r)&&e.ref===t.ref)return an(e,t,a)}return t.flags|=1,e=An(i,r),e.ref=t.ref,e.return=t,t.child=e}function Zm(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(oi(i,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,an(e,t,a)}return bu(e,t,n,r,a)}function ev(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Ir,dt),dt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Ir,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,se(Ir,dt),dt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,se(Ir,dt),dt|=r;return qe(e,t,a,n),t.child}function tv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bu(e,t,n,r,a){var i=ot(n)?lr:Xe.current;return i=Kr(t,i),Wr(t,a),n=Yc(e,t,n,r,i,a),r=Qc(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,an(e,t,a)):(me&&r&&Ic(t),t.flags|=1,qe(e,t,n,a),t.child)}function Dd(e,t,n,r,a){if(ot(n)){var i=!0;Jo(t)}else i=!1;if(Wr(t,a),t.stateNode===null)Ro(e,t),_m(t,n,r),Eu(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=ot(n)?lr:Xe.current,u=Kr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Nd(t,o,r,u),wn=!1;var v=t.memoizedState;o.state=v,rl(t,r,o,a),s=t.memoizedState,l!==r||v!==s||it.current||wn?(typeof c=="function"&&(ku(t,n,c,r),s=t.memoizedState),(l=wn||_d(t,n,l,r,v,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Pm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Rt(t.type,l),o.props=u,d=t.pendingProps,v=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Pt(s):(s=ot(n)?lr:Xe.current,s=Kr(t,s));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||v!==s)&&Nd(t,o,r,s),wn=!1,v=t.memoizedState,o.state=v,rl(t,r,o,a);var S=t.memoizedState;l!==d||v!==S||it.current||wn?(typeof y=="function"&&(ku(t,n,y,r),S=t.memoizedState),(u=wn||_d(t,n,u,r,v,S,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Pu(e,t,n,r,i,a)}function Pu(e,t,n,r,a,i){tv(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Ed(t,n,!1),an(e,t,i);r=t.stateNode,ly.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=qr(t,e.child,null,i),t.child=qr(t,null,l,i)):qe(e,t,l,i),t.memoizedState=r.state,a&&Ed(t,n,!0),t.child}function nv(e){var t=e.stateNode;t.pendingContext?kd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kd(e,t.context,!1),Bc(e,t.containerInfo)}function Fd(e,t,n,r,a){return Xr(),zc(a),t.flags|=256,qe(e,t,n,r),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function _u(e){return{baseLanes:e,cachePool:null,transitions:null}}function rv(e,t,n){var r=t.pendingProps,a=ge.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),se(ge,a&1),e===null)return wu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ol(o,r,0,null),e=ir(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=_u(n),t.memoizedState=ju,e):Xc(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return sy(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=An(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=An(l,i):(i=ir(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?_u(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=ju,r}return i=e.child,e=i.sibling,r=An(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xc(e,t){return t=Ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function no(e,t,n,r){return r!==null&&zc(r),qr(t,e.child,null,n),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sy(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Cs(Error(N(422))),no(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Ol({mode:"visible",children:r.children},a,0,null),i=ir(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&qr(t,e.child,null,o),t.child.memoizedState=_u(o),t.memoizedState=ju,i);if(!(t.mode&1))return no(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(N(419)),r=Cs(i,r,void 0),no(e,t,o,r)}if(l=(o&e.childLanes)!==0,at||l){if(r=Fe,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,rn(e,a),zt(r,e,a,-1))}return nf(),r=Cs(Error(N(421))),no(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Sy.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ht=Nn(a.nextSibling),mt=t,me=!0,At=null,e!==null&&(kt[Et++]=qt,kt[Et++]=Jt,kt[Et++]=sr,qt=e.id,Jt=e.overflow,sr=t),t=Xc(t,r.children),t.flags|=4096,t)}function $d(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Su(e.return,t,n)}function bs(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function av(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(qe(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$d(e,n,t);else if(e.tag===19)$d(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(ge,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&al(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),bs(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&al(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}bs(t,!0,n,null,i);break;case"together":bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uy(e,t,n){switch(t.tag){case 3:nv(t),Xr();break;case 5:Tm(t);break;case 1:ot(t.type)&&Jo(t);break;case 4:Bc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;se(tl,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?rv(e,t,n):(se(ge,ge.current&1),e=an(e,t,n),e!==null?e.sibling:null);se(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return av(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),se(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,ev(e,t,n)}return an(e,t,n)}var iv,Nu,ov,lv;iv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nu=function(){};ov=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Jn(Yt.current);var i=null;switch(n){case"input":a=qs(e,a),r=qs(e,r),i=[];break;case"select":a=xe({},a,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":a=eu(e,a),r=eu(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xo)}nu(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Za.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Za.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ue("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};lv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pa(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cy(e,t,n){var r=t.pendingProps;switch(Lc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return ot(t.type)&&qo(),Qe(t),null;case 3:return r=t.stateNode,Jr(),de(it),de(Xe),Vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,At!==null&&(Mu(At),At=null))),Nu(e,t),Qe(t),null;case 5:Hc(t);var a=Jn(fi.current);if(n=t.type,e!==null&&t.stateNode!=null)ov(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Qe(t),null}if(e=Jn(Yt.current),eo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ht]=t,r[ui]=i,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(a=0;a<za.length;a++)ue(za[a],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Kf(r,i),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ue("invalid",r);break;case"textarea":qf(r,i),ue("invalid",r)}nu(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Zi(r.textContent,l,e),a=["children",""+l]):Za.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Wi(r),Xf(r,i,!0);break;case"textarea":Wi(r),Jf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xo)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ih(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ht]=t,e[ui]=r,iv(e,t,!1,!1),t.stateNode=e;e:{switch(o=ru(n,r),n){case"dialog":ue("cancel",e),ue("close",e),a=r;break;case"iframe":case"object":case"embed":ue("load",e),a=r;break;case"video":case"audio":for(a=0;a<za.length;a++)ue(za[a],e);a=r;break;case"source":ue("error",e),a=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),a=r;break;case"details":ue("toggle",e),a=r;break;case"input":Kf(e,r),a=qs(e,r),ue("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=xe({},r,{value:void 0}),ue("invalid",e);break;case"textarea":qf(e,r),a=eu(e,r),ue("invalid",e);break;default:a=r}nu(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Mh(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Lh(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ei(e,s):typeof s=="number"&&ei(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Za.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ue("scroll",e):s!=null&&wc(e,i,s,o))}switch(n){case"input":Wi(e),Xf(e,r,!1);break;case"textarea":Wi(e),Jf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ln(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ur(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)lv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Jn(fi.current),Jn(Yt.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(i=r.nodeValue!==n)&&(e=mt,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return Qe(t),null;case 13:if(de(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ht!==null&&t.mode&1&&!(t.flags&128))Cm(),Xr(),t.flags|=98560,i=!1;else if(i=eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Ht]=t}else Xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),i=!1}else At!==null&&(Mu(At),At=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Te===0&&(Te=3):nf())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Jr(),Nu(e,t),e===null&&li(t.stateNode.containerInfo),Qe(t),null;case 10:return Fc(t.type._context),Qe(t),null;case 17:return ot(t.type)&&qo(),Qe(t),null;case 19:if(de(ge),i=t.memoizedState,i===null)return Qe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Pa(i,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=al(e),o!==null){for(t.flags|=128,Pa(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&je()>ea&&(t.flags|=128,r=!0,Pa(i,!1),t.lanes=4194304)}else{if(!r)if(e=al(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!me)return Qe(t),null}else 2*je()-i.renderingStartTime>ea&&n!==1073741824&&(t.flags|=128,r=!0,Pa(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=je(),t.sibling=null,n=ge.current,se(ge,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return tf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function fy(e,t){switch(Lc(t),t.tag){case 1:return ot(t.type)&&qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jr(),de(it),de(Xe),Vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hc(t),null;case 13:if(de(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ge),null;case 4:return Jr(),null;case 10:return Fc(t.type._context),null;case 22:case 23:return tf(),null;case 24:return null;default:return null}}var ro=!1,Ge=!1,dy=typeof WeakSet=="function"?WeakSet:Set,z=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function Ru(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Ud=!1;function py(e,t){if(pu=Qo,e=fm(),Ac(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,c=0,d=e,v=null;t:for(;;){for(var y;d!==n||a!==0&&d.nodeType!==3||(l=o+a),d!==i||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)v=d,d=y;for(;;){if(d===e)break t;if(v===n&&++u===a&&(l=o),v===i&&++c===r&&(s=o),(y=d.nextSibling)!==null)break;d=v,v=d.parentNode}d=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(hu={focusedElem:e,selectionRange:n},Qo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,k=S.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:Rt(t.type,x),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){Se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return S=Ud,Ud=!1,S}function Wa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Ru(t,n,i)}a=a.next}while(a!==r)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sv(e){var t=e.alternate;t!==null&&(e.alternate=null,sv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[ui],delete t[gu],delete t[K1],delete t[X1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uv(e){return e.tag===5||e.tag===3||e.tag===4}function Bd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xo));else if(r!==4&&(e=e.child,e!==null))for(Ou(e,t,n),e=e.sibling;e!==null;)Ou(e,t,n),e=e.sibling}function Au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Au(e,t,n),e=e.sibling;e!==null;)Au(e,t,n),e=e.sibling}var Ue=null,Tt=!1;function mn(e,t,n){for(n=n.child;n!==null;)cv(e,t,n),n=n.sibling}function cv(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Ge||Ar(n,t);case 6:var r=Ue,a=Tt;Ue=null,mn(e,t,n),Ue=r,Tt=a,Ue!==null&&(Tt?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Tt?(e=Ue,n=n.stateNode,e.nodeType===8?ys(e.parentNode,n):e.nodeType===1&&ys(e,n),ai(e)):ys(Ue,n.stateNode));break;case 4:r=Ue,a=Tt,Ue=n.stateNode.containerInfo,Tt=!0,mn(e,t,n),Ue=r,Tt=a;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ru(n,t,o),a=a.next}while(a!==r)}mn(e,t,n);break;case 1:if(!Ge&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,t,l)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,mn(e,t,n),Ge=r):mn(e,t,n);break;default:mn(e,t,n)}}function Hd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dy),t.forEach(function(r){var a=ky.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Tt=!1;break e;case 3:Ue=l.stateNode.containerInfo,Tt=!0;break e;case 4:Ue=l.stateNode.containerInfo,Tt=!0;break e}l=l.return}if(Ue===null)throw Error(N(160));cv(i,o,a),Ue=null,Tt=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){Se(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fv(t,e),t=t.sibling}function fv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),$t(e),r&4){try{Wa(3,e,e.return),Rl(3,e)}catch(x){Se(e,e.return,x)}try{Wa(5,e,e.return)}catch(x){Se(e,e.return,x)}}break;case 1:Nt(t,e),$t(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(Nt(t,e),$t(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var a=e.stateNode;try{ei(a,"")}catch(x){Se(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Oh(a,i),ru(l,o);var u=ru(l,i);for(o=0;o<s.length;o+=2){var c=s[o],d=s[o+1];c==="style"?Mh(a,d):c==="dangerouslySetInnerHTML"?Lh(a,d):c==="children"?ei(a,d):wc(a,c,d,u)}switch(l){case"input":Js(a,i);break;case"textarea":Ah(a,i);break;case"select":var v=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Ur(a,!!i.multiple,y,!1):v!==!!i.multiple&&(i.defaultValue!=null?Ur(a,!!i.multiple,i.defaultValue,!0):Ur(a,!!i.multiple,i.multiple?[]:"",!1))}a[ui]=i}catch(x){Se(e,e.return,x)}}break;case 6:if(Nt(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(N(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){Se(e,e.return,x)}}break;case 3:if(Nt(t,e),$t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ai(t.containerInfo)}catch(x){Se(e,e.return,x)}break;case 4:Nt(t,e),$t(e);break;case 13:Nt(t,e),$t(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Zc=je())),r&4&&Hd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||c,Nt(t,e),Ge=u):Nt(t,e),$t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(v=z,y=v.child,v.tag){case 0:case 11:case 14:case 15:Wa(4,v,v.return);break;case 1:Ar(v,v.return);var S=v.stateNode;if(typeof S.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(x){Se(r,n,x)}}break;case 5:Ar(v,v.return);break;case 22:if(v.memoizedState!==null){Wd(d);continue}}y!==null?(y.return=v,z=y):Wd(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=zh("display",o))}catch(x){Se(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){Se(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nt(t,e),$t(e),r&4&&Hd(e);break;case 21:break;default:Nt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uv(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(ei(a,""),r.flags&=-33);var i=Bd(e);Au(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Bd(e);Ou(e,l,o);break;default:throw Error(N(161))}}catch(s){Se(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hy(e,t,n){z=e,dv(e)}function dv(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var a=z,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||ro;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||Ge;l=ro;var u=Ge;if(ro=o,(Ge=s)&&!u)for(z=a;z!==null;)o=z,s=o.child,o.tag===22&&o.memoizedState!==null?Yd(a):s!==null?(s.return=o,z=s):Yd(a);for(;i!==null;)z=i,dv(i),i=i.sibling;z=a,ro=l,Ge=u}Vd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,z=i):Vd(e)}}function Vd(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||Rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&jd(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ai(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ge||t.flags&512&&Tu(t)}catch(v){Se(t,t.return,v)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Wd(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Yd(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rl(4,t)}catch(s){Se(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){Se(t,a,s)}}var i=t.return;try{Tu(t)}catch(s){Se(t,i,s)}break;case 5:var o=t.return;try{Tu(t)}catch(s){Se(t,o,s)}}}catch(s){Se(t,t.return,s)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var my=Math.ceil,ll=un.ReactCurrentDispatcher,qc=un.ReactCurrentOwner,bt=un.ReactCurrentBatchConfig,te=0,Fe=null,Ne=null,Be=0,dt=0,Ir=Un(0),Te=0,mi=null,cr=0,Tl=0,Jc=0,Ya=null,rt=null,Zc=0,ea=1/0,Gt=null,sl=!1,Iu=null,Tn=null,ao=!1,Cn=null,ul=0,Qa=0,Lu=null,To=-1,Oo=0;function Je(){return te&6?je():To!==-1?To:To=je()}function On(e){return e.mode&1?te&2&&Be!==0?Be&-Be:J1.transition!==null?(Oo===0&&(Oo=Kh()),Oo):(e=ie,e!==0||(e=window.event,e=e===void 0?16:nm(e.type)),e):1}function zt(e,t,n,r){if(50<Qa)throw Qa=0,Lu=null,Error(N(185));_i(e,n,r),(!(te&2)||e!==Fe)&&(e===Fe&&(!(te&2)&&(Tl|=n),Te===4&&kn(e,Be)),lt(e,r),n===1&&te===0&&!(t.mode&1)&&(ea=je()+500,jl&&Bn()))}function lt(e,t){var n=e.callbackNode;J0(e,t);var r=Yo(e,e===Fe?Be:0);if(r===0)n!==null&&td(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&td(n),t===1)e.tag===0?q1(Qd.bind(null,e)):Sm(Qd.bind(null,e)),Q1(function(){!(te&6)&&Bn()}),n=null;else{switch(Xh(r)){case 1:n=bc;break;case 4:n=Qh;break;case 16:n=Wo;break;case 536870912:n=Gh;break;default:n=Wo}n=wv(n,pv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pv(e,t){if(To=-1,Oo=0,te&6)throw Error(N(327));var n=e.callbackNode;if(Yr()&&e.callbackNode!==n)return null;var r=Yo(e,e===Fe?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cl(e,r);else{t=r;var a=te;te|=2;var i=mv();(Fe!==e||Be!==t)&&(Gt=null,ea=je()+500,ar(e,t));do try{yy();break}catch(l){hv(e,l)}while(!0);Dc(),ll.current=i,te=a,Ne!==null?t=0:(Fe=null,Be=0,t=Te)}if(t!==0){if(t===2&&(a=su(e),a!==0&&(r=a,t=zu(e,a))),t===1)throw n=mi,ar(e,0),kn(e,r),lt(e,je()),n;if(t===6)kn(e,r);else{if(a=e.current.alternate,!(r&30)&&!vy(a)&&(t=cl(e,r),t===2&&(i=su(e),i!==0&&(r=i,t=zu(e,i))),t===1))throw n=mi,ar(e,0),kn(e,r),lt(e,je()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Kn(e,rt,Gt);break;case 3:if(kn(e,r),(r&130023424)===r&&(t=Zc+500-je(),10<t)){if(Yo(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=vu(Kn.bind(null,e,rt,Gt),t);break}Kn(e,rt,Gt);break;case 4:if(kn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-Lt(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*my(r/1960))-r,10<r){e.timeoutHandle=vu(Kn.bind(null,e,rt,Gt),r);break}Kn(e,rt,Gt);break;case 5:Kn(e,rt,Gt);break;default:throw Error(N(329))}}}return lt(e,je()),e.callbackNode===n?pv.bind(null,e):null}function zu(e,t){var n=Ya;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=cl(e,t),e!==2&&(t=rt,rt=n,t!==null&&Mu(t)),e}function Mu(e){rt===null?rt=e:rt.push.apply(rt,e)}function vy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Dt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t){for(t&=~Jc,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function Qd(e){if(te&6)throw Error(N(327));Yr();var t=Yo(e,0);if(!(t&1))return lt(e,je()),null;var n=cl(e,t);if(e.tag!==0&&n===2){var r=su(e);r!==0&&(t=r,n=zu(e,r))}if(n===1)throw n=mi,ar(e,0),kn(e,t),lt(e,je()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,rt,Gt),lt(e,je()),null}function ef(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(ea=je()+500,jl&&Bn())}}function fr(e){Cn!==null&&Cn.tag===0&&!(te&6)&&Yr();var t=te;te|=1;var n=bt.transition,r=ie;try{if(bt.transition=null,ie=1,e)return e()}finally{ie=r,bt.transition=n,te=t,!(te&6)&&Bn()}}function tf(){dt=Ir.current,de(Ir)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Y1(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(Lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qo();break;case 3:Jr(),de(it),de(Xe),Vc();break;case 5:Hc(r);break;case 4:Jr();break;case 13:de(ge);break;case 19:de(ge);break;case 10:Fc(r.type._context);break;case 22:case 23:tf()}n=n.return}if(Fe=e,Ne=e=An(e.current,null),Be=dt=t,Te=0,mi=null,Jc=Tl=cr=0,rt=Ya=null,qn!==null){for(t=0;t<qn.length;t++)if(n=qn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}qn=null}return e}function hv(e,t){do{var n=Ne;try{if(Dc(),_o.current=ol,il){for(var r=ye.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}il=!1}if(ur=0,Me=Re=ye=null,Va=!1,di=0,qc.current=null,n===null||n.return===null){Te=1,mi=t,Ne=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=Be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var v=c.alternate;v?(c.updateQueue=v.updateQueue,c.memoizedState=v.memoizedState,c.lanes=v.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Id(o);if(y!==null){y.flags&=-257,Ld(y,o,l,i,t),y.mode&1&&Ad(i,u,t),t=y,s=u;var S=t.updateQueue;if(S===null){var x=new Set;x.add(s),t.updateQueue=x}else S.add(s);break e}else{if(!(t&1)){Ad(i,u,t),nf();break e}s=Error(N(426))}}else if(me&&l.mode&1){var k=Id(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ld(k,o,l,i,t),zc(Zr(s,l));break e}}i=s=Zr(s,l),Te!==4&&(Te=2),Ya===null?Ya=[i]:Ya.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=qm(i,s,t);Pd(i,m);break e;case 1:l=s;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Tn===null||!Tn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Jm(i,l,t);Pd(i,w);break e}}i=i.return}while(i!==null)}gv(n)}catch(P){t=P,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function mv(){var e=ll.current;return ll.current=ol,e===null?ol:e}function nf(){(Te===0||Te===3||Te===2)&&(Te=4),Fe===null||!(cr&268435455)&&!(Tl&268435455)||kn(Fe,Be)}function cl(e,t){var n=te;te|=2;var r=mv();(Fe!==e||Be!==t)&&(Gt=null,ar(e,t));do try{gy();break}catch(a){hv(e,a)}while(!0);if(Dc(),te=n,ll.current=r,Ne!==null)throw Error(N(261));return Fe=null,Be=0,Te}function gy(){for(;Ne!==null;)vv(Ne)}function yy(){for(;Ne!==null&&!H0();)vv(Ne)}function vv(e){var t=xv(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?gv(e):Ne=t,qc.current=null}function gv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fy(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Ne=null;return}}else if(n=cy(n,t,dt),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Te===0&&(Te=5)}function Kn(e,t,n){var r=ie,a=bt.transition;try{bt.transition=null,ie=1,xy(e,t,n,r)}finally{bt.transition=a,ie=r}return null}function xy(e,t,n,r){do Yr();while(Cn!==null);if(te&6)throw Error(N(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Z0(e,i),e===Fe&&(Ne=Fe=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ao||(ao=!0,wv(Wo,function(){return Yr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=bt.transition,bt.transition=null;var o=ie;ie=1;var l=te;te|=4,qc.current=null,py(e,n),fv(n,e),F1(hu),Qo=!!pu,hu=pu=null,e.current=n,hy(n),V0(),te=l,ie=o,bt.transition=i}else e.current=n;if(ao&&(ao=!1,Cn=e,ul=a),i=e.pendingLanes,i===0&&(Tn=null),Q0(n.stateNode),lt(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(sl)throw sl=!1,e=Iu,Iu=null,e;return ul&1&&e.tag!==0&&Yr(),i=e.pendingLanes,i&1?e===Lu?Qa++:(Qa=0,Lu=e):Qa=0,Bn(),null}function Yr(){if(Cn!==null){var e=Xh(ul),t=bt.transition,n=ie;try{if(bt.transition=null,ie=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,ul=0,te&6)throw Error(N(331));var a=te;for(te|=4,z=e.current;z!==null;){var i=z,o=i.child;if(z.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:Wa(8,c,i)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var v=c.sibling,y=c.return;if(sv(c),c===u){z=null;break}if(v!==null){v.return=y,z=v;break}z=y}}}var S=i.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var k=x.sibling;x.sibling=null,x=k}while(x!==null)}}z=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,z=o;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wa(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,z=m;break e}z=i.return}}var p=e.current;for(z=p;z!==null;){o=z;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,z=h;else e:for(o=p;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Rl(9,l)}}catch(P){Se(l,l.return,P)}if(l===o){z=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,z=w;break e}z=l.return}}if(te=a,Bn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{ie=n,bt.transition=t}}return!1}function Gd(e,t,n){t=Zr(n,t),t=qm(e,t,1),e=Rn(e,t,1),t=Je(),e!==null&&(_i(e,1,t),lt(e,t))}function Se(e,t,n){if(e.tag===3)Gd(e,e,n);else for(;t!==null;){if(t.tag===3){Gd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tn===null||!Tn.has(r))){e=Zr(n,e),e=Jm(t,e,1),t=Rn(t,e,1),e=Je(),t!==null&&(_i(t,1,e),lt(t,e));break}}t=t.return}}function wy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Be&n)===n&&(Te===4||Te===3&&(Be&130023424)===Be&&500>je()-Zc?ar(e,0):Jc|=n),lt(e,t)}function yv(e,t){t===0&&(e.mode&1?(t=Gi,Gi<<=1,!(Gi&130023424)&&(Gi=4194304)):t=1);var n=Je();e=rn(e,t),e!==null&&(_i(e,t,n),lt(e,n))}function Sy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yv(e,n)}function ky(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),yv(e,n)}var xv;xv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,uy(e,t,n);at=!!(e.flags&131072)}else at=!1,me&&t.flags&1048576&&km(t,el,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ro(e,t),e=t.pendingProps;var a=Kr(t,Xe.current);Wr(t,n),a=Yc(null,t,r,e,a,n);var i=Qc();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(i=!0,Jo(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Uc(t),a.updater=_l,t.stateNode=a,a._reactInternals=t,Eu(t,r,e,n),t=Pu(null,t,r,!0,i,n)):(t.tag=0,me&&i&&Ic(t),qe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Cy(r),e=Rt(r,e),a){case 0:t=bu(null,t,r,e,n);break e;case 1:t=Dd(null,t,r,e,n);break e;case 11:t=zd(null,t,r,e,n);break e;case 14:t=Md(null,t,r,Rt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Rt(r,a),bu(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Rt(r,a),Dd(e,t,r,a,n);case 3:e:{if(nv(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Pm(e,t),rl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=Zr(Error(N(423)),t),t=Fd(e,t,r,n,a);break e}else if(r!==a){a=Zr(Error(N(424)),t),t=Fd(e,t,r,n,a);break e}else for(ht=Nn(t.stateNode.containerInfo.firstChild),mt=t,me=!0,At=null,n=Rm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===a){t=an(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return Tm(t),e===null&&wu(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,mu(r,a)?o=null:i!==null&&mu(r,i)&&(t.flags|=32),tv(e,t),qe(e,t,o,n),t.child;case 6:return e===null&&wu(t),null;case 13:return rv(e,t,n);case 4:return Bc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qr(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Rt(r,a),zd(e,t,r,a,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,se(tl,r._currentValue),r._currentValue=o,i!==null)if(Dt(i.value,o)){if(i.children===a.children&&!it.current){t=an(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Zt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Su(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(N(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Su(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}qe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Wr(t,n),a=Pt(a),r=r(a),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,a=Rt(r,t.pendingProps),a=Rt(r.type,a),Md(e,t,r,a,n);case 15:return Zm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Rt(r,a),Ro(e,t),t.tag=1,ot(r)?(e=!0,Jo(t)):e=!1,Wr(t,n),_m(t,r,a),Eu(t,r,a,n),Pu(null,t,r,!0,e,n);case 19:return av(e,t,n);case 22:return ev(e,t,n)}throw Error(N(156,t.tag))};function wv(e,t){return Yh(e,t)}function Ey(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new Ey(e,t,n,r)}function rf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cy(e){if(typeof e=="function")return rf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kc)return 11;if(e===Ec)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ao(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")rf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Cr:return ir(n.children,a,i,t);case Sc:o=8,a|=8;break;case Qs:return e=Ct(12,n,t,a|2),e.elementType=Qs,e.lanes=i,e;case Gs:return e=Ct(13,n,t,a),e.elementType=Gs,e.lanes=i,e;case Ks:return e=Ct(19,n,t,a),e.elementType=Ks,e.lanes=i,e;case Nh:return Ol(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jh:o=10;break e;case _h:o=9;break e;case kc:o=11;break e;case Ec:o=14;break e;case xn:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ct(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function ir(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function Ol(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=Nh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ps(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function js(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function by(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ls(0),this.expirationTimes=ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function af(e,t,n,r,a,i,o,l,s){return e=new by(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ct(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(i),e}function Py(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sv(e){if(!e)return zn;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ot(n))return wm(e,n,t)}return t}function kv(e,t,n,r,a,i,o,l,s){return e=af(n,r,!0,e,a,i,o,l,s),e.context=Sv(null),n=e.current,r=Je(),a=On(n),i=Zt(r,a),i.callback=t??null,Rn(n,i,a),e.current.lanes=a,_i(e,a,r),lt(e,r),e}function Al(e,t,n,r){var a=t.current,i=Je(),o=On(a);return n=Sv(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rn(a,t,o),e!==null&&(zt(e,a,o,i),jo(e,a,o)),o}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function of(e,t){Kd(e,t),(e=e.alternate)&&Kd(e,t)}function jy(){return null}var Ev=typeof reportError=="function"?reportError:function(e){console.error(e)};function lf(e){this._internalRoot=e}Il.prototype.render=lf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Al(e,t,null,null)};Il.prototype.unmount=lf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){Al(null,e,null,null)}),t[nn]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sn.length&&t!==0&&t<Sn[n].priority;n++);Sn.splice(n,0,e),n===0&&tm(e)}};function sf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function _y(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=fl(o);i.call(u)}}var o=kv(t,r,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=o,e[nn]=o.current,li(e.nodeType===8?e.parentNode:e),fr(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=fl(s);l.call(u)}}var s=af(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=s,e[nn]=s.current,li(e.nodeType===8?e.parentNode:e),fr(function(){Al(t,s,n,r)}),s}function zl(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=fl(o);l.call(s)}}Al(t,o,e,a)}else o=_y(n,t,e,a,r);return fl(o)}qh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=La(t.pendingLanes);n!==0&&(Pc(t,n|1),lt(t,je()),!(te&6)&&(ea=je()+500,Bn()))}break;case 13:fr(function(){var r=rn(e,1);if(r!==null){var a=Je();zt(r,e,1,a)}}),of(e,1)}};jc=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Je();zt(t,e,134217728,n)}of(e,134217728)}};Jh=function(e){if(e.tag===13){var t=On(e),n=rn(e,t);if(n!==null){var r=Je();zt(n,e,t,r)}of(e,t)}};Zh=function(){return ie};em=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};iu=function(e,t,n){switch(t){case"input":if(Js(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Pl(r);if(!a)throw Error(N(90));Th(r),Js(r,a)}}}break;case"textarea":Ah(e,n);break;case"select":t=n.value,t!=null&&Ur(e,!!n.multiple,t,!1)}};$h=ef;Uh=fr;var Ny={usingClientEntryPoint:!1,Events:[Ri,_r,Pl,Dh,Fh,ef]},ja={findFiberByHostInstance:Xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ry={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vh(e),e===null?null:e.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{kl=io.inject(Ry),Wt=io}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(t))throw Error(N(200));return Py(e,t,null,n)};gt.createRoot=function(e,t){if(!sf(e))throw Error(N(299));var n=!1,r="",a=Ev;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=af(e,1,!1,null,null,n,!1,r,a),e[nn]=t.current,li(e.nodeType===8?e.parentNode:e),new lf(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Vh(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return fr(e)};gt.hydrate=function(e,t,n){if(!Ll(t))throw Error(N(200));return zl(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!sf(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=Ev;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=kv(t,null,e,1,n??null,a,!1,i,o),e[nn]=t.current,li(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Il(t)};gt.render=function(e,t,n){if(!Ll(t))throw Error(N(200));return zl(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(N(40));return e._reactRootContainer?(fr(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};gt.unstable_batchedUpdates=ef;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return zl(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";function Cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cv)}catch(e){console.error(e)}}Cv(),kh.exports=gt;var uf=kh.exports;const Ty=pc(uf),Oy=fh({__proto__:null,default:Ty},[uf]);var qd=uf;Ws.createRoot=qd.createRoot,Ws.hydrateRoot=qd.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ke(){return ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ke.apply(this,arguments)}var Pe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pe||(Pe={}));const Jd="popstate";function Ay(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:l}=r.location;return vi("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:dr(a)}return Ly(t,n,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ta(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Iy(){return Math.random().toString(36).substr(2,8)}function Zd(e,t){return{usr:e.state,key:e.key,idx:t}}function vi(e,t,n,r){return n===void 0&&(n=null),ke({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cn(t):t,{state:n,key:t&&t.key||r||Iy()})}function dr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function cn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ly(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Pe.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(ke({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=Pe.Pop;let k=c(),m=k==null?null:k-u;u=k,s&&s({action:l,location:x.location,delta:m})}function v(k,m){l=Pe.Push;let p=vi(x.location,k,m);n&&n(p,k),u=c()+1;let h=Zd(p,u),w=x.createHref(p);try{o.pushState(h,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(w)}i&&s&&s({action:l,location:x.location,delta:1})}function y(k,m){l=Pe.Replace;let p=vi(x.location,k,m);n&&n(p,k),u=c();let h=Zd(p,u),w=x.createHref(p);o.replaceState(h,"",w),i&&s&&s({action:l,location:x.location,delta:0})}function S(k){let m=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof k=="string"?k:dr(k);return p=p.replace(/ $/,"%20"),W(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let x={get action(){return l},get location(){return e(a,o)},listen(k){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Jd,d),s=k,()=>{a.removeEventListener(Jd,d),s=null}},createHref(k){return t(a,k)},createURL:S,encodeLocation(k){let m=S(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:y,go(k){return o.go(k)}};return x}var we;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(we||(we={}));const zy=new Set(["lazy","caseSensitive","path","id","index","children"]);function My(e){return e.index===!0}function Du(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,i)=>{let o=[...n,i],l=typeof a.id=="string"?a.id:o.join("-");if(W(a.index!==!0||!a.children,"Cannot specify children on an index route"),W(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),My(a)){let s=ke({},a,t(a),{id:l});return r[l]=s,s}else{let s=ke({},a,t(a),{id:l,children:void 0});return r[l]=s,a.children&&(s.children=Du(a.children,t,o,r)),s}})}function Lr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?cn(t):t,a=fa(r.pathname||"/",n);if(a==null)return null;let i=bv(e);Fy(i);let o=null;for(let l=0;o==null&&l<i.length;++l){let s=qy(a);o=Gy(i[l],s)}return o}function Dy(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function bv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(W(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=en([r,s.relativePath]),c=n.concat(s);i.children&&i.children.length>0&&(W(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),bv(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Yy(u,i.index),routesMeta:c})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of Pv(i.path))a(i,o,s)}),t}function Pv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=Pv(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Fy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $y=/^:[\w-]+$/,Uy=3,By=2,Hy=1,Vy=10,Wy=-2,ep=e=>e==="*";function Yy(e,t){let n=e.split("/"),r=n.length;return n.some(ep)&&(r+=Wy),t&&(r+=By),n.filter(a=>!ep(a)).reduce((a,i)=>a+($y.test(i)?Uy:i===""?Hy:Vy),r)}function Qy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Gy(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",c=Ky({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;i.push({params:r,pathname:en([a,c.pathname]),pathnameBase:ex(en([a,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(a=en([a,c.pathnameBase]))}return i}function Ky(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xy(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:v,isOptional:y}=c;if(v==="*"){let x=l[d]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const S=l[d];return y&&!S?u[v]=void 0:u[v]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Xy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ta(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function qy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ta(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Jy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?cn(e):e;return{pathname:n?n.startsWith("/")?n:Zy(n,t):t,search:tx(r),hash:nx(a)}}function Zy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function _s(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ml(e,t){let n=jv(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dl(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=cn(e):(a=ke({},e),W(!a.pathname||!a.pathname.includes("?"),_s("?","pathname","search",a)),W(!a.pathname||!a.pathname.includes("#"),_s("#","pathname","hash",a)),W(!a.search||!a.search.includes("#"),_s("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(o==null)l=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let v=o.split("/");for(;v[0]==="..";)v.shift(),d-=1;a.pathname=v.join("/")}l=d>=0?t[d]:"/"}let s=Jy(a,l),u=o&&o!=="/"&&o.endsWith("/"),c=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const en=e=>e.join("/").replace(/\/\/+/g,"/"),ex=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class cf{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function _v(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Nv=["post","put","patch","delete"],rx=new Set(Nv),ax=["get",...Nv],ix=new Set(ax),ox=new Set([301,302,303,307,308]),lx=new Set([307,308]),Ns={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},sx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},_a={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Rv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ux=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Tv="remix-router-transitions";function cx(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;W(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let E=e.detectErrorBoundary;a=b=>({hasErrorBoundary:E(b)})}else a=ux;let i={},o=Du(e.routes,a,void 0,i),l,s=e.basename||"/",u=ke({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),c=null,d=new Set,v=null,y=null,S=null,x=e.hydrationData!=null,k=Lr(o,e.history.location,s),m=null;if(k==null){let E=St(404,{pathname:e.history.location.pathname}),{matches:b,route:_}=sp(o);k=b,m={[_.id]:E}}let p,h=k.some(E=>E.route.lazy),w=k.some(E=>E.route.loader);if(h)p=!1;else if(!w)p=!0;else if(u.v7_partialHydration){let E=e.hydrationData?e.hydrationData.loaderData:null,b=e.hydrationData?e.hydrationData.errors:null,_=T=>T.route.loader?T.route.loader.hydrate===!0?!1:E&&E[T.route.id]!==void 0||b&&b[T.route.id]!==void 0:!0;if(b){let T=k.findIndex(M=>b[M.route.id]!==void 0);p=k.slice(0,T+1).every(_)}else p=k.every(_)}else p=e.hydrationData!=null;let P,g={historyAction:e.history.action,location:e.history.location,matches:k,initialized:p,navigation:Ns,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map,blockers:new Map},C=Pe.Pop,R=!1,O,$=!1,q=new Map,ve=null,he=!1,Ve=!1,Ft=[],wt=[],ae=new Map,I=0,F=-1,B=new Map,K=new Set,ee=new Map,st=new Map,Ce=new Set,We=new Map,be=new Map,ut=!1;function Wn(){if(c=e.history.listen(E=>{let{action:b,location:_,delta:T}=E;if(ut){ut=!1;return}ta(be.size===0||T!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=$f({currentLocation:g.location,nextLocation:_,historyAction:b});if(M&&T!=null){ut=!0,e.history.go(T*-1),$i(M,{state:"blocked",location:_,proceed(){$i(M,{state:"proceeding",proceed:void 0,reset:void 0,location:_}),e.history.go(T)},reset(){let G=new Map(g.blockers);G.set(M,_a),Ie({blockers:G})}});return}return Yn(b,_)}),n){Sx(t,q);let E=()=>kx(t,q);t.addEventListener("pagehide",E),ve=()=>t.removeEventListener("pagehide",E)}return g.initialized||Yn(Pe.Pop,g.location,{initialHydration:!0}),P}function Qt(){c&&c(),ve&&ve(),d.clear(),O&&O.abort(),g.fetchers.forEach((E,b)=>Fi(b)),g.blockers.forEach((E,b)=>Ff(b))}function va(E){return d.add(E),()=>d.delete(E)}function Ie(E,b){b===void 0&&(b={}),g=ke({},g,E);let _=[],T=[];u.v7_fetcherPersist&&g.fetchers.forEach((M,G)=>{M.state==="idle"&&(Ce.has(G)?T.push(G):_.push(G))}),[...d].forEach(M=>M(g,{deletedFetchers:T,unstable_viewTransitionOpts:b.viewTransitionOpts,unstable_flushSync:b.flushSync===!0})),u.v7_fetcherPersist&&(_.forEach(M=>g.fetchers.delete(M)),T.forEach(M=>Fi(M)))}function tt(E,b,_){var T,M;let{flushSync:G}=_===void 0?{}:_,V=g.actionData!=null&&g.navigation.formMethod!=null&&Ot(g.navigation.formMethod)&&g.navigation.state==="loading"&&((T=E.state)==null?void 0:T._isRedirect)!==!0,H;b.actionData?Object.keys(b.actionData).length>0?H=b.actionData:H=null:V?H=g.actionData:H=null;let U=b.loaderData?lp(g.loaderData,b.loaderData,b.matches||[],b.errors):g.loaderData,Z=g.blockers;Z.size>0&&(Z=new Map(Z),Z.forEach((le,$e)=>Z.set($e,_a)));let Le=R===!0||g.navigation.formMethod!=null&&Ot(g.navigation.formMethod)&&((M=E.state)==null?void 0:M._isRedirect)!==!0;l&&(o=l,l=void 0),he||C===Pe.Pop||(C===Pe.Push?e.history.push(E,E.state):C===Pe.Replace&&e.history.replace(E,E.state));let Y;if(C===Pe.Pop){let le=q.get(g.location.pathname);le&&le.has(E.pathname)?Y={currentLocation:g.location,nextLocation:E}:q.has(E.pathname)&&(Y={currentLocation:E,nextLocation:g.location})}else if($){let le=q.get(g.location.pathname);le?le.add(E.pathname):(le=new Set([E.pathname]),q.set(g.location.pathname,le)),Y={currentLocation:g.location,nextLocation:E}}Ie(ke({},b,{actionData:H,loaderData:U,historyAction:C,location:E,initialized:!0,navigation:Ns,revalidation:"idle",restoreScrollPosition:Bf(E,b.matches||g.matches),preventScrollReset:Le,blockers:Z}),{viewTransitionOpts:Y,flushSync:G===!0}),C=Pe.Pop,R=!1,$=!1,he=!1,Ve=!1,Ft=[],wt=[]}async function Af(E,b){if(typeof E=="number"){e.history.go(E);return}let _=Fu(g.location,g.matches,s,u.v7_prependBasename,E,u.v7_relativeSplatPath,b==null?void 0:b.fromRouteId,b==null?void 0:b.relative),{path:T,submission:M,error:G}=tp(u.v7_normalizeFormMethod,!1,_,b),V=g.location,H=vi(g.location,T,b&&b.state);H=ke({},H,e.history.encodeLocation(H));let U=b&&b.replace!=null?b.replace:void 0,Z=Pe.Push;U===!0?Z=Pe.Replace:U===!1||M!=null&&Ot(M.formMethod)&&M.formAction===g.location.pathname+g.location.search&&(Z=Pe.Replace);let Le=b&&"preventScrollReset"in b?b.preventScrollReset===!0:void 0,Y=(b&&b.unstable_flushSync)===!0,le=$f({currentLocation:V,nextLocation:H,historyAction:Z});if(le){$i(le,{state:"blocked",location:H,proceed(){$i(le,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),Af(E,b)},reset(){let $e=new Map(g.blockers);$e.set(le,_a),Ie({blockers:$e})}});return}return await Yn(Z,H,{submission:M,pendingError:G,preventScrollReset:Le,replace:b&&b.replace,enableViewTransition:b&&b.unstable_viewTransition,flushSync:Y})}function Gg(){if(ql(),Ie({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Yn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Yn(C||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Yn(E,b,_){O&&O.abort(),O=null,C=E,he=(_&&_.startUninterruptedRevalidation)===!0,r0(g.location,g.matches),R=(_&&_.preventScrollReset)===!0,$=(_&&_.enableViewTransition)===!0;let T=l||o,M=_&&_.overrideNavigation,G=Lr(T,b,s),V=(_&&_.flushSync)===!0;if(!G){let $e=St(404,{pathname:b.pathname}),{matches:ct,route:ze}=sp(T);Jl(),tt(b,{matches:ct,loaderData:{},errors:{[ze.id]:$e}},{flushSync:V});return}if(g.initialized&&!Ve&&mx(g.location,b)&&!(_&&_.submission&&Ot(_.submission.formMethod))){tt(b,{matches:G},{flushSync:V});return}O=new AbortController;let H=Ra(e.history,b,O.signal,_&&_.submission),U,Z;if(_&&_.pendingError)Z={[Ga(G).route.id]:_.pendingError};else if(_&&_.submission&&Ot(_.submission.formMethod)){let $e=await Kg(H,b,_.submission,G,{replace:_.replace,flushSync:V});if($e.shortCircuited)return;U=$e.pendingActionData,Z=$e.pendingActionError,M=Rs(b,_.submission),V=!1,H=new Request(H.url,{signal:H.signal})}let{shortCircuited:Le,loaderData:Y,errors:le}=await Xg(H,b,G,M,_&&_.submission,_&&_.fetcherSubmission,_&&_.replace,_&&_.initialHydration===!0,V,U,Z);Le||(O=null,tt(b,ke({matches:G},U?{actionData:U}:{},{loaderData:Y,errors:le})))}async function Kg(E,b,_,T,M){M===void 0&&(M={}),ql();let G=xx(b,_);Ie({navigation:G},{flushSync:M.flushSync===!0});let V,H=Uu(T,b);if(!H.route.action&&!H.route.lazy)V={type:we.error,error:St(405,{method:E.method,pathname:b.pathname,routeId:H.route.id})};else if(V=await Na("action",E,H,T,i,a,s,u.v7_relativeSplatPath),E.signal.aborted)return{shortCircuited:!0};if(er(V)){let U;return M&&M.replace!=null?U=M.replace:U=V.location===g.location.pathname+g.location.search,await ga(g,V,{submission:_,replace:U}),{shortCircuited:!0}}if(zr(V)){let U=Ga(T,H.route.id);return(M&&M.replace)!==!0&&(C=Pe.Push),{pendingActionData:{},pendingActionError:{[U.route.id]:V.error}}}if(Zn(V))throw St(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:V.data}}}async function Xg(E,b,_,T,M,G,V,H,U,Z,Le){let Y=T||Rs(b,M),le=M||G||fp(Y),$e=l||o,[ct,ze]=np(e.history,g,_,le,b,u.v7_partialHydration&&H===!0,Ve,Ft,wt,Ce,ee,K,$e,s,Z,Le);if(Jl(ne=>!(_&&_.some(oe=>oe.route.id===ne))||ct&&ct.some(oe=>oe.route.id===ne)),F=++I,ct.length===0&&ze.length===0){let ne=Mf();return tt(b,ke({matches:_,loaderData:{},errors:Le||null},Z?{actionData:Z}:{},ne?{fetchers:new Map(g.fetchers)}:{}),{flushSync:U}),{shortCircuited:!0}}if(!he&&(!u.v7_partialHydration||!H)){ze.forEach(oe=>{let nt=g.fetchers.get(oe.key),Bi=Ta(void 0,nt?nt.data:void 0);g.fetchers.set(oe.key,Bi)});let ne=Z||g.actionData;Ie(ke({navigation:Y},ne?Object.keys(ne).length===0?{actionData:null}:{actionData:ne}:{},ze.length>0?{fetchers:new Map(g.fetchers)}:{}),{flushSync:U})}ze.forEach(ne=>{ae.has(ne.key)&&pn(ne.key),ne.controller&&ae.set(ne.key,ne.controller)});let gr=()=>ze.forEach(ne=>pn(ne.key));O&&O.signal.addEventListener("abort",gr);let{results:Zl,loaderResults:yr,fetcherResults:hn}=await If(g.matches,_,ct,ze,E);if(E.signal.aborted)return{shortCircuited:!0};O&&O.signal.removeEventListener("abort",gr),ze.forEach(ne=>ae.delete(ne.key));let Qn=up(Zl);if(Qn){if(Qn.idx>=ct.length){let ne=ze[Qn.idx-ct.length].key;K.add(ne)}return await ga(g,Qn.result,{replace:V}),{shortCircuited:!0}}let{loaderData:es,errors:xa}=op(g,_,ct,yr,Le,ze,hn,We);We.forEach((ne,oe)=>{ne.subscribe(nt=>{(nt||ne.done)&&We.delete(oe)})}),u.v7_partialHydration&&H&&g.errors&&Object.entries(g.errors).filter(ne=>{let[oe]=ne;return!ct.some(nt=>nt.route.id===oe)}).forEach(ne=>{let[oe,nt]=ne;xa=Object.assign(xa||{},{[oe]:nt})});let ts=Mf(),xr=Df(F),Ui=ts||xr||ze.length>0;return ke({loaderData:es,errors:xa},Ui?{fetchers:new Map(g.fetchers)}:{})}function qg(E,b,_,T){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ae.has(E)&&pn(E);let M=(T&&T.unstable_flushSync)===!0,G=l||o,V=Fu(g.location,g.matches,s,u.v7_prependBasename,_,u.v7_relativeSplatPath,b,T==null?void 0:T.relative),H=Lr(G,V,s);if(!H){ya(E,b,St(404,{pathname:V}),{flushSync:M});return}let{path:U,submission:Z,error:Le}=tp(u.v7_normalizeFormMethod,!0,V,T);if(Le){ya(E,b,Le,{flushSync:M});return}let Y=Uu(H,U);if(R=(T&&T.preventScrollReset)===!0,Z&&Ot(Z.formMethod)){Jg(E,b,U,Y,H,M,Z);return}ee.set(E,{routeId:b,path:U}),Zg(E,b,U,Y,H,M,Z)}async function Jg(E,b,_,T,M,G,V){if(ql(),ee.delete(E),!T.route.action&&!T.route.lazy){let oe=St(405,{method:V.formMethod,pathname:_,routeId:b});ya(E,b,oe,{flushSync:G});return}let H=g.fetchers.get(E);dn(E,wx(V,H),{flushSync:G});let U=new AbortController,Z=Ra(e.history,_,U.signal,V);ae.set(E,U);let Le=I,Y=await Na("action",Z,T,M,i,a,s,u.v7_relativeSplatPath);if(Z.signal.aborted){ae.get(E)===U&&ae.delete(E);return}if(u.v7_fetcherPersist&&Ce.has(E)){if(er(Y)||zr(Y)){dn(E,gn(void 0));return}}else{if(er(Y))if(ae.delete(E),F>Le){dn(E,gn(void 0));return}else return K.add(E),dn(E,Ta(V)),ga(g,Y,{fetcherSubmission:V});if(zr(Y)){ya(E,b,Y.error);return}}if(Zn(Y))throw St(400,{type:"defer-action"});let le=g.navigation.location||g.location,$e=Ra(e.history,le,U.signal),ct=l||o,ze=g.navigation.state!=="idle"?Lr(ct,g.navigation.location,s):g.matches;W(ze,"Didn't find any matches after fetcher action");let gr=++I;B.set(E,gr);let Zl=Ta(V,Y.data);g.fetchers.set(E,Zl);let[yr,hn]=np(e.history,g,ze,V,le,!1,Ve,Ft,wt,Ce,ee,K,ct,s,{[T.route.id]:Y.data},void 0);hn.filter(oe=>oe.key!==E).forEach(oe=>{let nt=oe.key,Bi=g.fetchers.get(nt),i0=Ta(void 0,Bi?Bi.data:void 0);g.fetchers.set(nt,i0),ae.has(nt)&&pn(nt),oe.controller&&ae.set(nt,oe.controller)}),Ie({fetchers:new Map(g.fetchers)});let Qn=()=>hn.forEach(oe=>pn(oe.key));U.signal.addEventListener("abort",Qn);let{results:es,loaderResults:xa,fetcherResults:ts}=await If(g.matches,ze,yr,hn,$e);if(U.signal.aborted)return;U.signal.removeEventListener("abort",Qn),B.delete(E),ae.delete(E),hn.forEach(oe=>ae.delete(oe.key));let xr=up(es);if(xr){if(xr.idx>=yr.length){let oe=hn[xr.idx-yr.length].key;K.add(oe)}return ga(g,xr.result)}let{loaderData:Ui,errors:ne}=op(g,g.matches,yr,xa,void 0,hn,ts,We);if(g.fetchers.has(E)){let oe=gn(Y.data);g.fetchers.set(E,oe)}Df(gr),g.navigation.state==="loading"&&gr>F?(W(C,"Expected pending action"),O&&O.abort(),tt(g.navigation.location,{matches:ze,loaderData:Ui,errors:ne,fetchers:new Map(g.fetchers)})):(Ie({errors:ne,loaderData:lp(g.loaderData,Ui,ze,ne),fetchers:new Map(g.fetchers)}),Ve=!1)}async function Zg(E,b,_,T,M,G,V){let H=g.fetchers.get(E);dn(E,Ta(V,H?H.data:void 0),{flushSync:G});let U=new AbortController,Z=Ra(e.history,_,U.signal);ae.set(E,U);let Le=I,Y=await Na("loader",Z,T,M,i,a,s,u.v7_relativeSplatPath);if(Zn(Y)&&(Y=await Iv(Y,Z.signal,!0)||Y),ae.get(E)===U&&ae.delete(E),!Z.signal.aborted){if(Ce.has(E)){dn(E,gn(void 0));return}if(er(Y))if(F>Le){dn(E,gn(void 0));return}else{K.add(E),await ga(g,Y);return}if(zr(Y)){ya(E,b,Y.error);return}W(!Zn(Y),"Unhandled fetcher deferred data"),dn(E,gn(Y.data))}}async function ga(E,b,_){let{submission:T,fetcherSubmission:M,replace:G}=_===void 0?{}:_;b.revalidate&&(Ve=!0);let V=vi(E.location,b.location,{_isRedirect:!0});if(W(V,"Expected a location on the redirect navigation"),n){let le=!1;if(b.reloadDocument)le=!0;else if(Rv.test(b.location)){const $e=e.history.createURL(b.location);le=$e.origin!==t.location.origin||fa($e.pathname,s)==null}if(le){G?t.location.replace(b.location):t.location.assign(b.location);return}}O=null;let H=G===!0?Pe.Replace:Pe.Push,{formMethod:U,formAction:Z,formEncType:Le}=E.navigation;!T&&!M&&U&&Z&&Le&&(T=fp(E.navigation));let Y=T||M;if(lx.has(b.status)&&Y&&Ot(Y.formMethod))await Yn(H,V,{submission:ke({},Y,{formAction:b.location}),preventScrollReset:R});else{let le=Rs(V,T);await Yn(H,V,{overrideNavigation:le,fetcherSubmission:M,preventScrollReset:R})}}async function If(E,b,_,T,M){let G=await Promise.all([..._.map(U=>Na("loader",M,U,b,i,a,s,u.v7_relativeSplatPath)),...T.map(U=>U.matches&&U.match&&U.controller?Na("loader",Ra(e.history,U.path,U.controller.signal),U.match,U.matches,i,a,s,u.v7_relativeSplatPath):{type:we.error,error:St(404,{pathname:U.path})})]),V=G.slice(0,_.length),H=G.slice(_.length);return await Promise.all([cp(E,_,V,V.map(()=>M.signal),!1,g.loaderData),cp(E,T.map(U=>U.match),H,T.map(U=>U.controller?U.controller.signal:null),!0)]),{results:G,loaderResults:V,fetcherResults:H}}function ql(){Ve=!0,Ft.push(...Jl()),ee.forEach((E,b)=>{ae.has(b)&&(wt.push(b),pn(b))})}function dn(E,b,_){_===void 0&&(_={}),g.fetchers.set(E,b),Ie({fetchers:new Map(g.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function ya(E,b,_,T){T===void 0&&(T={});let M=Ga(g.matches,b);Fi(E),Ie({errors:{[M.route.id]:_},fetchers:new Map(g.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Lf(E){return u.v7_fetcherPersist&&(st.set(E,(st.get(E)||0)+1),Ce.has(E)&&Ce.delete(E)),g.fetchers.get(E)||sx}function Fi(E){let b=g.fetchers.get(E);ae.has(E)&&!(b&&b.state==="loading"&&B.has(E))&&pn(E),ee.delete(E),B.delete(E),K.delete(E),Ce.delete(E),g.fetchers.delete(E)}function e0(E){if(u.v7_fetcherPersist){let b=(st.get(E)||0)-1;b<=0?(st.delete(E),Ce.add(E)):st.set(E,b)}else Fi(E);Ie({fetchers:new Map(g.fetchers)})}function pn(E){let b=ae.get(E);W(b,"Expected fetch controller: "+E),b.abort(),ae.delete(E)}function zf(E){for(let b of E){let _=Lf(b),T=gn(_.data);g.fetchers.set(b,T)}}function Mf(){let E=[],b=!1;for(let _ of K){let T=g.fetchers.get(_);W(T,"Expected fetcher: "+_),T.state==="loading"&&(K.delete(_),E.push(_),b=!0)}return zf(E),b}function Df(E){let b=[];for(let[_,T]of B)if(T<E){let M=g.fetchers.get(_);W(M,"Expected fetcher: "+_),M.state==="loading"&&(pn(_),B.delete(_),b.push(_))}return zf(b),b.length>0}function t0(E,b){let _=g.blockers.get(E)||_a;return be.get(E)!==b&&be.set(E,b),_}function Ff(E){g.blockers.delete(E),be.delete(E)}function $i(E,b){let _=g.blockers.get(E)||_a;W(_.state==="unblocked"&&b.state==="blocked"||_.state==="blocked"&&b.state==="blocked"||_.state==="blocked"&&b.state==="proceeding"||_.state==="blocked"&&b.state==="unblocked"||_.state==="proceeding"&&b.state==="unblocked","Invalid blocker state transition: "+_.state+" -> "+b.state);let T=new Map(g.blockers);T.set(E,b),Ie({blockers:T})}function $f(E){let{currentLocation:b,nextLocation:_,historyAction:T}=E;if(be.size===0)return;be.size>1&&ta(!1,"A router only supports one blocker at a time");let M=Array.from(be.entries()),[G,V]=M[M.length-1],H=g.blockers.get(G);if(!(H&&H.state==="proceeding")&&V({currentLocation:b,nextLocation:_,historyAction:T}))return G}function Jl(E){let b=[];return We.forEach((_,T)=>{(!E||E(T))&&(_.cancel(),b.push(T),We.delete(T))}),b}function n0(E,b,_){if(v=E,S=b,y=_||null,!x&&g.navigation===Ns){x=!0;let T=Bf(g.location,g.matches);T!=null&&Ie({restoreScrollPosition:T})}return()=>{v=null,S=null,y=null}}function Uf(E,b){return y&&y(E,b.map(T=>Dy(T,g.loaderData)))||E.key}function r0(E,b){if(v&&S){let _=Uf(E,b);v[_]=S()}}function Bf(E,b){if(v){let _=Uf(E,b),T=v[_];if(typeof T=="number")return T}return null}function a0(E){i={},l=Du(E,a,void 0,i)}return P={get basename(){return s},get future(){return u},get state(){return g},get routes(){return o},get window(){return t},initialize:Wn,subscribe:va,enableScrollRestoration:n0,navigate:Af,fetch:qg,revalidate:Gg,createHref:E=>e.history.createHref(E),encodeLocation:E=>e.history.encodeLocation(E),getFetcher:Lf,deleteFetcher:e0,dispose:Qt,getBlocker:t0,deleteBlocker:Ff,_internalFetchControllers:ae,_internalActiveDeferreds:We,_internalSetRoutes:a0},P}function fx(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Fu(e,t,n,r,a,i,o,l){let s,u;if(o){s=[];for(let d of t)if(s.push(d),d.route.id===o){u=d;break}}else s=t,u=t[t.length-1];let c=Dl(a||".",Ml(s,i),fa(e.pathname,n)||e.pathname,l==="path");return a==null&&(c.search=e.search,c.hash=e.hash),(a==null||a===""||a===".")&&u&&u.route.index&&!ff(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:en([n,c.pathname])),dr(c)}function tp(e,t,n,r){if(!r||!fx(r))return{path:n};if(r.formMethod&&!yx(r.formMethod))return{path:n,error:St(405,{method:r.formMethod})};let a=()=>({path:n,error:St(400,{type:"invalid-body"})}),i=r.formMethod||"get",o=e?i.toUpperCase():i.toLowerCase(),l=Av(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ot(o))return a();let v=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((y,S)=>{let[x,k]=S;return""+y+x+"="+k+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:v}}}else if(r.formEncType==="application/json"){if(!Ot(o))return a();try{let v=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:v,text:void 0}}}catch{return a()}}}W(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=$u(r.formData),u=r.formData;else if(r.body instanceof FormData)s=$u(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=ip(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=ip(s)}catch{return a()}let c={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Ot(c.formMethod))return{path:n,submission:c};let d=cn(n);return t&&d.search&&ff(d.search)&&s.append("index",""),d.search="?"+s,{path:dr(d),submission:c}}function dx(e,t){let n=e;if(t){let r=e.findIndex(a=>a.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function np(e,t,n,r,a,i,o,l,s,u,c,d,v,y,S,x){let k=x?Object.values(x)[0]:S?Object.values(S)[0]:void 0,m=e.createURL(t.location),p=e.createURL(a),h=x?Object.keys(x)[0]:void 0,P=dx(n,h).filter((C,R)=>{let{route:O}=C;if(O.lazy)return!0;if(O.loader==null)return!1;if(i)return O.loader.hydrate?!0:t.loaderData[O.id]===void 0&&(!t.errors||t.errors[O.id]===void 0);if(px(t.loaderData,t.matches[R],C)||l.some(ve=>ve===C.route.id))return!0;let $=t.matches[R],q=C;return rp(C,ke({currentUrl:m,currentParams:$.params,nextUrl:p,nextParams:q.params},r,{actionResult:k,defaultShouldRevalidate:o||m.pathname+m.search===p.pathname+p.search||m.search!==p.search||Ov($,q)}))}),g=[];return c.forEach((C,R)=>{if(i||!n.some(he=>he.route.id===C.routeId)||u.has(R))return;let O=Lr(v,C.path,y);if(!O){g.push({key:R,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let $=t.fetchers.get(R),q=Uu(O,C.path),ve=!1;d.has(R)?ve=!1:s.includes(R)?ve=!0:$&&$.state!=="idle"&&$.data===void 0?ve=o:ve=rp(q,ke({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:k,defaultShouldRevalidate:o})),ve&&g.push({key:R,routeId:C.routeId,path:C.path,matches:O,match:q,controller:new AbortController})}),[P,g]}function px(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function Ov(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function rp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ap(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];W(a,"No route found in manifest");let i={};for(let o in r){let s=a[o]!==void 0&&o!=="hasErrorBoundary";ta(!s,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!s&&!zy.has(o)&&(i[o]=r[o])}Object.assign(a,i),Object.assign(a,ke({},t(a),{lazy:void 0}))}async function Na(e,t,n,r,a,i,o,l,s){s===void 0&&(s={});let u,c,d,v=x=>{let k,m=new Promise((p,h)=>k=h);return d=()=>k(),t.signal.addEventListener("abort",d),Promise.race([x({request:t,params:n.params,context:s.requestContext}),m])};try{let x=n.route[e];if(n.route.lazy)if(x){let k,m=await Promise.all([v(x).catch(p=>{k=p}),ap(n.route,i,a)]);if(k)throw k;c=m[0]}else if(await ap(n.route,i,a),x=n.route[e],x)c=await v(x);else if(e==="action"){let k=new URL(t.url),m=k.pathname+k.search;throw St(405,{method:t.method,pathname:m,routeId:n.route.id})}else return{type:we.data,data:void 0};else if(x)c=await v(x);else{let k=new URL(t.url),m=k.pathname+k.search;throw St(404,{pathname:m})}W(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(x){u=we.error,c=x}finally{d&&t.signal.removeEventListener("abort",d)}if(gx(c)){let x=c.status;if(ox.has(x)){let m=c.headers.get("Location");if(W(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!Rv.test(m))m=Fu(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,m,l);else if(!s.isStaticRequest){let p=new URL(t.url),h=m.startsWith("//")?new URL(p.protocol+m):new URL(m),w=fa(h.pathname,o)!=null;h.origin===p.origin&&w&&(m=h.pathname+h.search+h.hash)}if(s.isStaticRequest)throw c.headers.set("Location",m),c;return{type:we.redirect,status:x,location:m,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:u===we.error?we.error:we.data,response:c};let k;try{let m=c.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?c.body==null?k=null:k=await c.json():k=await c.text()}catch(m){return{type:we.error,error:m}}return u===we.error?{type:u,error:new cf(x,c.statusText,k),headers:c.headers}:{type:we.data,data:k,statusCode:c.status,headers:c.headers}}if(u===we.error)return{type:u,error:c};if(vx(c)){var y,S;return{type:we.deferred,deferredData:c,statusCode:(y=c.init)==null?void 0:y.status,headers:((S=c.init)==null?void 0:S.headers)&&new Headers(c.init.headers)}}return{type:we.data,data:c}}function Ra(e,t,n,r){let a=e.createURL(Av(t)).toString(),i={signal:n};if(r&&Ot(r.formMethod)){let{formMethod:o,formEncType:l}=r;i.method=o.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=$u(r.formData):i.body=r.formData}return new Request(a,i)}function $u(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function ip(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function hx(e,t,n,r,a){let i={},o=null,l,s=!1,u={};return n.forEach((c,d)=>{let v=t[d].route.id;if(W(!er(c),"Cannot handle redirect results in processLoaderData"),zr(c)){let y=Ga(e,v),S=c.error;r&&(S=Object.values(r)[0],r=void 0),o=o||{},o[y.route.id]==null&&(o[y.route.id]=S),i[v]=void 0,s||(s=!0,l=_v(c.error)?c.error.status:500),c.headers&&(u[v]=c.headers)}else Zn(c)?(a.set(v,c.deferredData),i[v]=c.deferredData.data):i[v]=c.data,c.statusCode!=null&&c.statusCode!==200&&!s&&(l=c.statusCode),c.headers&&(u[v]=c.headers)}),r&&(o=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:o,statusCode:l||200,loaderHeaders:u}}function op(e,t,n,r,a,i,o,l){let{loaderData:s,errors:u}=hx(t,n,r,a,l);for(let c=0;c<i.length;c++){let{key:d,match:v,controller:y}=i[c];W(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let S=o[c];if(!(y&&y.signal.aborted))if(zr(S)){let x=Ga(e.matches,v==null?void 0:v.route.id);u&&u[x.route.id]||(u=ke({},u,{[x.route.id]:S.error})),e.fetchers.delete(d)}else if(er(S))W(!1,"Unhandled fetcher revalidation redirect");else if(Zn(S))W(!1,"Unhandled fetcher deferred data");else{let x=gn(S.data);e.fetchers.set(d,x)}}return{loaderData:s,errors:u}}function lp(e,t,n,r){let a=ke({},t);for(let i of n){let o=i.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(a[o]=t[o]):e[o]!==void 0&&i.route.loader&&(a[o]=e[o]),r&&r.hasOwnProperty(o))break}return a}function Ga(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function sp(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function St(e,t){let{pathname:n,routeId:r,method:a,type:i}=t===void 0?{}:t,o="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(o="Bad Request",a&&n&&r?l="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?l="defer() is not supported in actions":i==="invalid-body"&&(l="Unable to encode submission body")):e===403?(o="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",l='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",a&&n&&r?l="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(l='Invalid request method "'+a.toUpperCase()+'"')),new cf(e||500,o,new Error(l),!0)}function up(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(er(n))return{result:n,idx:t}}}function Av(e){let t=typeof e=="string"?cn(e):e;return dr(ke({},t,{hash:""}))}function mx(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Zn(e){return e.type===we.deferred}function zr(e){return e.type===we.error}function er(e){return(e&&e.type)===we.redirect}function vx(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function gx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function yx(e){return ix.has(e.toLowerCase())}function Ot(e){return rx.has(e.toLowerCase())}async function cp(e,t,n,r,a,i){for(let o=0;o<n.length;o++){let l=n[o],s=t[o];if(!s)continue;let u=e.find(d=>d.route.id===s.route.id),c=u!=null&&!Ov(u,s)&&(i&&i[s.route.id])!==void 0;if(Zn(l)&&(a||c)){let d=r[o];W(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Iv(l,d,a).then(v=>{v&&(n[o]=v||n[o])})}}}async function Iv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:we.data,data:e.deferredData.unwrappedData}}catch(a){return{type:we.error,error:a}}return{type:we.data,data:e.deferredData.data}}}function ff(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Uu(e,t){let n=typeof t=="string"?cn(t).search:t.search;if(e[e.length-1].route.index&&ff(n||""))return e[e.length-1];let r=jv(e);return r[r.length-1]}function fp(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:i,json:o}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Rs(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xx(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ta(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function wx(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function gn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Sx(e,t){try{let n=e.sessionStorage.getItem(Tv);if(n){let r=JSON.parse(n);for(let[a,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(a,new Set(i||[]))}}catch{}}function kx(e,t){if(t.size>0){let n={};for(let[r,a]of t)n[r]=[...a];try{e.sessionStorage.setItem(Tv,JSON.stringify(n))}catch(r){ta(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}const Fl=j.createContext(null),Lv=j.createContext(null),Hn=j.createContext(null),$l=j.createContext(null),Vn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),zv=j.createContext(null);function Ex(e,t){let{relative:n}=t===void 0?{}:t;da()||W(!1);let{basename:r,navigator:a}=j.useContext(Hn),{hash:i,pathname:o,search:l}=Fv(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:en([r,o])),a.createHref({pathname:s,search:l,hash:i})}function da(){return j.useContext($l)!=null}function Oi(){return da()||W(!1),j.useContext($l).location}function Mv(e){j.useContext(Hn).static||j.useLayoutEffect(e)}function Dv(){let{isDataRoute:e}=j.useContext(Vn);return e?Lx():Cx()}function Cx(){da()||W(!1);let e=j.useContext(Fl),{basename:t,future:n,navigator:r}=j.useContext(Hn),{matches:a}=j.useContext(Vn),{pathname:i}=Oi(),o=JSON.stringify(Ml(a,n.v7_relativeSplatPath)),l=j.useRef(!1);return Mv(()=>{l.current=!0}),j.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=Dl(u,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:en([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,o,i,e])}function Fv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Hn),{matches:a}=j.useContext(Vn),{pathname:i}=Oi(),o=JSON.stringify(Ml(a,r.v7_relativeSplatPath));return j.useMemo(()=>Dl(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function bx(e,t){return $v(e,t)}function $v(e,t,n,r){da()||W(!1);let{navigator:a}=j.useContext(Hn),{matches:i}=j.useContext(Vn),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=Oi(),c;if(t){var d;let k=typeof t=="string"?cn(t):t;s==="/"||(d=k.pathname)!=null&&d.startsWith(s)||W(!1),c=k}else c=u;let v=c.pathname||"/",y=v;if(s!=="/"){let k=s.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=Lr(e,{pathname:y}),x=Rx(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:en([s,a.encodeLocation?a.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:en([s,a.encodeLocation?a.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&x?j.createElement($l.Provider,{value:{location:gi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Pe.Pop}},x):x}function Px(){let e=Ix(),t=_v(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:a},n):null,null)}const jx=j.createElement(Px,null);class _x extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Vn.Provider,{value:this.props.routeContext},j.createElement(zv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nx(e){let{routeContext:t,match:n,children:r}=e,a=j.useContext(Fl);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Vn.Provider,{value:t},r)}function Rx(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,l=(a=n)==null?void 0:a.errors;if(l!=null){let c=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id]));c>=0||W(!1),o=o.slice(0,Math.min(o.length,c+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:v,errors:y}=n,S=d.route.loader&&v[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||S){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,v)=>{let y,S=!1,x=null,k=null;n&&(y=l&&d.route.id?l[d.route.id]:void 0,x=d.route.errorElement||jx,s&&(u<0&&v===0?(zx("route-fallback",!1),S=!0,k=null):u===v&&(S=!0,k=d.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,v+1)),p=()=>{let h;return y?h=x:S?h=k:d.route.Component?h=j.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=c,j.createElement(Nx,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||v===0)?j.createElement(_x,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var Uv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Uv||{}),dl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dl||{});function Tx(e){let t=j.useContext(Fl);return t||W(!1),t}function Ox(e){let t=j.useContext(Lv);return t||W(!1),t}function Ax(e){let t=j.useContext(Vn);return t||W(!1),t}function Bv(e){let t=Ax(),n=t.matches[t.matches.length-1];return n.route.id||W(!1),n.route.id}function Ix(){var e;let t=j.useContext(zv),n=Ox(dl.UseRouteError),r=Bv(dl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Lx(){let{router:e}=Tx(Uv.UseNavigateStable),t=Bv(dl.UseNavigateStable),n=j.useRef(!1);return Mv(()=>{n.current=!0}),j.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,gi({fromRouteId:t},i)))},[e,t])}const dp={};function zx(e,t,n){!t&&!dp[e]&&(dp[e]=!0)}function Mx(e){let{to:t,replace:n,state:r,relative:a}=e;da()||W(!1);let{future:i,static:o}=j.useContext(Hn),{matches:l}=j.useContext(Vn),{pathname:s}=Oi(),u=Dv(),c=Dl(t,Ml(l,i.v7_relativeSplatPath),s,a==="path"),d=JSON.stringify(c);return j.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:a}),[u,d,a,n,r]),null}function Io(e){W(!1)}function Dx(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Pe.Pop,navigator:i,static:o=!1,future:l}=e;da()&&W(!1);let s=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:s,navigator:i,static:o,future:gi({v7_relativeSplatPath:!1},l)}),[s,l,i,o]);typeof r=="string"&&(r=cn(r));let{pathname:c="/",search:d="",hash:v="",state:y=null,key:S="default"}=r,x=j.useMemo(()=>{let k=fa(c,s);return k==null?null:{location:{pathname:k,search:d,hash:v,state:y,key:S},navigationType:a}},[s,c,d,v,y,S,a]);return x==null?null:j.createElement(Hn.Provider,{value:u},j.createElement($l.Provider,{children:n,value:x}))}function Fx(e){let{children:t,location:n}=e;return bx(Bu(t),n)}new Promise(()=>{});function Bu(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,a)=>{if(!j.isValidElement(r))return;let i=[...t,a];if(r.type===j.Fragment){n.push.apply(n,Bu(r.props.children,i));return}r.type!==Io&&W(!1),!r.props.index||!r.props.children||W(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bu(r.props.children,i)),n.push(o)}),n}function $x(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:j.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:j.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:j.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yi(){return yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yi.apply(this,arguments)}function Ux(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Bx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Hx(e,t){return e.button===0&&(!t||t==="_self")&&!Bx(e)}const Vx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Wx="6";try{window.__reactRouterVersion=Wx}catch{}function Yx(e,t){return cx({basename:t==null?void 0:t.basename,future:yi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Ay({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Qx(),routes:e,mapRouteProperties:$x,window:t==null?void 0:t.window}).initialize()}function Qx(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=yi({},t,{errors:Gx(t.errors)})),t}function Gx(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new cf(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let i=window[a.__subType];if(typeof i=="function")try{let o=new i(a.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let i=new Error(a.message);i.stack="",n[r]=i}}else n[r]=a;return n}const Kx=j.createContext({isTransitioning:!1}),Xx=j.createContext(new Map),qx="startTransition",pp=S0[qx],Jx="flushSync",hp=Oy[Jx];function Zx(e){pp?pp(e):e()}function Oa(e){hp?hp(e):e()}class ew{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function tw(e){let{fallbackElement:t,router:n,future:r}=e,[a,i]=j.useState(n.state),[o,l]=j.useState(),[s,u]=j.useState({isTransitioning:!1}),[c,d]=j.useState(),[v,y]=j.useState(),[S,x]=j.useState(),k=j.useRef(new Map),{v7_startTransition:m}=r||{},p=j.useCallback(C=>{m?Zx(C):C()},[m]),h=j.useCallback((C,R)=>{let{deletedFetchers:O,unstable_flushSync:$,unstable_viewTransitionOpts:q}=R;O.forEach(he=>k.current.delete(he)),C.fetchers.forEach((he,Ve)=>{he.data!==void 0&&k.current.set(Ve,he.data)});let ve=n.window==null||typeof n.window.document.startViewTransition!="function";if(!q||ve){$?Oa(()=>i(C)):p(()=>i(C));return}if($){Oa(()=>{v&&(c&&c.resolve(),v.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:q.currentLocation,nextLocation:q.nextLocation})});let he=n.window.document.startViewTransition(()=>{Oa(()=>i(C))});he.finished.finally(()=>{Oa(()=>{d(void 0),y(void 0),l(void 0),u({isTransitioning:!1})})}),Oa(()=>y(he));return}v?(c&&c.resolve(),v.skipTransition(),x({state:C,currentLocation:q.currentLocation,nextLocation:q.nextLocation})):(l(C),u({isTransitioning:!0,flushSync:!1,currentLocation:q.currentLocation,nextLocation:q.nextLocation}))},[n.window,v,c,k,p]);j.useLayoutEffect(()=>n.subscribe(h),[n,h]),j.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new ew)},[s]),j.useEffect(()=>{if(c&&o&&n.window){let C=o,R=c.promise,O=n.window.document.startViewTransition(async()=>{p(()=>i(C)),await R});O.finished.finally(()=>{d(void 0),y(void 0),l(void 0),u({isTransitioning:!1})}),y(O)}},[p,o,c,n.window]),j.useEffect(()=>{c&&o&&a.location.key===o.location.key&&c.resolve()},[c,v,a.location,o]),j.useEffect(()=>{!s.isTransitioning&&S&&(l(S.state),u({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),x(void 0))},[s.isTransitioning,S]),j.useEffect(()=>{},[]);let w=j.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:C=>n.navigate(C),push:(C,R,O)=>n.navigate(C,{state:R,preventScrollReset:O==null?void 0:O.preventScrollReset}),replace:(C,R,O)=>n.navigate(C,{replace:!0,state:R,preventScrollReset:O==null?void 0:O.preventScrollReset})}),[n]),P=n.basename||"/",g=j.useMemo(()=>({router:n,navigator:w,static:!1,basename:P}),[n,w,P]);return j.createElement(j.Fragment,null,j.createElement(Fl.Provider,{value:g},j.createElement(Lv.Provider,{value:a},j.createElement(Xx.Provider,{value:k.current},j.createElement(Kx.Provider,{value:s},j.createElement(Dx,{basename:P,location:a.location,navigationType:a.historyAction,navigator:w,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},a.initialized||n.future.v7_partialHydration?j.createElement(nw,{routes:n.routes,future:n.future,state:a}):t))))),null)}function nw(e){let{routes:t,future:n,state:r}=e;return $v(t,void 0,r,n)}const rw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kr=j.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,v=Ux(t,Vx),{basename:y}=j.useContext(Hn),S,x=!1;if(typeof u=="string"&&aw.test(u)&&(S=u,rw))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),P=fa(w.pathname,y);w.origin===h.origin&&P!=null?u=P+w.search+w.hash:x=!0}catch{}let k=Ex(u,{relative:a}),m=iw(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:a,unstable_viewTransition:d});function p(h){r&&r(h),h.defaultPrevented||m(h)}return j.createElement("a",yi({},v,{href:S||k,onClick:x||i?r:p,ref:n,target:s}))});var mp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mp||(mp={}));var vp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vp||(vp={}));function iw(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l}=t===void 0?{}:t,s=Dv(),u=Oi(),c=Fv(e,{relative:o});return j.useCallback(d=>{if(Hx(d,n)){d.preventDefault();let v=r!==void 0?r:dr(u)===dr(c);s(e,{replace:v,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l})}},[u,s,c,r,a,n,e,i,o,l])}const ow=({children:e})=>{const[t,n]=j.useState(!1),[r,a]=j.useState(!0);return j.useEffect(()=>{const i=window.localStorage.getItem("token");if(!i){n(!1),a(!1);return}fetch("http://localhost:7777/auth/is-authenticated",{method:"GET",headers:{Authorization:`Bearer ${i}`}}).then(o=>{if(!o.ok)throw new Error("Falha na autenticação.");return o.json()}).then(o=>{n(!0),a(!1)}).catch(o=>{console.error("Erro:",o),n(!1),a(!1)})},[]),r?f.jsx("div",{children:"Carregando..."}):t?e:f.jsx(Mx,{to:"/auth/login"})};function gp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gp(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pl(e){"@babel/helpers - typeof";return pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pl(e)}function lw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sw(e,t,n){return t&&yp(e.prototype,t),n&&yp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function df(e,t){return cw(e)||dw(e,t)||Hv(e,t)||hw()}function Ai(e){return uw(e)||fw(e)||Hv(e)||pw()}function uw(e){if(Array.isArray(e))return Hu(e)}function cw(e){if(Array.isArray(e))return e}function fw(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function Hv(e,t){if(e){if(typeof e=="string")return Hu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hu(e,t)}}function Hu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xp=function(){},pf={},Vv={},Wv=null,Yv={mark:xp,measure:xp};try{typeof window<"u"&&(pf=window),typeof document<"u"&&(Vv=document),typeof MutationObserver<"u"&&(Wv=MutationObserver),typeof performance<"u"&&(Yv=performance)}catch{}var mw=pf.navigator||{},wp=mw.userAgent,Sp=wp===void 0?"":wp,Mn=pf,pe=Vv,kp=Wv,oo=Yv;Mn.document;var fn=!!pe.documentElement&&!!pe.head&&typeof pe.addEventListener=="function"&&typeof pe.createElement=="function",Qv=~Sp.indexOf("MSIE")||~Sp.indexOf("Trident/"),lo,so,uo,co,fo,on="___FONT_AWESOME___",Vu=16,Gv="fa",Kv="svg-inline--fa",pr="data-fa-i2svg",Wu="data-fa-pseudo-element",vw="data-fa-pseudo-element-pending",hf="data-prefix",mf="data-icon",Ep="fontawesome-i2svg",gw="async",yw=["HTML","HEAD","STYLE","SCRIPT"],Xv=function(){try{return!0}catch{return!1}}(),fe="classic",Ee="sharp",vf=[fe,Ee];function Ii(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[fe]}})}var xi=Ii((lo={},Ae(lo,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ae(lo,Ee,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),lo)),wi=Ii((so={},Ae(so,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ae(so,Ee,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),so)),Si=Ii((uo={},Ae(uo,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ae(uo,Ee,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),uo)),xw=Ii((co={},Ae(co,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ae(co,Ee,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),co)),ww=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,qv="fa-layers-text",Sw=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,kw=Ii((fo={},Ae(fo,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ae(fo,Ee,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),fo)),Jv=[1,2,3,4,5,6,7,8,9,10],Ew=Jv.concat([11,12,13,14,15,16,17,18,19,20]),Cw=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],tr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ki=new Set;Object.keys(wi[fe]).map(ki.add.bind(ki));Object.keys(wi[Ee]).map(ki.add.bind(ki));var bw=[].concat(vf,Ai(ki),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tr.GROUP,tr.SWAP_OPACITY,tr.PRIMARY,tr.SECONDARY]).concat(Jv.map(function(e){return"".concat(e,"x")})).concat(Ew.map(function(e){return"w-".concat(e)})),Ka=Mn.FontAwesomeConfig||{};function Pw(e){var t=pe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function jw(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(pe&&typeof pe.querySelector=="function"){var _w=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_w.forEach(function(e){var t=df(e,2),n=t[0],r=t[1],a=jw(Pw(n));a!=null&&(Ka[r]=a)})}var Zv={styleDefault:"solid",familyDefault:"classic",cssPrefix:Gv,replacementClass:Kv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ka.familyPrefix&&(Ka.cssPrefix=Ka.familyPrefix);var na=L(L({},Zv),Ka);na.autoReplaceSvg||(na.observeMutations=!1);var D={};Object.keys(Zv).forEach(function(e){Object.defineProperty(D,e,{enumerable:!0,set:function(n){na[e]=n,Xa.forEach(function(r){return r(D)})},get:function(){return na[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){na.cssPrefix=t,Xa.forEach(function(n){return n(D)})},get:function(){return na.cssPrefix}});Mn.FontAwesomeConfig=D;var Xa=[];function Nw(e){return Xa.push(e),function(){Xa.splice(Xa.indexOf(e),1)}}var vn=Vu,Vt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rw(e){if(!(!e||!fn)){var t=pe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=pe.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return pe.head.insertBefore(t,r),e}}var Tw="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ei(){for(var e=12,t="";e-- >0;)t+=Tw[Math.random()*62|0];return t}function pa(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function gf(e){return e.classList?pa(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function eg(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ow(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(eg(e[n]),'" ')},"").trim()}function Ul(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function yf(e){return e.size!==Vt.size||e.x!==Vt.x||e.y!==Vt.y||e.rotate!==Vt.rotate||e.flipX||e.flipY}function Aw(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function Iw(e){var t=e.transform,n=e.width,r=n===void 0?Vu:n,a=e.height,i=a===void 0?Vu:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&Qv?s+="translate(".concat(t.x/vn-r/2,"em, ").concat(t.y/vn-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/vn,"em), calc(-50% + ").concat(t.y/vn,"em)) "):s+="translate(".concat(t.x/vn,"em, ").concat(t.y/vn,"em) "),s+="scale(".concat(t.size/vn*(t.flipX?-1:1),", ").concat(t.size/vn*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Lw=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function tg(){var e=Gv,t=Kv,n=D.cssPrefix,r=D.replacementClass,a=Lw;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var Cp=!1;function Ts(){D.autoAddCss&&!Cp&&(Rw(tg()),Cp=!0)}var zw={mixout:function(){return{dom:{css:tg,insertCss:Ts}}},hooks:function(){return{beforeDOMElementCreation:function(){Ts()},beforeI2svg:function(){Ts()}}}},ln=Mn||{};ln[on]||(ln[on]={});ln[on].styles||(ln[on].styles={});ln[on].hooks||(ln[on].hooks={});ln[on].shims||(ln[on].shims=[]);var It=ln[on],ng=[],Mw=function e(){pe.removeEventListener("DOMContentLoaded",e),hl=1,ng.map(function(t){return t()})},hl=!1;fn&&(hl=(pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(pe.readyState),hl||pe.addEventListener("DOMContentLoaded",Mw));function Dw(e){fn&&(hl?setTimeout(e,0):ng.push(e))}function Li(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?eg(e):"<".concat(t," ").concat(Ow(r),">").concat(i.map(Li).join(""),"</").concat(t,">")}function bp(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fw=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Os=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?Fw(n,a):n,s,u,c;for(r===void 0?(s=1,c=t[i[0]]):(s=0,c=r);s<o;s++)u=i[s],c=l(c,t[u],u,t);return c};function $w(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Yu(e){var t=$w(e);return t.length===1?t[0].toString(16):null}function Uw(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Pp(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Qu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Pp(t);typeof It.hooks.addPack=="function"&&!a?It.hooks.addPack(e,Pp(t)):It.styles[e]=L(L({},It.styles[e]||{}),i),e==="fas"&&Qu("fa",t)}var po,ho,mo,Mr=It.styles,Bw=It.shims,Hw=(po={},Ae(po,fe,Object.values(Si[fe])),Ae(po,Ee,Object.values(Si[Ee])),po),xf=null,rg={},ag={},ig={},og={},lg={},Vw=(ho={},Ae(ho,fe,Object.keys(xi[fe])),Ae(ho,Ee,Object.keys(xi[Ee])),ho);function Ww(e){return~bw.indexOf(e)}function Yw(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ww(a)?a:null}var sg=function(){var t=function(i){return Os(Mr,function(o,l,s){return o[s]=Os(l,i,{}),o},{})};rg=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),ag=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),lg=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in Mr||D.autoFetchSvg,r=Os(Bw,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});ig=r.names,og=r.unicodes,xf=Bl(D.styleDefault,{family:D.familyDefault})};Nw(function(e){xf=Bl(e.styleDefault,{family:D.familyDefault})});sg();function wf(e,t){return(rg[e]||{})[t]}function Qw(e,t){return(ag[e]||{})[t]}function nr(e,t){return(lg[e]||{})[t]}function ug(e){return ig[e]||{prefix:null,iconName:null}}function Gw(e){var t=og[e],n=wf("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dn(){return xf}var Sf=function(){return{prefix:null,iconName:null,rest:[]}};function Bl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?fe:n,a=xi[r][e],i=wi[r][e]||wi[r][a],o=e in It.styles?e:null;return i||o||null}var jp=(mo={},Ae(mo,fe,Object.keys(Si[fe])),Ae(mo,Ee,Object.keys(Si[Ee])),mo);function Hl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},Ae(t,fe,"".concat(D.cssPrefix,"-").concat(fe)),Ae(t,Ee,"".concat(D.cssPrefix,"-").concat(Ee)),t),o=null,l=fe;(e.includes(i[fe])||e.some(function(u){return jp[fe].includes(u)}))&&(l=fe),(e.includes(i[Ee])||e.some(function(u){return jp[Ee].includes(u)}))&&(l=Ee);var s=e.reduce(function(u,c){var d=Yw(D.cssPrefix,c);if(Mr[c]?(c=Hw[l].includes(c)?xw[l][c]:c,o=c,u.prefix=c):Vw[l].indexOf(c)>-1?(o=c,u.prefix=Bl(c,{family:l})):d?u.iconName=d:c!==D.replacementClass&&c!==i[fe]&&c!==i[Ee]&&u.rest.push(c),!a&&u.prefix&&u.iconName){var v=o==="fa"?ug(u.iconName):{},y=nr(u.prefix,u.iconName);v.prefix&&(o=null),u.iconName=v.iconName||y||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!Mr.far&&Mr.fas&&!D.autoFetchSvg&&(u.prefix="fas")}return u},Sf());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===Ee&&(Mr.fass||D.autoFetchSvg)&&(s.prefix="fass",s.iconName=nr(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=Dn()||"fas"),s}var Kw=function(){function e(){lw(this,e),this.definitions={}}return sw(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=L(L({},n.definitions[l]||{}),o[l]),Qu(l,o[l]);var s=Si[fe][l];s&&Qu(s,o[l]),sg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),_p=[],Dr={},Qr={},Xw=Object.keys(Qr);function qw(e,t){var n=t.mixoutsTo;return _p=e,Dr={},Object.keys(Qr).forEach(function(r){Xw.indexOf(r)===-1&&delete Qr[r]}),_p.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),pl(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Dr[o]||(Dr[o]=[]),Dr[o].push(i[o])})}r.provides&&r.provides(Qr)}),n}function Gu(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Dr[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function hr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Dr[e]||[];a.forEach(function(i){i.apply(null,n)})}function sn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Qr[e]?Qr[e].apply(null,t):void 0}function Ku(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Dn();if(t)return t=nr(n,t)||t,bp(cg.definitions,n,t)||bp(It.styles,n,t)}var cg=new Kw,Jw=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,hr("noAuto")},Zw={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return fn?(hr("beforeI2svg",t),sn("pseudoElements2svg",t),sn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,Dw(function(){tS({autoReplaceSvgRoot:n}),hr("watch",t)})}},eS={icon:function(t){if(t===null)return null;if(pl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:nr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Bl(t[0]);return{prefix:r,iconName:nr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(ww))){var a=Hl(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Dn(),iconName:nr(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Dn();return{prefix:i,iconName:nr(i,t)||t}}}},xt={noAuto:Jw,config:D,dom:Zw,parse:eS,library:cg,findIconDefinition:Ku,toHtml:Li},tS=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?pe:n;(Object.keys(It.styles).length>0||D.autoFetchSvg)&&fn&&D.autoReplaceSvg&&xt.dom.i2svg({node:r})};function Vl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Li(r)})}}),Object.defineProperty(e,"node",{get:function(){if(fn){var r=pe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function nS(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(yf(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};a.style=Ul(L(L({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function rS(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},a),{},{id:o}),children:r}]}]}function kf(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,c=e.titleId,d=e.extra,v=e.watchable,y=v===void 0?!1:v,S=r.found?r:n,x=S.width,k=S.height,m=a==="fak",p=[D.replacementClass,i?"".concat(D.cssPrefix,"-").concat(i):""].filter(function(O){return d.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(d.classes).join(" "),h={children:[],attributes:L(L({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(k)})},w=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(x/k*16*.0625,"em")}:{};y&&(h.attributes[pr]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Ei())},children:[s]}),delete h.attributes.title);var P=L(L({},h),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:L(L({},w),d.styles)}),g=r.found&&n.found?sn("generateAbstractMask",P)||{children:[],attributes:{}}:sn("generateAbstractIcon",P)||{children:[],attributes:{}},C=g.children,R=g.attributes;return P.children=C,P.attributes=R,l?rS(P):nS(P)}function Np(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=L(L(L({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[pr]="");var c=L({},o.styles);yf(a)&&(c.transform=Iw({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Ul(c);d.length>0&&(u.style=d);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function aS(e){var t=e.content,n=e.title,r=e.extra,a=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ul(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var As=It.styles;function Xu(e){var t=e[0],n=e[1],r=e.slice(4),a=df(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(tr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(tr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(tr.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var iS={found:!1,width:512,height:512};function oS(e,t){!Xv&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qu(e,t){var n=t;return t==="fa"&&D.styleDefault!==null&&(t=Dn()),new Promise(function(r,a){if(sn("missingIconAbstract"),n==="fa"){var i=ug(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&As[t]&&As[t][e]){var o=As[t][e];return r(Xu(o))}oS(e,t),r(L(L({},iS),{},{icon:D.showMissingIcons&&e?sn("missingIconAbstract")||{}:{}}))})}var Rp=function(){},Ju=D.measurePerformance&&oo&&oo.mark&&oo.measure?oo:{mark:Rp,measure:Rp},Ma='FA "6.5.1"',lS=function(t){return Ju.mark("".concat(Ma," ").concat(t," begins")),function(){return fg(t)}},fg=function(t){Ju.mark("".concat(Ma," ").concat(t," ends")),Ju.measure("".concat(Ma," ").concat(t),"".concat(Ma," ").concat(t," begins"),"".concat(Ma," ").concat(t," ends"))},Ef={begin:lS,end:fg},Lo=function(){};function Tp(e){var t=e.getAttribute?e.getAttribute(pr):null;return typeof t=="string"}function sS(e){var t=e.getAttribute?e.getAttribute(hf):null,n=e.getAttribute?e.getAttribute(mf):null;return t&&n}function uS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function cS(){if(D.autoReplaceSvg===!0)return zo.replace;var e=zo[D.autoReplaceSvg];return e||zo.replace}function fS(e){return pe.createElementNS("http://www.w3.org/2000/svg",e)}function dS(e){return pe.createElement(e)}function dg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?fS:dS:n;if(typeof e=="string")return pe.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(dg(o,{ceFn:r}))}),a}function pS(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var zo={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(dg(a),n)}),n.getAttribute(pr)===null&&D.keepOriginalSource){var r=pe.createComment(pS(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~gf(n).indexOf(D.replacementClass))return zo.replace(t);var a=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===D.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return Li(l)}).join(`
`);n.setAttribute(pr,""),n.innerHTML=o}};function Op(e){e()}function pg(e,t){var n=typeof t=="function"?t:Lo;if(e.length===0)n();else{var r=Op;D.mutateApproach===gw&&(r=Mn.requestAnimationFrame||Op),r(function(){var a=cS(),i=Ef.begin("mutate");e.map(a),i(),n()})}}var Cf=!1;function hg(){Cf=!0}function Zu(){Cf=!1}var ml=null;function Ap(e){if(kp&&D.observeMutations){var t=e.treeCallback,n=t===void 0?Lo:t,r=e.nodeCallback,a=r===void 0?Lo:r,i=e.pseudoElementsCallback,o=i===void 0?Lo:i,l=e.observeMutationsRoot,s=l===void 0?pe:l;ml=new kp(function(u){if(!Cf){var c=Dn();pa(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Tp(d.addedNodes[0])&&(D.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&D.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Tp(d.target)&&~Cw.indexOf(d.attributeName))if(d.attributeName==="class"&&sS(d.target)){var v=Hl(gf(d.target)),y=v.prefix,S=v.iconName;d.target.setAttribute(hf,y||c),S&&d.target.setAttribute(mf,S)}else uS(d.target)&&a(d.target)})}}),fn&&ml.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hS(){ml&&ml.disconnect()}function mS(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function vS(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Hl(gf(e));return a.prefix||(a.prefix=Dn()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Qw(a.prefix,e.innerText)||wf(a.prefix,Yu(e.innerText))),!a.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function gS(e){var t=pa(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Ei()):(t["aria-hidden"]="true",t.focusable="false")),t}function yS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Vt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ip(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vS(e),r=n.iconName,a=n.prefix,i=n.rest,o=gS(e),l=Gu("parseNodeAttributes",{},e),s=t.styleParser?mS(e):[];return L({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Vt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var xS=It.styles;function mg(e){var t=D.autoReplaceSvg==="nest"?Ip(e,{styleParser:!1}):Ip(e);return~t.extra.classes.indexOf(qv)?sn("generateLayersText",e,t):sn("generateSvgReplacementMutation",e,t)}var Fn=new Set;vf.map(function(e){Fn.add("fa-".concat(e))});Object.keys(xi[fe]).map(Fn.add.bind(Fn));Object.keys(xi[Ee]).map(Fn.add.bind(Fn));Fn=Ai(Fn);function Lp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!fn)return Promise.resolve();var n=pe.documentElement.classList,r=function(d){return n.add("".concat(Ep,"-").concat(d))},a=function(d){return n.remove("".concat(Ep,"-").concat(d))},i=D.autoFetchSvg?Fn:vf.map(function(c){return"fa-".concat(c)}).concat(Object.keys(xS));i.includes("fa")||i.push("fa");var o=[".".concat(qv,":not([").concat(pr,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(pr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=pa(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=Ef.begin("onTree"),u=l.reduce(function(c,d){try{var v=mg(d);v&&c.push(v)}catch(y){Xv||y.name==="MissingIcon"&&console.error(y)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(v){pg(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),c()})}).catch(function(v){s(),d(v)})})}function wS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mg(e).then(function(n){n&&pg([n],t)})}function SS(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ku(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ku(a||{})),e(r,L(L({},n),{},{mask:a}))}}var kS=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Vt:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,d=n.title,v=d===void 0?null:d,y=n.titleId,S=y===void 0?null:y,x=n.classes,k=x===void 0?[]:x,m=n.attributes,p=m===void 0?{}:m,h=n.styles,w=h===void 0?{}:h;if(t){var P=t.prefix,g=t.iconName,C=t.icon;return Vl(L({type:"icon"},t),function(){return hr("beforeDOMElementCreation",{iconDefinition:t,params:n}),D.autoA11y&&(v?p["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(S||Ei()):(p["aria-hidden"]="true",p.focusable="false")),kf({icons:{main:Xu(C),mask:s?Xu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:g,transform:L(L({},Vt),a),symbol:o,title:v,maskId:c,titleId:S,extra:{attributes:p,styles:w,classes:k}})})}},ES={mixout:function(){return{icon:SS(kS)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lp,n.nodeCallback=wS,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?pe:r,i=n.callback,o=i===void 0?function(){}:i;return Lp(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,c=r.mask,d=r.maskId,v=r.extra;return new Promise(function(y,S){Promise.all([qu(a,l),c.iconName?qu(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var k=df(x,2),m=k[0],p=k[1];y([n,kf({icons:{main:m,mask:p},prefix:l,iconName:a,transform:s,symbol:u,maskId:d,title:i,titleId:o,extra:v,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=Ul(l);s.length>0&&(a.style=s);var u;return yf(o)&&(u=sn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},CS={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Vl({type:"layer"},function(){hr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(Ai(i)).join(" ")},children:o}]})}}}},bS={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,c=r.styles,d=c===void 0?{}:c;return Vl({type:"counter",content:n},function(){return hr("beforeDOMElementCreation",{content:n,params:r}),aS({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(Ai(l))}})})}}}},PS={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Vt:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,c=r.attributes,d=c===void 0?{}:c,v=r.styles,y=v===void 0?{}:v;return Vl({type:"text",content:n},function(){return hr("beforeDOMElementCreation",{content:n,params:r}),Np({content:n,transform:L(L({},Vt),i),title:l,extra:{attributes:d,styles:y,classes:["".concat(D.cssPrefix,"-layers-text")].concat(Ai(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(Qv){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return D.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Np({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},jS=new RegExp('"',"ug"),zp=[1105920,1112319];function _S(e){var t=e.replace(jS,""),n=Uw(t,0),r=n>=zp[0]&&n<=zp[1],a=t.length===2?t[0]===t[1]:!1;return{value:Yu(a?t[0]:t),isSecondary:r||a}}function Mp(e,t){var n="".concat(vw).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=pa(e.children),o=i.filter(function(C){return C.getAttribute(Wu)===t})[0],l=Mn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Sw),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&c!=="none"&&c!==""){var d=l.getPropertyValue("content"),v=~["Sharp"].indexOf(s[2])?Ee:fe,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?wi[v][s[2].toLowerCase()]:kw[v][u],S=_S(d),x=S.value,k=S.isSecondary,m=s[0].startsWith("FontAwesome"),p=wf(y,x),h=p;if(m){var w=Gw(x);w.iconName&&w.prefix&&(p=w.iconName,y=w.prefix)}if(p&&!k&&(!o||o.getAttribute(hf)!==y||o.getAttribute(mf)!==h)){e.setAttribute(n,h),o&&e.removeChild(o);var P=yS(),g=P.extra;g.attributes[Wu]=t,qu(p,y).then(function(C){var R=kf(L(L({},P),{},{icons:{main:C,mask:Sf()},prefix:y,iconName:h,extra:g,watchable:!0})),O=pe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(O,e.firstChild):e.appendChild(O),O.outerHTML=R.map(function($){return Li($)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function NS(e){return Promise.all([Mp(e,"::before"),Mp(e,"::after")])}function RS(e){return e.parentNode!==document.head&&!~yw.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Wu)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Dp(e){if(fn)return new Promise(function(t,n){var r=pa(e.querySelectorAll("*")).filter(RS).map(NS),a=Ef.begin("searchPseudoElements");hg(),Promise.all(r).then(function(){a(),Zu(),t()}).catch(function(){a(),Zu(),n()})})}var TS={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Dp,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?pe:r;D.searchPseudoElements&&Dp(a)}}},Fp=!1,OS={mixout:function(){return{dom:{unwatch:function(){hg(),Fp=!0}}}},hooks:function(){return{bootstrap:function(){Ap(Gu("mutationObserverCallbacks",{}))},noAuto:function(){hS()},watch:function(n){var r=n.observeMutationsRoot;Fp?Zu():Ap(Gu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$p=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},AS={mixout:function(){return{parse:{transform:function(n){return $p(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=$p(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},y={outer:l,inner:d,path:v};return{tag:"g",attributes:L({},y.outer),children:[{tag:"g",attributes:L({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),y.path)}]}]}}}},Is={x:0,y:0,width:"100%",height:"100%"};function Up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function IS(e){return e.tag==="g"?e.children:[e]}var LS={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Hl(a.split(" ").map(function(o){return o.trim()})):Sf();return i.prefix||(i.prefix=Dn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,c=i.icon,d=o.width,v=o.icon,y=Aw({transform:s,containerWidth:d,iconWidth:u}),S={tag:"rect",attributes:L(L({},Is),{},{fill:"white"})},x=c.children?{children:c.children.map(Up)}:{},k={tag:"g",attributes:L({},y.inner),children:[Up(L({tag:c.tag,attributes:L(L({},c.attributes),y.path)},x))]},m={tag:"g",attributes:L({},y.outer),children:[k]},p="mask-".concat(l||Ei()),h="clip-".concat(l||Ei()),w={tag:"mask",attributes:L(L({},Is),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,m]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:IS(v)},w]};return r.push(P,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Is)}),{children:r,attributes:a}}}},zS={provides:function(t){var n=!1;Mn.matchMedia&&(n=Mn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:L(L({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:L(L({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:L(L({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},MS={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},DS=[zw,ES,CS,bS,PS,TS,OS,AS,LS,zS,MS];qw(DS,{mixoutsTo:xt});xt.noAuto;xt.config;xt.library;xt.dom;var ec=xt.parse;xt.findIconDefinition;xt.toHtml;var FS=xt.icon;xt.layer;xt.text;xt.counter;var vg={exports:{}},$S="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",US=$S,BS=US;function gg(){}function yg(){}yg.resetWarningCache=gg;var HS=function(){function e(r,a,i,o,l,s){if(s!==BS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:yg,resetWarningCache:gg};return n.PropTypes=n,n};vg.exports=HS();var VS=vg.exports;const X=pc(VS);function Bp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function bn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bp(Object(n),!0).forEach(function(r){Fr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vl(e){"@babel/helpers - typeof";return vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vl(e)}function Fr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function WS(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function YS(e,t){if(e==null)return{};var n=WS(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function tc(e){return QS(e)||GS(e)||KS(e)||XS()}function QS(e){if(Array.isArray(e))return nc(e)}function GS(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function KS(e,t){if(e){if(typeof e=="string")return nc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nc(e,t)}}function nc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function XS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qS(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,v=e.fixedWidth,y=e.inverse,S=e.border,x=e.listItem,k=e.flip,m=e.size,p=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":v,"fa-inverse":y,"fa-border":S,"fa-li":x,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Fr(t,"fa-".concat(m),typeof m<"u"&&m!==null),Fr(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Fr(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),Fr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(P){return w[P]?P:null}).filter(function(P){return P})}function JS(e){return e=e-0,e===e}function xg(e){return JS(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var ZS=["style"];function ek(e){return e.charAt(0).toUpperCase()+e.slice(1)}function tk(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=xg(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[ek(a)]=i:t[a]=i,t},{})}function wg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return wg(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.attrs.className=c,delete t.attributes.class;break;case"style":s.attrs.style=tk(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=c:s.attrs[xg(u)]=c}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=YS(n,ZS);return a.attrs.style=bn(bn({},a.attrs.style),o),e.apply(void 0,[t.tag,bn(bn({},a.attrs),l)].concat(tc(r)))}var Sg=!1;try{Sg=!0}catch{}function nk(){if(!Sg&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Hp(e){if(e&&vl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ec.icon)return ec.icon(e);if(e===null)return null;if(e&&vl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ls(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Fr({},e,t):{}}var Oe=pt.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,u=Hp(n),c=Ls("classes",[].concat(tc(qS(e)),tc(i.split(" ")))),d=Ls("transform",typeof e.transform=="string"?ec.transform(e.transform):e.transform),v=Ls("mask",Hp(r)),y=FS(u,bn(bn(bn(bn({},c),d),v),{},{symbol:a,title:o,titleId:l,maskId:s}));if(!y)return nk("Could not find icon",u),null;var S=y.abstract,x={ref:t};return Object.keys(e).forEach(function(k){Oe.defaultProps.hasOwnProperty(k)||(x[k]=e[k])}),rk(S[0],x)});Oe.displayName="FontAwesomeIcon";Oe.propTypes={beat:X.bool,border:X.bool,beatFade:X.bool,bounce:X.bool,className:X.string,fade:X.bool,flash:X.bool,mask:X.oneOfType([X.object,X.array,X.string]),maskId:X.string,fixedWidth:X.bool,inverse:X.bool,flip:X.oneOf([!0,!1,"horizontal","vertical","both"]),icon:X.oneOfType([X.object,X.array,X.string]),listItem:X.bool,pull:X.oneOf(["right","left"]),pulse:X.bool,rotation:X.oneOf([0,90,180,270]),shake:X.bool,size:X.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:X.bool,spinPulse:X.bool,spinReverse:X.bool,symbol:X.oneOfType([X.bool,X.string]),title:X.string,titleId:X.string,transform:X.oneOfType([X.string,X.object]),swapOpacity:X.bool};Oe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var rk=wg.bind(null,pt.createElement),ak={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]},Vp=ak,gl={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},qa={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},ik={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},ok={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]},lk={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},sk={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};function Ci({buttonText:e,onClick:t}){return f.jsx("div",{className:"buttons",children:f.jsx("button",{onClick:t,children:e})})}var Ke=function(){return Ke=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ke.apply(this,arguments)};function bi(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ce="-ms-",Ja="-moz-",re="-webkit-",kg="comm",Wl="rule",bf="decl",uk="@import",Eg="@keyframes",ck="@layer",Cg=Math.abs,Pf=String.fromCharCode,rc=Object.assign;function fk(e,t){return De(e,0)^45?(((t<<2^De(e,0))<<2^De(e,1))<<2^De(e,2))<<2^De(e,3):0}function bg(e){return e.trim()}function Kt(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function Mo(e,t,n){return e.indexOf(t,n)}function De(e,t){return e.charCodeAt(t)|0}function ra(e,t,n){return e.slice(t,n)}function Bt(e){return e.length}function Pg(e){return e.length}function Da(e,t){return t.push(e),e}function dk(e,t){return e.map(t).join("")}function Wp(e,t){return e.filter(function(n){return!Kt(n,t)})}var Yl=1,aa=1,jg=0,_t=0,_e=0,ha="";function Ql(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Yl,column:aa,length:o,return:"",siblings:l}}function yn(e,t){return rc(Ql("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Sr(e){for(;e.root;)e=yn(e.root,{children:[e]});Da(e,e.siblings)}function pk(){return _e}function hk(){return _e=_t>0?De(ha,--_t):0,aa--,_e===10&&(aa=1,Yl--),_e}function Mt(){return _e=_t<jg?De(ha,_t++):0,aa++,_e===10&&(aa=1,Yl++),_e}function or(){return De(ha,_t)}function Do(){return _t}function Gl(e,t){return ra(ha,e,t)}function ac(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mk(e){return Yl=aa=1,jg=Bt(ha=e),_t=0,[]}function vk(e){return ha="",e}function zs(e){return bg(Gl(_t-1,ic(e===91?e+2:e===40?e+1:e)))}function gk(e){for(;(_e=or())&&_e<33;)Mt();return ac(e)>2||ac(_e)>3?"":" "}function yk(e,t){for(;--t&&Mt()&&!(_e<48||_e>102||_e>57&&_e<65||_e>70&&_e<97););return Gl(e,Do()+(t<6&&or()==32&&Mt()==32))}function ic(e){for(;Mt();)switch(_e){case e:return _t;case 34:case 39:e!==34&&e!==39&&ic(_e);break;case 40:e===41&&ic(e);break;case 92:Mt();break}return _t}function xk(e,t){for(;Mt()&&e+_e!==57;)if(e+_e===84&&or()===47)break;return"/*"+Gl(t,_t-1)+"*"+Pf(e===47?e:Mt())}function wk(e){for(;!ac(or());)Mt();return Gl(e,_t)}function Sk(e){return vk(Fo("",null,null,null,[""],e=mk(e),0,[0],e))}function Fo(e,t,n,r,a,i,o,l,s){for(var u=0,c=0,d=o,v=0,y=0,S=0,x=1,k=1,m=1,p=0,h="",w=a,P=i,g=r,C=h;k;)switch(S=p,p=Mt()){case 40:if(S!=108&&De(C,d-1)==58){Mo(C+=Q(zs(p),"&","&\f"),"&\f",Cg(u?l[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:C+=zs(p);break;case 9:case 10:case 13:case 32:C+=gk(S);break;case 92:C+=yk(Do()-1,7);continue;case 47:switch(or()){case 42:case 47:Da(kk(xk(Mt(),Do()),t,n,s),s);break;default:C+="/"}break;case 123*x:l[u++]=Bt(C)*m;case 125*x:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+c:m==-1&&(C=Q(C,/\f/g,"")),y>0&&Bt(C)-d&&Da(y>32?Qp(C+";",r,n,d-1,s):Qp(Q(C," ","")+";",r,n,d-2,s),s);break;case 59:C+=";";default:if(Da(g=Yp(C,t,n,u,c,a,l,h,w=[],P=[],d,i),i),p===123)if(c===0)Fo(C,t,g,g,w,i,d,l,P);else switch(v===99&&De(C,3)===110?100:v){case 100:case 108:case 109:case 115:Fo(e,g,g,r&&Da(Yp(e,g,g,0,0,a,l,h,a,w=[],d,P),P),a,P,d,l,r?w:P);break;default:Fo(C,g,g,g,[""],P,0,l,P)}}u=c=y=0,x=m=1,h=C="",d=o;break;case 58:d=1+Bt(C),y=S;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&hk()==125)continue}switch(C+=Pf(p),p*x){case 38:m=c>0?1:(C+="\f",-1);break;case 44:l[u++]=(Bt(C)-1)*m,m=1;break;case 64:or()===45&&(C+=zs(Mt())),v=or(),c=d=Bt(h=C+=wk(Do())),p++;break;case 45:S===45&&Bt(C)==2&&(x=0)}}return i}function Yp(e,t,n,r,a,i,o,l,s,u,c,d){for(var v=a-1,y=a===0?i:[""],S=Pg(y),x=0,k=0,m=0;x<r;++x)for(var p=0,h=ra(e,v+1,v=Cg(k=o[x])),w=e;p<S;++p)(w=bg(k>0?y[p]+" "+h:Q(h,/&\f/g,y[p])))&&(s[m++]=w);return Ql(e,t,n,a===0?Wl:l,s,u,c,d)}function kk(e,t,n,r){return Ql(e,t,n,kg,Pf(pk()),ra(e,2,-2),0,r)}function Qp(e,t,n,r,a){return Ql(e,t,n,bf,ra(e,0,r),ra(e,r+1,-1),r,a)}function _g(e,t,n){switch(fk(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Ja+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Ja+e+ce+e+e;case 5936:switch(De(e,t+11)){case 114:return re+e+ce+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+ce+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+ce+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+ce+e+e;case 6165:return re+e+ce+"flex-"+e+e;case 5187:return re+e+Q(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return re+e+ce+"flex-item-"+Q(e,/flex-|-self/g,"")+(Kt(e,/flex-|baseline/)?"":ce+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return re+e+ce+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+ce+Q(e,"shrink","negative")+e;case 5292:return re+e+ce+Q(e,"basis","preferred-size")+e;case 6060:return re+"box-"+Q(e,"-grow","")+re+e+ce+Q(e,"grow","positive")+e;case 4554:return re+Q(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Kt(e,/flex-|baseline/))return ce+"grid-column-align"+ra(e,t)+e;break;case 2592:case 3360:return ce+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,a){return t=a,Kt(r.props,/grid-\w+-end/)})?~Mo(e+(n=n[t].value),"span",0)?e:ce+Q(e,"-start","")+e+ce+"grid-row-span:"+(~Mo(n,"span",0)?Kt(n,/\d+/):+Kt(n,/\d+/)-+Kt(e,/\d+/))+";":ce+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Kt(r.props,/grid-\w+-start/)})?e:ce+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Bt(e)-1-t>6)switch(De(e,t+1)){case 109:if(De(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Ja+(De(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mo(e,"stretch",0)?_g(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,i,o,l,s,u){return ce+a+":"+i+u+(o?ce+a+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(De(e,t+6)===121)return Q(e,":",":"+re)+e;break;case 6444:switch(De(e,De(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(De(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+ce+"$2box$3")+e;case 100:return Q(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function yl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ek(e,t,n,r){switch(e.type){case ck:if(e.children.length)break;case uk:case bf:return e.return=e.return||e.value;case kg:return"";case Eg:return e.return=e.value+"{"+yl(e.children,r)+"}";case Wl:if(!Bt(e.value=e.props.join(",")))return""}return Bt(n=yl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ck(e){var t=Pg(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}function bk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Pk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bf:e.return=_g(e.value,e.length,n);return;case Eg:return yl([yn(e,{value:Q(e.value,"@","@"+re)})],r);case Wl:if(e.length)return dk(n=e.props,function(a){switch(Kt(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Sr(yn(e,{props:[Q(a,/:(read-\w+)/,":"+Ja+"$1")]})),Sr(yn(e,{props:[a]})),rc(e,{props:Wp(n,r)});break;case"::placeholder":Sr(yn(e,{props:[Q(a,/:(plac\w+)/,":"+re+"input-$1")]})),Sr(yn(e,{props:[Q(a,/:(plac\w+)/,":"+Ja+"$1")]})),Sr(yn(e,{props:[Q(a,/:(plac\w+)/,ce+"input-$1")]})),Sr(yn(e,{props:[a]})),rc(e,{props:Wp(n,r)});break}return""})}}var jk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ft={},ia=typeof process<"u"&&ft!==void 0&&(ft.REACT_APP_SC_ATTR||ft.SC_ATTR)||"data-styled",Ng="active",Rg="data-styled-version",Kl="6.1.8",jf=`/*!sc*/
`,_f=typeof window<"u"&&"HTMLElement"in window,_k=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ft!==void 0&&ft.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ft.REACT_APP_SC_DISABLE_SPEEDY!==""?ft.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ft.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ft!==void 0&&ft.SC_DISABLE_SPEEDY!==void 0&&ft.SC_DISABLE_SPEEDY!==""&&ft.SC_DISABLE_SPEEDY!=="false"&&ft.SC_DISABLE_SPEEDY),Nk={},Xl=Object.freeze([]),oa=Object.freeze({});function Tg(e,t,n){return n===void 0&&(n=oa),e.theme!==n.theme&&e.theme||t||n.theme}var Og=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Rk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tk=/(^-|-$)/g;function Gp(e){return e.replace(Rk,"-").replace(Tk,"")}var Ok=/(a)(d)/gi,vo=52,Kp=function(e){return String.fromCharCode(e+(e>25?39:97))};function oc(e){var t,n="";for(t=Math.abs(e);t>vo;t=t/vo|0)n=Kp(t%vo)+n;return(Kp(t%vo)+n).replace(Ok,"$1-$2")}var Ms,Ag=5381,$r=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ig=function(e){return $r(Ag,e)};function Lg(e){return oc(Ig(e)>>>0)}function Ak(e){return e.displayName||e.name||"Component"}function Ds(e){return typeof e=="string"&&!0}var zg=typeof Symbol=="function"&&Symbol.for,Mg=zg?Symbol.for("react.memo"):60115,Ik=zg?Symbol.for("react.forward_ref"):60112,Lk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mk=((Ms={})[Ik]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ms[Mg]=Dg,Ms);function Xp(e){return("type"in(t=e)&&t.type.$$typeof)===Mg?Dg:"$$typeof"in e?Mk[e.$$typeof]:Lk;var t}var Dk=Object.defineProperty,Fk=Object.getOwnPropertyNames,qp=Object.getOwnPropertySymbols,$k=Object.getOwnPropertyDescriptor,Uk=Object.getPrototypeOf,Jp=Object.prototype;function Fg(e,t,n){if(typeof t!="string"){if(Jp){var r=Uk(t);r&&r!==Jp&&Fg(e,r,n)}var a=Fk(t);qp&&(a=a.concat(qp(t)));for(var i=Xp(e),o=Xp(t),l=0;l<a.length;++l){var s=a[l];if(!(s in zk||n&&n[s]||o&&s in o||i&&s in i)){var u=$k(t,s);try{Dk(e,s,u)}catch{}}}}return e}function la(e){return typeof e=="function"}function Nf(e){return typeof e=="object"&&"styledComponentId"in e}function rr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function lc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Pi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function sc(e,t,n){if(n===void 0&&(n=!1),!n&&!Pi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=sc(e[r],t[r]);else if(Pi(t))for(var r in t)e[r]=sc(e[r],t[r]);return e}function Rf(e,t){Object.defineProperty(e,"toString",{value:t})}function zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Bk=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,i=a;t>=i;)if((i<<=1)<0)throw zi(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=a;o<i;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n;this.groupSizes[t]=0;for(var i=r;i<a;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],a=this.indexOfGroup(t),i=a+r,o=a;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(jf);return n},e}(),$o=new Map,xl=new Map,Uo=1,go=function(e){if($o.has(e))return $o.get(e);for(;xl.has(Uo);)Uo++;var t=Uo++;return $o.set(e,t),xl.set(t,e),t},Hk=function(e,t){Uo=t+1,$o.set(e,t),xl.set(t,e)},Vk="style[".concat(ia,"][").concat(Rg,'="').concat(Kl,'"]'),Wk=new RegExp("^".concat(ia,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yk=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Qk=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(jf),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(Wk);if(s){var u=0|parseInt(s[1],10),c=s[2];u!==0&&(Hk(c,u),Yk(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}};function Gk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $g=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(l){var s=Array.from(l.querySelectorAll("style[".concat(ia,"]")));return s[s.length-1]}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(ia,Ng),r.setAttribute(Rg,Kl);var o=Gk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Kk=function(){function e(t){this.element=$g(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,a=0,i=r.length;a<i;a++){var o=r[a];if(o.ownerNode===n)return o}throw zi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Xk=function(){function e(t){this.element=$g(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),qk=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Zp=_f,Jk={isServer:!_f,useCSSOMInjection:!_k},wl=function(){function e(t,n,r){t===void 0&&(t=oa),n===void 0&&(n={});var a=this;this.options=Ke(Ke({},Jk),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&_f&&Zp&&(Zp=!1,function(i){for(var o=document.querySelectorAll(Vk),l=0,s=o.length;l<s;l++){var u=o[l];u&&u.getAttribute(ia)!==Ng&&(Qk(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Rf(this,function(){return function(i){for(var o=i.getTag(),l=o.length,s="",u=function(d){var v=function(m){return xl.get(m)}(d);if(v===void 0)return"continue";var y=i.names.get(v),S=o.getGroup(d);if(y===void 0||S.length===0)return"continue";var x="".concat(ia,".g").concat(d,'[id="').concat(v,'"]'),k="";y!==void 0&&y.forEach(function(m){m.length>0&&(k+="".concat(m,","))}),s+="".concat(S).concat(x,'{content:"').concat(k,'"}').concat(jf)},c=0;c<l;c++)u(c);return s}(a)})}return e.registerId=function(t){return go(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ke(Ke({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,a=n.target;return n.isServer?new qk(a):r?new Kk(a):new Xk(a)}(this.options),new Bk(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(go(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(go(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(go(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Zk=/&/g,e2=/^\s*\/\/.*$/gm;function Ug(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ug(n.children,t)),n})}function t2(e){var t,n,r,a=e===void 0?oa:e,i=a.options,o=i===void 0?oa:i,l=a.plugins,s=l===void 0?Xl:l,u=function(v,y,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):v},c=s.slice();c.push(function(v){v.type===Wl&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(Zk,n).replace(r,u))}),o.prefix&&c.push(Pk),c.push(Ek);var d=function(v,y,S,x){y===void 0&&(y=""),S===void 0&&(S=""),x===void 0&&(x="&"),t=x,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var k=v.replace(e2,""),m=Sk(S||y?"".concat(S," ").concat(y," { ").concat(k," }"):k);o.namespace&&(m=Ug(m,o.namespace));var p=[];return yl(m,Ck(c.concat(bk(function(h){return p.push(h)})))),p};return d.hash=s.length?s.reduce(function(v,y){return y.name||zi(15),$r(v,y.name)},Ag).toString():"",d}var n2=new wl,uc=t2(),Bg=pt.createContext({shouldForwardProp:void 0,styleSheet:n2,stylis:uc});Bg.Consumer;pt.createContext(void 0);function cc(){return j.useContext(Bg)}var r2=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=uc);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Rf(this,function(){throw zi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=uc),this.name+t.hash},e}(),a2=function(e){return e>="A"&&e<="Z"};function eh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;a2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Hg=function(e){return e==null||e===!1||e===""},Vg=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Hg(i)&&(Array.isArray(i)&&i.isCss||la(i)?r.push("".concat(eh(a),":"),i,";"):Pi(i)?r.push.apply(r,bi(bi(["".concat(a," {")],Vg(i),!1),["}"],!1)):r.push("".concat(eh(a),": ").concat((t=a,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in jk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function In(e,t,n,r){if(Hg(e))return[];if(Nf(e))return[".".concat(e.styledComponentId)];if(la(e)){if(!la(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var a=e(t);return In(a,t,n,r)}var i;return e instanceof r2?n?(e.inject(n,r),[e.getName(r)]):[e]:Pi(e)?Vg(e):Array.isArray(e)?Array.prototype.concat.apply(Xl,e.map(function(o){return In(o,t,n,r)})):[e.toString()]}function Wg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(la(n)&&!Nf(n))return!1}return!0}var i2=Ig(Kl),o2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Wg(t),this.componentId=n,this.baseHash=$r(i2,n),this.baseStyle=r,wl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=rr(a,this.staticRulesId);else{var i=lc(In(this.rules,t,n,r)),o=oc($r(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}a=rr(a,o),this.staticRulesId=o}else{for(var s=$r(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var v=lc(In(d,t,n,r));s=$r(s,v+c),u+=v}}if(u){var y=oc(s>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),a=rr(a,y)}}return a},e}(),Tf=pt.createContext(void 0);Tf.Consumer;var Fs={};function l2(e,t,n){var r=Nf(e),a=e,i=!Ds(e),o=t.attrs,l=o===void 0?Xl:o,s=t.componentId,u=s===void 0?function(w,P){var g=typeof w!="string"?"sc":Gp(w);Fs[g]=(Fs[g]||0)+1;var C="".concat(g,"-").concat(Lg(Kl+g+Fs[g]));return P?"".concat(P,"-").concat(C):C}(t.displayName,t.parentComponentId):s,c=t.displayName,d=c===void 0?function(w){return Ds(w)?"styled.".concat(w):"Styled(".concat(Ak(w),")")}(e):c,v=t.displayName&&t.componentId?"".concat(Gp(t.displayName),"-").concat(t.componentId):t.componentId||u,y=r&&a.attrs?a.attrs.concat(l).filter(Boolean):l,S=t.shouldForwardProp;if(r&&a.shouldForwardProp){var x=a.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;S=function(w,P){return x(w,P)&&k(w,P)}}else S=x}var m=new o2(n,v,r?a.componentStyle:void 0);function p(w,P){return function(g,C,R){var O=g.attrs,$=g.componentStyle,q=g.defaultProps,ve=g.foldedComponentIds,he=g.styledComponentId,Ve=g.target,Ft=pt.useContext(Tf),wt=cc(),ae=g.shouldForwardProp||wt.shouldForwardProp,I=Tg(C,Ft,q)||oa,F=function(We,be,ut){for(var Wn,Qt=Ke(Ke({},be),{className:void 0,theme:ut}),va=0;va<We.length;va+=1){var Ie=la(Wn=We[va])?Wn(Qt):Wn;for(var tt in Ie)Qt[tt]=tt==="className"?rr(Qt[tt],Ie[tt]):tt==="style"?Ke(Ke({},Qt[tt]),Ie[tt]):Ie[tt]}return be.className&&(Qt.className=rr(Qt.className,be.className)),Qt}(O,C,I),B=F.as||Ve,K={};for(var ee in F)F[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&F.theme===I||(ee==="forwardedAs"?K.as=F.forwardedAs:ae&&!ae(ee,B)||(K[ee]=F[ee]));var st=function(We,be){var ut=cc(),Wn=We.generateAndInjectStyles(be,ut.styleSheet,ut.stylis);return Wn}($,F),Ce=rr(ve,he);return st&&(Ce+=" "+st),F.className&&(Ce+=" "+F.className),K[Ds(B)&&!Og.has(B)?"class":"className"]=Ce,K.ref=R,j.createElement(B,K)}(h,w,P)}p.displayName=d;var h=pt.forwardRef(p);return h.attrs=y,h.componentStyle=m,h.displayName=d,h.shouldForwardProp=S,h.foldedComponentIds=r?rr(a.foldedComponentIds,a.styledComponentId):"",h.styledComponentId=v,h.target=r?a.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var g=[],C=1;C<arguments.length;C++)g[C-1]=arguments[C];for(var R=0,O=g;R<O.length;R++)sc(P,O[R],!0);return P}({},a.defaultProps,w):w}}),Rf(h,function(){return".".concat(h.styledComponentId)}),i&&Fg(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function th(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var nh=function(e){return Object.assign(e,{isCss:!0})};function Yg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(la(e)||Pi(e))return nh(In(th(Xl,bi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?In(r):nh(In(th(r,t)))}function fc(e,t,n){if(n===void 0&&(n=oa),!t)throw zi(1,t);var r=function(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Yg.apply(void 0,bi([a],i,!1)))};return r.attrs=function(a){return fc(e,t,Ke(Ke({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return fc(e,t,Ke(Ke({},n),a))},r}var Qg=function(e){return fc(l2,e)},A=Qg;Og.forEach(function(e){A[e]=Qg(e)});var s2=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Wg(t),wl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,a){var i=a(lc(In(this.rules,n,r,a)),""),o=this.componentId+t;r.insertRules(o,o,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,a){t>2&&wl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,a)},e}();function ma(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Yg.apply(void 0,bi([e],t,!1)),a="sc-global-".concat(Lg(JSON.stringify(r))),i=new s2(r,a),o=function(s){var u=cc(),c=pt.useContext(Tf),d=pt.useRef(u.styleSheet.allocateGSInstance(a)).current;return u.styleSheet.server&&l(d,s,u.styleSheet,c,u.stylis),pt.useLayoutEffect(function(){if(!u.styleSheet.server)return l(d,s,u.styleSheet,c,u.stylis),function(){return i.removeStyles(d,u.styleSheet)}},[d,s,u.styleSheet,c,u.stylis]),null};function l(s,u,c,d,v){if(i.isStatic)i.renderStyles(s,Nk,c,v);else{var y=Ke(Ke({},u),{theme:Tg(u,d,o.defaultProps)});i.renderStyles(s,y,c,v)}}return pt.memo(o)}const u2="/assets/logo-BuvAxNMy.png",c2=A.div`
    width: 100%;
    max-width: 293px;
    height: 73px;
    border-radius: 10px 0px 0px 0px;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 400px) {
        max-width: calc(100% - 1rem);
    }
`,f2=A.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;function Mi(){return f.jsx(c2,{children:f.jsx(f2,{src:u2,alt:"Logo"})})}const Di="/assets/pavel-BvRLFOUD.jfif";/*! js-cookie v3.0.5 | MIT */function yo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var d2={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function dc(e,t){function n(a,i,o){if(!(typeof document>"u")){o=yo({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),a=encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var s in o)o[s]&&(l+="; "+s,o[s]!==!0&&(l+="="+o[s].split(";")[0]));return document.cookie=a+"="+e.write(i,a)+l}}function r(a){if(!(typeof document>"u"||arguments.length&&!a)){for(var i=document.cookie?document.cookie.split("; "):[],o={},l=0;l<i.length;l++){var s=i[l].split("="),u=s.slice(1).join("=");try{var c=decodeURIComponent(s[0]);if(o[c]=e.read(u,c),a===c)break}catch{}}return a?o[a]:o}}return Object.create({set:n,get:r,remove:function(a,i){n(a,"",yo({},i,{expires:-1}))},withAttributes:function(a){return dc(this.converter,yo({},this.attributes,a))},withConverter:function(a){return dc(yo({},this.converter,a),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var p2=dc(d2,{path:"/"});const h2=ma`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #f2f2f2;
    line-height: 1.5;
  }
`,m2=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  padding: 2rem;
  width: 90%; /* Ajuste para 90% da largura */
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`,rh=A.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  gap: 1rem; /* Ajuste para 1rem */
`,ah=A.div`
  width: 15%; /* Ajuste para 15% */
  max-width: 40px; /* Ajuste para 40px */
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e5e7eb;
  border-radius: 10px 0px 0px 10px;
  background-color: #ffffff;
`,ih=A.input`
  flex: 1;
  height: 38px;
  border: none;
  margin-left: -0.75rem;
  border-radius: 0px 10px 10px 0px;
  color: #363636;
  padding: 10px;
  background-color: #ffffff;
  font-family: Public Sans;
  font-size: 1rem; /* Ajuste para 1rem */
  font-weight: 400;
  line-height: 1.5rem; /* Ajuste para 1.5rem */
  text-align: left;

  &::placeholder {
    color: #e5e7eb;
  }
`,v2=A.p`
  font-family: inter;
  font-size: 1rem; /* Ajuste para 1rem */
  font-weight: 500;
  line-height: 1rem; /* Ajuste para 1rem */
  text-align: left;
  color: #566a7f;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`,g2=A.div`
  font-family: inter;
  font-size: 1rem; /* Ajuste para 1rem */
  font-weight: 400;
  line-height: 1.5rem; /* Ajuste para 1.5rem */
  text-align: left;
  color: #566a7f;
  cursor: pointer;
`,y2=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`,x2=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  opacity: 0px;
  background: #e5e7eb;
  padding: 0.1rem;
  width: 58.56vw; /* Alterado para uma unidade de medida mais apropriada */
  height: 70vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0;
  }
`,w2=A.div`
  width: 50%;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,S2=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,k2=A.div`
  width: 50%;
  height: auto;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;function E2(){const[e,t]=j.useState({email:"",password:""}),n=o=>{const{name:l,value:s}=o.target;t(u=>({...u,[l]:s}))},r=async o=>{o.preventDefault(),await fetch("http://localhost:7777/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(l=>{if(!l.ok)throw new Error("Ocorreu um erro ao enviar o formulário.");return l.json()}).then(l=>{console.log("Resposta do servidor:",l);const s=l.bearerToken;window.localStorage.setItem("token",s),p2.set("token",s,{expires:7}),window.location.href="/dashboard"}).catch(l=>{console.error("Erro:",l)})},a=()=>{window.location.href="/auth/register"},i=()=>{window.location.href="/auth/recovery"};return f.jsxs(f.Fragment,{children:[f.jsx(h2,{}),f.jsxs(x2,{children:[f.jsx(w2,{className:"d-none d-md-block",children:f.jsx(S2,{src:Di,alt:"Pavel"})}),f.jsx(k2,{children:f.jsxs(m2,{children:[f.jsx(Mi,{}),f.jsx(v2,{children:"INFORME SUAS CREDENCIAIS DE ACESSO"}),f.jsxs(rh,{children:[f.jsx(ah,{children:f.jsx(Oe,{icon:qa})}),f.jsx(ih,{type:"text",placeholder:"Usuário/ E-mail",id:"email",name:"email",onChange:n,value:e.email})]}),f.jsxs(rh,{children:[f.jsx(ah,{children:f.jsx(Oe,{icon:gl})}),f.jsx(ih,{type:"password",placeholder:"Senha",id:"password",name:"password",value:e.password,onChange:n})]}),f.jsx(g2,{onClick:i,children:f.jsx("u",{children:"Esqueci minha senha"})}),f.jsxs(y2,{children:[f.jsx(Ci,{buttonText:"Login",onClick:r}),f.jsx(Ci,{buttonText:"Register",onClick:a})]})]})})]})]})}const C2=ma`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #f2f2f2;
    line-height: 1.5;
  }
`,b2=A.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
`,P2=A.div`
    display: flex;
    align-items: stretch;
    width: 100%;
    gap: 10px;
    position: relative;
`,j2=A.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E5E7EB;
    border-radius: 10px 0px 0px 10px;
    background-color: #ffffff;
`,_2=A.input`
    flex: 1;
    height: 38px;
    margin-left: -0.75rem;
    border: none;
    border-radius: 0px 10px 10px 0px;
    color: #363636;
    padding: 10px;
    background-color: #ffffff;
    font-family: Public Sans;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

    &::placeholder {
        color: #E5E7EB;
    }
`,N2=A.p`
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 14.1px;
    text-align: left;
    color: #566A7F;
`,R2=A.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`,T2=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  opacity: 0px;
  background: #e5e7eb;
  padding: 0.1rem;
  width: 58.56vw; /* Alterado para uma unidade de medida mais apropriada */
  height: 70vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0;
  }
`,O2=A.div`
  width: 50%;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,A2=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,I2=A.div`
  width: 50%;
  height: auto;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;function L2(){const[e,t]=j.useState(""),n=a=>{t(a.target.value)},r=async()=>{await fetch("http://databases-proschedule-backend.dkujoa.easypanel.host:8080/auth/forgot-password",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})}).then(a=>{a.ok?console.log("Email enviado com sucesso"):console.error("Falha ao enviar email")}).catch(a=>{console.error("Erro ao enviar email:",a)})};return f.jsxs(f.Fragment,{children:[f.jsx(C2,{}),f.jsxs(T2,{children:[f.jsx(O2,{className:"d-none d-md-block",children:f.jsx(A2,{src:Di,alt:"Pavel"})}),f.jsx(I2,{children:f.jsxs(b2,{children:[f.jsx(Mi,{}),f.jsx(N2,{children:"INFORME SEU E-MAIL DE USUÁRIO"}),f.jsxs(P2,{children:[f.jsx(j2,{children:f.jsx(Oe,{icon:qa})}),f.jsx("div",{className:"divider"}),f.jsx(_2,{type:"text",placeholder:"E-mail",value:e,onChange:n})]}),f.jsx(R2,{children:f.jsx(Ci,{buttonText:"Recuperar Senha",onClick:r})})]})})]})]})}function z2({meeting:e}){return f.jsxs("div",{className:"meetings-scheduled",children:[f.jsxs("p",{children:[f.jsx("strong",{children:e.name}),"-",e.duration]}),f.jsxs("p",{children:[f.jsx("strong",{children:"Solicitada por:"})," ",e.requestedBy]})]})}function Of(){const[e,t]=j.useState(!1),[n,r]=j.useState(!1),a=()=>{t(!e),document.body.classList.toggle("menu-open")},i=()=>{r(!n)};return f.jsxs("div",{className:"header",children:[f.jsxs("div",{className:`menu-icon ${e?"open":""}`,onClick:a,children:[f.jsx("div",{className:"bar"}),f.jsx("div",{className:"bar"}),f.jsx("div",{className:"bar"})]}),f.jsxs("div",{className:`header-links ${e?"open":""}`,children:[f.jsx(kr,{to:"/dashboard",onClick:a,children:"DASHBOARD"}),f.jsx(kr,{to:"/events",onClick:a,children:"EVENTS"}),f.jsx(kr,{to:"/scheduled-events",onClick:a,children:"SCHEDULED EVENTS"})]}),f.jsxs("div",{className:"user-profile",children:[f.jsx("img",{src:"src/assets/icon-perfil.jpg",alt:"User Icon",className:"user-icon",onClick:i}),n&&f.jsxs("div",{className:"profile-menu",children:[f.jsx(kr,{to:"/profile",children:"Perfil"}),f.jsx(kr,{to:"/logout",children:"Sair"})]}),f.jsxs("div",{className:"perfil",children:[f.jsx("span",{className:"user-name",children:"Rick Sanches"})," ",f.jsx("br",{}),f.jsx("span",{className:"occupation",children:"Engenheiro de software"})]})]})]})}const M2=()=>{const[e,t]=j.useState([]),[n,r]=j.useState([]);j.useEffect(()=>{const x=async()=>{try{const p=await fetch("http://localhost:3000/appointments");if(!p.ok)throw new Error("Failed to fetch appointments");const h=await p.json();console.log("Appointments:",h),t(h)}catch(p){console.error("Error fetching appointments:",p)}},k=async()=>{try{const p=await fetch("http://localhost:3000/eventsSchedule");if(!p.ok)throw new Error("Failed to fetch eventsSchedule");const h=await p.json();console.log("Events Schedule:",h),r(h)}catch(p){console.error("Error fetching eventsSchedule:",p)}},m=()=>{const p=n.map((h,w)=>f.jsxs("div",{className:"meeting-card",children:[f.jsx(z2,{meeting:{scheduleEvent:h.scheduleEvent,hours:h.hours,name:h.name,day:h.day}},w),f.jsx("p",{className:"data",children:h.day})]},w));r(p)};x(),m(),k()},[]);const a=x=>{if(x.length===0)return null;const k=new Date(Math.max(...x.map(w=>new Date(w.date)))),p=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][k.getMonth()],h=k.getFullYear();return`${p} de ${h}`},[i,o]=j.useState(1),[l,s]=j.useState(3),u=i*l,c=u-l,d=n.slice(c,u),v=x=>o(x),y=()=>{i<Math.ceil(n.length/l)&&o(i+1)},S=()=>{i>1&&o(i-1)};return f.jsxs("div",{className:"dashboard",children:[f.jsx(Of,{}),f.jsx("div",{className:"content",children:f.jsxs("div",{className:"cards",children:[f.jsxs("div",{className:"months-agenda",children:[f.jsx("p",{className:"agenda-header",children:"Agenda do mês"}),f.jsxs("div",{className:"agenda-cards-container",children:[f.jsxs("div",{className:"agenda-card made",children:[f.jsx("span",{className:"circle-green"}),f.jsx("h3",{children:"Atendimentos Realizados"}),f.jsxs("p",{children:["Você efetuou ",e.length," atendimento(s)"]}),f.jsxs("p",{className:"data",children:[f.jsx("img",{src:"../src/assets/calendar3.svg",alt:""}),a(e)]})]}),f.jsxs("div",{className:"agenda-card canceled",children:[f.jsx("span",{className:"circle-red"}),f.jsx("h3",{children:"Atendimentos Cancelados"}),f.jsxs("p",{children:["Você cancelou ",e.length," atendimento(s)"]}),f.jsxs("p",{className:"data",children:[f.jsx("img",{src:"../src/assets/calendar3.svg",alt:""}),a(e)]})]}),f.jsxs("div",{className:"agenda-card postponed",children:[f.jsx("span",{className:"circle-blueLight"}),f.jsx("h3",{children:"Atendimentos Adiados"}),f.jsxs("p",{children:["Você adiou ",e.length," atendimento(s)"]}),f.jsxs("p",{className:"data",children:[f.jsx("img",{src:"../src/assets/calendar3.svg",alt:""}),a(e)]})]})]})]}),f.jsxs("div",{className:"meetings",children:[f.jsx("p",{className:"meetings-header",children:"Reuniões Marcadas"}),f.jsx("div",{className:"meetings-cards-container",children:d.map((x,k)=>f.jsxs("div",{className:"agenda-card",children:[f.jsxs("p",{children:[f.jsx("strong",{children:x.scheduleEvent})," -",x.hours]}),f.jsxs("p",{children:[f.jsx("strong",{children:"Reunião solicitada por: "}),x.name]}),f.jsx("p",{}),f.jsxs("p",{children:[f.jsx("img",{src:"../src/assets/calendar3.svg",alt:""}),x.day]})]},k))}),f.jsxs("div",{className:"pagination",children:[f.jsxs("button",{onClick:S,children:[" ",f.jsx("img",{src:"../src/assets/arrow_back.svg",alt:""})]}),Array.from({length:Math.ceil(n.length/l)},(x,k)=>f.jsx("button",{onClick:()=>v(k+1),children:k+1},k)),f.jsxs("button",{onClick:y,children:[" ",f.jsx("img",{src:"../src/assets/arrow_forward.svg",alt:""})]})]})]})]})})]})};function D2(){const[e,t]=j.useState(""),[n,r]=j.useState(""),[a,i]=j.useState(""),[o,l]=j.useState(!1),[s,u]=j.useState({seg:!1,ter:!1,qua:!1,qui:!1,sex:!1,sab:!1,dom:!1}),[c,d]=j.useState([]);function v(){l(!0)}function y(){l(!1)}function S(k){u(m=>({...m,[k]:!m[k]}))}function x(){if(!e||!n||!a){alert("Por favor, preencha todos os campos.");return}const k=Object.keys(s).filter(p=>s[p]);console.log("Dias disponíveis:",k);const m={title:e,content:n,time:a,selectedDays:k};d([...c,m]),t(""),r(""),i(""),u({seg:!1,ter:!1,qua:!1,qui:!1,sex:!1,sab:!1,dom:!1}),l(!1),alert("Evento criado com sucesso!")}return f.jsxs("div",{className:"dashboard",children:[f.jsx(Of,{}),o&&f.jsx("div",{className:"modal",children:f.jsxs("div",{className:"modal-content",children:[f.jsx("span",{className:"close",onClick:y,children:"×"}),f.jsxs("div",{id:"formContainer",children:[f.jsx("input",{type:"text",name:"title",id:"title",placeholder:"Titulo do Evento",value:e,onChange:k=>t(k.target.value)}),f.jsx("textarea",{name:"content",id:"content",cols:"20",rows:"5",placeholder:"Qual a descrição do evento?",value:n,onChange:k=>r(k.target.value)}),f.jsxs("div",{className:"day-time-info",children:[f.jsxs("ul",{children:[f.jsxs("li",{children:[f.jsx("span",{children:"SEG"}),f.jsxs("div",{className:"check-slider",children:[f.jsx("input",{type:"checkbox",id:"seg",checked:s.seg,onChange:()=>S("seg")}),f.jsx("label",{htmlFor:"seg",className:"switch",children:f.jsx("span",{className:"slider"})})]})]}),f.jsxs("li",{children:[f.jsx("span",{children:"TER"}),f.jsxs("div",{className:"check-slider",children:[f.jsx("input",{type:"checkbox",id:"ter",checked:s.ter,onChange:()=>S("ter")}),f.jsx("label",{htmlFor:"ter",className:"switch",children:f.jsx("span",{className:"slider"})})]})]}),f.jsxs("li",{children:[f.jsx("span",{children:"QUA"}),f.jsxs("div",{className:"check-slider",children:[f.jsx("input",{type:"checkbox",id:"qua",checked:s.qua,onChange:()=>S("qua")}),f.jsx("label",{htmlFor:"qua",className:"switch",children:f.jsx("span",{className:"slider"})})]})]}),f.jsxs("li",{children:[f.jsx("span",{children:"QUI"}),f.jsxs("div",{className:"check-slider",children:[f.jsx("input",{type:"checkbox",id:"qui",checked:s.qui,onChange:()=>S("qui")}),f.jsx("label",{htmlFor:"qui",className:"switch",children:f.jsx("span",{className:"slider"})})]})]}),f.jsxs("li",{children:[f.jsx("span",{children:"SEX"}),f.jsxs("div",{className:"check-slider",children:[f.jsx("input",{type:"checkbox",id:"sex",checked:s.sex,onChange:()=>S("sex")}),f.jsx("label",{htmlFor:"sex",className:"switch",children:f.jsx("span",{className:"slider"})})]})]}),f.jsxs("li",{children:[f.jsx("span",{children:"SAB"}),f.jsxs("div",{className:"check-slider",children:[f.jsx("input",{type:"checkbox",id:"sab",checked:s.sab,onChange:()=>S("sab")}),f.jsx("label",{htmlFor:"sab",className:"switch",children:f.jsx("span",{className:"slider"})})]})]}),f.jsxs("li",{children:[f.jsx("span",{children:"DOM"}),f.jsxs("div",{className:"check-slider",children:[f.jsx("input",{type:"checkbox",id:"dom",checked:s.dom,onChange:()=>S("dom")}),f.jsx("label",{htmlFor:"dom",className:"switch",children:f.jsx("span",{className:"slider"})})]})]})]}),f.jsxs("select",{name:"time",id:"time",required:!0,value:a,onChange:k=>i(k.target.value),children:[f.jsx("option",{value:"",disabled:!0,children:"Selecione o tempo"}),f.jsx("option",{value:"30 min",children:"30 min"}),f.jsx("option",{value:"45 min",children:"45 min"}),f.jsx("option",{value:"60 min",children:"60 min"}),f.jsx("option",{value:"custom",children:"Custom"})]}),a==="custom"&&f.jsx("input",{type:"text",id:"customTimeInput",name:"customTime",placeholder:"Insira o tempo desejado"})]}),f.jsx("button",{id:"submitButton",onClick:x,children:"Adicionar Evento"})]})]})}),f.jsxs("div",{id:"events",className:"container",children:[f.jsxs("button",{id:"showFormButton",onClick:v,children:[f.jsx("img",{src:"../../../src/assets/+.svg",alt:"botão de adicionar"})," "]}),c.map((k,m)=>f.jsxs("div",{className:"appointment",children:[f.jsx("h1",{children:k.title}),f.jsx("label",{children:k.time}),f.jsx("p",{children:k.content}),f.jsxs("p",{className:"cardDays",children:["Dias: ",k.selectedDays.join(", ")]})]},m))]})," "]})}const F2=A.div`
  width: 90%;
  margin-left: 4rem;
  margin-top: 5rem;
  border-radius: 0.5rem;
  background-color: #363636d8;
  color: white;

  .content-menu {
    height: 4rem;
    border-bottom: 1px solid rgba(243, 176, 192, 0.45);
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 1rem;

    button {
      color: white;
      text-decoration: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem 1rem;
      transition: 0.1s;
    }

    button.active {
      color: #f3b0c0;
    }
    button:hover {
      border-bottom: solid 2px #fc5f54;
    }
  }

  label {
    color: white;
  }

  table {
    overflow-y: scroll;
    max-width: 100rem;
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
    margin: 0 auto; /* Centraliza a tabela horizontalmente */

    th {
      max-width: 100%;
      width: 30rem;
      overflow-x: auto;
      padding: 8px 1px; /* Reduz o preenchimento dos elementos th e td */
      margin: 0;
      border-bottom: 1px solid #ddd;
      font-weight: bold;
    }

    td {
      padding: 1rem 0;
      padding-left: 6rem;
      max-width: 100%; /* Define a largura máxima como 100% */
      width: 30rem; /* Define a largura automática para acomodar o conteúdo */
      overflow-x: auto;
      border-bottom: 1px solid #ddd;
    }
  }

  .button-confirm,
  .button-denied {
    justify-content: center;
  }
  .button-confirm {
    color: #4caf50;
    background-color: #363636d8;
    border: solid 0px #363636d8;
    border-radius: 10px;
    padding: 10px;

    cursor: pointer;
    transition: 0.5s;
  }
  .button-confirm:hover {
    background-color: #4caf50;
    color: white;
  }
  .button-denied {
    color: #ff0000;
    background-color: #363636d8;
    border: solid 0px #363636d8;
    border-radius: 10px;
    padding: 10px;
    margin-top: 0.5rem;
    cursor: pointer;
    transition: 0.5s;
    width: 5rem;
  }
  .button-denied:hover {
    background-color: #ff0000;
    color: white;
  }
  #eventsPerPage {
    position: relative;
    top: 0rem;
    left: 1rem;
  }

  .pagination-button {
    background-color: transparent;
    color: #555;
    border: 1px solid #ccc;
    padding: 8px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 0px 4px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  .pagination-button:hover {
    background-color: white;
  }
  .pagination-button.active {
    background-color: #4caf50;
    color: white;
  }

  #pagination {
    display: flex;
    justify-content: center;
  }
  #events {
    display: contents;
  }
  @media screen and (max-width: 1111px) {
    table th,
    table td {
      padding: 0.5rem 3rem; /* Reduz o espaçamento entre as células em telas menores */
    }

    .pagination-button {
      padding: 6px 8px; /* Reduz o padding dos botões de paginação */
      font-size: 12px; /* Reduz o tamanho da fonte dos botões de paginação */
    }
    @media screen and (max-width: 1050px) {
      table th,
      table td {
        padding: 0.5rem 2rem; /* Reduz o espaçamento entre as células em telas menores */
      }
    }
  }
  @media screen and (max-width: 803px) {
    table {
      td {
        position: relative;
        max-width: 10%;
        width: -2rem;
      }
      th {
        max-width: 10%;
        width: 1rem;
      }
    }
  }
  @media screen and (max-width: 762px) {
    margin-left: 0rem;
    table th,
    table td {
      padding: 0.5rem 1rem; /* Reduz o espaçamento entre as células em telas menores */
    }
  }
  @media screen and (max-width: 576px) {
    table th,
    table td {
      padding: 0.5rem;
      font-size: 12px;
    }

    .content-menu {
      flex-direction: column;
      gap: 0.5rem;
    }

    .content-menu button {
      padding: 0.3rem 0.5rem;
      font-size: 12px;
    }

    #eventsPerPage {
      font-size: 12px;
      padding: 0.3rem 0.5rem;
    }
  }
  @media screen and (max-width: 350px) {
    table th,
    table td {
      padding: 0.3rem;
      font-size: 10px;
    }

    .content-menu {
      flex-direction: column;
      gap: 0.3rem;
    }

    .content-menu button {
      padding: 0.2rem 0.4rem;
      font-size: 10px;
    }

    #eventsPerPage {
      font-size: 10px;
      padding: 0.2rem 0.4rem;
    }
  }
`,$2=()=>{const[e,t]=j.useState([]),[n,r]=j.useState([]),[a,i]=j.useState(1),[o,l]=j.useState(10),[s,u]=j.useState("Confirmed");j.useEffect(()=>{(async()=>{try{const w=await fetch("http://localhost:3000/eventsSchedule");if(!w.ok)throw new Error("Failed to fetch events");const P=await w.json();console.log("events",P),t(P),y(P),k(P)}catch(w){console.log("error fetching events",w)}})()},[]),j.useEffect(()=>{i(1)},[n]);const c=h=>{const w=(a-1)*o,P=Math.min(w+o,h.length);return h.slice(w,P).map((C,R)=>f.jsxs("tr",{children:[f.jsx("td",{children:C.name}),f.jsx("td",{children:C.scheduleEvent}),f.jsx("td",{children:C.day}),f.jsx("td",{children:C.hours}),f.jsxs("td",{children:[C.status==="Confirmed"&&f.jsx("span",{style:{color:"green"},children:"Confirmado"}),C.status==="PendingApproval"&&f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"button-confirm",onClick:()=>d(C),children:"Confirmar"}),f.jsx("button",{className:"button-denied",onClick:()=>v(C),children:"Negar"})]}),C.status==="Past"||C.status==="Denied"?f.jsx("span",{style:{color:C.status==="Past"?"orange":"red"},children:C.status==="Past"?"Prazo ultrapassado":"Negado"}):null]})]},R))},d=h=>{const w=e.map(P=>P===h?{...P,status:"Confirmed"}:P);t(w),y(w)},v=h=>{const w=e.map(P=>P===h?{...P,status:"Denied"}:P);t(w),s==="Past"?r(w.filter(P=>P.status==="Confirmed"||P.status==="Denied"||P.status==="Past")):y(w)},y=h=>{const w=h.filter(P=>P.status==="Confirmed");r(w),u("Confirmed")},S=()=>{const h=e.filter(w=>w.status==="PendingApproval");r(h),u("PendingApproval")},x=()=>{const h=e.filter(w=>w.status==="Past"||w.status==="Denied"||w.status==="Confirmed");r(h),u("Past")},k=h=>{const w=new Date,P=h.map(g=>{const[C,R,O]=g.day.split("/"),[$,q]=g.hours.split(":"),ve=parseInt(C),he=parseInt(R)-1,Ve=parseInt(O),Ft=parseInt($),wt=parseInt(q);return new Date(Ve,he,ve,Ft,wt)<w&&g.status!=="Past"&&g.status!=="Denied"?{...g,status:"Past"}:g});t(P),s==="Past"&&r(P.filter(g=>g.status==="Confirmed"||g.status==="Denied"||g.status==="Past"))},m=Math.ceil(n.length/o),p=[];for(let h=1;h<=m;h++)p.push(f.jsx("button",{className:"pagination-button",onClick:()=>i(h),children:h},h));return f.jsxs(f.Fragment,{children:[f.jsx(Of,{}),f.jsxs(F2,{children:[f.jsxs("div",{className:"content-menu",children:[f.jsx("button",{onClick:y,children:"Confirmed"}),f.jsx("button",{onClick:S,children:"Pending approval"}),f.jsx("button",{onClick:x,children:"Past"})]}),f.jsxs("table",{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Nome"}),f.jsx("th",{children:"Evento"}),f.jsx("th",{children:"Dia"}),f.jsx("th",{children:"Hora"}),f.jsx("th",{children:"Status"})]})}),f.jsx("tbody",{id:"events",children:c(n)})]}),f.jsxs("select",{id:"eventsPerPage",value:o,onChange:h=>l(parseInt(h.target.value)),children:[f.jsx("option",{value:5,children:"5"}),f.jsx("option",{value:10,children:"10"}),f.jsx("option",{value:15,children:"15"}),f.jsx("option",{value:20,children:"20"})]}),f.jsx("div",{id:"pagination",children:p})]})]})},U2="/assets/schedule-jxOwIxLK.png",B2=ma`
  body {
    font-family: Inter;
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #f2f2f2;
    line-height: 1.5;
  }
`,H2=()=>{const e=()=>{const t=document.getElementById("features");t&&t.scrollIntoView({behavior:"smooth"})};return f.jsxs("div",{children:[f.jsx(B2,{}),f.jsxs(V2,{children:[f.jsx(W2,{children:f.jsxs(Y2,{children:[f.jsx(Q2,{children:"Proschedule"}),f.jsx(G2,{children:"O Proschedule é a sua solução completa para simplificar o processo de agendamento de compromissos e reuniões."}),f.jsx(kr,{to:"/login",children:f.jsx(K2,{children:"Entrar Agora"})}),f.jsx(rE,{children:"Mais funcionalidades abaixo"}),f.jsx(aE,{icon:lk,onClick:e})]})}),f.jsx(X2,{style:{backgroundImage:`url(${U2})`},children:f.jsx(q2,{icon:Vp})})]}),f.jsxs(J2,{id:"features",children:[f.jsxs($s,{children:[f.jsx(Hs,{children:f.jsx(Oe,{icon:Vp})}),f.jsx(Us,{children:"Agendamento Personalizado"}),f.jsx(Bs,{children:"Configure facilmente seus horários de disponibilidade de acordo com suas preferências e compromissos existentes."})]}),f.jsxs($s,{children:[f.jsx(Hs,{children:f.jsx(Oe,{icon:ok})}),f.jsx(Us,{children:"Lembretes Automáticos"}),f.jsx(Bs,{children:"Mantenha-se organizado com lembretes automáticos por e-mail para todos os participantes do compromisso."})]}),f.jsxs($s,{children:[f.jsx(Hs,{children:f.jsx(Oe,{icon:ik})}),f.jsx(Us,{children:"Personalização Total"}),f.jsx(Bs,{children:"Ajuste as configurações do Proschedule de acordo com suas necessidades específicas, incluindo a duração padrão de reuniões, intervalos entre compromissos e muito mais."})]})]}),f.jsx(Z2,{children:f.jsxs(eE,{children:[f.jsxs(tE,{children:["Por que escolher o Proschedule? ",f.jsx(nE,{icon:sk})]}),f.jsx(oh,{children:"O Proschedule é a escolha ideal para profissionais e equipes que buscam uma maneira eficaz e conveniente de organizar suas agendas."}),f.jsx(oh,{children:"Comece a usar o Proschedule hoje mesmo e descubra como você pode otimizar sua rotina diária!"})]})})]})},V2=A.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #222; 
`,W2=A.div`
  display: flex; 
  flex-direction: column;
  align-items: left;
  padding: 2rem;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`,Y2=A.div`
  position: relative; 
`,Q2=A.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`,G2=A.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`,K2=A.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #363636;
  color: #f2f2f2;
  border: none;
  margin-bottom: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`,X2=A.div`
  display: flex;
  height: 100vh;
  opacity: 0.7;
  width: 50%; /* Ajuste para 50% ou outro valor adequado */
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 500px 0 0 500px;
  border: 2px solid #222;
  z-index: 1;
  position: relative;
  background: linear-gradient(90deg, #000000, rgba(255, 255, 255, 0.5098039216));
  inset: 0;
  
  @media (max-width: 800px) {
    display: none; 
  }
`,q2=A(Oe)`
  font-size: 6rem; 
  color: #f2f2f2; 
`,J2=A.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 3rem;
  gap: 1rem;
`,$s=A.div`
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  padding: 1.5rem;
  background-color: #222;
  margin: 0.5rem;
`,Us=A.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,Bs=A.p`
  font-size: 1rem;
`,Hs=A.div`
  width: 100px;
  height: 100px;
  background-color: #363636;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Z2=A.div`
  margin-top: 3rem;
  text-align: center; 
`,eE=A.div`
  background-color: #222; 
  padding: 2rem;
  border-radius: 10px;
`,tE=A.h2`
  font-size: 2rem;
`,oh=A.p`
  font-size: 1.2rem;
`,nE=A(Oe)`
  font-size: 2rem;
  color: green;
`,rE=A.div`
  position: absolute;
  bottom: -4.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  color: white;
`,aE=A(Oe)`
  position: absolute;
  bottom: -7.5rem;
  left: 47%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  cursor: pointer;
  animation: bounce 1s infinite alternate; /* Animação de quicar */

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1rem); /* Altura do quique */
    }
  }

  @media (min-width: 1024px) {
    left: 50%;
  }
  @media (max-width: 432px) {
    left: 45%;
  }
`,iE=ma`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #f2f2f2;
    line-height: 1.5;
  }
`,oE=A.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
`,lE=A.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 10px;
    position: relative;
    align-items: center;
`,Vs=A.p`
    margin-bottom: 0.5rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; 
    padding: 0; 
    border-radius: 10px; 
    opacity: 0px; 
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 14.1px;
    text-align: center;
    color: #1e1e1e;
`,sE=A.p`
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 14.1px;
    text-align: center;
    color: #566A7F;
`,uE=A.u`
    cursor: pointer;
`,cE=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  opacity: 0px;
  background: #e5e7eb;
  padding: 0.1rem;
  width: 58.56vw; /* Alterado para uma unidade de medida mais apropriada */
  height: 70vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0;
  }
`,fE=A.div`
  width: 50%;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,dE=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,pE=A.div`
  width: 50%;
  height: auto;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;function hE({onResendEmailClick:e}){return f.jsxs(f.Fragment,{children:[f.jsx(iE,{}),f.jsxs(cE,{children:[f.jsx(fE,{className:"d-none d-md-block",children:f.jsx(dE,{src:Di,alt:"Pavel"})}),f.jsx(pE,{children:f.jsxs(oE,{children:[f.jsx(Mi,{}),f.jsxs(lE,{children:[f.jsx(Vs,{children:"Nós enviamos um e-mail para você contendo um link de recuperação."}),f.jsx(Vs,{children:"Verifique seu e-mail e clique no link para continuar."}),f.jsx(Vs,{children:"Caso não tenha recebido o e-mail, verifique sua caixa de spam ou clique em reenviar o e-mail."}),f.jsx(sE,{onClick:e,children:f.jsx(uE,{children:"Reenviar o E-mail"})})]})]})})]})]})}const mE=ma`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #f2f2f2;
    line-height: 1.5;
  }
`,vE=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  opacity: 0px;
  background: #e5e7eb;
  padding: 0.1rem;
  width: 58.56vw; /* Alterado para uma unidade de medida mais apropriada */
  height: 70vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0;
  }
`,gE=A.div`
  width: 50%;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,yE=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,xE=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  padding: 2rem;
  width: 90%; /* Ajuste para 90% da largura */
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`,lh=A.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0px;
  padding-bottom: 10px;
  position: relative;
`,sh=A.div`
  width: 40px;
  height: 40px;
  gap: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e5e7eb;
  border-radius: 10px 0px 0px 10px;
  background-color: #ffffff;
`,uh=A.input`
  flex: 1;
  height: 38px;
  margin-left: 0.1rem;
  border: none;
  border-radius: 0px 10px 10px 0px;
  color: #363636;
  background-color: #ffffff;
  font-family: Public Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  &::placeholder {
    color: #e5e7eb;
  }
`,ch=A.div`
  width: 5px;
  height: 38px;
  left: 37px;
  gap: 0px;
  border: none;
`,wE=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;function SE(){const[e,t]=j.useState(""),[n,r]=j.useState(""),[a,i]=j.useState(!1),[o,l]=j.useState("");j.useEffect(()=>{const d=new URLSearchParams(window.location.search).get("token");l(d)},[]);const s=async()=>{try{if(!(await fetch("http://databases-proschedule-backend.dkujoa.easypanel.host:8080/auth/reset-pass",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({newPassword:e,confirmPassword:n,token:o})})).ok)throw new Error("Falha ao salvar a nova senha");window.location.href="/auth/login"}catch(c){console.error("Erro ao salvar nova senha:",c.message)}},u=async()=>{try{if(i(!0),e!==n)throw alert("Senhas não coincidem"),new Error("As senhas não coincidem");await s(),t(""),r("")}catch(c){console.error(" ----  Erro ao salvar nova senha:",c.message)}finally{i(!1)}};return f.jsxs(f.Fragment,{children:[f.jsx(mE,{}),f.jsxs(vE,{children:[f.jsx(gE,{children:f.jsx(yE,{src:Di,alt:"Pavel"})}),f.jsxs(xE,{children:[f.jsx(Mi,{}),f.jsxs(lh,{children:[f.jsx(sh,{children:f.jsx(Oe,{icon:gl})}),f.jsx(ch,{}),f.jsx(uh,{type:"password",placeholder:"Nova senha",id:"newPassword",name:"newPassword",value:e,onChange:c=>t(c.target.value)})]}),f.jsxs(lh,{children:[f.jsx(sh,{children:f.jsx(Oe,{icon:gl})}),f.jsx(ch,{}),f.jsx(uh,{type:"password",placeholder:"Repita a nova senha",id:"confirmPassword",name:"confirmPassword",value:n,onChange:c=>r(c.target.value)})]}),f.jsx(wE,{children:f.jsx(Ci,{buttonText:a?"Aguarde...":"Salvar nova senha",onClick:u,disabled:a})})]})]})]})}const kE=ma`
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #f2f2f2;
    line-height: 1.5;
  }
`,EE=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`,xo=A.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  gap: 10px;
  position: relative;
`,wo=A.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e5e7eb;
  border-radius: 10px 0px 0px 10px;
  background-color: #ffffff;
`,So=A.input`
  flex: 1;
  height: 38px;
  margin-left: -0.75rem;
  border: none;
  border-radius: 0px 10px 10px 0px;
  color: rgba(54, 54, 54, 0.7);
  background-color: #ffffff;
  font-family: Public Sans;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  padding: 2px;

  &::placeholder {
    color: rgba(54, 54, 54, 0.7);
  }
`,CE=A.p`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 14.1px;
  text-align: left;
  color: #566a7f;
`,bE=A.a`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 14.1px;
  text-align: left;
  color: #566a7f;
`,PE=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`,jE=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 20px;
  opacity: 0px;
  background: #e5e7eb;
  padding: 0.1rem;
  width: 58.56vw; /* Alterado para uma unidade de medida mais apropriada */
  height: 70vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 0;
  }
`,_E=A.div`
  width: 50%;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,NE=A.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,RE=A.div`
  width: 50%;
  height: auto;
  gap: 0px;
  opacity: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;function TE(){const[e,t]=j.useState(""),[n,r]=j.useState(""),[a,i]=j.useState(""),[o,l]=j.useState(""),s=async()=>{const u={fullname:e,email:n,password:a,phone:o};console.log(e);try{const c=await fetch("http://databases-proschedule-backend.dkujoa.easypanel.host:8080/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});c.ok?(console.log("Usuário cadastrado com sucesso!"),t(""),r(""),i(""),window.location.href="/auth/login"):console.error("Erro ao cadastrar usuário:",c.statusText)}catch(c){console.error("Erro ao cadastrar usuário:",c)}};return f.jsxs(f.Fragment,{children:[f.jsx(kE,{}),f.jsxs(jE,{children:[f.jsx(_E,{className:"d-none d-md-block",children:f.jsx(NE,{src:Di,alt:"Pavel"})}),f.jsx(RE,{children:f.jsxs(EE,{children:[f.jsx(Mi,{}),f.jsx(CE,{children:"CADASTRE-SE AGORA MESMO"}),f.jsxs(xo,{children:[f.jsx(wo,{children:f.jsx(Oe,{icon:qa})}),f.jsx("div",{className:"divider"}),f.jsx(So,{type:"text",placeholder:"Nome Completo",value:e,onChange:u=>t(u.target.value)})]}),f.jsxs(xo,{children:[f.jsx(wo,{children:f.jsx(Oe,{icon:qa})}),f.jsx("div",{className:"divider"}),f.jsx(So,{type:"text",placeholder:"Phone",value:o,onChange:u=>l(u.target.value)})]}),f.jsxs(xo,{children:[f.jsx(wo,{children:f.jsx(Oe,{icon:qa})}),f.jsx("div",{className:"divider"}),f.jsx(So,{type:"text",placeholder:"E-mail",value:n,onChange:u=>r(u.target.value)})]}),f.jsxs(xo,{children:[f.jsx(wo,{children:f.jsx(Oe,{icon:gl})}),f.jsx("div",{className:"divider"}),f.jsx(So,{type:"password",placeholder:"Senha",value:a,onChange:u=>i(u.target.value)})]}),f.jsx(bE,{href:"#",children:f.jsx("u",{children:"Ao clicar em register você concorda com os termos de usuário"})}),f.jsx(PE,{children:f.jsx(Ci,{buttonText:"Register",onClick:s})})]})})]})]})}const OE=()=>f.jsx(f.Fragment,{children:f.jsxs(Fx,{children:[f.jsx(Io,{path:"/dashboard",element:f.jsx(M2,{})}),f.jsx(Io,{path:"/events",element:f.jsx(D2,{})}),f.jsx(Io,{path:"/scheduled-events",element:f.jsx($2,{})})]})}),AE=Yx([{path:"/auth/login",element:f.jsx(E2,{})},{path:"/auth/recovery",element:f.jsx(L2,{})},{path:"/",element:f.jsx(H2,{})},{path:"/auth/register",element:f.jsx(TE,{})},{path:"/auth/verify",element:f.jsx(hE,{})},{path:"/auth/reset-pass",element:f.jsx(SE,{})},{path:"*",element:f.jsx(ow,{children:f.jsx(OE,{})})}]);Ws.createRoot(document.getElementById("root")).render(f.jsx(pt.StrictMode,{children:f.jsx(tw,{router:AE})}));
