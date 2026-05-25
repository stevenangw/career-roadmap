var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function T(e,t){return w(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=T(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function w(){return g?!0:!(e.unstable_now()-te<C)}function T(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&w());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():ee=!1}}}var E;if(typeof y==`function`)E=function(){y(T)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=T,E=function(){re.postMessage(null)}}else E=function(){_(T,0)};function ie(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,E()))),r},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),w=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case w:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,A=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function j(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=j(n))):i=j(o):i=j(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=j(n))):i=j(o)):i=j(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return ke.call(Nt,e)?!0:ke.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,`passive`,{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var M=!1;function sr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function cr(e,t){if(M)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,M=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Ht(wt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(gn){var vr;if(gn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,ln(e)),mn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=gn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};gn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function N(e,t){$r.set(e,t),kt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=pi(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=pi(13,n,t,a),e.elementType=te,e.lanes=o,e;case w:return e=pi(19,n,t,a),e.elementType=w,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case T:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function P(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Ci=[],wi=0,Ti=null,Ei=0,Di=[],Oi=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function Ni(e,t,n){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,ki=e;var r=Ai;e=ji;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-Ge(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,ji=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null}function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,Ai=t.id,ji=t.overflow,ki=e}var F=null,I=null,L=!1,Li=null,Ri=!1,zi=Error(i(519));function Bi(e){throw Ki(P(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),zi}function Vi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Bi(e,!0)}function Hi(e){for(F=e.return;F;)switch(F.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:F=F.return}}function Ui(e){if(e!==F)return!1;if(!L)return Hi(e),L=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&I&&Bi(e),Hi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));I=uf(e)}else t===27?(t=I,Zd(e.type)?(e=lf,lf=null,I=e):I=t):I=F?cf(e.stateNode.nextSibling):null;return!0}function Wi(){I=F=null,L=!1}function Gi(){var e=Li;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Li=null),e}function Ki(e){Li===null?Li=[e]:Li.push(e)}var qi=fe(null),Ji=null,Yi=null;function Xi(e,t,n){k(qi,t._currentValue),t._currentValue=n}function Zi(e){e._currentValue=qi.current,pe(qi)}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function $i(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ea(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&$i(t,e,n,r),t.flags|=262144}function ta(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){Ji=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ra(e){return aa(Ji,e)}function ia(e,t){return Ji===null&&na(e),aa(e,t)}function aa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Yi===null){if(e===null)throw Error(i(308));Yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yi=Yi.next=t;return n}var oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},sa=t.unstable_scheduleCallback,ca=t.unstable_NormalPriority,la={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new oa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&sa(ca,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=D.S;D.S=function(e,t){eu=A(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=fe(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?k(ba,ba.current):k(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:la._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case E:return t=Aa(t),f(e,t,n)}if(ce(t)||ae(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===S)return f(e,ia(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=Aa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===S)return p(e,t,ia(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=Aa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===S)return m(e,t,n,ia(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),L&&Mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return L&&Mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),L&&Mi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),L&&Mi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return L&&Mi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),L&&Mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=Aa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===S)return b(e,r,ia(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=fe(null),to=fe(0);function no(e,t){e=Wl,k(to,e),k(eo,t),Wl=e|t.baseLanes}function ro(){k(to,Wl),k(eo,eo.current)}function io(){Wl=to.current,pe(eo),pe(to)}var ao=fe(null),oo=null;function so(e){var t=e.alternate;k(R,R.current&1),k(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){k(R,R.current),k(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(k(R,R.current),k(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){k(R,R.current),k(ao,ao.current)}function fo(e){pe(ao),oo===e&&(oo=null),pe(R)}var R=fe(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){D.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ta(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return ra(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=H(),o=L;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Go(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(L){var n=K.formState;if(n!==null){a:{var r=z;if(L){if(I){b:{for(var i=I,a=Ri;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){I=cf(i.nextSibling),r=i.data===`F!`;break a}}Bi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Or(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Or(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Fs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,le,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ra(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return oi(e,t,i,0),K===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var zs={readContext:ra,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ra,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ra,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(L){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(L){var n=ji,r=Ai;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ra,use:Po,useCallback:ys,useContext:ra,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ti(e)}function Ys(e){console.error(e)}function Xs(e){ti(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ea(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(L)return t=ao.current,t===null?(r!==zi&&(t=Error(i(423),{cause:r}),Ki(P(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=P(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==zi&&(e=Error(i(422),{cause:r}),Ki(P(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=P(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=P(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return na(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&s&&Pi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:la._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ea(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(L){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,F=t,I=null)):e=null,e===null)throw Bi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||ea(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,I=cf(s.nextSibling),F=t,L=!0,Li=null,Ri=!1,e!==null&&Ii(t,e),t=fc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return na(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(L&&r&&Pi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return na(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(L&&r&&Pi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(na(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=ra(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ra(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=ra(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=ra(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&ta(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Wi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(R.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(L){if(a?so(t):uo(t),(e=I)?(e=rf(e,Ri),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,F=t,I=null)):e=null,e===null)throw Bi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ki({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ea(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,I=cf(c.nextSibling),F=t,L=!0,Li=null,Ri=!1,e!==null&&Ii(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=la._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(R,o),ac(e,t,r,n),r=L?Ei:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ea(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ta(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Xi(t,la,e.memoizedState.cache),Wi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Xi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ea(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(R,R.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Xi(t,la,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,L&&t.flags&1048576&&Ni(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===T){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Xi(t,la,r),r!==o.cache&&$i(t,[la],n,!0),Xa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=P(Error(i(424)),t),Ki(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(I=cf(e.firstChild),F=t,L=!0,Li=null,Ri=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:L||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&L&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),F=t,Ri=!0,a=I,Zd(t.type)?(lf=a,I=cf(r.firstChild)):I=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&L&&((a=r=I)&&(r=tf(r,t.type,t.pendingProps,Ri),r===null?a=!1:(t.stateNode=r,F=t,I=cf(r.firstChild),Ri=!1,a=!0)),a||Bi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&L&&((e=n=I)&&(n=nf(n,t.pendingProps,Ri),n===null?e=!1:(t.stateNode=n,F=t,I=null,e=!0)),e||Bi(t)),null;case 13:return Cc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Xi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,na(t),a=ra(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return na(t),r=ra(la),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Xi(t,la,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Xi(t,la,r),r!==a.cache&&$i(t,[la],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Xi(t,la,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw ja=Da,Ta}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!L)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Zi(la),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ui(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=me.current,Ui(t)?Vi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=me.current,Ui(t))Vi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Ui(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=F,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Bi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ui(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ui(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Wi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Gi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Zi(t.type),U(t),null;case 19:if(pe(R),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return k(R,R.current&1|2),L&&Mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&A()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!L)return U(t),null}else 2*A()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=A(),e.sibling=null,n=R.current,k(R,a?n&1|2:n&1),L&&Mi(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zi(la),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zi(la),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(R),null;case 4:return ye(),null;case 10:return Zi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&pe(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zi(la),null;case 25:return null;default:return null}}function Vc(e,t){switch(Fi(t),t.tag){case 3:Zi(la),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:pe(R);break;case 10:Zi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&pe(ba);break;case 24:Zi(la)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=A()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ra(la),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ra(la).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:D.T===null?ut():dd()}function mu(){if(Jl===0)if(!(J&536870912)||L){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Jl=e}else Jl=536870912;return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),rt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-A(),10<a)){if(yu(r,t,Jl,!Vl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-A():(a&4194048)===a?eu-A():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Yi=Ji=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=hi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=$e(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ai(),n}function Cu(e,t){z=null,D.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,P(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=D.H;return D.H=zs,e===null?zs:e}function Eu(){var e=D.A;return D.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Yi=Ji=null,G=r,D.H=i,D.A=a,q===null&&(K=null,J=0,ai()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=A()+500,Su(e,t)):Hl=$e(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Yi=Ji=null,D.H=r,D.A=a,G=n,q===null?(K=null,J=0,ai(),X):0}function ju(){for(;q!==null&&!Me();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=gi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Yi=Ji=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,P(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,P(n,e.current)),q=null;return}t.flags&32768?(L||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,it(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=P(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=P(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>A()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=ci(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=A(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),lt(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,A()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Ae(Fe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ei.length;hd++){var gd=ei[hd];N(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}N(Kr,`onAnimationEnd`),N(qr,`onAnimationIteration`),N(Jr,`onAnimationStart`),N(`dblclick`,`onDoubleClick`),N(`focusin`,`onFocus`),N(`focusout`,`onBlur`),N(Yr,`onTransitionRun`),N(Xr,`onTransitionStart`),N(Zr,`onTransitionCancel`),N(Qr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Kr:case qr:case Jr:l=Rn;break;case Qr:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Er;else{v=wr;var y=Cr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else M?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(M||x!==`onCompositionStart`?x===`onCompositionEnd`&&M&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,M=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=j(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=A()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`modulepreload`,b=function(e){return`/career-roadmap/`+e},x={},ee=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=b(t,n),t in x)return;x[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:y,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},S=`popstate`;function C(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function te(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=ae(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),re(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:ie(t))}function r(e,t){T(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return oe(t,n,r,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function E(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ae(t):t,state:n,key:t&&t.key||r||E(),mask:i}}function ie({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ae(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=C(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=C(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return se(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(S,d),c=e,()=>{i.removeEventListener(S,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function se(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ie(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ce(e,t,n=`/`){return D(e,t,n,!1)}function D(e,t,n,r,i){let a=Te((typeof t==`string`?ae(t):t).pathname||`/`,n);if(a==null)return null;let o=i??le(e),s=null,c=we(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function O(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function le(e){let t=ue(e);return fe(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=A([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function fe(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var pe=/^:[\w-]+$/,k=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(pe.test(t)?k:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:A([a,u.pathname]),pathnameBase:Fe(A([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=A([a,u.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ce(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function we(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Te(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ae(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Ie(r),hash:Le(i)}}function Oe(e,t){let n=Pe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=ae(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/\/\/+/g,`/`),A=e=>Ne(e.join(`/`)),Pe=e=>e.replace(/\/+$/,``),Fe=e=>Pe(e).replace(/^\/*/,`/`),Ie=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Le=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Re=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function ze(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Be(e){return A(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ve=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function He(e,t){let n=e;if(typeof n!=`string`||!Ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ve)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Te(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ue=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ue);var We=[`GET`,...Ue];new Set(We);var Ge=_.createContext(null);Ge.displayName=`DataRouter`;var Ke=_.createContext(null);Ke.displayName=`DataRouterState`;var qe=_.createContext(!1);function Je(){return _.useContext(qe)}var Ye=_.createContext({isTransitioning:!1});Ye.displayName=`ViewTransition`;var Xe=_.createContext(new Map);Xe.displayName=`Fetchers`;var Ze=_.createContext(null);Ze.displayName=`Await`;var j=_.createContext(null);j.displayName=`Navigation`;var Qe=_.createContext(null);Qe.displayName=`Location`;var $e=_.createContext({outlet:null,matches:[],isDataRoute:!1});$e.displayName=`Route`;var et=_.createContext(null);et.displayName=`RouteError`;var tt=`REACT_ROUTER_ERROR`,nt=`REDIRECT`,rt=`ROUTE_ERROR_RESPONSE`;function it(e){if(e.startsWith(`${tt}:${nt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function at(e){if(e.startsWith(`${tt}:${rt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Re(t.status,t.statusText,t.data)}catch{}}function ot(e,{relative:t}={}){w(st(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(j),{hash:i,pathname:a,search:o}=gt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:A([n,a])),r.createHref({pathname:s,search:o,hash:i})}function st(){return _.useContext(Qe)!=null}function ct(){return w(st(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(Qe).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){_.useContext(j).static||_.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=_.useContext($e);return e?Ft():ft()}function ft(){w(st(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(Ge),{basename:t,navigator:n}=_.useContext(j),{matches:r}=_.useContext($e),{pathname:i}=ct(),a=JSON.stringify(je(r)),o=_.useRef(!1);return ut(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(T(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:A([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var pt=_.createContext(null);function mt(e){let t=_.useContext($e).outlet;return _.useMemo(()=>t&&_.createElement(pt.Provider,{value:e},t),[t,e])}function ht(){let{matches:e}=_.useContext($e);return e[e.length-1]?.params??{}}function gt(e,{relative:t}={}){let{matches:n}=_.useContext($e),{pathname:r}=ct(),i=JSON.stringify(je(n));return _.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function _t(e,t){return vt(e,t)}function vt(e,t,n){w(st(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(j),{matches:i}=_.useContext($e),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Lt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ct(),d;if(t){let e=typeof t==`string`?ae(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ce(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Tt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:A([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:A([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(Qe.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function yt(){let e=Pt(),t=ze(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var bt=_.createElement(yt,null),xt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=at(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement($e.Provider,{value:this.props.routeContext},_.createElement(et.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(Ct,{error:e},t):t}};xt.contextType=qe;var St=new WeakMap;function Ct({children:e,error:t}){let{basename:n}=_.useContext(j);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=it(t.digest);if(e){let r=St.get(t);if(r)throw r;let i=He(e.location,n);if(Ve&&!St.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw St.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function wt({routeContext:e,match:t,children:n}){let r=_.useContext(Ge);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement($e.Provider,{value:e},n)}function Tt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Be(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||bt,o&&(s<0&&c===0?(Lt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(wt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(xt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Et(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dt(e){let t=_.useContext(Ge);return w(t,Et(e)),t}function Ot(e){let t=_.useContext(Ke);return w(t,Et(e)),t}function kt(e){let t=_.useContext($e);return w(t,Et(e)),t}function At(e){let t=kt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function jt(){return At(`useRouteId`)}function Mt(){let e=Ot(`useNavigation`);return _.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Nt(){let{matches:e,loaderData:t}=Ot(`useMatches`);return _.useMemo(()=>e.map(e=>O(e,t)),[e,t])}function Pt(){let e=_.useContext(et),t=Ot(`useRouteError`),n=At(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Ft(){let{router:e}=Dt(`useNavigate`),t=At(`useNavigate`),n=_.useRef(!1);return ut(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{T(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var It={};function Lt(e,t,n){!t&&!It[e]&&(It[e]=!0,T(!1,n))}_.memo(Rt);function Rt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return vt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function zt({to:e,replace:t,state:n,relative:r}){w(st(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=_.useContext(j);T(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=_.useContext($e),{pathname:o}=ct(),s=dt(),c=Me(e,je(a),o,r===`path`),l=JSON.stringify(c);return _.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Bt(e){return mt(e.context)}function Vt(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Ht({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!st(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ae(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=_.useMemo(()=>{let e=Te(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(j.Provider,{value:c},_.createElement(Qe.Provider,{children:t,value:h}))}function Ut({children:e,location:t}){return _t(Wt(e),t)}_.Component;function Wt(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Wt(e.props.children,i));return}w(e.type===Vt,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Wt(e.props.children,i)),n.push(a)}),n}var Gt=`get`,Kt=`application/x-www-form-urlencoded`;function qt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Jt(e){return qt(e)&&e.tagName.toLowerCase()===`button`}function Yt(e){return qt(e)&&e.tagName.toLowerCase()===`form`}function Xt(e){return qt(e)&&e.tagName.toLowerCase()===`input`}function Zt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qt(e,t){return e.button===0&&(!t||t===`_self`)&&!Zt(e)}var $t=null;function en(){if($t===null)try{new FormData(document.createElement(`form`),0),$t=!1}catch{$t=!0}return $t}var tn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function nn(e){return e!=null&&!tn.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kt}"`),null):e}function rn(e,t){let n,r,i,a,o;if(Yt(e)){let o=e.getAttribute(`action`);r=o?Te(o,t):null,n=e.getAttribute(`method`)||Gt,i=nn(e.getAttribute(`enctype`))||Kt,a=new FormData(e)}else if(Jt(e)||Xt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Te(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||Gt,i=nn(e.getAttribute(`formenctype`))||nn(o.getAttribute(`enctype`))||Kt,a=new FormData(o,e),!en()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(qt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=Gt,r=null,i=Kt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var an={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},on=/[&><\u2028\u2029]/g;function sn(e){return e.replace(on,e=>an[e])}function cn(e,t){if(e===!1||e==null)throw Error(t)}function ln(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Te(i.pathname,t)===`/`?i.pathname=`${Pe(t)}/_root.${r}`:i.pathname=`${Pe(i.pathname)}.${r}`,i}async function un(e,t){if(e.id in t)return t[e.id];try{let n=await ee(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dn(e){return e!=null&&typeof e.page==`string`}function fn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function pn(e,t,n){return vn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await un(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(fn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function mn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function hn(e,t,{includeHydrateFallback:n}={}){return gn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function gn(e){return[...new Set(e)]}function _n(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function vn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!dn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(_n(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function yn(){let e=_.useContext(Ge);return cn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function bn(){let e=_.useContext(Ke);return cn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var xn=_.createContext(void 0);xn.displayName=`FrameworkContext`;function Sn(){let e=_.useContext(xn);return cn(e,`You must render this element inside a <HydratedRouter> element`),e}function Cn(e,t){let n=_.useContext(xn),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:wn(s,p),onBlur:wn(c,m),onMouseEnter:wn(l,p),onMouseLeave:wn(u,m),onTouchStart:wn(d,p)}]:[a,f,{}]:[!1,f,{}]}function wn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Tn({page:e,...t}){let n=Je(),{router:r}=yn(),i=_.useMemo(()=>ce(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?_.createElement(Dn,{page:e,matches:i,...t}):_.createElement(On,{page:e,matches:i,...t}):null}function En(e){let{manifest:t,routeModules:n}=Sn(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return pn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Dn({page:e,matches:t,...n}){let r=ct(),{future:i}=Sn(),{basename:a}=yn(),o=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=ln(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return _.createElement(_.Fragment,null,o.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function On({page:e,matches:t,...n}){let r=ct(),{future:i,manifest:a,routeModules:o}=Sn(),{basename:s}=yn(),{loaderData:c,matches:l}=bn(),u=_.useMemo(()=>mn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>mn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=ln(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>hn(d,a),[d,a]),m=En(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function kn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}_.Component;var An=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{An&&(window.__reactRouterVersion=`7.15.1`)}catch{}function jn({basename:e,children:t,useTransitions:n,window:r}){let i=_.useRef();i.current??=te({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(Ht,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Mn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(Ht,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}Mn.displayName=`unstable_HistoryRouter`;var Nn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pn=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:v}=_.useContext(j),y=typeof l==`string`&&Nn.test(l),b=He(l,h);l=b.to;let x=ot(l,{relative:r}),ee=ct(),S=null;if(o){let e=Me(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:A([h,e.pathname])),S=g.createHref(e)}let[C,te,w]=Cn(n,p),T=Vn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:v});function E(t){e&&e(t),t.defaultPrevented||T(t)}let ne=!(b.isExternal||i),re=_.createElement(`a`,{...p,...w,href:(ne?S:void 0)||b.absoluteURL||x,onClick:ne?E:e,ref:kn(m,te),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return C&&!y?_.createElement(_.Fragment,null,re,_.createElement(Tn,{page:x})):re});Pn.displayName=`Link`;var Fn=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=gt(a,{relative:c.relative}),d=ct(),f=_.useContext(Ke),{navigator:p,basename:m}=_.useContext(j),h=f!=null&&Zn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Te(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,ee=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,te;te=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let w=typeof i==`function`?i(S):i;return _.createElement(Pn,{...c,"aria-current":C,className:te,ref:l,style:w,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Fn.displayName=`NavLink`;var In=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=Gt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=_.useContext(j),g=Wn(),v=Gn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&Nn.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});In.displayName=`Form`;function Ln({getKey:e,storageKey:t,...n}){let r=_.useContext(xn),{basename:i}=_.useContext(j),a=ct(),o=Nt();Yn({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=Jn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${sn(JSON.stringify(t||Kn))}, ${sn(JSON.stringify(s))})`}})}Ln.displayName=`ScrollRestoration`;function Rn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zn(e){let t=_.useContext(Ge);return w(t,Rn(e)),t}function Bn(e){let t=_.useContext(Ke);return w(t,Rn(e)),t}function Vn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=dt(),d=ct(),f=gt(e,{relative:o});return _.useCallback(p=>{if(Qt(p,t)){p.preventDefault();let t=n===void 0?ie(d)===ie(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Hn=0,Un=()=>`__${String(++Hn)}__`;function Wn(){let{router:e}=zn(`useSubmit`),{basename:t}=_.useContext(j),n=jt(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=rn(e,t);a.navigate===!1?await r(a.fetcherKey||Un(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Gn(e,{relative:t}={}){let{basename:n}=_.useContext(j),r=_.useContext($e);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...gt(e||`.`,{relative:t})},o=ct();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:A([n,a.pathname])),ie(a)}var Kn=`react-router-scroll-positions`,qn={};function Jn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Te(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Yn({getKey:e,storageKey:t}={}){let{router:n}=zn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Bn(`useScrollRestoration`),{basename:a}=_.useContext(j),o=ct(),s=Nt(),c=Mt();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Xn(_.useCallback(()=>{if(c.state===`idle`){let t=Jn(o,s,a,e);qn[t]=window.scrollY}try{sessionStorage.setItem(t||Kn,JSON.stringify(qn))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Kn);e&&(qn=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(qn,()=>window.scrollY,e?(t,n)=>Jn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Xn(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Zn(e,{relative:t}={}){let n=_.useContext(Ye);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=zn(`useViewTransitionState`),i=gt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Te(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var Qn=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),$n=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),er=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),tr=e=>{let t=er(e);return t.charAt(0).toUpperCase()+t.slice(1)},nr={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},rr=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},ir=(0,_.createContext)({}),ar=()=>(0,_.useContext)(ir),or=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=ar()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...nr,width:t??l??nr.width,height:t??l??nr.height,stroke:e??f,strokeWidth:m,className:Qn(`lucide`,p,i),...!a&&!rr(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),M=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(or,{ref:i,iconNode:t,className:Qn(`lucide-${$n(tr(e))}`,`lucide-${e}`,n),...r}));return n.displayName=tr(e),n},sr=M(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),cr=M(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),lr=M(`arrow-up-narrow-wide`,[[`path`,{d:`m3 8 4-4 4 4`,key:`11wl7u`}],[`path`,{d:`M7 4v16`,key:`1glfcx`}],[`path`,{d:`M11 12h4`,key:`q8tih4`}],[`path`,{d:`M11 16h7`,key:`uosisv`}],[`path`,{d:`M11 20h10`,key:`jvxblo`}]]),ur=M(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),dr=M(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),fr=M(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),pr=M(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),mr=M(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),hr=M(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),gr=M(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),_r=M(`compass`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}]]),vr=M(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),yr=M(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),br=M(`flame`,[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]),xr=M(`folder-kanban`,[[`path`,{d:`M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z`,key:`1fr9dc`}],[`path`,{d:`M8 10v4`,key:`tgpxqk`}],[`path`,{d:`M12 10v2`,key:`hh53o1`}],[`path`,{d:`M16 10v6`,key:`1d6xys`}]]),Sr=M(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),Cr=M(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),wr=M(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),Tr=M(`layout-dashboard`,[[`rect`,{width:`7`,height:`9`,x:`3`,y:`3`,rx:`1`,key:`10lvy0`}],[`rect`,{width:`7`,height:`5`,x:`14`,y:`3`,rx:`1`,key:`16une8`}],[`rect`,{width:`7`,height:`9`,x:`14`,y:`12`,rx:`1`,key:`1hutg5`}],[`rect`,{width:`7`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`ldoo1y`}]]),Er=M(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),Dr=M(`log-out`,[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]),Or=M(`map`,[[`path`,{d:`M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`,key:`169xi5`}],[`path`,{d:`M15 5.764v15`,key:`1pn4in`}],[`path`,{d:`M9 3.236v15`,key:`1uimfh`}]]),kr=M(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),Ar=M(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),jr=M(`quote`,[[`path`,{d:`M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,key:`rib7q0`}],[`path`,{d:`M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z`,key:`1ymkrd`}]]),Mr=M(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Nr=M(`share-2`,[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]),Pr=M(`shield`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]),Fr=M(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Ir=M(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),Lr=M(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),Rr=M(`target`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`6`,key:`1vlfrh`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]),zr=M(`trending-up`,[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]),Br=M(`trophy`,[[`path`,{d:`M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978`,key:`1n3hpd`}],[`path`,{d:`M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978`,key:`rfe1zi`}],[`path`,{d:`M18 9h1.5a1 1 0 0 0 0-5H18`,key:`7xy6bh`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6 9H4.5a1 1 0 0 1 0-5H6`,key:`tex48p`}]]),Vr=M(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),Hr=M(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),Ur=M(`zap`,[[`path`,{d:`M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,key:`1xq2db`}]]),Wr=[{id:`path_data`,title:`Data Integrity & Analytics Engineer`,description:`Build expertise in data quality, ETL pipelines, and analytics engineering`,color:`#3B82F6`,icon:`trending-up`,is_active:!0,sort_order:0,phases:[{id:`p1_phase1`,title:`Fondasi Hard Skill & Soft Skill (Hari 1–30)`,duration_label:`1-30 days`,sort_order:0,nodes:[{id:`n1`,label:`Hard Skill: Advanced SQL & Analytics Engineering`,detail:`Kuasai Window Functions, CTE, Subquery, dan optimasi query untuk analisis data skala besar.`,type:`skill`,status:`todo`,sort_order:0,links:[{title:`Mode Analytics SQL Tutorial`,url:`https://mode.com/sql-tutorial`,tag:`GRATIS`},{title:`SQLZoo Interactive Exercises`,url:`https://sqlzoo.net/wiki/SQL_Tutorial`,tag:`GRATIS`},{title:`LeetCode SQL 50 Problems`,url:`https://leetcode.com/studyplan/top-sql-50/`,tag:`GRATIS`},{title:`W3Schools SQL Tutorial`,url:`https://www.w3schools.com/sql/`,tag:`GRATIS`}]},{id:`n2`,label:`Hard Skill: Python & Pandas untuk Data Pipeline`,detail:`Bangun pipeline ekstraksi dan transformasi data terstruktur menggunakan Python dan library Pandas.`,type:`skill`,status:`todo`,sort_order:1,links:[{title:`Kaggle Learn Python`,url:`https://www.kaggle.com/learn/python`,tag:`GRATIS`},{title:`Kaggle Learn Pandas`,url:`https://www.kaggle.com/learn/pandas`,tag:`GRATIS`},{title:`DataTalksClub Data Engineering Zoomcamp`,url:`https://github.com/DataTalksClub/data-engineering-zoomcamp`,tag:`GRATIS`},{title:`Python for Everybody (Coursera)`,url:`https://www.coursera.org/specializations/python`,tag:`Financial Aid`}]},{id:`n3`,label:`Soft Skill: Critical Thinking & Anomaly Detection`,detail:`Latih insting investigasi data abnormal. Pahami bias data, edge cases, dan pola anomali.`,type:`action`,status:`todo`,sort_order:2,links:[{title:`Thinking, Fast and Slow — Summary`,url:`https://fs.blog/thinking-fast-and-slow/`,tag:`GRATIS`},{title:`Google Data Analytics Certificate`,url:`https://www.coursera.org/professional-certificates/google-data-analytics`,tag:`Financial Aid`}]},{id:`n4`,label:`Project: Anomaly Detection Pipeline`,detail:`Buat script Python otomatis untuk mendeteksi data corrupt/outlier di dataset publik Kaggle. Dokumentasikan di GitHub.`,type:`project`,status:`todo`,sort_order:3,links:[{title:`Kaggle Datasets`,url:`https://www.kaggle.com/datasets`,tag:`GRATIS`},{title:`GitHub Student Developer Pack`,url:`https://education.github.com/pack`,tag:`GRATIS`}]}]},{id:`p1_phase2`,title:`Observabilitas Data Tingkat Lanjut (Hari 30–90)`,duration_label:`30-90 days`,sort_order:1,nodes:[{id:`n5`,label:`Hard Skill: dbt (Data Build Tool) Fundamentals`,detail:`Pelajari modular data modeling, materialization (views, tables, incremental), dan automated data testing.`,type:`skill`,status:`todo`,sort_order:0,links:[{title:`dbt Fundamentals Course (Sertifikat Gratis)`,url:`https://courses.getdbt.com/courses/fundamentals`,tag:`GRATIS`},{title:`dbt Documentation`,url:`https://docs.getdbt.com/`,tag:`GRATIS`},{title:`dbt YouTube Channel`,url:`https://www.youtube.com/@dabornomentio`,tag:`GRATIS`}]},{id:`n6`,label:`Hard Skill: Data Quality dengan Great Expectations`,detail:`Kuasai tool data observability standar industri. Terapkan 10+ expectation rules pada pipeline Anda.`,type:`skill`,status:`todo`,sort_order:1,links:[{title:`Great Expectations Official Docs`,url:`https://docs.greatexpectations.io/`,tag:`GRATIS`},{title:`GE Getting Started Tutorial`,url:`https://docs.greatexpectations.io/docs/tutorials/quickstart/`,tag:`GRATIS`}]},{id:`n7`,label:`Soft Skill: Technical Writing & Data Contracts`,detail:`Pahami cara merumuskan data contract antara software engineer dan data consumer untuk mencegah pipeline pecah.`,type:`action`,status:`todo`,sort_order:2,links:[{title:`Google Technical Writing Course`,url:`https://developers.google.com/tech-writing`,tag:`GRATIS`},{title:`PayPal Data Contract Guide`,url:`https://medium.com/paypal-tech/the-next-big-data-quality-leap-d7ed62e1975`,tag:`GRATIS`}]},{id:`n8`,label:`Sertifikasi: Google Data Analytics Professional`,detail:`Dapatkan sertifikat profesional global dari Google untuk memperkuat CV Anda di bidang data analytics.`,type:`cert`,status:`todo`,sort_order:3,links:[{title:`Google Data Analytics (Coursera)`,url:`https://www.coursera.org/professional-certificates/google-data-analytics`,tag:`Financial Aid`},{title:`IBM Data Engineering (Coursera)`,url:`https://www.coursera.org/professional-certificates/ibm-data-engineer`,tag:`Financial Aid`},{title:`Cara Apply Financial Aid Coursera`,url:`https://www.coursera.support/s/article/209819033-Apply-for-Financial-Aid-or-a-Scholarship`,tag:`GRATIS`}]}]},{id:`p1_phase3`,title:`Sistem End-to-End & Portofolio (Hari 90–180)`,duration_label:`90-180 days`,sort_order:2,nodes:[{id:`n9`,label:`Project: Enterprise Data Quality Platform`,detail:`Bangun arsitektur end-to-end: Ingest data → dbt transform → Great Expectations validate → Metabase visualization.`,type:`project`,status:`todo`,sort_order:0,links:[{title:`Metabase (Open Source BI)`,url:`https://www.metabase.com/`,tag:`GRATIS`},{title:`Render — Free Hosting`,url:`https://render.com/`,tag:`GRATIS`},{title:`Railway — Free Hosting`,url:`https://railway.app/`,tag:`GRATIS`}]},{id:`n10`,label:`Milestone: Data Quality Audit Portfolio`,detail:`Tulis studi kasus lengkap mengenai bagaimana pipeline Anda menghentikan bad data masuk ke dashboard produksi.`,type:`milestone`,status:`todo`,sort_order:1,links:[{title:`Panduan Menulis Case Study Portofolio`,url:`https://www.freecodecamp.org/news/how-to-write-a-good-case-study/`,tag:`GRATIS`}]}]}]},{id:`path_ai`,title:`AI Quality & Red Team Analyst`,description:`Specialize in AI safety, LLM evaluation, and adversarial testing`,color:`#8B5CF6`,icon:`sparkles`,is_active:!0,sort_order:1,phases:[{id:`p2_phase1`,title:`Evaluasi LLM & Adversarial Prompting (Hari 1–30)`,duration_label:`1-30 days`,sort_order:0,nodes:[{id:`m1`,label:`Hard Skill: Metrik Evaluasi LLM & NLP`,detail:`Pahami ROUGE, BLEU, BERTScore, dan semantic similarity untuk mengukur kualitas teks AI.`,type:`skill`,status:`todo`,sort_order:0,links:[{title:`Hugging Face NLP Course`,url:`https://huggingface.co/learn/nlp-course`,tag:`GRATIS`},{title:`DeepLearning.AI Short Courses`,url:`https://www.deeplearning.ai/short-courses/`,tag:`GRATIS`},{title:`Evaluating LLMs (Hugging Face)`,url:`https://huggingface.co/docs/evaluate/`,tag:`GRATIS`}]},{id:`m2`,label:`Hard Skill: Jailbreaking & Adversarial Prompting`,detail:`Pelajari taksonomi prompt injection, PII leakage, dan prompt leaking untuk menguji keamanan model AI.`,type:`skill`,status:`todo`,sort_order:1,links:[{title:`OWASP Top 10 for LLM Applications`,url:`https://owasp.org/www-project-top-10-for-large-language-model-applications/`,tag:`GRATIS`},{title:`HackAPrompt Challenge`,url:`https://www.aicrowd.com/challenges/hackaprompt-2023`,tag:`GRATIS`},{title:`Learn Prompting — Prompt Hacking`,url:`https://learnprompting.org/docs/prompt_hacking/introduction`,tag:`GRATIS`}]},{id:`m3`,label:`Sertifikasi: Generative AI with LLMs (DeepLearning.AI)`,detail:`Pelajari arsitektur transformer, finetuning, RLHF, dan evaluasi LLM dari Andrew Ng dan tim AWS.`,type:`cert`,status:`todo`,sort_order:2,links:[{title:`Generative AI with LLMs (Coursera)`,url:`https://www.coursera.org/learn/generative-ai-with-llms`,tag:`Financial Aid`},{title:`AI for Everyone — Andrew Ng (Coursera)`,url:`https://www.coursera.org/learn/ai-for-everyone`,tag:`Financial Aid`},{title:`Cara Apply Financial Aid Coursera`,url:`https://www.coursera.support/s/article/209819033-Apply-for-Financial-Aid-or-a-Scholarship`,tag:`GRATIS`}]}]},{id:`p2_phase2`,title:`Otomatisasi LLMops & Evaluasi RAG (Hari 30–90)`,duration_label:`30-90 days`,sort_order:1,nodes:[{id:`m4`,label:`Hard Skill: Evaluasi RAG dengan Ragas Framework`,detail:`Uji akurasi sistem Retrieval-Augmented Generation menggunakan metrik faithfulness, answer relevance, dan context recall.`,type:`skill`,status:`todo`,sort_order:0,links:[{title:`Ragas Documentation`,url:`https://docs.ragas.io/`,tag:`GRATIS`},{title:`LangChain RAG Tutorial`,url:`https://python.langchain.com/docs/tutorials/rag/`,tag:`GRATIS`}]},{id:`m5`,label:`Hard Skill: Tracing & Monitoring dengan LangSmith`,detail:`Lacak rantai pemanggilan LLM, deteksi latensi tinggi, dan kumpulkan dataset untuk evaluasi ulang.`,type:`skill`,status:`todo`,sort_order:1,links:[{title:`LangSmith Documentation`,url:`https://docs.smith.langchain.com/`,tag:`GRATIS`},{title:`LangChain Academy`,url:`https://academy.langchain.com/`,tag:`GRATIS`}]},{id:`m6`,label:`Soft Skill: Technical Vulnerability Reporting`,detail:`Tulis laporan celah keamanan AI yang jelas, terstruktur, dan memiliki mitigasi konkret.`,type:`action`,status:`todo`,sort_order:2,links:[{title:`HackerOne Hacktivity (Bug Bounty Writeups)`,url:`https://hackerone.com/hacktivity`,tag:`GRATIS`},{title:`Anthropic Responsible Scaling Policy`,url:`https://www.anthropic.com/news/anthropics-responsible-scaling-policy`,tag:`GRATIS`}]},{id:`m7`,label:`Project: AI Chatbot Adversarial Vulnerability Report`,detail:`Lakukan red teaming sistematis pada model AI publik, catat celah keamanan, dan tulis laporan audit PDF profesional.`,type:`project`,status:`todo`,sort_order:3,links:[{title:`Google AI Studio (Gemini API Free)`,url:`https://aistudio.google.com/`,tag:`GRATIS`},{title:`OpenAI Playground`,url:`https://platform.openai.com/playground`,tag:`GRATIS`}]}]},{id:`p2_phase3`,title:`Automated Security Harness (Hari 90–180)`,duration_label:`90-180 days`,sort_order:2,nodes:[{id:`m8`,label:`Project: LLM Vulnerability Scanner Framework`,detail:`Buat Python CLI tool yang menguji model AI dengan ratusan muatan prompt injection secara otomatis.`,type:`project`,status:`todo`,sort_order:0,links:[{title:`Garak — LLM Vulnerability Scanner`,url:`https://github.com/leondz/garak`,tag:`GRATIS`},{title:`PyRIT by Microsoft`,url:`https://github.com/Azure/PyRIT`,tag:`GRATIS`}]},{id:`m9`,label:`Milestone: Verified Adversarial Prompt Submitter`,detail:`Dapatkan pengakuan di komunitas AI Safety dengan memublikasikan taksonomi celah keamanan baru.`,type:`milestone`,status:`todo`,sort_order:1,links:[{title:`AI Village Community`,url:`https://aivillage.org/`,tag:`GRATIS`},{title:`ARENA ML Safety Program`,url:`https://www.arena.education/`,tag:`GRATIS`}]}]}]},{id:`path_blockchain`,title:`Blockchain Protocol Risk Auditor`,description:`Become a smart contract security auditor for remote global opportunities`,color:`#10B981`,icon:`shield`,is_active:!0,sort_order:2,phases:[{id:`p3_phase1`,title:`Smart Contract Vulnerabilities (Hari 1–30)`,duration_label:`1-30 days`,sort_order:0,nodes:[{id:`b1`,label:`Hard Skill: Kerentanan Solidity Tingkat Dasar`,detail:`Kuasai mekanisme Reentrancy, Access Control, Integer Under/Overflow, dan Flash Loan attacks.`,type:`skill`,status:`todo`,sort_order:0,links:[{title:`Ethernaut by OpenZeppelin`,url:`https://ethernaut.openzeppelin.com/`,tag:`GRATIS`},{title:`Solidity by Example`,url:`https://solidity-by-example.org/`,tag:`GRATIS`},{title:`CryptoZombies — Learn Solidity`,url:`https://cryptozombies.io/`,tag:`GRATIS`}]},{id:`b2`,label:`Hard Skill: EVM & Foundry/Hardhat`,detail:`Pahami cara kerja gas optimization, memori EVM, dan penulisan unit test audit.`,type:`skill`,status:`todo`,sort_order:1,links:[{title:`Foundry Book`,url:`https://book.getfoundry.sh/`,tag:`GRATIS`},{title:`EVM Codes — Interactive Reference`,url:`https://www.evm.codes/`,tag:`GRATIS`},{title:`Hardhat Documentation`,url:`https://hardhat.org/docs`,tag:`GRATIS`},{title:`Patrick Collins Foundry Course (YouTube)`,url:`https://www.youtube.com/watch?v=umepbfKp5rI`,tag:`GRATIS`}]},{id:`b3`,label:`Sertifikasi: Smart Contracts (University at Buffalo)`,detail:`Pelajari struktur blockchain, penulisan smart contract Solidity secara formal, dan dasar audit.`,type:`cert`,status:`todo`,sort_order:2,links:[{title:`Blockchain Specialization (Coursera)`,url:`https://www.coursera.org/specializations/blockchain`,tag:`Financial Aid`},{title:`Cara Apply Financial Aid Coursera`,url:`https://www.coursera.support/s/article/209819033-Apply-for-Financial-Aid-or-a-Scholarship`,tag:`GRATIS`}]}]},{id:`p3_phase2`,title:`Static Analysis & Advanced Testing (Hari 30–90)`,duration_label:`30-90 days`,sort_order:1,nodes:[{id:`b4`,label:`Hard Skill: Static Analysis Tools (Slither & Mythril)`,detail:`Gunakan Slither untuk deteksi cepat bug Solidity, dan Mythril untuk symbolic execution audit.`,type:`skill`,status:`todo`,sort_order:0,links:[{title:`Slither by Trail of Bits`,url:`https://github.com/crytic/slither`,tag:`GRATIS`},{title:`Mythril Security Scanner`,url:`https://github.com/Consensys/mythril`,tag:`GRATIS`},{title:`Trail of Bits Security Guides`,url:`https://github.com/crytic/building-secure-contracts`,tag:`GRATIS`}]},{id:`b5`,label:`Hard Skill: Fuzzing & Invariant Testing (Echidna)`,detail:`Buat tes fuzzer untuk menguji properti Smart Contract dengan ratusan ribu input acak.`,type:`skill`,status:`todo`,sort_order:1,links:[{title:`Echidna — Smart Contract Fuzzer`,url:`https://github.com/crytic/echidna`,tag:`GRATIS`},{title:`Secureum Bootcamp`,url:`https://secureum.xyz/`,tag:`GRATIS`}]},{id:`b6`,label:`Soft Skill: Menulis Temuan Audit yang Kredibel`,detail:`Pahami penulisan severity level (High/Medium/Low) dan menyusun laporan audit profesional.`,type:`action`,status:`todo`,sort_order:2,links:[{title:`OpenZeppelin Audit Reports`,url:`https://blog.openzeppelin.com/security-audits`,tag:`GRATIS`},{title:`Sherlock Audit Reports`,url:`https://audits.sherlock.xyz/contests`,tag:`GRATIS`}]},{id:`b7`,label:`Project: DeFi Vulnerability Exploiter Portfolio`,detail:`Selesaikan seluruh tantangan di Damn Vulnerable DeFi dan tulis write-up teknis eksploitasinya.`,type:`project`,status:`todo`,sort_order:3,links:[{title:`Damn Vulnerable DeFi`,url:`https://www.damnvulnerabledefi.xyz/`,tag:`GRATIS`},{title:`Capture The Ether`,url:`https://capturetheether.com/`,tag:`GRATIS`}]}]},{id:`p3_phase3`,title:`Live Audit & Global Recognition (Hari 90–180)`,duration_label:`90-180 days`,sort_order:2,nodes:[{id:`b8`,label:`Project: Submit Temuan di Code4rena / Sherlock`,detail:`Ikuti kompetisi audit langsung. Cari bug riil pada protokol DeFi dan raih reward pertama Anda.`,type:`project`,status:`todo`,sort_order:0,links:[{title:`Code4rena — Audit Contests`,url:`https://code4rena.com/`,tag:`GRATIS + Hadiah`},{title:`Sherlock — Audit Contests`,url:`https://www.sherlock.xyz/`,tag:`GRATIS + Hadiah`},{title:`Immunefi — Bug Bounties`,url:`https://immunefi.com/`,tag:`GRATIS + Hadiah`}]},{id:`b9`,label:`Milestone: Certified Smart Contract Security Auditor`,detail:`Lulus ujian RACE Secureum dengan skor ≥80% untuk memvalidasi kredibilitas global Anda.`,type:`milestone`,status:`todo`,sort_order:1,links:[{title:`Secureum RACE Exams`,url:`https://secureum.xyz/`,tag:`GRATIS`},{title:`Spearbit Community`,url:`https://spearbit.com/`,tag:`GRATIS`}]}]}]}],Gr={action:{label:`Action`,color:`#3B82F6`,bgLight:`rgba(59,130,246,0.12)`,icon:Ur},skill:{label:`Skill`,color:`#F59E0B`,bgLight:`rgba(245,158,11,0.12)`,icon:dr},cert:{label:`Certification`,color:`#10B981`,bgLight:`rgba(16,185,129,0.12)`,icon:ur},project:{label:`Project`,color:`#F97316`,bgLight:`rgba(249,115,22,0.12)`,icon:xr},milestone:{label:`Milestone`,color:`#8B5CF6`,bgLight:`rgba(139,92,246,0.12)`,icon:Br}},Kr={todo:{label:`To Do`,color:`#666666`,bg:`rgba(102,102,102,0.15)`},in_progress:{label:`In Progress`,color:`#F59E0B`,bg:`rgba(245,158,11,0.15)`},done:{label:`Done`,color:`#10B981`,bg:`rgba(16,185,129,0.15)`}},qr=[{text:`The best time to plant a tree was 20 years ago. The second best time is now.`,author:`Chinese Proverb`},{text:`Every expert was once a beginner.`,author:`Helen Hayes`},{text:`Small daily improvements over time lead to stunning results.`,author:`Robin Sharma`},{text:`The only way to do great work is to love what you do.`,author:`Steve Jobs`},{text:`It does not matter how slowly you go as long as you do not stop.`,author:`Confucius`},{text:`Success is the sum of small efforts repeated day in and day out.`,author:`Robert Collier`},{text:`Your future is created by what you do today, not tomorrow.`,author:`Robert Kiyosaki`},{text:`The expert in anything was once a beginner.`,author:`Rutherford B. Hayes`},{text:`Don't watch the clock; do what it does. Keep going.`,author:`Sam Levenson`},{text:`Learning never exhausts the mind.`,author:`Leonardo da Vinci`},{text:`The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.`,author:`Brian Herbert`},{text:`Investasi terbaik adalah investasi pada diri sendiri.`,author:`Warren Buffett`},{text:`Discipline is the bridge between goals and accomplishment.`,author:`Jim Rohn`},{text:`Code is like humor. When you have to explain it, it's bad.`,author:`Cory House`},{text:`First, solve the problem. Then, write the code.`,author:`John Johnson`}],Jr={id:`demo-user`,name:`Steven`,headline:`Informatika Graduate · Chaos Engineer · Data & Blockchain Analyst`,avatar_url:null,is_public:!0,public_slug:`steven`,onboarding_done:!0,streak_count:7,last_active_date:new Date().toISOString().split(`T`)[0]},Yr=[{id:`s1`,label:`Analytical Thinking & Anomaly Detection`},{id:`s2`,label:`Chaos Engineering & Statistical Validation`},{id:`s3`,label:`Multi-project Management (47 projects)`},{id:`s4`,label:`Python · SQL · Solidity · Node.js`},{id:`s5`,label:`Blockchain Protocol Testing (15+ testnets)`},{id:`s6`,label:`People Analytics & RFM Analysis`}];function Xr(){return qr[Math.floor((Date.now()-new Date(new Date().getFullYear(),0,0))/864e5)%qr.length]}function Zr(e){if(!e||e.length===0)return 0;let t=e.filter(e=>e.status===`done`).length;return Math.round(t/e.length*100)}function Qr(e){return e?.phases?e.phases.flatMap(e=>e.nodes||[]):[]}function $r(e){if(!e)return``;let t=Math.floor((Date.now()-new Date(e).getTime())/1e3);return t<60?`just now`:t<3600?`${Math.floor(t/60)}m ago`:t<86400?`${Math.floor(t/3600)}h ago`:t<604800?`${Math.floor(t/86400)}d ago`:new Date(e).toLocaleDateString(`en-US`,{month:`short`,day:`numeric`,year:`numeric`})}var ei=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),N=o(((e,t)=>{t.exports=ei()}))(),ti=(0,_.createContext)(null);function ni({children:e}){let[t,n]=(0,_.useState)(()=>({id:`demo-user`,email:`demo@stevenjourney.dev`})),[r,i]=(0,_.useState)(()=>Jr),[a,o]=(0,_.useState)(()=>void 0),[s]=(0,_.useState)(()=>!0);(0,_.useEffect)(()=>{},[]);async function c(e){try{let{data:t,error:n}=await null.from(`profiles`).select(`*`).eq(`id`,e).single();if(n&&n.code===`PGRST116`){let{data:t}=await null.from(`profiles`).insert({id:e,name:``,headline:``,onboarding_done:!1}).select().single();i(t)}else t&&i(t)}catch(e){console.error(`Error fetching profile:`,e)}finally{o(!1)}}async function l(){n({id:`demo-user`,email:`demo@stevenjourney.dev`}),i(Jr)}async function u(){n(null),i(null)}async function d(e){if(s)return i(t=>({...t,...e})),{data:{...r,...e},error:null};let{data:n,error:a}=await null.from(`profiles`).update(e).eq(`id`,t.id).select().single();return n&&i(n),{data:n,error:a}}let f={user:t,profile:r,loading:a,isDemo:s,signInWithGoogle:l,signOut:u,updateProfile:d,fetchProfile:()=>t&&c(t.id)};return(0,N.jsx)(ti.Provider,{value:f,children:e})}function ri(){let e=(0,_.useContext)(ti);if(!e)throw Error(`useAuth must be used within AuthProvider`);return e}var ii=(0,_.createContext)(null);function ai({children:e}){let[t,n]=(0,_.useState)(()=>localStorage.getItem(`steven-journey-theme`)||localStorage.getItem(`pathforge-theme`)||`dark`);(0,_.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,t),localStorage.setItem(`steven-journey-theme`,t)},[t]);function r(){n(e=>e===`dark`?`light`:`dark`)}return(0,N.jsx)(ii.Provider,{value:{theme:t,toggleTheme:r},children:e})}function oi(){let e=(0,_.useContext)(ii);if(!e)throw Error(`useTheme must be used within ThemeProvider`);return e}function si({className:e=``}){let{theme:t,toggleTheme:n}=oi();return(0,N.jsxs)(`button`,{className:`pf-theme-toggle ${e}`,onClick:n,"aria-label":`Switch to ${t===`dark`?`light`:`dark`} mode`,title:`Switch to ${t===`dark`?`light`:`dark`} mode`,children:[t===`dark`?(0,N.jsx)(Ir,{size:18}):(0,N.jsx)(kr,{size:18}),(0,N.jsx)(`style`,{children:`
        .pf-theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid var(--color-border-primary);
          background: var(--color-bg-surface);
          color: var(--color-text-secondary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pf-theme-toggle:hover {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
          border-color: var(--color-border-secondary);
        }
      `})]})}var ci=[{path:`/dashboard`,label:`Dashboard`,icon:Tr},{path:`/progress`,label:`Progress`,icon:fr},{path:`/settings`,label:`Settings`,icon:Mr}];function li(){let{profile:e,signOut:t}=ri(),n=ct();return(0,N.jsxs)(`nav`,{className:`pf-navbar glass`,children:[(0,N.jsxs)(`div`,{className:`pf-navbar-inner`,children:[(0,N.jsxs)(Pn,{to:`/dashboard`,className:`pf-navbar-brand`,children:[(0,N.jsx)(_r,{size:22,className:`pf-navbar-logo animate-pulse`}),(0,N.jsx)(`span`,{children:`Steven's Journey`})]}),(0,N.jsx)(`div`,{className:`pf-navbar-links`,children:ci.map(e=>(0,N.jsxs)(Pn,{to:e.path,className:`pf-nav-link ${n.pathname===e.path?`active`:``}`,children:[(0,N.jsx)(e.icon,{size:15}),(0,N.jsx)(`span`,{children:e.label})]},e.path))}),(0,N.jsxs)(`div`,{className:`pf-navbar-actions`,children:[(0,N.jsx)(si,{}),e&&(0,N.jsxs)(`div`,{className:`pf-navbar-user`,children:[(0,N.jsx)(`div`,{className:`pf-navbar-avatar`,children:e.avatar_url?(0,N.jsx)(`img`,{src:e.avatar_url,alt:e.name}):(0,N.jsx)(`span`,{children:(e.name||`S`)[0].toUpperCase()})}),(0,N.jsx)(`button`,{className:`pf-nav-logout`,onClick:t,title:`Logout`,children:(0,N.jsx)(Dr,{size:16})})]})]})]}),(0,N.jsx)(`style`,{children:`
        .pf-navbar {
          position: sticky;
          top: 0;
          z-index: var(--z-dropdown);
          border-bottom: 1px solid var(--color-border-primary);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }
        .pf-navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .pf-navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--color-text-primary);
          text-decoration: none;
          letter-spacing: -0.025em;
        }
        .pf-navbar-logo {
          color: var(--color-accent-indigo);
        }
        .pf-navbar-links {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .pf-nav-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.9rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          text-decoration: none;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }
        .pf-nav-link:hover {
          color: var(--color-text-primary);
          background: var(--color-bg-hover);
        }
        .pf-nav-link.active {
          color: var(--color-text-inverse);
          background: var(--color-text-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .pf-navbar-user {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .pf-navbar-avatar {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-size: 0.8rem;
          font-weight: 600;
          color: #fff;
          border: 1.5px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-navbar-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pf-nav-logout {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          color: var(--color-text-tertiary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pf-nav-logout:hover {
          background: rgba(239, 68, 68, 0.1);
          color: hsl(0, 84%, 60%);
        }
        @media (max-width: 768px) {
          .pf-navbar-links { display: none; }
        }
      `})]})}var ui=[{path:`/dashboard`,label:`Home`,icon:Tr},{path:`/progress`,label:`Progress`,icon:fr},{path:`/settings`,label:`Settings`,icon:Mr}];function di(){let e=ct();return(0,N.jsxs)(`nav`,{className:`pf-mobile-nav glass`,children:[ui.map(t=>(0,N.jsxs)(Pn,{to:t.path,className:`pf-mobile-nav-item ${e.pathname===t.path?`active`:``}`,children:[(0,N.jsx)(t.icon,{size:19}),(0,N.jsx)(`span`,{children:t.label})]},t.path)),(0,N.jsx)(`style`,{children:`
        .pf-mobile-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          border-top: 1px solid var(--color-border-primary);
          z-index: var(--z-dropdown);
          padding: 0.6rem 0 calc(0.6rem + env(safe-area-inset-bottom, 0px));
          justify-content: space-around;
          box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.04);
        }
        .pf-mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.4rem 1.25rem;
          font-size: 0.675rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          text-decoration: none;
          border-radius: var(--radius-lg);
          transition: all var(--transition-fast);
        }
        .pf-mobile-nav-item:active {
          transform: scale(0.95);
        }
        .pf-mobile-nav-item.active {
          color: var(--color-accent-indigo);
          background: color-mix(in srgb, var(--color-accent-indigo) 10%, transparent);
        }
        @media (max-width: 768px) {
          .pf-mobile-nav { display: flex; }
        }
      `})]})}function fi({width:e=`100%`,height:t=`20px`,radius:n=`var(--radius-md)`,className:r=``}){return(0,N.jsx)(`div`,{className:`pf-skeleton ${r}`,style:{width:e,height:t,borderRadius:n},children:(0,N.jsx)(`style`,{children:`
        .pf-skeleton {
          background: linear-gradient(90deg,
            var(--color-bg-elevated) 25%,
            var(--color-bg-hover) 50%,
            var(--color-bg-elevated) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `})})}function pi(){return(0,N.jsxs)(`div`,{className:`pf-skeleton-card`,children:[(0,N.jsx)(fi,{height:`14px`,width:`40%`}),(0,N.jsx)(fi,{height:`24px`,width:`70%`}),(0,N.jsx)(fi,{height:`8px`,width:`100%`}),(0,N.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginTop:`0.5rem`},children:[(0,N.jsx)(fi,{height:`24px`,width:`60px`,radius:`var(--radius-full)`}),(0,N.jsx)(fi,{height:`24px`,width:`80px`,radius:`var(--radius-full)`})]}),(0,N.jsx)(`style`,{children:`
        .pf-skeleton-card {
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-xl);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
      `})]})}function mi(){let{user:e,loading:t}=ri();return t?(0,N.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100vh`},children:(0,N.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,N.jsx)(fi,{width:`48px`,height:`48px`,radius:`var(--radius-full)`,className:`mx-auto`}),(0,N.jsx)(fi,{width:`120px`,height:`16px`,className:`mt-4 mx-auto`})]})}):e?(0,N.jsxs)(`div`,{className:`pf-app-layout`,children:[(0,N.jsx)(li,{}),(0,N.jsx)(`main`,{className:`pf-main`,children:(0,N.jsx)(`div`,{className:`page-enter`,children:(0,N.jsx)(Bt,{})})}),(0,N.jsx)(di,{}),(0,N.jsx)(`style`,{children:`
        .pf-app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .pf-main {
          flex: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem 1.5rem 5rem;
          width: 100%;
        }
        @media (max-width: 768px) {
          .pf-main { padding: 1.25rem 1rem 6rem; }
        }
      `})]}):(0,N.jsx)(zt,{to:`/`,replace:!0})}var hi=0,gi=null;function _i(e,t=`success`){gi&&gi({id:++hi,message:e,type:t})}var vi={success:hr,error:mr,info:wr},yi={success:`#10B981`,error:`#EF4444`,info:`#3B82F6`};function bi(){let[e,t]=(0,_.useState)([]),n=(0,_.useCallback)(e=>{t(t=>[...t,e]),setTimeout(()=>{t(t=>t.filter(t=>t.id!==e.id))},3500)},[]);(0,_.useEffect)(()=>(gi=n,()=>{gi=null}),[n]);function r(e){t(t=>t.filter(t=>t.id!==e))}return(0,N.jsxs)(`div`,{className:`pf-toast-container`,children:[e.map(e=>{let t=vi[e.type]||vi.info,n=yi[e.type]||yi.info;return(0,N.jsxs)(`div`,{className:`pf-toast animate-fade-in`,style:{"--toast-color":n},children:[(0,N.jsx)(t,{size:18,color:n}),(0,N.jsx)(`span`,{children:e.message}),(0,N.jsx)(`button`,{className:`pf-toast-dismiss`,onClick:()=>r(e.id),children:(0,N.jsx)(Hr,{size:14})})]},e.id)}),(0,N.jsx)(`style`,{children:`
        .pf-toast-container {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: var(--z-toast);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 380px;
        }
        .pf-toast {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-secondary);
          border-left: 3px solid var(--toast-color);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          font-size: 0.875rem;
          color: var(--color-text-primary);
        }
        .pf-toast span { flex: 1; }
        .pf-toast-dismiss {
          display: flex;
          align-items: center;
          padding: 0.25rem;
          background: none;
          border: none;
          color: var(--color-text-tertiary);
          border-radius: var(--radius-sm);
          cursor: pointer;
        }
        .pf-toast-dismiss:hover {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
        }
        @media (max-width: 480px) {
          .pf-toast-container {
            bottom: 5rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
          }
        }
      `})]})}var xi={primary:`pf-btn-primary`,secondary:`pf-btn-secondary`,ghost:`pf-btn-ghost`,danger:`pf-btn-danger`,outline:`pf-btn-outline`},Si={sm:`pf-btn-sm`,md:`pf-btn-md`,lg:`pf-btn-lg`},P=(0,_.forwardRef)(function({children:e,variant:t=`primary`,size:n=`md`,loading:r=!1,disabled:i=!1,icon:a,className:o=``,...s},c){return(0,N.jsxs)(`button`,{ref:c,className:`pf-btn ${xi[t]} ${Si[n]} ${o}`,disabled:i||r,...s,children:[r?(0,N.jsx)(Er,{size:16,className:`animate-spin`}):a?(0,N.jsx)(a,{size:16}):null,e&&(0,N.jsx)(`span`,{children:e}),(0,N.jsx)(`style`,{children:`
        .pf-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 500;
          border: none;
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: transform var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast), opacity var(--transition-fast);
          white-space: nowrap;
          letter-spacing: -0.01em;
          box-shadow: var(--shadow-sm);
        }
        .pf-btn:active:not(:disabled) {
          transform: scale(0.97);
        }
        .pf-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          box-shadow: none;
        }
        .pf-btn-sm { padding: 0.4rem 0.85rem; font-size: 0.8rem; border-radius: var(--radius-md); }
        .pf-btn-md { padding: 0.55rem 1.35rem; font-size: 0.875rem; border-radius: var(--radius-lg); }
        .pf-btn-lg { padding: 0.75rem 1.85rem; font-size: 0.95rem; border-radius: var(--radius-xl); }

        .pf-btn-primary {
          background: var(--color-accent-indigo);
          color: #ffffff;
        }
        .pf-btn-primary:hover:not(:disabled) {
          background: hsl(243, 75%, 64%);
          box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
        }
        .pf-btn-secondary {
          background: var(--color-bg-elevated);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-primary);
        }
        .pf-btn-secondary:hover:not(:disabled) {
          background: var(--color-bg-hover);
          border-color: var(--color-border-secondary);
        }
        .pf-btn-ghost {
          background: transparent;
          color: var(--color-text-secondary);
          box-shadow: none;
        }
        .pf-btn-ghost:hover:not(:disabled) {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
        }
        .pf-btn-danger {
          background: rgba(239, 68, 68, 0.12);
          color: hsl(0, 84%, 60%);
          border: 1px solid rgba(239, 68, 68, 0.25);
        }
        .pf-btn-danger:hover:not(:disabled) {
          background: rgba(239, 68, 68, 0.2);
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.15);
        }
        .pf-btn-outline {
          background: rgba(255, 255, 255, 0.02);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-primary);
        }
        [data-theme="light"] .pf-btn-outline {
          background: rgba(0, 0, 0, 0.01);
        }
        .pf-btn-outline:hover:not(:disabled) {
          background: var(--color-bg-hover);
          border-color: var(--color-border-secondary);
        }
      `})]})}),Ci=[{icon:Fr,title:`Secure Authentication`,desc:`One-click administrative Google sign-in`},{icon:Or,title:`Visual Roadmap`,desc:`Structured and highly personalized career path mapping`},{icon:hr,title:`Progress Tracking`,desc:`Log daily learning habits and track specific skill sets`}];function wi(){let{user:e,signInWithGoogle:t,isDemo:n}=ri(),r=dt();async function i(){e?r(`/dashboard`):(await t(),n&&r(`/dashboard`))}return(0,N.jsxs)(`div`,{className:`pf-landing`,children:[(0,N.jsx)(`div`,{className:`pf-landing-glow g1`}),(0,N.jsx)(`div`,{className:`pf-landing-glow g2`}),(0,N.jsx)(`nav`,{className:`pf-landing-nav glass animate-fade-in`,children:(0,N.jsxs)(`div`,{className:`pf-landing-nav-inner`,children:[(0,N.jsxs)(`div`,{className:`pf-landing-brand`,children:[(0,N.jsx)(_r,{size:22,className:`pf-landing-brand-icon`}),(0,N.jsx)(`span`,{children:`Steven's Journey`})]}),(0,N.jsx)(P,{onClick:i,size:`sm`,children:e?`Dashboard`:`Sign In`})]})}),(0,N.jsxs)(`section`,{className:`pf-hero`,children:[(0,N.jsxs)(`div`,{className:`pf-hero-content animate-fade-in-up`,children:[(0,N.jsxs)(`div`,{className:`pf-hero-badge`,children:[(0,N.jsx)(Fr,{size:13}),(0,N.jsx)(`span`,{children:`Steven's Career Journey`})]}),(0,N.jsxs)(`h1`,{className:`pf-hero-title`,children:[`My career roadmap.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{children:`Built by me. Tracked by data.`})]}),(0,N.jsx)(`p`,{className:`pf-hero-desc`,children:`A visual, personal career roadmap to track milestones, skill progress, and map out my professional future transparently.`}),(0,N.jsxs)(`div`,{className:`pf-hero-actions`,children:[(0,N.jsx)(P,{onClick:i,size:`lg`,icon:cr,children:e?`Open Dashboard`:`Start Exploring`}),(0,N.jsx)(P,{variant:`outline`,size:`lg`,onClick:()=>r(`/u/steven`),children:`View Public Profile`})]})]}),(0,N.jsx)(`div`,{className:`pf-hero-preview animate-fade-in`,style:{animationDelay:`0.2s`},children:(0,N.jsxs)(`div`,{className:`pf-preview-window glass`,children:[(0,N.jsxs)(`div`,{className:`pf-preview-bar`,children:[(0,N.jsxs)(`div`,{className:`pf-preview-dots`,children:[(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{})]}),(0,N.jsx)(`div`,{className:`pf-preview-title-bar`,children:`steven-career-roadmap.json`})]}),(0,N.jsxs)(`div`,{className:`pf-preview-body`,children:[(0,N.jsxs)(`div`,{className:`pf-preview-sidebar`,children:[(0,N.jsx)(`div`,{className:`pf-preview-item active`,style:{"--c":`var(--color-accent-indigo)`}}),(0,N.jsx)(`div`,{className:`pf-preview-item`,style:{"--c":`var(--color-accent-purple)`}}),(0,N.jsx)(`div`,{className:`pf-preview-item`,style:{"--c":`var(--color-accent-green)`}})]}),(0,N.jsxs)(`div`,{className:`pf-preview-main`,children:[[0,1,2,3,4,5].map(e=>(0,N.jsx)(`div`,{className:`pf-preview-node`,style:{animationDelay:`${e*.15+.4}s`,"--node-c":[`var(--color-accent-indigo)`,`var(--color-accent-purple)`,`var(--color-accent-green)`,`var(--color-accent-yellow)`,`var(--color-accent-orange)`,`var(--color-accent-pink)`][e]}},e)),(0,N.jsx)(`div`,{className:`pf-preview-edge e1`}),(0,N.jsx)(`div`,{className:`pf-preview-edge e2`})]})]})]})})]}),(0,N.jsxs)(`section`,{className:`pf-how`,children:[(0,N.jsx)(`h2`,{children:`How does it work?`}),(0,N.jsx)(`div`,{className:`pf-how-steps stagger-children`,children:Ci.map((e,t)=>(0,N.jsxs)(`div`,{className:`pf-how-step glass`,children:[(0,N.jsx)(`div`,{className:`pf-how-icon`,children:(0,N.jsx)(e.icon,{size:22})}),(0,N.jsxs)(`div`,{className:`pf-how-number`,children:[`0`,t+1]}),(0,N.jsx)(`h3`,{children:e.title}),(0,N.jsx)(`p`,{children:e.desc})]},t))})]}),(0,N.jsxs)(`section`,{className:`pf-features`,children:[(0,N.jsx)(`h2`,{children:`Why Steven's Journey?`}),(0,N.jsx)(`div`,{className:`pf-features-grid stagger-children`,children:[{title:`Visual Roadmap`,desc:`Interactive timeline and structured system for every career path.`,color:`var(--color-accent-indigo)`},{title:`Multi-Path`,desc:`Track multiple focus areas simultaneously (Data Engineering, AI, Blockchain).`,color:`var(--color-accent-purple)`},{title:`Progress Tracking`,desc:`Log completed sub-tasks for real-time progress calculations.`,color:`var(--color-accent-green)`},{title:`Public Profile`,desc:`Share your career map with recruiters or the public via custom URLs.`,color:`var(--color-accent-orange)`},{title:`Streak Tracker`,desc:`Daily gamification to spark consistent learning habits.`,color:`var(--color-accent-red)`},{title:`Integrated Resources`,desc:`Direct links to high-quality learning resources and credentials.`,color:`var(--color-accent-pink)`}].map((e,t)=>(0,N.jsxs)(`div`,{className:`pf-feature-card glass`,style:{"--fc":e.color},children:[(0,N.jsx)(`div`,{className:`pf-feature-dot`}),(0,N.jsx)(`h4`,{children:e.title}),(0,N.jsx)(`p`,{children:e.desc})]},t))})]}),(0,N.jsx)(`section`,{className:`pf-cta animate-fade-in`,children:(0,N.jsxs)(`div`,{className:`pf-cta-box glass`,children:[(0,N.jsx)(`h2`,{children:`Explore My Career Journey`}),(0,N.jsx)(`p`,{children:`View my career targets, technical accomplishments, and recent portfolio.`}),(0,N.jsx)(P,{onClick:i,size:`lg`,icon:cr,children:`Open Dashboard`})]})}),(0,N.jsx)(`footer`,{className:`pf-footer animate-fade-in`,children:(0,N.jsxs)(`div`,{className:`pf-footer-inner`,children:[(0,N.jsxs)(`div`,{className:`pf-footer-brand`,children:[(0,N.jsx)(_r,{size:18}),(0,N.jsx)(`span`,{children:`Steven's Journey`})]}),(0,N.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),` · Specially designed for Steven Ang`]})]})}),(0,N.jsx)(`style`,{children:`
        .pf-landing {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        /* Ambient background glow dots */
        .pf-landing-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.12;
          z-index: -1;
          pointer-events: none;
        }
        .pf-landing-glow.g1 {
          top: -100px;
          left: -100px;
          background: var(--color-accent-indigo);
        }
        .pf-landing-glow.g2 {
          top: 40%;
          right: -200px;
          background: var(--color-accent-purple);
        }

        /* Nav */
        .pf-landing-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          border-bottom: 1px solid var(--color-border-primary);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }
        .pf-landing-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pf-landing-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--color-text-primary);
          letter-spacing: -0.025em;
        }
        .pf-landing-brand-icon {
          color: var(--color-accent-indigo);
        }

        /* Hero */
        .pf-hero {
          position: relative;
          padding: 9rem 1.5rem 5rem;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }
        .pf-hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pf-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 1.1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          background: var(--color-bg-hover);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-full);
          margin-bottom: 1.75rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          box-shadow: var(--shadow-sm);
        }
        .pf-hero-title {
          font-size: clamp(2.25rem, 6vw, 4rem);
          line-height: 1.15;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }
        .pf-hero-title span {
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .pf-hero-desc {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          max-width: 580px;
          margin: 0 auto 2.5rem;
          line-height: 1.65;
        }
        .pf-hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Preview window */
        .pf-hero-preview {
          perspective: 1200px;
          max-width: 780px;
          margin: 0 auto;
          width: 100%;
        }
        .pf-preview-window {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }
        .pf-preview-bar {
          padding: 0.75rem 1.25rem;
          border-bottom: 1px solid var(--color-border-primary);
          display: flex;
          align-items: center;
          position: relative;
        }
        .pf-preview-dots {
          display: flex;
          gap: 0.4rem;
        }
        .pf-preview-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .pf-preview-dots span:nth-child(1) { background: #FF5F56; }
        .pf-preview-dots span:nth-child(2) { background: #FFBD2E; }
        .pf-preview-dots span:nth-child(3) { background: #27C93F; }
        .pf-preview-title-bar {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-text-tertiary);
        }
        .pf-preview-body {
          display: flex;
          height: 240px;
        }
        .pf-preview-sidebar {
          width: 70px;
          border-right: 1px solid var(--color-border-primary);
          padding: 1.25rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pf-preview-item {
          height: 6px;
          border-radius: 3px;
          background: var(--c);
          opacity: 0.25;
        }
        .pf-preview-item.active { opacity: 0.95; }
        .pf-preview-main {
          flex: 1;
          padding: 2rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 1.5rem;
          position: relative;
        }
        .pf-preview-node {
          background: var(--color-bg-elevated);
          border: 1.5px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          opacity: 0;
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: all var(--transition-fast);
          position: relative;
        }
        .pf-preview-node::after {
          content: '';
          position: absolute;
          top: 6px;
          left: 6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--node-c);
          box-shadow: 0 0 10px var(--node-c);
        }
        .pf-preview-node:hover {
          border-color: var(--node-c);
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        /* How */
        .pf-how {
          padding: 5rem 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        .pf-how h2 {
          font-size: 2rem;
          margin-bottom: 3.5rem;
          letter-spacing: -0.025em;
        }
        .pf-how-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .pf-how-step {
          padding: 2rem;
          border-radius: var(--radius-xl);
          text-align: center;
          transition: transform var(--transition-normal);
        }
        .pf-how-step:hover {
          transform: translateY(-4px);
        }
        .pf-how-icon {
          display: inline-flex;
          padding: 0.9rem;
          background: color-mix(in srgb, var(--color-accent-indigo) 12%, transparent);
          color: var(--color-accent-indigo);
          border-radius: var(--radius-xl);
          margin-bottom: 1.25rem;
        }
        .pf-how-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-text-tertiary);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .pf-how-step h3 { font-size: 1.15rem; margin-bottom: 0.5rem; }
        .pf-how-step p { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.5; }

        /* Features */
        .pf-features {
          padding: 5rem 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        .pf-features h2 {
          font-size: 2rem;
          margin-bottom: 3.5rem;
          letter-spacing: -0.025em;
        }
        .pf-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .pf-feature-card {
          text-align: left;
          padding: 1.75rem;
          border-radius: var(--radius-xl);
          transition: all var(--transition-normal);
        }
        .pf-feature-card:hover {
          border-color: var(--fc);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px -10px color-mix(in srgb, var(--fc) 20%, transparent);
        }
        .pf-feature-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--fc);
          margin-bottom: 1rem;
          box-shadow: 0 0 8px var(--fc);
        }
        .pf-feature-card h4 { font-size: 1.1rem; margin-bottom: 0.5rem; }
        .pf-feature-card p { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.5; }

        /* CTA */
        .pf-cta {
          padding: 6rem 1.5rem;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }
        .pf-cta-box {
          border-radius: var(--radius-2xl);
          padding: 4rem 2rem;
        }
        .pf-cta h2 { font-size: 2.25rem; margin-bottom: 0.75rem; letter-spacing: -0.025em; }
        .pf-cta p { color: var(--color-text-secondary); margin-bottom: 2rem; font-size: 1.05rem; }

        /* Footer */
        .pf-footer {
          border-top: 1px solid var(--color-border-primary);
          padding: 2rem 1.5rem;
          margin-top: 4rem;
        }
        .pf-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pf-footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--color-text-secondary);
        }
        .pf-footer p { font-size: 0.85rem; color: var(--color-text-tertiary); }

        @media (max-width: 768px) {
          .pf-hero { padding: 7rem 1rem 3rem; gap: 2rem; }
          .pf-hero-desc { font-size: 1rem; }
          .pf-footer-inner { flex-direction: column; gap: 0.75rem; }
          .pf-preview-body { height: 180px; }
          .pf-preview-sidebar { width: 50px; padding: 1rem 0.5rem; }
          .pf-preview-main { padding: 1rem; }
          .pf-cta-box { padding: 3rem 1.5rem; }
        }
      `})]})}function Ti(e){return JSON.parse(JSON.stringify(e))}var Ei=`steven-journey-demo-paths-v2`,Di=`pathforge-demo-paths-v2`;function Oi(){try{let e=localStorage.getItem(Ei)||localStorage.getItem(Di);if(e)return JSON.parse(e)}catch(e){console.error(`Failed to parse local paths`,e)}return Ti(Wr)}function ki(e){localStorage.setItem(Ei,JSON.stringify(e))}function Ai(){let{user:e,isDemo:t}=ri(),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(null),c=(0,_.useCallback)(async()=>{a(!0),s(null),r(Oi()),a(!1)},[e,t]);(0,_.useEffect)(()=>{if(e){let e=setTimeout(()=>c(),0);return()=>clearTimeout(e)}},[e,c]);function l(e){return n.find(t=>t.id===e)||null}function u(e){let t=l(e);return t?Zr(Qr(t)):0}function d(){return n.flatMap(e=>(e.phases||[]).flatMap(t=>(t.nodes||[]).map(n=>({...n,pathId:e.id,pathTitle:e.title,pathColor:e.color,phaseTitle:t.title}))))}async function f(e,t){{let i=n.map(n=>({...n,phases:n.phases.map(n=>({...n,nodes:n.nodes.map(n=>n.id===e?{...n,status:t,updated_at:new Date().toISOString(),completed_at:t===`done`?new Date().toISOString():null}:n)}))}));r(i);try{ki(i)}catch(e){return{error:e}}return{error:null}}try{let n={status:t,updated_at:new Date().toISOString(),completed_at:t===`done`?new Date().toISOString():null},{error:i}=await null.from(`nodes`).update(n).eq(`id`,e);if(i)throw i;return r(t=>t.map(t=>({...t,phases:t.phases.map(t=>({...t,nodes:t.nodes.map(t=>t.id===e?{...t,...n}:t)}))}))),{error:null}}catch(e){return console.error(`Error updating node:`,e),{error:e}}}function p(){let e=d();return{total:e.length,done:e.filter(e=>e.status===`done`).length,inProgress:e.filter(e=>e.status===`in_progress`).length,todo:e.filter(e=>e.status===`todo`).length,overallProgress:Zr(e)}}return{paths:n,loading:i,error:o,fetchPaths:c,getPath:l,getPathProgress:u,getAllNodes:d,updateNodeStatus:f,getStats:p}}var ji=`steven-journey-streak`,Mi=`pathforge-streak`;function Ni(){try{let e=localStorage.getItem(ji)||localStorage.getItem(Mi);if(e){let t=JSON.parse(e);if(t.lastDate){let e=new Date().toISOString().split(`T`)[0],n=new Date(t.lastDate),r=new Date(e);if(Math.floor((r-n)/864e5)>1){let e={count:0,lastDate:null};return localStorage.setItem(ji,JSON.stringify(e)),e}}return t}}catch(e){console.error(`Failed to load streak:`,e)}return{count:0,lastDate:null}}function Pi(e){localStorage.setItem(ji,JSON.stringify(e))}function Fi(){let[e,t]=(0,_.useState)(Ni);function n(){let n=new Date().toISOString().split(`T`)[0],{lastDate:r,count:i}=e;if(r===n)return i;let a=r?new Date(r):null,o=new Date(n),s=a?Math.floor((o-a)/864e5):2,c;c=s===1?i+1:1;let l={count:c,lastDate:n};return t(l),Pi(l),c}return{streakCount:e.count,lastDate:e.lastDate,recordActivity:n}}function Ii({children:e,className:t=``,hover:n=!0,glow:r,onClick:i,style:a={}}){return(0,N.jsxs)(`div`,{className:`pf-card ${n?`pf-card-hover`:``} ${r?`pf-card-glow`:``} ${t}`,onClick:i,style:{"--glow-color":r||`transparent`,...a},role:i?`button`:void 0,tabIndex:i?0:void 0,children:[e,(0,N.jsx)(`style`,{children:`
        .pf-card {
          background: var(--color-bg-surface);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-xl);
          padding: 1.5rem;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal), background-color var(--transition-normal);
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .pf-card-hover:hover {
          transform: translateY(-4px);
          border-color: var(--color-border-secondary);
          background: var(--color-bg-elevated);
          box-shadow: var(--shadow-lg);
        }
        .pf-card-glow:hover {
          border-color: var(--glow-color);
          box-shadow: 0 8px 30px -4px color-mix(in srgb, var(--glow-color) 25%, transparent);
        }
        .pf-card[role="button"] {
          cursor: pointer;
        }
        .pf-card[role="button"]:active {
          transform: translateY(-1px) scale(0.995);
        }
      `})]})}function F({value:e=0,color:t=`#6366F1`,size:n=`md`,showLabel:r=!0,className:i=``}){let a=Math.min(100,Math.max(0,e));return(0,N.jsxs)(`div`,{className:`pf-progress ${i}`,children:[(0,N.jsx)(`div`,{className:`pf-progress-track`,style:{height:{sm:`4px`,md:`8px`,lg:`12px`}[n]},children:(0,N.jsx)(`div`,{className:`pf-progress-fill`,style:{width:`${a}%`,background:`linear-gradient(90deg, ${t}, ${t}cc)`}})}),r&&(0,N.jsxs)(`span`,{className:`pf-progress-label`,style:{color:t},children:[a,`%`]}),(0,N.jsx)(`style`,{children:`
        .pf-progress {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
        }
        .pf-progress-track {
          flex: 1;
          background: var(--color-bg-hover);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .pf-progress-fill {
          height: 100%;
          border-radius: var(--radius-full);
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .pf-progress-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          animation: shimmer 2s ease-in-out infinite;
          background-size: 200% 100%;
        }
        .pf-progress-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          min-width: 2.5rem;
          text-align: right;
        }
      `})]})}function I({type:e,status:t,children:n,color:r,className:i=``}){let a,o,s;if(e&&Gr[e]){let t=Gr[e];a=t.bgLight,o=t.color,s=n||t.label}else if(t){let e={todo:{bg:`rgba(102,102,102,0.15)`,color:`#888`},in_progress:{bg:`rgba(245,158,11,0.15)`,color:`#F59E0B`},done:{bg:`rgba(16,185,129,0.15)`,color:`#10B981`}},r=e[t]||e.todo;a=r.bg,o=r.color,s=n||t.replace(`_`,` `)}else a=r?`${r}20`:`var(--color-bg-elevated)`,o=r||`var(--color-text-secondary)`,s=n;return(0,N.jsxs)(`span`,{className:`pf-badge ${i}`,style:{background:a,color:o},children:[s,(0,N.jsx)(`style`,{children:`
        .pf-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.2rem 0.6rem;
          font-size: 0.7rem;
          font-weight: 600;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }
      `})]})}function L({count:e=0}){return e<=0?null:(0,N.jsxs)(`div`,{className:`pf-streak glass`,children:[(0,N.jsx)(`div`,{className:`pf-streak-flame`,children:(0,N.jsx)(br,{size:18})}),(0,N.jsxs)(`div`,{className:`pf-streak-info`,children:[(0,N.jsx)(`span`,{className:`pf-streak-count`,children:e}),(0,N.jsx)(`span`,{className:`pf-streak-label`,children:`day streak`})]}),(0,N.jsx)(`style`,{children:`
        .pf-streak {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.45rem 1rem;
          background: rgba(249, 115, 22, 0.1) !important;
          border: 1px solid rgba(249, 115, 22, 0.25) !important;
          border-radius: var(--radius-full);
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.1);
        }
        .pf-streak-flame {
          color: #F97316;
          display: flex;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .pf-streak-info {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
        }
        .pf-streak-count {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: #F97316;
        }
        .pf-streak-label {
          font-size: 0.725rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }
      `})]})}function Li(){let e=Xr();return(0,N.jsxs)(`div`,{className:`pf-quote glass`,children:[(0,N.jsx)(jr,{size:15,className:`pf-quote-icon`}),(0,N.jsxs)(`blockquote`,{children:[(0,N.jsxs)(`p`,{children:[`"`,e.text,`"`]}),(0,N.jsxs)(`cite`,{children:[`— `,e.author]})]}),(0,N.jsx)(`style`,{children:`
        .pf-quote {
          display: flex;
          gap: 0.85rem;
          padding: 1.15rem 1.35rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          border-left: 3.5px solid var(--color-accent-indigo);
          box-shadow: var(--shadow-sm);
        }
        .pf-quote-icon {
          color: var(--color-accent-indigo);
          flex-shrink: 0;
          margin-top: 0.15rem;
          opacity: 0.8;
        }
        .pf-quote blockquote {
          margin: 0;
        }
        .pf-quote p {
          font-size: 0.875rem;
          font-style: italic;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0 0 0.35rem;
        }
        .pf-quote cite {
          font-size: 0.725rem;
          color: var(--color-text-tertiary);
          font-style: normal;
          font-family: var(--font-mono);
          font-weight: 500;
        }
      `})]})}function Ri({nodes:e=[]}){let t=dt(),n=e.filter(e=>e.status===`in_progress`||e.status===`todo`).sort((e,t)=>e.status===`in_progress`?-1:+(t.status===`in_progress`)).slice(0,3);return n.length===0?null:(0,N.jsxs)(`div`,{className:`pf-focus`,children:[(0,N.jsxs)(`h3`,{className:`pf-focus-title`,children:[(0,N.jsx)(Rr,{size:15}),(0,N.jsx)(`span`,{children:`Focus Today`})]}),(0,N.jsx)(`div`,{className:`pf-focus-list stagger-children`,children:n.map(e=>(0,N.jsxs)(`div`,{className:`pf-focus-item glass`,onClick:()=>t(`/roadmap/${e.pathId}`),style:{"--item-color":(Gr[e.type]||Gr.action).color},children:[(0,N.jsx)(`div`,{className:`pf-focus-color`,style:{background:e.pathColor}}),(0,N.jsxs)(`div`,{className:`pf-focus-content`,children:[(0,N.jsx)(`span`,{className:`pf-focus-label`,children:e.label}),(0,N.jsxs)(`div`,{className:`pf-focus-meta`,children:[(0,N.jsx)(I,{type:e.type}),(0,N.jsx)(`span`,{className:`pf-focus-path`,children:e.pathTitle})]})]}),(0,N.jsx)(cr,{size:15,className:`pf-focus-arrow`})]},e.id))}),(0,N.jsx)(`style`,{children:`
        .pf-focus-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }
        .pf-focus-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .pf-focus-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1.15rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          cursor: pointer;
          transition: all var(--transition-normal);
        }
        .pf-focus-item:hover {
          background: var(--color-bg-hover);
          border-color: var(--color-border-secondary);
          transform: translateX(4px);
        }
        .pf-focus-color {
          width: 5px;
          height: 34px;
          border-radius: var(--radius-full);
          flex-shrink: 0;
        }
        .pf-focus-content {
          flex: 1;
          min-width: 0;
        }
        .pf-focus-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pf-focus-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }
        .pf-focus-path {
          font-size: 0.7rem;
          color: var(--color-text-secondary);
          font-family: var(--font-mono);
          font-weight: 500;
        }
        .pf-focus-arrow {
          color: var(--color-text-tertiary);
          flex-shrink: 0;
          transition: transform var(--transition-fast);
        }
        .pf-focus-item:hover .pf-focus-arrow {
          transform: translateX(3px);
          color: var(--color-text-primary);
        }
      `})]})}function zi({strengths:e=[]}){return e.length===0?null:(0,N.jsxs)(`div`,{className:`pf-strengths`,children:[(0,N.jsxs)(`h3`,{className:`pf-strengths-title`,children:[(0,N.jsx)(ur,{size:15}),(0,N.jsx)(`span`,{children:`Core Strengths`})]}),(0,N.jsx)(`div`,{className:`pf-strengths-tags stagger-children`,children:e.map(e=>(0,N.jsx)(`span`,{className:`pf-strength-tag glass`,children:e.label},e.id))}),(0,N.jsx)(`style`,{children:`
        .pf-strengths-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }
        .pf-strengths-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pf-strength-tag {
          padding: 0.4rem 0.85rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-accent-indigo);
          background: rgba(99, 102, 241, 0.08) !important;
          border: 1px solid rgba(99, 102, 241, 0.22) !important;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }
        .pf-strength-tag:hover {
          background: rgba(99, 102, 241, 0.16) !important;
          border-color: rgba(99, 102, 241, 0.35) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
        }
      `})]})}var Bi={"trending-up":zr,sparkles:Fr,shield:Pr};function Vi(){let{profile:e}=ri(),{paths:t,loading:n,getAllNodes:r,getStats:i}=Ai(),{streakCount:a}=Fi(),o=dt(),s=r(),c=i();return n?(0,N.jsxs)(`div`,{className:`pf-dashboard-loading`,children:[(0,N.jsx)(`div`,{className:`pf-dash-header-loading`,children:(0,N.jsx)(pi,{})}),(0,N.jsxs)(`div`,{className:`pf-dash-paths-loading`,children:[(0,N.jsx)(pi,{}),(0,N.jsx)(pi,{})]})]}):(0,N.jsxs)(`div`,{className:`pf-dashboard animate-fade-in`,children:[(0,N.jsxs)(`div`,{className:`pf-dash-header glass`,children:[(0,N.jsxs)(`div`,{className:`pf-header-left`,children:[(0,N.jsx)(`div`,{className:`pf-header-avatar-ring`,children:(0,N.jsx)(_r,{size:22,className:`pf-header-logo-icon`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`h1`,{children:[`Hello, `,e?.name||`Steven`,`.`]}),(0,N.jsx)(`p`,{className:`pf-dash-subtitle`,children:e?.headline||`Welcome to your career roadmap tracker repository`})]})]}),(0,N.jsx)(`div`,{className:`pf-header-right`,children:(0,N.jsx)(L,{count:a})})]}),(0,N.jsxs)(`div`,{className:`pf-dash-layout`,children:[(0,N.jsxs)(`div`,{className:`pf-dash-main stagger-children`,children:[(0,N.jsxs)(`div`,{className:`pf-section-header`,children:[(0,N.jsx)(`h2`,{children:`Career Paths`}),(0,N.jsxs)(`span`,{className:`pf-section-tag`,children:[t.length,` Active Tracks`]})]}),(0,N.jsx)(`div`,{className:`pf-dash-paths`,children:t.map(e=>{let t=Qr(e),n=Zr(t),r=t.filter(e=>e.status===`in_progress`).length,i=t.filter(e=>e.status===`done`).length,a=Bi[e.icon]||zr;return(0,N.jsxs)(Ii,{onClick:()=>o(`/roadmap/${e.id}`),className:`pf-path-card`,glow:e.color,children:[(0,N.jsxs)(`div`,{className:`pf-path-header`,children:[(0,N.jsx)(`div`,{className:`pf-path-icon`,style:{background:`${e.color}15`,color:e.color},children:(0,N.jsx)(a,{size:20})}),(0,N.jsx)(`div`,{className:`pf-path-badges`,children:r>0&&(0,N.jsxs)(I,{status:`in_progress`,children:[r,` active`]})})]}),(0,N.jsx)(`h3`,{className:`pf-path-title`,children:e.title}),e.description&&(0,N.jsx)(`p`,{className:`pf-path-desc`,children:e.description}),(0,N.jsx)(`div`,{className:`pf-path-progress-container`,children:(0,N.jsx)(F,{value:n,color:e.color,size:`sm`})}),(0,N.jsxs)(`div`,{className:`pf-path-footer`,children:[(0,N.jsxs)(`span`,{className:`pf-path-count`,children:[i,`/`,t.length,` tasks completed`]}),(0,N.jsxs)(`span`,{className:`pf-path-cta`,style:{color:e.color},children:[`Open Roadmap `,(0,N.jsx)(cr,{size:14,className:`pf-path-cta-arrow`})]})]})]},e.id)})}),(0,N.jsx)(`div`,{className:`pf-dash-section`,children:(0,N.jsx)(Ri,{nodes:s})})]}),(0,N.jsxs)(`div`,{className:`pf-dash-sidebar stagger-children`,style:{animationDelay:`0.15s`},children:[(0,N.jsx)(`div`,{className:`pf-section-header`,children:(0,N.jsx)(`h2`,{children:`Tracking Statistics`})}),(0,N.jsxs)(`div`,{className:`pf-sidebar-widget pf-stats-widget glass`,children:[(0,N.jsxs)(`div`,{className:`pf-dash-stats-grid`,children:[(0,N.jsxs)(`div`,{className:`pf-stat-item`,children:[(0,N.jsx)(`span`,{className:`pf-stat-val`,children:c.total}),(0,N.jsx)(`span`,{className:`pf-stat-lbl`,children:`Total Tasks`})]}),(0,N.jsxs)(`div`,{className:`pf-stat-item`,children:[(0,N.jsx)(`span`,{className:`pf-stat-val`,style:{color:`var(--color-accent-green)`},children:c.done}),(0,N.jsx)(`span`,{className:`pf-stat-lbl`,children:`Completed`})]}),(0,N.jsxs)(`div`,{className:`pf-stat-item`,children:[(0,N.jsx)(`span`,{className:`pf-stat-val`,style:{color:`var(--color-accent-yellow)`},children:c.inProgress}),(0,N.jsx)(`span`,{className:`pf-stat-lbl`,children:`In Progress`})]}),(0,N.jsxs)(`div`,{className:`pf-stat-item`,children:[(0,N.jsxs)(`span`,{className:`pf-stat-val`,style:{color:`var(--color-accent-indigo)`},children:[c.overallProgress,`%`]}),(0,N.jsx)(`span`,{className:`pf-stat-lbl`,children:`Progress`})]})]}),(0,N.jsx)(`div`,{className:`pf-stat-overall-progress`,children:(0,N.jsx)(F,{value:c.overallProgress,color:`var(--color-accent-indigo)`,size:`xs`,showLabel:!1})})]}),(0,N.jsx)(`div`,{className:`pf-sidebar-widget`,children:(0,N.jsx)(Li,{})}),(0,N.jsx)(`div`,{className:`pf-sidebar-widget`,children:(0,N.jsx)(zi,{strengths:Yr})})]})]}),(0,N.jsx)(`style`,{children:`
        .pf-dashboard {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-bottom: 2rem;
        }

        /* Loading */
        .pf-dashboard-loading {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Header Card */
        .pf-dash-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.75rem 2rem;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-md);
        }
        .pf-header-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .pf-header-avatar-ring {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.1);
          color: var(--color-accent-indigo);
          border: 1px solid rgba(99, 102, 241, 0.25);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.1);
        }
        .pf-header-left h1 {
          font-size: 1.65rem;
          letter-spacing: -0.025em;
        }
        .pf-dash-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: 0.25rem;
        }

        /* Layout Grid */
        .pf-dash-layout {
          display: grid;
          grid-template-columns: 7fr 3fr;
          gap: 2rem;
          align-items: start;
        }

        /* Headings */
        .pf-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          border-left: 3px solid var(--color-accent-indigo);
          padding-left: 0.75rem;
        }
        .pf-section-header h2 {
          font-size: 1.25rem;
          color: var(--color-text-primary);
          letter-spacing: -0.02em;
        }
        .pf-section-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Main paths grid */
        .pf-dash-main {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .pf-dash-paths {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .pf-path-card {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          height: 100%;
        }
        .pf-path-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .pf-path-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }
        .pf-path-title {
          font-size: 1.15rem;
          letter-spacing: -0.02em;
          line-height: 1.3;
        }
        .pf-path-desc {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          flex: 1;
        }
        .pf-path-progress-container {
          margin: 0.5rem 0 0.25rem;
        }
        .pf-path-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--color-border-primary);
          padding-top: 0.85rem;
          margin-top: 0.25rem;
        }
        .pf-path-count {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
        }
        .pf-path-cta {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.825rem;
          font-weight: 600;
          transition: transform var(--transition-fast);
        }
        .pf-path-card:hover .pf-path-cta-arrow {
          transform: translateX(4px);
        }
        .pf-path-cta-arrow {
          transition: transform var(--transition-fast);
        }

        /* Sidebar content */
        .pf-dash-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-sidebar-widget {
          width: 100%;
        }
        .pf-stats-widget {
          padding: 1.5rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-md);
        }
        .pf-dash-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .pf-stat-item {
          text-align: center;
          padding: 0.85rem 0.5rem;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }
        .pf-stat-val {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.65rem;
          font-weight: 700;
        }
        .pf-stat-lbl {
          font-size: 0.675rem;
          color: var(--color-text-tertiary);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 0.15rem;
          display: block;
        }
        .pf-stat-overall-progress {
          margin-top: 1rem;
        }

        @media (max-width: 1024px) {
          .pf-dash-layout { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        @media (max-width: 640px) {
          .pf-dash-header { padding: 1.25rem 1.5rem; flex-direction: column; align-items: flex-start; gap: 1.25rem; }
          .pf-header-right { width: 100%; }
        }
      `})]})}var Hi=c(m(),1);function Ui({isOpen:e,onClose:t,title:n,children:r,width:i=`420px`}){let a=(0,_.useRef)(null);return(0,_.useEffect)(()=>{function n(e){e.key===`Escape`&&t()}return e&&(document.addEventListener(`keydown`,n),document.body.style.overflow=`hidden`),()=>{document.removeEventListener(`keydown`,n),document.body.style.overflow=``}},[e,t]),e?(0,Hi.createPortal)((0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`div`,{className:`pf-drawer-overlay`,onClick:t}),(0,N.jsxs)(`div`,{ref:a,className:`pf-drawer animate-slide-in-right`,style:{width:i},children:[(0,N.jsxs)(`div`,{className:`pf-drawer-header`,children:[(0,N.jsx)(`h3`,{children:n}),(0,N.jsx)(`button`,{className:`pf-drawer-close`,onClick:t,"aria-label":`Close drawer`,children:(0,N.jsx)(Hr,{size:20})})]}),(0,N.jsx)(`div`,{className:`pf-drawer-body`,children:r})]}),(0,N.jsx)(`style`,{children:`
        .pf-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: var(--z-drawer);
          animation: fadeIn 0.2s ease-out;
        }
        .pf-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          max-width: 100vw;
          background: var(--color-bg-surface);
          border-left: 1px solid var(--color-border-primary);
          z-index: calc(var(--z-drawer) + 1);
          display: flex;
          flex-direction: column;
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.3);
        }
        .pf-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--color-border-primary);
        }
        .pf-drawer-header h3 {
          font-size: 1.1rem;
          font-family: var(--font-heading);
          color: var(--color-text-primary);
          margin: 0;
        }
        .pf-drawer-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          color: var(--color-text-tertiary);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }
        .pf-drawer-close:hover {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
        }
        .pf-drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }
        @media (max-width: 480px) {
          .pf-drawer { width: 100% !important; }
        }
      `})]}),document.body):null}var Wi={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e=16,t,n,r={},i=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(t=function(t){var n=Math.random();return r[n]=requestAnimationFrame(function a(o){i===o||i+e-1<o?(i=o,delete r[n],t()):r[n]=requestAnimationFrame(a)}),n},n=function(e){r[e]&&cancelAnimationFrame(r[e])}):(t=function(t){return setTimeout(t,e)},n=function(e){return clearTimeout(e)}),{frame:t,cancel:n}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function ee(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function S(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function C(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function te(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function w(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function T(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function E(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(oe(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):w(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,ee=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=ee,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=ee;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function ne(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&!(a.width===i.width&&a.height===i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return E(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function re(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?S:C,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),S=ee(t),C=i,te=[],w=e.width*S.x,E=e.height*S.y;C--;)te.push(T({x:w,y:E,angle:a,spread:o,startVelocity:s,color:f[C%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(te):(m=ne(e,te,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=te(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var ie;function ae(){return ie||=re(null,{useWorker:!0,resize:!0}),ie}function oe(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function se(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function ce(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return ae().apply(this,arguments)},n.exports.reset=function(){ae().reset()},n.exports.create=re,n.exports.shapeFromPath=se,n.exports.shapeFromText=ce})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),Wi,!1);var Gi=Wi.exports;Wi.exports.create;function Ki(){Gi({particleCount:100,spread:70,origin:{y:.6},colors:[`#6366F1`,`#8B5CF6`,`#10B981`,`#F59E0B`,`#EC4899`]})}function qi(){let{pathId:e}=ht(),t=dt(),{getPath:n,updateNodeStatus:r,loading:i}=Ai(),{recordActivity:a}=Fi(),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),u=n(e),d=(0,_.useCallback)(e=>{s(e),l(!0)},[]),f=async(e,t)=>{let{error:n}=await r(e,t);if(!n){o&&o.id===e&&s(e=>({...e,status:t,updated_at:new Date().toISOString()})),a();let n=m.find(t=>t.id===e)?.type||`action`;t===`done`&&n===`milestone`?(Ki(),_i(`Milestone completed. Awesome!`,`success`)):t===`done`?_i(`Task completed.`,`success`):t===`in_progress`&&_i(`Task started.`,`info`)}},p=async(e,t)=>{e.stopPropagation();let n={todo:`in_progress`,in_progress:`done`,done:`todo`}[t.status]||`todo`;await f(t.id,n)};if(i)return(0,N.jsxs)(`div`,{className:`pf-timeline-loading`,children:[(0,N.jsx)(pi,{}),(0,N.jsx)(pi,{})]});if(!u)return(0,N.jsxs)(`div`,{className:`pf-timeline-error`,children:[(0,N.jsx)(`h2`,{children:`Roadmap not found`}),(0,N.jsx)(P,{onClick:()=>t(`/dashboard`),variant:`secondary`,style:{marginTop:`1rem`},children:`Back to Dashboard`})]});let m=Qr(u),h=Zr(m);return(0,N.jsxs)(`div`,{className:`pf-roadmap-view animate-fade-in`,children:[(0,N.jsxs)(`div`,{className:`pf-roadmap-header glass`,children:[(0,N.jsxs)(`div`,{className:`pf-roadmap-header-left`,children:[(0,N.jsx)(P,{variant:`ghost`,size:`sm`,icon:sr,onClick:()=>t(`/dashboard`),children:`Dashboard`}),(0,N.jsxs)(`div`,{className:`pf-roadmap-info`,children:[(0,N.jsx)(`h1`,{style:{color:u.color},children:u.title}),u.description&&(0,N.jsx)(`p`,{className:`pf-roadmap-desc`,children:u.description})]})]}),(0,N.jsx)(`div`,{className:`pf-roadmap-header-right`,children:(0,N.jsx)(F,{value:h,color:u.color,size:`md`})})]}),(0,N.jsx)(`div`,{className:`pf-timeline-container`,children:u.phases&&u.phases.length===0?(0,N.jsx)(`div`,{className:`pf-no-phases`,children:`No phases in this roadmap yet.`}):(0,N.jsx)(`div`,{className:`pf-timeline-track-wrapper`,style:{"--path-color":u.color},children:u.phases.map((e,t)=>{let n=e.nodes||[],r=n.filter(e=>e.status===`done`).length,i=n.length>0&&r===n.length,a=n.some(e=>e.status===`in_progress`||e.status===`done`)&&!i;return(0,N.jsxs)(`div`,{className:`pf-timeline-phase ${i?`done`:``} ${a?`in-progress`:``}`,children:[(0,N.jsxs)(`div`,{className:`pf-phase-marker-row`,children:[(0,N.jsx)(`div`,{className:`pf-phase-dot ${i?`done`:``} ${a?`in-progress`:``}`,style:{backgroundColor:i?`var(--color-accent-green)`:a?`var(--color-accent-yellow)`:`var(--color-bg-hover)`,color:i||a?`var(--color-bg-primary)`:`var(--color-text-tertiary)`,border:`2px solid ${i?`var(--color-accent-green)`:a?`var(--color-accent-yellow)`:`var(--color-border-primary)`}`,boxShadow:i?`0 0 15px rgba(16, 185, 129, 0.4)`:a?`0 0 15px rgba(245, 158, 11, 0.4)`:`none`},children:t+1}),(0,N.jsxs)(`div`,{className:`pf-phase-info`,children:[(0,N.jsx)(`h2`,{children:e.title}),e.duration_label&&(0,N.jsx)(`span`,{className:`pf-phase-duration`,children:e.duration_label})]})]}),(0,N.jsx)(`div`,{className:`pf-phase-nodes-list`,children:n.map(e=>{let t=e.status===`done`,n=e.status===`in_progress`;return(0,N.jsxs)(`div`,{className:`pf-timeline-node-card glass ${t?`done`:``} ${n?`in-progress`:``}`,style:{"--node-border":u.color},onClick:()=>d(e),children:[(0,N.jsx)(`button`,{className:`pf-node-toggle-btn ${e.status}`,onClick:t=>p(t,e),title:`Status: ${Kr[e.status]?.label}. Klik untuk mengubah.`,children:t?(0,N.jsx)(pr,{size:13,strokeWidth:3.5}):n?(0,N.jsx)(Er,{size:13,className:`animate-spin`,style:{color:`var(--color-accent-yellow)`}}):(0,N.jsx)(gr,{size:13})}),(0,N.jsxs)(`div`,{className:`pf-node-card-body`,children:[(0,N.jsx)(`span`,{className:`pf-node-card-title`,children:e.label}),e.detail&&(0,N.jsx)(`p`,{className:`pf-node-card-preview`,children:e.detail})]}),(0,N.jsx)(`div`,{className:`pf-node-card-right`,children:(0,N.jsx)(I,{type:e.type})})]},e.id)})})]},e.id)})})}),(0,N.jsx)(Ui,{isOpen:c,onClose:()=>l(!1),title:`Task Details`,children:o&&(0,N.jsxs)(`div`,{className:`pf-node-detail animate-fade-in`,children:[(0,N.jsx)(`div`,{className:`pf-detail-header-badge`,children:(0,N.jsx)(I,{type:o.type})}),(0,N.jsx)(`h2`,{className:`pf-node-detail-label`,children:o.label}),o.detail&&(0,N.jsx)(`p`,{className:`pf-node-detail-text`,children:o.detail}),o.links&&o.links.length>0&&(0,N.jsxs)(`div`,{className:`pf-node-detail-section`,children:[(0,N.jsxs)(`span`,{className:`pf-node-detail-section-title`,children:[(0,N.jsx)(dr,{size:13,style:{marginRight:`0.35rem`,display:`inline`}}),`References & Learning Resources`]}),(0,N.jsx)(`div`,{className:`pf-links-list`,children:o.links.map((e,t)=>(0,N.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,className:`pf-resource-link`,children:[(0,N.jsxs)(`div`,{className:`pf-resource-link-info`,children:[(0,N.jsx)(`span`,{className:`pf-resource-link-title`,children:e.title}),(0,N.jsx)(yr,{size:12,className:`pf-resource-link-icon`})]}),(0,N.jsx)(`span`,{className:`pf-resource-tag ${e.tag===`Financial Aid`?`financial-aid`:`free`}`,children:e.tag})]},t))})]}),(0,N.jsxs)(`div`,{className:`pf-node-detail-section`,children:[(0,N.jsx)(`span`,{className:`pf-node-detail-section-title`,children:`Progress Status`}),(0,N.jsx)(`div`,{className:`pf-status-buttons`,children:Object.entries(Kr).map(([e,t])=>(0,N.jsx)(`button`,{className:`pf-status-btn ${o.status===e?`active`:``}`,style:{"--sb-color":t.color,"--sb-bg":t.bg},onClick:()=>f(o.id,e),children:t.label},e))})]}),o.updated_at&&(0,N.jsxs)(`div`,{className:`pf-node-detail-meta`,children:[`Last updated: `,$r(o.updated_at)]})]})}),(0,N.jsx)(`style`,{children:`
        .pf-roadmap-view {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 860px;
          margin: 0 auto;
          padding-bottom: 4rem;
        }

        .pf-timeline-loading, .pf-timeline-error {
          padding: 2rem;
          text-align: center;
        }

        /* Header Card styling */
        .pf-roadmap-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border-primary);
          gap: 1.5rem;
          flex-wrap: wrap;
          box-shadow: var(--shadow-md);
        }
        .pf-roadmap-header-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .pf-roadmap-info {
          display: flex;
          flex-direction: column;
        }
        .pf-roadmap-header-left h1 {
          font-size: 1.45rem;
          letter-spacing: -0.025em;
        }
        .pf-roadmap-desc {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: 0.25rem;
          line-height: 1.5;
        }
        .pf-roadmap-header-right {
          min-width: 260px;
          flex-shrink: 0;
        }

        /* Timeline Checklist Layout */
        .pf-timeline-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .pf-no-phases {
          text-align: center;
          padding: 3rem;
          color: var(--color-text-tertiary);
          border: 1.5px dashed var(--color-border-primary);
          border-radius: var(--radius-xl);
          font-size: 0.875rem;
        }
        .pf-timeline-track-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        /* Vertical track connection lines */
        .pf-timeline-track-wrapper::before {
          content: '';
          position: absolute;
          top: 1.5rem;
          bottom: 1.5rem;
          left: 17px;
          width: 2px;
          background: var(--color-border-primary);
          z-index: 0;
          pointer-events: none;
        }
        .pf-timeline-phase {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          z-index: 1;
        }
        .pf-phase-marker-row {
          display: flex;
          align-items: center;
          gap: 1.15rem;
        }
        .pf-phase-dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          z-index: 2;
          box-shadow: 0 0 0 6px var(--color-bg-primary);
          transition: all var(--transition-normal);
        }
        .pf-phase-info {
          display: flex;
          align-items: baseline;
          gap: 0.85rem;
          flex-wrap: wrap;
        }
        .pf-phase-info h2 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-text-primary);
          letter-spacing: -0.015em;
        }
        .pf-phase-duration {
          font-size: 0.725rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: var(--color-bg-hover);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-primary);
        }

        /* Phase lists cards */
        .pf-phase-nodes-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-left: 3.25rem; /* Indent under phase header */
        }
        .pf-timeline-node-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.15rem 1.25rem;
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }
        .pf-timeline-node-card:hover {
          transform: translateX(4px);
          border-color: var(--node-border);
          background: color-mix(in srgb, var(--node-border) 4%, var(--color-bg-surface));
          box-shadow: var(--shadow-md);
        }
        .pf-timeline-node-card.in-progress {
          border-color: var(--color-accent-yellow);
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.05);
        }
        .pf-timeline-node-card.done {
          opacity: 0.6;
        }
        
        /* Left button indicator */
        .pf-node-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px solid var(--color-border-primary);
          background: var(--color-bg-elevated);
          color: var(--color-text-tertiary);
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }
        .pf-node-toggle-btn:hover {
          background: var(--color-bg-hover);
          color: var(--color-text-primary);
          border-color: var(--color-border-secondary);
        }
        .pf-node-toggle-btn.done {
          background: var(--color-accent-green);
          border-color: var(--color-accent-green);
          color: #ffffff;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
        }
        .pf-node-toggle-btn.in_progress {
          border-color: var(--color-accent-yellow);
          background: rgba(245, 158, 11, 0.08);
        }

        .pf-node-card-body {
          flex: 1;
          min-width: 0;
        }
        .pf-node-card-title {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text-primary);
          display: block;
        }
        .pf-timeline-node-card.done .pf-node-card-title {
          text-decoration: line-through;
          color: var(--color-text-tertiary);
        }
        .pf-node-card-preview {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          margin-top: 0.3rem;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pf-node-card-right {
          flex-shrink: 0;
        }

        /* Slide Panel drawer details styling */
        .pf-node-detail {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-detail-header-badge {
          align-self: flex-start;
        }
        .pf-node-detail-label {
          font-size: 1.35rem;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .pf-node-detail-text {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          padding: 1.25rem;
          background: var(--color-bg-elevated);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
        }
        .pf-node-detail-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .pf-node-detail-section-title {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-text-tertiary);
          display: flex;
          align-items: center;
        }
        .pf-status-buttons {
          display: flex;
          gap: 0.5rem;
        }
        .pf-status-btn {
          flex: 1;
          padding: 0.7rem;
          font-size: 0.825rem;
          font-weight: 600;
          font-family: var(--font-heading);
          border: 1.5px solid var(--color-border-primary);
          background: var(--color-bg-surface);
          color: var(--color-text-secondary);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pf-status-btn:hover {
          border-color: var(--sb-color);
          color: var(--sb-color);
        }
        .pf-status-btn.active {
          background: var(--sb-bg);
          border-color: var(--sb-color);
          color: var(--sb-color);
          box-shadow: 0 4px 12px color-mix(in srgb, var(--sb-color) 15%, transparent);
        }
        .pf-node-detail-meta {
          font-size: 0.75rem;
          color: var(--color-text-tertiary);
          font-family: var(--font-mono);
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-primary);
        }

        /* Resource Links */
        .pf-links-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pf-resource-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.8rem 1rem;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-lg);
          transition: all var(--transition-fast);
          cursor: pointer;
        }
        .pf-resource-link:hover {
          border-color: var(--color-accent-indigo);
          background: color-mix(in srgb, var(--color-accent-indigo) 6%, var(--color-bg-elevated));
          transform: translateX(4px);
        }
        .pf-resource-link-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
          flex: 1;
        }
        .pf-resource-link-title {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-accent-indigo);
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pf-resource-link-icon {
          color: var(--color-accent-indigo);
          flex-shrink: 0;
        }
        .pf-resource-tag {
          flex-shrink: 0;
          font-size: 0.65rem;
          font-family: var(--font-mono);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          white-space: nowrap;
        }
        .pf-resource-tag.free {
          background: rgba(16, 185, 129, 0.12);
          color: var(--color-accent-green);
        }
        .pf-resource-tag.financial-aid {
          background: rgba(139, 92, 246, 0.12);
          color: var(--color-accent-purple);
        }

        @media (max-width: 768px) {
          .pf-roadmap-header { flex-direction: column; align-items: flex-start; padding: 1.25rem 1.5rem; }
          .pf-roadmap-header-right { width: 100%; min-width: 0; }
          .pf-phase-nodes-list { margin-left: 0; }
          .pf-timeline-track-wrapper::before { display: none; }
          .pf-timeline-node-card { padding: 1rem; }
        }
      `})]})}var Ji={todo:gr,in_progress:Er,done:pr};function Yi(){let{paths:e,loading:t,getAllNodes:n,updateNodeStatus:r,getStats:i}=Ai(),{recordActivity:a}=Fi(),[o,s]=(0,_.useState)(`all`),[c,l]=(0,_.useState)(`all`),[u,d]=(0,_.useState)(`all`),[f,p]=(0,_.useState)(`status`),m=n(),h=i(),g=(0,_.useMemo)(()=>{let e=[...m];if(o!==`all`&&(e=e.filter(e=>e.pathId===o)),c!==`all`&&(e=e.filter(e=>e.status===c)),u!==`all`&&(e=e.filter(e=>e.type===u)),f===`status`){let t={in_progress:0,todo:1,done:2};e.sort((e,n)=>(t[e.status]??1)-(t[n.status]??1))}else f===`updated`?e.sort((e,t)=>new Date(t.updated_at||0)-new Date(e.updated_at||0)):f===`path`&&e.sort((e,t)=>e.pathTitle.localeCompare(t.pathTitle));return e},[m,o,c,u,f]);async function v(e,t){let n={todo:`in_progress`,in_progress:`done`,done:`todo`}[t]||`todo`;await r(e,n),a(),n===`done`&&_i(`Task completed.`,`success`)}return t?(0,N.jsxs)(`div`,{className:`pf-progress-loading`,children:[(0,N.jsx)(pi,{}),(0,N.jsx)(pi,{})]}):(0,N.jsxs)(`div`,{className:`pf-progress-page animate-fade-in`,children:[(0,N.jsxs)(`div`,{className:`pf-progress-header`,children:[(0,N.jsx)(`h1`,{children:`Progress Tracker`}),(0,N.jsx)(`p`,{className:`pf-progress-subtitle`,children:`All sub-tasks across all career roadmaps`})]}),(0,N.jsxs)(`div`,{className:`pf-progress-overview glass`,children:[(0,N.jsxs)(`div`,{className:`pf-progress-overview-text`,children:[(0,N.jsx)(`span`,{children:`Overall Progress`}),(0,N.jsxs)(`span`,{className:`pf-progress-percent`,children:[h.overallProgress,`%`]})]}),(0,N.jsx)(F,{value:h.overallProgress,color:`var(--color-accent-indigo)`,size:`md`,showLabel:!1}),(0,N.jsxs)(`div`,{className:`pf-progress-counts`,children:[(0,N.jsxs)(`span`,{children:[(0,N.jsx)(`strong`,{style:{color:`var(--color-accent-green)`},children:h.done}),` completed`]}),(0,N.jsxs)(`span`,{children:[(0,N.jsx)(`strong`,{style:{color:`var(--color-accent-yellow)`},children:h.inProgress}),` in progress`]}),(0,N.jsxs)(`span`,{children:[(0,N.jsx)(`strong`,{children:h.todo}),` to do`]})]})]}),(0,N.jsxs)(`div`,{className:`pf-progress-filters glass`,children:[(0,N.jsxs)(`div`,{className:`pf-filter-group`,children:[(0,N.jsx)(Sr,{size:13,className:`pf-filter-icon`}),(0,N.jsx)(`div`,{className:`pf-select-wrapper`,children:(0,N.jsxs)(`select`,{value:o,onChange:e=>s(e.target.value),children:[(0,N.jsx)(`option`,{value:`all`,children:`All Paths`}),e.map(e=>(0,N.jsx)(`option`,{value:e.id,children:e.title},e.id))]})}),(0,N.jsx)(`div`,{className:`pf-select-wrapper`,children:(0,N.jsxs)(`select`,{value:c,onChange:e=>l(e.target.value),children:[(0,N.jsx)(`option`,{value:`all`,children:`All Statuses`}),Object.entries(Kr).map(([e,t])=>(0,N.jsx)(`option`,{value:e,children:t.label},e))]})}),(0,N.jsx)(`div`,{className:`pf-select-wrapper`,children:(0,N.jsxs)(`select`,{value:u,onChange:e=>d(e.target.value),children:[(0,N.jsx)(`option`,{value:`all`,children:`All Types`}),Object.entries(Gr).map(([e,t])=>(0,N.jsx)(`option`,{value:e,children:t.label},e))]})})]}),(0,N.jsxs)(`div`,{className:`pf-filter-group`,children:[(0,N.jsx)(lr,{size:13,className:`pf-filter-icon`}),(0,N.jsx)(`div`,{className:`pf-select-wrapper`,children:(0,N.jsxs)(`select`,{value:f,onChange:e=>p(e.target.value),children:[(0,N.jsx)(`option`,{value:`status`,children:`Sort: Status`}),(0,N.jsx)(`option`,{value:`updated`,children:`Sort: Recent`}),(0,N.jsx)(`option`,{value:`path`,children:`Sort: Path`})]})})]})]}),(0,N.jsx)(`div`,{className:`pf-task-list stagger-children`,children:g.length===0?(0,N.jsx)(`div`,{className:`pf-no-tasks glass`,children:`No tasks match the current filters.`}):g.map(e=>{let t=Ji[e.status]||gr,n=e.status===`done`,r=e.status===`in_progress`;return(0,N.jsxs)(`div`,{className:`pf-task-item glass ${n?`done`:``} ${r?`in-progress`:``}`,style:{"--item-border":e.pathColor},children:[(0,N.jsx)(`button`,{className:`pf-task-status-btn ${e.status}`,onClick:()=>v(e.id,e.status),style:{color:n?`var(--color-accent-green)`:r?`var(--color-accent-yellow)`:`var(--color-text-tertiary)`},title:`Toggle status`,children:(0,N.jsx)(t,{size:16,className:r?`animate-spin`:``})}),(0,N.jsxs)(`div`,{className:`pf-task-info`,children:[(0,N.jsx)(`span`,{className:`pf-task-label`,children:e.label}),(0,N.jsxs)(`div`,{className:`pf-task-meta`,children:[(0,N.jsx)(`div`,{className:`pf-task-path-dot`,style:{background:e.pathColor}}),(0,N.jsx)(`span`,{className:`pf-task-path-title`,children:e.pathTitle}),(0,N.jsx)(`span`,{children:`·`}),(0,N.jsx)(`span`,{className:`pf-task-phase-title`,children:e.phaseTitle}),(0,N.jsx)(I,{type:e.type})]})]}),e.updated_at&&(0,N.jsx)(`span`,{className:`pf-task-time`,children:$r(e.updated_at)})]},e.id)})}),(0,N.jsx)(`style`,{children:`
        .pf-progress-page {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          padding-bottom: 3rem;
        }

        .pf-progress-header h1 {
          font-size: 1.55rem;
          letter-spacing: -0.025em;
        }
        .pf-progress-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: 0.25rem;
        }

        /* Overview glass card */
        .pf-progress-overview {
          border-radius: var(--radius-2xl);
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-md);
        }
        .pf-progress-overview-text {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
        }
        .pf-progress-percent {
          font-size: 1.25rem;
          color: var(--color-accent-indigo);
        }
        .pf-progress-counts {
          display: flex;
          gap: 1.5rem;
          font-size: 0.775rem;
          color: var(--color-text-secondary);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-top: 1px solid var(--color-border-primary);
          padding-top: 0.85rem;
        }

        /* Filters Bar */
        .pf-progress-filters {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-filter-group {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .pf-filter-icon {
          color: var(--color-text-tertiary);
          margin-right: 0.15rem;
        }
        .pf-select-wrapper {
          position: relative;
        }
        .pf-filter-group select {
          padding: 0.45rem 1.5rem 0.45rem 0.75rem;
          font-size: 0.825rem;
          font-family: var(--font-body);
          background: var(--color-bg-elevated);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
          appearance: none;
          outline: none;
          min-width: 120px;
        }
        .pf-filter-group select:hover {
          border-color: var(--color-border-secondary);
        }
        .pf-filter-group select:focus {
          border-color: var(--color-accent-indigo);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
        }
        .pf-select-wrapper::after {
          content: '↓';
          font-size: 0.65rem;
          position: absolute;
          right: 0.65rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-tertiary);
          pointer-events: none;
        }

        /* Task Items list */
        .pf-task-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .pf-task-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }
        .pf-task-item:hover {
          transform: translateX(3px);
          border-color: var(--item-border);
          background: color-mix(in srgb, var(--item-border) 3%, var(--color-bg-surface));
          box-shadow: var(--shadow-md);
        }
        .pf-task-item.in-progress {
          border-color: var(--color-accent-yellow);
        }
        .pf-task-item.done {
          opacity: 0.55;
        }

        .pf-task-status-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: var(--color-bg-elevated);
          border-radius: 50%;
          cursor: pointer;
          transition: all var(--transition-fast);
          flex-shrink: 0;
          border: 1px solid var(--color-border-primary);
        }
        .pf-task-status-btn:hover {
          background: var(--color-bg-hover);
        }
        .pf-task-status-btn.done {
          background: rgba(16, 185, 129, 0.1);
          border-color: var(--color-accent-green);
        }
        .pf-task-status-btn.in_progress {
          border-color: var(--color-accent-yellow);
          background: rgba(245, 158, 11, 0.08);
        }

        .pf-task-info {
          flex: 1;
          min-width: 0;
        }
        .pf-task-label {
          display: block;
          font-size: 0.925rem;
          font-weight: 500;
          color: var(--color-text-primary);
        }
        .pf-task-item.done .pf-task-label {
          text-decoration: line-through;
          color: var(--color-text-tertiary);
        }
        .pf-task-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.3rem;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          flex-wrap: wrap;
        }
        .pf-task-path-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .pf-task-path-title {
          font-weight: 600;
        }
        .pf-task-time {
          font-size: 0.725rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .pf-no-tasks {
          text-align: center;
          padding: 4rem;
          color: var(--color-text-tertiary);
          font-size: 0.9rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
        }

        @media (max-width: 768px) {
          .pf-progress-filters { flex-direction: column; align-items: flex-start; padding: 1rem; }
          .pf-filter-group { width: 100%; flex-wrap: wrap; }
          .pf-select-wrapper select { width: 100%; }
          .pf-task-time { display: none; }
        }
      `})]})}function Xi(){let{profile:e,updateProfile:t,signOut:n}=ri(),[r,i]=(0,_.useState)(e?.name||``),[a,o]=(0,_.useState)(e?.headline||``),[s,c]=(0,_.useState)(e?.is_public||!1),[l,u]=(0,_.useState)(e?.public_slug||``),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(Yr),[h,g]=(0,_.useState)(``);async function v(){f(!0),await t({name:r,headline:a,is_public:s,public_slug:l}),f(!1),_i(`Profile saved successfully!`,`success`)}function y(){let e=new Blob([JSON.stringify({profile:{name:r,headline:a,isPublic:s,slug:l},strengths:p},null,2)],{type:`application/json`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`steven-journey-export.json`,n.click(),URL.revokeObjectURL(t),_i(`Data exported successfully!`,`success`)}function b(){h.trim()&&(m(e=>[...e,{id:`s-${Date.now()}`,label:h.trim()}]),g(``))}function x(e){m(t=>t.filter(t=>t.id!==e))}return(0,N.jsxs)(`div`,{className:`pf-settings animate-fade-in`,children:[(0,N.jsxs)(`div`,{className:`pf-settings-header`,children:[(0,N.jsx)(`h1`,{children:`Settings`}),(0,N.jsx)(`p`,{className:`pf-settings-subtitle`,children:`Configure your profile, public branding, and core strengths`})]}),(0,N.jsxs)(Ii,{hover:!1,className:`pf-settings-section glass`,children:[(0,N.jsxs)(`div`,{className:`pf-settings-section-header`,children:[(0,N.jsx)(Vr,{size:16}),(0,N.jsx)(`h2`,{children:`Profile`})]}),(0,N.jsxs)(`div`,{className:`pf-form-group`,children:[(0,N.jsx)(`label`,{children:`Name`}),(0,N.jsx)(`input`,{type:`text`,value:r,onChange:e=>i(e.target.value),placeholder:`Full name`})]}),(0,N.jsxs)(`div`,{className:`pf-form-group`,children:[(0,N.jsx)(`label`,{children:`Headline`}),(0,N.jsx)(`input`,{type:`text`,value:a,onChange:e=>o(e.target.value),placeholder:`e.g. Data Engineer · AI Enthusiast`})]}),(0,N.jsx)(`div`,{className:`pf-form-actions`,children:(0,N.jsx)(P,{onClick:v,loading:d,size:`sm`,children:`Save Changes`})})]}),(0,N.jsxs)(Ii,{hover:!1,className:`pf-settings-section glass`,children:[(0,N.jsxs)(`div`,{className:`pf-settings-section-header`,children:[(0,N.jsx)(Cr,{size:16}),(0,N.jsx)(`h2`,{children:`Public Profile`})]}),(0,N.jsx)(`div`,{className:`pf-form-row`,children:(0,N.jsxs)(`label`,{className:`pf-toggle-label`,children:[(0,N.jsx)(`input`,{type:`checkbox`,checked:s,onChange:e=>c(e.target.checked)}),(0,N.jsx)(`span`,{children:`Public profile active (Visible to others)`})]})}),s&&(0,N.jsxs)(`div`,{className:`pf-form-group animate-fade-in-up`,children:[(0,N.jsx)(`label`,{children:`Public URL Slug`}),(0,N.jsxs)(`div`,{className:`pf-slug-input`,children:[(0,N.jsx)(`span`,{className:`pf-slug-prefix`,children:`/u/`}),(0,N.jsx)(`input`,{type:`text`,value:l,onChange:e=>u(e.target.value),placeholder:`username`})]})]})]}),(0,N.jsxs)(Ii,{hover:!1,className:`pf-settings-section glass`,children:[(0,N.jsxs)(`div`,{className:`pf-settings-section-header`,children:[(0,N.jsx)(Lr,{size:16}),(0,N.jsx)(`h2`,{children:`Strengths`})]}),(0,N.jsx)(`div`,{className:`pf-strengths-list`,children:p.map(e=>(0,N.jsxs)(`span`,{className:`pf-editable-tag`,children:[e.label,(0,N.jsx)(`button`,{onClick:()=>x(e.id),children:(0,N.jsx)(Hr,{size:11})})]},e.id))}),(0,N.jsxs)(`div`,{className:`pf-add-strength`,children:[(0,N.jsx)(`input`,{type:`text`,value:h,onChange:e=>g(e.target.value),placeholder:`Add new core strength...`,onKeyDown:e=>e.key===`Enter`&&b()}),(0,N.jsx)(P,{variant:`secondary`,size:`sm`,icon:Ar,onClick:b,children:`Add`})]})]}),(0,N.jsx)(Ii,{hover:!1,className:`pf-settings-section glass`,children:(0,N.jsxs)(`div`,{className:`pf-settings-actions`,children:[(0,N.jsx)(P,{variant:`outline`,icon:vr,onClick:y,children:`Export Data (JSON)`}),(0,N.jsx)(P,{variant:`danger`,icon:Dr,onClick:n,children:`Logout`})]})}),(0,N.jsx)(`style`,{children:`
        .pf-settings {
          max-width: 660px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-bottom: 3rem;
        }
        .pf-settings-header h1 {
          font-size: 1.55rem;
          letter-spacing: -0.025em;
        }
        .pf-settings-subtitle {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-top: 0.25rem;
        }
        .pf-settings-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-settings-section-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-primary);
          border-left: 2.5px solid var(--color-accent-indigo);
          padding-left: 0.6rem;
        }
        .pf-settings-section-header h2 {
          font-size: 1rem;
          margin: 0;
          letter-spacing: -0.015em;
        }
        .pf-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .pf-form-group label {
          font-size: 0.725rem;
          font-weight: 700;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-tertiary);
        }
        .pf-form-group input[type="text"],
        .pf-add-strength input {
          padding: 0.65rem 0.85rem;
          font-size: 0.875rem;
          font-family: var(--font-body);
          background: var(--color-bg-primary);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-md);
          outline: none;
          transition: all var(--transition-fast);
        }
        .pf-form-group input:focus,
        .pf-add-strength input:focus {
          border-color: var(--color-accent-indigo);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
        }
        .pf-form-actions {
          margin-top: 0.25rem;
        }
        .pf-toggle-label {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.875rem;
          cursor: pointer;
          color: var(--color-text-secondary);
        }
        .pf-toggle-label input[type="checkbox"] {
          accent-color: var(--color-accent-indigo);
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .pf-slug-input {
          display: flex;
          align-items: center;
          border: 1px solid var(--color-border-primary);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--color-bg-primary);
        }
        .pf-slug-prefix {
          padding: 0.65rem 0.75rem;
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          background: var(--color-bg-elevated);
          border-right: 1px solid var(--color-border-primary);
          pointer-events: none;
        }
        .pf-slug-input input {
          border: none !important;
          border-radius: 0 !important;
          flex: 1;
          background: transparent !important;
        }
        .pf-slug-input:focus-within {
          border-color: var(--color-accent-indigo);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
        }
        .pf-strengths-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .pf-editable-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.65rem 0.35rem 0.85rem;
          font-size: 0.75rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: var(--color-accent-indigo);
          border-radius: var(--radius-full);
          font-weight: 500;
        }
        .pf-editable-tag button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.15rem;
          border: none;
          background: transparent;
          color: inherit;
          opacity: 0.5;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }
        .pf-editable-tag button:hover { opacity: 1; background: rgba(99, 102, 241, 0.2); }
        .pf-add-strength {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }
        .pf-add-strength input { flex: 1; }
        .pf-settings-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
      `})]})}function Zi(){let{slug:e}=ht(),t=e===`steven`?Jr:null,n=e===`steven`?Wr:[],r=e===`steven`?Yr:[];function i(){navigator.clipboard.writeText(window.location.href),_i(`URL copied successfully!`,`success`)}return t?(0,N.jsxs)(`div`,{className:`pf-public animate-fade-in`,children:[(0,N.jsxs)(`div`,{className:`pf-public-header glass animate-fade-in-up`,children:[(0,N.jsx)(`div`,{className:`pf-public-avatar`,children:t.avatar_url?(0,N.jsx)(`img`,{src:t.avatar_url,alt:t.name}):(0,N.jsx)(Vr,{size:30,style:{color:`#fff`}})}),(0,N.jsxs)(`div`,{className:`pf-public-info`,children:[(0,N.jsx)(`h1`,{children:t.name}),(0,N.jsx)(`p`,{children:t.headline})]}),(0,N.jsx)(P,{variant:`outline`,size:`sm`,icon:Nr,onClick:i,children:`Share Profile`})]}),r.length>0&&(0,N.jsx)(`div`,{className:`pf-public-strengths glass`,children:r.map(e=>(0,N.jsx)(`span`,{className:`pf-public-tag`,children:e.label},e.id))}),(0,N.jsx)(`div`,{className:`pf-public-paths stagger-children`,children:n.map(e=>{let t=Qr(e),n=Zr(t),r=t.filter(e=>e.status===`done`).length;return(0,N.jsxs)(Ii,{hover:!1,className:`pf-public-path glass`,glow:e.color,children:[(0,N.jsxs)(`div`,{className:`pf-public-path-header`,children:[(0,N.jsx)(`div`,{className:`pf-public-path-color`,style:{background:e.color}}),(0,N.jsx)(`h3`,{children:e.title})]}),e.description&&(0,N.jsx)(`p`,{className:`pf-public-path-desc`,children:e.description}),(0,N.jsx)(`div`,{className:`pf-public-progress-wrapper`,children:(0,N.jsx)(F,{value:n,color:e.color,size:`sm`})}),(0,N.jsxs)(`span`,{className:`pf-public-path-count`,children:[r,`/`,t.length,` tasks completed`]}),(0,N.jsx)(`div`,{className:`pf-public-phases`,children:(e.phases||[]).map(e=>(0,N.jsxs)(`div`,{className:`pf-public-phase`,children:[(0,N.jsx)(`h4`,{children:e.title}),(0,N.jsx)(`div`,{className:`pf-public-nodes`,children:(e.nodes||[]).map(e=>(0,N.jsxs)(`div`,{className:`pf-public-node ${e.status} glass`,children:[(0,N.jsx)(I,{type:e.type}),(0,N.jsx)(`span`,{className:`pf-public-node-label`,children:e.label}),(0,N.jsx)(I,{status:e.status})]},e.id))})]},e.id))})]},e.id)})}),(0,N.jsx)(`style`,{children:`
        .pf-public {
          max-width: 860px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-public-404 {
          text-align: center;
          padding: 4rem 1.5rem;
          max-width: 600px;
          margin: 4rem auto;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
        }
        .pf-public-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.75rem 2rem;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border-primary);
          flex-wrap: wrap;
          box-shadow: var(--shadow-md);
        }
        .pf-public-avatar {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-public-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .pf-public-info { flex: 1; min-width: 200px; }
        .pf-public-info h1 { font-size: 1.55rem; letter-spacing: -0.025em; }
        .pf-public-info p { font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.25rem; }
        
        .pf-public-strengths {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-sm);
        }
        .pf-public-tag {
          padding: 0.35rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-accent-indigo);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: var(--radius-full);
        }
        
        .pf-public-paths {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .pf-public-path {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .pf-public-path-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .pf-public-path-color {
          width: 5px;
          height: 20px;
          border-radius: var(--radius-sm);
          flex-shrink: 0;
        }
        .pf-public-path-header h3 {
          font-size: 1.2rem;
          letter-spacing: -0.015em;
        }
        .pf-public-path-desc {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }
        .pf-public-progress-wrapper {
          margin: 0.25rem 0;
        }
        .pf-public-path-count {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .pf-public-phases {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--color-border-primary);
          padding-top: 1rem;
        }
        .pf-public-phase h4 {
          font-size: 0.95rem;
          margin-bottom: 0.65rem;
          color: var(--color-text-primary);
          letter-spacing: -0.01em;
        }
        .pf-public-nodes {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pf-public-node {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 1rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-primary);
          transition: all var(--transition-fast);
        }
        .pf-public-node.done { opacity: 0.6; }
        .pf-public-node-label {
          flex: 1;
          font-size: 0.875rem;
          color: var(--color-text-primary);
        }
        .pf-public-node.done .pf-public-node-label {
          text-decoration: line-through;
          color: var(--color-text-tertiary);
        }
      `})]}):(0,N.jsxs)(`div`,{className:`pf-public-404 glass`,children:[(0,N.jsx)(`h1`,{children:`Profile not found`}),(0,N.jsxs)(`p`,{children:[`User with slug "`,e,`" does not exist or is not public.`]})]})}function Qi(){return(0,N.jsxs)(`div`,{className:`pf-404`,children:[(0,N.jsxs)(`div`,{className:`pf-404-content glass animate-fade-in-up`,children:[(0,N.jsx)(`div`,{className:`pf-404-icon`,children:(0,N.jsx)(_r,{size:56,className:`animate-spin`,style:{animationDuration:`6s`}})}),(0,N.jsx)(`h1`,{children:`404`}),(0,N.jsx)(`p`,{children:`The page you are looking for does not exist.`}),(0,N.jsx)(Pn,{to:`/`,style:{marginTop:`0.5rem`},children:(0,N.jsx)(P,{size:`md`,children:`Back to Home`})})]}),(0,N.jsx)(`style`,{children:`
        .pf-404 {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 75vh;
          text-align: center;
          padding: 2rem;
        }
        .pf-404-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          padding: 3rem 4rem;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--color-border-primary);
          box-shadow: var(--shadow-xl);
          max-width: 440px;
          width: 100%;
        }
        .pf-404-icon {
          color: var(--color-accent-indigo);
          opacity: 0.85;
          margin-bottom: 0.5rem;
        }
        .pf-404 h1 {
          font-size: 4rem;
          line-height: 1;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, var(--color-accent-indigo), var(--color-accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .pf-404 p {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        @media (max-width: 480px) {
          .pf-404-content { padding: 2rem 1.5rem; }
        }
      `})]})}function $i(){return(0,N.jsx)(ai,{children:(0,N.jsx)(ni,{children:(0,N.jsxs)(jn,{children:[(0,N.jsxs)(Ut,{children:[(0,N.jsx)(Vt,{path:`/`,element:(0,N.jsx)(wi,{})}),(0,N.jsx)(Vt,{path:`/u/:slug`,element:(0,N.jsx)(Zi,{})}),(0,N.jsxs)(Vt,{element:(0,N.jsx)(mi,{}),children:[(0,N.jsx)(Vt,{path:`/dashboard`,element:(0,N.jsx)(Vi,{})}),(0,N.jsx)(Vt,{path:`/roadmap/:pathId`,element:(0,N.jsx)(qi,{})}),(0,N.jsx)(Vt,{path:`/progress`,element:(0,N.jsx)(Yi,{})}),(0,N.jsx)(Vt,{path:`/settings`,element:(0,N.jsx)(Xi,{})})]}),(0,N.jsx)(Vt,{path:`*`,element:(0,N.jsx)(Qi,{})})]}),(0,N.jsx)(bi,{})]})})})}(0,v.createRoot)(document.getElementById(`root`)).render((0,N.jsx)(_.StrictMode,{children:(0,N.jsx)($i,{})}));