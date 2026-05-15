var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function E(e,t){return T(e.type,t,e.props)}function D(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function k(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,A(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(O,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(D(o)&&(o=E(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(O,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=A(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=A(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return A(k(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},N={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!D(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=D,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.5`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function T(){return g?!0:!(e.unstable_now()-ee<w)}function E(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,O=te.port2;te.port1.onmessage=E,D=function(){O.postMessage(null)}}else D=function(){_(E,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.5`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),E=Symbol.for(`react.memo`),D=Symbol.for(`react.lazy`),te=Symbol.for(`react.activity`),O=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function k(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var A=Symbol.for(`react.client.reference`);function j(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case T:return`SuspenseList`;case te:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case E:return t=e.displayName||null,t===null?j(e.type)||`Memo`:t;case D:t=e._payload,e=e._init;try{return j(e(t))}catch{}}return null}var re=Array.isArray,M=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ae=[],oe=-1;function se(e){return{current:e}}function ce(e){0>oe||(e.current=ae[oe],ae[oe]=null,oe--)}function P(e,t){oe++,ae[oe]=e.current,e.current=t}var F=se(null),le=se(null),ue=se(null),de=se(null);function fe(e,t){switch(P(ue,t),P(le,e),P(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ce(F),P(F,e)}function pe(){ce(F),ce(le),ce(ue)}function me(e){e.memoizedState!==null&&P(de,e);var t=F.current,n=Hd(t,e.type);t!==n&&(P(le,e),P(F,n))}function he(e){le.current===e&&(ce(F),ce(le)),de.current===e&&(ce(de),Qf._currentValue=ie)}var ge,_e;function ve(e){if(ge===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ge=t&&t[1]||``,_e=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ge+e+_e}var ye=!1;function I(e,t){if(!e||ye)return``;ye=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ye=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ve(n):``}function be(e,t){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve(`Lazy`);case 13:return e.child!==t&&t!==null?ve(`Suspense Fallback`):ve(`Suspense`);case 19:return ve(`SuspenseList`);case 0:case 15:return I(e.type,!1);case 11:return I(e.type.render,!1);case 1:return I(e.type,!0);case 31:return ve(`Activity`);default:return``}}function xe(e){try{var t=``,n=null;do t+=be(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Se=Object.prototype.hasOwnProperty,Ce=t.unstable_scheduleCallback,we=t.unstable_cancelCallback,Te=t.unstable_shouldYield,Ee=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,Le=null;function Re(e){if(typeof Pe==`function`&&Fe(e),Le&&typeof Le.setStrictMode==`function`)try{Le.setStrictMode(Ie,e)}catch{}}var ze=Math.clz32?Math.clz32:Ve,Be=Math.log,L=Math.LN2;function Ve(e){return e>>>=0,e===0?32:31-(Be(e)/L|0)|0}var He=256,Ue=262144,R=4194304;function We(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ge(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=We(n))):i=We(o):i=We(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=We(n))):i=We(o)):i=We(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ke(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Je(){var e=R;return R<<=1,!(R&62914560)&&(R=4194304),e}function Ye(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ze(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-ze(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Qe(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Qe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ze(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function $e(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function et(e,t){var n=t&-t;return n=n&42?1:tt(n),(n&(e.suspendedLanes|t))===0?n:0}function tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function rt(){var e=N.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function it(e,t){var n=N.p;try{return N.p=e,t()}finally{N.p=n}}var at=Math.random().toString(36).slice(2),z=`__reactFiber$`+at,ot=`__reactProps$`+at,st=`__reactContainer$`+at,ct=`__reactEvents$`+at,lt=`__reactListeners$`+at,ut=`__reactHandles$`+at,dt=`__reactResources$`+at,ft=`__reactMarker$`+at;function pt(e){delete e[z],delete e[ot],delete e[ct],delete e[lt],delete e[ut]}function mt(e){var t=e[z];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[z]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[z])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function ht(e){if(e=e[z]||e[st]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function _t(e){var t=e[dt];return t||=e[dt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function vt(e){e[ft]=!0}var yt=new Set,bt={};function xt(e,t){St(e,t),St(e+`Capture`,t)}function St(e,t){for(bt[e]=t,e=0;e<t.length;e++)yt.add(t[e])}var Ct=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),wt={},Tt={};function Et(e){return Se.call(Tt,e)?!0:Se.call(wt,e)?!1:Ct.test(e)?Tt[e]=!0:(wt[e]=!0,!1)}function Dt(e,t,n){if(Et(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ot(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function kt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function At(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function jt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Mt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nt(e){if(!e._valueTracker){var t=jt(e)?`checked`:`value`;e._valueTracker=Mt(e,t,``+e[t])}}function Pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=jt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ft(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var It=/[\n"\\]/g;function Lt(e){return e.replace(It,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Rt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+At(t)):e.value!==``+At(t)&&(e.value=``+At(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Bt(e,o,At(n)):Bt(e,o,At(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+At(s):e.removeAttribute(`name`)}function zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Nt(e);return}n=n==null?``:``+At(n),t=t==null?n:``+At(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Nt(e)}function Bt(e,t,n){t===`number`&&Ft(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Vt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ht(e,t,n){if(t!=null&&(t=``+At(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+At(n)}function Ut(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(re(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=At(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Nt(e)}function B(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Gt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Wt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Kt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Gt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Gt(e,o,t[o])}function qt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Jt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Yt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xt(e){return Yt.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Zt(){}var Qt=null;function $t(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var en=null,tn=null;function nn(e){var t=ht(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Rt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Lt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ot]||null;if(!a)throw Error(i(90));Rt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Pt(r)}break a;case`textarea`:Ht(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Vt(e,!!n.multiple,t,!1)}}}var rn=!1;function an(e,t,n){if(rn)return e(t,n);rn=!0;try{return e(t)}finally{if(rn=!1,(en!==null||tn!==null)&&(_u(),en&&(t=en,e=tn,tn=en=null,nn(t),e)))for(t=0;t<e.length;t++)nn(e[t])}}function on(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ot]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var sn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),cn=!1;if(sn)try{var ln={};Object.defineProperty(ln,`passive`,{get:function(){cn=!0}}),window.addEventListener(`test`,ln,ln),window.removeEventListener(`test`,ln,ln)}catch{cn=!1}var un=null,dn=null,fn=null;function pn(){if(fn)return fn;var e,t=dn,n=t.length,r,i=`value`in un?un.value:un.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return fn=i.slice(e,1<r?1-r:void 0)}function mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hn(){return!0}function gn(){return!1}function _n(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?hn:gn,this.isPropagationStopped=gn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=hn)},persist:function(){},isPersistent:hn}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yn=_n(vn),bn=h({},vn,{view:0,detail:0}),xn=_n(bn),Sn,Cn,wn,Tn=h({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==wn&&(wn&&e.type===`mousemove`?(Sn=e.screenX-wn.screenX,Cn=e.screenY-wn.screenY):Cn=Sn=0,wn=e),Sn)},movementY:function(e){return`movementY`in e?e.movementY:Cn}}),En=_n(Tn),Dn=_n(h({},Tn,{dataTransfer:0})),On=_n(h({},bn,{relatedTarget:0})),kn=_n(h({},vn,{animationName:0,elapsedTime:0,pseudoElement:0})),V=_n(h({},vn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),An=_n(h({},vn,{data:0})),jn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Mn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Nn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nn[e])?!!t[e]:!1}function Fn(){return Pn}var In=_n(h({},bn,{key:function(e){if(e.key){var t=jn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Mn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return e.type===`keypress`?mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Ln=_n(h({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Rn=_n(h({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),zn=_n(h({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Bn=_n(h({},Tn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Vn=_n(h({},vn,{newState:0,oldState:0})),Hn=[9,13,27,32],H=sn&&`CompositionEvent`in window,Un=null;sn&&`documentMode`in document&&(Un=document.documentMode);var Wn=sn&&`TextEvent`in window&&!Un,Gn=sn&&(!H||Un&&8<Un&&11>=Un),Kn=` `,qn=!1;function Jn(e,t){switch(e){case`keyup`:return Hn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Yn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Xn=!1;function Zn(e,t){switch(e){case`compositionend`:return Yn(t);case`keypress`:return t.which===32?(qn=!0,Kn):null;case`textInput`:return e=t.data,e===Kn&&qn?null:e;default:return null}}function Qn(e,t){if(Xn)return e===`compositionend`||!H&&Jn(e,t)?(e=pn(),fn=dn=un=null,Xn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Gn&&t.locale!==`ko`?null:t.data;default:return null}}var $n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!$n[e.type]:t===`textarea`}function tr(e,t,n,r){en?tn?tn.push(r):tn=[r]:en=r,t=Td(t,`onChange`),0<t.length&&(n=new yn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var nr=null,rr=null;function ir(e){_d(e,0)}function ar(e){if(Pt(gt(e)))return e}function or(e,t){if(e===`change`)return t}var sr=!1;if(sn){var cr;if(sn){var lr=`oninput`in document;if(!lr){var ur=document.createElement(`div`);ur.setAttribute(`oninput`,`return;`),lr=typeof ur.oninput==`function`}cr=lr}else cr=!1;sr=cr&&(!document.documentMode||9<document.documentMode)}function dr(){nr&&(nr.detachEvent(`onpropertychange`,fr),rr=nr=null)}function fr(e){if(e.propertyName===`value`&&ar(rr)){var t=[];tr(t,rr,e,$t(e)),an(ir,t)}}function pr(e,t,n){e===`focusin`?(dr(),nr=t,rr=n,nr.attachEvent(`onpropertychange`,fr)):e===`focusout`&&dr()}function mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return ar(rr)}function hr(e,t){if(e===`click`)return ar(t)}function gr(e,t){if(e===`input`||e===`change`)return ar(t)}function U(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var W=typeof Object.is==`function`?Object.is:U;function _r(e,t){if(W(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Se.call(t,i)||!W(e[i],t[i]))return!1}return!0}function vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yr(e,t){var n=vr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=vr(n)}}function br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?br(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ft(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ft(e.document)}return t}function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Cr=sn&&`documentMode`in document&&11>=document.documentMode,wr=null,Tr=null,Er=null,Dr=!1;function Or(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dr||wr==null||wr!==Ft(r)||(r=wr,`selectionStart`in r&&Sr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&_r(Er,r)||(Er=r,r=Td(Tr,`onSelect`),0<r.length&&(t=new yn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}function G(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var kr={animationend:G(`Animation`,`AnimationEnd`),animationiteration:G(`Animation`,`AnimationIteration`),animationstart:G(`Animation`,`AnimationStart`),transitionrun:G(`Transition`,`TransitionRun`),transitionstart:G(`Transition`,`TransitionStart`),transitioncancel:G(`Transition`,`TransitionCancel`),transitionend:G(`Transition`,`TransitionEnd`)},Ar={},K={};sn&&(K=document.createElement(`div`).style,`AnimationEvent`in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),`TransitionEvent`in window||delete kr.transitionend.transition);function jr(e){if(Ar[e])return Ar[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in K)return Ar[e]=t[n];return e}var Mr=jr(`animationend`),Nr=jr(`animationiteration`),Pr=jr(`animationstart`),Fr=jr(`transitionrun`),Ir=jr(`transitionstart`),Lr=jr(`transitioncancel`),Rr=jr(`transitionend`),zr=new Map,Br=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Br.push(`scrollEnd`);function Vr(e,t){zr.set(e,t),xt(t,[e])}var Hr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ur=[],Wr=0,Gr=0;function Kr(){for(var e=Wr,t=Gr=Wr=0;t<e;){var n=Ur[t];Ur[t++]=null;var r=Ur[t];Ur[t++]=null;var i=Ur[t];Ur[t++]=null;var a=Ur[t];if(Ur[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Xr(n,i,a)}}function qr(e,t,n,r){Ur[Wr++]=e,Ur[Wr++]=t,Ur[Wr++]=n,Ur[Wr++]=r,Gr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jr(e,t,n,r){return qr(e,t,n,r),Zr(e)}function Yr(e,t){return qr(e,null,null,t),Zr(e)}function Xr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-ze(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Zr(e){if(50<cu)throw cu=0,lu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Qr={};function $r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,t,n,r){return new $r(e,t,n,r)}function ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ni(e,t){var n=e.alternate;return n===null?(n=ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ri(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ti(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,F.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case te:return e=ei(31,n,t,a),e.elementType=te,e.lanes=o,e;case y:return ai(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=ei(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=ei(13,n,t,a),e.elementType=ee,e.lanes=o,e;case T:return e=ei(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case E:s=14;break a;case D:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ei(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ai(e,t,n,r){return e=ei(7,e,r,t),e.lanes=n,e}function oi(e,t,n){return e=ei(6,e,null,t),e.lanes=n,e}function si(e){var t=ei(18,null,null,0);return t.stateNode=e,t}function ci(e,t,n){return t=ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var li=new WeakMap;function ui(e,t){if(typeof e==`object`&&e){var n=li.get(e);return n===void 0?(t={value:e,source:t,stack:xe(t)},li.set(e,t),t):n}return{value:e,source:t,stack:xe(t)}}var di=[],fi=0,pi=null,mi=0,hi=[],gi=0,_i=null,vi=1,yi=``;function bi(e,t){di[fi++]=mi,di[fi++]=pi,pi=e,mi=t}function xi(e,t,n){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,_i=e;var r=vi;e=yi;var i=32-ze(r)-1;r&=~(1<<i),n+=1;var a=32-ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vi=1<<32-ze(t)+i|n<<i|r,yi=a+e}else vi=1<<a|n<<i|r,yi=e}function Si(e){e.return!==null&&(bi(e,1),xi(e,1,0))}function Ci(e){for(;e===pi;)pi=di[--fi],di[fi]=null,mi=di[--fi],di[fi]=null;for(;e===_i;)_i=hi[--gi],hi[gi]=null,yi=hi[--gi],hi[gi]=null,vi=hi[--gi],hi[gi]=null}function wi(e,t){hi[gi++]=vi,hi[gi++]=yi,hi[gi++]=_i,vi=t.id,yi=t.overflow,_i=e}var Ti=null,Ei=null,Di=!1,Oi=null,ki=!1,Ai=Error(i(519));function ji(e){throw Li(ui(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ai}function Mi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[z]=e,t[ot]=r,n){case`dialog`:vd(`cancel`,t),vd(`close`,t);break;case`iframe`:case`object`:case`embed`:vd(`load`,t);break;case`video`:case`audio`:for(n=0;n<hd.length;n++)vd(hd[n],t);break;case`source`:vd(`error`,t);break;case`img`:case`image`:case`link`:vd(`error`,t),vd(`load`,t);break;case`details`:vd(`toggle`,t);break;case`input`:vd(`invalid`,t),zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:vd(`invalid`,t);break;case`textarea`:vd(`invalid`,t),Ut(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&(vd(`beforetoggle`,t),vd(`toggle`,t)),r.onScroll!=null&&vd(`scroll`,t),r.onScrollEnd!=null&&vd(`scrollend`,t),r.onClick!=null&&(t.onclick=Zt),t=!0):t=!1,t||ji(e,!0)}function Ni(e){for(Ti=e.return;Ti;)switch(Ti.tag){case 5:case 31:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:Ti=Ti.return}}function Pi(e){if(e!==Ti)return!1;if(!Di)return Ni(e),Di=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ei&&ji(e),Ni(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ei=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ei=uf(e)}else t===27?(t=Ei,Zd(e.type)?(e=lf,lf=null,Ei=e):Ei=t):Ei=Ti?cf(e.stateNode.nextSibling):null;return!0}function Fi(){Ei=Ti=null,Di=!1}function Ii(){var e=Oi;return e!==null&&(Jl===null?Jl=e:Jl.push.apply(Jl,e),Oi=null),e}function Li(e){Oi===null?Oi=[e]:Oi.push(e)}var Ri=se(null),zi=null,Bi=null;function Vi(e,t,n){P(Ri,t._currentValue),t._currentValue=n}function Hi(e){e._currentValue=Ri.current,ce(Ri)}function Ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Wi(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ui(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ui(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Gi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;W(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===de.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Wi(t,e,n,r),t.flags|=262144}function Ki(e){for(e=e.firstContext;e!==null;){if(!W(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qi(e){zi=e,Bi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ji(e){return Yi(zi,e)}function q(e,t){return zi===null&&qi(e),Yi(e,t)}function Yi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Bi===null){if(e===null)throw Error(i(308));Bi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bi=Bi.next=t;return n}var Xi=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Zi=t.unstable_scheduleCallback,Qi=t.unstable_NormalPriority,$i={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ea(){return{controller:new Xi,data:new Map,refCount:0}}function J(e){e.refCount--,e.refCount===0&&Zi(Qi,function(){e.controller.abort()})}var Y=null,ta=0,na=0,ra=null;function ia(e,t){if(Y===null){var n=Y=[];ta=0,na=ld(),ra={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ta++,t.then(aa,aa),t}function aa(){if(--ta===0&&Y!==null){ra!==null&&(ra.status=`fulfilled`);var e=Y;Y=null,na=0,ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function oa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var sa=M.S;M.S=function(e,t){Zl=De(),typeof t==`object`&&t&&typeof t.then==`function`&&ia(e,t),sa!==null&&sa(e,t)};var ca=se(null);function la(){var e=ca.current;return e===null?Nl.pooledCache:e}function ua(e,t){t===null?P(ca,ca.current):P(ca,t.pool)}function da(){var e=la();return e===null?null:{parent:$i._currentValue,pool:e}}var fa=Error(i(460)),pa=Error(i(474)),ma=Error(i(542)),ha={then:function(){}};function ga(e){return e=e.status,e===`fulfilled`||e===`rejected`}function _a(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Zt,Zt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,xa(e),e;default:if(typeof t.status==`string`)t.then(Zt,Zt);else{if(e=Nl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,xa(e),e}throw ya=t,fa}}function va(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ya=e,fa):e}}var ya=null;function ba(){if(ya===null)throw Error(i(459));var e=ya;return ya=null,e}function xa(e){if(e===fa||e===ma)throw Error(i(483))}var Sa=null,Ca=0;function wa(e){var t=Ca;return Ca+=1,Sa===null&&(Sa=[]),_a(Sa,e,t)}function Ta(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ea(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Da(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ni(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=oi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===D&&va(i)===t.type)?(t=a(t,n.props),Ta(t,n),t.return=e,t):(t=ii(n.type,n.key,n.props,null,e.mode,r),Ta(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ai(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=oi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ii(t.type,t.key,t.props,null,e.mode,n),Ta(n,t),n.return=e,n;case v:return t=ci(t,e.mode,n),t.return=e,t;case D:return t=va(t),f(e,t,n)}if(re(t)||k(t))return t=ai(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,wa(t),n);if(t.$$typeof===C)return f(e,q(e,t),n);Ea(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case D:return n=va(n),p(e,t,n,r)}if(re(n)||k(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,wa(n),r);if(n.$$typeof===C)return p(e,t,q(e,n),r);Ea(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case D:return r=va(r),m(e,t,n,r,i)}if(re(r)||k(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,wa(r),i);if(r.$$typeof===C)return m(e,t,n,q(t,r),i);Ea(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Di&&bi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Di&&bi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Di&&bi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Di&&bi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Di&&bi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Di&&bi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===D&&va(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ta(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=ai(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=ii(o.type,o.key,o.props,null,e.mode,c),Ta(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=ci(o,e.mode,c),c.return=e,e=c}return s(e);case D:return o=va(o),b(e,r,o,c)}if(re(o))return h(e,r,o,c);if(k(o)){if(l=k(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,wa(o),c);if(o.$$typeof===C)return b(e,r,q(e,o),c);Ea(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=oi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ca=0;var i=b(e,t,n,r);return Sa=null,i}catch(t){if(t===fa||t===ma)throw t;var a=ei(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Oa=Da(!0),ka=Da(!1),Aa=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ma(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ml&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Zr(e),Xr(e,null,n),t}return qr(e,r,t,n),Zr(e)}function Fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}function Ia(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var La=!1;function Ra(){if(La){var e=ra;if(e!==null)throw e}}function za(e,t,n,r){La=!1;var i=e.updateQueue;Aa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Pl&f)===f:(r&f)===f){f!==0&&f===na&&(La=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Aa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Hl|=o,e.lanes=o,e.memoizedState=d}}function Ba(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Va(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ba(n[e],t)}var Ha=se(null),Ua=se(0);function Wa(e,t){e=Bl,P(Ua,e),P(Ha,t),Bl=e|t.baseLanes}function Ga(){P(Ua,Bl),P(Ha,Ha.current)}function Ka(){Bl=Ua.current,ce(Ha),ce(Ua)}var qa=se(null),Ja=null;function Ya(e){var t=e.alternate;P(eo,eo.current&1),P(qa,e),Ja===null&&(t===null||Ha.current!==null||t.memoizedState!==null)&&(Ja=e)}function Xa(e){P(eo,eo.current),P(qa,e),Ja===null&&(Ja=e)}function Za(e){e.tag===22?(P(eo,eo.current),P(qa,e),Ja===null&&(Ja=e)):Qa(e)}function Qa(){P(eo,eo.current),P(qa,qa.current)}function $a(e){ce(qa),Ja===e&&(Ja=null),ce(eo)}var eo=se(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=0,X=null,ro=null,io=null,ao=!1,oo=!1,so=!1,co=0,lo=0,uo=null,fo=0;function po(){throw Error(i(321))}function mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!W(e[n],t[n]))return!1;return!0}function ho(e,t,n,r,i,a){return no=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?js:Ms,so=!1,a=n(r,i),so=!1,oo&&(a=_o(t,n,r,i)),go(e),a}function go(e){M.H=As;var t=ro!==null&&ro.next!==null;if(no=0,io=ro=X=null,ao=!1,lo=0,uo=null,t)throw Error(i(300));e===null||Js||(e=e.dependencies,e!==null&&Ki(e)&&(Js=!0))}function _o(e,t,n,r){X=e;var a=0;do{if(oo&&(uo=null),lo=0,oo=!1,25<=a)throw Error(i(301));if(a+=1,io=ro=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}M.H=Ns,o=t(n,r)}while(oo);return o}function vo(){var e=M.H,t=e.useState()[0];return t=typeof t.then==`function`?To(t):t,e=e.useState()[0],(ro===null?null:ro.memoizedState)!==e&&(X.flags|=1024),t}function yo(){var e=co!==0;return co=0,e}function bo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xo(e){if(ao){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ao=!1}no=0,io=ro=X=null,oo=!1,lo=co=0,uo=null}function So(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return io===null?X.memoizedState=io=e:io=io.next=e,io}function Co(){if(ro===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=ro.next;var t=io===null?X.memoizedState:io.next;if(t!==null)io=t,ro=e;else{if(e===null)throw X.alternate===null?Error(i(467)):Error(i(310));ro=e,e={memoizedState:ro.memoizedState,baseState:ro.baseState,baseQueue:ro.baseQueue,queue:ro.queue,next:null},io===null?X.memoizedState=io=e:io=io.next=e}return io}function wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var t=lo;return lo+=1,uo===null&&(uo=[]),e=_a(uo,e,t),t=X,(io===null?t.memoizedState:io.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?js:Ms),e}function Eo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return To(e);if(e.$$typeof===C)return Ji(e)}throw Error(i(438,String(e)))}function Do(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=wo(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=O;return t.index++,n}function Oo(e,t){return typeof t==`function`?t(e):t}function ko(e){return Ao(Co(),ro,e)}function Ao(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(no&f)===f:(Pl&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===na&&(d=!0);else if((no&p)===p){u=u.next,p===na&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,X.lanes|=p,Hl|=p;f=u.action,so&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,X.lanes|=f,Hl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!W(o,e.memoizedState)&&(Js=!0,d&&(n=ra,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jo(e){var t=Co(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);W(o,t.memoizedState)||(Js=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mo(e,t,n){var r=X,a=Co(),o=Di;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!W((ro||a).memoizedState,n);if(s&&(a.memoizedState=n,Js=!0),a=a.queue,rs(Fo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||io!==null&&io.memoizedState.tag&1){if(r.flags|=2048,Qo(9,{destroy:void 0},Po.bind(null,r,a,n,t),null),Nl===null)throw Error(i(349));o||no&127||No(r,t,n)}return n}function No(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=wo(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Po(e,t,n,r){t.value=n,t.getSnapshot=r,Io(t)&&Lo(e)}function Fo(e,t,n){return n(function(){Io(t)&&Lo(e)})}function Io(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!W(e,n)}catch{return!0}}function Lo(e){var t=Yr(e,2);t!==null&&fu(t,e,2)}function Ro(e){var t=So();if(typeof e==`function`){var n=e;if(e=n(),so){Re(!0);try{n()}finally{Re(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t}function zo(e,t,n,r){return e.baseState=n,Ao(e,ro,typeof r==`function`?r:Oo)}function Bo(e,t,n,r,a){if(Ds(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};M.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Vo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Vo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=M.T,o={};M.T=o;try{var s=n(i,r),c=M.S;c!==null&&c(o,s),Ho(e,t,s)}catch(n){Wo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),M.T=a}}else try{a=n(i,r),Ho(e,t,a)}catch(n){Wo(e,t,n)}}function Ho(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Uo(e,t,n)},function(n){return Wo(e,t,n)}):Uo(e,t,n)}function Uo(e,t,n){t.status=`fulfilled`,t.value=n,Go(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vo(e,n)))}function Wo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Go(t),t=t.next;while(t!==r)}e.action=null}function Go(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ko(e,t){return t}function qo(e,t){if(Di){var n=Nl.formState;if(n!==null){a:{var r=X;if(Di){if(Ei){b:{for(var i=Ei,a=ki;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ei=cf(i.nextSibling),r=i.data===`F!`;break a}}ji(r)}r=!1}r&&(t=n[0])}}return n=So(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},n.queue=r,n=Z.bind(null,X,r),r.dispatch=n,r=Ro(!1),a=Es.bind(null,X,!1,r.queue),r=So(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Bo.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Jo(e){return Yo(Co(),ro,e)}function Yo(e,t,n){if(t=Ao(e,t,Ko)[0],e=ko(Oo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=To(t)}catch(e){throw e===fa?ma:e}else r=t;t=Co();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,Qo(9,{destroy:void 0},Xo.bind(null,i,n),null)),[r,a,e]}function Xo(e,t){e.action=t}function Zo(e){var t=Co(),n=ro;if(n!==null)return Yo(t,n,e);Co(),t=t.memoizedState,n=Co();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Qo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=wo(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function $o(){return Co().memoizedState}function es(e,t,n,r){var i=So();X.flags|=e,i.memoizedState=Qo(1|t,{destroy:void 0},n,r===void 0?null:r)}function ts(e,t,n,r){var i=Co();r=r===void 0?null:r;var a=i.memoizedState.inst;ro!==null&&r!==null&&mo(r,ro.memoizedState.deps)?i.memoizedState=Qo(t,a,n,r):(X.flags|=e,i.memoizedState=Qo(1|t,a,n,r))}function ns(e,t){es(8390656,8,e,t)}function rs(e,t){ts(2048,8,e,t)}function is(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=wo(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function as(e){var t=Co().memoizedState;return is({ref:t,nextImpl:e}),function(){if(Ml&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function os(e,t){return ts(4,2,e,t)}function ss(e,t){return ts(4,4,e,t)}function cs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ls(e,t,n){n=n==null?null:n.concat([e]),ts(4,4,cs.bind(null,t,e),n)}function us(){}function ds(e,t){var n=Co();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fs(e,t){var n=Co();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&mo(t,r[1]))return r[0];if(r=e(),so){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r}function ps(e,t,n){return n===void 0||no&1073741824&&!(Pl&261930)?e.memoizedState=t:(e.memoizedState=n,e=du(),X.lanes|=e,Hl|=e,n)}function ms(e,t,n,r){return W(n,t)?n:Ha.current===null?!(no&42)||no&1073741824&&!(Pl&261930)?(Js=!0,e.memoizedState=n):(e=du(),X.lanes|=e,Hl|=e,t):(e=ps(e,n,r),W(e,t)||(Js=!0),e)}function hs(e,t,n,r,i){var a=N.p;N.p=a!==0&&8>a?a:8;var o=M.T,s={};M.T=s,Es(e,!1,t,n);try{var c=i(),l=M.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ts(e,t,oa(c,r),uu(e)):Ts(e,t,r,uu(e))}catch(n){Ts(e,t,{then:function(){},status:`rejected`,reason:n},uu())}finally{N.p=a,o!==null&&s.types!==null&&(o.types=s.types),M.T=o}}function gs(){}function _s(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=vs(e).queue;hs(e,a,t,ie,n===null?gs:function(){return ys(e),n(r)})}function vs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:ie},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ys(e){var t=vs(e);t.next===null&&(t=e.alternate.memoizedState),Ts(e,t.next.queue,{},uu())}function bs(){return Ji(Qf)}function xs(){return Co().memoizedState}function Ss(){return Co().memoizedState}function Cs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=uu();e=Na(n);var r=Pa(t,e,n);r!==null&&(fu(r,t,n),Fa(r,t,n)),t={cache:ea()},e.payload=t;return}t=t.return}}function ws(e,t,n){var r=uu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ds(e)?Os(t,n):(n=Jr(e,t,n,r),n!==null&&(fu(n,e,r),ks(n,t,r)))}function Z(e,t,n){Ts(e,t,n,uu())}function Ts(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ds(e))Os(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,W(s,o))return qr(e,t,i,0),Nl===null&&Kr(),!1}catch{}if(n=Jr(e,t,i,r),n!==null)return fu(n,e,r),ks(n,t,r),!0}return!1}function Es(e,t,n,r){if(r={lane:2,revertLane:ld(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ds(e)){if(t)throw Error(i(479))}else t=Jr(e,n,r,2),t!==null&&fu(t,e,2)}function Ds(e){var t=e.alternate;return e===X||t!==null&&t===X}function Os(e,t){oo=ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ks(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,$e(e,n)}}var As={readContext:Ji,use:Eo,useCallback:po,useContext:po,useEffect:po,useImperativeHandle:po,useLayoutEffect:po,useInsertionEffect:po,useMemo:po,useReducer:po,useRef:po,useState:po,useDebugValue:po,useDeferredValue:po,useTransition:po,useSyncExternalStore:po,useId:po,useHostTransitionStatus:po,useFormState:po,useActionState:po,useOptimistic:po,useMemoCache:po,useCacheRefresh:po};As.useEffectEvent=po;var js={readContext:Ji,use:Eo,useCallback:function(e,t){return So().memoizedState=[e,t===void 0?null:t],e},useContext:Ji,useEffect:ns,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),es(4194308,4,cs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){es(4,2,e,t)},useMemo:function(e,t){var n=So();t=t===void 0?null:t;var r=e();if(so){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=So();if(n!==void 0){var i=n(t);if(so){Re(!0);try{n(t)}finally{Re(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ws.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=So();return e={current:e},t.memoizedState=e},useState:function(e){e=Ro(e);var t=e.queue,n=Z.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:us,useDeferredValue:function(e,t){return ps(So(),e,t)},useTransition:function(){var e=Ro(!1);return e=hs.bind(null,X,e.queue,!0,!1),So().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=X,a=So();if(Di){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Nl===null)throw Error(i(349));Pl&127||No(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ns(Fo.bind(null,r,o,e),[e]),r.flags|=2048,Qo(9,{destroy:void 0},Po.bind(null,r,o,n,t),null),n},useId:function(){var e=So(),t=Nl.identifierPrefix;if(Di){var n=yi,r=vi;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=fo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:bs,useFormState:qo,useActionState:qo,useOptimistic:function(e){var t=So();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Es.bind(null,X,!0,n),n.dispatch=t,[e,t]},useMemoCache:Do,useCacheRefresh:function(){return So().memoizedState=Cs.bind(null,X)},useEffectEvent:function(e){var t=So(),n={impl:e};return t.memoizedState=n,function(){if(Ml&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ms={readContext:Ji,use:Eo,useCallback:ds,useContext:Ji,useEffect:rs,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:ko,useRef:$o,useState:function(){return ko(Oo)},useDebugValue:us,useDeferredValue:function(e,t){return ms(Co(),ro.memoizedState,e,t)},useTransition:function(){var e=ko(Oo)[0],t=Co().memoizedState;return[typeof e==`boolean`?e:To(e),t]},useSyncExternalStore:Mo,useId:xs,useHostTransitionStatus:bs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e,t){return zo(Co(),ro,e,t)},useMemoCache:Do,useCacheRefresh:Ss};Ms.useEffectEvent=as;var Ns={readContext:Ji,use:Eo,useCallback:ds,useContext:Ji,useEffect:rs,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:jo,useRef:$o,useState:function(){return jo(Oo)},useDebugValue:us,useDeferredValue:function(e,t){var n=Co();return ro===null?ps(n,e,t):ms(n,ro.memoizedState,e,t)},useTransition:function(){var e=jo(Oo)[0],t=Co().memoizedState;return[typeof e==`boolean`?e:To(e),t]},useSyncExternalStore:Mo,useId:xs,useHostTransitionStatus:bs,useFormState:Zo,useActionState:Zo,useOptimistic:function(e,t){var n=Co();return ro===null?(n.baseState=e,[e,n.queue.dispatch]):zo(n,ro,e,t)},useMemoCache:Do,useCacheRefresh:Ss};Ns.useEffectEvent=as;function Ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=uu(),i=Na(r);i.payload=t,n!=null&&(i.callback=n),t=Pa(e,i,r),t!==null&&(fu(t,e,r),Fa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=uu(),i=Na(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pa(e,i,r),t!==null&&(fu(t,e,r),Fa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=uu(),r=Na(n);r.tag=2,t!=null&&(r.callback=t),t=Pa(e,r,n),t!==null&&(fu(t,e,n),Fa(t,e,n))}};function Is(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(i,a):!0}function Ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fs.enqueueReplaceState(t,t.state,null)}function Rs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function zs(e){Hr(e)}function Bs(e){console.error(e)}function Vs(e){Hr(e)}function Hs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Us(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ws(e,t,n){return n=Na(n),n.tag=3,n.payload={element:null},n.callback=function(){Hs(e,t)},n}function Gs(e){return e=Na(e),e.tag=3,e}function Ks(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Us(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Us(t,n,r),typeof i!=`function`&&(eu===null?eu=new Set([this]):eu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Q(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Gi(t,n,a,!0),n=qa.current,n!==null){switch(n.tag){case 31:case 13:return Ja===null?wu():n.alternate===null&&Vl===0&&(Vl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ha?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Uu(e,r,a)),!1;case 22:return n.flags|=65536,r===ha?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Uu(e,r,a)),!1}throw Error(i(435,n.tag))}return Uu(e,r,a),wu(),!1}if(Di)return t=qa.current,t===null?(r!==Ai&&(t=Error(i(423),{cause:r}),Li(ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ui(r,n),a=Ws(e.stateNode,r,a),Ia(e,a),Vl!==4&&(Vl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ai&&(e=Error(i(422),{cause:r}),Li(ui(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ui(o,n),ql===null?ql=[o]:ql.push(o),Vl!==4&&(Vl=2),t===null)return!0;r=ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ws(n.stateNode,r,e),Ia(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(eu===null||!eu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Gs(a),Ks(a,e,n,r),Ia(n,a),!1}n=n.return}while(n!==null);return!1}var qs=Error(i(461)),Js=!1;function Ys(e,t,n,r){t.child=e===null?ka(t,null,n,r):Oa(t,e.child,n,r)}function Xs(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return qi(t),r=ho(e,t,n,o,a,i),s=yo(),e!==null&&!Js?(bo(e,t,i),bc(e,t,i)):(Di&&s&&Si(t),t.flags|=1,Ys(e,t,r,i),t.child)}function Zs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ti(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Qs(e,t,a,r,i)):(e=ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!xc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?_r:n,n(o,r)&&e.ref===t.ref)return bc(e,t,i)}return t.flags|=1,e=ni(a,r),e.ref=t.ref,e.return=t,t.child=e}function Qs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(_r(a,r)&&e.ref===t.ref)if(Js=!1,t.pendingProps=r=a,xc(e,i))e.flags&131072&&(Js=!0);else return t.lanes=e.lanes,bc(e,t,i)}return oc(e,t,n,r,i)}function $s(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return tc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ua(t,a===null?null:a.cachePool),a===null?Ga():Wa(t,a),Za(t);else return r=t.lanes=536870912,tc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ua(t,null),Ga(),Qa(t)):(ua(t,a.cachePool),Wa(t,a),Qa(t),t.memoizedState=null);return Ys(e,t,i,n),t.child}function ec(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function tc(e,t,n,r,i){var a=la();return a=a===null?null:{parent:$i._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ua(t,null),Ga(),Za(t),e!==null&&Gi(e,t,r,!0),t.childLanes=i,null}function nc(e,t){return t=hc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function rc(e,t,n){return Oa(t,e.child,null,n),e=nc(t,t.pendingProps),e.flags|=2,$a(t),t.memoizedState=null,e}function ic(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(Di){if(r.mode===`hidden`)return e=nc(t,r),t.lanes=536870912,ec(null,e);if(Xa(t),(e=Ei)?(e=rf(e,ki),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw ji(t);return t.lanes=536870912,null}return nc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Xa(t),a)if(t.flags&256)t.flags&=-257,t=rc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(Js||Gi(e,t,n,!1),a=(n&e.childLanes)!==0,Js||a){if(r=Nl,r!==null&&(s=et(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Yr(e,s),fu(r,e,s),qs;wu(),t=rc(e,t,n)}else e=o.treeContext,Ei=cf(s.nextSibling),Ti=t,Di=!0,Oi=null,ki=!1,e!==null&&wi(t,e),t=nc(t,r),t.flags|=4096;return t}return e=ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ac(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function oc(e,t,n,r,i){return qi(t),n=ho(e,t,n,r,void 0,i),r=yo(),e!==null&&!Js?(bo(e,t,i),bc(e,t,i)):(Di&&r&&Si(t),t.flags|=1,Ys(e,t,n,i),t.child)}function sc(e,t,n,r,i,a){return qi(t),t.updateQueue=null,n=_o(t,r,n,i),go(e),r=yo(),e!==null&&!Js?(bo(e,t,a),bc(e,t,a)):(Di&&r&&Si(t),t.flags|=1,Ys(e,t,n,a),t.child)}function cc(e,t,n,r,i){if(qi(t),t.stateNode===null){var a=Qr,o=n.contextType;typeof o==`object`&&o&&(a=Ji(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Fs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ja(t),o=n.contextType,a.context=typeof o==`object`&&o?Ji(o):Qr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ps(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Fs.enqueueReplaceState(a,a.state,null),za(t,r,a,i),Ra(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Rs(n,s);a.props=c;var l=a.context,u=n.contextType;o=Qr,typeof u==`object`&&u&&(o=Ji(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ls(t,a,r,o),Aa=!1;var f=t.memoizedState;a.state=f,za(t,r,a,i),Ra(),l=t.memoizedState,s||f!==l||Aa?(typeof d==`function`&&(Ps(t,n,d,r),l=t.memoizedState),(c=Aa||Is(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ma(e,t),o=t.memoizedProps,u=Rs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Qr,typeof l==`object`&&l&&(c=Ji(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ls(t,a,r,c),Aa=!1,f=t.memoizedState,a.state=f,za(t,r,a,i),Ra();var p=t.memoizedState;o!==d||f!==p||Aa||e!==null&&e.dependencies!==null&&Ki(e.dependencies)?(typeof s==`function`&&(Ps(t,n,s,r),p=t.memoizedState),(u=Aa||Is(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ki(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,ac(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Oa(t,e.child,null,i),t.child=Oa(t,null,n,i)):Ys(e,t,n,i),t.memoizedState=a.state,e=t.child):e=bc(e,t,i),e}function lc(e,t,n,r){return Fi(),t.flags|=256,Ys(e,t,n,r),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(e){return{baseLanes:e,cachePool:da()}}function fc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Gl),e}function pc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(eo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(Di){if(a?Ya(t):Qa(t),(e=Ei)?(e=rf(e,ki),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_i===null?null:{id:vi,overflow:yi},retryLane:536870912,hydrationErrors:null},n=si(e),n.return=t,t.child=n,Ti=t,Ei=null)):e=null,e===null)throw ji(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(Qa(t),a=t.mode,c=hc({mode:`hidden`,children:c},a),r=ai(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=dc(n),r.childLanes=fc(e,s,n),t.memoizedState=uc,ec(null,r)):(Ya(t),mc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(Ya(t),t.flags&=-257,t=gc(e,t,n)):t.memoizedState===null?(Qa(t),c=r.fallback,a=t.mode,r=hc({mode:`visible`,children:r.children},a),c=ai(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Oa(t,e.child,null,n),r=t.child,r.memoizedState=dc(n),r.childLanes=fc(e,s,n),t.memoizedState=uc,t=ec(null,r)):(Qa(t),t.child=e.child,t.flags|=128,t=null);else if(Ya(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Li({value:r,source:null,stack:null}),t=gc(e,t,n)}else if(Js||Gi(e,t,n,!1),s=(n&e.childLanes)!==0,Js||s){if(s=Nl,s!==null&&(r=et(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,Yr(e,r),fu(s,e,r),qs;af(c)||wu(),t=gc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ei=cf(c.nextSibling),Ti=t,Di=!0,Oi=null,ki=!1,e!==null&&wi(t,e),t=mc(t,r.children),t.flags|=4096);return t}return a?(Qa(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=ni(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ai(c,a,n,null),c.flags|=2):c=ni(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,ec(null,r),r=t.child,c=e.child.memoizedState,c===null?c=dc(n):(a=c.cachePool,a===null?a=da():(l=$i._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=fc(e,s,n),t.memoizedState=uc,ec(e.child,r)):(Ya(t),n=e.child,e=n.sibling,n=ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function mc(e,t){return t=hc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function hc(e,t){return e=ei(22,e,null,t),e.lanes=0,e}function gc(e,t,n){return Oa(t,e.child,null,n),e=mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ui(e.return,t,n)}function vc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function yc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=eo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,P(eo,o),Ys(e,t,r,n),r=Di?mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_c(e,n,t);else if(e.tag===19)_c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vc(t,!0,n,null,a,r);break;case`together`:vc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function bc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Gi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Ki(e))):!0}function Sc(e,t,n){switch(t.tag){case 3:fe(t,t.stateNode.containerInfo),Vi(t,$i,e.memoizedState.cache),Fi();break;case 27:case 5:me(t);break;case 4:fe(t,t.stateNode.containerInfo);break;case 10:Vi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xa(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ya(t),e=bc(e,t,n),e===null?null:e.sibling):pc(e,t,n):(Ya(t),t.flags|=128,null);Ya(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Gi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return yc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(eo,eo.current),r)break;return null;case 22:return t.lanes=0,$s(e,t,n,t.pendingProps);case 24:Vi(t,$i,e.memoizedState.cache)}return bc(e,t,n)}function Cc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Js=!0;else{if(!xc(e,n)&&!(t.flags&128))return Js=!1,Sc(e,t,n);Js=!!(e.flags&131072)}else Js=!1,Di&&t.flags&1048576&&xi(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e==`function`)ti(e)?(r=Rs(e,r),t.tag=1,t=cc(null,t,e,r,n)):(t.tag=0,t=oc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=Xs(null,t,e,r,n);break a}else if(a===E){t.tag=14,t=Zs(null,t,e,r,n);break a}}throw t=j(e)||e,Error(i(306,t,``))}}return t;case 0:return oc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Rs(r,t.pendingProps),cc(e,t,r,a,n);case 3:a:{if(fe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ma(e,t),za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Vi(t,$i,r),r!==o.cache&&Wi(t,[$i],n,!0),Ra(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=lc(e,t,r,n);break a}else if(r!==a){a=ui(Error(i(424)),t),Li(a),t=lc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ei=cf(e.firstChild),Ti=t,Di=!0,Oi=null,ki=!0,n=ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Fi(),r===a){t=bc(e,t,n);break a}Ys(e,t,r,n)}t=t.child}return t;case 26:return ac(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Di||(n=t.type,e=t.pendingProps,r=Bd(ue.current).createElement(n),r[z]=t,r[ot]=e,Pd(r,n,e),vt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&Di&&(r=t.stateNode=ff(t.type,t.pendingProps,ue.current),Ti=t,ki=!0,a=Ei,Zd(t.type)?(lf=a,Ei=cf(r.firstChild)):Ei=a),Ys(e,t,t.pendingProps.children,n),ac(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Di&&((a=r=Ei)&&(r=tf(r,t.type,t.pendingProps,ki),r===null?a=!1:(t.stateNode=r,Ti=t,Ei=cf(r.firstChild),ki=!1,a=!0)),a||ji(t)),me(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ho(e,t,vo,null,null,n),Qf._currentValue=a),ac(e,t),Ys(e,t,r,n),t.child;case 6:return e===null&&Di&&((e=n=Ei)&&(n=nf(n,t.pendingProps,ki),n===null?e=!1:(t.stateNode=n,Ti=t,Ei=null,e=!0)),e||ji(t)),null;case 13:return pc(e,t,n);case 4:return fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oa(t,null,r,n):Ys(e,t,r,n),t.child;case 11:return Xs(e,t,t.type,t.pendingProps,n);case 7:return Ys(e,t,t.pendingProps,n),t.child;case 8:return Ys(e,t,t.pendingProps.children,n),t.child;case 12:return Ys(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Vi(t,t.type,r.value),Ys(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,qi(t),a=Ji(a),r=r(a),t.flags|=1,Ys(e,t,r,n),t.child;case 14:return Zs(e,t,t.type,t.pendingProps,n);case 15:return Qs(e,t,t.type,t.pendingProps,n);case 19:return yc(e,t,n);case 31:return ic(e,t,n);case 22:return $s(e,t,n,t.pendingProps);case 24:return qi(t),r=Ji($i),e===null?(a=la(),a===null&&(a=Nl,o=ea(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},ja(t),Vi(t,$i,a)):((e.lanes&n)!==0&&(Ma(e,t),za(t,null,null,n),Ra()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Vi(t,$i,r),r!==a.cache&&Wi(t,[$i],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Vi(t,$i,r))),Ys(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function wc(e){e.flags|=4}function Tc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(xu())e.flags|=8192;else throw ya=ha,pa}else e.flags&=-16777217}function Ec(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(xu())e.flags|=8192;else throw ya=ha,pa}function Dc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Je(),e.lanes|=t,Kl|=t)}function Oc(e,t){if(!Di)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function kc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ac(e,t,n){var r=t.pendingProps;switch(Ci(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kc(t),null;case 1:return kc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Hi($i),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?wc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ii())),kc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(wc(t),o===null?(kc(t),Tc(t,a,null,r,n)):(kc(t),Ec(t,o))):o?o===e.memoizedState?(kc(t),t.flags&=-16777217):(wc(t),kc(t),Ec(t,o)):(e=e.memoizedProps,e!==r&&wc(t),kc(t),Tc(t,a,e,r,n)),null;case 27:if(he(t),n=ue.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&wc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return kc(t),null}e=F.current,Pi(t)?Mi(t,e):(e=ff(a,r,n),t.stateNode=e,wc(t))}return kc(t),null;case 5:if(he(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&wc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return kc(t),null}if(o=F.current,Pi(t))Mi(t,o);else{var s=Bd(ue.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[z]=t,o[ot]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&wc(t)}}return kc(t),Tc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&wc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ue.current,Pi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ti,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[z]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||ji(t,!0)}else e=Bd(e).createTextNode(r),e[z]=t,t.stateNode=e}return kc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Pi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[z]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;kc(t),e=!1}else n=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?($a(t),t):($a(t),null);if(t.flags&128)throw Error(i(558))}return kc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[z]=t}else Fi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;kc(t),a=!1}else a=Ii(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?($a(t),t):($a(t),null)}return $a(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Dc(t,t.updateQueue),kc(t),null);case 4:return pe(),e===null&&xd(t.stateNode.containerInfo),kc(t),null;case 10:return Hi(t.type),kc(t),null;case 19:if(ce(eo),r=t.memoizedState,r===null)return kc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Oc(r,!1);else{if(Vl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=to(e),o!==null){for(t.flags|=128,Oc(r,!1),e=o.updateQueue,t.updateQueue=e,Dc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ri(n,e),n=n.sibling;return P(eo,eo.current&1|2),Di&&bi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>Ql&&(t.flags|=128,a=!0,Oc(r,!1),t.lanes=4194304)}else{if(!a)if(e=to(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Dc(t,e),Oc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!Di)return kc(t),null}else 2*De()-r.renderingStartTime>Ql&&n!==536870912&&(t.flags|=128,a=!0,Oc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(kc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=eo.current,P(eo,a?n&1|2:n&1),Di&&bi(t,r.treeForkCount),e);case 22:case 23:return $a(t),Ka(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(kc(t),t.subtreeFlags&6&&(t.flags|=8192)):kc(t),n=t.updateQueue,n!==null&&Dc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ce(ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Hi($i),kc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function jc(e,t){switch(Ci(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hi($i),pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return he(t),null;case 31:if(t.memoizedState!==null){if($a(t),t.alternate===null)throw Error(i(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if($a(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(eo),null;case 4:return pe(),null;case 10:return Hi(t.type),null;case 22:case 23:return $a(t),Ka(),e!==null&&ce(ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Hi($i),null;case 25:return null;default:return null}}function Mc(e,t){switch(Ci(t),t.tag){case 3:Hi($i),pe();break;case 26:case 27:case 5:he(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&$a(t);break;case 13:$a(t);break;case 19:ce(eo);break;case 10:Hi(t.type);break;case 22:case 23:$a(t),Ka(),e!==null&&ce(ca);break;case 24:Hi($i)}}function Nc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Hu(t,t.return,e)}}function Pc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Hu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Hu(t,t.return,e)}}function Fc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Va(t,n)}catch(t){Hu(e,e.return,t)}}}function Ic(e,t,n){n.props=Rs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Hu(e,t,n)}}function Lc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Hu(e,t,n)}}function Rc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Hu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Hu(e,t,n)}else n.current=null}function zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Hu(e,e.return,t)}}function Bc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ot]=t}catch(t){Hu(e,e.return,t)}}function Vc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Hc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Uc(e,t,n),e=e.sibling;e!==null;)Uc(e,t,n),e=e.sibling}function Wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Wc(e,t,n),e=e.sibling;e!==null;)Wc(e,t,n),e=e.sibling}function Gc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[z]=e,t[ot]=n}catch(t){Hu(e,e.return,t)}}var Kc=!1,qc=!1,Jc=!1,Yc=typeof WeakSet==`function`?WeakSet:Set,Xc=null;function Zc(e,t){if(e=e.containerInfo,Rd=sp,e=xr(e),Sr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,Xc=t;Xc!==null;)if(t=Xc,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Xc=e;else for(;Xc!==null;){switch(t=Xc,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Rs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Hu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Xc=e;break}Xc=t.return}}function Qc(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:pl(e,n),r&4&&Nc(5,n);break;case 1:if(pl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Hu(n,n.return,e)}else{var i=Rs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Hu(n,n.return,e)}}r&64&&Fc(n),r&512&&Lc(n,n.return);break;case 3:if(pl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Va(e,t)}catch(e){Hu(n,n.return,e)}}break;case 27:t===null&&r&4&&Gc(n);case 26:case 5:pl(e,n),t===null&&r&4&&zc(n),r&512&&Lc(n,n.return);break;case 12:pl(e,n);break;case 31:pl(e,n),r&4&&il(e,n);break;case 13:pl(e,n),r&4&&al(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ku.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Kc,!r){t=t!==null&&t.memoizedState!==null||qc,i=Kc;var a=qc;Kc=r,(qc=t)&&!a?hl(e,n,(n.subtreeFlags&8772)!=0):pl(e,n),Kc=i,qc=a}break;case 30:break;default:pl(e,n)}}function $c(e){var t=e.alternate;t!==null&&(e.alternate=null,$c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var el=null,tl=!1;function nl(e,t,n){for(n=n.child;n!==null;)rl(e,t,n),n=n.sibling}function rl(e,t,n){if(Le&&typeof Le.onCommitFiberUnmount==`function`)try{Le.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:qc||Rc(n,t),nl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qc||Rc(n,t);var r=el,i=tl;Zd(n.type)&&(el=n.stateNode,tl=!1),nl(e,t,n),pf(n.stateNode),el=r,tl=i;break;case 5:qc||Rc(n,t);case 6:if(r=el,i=tl,el=null,nl(e,t,n),el=r,tl=i,el!==null)if(tl)try{(el.nodeType===9?el.body:el.nodeName===`HTML`?el.ownerDocument.body:el).removeChild(n.stateNode)}catch(e){Hu(n,t,e)}else try{el.removeChild(n.stateNode)}catch(e){Hu(n,t,e)}break;case 18:el!==null&&(tl?(e=el,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(el,n.stateNode));break;case 4:r=el,i=tl,el=n.stateNode.containerInfo,tl=!0,nl(e,t,n),el=r,tl=i;break;case 0:case 11:case 14:case 15:Pc(2,n,t),qc||Pc(4,n,t),nl(e,t,n);break;case 1:qc||(Rc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Ic(n,t,r)),nl(e,t,n);break;case 21:nl(e,t,n);break;case 22:qc=(r=qc)||n.memoizedState!==null,nl(e,t,n),qc=r;break;default:nl(e,t,n)}}function il(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Hu(t,t.return,e)}}}function al(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Hu(t,t.return,e)}}function ol(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Yc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Yc),t;default:throw Error(i(435,e.tag))}}function sl(e,t){var n=ol(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=qu.bind(null,e,t);t.then(r,r)}})}function cl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){el=c.stateNode,tl=!1;break a}break;case 5:el=c.stateNode,tl=!1;break a;case 3:case 4:el=c.stateNode.containerInfo,tl=!0;break a}c=c.return}if(el===null)throw Error(i(160));rl(o,s,a),el=null,tl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ul(t,e),t=t.sibling}var ll=null;function ul(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:cl(t,e),dl(e),r&4&&(Pc(3,e,e.return),Nc(3,e),Pc(5,e,e.return));break;case 1:cl(t,e),dl(e),r&512&&(qc||n===null||Rc(n,n.return)),r&64&&Kc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=ll;if(cl(t,e),dl(e),r&512&&(qc||n===null||Rc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[ft]||o[z]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[z]=e,vt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[z]=e,vt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Bc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:cl(t,e),dl(e),r&512&&(qc||n===null||Rc(n,n.return)),n!==null&&r&4&&Bc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(cl(t,e),dl(e),r&512&&(qc||n===null||Rc(n,n.return)),e.flags&32){a=e.stateNode;try{B(a,``)}catch(t){Hu(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Bc(e,a,n===null?a:n.memoizedProps)),r&1024&&(Jc=!0);break;case 6:if(cl(t,e),dl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Hu(e,e.return,t)}}break;case 3:if(Bf=null,a=ll,ll=gf(t.containerInfo),cl(t,e),ll=a,dl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Hu(e,e.return,t)}Jc&&(Jc=!1,fl(e));break;case 4:r=ll,ll=gf(e.stateNode.containerInfo),cl(t,e),dl(e),ll=r;break;case 12:cl(t,e),dl(e);break;case 31:cl(t,e),dl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,sl(e,r)));break;case 13:cl(t,e),dl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Xl=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,sl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Kc,d=qc;if(Kc=u||a,qc=d||l,cl(t,e),qc=d,Kc=u,dl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Kc||qc||ml(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Hu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Hu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Hu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,sl(e,n))));break;case 19:cl(t,e),dl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,sl(e,r)));break;case 30:break;case 21:break;default:cl(t,e),dl(e)}}function dl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Vc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Wc(e,Hc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(B(o,``),n.flags&=-33),Wc(e,Hc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Uc(e,Hc(e),s);break;default:throw Error(i(161))}}catch(t){Hu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;fl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qc(e,t.alternate,t),t=t.sibling}function ml(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pc(4,t,t.return),ml(t);break;case 1:Rc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Ic(t,t.return,n),ml(t);break;case 27:pf(t.stateNode);case 26:case 5:Rc(t,t.return),ml(t);break;case 22:t.memoizedState===null&&ml(t);break;case 30:ml(t);break;default:ml(t)}e=e.sibling}}function hl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:hl(i,a,n),Nc(4,a);break;case 1:if(hl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Hu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ba(c[i],s)}catch(e){Hu(r,r.return,e)}}n&&o&64&&Fc(a),Lc(a,a.return);break;case 27:Gc(a);case 26:case 5:hl(i,a,n),n&&r===null&&o&4&&zc(a),Lc(a,a.return);break;case 12:hl(i,a,n);break;case 31:hl(i,a,n),n&&o&4&&il(i,a);break;case 13:hl(i,a,n),n&&o&4&&al(i,a);break;case 22:a.memoizedState===null&&hl(i,a,n),Lc(a,a.return);break;case 30:break;default:hl(i,a,n)}t=t.sibling}}function gl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&J(n))}function _l(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&J(e))}function vl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)yl(e,t,n,r),t=t.sibling}function yl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:vl(e,t,n,r),i&2048&&Nc(9,t);break;case 1:vl(e,t,n,r);break;case 3:vl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&J(e)));break;case 12:if(i&2048){vl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Hu(t,t.return,e)}}else vl(e,t,n,r);break;case 31:vl(e,t,n,r);break;case 13:vl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?vl(e,t,n,r):(a._visibility|=2,bl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?vl(e,t,n,r):xl(e,t),i&2048&&gl(o,t);break;case 24:vl(e,t,n,r),i&2048&&_l(t.alternate,t);break;default:vl(e,t,n,r)}}function bl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:bl(a,o,s,c,i),Nc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,bl(a,o,s,c,i)):u._visibility&2?bl(a,o,s,c,i):xl(a,o),i&&l&2048&&gl(o.alternate,o);break;case 24:bl(a,o,s,c,i),i&&l&2048&&_l(o.alternate,o);break;default:bl(a,o,s,c,i)}t=t.sibling}}function xl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:xl(n,r),i&2048&&gl(r.alternate,r);break;case 24:xl(n,r),i&2048&&_l(r.alternate,r);break;default:xl(n,r)}t=t.sibling}}var Sl=8192;function Cl(e,t,n){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)wl(e,t,n),e=e.sibling}function wl(e,t,n){switch(e.tag){case 26:Cl(e,t,n),e.flags&Sl&&e.memoizedState!==null&&Gf(n,ll,e.memoizedState,e.memoizedProps);break;case 5:Cl(e,t,n);break;case 3:case 4:var r=ll;ll=gf(e.stateNode.containerInfo),Cl(e,t,n),ll=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Sl,Sl=16777216,Cl(e,t,n),Sl=r):Cl(e,t,n));break;default:Cl(e,t,n)}}function Tl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function El(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Xc=r,kl(r,e)}Tl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dl(e),e=e.sibling}function Dl(e){switch(e.tag){case 0:case 11:case 15:El(e),e.flags&2048&&Pc(9,e,e.return);break;case 3:El(e);break;case 12:El(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ol(e)):El(e);break;default:El(e)}}function Ol(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Xc=r,kl(r,e)}Tl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pc(8,t,t.return),Ol(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ol(t));break;default:Ol(t)}e=e.sibling}}function kl(e,t){for(;Xc!==null;){var n=Xc;switch(n.tag){case 0:case 11:case 15:Pc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:J(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Xc=r;else a:for(n=e;Xc!==null;){r=Xc;var i=r.sibling,a=r.return;if($c(r),r===n){Xc=null;break a}if(i!==null){i.return=a,Xc=i;break a}Xc=a}}}var Al={getCacheForType:function(e){var t=Ji($i),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ji($i).controller.signal}},jl=typeof WeakMap==`function`?WeakMap:Map,Ml=0,Nl=null,$=null,Pl=0,Fl=0,Il=null,Ll=!1,Rl=!1,zl=!1,Bl=0,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=null,Jl=null,Yl=!1,Xl=0,Zl=0,Ql=1/0,$l=null,eu=null,tu=0,nu=null,ru=null,iu=0,au=0,ou=null,su=null,cu=0,lu=null;function uu(){return Ml&2&&Pl!==0?Pl&-Pl:M.T===null?rt():ld()}function du(){if(Gl===0)if(!(Pl&536870912)||Di){var e=Ue;Ue<<=1,!(Ue&3932160)&&(Ue=262144),Gl=e}else Gl=536870912;return e=qa.current,e!==null&&(e.flags|=32),Gl}function fu(e,t,n){(e===Nl&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)&&(yu(e,0),gu(e,Pl,Gl,!1)),Xe(e,n),(!(Ml&2)||e!==Nl)&&(e===Nl&&(!(Ml&2)&&(Ul|=n),Vl===4&&gu(e,Pl,Gl,!1)),td(e))}function pu(e,t,n){if(Ml&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ke(e,t),a=r?Du(e,t):Tu(e,t,!0),o=r;do{if(a===0){Rl&&!r&&gu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!hu(n)){a=Tu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ql;var l=c.current.memoizedState.isDehydrated;if(l&&(yu(c,s).flags|=256),s=Tu(c,s,!1),s!==2){if(zl&&!l){c.errorRecoveryDisabledLanes|=o,Ul|=o,a=4;break a}o=Jl,Jl=a,o!==null&&(Jl===null?Jl=o:Jl.push.apply(Jl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){yu(e,0),gu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:gu(r,t,Gl,!Ll);break a;case 2:Jl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=Xl+300-De(),10<a)){if(gu(r,t,Gl,!Ll),Ge(r,0,!0)!==0)break a;iu=t,r.timeoutHandle=Kd(mu.bind(null,r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,o,`Throttled`,-0,0),a);break a}mu(r,n,Jl,$l,Yl,t,Gl,Ul,Kl,Ll,o,null,-0,0)}}break}while(1);td(e)}function mu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zt},wl(t,a,d);var m=(a&62914560)===a?Xl-De():(a&4194048)===a?Zl-De():0;if(m=qf(d,m),m!==null){iu=a,e.cancelPendingCommit=m(Pu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),gu(e,a,o,!l);return}}Pu(e,t,a,n,r,i,o,s,c)}function hu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!W(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gu(e,t,n,r){t&=~Wl,t&=~Ul,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-ze(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Qe(e,n,t)}function _u(){return Ml&6?!0:(nd(0,!1),!1)}function vu(){if($!==null){if(Fl===0)var e=$.return;else e=$,Bi=zi=null,xo(e),Sa=null,Ca=0,e=$;for(;e!==null;)Mc(e.alternate,e),e=e.return;$=null}}function yu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),iu=0,vu(),Nl=e,$=n=ni(e.current,null),Pl=t,Fl=0,Il=null,Ll=!1,Rl=Ke(e,t),zl=!1,Kl=Gl=Wl=Ul=Hl=Vl=0,Jl=ql=null,Yl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-ze(r),a=1<<i;t|=e[i],r&=~a}return Bl=t,Kr(),n}function bu(e,t){X=null,M.H=As,t===fa||t===ma?(t=ba(),Fl=3):t===pa?(t=ba(),Fl=4):Fl=t===qs?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Il=t,$===null&&(Vl=1,Hs(e,ui(t,e.current)))}function xu(){var e=qa.current;return e===null?!0:(Pl&4194048)===Pl?Ja===null:(Pl&62914560)===Pl||Pl&536870912?e===Ja:!1}function Su(){var e=M.H;return M.H=As,e===null?As:e}function Cu(){var e=M.A;return M.A=Al,e}function wu(){Vl=4,Ll||(Pl&4194048)!==Pl&&qa.current!==null||(Rl=!0),!(Hl&134217727)&&!(Ul&134217727)||Nl===null||gu(Nl,Pl,Gl,!1)}function Tu(e,t,n){var r=Ml;Ml|=2;var i=Su(),a=Cu();(Nl!==e||Pl!==t)&&($l=null,yu(e,t)),t=!1;var o=Vl;a:do try{if(Fl!==0&&$!==null){var s=$,c=Il;switch(Fl){case 8:vu(),o=6;break a;case 3:case 2:case 9:case 6:qa.current===null&&(t=!0);var l=Fl;if(Fl=0,Il=null,ju(e,s,c,l),n&&Rl){o=0;break a}break;default:l=Fl,Fl=0,Il=null,ju(e,s,c,l)}}Eu(),o=Vl;break}catch(t){bu(e,t)}while(1);return t&&e.shellSuspendCounter++,Bi=zi=null,Ml=r,M.H=i,M.A=a,$===null&&(Nl=null,Pl=0,Kr()),o}function Eu(){for(;$!==null;)ku($)}function Du(e,t){var n=Ml;Ml|=2;var r=Su(),a=Cu();Nl!==e||Pl!==t?($l=null,Ql=De()+500,yu(e,t)):Rl=Ke(e,t);a:do try{if(Fl!==0&&$!==null){t=$;var o=Il;b:switch(Fl){case 1:Fl=0,Il=null,ju(e,t,o,1);break;case 2:case 9:if(ga(o)){Fl=0,Il=null,Au(t);break}t=function(){Fl!==2&&Fl!==9||Nl!==e||(Fl=7),td(e)},o.then(t,t);break a;case 3:Fl=7;break a;case 4:Fl=5;break a;case 7:ga(o)?(Fl=0,Il=null,Au(t)):(Fl=0,Il=null,ju(e,t,o,7));break;case 5:var s=null;switch($.tag){case 26:s=$.memoizedState;case 5:case 27:var c=$;if(s?Wf(s):c.stateNode.complete){Fl=0,Il=null;var l=c.sibling;if(l!==null)$=l;else{var u=c.return;u===null?$=null:($=u,Mu(u))}break b}}Fl=0,Il=null,ju(e,t,o,5);break;case 6:Fl=0,Il=null,ju(e,t,o,6);break;case 8:vu(),Vl=6;break a;default:throw Error(i(462))}}Ou();break}catch(t){bu(e,t)}while(1);return Bi=zi=null,M.H=r,M.A=a,Ml=n,$===null?(Nl=null,Pl=0,Kr(),Vl):0}function Ou(){for(;$!==null&&!Te();)ku($)}function ku(e){var t=Cc(e.alternate,e,Bl);e.memoizedProps=e.pendingProps,t===null?Mu(e):$=t}function Au(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=sc(n,t,t.pendingProps,t.type,void 0,Pl);break;case 11:t=sc(n,t,t.pendingProps,t.type.render,t.ref,Pl);break;case 5:xo(t);default:Mc(n,t),t=$=ri(t,Bl),t=Cc(n,t,Bl)}e.memoizedProps=e.pendingProps,t===null?Mu(e):$=t}function ju(e,t,n,r){Bi=zi=null,xo(t),Sa=null,Ca=0;var i=t.return;try{if(Q(e,i,t,n,Pl)){Vl=1,Hs(e,ui(n,e.current)),$=null;return}}catch(t){if(i!==null)throw $=i,t;Vl=1,Hs(e,ui(n,e.current)),$=null;return}t.flags&32768?(Di||r===1?e=!0:Rl||Pl&536870912?e=!1:(Ll=e=!0,(r===2||r===9||r===3||r===6)&&(r=qa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Nu(t,e)):Mu(t)}function Mu(e){var t=e;do{if(t.flags&32768){Nu(t,Ll);return}e=t.return;var n=Ac(t.alternate,t,Bl);if(n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);Vl===0&&(Vl=5)}function Nu(e,t){do{var n=jc(e.alternate,e);if(n!==null){n.flags&=32767,$=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){$=e;return}$=e=n}while(e!==null);Vl=6,$=null}function Pu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do zu();while(tu!==0);if(Ml&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=Gr,Ze(e,n,o,s,c,l),e===Nl&&($=Nl=null,Pl=0),ru=t,nu=e,iu=n,au=o,ou=a,su=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Ju(je,function(){return Bu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=M.T,M.T=null,a=N.p,N.p=2,s=Ml,Ml|=4;try{Zc(e,t,n)}finally{Ml=s,N.p=a,M.T=r}}tu=1,Fu(),Iu(),Lu()}}function Fu(){if(tu===1){tu=0;var e=nu,t=ru,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=Ml;Ml|=4;try{ul(t,e);var a=zd,o=xr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&br(s.ownerDocument.documentElement,s)){if(c!==null&&Sr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=yr(s,h),v=yr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{Ml=i,N.p=r,M.T=n}}e.current=t,tu=2}}function Iu(){if(tu===2){tu=0;var e=nu,t=ru,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=M.T,M.T=null;var r=N.p;N.p=2;var i=Ml;Ml|=4;try{Qc(e,t.alternate,t)}finally{Ml=i,N.p=r,M.T=n}}tu=3}}function Lu(){if(tu===4||tu===3){tu=0,Ee();var e=nu,t=ru,n=iu,r=su;t.subtreeFlags&10256||t.flags&10256?tu=5:(tu=0,ru=nu=null,Ru(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(eu=null),nt(n),t=t.stateNode,Le&&typeof Le.onCommitFiberRoot==`function`)try{Le.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=M.T,i=N.p,N.p=2,M.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{M.T=t,N.p=i}}iu&3&&zu(),td(e),i=e.pendingLanes,n&261930&&i&42?e===lu?cu++:(cu=0,lu=e):cu=0,nd(0,!1)}}function Ru(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,J(t)))}function zu(){return Fu(),Iu(),Lu(),Bu()}function Bu(){if(tu!==5)return!1;var e=nu,t=au;au=0;var n=nt(iu),r=M.T,a=N.p;try{N.p=32>n?32:n,M.T=null,n=ou,ou=null;var o=nu,s=iu;if(tu=0,ru=nu=null,iu=0,Ml&6)throw Error(i(331));var c=Ml;if(Ml|=4,Dl(o.current),yl(o,o.current,s,n),Ml=c,nd(0,!1),Le&&typeof Le.onPostCommitFiberRoot==`function`)try{Le.onPostCommitFiberRoot(Ie,o)}catch{}return!0}finally{N.p=a,M.T=r,Ru(e,t)}}function Vu(e,t,n){t=ui(n,t),t=Ws(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(Xe(e,2),td(e))}function Hu(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(eu===null||!eu.has(r))){e=ui(n,e),n=Gs(2),r=Pa(t,n,2),r!==null&&(Ks(n,r,t,e),Xe(r,2),td(r));break}}t=t.return}}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(zl=!0,i.add(n),e=Wu.bind(null,e,t,n),t.then(e,e))}function Wu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Nl===e&&(Pl&n)===n&&(Vl===4||Vl===3&&(Pl&62914560)===Pl&&300>De()-Xl?!(Ml&2)&&yu(e,0):Wl|=n,Kl===Pl&&(Kl=0)),td(e)}function Gu(e,t){t===0&&(t=Je()),e=Yr(e,t),e!==null&&(Xe(e,t),td(e))}function Ku(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gu(e,n)}function qu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Gu(e,n)}function Ju(e,t){return Ce(e,t)}var Yu=null,Xu=null,Zu=!1,Qu=!1,$u=!1,ed=0;function td(e){e!==Xu&&e.next===null&&(Xu===null?Yu=Xu=e:Xu=Xu.next=e),Qu=!0,Zu||(Zu=!0,cd())}function nd(e,t){if(!$u&&Qu){$u=!0;do for(var n=!1,r=Yu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-ze(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,sd(r,a))}else a=Pl,a=Ge(r,r===Nl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ke(r,a)||(n=!0,sd(r,a));r=r.next}while(n);$u=!1}}function rd(){id()}function id(){Qu=Zu=!1;var e=0;ed!==0&&Gd()&&(e=ed);for(var t=De(),n=null,r=Yu;r!==null;){var i=r.next,a=ad(r,t);a===0?(r.next=null,n===null?Yu=i:n.next=i,i===null&&(Xu=n)):(n=r,(e!==0||a&3)&&(Qu=!0)),r=i}tu!==0&&tu!==5||nd(e,!1),ed!==0&&(ed=0)}function ad(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ze(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Nl,n=Pl,n=Ge(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Fl===2||Fl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ke(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&we(r),nt(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=od.bind(null,e),n=Ce(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function od(e,t){if(tu!==0&&tu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zu()&&e.callbackNode!==n)return null;var r=Pl;return r=Ge(e,e===Nl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(pu(e,r,t),ad(e,De()),e.callbackNode!=null&&e.callbackNode===n?od.bind(null,e):null)}function sd(e,t){if(zu())return null;pu(e,t,!0)}function cd(){Yd(function(){Ml&6?Ce(ke,rd):id()})}function ld(){if(ed===0){var e=na;e===0&&(e=He,He<<=1,!(He&261888)&&(He=256)),ed=e}return ed}function ud(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Xt(``+e)}function dd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=ud((i[ot]||null).action),o=r.submitter;o&&(t=(t=o[ot]||null)?ud(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new yn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ed!==0){var e=o?dd(i,o):new FormData(i);_s(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?dd(i,o):new FormData(i),_s(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var pd=0;pd<Br.length;pd++){var md=Br[pd];Vr(md.toLowerCase(),`on`+(md[0].toUpperCase()+md.slice(1)))}Vr(Mr,`onAnimationEnd`),Vr(Nr,`onAnimationIteration`),Vr(Pr,`onAnimationStart`),Vr(`dblclick`,`onDoubleClick`),Vr(`focusin`,`onFocus`),Vr(`focusout`,`onBlur`),Vr(Fr,`onTransitionRun`),Vr(Ir,`onTransitionStart`),Vr(Lr,`onTransitionCancel`),Vr(Rr,`onTransitionEnd`),St(`onMouseEnter`,[`mouseout`,`mouseover`]),St(`onMouseLeave`,[`mouseout`,`mouseover`]),St(`onPointerEnter`,[`pointerout`,`pointerover`]),St(`onPointerLeave`,[`pointerout`,`pointerover`]),xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var hd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),gd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(hd));function _d(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Hr(e)}i.currentTarget=null,a=c}}}}function vd(e,t){var n=t[ct];n===void 0&&(n=t[ct]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,yt.forEach(function(t){t!==`selectionchange`&&(gd.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!cn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=mt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}an(function(){var r=a,i=$t(n),s=[];a:{var c=zr.get(e);if(c!==void 0){var l=yn,u=e;switch(e){case`keypress`:if(mn(n)===0)break a;case`keydown`:case`keyup`:l=In;break;case`focusin`:u=`focus`,l=On;break;case`focusout`:u=`blur`,l=On;break;case`beforeblur`:case`afterblur`:l=On;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=En;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Dn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Rn;break;case Mr:case Nr:case Pr:l=kn;break;case Rr:l=zn;break;case`scroll`:case`scrollend`:l=xn;break;case`wheel`:l=Bn;break;case`copy`:case`cut`:case`paste`:l=V;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Ln;break;case`toggle`:case`beforetoggle`:l=Vn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=on(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==Qt&&(u=n.relatedTarget||n.fromElement)&&(mt(u)||u[st]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?mt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=En,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Ln,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:gt(l),h=u==null?c:gt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,mt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?gt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=or;else if(er(c))if(sr)v=gr;else{v=mr;var y=pr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&qt(r.elementType)&&(v=or):v=hr;if(v&&=v(e,r)){tr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Bt(c,`number`,c.value)}switch(y=r?gt(r):window,e){case`focusin`:(er(y)||y.contentEditable===`true`)&&(wr=y,Tr=r,Er=null);break;case`focusout`:Er=Tr=wr=null;break;case`mousedown`:Dr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Dr=!1,Or(s,n,i);break;case`selectionchange`:if(Cr)break;case`keydown`:case`keyup`:Or(s,n,i)}var b;if(H)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Xn?Jn(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Gn&&n.locale!==`ko`&&(Xn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Xn&&(b=pn()):(un=i,dn=`value`in un?un.value:un.textContent,Xn=!0)),y=Td(r,x),0<y.length&&(x=new An(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=Yn(n),b!==null&&(x.data=b)))),(b=Wn?Zn(e,n):Qn(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new An(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),fd(s,e,r,n,i)}_d(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=on(e,n),i!=null&&r.unshift(wd(e,i,a)),i=on(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=on(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=on(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||B(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&B(e,``+r);break;case`className`:Ot(e,`class`,r);break;case`tabIndex`:Ot(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ot(e,n,r);break;case`style`:Kt(e,r,o);break;case`data`:if(t!==`object`){Ot(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Xt(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Xt(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Zt);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Xt(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:vd(`beforetoggle`,e),vd(`toggle`,e),Dt(e,`popover`,r);break;case`xlinkActuate`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:kt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Dt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Jt.get(n)||n,Dt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Kt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?B(e,r):(typeof r==`number`||typeof r==`bigint`)&&B(e,``+r);break;case`onScroll`:r!=null&&vd(`scroll`,e);break;case`onScrollEnd`:r!=null&&vd(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Zt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ot]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Dt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:vd(`error`,e),vd(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:vd(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in vd(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Vt(e,!!r,n,!0):Vt(e,!!r,t,!1);return;case`textarea`:for(s in vd(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Ut(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:vd(`beforetoggle`,e),vd(`toggle`,e),vd(`cancel`,e),vd(`close`,e);break;case`iframe`:case`object`:vd(`load`,e);break;case`video`:case`audio`:for(r=0;r<hd.length;r++)vd(hd[r],e);break;case`image`:vd(`error`,e),vd(`load`,e);break;case`details`:vd(`toggle`,e);break;case`embed`:case`source`:case`link`:vd(`error`,e),vd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if(qt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Rt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Vt(e,!!n,n?[]:``,!1):Vt(e,!!n,t,!0)):Vt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}Ht(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(qt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ft]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),pt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ft])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=N.d;N.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=_u();return e||t}function yf(e){var t=ht(e);t!==null&&t.tag===5&&t.type===`form`?ys(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Lt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Lt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Lt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Lt(n.imageSizes)+`"]`)):i+=`[href="`+Lt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Lt(r)+`"][href="`+Lt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),vt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=_t(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);vt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=_t(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),vt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=_t(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),vt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ue.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=_t(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=_t(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=_t(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Lt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),vt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Lt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Lt(n.href)+`"]`);if(r)return t.instance=r,vt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),vt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,vt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),vt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,vt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),vt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ft]||a[z]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,vt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),vt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ei(3,null,null,t),e.current=a,a.stateNode=e,t=ea(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ja(a),e}function tp(e){return e?(e=Qr,e):Qr}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Na(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Pa(e,r,t),n!==null&&(fu(n,e,t),Fa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=Yr(e,67108864);t!==null&&fu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=uu();t=tt(t);var n=Yr(e,t);n!==null&&fu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=2,up(e,t,n,r)}finally{N.p=a,M.T=i}}function lp(e,t,n,r){var i=M.T;M.T=null;var a=N.p;try{N.p=8,up(e,t,n,r)}finally{N.p=a,M.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=ht(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=We(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-ze(o);s.entanglements[1]|=c,o&=~c}td(a),!(Ml&6)&&(Ql=De()+500,nd(0,!1))}}break;case 31:case 13:s=Yr(a,2),s!==null&&fu(s,a,2),_u(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=$t(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=mt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ht(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=mt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,it(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,it(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qt=r,n.target.dispatchEvent(r),Qt=null}else return t=ht(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=ht(n);a!==null&&(e.splice(t,3),t-=3,_s(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ot]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ot]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,uu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),_u(),t[st]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=rt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.5`)throw Error(i(527,Lp,`19.2.5`));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:M,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ie=zp.inject(Rp),Le=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=zs,s=Bs,c=Vs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[st]=t.current,xd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=m(),b=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function x(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function S(e){return`nodeType`in e}function C(e){return e?x(e)?e:S(e)?e.ownerDocument?.defaultView??window:window:window}function w(e){let{Document:t}=C(e);return e instanceof t}function ee(e){return x(e)?!1:e instanceof C(e).HTMLElement}function T(e){return e instanceof C(e).SVGElement}function E(e){return e?x(e)?e.document:S(e)?w(e)?e:ee(e)||T(e)?e.ownerDocument:document:document:document}var D=b?_.useLayoutEffect:_.useEffect;function te(e){let t=(0,_.useRef)(e);return D(()=>{t.current=e}),(0,_.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function O(){let e=(0,_.useRef)(null);return[(0,_.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,_.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function ne(e,t){t===void 0&&(t=[e]);let n=(0,_.useRef)(e);return D(()=>{n.current!==e&&(n.current=e)},t),n}function k(e,t){let n=(0,_.useRef)();return(0,_.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function A(e){let t=te(e),n=(0,_.useRef)(null);return[n,(0,_.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function j(e){let t=(0,_.useRef)();return(0,_.useEffect)(()=>{t.current=e},[e]),t.current}var re={};function M(e,t){return(0,_.useMemo)(()=>{if(t)return t;let n=re[e]==null?0:re[e]+1;return re[e]=n,e+`-`+n},[e,t])}function N(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var ie=N(1),ae=N(-1);function oe(e){return`clientX`in e&&`clientY`in e}function se(e){if(!e)return!1;let{KeyboardEvent:t}=C(e.target);return t&&e instanceof t}function ce(e){if(!e)return!1;let{TouchEvent:t}=C(e.target);return t&&e instanceof t}function P(e){if(ce(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return oe(e)?{x:e.clientX,y:e.clientY}:null}var F=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[F.Translate.toString(e),F.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),le=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function ue(e){return e.matches(le)?e:e.querySelector(le)}var de={display:`none`};function fe(e){let{id:t,value:n}=e;return _.createElement(`div`,{id:t,style:de},n)}function pe(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return _.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function me(){let[e,t]=(0,_.useState)(``);return{announce:(0,_.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var he=(0,_.createContext)(null);function ge(e){let t=(0,_.useContext)(he);(0,_.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function _e(){let[e]=(0,_.useState)(()=>new Set),t=(0,_.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,_.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var ve={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},ye={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function I(e){let{announcements:t=ye,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=ve}=e,{announce:a,announcement:o}=me(),s=M(`DndLiveRegion`),[c,l]=(0,_.useState)(!1);if((0,_.useEffect)(()=>{l(!0)},[]),ge((0,_.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=_.createElement(_.Fragment,null,_.createElement(fe,{id:r,value:i.draggable}),_.createElement(pe,{id:s,announcement:o}));return n?(0,y.createPortal)(u,n):u}var be;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(be||={});function xe(){}function Se(e,t){return(0,_.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Ce(){var e=[...arguments];return(0,_.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var we=Object.freeze({x:0,y:0});function Te(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function Ee(e,t){let n=P(e);if(!n)return`0 0`;let r={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return r.x+`% `+r.y+`%`}function De(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Oe(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function ke(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function Ae(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function je(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var Me=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=je(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=Te(je(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(De)};function Ne(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var Pe=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=Ne(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Oe)};function Fe(e,t){let{top:n,left:r,bottom:i,right:a}=t;return n<=e.y&&e.y<=i&&r<=e.x&&e.x<=a}var Ie=e=>{let{droppableContainers:t,droppableRects:n,pointerCoordinates:r}=e;if(!r)return[];let i=[];for(let e of t){let{id:t}=e,a=n.get(t);if(a&&Fe(r,a)){let n=ke(a).reduce((e,t)=>e+Te(r,t),0),o=Number((n/4).toFixed(4));i.push({id:t,data:{droppableContainer:e,value:o}})}}return i.sort(De)};function Le(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Re(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:we}function ze(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var Be=ze(1);function L(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Ve(e,t,n){let r=L(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var He={ignoreTransform:!1};function Ue(e,t){t===void 0&&(t=He);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=C(e).getComputedStyle(e);t&&(n=Ve(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function R(e){return Ue(e,{ignoreTransform:!0})}function We(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function Ge(e,t){return t===void 0&&(t=C(e).getComputedStyle(e)),t.position===`fixed`}function Ke(e,t){t===void 0&&(t=C(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function qe(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(w(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!ee(i)||T(i)||n.includes(i))return n;let a=C(e).getComputedStyle(i);return i!==e&&Ke(i,a)&&n.push(i),Ge(i,a)?n:r(i.parentNode)}return e?r(e):n}function Je(e){let[t]=qe(e,1);return t??null}function Ye(e){return!b||!e?null:x(e)?e:S(e)?w(e)||e===E(e).scrollingElement?window:ee(e)?e:null:null}function Xe(e){return x(e)?e.scrollX:e.scrollLeft}function Ze(e){return x(e)?e.scrollY:e.scrollTop}function Qe(e){return{x:Xe(e),y:Ze(e)}}var $e;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})($e||={});function et(e){return!b||!e?!1:e===document.scrollingElement}function tt(e){let t={x:0,y:0},n=et(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var nt={x:.2,y:.2};function rt(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=nt);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=tt(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=$e.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=$e.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=$e.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=$e.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function it(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function at(e){return e.reduce((e,t)=>ie(e,Qe(t)),we)}function z(e){return e.reduce((e,t)=>e+Xe(t),0)}function ot(e){return e.reduce((e,t)=>e+Ze(t),0)}function st(e,t){if(t===void 0&&(t=Ue),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Je(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var ct=[[`x`,[`left`,`right`],z],[`y`,[`top`,`bottom`],ot]],lt=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=qe(t),r=at(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of ct)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},ut=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function dt(e){let{EventTarget:t}=C(e);return e instanceof t?e:E(e)}function ft(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var pt;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(pt||={});function mt(e){e.preventDefault()}function ht(e){e.stopPropagation()}var gt;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(gt||={});var _t={start:[gt.Space,gt.Enter],cancel:[gt.Esc],end:[gt.Space,gt.Enter,gt.Tab]},vt=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case gt.Right:return{...n,x:n.x+25};case gt.Left:return{...n,x:n.x-25};case gt.Down:return{...n,y:n.y+25};case gt.Up:return{...n,y:n.y-25}}},yt=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new ut(E(t)),this.windowListeners=new ut(C(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(pt.Resize,this.handleCancel),this.windowListeners.add(pt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(pt.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&st(n),t(we)}handleKeyDown(e){if(se(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=_t,coordinateGetter:a=vt,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:we;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=ae(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=tt(n),p=it(n),m={x:Math.min(i===gt.Right?p.right-p.width/2:p.right,Math.max(i===gt.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===gt.Down?p.bottom-p.height/2:p.bottom,Math.max(i===gt.Down?p.top:p.top+p.height/2,u.y))},h=i===gt.Right&&!s||i===gt.Left&&!c,g=i===gt.Down&&!l||i===gt.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===gt.Right&&e<=d.x||i===gt.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===gt.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===gt.Down&&e<=d.y||i===gt.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===gt.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,ie(ae(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};yt.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=_t,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function bt(e){return!!(e&&`distance`in e)}function xt(e){return!!(e&&`delay`in e)}var St=class{constructor(e,t,n){n===void 0&&(n=dt(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=E(i),this.documentListeners=new ut(this.document),this.listeners=new ut(n),this.windowListeners=new ut(C(i)),this.initialCoordinates=P(r)??we,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(pt.Resize,this.handleCancel),this.windowListeners.add(pt.DragStart,mt),this.windowListeners.add(pt.VisibilityChange,this.handleCancel),this.windowListeners.add(pt.ContextMenu,mt),this.documentListeners.add(pt.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(xt(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(bt(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(pt.Click,ht,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(pt.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=P(e)??we,s=ae(n,o);if(!t&&a){if(bt(a)){if(a.tolerance!=null&&ft(s,a.tolerance))return this.handleCancel();if(ft(s,a.distance))return this.handleStart()}if(xt(a)&&ft(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===gt.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},Ct={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},wt=class extends St{constructor(e){let{event:t}=e,n=E(t.target);super(e,Ct,n)}};wt.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var Tt={move:{name:`mousemove`},end:{name:`mouseup`}},Et;(function(e){e[e.RightClick=2]=`RightClick`})(Et||={});var Dt=class extends St{constructor(e){super(e,Tt,E(e.event.target))}};Dt.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Et.RightClick?!1:(r?.({event:n}),!0)}}];var Ot={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},kt=class extends St{constructor(e){super(e,Ot)}static setup(){return window.addEventListener(Ot.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Ot.move.name,e)};function e(){}}};kt.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var At;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(At||={});var jt;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(jt||={});function Mt(e){let{acceleration:t,activator:n=At.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=jt.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=Pt({delta:d,disabled:!a}),[m,h]=O(),g=(0,_.useRef)({x:0,y:0}),v=(0,_.useRef)({x:0,y:0}),y=(0,_.useMemo)(()=>{switch(n){case At.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case At.DraggableRect:return i}},[n,i,c]),b=(0,_.useRef)(null),x=(0,_.useCallback)(()=>{let e=b.current;if(!e)return;let t=g.current.x*v.current.x,n=g.current.y*v.current.y;e.scrollBy(t,n)},[]),S=(0,_.useMemo)(()=>s===jt.TreeOrder?[...l].reverse():l,[s,l]);(0,_.useEffect)(()=>{if(!a||!l.length||!y){h();return}for(let e of S){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=rt(e,n,y,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),b.current=e,m(x,o),g.current=a,v.current=i;return}}g.current={x:0,y:0},v.current={x:0,y:0},h()},[t,x,r,h,a,o,JSON.stringify(y),JSON.stringify(p),m,l,S,u,JSON.stringify(f)])}var Nt={x:{[$e.Backward]:!1,[$e.Forward]:!1},y:{[$e.Backward]:!1,[$e.Forward]:!1}};function Pt(e){let{delta:t,disabled:n}=e,r=j(t);return k(e=>{if(n||!r||!e)return Nt;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[$e.Backward]:e.x[$e.Backward]||i.x===-1,[$e.Forward]:e.x[$e.Forward]||i.x===1},y:{[$e.Backward]:e.y[$e.Backward]||i.y===-1,[$e.Forward]:e.y[$e.Forward]||i.y===1}}},[n,t,r])}function Ft(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return k(e=>t==null?null:r??e??null,[r,t])}function It(e,t){return(0,_.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Lt;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Lt||={});var Rt;(function(e){e.Optimized=`optimized`})(Rt||={});var zt=new Map;function Bt(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,_.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,_.useRef)(e),d=g(),f=ne(d),p=(0,_.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,_.useRef)(null),h=k(t=>{if(d&&!n)return zt;if(!t||t===zt||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new lt(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,_.useEffect)(()=>{u.current=e},[e]),(0,_.useEffect)(()=>{d||p()},[n,d]),(0,_.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,_.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Lt.Always:return!1;case Lt.BeforeDragging:return n;default:return!n}}}function Vt(e,t){return k(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function Ht(e,t){return Vt(e,t)}function Ut(e){let{callback:t,disabled:n}=e,r=te(t),i=(0,_.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,_.useEffect)(()=>()=>i?.disconnect(),[i]),i}function B(e){let{callback:t,disabled:n}=e,r=te(t),i=(0,_.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,_.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Wt(e){return new lt(Ue(e),e)}function Gt(e,t,n){t===void 0&&(t=Wt);let[r,i]=(0,_.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Ut({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=B({callback:a});return D(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Kt(e){return Re(e,Vt(e))}var qt=[];function Jt(e){let t=(0,_.useRef)(e),n=k(n=>e?n&&n!==qt&&e&&t.current&&e.parentNode===t.current.parentNode?n:qe(e):qt,[e]);return(0,_.useEffect)(()=>{t.current=e},[e]),n}function Yt(e){let[t,n]=(0,_.useState)(null),r=(0,_.useRef)(e),i=(0,_.useCallback)(e=>{let t=Ye(e.target);t&&n(e=>e?(e.set(t,Qe(t)),new Map(e)):null)},[]);return(0,_.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=Ye(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,Qe(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{Ye(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,_.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>ie(e,t),we):at(e):we,[e,t])}function Xt(e,t){t===void 0&&(t=[]);let n=(0,_.useRef)(null);return(0,_.useEffect)(()=>{n.current=null},t),(0,_.useEffect)(()=>{let t=e!==we;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?ae(e,n.current):we}function Zt(e){(0,_.useEffect)(()=>{if(!b)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function Qt(e,t){return(0,_.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function $t(e){return(0,_.useMemo)(()=>e?We(e):null,[e])}var en=[];function tn(e,t){t===void 0&&(t=Ue);let[n]=e,r=$t(n?C(n):null),[i,a]=(0,_.useState)(en);function o(){a(()=>e.length?e.map(e=>et(e)?r:new lt(t(e),e)):en)}let s=B({callback:o});return D(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function nn(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return ee(t)?t:e}function rn(e){let{measure:t}=e,[n,r]=(0,_.useState)(null),i=B({callback:(0,_.useCallback)(e=>{for(let{target:n}of e)if(ee(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=A((0,_.useCallback)(e=>{let n=nn(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,_.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var an=[{sensor:wt,options:{}},{sensor:yt,options:{}}],on={current:{}},sn={draggable:{measure:R},droppable:{measure:R,strategy:Lt.WhileDragging,frequency:Rt.Optimized},dragOverlay:{measure:Ue}},cn=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},ln={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new cn,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:xe},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:sn,measureDroppableContainers:xe,windowRect:null,measuringScheduled:!1},un={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:xe,draggableNodes:new Map,over:null,measureDroppableContainers:xe},dn=(0,_.createContext)(un),fn=(0,_.createContext)(ln);function pn(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new cn}}}function mn(e,t){switch(t.type){case be.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case be.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case be.DragEnd:case be.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case be.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new cn(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case be.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new cn(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case be.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new cn(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function hn(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,_.useContext)(dn),a=j(r),o=j(n?.id);return(0,_.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!se(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=ue(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function gn(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function _n(e){return(0,_.useMemo)(()=>({draggable:{...sn.draggable,...e?.draggable},droppable:{...sn.droppable,...e?.droppable},dragOverlay:{...sn.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function vn(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,_.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;D(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=Re(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Je(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var yn=(0,_.createContext)({...we,scaleX:1,scaleY:1}),bn;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(bn||={});var xn=(0,_.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=an,collisionDetection:o=Pe,measuring:s,modifiers:c,...l}=e,[u,d]=(0,_.useReducer)(mn,void 0,pn),[f,p]=_e(),[m,h]=(0,_.useState)(bn.Uninitialized),g=m===bn.Initialized,{draggable:{active:v,nodes:b,translate:x},droppable:{containers:S}}=u,w=v==null?null:b.get(v),ee=(0,_.useRef)({initial:null,translated:null}),T=(0,_.useMemo)(()=>v==null?null:{id:v,data:w?.data??on,rect:ee},[v,w]),E=(0,_.useRef)(null),[te,O]=(0,_.useState)(null),[k,A]=(0,_.useState)(null),j=ne(l,Object.values(l)),re=M(`DndDescribedBy`,t),N=(0,_.useMemo)(()=>S.getEnabled(),[S]),ae=_n(s),{droppableRects:oe,measureDroppableContainers:se,measuringScheduled:ce}=Bt(N,{dragging:g,dependencies:[x.x,x.y],config:ae.droppable}),F=Ft(b,v),le=(0,_.useMemo)(()=>k?P(k):null,[k]),ue=Ke(),de=Ht(F,ae.draggable.measure);vn({activeNode:v==null?null:b.get(v),config:ue.layoutShiftCompensation,initialRect:de,measure:ae.draggable.measure});let fe=Gt(F,ae.draggable.measure,de),pe=Gt(F?F.parentElement:null),me=(0,_.useRef)({activatorEvent:null,active:null,activeNode:F,collisionRect:null,collisions:null,droppableRects:oe,draggableNodes:b,draggingNode:null,draggingNodeRect:null,droppableContainers:S,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ge=S.getNodeFor(me.current.over?.id),ve=rn({measure:ae.dragOverlay.measure}),ye=ve.nodeRef.current??F,xe=g?ve.rect??fe:null,Se=!!(ve.nodeRef.current&&ve.rect),Ce=Kt(Se?null:fe),we=$t(ye?C(ye):null),Te=Jt(g?ge??F:null),Ee=tn(Te),De=gn(c,{transform:{x:x.x-Ce.x,y:x.y-Ce.y,scaleX:1,scaleY:1},activatorEvent:k,active:T,activeNodeRect:fe,containerNodeRect:pe,draggingNodeRect:xe,over:me.current.over,overlayNodeRect:ve.rect,scrollableAncestors:Te,scrollableAncestorRects:Ee,windowRect:we}),Oe=le?ie(le,x):null,ke=Yt(Te),je=Xt(ke),Me=Xt(ke,[fe]),Ne=ie(De,je),Fe=xe?Be(xe,De):null,Ie=T&&Fe?o({active:T,collisionRect:Fe,droppableRects:oe,droppableContainers:N,pointerCoordinates:Oe}):null,Re=Ae(Ie,`id`),[ze,L]=(0,_.useState)(null),Ve=Le(Se?De:ie(De,Me),ze?.rect??null,fe),He=(0,_.useRef)(null),Ue=(0,_.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(E.current==null)return;let i=b.get(E.current);if(!i)return;let a=e.nativeEvent;He.current=new n({active:E.current,activeNode:i,event:a,options:r,context:me,onAbort(e){if(!b.get(e))return;let{onDragAbort:t}=j.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!b.get(e))return;let{onDragPending:i}=j.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=E.current;if(t==null)return;let n=b.get(t);if(!n)return;let{onDragStart:r}=j.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:ee}};(0,y.unstable_batchedUpdates)(()=>{r?.(i),h(bn.Initializing),d({type:be.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),O(He.current),A(a)})},onMove(e){d({type:be.DragMove,coordinates:e})},onEnd:o(be.DragEnd),onCancel:o(be.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=me.current,o=null;if(t&&i){let{cancelDrop:s}=j.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===be.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=be.DragCancel)}E.current=null,(0,y.unstable_batchedUpdates)(()=>{d({type:e}),h(bn.Uninitialized),L(null),O(null),A(null),He.current=null;let t=e===be.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=j.current[t];e?.(o),f({type:t,event:o})}})}}},[b]),R=It(a,(0,_.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=b.get(r);if(E.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},E.current=r,Ue(n,t))},[b,Ue]));Zt(a),D(()=>{fe&&m===bn.Initializing&&h(bn.Initialized)},[fe,m]),(0,_.useEffect)(()=>{let{onDragMove:e}=j.current,{active:t,activatorEvent:n,collisions:r,over:i}=me.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:Ne.x,y:Ne.y},over:i};(0,y.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[Ne.x,Ne.y]),(0,_.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=me.current;if(!e||E.current==null||!t||!i)return;let{onDragOver:a}=j.current,o=r.get(Re),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,y.unstable_batchedUpdates)(()=>{L(s),a?.(c),f({type:`onDragOver`,event:c})})},[Re]),D(()=>{me.current={activatorEvent:k,active:T,activeNode:F,collisionRect:Fe,collisions:Ie,droppableRects:oe,draggableNodes:b,draggingNode:ye,draggingNodeRect:xe,droppableContainers:S,over:ze,scrollableAncestors:Te,scrollAdjustedTranslate:Ne},ee.current={initial:xe,translated:Fe}},[T,F,Ie,Fe,b,ye,xe,oe,S,ze,Te,Ne]),Mt({...ue,delta:x,draggingRect:Fe,pointerCoordinates:Oe,scrollableAncestors:Te,scrollableAncestorRects:Ee});let We=(0,_.useMemo)(()=>({active:T,activeNode:F,activeNodeRect:fe,activatorEvent:k,collisions:Ie,containerNodeRect:pe,dragOverlay:ve,draggableNodes:b,droppableContainers:S,droppableRects:oe,over:ze,measureDroppableContainers:se,scrollableAncestors:Te,scrollableAncestorRects:Ee,measuringConfiguration:ae,measuringScheduled:ce,windowRect:we}),[T,F,fe,k,Ie,pe,ve,b,S,oe,ze,se,Te,Ee,ae,ce,we]),Ge=(0,_.useMemo)(()=>({activatorEvent:k,activators:R,active:T,activeNodeRect:fe,ariaDescribedById:{draggable:re},dispatch:d,draggableNodes:b,over:ze,measureDroppableContainers:se}),[k,R,T,fe,d,re,b,ze,se]);return _.createElement(he.Provider,{value:p},_.createElement(dn.Provider,{value:Ge},_.createElement(fn.Provider,{value:We},_.createElement(yn.Provider,{value:Ve},i)),_.createElement(hn,{disabled:n?.restoreFocus===!1})),_.createElement(I,{...n,hiddenTextDescribedById:re}));function Ke(){let e=te?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),Sn=(0,_.createContext)(null),Cn=`button`,wn=`Draggable`;function Tn(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=M(wn),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,_.useContext)(dn),{role:p=Cn,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,v=(0,_.useContext)(g?yn:Sn),[y,b]=A(),[x,S]=A(),C=Qt(o,t),w=ne(n);return D(()=>(d.set(t,{id:t,key:a,node:y,activatorNode:x,data:w}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,_.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===Cn?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:C,node:y,over:f,setNodeRef:b,setActivatorNodeRef:S,transform:v}}function En(){return(0,_.useContext)(fn)}var Dn=`Droppable`,On={timeout:25};function kn(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=M(Dn),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,_.useContext)(dn),u=(0,_.useRef)({disabled:n}),d=(0,_.useRef)(!1),f=(0,_.useRef)(null),p=(0,_.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...On,...i},v=ne(h??r),y=B({callback:(0,_.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(v.current)?v.current:[v.current]),p.current=null},g)},[g]),disabled:m||!o}),[b,x]=A((0,_.useCallback)((e,t)=>{y&&(t&&(y.unobserve(t),d.current=!1),e&&y.observe(e))},[y])),S=ne(t);return(0,_.useEffect)(()=>{!y||!b.current||(y.disconnect(),d.current=!1,y.observe(b.current))},[b,y]),(0,_.useEffect)(()=>(s({type:be.RegisterDroppable,element:{id:r,key:a,disabled:n,node:b,rect:f,data:S}}),()=>s({type:be.UnregisterDroppable,key:a,id:r})),[r]),(0,_.useEffect)(()=>{n!==u.current.disabled&&(s({type:be.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:b,over:c,setNodeRef:x}}function V(e){let{animation:t,children:n}=e,[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(null),s=j(n);return!n&&!r&&s&&i(s),D(()=>{if(!a)return;let e=r?.key,n=r?.props.id;if(e==null||n==null){i(null);return}Promise.resolve(t(n,a)).then(()=>{i(null)})},[t,r,a]),_.createElement(_.Fragment,null,n,r?(0,_.cloneElement)(r,{ref:o}):null)}var An={x:0,y:0,scaleX:1,scaleY:1};function jn(e){let{children:t}=e;return _.createElement(dn.Provider,{value:un},_.createElement(yn.Provider,{value:An},t))}var Mn={position:`fixed`,touchAction:`none`},Nn=e=>se(e)?`transform 250ms ease`:void 0,Pn=(0,_.forwardRef)((e,t)=>{let{as:n,activatorEvent:r,adjustScale:i,children:a,className:o,rect:s,style:c,transform:l,transition:u=Nn}=e;if(!s)return null;let d=i?l:{...l,scaleX:1,scaleY:1},f={...Mn,width:s.width,height:s.height,top:s.top,left:s.left,transform:F.Transform.toString(d),transformOrigin:i&&r?Ee(r,s):void 0,transition:typeof u==`function`?u(r):u,...c};return _.createElement(n,{className:o,style:f,ref:t},a)}),Fn=e=>t=>{let{active:n,dragOverlay:r}=t,i={},{styles:a,className:o}=e;if(a!=null&&a.active)for(let[e,t]of Object.entries(a.active))t!==void 0&&(i[e]=n.node.style.getPropertyValue(e),n.node.style.setProperty(e,t));if(a!=null&&a.dragOverlay)for(let[e,t]of Object.entries(a.dragOverlay))t!==void 0&&r.node.style.setProperty(e,t);return o!=null&&o.active&&n.node.classList.add(o.active),o!=null&&o.dragOverlay&&r.node.classList.add(o.dragOverlay),function(){for(let[e,t]of Object.entries(i))n.node.style.setProperty(e,t);o!=null&&o.active&&n.node.classList.remove(o.active)}},In={duration:250,easing:`ease`,keyframes:e=>{let{transform:{initial:t,final:n}}=e;return[{transform:F.Transform.toString(t)},{transform:F.Transform.toString(n)}]},sideEffects:Fn({styles:{active:{opacity:`0`}}})};function Ln(e){let{config:t,draggableNodes:n,droppableContainers:r,measuringConfiguration:i}=e;return te((e,a)=>{if(t===null)return;let o=n.get(e);if(!o)return;let s=o.node.current;if(!s)return;let c=nn(a);if(!c)return;let{transform:l}=C(a).getComputedStyle(a),u=L(l);if(!u)return;let d=typeof t==`function`?t:Rn(t);return st(s,i.draggable.measure),d({active:{id:e,data:o.data,node:s,rect:i.draggable.measure(s)},draggableNodes:n,dragOverlay:{node:a,rect:i.dragOverlay.measure(c)},droppableContainers:r,measuringConfiguration:i,transform:u})})}function Rn(e){let{duration:t,easing:n,sideEffects:r,keyframes:i}={...In,...e};return e=>{let{active:a,dragOverlay:o,transform:s,...c}=e;if(!t)return;let l={x:o.rect.left-a.rect.left,y:o.rect.top-a.rect.top},u={scaleX:s.scaleX===1?1:a.rect.width*s.scaleX/o.rect.width,scaleY:s.scaleY===1?1:a.rect.height*s.scaleY/o.rect.height},d={x:s.x-l.x,y:s.y-l.y,...u},f=i({...c,active:a,dragOverlay:o,transform:{initial:s,final:d}}),[p]=f,m=f[f.length-1];if(JSON.stringify(p)===JSON.stringify(m))return;let h=r?.({active:a,dragOverlay:o,...c}),g=o.node.animate(f,{duration:t,easing:n,fill:`forwards`});return new Promise(e=>{g.onfinish=()=>{h?.(),e()}})}}var zn=0;function Bn(e){return(0,_.useMemo)(()=>{if(e!=null)return zn++,zn},[e])}var Vn=_.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:r,style:i,transition:a,modifiers:o,wrapperElement:s=`div`,className:c,zIndex:l=999}=e,{activatorEvent:u,active:d,activeNodeRect:f,containerNodeRect:p,draggableNodes:m,droppableContainers:h,dragOverlay:g,over:v,measuringConfiguration:y,scrollableAncestors:b,scrollableAncestorRects:x,windowRect:S}=En(),C=(0,_.useContext)(yn),w=Bn(d?.id),ee=gn(o,{activatorEvent:u,active:d,activeNodeRect:f,containerNodeRect:p,draggingNodeRect:g.rect,over:v,overlayNodeRect:g.rect,scrollableAncestors:b,scrollableAncestorRects:x,transform:C,windowRect:S}),T=Vt(f),E=Ln({config:r,draggableNodes:m,droppableContainers:h,measuringConfiguration:y}),D=T?g.setRef:void 0;return _.createElement(jn,null,_.createElement(V,{animation:E},d&&w?_.createElement(Pn,{key:w,id:d.id,ref:D,as:s,activatorEvent:u,adjustScale:t,className:c,transition:a,rect:T,style:{zIndex:l,...i},transform:ee},n):null))}),Hn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),H=o(((e,t)=>{t.exports=Hn()}))(),Un=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,Wn={popup:`styles-module__popup___IhzrD`,enter:`styles-module__enter___L7U7N`,popupEnter:`styles-module__popupEnter___AuQDN`,entered:`styles-module__entered___COX-w`,exit:`styles-module__exit___5eGjE`,popupExit:`styles-module__popupExit___JJKQX`,shake:`styles-module__shake___jdbWe`,header:`styles-module__header___wWsSi`,element:`styles-module__element___fTV2z`,headerToggle:`styles-module__headerToggle___WpW0b`,chevron:`styles-module__chevron___ZZJlR`,expanded:`styles-module__expanded___2Hxgv`,stylesWrapper:`styles-module__stylesWrapper___pnHgy`,stylesInner:`styles-module__stylesInner___YYZe2`,stylesBlock:`styles-module__stylesBlock___VfQKn`,styleLine:`styles-module__styleLine___1YQiD`,styleProperty:`styles-module__styleProperty___84L1i`,styleValue:`styles-module__styleValue___q51-h`,timestamp:`styles-module__timestamp___Dtpsv`,quote:`styles-module__quote___mcMmQ`,textarea:`styles-module__textarea___jrSae`,green:`styles-module__green___99l3h`,actions:`styles-module__actions___D6x3f`,cancel:`styles-module__cancel___hRjnL`,submit:`styles-module__submit___K-mIR`,deleteWrapper:`styles-module__deleteWrapper___oSjdo`,deleteButton:`styles-module__deleteButton___4VuAE`,light:`styles-module__light___6AaSQ`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-popup-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-popup-css-styles`,document.head.appendChild(e)),e.textContent=Un}var Gn=Wn,Kn=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,qn={iconState:`icon-transitions-module__iconState___uqK9J`,iconStateFast:`icon-transitions-module__iconStateFast___HxlMm`,iconFade:`icon-transitions-module__iconFade___nPwXg`,iconFadeFast:`icon-transitions-module__iconFadeFast___Ofb2t`,visible:`icon-transitions-module__visible___PlHsU`,visibleScaled:`icon-transitions-module__visibleScaled___8Qog-`,hidden:`icon-transitions-module__hidden___ETykt`,hiddenScaled:`icon-transitions-module__hiddenScaled___JXn-m`,sending:`icon-transitions-module__sending___uaLN-`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-components-icon-transitions`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-components-icon-transitions`,document.head.appendChild(e)),e.textContent=Kn}var Jn=qn,Yn=({size:e=16})=>(0,H.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M8 3v10M3 8h10`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})}),Xn=({size:e=24,style:t={}})=>(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:t,children:[(0,H.jsxs)(`g`,{clipPath:`url(#clip0_list_sparkle)`,children:[(0,H.jsx)(`path`,{d:`M11.5 12L5.5 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M18.5 6.75L5.5 6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M9.25 17.25L5.5 17.25`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinejoin:`round`})]}),(0,H.jsx)(`defs`,{children:(0,H.jsx)(`clipPath`,{id:`clip0_list_sparkle`,children:(0,H.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),Zn=({size:e=20,...t})=>(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,...t,children:[(0,H.jsx)(`circle`,{cx:`10`,cy:`10`,r:`5.375`,stroke:`currentColor`,strokeWidth:`1.25`}),(0,H.jsx)(`path`,{d:`M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`circle`,{cx:`10`,cy:`12.625`,r:`0.625`,fill:`currentColor`})]}),Qn=({size:e=24,copied:t=!1,tint:n})=>(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,style:n?{color:n,transition:`color 0.3s ease`}:void 0,children:[(0,H.jsxs)(`g`,{className:`${Jn.iconState} ${t?Jn.hiddenScaled:Jn.visibleScaled}`,children:[(0,H.jsx)(`path`,{d:`M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,H.jsx)(`path`,{d:`M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,H.jsxs)(`g`,{className:`${Jn.iconState} ${t?Jn.visibleScaled:Jn.hiddenScaled}`,children:[(0,H.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),$n=({size:e=24,state:t=`idle`})=>{let n=t===`idle`,r=t===`sent`,i=t===`failed`,a=t===`sending`;return(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,H.jsx)(`g`,{className:`${Jn.iconStateFast} ${n?Jn.visibleScaled:a?Jn.sending:Jn.hiddenScaled}`,children:(0,H.jsx)(`path`,{d:`M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,H.jsxs)(`g`,{className:`${Jn.iconStateFast} ${r?Jn.visibleScaled:Jn.hiddenScaled}`,children:[(0,H.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M15 10L11 14.25L9.25 12.25`,stroke:`var(--agentation-color-green)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,H.jsxs)(`g`,{className:`${Jn.iconStateFast} ${i?Jn.visibleScaled:Jn.hiddenScaled}`,children:[(0,H.jsx)(`path`,{d:`M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M12 8V12`,stroke:`var(--agentation-color-red)`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,H.jsx)(`circle`,{cx:`12`,cy:`15`,r:`0.5`,fill:`var(--agentation-color-red)`,stroke:`var(--agentation-color-red)`,strokeWidth:`1`})]})]})},er=({size:e=24,isOpen:t=!0})=>(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,H.jsxs)(`g`,{className:`${Jn.iconFade} ${t?Jn.visible:Jn.hidden}`,children:[(0,H.jsx)(`path`,{d:`M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,H.jsxs)(`g`,{className:`${Jn.iconFade} ${t?Jn.hidden:Jn.visible}`,children:[(0,H.jsx)(`path`,{d:`M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z`,fill:`currentColor`}),(0,H.jsx)(`path`,{d:`M5 19L19 5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})]}),tr=({size:e=24,isPaused:t=!1})=>(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,H.jsxs)(`g`,{className:`${Jn.iconFadeFast} ${t?Jn.hidden:Jn.visible}`,children:[(0,H.jsx)(`path`,{d:`M8 6L8 18`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,H.jsx)(`path`,{d:`M16 18L16 6`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),(0,H.jsx)(`path`,{className:`${Jn.iconFadeFast} ${t?Jn.visible:Jn.hidden}`,d:`M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z`,stroke:`currentColor`,strokeWidth:`1.5`})]}),nr=({size:e=16})=>(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,H.jsx)(`path`,{d:`M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`})]}),rr=({size:e=16})=>(0,H.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),ir=({size:e=16})=>(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,H.jsxs)(`g`,{clipPath:`url(#clip0_2_53)`,children:[(0,H.jsx)(`path`,{d:`M16.25 16.25L7.75 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M7.75 16.25L16.25 7.75`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),(0,H.jsx)(`defs`,{children:(0,H.jsx)(`clipPath`,{id:`clip0_2_53`,children:(0,H.jsx)(`rect`,{width:`24`,height:`24`,fill:`white`})})})]}),ar=({size:e=24})=>(0,H.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z`,fill:`currentColor`})}),or=({size:e=16})=>(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:[(0,H.jsx)(`path`,{d:`M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M10 3.9585V5.05698`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M10 14.9429V16.0414`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M5.7269 5.72656L6.50682 6.50649`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M13.4932 13.4932L14.2731 14.2731`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M3.95834 10H5.05683`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M14.9432 10H16.0417`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M5.7269 14.2731L6.50682 13.4932`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,H.jsx)(`path`,{d:`M13.4932 6.50649L14.2731 5.72656`,stroke:`currentColor`,strokeWidth:`1.25`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),sr=({size:e=16})=>(0,H.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 20 20`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z`,stroke:`currentColor`,strokeWidth:`1.13793`,strokeLinecap:`round`,strokeLinejoin:`round`})}),cr=({size:e=16})=>(0,H.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,H.jsx)(`path`,{d:`M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375`,stroke:`currentColor`,strokeWidth:`0.9`,strokeLinecap:`round`,strokeLinejoin:`round`})}),lr=({size:e=24})=>(0,H.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,H.jsx)(`path`,{d:`M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z`,fill:`currentColor`})}),ur=({size:e=16})=>(0,H.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,H.jsx)(`path`,{d:`M8.5 3.5L4 8L8.5 12.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),dr=({size:e=24})=>(0,H.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,H.jsx)(`line`,{x1:`3`,y1:`9`,x2:`21`,y2:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,H.jsx)(`line`,{x1:`9`,y1:`9`,x2:`9`,y2:`21`,stroke:`currentColor`,strokeWidth:`1.5`})]}),fr=[`data-feedback-toolbar`,`data-annotation-popup`,`data-annotation-marker`],pr=fr.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(``),mr=`feedback-freeze-styles`,hr=`__agentation_freeze`;function gr(){if(typeof window>`u`)return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;return e[hr]||(e[hr]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),e[hr]}var U=gr();typeof window<`u`&&!U.installed&&(U.origSetTimeout=window.setTimeout.bind(window),U.origSetInterval=window.setInterval.bind(window),U.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,t,...n)=>typeof e==`string`?U.origSetTimeout(e,t):U.origSetTimeout((...t)=>{U.frozen?U.frozenTimeoutQueue.push(()=>e(...t)):e(...t)},t,...n),window.setInterval=(e,t,...n)=>typeof e==`string`?U.origSetInterval(e,t):U.origSetInterval((...t)=>{U.frozen||e(...t)},t,...n),window.requestAnimationFrame=e=>U.origRAF(t=>{U.frozen?U.frozenRAFQueue.push(e):e(t)}),U.installed=!0);var W=U.origSetTimeout,_r=U.origSetInterval,vr=U.origRAF;function yr(e){return e?fr.some(t=>!!e.closest?.(`[${t}]`)):!1}function br(){if(typeof document>`u`||U.frozen)return;U.frozen=!0,U.frozenTimeoutQueue=[],U.frozenRAFQueue=[];let e=document.getElementById(mr);e||(e=document.createElement(`style`),e.id=mr),e.textContent=`
    *${pr},
    *${pr}::before,
    *${pr}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),U.pausedAnimations=[];try{document.getAnimations().forEach(e=>{if(e.playState!==`running`)return;let t=e.effect?.target;yr(t)||(e.pause(),U.pausedAnimations.push(e))})}catch{}document.querySelectorAll(`video`).forEach(e=>{e.paused||(e.dataset.wasPaused=`false`,e.pause())})}function xr(){if(typeof document>`u`||!U.frozen)return;U.frozen=!1;let e=U.frozenTimeoutQueue;U.frozenTimeoutQueue=[];for(let t of e)U.origSetTimeout(()=>{if(U.frozen){U.frozenTimeoutQueue.push(t);return}try{t()}catch(e){console.warn(`[agentation] Error replaying queued timeout:`,e)}},0);let t=U.frozenRAFQueue;U.frozenRAFQueue=[];for(let e of t)U.origRAF(t=>{if(U.frozen){U.frozenRAFQueue.push(e);return}e(t)});for(let e of U.pausedAnimations)try{e.play()}catch(e){console.warn(`[agentation] Error resuming animation:`,e)}U.pausedAnimations=[],document.getElementById(mr)?.remove(),document.querySelectorAll(`video`).forEach(e=>{e.dataset.wasPaused===`false`&&(e.play().catch(()=>{}),delete e.dataset.wasPaused)})}function Sr(e){if(!e)return;let t=e=>e.stopImmediatePropagation();document.addEventListener(`focusin`,t,!0),document.addEventListener(`focusout`,t,!0);try{e.focus()}finally{document.removeEventListener(`focusin`,t,!0),document.removeEventListener(`focusout`,t,!0)}}var Cr=(0,_.forwardRef)(function({element:e,timestamp:t,selectedText:n,placeholder:r=`What should change?`,initialValue:i=``,submitLabel:a=`Add`,onSubmit:o,onCancel:s,onDelete:c,style:l,accentColor:u=`#3c82f7`,isExiting:d=!1,lightMode:f=!1,computedStyles:p},m){let[h,g]=(0,_.useState)(i),[v,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(`initial`),[S,C]=(0,_.useState)(!1),[w,ee]=(0,_.useState)(!1),T=(0,_.useRef)(null),E=(0,_.useRef)(null),D=(0,_.useRef)(null),te=(0,_.useRef)(null);(0,_.useEffect)(()=>{d&&b!==`exit`&&x(`exit`)},[d,b]),(0,_.useEffect)(()=>{W(()=>{x(`enter`)},0);let e=W(()=>{x(`entered`)},200),t=W(()=>{let e=T.current;e&&(Sr(e),e.selectionStart=e.selectionEnd=e.value.length,e.scrollTop=e.scrollHeight)},50);return()=>{clearTimeout(e),clearTimeout(t),D.current&&clearTimeout(D.current),te.current&&clearTimeout(te.current)}},[]);let O=(0,_.useCallback)(()=>{te.current&&clearTimeout(te.current),y(!0),te.current=W(()=>{y(!1),Sr(T.current)},250)},[]);(0,_.useImperativeHandle)(m,()=>({shake:O}),[O]);let ne=(0,_.useCallback)(()=>{x(`exit`),D.current=W(()=>{s()},150)},[s]),k=(0,_.useCallback)(()=>{h.trim()&&o(h.trim())},[h,o]),A=(0,_.useCallback)(e=>{e.stopPropagation(),!e.nativeEvent.isComposing&&(e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),k()),e.key===`Escape`&&ne())},[k,ne]);return(0,H.jsxs)(`div`,{ref:E,className:[Gn.popup,f?Gn.light:``,b===`enter`?Gn.enter:``,b===`entered`?Gn.entered:``,b===`exit`?Gn.exit:``,v?Gn.shake:``].filter(Boolean).join(` `),"data-annotation-popup":!0,style:l,onClick:e=>e.stopPropagation(),children:[(0,H.jsxs)(`div`,{className:Gn.header,children:[p&&Object.keys(p).length>0?(0,H.jsxs)(`button`,{className:Gn.headerToggle,onClick:()=>{let e=w;ee(!w),e&&W(()=>Sr(T.current),0)},type:`button`,children:[(0,H.jsx)(`svg`,{className:`${Gn.chevron} ${w?Gn.expanded:``}`,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,H.jsx)(`path`,{d:`M5.5 10.25L9 7.25L5.75 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,H.jsx)(`span`,{className:Gn.element,children:e})]}):(0,H.jsx)(`span`,{className:Gn.element,children:e}),t&&(0,H.jsx)(`span`,{className:Gn.timestamp,children:t})]}),p&&Object.keys(p).length>0&&(0,H.jsx)(`div`,{className:`${Gn.stylesWrapper} ${w?Gn.expanded:``}`,children:(0,H.jsx)(`div`,{className:Gn.stylesInner,children:(0,H.jsx)(`div`,{className:Gn.stylesBlock,children:Object.entries(p).map(([e,t])=>(0,H.jsxs)(`div`,{className:Gn.styleLine,children:[(0,H.jsx)(`span`,{className:Gn.styleProperty,children:e.replace(/([A-Z])/g,`-$1`).toLowerCase()}),`: `,(0,H.jsx)(`span`,{className:Gn.styleValue,children:t}),`;`]},e))})})}),n&&(0,H.jsxs)(`div`,{className:Gn.quote,children:[`“`,n.slice(0,80),n.length>80?`...`:``,`”`]}),(0,H.jsx)(`textarea`,{ref:T,className:Gn.textarea,style:{borderColor:S?u:void 0},placeholder:r,value:h,onChange:e=>g(e.target.value),onFocus:()=>C(!0),onBlur:()=>C(!1),rows:2,onKeyDown:A}),(0,H.jsxs)(`div`,{className:Gn.actions,children:[c&&(0,H.jsx)(`div`,{className:Gn.deleteWrapper,children:(0,H.jsx)(`button`,{className:Gn.deleteButton,onClick:c,type:`button`,children:(0,H.jsx)(lr,{size:22})})}),(0,H.jsx)(`button`,{className:Gn.cancel,onClick:ne,children:`Cancel`}),(0,H.jsx)(`button`,{className:Gn.submit,style:{backgroundColor:u,opacity:h.trim()?1:.4},onClick:k,disabled:!h.trim(),children:a})]})]})}),wr=({content:e,children:t,...n})=>{let[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)({top:0,right:0}),l=(0,_.useRef)(null),u=(0,_.useRef)(null),d=(0,_.useRef)(null),f=()=>{if(l.current){let e=l.current.getBoundingClientRect();c({top:e.top+e.height/2,right:window.innerWidth-e.left+8})}};return(0,_.useEffect)(()=>()=>{u.current&&clearTimeout(u.current),d.current&&clearTimeout(d.current)},[]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{ref:l,onMouseEnter:()=>{o(!0),d.current&&=(clearTimeout(d.current),null),f(),u.current=W(()=>{i(!0)},500)},onMouseLeave:()=>{u.current&&=(clearTimeout(u.current),null),i(!1),d.current=W(()=>{o(!1)},150)},...n,children:t}),a&&(0,y.createPortal)((0,H.jsx)(`div`,{"data-feedback-toolbar":!0,style:{position:`fixed`,top:s.top,right:s.right,transform:`translateY(-50%)`,padding:`6px 10px`,background:`#383838`,color:`rgba(255, 255, 255, 0.7)`,fontSize:`11px`,fontWeight:400,lineHeight:`14px`,borderRadius:`10px`,width:`180px`,textAlign:`left`,zIndex:100020,pointerEvents:`none`,boxShadow:`0px 1px 8px rgba(0, 0, 0, 0.28)`,opacity:+!!r,transition:`opacity 0.15s ease`},children:e}),document.body)]})},Tr=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Er={tooltip:`styles-module__tooltip___mcXL2`,tooltipIcon:`styles-module__tooltipIcon___Nq2nD`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-help-tooltip-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-help-tooltip-styles`,document.head.appendChild(e)),e.textContent=Tr}var Dr=Er,Or=({content:e})=>(0,H.jsx)(wr,{className:Dr.tooltip,content:e,children:(0,H.jsx)(Zn,{className:Dr.tooltipIcon})}),G={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},kr=[{section:`Layout`,items:[{type:`navigation`,label:`Navigation`,...G.navigation},{type:`header`,label:`Header`,...G.header},{type:`hero`,label:`Hero`,...G.hero},{type:`section`,label:`Section`,...G.section},{type:`sidebar`,label:`Sidebar`,...G.sidebar},{type:`footer`,label:`Footer`,...G.footer},{type:`modal`,label:`Modal`,...G.modal},{type:`banner`,label:`Banner`,...G.banner},{type:`drawer`,label:`Drawer`,...G.drawer},{type:`popover`,label:`Popover`,...G.popover},{type:`divider`,label:`Divider`,...G.divider}]},{section:`Content`,items:[{type:`card`,label:`Card`,...G.card},{type:`text`,label:`Text`,...G.text},{type:`image`,label:`Image`,...G.image},{type:`video`,label:`Video`,...G.video},{type:`table`,label:`Table`,...G.table},{type:`grid`,label:`Grid`,...G.grid},{type:`list`,label:`List`,...G.list},{type:`chart`,label:`Chart`,...G.chart},{type:`codeBlock`,label:`Code Block`,...G.codeBlock},{type:`map`,label:`Map`,...G.map},{type:`timeline`,label:`Timeline`,...G.timeline},{type:`calendar`,label:`Calendar`,...G.calendar},{type:`accordion`,label:`Accordion`,...G.accordion},{type:`carousel`,label:`Carousel`,...G.carousel},{type:`logo`,label:`Logo`,...G.logo},{type:`faq`,label:`FAQ`,...G.faq},{type:`gallery`,label:`Gallery`,...G.gallery}]},{section:`Controls`,items:[{type:`button`,label:`Button`,...G.button},{type:`input`,label:`Input`,...G.input},{type:`search`,label:`Search`,...G.search},{type:`form`,label:`Form`,...G.form},{type:`tabs`,label:`Tabs`,...G.tabs},{type:`dropdown`,label:`Dropdown`,...G.dropdown},{type:`toggle`,label:`Toggle`,...G.toggle},{type:`stepper`,label:`Stepper`,...G.stepper},{type:`rating`,label:`Rating`,...G.rating},{type:`fileUpload`,label:`File Upload`,...G.fileUpload},{type:`checkbox`,label:`Checkbox`,...G.checkbox},{type:`radio`,label:`Radio`,...G.radio},{type:`slider`,label:`Slider`,...G.slider},{type:`datePicker`,label:`Date Picker`,...G.datePicker}]},{section:`Elements`,items:[{type:`avatar`,label:`Avatar`,...G.avatar},{type:`badge`,label:`Badge`,...G.badge},{type:`tag`,label:`Tag`,...G.tag},{type:`breadcrumb`,label:`Breadcrumb`,...G.breadcrumb},{type:`pagination`,label:`Pagination`,...G.pagination},{type:`progress`,label:`Progress`,...G.progress},{type:`alert`,label:`Alert`,...G.alert},{type:`toast`,label:`Toast`,...G.toast},{type:`notification`,label:`Notification`,...G.notification},{type:`tooltip`,label:`Tooltip`,...G.tooltip},{type:`stat`,label:`Stat`,...G.stat},{type:`skeleton`,label:`Skeleton`,...G.skeleton},{type:`chip`,label:`Chip`,...G.chip},{type:`icon`,label:`Icon`,...G.icon},{type:`spinner`,label:`Spinner`,...G.spinner}]},{section:`Blocks`,items:[{type:`pricing`,label:`Pricing`,...G.pricing},{type:`testimonial`,label:`Testimonial`,...G.testimonial},{type:`cta`,label:`CTA`,...G.cta},{type:`productCard`,label:`Product Card`,...G.productCard},{type:`profile`,label:`Profile`,...G.profile},{type:`feature`,label:`Feature`,...G.feature},{type:`team`,label:`Team`,...G.team},{type:`login`,label:`Login`,...G.login},{type:`contact`,label:`Contact`,...G.contact}]}],Ar={};for(let e of kr)for(let t of e.items)Ar[t.type]=t;function K({w:e,h:t=3,strong:n}){return(0,H.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:t,borderRadius:2,background:n?`var(--agd-bar-strong)`:`var(--agd-bar)`,flexShrink:0}})}function jr({w:e,h:t,radius:n=3,style:r}){return(0,H.jsx)(`div`,{style:{width:typeof e==`number`?`${e}px`:e,height:typeof t==`number`?`${t}px`:t,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0,...r}})}function Mr({size:e}){return(0,H.jsx)(`div`,{style:{width:e,height:e,borderRadius:`50%`,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,flexShrink:0}})}function Nr({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,padding:`0 ${Math.max(8,t*.2)}px`,gap:e*.02},children:[(0,H.jsx)(jr,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginLeft:e*.04},children:[(0,H.jsx)(K,{w:e*.06}),(0,H.jsx)(K,{w:e*.07}),(0,H.jsx)(K,{w:e*.05}),(0,H.jsx)(K,{w:e*.06})]}),(0,H.jsx)(jr,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function Pr({width:e,height:t,text:n}){return(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.05},children:[n?(0,H.jsx)(`span`,{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:`var(--agd-text-3)`,textAlign:`center`,maxWidth:`80%`},children:n}):(0,H.jsx)(K,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,H.jsx)(K,{w:e*.6}),(0,H.jsx)(K,{w:e*.4}),(0,H.jsx)(jr,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function Fr({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,H.jsxs)(`div`,{style:{padding:e*.08,display:`flex`,flexDirection:`column`,gap:t*.03},children:[(0,H.jsx)(K,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(t,n)=>(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,H.jsx)(jr,{w:10,h:10,radius:2}),(0,H.jsx)(K,{w:e*(.4+n*17%30/100)})]},n))]})}function Ir({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,H.jsx)(`div`,{style:{display:`flex`,padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(e,t)=>(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,H.jsx)(K,{w:`60%`,h:3,strong:!0}),(0,H.jsx)(K,{w:`80%`,h:2}),(0,H.jsx)(K,{w:`70%`,h:2}),(0,H.jsx)(K,{w:`60%`,h:2})]},t))})}function Lr({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,H.jsxs)(`div`,{style:{padding:`10px 12px`,borderBottom:`1px solid var(--agd-stroke)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,H.jsx)(K,{w:e*.3,h:4,strong:!0}),(0,H.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),(0,H.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,H.jsx)(K,{w:`90%`}),(0,H.jsx)(K,{w:`70%`}),(0,H.jsx)(K,{w:`80%`})]}),(0,H.jsxs)(`div`,{style:{padding:`10px 12px`,borderTop:`1px solid var(--agd-stroke)`,display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,H.jsx)(jr,{w:70,h:26,radius:4}),(0,H.jsx)(jr,{w:70,h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})}function Rr({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,H.jsx)(`div`,{style:{height:`40%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,H.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,H.jsx)(K,{w:`70%`,h:4,strong:!0}),(0,H.jsx)(K,{w:`95%`,h:2}),(0,H.jsx)(K,{w:`85%`,h:2}),(0,H.jsx)(K,{w:`50%`,h:2})]})]})}function zr({width:e,height:t,text:n}){if(n)return(0,H.jsx)(`div`,{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:`var(--agd-text-3)`,wordBreak:`break-word`,overflow:`hidden`},children:n});let r=Math.max(2,Math.floor(t/18));return(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,padding:4},children:[(0,H.jsx)(K,{w:e*.6,h:5,strong:!0}),Array.from({length:r},(e,t)=>(0,H.jsx)(K,{w:`${70+t*13%25}%`,h:2},t))]})}function Br({width:e,height:t}){return(0,H.jsx)(`div`,{style:{height:`100%`,position:`relative`},children:(0,H.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:`none`,fill:`none`,children:[(0,H.jsx)(`line`,{x1:`0`,y1:`0`,x2:e,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,H.jsx)(`line`,{x1:e,y1:`0`,x2:`0`,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,H.jsx)(`circle`,{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:`var(--agd-fill)`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`})]})})}function Vr({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),r=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,H.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid var(--agd-stroke)`,padding:`6px 0`},children:Array.from({length:n},(e,t)=>(0,H.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,H.jsx)(K,{w:`70%`,h:3,strong:!0})},t))}),Array.from({length:r},(e,t)=>(0,H.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid rgba(255,255,255,0.03)`,padding:`6px 0`},children:Array.from({length:n},(e,n)=>(0,H.jsx)(`div`,{style:{flex:1,padding:`0 8px`},children:(0,H.jsx)(K,{w:`${50+(t*7+n*13)%40}%`,h:2})},n))},t))]})}function Hr({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,H.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,padding:4},children:Array.from({length:n},(e,t)=>(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,padding:`4px 0`},children:[(0,H.jsx)(Mr,{size:8}),(0,H.jsx)(K,{w:`${55+t*17%35}%`,h:2})]},t))})}function Ur({width:e,height:t,text:n}){return(0,H.jsx)(`div`,{style:{height:`100%`,borderRadius:Math.min(8,t/3),border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:n?(0,H.jsx)(`span`,{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:`var(--agd-text-3)`,letterSpacing:`-0.01em`},children:n}):(0,H.jsx)(K,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Wr({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,height:`100%`,justifyContent:`center`},children:[(0,H.jsx)(K,{w:Math.min(80,e*.3),h:2}),(0,H.jsx)(`div`,{style:{height:Math.min(36,t*.6),borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,paddingLeft:8},children:(0,H.jsx)(K,{w:`40%`,h:2})})]})}function Gr({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t*.04,padding:8},children:[Array.from({length:n},(e,t)=>(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,H.jsx)(K,{w:60+t*17%30,h:2}),(0,H.jsx)(jr,{w:`100%`,h:28,radius:4})]},t)),(0,H.jsx)(jr,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}function Kr({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,H.jsx)(`div`,{style:{display:`flex`,gap:2,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,H.jsx)(`div`,{style:{padding:`8px 12px`,borderBottom:t===0?`2px solid var(--agd-bar-strong)`:`none`},children:(0,H.jsx)(K,{w:60,h:3,strong:t===0})},t))}),(0,H.jsxs)(`div`,{style:{flex:1,padding:12,display:`flex`,flexDirection:`column`,gap:6},children:[(0,H.jsx)(K,{w:`80%`,h:2}),(0,H.jsx)(K,{w:`65%`,h:2}),(0,H.jsx)(K,{w:`75%`,h:2})]})]})}function qr({width:e,height:t}){let n=Math.min(e,t)/2;return(0,H.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:e/2,cy:t/2,r:n-1,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`1.5`,strokeDasharray:`3 2`}),(0,H.jsx)(`circle`,{cx:e/2,cy:t*.38,r:n*.28,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`}),(0,H.jsx)(`path`,{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:`var(--agd-stroke)`,fill:`var(--agd-fill)`,strokeWidth:`0.8`})]})}function Jr({width:e,height:t}){return(0,H.jsx)(`div`,{style:{height:`100%`,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,H.jsx)(K,{w:Math.max(16,e*.5),h:2,strong:!0})})}function Yr({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,H.jsx)(K,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,H.jsx)(K,{w:e*.35})]})}function Xr({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,gap:t*.04,padding:e*.04},children:[(0,H.jsx)(K,{w:e*.3,h:4,strong:!0}),(0,H.jsx)(K,{w:e*.7}),(0,H.jsx)(K,{w:e*.5}),(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:e*.03,marginTop:t*.06},children:[(0,H.jsx)(jr,{w:`33%`,h:`100%`,radius:4}),(0,H.jsx)(jr,{w:`33%`,h:`100%`,radius:4}),(0,H.jsx)(jr,{w:`33%`,h:`100%`,radius:4})]})]})}function Zr({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,H.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:6,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,H.jsx)(jr,{w:`100%`,h:`100%`,radius:4},t))})}function Qr({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,H.jsx)(`div`,{style:{padding:`6px 8px`,borderBottom:`1px solid var(--agd-stroke)`},children:(0,H.jsx)(K,{w:e*.5,h:3,strong:!0})}),(0,H.jsx)(`div`,{style:{flex:1,padding:4,display:`flex`,flexDirection:`column`,gap:2},children:Array.from({length:n},(e,t)=>(0,H.jsx)(`div`,{style:{padding:`4px 6px`,borderRadius:3,background:t===0?`var(--agd-fill)`:`transparent`},children:(0,H.jsx)(K,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))})]})}function $r({width:e,height:t}){let n=Math.min(e,t)/2;return(0,H.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`1`,width:e-2,height:t-2,rx:n,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,H.jsx)(`circle`,{cx:e-n,cy:t/2,r:n*.7,fill:`var(--agd-bar)`})]})}function ei({width:e,height:t}){let n=Math.min(t/2,20);return(0,H.jsxs)(`div`,{style:{height:`100%`,borderRadius:n,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${n*.6}px`,gap:6},children:[(0,H.jsx)(Mr,{size:Math.min(14,t*.4)}),(0,H.jsx)(K,{w:`50%`,h:2})]})}function ti({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,H.jsx)(Mr,{size:Math.min(20,t*.5)}),(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,H.jsx)(K,{w:`60%`,h:3,strong:!0}),(0,H.jsx)(K,{w:`80%`,h:2})]}),(0,H.jsx)(`div`,{style:{width:14,height:14,border:`1px solid var(--agd-stroke)`,borderRadius:3,flexShrink:0}})]})}function ni({width:e,height:t}){return(0,H.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`0`,y:`0`,width:e,height:t,rx:t/2,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`}),(0,H.jsx)(`rect`,{x:`1`,y:`1`,width:e*.65,height:t-2,rx:(t-2)/2,fill:`var(--agd-bar)`})]})}function ri({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),r=e/(n*2);return(0,H.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`flex-end`,justifyContent:`space-around`,padding:`0 4px`,borderBottom:`1px solid var(--agd-stroke)`},children:Array.from({length:n},(e,t)=>(0,H.jsx)(jr,{w:r,h:`${30+(t*37+17)%55}%`,radius:2},t))})}function ii({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,H.jsxs)(`div`,{style:{height:`100%`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,H.jsx)(jr,{w:`100%`,h:`100%`,radius:4}),(0,H.jsx)(`div`,{style:{position:`absolute`,width:n*2,height:n*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,H.jsx)(`div`,{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function ai({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,H.jsx)(`div`,{style:{flex:1,width:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,H.jsx)(K,{w:`60%`,h:2})}),(0,H.jsx)(`div`,{style:{width:8,height:8,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-5}})]})}function oi({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,H.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[t>0&&(0,H.jsx)(`span`,{style:{color:`var(--agd-stroke)`,fontSize:10},children:`/`}),(0,H.jsx)(K,{w:40+t*13%20,h:2,strong:t===n-1})]},t))})}function si({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),r=Math.min(28,t*.8);return(0,H.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:4},children:Array.from({length:n},(e,t)=>(0,H.jsx)(jr,{w:r,h:r,radius:4,style:t===1?{background:`var(--agd-bar)`}:void 0},t))})}function ci({width:e}){return(0,H.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`100%`},children:(0,H.jsx)(`div`,{style:{width:`100%`,height:1,background:`var(--agd-stroke)`}})})}function li({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,H.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(e,t)=>(0,H.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:t===0?2:1},children:[(0,H.jsx)(K,{w:`${40+t*17%25}%`,h:3,strong:!0}),(0,H.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:t===0?`▼`:`▶`})]},t))})}function ui({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:6},children:[(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,gap:6,alignItems:`center`},children:[(0,H.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`‹`}),(0,H.jsx)(jr,{w:`100%`,h:`100%`,radius:4}),(0,H.jsx)(`span`,{style:{fontSize:12,color:`var(--agd-stroke)`},children:`›`})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`center`,gap:4},children:[(0,H.jsx)(Mr,{size:5}),(0,H.jsx)(Mr,{size:5}),(0,H.jsx)(Mr,{size:5})]})]})}function di({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:10,gap:t*.04},children:[(0,H.jsx)(K,{w:e*.4,h:3,strong:!0}),(0,H.jsx)(K,{w:e*.3,h:6,strong:!0}),(0,H.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4,width:`100%`,padding:`8px 0`},children:Array.from({length:4},(e,t)=>(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:4},children:[(0,H.jsx)(Mr,{size:5}),(0,H.jsx)(K,{w:`${50+t*17%35}%`,h:2})]},t))}),(0,H.jsx)(jr,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:`var(--agd-bar)`}})]})}function fi({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:10,gap:8},children:[(0,H.jsx)(`span`,{style:{fontSize:18,lineHeight:1,color:`var(--agd-stroke)`,fontFamily:`serif`},children:`“`}),(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,H.jsx)(K,{w:`90%`,h:2}),(0,H.jsx)(K,{w:`75%`,h:2}),(0,H.jsx)(K,{w:`60%`,h:2})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,H.jsx)(Mr,{size:20}),(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,H.jsx)(K,{w:60,h:3,strong:!0}),(0,H.jsx)(K,{w:40,h:2})]})]})]})}function pi({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:t*.08},children:[(0,H.jsx)(K,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,H.jsx)(K,{w:e*.35}),(0,H.jsx)(jr,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:`var(--agd-bar)`}})]})}function mi({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,H.jsx)(`div`,{style:{width:16,height:16,borderRadius:`50%`,border:`1.5px solid var(--agd-bar-strong)`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:(0,H.jsx)(`div`,{style:{width:2,height:6,background:`var(--agd-bar-strong)`,borderRadius:1}})}),(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,H.jsx)(K,{w:`40%`,h:3,strong:!0}),(0,H.jsx)(K,{w:`70%`,h:2})]})]})}function hi({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:8,padding:`0 12px`},children:[(0,H.jsx)(K,{w:e*.4,h:3,strong:!0}),(0,H.jsx)(jr,{w:60,h:Math.min(24,t*.6),radius:4})]})}function gi({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,H.jsx)(K,{w:e*.5,h:2}),(0,H.jsx)(K,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,H.jsx)(K,{w:e*.3,h:2})]})}function _i({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),r=Math.min(12,t*.35);return(0,H.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,height:`100%`,padding:`0 8px`},children:Array.from({length:n},(e,t)=>(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:0,flex:1},children:[(0,H.jsx)(`div`,{style:{width:r,height:r,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:t===0?`var(--agd-bar)`:`transparent`,flexShrink:0}}),t<n-1&&(0,H.jsx)(`div`,{style:{flex:1,height:1,background:`var(--agd-stroke)`,margin:`0 4px`}})]},t))})}function vi({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,borderRadius:4,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:4,padding:`0 6px`},children:[(0,H.jsx)(K,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,H.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0}})]})}function yi({width:e,height:t}){let n=Math.min(t*.7,e/(5*1.5));return(0,H.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:n*.2},children:Array.from({length:5},(e,t)=>(0,H.jsx)(`svg`,{width:n,height:n,viewBox:`0 0 16 16`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z`,stroke:`var(--agd-stroke)`,strokeWidth:`0.8`,fill:t<3?`var(--agd-bar)`:`none`})},t))})}function bi({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,position:`relative`,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,overflow:`hidden`},children:[(0,H.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,style:{position:`absolute`,inset:0},children:[(0,H.jsx)(`line`,{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.2`}),(0,H.jsx)(`line`,{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`}),(0,H.jsx)(`line`,{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`,opacity:`.15`})]}),(0,H.jsx)(`div`,{style:{position:`absolute`,left:`50%`,top:`40%`,transform:`translate(-50%, -100%)`},children:(0,H.jsxs)(`svg`,{width:`16`,height:`22`,viewBox:`0 0 16 22`,fill:`none`,children:[(0,H.jsx)(`path`,{d:`M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z`,fill:`var(--agd-bar)`,opacity:`.4`}),(0,H.jsx)(`circle`,{cx:`8`,cy:`8`,r:`3`,fill:`var(--agd-fill)`})]})})]})}function xi({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,H.jsxs)(`div`,{style:{display:`flex`,height:`100%`,padding:`8px 0`},children:[(0,H.jsx)(`div`,{style:{width:16,display:`flex`,flexDirection:`column`,alignItems:`center`},children:Array.from({length:n},(e,t)=>(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,flex:1},children:[(0,H.jsx)(Mr,{size:8}),t<n-1&&(0,H.jsx)(`div`,{style:{flex:1,width:1,background:`var(--agd-stroke)`}})]},t))}),(0,H.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`space-around`,paddingLeft:8},children:Array.from({length:n},(e,t)=>(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,H.jsx)(K,{w:`${35+t*13%25}%`,h:3,strong:!0}),(0,H.jsx)(K,{w:`${50+t*17%30}%`,h:2})]},t))})]})}function Si({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`2px dashed var(--agd-stroke)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,H.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,H.jsx)(`path`,{d:`M12 16V4m0 0l-4 4m4-4l4 4`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,H.jsx)(`path`,{d:`M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2`,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`})]}),(0,H.jsx)(K,{w:e*.4,h:2}),(0,H.jsx)(K,{w:e*.25,h:2})]})}function Ci({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,H.jsxs)(`div`,{style:{height:`100%`,borderRadius:6,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,padding:8,display:`flex`,flexDirection:`column`,gap:4},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,gap:3,marginBottom:4},children:[(0,H.jsx)(Mr,{size:6}),(0,H.jsx)(Mr,{size:6}),(0,H.jsx)(Mr,{size:6})]}),Array.from({length:n},(e,t)=>(0,H.jsx)(`div`,{style:{display:`flex`,gap:6,paddingLeft:t>0&&t<n-1?12:0},children:(0,H.jsx)(K,{w:`${25+t*23%50}%`,h:2,strong:t===0})},t))]})}function wi({width:e,height:t}){let n=Math.min((e-16)/7,(t-40)/6);return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`6px 8px`},children:[(0,H.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`‹`}),(0,H.jsx)(K,{w:e*.3,h:3,strong:!0}),(0,H.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:`›`})]}),(0,H.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:2,padding:`0 4px`,flex:1},children:[Array.from({length:7},(e,t)=>(0,H.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n*.6},children:(0,H.jsx)(K,{w:n*.5,h:2})},`h${t}`)),Array.from({length:35},(e,t)=>(0,H.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:n},children:(0,H.jsx)(`div`,{style:{width:n*.6,height:n*.6,borderRadius:`50%`,background:t===12?`var(--agd-bar)`:`transparent`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,H.jsx)(`div`,{style:{width:2,height:2,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===12?1:.3}})})},t))]})]})}function Ti({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 10px`,gap:8},children:[(0,H.jsx)(Mr,{size:Math.min(32,t*.55)}),(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,H.jsx)(K,{w:`50%`,h:3,strong:!0}),(0,H.jsx)(K,{w:`75%`,h:2})]}),(0,H.jsx)(K,{w:30,h:2})]})}function Ei({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,H.jsx)(`div`,{style:{height:`50%`,background:`var(--agd-fill)`,borderBottom:`1px dashed var(--agd-stroke)`}}),(0,H.jsxs)(`div`,{style:{flex:1,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,H.jsx)(K,{w:`65%`,h:4,strong:!0}),(0,H.jsx)(K,{w:`40%`,h:3}),(0,H.jsx)(`div`,{style:{flex:1}}),(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,H.jsx)(K,{w:`30%`,h:5,strong:!0}),(0,H.jsx)(jr,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:`var(--agd-bar)`}})]})]})]})}function Di({width:e,height:t}){let n=Math.min(48,t*.3);return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:t*.06},children:[(0,H.jsx)(Mr,{size:n}),(0,H.jsx)(K,{w:e*.45,h:4,strong:!0}),(0,H.jsx)(K,{w:e*.3,h:2}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:e*.08,marginTop:t*.04},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,H.jsx)(K,{w:20,h:3,strong:!0}),(0,H.jsx)(K,{w:28,h:2})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,H.jsx)(K,{w:20,h:3,strong:!0}),(0,H.jsx)(K,{w:28,h:2})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:2},children:[(0,H.jsx)(K,{w:20,h:3,strong:!0}),(0,H.jsx)(K,{w:28,h:2})]})]})]})}function Oi({width:e,height:t}){let n=Math.max(e*.6,80),r=Math.max(3,Math.floor(t/40));return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`},children:[(0,H.jsx)(`div`,{style:{width:e-n,background:`var(--agd-fill)`,opacity:.3}}),(0,H.jsxs)(`div`,{style:{flex:1,borderLeft:`1px solid var(--agd-stroke)`,display:`flex`,flexDirection:`column`,padding:e*.04},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:t*.06},children:[(0,H.jsx)(K,{w:n*.4,h:4,strong:!0}),(0,H.jsx)(`div`,{style:{width:12,height:12,border:`1px solid var(--agd-stroke)`,borderRadius:3}})]}),Array.from({length:r},(e,t)=>(0,H.jsx)(`div`,{style:{padding:`6px 0`},children:(0,H.jsx)(K,{w:`${50+t*17%35}%`,h:2,strong:t===0})},t))]})]})}function ki({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`},children:[(0,H.jsxs)(`div`,{style:{flex:1,width:`100%`,borderRadius:8,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,padding:10,display:`flex`,flexDirection:`column`,gap:5},children:[(0,H.jsx)(K,{w:`70%`,h:3,strong:!0}),(0,H.jsx)(K,{w:`90%`,h:2}),(0,H.jsx)(K,{w:`60%`,h:2})]}),(0,H.jsx)(`div`,{style:{width:10,height:10,background:`var(--agd-fill)`,border:`1px dashed var(--agd-stroke)`,borderTop:`none`,borderLeft:`none`,transform:`rotate(45deg)`,marginTop:-6}})]})}function Ai({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:e*.08},children:[(0,H.jsx)(jr,{w:n,h:n,radius:n*.25}),(0,H.jsx)(K,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function ji({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,H.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`},children:Array.from({length:n},(t,n)=>(0,H.jsxs)(`div`,{style:{borderBottom:`1px solid var(--agd-stroke)`,padding:`8px 6px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flex:n===0?2:1},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,H.jsx)(`span`,{style:{fontSize:9,fontWeight:700,color:`var(--agd-stroke)`},children:`Q`}),(0,H.jsx)(K,{w:e*(.3+n*13%25/100),h:3,strong:!0})]}),(0,H.jsx)(`span`,{style:{fontSize:8,color:`var(--agd-stroke)`},children:n===0?`▼`:`▶`})]},n))})}function Mi({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,H.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:4,height:`100%`},children:Array.from({length:n*r},(e,t)=>(0,H.jsx)(`div`,{style:{borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,position:`relative`,overflow:`hidden`},children:(0,H.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 100 100`,preserveAspectRatio:`none`,fill:`none`,children:[(0,H.jsx)(`line`,{x1:`0`,y1:`0`,x2:`100`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`}),(0,H.jsx)(`line`,{x1:`100`,y1:`0`,x2:`0`,y2:`100`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})},t))})}function Ni({width:e,height:t}){let n=Math.min(e,t);return(0,H.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,H.jsx)(`path`,{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:`var(--agd-bar)`,strokeWidth:`1.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function Pi({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,H.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`}),(0,H.jsx)(`circle`,{cx:e/2,cy:t/2,r:n*.45,fill:`var(--agd-bar)`})]})}function Fi({width:e,height:t}){let n=Math.max(2,t*.12),r=Math.min(t*.35,10),i=e*.55;return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,position:`relative`},children:[(0,H.jsx)(`div`,{style:{width:`100%`,height:n,borderRadius:n/2,background:`var(--agd-fill)`,border:`1px solid var(--agd-stroke)`,position:`relative`},children:(0,H.jsx)(`div`,{style:{width:i,height:`100%`,borderRadius:n/2,background:`var(--agd-bar)`}})}),(0,H.jsx)(`div`,{style:{position:`absolute`,left:i-r,width:r*2,height:r*2,borderRadius:`50%`,border:`1.5px solid var(--agd-stroke)`,background:`var(--agd-fill)`}})]})}function Ii({width:e,height:t}){let n=Math.min(36,t*.15),r=Math.min((e-16)/7,(t-n-40)/5);return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:4},children:[(0,H.jsxs)(`div`,{style:{height:n,borderRadius:4,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 8px`,justifyContent:`space-between`},children:[(0,H.jsx)(K,{w:`40%`,h:2}),(0,H.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`3`,width:`12`,height:`11`,rx:`1`,stroke:`var(--agd-stroke)`,strokeWidth:`1`}),(0,H.jsx)(`line`,{x1:`2`,y1:`6`,x2:`14`,y2:`6`,stroke:`var(--agd-stroke)`,strokeWidth:`0.5`})]})]}),(0,H.jsxs)(`div`,{style:{flex:1,borderRadius:6,border:`1px dashed var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,flexDirection:`column`},children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`4px 6px`},children:[(0,H.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`‹`}),(0,H.jsx)(K,{w:e*.25,h:2,strong:!0}),(0,H.jsx)(`span`,{style:{fontSize:7,color:`var(--agd-stroke)`},children:`›`})]}),(0,H.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(7, 1fr)`,gap:1,padding:`0 4px`,flex:1},children:Array.from({length:28},(e,t)=>(0,H.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:r},children:(0,H.jsx)(`div`,{style:{width:r*.5,height:r*.5,borderRadius:`50%`,background:t===10?`var(--agd-bar)`:`transparent`},children:(0,H.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,H.jsx)(`div`,{style:{width:1.5,height:1.5,borderRadius:1,background:`var(--agd-bar-strong)`,opacity:t===10?1:.25}})})})},t))})]})]})}function Li({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:t*.08,padding:4},children:[(0,H.jsx)(`div`,{style:{width:`100%`,height:t*.2,borderRadius:4,background:`var(--agd-fill)`}}),(0,H.jsx)(`div`,{style:{width:`70%`,height:Math.max(6,t*.1),borderRadius:3,background:`var(--agd-fill)`}}),(0,H.jsx)(`div`,{style:{width:`90%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}}),(0,H.jsx)(`div`,{style:{width:`50%`,height:Math.max(4,t*.06),borderRadius:3,background:`var(--agd-fill)`}})]})}function Ri({width:e,height:t}){return(0,H.jsx)(`div`,{style:{height:`100%`,display:`flex`,alignItems:`center`,gap:6},children:(0,H.jsxs)(`div`,{style:{height:`100%`,flex:1,borderRadius:t/2,border:`1px solid var(--agd-stroke)`,background:`var(--agd-fill)`,display:`flex`,alignItems:`center`,padding:`0 ${t*.3}px`,gap:4},children:[(0,H.jsx)(K,{w:`60%`,h:2,strong:!0}),(0,H.jsx)(`div`,{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:`50%`,border:`1px solid var(--agd-stroke)`,flexShrink:0,marginLeft:`auto`}})]})})}function zi({width:e,height:t}){let n=Math.min(e,t);return(0,H.jsx)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:`var(--agd-stroke)`,strokeWidth:`1`,fill:`var(--agd-fill)`})})}function Bi({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,H.jsxs)(`svg`,{width:`100%`,height:`100%`,viewBox:`0 0 ${e} ${t}`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:e/2,cy:t/2,r:n,stroke:`var(--agd-stroke)`,strokeWidth:`1.5`,opacity:`.2`}),(0,H.jsx)(`path`,{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:`var(--agd-bar-strong)`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}function Vi({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),r=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,H.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,justifyContent:`space-around`,padding:8},children:Array.from({length:r},(t,r)=>(0,H.jsxs)(`div`,{style:{display:`flex`,gap:e*.04,alignItems:`flex-start`},children:[(0,H.jsx)(jr,{w:n,h:n,radius:n*.25}),(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:4},children:[(0,H.jsx)(K,{w:`${40+r*13%20}%`,h:3,strong:!0}),(0,H.jsx)(K,{w:`${60+r*17%25}%`,h:2})]})]},r))})}function Hi({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.min(36,t*.25);return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:t*.06,padding:t*.06},children:[(0,H.jsx)(K,{w:e*.3,h:4,strong:!0}),(0,H.jsx)(`div`,{style:{display:`flex`,gap:e*.06,justifyContent:`center`,flex:1,alignItems:`center`},children:Array.from({length:n},(t,n)=>(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,H.jsx)(Mr,{size:r}),(0,H.jsx)(K,{w:e*.12,h:3,strong:!0}),(0,H.jsx)(K,{w:e*.08,h:2})]},n))})]})}function Ui({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,alignItems:`center`,padding:e*.06,gap:t*.04},children:[(0,H.jsx)(K,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,H.jsx)(K,{w:e*.35,h:2}),(0,H.jsx)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(n,r)=>(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,H.jsx)(K,{w:Math.min(60,e*.2),h:2}),(0,H.jsx)(jr,{w:`100%`,h:Math.min(32,t*.1),radius:4})]},r))}),(0,H.jsx)(jr,{w:`100%`,h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:`var(--agd-bar)`}}),(0,H.jsx)(K,{w:e*.4,h:2})]})}function Wi({width:e,height:t}){return(0,H.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,padding:e*.04,gap:t*.03},children:[(0,H.jsx)(K,{w:e*.4,h:4,strong:!0}),(0,H.jsx)(K,{w:e*.6,h:2}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:6,marginTop:t*.03},children:[(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,H.jsx)(K,{w:50,h:2}),(0,H.jsx)(jr,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,H.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:3},children:[(0,H.jsx)(K,{w:40,h:2}),(0,H.jsx)(jr,{w:`100%`,h:Math.min(28,t*.1),radius:4})]})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3},children:[(0,H.jsx)(K,{w:50,h:2}),(0,H.jsx)(jr,{w:`100%`,h:Math.min(28,t*.1),radius:4})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3,flex:1},children:[(0,H.jsx)(K,{w:60,h:2}),(0,H.jsx)(jr,{w:`100%`,h:`100%`,radius:4})]}),(0,H.jsx)(jr,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:`flex-end`,background:`var(--agd-bar)`}})]})}var Gi={navigation:Nr,hero:Pr,sidebar:Fr,footer:Ir,modal:Lr,card:Rr,text:zr,image:Br,table:Vr,list:Hr,button:Ur,input:Wr,form:Gr,tabs:Kr,avatar:qr,badge:Jr,header:Yr,section:Xr,grid:Zr,dropdown:Qr,toggle:$r,search:ei,toast:ti,progress:ni,chart:ri,video:ii,tooltip:ai,breadcrumb:oi,pagination:si,divider:ci,accordion:li,carousel:ui,pricing:di,testimonial:fi,cta:pi,alert:mi,banner:hi,stat:gi,stepper:_i,tag:vi,rating:yi,map:bi,timeline:xi,fileUpload:Si,codeBlock:Ci,calendar:wi,notification:Ti,productCard:Ei,profile:Di,drawer:Oi,popover:ki,logo:Ai,faq:ji,gallery:Mi,checkbox:Ni,radio:Pi,slider:Fi,datePicker:Ii,skeleton:Li,chip:Ri,icon:zi,spinner:Bi,feature:Vi,team:Hi,login:Ui,contact:Wi};function Ki({type:e,width:t,height:n,text:r}){let i=Gi[e];return i?(0,H.jsx)(`div`,{style:{width:`100%`,height:`100%`,padding:8,position:`relative`,pointerEvents:`none`},children:(0,H.jsx)(i,{width:t,height:n,text:r})}):(0,H.jsx)(`div`,{style:{width:`100%`,height:`100%`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,H.jsx)(`span`,{style:{fontSize:10,fontWeight:600,color:`var(--agd-text-3)`,textTransform:`uppercase`,letterSpacing:`0.06em`,opacity:.5},children:e})})}var qi=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,Ji={overlayExiting:`styles-module__overlayExiting___iEmYr`,overlay:`styles-module__overlay___aWh-q`,overlayFadeIn:`styles-module__overlayFadeIn___aECVy`,light:`styles-module__light___ORIft`,wireframe:`styles-module__wireframe___itvQU`,placing:`styles-module__placing___45yD8`,passthrough:`styles-module__passthrough___xaFeE`,blankCanvas:`styles-module__blankCanvas___t2Eue`,visible:`styles-module__visible___OKKqX`,gridActive:`styles-module__gridActive___OZ-cf`,paletteHeader:`styles-module__paletteHeader___-Q5gQ`,paletteHeaderTitle:`styles-module__paletteHeaderTitle___oHqZC`,paletteHeaderDesc:`styles-module__paletteHeaderDesc___6i74T`,wireframePurposeWrap:`styles-module__wireframePurposeWrap___To-tS`,collapsed:`styles-module__collapsed___Ms9vS`,wireframePurposeInner:`styles-module__wireframePurposeInner___Lrahs`,wireframePurposeInput:`styles-module__wireframePurposeInput___7EtBN`,canvasToggle:`styles-module__canvasToggle___-QqSy`,active:`styles-module__active___hosp7`,canvasToggleIcon:`styles-module__canvasToggleIcon___7pJ82`,canvasToggleLabel:`styles-module__canvasToggleLabel___OanpY`,canvasPurposeWrap:`styles-module__canvasPurposeWrap___hj6zk`,canvasPurposeInner:`styles-module__canvasPurposeInner___VWiyu`,canvasPurposeToggle:`styles-module__canvasPurposeToggle___byDH2`,canvasPurposeCheck:`styles-module__canvasPurposeCheck___xqd7l`,checked:`styles-module__checked___-1JGH`,canvasPurposeLabel:`styles-module__canvasPurposeLabel___Zu-tD`,canvasPurposeHelp:`styles-module__canvasPurposeHelp___jijwR`,placement:`styles-module__placement___zcxv8`,placementEnter:`styles-module__placementEnter___TdRhf`,selected:`styles-module__selected___6yrp6`,dragging:`styles-module__dragging___le6KZ`,exiting:`styles-module__exiting___YrM8F`,placementContent:`styles-module__placementContent___f64A4`,placementLabel:`styles-module__placementLabel___0KvWl`,placementAnnotation:`styles-module__placementAnnotation___78pTr`,annotationVisible:`styles-module__annotationVisible___mrUyA`,sectionAnnotation:`styles-module__sectionAnnotation___aUIs0`,handle:`styles-module__handle___Ikbxm`,sectionOutline:`styles-module__sectionOutline___s0hy-`,ghostOutline:`styles-module__ghostOutline___po-kO`,handleNw:`styles-module__handleNw___4TMIj`,handleNe:`styles-module__handleNe___mnsTh`,handleSe:`styles-module__handleSe___oSFnk`,handleSw:`styles-module__handleSw___pi--Z`,handleN:`styles-module__handleN___aBA-Q`,handleE:`styles-module__handleE___0hM5u`,handleS:`styles-module__handleS___JjDRv`,handleW:`styles-module__handleW___ERWGQ`,edgeHandle:`styles-module__edgeHandle___XxXdT`,edgeN:`styles-module__edgeN___-JJDj`,edgeS:`styles-module__edgeS___66lMX`,edgeE:`styles-module__edgeE___1bGDa`,edgeW:`styles-module__edgeW___lHQNo`,deleteButton:`styles-module__deleteButton___LkGCb`,rearrangeOverlay:`styles-module__rearrangeOverlay___-3R3t`,drawBox:`styles-module__drawBox___BrVAa`,selectBox:`styles-module__selectBox___Iu8kB`,sizeIndicator:`styles-module__sizeIndicator___7zJ4y`,guideLine:`styles-module__guideLine___DUQY2`,dragPreview:`styles-module__dragPreview___onPbU`,dragPreviewWireframe:`styles-module__dragPreviewWireframe___jsg0G`,palette:`styles-module__palette___C7iSH`,paletteItem:`styles-module__paletteItem___6TlnA`,paletteItemLabel:`styles-module__paletteItemLabel___6ncO4`,paletteSectionTitle:`styles-module__paletteSectionTitle___PqnjX`,paletteFooter:`styles-module__paletteFooter___QYnAG`,enter:`styles-module__enter___6LYk5`,exit:`styles-module__exit___iSGRw`,paletteSection:`styles-module__paletteSection___V8DEA`,paletteItemIcon:`styles-module__paletteItemIcon___0NPQK`,placeScroll:`styles-module__placeScroll___7sClM`,fadeTop:`styles-module__fadeTop___KT9tF`,fadeBottom:`styles-module__fadeBottom___x3ShT`,paletteFooterWrap:`styles-module__paletteFooterWrap___71-fI`,footerHidden:`styles-module__footerHidden___fJUik`,paletteFooterInnerContent:`styles-module__paletteFooterInnerContent___VC26h`,paletteFooterInner:`styles-module__paletteFooterInner___dfylY`,paletteFooterCount:`styles-module__paletteFooterCount___D3Fia`,paletteFooterClear:`styles-module__paletteFooterClear___ybBoa`,paletteFooterActions:`styles-module__paletteFooterActions___fLzv8`,rollingWrap:`styles-module__rollingWrap___S75jM`,rollingNum:`styles-module__rollingNum___1RKDx`,exitUp:`styles-module__exitUp___AFDRW`,numExitUp:`styles-module__numExitUp___FRQqx`,enterUp:`styles-module__enterUp___CPlXb`,numEnterUp:`styles-module__numEnterUp___2Yd-w`,exitDown:`styles-module__exitDown___-1yAy`,numExitDown:`styles-module__numExitDown___xm5by`,enterDown:`styles-module__enterDown___DDuFR`,numEnterDown:`styles-module__numEnterDown___hpxBk`,hoverHighlight:`styles-module__hoverHighlight___8eT-v`,highlightFadeIn:`styles-module__highlightFadeIn___Lg7KY`,sectionEnter:`styles-module__sectionEnter___-8BXT`,settled:`styles-module__settled___b5U5o`,sectionLabel:`styles-module__sectionLabel___F80HQ`,movedBadge:`styles-module__movedBadge___s8z-q`,sectionDimensions:`styles-module__sectionDimensions___RcJSL`,badgeVisible:`styles-module__badgeVisible___npbdS`,resizedBadge:`styles-module__resizedBadge___u51V8`,wireframeNotice:`styles-module__wireframeNotice___4GJyB`,wireframeOpacityRow:`styles-module__wireframeOpacityRow___CJXzi`,wireframeOpacityLabel:`styles-module__wireframeOpacityLabel___afkfT`,wireframeOpacitySlider:`styles-module__wireframeOpacitySlider___YcoEs`,wireframeNoticeTitleRow:`styles-module__wireframeNoticeTitleRow___PJqyG`,wireframeNoticeTitle:`styles-module__wireframeNoticeTitle___okr08`,wireframeNoticeDivider:`styles-module__wireframeNoticeDivider___PNKQ6`,wireframeStartOver:`styles-module__wireframeStartOver___YFk-I`,ghostEnter:`styles-module__ghostEnter___EC3Mb`,ghostBadge:`styles-module__ghostBadge___tsQUK`,badgeSlideIn:`styles-module__badgeSlideIn___typJ7`,ghostBadgeExtra:`styles-module__ghostBadgeExtra___6CVoD`,badgeExtraIn:`styles-module__badgeExtraIn___i4W8F`,originalOutline:`styles-module__originalOutline___Y6DD1`,originalLabel:`styles-module__originalLabel___HqI9g`,connectorSvg:`styles-module__connectorSvg___Lovld`,connectorLine:`styles-module__connectorLine___XeWh-`,connectorDraw:`styles-module__connectorDraw___8sK5I`,connectorDot:`styles-module__connectorDot___yvf7C`,connectorDotIn:`styles-module__connectorDotIn___NwTUq`,connectorExiting:`styles-module__connectorExiting___2lLOs`,connectorOut:`styles-module__connectorOut___5QoPl`,connectorDotOut:`styles-module__connectorDotOut___FEq7e`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-design-mode-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-design-mode-styles`,document.head.appendChild(e)),e.textContent=qi}var q=Ji,Yi=24,Xi=5;function Zi(e,t,n,r,i){let a=1/0,o=1/0,s=e.x,c=e.x+e.width,l=e.x+e.width/2,u=e.y,d=e.y+e.height,f=e.y+e.height/2,p=!r,m=p?[s,c,l]:[...r.left?[s]:[],...r.right?[c]:[]],h=p?[u,d,f]:[...r.top?[u]:[],...r.bottom?[d]:[]],g=[];for(let e of t)n.has(e.id)||g.push(e);i&&g.push(...i);for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,s=e.y+e.height,c=e.y+e.height/2;for(let e of m)for(let i of[t,n,r]){let t=i-e;Math.abs(t)<Xi&&Math.abs(t)<Math.abs(a)&&(a=t)}for(let e of h)for(let t of[i,s,c]){let n=t-e;Math.abs(n)<Xi&&Math.abs(n)<Math.abs(o)&&(o=n)}}let _=Math.abs(a)<Xi?a:0,v=Math.abs(o)<Xi?o:0,y=[],b=new Set,x=s+_,S=c+_,C=l+_,w=u+v,ee=d+v,T=f+v;for(let e of g){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[x,C,S])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[w,T,ee])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;b.has(t)||(b.add(t),y.push({axis:`y`,pos:e}))}}return{dx:_,dy:v,guides:y}}function Qi(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function $i({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:r,isDarkMode:i,exiting:a,onInteractionChange:o,className:s,passthrough:c,extraSnapRects:l,onSelectionChange:u,deselectSignal:d,onDragMove:f,onDragEnd:p,clearSignal:m,wireframe:h}){let[g,v]=(0,_.useState)(new Set),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(null),[ee,T]=(0,_.useState)([]),[E,D]=(0,_.useState)(null),[te,O]=(0,_.useState)(!1),ne=(0,_.useRef)(!1),[k,A]=(0,_.useState)(new Set),j=(0,_.useRef)(new Map),re=(0,_.useRef)(null),M=(0,_.useRef)(null),N=(0,_.useRef)(e);N.current=e;let ie=(0,_.useRef)(u);ie.current=u;let ae=(0,_.useRef)(f);ae.current=f;let oe=(0,_.useRef)(p);oe.current=p;let se=(0,_.useRef)(d);(0,_.useEffect)(()=>{d!==se.current&&(se.current=d,v(new Set))},[d]);let ce=(0,_.useRef)(m);(0,_.useEffect)(()=>{if(m!==void 0&&m!==ce.current){ce.current=m;let e=new Set(N.current.map(e=>e.id));e.size>0&&(A(e),v(new Set),M.current=null,W(()=>{t([]),A(new Set)},180))}},[m,t]),(0,_.useEffect)(()=>{let i=i=>{let a=i.target;if(!(a.tagName===`INPUT`||a.tagName===`TEXTAREA`||a.isContentEditable)){if((i.key===`Backspace`||i.key===`Delete`)&&g.size>0){i.preventDefault();let e=new Set(g);A(e),v(new Set),W(()=>{t(N.current.filter(t=>!e.has(t.id))),A(new Set)},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(i.key)&&g.size>0){i.preventDefault();let n=i.shiftKey?20:1,r=i.key===`ArrowLeft`?-n:i.key===`ArrowRight`?n:0,a=i.key===`ArrowUp`?-n:i.key===`ArrowDown`?n:0;t(e.map(e=>g.has(e.id)?{...e,x:Math.max(0,e.x+r),y:Math.max(0,e.y+a)}:e));return}if(i.key===`Escape`){n?r(null):g.size>0&&v(new Set);return}}};return document.addEventListener(`keydown`,i),()=>document.removeEventListener(`keydown`,i)},[g,n,e,t,r]);let P=(0,_.useCallback)(i=>{if(i.button!==0||c||i.target.closest(`.${q.placement}`))return;i.preventDefault(),i.stopPropagation();let a=window.scrollY,s=i.clientX,l=i.clientY;if(n){M.current=`place`,o?.(!0);let i=!1,c=s,u=l,d=e=>{c=e.clientX,u=e.clientY;let t=Math.abs(c-s),n=Math.abs(u-l);if((t>5||n>5)&&(i=!0),i){let t=Math.min(s,c),n=Math.min(l,u),r=Math.abs(c-s),i=Math.abs(u-l);b({x:t,y:n,w:r,h:i}),w({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(r)} \xD7 ${Math.round(i)}`})}},f=p=>{window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f),b(null),w(null),M.current=null,o?.(!1);let m=G[n],h,g,_,y;i?(h=Math.min(s,c),g=Math.min(l,u)+a,_=Math.max(Yi,Math.abs(c-s)),y=Math.max(Yi,Math.abs(u-l))):(_=m.width,y=m.height,h=s-_/2,g=l+a-y/2),h=Math.max(0,h),g=Math.max(0,g);let x={id:Qi(),type:n,x:h,y:g,width:_,height:y,scrollY:a,timestamp:Date.now()};t([...e,x]),v(new Set([x.id])),r(null)};window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)}else{i.shiftKey||v(new Set),M.current=`select`;let t=!1,n=e=>{let n=Math.abs(e.clientX-s),r=Math.abs(e.clientY-l);(n>4||r>4)&&(t=!0),t&&S({x:Math.min(s,e.clientX),y:Math.min(l,e.clientY),w:Math.abs(e.clientX-s),h:Math.abs(e.clientY-l)})},r=o=>{if(window.removeEventListener(`mousemove`,n),window.removeEventListener(`mouseup`,r),M.current=null,t){let t=Math.min(s,o.clientX),n=Math.min(l,o.clientY)+a,r=Math.abs(o.clientX-s),c=Math.abs(o.clientY-l),u=new Set(i.shiftKey?g:new Set);for(let i of e)i.y-a,i.x+i.width>t&&i.x<t+r&&i.y+i.height>n&&i.y<n+c&&u.add(i.id);v(u)}S(null)};window.addEventListener(`mousemove`,n),window.addEventListener(`mouseup`,r)}},[n,c,e,t,g]),F=(0,_.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${q.handle}`)||i.closest(`.${q.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey?(a=new Set(g),a.has(r)?a.delete(r):a.add(r)):a=g.has(r)?new Set(g):new Set([r]),v(a),(a.size!==g.size||[...a].some(e=>!g.has(e)))&&ie.current?.(a,n.shiftKey),window.scrollY;let s=n.clientX,c=n.clientY,u=new Map;for(let t of e)a.has(t.id)&&u.set(t.id,{x:t.x,y:t.y});M.current=`move`,o?.(!0);let d=!1,f=!1,p=e,m=0,h=0,_=new Map;for(let t of e)u.has(t.id)&&_.set(t.id,{w:t.width,h:t.height});let y=n=>{let r=n.clientX-s,i=n.clientY-c;if((Math.abs(r)>2||Math.abs(i)>2)&&(d=!0),!d)return;if(n.altKey&&!f){f=!0;let t=[];for(let n of e)u.has(n.id)&&t.push({...n,id:Qi(),timestamp:Date.now()});p=[...e,...t]}let a=1/0,o=1/0,g=-1/0,v=-1/0;for(let[e,t]of u){let n=_.get(e);n&&(a=Math.min(a,t.x+r),o=Math.min(o,t.y+i),g=Math.max(g,t.x+r+n.w),v=Math.max(v,t.y+i+n.h))}let{dx:y,dy:b,guides:x}=Zi({x:a,y:o,width:g-a,height:v-o},p,new Set(u.keys()),void 0,l);T(x);let S=r+y,C=i+b;m=S,h=C,t(p.map(e=>{let t=u.get(e.id);return t?{...e,x:Math.max(0,t.x+S),y:Math.max(0,t.y+C)}:e})),ae.current?.(S,C)},b=()=>{window.removeEventListener(`mousemove`,y),window.removeEventListener(`mouseup`,b),M.current=null,o?.(!1),T([]),oe.current?.(m,h,d)};window.addEventListener(`mousemove`,y),window.addEventListener(`mouseup`,b)},[g,e,t,o]),le=(0,_.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=e.find(e=>e.id===r);if(!a)return;v(new Set([r])),M.current=`resize`,o?.(!0);let s=n.clientX,c=n.clientY,u=a.width,d=a.height,f=a.x,p=a.y,m={left:i.includes(`w`),right:i.includes(`e`),top:i.includes(`n`),bottom:i.includes(`s`)},h=e=>{let n=e.clientX-s,a=e.clientY-c,o=u,h=d,g=f,_=p;i.includes(`e`)&&(o=Math.max(Yi,u+n)),i.includes(`w`)&&(o=Math.max(Yi,u-n),g=f+u-o),i.includes(`s`)&&(h=Math.max(Yi,d+a)),i.includes(`n`)&&(h=Math.max(Yi,d-a),_=p+d-h);let{dx:v,dy:y,guides:b}=Zi({x:g,y:_,width:o,height:h},N.current,new Set([r]),m,l);T(b),v!==0&&(m.right?o+=v:m.left&&(g+=v,o-=v)),y!==0&&(m.bottom?h+=y:m.top&&(_+=y,h-=y)),t(N.current.map(e=>e.id===r?{...e,x:g,y:_,width:o,height:h}:e)),w({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(o)} \xD7 ${Math.round(h)}`})},g=()=>{window.removeEventListener(`mousemove`,h),window.removeEventListener(`mouseup`,g),w(null),M.current=null,o?.(!1),T([])};window.addEventListener(`mousemove`,h),window.addEventListener(`mouseup`,g)},[e,t,o]),ue=(0,_.useCallback)(e=>{M.current=null,A(t=>{let n=new Set(t);return n.add(e),n}),v(t=>{let n=new Set(t);return n.delete(e),n}),W(()=>{t(N.current.filter(t=>t.id!==e)),A(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),de={hero:`Headline text`,button:`Button label`,badge:`Badge label`,cta:`Call to action text`,toast:`Notification message`,modal:`Dialog title`,card:`Card title`,navigation:`Brand / nav items`,tabs:`Tab labels`,input:`Placeholder text`,search:`Search placeholder`,pricing:`Plan name or price`,testimonial:`Quote text`,alert:`Alert message`,banner:`Banner text`,tag:`Tag label`,notification:`Notification message`,stat:`Metric value`,productCard:`Product name`},fe=(0,_.useCallback)(t=>{let n=e.find(e=>e.id===t);n&&(ne.current=!!n.text,D(t),O(!1))},[e]),pe=(0,_.useCallback)(()=>{E&&(O(!0),W(()=>{D(null),O(!1)},150))},[E]);(0,_.useEffect)(()=>{a&&E&&pe()},[a]);let me=(0,_.useCallback)(n=>{E&&(t(e.map(e=>e.id===E?{...e,text:n.trim()||void 0}:e)),pe())},[E,e,t,pe]),he=typeof window<`u`?window.scrollY:0,ge=[`nw`,`ne`,`se`,`sw`],_e=h?`#f97316`:`#3c82f7`,ve=[{dir:`n`,cls:q.edgeN,arrow:(0,H.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M4 0.5L1 4.5h6z`,fill:_e})})},{dir:`e`,cls:q.edgeE,arrow:(0,H.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M5.5 4L1.5 1v6z`,fill:_e})})},{dir:`s`,cls:q.edgeS,arrow:(0,H.jsx)(`svg`,{width:`8`,height:`6`,viewBox:`0 0 8 6`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M4 5.5L1 1.5h6z`,fill:_e})})},{dir:`w`,cls:q.edgeW,arrow:(0,H.jsx)(`svg`,{width:`6`,height:`8`,viewBox:`0 0 6 8`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M0.5 4L4.5 1v6z`,fill:_e})})}];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{ref:re,className:`${q.overlay} ${i?``:q.light} ${n?q.placing:``} ${c?q.passthrough:``} ${a?q.overlayExiting:``} ${h?q.wireframe:``}${s?` ${s}`:``}`,"data-feedback-toolbar":!0,onMouseDown:P,children:e.map(e=>{let t=g.has(e.id),n=Ar[e.type]?.label||e.type,r=e.y-he;return(0,H.jsxs)(`div`,{"data-design-placement":e.id,className:`${q.placement} ${t?q.selected:``} ${k.has(e.id)?q.exiting:``}`,style:{left:e.x,top:r,width:e.width,height:e.height,position:`fixed`},onMouseDown:t=>F(t,e.id),onDoubleClick:()=>fe(e.id),children:[(0,H.jsx)(`span`,{className:q.placementLabel,children:n}),(0,H.jsx)(`span`,{className:`${q.placementAnnotation} ${e.text?q.annotationVisible:``}`,children:(e.text&&j.current.set(e.id,e.text),e.text||j.current.get(e.id)||``)}),(0,H.jsx)(`div`,{className:q.placementContent,children:(0,H.jsx)(Ki,{type:e.type,width:e.width,height:e.height,text:e.text})}),(0,H.jsx)(`div`,{className:q.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>ue(e.id),children:`✕`}),ge.map(t=>(0,H.jsx)(`div`,{className:`${q.handle} ${q[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>le(n,e.id,t)},t)),ve.map(({dir:t,cls:n,arrow:r})=>(0,H.jsx)(`div`,{className:`${q.edgeHandle} ${n}`,onMouseDown:n=>le(n,e.id,t),children:r},t))]},e.id)})}),E&&(()=>{let t=e.find(e=>e.id===E);if(!t)return null;let n=t.y-he,r=t.x+t.width/2,a=n-8,o=n+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,r)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,H.jsx)(Cr,{element:Ar[t.type]?.label||t.type,placeholder:de[t.type]||`Label or content text`,initialValue:t.text??``,submitLabel:ne.current?`Save`:`Set`,onSubmit:me,onCancel:pe,onDelete:ne.current?()=>{me(``)}:void 0,isExiting:te,lightMode:!i,style:u})})(),y&&(0,H.jsx)(`div`,{className:q.drawBox,style:{left:y.x,top:y.y,width:y.w,height:y.h},"data-feedback-toolbar":!0}),x&&(0,H.jsx)(`div`,{className:q.selectBox,style:{left:x.x,top:x.y,width:x.w,height:x.h},"data-feedback-toolbar":!0}),C&&(0,H.jsx)(`div`,{className:q.sizeIndicator,style:{left:C.x,top:C.y},"data-feedback-toolbar":!0,children:C.text}),ee.map((e,t)=>(0,H.jsx)(`div`,{className:q.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,bottom:0}:{position:`fixed`,left:0,top:e.pos-he,right:0,height:1},"data-feedback-toolbar":!0},`${e.axis}-${e.pos}-${t}`))]})}function ea(e){if(!e)return``;let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?q.fadeTop:``} ${n?q.fadeBottom:``}`}var J=`currentColor`,Y=`0.5`;function ta({type:e}){switch(e){case`navigation`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`4`,width:`18`,height:`8`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`2.5`,y:`7`,width:`3`,height:`1.5`,rx:`.5`,fill:J,opacity:`.4`}),(0,H.jsx)(`rect`,{x:`7`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`11`,y:`7`,width:`2.5`,height:`1.5`,rx:`.5`,fill:J,opacity:`.25`})]});case`header`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`3`,y:`5.5`,width:`8`,height:`2`,rx:`.5`,fill:J,opacity:`.35`}),(0,H.jsx)(`rect`,{x:`3`,y:`9`,width:`12`,height:`1`,rx:`.5`,fill:J,opacity:`.15`})]});case`hero`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`5`,y:`5`,width:`10`,height:`1.5`,rx:`.5`,fill:J,opacity:`.35`}),(0,H.jsx)(`rect`,{x:`7`,y:`8`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`7.5`,y:`10.5`,width:`5`,height:`2.5`,rx:`1`,stroke:J,strokeWidth:Y})]});case`section`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`1`,width:`18`,height:`14`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`3`,y:`4`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`3`,y:`6.5`,width:`14`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`3`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:J,opacity:`.15`})]});case`sidebar`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`2.5`,y:`4`,width:`4`,height:`1`,rx:`.5`,fill:J,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`2.5`,y:`6.5`,width:`3.5`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`2.5`,y:`9`,width:`4`,height:`1`,rx:`.5`,fill:J,opacity:`.15`})]});case`footer`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`7`,width:`18`,height:`8`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`3`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`9`,y:`9.5`,width:`4`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`15`,y:`9.5`,width:`3`,height:`1`,rx:`.5`,fill:J,opacity:`.2`})]});case`modal`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`5`,y:`4.5`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`11`,y:`11`,width:`5`,height:`2`,rx:`.75`,stroke:J,strokeWidth:Y})]});case`divider`:return(0,H.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,H.jsx)(`line`,{x1:`2`,y1:`8`,x2:`18`,y2:`8`,stroke:J,strokeWidth:`0.5`,opacity:`.3`})});case`card`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5.5`,rx:`1`,fill:J,opacity:`.04`}),(0,H.jsx)(`rect`,{x:`4`,y:`8.5`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`4`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`text`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`4`,width:`14`,height:`1.5`,rx:`.5`,fill:J,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`2`,y:`7`,width:`11`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`2`,y:`9.5`,width:`13`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`2`,y:`12`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`image`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`line`,{x1:`2`,y1:`2`,x2:`18`,y2:`14`,stroke:J,strokeWidth:`.3`,opacity:`.25`}),(0,H.jsx)(`line`,{x1:`18`,y1:`2`,x2:`2`,y2:`14`,stroke:J,strokeWidth:`.3`,opacity:`.25`})]});case`video`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`path`,{d:`M8.5 5.5v5l4.5-2.5z`,stroke:J,strokeWidth:Y,fill:J,opacity:`.15`})]});case`table`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`line`,{x1:`1`,y1:`5.5`,x2:`19`,y2:`5.5`,stroke:J,strokeWidth:`.3`,opacity:`.25`}),(0,H.jsx)(`line`,{x1:`1`,y1:`9`,x2:`19`,y2:`9`,stroke:J,strokeWidth:`.3`,opacity:`.25`}),(0,H.jsx)(`line`,{x1:`7`,y1:`2`,x2:`7`,y2:`14`,stroke:J,strokeWidth:`.3`,opacity:`.25`}),(0,H.jsx)(`line`,{x1:`13`,y1:`2`,x2:`13`,y2:`14`,stroke:J,strokeWidth:`.3`,opacity:`.25`})]});case`grid`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`11.5`,y:`2`,width:`7`,height:`5.5`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`11.5`,y:`9.5`,width:`7`,height:`5.5`,rx:`1`,stroke:J,strokeWidth:Y})]});case`list`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`3.5`,cy:`4.5`,r:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6.5`,y:`4`,width:`10`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`3.5`,cy:`8`,r:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`3.5`,cy:`11.5`,r:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6.5`,y:`11`,width:`11`,height:`1`,rx:`.5`,fill:J,opacity:`.2`})]});case`chart`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`9`,width:`2.5`,height:`4`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`rect`,{x:`7`,y:`6`,width:`2.5`,height:`7`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`11`,y:`3`,width:`2.5`,height:`10`,rx:`.5`,fill:J,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`15`,y:`5`,width:`2.5`,height:`8`,rx:`.5`,fill:J,opacity:`.2`})]});case`accordion`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1.5`,y:`2`,width:`17`,height:`4`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`3`,y:`3.5`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`1.5`,y:`7.5`,width:`17`,height:`3`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`1.5`,y:`12`,width:`17`,height:`3`,rx:`1`,stroke:J,strokeWidth:Y})]});case`carousel`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`10`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`path`,{d:`M1.5 7L3 8.5 1.5 10`,stroke:J,strokeWidth:Y,opacity:`.35`}),(0,H.jsx)(`path`,{d:`M18.5 7L17 8.5 18.5 10`,stroke:J,strokeWidth:Y,opacity:`.35`}),(0,H.jsx)(`circle`,{cx:`8.5`,cy:`14`,r:`.6`,fill:J,opacity:`.35`}),(0,H.jsx)(`circle`,{cx:`10`,cy:`14`,r:`.6`,fill:J,opacity:`.15`}),(0,H.jsx)(`circle`,{cx:`11.5`,cy:`14`,r:`.6`,fill:J,opacity:`.15`})]});case`button`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`2`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6.5`,y:`7.5`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.25`})]});case`input`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`4`,width:`5.5`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`2`,y:`6.5`,width:`16`,height:`5.5`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`3.5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`search`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`4.5`,width:`16`,height:`7`,rx:`3.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:J,strokeWidth:Y,opacity:`.3`}),(0,H.jsx)(`line`,{x1:`7.5`,y1:`9.5`,x2:`9`,y2:`11`,stroke:J,strokeWidth:Y,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`9.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`form`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`1.5`,width:`5.5`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`2`,y:`3.5`,width:`16`,height:`3`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`2`,y:`8`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`2`,y:`10`,width:`16`,height:`3`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`12`,y:`14`,width:`6`,height:`2`,rx:`.75`,stroke:J,strokeWidth:Y})]});case`tabs`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`10`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`1`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`2.5`,y:`3.25`,width:`3`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`7`,y:`2`,width:`6`,height:`3.5`,rx:`.75`,stroke:J,strokeWidth:Y})]});case`dropdown`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`4`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`3.5`,y:`3.5`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`path`,{d:`M15 3.5l1.5 1.5L18 3.5`,stroke:J,strokeWidth:Y,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`7`,rx:`1`,stroke:J,strokeWidth:Y,strokeDasharray:`2 1`,opacity:`.3`})]});case`toggle`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`6`,rx:`3`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`circle`,{cx:`13`,cy:`8`,r:`2`,fill:J,opacity:`.3`})]});case`avatar`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`10`,cy:`8`,r:`6`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`2`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`path`,{d:`M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5`,stroke:J,strokeWidth:Y})]});case`badge`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`3`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.25`})]});case`breadcrumb`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1.5`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:J,opacity:`.3`}),(0,H.jsx)(`path`,{d:`M6.5 7l1 1-1 1`,stroke:J,strokeWidth:Y,opacity:`.2`}),(0,H.jsx)(`rect`,{x:`9`,y:`7`,width:`3.5`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`path`,{d:`M14 7l1 1-1 1`,stroke:J,strokeWidth:Y,opacity:`.2`}),(0,H.jsx)(`rect`,{x:`16.5`,y:`7`,width:`2`,height:`1`,rx:`.5`,fill:J,opacity:`.15`})]});case`pagination`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`11`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,fill:J,opacity:`.15`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`15.5`,y:`5.5`,width:`3.5`,height:`5`,rx:`1`,stroke:J,strokeWidth:Y})]});case`progress`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`2`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`1`,fill:J,opacity:`.2`})]});case`toast`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`circle`,{cx:`5`,cy:`8`,r:`1.5`,stroke:J,strokeWidth:Y,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`8`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`8`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`tooltip`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`3`,width:`14`,height:`7`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`5.5`,y:`5.5`,width:`9`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`path`,{d:`M9 10l1 2.5 1-2.5`,stroke:J,strokeWidth:Y})]});case`pricing`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`7`,y:`5.5`,width:`6`,height:`2`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`5`,y:`9`,width:`10`,height:`1`,rx:`.5`,fill:J,opacity:`.1`}),(0,H.jsx)(`rect`,{x:`5`,y:`11`,width:`10`,height:`1`,rx:`.5`,fill:J,opacity:`.1`}),(0,H.jsx)(`rect`,{x:`6`,y:`13`,width:`8`,height:`1.5`,rx:`.5`,fill:J,opacity:`.2`})]});case`testimonial`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`text`,{x:`4`,y:`5.5`,fontSize:`4`,fill:J,opacity:`.2`,fontFamily:`serif`,children:`“`}),(0,H.jsx)(`rect`,{x:`4`,y:`7`,width:`12`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`4`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:J,opacity:`.12`}),(0,H.jsx)(`circle`,{cx:`5.5`,cy:`12.5`,r:`1.5`,stroke:J,strokeWidth:Y,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`8`,y:`12`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.15`})]});case`cta`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`2`,width:`18`,height:`12`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`5`,y:`4.5`,width:`10`,height:`1.5`,rx:`.5`,fill:J,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`6`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`7`,y:`10`,width:`6`,height:`2.5`,rx:`1`,stroke:J,strokeWidth:Y})]});case`alert`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`4`,width:`16`,height:`8`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`circle`,{cx:`6`,cy:`8`,r:`2`,stroke:J,strokeWidth:Y,opacity:`.3`}),(0,H.jsx)(`line`,{x1:`6`,y1:`7`,x2:`6`,y2:`8.5`,stroke:J,strokeWidth:`0.6`,opacity:`.5`}),(0,H.jsx)(`circle`,{cx:`6`,cy:`9.3`,r:`.3`,fill:J,opacity:`.5`}),(0,H.jsx)(`rect`,{x:`9.5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.2`})]});case`banner`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`5`,width:`18`,height:`6`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`4`,y:`7.5`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`14`,y:`7`,width:`3.5`,height:`2`,rx:`.75`,stroke:J,strokeWidth:Y})]});case`stat`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`5`,y:`7`,width:`10`,height:`2.5`,rx:`.5`,fill:J,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`7`,y:`11`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`stepper`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`4`,cy:`8`,r:`2`,fill:J,opacity:`.2`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`line`,{x1:`6`,y1:`8`,x2:`8`,y2:`8`,stroke:J,strokeWidth:`.4`,opacity:`.3`}),(0,H.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`line`,{x1:`12`,y1:`8`,x2:`14`,y2:`8`,stroke:J,strokeWidth:`.4`,opacity:`.3`}),(0,H.jsx)(`circle`,{cx:`16`,cy:`8`,r:`2`,stroke:J,strokeWidth:Y})]});case`tag`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`5`,width:`14`,height:`6`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`5.5`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`line`,{x1:`14`,y1:`6.5`,x2:`15.5`,y2:`9.5`,stroke:J,strokeWidth:Y,opacity:`.2`}),(0,H.jsx)(`line`,{x1:`15.5`,y1:`6.5`,x2:`14`,y2:`9.5`,stroke:J,strokeWidth:Y,opacity:`.2`})]});case`rating`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`path`,{d:`M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z`,fill:J,opacity:`.25`}),(0,H.jsx)(`path`,{d:`M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z`,fill:J,opacity:`.25`}),(0,H.jsx)(`path`,{d:`M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z`,stroke:J,strokeWidth:Y,opacity:`.25`})]});case`map`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`line`,{x1:`2`,y1:`6`,x2:`18`,y2:`10`,stroke:J,strokeWidth:`.3`,opacity:`.15`}),(0,H.jsx)(`line`,{x1:`7`,y1:`2`,x2:`11`,y2:`14`,stroke:J,strokeWidth:`.3`,opacity:`.15`}),(0,H.jsx)(`path`,{d:`M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z`,fill:J,opacity:`.15`,stroke:J,strokeWidth:Y})]});case`timeline`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`line`,{x1:`5`,y1:`2`,x2:`5`,y2:`14`,stroke:J,strokeWidth:`.4`,opacity:`.25`}),(0,H.jsx)(`circle`,{cx:`5`,cy:`4`,r:`1.5`,fill:J,opacity:`.2`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`8`,y:`3`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`circle`,{cx:`5`,cy:`8.5`,r:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`8`,y:`7.5`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`circle`,{cx:`5`,cy:`13`,r:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`8`,y:`12`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.15`})]});case`fileUpload`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`12`,rx:`1.5`,stroke:J,strokeWidth:Y,strokeDasharray:`2 1`}),(0,H.jsx)(`path`,{d:`M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8`,stroke:J,strokeWidth:Y,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`7`,y:`11.5`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.15`})]});case`codeBlock`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`12`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`circle`,{cx:`4`,cy:`4`,r:`.6`,fill:J,opacity:`.3`}),(0,H.jsx)(`circle`,{cx:`5.5`,cy:`4`,r:`.6`,fill:J,opacity:`.3`}),(0,H.jsx)(`circle`,{cx:`7`,cy:`4`,r:`.6`,fill:J,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`4`,y:`7`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`rect`,{x:`6`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`4`,y:`11`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`calendar`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`12`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`line`,{x1:`2`,y1:`6.5`,x2:`18`,y2:`6.5`,stroke:J,strokeWidth:`.4`,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`5`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:J,opacity:`.2`}),(0,H.jsx)(`rect`,{x:`14`,y:`4`,width:`1`,height:`1.5`,rx:`.3`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`7`,cy:`9`,r:`.6`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`10`,cy:`9`,r:`.6`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`13`,cy:`9`,r:`.6`,fill:J,opacity:`.3`}),(0,H.jsx)(`circle`,{cx:`7`,cy:`12`,r:`.6`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`10`,cy:`12`,r:`.6`,fill:J,opacity:`.2`})]});case`notification`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`3`,width:`16`,height:`10`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`circle`,{cx:`5.5`,cy:`8`,r:`2`,stroke:J,strokeWidth:Y,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`9`,y:`6`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`9`,y:`8.5`,width:`4.5`,height:`1`,rx:`.5`,fill:J,opacity:`.12`}),(0,H.jsx)(`circle`,{cx:`16.5`,cy:`4.5`,r:`1.5`,fill:J,opacity:`.25`})]});case`productCard`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`6`,rx:`1`,fill:J,opacity:`.04`}),(0,H.jsx)(`rect`,{x:`5`,y:`8.5`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`5`,y:`10.5`,width:`4`,height:`1.5`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`12`,y:`12`,width:`4`,height:`2`,rx:`.75`,stroke:J,strokeWidth:Y})]});case`profile`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`10`,cy:`5`,r:`3`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`5`,y:`10`,width:`10`,height:`1.5`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`7`,y:`12.5`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`drawer`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`9`,y:`1`,width:`10`,height:`14`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`10.5`,y:`4`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`10.5`,y:`6.5`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`10.5`,y:`9`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`1`,y:`1`,width:`7`,height:`14`,rx:`1`,stroke:J,strokeWidth:Y,opacity:`.15`})]});case`popover`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`2`,width:`14`,height:`9`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`5`,y:`4.5`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`5`,y:`7`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`path`,{d:`M9 11l1 2.5 1-2.5`,stroke:J,strokeWidth:Y})]});case`logo`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`3`,width:`10`,height:`10`,rx:`2`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`path`,{d:`M5 9.5l2-4 2 4`,stroke:J,strokeWidth:Y,opacity:`.3`}),(0,H.jsx)(`rect`,{x:`14`,y:`6`,width:`4`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`rect`,{x:`14`,y:`8.5`,width:`3`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`faq`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`text`,{x:`2.5`,y:`5.5`,fontSize:`4`,fill:J,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,H.jsx)(`rect`,{x:`7`,y:`3`,width:`10`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`7`,y:`5.5`,width:`8`,height:`1`,rx:`.5`,fill:J,opacity:`.12`}),(0,H.jsx)(`text`,{x:`2.5`,y:`11.5`,fontSize:`4`,fill:J,opacity:`.3`,fontWeight:`bold`,children:`?`}),(0,H.jsx)(`rect`,{x:`7`,y:`9`,width:`9`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`7`,y:`11.5`,width:`7`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`gallery`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`7.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`13.5`,y:`1.5`,width:`5`,height:`5`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`1.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`7.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`13.5`,y:`9.5`,width:`5`,height:`5`,rx:`.75`,stroke:J,strokeWidth:Y})]});case`checkbox`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`5`,y:`4`,width:`8`,height:`8`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`path`,{d:`M7.5 8l1.5 1.5 3-3`,stroke:J,strokeWidth:Y,opacity:`.35`})]});case`radio`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`10`,cy:`8`,r:`4`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`circle`,{cx:`10`,cy:`8`,r:`2`,fill:J,opacity:`.3`})]});case`slider`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`7.5`,width:`16`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`2`,y:`7.5`,width:`10`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`circle`,{cx:`12`,cy:`8`,r:`2.5`,stroke:J,strokeWidth:Y})]});case`datePicker`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`5`,rx:`1`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`3.5`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`rect`,{x:`14`,y:`2.5`,width:`2.5`,height:`2`,rx:`.5`,fill:J,opacity:`.12`}),(0,H.jsx)(`rect`,{x:`2`,y:`7`,width:`16`,height:`8`,rx:`1`,stroke:J,strokeWidth:Y,strokeDasharray:`2 1`,opacity:`.3`}),(0,H.jsx)(`circle`,{cx:`6`,cy:`10`,r:`.6`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`10`,cy:`10`,r:`.6`,fill:J,opacity:`.3`}),(0,H.jsx)(`circle`,{cx:`14`,cy:`10`,r:`.6`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`6`,cy:`13`,r:`.6`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`10`,cy:`13`,r:`.6`,fill:J,opacity:`.2`})]});case`skeleton`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`2`,width:`16`,height:`3`,rx:`1`,fill:J,opacity:`.08`}),(0,H.jsx)(`rect`,{x:`2`,y:`7`,width:`10`,height:`2`,rx:`.75`,fill:J,opacity:`.08`}),(0,H.jsx)(`rect`,{x:`2`,y:`11`,width:`13`,height:`2`,rx:`.75`,fill:J,opacity:`.08`})]});case`chip`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1.5`,y:`5`,width:`10`,height:`6`,rx:`3`,fill:J,opacity:`.08`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`4`,y:`7.5`,width:`4`,height:`1`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`line`,{x1:`9.5`,y1:`6.5`,x2:`10.5`,y2:`9.5`,stroke:J,strokeWidth:Y,opacity:`.2`}),(0,H.jsx)(`line`,{x1:`10.5`,y1:`6.5`,x2:`9.5`,y2:`9.5`,stroke:J,strokeWidth:Y,opacity:`.2`}),(0,H.jsx)(`rect`,{x:`13`,y:`5`,width:`5.5`,height:`6`,rx:`3`,stroke:J,strokeWidth:Y,opacity:`.25`})]});case`icon`:return(0,H.jsx)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:(0,H.jsx)(`path`,{d:`M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z`,stroke:J,strokeWidth:Y,opacity:`.3`})});case`spinner`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`10`,cy:`8`,r:`5`,stroke:J,strokeWidth:Y,opacity:`.12`}),(0,H.jsx)(`path`,{d:`M10 3a5 5 0 0 1 5 5`,stroke:J,strokeWidth:Y,opacity:`.35`,strokeLinecap:`round`})]});case`feature`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`2`,width:`5`,height:`5`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`path`,{d:`M4.5 3.5v3m-1.5-1.5h3`,stroke:J,strokeWidth:Y,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`9`,y:`2.5`,width:`8`,height:`1.5`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`9`,y:`5.5`,width:`6`,height:`1`,rx:`.5`,fill:J,opacity:`.12`}),(0,H.jsx)(`rect`,{x:`2`,y:`10`,width:`5`,height:`5`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`9`,y:`10.5`,width:`7`,height:`1.5`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`9`,y:`13.5`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.12`})]});case`team`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`5`,cy:`5`,r:`2.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`2.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`15`,cy:`5`,r:`2.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`12.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`circle`,{cx:`10`,cy:`5`,r:`2.5`,stroke:J,strokeWidth:Y,opacity:`.5`}),(0,H.jsx)(`rect`,{x:`7.5`,y:`9`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.15`}),(0,H.jsx)(`rect`,{x:`4`,y:`12`,width:`12`,height:`1`,rx:`.5`,fill:J,opacity:`.1`})]});case`login`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`3`,y:`1`,width:`14`,height:`14`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6`,y:`3`,width:`8`,height:`1.5`,rx:`.5`,fill:J,opacity:`.25`}),(0,H.jsx)(`rect`,{x:`5`,y:`5.5`,width:`10`,height:`3`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`5`,y:`9.5`,width:`10`,height:`3`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`6.5`,y:`13.5`,width:`7`,height:`2`,rx:`.75`,fill:J,opacity:`.2`})]});case`contact`:return(0,H.jsxs)(`svg`,{viewBox:`0 0 20 16`,width:`20`,height:`16`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`2`,y:`1`,width:`16`,height:`14`,rx:`1.5`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`4`,y:`3`,width:`5`,height:`1`,rx:`.5`,fill:J,opacity:`.2`}),(0,H.jsx)(`rect`,{x:`4`,y:`5`,width:`12`,height:`2.5`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`4`,y:`8.5`,width:`12`,height:`4`,rx:`.75`,stroke:J,strokeWidth:Y}),(0,H.jsx)(`rect`,{x:`11`,y:`13.5`,width:`5`,height:`1.5`,rx:`.5`,fill:J,opacity:`.2`})]});default:return null}}function na({activeType:e,onSelect:t,onDragStart:n,scrollRef:r,fadeClass:i,blankCanvas:a}){return(0,H.jsx)(`div`,{ref:r,className:`${q.placeScroll} ${i||``}`,children:kr.map(r=>(0,H.jsxs)(`div`,{className:q.paletteSection,children:[(0,H.jsx)(`div`,{className:q.paletteSectionTitle,children:r.section}),r.items.map(r=>(0,H.jsxs)(`div`,{className:`${q.paletteItem} ${e===r.type?q.active:``} ${a?q.wireframe:``}`,onClick:()=>t(r.type),onMouseDown:e=>{e.button===0&&n(r.type,e)},children:[(0,H.jsx)(`div`,{className:q.paletteItemIcon,children:(0,H.jsx)(ta,{type:r.type})}),(0,H.jsx)(`span`,{className:q.paletteItemLabel,children:r.label})]},r.type))]},r.section))})}function ra({value:e,suffix:t}){let[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(t),[o,s]=(0,_.useState)(`up`),c=(0,_.useRef)(e),l=(0,_.useRef)(t),u=(0,_.useRef)(),d=n!==null&&i!==t;return(0,_.useEffect)(()=>{if(e!==c.current){if(e===0){c.current=e,l.current=t,r(null);return}s(e>c.current?`up`:`down`),r(c.current),a(l.current),c.current=e,l.current=t,clearTimeout(u.current),u.current=W(()=>r(null),250)}else l.current=t},[e,t]),n===null?(0,H.jsxs)(H.Fragment,{children:[e,t?` ${t}`:``]}):d?(0,H.jsxs)(`span`,{className:q.rollingWrap,children:[(0,H.jsxs)(`span`,{style:{visibility:`hidden`},children:[e,` `,t]}),(0,H.jsxs)(`span`,{className:`${q.rollingNum} ${o===`up`?q.exitUp:q.exitDown}`,children:[n,` `,i]},`o${n}-${e}`),(0,H.jsxs)(`span`,{className:`${q.rollingNum} ${o===`up`?q.enterUp:q.enterDown}`,children:[e,` `,t]},`n${e}`)]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`span`,{className:q.rollingWrap,children:[(0,H.jsx)(`span`,{style:{visibility:`hidden`},children:e}),(0,H.jsx)(`span`,{className:`${q.rollingNum} ${o===`up`?q.exitUp:q.exitDown}`,children:n},`o${n}-${e}`),(0,H.jsx)(`span`,{className:`${q.rollingNum} ${o===`up`?q.enterUp:q.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:``]})}function ia({activeType:e,onSelect:t,isDarkMode:n,sectionCount:r,onDetectSections:i,visible:a,onExited:o,placementCount:s,onClearPlacements:c,onDragStart:l,blankCanvas:u,onBlankCanvasChange:d,wireframePurpose:f,onWireframePurposeChange:p,Tooltip:m}){let[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(`exit`),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(!0),w=(0,_.useRef)(0),ee=(0,_.useRef)(``),T=(0,_.useRef)(0),E=(0,_.useRef)(),D=(0,_.useRef)(null),[te,O]=(0,_.useState)(``);(0,_.useEffect)(()=>(a?(g(!0),clearTimeout(E.current),cancelAnimationFrame(T.current),T.current=vr(()=>{T.current=vr(()=>{y(`enter`)})})):(cancelAnimationFrame(T.current),y(`exit`),clearTimeout(E.current),E.current=W(()=>{g(!1),o?.()},200)),()=>cancelAnimationFrame(T.current)),[a]);let ne=s>0||r>0,k=s+r;if(k>0&&(w.current=k,ee.current=u?k===1?`Component`:`Components`:k===1?`Change`:`Changes`),(0,_.useEffect)(()=>{if(ne)b?C(!1):(C(!0),x(!0),vr(()=>{vr(()=>{C(!1)})}));else{C(!0);let e=W(()=>x(!1),300);return()=>clearTimeout(e)}},[ne]),(0,_.useEffect)(()=>{if(!h)return;let e=D.current;if(!e)return;let t=()=>O(ea(e));t(),e.addEventListener(`scroll`,t,{passive:!0});let n=new ResizeObserver(t);return n.observe(e),()=>{e.removeEventListener(`scroll`,t),n.disconnect()}},[h]),!h)return null;let A=[];return s>0&&A.push(`placed`),r>0&&A.push(`captured`),(0,H.jsxs)(`div`,{className:`${q.palette} ${q[v]} ${n?``:q.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onTransitionEnd:e=>{e.target===e.currentTarget&&(a||(clearTimeout(E.current),g(!1),y(`exit`),o?.()))},children:[(0,H.jsxs)(`div`,{className:q.paletteHeader,children:[(0,H.jsx)(`div`,{className:q.paletteHeaderTitle,children:`Layout Mode`}),(0,H.jsxs)(`div`,{className:q.paletteHeaderDesc,children:[`Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary.`,` `,(0,H.jsx)(`a`,{href:`https://agentation.dev/features#layout-mode`,target:`_blank`,rel:`noopener noreferrer`,children:`Learn more.`})]})]}),(0,H.jsxs)(`div`,{className:`${q.canvasToggle} ${u?q.active:``}`,onClick:()=>d(!u),children:[(0,H.jsx)(`span`,{className:q.canvasToggleIcon,children:(0,H.jsxs)(`svg`,{viewBox:`0 0 14 14`,width:`14`,height:`14`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`,stroke:`currentColor`,strokeWidth:`1`}),(0,H.jsx)(`circle`,{cx:`4.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,H.jsx)(`circle`,{cx:`7`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,H.jsx)(`circle`,{cx:`9.5`,cy:`4.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,H.jsx)(`circle`,{cx:`4.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,H.jsx)(`circle`,{cx:`7`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,H.jsx)(`circle`,{cx:`9.5`,cy:`7`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,H.jsx)(`circle`,{cx:`4.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,H.jsx)(`circle`,{cx:`7`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`}),(0,H.jsx)(`circle`,{cx:`9.5`,cy:`9.5`,r:`0.8`,fill:`currentColor`,opacity:`.6`})]})}),(0,H.jsx)(`span`,{className:q.canvasToggleLabel,children:`Wireframe New Page`})]}),(0,H.jsx)(`div`,{className:`${q.wireframePurposeWrap} ${u?``:q.collapsed}`,children:(0,H.jsx)(`div`,{className:q.wireframePurposeInner,children:(0,H.jsx)(`textarea`,{className:q.wireframePurposeInput,placeholder:`Describe this page to provide additional context for your agent.`,value:f,onChange:e=>p(e.target.value),rows:2})})}),(0,H.jsx)(na,{activeType:e,onSelect:t,onDragStart:l,scrollRef:D,fadeClass:te,blankCanvas:u}),b&&(0,H.jsx)(`div`,{className:`${q.paletteFooterWrap} ${S?q.footerHidden:``}`,children:(0,H.jsx)(`div`,{className:q.paletteFooterInner,children:(0,H.jsx)(`div`,{className:q.paletteFooterInnerContent,children:(0,H.jsxs)(`div`,{className:q.paletteFooter,children:[(0,H.jsx)(`span`,{className:q.paletteFooterCount,children:(0,H.jsx)(ra,{value:w.current,suffix:ee.current})}),(0,H.jsx)(`button`,{className:q.paletteFooterClear,onClick:c,children:`Clear`})]})})})})]})}function aa(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function oa(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=aa(n)}return null}function sa(e,t=4){let n=[],r=e,i=0;for(;r&&i<t;){let e=r.tagName.toLowerCase();if(e===`html`||e===`body`)break;let t=e;if(r.id)t=`#${r.id}`;else if(r.className&&typeof r.className==`string`){let e=r.className.split(/\s+/).find(e=>e.length>2&&!e.match(/^[a-z]{1,2}$/)&&!e.match(/[A-Z0-9]{5,}/));e&&(t=`.${e.split(`_`)[0]}`)}let a=aa(r);!r.parentElement&&a&&(t=`\u27E8shadow\u27E9 ${t}`),n.unshift(t),r=a,i++}return n.join(` > `)}function ca(e){let t=sa(e);if(e.dataset.element)return{name:e.dataset.element,path:t};let n=e.tagName.toLowerCase();if([`path`,`circle`,`rect`,`line`,`g`].includes(n)){let n=oa(e,`svg`);if(n){let e=aa(n);if(e instanceof HTMLElement)return{name:`graphic in ${ca(e).name}`,path:t}}return{name:`graphic element`,path:t}}if(n===`svg`){let n=aa(e);if(n?.tagName.toLowerCase()===`button`){let e=n.textContent?.trim();return{name:e?`icon in "${e}" button`:`button icon`,path:t}}return{name:`icon`,path:t}}if(n===`button`){let n=e.textContent?.trim(),r=e.getAttribute(`aria-label`);return r?{name:`button [${r}]`,path:t}:{name:n?`button "${n.slice(0,25)}"`:`button`,path:t}}if(n===`a`){let n=e.textContent?.trim(),r=e.getAttribute(`href`);return n?{name:`link "${n.slice(0,25)}"`,path:t}:r?{name:`link to ${r.slice(0,30)}`,path:t}:{name:`link`,path:t}}if(n===`input`){let n=e.getAttribute(`type`)||`text`,r=e.getAttribute(`placeholder`),i=e.getAttribute(`name`);return r?{name:`input "${r}"`,path:t}:i?{name:`input [${i}]`,path:t}:{name:`${n} input`,path:t}}if([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`].includes(n)){let r=e.textContent?.trim();return{name:r?`${n} "${r.slice(0,35)}"`:n,path:t}}if(n===`p`){let n=e.textContent?.trim();return n?{name:`paragraph: "${n.slice(0,40)}${n.length>40?`...`:``}"`,path:t}:{name:`paragraph`,path:t}}if(n===`span`||n===`label`){let r=e.textContent?.trim();return r&&r.length<40?{name:`"${r}"`,path:t}:{name:n,path:t}}if(n===`li`){let n=e.textContent?.trim();return n&&n.length<40?{name:`list item: "${n.slice(0,35)}"`,path:t}:{name:`list item`,path:t}}if(n===`blockquote`)return{name:`blockquote`,path:t};if(n===`code`){let n=e.textContent?.trim();return n&&n.length<30?{name:`code: \`${n}\``,path:t}:{name:`code`,path:t}}if(n===`pre`)return{name:`code block`,path:t};if(n===`img`){let n=e.getAttribute(`alt`);return{name:n?`image "${n.slice(0,30)}"`:`image`,path:t}}if(n===`video`)return{name:`video`,path:t};if([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`].includes(n)){let r=e.className,i=e.getAttribute(`role`),a=e.getAttribute(`aria-label`);if(a)return{name:`${n} [${a}]`,path:t};if(i)return{name:`${i}`,path:t};if(typeof r==`string`&&r){let e=r.split(/[\s_-]+/).map(e=>e.replace(/[A-Z0-9]{5,}.*$/,``)).filter(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e)).slice(0,2);if(e.length>0)return{name:e.join(` `),path:t}}return{name:n===`div`?`container`:n,path:t}}return{name:n,path:t}}function la(e){let t=[],n=e.textContent?.trim();n&&n.length<100&&t.push(n);let r=e.previousElementSibling;if(r){let e=r.textContent?.trim();e&&e.length<50&&t.unshift(`[before: "${e.slice(0,40)}"]`)}let i=e.nextElementSibling;if(i){let e=i.textContent?.trim();e&&e.length<50&&t.push(`[after: "${e.slice(0,40)}"]`)}return t.join(` `)}function ua(e){let t=aa(e);if(!t)return``;let n=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(t=>t!==e&&t instanceof HTMLElement);if(n.length===0)return``;let r=n.slice(0,4).map(e=>{let t=e.tagName.toLowerCase(),n=e.className,r=``;if(typeof n==`string`&&n){let e=n.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(r=`.${e}`)}if(t===`button`||t===`a`){let n=e.textContent?.trim().slice(0,15);if(n)return`${t}${r} "${n}"`}return`${t}${r}`}),i=t.tagName.toLowerCase();if(typeof t.className==`string`&&t.className){let e=t.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e));e&&(i=`.${e}`)}let a=t.children.length,o=a>r.length+1?` (${a} total in ${i})`:``;return r.join(`, `)+o}function da(e){let t=e.className;return typeof t!=`string`||!t?``:t.split(/\s+/).filter(e=>e.length>0).map(e=>{let t=e.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return t?t[1]:e}).filter((e,t,n)=>n.indexOf(e)===t).join(`, `)}var fa=new Set([`none`,`normal`,`auto`,`0px`,`rgba(0, 0, 0, 0)`,`transparent`,`static`,`visible`]),pa=new Set(`p.span.h1.h2.h3.h4.h5.h6.label.li.td.th.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.a.time.cite.q`.split(`.`)),ma=new Set([`input`,`textarea`,`select`]),ha=new Set([`img`,`video`,`canvas`,`svg`]),ga=new Set([`div`,`section`,`article`,`nav`,`header`,`footer`,`aside`,`main`,`ul`,`ol`,`form`,`fieldset`]);function _a(e){if(typeof window>`u`)return{};let t=window.getComputedStyle(e),n={},r=e.tagName.toLowerCase(),i;i=pa.has(r)?[`color`,`fontSize`,`fontWeight`,`fontFamily`,`lineHeight`]:r===`button`||r===`a`&&e.getAttribute(`role`)===`button`||ma.has(r)?[`backgroundColor`,`color`,`padding`,`borderRadius`,`fontSize`]:ha.has(r)?[`width`,`height`,`objectFit`,`borderRadius`]:ga.has(r)?[`display`,`padding`,`margin`,`gap`,`backgroundColor`]:[`color`,`fontSize`,`margin`,`padding`,`backgroundColor`];for(let e of i){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!fa.has(i)&&(n[e]=i)}return n}var va=`color.backgroundColor.borderColor.fontSize.fontWeight.fontFamily.lineHeight.letterSpacing.textAlign.width.height.padding.margin.border.borderRadius.display.position.top.right.bottom.left.zIndex.flexDirection.justifyContent.alignItems.gap.opacity.visibility.overflow.boxShadow.transform`.split(`.`);function ya(e){if(typeof window>`u`)return``;let t=window.getComputedStyle(e),n=[];for(let e of va){let r=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),i=t.getPropertyValue(r);i&&!fa.has(i)&&n.push(`${r}: ${i}`)}return n.join(`; `)}function ba(e){if(!e)return;let t={},n=e.split(`;`).map(e=>e.trim()).filter(Boolean);for(let e of n){let n=e.indexOf(`:`);if(n>0){let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();r&&i&&(t[r]=i)}}return Object.keys(t).length>0?t:void 0}function xa(e){let t=[],n=e.getAttribute(`role`),r=e.getAttribute(`aria-label`),i=e.getAttribute(`aria-describedby`),a=e.getAttribute(`tabindex`),o=e.getAttribute(`aria-hidden`);return n&&t.push(`role="${n}"`),r&&t.push(`aria-label="${r}"`),i&&t.push(`aria-describedby="${i}"`),a&&t.push(`tabindex=${a}`),o===`true`&&t.push(`aria-hidden`),e.matches(`a, button, input, select, textarea, [tabindex]`)&&t.push(`focusable`),t.join(`, `)}function Sa(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!==`html`;){let e=n.tagName.toLowerCase(),r=e;if(n.id)r=`${e}#${n.id}`;else if(n.className&&typeof n.className==`string`){let t=n.className.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2);t&&(r=`${e}.${t}`)}let i=aa(n);!n.parentElement&&i&&(r=`\u27E8shadow\u27E9 ${r}`),t.unshift(r),n=i}return t.join(` > `)}var Ca=new Set([`nav`,`header`,`main`,`section`,`article`,`footer`,`aside`]),wa={banner:`Header`,navigation:`Navigation`,main:`Main Content`,contentinfo:`Footer`,complementary:`Sidebar`,region:`Section`},Ta={nav:`Navigation`,header:`Header`,main:`Main Content`,section:`Section`,article:`Article`,footer:`Footer`,aside:`Sidebar`},Ea=new Set([`script`,`style`,`noscript`,`link`,`meta`]),Da=40;function Oa(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function ka(e){let t=e.tagName.toLowerCase();if([`nav`,`header`,`footer`,`main`].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className==`string`){let n=e.className.split(/\s+/).filter(e=>e.length>0).find(e=>e.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(e)&&!/^[a-z]{1,2}$/.test(e));if(n){let e=`${t}.${CSS.escape(n)}`;if(document.querySelectorAll(e).length===1)return e}}let n=e.parentElement;if(n){let r=Array.from(n.children).indexOf(e)+1;return`${n===document.body?`body`:ka(n)} > ${t}:nth-child(${r})`}return t}function Aa(e){let t=e.tagName.toLowerCase(),n=e.getAttribute(`aria-label`);if(n)return n;let r=e.getAttribute(`role`);if(r&&wa[r])return wa[r];if(Ta[t])return Ta[t];let i=e.querySelector(`h1, h2, h3, h4, h5, h6`);if(i){let e=i.textContent?.trim();if(e&&e.length<=50)return e;if(e)return e.slice(0,47)+`...`}let{name:a}=ca(e);return a.charAt(0).toUpperCase()+a.slice(1)}function ja(e){let t=e.className;return typeof t!=`string`||!t?null:t.split(/\s+/).map(e=>e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``)).find(e=>e.length>2&&!/^[a-z]{1,2}$/.test(e))||null}function Ma(e){let t=e.textContent?.trim();if(!t)return null;let n=t.replace(/\s+/g,` `);return n.length<=30?n:n.slice(0,30)+`…`}function Na(){let e=document.querySelector(`main`)||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let r=[];return n.forEach((e,t)=>{if(!(e instanceof HTMLElement))return;let n=e.tagName.toLowerCase();if(Ea.has(n)||e.hasAttribute(`data-feedback-toolbar`)||e.closest(`[data-feedback-toolbar]`))return;let i=window.getComputedStyle(e);if(i.display===`none`||i.visibility===`hidden`)return;let a=e.getBoundingClientRect();if(a.height<Da)return;let o=Ca.has(n),s=e.getAttribute(`role`)&&wa[e.getAttribute(`role`)],c=n===`div`&&a.height>=60;if(!o&&!s&&!c)return;let l=window.scrollY,u=Oa(e),d={x:a.x,y:u?a.y:a.y+l,width:a.width,height:a.height};r.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Aa(e),tagName:n,selector:ka(e),role:e.getAttribute(`role`),className:ja(e),textSnippet:Ma(e),originalRect:d,currentRect:{...d},originalIndex:t,isFixed:u})}),r}function Pa(e){let t=window.scrollY,n=e.getBoundingClientRect(),r=Oa(e),i={x:n.x,y:r?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,o=0;return a&&(o=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Aa(e),tagName:e.tagName.toLowerCase(),selector:ka(e),role:e.getAttribute(`role`),className:ja(e),textSnippet:Ma(e),originalRect:i,currentRect:{...i},originalIndex:o,isFixed:r}}var Fa={bg:`rgba(59, 130, 246, 0.08)`,border:`rgba(59, 130, 246, 0.5)`,pill:`#3b82f6`},Ia=[`nw`,`n`,`ne`,`e`,`se`,`s`,`sw`,`w`],La=24,Ra=16,za=5;function Ba(e,t,n,r){let i=1/0,a=1/0,o=e.x,s=e.x+e.width,c=e.x+e.width/2,l=e.y,u=e.y+e.height,d=e.y+e.height/2,f=[];for(let e of t)n.has(e.id)||f.push(e.currentRect);r&&f.push(...r);for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,f=e.y,p=e.y+e.height,m=e.y+e.height/2;for(let e of[o,s,c])for(let a of[t,n,r]){let t=a-e;Math.abs(t)<za&&Math.abs(t)<Math.abs(i)&&(i=t)}for(let e of[l,u,d])for(let t of[f,p,m]){let n=t-e;Math.abs(n)<za&&Math.abs(n)<Math.abs(a)&&(a=n)}}let p=Math.abs(i)<za?i:0,m=Math.abs(a)<za?a:0,h=[],g=new Set,_=o+p,v=s+p,y=c+p,b=l+m,x=u+m,S=d+m;for(let e of f){let t=e.x,n=e.x+e.width,r=e.x+e.width/2,i=e.y,a=e.y+e.height,o=e.y+e.height/2;for(let e of[t,r,n])for(let t of[_,y,v])if(Math.abs(t-e)<.5){let t=`x:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`x`,pos:e}))}for(let e of[i,o,a])for(let t of[b,S,x])if(Math.abs(t-e)<.5){let t=`y:${Math.round(e)}`;g.has(t)||(g.add(t),h.push({axis:`y`,pos:e}))}}return{dx:p,dy:m,guides:h}}var Va=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function Ha(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest(`[data-feedback-toolbar]`))return null;if(Va.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let e=t.getBoundingClientRect();if(e.width>=Ra&&e.height>=Ra)return t;t=t.parentElement}return null}function Ua({rearrangeState:e,onChange:t,isDarkMode:n,exiting:r,className:i,blankCanvas:a,extraSnapRects:o,onSelectionChange:s,deselectSignal:c,onDragMove:l,onDragEnd:u,clearSignal:d}){let{sections:f}=e,p=(0,_.useRef)(e);p.current=e;let[m,h]=(0,_.useState)(new Set),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(d);(0,_.useEffect)(()=>{d!==void 0&&d!==y.current&&(y.current=d,f.length>0&&v(!0))},[d,f.length]);let b=(0,_.useRef)(c);(0,_.useEffect)(()=>{c!==b.current&&(b.current=c,h(new Set))},[c]);let[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(!1),ee=(0,_.useRef)(!1),T=(0,_.useCallback)(e=>{let t=f.find(t=>t.id===e);t&&(ee.current=!!t.note,S(e),w(!1))},[f]),E=(0,_.useCallback)(()=>{x&&(w(!0),W(()=>{S(null),w(!1)},150))},[x]),D=(0,_.useCallback)(n=>{x&&(t({...e,sections:f.map(e=>e.id===x?{...e,note:n.trim()||void 0}:e)}),E())},[x,f,e,t,E]);(0,_.useEffect)(()=>{r&&x&&E()},[r]);let[te,O]=(0,_.useState)(new Set),ne=(0,_.useRef)(new Map),[k,A]=(0,_.useState)(null),[j,re]=(0,_.useState)(null),[M,N]=(0,_.useState)([]),[ie,ae]=(0,_.useState)(0),oe=(0,_.useRef)(null),se=(0,_.useRef)(new Set),ce=(0,_.useRef)(new Map),[P,F]=(0,_.useState)(new Map),[le,ue]=(0,_.useState)(new Map),de=(0,_.useRef)(new Set),fe=(0,_.useRef)(new Map),pe=(0,_.useRef)(s);pe.current=s;let me=(0,_.useRef)(l);me.current=l;let he=(0,_.useRef)(u);he.current=u,(0,_.useEffect)(()=>{a&&h(new Set)},[a]);let[ge,_e]=(0,_.useState)(()=>!e.sections.some(e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1}));(0,_.useEffect)(()=>{if(!ge){let e=W(()=>_e(!0),380);return()=>clearTimeout(e)}},[]);let ve=(0,_.useRef)(new Set);(0,_.useEffect)(()=>{ve.current=new Set(f.map(e=>e.selector))},[f]),(0,_.useEffect)(()=>{let e=()=>ae(window.scrollY);return e(),window.addEventListener(`scroll`,e,{passive:!0}),window.addEventListener(`resize`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),window.removeEventListener(`resize`,e)}},[]),(0,_.useEffect)(()=>{let e=e=>{if(oe.current){A(null);return}let t=document.elementFromPoint(e.clientX,e.clientY);if(!t){A(null);return}if(t.closest(`[data-feedback-toolbar]`)){A(null);return}if(t.closest(`[data-design-placement]`)){A(null);return}if(t.closest(`[data-annotation-popup]`)){A(null);return}let n=Ha(t);if(!n){A(null);return}for(let e of ve.current)try{let t=document.querySelector(e);if(t&&(t===n||n.contains(t))){A(null);return}}catch{}let r=n.getBoundingClientRect();A({x:r.x,y:r.y,w:r.width,h:r.height})};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[f]),(0,_.useEffect)(()=>{let e=document.body.style.userSelect;return document.body.style.userSelect=`none`,()=>{document.body.style.userSelect=e}},[]),(0,_.useEffect)(()=>{let n=n=>{if(oe.current||n.button!==0)return;let r=n.target;if(!r||r.closest(`[data-feedback-toolbar]`)||r.closest(`[data-design-placement]`)||r.closest(`[data-annotation-popup]`))return;let i=Ha(r),a=!1;if(i)for(let e of ve.current)try{let t=document.querySelector(e);if(t&&(t===i||i.contains(t))){a=!0;break}}catch{}let s=!!(n.shiftKey||n.metaKey||n.ctrlKey);if(i&&!a){n.preventDefault(),n.stopPropagation();let r=Pa(i),a=[...f,r],c=[...e.originalOrder,r.id];t({...e,sections:a,originalOrder:c});let l=new Set([r.id]);h(l),pe.current?.(l,s),A(null);let u=n.clientX,d=n.clientY,p={x:r.currentRect.x,y:r.currentRect.y};r.originalRect;let m=!1,g=0,_=0;oe.current=`move`;let v=e=>{let t=e.clientX-u,n=e.clientY-d;if(!m&&(Math.abs(t)>2||Math.abs(n)>2)&&(m=!0),!m)return;let i=Ba({x:p.x+t,y:p.y+n,width:r.currentRect.width,height:r.currentRect.height},a,new Set([r.id]),o);N(i.guides);let s=t+i.dx,c=n+i.dy;g=s,_=c;let l=document.querySelector(`[data-rearrange-section="${r.id}"]`);l&&(l.style.transform=`translate(${s}px, ${c}px)`),F(new Map([[r.id,{x:p.x+s,y:p.y+c,width:r.currentRect.width,height:r.currentRect.height}]])),me.current?.(s,c)},y=()=>{window.removeEventListener(`mousemove`,v),window.removeEventListener(`mouseup`,y),oe.current=null,N([]),F(new Map);let n=document.querySelector(`[data-rearrange-section="${r.id}"]`);n&&(n.style.transform=``),m&&t({...e,sections:a.map(e=>e.id===r.id?{...e,currentRect:{...e.currentRect,x:Math.max(0,p.x+g),y:Math.max(0,p.y+_)}}:e),originalOrder:c}),he.current?.(g,_,m)};window.addEventListener(`mousemove`,v),window.addEventListener(`mouseup`,y)}else if(a&&i){n.preventDefault();for(let e of f)try{let t=document.querySelector(e.selector);if(t&&t===i){let t=new Set([e.id]);h(t),pe.current?.(t,s);return}}catch{}s||(h(new Set),pe.current?.(new Set,!1))}else s||(h(new Set),pe.current?.(new Set,!1))};return document.addEventListener(`mousedown`,n,!0),()=>document.removeEventListener(`mousedown`,n,!0)},[f,e,t]),(0,_.useEffect)(()=>{let n=n=>{let r=n.target;if(!(r.tagName===`INPUT`||r.tagName===`TEXTAREA`||r.isContentEditable)){if((n.key===`Backspace`||n.key===`Delete`)&&m.size>0){n.preventDefault();let e=new Set(m);O(t=>{let n=new Set(t);for(let t of e)n.add(t);return n}),h(new Set),W(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>!e.has(t.id)),originalOrder:n.originalOrder.filter(t=>!e.has(t))}),O(t=>{let n=new Set(t);for(let t of e)n.delete(t);return n})},180);return}if([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(n.key)&&m.size>0){n.preventDefault();let r=n.shiftKey?20:1,i=n.key===`ArrowLeft`?-r:n.key===`ArrowRight`?r:0,a=n.key===`ArrowUp`?-r:n.key===`ArrowDown`?r:0;t({...e,sections:f.map(e=>m.has(e.id)?{...e,currentRect:{...e.currentRect,x:Math.max(0,e.currentRect.x+i),y:Math.max(0,e.currentRect.y+a)}}:e)});return}n.key===`Escape`&&m.size>0&&h(new Set)}};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[m,f,e,t]);let ye=(0,_.useCallback)((n,r)=>{if(n.button!==0)return;let i=n.target;if(i.closest(`.${q.handle}`)||i.closest(`.${q.deleteButton}`))return;n.preventDefault(),n.stopPropagation();let a;n.shiftKey||n.metaKey||n.ctrlKey?(a=new Set(m),a.has(r)?a.delete(r):a.add(r)):a=m.has(r)?new Set(m):new Set([r]),h(a),(a.size!==m.size||[...a].some(e=>!m.has(e)))&&pe.current?.(a,!!(n.shiftKey||n.metaKey||n.ctrlKey));let s=n.clientX,c=n.clientY,l=new Map;for(let e of f)a.has(e.id)&&l.set(e.id,{x:e.currentRect.x,y:e.currentRect.y});oe.current=`move`;let u=!1,d=0,p=0,g=new Map;for(let e of f)if(a.has(e.id)){let t=document.querySelector(`[data-rearrange-section="${e.id}"]`);g.set(e.id,{outlineEl:t,curW:e.currentRect.width,curH:e.currentRect.height})}let _=e=>{let t=e.clientX-s,n=e.clientY-c;if(t===0&&n===0)return;u=!0;let r=1/0,i=1/0,m=-1/0,h=-1/0;for(let[e,{curW:a,curH:o}]of g){let s=l.get(e);if(!s)continue;let c=s.x+t,u=s.y+n;r=Math.min(r,c),i=Math.min(i,u),m=Math.max(m,c+a),h=Math.max(h,u+o)}let _=Ba({x:r,y:i,width:m-r,height:h-i},f,a,o),v=t+_.dx,y=n+_.dy;d=v,p=y,N(_.guides);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=`translate(${v}px, ${y}px)`);let b=new Map;for(let[e,{curW:t,curH:n}]of g){let r=l.get(e);if(r){let i={x:Math.max(0,r.x+v),y:Math.max(0,r.y+y),width:t,height:n};b.set(e,i)}}F(b),me.current?.(v,y)},v=n=>{window.removeEventListener(`mousemove`,_),window.removeEventListener(`mouseup`,v),oe.current=null,N([]),F(new Map);for(let[,{outlineEl:e}]of g)e&&(e.style.transform=``);if(u){let r=n.clientX-s,i=n.clientY-c;if(Math.abs(r)<5&&Math.abs(i)<5)t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:t.x,y:t.y}}:e})});else{t({...e,sections:f.map(e=>{let t=l.get(e.id);return t?{...e,currentRect:{...e.currentRect,x:Math.max(0,t.x+d),y:Math.max(0,t.y+p)}}:e})}),he.current?.(d,p,!0);return}}he.current?.(0,0,!1)};window.addEventListener(`mousemove`,_),window.addEventListener(`mouseup`,v)},[m,f,e,t]),I=(0,_.useCallback)((n,r,i)=>{n.preventDefault(),n.stopPropagation();let a=f.find(e=>e.id===r);if(!a)return;h(new Set([r])),oe.current=`resize`;let o=n.clientX,s=n.clientY,c={...a.currentRect};a.originalRect;let l=c.width/c.height,u={...c},d=document.querySelector(`[data-rearrange-section="${r}"]`),p=e=>{let t=e.clientX-o,n=e.clientY-s,a=c.x,f=c.y,p=c.width,m=c.height;i.includes(`e`)&&(p=Math.max(La,c.width+t)),i.includes(`w`)&&(p=Math.max(La,c.width-t),a=c.x+c.width-p),i.includes(`s`)&&(m=Math.max(La,c.height+n)),i.includes(`n`)&&(m=Math.max(La,c.height-n),f=c.y+c.height-m),e.shiftKey&&(i.length===2?(Math.abs(p-c.width)>Math.abs(m-c.height)?m=p/l:p=m*l,i.includes(`w`)&&(a=c.x+c.width-p),i.includes(`n`)&&(f=c.y+c.height-m)):(i===`e`||i===`w`?m=p/l:p=m*l,i===`w`&&(a=c.x+c.width-p),i===`n`&&(f=c.y+c.height-m))),u={x:a,y:f,width:p,height:m},d&&(d.style.left=`${a}px`,d.style.top=`${f-ie}px`,d.style.width=`${p}px`,d.style.height=`${m}px`),re({x:e.clientX+12,y:e.clientY+12,text:`${Math.round(p)} \xD7 ${Math.round(m)}`}),F(new Map([[r,u]]))},m=()=>{window.removeEventListener(`mousemove`,p),window.removeEventListener(`mouseup`,m),re(null),oe.current=null,F(new Map),t({...e,sections:f.map(e=>e.id===r?{...e,currentRect:u}:e)})};window.addEventListener(`mousemove`,p),window.addEventListener(`mouseup`,m)},[f,e,t,ie]),be=(0,_.useCallback)(e=>{O(t=>{let n=new Set(t);return n.add(e),n}),h(t=>{let n=new Set(t);return n.delete(e),n}),W(()=>{let n=p.current;t({...n,sections:n.sections.filter(t=>t.id!==e),originalOrder:n.originalOrder.filter(t=>t!==e)}),O(t=>{let n=new Set(t);return n.delete(e),n})},180)},[t]),xe=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1||Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1},Se=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.x-n.x)>1||Math.abs(t.y-n.y)>1},Ce=e=>{let t=e.originalRect,n=e.currentRect;return Math.abs(t.width-n.width)>1||Math.abs(t.height-n.height)>1};for(let e of f)ce.current.has(e.id)||(Se(e)?ce.current.set(e.id,`move`):Ce(e)&&ce.current.set(e.id,`resize`));for(let e of ce.current.keys())f.some(t=>t.id===e)||ce.current.delete(e);let we=f.filter(e=>{try{if(te.has(e.id)||m.has(e.id))return!0;let t=document.querySelector(e.selector);if(!t)return!1;let n=t.getBoundingClientRect(),r=e.originalRect;return Math.abs(n.width-r.width)+Math.abs(n.height-r.height)<200}catch{return!1}}),Te=we.filter(e=>xe(e)),Ee=we.filter(e=>!xe(e)),De=new Set(Te.map(e=>e.id));for(let e of se.current)De.has(e)||se.current.delete(e);let Oe=[...De].sort().join(`,`);for(let e of Te)fe.current.set(e.id,{currentRect:e.currentRect,originalRect:e.originalRect,isFixed:e.isFixed});return(0,_.useEffect)(()=>{let e=de.current;de.current=De;let t=new Map;for(let n of e)if(!De.has(n)){if(!f.some(e=>e.id===n))continue;let e=fe.current.get(n);e&&(t.set(n,{orig:e.originalRect,target:e.currentRect,isFixed:e.isFixed}),fe.current.delete(n))}if(t.size>0){ue(e=>{let n=new Map(e);for(let[e,r]of t)n.set(e,r);return n});let e=W(()=>{ue(e=>{let n=new Map(e);for(let e of t.keys())n.delete(e);return n})},250);return()=>clearTimeout(e)}},[Oe,f]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`${q.rearrangeOverlay} ${n?``:q.light} ${r?q.overlayExiting:``}${i?` ${i}`:``}`,"data-feedback-toolbar":!0,children:[k&&(0,H.jsx)(`div`,{className:q.hoverHighlight,style:{left:k.x,top:k.y,width:k.w,height:k.h}}),Ee.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-ie,i=Fa,a=m.has(e.id);return(0,H.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${q.sectionOutline} ${a?q.selected:``} ${g||r||te.has(e.id)?q.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,borderColor:i.border,backgroundColor:i.bg,...ge?{}:{opacity:0,animation:`none`,transition:`none`}},onMouseDown:t=>ye(t,e.id),onDoubleClick:()=>T(e.id),children:[(0,H.jsx)(`span`,{className:q.sectionLabel,style:{backgroundColor:i.pill},children:e.label}),(0,H.jsx)(`span`,{className:`${q.sectionAnnotation} ${e.note?q.annotationVisible:``}`,children:(e.note&&ne.current.set(e.id,e.note),e.note||ne.current.get(e.id)||``)}),(0,H.jsxs)(`span`,{className:q.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,H.jsx)(`div`,{className:q.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>be(e.id),children:`✕`}),Ia.map(t=>(0,H.jsx)(`div`,{className:`${q.handle} ${q[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>I(n,e.id,t)},t))]},e.id)}),Te.map(e=>{let t=e.currentRect,n=e.isFixed?t.y:t.y-ie,i=m.has(e.id),o=Se(e),s=Ce(e);if(a&&!i)return null;let c=!se.current.has(e.id);return c&&se.current.add(e.id),(0,H.jsxs)(`div`,{"data-rearrange-section":e.id,className:`${q.ghostOutline} ${i?q.selected:``} ${g||r||te.has(e.id)?q.exiting:``}`,style:{left:t.x,top:n,width:t.width,height:t.height,...ge?{}:{opacity:0,animation:`none`,transition:`none`},...c?{}:{animation:`none`}},onMouseDown:t=>ye(t,e.id),onDoubleClick:()=>T(e.id),children:[(0,H.jsx)(`span`,{className:q.sectionLabel,style:{backgroundColor:Fa.pill},children:e.label}),(0,H.jsx)(`span`,{className:`${q.sectionAnnotation} ${e.note?q.annotationVisible:``}`,children:(e.note&&ne.current.set(e.id,e.note),e.note||ne.current.get(e.id)||``)}),(0,H.jsxs)(`span`,{className:q.sectionDimensions,children:[Math.round(t.width),` × `,Math.round(t.height)]}),(0,H.jsx)(`div`,{className:q.deleteButton,onMouseDown:e=>e.stopPropagation(),onClick:()=>be(e.id),children:`✕`}),Ia.map(t=>(0,H.jsx)(`div`,{className:`${q.handle} ${q[`handle${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`,onMouseDown:n=>I(n,e.id,t)},t)),(0,H.jsx)(`span`,{className:q.ghostBadge,children:(()=>{let t=ce.current.get(e.id);if(o&&s){let[e,n]=t===`resize`?[`Resize`,`Move`]:[`Move`,`Resize`];return(0,H.jsxs)(H.Fragment,{children:[`Suggested `,e,` `,(0,H.jsxs)(`span`,{className:q.ghostBadgeExtra,children:[`& `,n]})]})}return`Suggested ${s?`Resize`:`Move`}`})()})]},e.id)})]}),!a&&(()=>{let e=[];for(let t of Te){let n=P.get(t.id);e.push({id:t.id,orig:t.originalRect,target:n||t.currentRect,isFixed:t.isFixed,isSelected:m.has(t.id),isExiting:te.has(t.id)})}for(let[t,n]of P)if(!e.some(e=>e.id===t)){let r=f.find(e=>e.id===t);r&&e.push({id:t,orig:r.originalRect,target:n,isFixed:r.isFixed,isSelected:m.has(t)})}for(let[t,n]of le)e.some(e=>e.id===t)||e.push({id:t,orig:n.orig,target:n.target,isFixed:n.isFixed,isSelected:!1,isExiting:!0});return e.length===0?null:(0,H.jsxs)(`svg`,{className:`${q.connectorSvg} ${g||r?q.connectorExiting:``}`,children:[e.map(({id:e,orig:t,target:n,isFixed:r,isSelected:i,isExiting:a})=>{let o=t.x+t.width/2,s=(r?t.y:t.y-ie)+t.height/2,c=n.x+n.width/2,l=(r?n.y:n.y-ie)+n.height/2,u=c-o,d=l-s,f=Math.sqrt(u*u+d*d);if(f<2)return null;let p=Math.min(1,f/40),m=Math.min(f*.3,60),h=f>0?-d/f:0,g=f>0?u/f:0,_=(o+c)/2+h*m,v=(s+l)/2+g*m,y=P.has(e),b=y||i?1:.4,x=y||i?1:.5;return(0,H.jsxs)(`g`,{className:a?q.connectorExiting:``,children:[(0,H.jsx)(`path`,{className:q.connectorLine,d:`M ${o} ${s} Q ${_} ${v} ${c} ${l}`,fill:`none`,stroke:`rgba(59, 130, 246, 0.45)`,strokeWidth:`1.5`,opacity:b*p}),(0,H.jsx)(`circle`,{className:q.connectorDot,cx:o,cy:s,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`}),(0,H.jsx)(`circle`,{className:q.connectorDot,cx:c,cy:l,r:4*p,fill:`rgba(59, 130, 246, 0.8)`,stroke:`#fff`,strokeWidth:`1.5`,opacity:x*p,filter:`url(#connDotShadow)`})]},`conn-${e}`)}),(0,H.jsx)(`defs`,{children:(0,H.jsx)(`filter`,{id:`connDotShadow`,x:`-50%`,y:`-50%`,width:`200%`,height:`200%`,children:(0,H.jsx)(`feDropShadow`,{dx:`0`,dy:`0.5`,stdDeviation:`1`,floodOpacity:`0.15`})})})]})})(),x&&(()=>{let e=f.find(e=>e.id===x);if(!e)return null;let t=e.currentRect,r=e.isFixed?t.y:t.y-ie,i=t.x+t.width/2,a=r-8,o=r+t.height+8,s=a>200,c=o<window.innerHeight-100,l=Math.max(160,Math.min(window.innerWidth-160,i)),u;return u=s?{left:l,bottom:window.innerHeight-a}:c?{left:l,top:o}:{left:l,top:Math.max(80,window.innerHeight/2-80)},(0,H.jsx)(Cr,{element:e.label,placeholder:`Add a note about this section`,initialValue:e.note??``,submitLabel:ee.current?`Save`:`Set`,onSubmit:D,onCancel:E,onDelete:ee.current?()=>{D(``)}:void 0,isExiting:C,lightMode:!n,style:u})})(),j&&(0,H.jsx)(`div`,{className:q.sizeIndicator,style:{left:j.x,top:j.y},"data-feedback-toolbar":!0,children:j.text}),M.map((e,t)=>(0,H.jsx)(`div`,{className:q.guideLine,style:e.axis===`x`?{position:`fixed`,left:e.pos,top:0,width:1,height:`100vh`}:{position:`fixed`,left:0,top:e.pos-ie,width:`100vw`,height:1}},`${e.axis}-${e.pos}-${t}`))]})}var Wa=new Set([`script`,`style`,`noscript`,`link`,`meta`,`br`,`hr`]);function Ga(){let e=document.querySelector(`main`)||document.body,t=[],n=Array.from(e.children),r=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let e of r){if(!(e instanceof HTMLElement)||Wa.has(e.tagName.toLowerCase())||e.hasAttribute(`data-feedback-toolbar`))continue;let n=window.getComputedStyle(e);if(n.display===`none`||n.visibility===`hidden`)continue;let r=e.getBoundingClientRect();if(!(r.height<10||r.width<10)){t.push({label:Aa(e),selector:ka(e),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height});for(let n of Array.from(e.children)){if(!(n instanceof HTMLElement)||Wa.has(n.tagName.toLowerCase())||n.hasAttribute(`data-feedback-toolbar`))continue;let e=window.getComputedStyle(n);if(e.display===`none`||e.visibility===`hidden`)continue;let r=n.getBoundingClientRect();r.height<10||r.width<10||t.push({label:Aa(n),selector:ka(n),top:r.top,bottom:r.bottom,left:r.left,right:r.right,area:r.width*r.height})}}}return t}function Ka(e){let t=window.scrollY;return e.map(({label:e,selector:n,rect:r})=>{let i=r.y-t;return{label:e,selector:n,top:i,bottom:i+r.height,left:r.x,right:r.x+r.width,area:r.width*r.height}})}function qa(e){let t=window.scrollY,n=e.y-t,r=e.x;return{top:n,bottom:n+e.height,left:r,right:r+e.width,area:e.width*e.height}}function Ja(e,t){let n=t?Ka(t):Ga(),r=qa(e),i=null,a=null,o=null,s=null,c=null;for(let t of n){if(Math.abs(t.left-r.left)<2&&Math.abs(t.top-r.top)<2&&Math.abs(t.right-t.left-e.width)<2&&Math.abs(t.bottom-t.top-e.height)<2)continue;t.left<=r.left+2&&t.right>=r.right-2&&t.top<=r.top+2&&t.bottom>=r.bottom-2&&t.area>r.area*1.5&&(!c||t.area<c._area)&&(c={label:t.label,selector:t.selector,_area:t.area});let n=r.right>t.left+5&&r.left<t.right-5,l=r.bottom>t.top+5&&r.top<t.bottom-5;if(n&&t.bottom<=r.top+5){let e=Math.round(r.top-t.bottom);(!i||e<i._dist)&&(i={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(n&&t.top>=r.bottom-5){let e=Math.round(t.top-r.bottom);(!a||e<a._dist)&&(a={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.right<=r.left+5){let e=Math.round(r.left-t.right);(!o||e<o._dist)&&(o={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}if(l&&t.left>=r.right-5){let e=Math.round(t.left-r.right);(!s||e<s._dist)&&(s={label:t.label,selector:t.selector,gap:Math.max(0,e),_dist:e})}}let l=window.innerWidth,u=window.innerHeight,d=Xa(e,l),f=e=>e?{label:e.label,selector:e.selector,gap:e.gap}:null,p=Ya(r,e,l,u,c?{label:c.label,selector:c.selector,_area:c._area}:null,n);return{above:f(i),below:f(a),left:f(o),right:f(s),alignment:d,containedIn:c?{label:c.label,selector:c.selector}:null,outOfBounds:p}}function Ya(e,t,n,r,i,a){let o={},s=!1,c=[];if(e.left<-2&&c.push(`left`),e.right>n+2&&c.push(`right`),e.top<-2&&c.push(`top`),e.bottom>r+2&&c.push(`bottom`),c.length>0&&(o.viewport=c,s=!0),i){let t=a.find(e=>e.label===i.label&&e.selector===i.selector&&Math.abs(e.area-i._area)<10);if(t){let n=[];e.left<t.left-2&&n.push(`left`),e.right>t.right+2&&n.push(`right`),e.top<t.top-2&&n.push(`top`),e.bottom>t.bottom+2&&n.push(`bottom`),n.length>0&&(o.container={label:i.label,edges:n},s=!0)}}return s?o:null}function Xa(e,t){if(e.width/t>.85)return`full-width`;let n=e.x+e.width/2-t/2,r=t*.08;return Math.abs(n)<r?`center`:n<0?`left`:`right`}function Za(e){switch(e){case`full-width`:return`full-width`;case`center`:return`centered`;case`left`:return`left-aligned`;case`right`:return`right-aligned`}}function Qa(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:``}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:``}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:``}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:``}`));let r=Za(e.alignment);return e.containedIn?n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in \`${e.containedIn.label}\``):n.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(`, `)} edge${e.outOfBounds.viewport.length>1?`s`:``})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)} edge${e.outOfBounds.container.edges.length>1?`s`:``})`)),n}function $a(e,t,n){let r=[];e.above&&r.push(`below \`${e.above.label}\``),e.below&&r.push(`above \`${e.below.label}\``),e.left&&r.push(`right of \`${e.left.label}\``),e.right&&r.push(`left of \`${e.right.label}\``),e.containedIn&&r.push(`inside \`${e.containedIn.label}\``),r.push(Za(e.alignment)),e.outOfBounds?.viewport&&r.push(`**outside viewport** (${e.outOfBounds.viewport.join(`, `)})`),e.outOfBounds?.container&&r.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(`, `)})`);let i=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:``;return`at (${Math.round(t.x)}, ${Math.round(t.y)})${i}: ${r.join(`, `)}`}var eo=15;function to(e){if(e.length<2)return[];let t=[],n=new Set;for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.y-e[t].rect.y)<eo&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.x-t.rect.x);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.x-(r[e].rect.x+r[e].rect.width)));let o=Math.round(r.reduce((e,t)=>e+t.rect.y,0)/r.length);t.push({labels:r.map(e=>e.label),type:`row`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}for(let r=0;r<e.length;r++){if(n.has(r))continue;let i=[r];for(let t=r+1;t<e.length;t++)n.has(t)||Math.abs(e[r].rect.x-e[t].rect.x)<eo&&i.push(t);if(i.length>=2){let r=i.map(t=>e[t]);r.sort((e,t)=>e.rect.y-t.rect.y);let a=[];for(let e=0;e<r.length-1;e++)a.push(Math.round(r[e+1].rect.y-(r[e].rect.y+r[e].rect.height)));let o=Math.round(r.reduce((e,t)=>e+t.rect.x,0)/r.length);t.push({labels:r.map(e=>e.label),type:`column`,sharedEdge:o,gaps:a,avgGap:a.length?Math.round(a.reduce((e,t)=>e+t,0)/a.length):0}),i.forEach(e=>n.add(e))}}return t}function no(e){if(e.length<2)return[];let t=to(e.map(e=>({label:e.label,rect:e.originalRect}))),n=to(e.map(e=>({label:e.label,rect:e.currentRect}))),r=[],i=new Set;for(let e of t){let t=new Set(e.labels),a=null,o=0;for(let e of n){let n=e.labels.filter(e=>t.has(e)).length;n>=2&&n>o&&(a=e,o=n)}if(a){let n=a.labels.filter(e=>t.has(e)),o=n.join(`, `);if(a.type!==e.type){let t=e.type===`row`?`y`:`x`,n=a.type===`row`?`y`:`x`;r.push(`**${o}**: ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps) \u2192 ${a.type} (${n}\u2248${a.sharedEdge}, ${a.avgGap}px gaps)`)}else if(Math.abs(e.sharedEdge-a.sharedEdge)>20||Math.abs(e.avgGap-a.avgGap)>5){let t=e.type===`row`?`y`:`x`,n=Math.abs(e.sharedEdge-a.sharedEdge)>20?` ${t}: ${e.sharedEdge} \u2192 ${a.sharedEdge}`:``,i=Math.abs(e.avgGap-a.avgGap)>5?` gaps: ${e.avgGap}px \u2192 ${a.avgGap}px`:``;r.push(`**${o}**: ${e.type} shifted \u2014${n}${i}`)}n.forEach(e=>i.add(e))}else{let t=e.labels.join(`, `),n=e.type===`row`?`y`:`x`;r.push(`**${t}**: ${e.type} (${n}\u2248${e.sharedEdge}) dissolved`),e.labels.forEach(e=>i.add(e))}}for(let e of n)if(!e.labels.every(e=>i.has(e))&&!(e.labels.filter(e=>!i.has(e)).length<2)&&!t.some(t=>t.labels.filter(t=>e.labels.includes(t)).length>=2)){let t=e.type===`row`?`y`:`x`;r.push(`**${e.labels.join(`, `)}**: new ${e.type} (${t}\u2248${e.sharedEdge}, ${e.avgGap}px gaps)`),e.labels.forEach(e=>i.add(e))}let a=e.filter(e=>!i.has(e.label));if(a.length>=2){let e={};for(let t of a){let n=Math.round(t.currentRect.x/5)*5;(e[n]??(e[n]=[])).push(t.label)}for(let[t,n]of Object.entries(e))n.length>=2&&r.push(`**${n.join(`, `)}**: shared left edge at x\u2248${t}`)}return r}function X(e){if(typeof document>`u`)return{viewport:e,contentArea:null};let t=[],n=new Set,r=e=>{n.has(e)||e instanceof HTMLElement&&(e.hasAttribute(`data-feedback-toolbar`)||Wa.has(e.tagName.toLowerCase())||(n.add(e),t.push(e)))},i=document.querySelector(`main`);i&&r(i);let a=document.querySelector(`[role='main']`);a&&r(a);for(let e of Array.from(document.body.children))if(r(e),e.children){for(let t of Array.from(e.children))if(r(t),t.children)for(let e of Array.from(t.children))r(e)}let o=null;for(let n of t){let t=n.getBoundingClientRect();if(t.height<50)continue;let r=getComputedStyle(n);if(r.maxWidth&&r.maxWidth!==`none`&&r.maxWidth!==`0px`){(!o||t.width<o.rect.width)&&(o={el:n,rect:t});continue}!o&&t.width<e.width-20&&t.width>100&&(o={el:n,rect:t})}if(o){let{el:t,rect:n}=o;return{viewport:e,contentArea:{width:Math.round(n.width),left:Math.round(n.left),right:Math.round(n.right),centerX:Math.round(n.left+n.width/2),selector:ka(t)}}}return{viewport:e,contentArea:null}}function ro(e){if(typeof document>`u`)return null;let t=document.querySelector(e);if(!t?.parentElement)return null;let n=getComputedStyle(t.parentElement),r={parentDisplay:n.display,parentSelector:ka(t.parentElement)};return n.display.includes(`flex`)&&(r.flexDirection=n.flexDirection),n.display.includes(`grid`)&&n.gridTemplateColumns!==`none`&&(r.gridCols=n.gridTemplateColumns),n.gap&&n.gap!==`normal`&&n.gap!==`0px`&&(r.gap=n.gap),r}function io(e,t){let n=t.contentArea,r=n?n.width:t.viewport.width,i=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),o=Math.round(e.x-i),s=Math.round(i+r-(e.x+e.width)),c=(e.width/r*100).toFixed(1),l=e.x+e.width/2,u=Math.abs(l-a)<20,d=e.width/r>.95,f=[];return d?f.push("`width: 100%` of container"):f.push(`left \`${o}px\` in container, right \`${s}px\`, width \`${c}%\` (\`${Math.round(e.width)}px\`)`),u&&!d&&f.push("centered — `margin-inline: auto`"),f.join(` — `)}function ao(e){let{viewport:t,contentArea:n}=e,r=`### Reference Frame
`;if(r+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let e=n;r+=`- Content area: \`${e.width}px\` wide, left edge at \`x=${e.left}\`, right at \`x=${e.right}\` (\`${e.selector}\`)
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Horizontal position in container**: \`element.x - ${e.left}\` \u2192 use as \`margin-left\` or \`left\`
`,r+=`  - **Width as % of container**: \`element.width / ${e.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",r+=`  - **Centered**: if \`|element.centerX - ${e.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else r+=`- No distinct content container — elements positioned relative to full viewport
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,r+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return r+=`
`,r}function oo(e){let t=ro(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function so(e,t,n,r=`standard`){if(e.length===0)return``;let i=[...e].sort((e,t)=>Math.abs(e.y-t.y)<20?e.x-t.x:e.y-t.y),a=``;if(n?.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length===1?``:`s`} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length===1?``:`s`} placed

`,r===`compact`)return a+=`### Components
`,i.forEach((e,t)=>{let n=Ar[e.type]?.label||e.type;a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}),a;let o=X(t);a+=ao(o),a+=`### Components
`,i.forEach((e,t)=>{let n=Ar[e.type]?.label||e.type,i={x:e.x,y:e.y,width:e.width,height:e.height};a+=`${t+1}. **${n}** \u2014 \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`;let s=Qa(Ja(i),{includeLeftRight:r===`detailed`||r===`forensic`});for(let e of s)a+=`   - ${e}
`;let c=io(i,o);c&&(a+=`   - CSS: ${c}
`)}),a+=`
### Layout Analysis
`;let s=[];for(let e of i){let t=s.find(t=>Math.abs(t.y-e.y)<30);t?t.items.push(e):s.push({y:e.y,items:[e]})}if(s.sort((e,t)=>e.y-t.y),s.forEach((e,n)=>{e.items.sort((e,t)=>e.x-t.x);let r=e.items.map(e=>Ar[e.type]?.label||e.type);if(e.items.length===1){let i=e.items[0].width>t.width*.8;a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r[0]}${i?` — full width`:``}
`}else a+=`- Row ${n+1} (y\u2248${Math.round(e.y)}): ${r.join(` | `)} \u2014 ${e.items.length} items side by side
`}),r===`detailed`||r===`forensic`){a+=`
### Spacing & Gaps
`;for(let e=0;e<i.length-1;e++){let t=i[e],n=i[e+1],r=Ar[t.type]?.label||t.type,o=Ar[n.type]?.label||n.type,s=Math.round(n.y-(t.y+t.height)),c=Math.round(n.x-(t.x+t.width));Math.abs(t.y-n.y)<30?a+=`- ${r} \u2192 ${o}: \`${c}px\` horizontal gap
`:a+=`- ${r} \u2192 ${o}: \`${s}px\` vertical gap
`}if(r===`forensic`&&i.length>2){a+=`
### All Pairwise Gaps
`;for(let e=0;e<i.length;e++)for(let t=e+1;t<i.length;t++){let n=i[e],r=i[t],o=Ar[n.type]?.label||n.type,s=Ar[r.type]?.label||r.type,c=Math.round(r.y-(n.y+n.height)),l=Math.round(r.x-(n.x+n.width));a+=`- ${o} \u2194 ${s}: h=\`${l}px\` v=\`${c}px\`
`}}r===`forensic`&&(a+=`
### Z-Order (placement order)
`,e.forEach((e,t)=>{let n=Ar[e.type]?.label||e.type;a+=`${t}. ${n} at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`
`}))}a+=`
### Suggested Implementation
`;let c=i.some(e=>e.type===`navigation`),l=i.some(e=>e.type===`hero`),u=i.some(e=>e.type===`sidebar`),d=i.some(e=>e.type===`footer`),f=i.filter(e=>e.type===`card`),p=i.filter(e=>e.type===`form`),m=i.filter(e=>e.type===`table`),h=i.filter(e=>e.type===`modal`);if(c&&(a+=`- Top navigation bar with logo + nav links + CTA
`),l&&(a+=`- Hero section with heading, subtext, and call-to-action
`),u&&(a+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),f.length>1?a+=`- ${f.length}-column card grid \u2014 use CSS Grid or Flexbox
`:f.length===1&&(a+=`- Card component with image + content area
`),p.length>0&&(a+=`- ${p.length} form${p.length>1?`s`:``} \u2014 add proper labels, validation, and submit handling
`),m.length>0&&(a+=`- Data table — consider sortable columns and pagination
`),h.length>0&&(a+=`- Modal dialog — add overlay backdrop and focus trapping
`),d&&(a+=`- Multi-column footer with links
`),r===`detailed`||r===`forensic`){if(a+=`
### CSS Suggestions
`,u){let e=i.find(e=>e.type===`sidebar`);a+=`- \`display: grid; grid-template-columns: ${Math.round(e.width)}px 1fr;\`
`}if(f.length>1){let e=Math.round(f[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${f.length}, ${e}px); gap: 16px;\`
`}c&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function co(e,t=`standard`,n){let{sections:r}=e,i=[];for(let e of r){let n=e.originalRect,r=e.currentRect,a=Math.abs(n.x-r.x)>1||Math.abs(n.y-r.y)>1,o=Math.abs(n.width-r.width)>1||Math.abs(n.height-r.height)>1;if(!a&&!o){t===`forensic`&&i.push({section:e,posMoved:!1,sizeChanged:!1});continue}i.push({section:e,posMoved:a,sizeChanged:o})}if(i.length===0||t!==`forensic`&&i.every(e=>!e.posMoved&&!e.sizeChanged))return``;let a=`## Suggested Layout Changes

`,o=X({width:n?n.width:typeof window<`u`?window.innerWidth:0,height:n?n.height:typeof window<`u`?window.innerHeight:0});t!==`compact`&&(a+=ao(o)),t===`forensic`&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${r.length}

`);let s=e=>r.map(t=>({label:t.label,selector:t.selector,rect:e===`original`?t.originalRect:t.currentRect}));a+=`**Changes:**
`;for(let{section:e,posMoved:n,sizeChanged:r}of i){let i=e.originalRect,c=e.currentRect;if(!n&&!r){a+=`- ${e.label} \u2014 unchanged at (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(t===`compact`){n&&r?a+=`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)}) ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`:n?a+=`- Suggested: move **${e.label}** to (${Math.round(c.x)}, ${Math.round(c.y)})
`:a+=`- Suggested: resize **${e.label}** to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`;continue}if(n&&r?a+=`- Suggested: move and resize **${e.label}**
`:n?a+=`- Suggested: move **${e.label}**
`:a+=`- Suggested: resize **${e.label}** from ${Math.round(i.width)}\xD7${Math.round(i.height)}px to ${Math.round(c.width)}\xD7${Math.round(c.height)}px
`,n){let e=Ja(i,s(`original`)),n=Ja(c,s(`current`)),l=r?{width:i.width,height:i.height}:void 0;a+=`  - Currently ${$a(e,{x:i.x,y:i.y},l)}
`;let u=r?{width:c.width,height:c.height}:void 0,d=`at (${Math.round(c.x)}, ${Math.round(c.y)})`,f=u?`, ${Math.round(u.width)}\xD7${Math.round(u.height)}px`:``,p=Qa(n,{includeLeftRight:t===`detailed`||t===`forensic`});if(p.length>0){a+=`  - Suggested position ${d}${f}: ${p[0]}
`;for(let e=1;e<p.length;e++)a+=`    ${p[e]}
`}else a+=`  - Suggested position ${d}${f}
`;let m=io(c,o);m&&(a+=`  - CSS: ${m}
`)}let l=oo(e.selector);if(l&&(a+=`  - ${l}
`),a+=`  - Selector: \`${e.selector}\`
`,t===`detailed`||t===`forensic`){let n=e.className?`${e.tagName}.${e.className.split(` `)[0]}`:e.tagName;n!==e.selector&&(a+=`  - Element: \`${n}\`
`),e.role&&(a+=`  - Role: \`${e.role}\`
`),t===`forensic`&&e.textSnippet&&(a+=`  - Text: "${e.textSnippet}"
`)}t===`forensic`&&(a+=`  - Original rect: \`{ x: ${Math.round(i.x)}, y: ${Math.round(i.y)}, w: ${Math.round(i.width)}, h: ${Math.round(i.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(c.x)}, y: ${Math.round(c.y)}, w: ${Math.round(c.width)}, h: ${Math.round(c.height)} }\`
`)}if(t!==`compact`){let e=no(i.filter(e=>e.posMoved).map(e=>({label:e.section.label,originalRect:e.section.originalRect,currentRect:e.section.currentRect})));if(e.length>0){a+=`
### Layout Summary
`;for(let t of e)a+=`- ${t}
`}}if(t!==`compact`&&r.length>1){a+=`
### All Sections (current positions)
`;let e=[...r].sort((e,t)=>Math.abs(e.currentRect.y-t.currentRect.y)<20?e.currentRect.x-t.currentRect.x:e.currentRect.y-t.currentRect.y);for(let t of e){let e=t.currentRect,n=Math.abs(e.x-t.originalRect.x)>1||Math.abs(e.y-t.originalRect.y)>1||Math.abs(e.width-t.originalRect.width)>1||Math.abs(e.height-t.originalRect.height)>1;a+=`- ${t.label}: \`${Math.round(e.width)}\xD7${Math.round(e.height)}px\` at \`(${Math.round(e.x)}, ${Math.round(e.y)})\`${n?` ← suggested`:``}
`}}return a}var lo=`feedback-annotations-`,uo=7;function fo(e){return`${lo}${e}`}function po(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(fo(e));if(!t)return[];let n=JSON.parse(t),r=Date.now()-uo*24*60*60*1e3;return n.filter(e=>!e.timestamp||e.timestamp>r)}catch{return[]}}function mo(e,t){if(!(typeof window>`u`))try{localStorage.setItem(fo(e),JSON.stringify(t))}catch{}}function ho(){let e=new Map;if(typeof window>`u`)return e;try{let t=Date.now()-uo*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let r=localStorage.key(n);if(r?.startsWith(lo)){let n=r.slice(lo.length),i=localStorage.getItem(r);if(i){let r=JSON.parse(i).filter(e=>!e.timestamp||e.timestamp>t);r.length>0&&e.set(n,r)}}}}catch{}return e}function go(e,t,n){mo(e,t.map(e=>({...e,_syncedTo:n})))}var _o=`agentation-design-`;function vo(e){if(typeof window>`u`)return[];try{let t=localStorage.getItem(`${_o}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function yo(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${_o}${e}`,JSON.stringify(t))}catch{}}function bo(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${_o}${e}`)}catch{}}var xo=`agentation-rearrange-`;function So(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${xo}${e}`);return t?JSON.parse(t):null}catch{return null}}function Co(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${xo}${e}`,JSON.stringify(t))}catch{}}function wo(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${xo}${e}`)}catch{}}var To=`agentation-wireframe-`;function Eo(e){if(typeof window>`u`)return null;try{let t=localStorage.getItem(`${To}${e}`);return t?JSON.parse(t):null}catch{return null}}function Do(e,t){if(!(typeof window>`u`))try{localStorage.setItem(`${To}${e}`,JSON.stringify(t))}catch{}}function Oo(e){if(!(typeof window>`u`))try{localStorage.removeItem(`${To}${e}`)}catch{}}var ko=`agentation-session-`;function Ao(e){return`${ko}${e}`}function jo(e){if(typeof window>`u`)return null;try{return localStorage.getItem(Ao(e))}catch{return null}}function Mo(e,t){if(!(typeof window>`u`))try{localStorage.setItem(Ao(e),t)}catch{}}function No(e){if(!(typeof window>`u`))try{localStorage.removeItem(Ao(e))}catch{}}var Po=`${ko}toolbar-hidden`;function Fo(){if(typeof window>`u`)return!1;try{return sessionStorage.getItem(Po)===`1`}catch{return!1}}function Io(e){if(!(typeof window>`u`))try{e?sessionStorage.setItem(Po,`1`):sessionStorage.removeItem(Po)}catch{}}async function Lo(e,t){let n=await fetch(`${e}/sessions`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({url:t})});if(!n.ok)throw Error(`Failed to create session: ${n.status}`);return n.json()}async function Ro(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw Error(`Failed to get session: ${n.status}`);return n.json()}async function zo(e,t,n){let r=await fetch(`${e}/sessions/${t}/annotations`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to sync annotation: ${r.status}`);return r.json()}async function Bo(e,t,n){let r=await fetch(`${e}/annotations/${t}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!r.ok)throw Error(`Failed to update annotation: ${r.status}`);return r.json()}async function Vo(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:`DELETE`});if(!n.ok)throw Error(`Failed to delete annotation: ${n.status}`)}var Ho={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Uo=new Set([`Component`,`PureComponent`,`Fragment`,`Suspense`,`Profiler`,`StrictMode`,`Routes`,`Route`,`Outlet`,`Root`,`ErrorBoundaryHandler`,`HotReload`,`Hot`]),Wo=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Go=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Ko(e){let t=e?.mode??`filtered`,n=Uo;if(e?.skipExact){let t=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...Uo,...t])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:t,skipExact:n,skipPatterns:e?.skipPatterns?[...Wo,...e.skipPatterns]:Wo,userPatterns:e?.userPatterns??Go,filter:e?.filter}}function qo(e){return e.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/([A-Z])([A-Z][a-z])/g,`$1-$2`).toLowerCase()}function Jo(e,t=10){let n=new Set,r=e,i=0;for(;r&&i<t;)r.className&&typeof r.className==`string`&&r.className.split(/\s+/).forEach(e=>{if(e.length>1){let t=e.replace(/[_][a-zA-Z0-9]{5,}.*$/,``).toLowerCase();t.length>1&&n.add(t)}}),r=r.parentElement,i++;return n}function Yo(e,t){let n=qo(e);for(let e of t){if(e===n)return!0;let t=n.split(`-`).filter(e=>e.length>2),r=e.split(`-`).filter(e=>e.length>2);for(let e of t)for(let t of r)if(e===t||e.includes(t)||t.includes(e))return!0}return!1}function Xo(e,t,n,r){if(n.filter)return n.filter(e,t);switch(n.mode){case`all`:return!0;case`filtered`:return!(n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e)));case`smart`:return n.skipExact.has(e)||n.skipPatterns.some(t=>t.test(e))?!1:!!(r&&Yo(e,r)||n.userPatterns.some(t=>t.test(e)));default:return!0}}var Zo=null,Qo=new WeakMap;function $o(e){return Object.keys(e).some(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`)||e.startsWith(`__reactProps$`))}function es(){if(Zo!==null)return Zo;if(typeof document>`u`)return!1;if(document.body&&$o(document.body))return Zo=!0,!0;for(let e of[`#root`,`#app`,`#__next`,`[data-reactroot]`]){let t=document.querySelector(e);if(t&&$o(t))return Zo=!0,!0}if(document.body){for(let e of document.body.children)if($o(e))return Zo=!0,!0}return Zo=!1,!1}var ts={map:Qo};function ns(e){return Object.keys(e).find(e=>e.startsWith(`__reactFiber$`)||e.startsWith(`__reactInternalInstance$`))||null}function rs(e){let t=ns(e);return t?e[t]:null}function is(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function as(e){let{tag:t,type:n,elementType:r}=e;if(t===Ho.HostComponent||t===Ho.HostText||t===Ho.HostHoistable||t===Ho.HostSingleton||t===Ho.Fragment||t===Ho.Mode||t===Ho.Profiler||t===Ho.DehydratedFragment||t===Ho.HostRoot||t===Ho.HostPortal||t===Ho.ScopeComponent||t===Ho.OffscreenComponent||t===Ho.LegacyHiddenComponent||t===Ho.CacheComponent||t===Ho.TracingMarkerComponent||t===Ho.Throw||t===Ho.ViewTransitionComponent||t===Ho.ActivityComponent)return null;if(t===Ho.ForwardRef){let e=r;if(e?.render){let t=is(e.render);if(t)return t}return e?.displayName?e.displayName:is(n)}if(t===Ho.MemoComponent||t===Ho.SimpleMemoComponent){let e=r;if(e?.type){let t=is(e.type);if(t)return t}return e?.displayName?e.displayName:is(n)}if(t===Ho.ContextProvider){let e=n;return e?._context?.displayName?`${e._context.displayName}.Provider`:null}if(t===Ho.ContextConsumer){let e=n;return e?.displayName?`${e.displayName}.Consumer`:null}if(t===Ho.LazyComponent){let e=r;return e?._status===1&&e._result?is(e._result):null}return t===Ho.SuspenseComponent||t===Ho.SuspenseListComponent?null:t===Ho.IncompleteClassComponent||t===Ho.IncompleteFunctionComponent||t===Ho.FunctionComponent||t===Ho.ClassComponent||t===Ho.IndeterminateComponent?is(n):null}function os(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function ss(e,t){let n=Ko(t),r=n.mode===`all`;if(r){let t=ts.map.get(e);if(t!==void 0)return t}if(!es()){let t={path:null,components:[]};return r&&ts.map.set(e,t),t}let i=n.mode===`smart`?Jo(e):void 0,a=[];try{let t=rs(e),r=0;for(;t&&r<n.maxDepth&&a.length<n.maxComponents;){let e=as(t);e&&!os(e)&&Xo(e,r,n,i)&&a.push(e),t=t.return,r++}}catch{let t={path:null,components:[]};return r&&ts.map.set(e,t),t}if(a.length===0){let t={path:null,components:[]};return r&&ts.map.set(e,t),t}let o={path:a.slice().reverse().map(e=>`<${e}>`).join(` `),components:a};return r&&ts.map.set(e,o),o}var cs={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function ls(e){if(!e||typeof e!=`object`)return null;let t=Object.keys(e),n=t.find(e=>e.startsWith(`__reactFiber$`));if(n)return e[n]||null;let r=t.find(e=>e.startsWith(`__reactInternalInstance$`));if(r)return e[r]||null;let i=t.find(t=>{if(!t.startsWith(`__react`))return!1;let n=e[t];return n&&typeof n==`object`&&`_debugSource`in n});return i&&e[i]||null}function us(e){if(!e.type||typeof e.type==`string`)return null;if(typeof e.type==`object`||typeof e.type==`function`){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function ds(e,t=50){let n=e,r=0;for(;n&&r<t;){if(n._debugSource)return{source:n._debugSource,componentName:us(n)};if(n._debugOwner?._debugSource)return{source:n._debugOwner._debugSource,componentName:us(n._debugOwner)};n=n.return,r++}return null}function fs(e){let t=e,n=0;for(;t&&n<50;){let e=t;for(let n of[`_debugSource`,`__source`,`_source`,`debugSource`]){let r=e[n];if(r&&typeof r==`object`&&`fileName`in r)return{source:r,componentName:us(t)}}if(t.memoizedProps){let e=t.memoizedProps;if(e.__source&&typeof e.__source==`object`){let n=e.__source;if(n.fileName&&n.lineNumber)return{source:{fileName:n.fileName,lineNumber:n.lineNumber,columnNumber:n.columnNumber},componentName:us(t)}}}t=t.return,n++}return null}var ps=new Map;function ms(e){let t=e.tag,n=e.type,r=e.elementType;if(typeof n==`string`||n==null||typeof n==`function`&&n.prototype?.isReactComponent)return null;if((t===cs.FunctionComponent||t===cs.IndeterminateComponent)&&typeof n==`function`)return n;if(t===cs.ForwardRef&&r){let e=r.render;if(typeof e==`function`)return e}if((t===cs.MemoComponent||t===cs.SimpleMemoComponent)&&r){let e=r.type;if(typeof e==`function`)return e}return typeof n==`function`?n:null}function hs(){let e=_.default,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&`H`in t)return{get:()=>t.H,set:e=>{t.H=e}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let e=n.ReactCurrentDispatcher;if(e&&`current`in e)return{get:()=>e.current,set:t=>{e.current=t}}}return null}function gs(e){let t=e.split(`
`),n=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,i=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let e of t){let t=e.trim();if(!t||n.some(e=>e.test(t)))continue;let a=r.exec(t)||i.exec(t);if(a)return{fileName:a[1],line:parseInt(a[2],10),column:parseInt(a[3],10)}}return null}function _s(e){let t=e;return t=t.replace(/[?#].*$/,``),t=t.replace(/^turbopack:\/\/\/\[project\]\//,``),t=t.replace(/^webpack-internal:\/\/\/\.\//,``),t=t.replace(/^webpack-internal:\/\/\//,``),t=t.replace(/^webpack:\/\/\/\.\//,``),t=t.replace(/^webpack:\/\/\//,``),t=t.replace(/^turbopack:\/\/\//,``),t=t.replace(/^https?:\/\/[^/]+\//,``),t=t.replace(/^file:\/\/\//,`/`),t=t.replace(/^\([^)]+\)\/\.\//,``),t=t.replace(/^\.\//,``),t}function vs(e){let t=ms(e);if(!t)return null;if(ps.has(t))return ps.get(t);let n=hs();if(!n)return ps.set(t,null),null;let r=n.get(),i=null;try{let r=new Proxy({},{get(){throw Error(`probe`)}});n.set(r);try{t({})}catch(t){if(t instanceof Error&&t.message===`probe`&&t.stack){let n=gs(t.stack);n&&(i={fileName:_s(n.fileName),lineNumber:n.line,columnNumber:n.column,componentName:us(e)||void 0})}}}finally{n.set(r)}return ps.set(t,i),i}function ys(e,t=15){let n=e,r=0;for(;n&&r<t;){let e=vs(n);if(e)return e;n=n.return,r++}return null}function bs(e){let t=ls(e);if(!t)return{found:!1,reason:`no-fiber`,isReactApp:!1,isProduction:!1};let n=ds(t);if(n||=fs(t),n?.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let r=ys(t);return r?{found:!0,source:r,isReactApp:!0,isProduction:!1}:{found:!1,reason:`no-debug-source`,isReactApp:!0,isProduction:!1}}function xs(e,t=`path`){let{fileName:n,lineNumber:r,columnNumber:i}=e,a=`${n}:${r}`;return i!==void 0&&(a+=`:${i}`),t===`vscode`?`vscode://file${n.startsWith(`/`)?``:`/`}${a}`:a}function Ss(e,t=10){let n=e,r=0;for(;n&&r<t;){let e=bs(n);if(e.found)return e;n=n.parentElement,r++}return bs(e)}var Cs=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,ws={toolbar:`styles-module__toolbar___wNsdK`,markersLayer:`styles-module__markersLayer___-25j1`,fixedMarkersLayer:`styles-module__fixedMarkersLayer___ffyX6`,controlsContent:`styles-module__controlsContent___9GJWU`,disableTransitions:`styles-module__disableTransitions___EopxO`,toolbarContainer:`styles-module__toolbarContainer___dIhma`,entrance:`styles-module__entrance___sgHd8`,toolbarEnter:`styles-module__toolbarEnter___u8RRu`,hiding:`styles-module__hiding___1td44`,toolbarHide:`styles-module__toolbarHide___y8kaT`,collapsed:`styles-module__collapsed___Rydsn`,expanded:`styles-module__expanded___ofKPx`,serverConnected:`styles-module__serverConnected___Gfbou`,toggleContent:`styles-module__toggleContent___0yfyP`,visible:`styles-module__visible___KHwEW`,hidden:`styles-module__hidden___Ae8H4`,badge:`styles-module__badge___2XsgF`,fadeOut:`styles-module__fadeOut___6Ut6-`,badgeEnter:`styles-module__badgeEnter___mVQLj`,controlButton:`styles-module__controlButton___8Q0jc`,statusShowing:`styles-module__statusShowing___te6iu`,buttonBadge:`styles-module__buttonBadge___NeFWb`,mcpIndicator:`styles-module__mcpIndicator___zGJeL`,connected:`styles-module__connected___7c28g`,mcpIndicatorPulseConnected:`styles-module__mcpIndicatorPulseConnected___EDodZ`,connecting:`styles-module__connecting___uo-CW`,mcpIndicatorPulseConnecting:`styles-module__mcpIndicatorPulseConnecting___cCYte`,connectionIndicatorWrapper:`styles-module__connectionIndicatorWrapper___L-e-3`,connectionIndicator:`styles-module__connectionIndicator___afk9p`,connectionIndicatorVisible:`styles-module__connectionIndicatorVisible___C-i5B`,connectionIndicatorConnected:`styles-module__connectionIndicatorConnected___IY8pR`,connectionPulse:`styles-module__connectionPulse___-Zycw`,connectionIndicatorDisconnected:`styles-module__connectionIndicatorDisconnected___kmpaZ`,connectionIndicatorConnecting:`styles-module__connectionIndicatorConnecting___QmSLH`,buttonWrapper:`styles-module__buttonWrapper___rBcdv`,buttonTooltip:`styles-module__buttonTooltip___Burd9`,tooltipsInSession:`styles-module__tooltipsInSession___-0lHH`,sendButtonWrapper:`styles-module__sendButtonWrapper___UUxG6`,sendButtonVisible:`styles-module__sendButtonVisible___WPSQU`,shortcut:`styles-module__shortcut___lEAQk`,tooltipBelow:`styles-module__tooltipBelow___m6ats`,tooltipsHidden:`styles-module__tooltipsHidden___VtLJG`,tooltipVisible:`styles-module__tooltipVisible___0jcCv`,buttonWrapperAlignLeft:`styles-module__buttonWrapperAlignLeft___myzIp`,buttonWrapperAlignRight:`styles-module__buttonWrapperAlignRight___HCQFR`,divider:`styles-module__divider___c--s1`,overlay:`styles-module__overlay___Q1O9y`,hoverHighlight:`styles-module__hoverHighlight___ogakW`,enter:`styles-module__enter___WFIki`,hoverHighlightIn:`styles-module__hoverHighlightIn___6WYHY`,multiSelectOutline:`styles-module__multiSelectOutline___cSJ-m`,fadeIn:`styles-module__fadeIn___b9qmf`,exit:`styles-module__exit___fyOJ0`,singleSelectOutline:`styles-module__singleSelectOutline___QhX-O`,hoverTooltip:`styles-module__hoverTooltip___bvLk7`,hoverTooltipIn:`styles-module__hoverTooltipIn___FYGQx`,hoverReactPath:`styles-module__hoverReactPath___gx1IJ`,hoverElementName:`styles-module__hoverElementName___QMLMl`,marker:`styles-module__marker___6sQrs`,clearing:`styles-module__clearing___FQ--7`,markerIn:`styles-module__markerIn___5FaAP`,markerOut:`styles-module__markerOut___GU5jX`,pending:`styles-module__pending___2IHLC`,fixed:`styles-module__fixed___dBMHC`,multiSelect:`styles-module__multiSelect___YWiuz`,hovered:`styles-module__hovered___ZgXIy`,renumber:`styles-module__renumber___nCTxD`,renumberRoll:`styles-module__renumberRoll___Wgbq3`,markerTooltip:`styles-module__markerTooltip___aLJID`,tooltipIn:`styles-module__tooltipIn___0N31w`,markerQuote:`styles-module__markerQuote___FHmrz`,markerNote:`styles-module__markerNote___QkrrS`,markerHint:`styles-module__markerHint___2iF-6`,settingsPanel:`styles-module__settingsPanel___OxX3Y`,settingsHeader:`styles-module__settingsHeader___pwDY9`,settingsBrand:`styles-module__settingsBrand___0gJeM`,settingsBrandSlash:`styles-module__settingsBrandSlash___uTG18`,settingsVersion:`styles-module__settingsVersion___TUcFq`,settingsSection:`styles-module__settingsSection___m-YM2`,settingsLabel:`styles-module__settingsLabel___8UjfX`,cycleButton:`styles-module__cycleButton___FMKfw`,cycleDot:`styles-module__cycleDot___nPgLY`,dropdownButton:`styles-module__dropdownButton___16NPz`,toggleLabel:`styles-module__toggleLabel___Xm8Aa`,customCheckbox:`styles-module__customCheckbox___U39ax`,sliderLabel:`styles-module__sliderLabel___U8sPr`,slider:`styles-module__slider___GLdxp`,themeToggle:`styles-module__themeToggle___2rUjA`,settingsOption:`styles-module__settingsOption___UNa12`,selected:`styles-module__selected___OwRqP`,settingsPanelContainer:`styles-module__settingsPanelContainer___Xksv8`,settingsPage:`styles-module__settingsPage___6YfHH`,slideLeft:`styles-module__slideLeft___Ps01J`,automationsPage:`styles-module__automationsPage___uvCq6`,slideIn:`styles-module__slideIn___4-qXe`,settingsNavLink:`styles-module__settingsNavLink___wCzJt`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___ZWwhj`,mcpNavIndicator:`styles-module__mcpNavIndicator___cl9pO`,mcpPulse:`styles-module__mcpPulse___uNggr`,settingsBackButton:`styles-module__settingsBackButton___bIe2j`,automationHeader:`styles-module__automationHeader___InP0r`,automationDescription:`styles-module__automationDescription___NKlmo`,learnMoreLink:`styles-module__learnMoreLink___8xv-x`,autoSendRow:`styles-module__autoSendRow___UblX5`,autoSendLabel:`styles-module__autoSendLabel___icDc2`,active:`styles-module__active___-zoN6`,webhookUrlInput:`styles-module__webhookUrlInput___2375C`,settingsSectionExtraPadding:`styles-module__settingsSectionExtraPadding___jdhFV`,settingsSectionGrow:`styles-module__settingsSectionGrow___h-5HZ`,settingsRow:`styles-module__settingsRow___3sdhc`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___zA0Sp`,dropdownContainer:`styles-module__dropdownContainer___BVnxe`,settingsRowDisabled:`styles-module__settingsRowDisabled___EgS0V`,toggleSwitch:`styles-module__toggleSwitch___l4Ygm`,cycleButtonText:`styles-module__cycleButtonText___fD1LR`,cycleTextIn:`styles-module__cycleTextIn___Q6zJf`,cycleDots:`styles-module__cycleDots___LWuoQ`,dropdownMenu:`styles-module__dropdownMenu___k73ER`,scaleIn:`styles-module__scaleIn___c-r1K`,dropdownItem:`styles-module__dropdownItem___ylsLj`,settingsLabelMarker:`styles-module__settingsLabelMarker___ewdtV`,settingsOptions:`styles-module__settingsOptions___LyrBA`,sliderContainer:`styles-module__sliderContainer___ducXj`,sliderLabels:`styles-module__sliderLabels___FhLDB`,colorOptions:`styles-module__colorOptions___iHCNX`,colorOption:`styles-module__colorOption___IodiY`,colorOptionRing:`styles-module__colorOptionRing___U2xpo`,settingsToggle:`styles-module__settingsToggle___fBrFn`,settingsToggleMarginBottom:`styles-module__settingsToggleMarginBottom___MZUyF`,checked:`styles-module__checked___mnZLo`,toggleSlider:`styles-module__toggleSlider___wprIn`,disabled:`styles-module__disabled___332Jw`,mcpStatusDot:`styles-module__mcpStatusDot___ibgkc`,disconnected:`styles-module__disconnected___cHPxR`,mcpPulseError:`styles-module__mcpPulseError___fov9B`,drawCanvas:`styles-module__drawCanvas___7cG9U`,dragSelection:`styles-module__dragSelection___kZLq2`,dragCount:`styles-module__dragCount___KM90j`,highlightsContainer:`styles-module__highlightsContainer___-0xzG`,selectedElementHighlight:`styles-module__selectedElementHighlight___fyVlI`,scaleOut:`styles-module__scaleOut___Wctwz`,slideUp:`styles-module__slideUp___kgD36`,slideDown:`styles-module__slideDown___zcdje`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-page-toolbar-css-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-page-toolbar-css-styles`,document.head.appendChild(e)),e.textContent=Cs}var Z=ws,Ts=[{value:`compact`,label:`Compact`},{value:`standard`,label:`Standard`},{value:`detailed`,label:`Detailed`},{value:`forensic`,label:`Forensic`}];function Es(e,t,n=`standard`){if(e.length===0)return``;let r=typeof window<`u`?`${window.innerWidth}\xD7${window.innerHeight}`:`unknown`,i=`## Page Feedback: ${t}
`;return n===`forensic`?(i+=`
**Environment:**
`,i+=`- Viewport: ${r}
`,typeof window<`u`&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):n!==`compact`&&(i+=`**Viewport:** ${r}
`),i+=`
`,e.forEach((e,t)=>{n===`compact`?(i+=`${t+1}. **${e.element}**${e.sourceFile?` (${e.sourceFile})`:``}: ${e.comment}`,e.selectedText&&(i+=` (re: "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}")`),i+=`
`):n===`forensic`?(i+=`### ${t+1}. ${e.element}
`,e.isMultiSelect&&e.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),e.fullPath&&(i+=`**Full DOM Path:** ${e.fullPath}
`),e.cssClasses&&(i+=`**CSS Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** x:${Math.round(e.boundingBox.x)}, y:${Math.round(e.boundingBox.y)} (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`),i+=`**Annotation at:** ${e.x.toFixed(1)}% from left, ${Math.round(e.y)}px from top
`,e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),e.computedStyles&&(i+=`**Computed Styles:** ${e.computedStyles}
`),e.accessibility&&(i+=`**Accessibility:** ${e.accessibility}
`),e.nearbyElements&&(i+=`**Nearby Elements:** ${e.nearbyElements}
`),e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),i+=`**Feedback:** ${e.comment}

`):(i+=`### ${t+1}. ${e.element}
`,i+=`**Location:** ${e.elementPath}
`,e.sourceFile&&(i+=`**Source:** ${e.sourceFile}
`),e.reactComponents&&(i+=`**React:** ${e.reactComponents}
`),n===`detailed`&&(e.cssClasses&&(i+=`**Classes:** ${e.cssClasses}
`),e.boundingBox&&(i+=`**Position:** ${Math.round(e.boundingBox.x)}px, ${Math.round(e.boundingBox.y)}px (${Math.round(e.boundingBox.width)}\xD7${Math.round(e.boundingBox.height)}px)
`)),e.selectedText&&(i+=`**Selected text:** "${e.selectedText}"
`),n===`detailed`&&e.nearbyText&&!e.selectedText&&(i+=`**Context:** ${e.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${e.comment}

`)}),i.trim()}var Ds=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,Os={marker:`styles-module__marker___9CKF7`,enter:`styles-module__enter___8kI3q`,exit:`styles-module__exit___KBdR3`,clearing:`styles-module__clearing___8rM7K`,markerIn:`styles-module__markerIn___x4G8D`,markerOut:`styles-module__markerOut___6VhQN`,pending:`styles-module__pending___BiY-U`,fixed:`styles-module__fixed___aKrQO`,multiSelect:`styles-module__multiSelect___CPfTC`,hovered:`styles-module__hovered___-mg2N`,renumber:`styles-module__renumber___16lvD`,renumberRoll:`styles-module__renumberRoll___akV9B`,markerTooltip:`styles-module__markerTooltip___-VUm-`,tooltipIn:`styles-module__tooltipIn___aJslQ`,markerQuote:`styles-module__markerQuote___tQake`,markerNote:`styles-module__markerNote___Rh4eI`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-annotation-marker-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-annotation-marker-styles`,document.head.appendChild(e)),e.textContent=Ds}var ks=Os;function As({annotation:e,globalIndex:t,layerIndex:n,layerSize:r,isExiting:i,isClearing:a,isAnimated:o,isHovered:s,isDeleting:c,isEditingAny:l,renumberFrom:u,markerClickBehavior:d,tooltipStyle:f,onHoverEnter:p,onHoverLeave:m,onClick:h,onContextMenu:g}){let _=(s||c)&&!l,v=_&&d===`delete`,y=e.isMultiSelect,b=y?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,x=i?ks.exit:a?ks.clearing:o?``:ks.enter,S=i?`${(r-1-n)*20}ms`:`${n*20}ms`;return(0,H.jsxs)(`div`,{className:`${ks.marker} ${y?ks.multiSelect:``} ${x} ${v?ks.hovered:``}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:v?void 0:b,animationDelay:S},onMouseEnter:()=>p(e),onMouseLeave:m,onClick:t=>{t.stopPropagation(),i||h(e)},onContextMenu:g?t=>{d===`delete`&&(t.preventDefault(),t.stopPropagation(),i||g(e))}:void 0,children:[_?v?(0,H.jsx)(ir,{size:y?18:16}):(0,H.jsx)(cr,{size:16}):(0,H.jsx)(`span`,{className:u!==null&&t>=u?ks.renumber:void 0,children:t+1}),s&&!l&&(0,H.jsxs)(`div`,{className:`${ks.markerTooltip} ${ks.enter}`,style:f,children:[(0,H.jsxs)(`span`,{className:ks.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?`...`:``}"`]}),(0,H.jsx)(`span`,{className:ks.markerNote,children:e.comment})]})]})}function js({x:e,y:t,isMultiSelect:n,isExiting:r}){return(0,H.jsx)(`div`,{className:`${ks.marker} ${ks.pending} ${n?ks.multiSelect:``} ${r?ks.exit:ks.enter}`,style:{left:`${e}%`,top:t,backgroundColor:n?`var(--agentation-color-green)`:`var(--agentation-color-accent)`},children:(0,H.jsx)(Yn,{size:12})})}function Ms({annotation:e,fixed:t}){let n=e.isMultiSelect;return(0,H.jsx)(`div`,{className:`${ks.marker} ${t?ks.fixed:``} ${ks.hovered} ${n?ks.multiSelect:``} ${ks.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:(0,H.jsx)(ir,{size:n?12:10})})}var Ns=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Ps={switchContainer:`styles-module__switchContainer___Ka-AB`,switchInput:`styles-module__switchInput___kYDSD`,switchThumb:`styles-module__switchThumb___4sCPH`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-switch-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-switch-styles`,document.head.appendChild(e)),e.textContent=Ns}var Fs=Ps,Is=({className:e=``,...t})=>(0,H.jsxs)(`div`,{className:`${Fs.switchContainer} ${e}`,children:[(0,H.jsx)(`input`,{className:Fs.switchInput,type:`checkbox`,...t}),(0,H.jsx)(`div`,{className:Fs.switchThumb})]}),Ls=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Rs={checkboxContainer:`styles-module__checkboxContainer___joqZk`,checkboxInput:`styles-module__checkboxInput___ECzzO`,checkboxCheck:`styles-module__checkboxCheck___fUXpr`,checkboxCheckPath:`styles-module__checkboxCheckPath___cDyh8`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-styles`,document.head.appendChild(e)),e.textContent=Ls}var zs=Rs,Bs=({className:e=``,...t})=>(0,H.jsxs)(`div`,{className:`${zs.checkboxContainer} ${e}`,children:[(0,H.jsx)(`input`,{className:zs.checkboxInput,type:`checkbox`,...t}),(0,H.jsx)(`svg`,{className:zs.checkboxCheck,width:`14`,height:`14`,viewBox:`0 0 14 14`,fill:`none`,children:(0,H.jsx)(`path`,{className:zs.checkboxCheckPath,d:`M3.94 7L6.13 9.19L10.5 4.81`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),Vs=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,Hs={container:`styles-module__container___w8eAF`,label:`styles-module__label___J5mxE`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-checkbox-field-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-checkbox-field-styles`,document.head.appendChild(e)),e.textContent=Vs}var Us=Hs,Ws=({className:e=``,label:t,tooltip:n,checked:r,onChange:i,...a})=>{let o=(0,_.useId)();return(0,H.jsxs)(`div`,{className:`${Us.container} ${e}`,...a,children:[(0,H.jsx)(Bs,{id:o,onChange:i,checked:r}),(0,H.jsx)(`label`,{className:Us.label,htmlFor:o,children:t}),n&&(0,H.jsx)(Or,{content:n})]})},Gs=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,Ks={settingsPanel:`styles-module__settingsPanel___qNkn-`,settingsHeader:`styles-module__settingsHeader___Fn1DP`,settingsBrand:`styles-module__settingsBrand___OoKlM`,settingsBrandSlash:`styles-module__settingsBrandSlash___Q-AU9`,settingsVersion:`styles-module__settingsVersion___rXmL9`,settingsSection:`styles-module__settingsSection___n5V-4`,settingsLabel:`styles-module__settingsLabel___VCVOQ`,cycleButton:`styles-module__cycleButton___XMBx3`,cycleDot:`styles-module__cycleDot___zgSXY`,dropdownButton:`styles-module__dropdownButton___mKHe8`,sliderLabel:`styles-module__sliderLabel___6K5v1`,slider:`styles-module__slider___v5z-c`,themeToggle:`styles-module__themeToggle___3imlT`,enter:`styles-module__enter___wginS`,exit:`styles-module__exit___A4iJc`,settingsOption:`styles-module__settingsOption___JoyH-`,selected:`styles-module__selected___k1-Vq`,settingsPanelContainer:`styles-module__settingsPanelContainer___5it-H`,settingsPage:`styles-module__settingsPage___BMn-3`,slideLeft:`styles-module__slideLeft___qUvW4`,automationsPage:`styles-module__automationsPage___N7By0`,slideIn:`styles-module__slideIn___uXDSu`,themeIconWrapper:`styles-module__themeIconWrapper___pyaYa`,themeIcon:`styles-module__themeIcon___w7lAm`,themeIconIn:`styles-module__themeIconIn___qUWMV`,settingsSectionGrow:`styles-module__settingsSectionGrow___eZTRw`,settingsRow:`styles-module__settingsRow___y-tDE`,settingsRowMarginTop:`styles-module__settingsRowMarginTop___uLpGb`,settingsRowDisabled:`styles-module__settingsRowDisabled___ydl3Q`,cycleButtonText:`styles-module__cycleButtonText___mbbnD`,cycleTextIn:`styles-module__cycleTextIn___VBNTi`,cycleDots:`styles-module__cycleDots___ehp6i`,active:`styles-module__active___dpAhM`,colorOptions:`styles-module__colorOptions___pbxZx`,colorOption:`styles-module__colorOption___Co955`,settingsNavLink:`styles-module__settingsNavLink___uYIwM`,settingsNavLinkRight:`styles-module__settingsNavLinkRight___XBUzC`,settingsBackButton:`styles-module__settingsBackButton___fflll`,automationHeader:`styles-module__automationHeader___Avra9`,automationDescription:`styles-module__automationDescription___vFTmJ`,learnMoreLink:`styles-module__learnMoreLink___cG7OI`,autoSendContainer:`styles-module__autoSendContainer___VpkXk`,autoSendLabel:`styles-module__autoSendLabel___ngNdC`,disabled:`styles-module__disabled___9AZYS`,mcpStatusDot:`styles-module__mcpStatusDot___8AMxP`,connecting:`styles-module__connecting___QEO1r`,mcpPulse:`styles-module__mcpPulse___5Q3Jj`,connected:`styles-module__connected___WyFkx`,disconnected:`styles-module__disconnected___mvmvQ`,mcpPulseError:`styles-module__mcpPulseError___VHxhx`,mcpNavIndicator:`styles-module__mcpNavIndicator___auBHI`,webhookUrlInput:`styles-module__webhookUrlInput___WDDDC`,checkboxField:`styles-module__checkboxField___ZrSqv`,divider:`styles-module__divider___h6Yux`,scaleIn:`styles-module__scaleIn___QpQ8E`};if(typeof document<`u`){let e=document.getElementById(`feedback-tool-styles-settings-panel-styles`);e||(e=document.createElement(`style`),e.id=`feedback-tool-styles-settings-panel-styles`,document.head.appendChild(e)),e.textContent=Gs}var Q=Ks;function qs({settings:e,onSettingsChange:t,isDarkMode:n,onToggleTheme:r,isDevMode:i,connectionStatus:a,endpoint:o,isVisible:s,toolbarNearBottom:c,settingsPage:l,onSettingsPageChange:u,onHideToolbar:d}){return(0,H.jsx)(`div`,{className:`${Q.settingsPanel} ${s?Q.enter:Q.exit}`,style:c?{bottom:`auto`,top:`calc(100% + 0.5rem)`}:void 0,"data-agentation-settings-panel":!0,children:(0,H.jsxs)(`div`,{className:Q.settingsPanelContainer,children:[(0,H.jsxs)(`div`,{className:`${Q.settingsPage} ${l===`automations`?Q.slideLeft:``}`,children:[(0,H.jsxs)(`div`,{className:Q.settingsHeader,children:[(0,H.jsx)(`a`,{className:Q.settingsBrand,href:`https://agentation.com`,target:`_blank`,rel:`noopener noreferrer`,children:(0,H.jsx)(`svg`,{width:`72`,height:`16`,viewBox:`0 0 676 151`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,H.jsx)(`path`,{d:`M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z`,fill:`currentColor`})})}),(0,H.jsxs)(`p`,{className:Q.settingsVersion,children:[`v`,`3.0.2`]}),(0,H.jsx)(`button`,{className:Q.themeToggle,onClick:r,title:n?`Switch to light mode`:`Switch to dark mode`,children:(0,H.jsx)(`span`,{className:Q.themeIconWrapper,children:(0,H.jsx)(`span`,{className:Q.themeIcon,children:n?(0,H.jsx)(or,{size:20}):(0,H.jsx)(sr,{size:20})},n?`sun`:`moon`)})})]}),(0,H.jsx)(`div`,{className:Q.divider}),(0,H.jsxs)(`div`,{className:Q.settingsSection,children:[(0,H.jsxs)(`div`,{className:Q.settingsRow,children:[(0,H.jsxs)(`div`,{className:Q.settingsLabel,children:[`Output Detail`,(0,H.jsx)(Or,{content:`Controls how much detail is included in the copied output`})]}),(0,H.jsxs)(`button`,{className:Q.cycleButton,onClick:()=>{t({outputDetail:Ts[(Ts.findIndex(t=>t.value===e.outputDetail)+1)%Ts.length].value})},children:[(0,H.jsx)(`span`,{className:Q.cycleButtonText,children:Ts.find(t=>t.value===e.outputDetail)?.label},e.outputDetail),(0,H.jsx)(`span`,{className:Q.cycleDots,children:Ts.map(t=>(0,H.jsx)(`span`,{className:`${Q.cycleDot} ${e.outputDetail===t.value?Q.active:``}`},t.value))})]})]}),(0,H.jsxs)(`div`,{className:`${Q.settingsRow} ${Q.settingsRowMarginTop} ${i?``:Q.settingsRowDisabled}`,children:[(0,H.jsxs)(`div`,{className:Q.settingsLabel,children:[`React Components`,(0,H.jsx)(Or,{content:i?`Include React component names in annotations`:`Disabled — production builds minify component names, making detection unreliable. Use in development mode.`})]}),(0,H.jsx)(Is,{checked:i&&e.reactEnabled,onChange:e=>t({reactEnabled:e.target.checked}),disabled:!i})]}),(0,H.jsxs)(`div`,{className:`${Q.settingsRow} ${Q.settingsRowMarginTop}`,children:[(0,H.jsxs)(`div`,{className:Q.settingsLabel,children:[`Hide Until Restart`,(0,H.jsx)(Or,{content:`Hides the toolbar until you open a new tab`})]}),(0,H.jsx)(Is,{checked:!1,onChange:e=>{e.target.checked&&d()}})]})]}),(0,H.jsx)(`div`,{className:Q.divider}),(0,H.jsxs)(`div`,{className:Q.settingsSection,children:[(0,H.jsx)(`div`,{className:`${Q.settingsLabel} ${Q.settingsLabelMarker}`,children:`Marker Color`}),(0,H.jsx)(`div`,{className:Q.colorOptions,children:Qs.map(n=>(0,H.jsx)(`button`,{className:`${Q.colorOption} ${e.annotationColorId===n.id?Q.selected:``}`,style:{"--swatch":n.srgb,"--swatch-p3":n.p3},onClick:()=>t({annotationColorId:n.id}),title:n.label,type:`button`},n.id))})]}),(0,H.jsx)(`div`,{className:Q.divider}),(0,H.jsxs)(`div`,{className:Q.settingsSection,children:[(0,H.jsx)(Ws,{className:`checkbox-field`,label:`Clear on copy/send`,checked:e.autoClearAfterCopy,onChange:e=>t({autoClearAfterCopy:e.target.checked}),tooltip:`Automatically clear annotations after copying`}),(0,H.jsx)(Ws,{className:Q.checkboxField,label:`Block page interactions`,checked:e.blockInteractions,onChange:e=>t({blockInteractions:e.target.checked})})]}),(0,H.jsx)(`div`,{className:Q.divider}),(0,H.jsxs)(`button`,{className:Q.settingsNavLink,onClick:()=>u(`automations`),children:[(0,H.jsx)(`span`,{children:`Manage MCP & Webhooks`}),(0,H.jsxs)(`span`,{className:Q.settingsNavLinkRight,children:[o&&a!==`disconnected`&&(0,H.jsx)(`span`,{className:`${Q.mcpNavIndicator} ${Q[a]}`}),(0,H.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,H.jsx)(`path`,{d:`M7.5 12.5L12 8L7.5 3.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]}),(0,H.jsxs)(`div`,{className:`${Q.settingsPage} ${Q.automationsPage} ${l===`automations`?Q.slideIn:``}`,children:[(0,H.jsxs)(`button`,{className:Q.settingsBackButton,onClick:()=>u(`main`),children:[(0,H.jsx)(ur,{size:16}),(0,H.jsx)(`span`,{children:`Manage MCP & Webhooks`})]}),(0,H.jsx)(`div`,{className:Q.divider}),(0,H.jsxs)(`div`,{className:Q.settingsSection,children:[(0,H.jsxs)(`div`,{className:Q.settingsRow,children:[(0,H.jsxs)(`span`,{className:Q.automationHeader,children:[`MCP Connection`,(0,H.jsx)(Or,{content:`Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.`})]}),o&&(0,H.jsx)(`div`,{className:`${Q.mcpStatusDot} ${Q[a]}`,title:a===`connected`?`Connected`:a===`connecting`?`Connecting...`:`Disconnected`})]}),(0,H.jsxs)(`p`,{className:Q.automationDescription,style:{paddingBottom:6},children:[`MCP connection allows agents to receive and act on annotations.`,` `,(0,H.jsx)(`a`,{href:`https://agentation.dev/mcp`,target:`_blank`,rel:`noopener noreferrer`,className:Q.learnMoreLink,children:`Learn more`})]})]}),(0,H.jsx)(`div`,{className:Q.divider}),(0,H.jsxs)(`div`,{className:`${Q.settingsSection} ${Q.settingsSectionGrow}`,children:[(0,H.jsxs)(`div`,{className:Q.settingsRow,children:[(0,H.jsxs)(`span`,{className:Q.automationHeader,children:[`Webhooks`,(0,H.jsx)(Or,{content:`Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.`})]}),(0,H.jsxs)(`div`,{className:Q.autoSendContainer,children:[(0,H.jsx)(`label`,{htmlFor:`agentation-auto-send`,className:`${Q.autoSendLabel} ${e.webhooksEnabled?Q.active:``} ${e.webhookUrl?``:Q.disabled}`,children:`Auto-Send`}),(0,H.jsx)(Is,{id:`agentation-auto-send`,checked:e.webhooksEnabled,onChange:e=>t({webhooksEnabled:e.target.checked}),disabled:!e.webhookUrl})]})]}),(0,H.jsx)(`p`,{className:Q.automationDescription,children:`The webhook URL will receive live annotation changes and annotation data.`}),(0,H.jsx)(`textarea`,{className:Q.webhookUrlInput,placeholder:`Webhook URL`,value:e.webhookUrl,onKeyDown:e=>e.stopPropagation(),onChange:e=>t({webhookUrl:e.target.value})})]})]})]})})}function Js(e,t=`filtered`){let{name:n,path:r}=ca(e);if(t===`off`)return{name:n,elementName:n,path:r,reactComponents:null};let i=ss(e,{mode:t});return{name:i.path?`${i.path} ${n}`:n,elementName:n,path:r,reactComponents:i.path}}var Ys=!1,Xs={outputDetail:`standard`,autoClearAfterCopy:!1,annotationColorId:`blue`,blockInteractions:!0,reactEnabled:!0,markerClickBehavior:`edit`,webhookUrl:``,webhooksEnabled:!0},Zs=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol===`http:`||t.protocol===`https:`}catch{return!1}},Qs=[{id:`indigo`,label:`Indigo`,srgb:`#6155F5`,p3:`color(display-p3 0.38 0.33 0.96)`},{id:`blue`,label:`Blue`,srgb:`#0088FF`,p3:`color(display-p3 0.00 0.53 1.00)`},{id:`cyan`,label:`Cyan`,srgb:`#00C3D0`,p3:`color(display-p3 0.00 0.76 0.82)`},{id:`green`,label:`Green`,srgb:`#34C759`,p3:`color(display-p3 0.20 0.78 0.35)`},{id:`yellow`,label:`Yellow`,srgb:`#FFCC00`,p3:`color(display-p3 1.00 0.80 0.00)`},{id:`orange`,label:`Orange`,srgb:`#FF8D28`,p3:`color(display-p3 1.00 0.55 0.16)`},{id:`red`,label:`Red`,srgb:`#FF383C`,p3:`color(display-p3 1.00 0.22 0.24)`}];(()=>{if(typeof document>`u`||document.getElementById(`agentation-color-tokens`))return;let e=document.createElement(`style`);e.id=`agentation-color-tokens`,e.textContent=[...Qs.map(e=>`
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${e.id}"] {
          --agentation-color-accent: ${e.p3};
        }
      }
    `),`:root {
      ${Qs.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Qs.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
      }
    }`].join(``),document.head.appendChild(e)})();function $s(e,t){let n=document.elementFromPoint(e,t);if(!n)return null;for(;n?.shadowRoot;){let r=n.shadowRoot.elementFromPoint(e,t);if(!r||r===n)break;n=r}return n}function ec(e){let t=e;for(;t&&t!==document.body;){let e=window.getComputedStyle(t).position;if(e===`fixed`||e===`sticky`)return!0;t=t.parentElement}return!1}function tc(e){return e.status!==`resolved`&&e.status!==`dismissed`}function nc(e){let t=bs(e),n=t.found?t:Ss(e);if(n.found&&n.source)return xs(n.source,`path`)}function rc({demoAnnotations:e,demoDelay:t=1e3,enableDemoMode:n=!1,onAnnotationAdd:r,onAnnotationDelete:i,onAnnotationUpdate:a,onAnnotationsClear:o,onCopy:s,onSubmit:c,copyToClipboard:l=!0,endpoint:u,sessionId:d,onSessionCreated:f,webhookUrl:p,className:m}={}){let[h,g]=(0,_.useState)(!1),[v,b]=(0,_.useState)([]),[x,S]=(0,_.useState)(!0),[C,w]=(0,_.useState)(()=>Fo()),[ee,T]=(0,_.useState)(!1),E=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{let t=E.current;t&&t.contains(e.target)&&e.stopPropagation()},t=[`mousedown`,`click`,`pointerdown`];return t.forEach(t=>document.body.addEventListener(t,e)),()=>{t.forEach(t=>document.body.removeEventListener(t,e))}},[]);let[D,te]=(0,_.useState)(!1),[O,ne]=(0,_.useState)(!1),[k,A]=(0,_.useState)(null),[j,re]=(0,_.useState)({x:0,y:0}),[M,N]=(0,_.useState)(null),[ie,ae]=(0,_.useState)(!1),[oe,se]=(0,_.useState)(`idle`),[ce,P]=(0,_.useState)(!1),[F,le]=(0,_.useState)(!1),[ue,de]=(0,_.useState)(null),[fe,pe]=(0,_.useState)(null),[me,he]=(0,_.useState)([]),[ge,_e]=(0,_.useState)(null),[ve,ye]=(0,_.useState)(null),[I,be]=(0,_.useState)(null),[xe,Se]=(0,_.useState)(null),[Ce,we]=(0,_.useState)([]),[Te,Ee]=(0,_.useState)(0),[De,Oe]=(0,_.useState)(!1),[ke,Ae]=(0,_.useState)(!1),[je,Me]=(0,_.useState)(!1),[Ne,Pe]=(0,_.useState)(!1),[Fe,Ie]=(0,_.useState)(!1),[Le,Re]=(0,_.useState)(`main`),[ze,Be]=(0,_.useState)(!1),[L,Ve]=(0,_.useState)(!1),[He,Ue]=(0,_.useState)(!1),[R,We]=(0,_.useState)([]),[Ge,Ke]=(0,_.useState)(null),qe=(0,_.useRef)(!1),[Je,Ye]=(0,_.useState)(!1),[Xe,Ze]=(0,_.useState)(!1),[Qe,$e]=(0,_.useState)(1),[et,tt]=(0,_.useState)(`new-page`),[nt,rt]=(0,_.useState)(``),[it,at]=(0,_.useState)(!1),[z,ot]=(0,_.useState)(null),st=(0,_.useRef)(!1),ct=(0,_.useRef)({rearrange:null,placements:[]}),lt=(0,_.useRef)({rearrange:null,placements:[]}),[ut,dt]=(0,_.useState)(0),[ft,pt]=(0,_.useState)(0),[mt,ht]=(0,_.useState)(0),[gt,_t]=(0,_.useState)(0),vt=(0,_.useRef)(new Set),yt=(0,_.useRef)(new Set),bt=(0,_.useRef)(null),xt=(0,_.useRef)(),St=L&&h&&!He&&Je;(0,_.useEffect)(()=>{if(St){Ze(!1);let e=vr(()=>{Ze(!0)});return()=>cancelAnimationFrame(e)}else Ze(!1)},[St]);let Ct=(0,_.useRef)(new Map),wt=(0,_.useRef)(new Map),Tt=(0,_.useRef)(),[Et,Dt]=(0,_.useState)(!1),[Ot,kt]=(0,_.useState)([]),At=(0,_.useRef)(Ot);At.current=Ot;let[jt,Mt]=(0,_.useState)(null),Nt=(0,_.useRef)(null);(0,_.useRef)(!1),(0,_.useRef)([]),(0,_.useRef)(0),(0,_.useRef)(null),(0,_.useRef)(null),(0,_.useRef)(1);let[Pt,Ft]=(0,_.useState)(!1),It=(0,_.useRef)(null),[Lt,Rt]=(0,_.useState)([]),zt=(0,_.useRef)({cmd:!1,shift:!1}),Bt=()=>{Be(!0)},Vt=()=>{Be(!1)},Ht=()=>{Pt||(It.current=W(()=>Ft(!0),850))},Ut=()=>{It.current&&=(clearTimeout(It.current),null),Ft(!1),Vt()};(0,_.useEffect)(()=>()=>{It.current&&clearTimeout(It.current)},[]);let[B,Wt]=(0,_.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`feedback-toolbar-settings`)??``);return{...Xs,...e,annotationColorId:Qs.find(t=>t.id===e.annotationColorId)?e.annotationColorId:Xs.annotationColorId}}catch{return Xs}}),[Gt,Kt]=(0,_.useState)(!0),[qt,Jt]=(0,_.useState)(!1),Yt=()=>{E.current?.classList.add(Z.disableTransitions),Kt(e=>!e),vr(()=>{E.current?.classList.remove(Z.disableTransitions)})},[Xt,Zt]=(0,_.useState)(d??null),Qt=(0,_.useRef)(!1),[$t,en]=(0,_.useState)(u?`connecting`:`disconnected`),[tn,nn]=(0,_.useState)(null),[rn,an]=(0,_.useState)(!1),[on,sn]=(0,_.useState)(null),cn=(0,_.useRef)(!1),[ln,un]=(0,_.useState)(new Set),[dn,fn]=(0,_.useState)(new Set),[pn,mn]=(0,_.useState)(!1),[hn,gn]=(0,_.useState)(!1),[_n,vn]=(0,_.useState)(!1),yn=(0,_.useRef)(null),bn=(0,_.useRef)(null),xn=(0,_.useRef)(null),Sn=(0,_.useRef)(null),Cn=(0,_.useRef)(!1),wn=(0,_.useRef)(0),Tn=(0,_.useRef)(null),En=(0,_.useRef)(null),Dn=(0,_.useRef)(null),On=(0,_.useRef)(null),kn=(0,_.useRef)(null),V=typeof window<`u`?window.location.pathname:`/`;(0,_.useEffect)(()=>{if(Ne)Ie(!0);else{Be(!1),Re(`main`);let e=W(()=>Ie(!1),0);return()=>clearTimeout(e)}},[Ne]);let An=h&&x&&!L;(0,_.useEffect)(()=>{if(An){ne(!1),te(!0),un(new Set);let e=W(()=>{un(e=>{let t=new Set(e);return v.forEach(e=>t.add(e.id)),t})},350);return()=>clearTimeout(e)}else if(D){ne(!0);let e=W(()=>{te(!1),ne(!1)},250);return()=>clearTimeout(e)}},[An]),(0,_.useEffect)(()=>{Ae(!0),Ee(window.scrollY),b(po(V).filter(tc)),Ys||(Jt(!0),Ys=!0,W(()=>Jt(!1),750));try{let e=localStorage.getItem(`feedback-toolbar-theme`);e!==null&&Kt(e===`dark`)}catch{}try{let e=localStorage.getItem(`feedback-toolbar-position`);if(e){let t=JSON.parse(e);typeof t.x==`number`&&typeof t.y==`number`&&nn(t)}}catch{}},[V]),(0,_.useEffect)(()=>{ke&&localStorage.setItem(`feedback-toolbar-settings`,JSON.stringify(B))},[B,ke]),(0,_.useEffect)(()=>{ke&&localStorage.setItem(`feedback-toolbar-theme`,Gt?`dark`:`light`)},[Gt,ke]);let jn=(0,_.useRef)(!1);(0,_.useEffect)(()=>{let e=jn.current;jn.current=rn,e&&!rn&&tn&&ke&&localStorage.setItem(`feedback-toolbar-position`,JSON.stringify(tn))},[rn,tn,ke]),(0,_.useEffect)(()=>{!u||!ke||Qt.current||(Qt.current=!0,en(`connecting`),(async()=>{try{let e=jo(V),t=d||e,n=!1;if(t)try{let e=await Ro(u,t);Zt(e.id),en(`connected`),Mo(V,e.id),n=!0;let r=po(V),i=new Set(e.annotations.map(e=>e.id)),a=r.filter(e=>!i.has(e.id));if(a.length>0){let t=`${typeof window<`u`?window.location.origin:``}${V}`,n=(await Promise.allSettled(a.map(n=>zo(u,e.id,{...n,sessionId:e.id,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),a[t])),r=[...e.annotations,...n];b(r.filter(tc)),go(V,r.filter(tc),e.id)}else b(e.annotations.filter(tc)),go(V,e.annotations.filter(tc),e.id)}catch(e){console.warn(`[Agentation] Could not join session, creating new:`,e),No(V)}if(!n){let e=await Lo(u,typeof window<`u`?window.location.href:`/`);Zt(e.id),en(`connected`),Mo(V,e.id),f?.(e.id);let t=ho(),n=typeof window<`u`?window.location.origin:``,r=[];for(let[i,a]of t){let t=a.filter(e=>!e._syncedTo);if(t.length===0)continue;let o=`${n}${i}`,s=i===V;r.push((async()=>{try{let n=s?e:await Lo(u,o),r=(await Promise.allSettled(t.map(e=>zo(u,n.id,{...e,sessionId:n.id,url:o})))).map((e,n)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation:`,e.reason),t[n])).filter(tc);if(go(i,r,n.id),s){let e=new Set(t.map(e=>e.id));b(t=>{let n=t.filter(t=>!e.has(t.id));return[...r,...n]})}}catch(e){console.warn(`[Agentation] Failed to sync annotations for ${i}:`,e)}})())}await Promise.allSettled(r)}}catch(e){en(`disconnected`),console.warn(`[Agentation] Failed to initialize session, using local storage:`,e)}})())},[u,d,ke,f,V]),(0,_.useEffect)(()=>{if(!u||!ke)return;let e=async()=>{try{(await fetch(`${u}/health`)).ok?en(`connected`):en(`disconnected`)}catch{en(`disconnected`)}};e();let t=_r(e,1e4);return()=>clearInterval(t)},[u,ke]),(0,_.useEffect)(()=>{if(!u||!ke||!Xt)return;let e=new EventSource(`${u}/sessions/${Xt}/events`),t=[`resolved`,`dismissed`],n=e=>{try{let n=JSON.parse(e.data);if(t.includes(n.payload?.status)){let e=n.payload.id,t=n.payload.kind;if(t===`placement`){for(let[t,n]of Ct.current)if(n===e){Ct.current.delete(t),We(e=>e.filter(e=>e.id!==t));break}}else if(t===`rearrange`){for(let[t,n]of wt.current)if(n===e){wt.current.delete(t),ot(e=>{if(!e)return null;let n=e.sections.filter(e=>e.id!==t);return n.length===0?null:{...e,sections:n}});break}}else fn(t=>new Set(t).add(e)),W(()=>{b(t=>t.filter(t=>t.id!==e)),fn(t=>{let n=new Set(t);return n.delete(e),n})},150)}}catch{}};return e.addEventListener(`annotation.updated`,n),()=>{e.removeEventListener(`annotation.updated`,n),e.close()}},[u,ke,Xt]),(0,_.useEffect)(()=>{if(!u||!ke)return;let e=En.current===`disconnected`,t=$t===`connected`;En.current=$t,e&&t&&(async()=>{try{let e=po(V);if(e.length===0)return;let t=`${typeof window<`u`?window.location.origin:``}${V}`,n=Xt,r=[];if(n)try{r=(await Ro(u,n)).annotations}catch{n=null}n||(n=(await Lo(u,t)).id,Zt(n),Mo(V,n));let i=new Set(r.map(e=>e.id)),a=e.filter(e=>!i.has(e.id));if(a.length>0){let e=(await Promise.allSettled(a.map(e=>zo(u,n,{...e,sessionId:n,url:t})))).map((e,t)=>e.status===`fulfilled`?e.value:(console.warn(`[Agentation] Failed to sync annotation on reconnect:`,e.reason),a[t])),i=[...r,...e].filter(tc);b(i),go(V,i,n)}}catch(e){console.warn(`[Agentation] Failed to sync on reconnect:`,e)}})()},[$t,u,ke,Xt,V]);let Mn=(0,_.useCallback)(()=>{ee||(T(!0),Pe(!1),g(!1),W(()=>{Io(!0),w(!0),T(!1)},400))},[ee]);(0,_.useEffect)(()=>{if(!n||!ke||!e||e.length===0||v.length>0)return;let r=[];return r.push(W(()=>{g(!0)},t-200)),e.forEach((e,n)=>{let i=t+n*300;r.push(W(()=>{let t=document.querySelector(e.selector);if(!t)return;let r=t.getBoundingClientRect(),{name:i,path:a}=ca(t),o={id:`demo-${Date.now()}-${n}`,x:(r.left+r.width/2)/window.innerWidth*100,y:r.top+r.height/2+window.scrollY,comment:e.comment,element:i,elementPath:a,timestamp:Date.now(),selectedText:e.selectedText,boundingBox:{x:r.left,y:r.top+window.scrollY,width:r.width,height:r.height},nearbyText:la(t),cssClasses:da(t)};b(e=>[...e,o])},i))}),()=>{r.forEach(clearTimeout)}},[n,ke,e,t]),(0,_.useEffect)(()=>{let e=()=>{Ee(window.scrollY),Oe(!0),kn.current&&clearTimeout(kn.current),kn.current=W(()=>{Oe(!1)},150)};return window.addEventListener(`scroll`,e,{passive:!0}),()=>{window.removeEventListener(`scroll`,e),kn.current&&clearTimeout(kn.current)}},[]),(0,_.useEffect)(()=>{ke&&v.length>0?Xt?go(V,v,Xt):mo(V,v):ke&&v.length===0&&localStorage.removeItem(fo(V))},[v,V,ke,Xt]),(0,_.useEffect)(()=>{if(ke&&!qe.current){qe.current=!0;let e=vo(V);e.length>0&&We(e)}},[ke,V]),(0,_.useEffect)(()=>{ke&&qe.current&&!Je&&(R.length>0?yo(V,R):bo(V))},[R,V,ke,Je]),(0,_.useEffect)(()=>{if(ke&&!st.current){st.current=!0;let e=So(V);e&&ot({...e,sections:e.sections.map(e=>({...e,currentRect:e.currentRect??{...e.originalRect}}))})}},[ke,V]),(0,_.useEffect)(()=>{ke&&st.current&&!Je&&(z?Co(V,z):wo(V))},[z,V,ke,Je]);let Nn=(0,_.useRef)(!1);(0,_.useEffect)(()=>{if(ke&&!Nn.current){Nn.current=!0;let e=Eo(V);e&&(lt.current={rearrange:e.rearrange,placements:e.placements||[]},e.purpose&&rt(e.purpose))}},[ke,V]),(0,_.useEffect)(()=>{if(!ke||!Nn.current)return;let e=lt.current;Je?(z?.sections?.length??0)>0||R.length>0||nt?Do(V,{rearrange:z,placements:R,purpose:nt}):Oo(V):(e.rearrange?.sections?.length??0)>0||e.placements.length>0||nt?Do(V,{rearrange:e.rearrange,placements:e.placements,purpose:nt}):Oo(V)},[z,R,nt,Je,V,ke]),(0,_.useEffect)(()=>{L&&!z&&ot({sections:[],originalOrder:[],detectedAt:Date.now()})},[L,z]),(0,_.useEffect)(()=>{if(!u||!Xt)return;let e=Ct.current,t=new Set(R.map(e=>e.id));for(let t of R){if(e.has(t.id))continue;e.set(t.id,``);let n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:V;zo(u,Xt,{id:t.id,x:t.x/window.innerWidth*100,y:t.y,comment:`Place ${t.type} at (${Math.round(t.x)}, ${Math.round(t.y)}), ${t.width}\xD7${t.height}px${t.text?` \u2014 "${t.text}"`:``}`,element:`[design:${t.type}]`,elementPath:`[placement]`,timestamp:t.timestamp,url:n,intent:`change`,severity:`important`,kind:`placement`,placement:{componentType:t.type,width:t.width,height:t.height,scrollY:t.scrollY,text:t.text}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync placement annotation:`,n),e.delete(t.id)})}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&Vo(u,r).catch(()=>{}))},[R,u,Xt,V]),(0,_.useEffect)(()=>{if(!(!u||!Xt))return Tt.current&&clearTimeout(Tt.current),Tt.current=W(()=>{let e=wt.current;if(!z||z.sections.length===0){for(let[,t]of e)t&&Vo(u,t).catch(()=>{});e.clear();return}let t=new Set(z.sections.map(e=>e.id)),n=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:V;for(let t of z.sections){let r=t.originalRect,i=t.currentRect;if(!(Math.abs(r.x-i.x)>1||Math.abs(r.y-i.y)>1||Math.abs(r.width-i.width)>1||Math.abs(r.height-i.height)>1)){let n=e.get(t.id);n&&(e.delete(t.id),Vo(u,n).catch(()=>{}));continue}let a=e.get(t.id);a?Bo(u,a,{comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`}).catch(e=>{console.warn(`[Agentation] Failed to update rearrange annotation:`,e)}):(e.set(t.id,``),zo(u,Xt,{id:t.id,x:i.x/window.innerWidth*100,y:i.y,comment:`Move ${t.label} section (${t.tagName}) \u2014 from (${Math.round(r.x)},${Math.round(r.y)}) ${Math.round(r.width)}\xD7${Math.round(r.height)} to (${Math.round(i.x)},${Math.round(i.y)}) ${Math.round(i.width)}\xD7${Math.round(i.height)}`,element:t.selector,elementPath:`[rearrange]`,timestamp:Date.now(),url:n,intent:`change`,severity:`important`,kind:`rearrange`,rearrange:{selector:t.selector,label:t.label,tagName:t.tagName,originalRect:r,currentRect:i}}).then(n=>{e.has(t.id)&&e.set(t.id,n.id)}).catch(n=>{console.warn(`[Agentation] Failed to sync rearrange annotation:`,n),e.delete(t.id)}))}for(let[n,r]of e)t.has(n)||(e.delete(n),r&&Vo(u,r).catch(()=>{}))},300),()=>{Tt.current&&clearTimeout(Tt.current)}},[z,u,Xt,V]);let Pn=(0,_.useRef)(new Map);(0,_.useLayoutEffect)(()=>{let e=z?.sections??[],t=new Set;if((L||He)&&h)for(let n of e){t.add(n.id);try{let e=document.querySelector(n.selector);if(!e)continue;if(!Pn.current.has(n.id)){let t={transform:e.style.transform,transformOrigin:e.style.transformOrigin,opacity:e.style.opacity,position:e.style.position,zIndex:e.style.zIndex,display:e.style.display},r=[],i=e.parentElement;for(;i&&i!==document.body;){let e=getComputedStyle(i);(e.overflow!==`visible`||e.overflowX!==`visible`||e.overflowY!==`visible`)&&(r.push({el:i,overflow:i.style.overflow}),i.style.overflow=`visible`),i=i.parentElement}getComputedStyle(e).display===`inline`&&(e.style.display=`inline-block`),Pn.current.set(n.id,{el:e,origStyles:t,ancestors:r}),e.style.transformOrigin=`top left`,e.style.zIndex=`9999`}}catch{}}for(let[e,n]of Pn.current)if(!t.has(e)){let{el:t,origStyles:r,ancestors:i}=n;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=r.transform,t.style.transformOrigin=r.transformOrigin,t.style.opacity=r.opacity,t.style.position=r.position,t.style.zIndex=r.zIndex,Pn.current.delete(e),W(()=>{t.style.transition=``,t.style.display=r.display;for(let e of i)e.el.style.overflow=e.overflow},450)}},[z,L,He,h]),(0,_.useEffect)(()=>()=>{for(let[,e]of Pn.current){let{el:t,origStyles:n,ancestors:r}=e;t.style.transition=`transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)`,t.style.transform=n.transform,t.style.transformOrigin=n.transformOrigin,t.style.opacity=n.opacity,t.style.position=n.position,t.style.zIndex=n.zIndex,W(()=>{t.style.transition=``,t.style.display=n.display;for(let e of r)e.el.style.overflow=e.overflow},450)}Pn.current.clear()},[]);let Fn=(0,_.useCallback)(()=>{Ue(!0),Ve(!1),Ke(null),clearTimeout(xt.current),xt.current=W(()=>{Ue(!1)},300)},[]),In=(0,_.useCallback)(()=>{L&&(Ue(!0),Ve(!1),Ke(null),clearTimeout(xt.current),xt.current=W(()=>{Ue(!1)},300)),g(!1)},[L]),Ln=(0,_.useCallback)(()=>{je||(br(),Me(!0))},[je]),Rn=(0,_.useCallback)(()=>{je&&(xr(),Me(!1))},[je]),zn=(0,_.useCallback)(()=>{je?Rn():Ln()},[je,Ln,Rn]),Bn=(0,_.useCallback)(()=>{if(Lt.length===0)return;let e=Lt[0],t=e.element,n=Lt.length>1,r=Lt.map(e=>e.element.getBoundingClientRect());if(n){let e={left:Math.min(...r.map(e=>e.left)),top:Math.min(...r.map(e=>e.top)),right:Math.max(...r.map(e=>e.right)),bottom:Math.max(...r.map(e=>e.bottom))},n=Lt.slice(0,5).map(e=>e.name).join(`, `),i=Lt.length>5?` +${Lt.length-5} more`:``,a=r.map(e=>({x:e.left,y:e.top+window.scrollY,width:e.width,height:e.height})),o=Lt[Lt.length-1].element,s=r[r.length-1],c=s.left+s.width/2,l=s.top+s.height/2,u=ec(o);N({x:c/window.innerWidth*100,y:u?l:l+window.scrollY,clientY:l,element:`${Lt.length} elements: ${n}${i}`,elementPath:`multi-select`,boundingBox:{x:e.left,y:e.top+window.scrollY,width:e.right-e.left,height:e.bottom-e.top},isMultiSelect:!0,isFixed:u,elementBoundingBoxes:a,multiSelectElements:Lt.map(e=>e.element),targetElement:o,fullPath:Sa(t),accessibility:xa(t),computedStyles:ya(t),computedStylesObj:_a(t),nearbyElements:ua(t),cssClasses:da(t),nearbyText:la(t),sourceFile:nc(t)})}else{let n=r[0],i=ec(t);N({x:n.left/window.innerWidth*100,y:i?n.top:n.top+window.scrollY,clientY:n.top,element:e.name,elementPath:e.path,boundingBox:{x:n.left,y:i?n.top:n.top+window.scrollY,width:n.width,height:n.height},isFixed:i,fullPath:Sa(t),accessibility:xa(t),computedStyles:ya(t),computedStylesObj:_a(t),nearbyElements:ua(t),cssClasses:da(t),nearbyText:la(t),reactComponents:e.reactComponents,sourceFile:nc(t)})}Rt([]),A(null)},[Lt]);(0,_.useEffect)(()=>{h||(N(null),be(null),Se(null),we([]),A(null),Pe(!1),Rt([]),zt.current={cmd:!1,shift:!1},je&&Rn())},[h,je,Rn]),(0,_.useEffect)(()=>()=>{xr()},[]),(0,_.useEffect)(()=>{if(!h)return;let e=`p.span.h1.h2.h3.h4.h5.h6.li.td.th.label.blockquote.figcaption.caption.legend.dt.dd.pre.code.em.strong.b.i.u.s.a.time.address.cite.q.abbr.dfn.mark.small.sub.sup.[contenteditable]`.split(`.`).join(`, `),t=`:not([data-agentation-root]):not([data-agentation-root] *)`,n=document.createElement(`style`);return n.id=`feedback-cursor-styles`,n.textContent=`
      body ${t} {
        cursor: crosshair !important;
      }

      body :is(${e})${t} {
        cursor: text !important;
      }
    `,document.head.appendChild(n),()=>{let e=document.getElementById(`feedback-cursor-styles`);e&&e.remove()}},[h]),(0,_.useEffect)(()=>{if(jt!==null&&h)return document.documentElement.setAttribute(`data-drawing-hover`,``),()=>document.documentElement.removeAttribute(`data-drawing-hover`)},[jt,h]),(0,_.useEffect)(()=>{if(!h||M||Et||L)return;let e=e=>{if(oa(e.composedPath()[0]||e.target,`[data-feedback-toolbar]`)){A(null);return}let t=$s(e.clientX,e.clientY);if(!t||oa(t,`[data-feedback-toolbar]`)){A(null);return}let{name:n,elementName:r,path:i,reactComponents:a}=Js(t,`off`);A({element:n,elementName:r,elementPath:i,rect:t.getBoundingClientRect(),reactComponents:a}),re({x:e.clientX,y:e.clientY})};return document.addEventListener(`mousemove`,e),()=>document.removeEventListener(`mousemove`,e)},[h,M,Et,L,`off`,Ot]);let Vn=(0,_.useCallback)(e=>{if(be(e),de(null),pe(null),he([]),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=$s(n.x+n.width/2,n.y+n.height/2-window.scrollY);e&&t.push(e)}we(t),Se(null)}else if(e.boundingBox){let t=e.boundingBox,n=$s(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;Se(r<.5||i<.5?null:n)}else Se(null);we([])}else Se(null),we([])},[]);(0,_.useEffect)(()=>{if(!h||Et||L)return;let e=e=>{if(Cn.current){Cn.current=!1;return}let t=e.composedPath()[0]||e.target;if(oa(t,`[data-feedback-toolbar]`)||oa(t,`[data-annotation-popup]`)||oa(t,`[data-annotation-marker]`))return;if(e.metaKey&&e.shiftKey&&!M&&!I){e.preventDefault(),e.stopPropagation();let t=$s(e.clientX,e.clientY);if(!t)return;let n=t.getBoundingClientRect(),{name:r,path:i,reactComponents:a}=Js(t,`off`),o=Lt.findIndex(e=>e.element===t);Rt(o>=0?e=>e.filter((e,t)=>t!==o):e=>[...e,{element:t,rect:n,name:r,path:i,reactComponents:a??void 0}]);return}let n=oa(t,`button, a, input, select, textarea, [role='button'], [onclick]`);if(B.blockInteractions&&n&&(e.preventDefault(),e.stopPropagation()),M){if(n&&!B.blockInteractions)return;e.preventDefault(),Dn.current?.shake();return}if(I){if(n&&!B.blockInteractions)return;e.preventDefault(),On.current?.shake();return}e.preventDefault();let r=$s(e.clientX,e.clientY);if(!r)return;let{name:i,path:a,reactComponents:o}=Js(r,`off`),s=r.getBoundingClientRect(),c=e.clientX/window.innerWidth*100,l=ec(r),u=l?e.clientY:e.clientY+window.scrollY,d=window.getSelection(),f;d&&d.toString().trim().length>0&&(f=d.toString().trim().slice(0,500));let p=_a(r),m=ya(r);N({x:c,y:u,clientY:e.clientY,element:i,elementPath:a,selectedText:f,boundingBox:{x:s.left,y:l?s.top:s.top+window.scrollY,width:s.width,height:s.height},nearbyText:la(r),cssClasses:da(r),isFixed:l,fullPath:Sa(r),accessibility:xa(r),computedStyles:m,computedStylesObj:p,nearbyElements:ua(r),reactComponents:o??void 0,sourceFile:nc(r),targetElement:r}),A(null)};return document.addEventListener(`click`,e,!0),()=>document.removeEventListener(`click`,e,!0)},[h,Et,L,M,I,B.blockInteractions,`off`,Lt]),(0,_.useEffect)(()=>{if(!h)return;let e=e=>{e.key===`Meta`&&(zt.current.cmd=!0),e.key===`Shift`&&(zt.current.shift=!0)},t=e=>{let t=zt.current.cmd&&zt.current.shift;e.key===`Meta`&&(zt.current.cmd=!1),e.key===`Shift`&&(zt.current.shift=!1);let n=zt.current.cmd&&zt.current.shift;t&&!n&&Lt.length>0&&Bn()},n=()=>{zt.current={cmd:!1,shift:!1},Rt([])};return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),window.addEventListener(`blur`,n),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t),window.removeEventListener(`blur`,n)}},[h,Lt,Bn]),(0,_.useEffect)(()=>{if(!h||M||Et||L)return;let e=e=>{let t=e.composedPath()[0]||e.target;oa(t,`[data-feedback-toolbar]`)||oa(t,`[data-annotation-marker]`)||oa(t,`[data-annotation-popup]`)||new Set(`P.SPAN.H1.H2.H3.H4.H5.H6.LI.TD.TH.LABEL.BLOCKQUOTE.FIGCAPTION.CAPTION.LEGEND.DT.DD.PRE.CODE.EM.STRONG.B.I.U.S.A.TIME.ADDRESS.CITE.Q.ABBR.DFN.MARK.SMALL.SUB.SUP`.split(`.`)).has(t.tagName)||t.isContentEditable||(e.preventDefault(),yn.current={x:e.clientX,y:e.clientY})};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[h,M,Et,L]),(0,_.useEffect)(()=>{if(!h||M)return;let e=e=>{if(!yn.current)return;let t=e.clientX-yn.current.x,n=e.clientY-yn.current.y,r=t*t+n*n;if(!_n&&r>=64&&(bn.current=yn.current,vn(!0),e.preventDefault()),(_n||r>=64)&&bn.current){if(xn.current){let t=Math.min(bn.current.x,e.clientX),n=Math.min(bn.current.y,e.clientY),r=Math.abs(e.clientX-bn.current.x),i=Math.abs(e.clientY-bn.current.y);xn.current.style.transform=`translate(${t}px, ${n}px)`,xn.current.style.width=`${r}px`,xn.current.style.height=`${i}px`}let t=Date.now();if(t-wn.current<50)return;wn.current=t;let n=bn.current.x,r=bn.current.y,i=Math.min(n,e.clientX),a=Math.min(r,e.clientY),o=Math.max(n,e.clientX),s=Math.max(r,e.clientY),c=(i+o)/2,l=(a+s)/2,u=new Set,d=[[i,a],[o,a],[i,s],[o,s],[c,l],[c,a],[c,s],[i,l],[o,l]];for(let[e,t]of d){let n=document.elementsFromPoint(e,t);for(let e of n)e instanceof HTMLElement&&u.add(e)}let f=document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav`);for(let e of f)if(e instanceof HTMLElement){let t=e.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,c=n>=i&&n<=o&&r>=a&&r<=s,l=Math.min(t.right,o)-Math.max(t.left,i),d=Math.min(t.bottom,s)-Math.max(t.top,a),f=l>0&&d>0?l*d:0,p=t.width*t.height,m=p>0?f/p:0;(c||m>.5)&&u.add(e)}let p=[],m=new Set([`BUTTON`,`A`,`INPUT`,`IMG`,`P`,`H1`,`H2`,`H3`,`H4`,`H5`,`H6`,`LI`,`LABEL`,`TD`,`TH`,`SECTION`,`ARTICLE`,`ASIDE`,`NAV`]);for(let e of u){if(oa(e,`[data-feedback-toolbar]`)||oa(e,`[data-annotation-marker]`))continue;let t=e.getBoundingClientRect();if(!(t.width>window.innerWidth*.8&&t.height>window.innerHeight*.5)&&!(t.width<10||t.height<10)&&t.left<o&&t.right>i&&t.top<s&&t.bottom>a){let n=e.tagName,r=m.has(n);if(!r&&(n===`DIV`||n===`SPAN`)){let t=e.textContent&&e.textContent.trim().length>0,n=e.onclick!==null||e.getAttribute(`role`)===`button`||e.getAttribute(`role`)===`link`||e.classList.contains(`clickable`)||e.hasAttribute(`data-clickable`);(t||n)&&!e.querySelector(`p, h1, h2, h3, h4, h5, h6, button, a`)&&(r=!0)}if(r){let e=!1;for(let n of p)if(n.left<=t.left&&n.right>=t.right&&n.top<=t.top&&n.bottom>=t.bottom){e=!0;break}e||p.push(t)}}}if(Sn.current){let e=Sn.current;for(;e.children.length>p.length;)e.removeChild(e.lastChild);p.forEach((t,n)=>{let r=e.children[n];r||(r=document.createElement(`div`),r.className=Z.selectedElementHighlight,e.appendChild(r)),r.style.transform=`translate(${t.left}px, ${t.top}px)`,r.style.width=`${t.width}px`,r.style.height=`${t.height}px`})}}};return document.addEventListener(`mousemove`,e,{passive:!0}),()=>document.removeEventListener(`mousemove`,e)},[h,M,_n,8]),(0,_.useEffect)(()=>{if(!h)return;let e=e=>{let t=_n,n=bn.current;if(_n&&n){Cn.current=!0;let t=Math.min(n.x,e.clientX),r=Math.min(n.y,e.clientY),i=Math.max(n.x,e.clientX),a=Math.max(n.y,e.clientY),o=[];document.querySelectorAll(`button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th`).forEach(e=>{if(!(e instanceof HTMLElement)||oa(e,`[data-feedback-toolbar]`)||oa(e,`[data-annotation-marker]`))return;let n=e.getBoundingClientRect();n.width>window.innerWidth*.8&&n.height>window.innerHeight*.5||n.width<10||n.height<10||n.left<i&&n.right>t&&n.top<a&&n.bottom>r&&o.push({element:e,rect:n})});let s=o.filter(({element:e})=>!o.some(({element:t})=>t!==e&&e.contains(t))),c=e.clientX/window.innerWidth*100,l=e.clientY+window.scrollY;if(s.length>0){let t=s.reduce((e,{rect:t})=>({left:Math.min(e.left,t.left),top:Math.min(e.top,t.top),right:Math.max(e.right,t.right),bottom:Math.max(e.bottom,t.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),n=s.slice(0,5).map(({element:e})=>ca(e).name).join(`, `),r=s.length>5?` +${s.length-5} more`:``,i=s[0].element,a=_a(i),o=ya(i);N({x:c,y:l,clientY:e.clientY,element:`${s.length} elements: ${n}${r}`,elementPath:`multi-select`,boundingBox:{x:t.left,y:t.top+window.scrollY,width:t.right-t.left,height:t.bottom-t.top},isMultiSelect:!0,fullPath:Sa(i),accessibility:xa(i),computedStyles:o,computedStylesObj:a,nearbyElements:ua(i),cssClasses:da(i),nearbyText:la(i),sourceFile:nc(i)})}else{let n=Math.abs(i-t),o=Math.abs(a-r);n>20&&o>20&&N({x:c,y:l,clientY:e.clientY,element:`Area selection`,elementPath:`region at (${Math.round(t)}, ${Math.round(r)})`,boundingBox:{x:t,y:r+window.scrollY,width:n,height:o},isMultiSelect:!0})}A(null)}else t&&(Cn.current=!0);yn.current=null,bn.current=null,vn(!1),Sn.current&&(Sn.current.innerHTML=``)};return document.addEventListener(`mouseup`,e),()=>document.removeEventListener(`mouseup`,e)},[h,_n]);let Hn=(0,_.useCallback)(async(e,t,n)=>{let r=B.webhookUrl||p;if(!r||!B.webhooksEnabled&&!n)return!1;try{return(await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({event:e,timestamp:Date.now(),url:typeof window<`u`?window.location.href:void 0,...t})})).ok}catch(e){return console.warn(`[Agentation] Webhook failed:`,e),!1}},[p,B.webhookUrl,B.webhooksEnabled]),Un=(0,_.useCallback)(e=>{if(!M)return;let t={id:Date.now().toString(),x:M.x,y:M.y,comment:e,element:M.element,elementPath:M.elementPath,timestamp:Date.now(),selectedText:M.selectedText,boundingBox:M.boundingBox,nearbyText:M.nearbyText,cssClasses:M.cssClasses,isMultiSelect:M.isMultiSelect,isFixed:M.isFixed,fullPath:M.fullPath,accessibility:M.accessibility,computedStyles:M.computedStyles,nearbyElements:M.nearbyElements,reactComponents:M.reactComponents,sourceFile:M.sourceFile,elementBoundingBoxes:M.elementBoundingBoxes,...u&&Xt?{sessionId:Xt,url:typeof window<`u`?window.location.href:void 0,status:`pending`}:{}};b(e=>[...e,t]),Tn.current=t.id,W(()=>{Tn.current=null},300),W(()=>{un(e=>new Set(e).add(t.id))},250),r?.(t),Hn(`annotation.add`,{annotation:t}),mn(!0),W(()=>{N(null),mn(!1)},150),window.getSelection()?.removeAllRanges(),u&&Xt&&zo(u,Xt,t).then(e=>{e.id!==t.id&&(b(n=>n.map(n=>n.id===t.id?{...n,id:e.id}:n)),un(n=>{let r=new Set(n);return r.delete(t.id),r.add(e.id),r}))}).catch(e=>{console.warn(`[Agentation] Failed to sync annotation:`,e)})},[M,r,Hn,u,Xt]),Wn=(0,_.useCallback)(()=>{mn(!0),W(()=>{N(null),mn(!1)},150)},[]),Gn=(0,_.useCallback)(e=>{let t=v.findIndex(t=>t.id===e),n=v[t];I?.id===e&&(gn(!0),W(()=>{be(null),Se(null),we([]),gn(!1)},150)),_e(e),fn(t=>new Set(t).add(e)),n&&(i?.(n),Hn(`annotation.delete`,{annotation:n})),u&&Vo(u,e).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)}),W(()=>{b(t=>t.filter(t=>t.id!==e)),fn(t=>{let n=new Set(t);return n.delete(e),n}),_e(null),t<v.length-1&&(ye(t),W(()=>ye(null),200))},150)},[v,I,i,Hn,u]),Kn=(0,_.useCallback)(e=>{if(!e){de(null),pe(null),he([]);return}if(de(e.id),e.elementBoundingBoxes?.length){let t=[];for(let n of e.elementBoundingBoxes){let e=n.x+n.width/2,r=n.y+n.height/2-window.scrollY,i=document.elementsFromPoint(e,r).find(e=>!e.closest(`[data-annotation-marker]`)&&!e.closest(`[data-agentation-root]`));i&&t.push(i)}he(t),pe(null)}else if(e.boundingBox){let t=e.boundingBox,n=$s(t.x+t.width/2,e.isFixed?t.y+t.height/2:t.y+t.height/2-window.scrollY);if(n){let e=n.getBoundingClientRect(),r=e.width/t.width,i=e.height/t.height;pe(r<.5||i<.5?null:n)}else pe(null);he([])}else pe(null),he([])},[]),qn=(0,_.useCallback)(e=>{if(!I)return;let t={...I,comment:e};b(e=>e.map(e=>e.id===I.id?t:e)),a?.(t),Hn(`annotation.update`,{annotation:t}),u&&Bo(u,I.id,{comment:e}).catch(e=>{console.warn(`[Agentation] Failed to update annotation on server:`,e)}),gn(!0),W(()=>{be(null),Se(null),we([]),gn(!1)},150)},[I,a,Hn,u]),Jn=(0,_.useCallback)(()=>{gn(!0),W(()=>{be(null),Se(null),we([]),gn(!1)},150)},[]),Yn=(0,_.useCallback)(()=>{let e=v.length,t=R.length>0||!!z;if(e===0&&Ot.length===0&&!t)return;if(o?.(v),Hn(`annotations.clear`,{annotations:v}),u){Promise.all(v.map(e=>Vo(u,e.id).catch(e=>{console.warn(`[Agentation] Failed to delete annotation from server:`,e)})));for(let[,e]of Ct.current)e&&Vo(u,e).catch(()=>{});Ct.current.clear();for(let[,e]of wt.current)e&&Vo(u,e).catch(()=>{});wt.current.clear()}le(!0),P(!0),kt([]);let n=Nt.current;if(n){let e=n.getContext(`2d`);e&&e.clearRect(0,0,n.width,n.height)}(R.length>0||z)&&(ht(e=>e+1),_t(e=>e+1),W(()=>{We([]),ot(null)},200)),Je&&Ye(!1),nt&&rt(``),lt.current={rearrange:null,placements:[]},Oo(V),W(()=>{b([]),un(new Set),localStorage.removeItem(fo(V)),le(!1)},e*30+200),W(()=>P(!1),1500)},[V,v,Ot,R,z,Je,nt,o,Hn,u]),Zn=(0,_.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:V,t=L&&Je,n;if(t){if(R.length===0&&!z&&!nt)return;n=``}else{if(n=Es(v,e,B.outputDetail),!n&&Ot.length===0&&R.length===0&&!z)return;n||=`## Page Feedback: ${e}
`}if(!t&&Ot.length>0){let e=new Set;for(let t of v)t.drawingIndex!=null&&e.add(t.drawingIndex);let t=Nt.current;t&&(t.style.visibility=`hidden`);let r=[],i=window.scrollY;for(let t=0;t<Ot.length;t++){if(e.has(t))continue;let n=Ot[t];if(n.points.length<2)continue;let a=n.fixed?n.points:n.points.map(e=>({x:e.x,y:e.y-i})),o=1/0,s=1/0,c=-1/0,l=-1/0;for(let e of a)o=Math.min(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.x),l=Math.max(l,e.y);let u=c-o,d=l-s,f=Math.hypot(u,d),p=a[0],m=a[a.length-1],h=Math.hypot(m.x-p.x,m.y-p.y),g,_=h<f*.35,v=u/Math.max(d,1);if(_&&f>20){let e=Math.max(u,d)*.15,t=0;for(let n of a){let r=n.x-o<e,i=c-n.x<e,a=n.y-s<e,u=l-n.y<e;(r||i)&&(a||u)&&t++}g=t>a.length*.15?`box`:`circle`}else g=v>3&&d<40?`underline`:h>f*.5?`arrow`:`drawing`;let y=Math.min(10,a.length),b=Math.max(1,Math.floor(a.length/y)),x=new Set,S=[],C=[p];for(let e=b;e<a.length-1;e+=b)C.push(a[e]);C.push(m);for(let e of C){let t=$s(e.x,e.y);if(!t||x.has(t)||oa(t,`[data-feedback-toolbar]`))continue;x.add(t);let{name:n}=ca(t);S.includes(n)||S.push(n)}let w=`${Math.round(o)},${Math.round(s)} \u2192 ${Math.round(c)},${Math.round(l)}`,ee;ee=(g===`circle`||g===`box`)&&S.length>0?`${g===`box`?`Boxed`:`Circled`} **${S[0]}**${S.length>1?` (and ${S.slice(1).join(`, `)})`:``} (region: ${w})`:g===`underline`&&S.length>0?`Underlined **${S[0]}** (${w})`:g===`arrow`&&S.length>=2?`Arrow from **${S[0]}** to **${S[S.length-1]}** (${Math.round(p.x)},${Math.round(p.y)} \u2192 ${Math.round(m.x)},${Math.round(m.y)})`:S.length>0?`${g===`arrow`?`Arrow`:`Drawing`} near **${S.join(`**, **`)}** (region: ${w})`:`Drawing at ${w}`,r.push(ee)}t&&(t.style.visibility=``),r.length>0&&(n+=`
**Drawings:**
`,r.forEach((e,t)=>{n+=`${t+1}. ${e}
`}))}if((R.length>0||t&&nt)&&(n+=`
`+so(R,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Je,wireframePurpose:nt||void 0},B.outputDetail)),z){let e=co(z,B.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(n+=`
`+e)}if(l)try{await navigator.clipboard.writeText(n)}catch{}s?.(n),ae(!0),W(()=>ae(!1),2e3),B.autoClearAfterCopy&&W(()=>Yn(),500)},[v,Ot,R,z,Je,L,et,nt,V,B.outputDetail,`off`,B.autoClearAfterCopy,Yn,l,s]),ir=(0,_.useCallback)(async()=>{let e=typeof window<`u`?window.location.pathname+window.location.search+window.location.hash:V,t=Es(v,e,B.outputDetail);if(!t&&R.length===0&&!z)return;if(t||=`## Page Feedback: ${e}
`,R.length>0&&(t+=`
`+so(R,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Je,wireframePurpose:nt||void 0},B.outputDetail)),z){let e=co(z,B.outputDetail,{width:window.innerWidth,height:window.innerHeight});e&&(t+=`
`+e)}c&&c(t,v),se(`sending`),await new Promise(e=>W(e,150));let n=await Hn(`submit`,{output:t,annotations:v},!0);se(n?`sent`:`failed`),W(()=>se(`idle`),2500),n&&B.autoClearAfterCopy&&W(()=>Yn(),500)},[c,Hn,v,R,z,Je,et,V,B.outputDetail,`off`,B.autoClearAfterCopy,Yn]);(0,_.useEffect)(()=>{if(!on)return;let e=e=>{let t=e.clientX-on.x,n=e.clientY-on.y,r=Math.sqrt(t*t+n*n);if(!rn&&r>10&&an(!0),rn||r>10){let e=on.toolbarX+t,r=on.toolbarY+n,i=20-(337-(h?$t===`connected`?297:257:44)),a=window.innerWidth-20-337;e=Math.max(i,Math.min(a,e)),r=Math.max(20,Math.min(window.innerHeight-44-20,r)),nn({x:e,y:r})}},t=()=>{rn&&(cn.current=!0),an(!1),sn(null)};return document.addEventListener(`mousemove`,e),document.addEventListener(`mouseup`,t),()=>{document.removeEventListener(`mousemove`,e),document.removeEventListener(`mouseup`,t)}},[on,rn,h,$t]);let or=(0,_.useCallback)(e=>{if(e.target.closest(`button`)||e.target.closest(`[data-agentation-settings-panel]`))return;let t=e.currentTarget.parentElement;if(!t)return;let n=t.getBoundingClientRect(),r=tn?.x??n.left,i=tn?.y??n.top;sn({x:e.clientX,y:e.clientY,toolbarX:r,toolbarY:i})},[tn]);if((0,_.useEffect)(()=>{if(!tn)return;let e=()=>{let e=tn.x,t=tn.y,n=20-(337-(h?$t===`connected`?297:257:44)),r=window.innerWidth-20-337;e=Math.max(n,Math.min(r,e)),t=Math.max(20,Math.min(window.innerHeight-44-20,t)),(e!==tn.x||t!==tn.y)&&nn({x:e,y:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[tn,h,$t]),(0,_.useEffect)(()=>{let e=e=>{let t=e.target,n=t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable;if(e.key===`Escape`){if(L){Ge?Ke(null):Fn();return}if(Et){Dt(!1);return}if(Lt.length>0){Rt([]);return}M||h&&(Bt(),g(!1))}if((e.metaKey||e.ctrlKey)&&e.shiftKey&&(e.key===`f`||e.key===`F`)){e.preventDefault(),Bt(),h?In():g(!0);return}if(!(n||e.metaKey||e.ctrlKey)&&((e.key===`p`||e.key===`P`)&&(e.preventDefault(),Bt(),zn()),(e.key===`l`||e.key===`L`)&&(e.preventDefault(),Bt(),Et&&Dt(!1),Ne&&Pe(!1),M&&Wn(),L?Fn():Ve(!0)),(e.key===`h`||e.key===`H`)&&v.length>0&&(e.preventDefault(),Bt(),S(e=>!e)),(e.key===`c`||e.key===`C`)&&(v.length>0||R.length>0||z)&&(e.preventDefault(),Bt(),Zn()),(e.key===`x`||e.key===`X`)&&(v.length>0||R.length>0||z)&&(e.preventDefault(),Bt(),Yn(),R.length>0&&We([]),z&&ot(null)),e.key===`s`||e.key===`S`)){let t=Zs(B.webhookUrl)||Zs(p||``);v.length>0&&t&&oe===`idle`&&(e.preventDefault(),Bt(),ir())}};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[h,Et,L,Ge,R,z,M,v.length,B.webhookUrl,p,oe,ir,zn,Zn,Yn,Lt]),!ke||C)return null;let sr=v.length>0,cr=v.filter(e=>!dn.has(e.id)&&e.kind!==`placement`&&e.kind!==`rearrange`),lr=cr.length>0,ur=v.filter(e=>dn.has(e.id)),fr=e=>{let t=e.x/100*window.innerWidth,n=typeof e.y==`string`?parseFloat(e.y):e.y,r={};window.innerHeight-n-22-10<80&&(r.top=`auto`,r.bottom=`calc(100% + 10px)`);let i=t-200/2;return i<10?r.left=`calc(50% + ${10-i}px)`:i+200>window.innerWidth-10&&(r.left=`calc(50% - ${i+200-(window.innerWidth-10)}px)`),r};return(0,y.createPortal)((0,H.jsxs)(`div`,{ref:E,style:{display:`contents`},"data-agentation-theme":Gt?`dark`:`light`,"data-agentation-accent":B.annotationColorId,"data-agentation-root":``,children:[(0,H.jsx)(`div`,{className:`${Z.toolbar}${m?` ${m}`:``}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:tn?{left:tn.x,top:tn.y,right:`auto`,bottom:`auto`}:void 0,children:(0,H.jsxs)(`div`,{className:`${Z.toolbarContainer} ${h?Z.expanded:Z.collapsed} ${qt?Z.entrance:``} ${ee?Z.hiding:``} ${!B.webhooksEnabled&&(Zs(B.webhookUrl)||Zs(p||``))?Z.serverConnected:``}`,onClick:h?void 0:e=>{if(cn.current){cn.current=!1,e.preventDefault();return}g(!0)},onMouseDown:or,role:h?void 0:`button`,tabIndex:h?-1:0,title:h?void 0:`Start feedback mode`,children:[(0,H.jsxs)(`div`,{className:`${Z.toggleContent} ${h?Z.hidden:Z.visible}`,children:[(0,H.jsx)(Xn,{size:24}),lr&&(0,H.jsx)(`span`,{className:`${Z.badge} ${h?Z.fadeOut:``} ${qt?Z.entrance:``}`,children:cr.length})]}),(0,H.jsxs)(`div`,{className:`${Z.controlsContent} ${h?Z.visible:Z.hidden} ${tn&&tn.y<100?Z.tooltipBelow:``} ${ze||Ne?Z.tooltipsHidden:``} ${Pt?Z.tooltipsInSession:``}`,onMouseEnter:Ht,onMouseLeave:Ut,children:[(0,H.jsxs)(`div`,{className:`${Z.buttonWrapper} ${tn&&tn.x<120?Z.buttonWrapperAlignLeft:``}`,children:[(0,H.jsx)(`button`,{className:Z.controlButton,onClick:e=>{e.stopPropagation(),Bt(),zn()},"data-active":je,children:(0,H.jsx)(tr,{size:24,isPaused:je})}),(0,H.jsxs)(`span`,{className:Z.buttonTooltip,children:[je?`Resume animations`:`Pause animations`,(0,H.jsx)(`span`,{className:Z.shortcut,children:`P`})]})]}),(0,H.jsxs)(`div`,{className:Z.buttonWrapper,children:[(0,H.jsx)(`button`,{className:`${Z.controlButton} ${Gt?``:Z.light}`,onClick:e=>{e.stopPropagation(),Bt(),Et&&Dt(!1),Ne&&Pe(!1),M&&Wn(),L?Fn():Ve(!0)},"data-active":L,style:L&&Je?{color:`#f97316`,background:`rgba(249, 115, 22, 0.25)`}:void 0,children:(0,H.jsx)(dr,{size:21})}),(0,H.jsxs)(`span`,{className:Z.buttonTooltip,children:[L?`Exit layout mode`:`Layout mode`,(0,H.jsx)(`span`,{className:Z.shortcut,children:`L`})]})]}),(0,H.jsxs)(`div`,{className:Z.buttonWrapper,children:[(0,H.jsx)(`button`,{className:Z.controlButton,onClick:e=>{e.stopPropagation(),Bt(),S(!x)},disabled:!sr||L,children:(0,H.jsx)(er,{size:24,isOpen:x})}),(0,H.jsxs)(`span`,{className:Z.buttonTooltip,children:[x?`Hide markers`:`Show markers`,(0,H.jsx)(`span`,{className:Z.shortcut,children:`H`})]})]}),(0,H.jsxs)(`div`,{className:Z.buttonWrapper,children:[(0,H.jsx)(`button`,{className:`${Z.controlButton} ${ie?Z.statusShowing:``}`,onClick:e=>{e.stopPropagation(),Bt(),Zn()},disabled:L&&Je?R.length===0&&!z?.sections?.length:!sr&&Ot.length===0&&R.length===0&&!z?.sections?.length,"data-active":ie,children:(0,H.jsx)(Qn,{size:24,copied:ie,tint:L&&Je&&(R.length>0||z?.sections?.length)?`#f97316`:void 0})}),(0,H.jsxs)(`span`,{className:Z.buttonTooltip,children:[L&&Je?`Copy layout`:`Copy feedback`,(0,H.jsx)(`span`,{className:Z.shortcut,children:`C`})]})]}),(0,H.jsxs)(`div`,{className:`${Z.buttonWrapper} ${Z.sendButtonWrapper} ${h&&!B.webhooksEnabled&&(Zs(B.webhookUrl)||Zs(p||``))?Z.sendButtonVisible:``}`,children:[(0,H.jsxs)(`button`,{className:`${Z.controlButton} ${oe===`sent`||oe===`failed`?Z.statusShowing:``}`,onClick:e=>{e.stopPropagation(),Bt(),ir()},disabled:!sr||!Zs(B.webhookUrl)&&!Zs(p||``)||oe===`sending`,"data-no-hover":oe===`sent`||oe===`failed`,tabIndex:Zs(B.webhookUrl)||Zs(p||``)?0:-1,children:[(0,H.jsx)($n,{size:24,state:oe}),sr&&oe===`idle`&&(0,H.jsx)(`span`,{className:Z.buttonBadge,children:v.length})]}),(0,H.jsxs)(`span`,{className:Z.buttonTooltip,children:[`Send Annotations`,(0,H.jsx)(`span`,{className:Z.shortcut,children:`S`})]})]}),(0,H.jsxs)(`div`,{className:Z.buttonWrapper,children:[(0,H.jsx)(`button`,{className:Z.controlButton,onClick:e=>{e.stopPropagation(),Bt(),Yn()},disabled:!sr&&Ot.length===0&&R.length===0&&!z?.sections?.length,"data-danger":!0,children:(0,H.jsx)(rr,{size:24})}),(0,H.jsxs)(`span`,{className:Z.buttonTooltip,children:[`Clear all`,(0,H.jsx)(`span`,{className:Z.shortcut,children:`X`})]})]}),(0,H.jsxs)(`div`,{className:Z.buttonWrapper,children:[(0,H.jsx)(`button`,{className:Z.controlButton,onClick:e=>{e.stopPropagation(),Bt(),L&&Fn(),Pe(!Ne)},children:(0,H.jsx)(nr,{size:24})}),u&&$t!==`disconnected`&&(0,H.jsx)(`span`,{className:`${Z.mcpIndicator} ${Z[$t]} ${Ne?Z.hidden:``}`,title:$t===`connected`?`MCP Connected`:`MCP Connecting...`}),(0,H.jsx)(`span`,{className:Z.buttonTooltip,children:`Settings`})]}),(0,H.jsx)(`div`,{className:Z.divider}),(0,H.jsxs)(`div`,{className:`${Z.buttonWrapper} ${tn&&typeof window<`u`&&tn.x>window.innerWidth-120?Z.buttonWrapperAlignRight:``}`,children:[(0,H.jsx)(`button`,{className:Z.controlButton,onClick:e=>{e.stopPropagation(),Bt(),In()},children:(0,H.jsx)(ar,{size:24})}),(0,H.jsxs)(`span`,{className:Z.buttonTooltip,children:[`Exit`,(0,H.jsx)(`span`,{className:Z.shortcut,children:`Esc`})]})]})]}),(0,H.jsx)(ia,{visible:L&&h,activeType:Ge,onSelect:e=>{Ke(Ge===e?null:e)},isDarkMode:Gt,sectionCount:z?.sections.length??0,onDetectSections:()=>{let e=Na(),t=z?.sections??[],n=new Set(t.map(e=>e.selector)),r=e.filter(e=>!n.has(e.selector));ot({sections:[...t,...r],originalOrder:[...z?.originalOrder??[],...r.map(e=>e.id)],detectedAt:Date.now()})},placementCount:R.length,onClearPlacements:()=>{ht(e=>e+1),_t(e=>e+1),W(()=>{ot({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Je,onBlankCanvasChange:e=>{let t={sections:[],originalOrder:[],detectedAt:Date.now()};e?(ct.current={rearrange:z,placements:R},ot(lt.current.rearrange||t),We(lt.current.placements),Ke(null)):(lt.current={rearrange:z,placements:R},ot(ct.current.rearrange||t),We(ct.current.placements)),Ye(e)},wireframePurpose:nt,onWireframePurposeChange:rt,Tooltip:Or,onDragStart:(e,t)=>{t.preventDefault();let n=G[e],r=null,i=!1,a=t.clientX,o=t.clientY,s=t.target.closest(`[data-feedback-toolbar]`)?.getBoundingClientRect().top??window.innerHeight,c=t=>{let c=t.clientX-a,l=t.clientY-o;if(!i&&(Math.abs(c)>4||Math.abs(l)>4)&&(i=!0,r=document.createElement(`div`),r.className=`${q.dragPreview}${Je?` ${q.dragPreviewWireframe}`:``}`,document.body.appendChild(r)),!r)return;let u=Math.max(0,s-t.clientY),d=1-(1-Math.min(1,u/180))**2,f=Math.min(140,n.width*.18),p=Math.min(90,n.height*.18),m=28+(f-28)*d,h=20+(p-20)*d;r.style.width=`${m}px`,r.style.height=`${h}px`,r.style.left=`${t.clientX-m/2}px`,r.style.top=`${t.clientY-h/2}px`,r.style.opacity=`${.5+.5*d}`,r.textContent=d>.25?e:``},l=t=>{if(window.removeEventListener(`mousemove`,c),window.removeEventListener(`mouseup`,l),r&&document.body.removeChild(r),i){let r=n.width,i=n.height,a=window.scrollY,o=Math.max(0,t.clientX-r/2),s=Math.max(0,t.clientY+a-i/2),c={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:e,x:o,y:s,width:r,height:i,scrollY:a,timestamp:Date.now()};We(e=>[...e,c]),Ke(null),vt.current=new Set,dt(e=>e+1)}};window.addEventListener(`mousemove`,c),window.addEventListener(`mouseup`,l)}}),(0,H.jsx)(qs,{settings:B,onSettingsChange:e=>Wt(t=>({...t,...e})),isDarkMode:Gt,onToggleTheme:Yt,isDevMode:!1,connectionStatus:$t,endpoint:u,isVisible:Fe,toolbarNearBottom:!!tn&&tn.y<230,settingsPage:Le,onSettingsPageChange:Re,onHideToolbar:Mn})]})}),(L||He)&&(0,H.jsx)(`div`,{className:`${q.blankCanvas} ${Xe?q.visible:``} ${it?q.gridActive:``}`,style:{"--canvas-opacity":Qe},"data-feedback-toolbar":!0}),L&&Je&&Xe&&(0,H.jsxs)(`div`,{className:q.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,H.jsxs)(`div`,{className:q.wireframeOpacityRow,children:[(0,H.jsx)(`span`,{className:q.wireframeOpacityLabel,children:`Toggle Opacity`}),(0,H.jsx)(`input`,{type:`range`,className:q.wireframeOpacitySlider,min:0,max:1,step:.01,value:Qe,onChange:e=>$e(Number(e.target.value))})]}),(0,H.jsxs)(`div`,{className:q.wireframeNoticeTitleRow,children:[(0,H.jsx)(`span`,{className:q.wireframeNoticeTitle,children:`Wireframe Mode`}),(0,H.jsx)(`span`,{className:q.wireframeNoticeDivider}),(0,H.jsx)(`button`,{className:q.wireframeStartOver,onClick:()=>{ht(e=>e+1),ot({sections:[],originalOrder:[],detectedAt:Date.now()}),lt.current={rearrange:null,placements:[]},rt(``),Oo(V)},children:`Start Over`})]}),`Drag components onto the canvas.`,(0,H.jsx)(`br`,{}),`Copied output will only include the wireframed layout.`]}),(L||He)&&(0,H.jsx)($i,{placements:R,onChange:We,activeComponent:He?null:Ge,onActiveComponentChange:Ke,isDarkMode:Gt,exiting:He,onInteractionChange:at,passthrough:!Ge,extraSnapRects:z?.sections.map(e=>e.currentRect),deselectSignal:ut,clearSignal:mt,wireframe:Je,onSelectionChange:(e,t)=>{vt.current=e,t||(yt.current=new Set,pt(e=>e+1))},onDragMove:(e,t)=>{let n=yt.current;if(!(!n.size||!z)){if(!bt.current){bt.current=new Map;for(let e of z.sections)n.has(e.id)&&bt.current.set(e.id,{x:e.currentRect.x,y:e.currentRect.y})}for(let r of z.sections){if(!n.has(r.id)||!bt.current.get(r.id))continue;let i=document.querySelector(`[data-rearrange-section="${r.id}"]`);i&&(i.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=yt.current,i=bt.current;if(bt.current=null,!(!r.size||!z||!i)){for(let e of r){let t=document.querySelector(`[data-rearrange-section="${e}"]`);t&&(t.style.transform=``)}n&&ot(n=>n&&{...n,sections:n.sections.map(n=>{let r=i.get(n.id);return r?{...n,currentRect:{...n.currentRect,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}}:n})})}}}),(L||He)&&z&&(0,H.jsx)(Ua,{rearrangeState:z,onChange:ot,isDarkMode:Gt,exiting:He,blankCanvas:Je,extraSnapRects:R.map(e=>({x:e.x,y:e.y,width:e.width,height:e.height})),clearSignal:gt,deselectSignal:ft,onSelectionChange:(e,t)=>{yt.current=e,t||(vt.current=new Set,dt(e=>e+1))},onDragMove:(e,t)=>{let n=vt.current;if(n.size){if(!bt.current){bt.current=new Map;for(let e of R)n.has(e.id)&&bt.current.set(e.id,{x:e.x,y:e.y})}for(let r of n){let n=document.querySelector(`[data-design-placement="${r}"]`);n&&(n.style.transform=`translate(${e}px, ${t}px)`)}}},onDragEnd:(e,t,n)=>{let r=vt.current,i=bt.current;if(bt.current=null,!(!r.size||!i)){for(let e of r){let t=document.querySelector(`[data-design-placement="${e}"]`);t&&(t.style.transform=``)}n&&We(n=>n.map(n=>{let r=i.get(n.id);return r?{...n,x:Math.max(0,r.x+e),y:Math.max(0,r.y+t)}:n}))}}}),(0,H.jsx)(`canvas`,{ref:Nt,className:`${Z.drawCanvas} ${Et?Z.active:``}`,style:{opacity:+!!An,transition:`opacity 0.15s ease`},"data-feedback-toolbar":!0}),(0,H.jsxs)(`div`,{className:Z.markersLayer,"data-feedback-toolbar":!0,children:[D&&cr.filter(e=>!e.isFixed).map((e,t,n)=>(0,H.jsx)(As,{annotation:e,globalIndex:cr.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:O,isClearing:F,isAnimated:ln.has(e.id),isHovered:!O&&ue===e.id,isDeleting:ge===e.id,isEditingAny:!!I,renumberFrom:ve,markerClickBehavior:B.markerClickBehavior,tooltipStyle:fr(e),onHoverEnter:e=>!O&&e.id!==Tn.current&&Kn(e),onHoverLeave:()=>Kn(null),onClick:e=>B.markerClickBehavior===`delete`?Gn(e.id):Vn(e),onContextMenu:Vn},e.id)),D&&!O&&ur.filter(e=>!e.isFixed).map(e=>(0,H.jsx)(Ms,{annotation:e},e.id))]}),(0,H.jsxs)(`div`,{className:Z.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[D&&cr.filter(e=>e.isFixed).map((e,t,n)=>(0,H.jsx)(As,{annotation:e,globalIndex:cr.findIndex(t=>t.id===e.id),layerIndex:t,layerSize:n.length,isExiting:O,isClearing:F,isAnimated:ln.has(e.id),isHovered:!O&&ue===e.id,isDeleting:ge===e.id,isEditingAny:!!I,renumberFrom:ve,markerClickBehavior:B.markerClickBehavior,tooltipStyle:fr(e),onHoverEnter:e=>!O&&e.id!==Tn.current&&Kn(e),onHoverLeave:()=>Kn(null),onClick:e=>B.markerClickBehavior===`delete`?Gn(e.id):Vn(e),onContextMenu:Vn},e.id)),D&&!O&&ur.filter(e=>e.isFixed).map(e=>(0,H.jsx)(Ms,{annotation:e,fixed:!0},e.id))]}),h&&(0,H.jsxs)(`div`,{className:Z.overlay,"data-feedback-toolbar":!0,style:M||I?{zIndex:99999}:void 0,children:[k?.rect&&!M&&!De&&!_n&&(0,H.jsx)(`div`,{className:`${Z.hoverHighlight} ${Z.enter}`,style:{left:k.rect.left,top:k.rect.top,width:k.rect.width,height:k.rect.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)`}}),Lt.filter(e=>document.contains(e.element)).map((e,t)=>{let n=e.element.getBoundingClientRect(),r=Lt.length>1;return(0,H.jsx)(`div`,{className:r?Z.multiSelectOutline:Z.singleSelectOutline,style:{position:`fixed`,left:n.left,top:n.top,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}},t)}),ue&&!M&&(()=>{let e=v.find(e=>e.id===ue);if(!e?.boundingBox)return null;if(e.elementBoundingBoxes?.length)return me.length>0?me.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,H.jsx)(`div`,{className:`${Z.multiSelectOutline} ${Z.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`hover-outline-live-${t}`)}):e.elementBoundingBoxes.map((e,t)=>(0,H.jsx)(`div`,{className:`${Z.multiSelectOutline} ${Z.enter}`,style:{left:e.x,top:e.y-Te,width:e.width,height:e.height}},`hover-outline-${t}`));let t=fe&&document.contains(fe)?fe.getBoundingClientRect():null,n=t?{x:t.left,y:t.top,width:t.width,height:t.height}:{x:e.boundingBox.x,y:e.isFixed?e.boundingBox.y:e.boundingBox.y-Te,width:e.boundingBox.width,height:e.boundingBox.height},r=e.isMultiSelect;return(0,H.jsx)(`div`,{className:`${r?Z.multiSelectOutline:Z.singleSelectOutline} ${Z.enter}`,style:{left:n.x,top:n.y,width:n.width,height:n.height,...r?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}})})(),k&&!M&&!De&&!_n&&(0,H.jsxs)(`div`,{className:`${Z.hoverTooltip} ${Z.enter}`,style:{left:Math.max(8,Math.min(j.x,window.innerWidth-100)),top:Math.max(j.y-(k.reactComponents?48:32),8)},children:[k.reactComponents&&(0,H.jsx)(`div`,{className:Z.hoverReactPath,children:k.reactComponents}),(0,H.jsx)(`div`,{className:Z.hoverElementName,children:k.elementName})]}),M&&(0,H.jsxs)(H.Fragment,{children:[M.multiSelectElements?.length?M.multiSelectElements.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,H.jsx)(`div`,{className:`${Z.multiSelectOutline} ${pn?Z.exit:Z.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`pending-multi-${t}`)}):M.targetElement&&document.contains(M.targetElement)?(()=>{let e=M.targetElement.getBoundingClientRect();return(0,H.jsx)(`div`,{className:`${Z.singleSelectOutline} ${pn?Z.exit:Z.enter}`,style:{left:e.left,top:e.top,width:e.width,height:e.height,borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}})})():M.boundingBox&&(0,H.jsx)(`div`,{className:`${M.isMultiSelect?Z.multiSelectOutline:Z.singleSelectOutline} ${pn?Z.exit:Z.enter}`,style:{left:M.boundingBox.x,top:M.boundingBox.y-Te,width:M.boundingBox.width,height:M.boundingBox.height,...M.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}),(()=>{let e=M.x,t=M.isFixed?M.y:M.y-Te;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(js,{x:e,y:t,isMultiSelect:M.isMultiSelect,isExiting:pn}),(0,H.jsx)(Cr,{ref:Dn,element:M.element,selectedText:M.selectedText,computedStyles:M.computedStylesObj,placeholder:M.element===`Area selection`?`What should change in this area?`:M.isMultiSelect?`Feedback for this group of elements...`:`What should change?`,onSubmit:Un,onCancel:Wn,isExiting:pn,lightMode:!Gt,accentColor:M.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:{left:Math.max(160,Math.min(window.innerWidth-160,e/100*window.innerWidth)),...t>window.innerHeight-290?{bottom:window.innerHeight-t+20}:{top:t+20}}})]})})()]}),I&&(0,H.jsxs)(H.Fragment,{children:[I.elementBoundingBoxes?.length?Ce.length>0?Ce.filter(e=>document.contains(e)).map((e,t)=>{let n=e.getBoundingClientRect();return(0,H.jsx)(`div`,{className:`${Z.multiSelectOutline} ${Z.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height}},`edit-multi-live-${t}`)}):I.elementBoundingBoxes.map((e,t)=>(0,H.jsx)(`div`,{className:`${Z.multiSelectOutline} ${Z.enter}`,style:{left:e.x,top:e.y-Te,width:e.width,height:e.height}},`edit-multi-${t}`)):(()=>{let e=xe&&document.contains(xe)?xe.getBoundingClientRect():null,t=e?{x:e.left,y:e.top,width:e.width,height:e.height}:I.boundingBox?{x:I.boundingBox.x,y:I.isFixed?I.boundingBox.y:I.boundingBox.y-Te,width:I.boundingBox.width,height:I.boundingBox.height}:null;return t?(0,H.jsx)(`div`,{className:`${I.isMultiSelect?Z.multiSelectOutline:Z.singleSelectOutline} ${Z.enter}`,style:{left:t.x,top:t.y,width:t.width,height:t.height,...I.isMultiSelect?{}:{borderColor:`color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)`,backgroundColor:`color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)`}}}):null})(),(0,H.jsx)(Cr,{ref:On,element:I.element,selectedText:I.selectedText,computedStyles:ba(I.computedStyles),placeholder:`Edit your feedback...`,initialValue:I.comment,submitLabel:`Save`,onSubmit:qn,onCancel:Jn,onDelete:()=>Gn(I.id),isExiting:hn,lightMode:!Gt,accentColor:I.isMultiSelect?`var(--agentation-color-green)`:`var(--agentation-color-accent)`,style:(()=>{let e=I.isFixed?I.y:I.y-Te;return{left:Math.max(160,Math.min(window.innerWidth-160,I.x/100*window.innerWidth)),...e>window.innerHeight-290?{bottom:window.innerHeight-e+20}:{top:e+20}}})()})]}),_n&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{ref:xn,className:Z.dragSelection}),(0,H.jsx)(`div`,{ref:Sn,className:Z.highlightsContainer})]})]})]}),document.body)}var ic=[{name:`Layout`,elements:[{type:`div`,label:`Container`,icon:`□`,isField:!1,defaultProps:{class:`uib-container`}},{type:`div`,label:`Plain Div`,icon:`□`,isField:!1,defaultProps:{class:``}},{type:`div`,label:`Row`,icon:`⊞`,isField:!1,defaultProps:{class:`uib-row`}},{type:`div`,label:`Column`,icon:`⊞`,isField:!1,defaultProps:{class:`uib-col-12`}},{type:`section`,label:`Section`,icon:`📑`,isField:!1,defaultProps:{class:`uib-section`}},{type:`article`,label:`Article`,icon:`📄`,isField:!1,defaultProps:{class:`uib-article`}},{type:`main`,label:`Main`,icon:`🔲`,isField:!1,defaultProps:{class:`uib-main`}},{type:`aside`,label:`Aside`,icon:`◧`,isField:!1,defaultProps:{class:`uib-aside`}},{type:`nav`,label:`Navigation`,icon:`⟁`,isField:!1,defaultProps:{class:`uib-nav`}},{type:`div`,label:`Grid`,icon:`⊞`,isField:!1,defaultProps:{class:`uib-grid`}}]},{name:`Media`,elements:[{type:`img`,label:`Image`,icon:`🖼`,isField:!0,defaultProps:{class:`uib-img`}},{type:`svg`,label:`SVG`,icon:`S`,isField:!0,defaultProps:{class:`uib-svg`},defaultContent:`<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" /></svg>`},{type:`video`,label:`Video`,icon:`▶`,isField:!0,defaultProps:{class:``}}]},{name:`Typography`,elements:[{type:`h1`,label:`Heading 1`,icon:`H1`,isField:!0,defaultProps:{class:`uib-h1`},defaultContent:`Heading 1`},{type:`h2`,label:`Heading 2`,icon:`H2`,isField:!0,defaultProps:{class:`uib-h2`},defaultContent:`Heading 2`},{type:`h3`,label:`Heading 3`,icon:`H3`,isField:!0,defaultProps:{class:`uib-h3`},defaultContent:`Heading 3`},{type:`h4`,label:`Heading 4`,icon:`H4`,isField:!0,defaultProps:{class:`uib-h4`},defaultContent:`Heading 4`},{type:`h5`,label:`Heading 5`,icon:`H5`,isField:!0,defaultProps:{class:`uib-h5`},defaultContent:`Heading 5`},{type:`h6`,label:`Heading 6`,icon:`H6`,isField:!0,defaultProps:{class:`uib-h6`},defaultContent:`Heading 6`},{type:`p`,label:`Paragraph`,icon:`¶`,isField:!0,defaultProps:{class:`uib-p`},defaultContent:`This is a paragraph of text.`},{type:`blockquote`,label:`Quote`,icon:`“`,isField:!0,defaultProps:{class:`uib-blockquote`},defaultContent:`Enter your quote here.`},{type:`hr`,label:`Divider`,icon:`—`,isField:!0,defaultProps:{class:`uib-hr`}}]},{name:`Inline`,elements:[{type:`span`,label:`Span / Text`,icon:`T`,isField:!0,defaultProps:{class:`uib-span`},defaultContent:`Inline text`},{type:`strong`,label:`Bold`,icon:`B`,isField:!0,defaultProps:{class:`uib-strong`},defaultContent:`Bold text`},{type:`em`,label:`Italic`,icon:`I`,isField:!0,defaultProps:{class:`uib-em`},defaultContent:`Italic text`},{type:`code`,label:`Code`,icon:`</>`,isField:!0,defaultProps:{class:`uib-code`},defaultContent:`code_here()`},{type:`small`,label:`Small`,icon:`s`,isField:!0,defaultProps:{class:`uib-small`},defaultContent:`Small text`}]},{name:`Tables`,elements:[{type:`table`,label:`Table`,icon:`▦`,isField:!1,defaultProps:{class:`uib-table`},defaultChildren:[{type:`thead`,label:`Table Head`,children:[{type:`tr`,label:`Table Row`,children:[{type:`th`,label:`Table Cell`,content:`Header 1`,isField:!0},{type:`th`,label:`Table Cell`,content:`Header 2`,isField:!0},{type:`th`,label:`Table Cell`,content:`Header 3`,isField:!0}]}]},{type:`tbody`,label:`Table Body`,children:[{type:`tr`,label:`Table Row`,children:[{type:`td`,label:`Table Cell`,content:`Data 1`,isField:!0},{type:`td`,label:`Table Cell`,content:`Data 2`,isField:!0},{type:`td`,label:`Table Cell`,content:`Data 3`,isField:!0}]}]}]},{type:`tr`,label:`Table Row`,icon:`=`,isField:!1},{type:`td`,label:`Table Cell`,icon:`□`,isField:!0,defaultContent:`Cell data`},{type:`thead`,label:`Table Head`,icon:`☰`,isField:!1},{type:`tbody`,label:`Table Body`,icon:`☰`,isField:!1}]},{name:`Lists`,elements:[{type:`ul`,label:`Unordered List`,icon:`•`,isField:!1,defaultProps:{class:`uib-ul`},defaultChildren:[{type:`li`,label:`List Item`,props:{class:`uib-li`},content:`New list item`,isField:!0}]},{type:`ol`,label:`Ordered List`,icon:`1.`,isField:!1,defaultProps:{class:`uib-ol`},defaultChildren:[{type:`li`,label:`List Item`,props:{class:`uib-li`},content:`New list item`,isField:!0}]},{type:`li`,label:`List Item`,icon:`-`,isField:!0,defaultProps:{class:`uib-li`},defaultContent:`List item`}]},{name:`Forms`,elements:[{type:`form`,label:`Form`,icon:`✉`,isField:!1,defaultProps:{class:`uib-form`},defaultChildren:[{type:`label`,label:`Label`,content:`Email Address`,isField:!0,props:{class:`uib-label`}},{type:`input`,label:`Input`,isField:!0,props:{class:`uib-input`,type:`email`,placeholder:`Enter email...`}},{type:`button`,label:`Submit`,content:`Submit`,isField:!0,props:{class:`uib-button uib-submit`,type:`submit`}}]},{type:`label`,label:`Label`,icon:`T`,isField:!0,defaultProps:{class:`uib-label`},defaultContent:`Field Label`},{type:`input`,label:`Input Field`,icon:`✎`,isField:!0,defaultProps:{class:`uib-input`,type:`text`}},{type:`select`,label:`Select Dropdown`,icon:`▾`,isField:!1,defaultProps:{class:`uib-select`},defaultChildren:[{type:`option`,label:`Select Option`,content:`Select an option...`,isField:!0}]},{type:`option`,label:`Select Option`,icon:`○`,isField:!0,defaultContent:`Option`},{type:`textarea`,label:`Textarea`,icon:`¶`,isField:!0,defaultProps:{class:`uib-textarea`}}]},{name:`Interactive`,elements:[{type:`button`,label:`Button`,icon:`▢`,isField:!0,defaultProps:{class:`uib-button`},defaultContent:`Click Me`},{type:`a`,label:`Link`,icon:`⟁`,isField:!0,defaultProps:{class:`uib-link`},defaultContent:`Read more`}]},{name:`Drupal`,elements:[{type:`drupal-block`,label:`Block`,icon:`☐`,isField:!1,isDrupal:!0,defaultProps:{"block-id":``,class:``}},{type:`drupal-menu`,label:`Menu`,icon:`☰`,isField:!1,isDrupal:!0,defaultProps:{"menu-name":``,class:``}}]}],ac=[`div`,`section`,`article`,`header`,`footer`,`main`,`aside`,`nav`,`ul`,`ol`,`table`,`thead`,`tbody`,`tr`,`form`,`select`];function oc(e){return JSON.parse(JSON.stringify(e))}function sc(e,t){for(let n of e){if(n.id===t)return n;if(n.children){let e=sc(n.children,t);if(e)return e}}return null}function cc(e,t){for(let n=0;n<e.length;n++){if(e[n].id===t)return{parent:e,index:n};if(e[n].children){let r=cc(e[n].children,t);if(r)return r}}return null}function lc(e){return e.map(e=>({...e,props:e.props||{},children:e.children?lc(e.children):e.isField?void 0:[]}))}function uc(e,t){return e.filter(e=>e.id!==t).map(e=>({...e,children:e.children?uc(e.children,t):[]}))}function dc(e,t){if(!e)return!0;if(!ac.includes(e.tag))return!1;let n=t.type||t.tag;return!((e.tag===`ul`||e.tag===`ol`)&&n!==`li`||e.tag===`table`&&![`thead`,`tbody`,`tr`].includes(n)||[`thead`,`tbody`].includes(e.tag)&&n!==`tr`||e.tag===`tr`&&![`th`,`td`].includes(n)||[`th`,`td`].includes(n)&&e.tag!==`tr`||e.tag===`select`&&n!==`option`||[`section`,`header`,`footer`,`main`].includes(n)&&![`div`,`main`].includes(e.tag))}function fc(e){if(!e||!e.props)return!1;let t=e.props;return!!(t.flexDirection||t.justifyContent||t.alignItems||t.alignSelf||t.flexGrow!==void 0&&t.flexGrow!==0||t.flexShrink!==void 0&&t.flexShrink!==1||t.width||t.height)}function pc({node:e,mode:t,selectedId:n,onSelect:r,onOpenProperties:i,onDuplicate:a,onDelete:o,onQuickAdd:s,onStartTargetedAdd:c,onSaveAsComponent:l,pendingParentId:u,availableComponents:d,depth:f=0,isInherited:p=!1,isRow:m=!1}){let{attributes:h,listeners:g,setNodeRef:_,transform:v,isDragging:y}=Tn({id:e.id});return(0,H.jsx)(yc,{node:e,mode:t,selectedId:n,onSelect:r,onOpenProperties:i,onDuplicate:a,onDelete:o,onQuickAdd:s,onStartTargetedAdd:c,onSaveAsComponent:l,pendingParentId:u,availableComponents:d,isDragging:y,attributes:h,listeners:g,setNodeRef:_,style:{opacity:y?.3:1,position:`relative`},depth:f,isInherited:p,isRow:m})}var mc=(0,_.createContext)({isDraggingGlobal:!1});function hc(){return(0,_.useContext)(mc)}function gc({parentId:e,index:t,isActive:n}){let{setNodeRef:r,isOver:i}=kn({id:`gap::${e}::${t}`});return(0,H.jsx)(`div`,{ref:r,className:`ss-drop-gap ${i?`ss-drop-gap-active`:``} ${n?`ss-drop-gap-visible`:``}`})}function _c({parentNode:e,mode:t,selectedId:n,onSelect:r,onOpenProperties:i,onDuplicate:a,onDelete:o,onQuickAdd:s,onStartTargetedAdd:c,onSaveAsComponent:l,pendingParentId:u,availableComponents:d,depth:f=0,isInherited:p=!1,isRow:m=!1}){let{isDraggingGlobal:h}=hc(),g=e.children||[];return m?(0,H.jsxs)(`div`,{className:`ss-box-columns-wrap ${e.props?.class||`uib-row`} ${fc(e)?`uib-${e.id}`:``}`,children:[g.map((m,g)=>(0,H.jsxs)(`div`,{className:`ss-box-col-slot ${(m.props?.class||``).split(/\s+/).find(e=>e.startsWith(`uib-col-`))||`uib-col-12`} ${fc(m)?`uib-${m.id}`:``}`,children:[h&&(0,H.jsx)(gc,{parentId:e.id,index:g,isActive:h}),(0,H.jsx)(pc,{node:m,mode:t,selectedId:n,onSelect:r,onOpenProperties:i,onDuplicate:a,onDelete:o,onQuickAdd:s,onStartTargetedAdd:c,onSaveAsComponent:l,pendingParentId:u,availableComponents:d,depth:f,isInherited:p})]},m.id)),h&&(0,H.jsx)(gc,{parentId:e.id,index:g.length,isActive:h})]}):(0,H.jsxs)(`div`,{className:`ss-box-children-wrap`,children:[g.map((m,g)=>(0,H.jsxs)(`div`,{className:`ss-drop-slot`,children:[h&&(0,H.jsx)(gc,{parentId:e.id,index:g,isActive:h}),(0,H.jsx)(pc,{node:m,mode:t,selectedId:n,onSelect:r,onOpenProperties:i,onDuplicate:a,onDelete:o,onQuickAdd:s,onStartTargetedAdd:c,onSaveAsComponent:l,pendingParentId:u,availableComponents:d,depth:f,isInherited:p})]},m.id)),h&&(0,H.jsx)(gc,{parentId:e.id,index:g.length,isActive:h}),(0,H.jsx)(`div`,{className:`ss-box-empty-drop-area`})]})}function vc(e,t,n){if(n)return{icon:`🧩`,color:`#a855f7`};let r=t||e||``;return r.startsWith(`Container`)||r.startsWith(`Plain Div`)||r.startsWith(`Section`)||r.startsWith(`Row`)||r.startsWith(`Column`)||e===`div`||e===`main`||e===`aside`||e===`article`||e===`nav`?e===`aside`?{icon:`◧`,color:`#fbbf24`}:e===`article`?{icon:`📄`,color:`#d97706`}:e===`section`?{icon:`📑`,color:`#f5a623`}:e===`main`?{icon:`🔲`,color:`#f5a623`}:e===`nav`?{icon:`⟁`,color:`#f5a623`}:{icon:`□`,color:`#f5a623`}:r===`Image`?{icon:`🖼`,color:`#0073ba`}:e===`svg`?{icon:`S`,color:`#0073ba`}:r===`Video`?{icon:`▶`,color:`#0073ba`}:r.startsWith(`Heading`)||r.startsWith(`Header`)?{icon:`H`,color:`#0073ba`}:r===`WYSIWYG`||r===`Paragraph`||e===`p`?{icon:`¶`,color:`#0073ba`}:r===`Link`||e===`a`?{icon:`🔗`,color:`#0073ba`}:r===`Button`||e===`button`?{icon:`▢`,color:`#0073ba`}:e===`ul`||e===`ol`?{icon:`≡`,color:`#0073ba`}:e===`li`?{icon:`•`,color:`#0073ba`}:e===`table`?{icon:`▦`,color:`#10b981`}:[`thead`,`tbody`].includes(e)?{icon:`☰`,color:`#10b981`}:e===`tr`?{icon:`＝`,color:`#10b981`}:[`th`,`td`].includes(e)?{icon:`▫`,color:`#10b981`}:e===`form`?{icon:`✉`,color:`#f43f5e`}:e===`label`?{icon:`L`,color:`#f43f5e`}:[`input`,`textarea`,`select`].includes(e)?{icon:`✎`,color:`#f43f5e`}:e===`option`?{icon:`○`,color:`#f43f5e`}:{icon:`📄`,color:`#0073ba`}}function yc({node:e,mode:t,selectedId:n,onSelect:r,onOpenProperties:i,onDuplicate:a,onDelete:o,onQuickAdd:s,onStartTargetedAdd:c,onSaveAsComponent:l,pendingParentId:u,availableComponents:d,isOverlay:f,isDragging:p,attributes:m,listeners:h,setNodeRef:g,style:v,depth:y=0,isInherited:b=!1}){let{isDraggingGlobal:x}=hc(),S=ac.includes(e.tag)||e.children&&e.children.length>0||!!e.component_id,{setNodeRef:C,isOver:w}=kn({id:`inside::${e.id}`,disabled:!S||p}),[ee,T]=(0,_.useState)(!1),[E,D]=(0,_.useState)(!1),te=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{te.current&&!te.current.contains(e.target)&&D(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[E]),(0,_.useEffect)(()=>{let e=()=>T(!0),t=()=>T(!1);return window.addEventListener(`ss-collapse-all`,e),window.addEventListener(`ss-expand-all`,t),()=>{window.removeEventListener(`ss-collapse-all`,e),window.removeEventListener(`ss-expand-all`,t)}},[]);let O=n===e.id,ne=e.label===`Row for columns`||e.label&&e.label.startsWith(`Row`),k=e.label===`Column`,A=w&&S&&!p&&x,j=!!e.component_id,re=j?e.label||`Component`:e.label||(e.tag?e.tag.charAt(0).toUpperCase()+e.tag.slice(1):`Element`);if(k){let t=((e.props?.class||``).split(/\s+/).find(e=>e.startsWith(`uib-col-`))||`uib-col-12`).replace(`uib-col-`,``);re=`${re} (${t}/12)`}else if(ne){let t=e.props?.flexDirection;t&&t!==`row`&&(re=`${re} (${t.charAt(0).toUpperCase()+t.slice(1)})`)}let M=vc(e.tag,re,j);return(0,H.jsxs)(`div`,{ref:g,style:{...v,touchAction:`none`},className:`
        ss-box-el
        ${O?`ss-box-selected`:``}
        ${A?`ss-box-drop-over`:``}
        ${p?`ss-box-dragging`:``}
        ${f?`ss-box-overlay`:``}
        ${k?`ss-box-column`:``}
        ${e.tag===`aside`?`uib-aside-${e.props?.side||`left`}`:``}
        ${e.tag===`aside`&&e.props?.collapsible?`uib-collapsible`:``}
        ${u===e.id?`ss-box-is-targeted`:``}
        ${fc(e)?`uib-${e.id}`:``}
      `,onClick:t=>{t.stopPropagation(),r(e.id)},onDoubleClick:t=>{t.stopPropagation(),i&&i(e.id)},children:[(0,H.jsxs)(`div`,{className:`ss-box-topbar`,...m,...h,children:[(0,H.jsx)(`span`,{className:`ss-box-icon`,style:{background:M.color},children:M.icon}),(0,H.jsx)(`span`,{className:`ss-box-title`,children:re}),(0,H.jsx)(`span`,{className:`ss-box-spacer`}),(S||e.content)&&(0,H.jsxs)(H.Fragment,{children:[S&&(0,H.jsx)(`button`,{type:`button`,className:`ss-box-action ss-box-targeted-add`,onClick:t=>{t.stopPropagation(),c(e.id)},title:`Add element inside...`,children:`+`}),(0,H.jsx)(`button`,{type:`button`,className:`ss-box-action ss-box-collapse-btn`,onClick:e=>{e.stopPropagation(),T(!ee)},title:ee?`Expand`:`Collapse`,children:ee?`⤢`:`⤡`})]}),(0,H.jsxs)(`div`,{className:`ss-box-menu-container`,ref:te,onClick:e=>e.stopPropagation(),children:[(0,H.jsx)(`button`,{type:`button`,className:`ss-box-action ss-box-options-btn`,onClick:e=>{e.stopPropagation(),D(!E)},title:`Options`,children:`•••`}),E&&(0,H.jsxs)(`div`,{className:`ss-box-dropdown`,children:[(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),i&&i(e.id)},children:`Edit Settings`}),(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),a&&a(e.id)},children:`Duplicate`}),e.tag===`table`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`thead`)},children:`+ Add Table Head (thead)`}),(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`tbody`)},children:`+ Add Table Body (tbody)`}),(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`tr`)},children:`+ Add Row (tr)`})]}),[`thead`,`tbody`].includes(e.tag)&&(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`tr`)},children:`+ Add Row (tr)`}),e.tag===`tr`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`td`)},children:`+ Add Cell (td)`}),(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`th`)},children:`+ Add Cell (th)`})]}),e.tag===`form`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`input`)},children:`+ Add Input`}),(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`label`)},children:`+ Add Label`}),(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`select`)},children:`+ Add Select`}),(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`textarea`)},children:`+ Add Textarea`})]}),[`ul`,`ol`].includes(e.tag)&&(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`li`)},children:`+ Add Item`}),e.tag===`select`&&(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),s&&s(e.id,`option`)},children:`+ Add Option`}),(0,H.jsx)(`div`,{className:`ss-box-dropdown-divider`}),(0,H.jsx)(`button`,{onClick:t=>{t.stopPropagation(),D(!1),l&&l(e.id)},children:`Save to Library`}),(0,H.jsx)(`div`,{className:`ss-box-dropdown-divider`}),(0,H.jsx)(`button`,{className:`ss-box-dropdown-danger`,onClick:t=>{t.stopPropagation(),D(!1),o&&o(e.id)},children:`Delete`})]})]})]}),!ee&&S&&(0,H.jsx)(`div`,{ref:C,className:`ss-box-body ${ne?`ss-box-row-body`:``} ${A?`ss-box-drop-inside-active`:``}`,children:(0,H.jsx)(_c,{parentNode:e,mode:t,selectedId:n,onSelect:r,onOpenProperties:i,onDuplicate:a,onDelete:o,onQuickAdd:s,onStartTargetedAdd:c,onSaveAsComponent:l,pendingParentId:u,availableComponents:d,depth:y+1,isInherited:b||j,isRow:ne})}),!ee&&!S&&e.content&&(0,H.jsx)(`div`,{className:`ss-box-text-content`,children:e.tag===`img`?(0,H.jsx)(`div`,{className:`ss-box-image-preview`,children:(0,H.jsx)(`img`,{src:e.content,alt:`Preview`,style:{maxWidth:`100%`,maxHeight:`150px`,borderRadius:`4px`,display:`block`,margin:`0 auto`}})}):e.content})]})}function bc({parentId:e,index:t,isActive:n}){let{setNodeRef:r,isOver:i}=kn({id:`gap::${e}::${t}`});return(0,H.jsx)(`div`,{ref:r,className:`ss-drop-gap ${i?`ss-drop-gap-active`:``} ${n?`ss-drop-gap-visible`:``}`})}function xc({nodes:e,selectedId:t,onSelect:n,onOpenProperties:r,onDuplicate:i,onDelete:a,onQuickAdd:o,onStartTargetedAdd:s,onSaveAsComponent:c,pendingParentId:l,availableComponents:u}){let{isDraggingGlobal:d}=hc(),{setNodeRef:f,isOver:p}=kn({id:`canvas-root`});return(0,H.jsxs)(`div`,{ref:f,className:`tree-render ${p?`root-over`:``} ${d?`is-dragging-mode`:``}`,children:[e.map((e,f)=>(0,H.jsxs)(`div`,{className:`ss-drop-slot`,children:[d&&(0,H.jsx)(bc,{parentId:`canvas-root`,index:f,isActive:d}),(0,H.jsx)(pc,{node:e,selectedId:t,onSelect:n,onOpenProperties:r,onDuplicate:i,onDelete:a,onQuickAdd:o,onStartTargetedAdd:s,onSaveAsComponent:c,pendingParentId:l,availableComponents:u})]},e.id)),d&&(0,H.jsx)(bc,{parentId:`canvas-root`,index:e.length,isActive:d}),d&&(0,H.jsx)(`div`,{className:`canvas-extract-hint`,children:`Drop here to move to root`})]})}var Sc={Layout:`#f59e0b`,Media:`#10b981`,Typography:`#3b82f6`,Interactive:`#f97316`,Drupal:`#06b6d4`},Cc={Container:`□`,"Plain Div":`□`,Row:`⊞`,Column:`⊞`,Section:`📑`,Article:`📄`,Main:`🔲`,Aside:`◧`,Grid:`⊞`,Image:`🖼`,Video:`▶`,"Heading 1":`H1`,"Heading 2":`H2`,"Heading 3":`H3`,"Heading 4":`H4`,"Heading 5":`H5`,"Heading 6":`H6`,Paragraph:`¶`,"Span / Text":`T`,Button:`▢`,Link:`⟁`,Block:`☐`,Menu:`☰`};function wc({nodes:e}){return!e||!Array.isArray(e)?null:(0,H.jsx)(`ul`,{className:`ss-preview-list`,children:e.map((e,t)=>(0,H.jsxs)(`li`,{className:`ss-preview-item`,children:[(0,H.jsx)(`span`,{className:`ss-preview-tag`,children:e.tag}),e.label&&(0,H.jsxs)(`span`,{className:`ss-preview-label`,children:[`(`,e.label,`)`]}),e.children&&e.children.length>0&&(0,H.jsx)(wc,{nodes:e.children})]},t))})}function Tc({comp:e,addComponentInstance:t}){let[n,r]=(0,_.useState)(!1);return(0,H.jsxs)(`div`,{className:`ss-component-item`,children:[(0,H.jsxs)(`div`,{className:`ss-element-row ${n?`ss-element-row-expanded`:``}`,onClick:()=>t(e.id),title:`Add ${e.label}`,children:[(0,H.jsx)(`span`,{className:`ss-component-toggle`,onClick:e=>{e.stopPropagation(),r(!n)},children:n?`▼`:`▶`}),(0,H.jsx)(`span`,{className:`ss-element-icon`,style:{background:`#8b5cf6`},children:`🧩`}),(0,H.jsx)(`span`,{className:`ss-element-label`,children:e.label}),(0,H.jsx)(`button`,{type:`button`,className:`ss-element-add`,title:`Add ${e.label}`,children:(0,H.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,H.jsx)(`path`,{d:`M10 6v8M6 10h8`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})})]}),n&&e.layout_tree&&(0,H.jsx)(`div`,{className:`ss-component-preview`,children:(0,H.jsx)(wc,{nodes:e.layout_tree})})]})}function Ec({el:e,catColor:t,onClick:n}){let{attributes:r,listeners:i,setNodeRef:a,transform:o,isDragging:s}=Tn({id:`sidebar-el-${e.label}`,data:{type:`sidebar-element`,element:e}});return(0,H.jsxs)(`div`,{ref:a,style:o?{transform:`translate3d(${o.x}px, ${o.y}px, 0)`,zIndex:1e3,opacity:s?.5:1}:void 0,className:`ss-element-row ${s?`is-dragging`:``}`,onClick:()=>n(e),title:`Add ${e.label}`,...i,...r,children:[(0,H.jsx)(`span`,{className:`ss-element-icon`,style:{background:t},children:e.icon||Cc[e.label]||`□`}),(0,H.jsx)(`span`,{className:`ss-element-label`,children:e.label}),(0,H.jsx)(`button`,{type:`button`,className:`ss-element-add`,title:`Add ${e.label}`,children:(0,H.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,H.jsx)(`path`,{d:`M10 6v8M6 10h8`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})})]})}function Dc({mode:e,availableComponents:t=[],customStyles:n=[],selectedNodeId:r,currentStyle:i,selectedNode:a,addElement:o,addComponentInstance:s,onSelectStyle:c,onDeselect:l,onClose:u}){let[d,f]=(0,_.useState)(`elements`),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)([`Layout`,`Media`,`Typography`,`Tables`,`Lists`,`Forms`]),v=e=>{g(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},y=ic.map(e=>({...e,elements:e.elements.filter(e=>!p||e.label.toLowerCase().includes(p.toLowerCase()))})).filter(e=>e.elements.length>0);return(0,H.jsxs)(`aside`,{className:`ui-builder-sidebar`,children:[(0,H.jsxs)(`div`,{className:`sidebar-header`,children:[(0,H.jsx)(`h3`,{className:`sidebar-header-title`,children:`Elements`}),(0,H.jsx)(`button`,{type:`button`,className:`sidebar-close-btn`,onClick:u,title:`Close`,children:`✕`})]}),(0,H.jsx)(`div`,{className:`sidebar-tabs`,children:[`elements`,`library`,`styles`].map(e=>(0,H.jsx)(`button`,{type:`button`,className:`tab-btn ${d===e?`active`:``}`,onClick:()=>f(e),children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),d===`elements`&&(0,H.jsxs)(`div`,{className:`sidebar-search`,children:[(0,H.jsx)(`span`,{className:`sidebar-search-icon`,children:(0,H.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,children:[(0,H.jsx)(`circle`,{cx:`6.5`,cy:`6.5`,r:`5.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,H.jsx)(`path`,{d:`M11 11l4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]})}),(0,H.jsx)(`input`,{type:`text`,className:`sidebar-search-input`,placeholder:`Search for Elements`,value:p,onChange:e=>m(e.target.value)}),p&&(0,H.jsx)(`button`,{type:`button`,className:`sidebar-search-clear`,onClick:()=>m(``),children:`✕`})]}),(0,H.jsxs)(`div`,{className:`sidebar-content`,children:[d===`elements`&&(0,H.jsxs)(`div`,{className:`animate-fade`,children:[y.length===0&&(0,H.jsxs)(`div`,{className:`no-items-hint`,children:[`No elements match "`,p,`"`]}),y.map(e=>{let t=Sc[e.name]||`#64748b`,n=h.includes(e.name)||p;return(0,H.jsxs)(`div`,{className:`ss-element-category ${n?`expanded`:`collapsed`}`,children:[(0,H.jsxs)(`div`,{className:`ss-category-title`,onClick:()=>v(e.name),style:{cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,H.jsxs)(`span`,{children:[e.name,` elements`]}),(0,H.jsx)(`span`,{style:{fontSize:`10px`,opacity:.5},children:n?`▼`:`▶`})]}),n&&(0,H.jsx)(`div`,{className:`ss-category-list`,children:e.elements.map(e=>(0,H.jsx)(Ec,{el:e,catColor:t,onClick:o},e.label))})]},e.name)})]}),d===`library`&&(0,H.jsx)(`div`,{className:`animate-fade`,children:(0,H.jsxs)(`div`,{className:`ss-element-category`,children:[(0,H.jsx)(`div`,{className:`ss-category-title`,children:`Reusable Components`}),(0,H.jsxs)(`div`,{className:`ss-category-list`,children:[t.map(e=>(0,H.jsx)(Tc,{comp:e,addComponentInstance:s},e.id)),t.length===0&&(0,H.jsx)(`div`,{className:`no-items-hint`,children:`No components saved yet.`})]})]})}),d===`styles`&&(0,H.jsx)(`div`,{className:`animate-fade`,children:(0,H.jsxs)(`div`,{className:`ss-element-category`,children:[(0,H.jsx)(`div`,{className:`ss-category-title`,children:`Global Styles`}),(0,H.jsxs)(`div`,{className:`ss-category-list`,children:[n.map(e=>(0,H.jsxs)(`div`,{className:`ss-element-row ${i?.id===e.id?`ss-element-row-active`:``}`,onClick:()=>c(e.id),children:[(0,H.jsx)(`span`,{className:`ss-element-icon`,style:{background:`#10b981`},children:`🎨`}),(0,H.jsxs)(`span`,{className:`ss-element-label`,children:[`.`,e.id]})]},e.id)),(0,H.jsxs)(`div`,{className:`ss-element-row ss-element-row-add-new`,onClick:()=>{c(`style-`+Math.random().toString(36).substr(2,5))},children:[(0,H.jsx)(`span`,{className:`ss-element-icon`,style:{background:`#475569`},children:`+`}),(0,H.jsx)(`span`,{className:`ss-element-label`,children:`Create New Style`})]})]})]})})]}),(r||i)&&(0,H.jsxs)(`div`,{className:`sidebar-context-hint`,children:[r?(0,H.jsxs)(`span`,{children:[`✅ `,(0,H.jsx)(`strong`,{children:a?.label||a?.tag})]}):(0,H.jsxs)(`span`,{children:[`🎨 `,(0,H.jsxs)(`strong`,{children:[`Style: .`,i?.id]})]}),(0,H.jsx)(`button`,{type:`button`,className:`deselect-link`,onClick:l,children:`Deselect`})]})]})}function Oc({mode:e,value:t,onUpdate:n}){return(0,H.jsxs)(`div`,{className:`field-editor-wrapper`,children:[(0,H.jsxs)(`div`,{className:`field-mode-toggle`,children:[(0,H.jsx)(`button`,{type:`button`,className:`mode-btn ${e===`static`?`active`:``}`,onClick:()=>n(t,`static`),children:`Static`}),(0,H.jsx)(`button`,{type:`button`,className:`mode-btn ${e===`mapping`?`active`:``}`,onClick:()=>n(t,`mapping`),children:`Mapping`})]}),(0,H.jsx)(`div`,{className:`field-input-container`,children:e===`mapping`?(0,H.jsxs)(`div`,{className:`input-with-prefix`,children:[(0,H.jsx)(`span`,{className:`prefix`,children:`[`}),(0,H.jsx)(`input`,{type:`text`,className:`mapping-source-input`,value:t||``,placeholder:`e.g. node:title`,onChange:e=>n(e.target.value,`mapping`)}),(0,H.jsx)(`span`,{className:`prefix`,children:`]`})]}):(0,H.jsx)(`textarea`,{className:`form-control`,value:t||``,placeholder:`Enter text content...`,onChange:e=>n(e.target.value,`static`)})})]})}function kc({mode:e,value:t,onUpdate:n}){let[r,i]=(0,_.useState)(!1),a=(0,_.useRef)(null),o=async e=>{let t=e.target.files[0];if(t){i(!0);let e=new FormData;e.append(`files[image]`,t);try{let t=window.drupalSettings?.ui_builder?.csrf_token,r={};t&&(r[`X-CSRF-Token`]=t);let i=await fetch(`/ui-builder/upload`,{method:`POST`,body:e,headers:r});if(i.ok)n((await i.json()).url,`static`);else{let e=await i.json().catch(()=>({}));alert(`Upload failed: `+(e.error||`Server error `+i.status))}}catch(e){console.error(`Error uploading file:`,e),alert(`Error connecting to upload server. Check console for details.`)}finally{i(!1)}}},s=Array.isArray(t)?t:t?[t]:[];return(0,H.jsxs)(`div`,{className:`field-editor-wrapper image-editor`,children:[(0,H.jsxs)(`div`,{className:`field-mode-toggle`,children:[(0,H.jsx)(`button`,{type:`button`,className:`mode-btn ${e===`static`?`active`:``}`,onClick:()=>n(t,`static`),children:`Static`}),(0,H.jsx)(`button`,{type:`button`,className:`mode-btn ${e===`mapping`?`active`:``}`,onClick:()=>n(t,`mapping`),children:`Mapping`})]}),(0,H.jsx)(`div`,{className:`field-input-container`,children:e===`mapping`?(0,H.jsxs)(`div`,{className:`input-with-prefix`,children:[(0,H.jsx)(`span`,{className:`prefix`,children:`[`}),(0,H.jsx)(`input`,{type:`text`,className:`mapping-source-input`,value:typeof t==`string`?t:``,placeholder:`field_image_mapping`,onChange:e=>n(e.target.value,`mapping`)}),(0,H.jsx)(`span`,{className:`prefix`,children:`]`})]}):(0,H.jsxs)(`div`,{className:`image-static-controls`,children:[(0,H.jsx)(`div`,{className:`image-preview-grid`,children:s.length>0?s.map((e,t)=>(0,H.jsxs)(`div`,{className:`image-preview-item`,children:[(0,H.jsx)(`img`,{src:e,alt:`Preview`}),(0,H.jsx)(`button`,{type:`button`,className:`remove-img`,onClick:()=>{let e=s.filter((e,n)=>n!==t);n(e.length===0?``:e.length===1?e[0]:e,`static`)},children:`× `})]},t)):(0,H.jsx)(`div`,{className:`image-placeholder`,children:`No image selected`})}),(0,H.jsx)(`input`,{type:`file`,ref:a,onChange:o,style:{display:`none`},accept:`image/*`}),(0,H.jsx)(`button`,{type:`button`,className:`upload-btn`,onClick:()=>a.current?.click(),disabled:r,children:r?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{className:`spinner`}),`Uploading...`]}):s.length>0?`Change / Add Image`:`Upload Image`})]})})]})}function Ac({title:e,children:t,defaultOpen:n=!1}){let[r,i]=(0,_.useState)(n);return(0,H.jsxs)(`div`,{className:`prop-group ${r?`open`:``}`,children:[(0,H.jsxs)(`div`,{className:`prop-group-header`,onClick:()=>i(!r),style:{padding:`16px 20px`,background:r?`#fdfdfd`:`#fff`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,fontWeight:`600`,fontSize:`14px`,color:`var(--sb-text-main)`,userSelect:`none`,borderBottom:r?`1px solid var(--sb-border)`:`none`},children:[(0,H.jsx)(`span`,{className:`prop-group-title`,children:e}),(0,H.jsx)(`div`,{className:`prop-group-icon`,style:{transform:r?`rotate(180deg)`:`none`,transition:`transform 0.2s ease`,color:`var(--sb-text-muted)`},children:(0,H.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,H.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})})]}),r&&(0,H.jsx)(`div`,{className:`prop-group-body`,style:{padding:`20px`,background:`#fdfdfd`},children:t})]})}function jc({mode:e,selectedNode:t,selectedNodeId:n,selectedStyle:r,selectedComponent:i,updateNodeProperty:a,resetToDefaultProps:o,removeNode:s,updateNodeField:c,updateInstanceValue:l,onSaveStyle:u,onDeselect:d,customStyles:f=[]}){if((0,_.useEffect)(()=>{r&&(setStyleCode(r.css_content||``),setStyleLabel(r.label||``))},[r]),(0,_.useEffect)(()=>{r&&(setStyleCode(r.css_content||``),setStyleLabel(r.label||``))},[r]),!t&&!r)return null;if(r)return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{className:`properties-backdrop`,onClick:d}),(0,H.jsxs)(`aside`,{className:`ui-builder-properties`,children:[(0,H.jsxs)(`div`,{className:`properties-header`,children:[(0,H.jsx)(`h3`,{children:`Style Editor`}),(0,H.jsx)(`button`,{type:`button`,className:`properties-close-btn`,onClick:d,title:`Close`,children:`✕`})]}),(0,H.jsxs)(`div`,{className:`properties-content animate-fade`,children:[(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:`Style Label`}),(0,H.jsx)(`input`,{type:`text`,className:`form-control`,value:styleLabel,onChange:e=>setStyleLabel(e.target.value),placeholder:`e.g. Hero Title`})]}),(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:`CSS Class`}),(0,H.jsx)(`input`,{type:`text`,className:`form-control`,value:`.${r.id}`,disabled:!0,style:{opacity:.6}})]}),(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:`CSS Rules`}),(0,H.jsx)(`textarea`,{className:`form-control css-editor`,value:styleCode,onChange:e=>setStyleCode(e.target.value),placeholder:`.${r.id} {\n  color: #2563eb;\n  font-size: 24px;\n}`,spellCheck:`false`})]}),(0,H.jsx)(`button`,{type:`button`,className:`btn-primary`,style:{width:`100%`,marginTop:`12px`},onClick:()=>u({...r,label:styleLabel,css_content:styleCode}),children:`Save Style`})]})]})]});let p=!!t.tag;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{className:`properties-backdrop`,onClick:d}),(0,H.jsxs)(`aside`,{className:`ui-builder-properties`,onClick:e=>e.stopPropagation(),children:[(0,H.jsxs)(`div`,{className:`properties-header`,children:[(0,H.jsx)(`h3`,{children:t.label||t.tag}),(0,H.jsx)(`button`,{type:`button`,className:`properties-close-btn`,onClick:d,title:`Close`,children:`✕`})]}),(0,H.jsx)(`div`,{className:`properties-content`,children:(0,H.jsxs)(`div`,{className:`animate-fade property-groups`,children:[(0,H.jsx)(Ac,{title:`Identity`,defaultOpen:!0,children:(0,H.jsxs)(`div`,{className:`form-group`,style:{marginTop:`16px`},children:[(0,H.jsx)(`label`,{children:`Label`}),(0,H.jsx)(`input`,{type:`text`,className:`form-control`,value:t.label||``,onChange:e=>c(t.id,{label:e.target.value}),placeholder:`Internal label...`})]})}),(0,H.jsx)(Ac,{title:`Content & Data`,defaultOpen:[`img`,`text`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p`,`span`].includes(t.tag),children:(0,H.jsx)(`div`,{style:{marginTop:`16px`},children:p?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:`Field Identifier`}),(0,H.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`e.g. hero_title`,value:t.fieldLabel||``,onChange:e=>c(t.id,{fieldLabel:e.target.value})}),(0,H.jsx)(`p`,{className:`help-text`,style:{fontSize:`10px`,color:`var(--text-muted)`,marginTop:`4px`},children:`This ID connects this element to Drupal content fields.`})]}),(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:t.tag===`img`?`Image Source`:`Text Content`}),t.tag===`img`?(0,H.jsx)(kc,{mode:t.fieldMode||`static`,value:t.content||``,onUpdate:(e,n)=>c(t.id,{content:e,fieldMode:n})}):(0,H.jsx)(Oc,{mode:t.fieldMode||`static`,value:t.content||``,onUpdate:(e,n)=>c(t.id,{content:e,fieldMode:n})})]})]}):(0,H.jsx)(`div`,{className:`component-fields`,children:(()=>{let e=i?.form_schema||{},n=typeof e==`object`&&!Array.isArray(e)?Object.entries(e):[];return n.length===0?(0,H.jsx)(`p`,{className:`no-items-hint`,children:`No editable fields.`}):n.map(([e,n])=>{let r=t.values?.[e]||{mode:`static`,value:``},i=typeof r==`object`?r:{mode:`static`,value:r};return(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:n.title||e}),n.type===`image`?(0,H.jsx)(kc,{mode:i.mode,value:i.value,onUpdate:(n,r)=>l(t.id,e,n,r)}):(0,H.jsx)(Oc,{mode:i.mode,value:i.value,onUpdate:(n,r)=>l(t.id,e,n,r)})]},e)})})()})})}),t.tag===`img`&&(0,H.jsx)(Ac,{title:`Dimensions`,children:(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`8px`},children:[(0,H.jsxs)(`div`,{className:`form-group`,style:{flex:1},children:[(0,H.jsx)(`label`,{children:`Width`}),(0,H.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`e.g. 100% or 200px`,value:t.props?.width||``,onChange:e=>a(t.id,`width`,e.target.value)})]}),(0,H.jsxs)(`div`,{className:`form-group`,style:{flex:1},children:[(0,H.jsx)(`label`,{children:`Height`}),(0,H.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`e.g. auto or 150px`,value:t.props?.height||``,onChange:e=>a(t.id,`height`,e.target.value)})]})]})}),t.label===`Container`&&(0,H.jsx)(Ac,{title:`Container Settings`,children:(0,H.jsxs)(`div`,{className:`form-group`,style:{marginTop:`16px`},children:[(0,H.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,cursor:`pointer`,userSelect:`none`},children:[(0,H.jsx)(`input`,{type:`checkbox`,checked:t.props?.fullWidth||!1,onChange:e=>{let n=e.target.checked;a(t.id,`fullWidth`,n);let r=(t.props?.class||``).split(/\s+/).filter(Boolean);n?(r=r.filter(e=>e!==`uib-container`),r.includes(`uib-full-width`)||r.push(`uib-full-width`)):(r=r.filter(e=>e!==`uib-full-width`),r.includes(`uib-container`)||r.push(`uib-container`)),a(t.id,`class`,r.join(` `))}}),(0,H.jsx)(`span`,{style:{fontSize:`13px`,fontWeight:`500`},children:`Full Width`})]}),(0,H.jsx)(`p`,{className:`help-text`,children:`Override container width to 100%.`})]})}),t.label?.toLowerCase().includes(`row`)&&(0,H.jsxs)(Ac,{title:`Row Layout (Flexbox)`,children:[(0,H.jsxs)(`div`,{className:`form-group`,style:{marginTop:`16px`},children:[(0,H.jsx)(`label`,{children:`Direction`}),(0,H.jsxs)(`select`,{className:`form-control`,value:t.props?.flexDirection||``,onChange:e=>{let n=e.target.value;a(t.id,`flexDirection`,n)},children:[(0,H.jsx)(`option`,{value:``,children:`Default`}),(0,H.jsx)(`option`,{value:`row`,children:`Row (Horizontal)`}),(0,H.jsx)(`option`,{value:`row-reverse`,children:`Row Reverse`}),(0,H.jsx)(`option`,{value:`column`,children:`Column (Vertical)`}),(0,H.jsx)(`option`,{value:`column-reverse`,children:`Column Reverse`})]})]}),(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:`Justify Content`}),(0,H.jsxs)(`select`,{className:`form-control`,value:t.props?.justifyContent||``,onChange:e=>a(t.id,`justifyContent`,e.target.value),children:[(0,H.jsx)(`option`,{value:``,children:`Default`}),(0,H.jsx)(`option`,{value:`flex-start`,children:`Start`}),(0,H.jsx)(`option`,{value:`center`,children:`Center`}),(0,H.jsx)(`option`,{value:`flex-end`,children:`End`}),(0,H.jsx)(`option`,{value:`space-between`,children:`Space Between`}),(0,H.jsx)(`option`,{value:`space-around`,children:`Space Around`}),(0,H.jsx)(`option`,{value:`space-evenly`,children:`Space Evenly`})]})]}),(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:`Align Items`}),(0,H.jsxs)(`select`,{className:`form-control`,value:t.props?.alignItems||``,onChange:e=>a(t.id,`alignItems`,e.target.value),children:[(0,H.jsx)(`option`,{value:``,children:`Default`}),(0,H.jsx)(`option`,{value:`stretch`,children:`Stretch`}),(0,H.jsx)(`option`,{value:`flex-start`,children:`Start`}),(0,H.jsx)(`option`,{value:`center`,children:`Center`}),(0,H.jsx)(`option`,{value:`flex-end`,children:`End`}),(0,H.jsx)(`option`,{value:`baseline`,children:`Baseline`})]})]})]}),t.label?.toLowerCase().includes(`column`)&&(0,H.jsxs)(Ac,{title:`Column Layout`,children:[(0,H.jsxs)(`div`,{className:`form-group`,style:{marginTop:`16px`},children:[(0,H.jsx)(`label`,{children:`Column Span (1-12)`}),(0,H.jsx)(`select`,{className:`form-control`,value:(()=>{let e=(t.props?.class||``).split(/\s+/).find(e=>e.startsWith(`uib-col-`));return e?e.replace(`uib-col-`,``):`12`})(),onChange:e=>{let n=e.target.value,r=(t.props?.class||``).split(/\s+/).filter(e=>!e.startsWith(`uib-col-`));r.push(`uib-col-${n}`),a(t.id,`class`,r.join(` `).trim())},children:[...Array(12)].map((e,t)=>(0,H.jsxs)(`option`,{value:t+1,children:[t+1,` Columns`]},t+1))})]}),(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:`Align Self`}),(0,H.jsxs)(`select`,{className:`form-control`,value:t.props?.alignSelf||``,onChange:e=>a(t.id,`alignSelf`,e.target.value),children:[(0,H.jsx)(`option`,{value:``,children:`Default`}),(0,H.jsx)(`option`,{value:`auto`,children:`Auto`}),(0,H.jsx)(`option`,{value:`flex-start`,children:`Start`}),(0,H.jsx)(`option`,{value:`center`,children:`Center`}),(0,H.jsx)(`option`,{value:`flex-end`,children:`End`}),(0,H.jsx)(`option`,{value:`stretch`,children:`Stretch`})]})]}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`12px`},children:[(0,H.jsxs)(`div`,{className:`form-group`,style:{flex:1},children:[(0,H.jsx)(`label`,{children:`Flex Grow`}),(0,H.jsx)(`input`,{type:`number`,className:`form-control`,value:t.props?.flexGrow||0,min:`0`,onChange:e=>a(t.id,`flexGrow`,parseInt(e.target.value)||0)})]}),(0,H.jsxs)(`div`,{className:`form-group`,style:{flex:1},children:[(0,H.jsx)(`label`,{children:`Flex Shrink`}),(0,H.jsx)(`input`,{type:`number`,className:`form-control`,value:t.props?.flexShrink||1,min:`0`,onChange:e=>a(t.id,`flexShrink`,parseInt(e.target.value)||0)})]})]})]}),(0,H.jsxs)(Ac,{title:`Styles & Classes`,children:[(0,H.jsxs)(`div`,{className:`form-group`,style:{marginTop:`16px`},children:[(0,H.jsx)(`label`,{children:`Apply Custom Style`}),(0,H.jsxs)(`select`,{className:`form-control`,onChange:e=>{if(!e.target.value)return;let n=(t.props?.class||``).split(/\s+/).filter(Boolean);if(!n.includes(e.target.value)){let r=[...n,e.target.value].join(` `);a(t.id,`class`,r)}e.target.value=``},children:[(0,H.jsx)(`option`,{value:``,children:`-- Select a style --`}),f.map(e=>(0,H.jsx)(`option`,{value:e.id.startsWith(`uib-`)?e.id:`uib-`+e.id,children:e.label||e.id},e.id))]})]}),(0,H.jsxs)(`div`,{className:`form-group`,style:{marginTop:`12px`},children:[(0,H.jsx)(`label`,{children:`Applied Classes`}),(0,H.jsx)(`div`,{className:`active-styles-list`,children:(()=>{let e=(t.props?.class||``).split(/\s+/).filter(Boolean);return e.length===0?(0,H.jsx)(`p`,{className:`help-text`,children:`No classes applied.`}):e.map(n=>{let r=t.label===`Container`&&(n===`container`||n===`uib-full-width`)||t.label===`Row`&&n===`row`||t.label===`Column`&&n===`column`;return(0,H.jsxs)(`div`,{className:`style-tag ${r?`is-protected`:``}`,children:[(0,H.jsx)(`span`,{className:`style-tag-label`,children:n}),!r&&(0,H.jsx)(`button`,{type:`button`,className:`style-tag-remove`,onClick:()=>{let r=e.filter(e=>e!==n).join(` `);a(t.id,`class`,r)},children:`✕`})]},n)})})()})]}),(0,H.jsxs)(`div`,{className:`form-group`,children:[(0,H.jsx)(`label`,{children:`Add Extra Class Manually`}),(0,H.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`Type class and press Enter...`,onKeyDown:e=>{if(e.key===`Enter`&&e.target.value.trim()){let n=e.target.value.trim(),r=(t.props?.class||``).split(/\s+/).filter(Boolean),i=n.split(/\s+/).filter(Boolean),o=[...r];i.forEach(e=>{o.includes(e)||o.push(e)}),a(t.id,`class`,o.join(` `)),e.target.value=``}}})]}),(0,H.jsx)(`button`,{type:`button`,className:`btn-secondary`,style:{width:`100%`,marginTop:`16px`},onClick:()=>o(t.id),children:`Reset all to Defaults`})]}),(0,H.jsx)(`div`,{className:`form-group`,style:{marginTop:`32px`,padding:`0 20px 20px 20px`},children:(0,H.jsxs)(`button`,{type:`button`,className:`delete-element-btn`,style:{width:`100%`},onClick:()=>{s(t.id),d()},children:[`Delete `,p?`Element`:`Instance`]})})]})})]})]})}function Mc({mode:e,onSavePage:t,onSaveAsComponent:n,onToggleStyles:r,sidebarOpen:i,onToggleSidebar:a}){return(0,H.jsxs)(`header`,{className:`ui-builder-action-bar`,children:[(0,H.jsxs)(`div`,{className:`bar-left`,children:[(0,H.jsx)(`button`,{type:`button`,className:`ss-sidebar-toggle ${i?`active`:``}`,onClick:a,title:i?`Hide Elements`:`Show Elements`,children:(0,H.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,H.jsx)(`rect`,{x:`1`,y:`2`,width:`6`,height:`16`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,H.jsx)(`rect`,{x:`9`,y:`2`,width:`10`,height:`16`,rx:`1`,stroke:`currentColor`,strokeWidth:`1.5`})]})}),(0,H.jsxs)(`div`,{className:`builder-logo`,children:[(0,H.jsx)(`span`,{className:`logo-icon`,style:{color:`var(--primary)`},children:`💠`}),(0,H.jsxs)(`span`,{className:`logo-text`,children:[`Site Studio `,(0,H.jsx)(`span`,{style:{fontWeight:300,opacity:.7},children:`Unified`})]})]}),(0,H.jsx)(`div`,{className:`mode-badge`,style:{background:e===`architect`?`#dbeafe`:`#dcfce7`,color:e===`architect`?`#1e40af`:`#166534`,fontSize:`10px`,fontWeight:700,padding:`2px 8px`,borderRadius:`10px`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:e===`architect`?`Component Builder`:`Page Composer`})]}),(0,H.jsx)(`div`,{className:`bar-center`}),(0,H.jsx)(`div`,{className:`bar-right`,children:e===`architect`&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(`button`,{className:`btn-secondary`,onClick:r,children:[(0,H.jsx)(`span`,{className:`icon`,children:`🎨`}),` Style Library`]}),(0,H.jsxs)(`button`,{className:`btn-secondary`,onClick:n,children:[(0,H.jsx)(`span`,{className:`icon`,children:`🧩`}),` Save as Component`]})]})})]})}var Nc=`font-size.font-weight.color.line-height.letter-spacing.text-align.text-transform.font-family.padding.padding-top.padding-right.padding-bottom.padding-left.margin.margin-top.margin-bottom.margin-right.margin-left.display.width.height.max-width.position.z-index.flex-direction.justify-content.align-items.gap.background-color.background.border.border-radius.box-shadow.opacity.cursor.transition`.split(`.`);function Pc({style:e,onSave:t,onBack:n}){let[r,i]=(0,_.useState)(()=>{let t=e.data;if(!t)return{selector:`&`,properties:{},custom_properties:{},children:[]};let n=JSON.parse(JSON.stringify(t)),r=e=>{e.properties&&(e.custom_properties||={},Object.keys(e.properties).forEach(t=>{Nc.includes(t)||(e.custom_properties[t]=e.properties[t],delete e.properties[t])})),e.children&&e.children.forEach(r)};return r(n),n}),[a,o]=(0,_.useState)([`root`]),[s,c]=(0,_.useState)(e.label||e.id),[l,u]=(0,_.useState)(e.id),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(``),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)(``),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(new Set),w=e=>e.toLowerCase().replace(/\s+/g,`-`).replace(/[^\w-]/g,``),ee=e=>{let t=e.target.value,n=w(s);c(t),(l===n||l.startsWith(`style-`))&&u(w(t))},T=(e,t)=>{e.stopPropagation(),C(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n})},E=(0,_.useRef)(null);(0,_.useEffect)(()=>{h&&E.current&&(E.current.focus(),E.current.select())},[h]);let D=(e,t)=>{if(t.length===1&&t[0]===`root`)return e;let n=e;for(let e=1;e<t.length;e++){if(!n.children||!n.children[t[e]])return n;n=n.children[t[e]]}return n},te=(e,t,n)=>{let r=JSON.parse(JSON.stringify(e)),i=r;if(t.length===1&&t[0]===`root`)Object.assign(i,n);else{for(let e=1;e<t.length;e++)i=i.children[t[e]];Object.assign(i,n)}return r},O=D(r,a),ne=(e,t)=>{e&&(e.preventDefault(),e.stopPropagation()),x(!0),y(`:hover`),g([...t,`new`])},k=(e,t)=>{if(e&&(e.preventDefault(),e.stopPropagation()),t.length===1&&t[0]===`root`)return;let n=D(r,t);x(!1),y(n.selector),g(t),o(t)},A=()=>{let e=v.trim();if(!e){g(null),x(!1);return}if(b){let t=h.slice(0,-1);i(n=>{let r=JSON.parse(JSON.stringify(n)),i=r;if(t[0]!==`root`||t.length>1)for(let e=1;e<t.length;e++)i=i.children[t[e]];i.children=i.children||[];let a=i.children.length;return i.children.push({selector:e,properties:{},children:[]}),o([...t,a]),r})}else i(t=>te(t,h,{selector:e}));g(null),x(!1)},j=(e,t)=>{let n=JSON.parse(JSON.stringify(r)),o=n;for(let e=1;e<a.length;e++)o=o.children[a[e]];o.properties||={},t?o.properties[e]=t:delete o.properties[e],i(n)},re=(e,t,n=null)=>{let o=JSON.parse(JSON.stringify(r)),s=o;for(let e=1;e<a.length;e++)s=s.children[a[e]];s.custom_properties||={},n&&n!==e&&delete s.custom_properties[n],t?s.custom_properties[e]=t:delete s.custom_properties[e],i(o)},M=()=>{let n=JSON.parse(JSON.stringify(r));if(d.trim()&&p.trim()){let e=n;for(let t=1;t<a.length;t++)e=e.children[a[t]];e.custom_properties||={},e.custom_properties[d.trim()]=p.trim()}t({...e,label:s,id:l||e.id,old_id:e.id,data:n})},[N,ie]=(0,_.useState)(null),[ae,oe]=(0,_.useState)(null),se=(e,t,n)=>{!e||e.length<2||JSON.stringify(e)!==JSON.stringify(t)&&(i(r=>{let i=JSON.parse(JSON.stringify(r)),a=i;for(let t=1;t<e.length-1;t++)a=a.children[e[t]];let o=e[e.length-1],[s]=a.children.splice(o,1);if(n===`inside`){let e=i;for(let n=1;n<t.length;n++)e=e.children[t[n]];e.children=e.children||[],e.children.push(s)}else{let r=i;for(let e=1;e<t.length-1;e++)r=r.children[t[e]];let a=t[t.length-1];e.length===t.length&&JSON.stringify(e.slice(0,-1))===JSON.stringify(t.slice(0,-1))&&o<a&&a--,n===`after`&&a++,r.children.splice(a,0,s)}return i}),o([`root`]))},ce=(e,t)=>{if(t.length<2){e.preventDefault();return}ie(t),e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,``)},P=(e,t,n)=>{if(e.preventDefault(),e.stopPropagation(),!N||JSON.stringify(t)===JSON.stringify(N))return;let r=JSON.stringify(N);JSON.stringify(t).startsWith(r.slice(0,-1)+`,`)||(e.dataTransfer.dropEffect=`move`,oe({path:t,position:n}))},F=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),N&&(se(N,t,n),ie(null),oe(null))},le=()=>{ie(null),oe(null)},ue=(e,t)=>t?`Default`:e||`&`,de=(e,t=[`root`],n=0)=>{let r=JSON.stringify(t)===JSON.stringify(a),i=JSON.stringify(t)===JSON.stringify(h),s=N&&JSON.stringify(t)===JSON.stringify(N),c=t.length===1,l=ae&&JSON.stringify(ae.path)===JSON.stringify(t)&&ae.position===`before`,u=ae&&JSON.stringify(ae.path)===JSON.stringify(t)&&ae.position===`after`,d=ae&&JSON.stringify(ae.path)===JSON.stringify(t)&&ae.position===`inside`,f=e.children&&e.children.length>0||b&&JSON.stringify(t)===JSON.stringify(h?.slice(0,-1)),p=t.join(`-`),m=S.has(p);return(0,H.jsxs)(`div`,{className:`ss-sel-wrapper ${c?`ss-sel-root`:``}`,children:[!c&&(0,H.jsx)(`div`,{className:`ss-sel-drop-zone ${l?`active`:``}`,onDragOver:e=>P(e,t,`before`),onDrop:e=>F(e,t,`before`)}),(0,H.jsxs)(`div`,{className:`ss-sel-row`,children:[!c&&(f?(0,H.jsx)(`button`,{type:`button`,className:`ss-sel-collapse-toggle`,onClick:e=>T(e,p),title:m?`Expand`:`Collapse`,children:m?`+`:`−`}):(0,H.jsx)(`div`,{className:`ss-sel-collapse-spacer`})),(0,H.jsxs)(`div`,{className:`ss-sel-card ${r?`ss-sel-selected`:``} ${s?`ss-sel-dragging`:``} ${d?`ss-sel-drop-inside`:``} ${c?`ss-sel-card-root`:``}`,onClick:()=>o(t),draggable:!c&&!i,onDragStart:e=>ce(e,t),onDragEnd:le,onDragOver:e=>P(e,t,`inside`),onDrop:e=>F(e,t,`inside`),children:[!c&&(0,H.jsx)(`span`,{className:`ss-sel-drag-handle`,title:`Drag to reorder`,children:`✥`}),i?(0,H.jsx)(`input`,{ref:E,className:`ss-sel-edit-input`,value:v,onChange:e=>y(e.target.value),onBlur:A,onKeyDown:e=>e.key===`Enter`&&A(),onFocus:e=>e.target.select(),onClick:e=>e.stopPropagation()}):(0,H.jsxs)(`span`,{className:`ss-sel-name`,onDoubleClick:e=>k(e,t),children:[ue(e.selector,c),!c&&n>1&&(0,H.jsx)(`span`,{className:`ss-sel-annotation`,children:` (child)`})]}),(0,H.jsx)(`button`,{type:`button`,className:`ss-sel-add`,title:`Add child selector`,onClick:e=>ne(e,t),children:`⊕`})]})]}),!c&&(0,H.jsx)(`div`,{className:`ss-sel-drop-zone ${u?`active`:``}`,onDragOver:e=>P(e,t,`after`),onDrop:e=>F(e,t,`after`)}),f&&!m&&(0,H.jsxs)(`div`,{className:`ss-sel-children`,children:[e.children&&e.children.map((r,i)=>{let a=i===e.children.length-1&&!(b&&JSON.stringify(t)===JSON.stringify(h?.slice(0,-1))),o=r.children&&r.children.length>0;return(0,H.jsx)(`div`,{className:`ss-sel-child-item ${a?`ss-sel-child-last`:``} ${o?``:`ss-sel-child-leaf`}`,children:de(r,[...t,i],n+1)},i)}),b&&JSON.stringify(t)===JSON.stringify(h?.slice(0,-1))&&(0,H.jsx)(`div`,{className:`ss-sel-child-item ss-sel-child-last ss-sel-child-leaf`,children:(0,H.jsxs)(`div`,{className:`ss-sel-row`,children:[(0,H.jsx)(`div`,{className:`ss-sel-collapse-spacer`}),(0,H.jsxs)(`div`,{className:`ss-sel-card ss-sel-selected`,children:[(0,H.jsx)(`span`,{className:`ss-sel-drag-handle`,style:{visibility:`hidden`},children:`✥`}),(0,H.jsx)(`input`,{ref:E,className:`ss-sel-edit-input`,value:v,onChange:e=>y(e.target.value),onBlur:A,onKeyDown:e=>e.key===`Enter`&&A(),onFocus:e=>e.target.select()})]})]})})]})]},p)};return(0,H.jsx)(`div`,{className:`style-builder-overlay`,onClick:e=>{e.target===e.currentTarget&&n()},children:(0,H.jsxs)(`div`,{className:`style-builder-sidebar`,onClick:e=>e.stopPropagation(),children:[(0,H.jsxs)(`div`,{className:`style-builder-header`,children:[(0,H.jsxs)(`div`,{className:`header-left`,children:[(0,H.jsxs)(`button`,{type:`button`,className:`back-btn`,onClick:n,children:[(0,H.jsx)(`span`,{children:`←`}),` Back to Layout`]}),(0,H.jsx)(`div`,{className:`style-info`,children:(0,H.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`4px`},children:[(0,H.jsx)(`input`,{type:`text`,value:s,onChange:ee,className:`style-label-input`,placeholder:`Enter Style Label`}),(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`11px`,color:`#64748b`},children:[(0,H.jsx)(`span`,{children:`Class:`}),(0,H.jsx)(`span`,{style:{fontFamily:`monospace`},children:`.uib-`}),(0,H.jsx)(`input`,{type:`text`,value:l,onChange:e=>u(w(e.target.value)),style:{border:`none`,background:`transparent`,color:`#64748b`,fontFamily:`monospace`,outline:`none`,padding:0,width:`150px`},placeholder:`class-name`})]})]})})]}),(0,H.jsx)(`div`,{className:`header-actions`,children:(0,H.jsx)(`button`,{type:`button`,className:`save-btn`,onClick:M,children:`Save Style`})})]}),(0,H.jsxs)(`div`,{className:`style-builder-body`,children:[(0,H.jsxs)(`div`,{className:`style-builder-tree`,children:[(0,H.jsx)(`div`,{className:`tree-header`,children:`Selectors & Modifiers`}),(0,H.jsx)(`div`,{className:`tree-content`,children:de(r)})]}),(0,H.jsxs)(`div`,{className:`style-builder-properties`,children:[(0,H.jsxs)(`div`,{className:`props-header`,children:[(0,H.jsx)(`h2`,{children:O.selector===`&`?`Base class (.uib-${e.id})`:O.selector}),(0,H.jsx)(`div`,{className:`props-header-path`,children:`Configuring properties for the selected selector`})]}),(0,H.jsx)(`div`,{className:`props-content`,children:(0,H.jsxs)(`div`,{className:`property-groups`,children:[(0,H.jsxs)(Fc,{title:`Typography`,icon:`Tt`,children:[(0,H.jsx)(Ic,{label:`Font Size`,name:`font-size`,value:O.properties[`font-size`],onChange:j,placeholder:`e.g. 16px`}),(0,H.jsx)(Ic,{label:`Font Weight`,name:`font-weight`,value:O.properties[`font-weight`],onChange:j,type:`select`,options:[`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`]}),(0,H.jsx)(Ic,{label:`Color`,name:`color`,type:`color`,value:O.properties.color,onChange:j}),(0,H.jsx)(Ic,{label:`Line Height`,name:`line-height`,value:O.properties[`line-height`],onChange:j,placeholder:`e.g. 1.5`}),(0,H.jsx)(Ic,{label:`Letter Spacing`,name:`letter-spacing`,value:O.properties[`letter-spacing`],onChange:j,placeholder:`e.g. 0.05em`}),(0,H.jsx)(Ic,{label:`Text Align`,name:`text-align`,value:O.properties[`text-align`],onChange:j,type:`select`,options:[`left`,`center`,`right`,`justify`]}),(0,H.jsx)(Ic,{label:`Text Transform`,name:`text-transform`,value:O.properties[`text-transform`],onChange:j,type:`select`,options:[`none`,`uppercase`,`lowercase`,`capitalize`]}),(0,H.jsx)(Ic,{label:`Font Family`,name:`font-family`,value:O.properties[`font-family`],onChange:j,placeholder:`e.g. 'Inter', sans-serif`})]}),(0,H.jsxs)(Fc,{title:`Spacing`,icon:`◰`,children:[(0,H.jsx)(Ic,{label:`Padding`,name:`padding`,value:O.properties.padding,onChange:j,placeholder:`e.g. 20px`}),(0,H.jsx)(Ic,{label:`Padding Top`,name:`padding-top`,value:O.properties[`padding-top`],onChange:j}),(0,H.jsx)(Ic,{label:`Padding Right`,name:`padding-right`,value:O.properties[`padding-right`],onChange:j}),(0,H.jsx)(Ic,{label:`Padding Bottom`,name:`padding-bottom`,value:O.properties[`padding-bottom`],onChange:j}),(0,H.jsx)(Ic,{label:`Padding Left`,name:`padding-left`,value:O.properties[`padding-left`],onChange:j}),(0,H.jsx)(Ic,{label:`Margin`,name:`margin`,value:O.properties.margin,onChange:j,placeholder:`e.g. 0 auto`}),(0,H.jsx)(Ic,{label:`Margin Top`,name:`margin-top`,value:O.properties[`margin-top`],onChange:j}),(0,H.jsx)(Ic,{label:`Margin Bottom`,name:`margin-bottom`,value:O.properties[`margin-bottom`],onChange:j})]}),(0,H.jsxs)(Fc,{title:`Layout & Positioning`,icon:`⛶`,children:[(0,H.jsx)(Ic,{label:`Display`,name:`display`,value:O.properties.display,onChange:j,type:`select`,options:[`block`,`flex`,`grid`,`inline-block`,`inline-flex`,`none`]}),(0,H.jsx)(Ic,{label:`Width`,name:`width`,value:O.properties.width,onChange:j}),(0,H.jsx)(Ic,{label:`Height`,name:`height`,value:O.properties.height,onChange:j}),(0,H.jsx)(Ic,{label:`Max Width`,name:`max-width`,value:O.properties[`max-width`],onChange:j}),(0,H.jsx)(Ic,{label:`Position`,name:`position`,value:O.properties.position,onChange:j,type:`select`,options:[`static`,`relative`,`absolute`,`fixed`,`sticky`]}),(0,H.jsx)(Ic,{label:`Z-Index`,name:`z-index`,value:O.properties[`z-index`],onChange:j,type:`number`}),(0,H.jsx)(Ic,{label:`Flex Direction`,name:`flex-direction`,value:O.properties[`flex-direction`],onChange:j,type:`select`,options:[`row`,`column`,`row-reverse`,`column-reverse`]}),(0,H.jsx)(Ic,{label:`Justify Content`,name:`justify-content`,value:O.properties[`justify-content`],onChange:j,type:`select`,options:[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`]}),(0,H.jsx)(Ic,{label:`Align Items`,name:`align-items`,value:O.properties[`align-items`],onChange:j,type:`select`,options:[`stretch`,`center`,`flex-start`,`flex-end`,`baseline`]}),(0,H.jsx)(Ic,{label:`Gap`,name:`gap`,value:O.properties.gap,onChange:j})]}),(0,H.jsxs)(Fc,{title:`Visuals`,icon:`🎨`,children:[(0,H.jsx)(Ic,{label:`Bg Color`,name:`background-color`,type:`color`,value:O.properties[`background-color`],onChange:j}),(0,H.jsx)(Ic,{label:`Background`,name:`background`,value:O.properties.background,onChange:j,placeholder:`e.g. linear-gradient(...)`}),(0,H.jsx)(Ic,{label:`Border`,name:`border`,value:O.properties.border,onChange:j,placeholder:`e.g. 1px solid #eee`}),(0,H.jsx)(Ic,{label:`Border Radius`,name:`border-radius`,value:O.properties[`border-radius`],onChange:j,placeholder:`e.g. 8px`}),(0,H.jsx)(Ic,{label:`Box Shadow`,name:`box-shadow`,value:O.properties[`box-shadow`],onChange:j,placeholder:`e.g. 0 4px 6px ...`}),(0,H.jsx)(Ic,{label:`Opacity`,name:`opacity`,value:O.properties.opacity,onChange:j,placeholder:`e.g. 0.5`}),(0,H.jsx)(Ic,{label:`Cursor`,name:`cursor`,type:`select`,value:O.properties.cursor,onChange:j,options:[`default`,`pointer`,`text`,`move`,`not-allowed`]}),(0,H.jsx)(Ic,{label:`Transition`,name:`transition`,value:O.properties.transition,onChange:j,placeholder:`e.g. all 0.3s ease`})]}),(0,H.jsx)(Fc,{title:`Custom CSS`,icon:`{ }`,children:(0,H.jsx)(Lc,{customProperties:O.custom_properties,onChange:re,newProp:d,setNewProp:f,newValue:p,setNewValue:m})})]})})]})]})]})})}function Fc({title:e,icon:t,children:n}){let[r,i]=(0,_.useState)(!1);return(0,H.jsxs)(`div`,{className:`prop-group ${r?`open`:``}`,children:[(0,H.jsxs)(`div`,{className:`group-title`,onClick:()=>i(!r),children:[(0,H.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,H.jsx)(`span`,{style:{opacity:.6,fontSize:`16px`},children:t}),e]}),(0,H.jsx)(`span`,{children:r?`▼`:`▶`})]}),r&&(0,H.jsx)(`div`,{className:`group-fields`,children:n})]})}function Ic({label:e,name:t,value:n=``,type:r=`text`,options:i=[],onChange:a,placeholder:o=`auto`}){return(0,H.jsxs)(`div`,{className:`prop-field`,children:[(0,H.jsx)(`label`,{children:e}),r===`select`?(0,H.jsxs)(`select`,{value:n,onChange:e=>a(t,e.target.value),children:[(0,H.jsx)(`option`,{value:``,children:`(None)`}),i.map(e=>(0,H.jsx)(`option`,{value:e,children:e},e))]}):(0,H.jsx)(`input`,{type:r,value:r===`color`?n||`#000000`:n,onChange:e=>a(t,e.target.value),placeholder:o})]})}function Lc({customProperties:e,onChange:t,newProp:n,setNewProp:r,newValue:i,setNewValue:a}){let o=()=>{n.trim()&&i.trim()&&(t(n.trim(),i.trim()),r(``),a(``))},s=Object.keys(e||{});return(0,H.jsxs)(`div`,{className:`custom-css-editor`,children:[s.length>0&&(0,H.jsx)(`div`,{className:`custom-css-list`,style:{display:`flex`,flexDirection:`column`,gap:`8px`,marginBottom:`16px`},children:s.map(n=>(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,H.jsx)(`input`,{type:`text`,defaultValue:n,onBlur:r=>{r.target.value!==n&&t(r.target.value,e[n],n)},style:{flex:1,padding:`6px 8px`,border:`1px solid var(--sb-border)`,borderRadius:`4px`,fontSize:`12px`}}),(0,H.jsx)(`input`,{type:`text`,value:e[n],onChange:e=>t(n,e.target.value),style:{flex:2,padding:`6px 8px`,border:`1px solid var(--sb-border)`,borderRadius:`4px`,fontSize:`12px`}}),(0,H.jsx)(`button`,{type:`button`,onClick:()=>t(n,``),style:{background:`none`,border:`none`,color:`#ff4d4f`,cursor:`pointer`,padding:`4px`},title:`Remove property`,children:`✕`})]},n))}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`,background:`#fdfdfd`,padding:`12px`,borderRadius:`6px`,border:`1px dashed var(--sb-border)`},children:[(0,H.jsx)(`input`,{type:`text`,placeholder:`Property (e.g. filter)`,value:n,onChange:e=>r(e.target.value),style:{flex:1,padding:`6px 8px`,border:`1px solid var(--sb-border)`,borderRadius:`4px`,fontSize:`12px`}}),(0,H.jsx)(`input`,{type:`text`,placeholder:`Value`,value:i,onChange:e=>a(e.target.value),onKeyDown:e=>e.key===`Enter`&&o(),style:{flex:1,padding:`6px 8px`,border:`1px solid var(--sb-border)`,borderRadius:`4px`,fontSize:`12px`}}),(0,H.jsx)(`button`,{type:`button`,onClick:o,style:{padding:`6px 12px`,background:`var(--primary)`,color:`white`,border:`none`,borderRadius:`4px`,cursor:`pointer`,fontSize:`12px`,fontWeight:`500`},children:`Add`})]})]})}function Rc({mode:e,initialLayout:t,initialSchema:n,availableComponents:r,onUpdate:i,onSavePage:a}){let[o,s]=(0,_.useState)(()=>{let e=t||[],n=e=>(e||[]).map(e=>{if(!e)return null;let t={...e};if(e.component_id&&(!e.children||e.children.length===0)){let n=(r||[]).find(t=>t.id===e.component_id);if(n)try{let e=typeof n.layout_tree==`string`?JSON.parse(n.layout_tree):n.layout_tree,r=e=>{if(!e)return null;let t={...e,id:Math.random().toString(36).substr(2,9)};return t.children&&=t.children.map(r),t};t.children=(e||[]).map(r).filter(Boolean),t.isComponentRoot=!0}catch(e){console.error(`Failed to hydrate component on load`,e)}}return t.children&&=n(t.children),t}).filter(Boolean);return lc(n(e))}),[c,l]=(0,_.useState)(()=>(r||[]).map(e=>({...e,layout_tree:e.layout_tree?typeof e.layout_tree==`string`?JSON.parse(e.layout_tree):lc(e.layout_tree):[]}))),[u,d]=(0,_.useState)([]),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(!1),[ee,T]=(0,_.useState)(!1),[E,D]=(0,_.useState)(null);(0,_.useEffect)(()=>{fetch(`/api/ui-builder/styles`).then(e=>e.json()).then(e=>{d(e)}).catch(e=>console.error(`Failed to fetch styles:`,e))},[]);let te=e=>{h(u.find(t=>t.id===e)||{id:e,label:e,data:null}),b(!1)},O=(0,_.useRef)(null),ne=e=>{p(e),h(null),O.current=e},k=e=>{D(e),b(!0),p(e),O.current=e},A=e=>{p(e),h(null),v(e),O.current=e},j=Ce(Se(wt,{activationConstraint:{distance:5}}),Se(yt));(0,_.useEffect)(()=>{if(e===`architect`){let e={},t=oc(o),n=t=>{t.forEach(t=>{let r=ac.includes(t.tag);if(t.isField===void 0?!r:t.isField){let n=t.fieldLabel?t.fieldLabel.toLowerCase().replace(/\s+/g,`_`).replace(/[^\w]/g,``):`field_${t.id}`,r=t.fieldLabel||`${t.tag.toUpperCase()}: ${String(typeof t.content==`string`?t.content:t.tag===`img`?`Image`:``).substring(0,20)}`;e[n]={type:t.tag===`img`?`image`:`textfield`,title:r,default:{mode:t.fieldMode||`static`,value:t.content||``}},t.content=`{{ ${n} }}`}else typeof t.content==`string`&&t.content.includes(`{{`)&&(t.content=``);t.children&&n(t.children)})};n(t),i&&i(t,e)}else i&&i(o)},[o,e,i]),(0,_.useEffect)(()=>{let e=`uib-dynamic-layout-styles`,t=document.getElementById(e);t||(t=document.createElement(`style`),t.id=e,document.head.appendChild(t));let n=e=>{let t=``;return e.forEach(e=>{if(e.props){let n=[];e.props.flexDirection&&n.push(`flex-direction: ${e.props.flexDirection} !important;`),e.props.justifyContent&&n.push(`justify-content: ${e.props.justifyContent} !important;`),e.props.alignItems&&n.push(`align-items: ${e.props.alignItems} !important;`),e.props.alignSelf&&n.push(`align-self: ${e.props.alignSelf} !important;`),e.props.flexGrow!==void 0&&e.props.flexGrow!==0&&n.push(`flex-grow: ${e.props.flexGrow} !important;`),e.props.flexShrink!==void 0&&e.props.flexShrink!==1&&n.push(`flex-shrink: ${e.props.flexShrink} !important;`),e.props.width&&n.push(`width: ${e.props.width} !important;`),e.props.height&&n.push(`height: ${e.props.height} !important;`),n.length>0&&(t+=`.uib-${e.id} { ${n.join(` `)} }\n`)}e.children&&(t+=n(e.children))}),t};t.textContent=n(o)},[o]);let re=e=>{let{active:t}=e,n=t.data.current?.type===`sidebar-element`;if(console.log(`[DnD] dragStart:`,t.id,`sidebar:`,n),w(!0),n){let e=t.data.current.element;S({id:t.id,tag:e.type,label:e.label,props:{...e.defaultProps||{}},children:[]})}else S(sc(o,t.id))},M=e=>{},N=e=>{let t=e=>(e||[]).map(e=>e?{...e,tag:e.tag||e.type,id:Math.random().toString(36).substr(2,9),children:t(e.children)}:null).filter(Boolean);return{id:Math.random().toString(36).substr(2,9),tag:e.type,label:e.label,props:{...e.defaultProps||{class:``}},children:e.defaultChildren?t(e.defaultChildren):[],content:e.defaultContent||``,fieldMode:`static`,isField:e.isField||!1}},ie=e=>{let{active:t,over:n}=e;if(console.log(`[DnD] dragEnd:`,t.id,`→`,n?.id||`NONE`),S(null),w(!1),!n)return;let r=t.data.current?.type===`sidebar-element`,i=String(n.id);s(e=>{let a=oc(e),o;if(r){let e=t.data.current.element;o=N(e)}else{if(t.id===n.id)return e;let r=cc(a,t.id);if(!r)return e;[o]=r.parent.splice(r.index,1)}if(i===`canvas-root`)return a.push(o),a;if(i.startsWith(`gap::`)){let e=i.split(`::`),t=e[1],n=parseInt(e[2],10);if(t===`canvas-root`)a.splice(n,0,o);else{let e=sc(a,t);e?(e.children=e.children||[],e.children.splice(n,0,o)):a.push(o)}return a}if(i.startsWith(`inside::`)){let e=sc(a,i.replace(`inside::`,``));return e?(e.children=e.children||[],e.children.push(o)):a.push(o),a}let s=cc(a,i);if(s){let e=s.parent[s.index];ac.includes(e.tag)?(e.children=e.children||[],e.children.push(o)):s.parent.splice(s.index,0,o)}else a.push(o);return a})},ae=e=>{let t=N(e);s(n=>{let r=oc(n),i=E||O.current;if(i){let a=sc(r,i);if(a&&dc(a,e))return a.children=a.children||[],a.children.push(t),D(null),r;if(a)return alert(`Cannot add ${e.label} inside ${a.label||a.tag}`),n}return D(null),[...r,t]})},oe=e=>{let t=c.find(t=>t.id===e);if(!t)return;let n=[];try{n=typeof t.layout_tree==`string`?JSON.parse(t.layout_tree):t.layout_tree}catch(e){console.error(`Failed to parse component layout`,e)}let r=e=>(e||[]).map(e=>e?{...e,tag:e.tag||e.type,id:Math.random().toString(36).substr(2,9),children:r(e.children)}:null).filter(Boolean),i=r(n).map(t=>({...t,component_id:e}));i.length!==0&&s(e=>{let t=oc(e),n=E||O.current;if(n){let e=sc(t,n);if(ac.includes(e?.tag)||e?.children&&e?.children.length>0)return e.children=e.children||[],e.children.push(...i),D(null),t}return D(null),[...t,...i]})},se=e=>{s(t=>{let n=oc(t),r=sc(n,e);if(r){let e=null;for(let t of ic)if(e=t.elements.find(e=>e.type===r.tag&&e.label===r.label),e)break;e&&(r.props={...e.defaultProps||{class:``}},r.isField||(r.content=e.defaultContent||``))}return n})},ce=(e,t,n)=>{s(r=>{let i=oc(r),a=sc(i,e);return a&&(a.props=a.props||{},n===``||n==null?delete a.props[t]:a.props[t]=n),i})},P=(e,t)=>{s(n=>{let r=oc(n),i=sc(r,e);return i&&Object.assign(i,t),r})},F=(e,t,n,r=`static`)=>{s(i=>{let a=oc(i),o=sc(a,e);return o&&(o.values={...o.values||{},[t]:{mode:r,value:n}}),a})},le=e=>{s(t=>uc(t,e)),p(null),O.current=null},ue=e=>{s(t=>{let n=oc(t),r=cc(n,e);if(!r)return t;let i=r.parent[r.index],a=e=>{let t={...e,id:Math.random().toString(36).substr(2,9)};return t.children&&=t.children.map(a),t},o=a(i);return r.parent.splice(r.index+1,0,o),n})},de=(e,t)=>{let n=null;for(let e of ic)if(n=e.elements.find(e=>e.type===t),n)break;if(!n)return;let r={id:Math.random().toString(36).substr(2,9),tag:n.type,label:n.label,props:{...n.defaultProps||{}},content:n.defaultContent||``,children:n.defaultChildren?JSON.parse(JSON.stringify(n.defaultChildren)).map(e=>({...e,id:Math.random().toString(36).substr(2,9)})):[],isField:n.isField};s(t=>{let n=oc(t),i=sc(n,e);return i&&(i.children=i.children||[],i.children.push(r)),n})},fe=e=>{let t={},n=e=>{if(e.fieldLabel){let n=e.fieldLabel.toLowerCase().replace(/\s+/g,`_`).replace(/[^\w]/g,``);t[n]={title:e.fieldLabel,type:e.tag===`img`?`image`:`textfield`,default:{mode:e.fieldMode||`static`,value:e.content||``}}}e.children&&e.children.forEach(n)};return n(e),t},pe=async(e=null)=>{let t=null;if(e?t=sc(o,e):f?t=sc(o,f):o.length===1&&(t=o[0]),!t){alert(`Please select a section or component to save.`);return}let n=prompt(`Enter component name:`,t.label||`New Component`);if(!n)return;let r=n.toLowerCase().replace(/\s+/g,`_`).replace(/[^\w]/g,``),i=fe(t),a={label:n,id:r,layout_tree:JSON.stringify([t]),form_schema:JSON.stringify(i)};try{let e=await(await fetch(`/api/ui-builder/component/save`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)})).json();e.success?(alert(`Component saved successfully!`),window.location.reload()):alert(`Failed to save component: `+(e.message||`Unknown error`))}catch(e){console.error(e),alert(`Network error while saving component.`)}},me=async e=>{try{let t={...e};(await(await fetch(`/api/ui-builder/style/save`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})).json()).success&&(d(t=>{let n=[...t];e.old_id&&e.old_id!==e.id&&(n=n.filter(t=>t.id!==e.old_id));let r=n.findIndex(t=>t.id===e.id);return r>-1?n[r]={...n[r],...e}:n.push({...e}),n}),e.old_id&&e.old_id!==e.id&&(s(t=>{let n=oc(t),r=`uib-${e.old_id}`,i=`uib-${e.id}`,a=e=>{e.forEach(e=>{if(e.props&&e.props.class){let t=e.props.class.split(` `),n=t.indexOf(r);n!==-1&&(t[n]=i,e.props.class=t.join(` `))}e.children&&a(e.children)})};return a(n),n}),m&&m.id===e.old_id&&h({...e})),alert(`Style saved!`))}catch{alert(`Failed to save style`)}},he=()=>{if(e===`composer`&&a)a();else{let e=document.querySelector(`input[id^="edit-submit"]`);e?e.click():alert(`Layout synced. Click "Save" on the Drupal page to persist changes.`)}},ge=f?sc(o,f):null,_e=g?sc(o,g):null,ve=_e?c.find(e=>e.id===_e.component_id):null,ye=e=>{let t=Ie(e).filter(t=>t.id!==e.active.id),n=t.filter(e=>String(e.id).startsWith(`gap::`)),r=t.filter(e=>String(e.id).startsWith(`inside::`)),i=t.find(e=>e.id===`canvas-root`),a=t.filter(e=>!String(e.id).startsWith(`gap::`)&&!String(e.id).startsWith(`inside::`)&&e.id!==`canvas-root`);return n.length>0?Me({...e,droppableContainers:e.droppableContainers.filter(e=>n.some(t=>t.id===e.id))}):r.length>0?Me({...e,droppableContainers:e.droppableContainers.filter(e=>r.some(t=>t.id===e.id))}):a.length>0?Me({...e,droppableContainers:e.droppableContainers.filter(e=>a.some(t=>t.id===e.id))}):i?[i]:Me(e)},I={sideEffects:Fn({styles:{active:{opacity:`0.5`}}})};return(0,H.jsxs)(`div`,{className:`ui-builder-container mode-${e}`,children:[(0,H.jsx)(Mc,{mode:e,onSavePage:he,onSaveAsComponent:pe,onToggleStyles:()=>{},sidebarOpen:y,onToggleSidebar:()=>b(e=>!e)}),(0,H.jsxs)(`div`,{className:`builder-body`,children:[y&&(0,H.jsx)(Dc,{mode:e,availableComponents:c,customStyles:u,selectedNodeId:f,selectedNode:ge,addElement:e=>{ae(e)},addComponentInstance:e=>{oe(e)},onSelectStyle:te,onDeselect:()=>{p(null),h(null),v(null),O.current=null},onClose:()=>b(!1)}),(0,H.jsx)(`main`,{className:`ui-builder-canvas`,children:(0,H.jsxs)(`div`,{className:`canvas-content`,onClick:()=>{p(null),h(null),v(null),O.current=null},children:[(0,H.jsxs)(`div`,{className:`ss-canvas-header`,onClick:e=>e.stopPropagation(),children:[(0,H.jsx)(`span`,{className:`ss-canvas-header-title`,children:`▼ Layout canvas`}),(0,H.jsxs)(`span`,{className:`ss-canvas-header-right`,children:[(0,H.jsx)(`span`,{className:`ss-canvas-link`,children:`Preview`}),(0,H.jsx)(`span`,{className:`ss-canvas-icon`,title:`Toggle visibility`,children:`👁`}),(0,H.jsx)(`span`,{className:`ss-canvas-icon`,title:`Settings`,children:`⚙`}),(0,H.jsx)(`span`,{className:`ss-canvas-icon`,title:`Help`,children:`❓`})]})]}),(0,H.jsxs)(`div`,{className:`ss-canvas-toolbar`,onClick:e=>e.stopPropagation(),children:[(0,H.jsx)(`button`,{type:`button`,className:`ss-canvas-add-btn`,onClick:()=>b(!0),title:`Add element`,children:`+`}),(0,H.jsx)(`span`,{style:{flex:1}}),(0,H.jsx)(`button`,{type:`button`,className:`ss-canvas-options-btn`,onClick:()=>{let e=!ee;T(e),window.dispatchEvent(new CustomEvent(e?`ss-collapse-all`:`ss-expand-all`))},children:ee?`Expand All`:`Collapse All`})]}),o.length===0?(0,H.jsx)(`div`,{className:`ss-canvas-empty`,children:(0,H.jsxs)(`p`,{children:[`Click `,(0,H.jsx)(`strong`,{children:`+`}),` or open the Elements panel to start building.`]})}):(0,H.jsx)(mc.Provider,{value:{isDraggingGlobal:C},children:(0,H.jsxs)(xn,{sensors:j,collisionDetection:ye,onDragStart:re,onDragOver:M,onDragEnd:ie,measuring:{droppable:{strategy:Lt.Always}},children:[(0,H.jsx)(xc,{nodes:o,selectedId:f,onSelect:ne,onOpenProperties:A,onDuplicate:ue,onDelete:le,onQuickAdd:de,onStartTargetedAdd:k,onSaveAsComponent:pe,pendingParentId:E,availableComponents:c}),(0,H.jsx)(Vn,{dropAnimation:I,children:x?(0,H.jsx)(yc,{node:x,mode:e,selectedId:null,onSelect:()=>{},onQuickAdd:()=>{},availableComponents:c,isOverlay:!0}):null})]})})]})})]}),(0,H.jsx)(jc,{mode:e,selectedNode:_e,selectedNodeId:g,selectedComponent:ve,updateNodeProperty:ce,resetToDefaultProps:se,removeNode:e=>{le(e),v(null)},updateNodeField:P,updateInstanceValue:F,onDeselect:()=>{v(null),p(null),h(null),O.current=null},customStyles:u}),m&&(0,H.jsx)(Pc,{style:m,onSave:e=>{me(e),h(null)},onBack:()=>h(null)}),(0,H.jsx)(rc,{endpoint:`http://localhost:4747`})]})}document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`ui-builder-react-app`);if(e){let t=document.getElementById(`ui-builder-layout-tree-input`),n=document.getElementById(`ui-builder-form-schema-input`),r=[],i={};try{t&&t.value&&(r=JSON.parse(t.value)),n&&n.value&&(i=JSON.parse(n.value))}catch(e){console.error(`Failed to parse initial UI Builder JSON`,e)}(0,v.createRoot)(e).render((0,H.jsx)(_.StrictMode,{children:(0,H.jsx)(Rc,{mode:`architect`,initialLayout:r,initialSchema:i,onUpdate:(e,r)=>{t&&(t.value=JSON.stringify(e,null,2)),n&&(n.value=JSON.stringify(r,null,2))}})}))}let t=document.getElementById(`ui-builder-composer-mount`);if(t){let e=t.getAttribute(`data-field-id`),n=document.getElementById(e),r=[];try{n&&n.value&&(r=JSON.parse(n.value))}catch(e){console.error(`Failed to parse composer JSON`,e)}let i=e=>{n&&(n.value=JSON.stringify(e,null,2))},a=()=>{if(n){let e=n.closest(`form`);if(e){let t=e.querySelector(`#edit-submit, [data-drupal-selector="edit-submit"], input[type="submit"][value="Save"]`);t?t.click():e.submit()}}},o=window.drupalSettings?.ui_builder?.composer?.available_components||[];(0,v.createRoot)(t).render((0,H.jsx)(_.StrictMode,{children:(0,H.jsx)(Rc,{mode:`composer`,initialLayout:r,availableComponents:o,onUpdate:i,onSavePage:a})}))}});