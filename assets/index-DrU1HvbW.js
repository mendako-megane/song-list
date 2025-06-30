(function(){const X=document.createElement("link").relList;if(X&&X.supports&&X.supports("modulepreload"))return;for(const I of document.querySelectorAll('link[rel="modulepreload"]'))m(I);new MutationObserver(I=>{for(const z of I)if(z.type==="childList")for(const Z of z.addedNodes)Z.tagName==="LINK"&&Z.rel==="modulepreload"&&m(Z)}).observe(document,{childList:!0,subtree:!0});function M(I){const z={};return I.integrity&&(z.integrity=I.integrity),I.referrerPolicy&&(z.referrerPolicy=I.referrerPolicy),I.crossOrigin==="use-credentials"?z.credentials="include":I.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function m(I){if(I.ep)return;I.ep=!0;const z=M(I);fetch(I.href,z)}})();var Zu={exports:{}},gi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy;function Bh(){if(Zy)return gi;Zy=1;var T=Symbol.for("react.transitional.element"),X=Symbol.for("react.fragment");function M(m,I,z){var Z=null;if(z!==void 0&&(Z=""+z),I.key!==void 0&&(Z=""+I.key),"key"in I){z={};for(var Rn in I)Rn!=="key"&&(z[Rn]=I[Rn])}else z=I;return I=z.ref,{$$typeof:T,type:m,key:Z,ref:I!==void 0?I:null,props:z}}return gi.Fragment=X,gi.jsx=M,gi.jsxs=M,gi}var Qy;function Mh(){return Qy||(Qy=1,Zu.exports=Bh()),Zu.exports}var p=Mh(),Qu={exports:{}},x={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy;function Lh(){if(Fy)return x;Fy=1;var T=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),Rn=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),un=Symbol.iterator;function an(c){return c===null||typeof c!="object"?null:(c=un&&c[un]||c["@@iterator"],typeof c=="function"?c:null)}var wn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nn=Object.assign,Pn={};function En(c,v,H){this.props=c,this.context=v,this.refs=Pn,this.updater=H||wn}En.prototype.isReactComponent={},En.prototype.setState=function(c,v){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,v,"setState")},En.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Se(){}Se.prototype=En.prototype;function he(c,v,H){this.props=c,this.context=v,this.refs=Pn,this.updater=H||wn}var Dn=he.prototype=new Se;Dn.constructor=he,Nn(Dn,En.prototype),Dn.isPureReactComponent=!0;var W=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},sn=Object.prototype.hasOwnProperty;function fn(c,v,H,R,K,Q){return H=Q.ref,{$$typeof:T,type:c,key:v,ref:H!==void 0?H:null,props:Q}}function Wn(c,v){return fn(c.type,v,void 0,void 0,void 0,c.props)}function Oe(c){return typeof c=="object"&&c!==null&&c.$$typeof===T}function Ya(c){var v={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(H){return v[H]})}var Re=/\/+/g;function Gn(c,v){return typeof c=="object"&&c!==null&&c.key!=null?Ya(""+c.key):v.toString(36)}function Aa(){}function ha(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Aa,Aa):(c.status="pending",c.then(function(v){c.status==="pending"&&(c.status="fulfilled",c.value=v)},function(v){c.status==="pending"&&(c.status="rejected",c.reason=v)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function kn(c,v,H,R,K){var Q=typeof c;(Q==="undefined"||Q==="boolean")&&(c=null);var J=!1;if(c===null)J=!0;else switch(Q){case"bigint":case"string":case"number":J=!0;break;case"object":switch(c.$$typeof){case T:case X:J=!0;break;case N:return J=c._init,kn(J(c._payload),v,H,R,K)}}if(J)return K=K(c),J=R===""?"."+Gn(c,0):R,W(K)?(H="",J!=null&&(H=J.replace(Re,"$&/")+"/"),kn(K,v,H,"",function(Je){return Je})):K!=null&&(Oe(K)&&(K=Wn(K,H+(K.key==null||c&&c.key===K.key?"":(""+K.key).replace(Re,"$&/")+"/")+J)),v.push(K)),1;J=0;var Xn=R===""?".":R+":";if(W(c))for(var An=0;An<c.length;An++)R=c[An],Q=Xn+Gn(R,An),J+=kn(R,v,H,Q,K);else if(An=an(c),typeof An=="function")for(c=An.call(c),An=0;!(R=c.next()).done;)R=R.value,Q=Xn+Gn(R,An++),J+=kn(R,v,H,Q,K);else if(Q==="object"){if(typeof c.then=="function")return kn(ha(c),v,H,R,K);throw v=String(c),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.")}return J}function S(c,v,H){if(c==null)return c;var R=[],K=0;return kn(c,R,"","",function(Q){return v.call(H,Q,K++)}),R}function D(c){if(c._status===-1){var v=c._result;v=v(),v.then(function(H){(c._status===0||c._status===-1)&&(c._status=1,c._result=H)},function(H){(c._status===0||c._status===-1)&&(c._status=2,c._result=H)}),c._status===-1&&(c._status=0,c._result=v)}if(c._status===1)return c._result.default;throw c._result}var k=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(v))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)};function rn(){}return x.Children={map:S,forEach:function(c,v,H){S(c,function(){v.apply(this,arguments)},H)},count:function(c){var v=0;return S(c,function(){v++}),v},toArray:function(c){return S(c,function(v){return v})||[]},only:function(c){if(!Oe(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},x.Component=En,x.Fragment=M,x.Profiler=I,x.PureComponent=he,x.StrictMode=m,x.Suspense=Y,x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,x.__COMPILER_RUNTIME={__proto__:null,c:function(c){return L.H.useMemoCache(c)}},x.cache=function(c){return function(){return c.apply(null,arguments)}},x.cloneElement=function(c,v,H){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var R=Nn({},c.props),K=c.key,Q=void 0;if(v!=null)for(J in v.ref!==void 0&&(Q=void 0),v.key!==void 0&&(K=""+v.key),v)!sn.call(v,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&v.ref===void 0||(R[J]=v[J]);var J=arguments.length-2;if(J===1)R.children=H;else if(1<J){for(var Xn=Array(J),An=0;An<J;An++)Xn[An]=arguments[An+2];R.children=Xn}return fn(c.type,K,void 0,void 0,Q,R)},x.createContext=function(c){return c={$$typeof:Z,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:z,_context:c},c},x.createElement=function(c,v,H){var R,K={},Q=null;if(v!=null)for(R in v.key!==void 0&&(Q=""+v.key),v)sn.call(v,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(K[R]=v[R]);var J=arguments.length-2;if(J===1)K.children=H;else if(1<J){for(var Xn=Array(J),An=0;An<J;An++)Xn[An]=arguments[An+2];K.children=Xn}if(c&&c.defaultProps)for(R in J=c.defaultProps,J)K[R]===void 0&&(K[R]=J[R]);return fn(c,Q,void 0,void 0,null,K)},x.createRef=function(){return{current:null}},x.forwardRef=function(c){return{$$typeof:Rn,render:c}},x.isValidElement=Oe,x.lazy=function(c){return{$$typeof:N,_payload:{_status:-1,_result:c},_init:D}},x.memo=function(c,v){return{$$typeof:b,type:c,compare:v===void 0?null:v}},x.startTransition=function(c){var v=L.T,H={};L.T=H;try{var R=c(),K=L.S;K!==null&&K(H,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(rn,k)}catch(Q){k(Q)}finally{L.T=v}},x.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},x.use=function(c){return L.H.use(c)},x.useActionState=function(c,v,H){return L.H.useActionState(c,v,H)},x.useCallback=function(c,v){return L.H.useCallback(c,v)},x.useContext=function(c){return L.H.useContext(c)},x.useDebugValue=function(){},x.useDeferredValue=function(c,v){return L.H.useDeferredValue(c,v)},x.useEffect=function(c,v,H){var R=L.H;if(typeof H=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(c,v)},x.useId=function(){return L.H.useId()},x.useImperativeHandle=function(c,v,H){return L.H.useImperativeHandle(c,v,H)},x.useInsertionEffect=function(c,v){return L.H.useInsertionEffect(c,v)},x.useLayoutEffect=function(c,v){return L.H.useLayoutEffect(c,v)},x.useMemo=function(c,v){return L.H.useMemo(c,v)},x.useOptimistic=function(c,v){return L.H.useOptimistic(c,v)},x.useReducer=function(c,v,H){return L.H.useReducer(c,v,H)},x.useRef=function(c){return L.H.useRef(c)},x.useState=function(c){return L.H.useState(c)},x.useSyncExternalStore=function(c,v,H){return L.H.useSyncExternalStore(c,v,H)},x.useTransition=function(){return L.H.useTransition()},x.version="19.1.0",x}var $y;function tr(){return $y||($y=1,Qu.exports=Lh()),Qu.exports}var Na=tr(),Fu={exports:{}},Si={},$u={exports:{}},nr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function wh(){return nf||(nf=1,function(T){function X(S,D){var k=S.length;S.push(D);n:for(;0<k;){var rn=k-1>>>1,c=S[rn];if(0<I(c,D))S[rn]=D,S[k]=c,k=rn;else break n}}function M(S){return S.length===0?null:S[0]}function m(S){if(S.length===0)return null;var D=S[0],k=S.pop();if(k!==D){S[0]=k;n:for(var rn=0,c=S.length,v=c>>>1;rn<v;){var H=2*(rn+1)-1,R=S[H],K=H+1,Q=S[K];if(0>I(R,k))K<c&&0>I(Q,R)?(S[rn]=Q,S[K]=k,rn=K):(S[rn]=R,S[H]=k,rn=H);else if(K<c&&0>I(Q,k))S[rn]=Q,S[K]=k,rn=K;else break n}}return D}function I(S,D){var k=S.sortIndex-D.sortIndex;return k!==0?k:S.id-D.id}if(T.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;T.unstable_now=function(){return z.now()}}else{var Z=Date,Rn=Z.now();T.unstable_now=function(){return Z.now()-Rn}}var Y=[],b=[],N=1,un=null,an=3,wn=!1,Nn=!1,Pn=!1,En=!1,Se=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,Dn=typeof setImmediate<"u"?setImmediate:null;function W(S){for(var D=M(b);D!==null;){if(D.callback===null)m(b);else if(D.startTime<=S)m(b),D.sortIndex=D.expirationTime,X(Y,D);else break;D=M(b)}}function L(S){if(Pn=!1,W(S),!Nn)if(M(Y)!==null)Nn=!0,sn||(sn=!0,Gn());else{var D=M(b);D!==null&&kn(L,D.startTime-S)}}var sn=!1,fn=-1,Wn=5,Oe=-1;function Ya(){return En?!0:!(T.unstable_now()-Oe<Wn)}function Re(){if(En=!1,sn){var S=T.unstable_now();Oe=S;var D=!0;try{n:{Nn=!1,Pn&&(Pn=!1,he(fn),fn=-1),wn=!0;var k=an;try{e:{for(W(S),un=M(Y);un!==null&&!(un.expirationTime>S&&Ya());){var rn=un.callback;if(typeof rn=="function"){un.callback=null,an=un.priorityLevel;var c=rn(un.expirationTime<=S);if(S=T.unstable_now(),typeof c=="function"){un.callback=c,W(S),D=!0;break e}un===M(Y)&&m(Y),W(S)}else m(Y);un=M(Y)}if(un!==null)D=!0;else{var v=M(b);v!==null&&kn(L,v.startTime-S),D=!1}}break n}finally{un=null,an=k,wn=!1}D=void 0}}finally{D?Gn():sn=!1}}}var Gn;if(typeof Dn=="function")Gn=function(){Dn(Re)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,ha=Aa.port2;Aa.port1.onmessage=Re,Gn=function(){ha.postMessage(null)}}else Gn=function(){Se(Re,0)};function kn(S,D){fn=Se(function(){S(T.unstable_now())},D)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(S){S.callback=null},T.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Wn=0<S?Math.floor(1e3/S):5},T.unstable_getCurrentPriorityLevel=function(){return an},T.unstable_next=function(S){switch(an){case 1:case 2:case 3:var D=3;break;default:D=an}var k=an;an=D;try{return S()}finally{an=k}},T.unstable_requestPaint=function(){En=!0},T.unstable_runWithPriority=function(S,D){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var k=an;an=S;try{return D()}finally{an=k}},T.unstable_scheduleCallback=function(S,D,k){var rn=T.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?rn+k:rn):k=rn,S){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=k+c,S={id:N++,callback:D,priorityLevel:S,startTime:k,expirationTime:c,sortIndex:-1},k>rn?(S.sortIndex=k,X(b,S),M(Y)===null&&S===M(b)&&(Pn?(he(fn),fn=-1):Pn=!0,kn(L,k-rn))):(S.sortIndex=c,X(Y,S),Nn||wn||(Nn=!0,sn||(sn=!0,Gn()))),S},T.unstable_shouldYield=Ya,T.unstable_wrapCallback=function(S){var D=an;return function(){var k=an;an=D;try{return S.apply(this,arguments)}finally{an=k}}}}(nr)),nr}var ef;function Nh(){return ef||(ef=1,$u.exports=wh()),$u.exports}var er={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function Yh(){if(af)return In;af=1;var T=tr();function X(Y){var b="https://react.dev/errors/"+Y;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)b+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+Y+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(){}var m={d:{f:M,r:function(){throw Error(X(522))},D:M,C:M,L:M,m:M,X:M,S:M,M},p:0,findDOMNode:null},I=Symbol.for("react.portal");function z(Y,b,N){var un=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:un==null?null:""+un,children:Y,containerInfo:b,implementation:N}}var Z=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Rn(Y,b){if(Y==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,In.createPortal=function(Y,b){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(X(299));return z(Y,b,null,N)},In.flushSync=function(Y){var b=Z.T,N=m.p;try{if(Z.T=null,m.p=2,Y)return Y()}finally{Z.T=b,m.p=N,m.d.f()}},In.preconnect=function(Y,b){typeof Y=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,m.d.C(Y,b))},In.prefetchDNS=function(Y){typeof Y=="string"&&m.d.D(Y)},In.preinit=function(Y,b){if(typeof Y=="string"&&b&&typeof b.as=="string"){var N=b.as,un=Rn(N,b.crossOrigin),an=typeof b.integrity=="string"?b.integrity:void 0,wn=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;N==="style"?m.d.S(Y,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:un,integrity:an,fetchPriority:wn}):N==="script"&&m.d.X(Y,{crossOrigin:un,integrity:an,fetchPriority:wn,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},In.preinitModule=function(Y,b){if(typeof Y=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var N=Rn(b.as,b.crossOrigin);m.d.M(Y,{crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&m.d.M(Y)},In.preload=function(Y,b){if(typeof Y=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var N=b.as,un=Rn(N,b.crossOrigin);m.d.L(Y,N,{crossOrigin:un,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},In.preloadModule=function(Y,b){if(typeof Y=="string")if(b){var N=Rn(b.as,b.crossOrigin);m.d.m(Y,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:N,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else m.d.m(Y)},In.requestFormReset=function(Y){m.d.r(Y)},In.unstable_batchedUpdates=function(Y,b){return Y(b)},In.useFormState=function(Y,b,N){return Z.H.useFormState(Y,b,N)},In.useFormStatus=function(){return Z.H.useHostTransitionStatus()},In.version="19.1.0",In}var tf;function Kh(){if(tf)return er.exports;tf=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(X){console.error(X)}}return T(),er.exports=Yh(),er.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function Ch(){if(lf)return Si;lf=1;var T=Nh(),X=tr(),M=Kh();function m(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function I(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function z(n){var e=n,a=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(a=e.return),n=e.return;while(n)}return e.tag===3?a:null}function Z(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Rn(n){if(z(n)!==n)throw Error(m(188))}function Y(n){var e=n.alternate;if(!e){if(e=z(n),e===null)throw Error(m(188));return e!==n?null:n}for(var a=n,t=e;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(t=i.return,t!==null){a=t;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return Rn(i),n;if(l===t)return Rn(i),e;l=l.sibling}throw Error(m(188))}if(a.return!==t.return)a=i,t=l;else{for(var o=!1,u=i.child;u;){if(u===a){o=!0,a=i,t=l;break}if(u===t){o=!0,t=i,a=l;break}u=u.sibling}if(!o){for(u=l.child;u;){if(u===a){o=!0,a=l,t=i;break}if(u===t){o=!0,t=l,a=i;break}u=u.sibling}if(!o)throw Error(m(189))}}if(a.alternate!==t)throw Error(m(190))}if(a.tag!==3)throw Error(m(188));return a.stateNode.current===a?n:e}function b(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=b(n),e!==null)return e;n=n.sibling}return null}var N=Object.assign,un=Symbol.for("react.element"),an=Symbol.for("react.transitional.element"),wn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Pn=Symbol.for("react.strict_mode"),En=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),he=Symbol.for("react.consumer"),Dn=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),sn=Symbol.for("react.suspense_list"),fn=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),Oe=Symbol.for("react.activity"),Ya=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function Gn(n){return n===null||typeof n!="object"?null:(n=Re&&n[Re]||n["@@iterator"],typeof n=="function"?n:null)}var Aa=Symbol.for("react.client.reference");function ha(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Aa?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Nn:return"Fragment";case En:return"Profiler";case Pn:return"StrictMode";case L:return"Suspense";case sn:return"SuspenseList";case Oe:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case wn:return"Portal";case Dn:return(n.displayName||"Context")+".Provider";case he:return(n._context.displayName||"Context")+".Consumer";case W:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fn:return e=n.displayName||null,e!==null?e:ha(n.type)||"Memo";case Wn:e=n._payload,n=n._init;try{return ha(n(e))}catch{}}return null}var kn=Array.isArray,S=X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},rn=[],c=-1;function v(n){return{current:n}}function H(n){0>c||(n.current=rn[c],rn[c]=null,c--)}function R(n,e){c++,rn[c]=n.current,n.current=e}var K=v(null),Q=v(null),J=v(null),Xn=v(null);function An(n,e){switch(R(J,e),R(Q,n),R(K,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?vy(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=vy(e),n=py(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}H(K),R(K,n)}function Je(){H(K),H(Q),H(J)}function Yl(n){n.memoizedState!==null&&R(Xn,n);var e=K.current,a=py(e,n.type);e!==a&&(R(Q,n),R(K,a))}function Oi(n){Q.current===n&&(H(K),H(Q)),Xn.current===n&&(H(Xn),fi._currentValue=k)}var Kl=Object.prototype.hasOwnProperty,Cl=T.unstable_scheduleCallback,Gl=T.unstable_cancelCallback,uf=T.unstable_shouldYield,rf=T.unstable_requestPaint,Ee=T.unstable_now,cf=T.unstable_getCurrentPriorityLevel,ir=T.unstable_ImmediatePriority,lr=T.unstable_UserBlockingPriority,Ei=T.unstable_NormalPriority,sf=T.unstable_LowPriority,or=T.unstable_IdlePriority,yf=T.log,ff=T.unstable_setDisableYieldValue,Et=null,Zn=null;function xe(n){if(typeof yf=="function"&&ff(n),Zn&&typeof Zn.setStrictMode=="function")try{Zn.setStrictMode(Et,n)}catch{}}var Qn=Math.clz32?Math.clz32:df,Af=Math.log,hf=Math.LN2;function df(n){return n>>>=0,n===0?32:31-(Af(n)/hf|0)|0}var Wi=256,Ti=4194304;function da(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function bi(n,e,a){var t=n.pendingLanes;if(t===0)return 0;var i=0,l=n.suspendedLanes,o=n.pingedLanes;n=n.warmLanes;var u=t&134217727;return u!==0?(t=u&~l,t!==0?i=da(t):(o&=u,o!==0?i=da(o):a||(a=u&~n,a!==0&&(i=da(a))))):(u=t&~l,u!==0?i=da(u):o!==0?i=da(o):a||(a=t&~n,a!==0&&(i=da(a)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,a=e&-e,l>=a||l===32&&(a&4194048)!==0)?e:i}function Wt(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function mf(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ur(){var n=Wi;return Wi<<=1,(Wi&4194048)===0&&(Wi=256),n}function rr(){var n=Ti;return Ti<<=1,(Ti&62914560)===0&&(Ti=4194304),n}function kl(n){for(var e=[],a=0;31>a;a++)e.push(n);return e}function Tt(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function gf(n,e,a,t,i,l){var o=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var u=n.entanglements,r=n.expirationTimes,A=n.hiddenUpdates;for(a=o&~a;0<a;){var g=31-Qn(a),E=1<<g;u[g]=0,r[g]=-1;var h=A[g];if(h!==null)for(A[g]=null,g=0;g<h.length;g++){var d=h[g];d!==null&&(d.lane&=-536870913)}a&=~E}t!==0&&cr(n,t,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(o&~e))}function cr(n,e,a){n.pendingLanes|=e,n.suspendedLanes&=~e;var t=31-Qn(e);n.entangledLanes|=e,n.entanglements[t]=n.entanglements[t]|1073741824|a&4194090}function sr(n,e){var a=n.entangledLanes|=e;for(n=n.entanglements;a;){var t=31-Qn(a),i=1<<t;i&e|n[t]&e&&(n[t]|=e),a&=~i}}function zl(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ul(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function yr(){var n=D.p;return n!==0?n:(n=window.event,n===void 0?32:Vy(n.type))}function Sf(n,e){var a=D.p;try{return D.p=n,e()}finally{D.p=a}}var Ve=Math.random().toString(36).slice(2),zn="__reactFiber$"+Ve,xn="__reactProps$"+Ve,Ka="__reactContainer$"+Ve,Il="__reactEvents$"+Ve,Of="__reactListeners$"+Ve,Ef="__reactHandles$"+Ve,fr="__reactResources$"+Ve,bt="__reactMarker$"+Ve;function Jl(n){delete n[zn],delete n[xn],delete n[Il],delete n[Of],delete n[Ef]}function Ca(n){var e=n[zn];if(e)return e;for(var a=n.parentNode;a;){if(e=a[Ka]||a[zn]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(n=By(n);n!==null;){if(a=n[zn])return a;n=By(n)}return e}n=a,a=n.parentNode}return null}function Ga(n){if(n=n[zn]||n[Ka]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function vt(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(m(33))}function ka(n){var e=n[fr];return e||(e=n[fr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Hn(n){n[bt]=!0}var Ar=new Set,hr={};function ma(n,e){za(n,e),za(n+"Capture",e)}function za(n,e){for(hr[n]=e,n=0;n<e.length;n++)Ar.add(e[n])}var Wf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dr={},mr={};function Tf(n){return Kl.call(mr,n)?!0:Kl.call(dr,n)?!1:Wf.test(n)?mr[n]=!0:(dr[n]=!0,!1)}function vi(n,e,a){if(Tf(e))if(a===null)n.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var t=e.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+a)}}function pi(n,e,a){if(a===null)n.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+a)}}function De(n,e,a,t){if(t===null)n.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(e,a,""+t)}}var xl,gr;function Ua(n){if(xl===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);xl=e&&e[1]||"",gr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xl+n+gr}var Vl=!1;function _l(n,e){if(!n||Vl)return"";Vl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(e){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(d){var h=d}Reflect.construct(n,[],E)}else{try{E.call()}catch(d){h=d}n.call(E.prototype)}}else{try{throw Error()}catch(d){h=d}(E=n())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(d){if(d&&h&&typeof d.stack=="string")return[d.stack,h.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),o=l[0],u=l[1];if(o&&u){var r=o.split(`
`),A=u.split(`
`);for(i=t=0;t<r.length&&!r[t].includes("DetermineComponentFrameRoot");)t++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(t===r.length||i===A.length)for(t=r.length-1,i=A.length-1;1<=t&&0<=i&&r[t]!==A[i];)i--;for(;1<=t&&0<=i;t--,i--)if(r[t]!==A[i]){if(t!==1||i!==1)do if(t--,i--,0>i||r[t]!==A[i]){var g=`
`+r[t].replace(" at new "," at ");return n.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",n.displayName)),g}while(1<=t&&0<=i);break}}}finally{Vl=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Ua(a):""}function bf(n){switch(n.tag){case 26:case 27:case 5:return Ua(n.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return _l(n.type,!1);case 11:return _l(n.type.render,!1);case 1:return _l(n.type,!0);case 31:return Ua("Activity");default:return""}}function Sr(n){try{var e="";do e+=bf(n),n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function le(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Or(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vf(n){var e=Or(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),t=""+n[e];if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){t=""+o,l.call(this,o)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ri(n){n._valueTracker||(n._valueTracker=vf(n))}function Er(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var a=e.getValue(),t="";return n&&(t=Or(n)?n.checked?"true":"false":n.value),n=t,n!==a?(e.setValue(n),!0):!1}function Di(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var pf=/[\n"\\]/g;function oe(n){return n.replace(pf,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function jl(n,e,a,t,i,l,o,u){n.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.type=o:n.removeAttribute("type"),e!=null?o==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+le(e)):n.value!==""+le(e)&&(n.value=""+le(e)):o!=="submit"&&o!=="reset"||n.removeAttribute("value"),e!=null?ql(n,o,le(e)):a!=null?ql(n,o,le(a)):t!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.name=""+le(u):n.removeAttribute("name")}function Wr(n,e,a,t,i,l,o,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;a=a!=null?""+le(a):"",e=e!=null?""+le(e):a,u||e===n.value||(n.value=e),n.defaultValue=e}t=t??i,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=u?n.checked:!!t,n.defaultChecked=!!t,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(n.name=o)}function ql(n,e,a){e==="number"&&Di(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Ia(n,e,a,t){if(n=n.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<n.length;a++)i=e.hasOwnProperty("$"+n[a].value),n[a].selected!==i&&(n[a].selected=i),i&&t&&(n[a].defaultSelected=!0)}else{for(a=""+le(a),e=null,i=0;i<n.length;i++){if(n[i].value===a){n[i].selected=!0,t&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function Tr(n,e,a){if(e!=null&&(e=""+le(e),e!==n.value&&(n.value=e),a==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=a!=null?""+le(a):""}function br(n,e,a,t){if(e==null){if(t!=null){if(a!=null)throw Error(m(92));if(kn(t)){if(1<t.length)throw Error(m(93));t=t[0]}a=t}a==null&&(a=""),e=a}a=le(e),n.defaultValue=a,t=n.textContent,t===a&&t!==""&&t!==null&&(n.value=t)}function Ja(n,e){if(e){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=e;return}}n.textContent=e}var Rf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vr(n,e,a){var t=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?t?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":t?n.setProperty(e,a):typeof a!="number"||a===0||Rf.has(e)?e==="float"?n.cssFloat=a:n[e]=(""+a).trim():n[e]=a+"px"}function pr(n,e,a){if(e!=null&&typeof e!="object")throw Error(m(62));if(n=n.style,a!=null){for(var t in a)!a.hasOwnProperty(t)||e!=null&&e.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var i in e)t=e[i],e.hasOwnProperty(i)&&a[i]!==t&&vr(n,i,t)}else for(var l in e)e.hasOwnProperty(l)&&vr(n,l,e[l])}function Pl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Df=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hi(n){return Hf.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Xl=null;function Zl(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xa=null,Va=null;function Rr(n){var e=Ga(n);if(e&&(n=e.stateNode)){var a=n[xn]||null;n:switch(n=e.stateNode,e.type){case"input":if(jl(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+oe(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var t=a[e];if(t!==n&&t.form===n.form){var i=t[xn]||null;if(!i)throw Error(m(90));jl(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)t=a[e],t.form===n.form&&Er(t)}break n;case"textarea":Tr(n,a.value,a.defaultValue);break n;case"select":e=a.value,e!=null&&Ia(n,!!a.multiple,e,!1)}}}var Ql=!1;function Dr(n,e,a){if(Ql)return n(e,a);Ql=!0;try{var t=n(e);return t}finally{if(Ql=!1,(xa!==null||Va!==null)&&(Al(),xa&&(e=xa,n=Va,Va=xa=null,Rr(e),n)))for(e=0;e<n.length;e++)Rr(n[e])}}function pt(n,e){var a=n.stateNode;if(a===null)return null;var t=a[xn]||null;if(t===null)return null;a=t[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(m(231,e,typeof a));return a}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=!1;if(He)try{var Rt={};Object.defineProperty(Rt,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",Rt,Rt),window.removeEventListener("test",Rt,Rt)}catch{Fl=!1}var _e=null,$l=null,Bi=null;function Hr(){if(Bi)return Bi;var n,e=$l,a=e.length,t,i="value"in _e?_e.value:_e.textContent,l=i.length;for(n=0;n<a&&e[n]===i[n];n++);var o=a-n;for(t=1;t<=o&&e[a-t]===i[l-t];t++);return Bi=i.slice(n,1<t?1-t:void 0)}function Mi(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Li(){return!0}function Br(){return!1}function Vn(n){function e(a,t,i,l,o){this._reactName=a,this._targetInst=i,this.type=t,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(a=n[u],this[u]=a?a(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Li:Br,this.isPropagationStopped=Br,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wi=Vn(ga),Dt=N({},ga,{view:0,detail:0}),Bf=Vn(Dt),no,eo,Ht,Ni=N({},Dt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ht&&(Ht&&n.type==="mousemove"?(no=n.screenX-Ht.screenX,eo=n.screenY-Ht.screenY):eo=no=0,Ht=n),no)},movementY:function(n){return"movementY"in n?n.movementY:eo}}),Mr=Vn(Ni),Mf=N({},Ni,{dataTransfer:0}),Lf=Vn(Mf),wf=N({},Dt,{relatedTarget:0}),ao=Vn(wf),Nf=N({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Yf=Vn(Nf),Kf=N({},ga,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Cf=Vn(Kf),Gf=N({},ga,{data:0}),Lr=Vn(Gf),kf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function If(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Uf[n])?!!e[n]:!1}function to(){return If}var Jf=N({},Dt,{key:function(n){if(n.key){var e=kf[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Mi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zf[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(n){return n.type==="keypress"?Mi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xf=Vn(Jf),Vf=N({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wr=Vn(Vf),_f=N({},Dt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),jf=Vn(_f),qf=N({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pf=Vn(qf),Xf=N({},Ni,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=Vn(Xf),Qf=N({},ga,{newState:0,oldState:0}),Ff=Vn(Qf),$f=[9,13,27,32],io=He&&"CompositionEvent"in window,Bt=null;He&&"documentMode"in document&&(Bt=document.documentMode);var nA=He&&"TextEvent"in window&&!Bt,Nr=He&&(!io||Bt&&8<Bt&&11>=Bt),Yr=" ",Kr=!1;function Cr(n,e){switch(n){case"keyup":return $f.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gr(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _a=!1;function eA(n,e){switch(n){case"compositionend":return Gr(e);case"keypress":return e.which!==32?null:(Kr=!0,Yr);case"textInput":return n=e.data,n===Yr&&Kr?null:n;default:return null}}function aA(n,e){if(_a)return n==="compositionend"||!io&&Cr(n,e)?(n=Hr(),Bi=$l=_e=null,_a=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nr&&e.locale!=="ko"?null:e.data;default:return null}}var tA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kr(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!tA[n.type]:e==="textarea"}function zr(n,e,a,t){xa?Va?Va.push(t):Va=[t]:xa=t,e=Ol(e,"onChange"),0<e.length&&(a=new wi("onChange","change",null,a,t),n.push({event:a,listeners:e}))}var Mt=null,Lt=null;function iA(n){Oy(n,0)}function Yi(n){var e=vt(n);if(Er(e))return n}function Ur(n,e){if(n==="change")return e}var Ir=!1;if(He){var lo;if(He){var oo="oninput"in document;if(!oo){var Jr=document.createElement("div");Jr.setAttribute("oninput","return;"),oo=typeof Jr.oninput=="function"}lo=oo}else lo=!1;Ir=lo&&(!document.documentMode||9<document.documentMode)}function xr(){Mt&&(Mt.detachEvent("onpropertychange",Vr),Lt=Mt=null)}function Vr(n){if(n.propertyName==="value"&&Yi(Lt)){var e=[];zr(e,Lt,n,Zl(n)),Dr(iA,e)}}function lA(n,e,a){n==="focusin"?(xr(),Mt=e,Lt=a,Mt.attachEvent("onpropertychange",Vr)):n==="focusout"&&xr()}function oA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Yi(Lt)}function uA(n,e){if(n==="click")return Yi(e)}function rA(n,e){if(n==="input"||n==="change")return Yi(e)}function cA(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Fn=typeof Object.is=="function"?Object.is:cA;function wt(n,e){if(Fn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var a=Object.keys(n),t=Object.keys(e);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var i=a[t];if(!Kl.call(e,i)||!Fn(n[i],e[i]))return!1}return!0}function _r(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function jr(n,e){var a=_r(n);n=0;for(var t;a;){if(a.nodeType===3){if(t=n+a.textContent.length,n<=e&&t>=e)return{node:a,offset:e-n};n=t}n:{for(;a;){if(a.nextSibling){a=a.nextSibling;break n}a=a.parentNode}a=void 0}a=_r(a)}}function qr(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?qr(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Pr(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Di(n.document);e instanceof n.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)n=e.contentWindow;else break;e=Di(n.document)}return e}function uo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var sA=He&&"documentMode"in document&&11>=document.documentMode,ja=null,ro=null,Nt=null,co=!1;function Xr(n,e,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;co||ja==null||ja!==Di(t)||(t=ja,"selectionStart"in t&&uo(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Nt&&wt(Nt,t)||(Nt=t,t=Ol(ro,"onSelect"),0<t.length&&(e=new wi("onSelect","select",null,e,a),n.push({event:e,listeners:t}),e.target=ja)))}function Sa(n,e){var a={};return a[n.toLowerCase()]=e.toLowerCase(),a["Webkit"+n]="webkit"+e,a["Moz"+n]="moz"+e,a}var qa={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},so={},Zr={};He&&(Zr=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function Oa(n){if(so[n])return so[n];if(!qa[n])return n;var e=qa[n],a;for(a in e)if(e.hasOwnProperty(a)&&a in Zr)return so[n]=e[a];return n}var Qr=Oa("animationend"),Fr=Oa("animationiteration"),$r=Oa("animationstart"),yA=Oa("transitionrun"),fA=Oa("transitionstart"),AA=Oa("transitioncancel"),nc=Oa("transitionend"),ec=new Map,yo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yo.push("scrollEnd");function de(n,e){ec.set(n,e),ma(e,[n])}var ac=new WeakMap;function ue(n,e){if(typeof n=="object"&&n!==null){var a=ac.get(n);return a!==void 0?a:(e={value:n,source:e,stack:Sr(e)},ac.set(n,e),e)}return{value:n,source:e,stack:Sr(e)}}var re=[],Pa=0,fo=0;function Ki(){for(var n=Pa,e=fo=Pa=0;e<n;){var a=re[e];re[e++]=null;var t=re[e];re[e++]=null;var i=re[e];re[e++]=null;var l=re[e];if(re[e++]=null,t!==null&&i!==null){var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}l!==0&&tc(a,i,l)}}function Ci(n,e,a,t){re[Pa++]=n,re[Pa++]=e,re[Pa++]=a,re[Pa++]=t,fo|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function Ao(n,e,a,t){return Ci(n,e,a,t),Gi(n)}function Xa(n,e){return Ci(n,null,null,e),Gi(n)}function tc(n,e,a){n.lanes|=a;var t=n.alternate;t!==null&&(t.lanes|=a);for(var i=!1,l=n.return;l!==null;)l.childLanes|=a,t=l.alternate,t!==null&&(t.childLanes|=a),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&e!==null&&(i=31-Qn(a),n=l.hiddenUpdates,t=n[i],t===null?n[i]=[e]:t.push(e),e.lane=a|536870912),l):null}function Gi(n){if(50<ii)throw ii=0,Eu=null,Error(m(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Za={};function hA(n,e,a,t){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,e,a,t){return new hA(n,e,a,t)}function ho(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Be(n,e){var a=n.alternate;return a===null?(a=$n(n.tag,e,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=e,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,e=n.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function ic(n,e){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,e=a.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function ki(n,e,a,t,i,l){var o=0;if(t=n,typeof n=="function")ho(n)&&(o=1);else if(typeof n=="string")o=mh(n,a,K.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Oe:return n=$n(31,a,e,i),n.elementType=Oe,n.lanes=l,n;case Nn:return Ea(a.children,i,l,e);case Pn:o=8,i|=24;break;case En:return n=$n(12,a,e,i|2),n.elementType=En,n.lanes=l,n;case L:return n=$n(13,a,e,i),n.elementType=L,n.lanes=l,n;case sn:return n=$n(19,a,e,i),n.elementType=sn,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Se:case Dn:o=10;break n;case he:o=9;break n;case W:o=11;break n;case fn:o=14;break n;case Wn:o=16,t=null;break n}o=29,a=Error(m(130,n===null?"null":typeof n,"")),t=null}return e=$n(o,a,e,i),e.elementType=n,e.type=t,e.lanes=l,e}function Ea(n,e,a,t){return n=$n(7,n,t,e),n.lanes=a,n}function mo(n,e,a){return n=$n(6,n,null,e),n.lanes=a,n}function go(n,e,a){return e=$n(4,n.children!==null?n.children:[],n.key,e),e.lanes=a,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Qa=[],Fa=0,zi=null,Ui=0,ce=[],se=0,Wa=null,Me=1,Le="";function Ta(n,e){Qa[Fa++]=Ui,Qa[Fa++]=zi,zi=n,Ui=e}function lc(n,e,a){ce[se++]=Me,ce[se++]=Le,ce[se++]=Wa,Wa=n;var t=Me;n=Le;var i=32-Qn(t)-1;t&=~(1<<i),a+=1;var l=32-Qn(e)+i;if(30<l){var o=i-i%5;l=(t&(1<<o)-1).toString(32),t>>=o,i-=o,Me=1<<32-Qn(e)+i|a<<i|t,Le=l+n}else Me=1<<l|a<<i|t,Le=n}function So(n){n.return!==null&&(Ta(n,1),lc(n,1,0))}function Oo(n){for(;n===zi;)zi=Qa[--Fa],Qa[Fa]=null,Ui=Qa[--Fa],Qa[Fa]=null;for(;n===Wa;)Wa=ce[--se],ce[se]=null,Le=ce[--se],ce[se]=null,Me=ce[--se],ce[se]=null}var Jn=null,mn=null,$=!1,ba=null,We=!1,Eo=Error(m(519));function va(n){var e=Error(m(418,""));throw Ct(ue(e,n)),Eo}function oc(n){var e=n.stateNode,a=n.type,t=n.memoizedProps;switch(e[zn]=n,e[xn]=t,a){case"dialog":q("cancel",e),q("close",e);break;case"iframe":case"object":case"embed":q("load",e);break;case"video":case"audio":for(a=0;a<oi.length;a++)q(oi[a],e);break;case"source":q("error",e);break;case"img":case"image":case"link":q("error",e),q("load",e);break;case"details":q("toggle",e);break;case"input":q("invalid",e),Wr(e,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0),Ri(e);break;case"select":q("invalid",e);break;case"textarea":q("invalid",e),br(e,t.value,t.defaultValue,t.children),Ri(e)}a=t.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||t.suppressHydrationWarning===!0||by(e.textContent,a)?(t.popover!=null&&(q("beforetoggle",e),q("toggle",e)),t.onScroll!=null&&q("scroll",e),t.onScrollEnd!=null&&q("scrollend",e),t.onClick!=null&&(e.onclick=El),e=!0):e=!1,e||va(n)}function uc(n){for(Jn=n.return;Jn;)switch(Jn.tag){case 5:case 13:We=!1;return;case 27:case 3:We=!0;return;default:Jn=Jn.return}}function Yt(n){if(n!==Jn)return!1;if(!$)return uc(n),$=!0,!1;var e=n.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Cu(n.type,n.memoizedProps)),a=!a),a&&mn&&va(n),uc(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(m(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(e===0){mn=ge(n.nextSibling);break n}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;n=n.nextSibling}mn=null}}else e===27?(e=mn,ua(n.type)?(n=Uu,Uu=null,mn=n):mn=e):mn=Jn?ge(n.stateNode.nextSibling):null;return!0}function Kt(){mn=Jn=null,$=!1}function rc(){var n=ba;return n!==null&&(qn===null?qn=n:qn.push.apply(qn,n),ba=null),n}function Ct(n){ba===null?ba=[n]:ba.push(n)}var Wo=v(null),pa=null,we=null;function je(n,e,a){R(Wo,e._currentValue),e._currentValue=a}function Ne(n){n._currentValue=Wo.current,H(Wo)}function To(n,e,a){for(;n!==null;){var t=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),n===a)break;n=n.return}}function bo(n,e,a,t){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var o=i.child;l=l.firstContext;n:for(;l!==null;){var u=l;l=i;for(var r=0;r<e.length;r++)if(u.context===e[r]){l.lanes|=a,u=l.alternate,u!==null&&(u.lanes|=a),To(l.return,a,n),t||(o=null);break n}l=u.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),To(o,a,n),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Gt(n,e,a,t){n=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var u=i.type;Fn(i.pendingProps.value,o.value)||(n!==null?n.push(u):n=[u])}}else if(i===Xn.current){if(o=i.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(fi):n=[fi])}i=i.return}n!==null&&bo(e,n,a,t),e.flags|=262144}function Ii(n){for(n=n.firstContext;n!==null;){if(!Fn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ra(n){pa=n,we=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Un(n){return cc(pa,n)}function Ji(n,e){return pa===null&&Ra(n),cc(n,e)}function cc(n,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},we===null){if(n===null)throw Error(m(308));we=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else we=we.next=e;return a}var dA=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(a,t){n.push(t)}};this.abort=function(){e.aborted=!0,n.forEach(function(a){return a()})}},mA=T.unstable_scheduleCallback,gA=T.unstable_NormalPriority,vn={$$typeof:Dn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vo(){return{controller:new dA,data:new Map,refCount:0}}function kt(n){n.refCount--,n.refCount===0&&mA(gA,function(){n.controller.abort()})}var zt=null,po=0,$a=0,nt=null;function SA(n,e){if(zt===null){var a=zt=[];po=0,$a=Du(),nt={status:"pending",value:void 0,then:function(t){a.push(t)}}}return po++,e.then(sc,sc),e}function sc(){if(--po===0&&zt!==null){nt!==null&&(nt.status="fulfilled");var n=zt;zt=null,$a=0,nt=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function OA(n,e){var a=[],t={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return n.then(function(){t.status="fulfilled",t.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(t.status="rejected",t.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),t}var yc=S.S;S.S=function(n,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&SA(n,e),yc!==null&&yc(n,e)};var Da=v(null);function Ro(){var n=Da.current;return n!==null?n:yn.pooledCache}function xi(n,e){e===null?R(Da,Da.current):R(Da,e.pool)}function fc(){var n=Ro();return n===null?null:{parent:vn._currentValue,pool:n}}var Ut=Error(m(460)),Ac=Error(m(474)),Vi=Error(m(542)),Do={then:function(){}};function hc(n){return n=n.status,n==="fulfilled"||n==="rejected"}function _i(){}function dc(n,e,a){switch(a=n[a],a===void 0?n.push(e):a!==e&&(e.then(_i,_i),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,gc(n),n;default:if(typeof e.status=="string")e.then(_i,_i);else{if(n=yn,n!==null&&100<n.shellSuspendCounter)throw Error(m(482));n=e,n.status="pending",n.then(function(t){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=t}},function(t){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=t}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,gc(n),n}throw It=e,Ut}}var It=null;function mc(){if(It===null)throw Error(m(459));var n=It;return It=null,n}function gc(n){if(n===Ut||n===Vi)throw Error(m(483))}var qe=!1;function Ho(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bo(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Pe(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Xe(n,e,a){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(nn&2)!==0){var i=t.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e,e=Gi(n),tc(n,null,a),e}return Ci(n,t,e,a),Gi(n)}function Jt(n,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var t=e.lanes;t&=n.pendingLanes,a|=t,e.lanes=a,sr(n,a)}}function Mo(n,e){var a=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?i=l=e:l=l.next=e}else i=l=e;a={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=e:n.next=e,a.lastBaseUpdate=e}var Lo=!1;function xt(){if(Lo){var n=nt;if(n!==null)throw n}}function Vt(n,e,a,t){Lo=!1;var i=n.updateQueue;qe=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var r=u,A=r.next;r.next=null,o===null?l=A:o.next=A,o=r;var g=n.alternate;g!==null&&(g=g.updateQueue,u=g.lastBaseUpdate,u!==o&&(u===null?g.firstBaseUpdate=A:u.next=A,g.lastBaseUpdate=r))}if(l!==null){var E=i.baseState;o=0,g=A=r=null,u=l;do{var h=u.lane&-536870913,d=h!==u.lane;if(d?(P&h)===h:(t&h)===h){h!==0&&h===$a&&(Lo=!0),g!==null&&(g=g.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});n:{var U=n,C=u;h=e;var on=a;switch(C.tag){case 1:if(U=C.payload,typeof U=="function"){E=U.call(on,E,h);break n}E=U;break n;case 3:U.flags=U.flags&-65537|128;case 0:if(U=C.payload,h=typeof U=="function"?U.call(on,E,h):U,h==null)break n;E=N({},E,h);break n;case 2:qe=!0}}h=u.callback,h!==null&&(n.flags|=64,d&&(n.flags|=8192),d=i.callbacks,d===null?i.callbacks=[h]:d.push(h))}else d={lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},g===null?(A=g=d,r=E):g=g.next=d,o|=h;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;d=u,u=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);g===null&&(r=E),i.baseState=r,i.firstBaseUpdate=A,i.lastBaseUpdate=g,l===null&&(i.shared.lanes=0),ta|=o,n.lanes=o,n.memoizedState=E}}function Sc(n,e){if(typeof n!="function")throw Error(m(191,n));n.call(e)}function Oc(n,e){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Sc(a[n],e)}var et=v(null),ji=v(0);function Ec(n,e){n=Ue,R(ji,n),R(et,e),Ue=n|e.baseLanes}function wo(){R(ji,Ue),R(et,et.current)}function No(){Ue=ji.current,H(et),H(ji)}var Ze=0,V=null,tn=null,Tn=null,qi=!1,at=!1,Ha=!1,Pi=0,_t=0,tt=null,EA=0;function Sn(){throw Error(m(321))}function Yo(n,e){if(e===null)return!1;for(var a=0;a<e.length&&a<n.length;a++)if(!Fn(n[a],e[a]))return!1;return!0}function Ko(n,e,a,t,i,l){return Ze=l,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,S.H=n===null||n.memoizedState===null?ts:is,Ha=!1,l=a(t,i),Ha=!1,at&&(l=Tc(e,a,t,i)),Wc(n),l}function Wc(n){S.H=nl;var e=tn!==null&&tn.next!==null;if(Ze=0,Tn=tn=V=null,qi=!1,_t=0,tt=null,e)throw Error(m(300));n===null||Bn||(n=n.dependencies,n!==null&&Ii(n)&&(Bn=!0))}function Tc(n,e,a,t){V=n;var i=0;do{if(at&&(tt=null),_t=0,at=!1,25<=i)throw Error(m(301));if(i+=1,Tn=tn=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}S.H=DA,l=e(a,t)}while(at);return l}function WA(){var n=S.H,e=n.useState()[0];return e=typeof e.then=="function"?jt(e):e,n=n.useState()[0],(tn!==null?tn.memoizedState:null)!==n&&(V.flags|=1024),e}function Co(){var n=Pi!==0;return Pi=0,n}function Go(n,e,a){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a}function ko(n){if(qi){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}qi=!1}Ze=0,Tn=tn=V=null,at=!1,_t=Pi=0,tt=null}function _n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?V.memoizedState=Tn=n:Tn=Tn.next=n,Tn}function bn(){if(tn===null){var n=V.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var e=Tn===null?V.memoizedState:Tn.next;if(e!==null)Tn=e,tn=n;else{if(n===null)throw V.alternate===null?Error(m(467)):Error(m(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Tn===null?V.memoizedState=Tn=n:Tn=Tn.next=n}return Tn}function zo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jt(n){var e=_t;return _t+=1,tt===null&&(tt=[]),n=dc(tt,n,e),e=V,(Tn===null?e.memoizedState:Tn.next)===null&&(e=e.alternate,S.H=e===null||e.memoizedState===null?ts:is),n}function Xi(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return jt(n);if(n.$$typeof===Dn)return Un(n)}throw Error(m(438,String(n)))}function Uo(n){var e=null,a=V.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var t=V.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(e={data:t.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=zo(),V.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(n),t=0;t<n;t++)a[t]=Ya;return e.index++,a}function Ye(n,e){return typeof e=="function"?e(n):e}function Zi(n){var e=bn();return Io(e,tn,n)}function Io(n,e,a){var t=n.queue;if(t===null)throw Error(m(311));t.lastRenderedReducer=a;var i=n.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}e.baseQueue=i=l,t.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{e=i.next;var u=o=null,r=null,A=e,g=!1;do{var E=A.lane&-536870913;if(E!==A.lane?(P&E)===E:(Ze&E)===E){var h=A.revertLane;if(h===0)r!==null&&(r=r.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),E===$a&&(g=!0);else if((Ze&h)===h){A=A.next,h===$a&&(g=!0);continue}else E={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},r===null?(u=r=E,o=l):r=r.next=E,V.lanes|=h,ta|=h;E=A.action,Ha&&a(l,E),l=A.hasEagerState?A.eagerState:a(l,E)}else h={lane:E,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},r===null?(u=r=h,o=l):r=r.next=h,V.lanes|=E,ta|=E;A=A.next}while(A!==null&&A!==e);if(r===null?o=l:r.next=u,!Fn(l,n.memoizedState)&&(Bn=!0,g&&(a=nt,a!==null)))throw a;n.memoizedState=l,n.baseState=o,n.baseQueue=r,t.lastRenderedState=l}return i===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function Jo(n){var e=bn(),a=e.queue;if(a===null)throw Error(m(311));a.lastRenderedReducer=n;var t=a.dispatch,i=a.pending,l=e.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do l=n(l,o.action),o=o.next;while(o!==i);Fn(l,e.memoizedState)||(Bn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),a.lastRenderedState=l}return[l,t]}function bc(n,e,a){var t=V,i=bn(),l=$;if(l){if(a===void 0)throw Error(m(407));a=a()}else a=e();var o=!Fn((tn||i).memoizedState,a);o&&(i.memoizedState=a,Bn=!0),i=i.queue;var u=Rc.bind(null,t,i,n);if(qt(2048,8,u,[n]),i.getSnapshot!==e||o||Tn!==null&&Tn.memoizedState.tag&1){if(t.flags|=2048,it(9,Qi(),pc.bind(null,t,i,a,e),null),yn===null)throw Error(m(349));l||(Ze&124)!==0||vc(t,e,a)}return a}function vc(n,e,a){n.flags|=16384,n={getSnapshot:e,value:a},e=V.updateQueue,e===null?(e=zo(),V.updateQueue=e,e.stores=[n]):(a=e.stores,a===null?e.stores=[n]:a.push(n))}function pc(n,e,a,t){e.value=a,e.getSnapshot=t,Dc(e)&&Hc(n)}function Rc(n,e,a){return a(function(){Dc(e)&&Hc(n)})}function Dc(n){var e=n.getSnapshot;n=n.value;try{var a=e();return!Fn(n,a)}catch{return!0}}function Hc(n){var e=Xa(n,2);e!==null&&ie(e,n,2)}function xo(n){var e=_n();if(typeof n=="function"){var a=n;if(n=a(),Ha){xe(!0);try{a()}finally{xe(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ye,lastRenderedState:n},e}function Bc(n,e,a,t){return n.baseState=a,Io(n,tn,typeof t=="function"?t:Ye)}function TA(n,e,a,t,i){if($i(n))throw Error(m(485));if(n=e.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};S.T!==null?a(!0):l.isTransition=!1,t(l),a=e.pending,a===null?(l.next=e.pending=l,Mc(e,l)):(l.next=a.next,e.pending=a.next=l)}}function Mc(n,e){var a=e.action,t=e.payload,i=n.state;if(e.isTransition){var l=S.T,o={};S.T=o;try{var u=a(i,t),r=S.S;r!==null&&r(o,u),Lc(n,e,u)}catch(A){Vo(n,e,A)}finally{S.T=l}}else try{l=a(i,t),Lc(n,e,l)}catch(A){Vo(n,e,A)}}function Lc(n,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(t){wc(n,e,t)},function(t){return Vo(n,e,t)}):wc(n,e,a)}function wc(n,e,a){e.status="fulfilled",e.value=a,Nc(e),n.state=a,e=n.pending,e!==null&&(a=e.next,a===e?n.pending=null:(a=a.next,e.next=a,Mc(n,a)))}function Vo(n,e,a){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do e.status="rejected",e.reason=a,Nc(e),e=e.next;while(e!==t)}n.action=null}function Nc(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Yc(n,e){return e}function Kc(n,e){if($){var a=yn.formState;if(a!==null){n:{var t=V;if($){if(mn){e:{for(var i=mn,l=We;i.nodeType!==8;){if(!l){i=null;break e}if(i=ge(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){mn=ge(i.nextSibling),t=i.data==="F!";break n}}va(t)}t=!1}t&&(e=a[0])}}return a=_n(),a.memoizedState=a.baseState=e,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yc,lastRenderedState:e},a.queue=t,a=ns.bind(null,V,t),t.dispatch=a,t=xo(!1),l=Xo.bind(null,V,!1,t.queue),t=_n(),i={state:e,dispatch:null,action:n,pending:null},t.queue=i,a=TA.bind(null,V,i,l,a),i.dispatch=a,t.memoizedState=n,[e,a,!1]}function Cc(n){var e=bn();return Gc(e,tn,n)}function Gc(n,e,a){if(e=Io(n,e,Yc)[0],n=Zi(Ye)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var t=jt(e)}catch(o){throw o===Ut?Vi:o}else t=e;e=bn();var i=e.queue,l=i.dispatch;return a!==e.memoizedState&&(V.flags|=2048,it(9,Qi(),bA.bind(null,i,a),null)),[t,l,n]}function bA(n,e){n.action=e}function kc(n){var e=bn(),a=tn;if(a!==null)return Gc(e,a,n);bn(),e=e.memoizedState,a=bn();var t=a.queue.dispatch;return a.memoizedState=n,[e,t,!1]}function it(n,e,a,t){return n={tag:n,create:a,deps:t,inst:e,next:null},e=V.updateQueue,e===null&&(e=zo(),V.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=n.next=n:(t=a.next,a.next=n,n.next=t,e.lastEffect=n),n}function Qi(){return{destroy:void 0,resource:void 0}}function zc(){return bn().memoizedState}function Fi(n,e,a,t){var i=_n();t=t===void 0?null:t,V.flags|=n,i.memoizedState=it(1|e,Qi(),a,t)}function qt(n,e,a,t){var i=bn();t=t===void 0?null:t;var l=i.memoizedState.inst;tn!==null&&t!==null&&Yo(t,tn.memoizedState.deps)?i.memoizedState=it(e,l,a,t):(V.flags|=n,i.memoizedState=it(1|e,l,a,t))}function Uc(n,e){Fi(8390656,8,n,e)}function Ic(n,e){qt(2048,8,n,e)}function Jc(n,e){return qt(4,2,n,e)}function xc(n,e){return qt(4,4,n,e)}function Vc(n,e){if(typeof e=="function"){n=n();var a=e(n);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function _c(n,e,a){a=a!=null?a.concat([n]):null,qt(4,4,Vc.bind(null,e,n),a)}function _o(){}function jc(n,e){var a=bn();e=e===void 0?null:e;var t=a.memoizedState;return e!==null&&Yo(e,t[1])?t[0]:(a.memoizedState=[n,e],n)}function qc(n,e){var a=bn();e=e===void 0?null:e;var t=a.memoizedState;if(e!==null&&Yo(e,t[1]))return t[0];if(t=n(),Ha){xe(!0);try{n()}finally{xe(!1)}}return a.memoizedState=[t,e],t}function jo(n,e,a){return a===void 0||(Ze&1073741824)!==0?n.memoizedState=e:(n.memoizedState=a,n=Zs(),V.lanes|=n,ta|=n,a)}function Pc(n,e,a,t){return Fn(a,e)?a:et.current!==null?(n=jo(n,a,t),Fn(n,e)||(Bn=!0),n):(Ze&42)===0?(Bn=!0,n.memoizedState=a):(n=Zs(),V.lanes|=n,ta|=n,e)}function Xc(n,e,a,t,i){var l=D.p;D.p=l!==0&&8>l?l:8;var o=S.T,u={};S.T=u,Xo(n,!1,e,a);try{var r=i(),A=S.S;if(A!==null&&A(u,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var g=OA(r,t);Pt(n,e,g,te(n))}else Pt(n,e,t,te(n))}catch(E){Pt(n,e,{then:function(){},status:"rejected",reason:E},te())}finally{D.p=l,S.T=o}}function vA(){}function qo(n,e,a,t){if(n.tag!==5)throw Error(m(476));var i=Zc(n).queue;Xc(n,i,e,k,a===null?vA:function(){return Qc(n),a(t)})}function Zc(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ye,lastRenderedState:k},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ye,lastRenderedState:a},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Qc(n){var e=Zc(n).next.queue;Pt(n,e,{},te())}function Po(){return Un(fi)}function Fc(){return bn().memoizedState}function $c(){return bn().memoizedState}function pA(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var a=te();n=Pe(a);var t=Xe(e,n,a);t!==null&&(ie(t,e,a),Jt(t,e,a)),e={cache:vo()},n.payload=e;return}e=e.return}}function RA(n,e,a){var t=te();a={lane:t,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},$i(n)?es(e,a):(a=Ao(n,e,a,t),a!==null&&(ie(a,n,t),as(a,e,t)))}function ns(n,e,a){var t=te();Pt(n,e,a,t)}function Pt(n,e,a,t){var i={lane:t,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if($i(n))es(e,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var o=e.lastRenderedState,u=l(o,a);if(i.hasEagerState=!0,i.eagerState=u,Fn(u,o))return Ci(n,e,i,0),yn===null&&Ki(),!1}catch{}finally{}if(a=Ao(n,e,i,t),a!==null)return ie(a,n,t),as(a,e,t),!0}return!1}function Xo(n,e,a,t){if(t={lane:2,revertLane:Du(),action:t,hasEagerState:!1,eagerState:null,next:null},$i(n)){if(e)throw Error(m(479))}else e=Ao(n,a,t,2),e!==null&&ie(e,n,2)}function $i(n){var e=n.alternate;return n===V||e!==null&&e===V}function es(n,e){at=qi=!0;var a=n.pending;a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e}function as(n,e,a){if((a&4194048)!==0){var t=e.lanes;t&=n.pendingLanes,a|=t,e.lanes=a,sr(n,a)}}var nl={readContext:Un,use:Xi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn},ts={readContext:Un,use:Xi,useCallback:function(n,e){return _n().memoizedState=[n,e===void 0?null:e],n},useContext:Un,useEffect:Uc,useImperativeHandle:function(n,e,a){a=a!=null?a.concat([n]):null,Fi(4194308,4,Vc.bind(null,e,n),a)},useLayoutEffect:function(n,e){return Fi(4194308,4,n,e)},useInsertionEffect:function(n,e){Fi(4,2,n,e)},useMemo:function(n,e){var a=_n();e=e===void 0?null:e;var t=n();if(Ha){xe(!0);try{n()}finally{xe(!1)}}return a.memoizedState=[t,e],t},useReducer:function(n,e,a){var t=_n();if(a!==void 0){var i=a(e);if(Ha){xe(!0);try{a(e)}finally{xe(!1)}}}else i=e;return t.memoizedState=t.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},t.queue=n,n=n.dispatch=RA.bind(null,V,n),[t.memoizedState,n]},useRef:function(n){var e=_n();return n={current:n},e.memoizedState=n},useState:function(n){n=xo(n);var e=n.queue,a=ns.bind(null,V,e);return e.dispatch=a,[n.memoizedState,a]},useDebugValue:_o,useDeferredValue:function(n,e){var a=_n();return jo(a,n,e)},useTransition:function(){var n=xo(!1);return n=Xc.bind(null,V,n.queue,!0,!1),_n().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,a){var t=V,i=_n();if($){if(a===void 0)throw Error(m(407));a=a()}else{if(a=e(),yn===null)throw Error(m(349));(P&124)!==0||vc(t,e,a)}i.memoizedState=a;var l={value:a,getSnapshot:e};return i.queue=l,Uc(Rc.bind(null,t,l,n),[n]),t.flags|=2048,it(9,Qi(),pc.bind(null,t,l,a,e),null),a},useId:function(){var n=_n(),e=yn.identifierPrefix;if($){var a=Le,t=Me;a=(t&~(1<<32-Qn(t)-1)).toString(32)+a,e="«"+e+"R"+a,a=Pi++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=EA++,e="«"+e+"r"+a.toString(32)+"»";return n.memoizedState=e},useHostTransitionStatus:Po,useFormState:Kc,useActionState:Kc,useOptimistic:function(n){var e=_n();e.memoizedState=e.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Xo.bind(null,V,!0,a),a.dispatch=e,[n,e]},useMemoCache:Uo,useCacheRefresh:function(){return _n().memoizedState=pA.bind(null,V)}},is={readContext:Un,use:Xi,useCallback:jc,useContext:Un,useEffect:Ic,useImperativeHandle:_c,useInsertionEffect:Jc,useLayoutEffect:xc,useMemo:qc,useReducer:Zi,useRef:zc,useState:function(){return Zi(Ye)},useDebugValue:_o,useDeferredValue:function(n,e){var a=bn();return Pc(a,tn.memoizedState,n,e)},useTransition:function(){var n=Zi(Ye)[0],e=bn().memoizedState;return[typeof n=="boolean"?n:jt(n),e]},useSyncExternalStore:bc,useId:Fc,useHostTransitionStatus:Po,useFormState:Cc,useActionState:Cc,useOptimistic:function(n,e){var a=bn();return Bc(a,tn,n,e)},useMemoCache:Uo,useCacheRefresh:$c},DA={readContext:Un,use:Xi,useCallback:jc,useContext:Un,useEffect:Ic,useImperativeHandle:_c,useInsertionEffect:Jc,useLayoutEffect:xc,useMemo:qc,useReducer:Jo,useRef:zc,useState:function(){return Jo(Ye)},useDebugValue:_o,useDeferredValue:function(n,e){var a=bn();return tn===null?jo(a,n,e):Pc(a,tn.memoizedState,n,e)},useTransition:function(){var n=Jo(Ye)[0],e=bn().memoizedState;return[typeof n=="boolean"?n:jt(n),e]},useSyncExternalStore:bc,useId:Fc,useHostTransitionStatus:Po,useFormState:kc,useActionState:kc,useOptimistic:function(n,e){var a=bn();return tn!==null?Bc(a,tn,n,e):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Uo,useCacheRefresh:$c},lt=null,Xt=0;function el(n){var e=Xt;return Xt+=1,lt===null&&(lt=[]),dc(lt,n,e)}function Zt(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function al(n,e){throw e.$$typeof===un?Error(m(525)):(n=Object.prototype.toString.call(e),Error(m(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function ls(n){var e=n._init;return e(n._payload)}function os(n){function e(y,s){if(n){var f=y.deletions;f===null?(y.deletions=[s],y.flags|=16):f.push(s)}}function a(y,s){if(!n)return null;for(;s!==null;)e(y,s),s=s.sibling;return null}function t(y){for(var s=new Map;y!==null;)y.key!==null?s.set(y.key,y):s.set(y.index,y),y=y.sibling;return s}function i(y,s){return y=Be(y,s),y.index=0,y.sibling=null,y}function l(y,s,f){return y.index=f,n?(f=y.alternate,f!==null?(f=f.index,f<s?(y.flags|=67108866,s):f):(y.flags|=67108866,s)):(y.flags|=1048576,s)}function o(y){return n&&y.alternate===null&&(y.flags|=67108866),y}function u(y,s,f,O){return s===null||s.tag!==6?(s=mo(f,y.mode,O),s.return=y,s):(s=i(s,f),s.return=y,s)}function r(y,s,f,O){var B=f.type;return B===Nn?g(y,s,f.props.children,O,f.key):s!==null&&(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Wn&&ls(B)===s.type)?(s=i(s,f.props),Zt(s,f),s.return=y,s):(s=ki(f.type,f.key,f.props,null,y.mode,O),Zt(s,f),s.return=y,s)}function A(y,s,f,O){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=go(f,y.mode,O),s.return=y,s):(s=i(s,f.children||[]),s.return=y,s)}function g(y,s,f,O,B){return s===null||s.tag!==7?(s=Ea(f,y.mode,O,B),s.return=y,s):(s=i(s,f),s.return=y,s)}function E(y,s,f){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=mo(""+s,y.mode,f),s.return=y,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case an:return f=ki(s.type,s.key,s.props,null,y.mode,f),Zt(f,s),f.return=y,f;case wn:return s=go(s,y.mode,f),s.return=y,s;case Wn:var O=s._init;return s=O(s._payload),E(y,s,f)}if(kn(s)||Gn(s))return s=Ea(s,y.mode,f,null),s.return=y,s;if(typeof s.then=="function")return E(y,el(s),f);if(s.$$typeof===Dn)return E(y,Ji(y,s),f);al(y,s)}return null}function h(y,s,f,O){var B=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return B!==null?null:u(y,s,""+f,O);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case an:return f.key===B?r(y,s,f,O):null;case wn:return f.key===B?A(y,s,f,O):null;case Wn:return B=f._init,f=B(f._payload),h(y,s,f,O)}if(kn(f)||Gn(f))return B!==null?null:g(y,s,f,O,null);if(typeof f.then=="function")return h(y,s,el(f),O);if(f.$$typeof===Dn)return h(y,s,Ji(y,f),O);al(y,f)}return null}function d(y,s,f,O,B){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return y=y.get(f)||null,u(s,y,""+O,B);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case an:return y=y.get(O.key===null?f:O.key)||null,r(s,y,O,B);case wn:return y=y.get(O.key===null?f:O.key)||null,A(s,y,O,B);case Wn:var _=O._init;return O=_(O._payload),d(y,s,f,O,B)}if(kn(O)||Gn(O))return y=y.get(f)||null,g(s,y,O,B,null);if(typeof O.then=="function")return d(y,s,f,el(O),B);if(O.$$typeof===Dn)return d(y,s,f,Ji(s,O),B);al(s,O)}return null}function U(y,s,f,O){for(var B=null,_=null,w=s,G=s=0,Ln=null;w!==null&&G<f.length;G++){w.index>G?(Ln=w,w=null):Ln=w.sibling;var F=h(y,w,f[G],O);if(F===null){w===null&&(w=Ln);break}n&&w&&F.alternate===null&&e(y,w),s=l(F,s,G),_===null?B=F:_.sibling=F,_=F,w=Ln}if(G===f.length)return a(y,w),$&&Ta(y,G),B;if(w===null){for(;G<f.length;G++)w=E(y,f[G],O),w!==null&&(s=l(w,s,G),_===null?B=w:_.sibling=w,_=w);return $&&Ta(y,G),B}for(w=t(w);G<f.length;G++)Ln=d(w,y,G,f[G],O),Ln!==null&&(n&&Ln.alternate!==null&&w.delete(Ln.key===null?G:Ln.key),s=l(Ln,s,G),_===null?B=Ln:_.sibling=Ln,_=Ln);return n&&w.forEach(function(fa){return e(y,fa)}),$&&Ta(y,G),B}function C(y,s,f,O){if(f==null)throw Error(m(151));for(var B=null,_=null,w=s,G=s=0,Ln=null,F=f.next();w!==null&&!F.done;G++,F=f.next()){w.index>G?(Ln=w,w=null):Ln=w.sibling;var fa=h(y,w,F.value,O);if(fa===null){w===null&&(w=Ln);break}n&&w&&fa.alternate===null&&e(y,w),s=l(fa,s,G),_===null?B=fa:_.sibling=fa,_=fa,w=Ln}if(F.done)return a(y,w),$&&Ta(y,G),B;if(w===null){for(;!F.done;G++,F=f.next())F=E(y,F.value,O),F!==null&&(s=l(F,s,G),_===null?B=F:_.sibling=F,_=F);return $&&Ta(y,G),B}for(w=t(w);!F.done;G++,F=f.next())F=d(w,y,G,F.value,O),F!==null&&(n&&F.alternate!==null&&w.delete(F.key===null?G:F.key),s=l(F,s,G),_===null?B=F:_.sibling=F,_=F);return n&&w.forEach(function(Hh){return e(y,Hh)}),$&&Ta(y,G),B}function on(y,s,f,O){if(typeof f=="object"&&f!==null&&f.type===Nn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case an:n:{for(var B=f.key;s!==null;){if(s.key===B){if(B=f.type,B===Nn){if(s.tag===7){a(y,s.sibling),O=i(s,f.props.children),O.return=y,y=O;break n}}else if(s.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Wn&&ls(B)===s.type){a(y,s.sibling),O=i(s,f.props),Zt(O,f),O.return=y,y=O;break n}a(y,s);break}else e(y,s);s=s.sibling}f.type===Nn?(O=Ea(f.props.children,y.mode,O,f.key),O.return=y,y=O):(O=ki(f.type,f.key,f.props,null,y.mode,O),Zt(O,f),O.return=y,y=O)}return o(y);case wn:n:{for(B=f.key;s!==null;){if(s.key===B)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){a(y,s.sibling),O=i(s,f.children||[]),O.return=y,y=O;break n}else{a(y,s);break}else e(y,s);s=s.sibling}O=go(f,y.mode,O),O.return=y,y=O}return o(y);case Wn:return B=f._init,f=B(f._payload),on(y,s,f,O)}if(kn(f))return U(y,s,f,O);if(Gn(f)){if(B=Gn(f),typeof B!="function")throw Error(m(150));return f=B.call(f),C(y,s,f,O)}if(typeof f.then=="function")return on(y,s,el(f),O);if(f.$$typeof===Dn)return on(y,s,Ji(y,f),O);al(y,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,s!==null&&s.tag===6?(a(y,s.sibling),O=i(s,f),O.return=y,y=O):(a(y,s),O=mo(f,y.mode,O),O.return=y,y=O),o(y)):a(y,s)}return function(y,s,f,O){try{Xt=0;var B=on(y,s,f,O);return lt=null,B}catch(w){if(w===Ut||w===Vi)throw w;var _=$n(29,w,null,y.mode);return _.lanes=O,_.return=y,_}finally{}}}var ot=os(!0),us=os(!1),ye=v(null),Te=null;function Qe(n){var e=n.alternate;R(pn,pn.current&1),R(ye,n),Te===null&&(e===null||et.current!==null||e.memoizedState!==null)&&(Te=n)}function rs(n){if(n.tag===22){if(R(pn,pn.current),R(ye,n),Te===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(Te=n)}}else Fe()}function Fe(){R(pn,pn.current),R(ye,ye.current)}function Ke(n){H(ye),Te===n&&(Te=null),H(pn)}var pn=v(0);function tl(n){for(var e=n;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||zu(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Zo(n,e,a,t){e=n.memoizedState,a=a(t,e),a=a==null?e:N({},e,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qo={enqueueSetState:function(n,e,a){n=n._reactInternals;var t=te(),i=Pe(t);i.payload=e,a!=null&&(i.callback=a),e=Xe(n,i,t),e!==null&&(ie(e,n,t),Jt(e,n,t))},enqueueReplaceState:function(n,e,a){n=n._reactInternals;var t=te(),i=Pe(t);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Xe(n,i,t),e!==null&&(ie(e,n,t),Jt(e,n,t))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var a=te(),t=Pe(a);t.tag=2,e!=null&&(t.callback=e),e=Xe(n,t,a),e!==null&&(ie(e,n,a),Jt(e,n,a))}};function cs(n,e,a,t,i,l,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,l,o):e.prototype&&e.prototype.isPureReactComponent?!wt(a,t)||!wt(i,l):!0}function ss(n,e,a,t){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,t),e.state!==n&&Qo.enqueueReplaceState(e,e.state,null)}function Ba(n,e){var a=e;if("ref"in e){a={};for(var t in e)t!=="ref"&&(a[t]=e[t])}if(n=n.defaultProps){a===e&&(a=N({},a));for(var i in n)a[i]===void 0&&(a[i]=n[i])}return a}var il=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function ys(n){il(n)}function fs(n){console.error(n)}function As(n){il(n)}function ll(n,e){try{var a=n.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(t){setTimeout(function(){throw t})}}function hs(n,e,a){try{var t=n.onCaughtError;t(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Fo(n,e,a){return a=Pe(a),a.tag=3,a.payload={element:null},a.callback=function(){ll(n,e)},a}function ds(n){return n=Pe(n),n.tag=3,n}function ms(n,e,a,t){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=t.value;n.payload=function(){return i(l)},n.callback=function(){hs(e,a,t)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hs(e,a,t),typeof i!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})})}function HA(n,e,a,t,i){if(a.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(e=a.alternate,e!==null&&Gt(e,a,i,!0),a=ye.current,a!==null){switch(a.tag){case 13:return Te===null?Tu():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=i,t===Do?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([t]):e.add(t),vu(n,t,i)),!1;case 22:return a.flags|=65536,t===Do?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([t])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([t]):a.add(t)),vu(n,t,i)),!1}throw Error(m(435,a.tag))}return vu(n,t,i),Tu(),!1}if($)return e=ye.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,t!==Eo&&(n=Error(m(422),{cause:t}),Ct(ue(n,a)))):(t!==Eo&&(e=Error(m(423),{cause:t}),Ct(ue(e,a))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,t=ue(t,a),i=Fo(n.stateNode,t,i),Mo(n,i),gn!==4&&(gn=2)),!1;var l=Error(m(520),{cause:t});if(l=ue(l,a),ti===null?ti=[l]:ti.push(l),gn!==4&&(gn=2),e===null)return!0;t=ue(t,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,n=i&-i,a.lanes|=n,n=Fo(a.stateNode,t,n),Mo(a,n),!1;case 1:if(e=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ia===null||!ia.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=ds(i),ms(i,n,a,t),Mo(a,i),!1}a=a.return}while(a!==null);return!1}var gs=Error(m(461)),Bn=!1;function Yn(n,e,a,t){e.child=n===null?us(e,null,a,t):ot(e,n.child,a,t)}function Ss(n,e,a,t,i){a=a.render;var l=e.ref;if("ref"in t){var o={};for(var u in t)u!=="ref"&&(o[u]=t[u])}else o=t;return Ra(e),t=Ko(n,e,a,o,l,i),u=Co(),n!==null&&!Bn?(Go(n,e,i),Ce(n,e,i)):($&&u&&So(e),e.flags|=1,Yn(n,e,t,i),e.child)}function Os(n,e,a,t,i){if(n===null){var l=a.type;return typeof l=="function"&&!ho(l)&&l.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=l,Es(n,e,l,t,i)):(n=ki(a.type,null,t,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!ou(n,i)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:wt,a(o,t)&&n.ref===e.ref)return Ce(n,e,i)}return e.flags|=1,n=Be(l,t),n.ref=e.ref,n.return=e,e.child=n}function Es(n,e,a,t,i){if(n!==null){var l=n.memoizedProps;if(wt(l,t)&&n.ref===e.ref)if(Bn=!1,e.pendingProps=t=l,ou(n,i))(n.flags&131072)!==0&&(Bn=!0);else return e.lanes=n.lanes,Ce(n,e,i)}return $o(n,e,a,t,i)}function Ws(n,e,a){var t=e.pendingProps,i=t.children,l=n!==null?n.memoizedState:null;if(t.mode==="hidden"){if((e.flags&128)!==0){if(t=l!==null?l.baseLanes|a:a,n!==null){for(i=e.child=n.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;e.childLanes=l&~t}else e.childLanes=0,e.child=null;return Ts(n,e,t,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&xi(e,l!==null?l.cachePool:null),l!==null?Ec(e,l):wo(),rs(e);else return e.lanes=e.childLanes=536870912,Ts(n,e,l!==null?l.baseLanes|a:a,a)}else l!==null?(xi(e,l.cachePool),Ec(e,l),Fe(),e.memoizedState=null):(n!==null&&xi(e,null),wo(),Fe());return Yn(n,e,i,a),e.child}function Ts(n,e,a,t){var i=Ro();return i=i===null?null:{parent:vn._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},n!==null&&xi(e,null),wo(),rs(e),n!==null&&Gt(n,e,t,!0),null}function ol(n,e){var a=e.ref;if(a===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(m(284));(n===null||n.ref!==a)&&(e.flags|=4194816)}}function $o(n,e,a,t,i){return Ra(e),a=Ko(n,e,a,t,void 0,i),t=Co(),n!==null&&!Bn?(Go(n,e,i),Ce(n,e,i)):($&&t&&So(e),e.flags|=1,Yn(n,e,a,i),e.child)}function bs(n,e,a,t,i,l){return Ra(e),e.updateQueue=null,a=Tc(e,t,a,i),Wc(n),t=Co(),n!==null&&!Bn?(Go(n,e,l),Ce(n,e,l)):($&&t&&So(e),e.flags|=1,Yn(n,e,a,l),e.child)}function vs(n,e,a,t,i){if(Ra(e),e.stateNode===null){var l=Za,o=a.contextType;typeof o=="object"&&o!==null&&(l=Un(o)),l=new a(t,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Qo,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=t,l.state=e.memoizedState,l.refs={},Ho(e),o=a.contextType,l.context=typeof o=="object"&&o!==null?Un(o):Za,l.state=e.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Zo(e,a,o,t),l.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&Qo.enqueueReplaceState(l,l.state,null),Vt(e,t,l,i),xt(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!0}else if(n===null){l=e.stateNode;var u=e.memoizedProps,r=Ba(a,u);l.props=r;var A=l.context,g=a.contextType;o=Za,typeof g=="object"&&g!==null&&(o=Un(g));var E=a.getDerivedStateFromProps;g=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||A!==o)&&ss(e,l,t,o),qe=!1;var h=e.memoizedState;l.state=h,Vt(e,t,l,i),xt(),A=e.memoizedState,u||h!==A||qe?(typeof E=="function"&&(Zo(e,a,E,t),A=e.memoizedState),(r=qe||cs(e,a,r,t,h,A,o))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=A),l.props=t,l.state=A,l.context=o,t=r):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{l=e.stateNode,Bo(n,e),o=e.memoizedProps,g=Ba(a,o),l.props=g,E=e.pendingProps,h=l.context,A=a.contextType,r=Za,typeof A=="object"&&A!==null&&(r=Un(A)),u=a.getDerivedStateFromProps,(A=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==E||h!==r)&&ss(e,l,t,r),qe=!1,h=e.memoizedState,l.state=h,Vt(e,t,l,i),xt();var d=e.memoizedState;o!==E||h!==d||qe||n!==null&&n.dependencies!==null&&Ii(n.dependencies)?(typeof u=="function"&&(Zo(e,a,u,t),d=e.memoizedState),(g=qe||cs(e,a,g,t,h,d,r)||n!==null&&n.dependencies!==null&&Ii(n.dependencies))?(A||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,d,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,d,r)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=d),l.props=t,l.state=d,l.context=r,t=g):(typeof l.componentDidUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),t=!1)}return l=t,ol(n,e),t=(e.flags&128)!==0,l||t?(l=e.stateNode,a=t&&typeof a.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&t?(e.child=ot(e,n.child,null,i),e.child=ot(e,null,a,i)):Yn(n,e,a,i),e.memoizedState=l.state,n=e.child):n=Ce(n,e,i),n}function ps(n,e,a,t){return Kt(),e.flags|=256,Yn(n,e,a,t),e.child}var nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function eu(n){return{baseLanes:n,cachePool:fc()}}function au(n,e,a){return n=n!==null?n.childLanes&~a:0,e&&(n|=fe),n}function Rs(n,e,a){var t=e.pendingProps,i=!1,l=(e.flags&128)!==0,o;if((o=l)||(o=n!==null&&n.memoizedState===null?!1:(pn.current&2)!==0),o&&(i=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,n===null){if($){if(i?Qe(e):Fe(),$){var u=mn,r;if(r=u){n:{for(r=u,u=We;r.nodeType!==8;){if(!u){u=null;break n}if(r=ge(r.nextSibling),r===null){u=null;break n}}u=r}u!==null?(e.memoizedState={dehydrated:u,treeContext:Wa!==null?{id:Me,overflow:Le}:null,retryLane:536870912,hydrationErrors:null},r=$n(18,null,null,0),r.stateNode=u,r.return=e,e.child=r,Jn=e,mn=null,r=!0):r=!1}r||va(e)}if(u=e.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return zu(u)?e.lanes=32:e.lanes=536870912,null;Ke(e)}return u=t.children,t=t.fallback,i?(Fe(),i=e.mode,u=ul({mode:"hidden",children:u},i),t=Ea(t,i,a,null),u.return=e,t.return=e,u.sibling=t,e.child=u,i=e.child,i.memoizedState=eu(a),i.childLanes=au(n,o,a),e.memoizedState=nu,t):(Qe(e),tu(e,u))}if(r=n.memoizedState,r!==null&&(u=r.dehydrated,u!==null)){if(l)e.flags&256?(Qe(e),e.flags&=-257,e=iu(n,e,a)):e.memoizedState!==null?(Fe(),e.child=n.child,e.flags|=128,e=null):(Fe(),i=t.fallback,u=e.mode,t=ul({mode:"visible",children:t.children},u),i=Ea(i,u,a,null),i.flags|=2,t.return=e,i.return=e,t.sibling=i,e.child=t,ot(e,n.child,null,a),t=e.child,t.memoizedState=eu(a),t.childLanes=au(n,o,a),e.memoizedState=nu,e=i);else if(Qe(e),zu(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var A=o.dgst;o=A,t=Error(m(419)),t.stack="",t.digest=o,Ct({value:t,source:null,stack:null}),e=iu(n,e,a)}else if(Bn||Gt(n,e,a,!1),o=(a&n.childLanes)!==0,Bn||o){if(o=yn,o!==null&&(t=a&-a,t=(t&42)!==0?1:zl(t),t=(t&(o.suspendedLanes|a))!==0?0:t,t!==0&&t!==r.retryLane))throw r.retryLane=t,Xa(n,t),ie(o,n,t),gs;u.data==="$?"||Tu(),e=iu(n,e,a)}else u.data==="$?"?(e.flags|=192,e.child=n.child,e=null):(n=r.treeContext,mn=ge(u.nextSibling),Jn=e,$=!0,ba=null,We=!1,n!==null&&(ce[se++]=Me,ce[se++]=Le,ce[se++]=Wa,Me=n.id,Le=n.overflow,Wa=e),e=tu(e,t.children),e.flags|=4096);return e}return i?(Fe(),i=t.fallback,u=e.mode,r=n.child,A=r.sibling,t=Be(r,{mode:"hidden",children:t.children}),t.subtreeFlags=r.subtreeFlags&65011712,A!==null?i=Be(A,i):(i=Ea(i,u,a,null),i.flags|=2),i.return=e,t.return=e,t.sibling=i,e.child=t,t=i,i=e.child,u=n.child.memoizedState,u===null?u=eu(a):(r=u.cachePool,r!==null?(A=vn._currentValue,r=r.parent!==A?{parent:A,pool:A}:r):r=fc(),u={baseLanes:u.baseLanes|a,cachePool:r}),i.memoizedState=u,i.childLanes=au(n,o,a),e.memoizedState=nu,t):(Qe(e),a=n.child,n=a.sibling,a=Be(a,{mode:"visible",children:t.children}),a.return=e,a.sibling=null,n!==null&&(o=e.deletions,o===null?(e.deletions=[n],e.flags|=16):o.push(n)),e.child=a,e.memoizedState=null,a)}function tu(n,e){return e=ul({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function ul(n,e){return n=$n(22,n,null,e),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function iu(n,e,a){return ot(e,n.child,null,a),n=tu(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ds(n,e,a){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e),To(n.return,e,a)}function lu(n,e,a,t,i){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:i}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=a,l.tailMode=i)}function Hs(n,e,a){var t=e.pendingProps,i=t.revealOrder,l=t.tail;if(Yn(n,e,t.children,a),t=pn.current,(t&2)!==0)t=t&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ds(n,a,e);else if(n.tag===19)Ds(n,a,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}switch(R(pn,t),i){case"forwards":for(a=e.child,i=null;a!==null;)n=a.alternate,n!==null&&tl(n)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),lu(e,!1,i,a,l);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&tl(n)===null){e.child=i;break}n=i.sibling,i.sibling=a,a=i,i=n}lu(e,!0,a,null,l);break;case"together":lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ce(n,e,a){if(n!==null&&(e.dependencies=n.dependencies),ta|=e.lanes,(a&e.childLanes)===0)if(n!==null){if(Gt(n,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(m(153));if(e.child!==null){for(n=e.child,a=Be(n,n.pendingProps),e.child=a,a.return=e;n.sibling!==null;)n=n.sibling,a=a.sibling=Be(n,n.pendingProps),a.return=e;a.sibling=null}return e.child}function ou(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&Ii(n)))}function BA(n,e,a){switch(e.tag){case 3:An(e,e.stateNode.containerInfo),je(e,vn,n.memoizedState.cache),Kt();break;case 27:case 5:Yl(e);break;case 4:An(e,e.stateNode.containerInfo);break;case 10:je(e,e.type,e.memoizedProps.value);break;case 13:var t=e.memoizedState;if(t!==null)return t.dehydrated!==null?(Qe(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Rs(n,e,a):(Qe(e),n=Ce(n,e,a),n!==null?n.sibling:null);Qe(e);break;case 19:var i=(n.flags&128)!==0;if(t=(a&e.childLanes)!==0,t||(Gt(n,e,a,!1),t=(a&e.childLanes)!==0),i){if(t)return Hs(n,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(pn,pn.current),t)break;return null;case 22:case 23:return e.lanes=0,Ws(n,e,a);case 24:je(e,vn,n.memoizedState.cache)}return Ce(n,e,a)}function Bs(n,e,a){if(n!==null)if(n.memoizedProps!==e.pendingProps)Bn=!0;else{if(!ou(n,a)&&(e.flags&128)===0)return Bn=!1,BA(n,e,a);Bn=(n.flags&131072)!==0}else Bn=!1,$&&(e.flags&1048576)!==0&&lc(e,Ui,e.index);switch(e.lanes=0,e.tag){case 16:n:{n=e.pendingProps;var t=e.elementType,i=t._init;if(t=i(t._payload),e.type=t,typeof t=="function")ho(t)?(n=Ba(t,n),e.tag=1,e=vs(null,e,t,n,a)):(e.tag=0,e=$o(null,e,t,n,a));else{if(t!=null){if(i=t.$$typeof,i===W){e.tag=11,e=Ss(null,e,t,n,a);break n}else if(i===fn){e.tag=14,e=Os(null,e,t,n,a);break n}}throw e=ha(t)||t,Error(m(306,e,""))}}return e;case 0:return $o(n,e,e.type,e.pendingProps,a);case 1:return t=e.type,i=Ba(t,e.pendingProps),vs(n,e,t,i,a);case 3:n:{if(An(e,e.stateNode.containerInfo),n===null)throw Error(m(387));t=e.pendingProps;var l=e.memoizedState;i=l.element,Bo(n,e),Vt(e,t,null,a);var o=e.memoizedState;if(t=o.cache,je(e,vn,t),t!==l.cache&&bo(e,[vn],a,!0),xt(),t=o.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=ps(n,e,t,a);break n}else if(t!==i){i=ue(Error(m(424)),e),Ct(i),e=ps(n,e,t,a);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(mn=ge(n.firstChild),Jn=e,$=!0,ba=null,We=!0,a=us(e,null,t,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kt(),t===i){e=Ce(n,e,a);break n}Yn(n,e,t,a)}e=e.child}return e;case 26:return ol(n,e),n===null?(a=Ny(e.type,null,e.pendingProps,null))?e.memoizedState=a:$||(a=e.type,n=e.pendingProps,t=Wl(J.current).createElement(a),t[zn]=e,t[xn]=n,Cn(t,a,n),Hn(t),e.stateNode=t):e.memoizedState=Ny(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Yl(e),n===null&&$&&(t=e.stateNode=My(e.type,e.pendingProps,J.current),Jn=e,We=!0,i=mn,ua(e.type)?(Uu=i,mn=ge(t.firstChild)):mn=i),Yn(n,e,e.pendingProps.children,a),ol(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&$&&((i=t=mn)&&(t=th(t,e.type,e.pendingProps,We),t!==null?(e.stateNode=t,Jn=e,mn=ge(t.firstChild),We=!1,i=!0):i=!1),i||va(e)),Yl(e),i=e.type,l=e.pendingProps,o=n!==null?n.memoizedProps:null,t=l.children,Cu(i,l)?t=null:o!==null&&Cu(i,o)&&(e.flags|=32),e.memoizedState!==null&&(i=Ko(n,e,WA,null,null,a),fi._currentValue=i),ol(n,e),Yn(n,e,t,a),e.child;case 6:return n===null&&$&&((n=a=mn)&&(a=ih(a,e.pendingProps,We),a!==null?(e.stateNode=a,Jn=e,mn=null,n=!0):n=!1),n||va(e)),null;case 13:return Rs(n,e,a);case 4:return An(e,e.stateNode.containerInfo),t=e.pendingProps,n===null?e.child=ot(e,null,t,a):Yn(n,e,t,a),e.child;case 11:return Ss(n,e,e.type,e.pendingProps,a);case 7:return Yn(n,e,e.pendingProps,a),e.child;case 8:return Yn(n,e,e.pendingProps.children,a),e.child;case 12:return Yn(n,e,e.pendingProps.children,a),e.child;case 10:return t=e.pendingProps,je(e,e.type,t.value),Yn(n,e,t.children,a),e.child;case 9:return i=e.type._context,t=e.pendingProps.children,Ra(e),i=Un(i),t=t(i),e.flags|=1,Yn(n,e,t,a),e.child;case 14:return Os(n,e,e.type,e.pendingProps,a);case 15:return Es(n,e,e.type,e.pendingProps,a);case 19:return Hs(n,e,a);case 31:return t=e.pendingProps,a=e.mode,t={mode:t.mode,children:t.children},n===null?(a=ul(t,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=Be(n.child,t),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return Ws(n,e,a);case 24:return Ra(e),t=Un(vn),n===null?(i=Ro(),i===null&&(i=yn,l=vo(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),e.memoizedState={parent:t,cache:i},Ho(e),je(e,vn,i)):((n.lanes&a)!==0&&(Bo(n,e),Vt(e,null,null,a),xt()),i=n.memoizedState,l=e.memoizedState,i.parent!==t?(i={parent:t,cache:t},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),je(e,vn,t)):(t=l.cache,je(e,vn,t),t!==i.cache&&bo(e,[vn],a,!0))),Yn(n,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(m(156,e.tag))}function Ge(n){n.flags|=4}function Ms(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ky(e)){if(e=ye.current,e!==null&&((P&4194048)===P?Te!==null:(P&62914560)!==P&&(P&536870912)===0||e!==Te))throw It=Do,Ac;n.flags|=8192}}function rl(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?rr():536870912,n.lanes|=e,st|=e)}function Qt(n,e){if(!$)switch(n.tailMode){case"hidden":e=n.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function dn(n){var e=n.alternate!==null&&n.alternate.child===n.child,a=0,t=0;if(e)for(var i=n.child;i!==null;)a|=i.lanes|i.childLanes,t|=i.subtreeFlags&65011712,t|=i.flags&65011712,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)a|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=t,n.childLanes=a,e}function MA(n,e,a){var t=e.pendingProps;switch(Oo(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(e),null;case 1:return dn(e),null;case 3:return a=e.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ne(vn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Yt(e)?Ge(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,rc())),dn(e),null;case 26:return a=e.memoizedState,n===null?(Ge(e),a!==null?(dn(e),Ms(e,a)):(dn(e),e.flags&=-16777217)):a?a!==n.memoizedState?(Ge(e),dn(e),Ms(e,a)):(dn(e),e.flags&=-16777217):(n.memoizedProps!==t&&Ge(e),dn(e),e.flags&=-16777217),null;case 27:Oi(e),a=J.current;var i=e.type;if(n!==null&&e.stateNode!=null)n.memoizedProps!==t&&Ge(e);else{if(!t){if(e.stateNode===null)throw Error(m(166));return dn(e),null}n=K.current,Yt(e)?oc(e):(n=My(i,t,a),e.stateNode=n,Ge(e))}return dn(e),null;case 5:if(Oi(e),a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==t&&Ge(e);else{if(!t){if(e.stateNode===null)throw Error(m(166));return dn(e),null}if(n=K.current,Yt(e))oc(e);else{switch(i=Wl(J.current),n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof t.is=="string"?i.createElement("select",{is:t.is}):i.createElement("select"),t.multiple?n.multiple=!0:t.size&&(n.size=t.size);break;default:n=typeof t.is=="string"?i.createElement(a,{is:t.is}):i.createElement(a)}}n[zn]=e,n[xn]=t;n:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break n;for(;i.sibling===null;){if(i.return===null||i.return===e)break n;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=n;n:switch(Cn(n,a,t),a){case"button":case"input":case"select":case"textarea":n=!!t.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&Ge(e)}}return dn(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==t&&Ge(e);else{if(typeof t!="string"&&e.stateNode===null)throw Error(m(166));if(n=J.current,Yt(e)){if(n=e.stateNode,a=e.memoizedProps,t=null,i=Jn,i!==null)switch(i.tag){case 27:case 5:t=i.memoizedProps}n[zn]=e,n=!!(n.nodeValue===a||t!==null&&t.suppressHydrationWarning===!0||by(n.nodeValue,a)),n||va(e)}else n=Wl(n).createTextNode(t),n[zn]=e,e.stateNode=n}return dn(e),null;case 13:if(t=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=Yt(e),t!==null&&t.dehydrated!==null){if(n===null){if(!i)throw Error(m(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[zn]=e}else Kt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;dn(e),i=!1}else i=rc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ke(e),e):(Ke(e),null)}if(Ke(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=t!==null,n=n!==null&&n.memoizedState!==null,a){t=e.child,i=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(i=t.alternate.memoizedState.cachePool.pool);var l=null;t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(t.flags|=2048)}return a!==n&&a&&(e.child.flags|=8192),rl(e,e.updateQueue),dn(e),null;case 4:return Je(),n===null&&Lu(e.stateNode.containerInfo),dn(e),null;case 10:return Ne(e.type),dn(e),null;case 19:if(H(pn),i=e.memoizedState,i===null)return dn(e),null;if(t=(e.flags&128)!==0,l=i.rendering,l===null)if(t)Qt(i,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=tl(n),l!==null){for(e.flags|=128,Qt(i,!1),n=l.updateQueue,e.updateQueue=n,rl(e,n),e.subtreeFlags=0,n=a,a=e.child;a!==null;)ic(a,n),a=a.sibling;return R(pn,pn.current&1|2),e.child}n=n.sibling}i.tail!==null&&Ee()>yl&&(e.flags|=128,t=!0,Qt(i,!1),e.lanes=4194304)}else{if(!t)if(n=tl(l),n!==null){if(e.flags|=128,t=!0,n=n.updateQueue,e.updateQueue=n,rl(e,n),Qt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!$)return dn(e),null}else 2*Ee()-i.renderingStartTime>yl&&a!==536870912&&(e.flags|=128,t=!0,Qt(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(n=i.last,n!==null?n.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ee(),e.sibling=null,n=pn.current,R(pn,t?n&1|2:n&1),e):(dn(e),null);case 22:case 23:return Ke(e),No(),t=e.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(e.flags|=8192):t&&(e.flags|=8192),t?(a&536870912)!==0&&(e.flags&128)===0&&(dn(e),e.subtreeFlags&6&&(e.flags|=8192)):dn(e),a=e.updateQueue,a!==null&&rl(e,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(e.flags|=2048),n!==null&&H(Da),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ne(vn),dn(e),null;case 25:return null;case 30:return null}throw Error(m(156,e.tag))}function LA(n,e){switch(Oo(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ne(vn),Je(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return Oi(e),null;case 13:if(Ke(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(m(340));Kt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return H(pn),null;case 4:return Je(),null;case 10:return Ne(e.type),null;case 22:case 23:return Ke(e),No(),n!==null&&H(Da),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Ne(vn),null;case 25:return null;default:return null}}function Ls(n,e){switch(Oo(e),e.tag){case 3:Ne(vn),Je();break;case 26:case 27:case 5:Oi(e);break;case 4:Je();break;case 13:Ke(e);break;case 19:H(pn);break;case 10:Ne(e.type);break;case 22:case 23:Ke(e),No(),n!==null&&H(Da);break;case 24:Ne(vn)}}function Ft(n,e){try{var a=e.updateQueue,t=a!==null?a.lastEffect:null;if(t!==null){var i=t.next;a=i;do{if((a.tag&n)===n){t=void 0;var l=a.create,o=a.inst;t=l(),o.destroy=t}a=a.next}while(a!==i)}}catch(u){cn(e,e.return,u)}}function $e(n,e,a){try{var t=e.updateQueue,i=t!==null?t.lastEffect:null;if(i!==null){var l=i.next;t=l;do{if((t.tag&n)===n){var o=t.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,i=e;var r=a,A=u;try{A()}catch(g){cn(i,r,g)}}}t=t.next}while(t!==l)}}catch(g){cn(e,e.return,g)}}function ws(n){var e=n.updateQueue;if(e!==null){var a=n.stateNode;try{Oc(e,a)}catch(t){cn(n,n.return,t)}}}function Ns(n,e,a){a.props=Ba(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(t){cn(n,e,t)}}function $t(n,e){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof a=="function"?n.refCleanup=a(t):a.current=t}}catch(i){cn(n,e,i)}}function be(n,e){var a=n.ref,t=n.refCleanup;if(a!==null)if(typeof t=="function")try{t()}catch(i){cn(n,e,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){cn(n,e,i)}else a.current=null}function Ys(n){var e=n.type,a=n.memoizedProps,t=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break n;case"img":a.src?t.src=a.src:a.srcSet&&(t.srcset=a.srcSet)}}catch(i){cn(n,n.return,i)}}function uu(n,e,a){try{var t=n.stateNode;FA(t,n.type,a,e),t[xn]=e}catch(i){cn(n,n.return,i)}}function Ks(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ua(n.type)||n.tag===4}function ru(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Ks(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ua(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cu(n,e,a){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=El));else if(t!==4&&(t===27&&ua(n.type)&&(a=n.stateNode,e=null),n=n.child,n!==null))for(cu(n,e,a),n=n.sibling;n!==null;)cu(n,e,a),n=n.sibling}function cl(n,e,a){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?a.insertBefore(n,e):a.appendChild(n);else if(t!==4&&(t===27&&ua(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(cl(n,e,a),n=n.sibling;n!==null;)cl(n,e,a),n=n.sibling}function Cs(n){var e=n.stateNode,a=n.memoizedProps;try{for(var t=n.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Cn(e,t,a),e[zn]=n,e[xn]=a}catch(l){cn(n,n.return,l)}}var ke=!1,On=!1,su=!1,Gs=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function wA(n,e){if(n=n.containerInfo,Yu=Dl,n=Pr(n),uo(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var i=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break n}var o=0,u=-1,r=-1,A=0,g=0,E=n,h=null;e:for(;;){for(var d;E!==a||i!==0&&E.nodeType!==3||(u=o+i),E!==l||t!==0&&E.nodeType!==3||(r=o+t),E.nodeType===3&&(o+=E.nodeValue.length),(d=E.firstChild)!==null;)h=E,E=d;for(;;){if(E===n)break e;if(h===a&&++A===i&&(u=o),h===l&&++g===t&&(r=o),(d=E.nextSibling)!==null)break;E=h,h=E.parentNode}E=d}a=u===-1||r===-1?null:{start:u,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ku={focusedElem:n,selectionRange:a},Dl=!1,Mn=e;Mn!==null;)if(e=Mn,n=e.child,(e.subtreeFlags&1024)!==0&&n!==null)n.return=e,Mn=n;else for(;Mn!==null;){switch(e=Mn,l=e.alternate,n=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,a=e,i=l.memoizedProps,l=l.memoizedState,t=a.stateNode;try{var U=Ba(a.type,i,a.elementType===a.type);n=t.getSnapshotBeforeUpdate(U,l),t.__reactInternalSnapshotBeforeUpdate=n}catch(C){cn(a,a.return,C)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,a=n.nodeType,a===9)ku(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ku(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(m(163))}if(n=e.sibling,n!==null){n.return=e.return,Mn=n;break}Mn=e.return}}function ks(n,e,a){var t=a.flags;switch(a.tag){case 0:case 11:case 15:na(n,a),t&4&&Ft(5,a);break;case 1:if(na(n,a),t&4)if(n=a.stateNode,e===null)try{n.componentDidMount()}catch(o){cn(a,a.return,o)}else{var i=Ba(a.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(i,e,n.__reactInternalSnapshotBeforeUpdate)}catch(o){cn(a,a.return,o)}}t&64&&ws(a),t&512&&$t(a,a.return);break;case 3:if(na(n,a),t&64&&(n=a.updateQueue,n!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Oc(n,e)}catch(o){cn(a,a.return,o)}}break;case 27:e===null&&t&4&&Cs(a);case 26:case 5:na(n,a),e===null&&t&4&&Ys(a),t&512&&$t(a,a.return);break;case 12:na(n,a);break;case 13:na(n,a),t&4&&Is(n,a),t&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=IA.bind(null,a),lh(n,a))));break;case 22:if(t=a.memoizedState!==null||ke,!t){e=e!==null&&e.memoizedState!==null||On,i=ke;var l=On;ke=t,(On=e)&&!l?ea(n,a,(a.subtreeFlags&8772)!==0):na(n,a),ke=i,On=l}break;case 30:break;default:na(n,a)}}function zs(n){var e=n.alternate;e!==null&&(n.alternate=null,zs(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Jl(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var hn=null,jn=!1;function ze(n,e,a){for(a=a.child;a!==null;)Us(n,e,a),a=a.sibling}function Us(n,e,a){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:On||be(a,e),ze(n,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:On||be(a,e);var t=hn,i=jn;ua(a.type)&&(hn=a.stateNode,jn=!1),ze(n,e,a),ri(a.stateNode),hn=t,jn=i;break;case 5:On||be(a,e);case 6:if(t=hn,i=jn,hn=null,ze(n,e,a),hn=t,jn=i,hn!==null)if(jn)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(l){cn(a,e,l)}else try{hn.removeChild(a.stateNode)}catch(l){cn(a,e,l)}break;case 18:hn!==null&&(jn?(n=hn,Hy(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),mi(n)):Hy(hn,a.stateNode));break;case 4:t=hn,i=jn,hn=a.stateNode.containerInfo,jn=!0,ze(n,e,a),hn=t,jn=i;break;case 0:case 11:case 14:case 15:On||$e(2,a,e),On||$e(4,a,e),ze(n,e,a);break;case 1:On||(be(a,e),t=a.stateNode,typeof t.componentWillUnmount=="function"&&Ns(a,e,t)),ze(n,e,a);break;case 21:ze(n,e,a);break;case 22:On=(t=On)||a.memoizedState!==null,ze(n,e,a),On=t;break;default:ze(n,e,a)}}function Is(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{mi(n)}catch(a){cn(e,e.return,a)}}function NA(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Gs),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Gs),e;default:throw Error(m(435,n.tag))}}function yu(n,e){var a=NA(n);e.forEach(function(t){var i=JA.bind(null,n,t);a.has(t)||(a.add(t),t.then(i,i))})}function ne(n,e){var a=e.deletions;if(a!==null)for(var t=0;t<a.length;t++){var i=a[t],l=n,o=e,u=o;n:for(;u!==null;){switch(u.tag){case 27:if(ua(u.type)){hn=u.stateNode,jn=!1;break n}break;case 5:hn=u.stateNode,jn=!1;break n;case 3:case 4:hn=u.stateNode.containerInfo,jn=!0;break n}u=u.return}if(hn===null)throw Error(m(160));Us(l,o,i),hn=null,jn=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Js(e,n),e=e.sibling}var me=null;function Js(n,e){var a=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ne(e,n),ee(n),t&4&&($e(3,n,n.return),Ft(3,n),$e(5,n,n.return));break;case 1:ne(e,n),ee(n),t&512&&(On||a===null||be(a,a.return)),t&64&&ke&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:var i=me;if(ne(e,n),ee(n),t&512&&(On||a===null||be(a,a.return)),t&4){var l=a!==null?a.memoizedState:null;if(t=n.memoizedState,a===null)if(t===null)if(n.stateNode===null){n:{t=n.type,a=n.memoizedProps,i=i.ownerDocument||i;e:switch(t){case"title":l=i.getElementsByTagName("title")[0],(!l||l[bt]||l[zn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(t),i.head.insertBefore(l,i.querySelector("head > title"))),Cn(l,t,a),l[zn]=n,Hn(l),t=l;break n;case"link":var o=Cy("link","href",i).get(t+(a.href||""));if(o){for(var u=0;u<o.length;u++)if(l=o[u],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(u,1);break e}}l=i.createElement(t),Cn(l,t,a),i.head.appendChild(l);break;case"meta":if(o=Cy("meta","content",i).get(t+(a.content||""))){for(u=0;u<o.length;u++)if(l=o[u],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(u,1);break e}}l=i.createElement(t),Cn(l,t,a),i.head.appendChild(l);break;default:throw Error(m(468,t))}l[zn]=n,Hn(l),t=l}n.stateNode=t}else Gy(i,n.type,n.stateNode);else n.stateNode=Ky(i,t,n.memoizedProps);else l!==t?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,t===null?Gy(i,n.type,n.stateNode):Ky(i,t,n.memoizedProps)):t===null&&n.stateNode!==null&&uu(n,n.memoizedProps,a.memoizedProps)}break;case 27:ne(e,n),ee(n),t&512&&(On||a===null||be(a,a.return)),a!==null&&t&4&&uu(n,n.memoizedProps,a.memoizedProps);break;case 5:if(ne(e,n),ee(n),t&512&&(On||a===null||be(a,a.return)),n.flags&32){i=n.stateNode;try{Ja(i,"")}catch(d){cn(n,n.return,d)}}t&4&&n.stateNode!=null&&(i=n.memoizedProps,uu(n,i,a!==null?a.memoizedProps:i)),t&1024&&(su=!0);break;case 6:if(ne(e,n),ee(n),t&4){if(n.stateNode===null)throw Error(m(162));t=n.memoizedProps,a=n.stateNode;try{a.nodeValue=t}catch(d){cn(n,n.return,d)}}break;case 3:if(vl=null,i=me,me=Tl(e.containerInfo),ne(e,n),me=i,ee(n),t&4&&a!==null&&a.memoizedState.isDehydrated)try{mi(e.containerInfo)}catch(d){cn(n,n.return,d)}su&&(su=!1,xs(n));break;case 4:t=me,me=Tl(n.stateNode.containerInfo),ne(e,n),ee(n),me=t;break;case 12:ne(e,n),ee(n);break;case 13:ne(e,n),ee(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gu=Ee()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,yu(n,t)));break;case 22:i=n.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,A=ke,g=On;if(ke=A||i,On=g||r,ne(e,n),On=g,ke=A,ee(n),t&8192)n:for(e=n.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||r||ke||On||Ma(n)),a=null,e=n;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(l=r.stateNode,i)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=r.stateNode;var E=r.memoizedProps.style,h=E!=null&&E.hasOwnProperty("display")?E.display:null;u.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(d){cn(r,r.return,d)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(d){cn(r,r.return,d)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}t&4&&(t=n.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,yu(n,a))));break;case 19:ne(e,n),ee(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,yu(n,t)));break;case 30:break;case 21:break;default:ne(e,n),ee(n)}}function ee(n){var e=n.flags;if(e&2){try{for(var a,t=n.return;t!==null;){if(Ks(t)){a=t;break}t=t.return}if(a==null)throw Error(m(160));switch(a.tag){case 27:var i=a.stateNode,l=ru(n);cl(n,l,i);break;case 5:var o=a.stateNode;a.flags&32&&(Ja(o,""),a.flags&=-33);var u=ru(n);cl(n,u,o);break;case 3:case 4:var r=a.stateNode.containerInfo,A=ru(n);cu(n,A,r);break;default:throw Error(m(161))}}catch(g){cn(n,n.return,g)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function xs(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;xs(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function na(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ks(n,e.alternate,e),e=e.sibling}function Ma(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:$e(4,e,e.return),Ma(e);break;case 1:be(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Ns(e,e.return,a),Ma(e);break;case 27:ri(e.stateNode);case 26:case 5:be(e,e.return),Ma(e);break;case 22:e.memoizedState===null&&Ma(e);break;case 30:Ma(e);break;default:Ma(e)}n=n.sibling}}function ea(n,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var t=e.alternate,i=n,l=e,o=l.flags;switch(l.tag){case 0:case 11:case 15:ea(i,l,a),Ft(4,l);break;case 1:if(ea(i,l,a),t=l,i=t.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){cn(t,t.return,A)}if(t=l,i=t.updateQueue,i!==null){var u=t.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)Sc(r[i],u)}catch(A){cn(t,t.return,A)}}a&&o&64&&ws(l),$t(l,l.return);break;case 27:Cs(l);case 26:case 5:ea(i,l,a),a&&t===null&&o&4&&Ys(l),$t(l,l.return);break;case 12:ea(i,l,a);break;case 13:ea(i,l,a),a&&o&4&&Is(i,l);break;case 22:l.memoizedState===null&&ea(i,l,a),$t(l,l.return);break;case 30:break;default:ea(i,l,a)}e=e.sibling}}function fu(n,e){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&kt(a))}function Au(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&kt(n))}function ve(n,e,a,t){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vs(n,e,a,t),e=e.sibling}function Vs(n,e,a,t){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ve(n,e,a,t),i&2048&&Ft(9,e);break;case 1:ve(n,e,a,t);break;case 3:ve(n,e,a,t),i&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&kt(n)));break;case 12:if(i&2048){ve(n,e,a,t),n=e.stateNode;try{var l=e.memoizedProps,o=l.id,u=l.onPostCommit;typeof u=="function"&&u(o,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(r){cn(e,e.return,r)}}else ve(n,e,a,t);break;case 13:ve(n,e,a,t);break;case 23:break;case 22:l=e.stateNode,o=e.alternate,e.memoizedState!==null?l._visibility&2?ve(n,e,a,t):ni(n,e):l._visibility&2?ve(n,e,a,t):(l._visibility|=2,ut(n,e,a,t,(e.subtreeFlags&10256)!==0)),i&2048&&fu(o,e);break;case 24:ve(n,e,a,t),i&2048&&Au(e.alternate,e);break;default:ve(n,e,a,t)}}function ut(n,e,a,t,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=n,o=e,u=a,r=t,A=o.flags;switch(o.tag){case 0:case 11:case 15:ut(l,o,u,r,i),Ft(8,o);break;case 23:break;case 22:var g=o.stateNode;o.memoizedState!==null?g._visibility&2?ut(l,o,u,r,i):ni(l,o):(g._visibility|=2,ut(l,o,u,r,i)),i&&A&2048&&fu(o.alternate,o);break;case 24:ut(l,o,u,r,i),i&&A&2048&&Au(o.alternate,o);break;default:ut(l,o,u,r,i)}e=e.sibling}}function ni(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=n,t=e,i=t.flags;switch(t.tag){case 22:ni(a,t),i&2048&&fu(t.alternate,t);break;case 24:ni(a,t),i&2048&&Au(t.alternate,t);break;default:ni(a,t)}e=e.sibling}}var ei=8192;function rt(n){if(n.subtreeFlags&ei)for(n=n.child;n!==null;)_s(n),n=n.sibling}function _s(n){switch(n.tag){case 26:rt(n),n.flags&ei&&n.memoizedState!==null&&Sh(me,n.memoizedState,n.memoizedProps);break;case 5:rt(n);break;case 3:case 4:var e=me;me=Tl(n.stateNode.containerInfo),rt(n),me=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=ei,ei=16777216,rt(n),ei=e):rt(n));break;default:rt(n)}}function js(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function ai(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var t=e[a];Mn=t,Ps(t,n)}js(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qs(n),n=n.sibling}function qs(n){switch(n.tag){case 0:case 11:case 15:ai(n),n.flags&2048&&$e(9,n,n.return);break;case 3:ai(n);break;case 12:ai(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,sl(n)):ai(n);break;default:ai(n)}}function sl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var t=e[a];Mn=t,Ps(t,n)}js(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:$e(8,e,e.return),sl(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,sl(e));break;default:sl(e)}n=n.sibling}}function Ps(n,e){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:$e(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var t=a.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:kt(a.memoizedState.cache)}if(t=a.child,t!==null)t.return=a,Mn=t;else n:for(a=n;Mn!==null;){t=Mn;var i=t.sibling,l=t.return;if(zs(t),t===a){Mn=null;break n}if(i!==null){i.return=l,Mn=i;break n}Mn=l}}}var YA={getCacheForType:function(n){var e=Un(vn),a=e.data.get(n);return a===void 0&&(a=n(),e.data.set(n,a)),a}},KA=typeof WeakMap=="function"?WeakMap:Map,nn=0,yn=null,j=null,P=0,en=0,ae=null,aa=!1,ct=!1,hu=!1,Ue=0,gn=0,ta=0,La=0,du=0,fe=0,st=0,ti=null,qn=null,mu=!1,gu=0,yl=1/0,fl=null,ia=null,Kn=0,la=null,yt=null,ft=0,Su=0,Ou=null,Xs=null,ii=0,Eu=null;function te(){if((nn&2)!==0&&P!==0)return P&-P;if(S.T!==null){var n=$a;return n!==0?n:Du()}return yr()}function Zs(){fe===0&&(fe=(P&536870912)===0||$?ur():536870912);var n=ye.current;return n!==null&&(n.flags|=32),fe}function ie(n,e,a){(n===yn&&(en===2||en===9)||n.cancelPendingCommit!==null)&&(At(n,0),oa(n,P,fe,!1)),Tt(n,a),((nn&2)===0||n!==yn)&&(n===yn&&((nn&2)===0&&(La|=a),gn===4&&oa(n,P,fe,!1)),pe(n))}function Qs(n,e,a){if((nn&6)!==0)throw Error(m(327));var t=!a&&(e&124)===0&&(e&n.expiredLanes)===0||Wt(n,e),i=t?kA(n,e):bu(n,e,!0),l=t;do{if(i===0){ct&&!t&&oa(n,e,0,!1);break}else{if(a=n.current.alternate,l&&!CA(a)){i=bu(n,e,!1),l=!1;continue}if(i===2){if(l=e,n.errorRecoveryDisabledLanes&l)var o=0;else o=n.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;n:{var u=n;i=ti;var r=u.current.memoizedState.isDehydrated;if(r&&(At(u,o).flags|=256),o=bu(u,o,!1),o!==2){if(hu&&!r){u.errorRecoveryDisabledLanes|=l,La|=l,i=4;break n}l=qn,qn=i,l!==null&&(qn===null?qn=l:qn.push.apply(qn,l))}i=o}if(l=!1,i!==2)continue}}if(i===1){At(n,0),oa(n,e,0,!0);break}n:{switch(t=n,l=i,l){case 0:case 1:throw Error(m(345));case 4:if((e&4194048)!==e)break;case 6:oa(t,e,fe,!aa);break n;case 2:qn=null;break;case 3:case 5:break;default:throw Error(m(329))}if((e&62914560)===e&&(i=gu+300-Ee(),10<i)){if(oa(t,e,fe,!aa),bi(t,0,!0)!==0)break n;t.timeoutHandle=Ry(Fs.bind(null,t,a,qn,fl,mu,e,fe,La,st,aa,l,2,-0,0),i);break n}Fs(t,a,qn,fl,mu,e,fe,La,st,aa,l,0,-0,0)}}break}while(!0);pe(n)}function Fs(n,e,a,t,i,l,o,u,r,A,g,E,h,d){if(n.timeoutHandle=-1,E=e.subtreeFlags,(E&8192||(E&16785408)===16785408)&&(yi={stylesheets:null,count:0,unsuspend:gh},_s(e),E=Oh(),E!==null)){n.cancelPendingCommit=E(ly.bind(null,n,e,l,a,t,i,o,u,r,g,1,h,d)),oa(n,l,o,!A);return}ly(n,e,l,a,t,i,o,u,r)}function CA(n){for(var e=n;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var t=0;t<a.length;t++){var i=a[t],l=i.getSnapshot;i=i.value;try{if(!Fn(l(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oa(n,e,a,t){e&=~du,e&=~La,n.suspendedLanes|=e,n.pingedLanes&=~e,t&&(n.warmLanes|=e),t=n.expirationTimes;for(var i=e;0<i;){var l=31-Qn(i),o=1<<l;t[l]=-1,i&=~o}a!==0&&cr(n,a,e)}function Al(){return(nn&6)===0?(li(0),!1):!0}function Wu(){if(j!==null){if(en===0)var n=j.return;else n=j,we=pa=null,ko(n),lt=null,Xt=0,n=j;for(;n!==null;)Ls(n.alternate,n),n=n.return;j=null}}function At(n,e){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,nh(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Wu(),yn=n,j=a=Be(n.current,null),P=e,en=0,ae=null,aa=!1,ct=Wt(n,e),hu=!1,st=fe=du=La=ta=gn=0,qn=ti=null,mu=!1,(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var i=31-Qn(t),l=1<<i;e|=n[i],t&=~l}return Ue=e,Ki(),a}function $s(n,e){V=null,S.H=nl,e===Ut||e===Vi?(e=mc(),en=3):e===Ac?(e=mc(),en=4):en=e===gs?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ae=e,j===null&&(gn=1,ll(n,ue(e,n.current)))}function ny(){var n=S.H;return S.H=nl,n===null?nl:n}function ey(){var n=S.A;return S.A=YA,n}function Tu(){gn=4,aa||(P&4194048)!==P&&ye.current!==null||(ct=!0),(ta&134217727)===0&&(La&134217727)===0||yn===null||oa(yn,P,fe,!1)}function bu(n,e,a){var t=nn;nn|=2;var i=ny(),l=ey();(yn!==n||P!==e)&&(fl=null,At(n,e)),e=!1;var o=gn;n:do try{if(en!==0&&j!==null){var u=j,r=ae;switch(en){case 8:Wu(),o=6;break n;case 3:case 2:case 9:case 6:ye.current===null&&(e=!0);var A=en;if(en=0,ae=null,ht(n,u,r,A),a&&ct){o=0;break n}break;default:A=en,en=0,ae=null,ht(n,u,r,A)}}GA(),o=gn;break}catch(g){$s(n,g)}while(!0);return e&&n.shellSuspendCounter++,we=pa=null,nn=t,S.H=i,S.A=l,j===null&&(yn=null,P=0,Ki()),o}function GA(){for(;j!==null;)ay(j)}function kA(n,e){var a=nn;nn|=2;var t=ny(),i=ey();yn!==n||P!==e?(fl=null,yl=Ee()+500,At(n,e)):ct=Wt(n,e);n:do try{if(en!==0&&j!==null){e=j;var l=ae;e:switch(en){case 1:en=0,ae=null,ht(n,e,l,1);break;case 2:case 9:if(hc(l)){en=0,ae=null,ty(e);break}e=function(){en!==2&&en!==9||yn!==n||(en=7),pe(n)},l.then(e,e);break n;case 3:en=7;break n;case 4:en=5;break n;case 7:hc(l)?(en=0,ae=null,ty(e)):(en=0,ae=null,ht(n,e,l,7));break;case 5:var o=null;switch(j.tag){case 26:o=j.memoizedState;case 5:case 27:var u=j;if(!o||ky(o)){en=0,ae=null;var r=u.sibling;if(r!==null)j=r;else{var A=u.return;A!==null?(j=A,hl(A)):j=null}break e}}en=0,ae=null,ht(n,e,l,5);break;case 6:en=0,ae=null,ht(n,e,l,6);break;case 8:Wu(),gn=6;break n;default:throw Error(m(462))}}zA();break}catch(g){$s(n,g)}while(!0);return we=pa=null,S.H=t,S.A=i,nn=a,j!==null?0:(yn=null,P=0,Ki(),gn)}function zA(){for(;j!==null&&!uf();)ay(j)}function ay(n){var e=Bs(n.alternate,n,Ue);n.memoizedProps=n.pendingProps,e===null?hl(n):j=e}function ty(n){var e=n,a=e.alternate;switch(e.tag){case 15:case 0:e=bs(a,e,e.pendingProps,e.type,void 0,P);break;case 11:e=bs(a,e,e.pendingProps,e.type.render,e.ref,P);break;case 5:ko(e);default:Ls(a,e),e=j=ic(e,Ue),e=Bs(a,e,Ue)}n.memoizedProps=n.pendingProps,e===null?hl(n):j=e}function ht(n,e,a,t){we=pa=null,ko(e),lt=null,Xt=0;var i=e.return;try{if(HA(n,i,e,a,P)){gn=1,ll(n,ue(a,n.current)),j=null;return}}catch(l){if(i!==null)throw j=i,l;gn=1,ll(n,ue(a,n.current)),j=null;return}e.flags&32768?($||t===1?n=!0:ct||(P&536870912)!==0?n=!1:(aa=n=!0,(t===2||t===9||t===3||t===6)&&(t=ye.current,t!==null&&t.tag===13&&(t.flags|=16384))),iy(e,n)):hl(e)}function hl(n){var e=n;do{if((e.flags&32768)!==0){iy(e,aa);return}n=e.return;var a=MA(e.alternate,e,Ue);if(a!==null){j=a;return}if(e=e.sibling,e!==null){j=e;return}j=e=n}while(e!==null);gn===0&&(gn=5)}function iy(n,e){do{var a=LA(n.alternate,n);if(a!==null){a.flags&=32767,j=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(n=n.sibling,n!==null)){j=n;return}j=n=a}while(n!==null);gn=6,j=null}function ly(n,e,a,t,i,l,o,u,r){n.cancelPendingCommit=null;do dl();while(Kn!==0);if((nn&6)!==0)throw Error(m(327));if(e!==null){if(e===n.current)throw Error(m(177));if(l=e.lanes|e.childLanes,l|=fo,gf(n,a,l,o,u,r),n===yn&&(j=yn=null,P=0),yt=e,la=n,ft=a,Su=l,Ou=i,Xs=t,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,xA(Ei,function(){return sy(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||t){t=S.T,S.T=null,i=D.p,D.p=2,o=nn,nn|=4;try{wA(n,e,a)}finally{nn=o,D.p=i,S.T=t}}Kn=1,oy(),uy(),ry()}}function oy(){if(Kn===1){Kn=0;var n=la,e=yt,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var t=D.p;D.p=2;var i=nn;nn|=4;try{Js(e,n);var l=Ku,o=Pr(n.containerInfo),u=l.focusedElem,r=l.selectionRange;if(o!==u&&u&&u.ownerDocument&&qr(u.ownerDocument.documentElement,u)){if(r!==null&&uo(u)){var A=r.start,g=r.end;if(g===void 0&&(g=A),"selectionStart"in u)u.selectionStart=A,u.selectionEnd=Math.min(g,u.value.length);else{var E=u.ownerDocument||document,h=E&&E.defaultView||window;if(h.getSelection){var d=h.getSelection(),U=u.textContent.length,C=Math.min(r.start,U),on=r.end===void 0?C:Math.min(r.end,U);!d.extend&&C>on&&(o=on,on=C,C=o);var y=jr(u,C),s=jr(u,on);if(y&&s&&(d.rangeCount!==1||d.anchorNode!==y.node||d.anchorOffset!==y.offset||d.focusNode!==s.node||d.focusOffset!==s.offset)){var f=E.createRange();f.setStart(y.node,y.offset),d.removeAllRanges(),C>on?(d.addRange(f),d.extend(s.node,s.offset)):(f.setEnd(s.node,s.offset),d.addRange(f))}}}}for(E=[],d=u;d=d.parentNode;)d.nodeType===1&&E.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<E.length;u++){var O=E[u];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Dl=!!Yu,Ku=Yu=null}finally{nn=i,D.p=t,S.T=a}}n.current=e,Kn=2}}function uy(){if(Kn===2){Kn=0;var n=la,e=yt,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var t=D.p;D.p=2;var i=nn;nn|=4;try{ks(n,e.alternate,e)}finally{nn=i,D.p=t,S.T=a}}Kn=3}}function ry(){if(Kn===4||Kn===3){Kn=0,rf();var n=la,e=yt,a=ft,t=Xs;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Kn=5:(Kn=0,yt=la=null,cy(n,n.pendingLanes));var i=n.pendingLanes;if(i===0&&(ia=null),Ul(a),e=e.stateNode,Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Et,e,void 0,(e.current.flags&128)===128)}catch{}if(t!==null){e=S.T,i=D.p,D.p=2,S.T=null;try{for(var l=n.onRecoverableError,o=0;o<t.length;o++){var u=t[o];l(u.value,{componentStack:u.stack})}}finally{S.T=e,D.p=i}}(ft&3)!==0&&dl(),pe(n),i=n.pendingLanes,(a&4194090)!==0&&(i&42)!==0?n===Eu?ii++:(ii=0,Eu=n):ii=0,li(0)}}function cy(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,kt(e)))}function dl(n){return oy(),uy(),ry(),sy()}function sy(){if(Kn!==5)return!1;var n=la,e=Su;Su=0;var a=Ul(ft),t=S.T,i=D.p;try{D.p=32>a?32:a,S.T=null,a=Ou,Ou=null;var l=la,o=ft;if(Kn=0,yt=la=null,ft=0,(nn&6)!==0)throw Error(m(331));var u=nn;if(nn|=4,qs(l.current),Vs(l,l.current,o,a),nn=u,li(0,!1),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Et,l)}catch{}return!0}finally{D.p=i,S.T=t,cy(n,e)}}function yy(n,e,a){e=ue(a,e),e=Fo(n.stateNode,e,2),n=Xe(n,e,2),n!==null&&(Tt(n,2),pe(n))}function cn(n,e,a){if(n.tag===3)yy(n,n,a);else for(;e!==null;){if(e.tag===3){yy(e,n,a);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(ia===null||!ia.has(t))){n=ue(a,n),a=ds(2),t=Xe(e,a,2),t!==null&&(ms(a,t,e,n),Tt(t,2),pe(t));break}}e=e.return}}function vu(n,e,a){var t=n.pingCache;if(t===null){t=n.pingCache=new KA;var i=new Set;t.set(e,i)}else i=t.get(e),i===void 0&&(i=new Set,t.set(e,i));i.has(a)||(hu=!0,i.add(a),n=UA.bind(null,n,e,a),e.then(n,n))}function UA(n,e,a){var t=n.pingCache;t!==null&&t.delete(e),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,yn===n&&(P&a)===a&&(gn===4||gn===3&&(P&62914560)===P&&300>Ee()-gu?(nn&2)===0&&At(n,0):du|=a,st===P&&(st=0)),pe(n)}function fy(n,e){e===0&&(e=rr()),n=Xa(n,e),n!==null&&(Tt(n,e),pe(n))}function IA(n){var e=n.memoizedState,a=0;e!==null&&(a=e.retryLane),fy(n,a)}function JA(n,e){var a=0;switch(n.tag){case 13:var t=n.stateNode,i=n.memoizedState;i!==null&&(a=i.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(m(314))}t!==null&&t.delete(e),fy(n,a)}function xA(n,e){return Cl(n,e)}var ml=null,dt=null,pu=!1,gl=!1,Ru=!1,wa=0;function pe(n){n!==dt&&n.next===null&&(dt===null?ml=dt=n:dt=dt.next=n),gl=!0,pu||(pu=!0,_A())}function li(n,e){if(!Ru&&gl){Ru=!0;do for(var a=!1,t=ml;t!==null;){if(n!==0){var i=t.pendingLanes;if(i===0)var l=0;else{var o=t.suspendedLanes,u=t.pingedLanes;l=(1<<31-Qn(42|n)+1)-1,l&=i&~(o&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,my(t,l))}else l=P,l=bi(t,t===yn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||Wt(t,l)||(a=!0,my(t,l));t=t.next}while(a);Ru=!1}}function VA(){Ay()}function Ay(){gl=pu=!1;var n=0;wa!==0&&($A()&&(n=wa),wa=0);for(var e=Ee(),a=null,t=ml;t!==null;){var i=t.next,l=hy(t,e);l===0?(t.next=null,a===null?ml=i:a.next=i,i===null&&(dt=a)):(a=t,(n!==0||(l&3)!==0)&&(gl=!0)),t=i}li(n)}function hy(n,e){for(var a=n.suspendedLanes,t=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var o=31-Qn(l),u=1<<o,r=i[o];r===-1?((u&a)===0||(u&t)!==0)&&(i[o]=mf(u,e)):r<=e&&(n.expiredLanes|=u),l&=~u}if(e=yn,a=P,a=bi(n,n===e?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,a===0||n===e&&(en===2||en===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&Gl(t),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Wt(n,a)){if(e=a&-a,e===n.callbackPriority)return e;switch(t!==null&&Gl(t),Ul(a)){case 2:case 8:a=lr;break;case 32:a=Ei;break;case 268435456:a=or;break;default:a=Ei}return t=dy.bind(null,n),a=Cl(a,t),n.callbackPriority=e,n.callbackNode=a,e}return t!==null&&t!==null&&Gl(t),n.callbackPriority=2,n.callbackNode=null,2}function dy(n,e){if(Kn!==0&&Kn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(dl()&&n.callbackNode!==a)return null;var t=P;return t=bi(n,n===yn?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(Qs(n,t,e),hy(n,Ee()),n.callbackNode!=null&&n.callbackNode===a?dy.bind(null,n):null)}function my(n,e){if(dl())return null;Qs(n,e,!0)}function _A(){eh(function(){(nn&6)!==0?Cl(ir,VA):Ay()})}function Du(){return wa===0&&(wa=ur()),wa}function gy(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Hi(""+n)}function Sy(n,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,n.id&&a.setAttribute("form",n.id),e.parentNode.insertBefore(a,e),n=new FormData(n),a.parentNode.removeChild(a),n}function jA(n,e,a,t,i){if(e==="submit"&&a&&a.stateNode===i){var l=gy((i[xn]||null).action),o=t.submitter;o&&(e=(e=o[xn]||null)?gy(e.formAction):o.getAttribute("formAction"),e!==null&&(l=e,o=null));var u=new wi("action","action",null,t,i);n.push({event:u,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(wa!==0){var r=o?Sy(i,o):new FormData(i);qo(a,{pending:!0,data:r,method:i.method,action:l},null,r)}}else typeof l=="function"&&(u.preventDefault(),r=o?Sy(i,o):new FormData(i),qo(a,{pending:!0,data:r,method:i.method,action:l},l,r))},currentTarget:i}]})}}for(var Hu=0;Hu<yo.length;Hu++){var Bu=yo[Hu],qA=Bu.toLowerCase(),PA=Bu[0].toUpperCase()+Bu.slice(1);de(qA,"on"+PA)}de(Qr,"onAnimationEnd"),de(Fr,"onAnimationIteration"),de($r,"onAnimationStart"),de("dblclick","onDoubleClick"),de("focusin","onFocus"),de("focusout","onBlur"),de(yA,"onTransitionRun"),de(fA,"onTransitionStart"),de(AA,"onTransitionCancel"),de(nc,"onTransitionEnd"),za("onMouseEnter",["mouseout","mouseover"]),za("onMouseLeave",["mouseout","mouseover"]),za("onPointerEnter",["pointerout","pointerover"]),za("onPointerLeave",["pointerout","pointerover"]),ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oi));function Oy(n,e){e=(e&4)!==0;for(var a=0;a<n.length;a++){var t=n[a],i=t.event;t=t.listeners;n:{var l=void 0;if(e)for(var o=t.length-1;0<=o;o--){var u=t[o],r=u.instance,A=u.currentTarget;if(u=u.listener,r!==l&&i.isPropagationStopped())break n;l=u,i.currentTarget=A;try{l(i)}catch(g){il(g)}i.currentTarget=null,l=r}else for(o=0;o<t.length;o++){if(u=t[o],r=u.instance,A=u.currentTarget,u=u.listener,r!==l&&i.isPropagationStopped())break n;l=u,i.currentTarget=A;try{l(i)}catch(g){il(g)}i.currentTarget=null,l=r}}}}function q(n,e){var a=e[Il];a===void 0&&(a=e[Il]=new Set);var t=n+"__bubble";a.has(t)||(Ey(e,n,2,!1),a.add(t))}function Mu(n,e,a){var t=0;e&&(t|=4),Ey(a,n,t,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Lu(n){if(!n[Sl]){n[Sl]=!0,Ar.forEach(function(a){a!=="selectionchange"&&(XA.has(a)||Mu(a,!1,n),Mu(a,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,Mu("selectionchange",!1,e))}}function Ey(n,e,a,t){switch(Vy(e)){case 2:var i=Th;break;case 8:i=bh;break;default:i=_u}a=i.bind(null,e,a,n),i=void 0,!Fl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),t?i!==void 0?n.addEventListener(e,a,{capture:!0,passive:i}):n.addEventListener(e,a,!0):i!==void 0?n.addEventListener(e,a,{passive:i}):n.addEventListener(e,a,!1)}function wu(n,e,a,t,i){var l=t;if((e&1)===0&&(e&2)===0&&t!==null)n:for(;;){if(t===null)return;var o=t.tag;if(o===3||o===4){var u=t.stateNode.containerInfo;if(u===i)break;if(o===4)for(o=t.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;u!==null;){if(o=Ca(u),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){t=l=o;continue n}u=u.parentNode}}t=t.return}Dr(function(){var A=l,g=Zl(a),E=[];n:{var h=ec.get(n);if(h!==void 0){var d=wi,U=n;switch(n){case"keypress":if(Mi(a)===0)break n;case"keydown":case"keyup":d=xf;break;case"focusin":U="focus",d=ao;break;case"focusout":U="blur",d=ao;break;case"beforeblur":case"afterblur":d=ao;break;case"click":if(a.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=jf;break;case Qr:case Fr:case $r:d=Yf;break;case nc:d=Pf;break;case"scroll":case"scrollend":d=Bf;break;case"wheel":d=Zf;break;case"copy":case"cut":case"paste":d=Cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=wr;break;case"toggle":case"beforetoggle":d=Ff}var C=(e&4)!==0,on=!C&&(n==="scroll"||n==="scrollend"),y=C?h!==null?h+"Capture":null:h;C=[];for(var s=A,f;s!==null;){var O=s;if(f=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||f===null||y===null||(O=pt(s,y),O!=null&&C.push(ui(s,O,f))),on)break;s=s.return}0<C.length&&(h=new d(h,U,null,a,g),E.push({event:h,listeners:C}))}}if((e&7)===0){n:{if(h=n==="mouseover"||n==="pointerover",d=n==="mouseout"||n==="pointerout",h&&a!==Xl&&(U=a.relatedTarget||a.fromElement)&&(Ca(U)||U[Ka]))break n;if((d||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,d?(U=a.relatedTarget||a.toElement,d=A,U=U?Ca(U):null,U!==null&&(on=z(U),C=U.tag,U!==on||C!==5&&C!==27&&C!==6)&&(U=null)):(d=null,U=A),d!==U)){if(C=Mr,O="onMouseLeave",y="onMouseEnter",s="mouse",(n==="pointerout"||n==="pointerover")&&(C=wr,O="onPointerLeave",y="onPointerEnter",s="pointer"),on=d==null?h:vt(d),f=U==null?h:vt(U),h=new C(O,s+"leave",d,a,g),h.target=on,h.relatedTarget=f,O=null,Ca(g)===A&&(C=new C(y,s+"enter",U,a,g),C.target=f,C.relatedTarget=on,O=C),on=O,d&&U)e:{for(C=d,y=U,s=0,f=C;f;f=mt(f))s++;for(f=0,O=y;O;O=mt(O))f++;for(;0<s-f;)C=mt(C),s--;for(;0<f-s;)y=mt(y),f--;for(;s--;){if(C===y||y!==null&&C===y.alternate)break e;C=mt(C),y=mt(y)}C=null}else C=null;d!==null&&Wy(E,h,d,C,!1),U!==null&&on!==null&&Wy(E,on,U,C,!0)}}n:{if(h=A?vt(A):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var B=Ur;else if(kr(h))if(Ir)B=rA;else{B=oA;var _=lA}else d=h.nodeName,!d||d.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?A&&Pl(A.elementType)&&(B=Ur):B=uA;if(B&&(B=B(n,A))){zr(E,B,a,g);break n}_&&_(n,h,A),n==="focusout"&&A&&h.type==="number"&&A.memoizedProps.value!=null&&ql(h,"number",h.value)}switch(_=A?vt(A):window,n){case"focusin":(kr(_)||_.contentEditable==="true")&&(ja=_,ro=A,Nt=null);break;case"focusout":Nt=ro=ja=null;break;case"mousedown":co=!0;break;case"contextmenu":case"mouseup":case"dragend":co=!1,Xr(E,a,g);break;case"selectionchange":if(sA)break;case"keydown":case"keyup":Xr(E,a,g)}var w;if(io)n:{switch(n){case"compositionstart":var G="onCompositionStart";break n;case"compositionend":G="onCompositionEnd";break n;case"compositionupdate":G="onCompositionUpdate";break n}G=void 0}else _a?Cr(n,a)&&(G="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(G="onCompositionStart");G&&(Nr&&a.locale!=="ko"&&(_a||G!=="onCompositionStart"?G==="onCompositionEnd"&&_a&&(w=Hr()):(_e=g,$l="value"in _e?_e.value:_e.textContent,_a=!0)),_=Ol(A,G),0<_.length&&(G=new Lr(G,n,null,a,g),E.push({event:G,listeners:_}),w?G.data=w:(w=Gr(a),w!==null&&(G.data=w)))),(w=nA?eA(n,a):aA(n,a))&&(G=Ol(A,"onBeforeInput"),0<G.length&&(_=new Lr("onBeforeInput","beforeinput",null,a,g),E.push({event:_,listeners:G}),_.data=w)),jA(E,n,A,a,g)}Oy(E,e)})}function ui(n,e,a){return{instance:n,listener:e,currentTarget:a}}function Ol(n,e){for(var a=e+"Capture",t=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=pt(n,a),i!=null&&t.unshift(ui(n,i,l)),i=pt(n,e),i!=null&&t.push(ui(n,i,l))),n.tag===3)return t;n=n.return}return[]}function mt(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Wy(n,e,a,t,i){for(var l=e._reactName,o=[];a!==null&&a!==t;){var u=a,r=u.alternate,A=u.stateNode;if(u=u.tag,r!==null&&r===t)break;u!==5&&u!==26&&u!==27||A===null||(r=A,i?(A=pt(a,l),A!=null&&o.unshift(ui(a,A,r))):i||(A=pt(a,l),A!=null&&o.push(ui(a,A,r)))),a=a.return}o.length!==0&&n.push({event:e,listeners:o})}var ZA=/\r\n?/g,QA=/\u0000|\uFFFD/g;function Ty(n){return(typeof n=="string"?n:""+n).replace(ZA,`
`).replace(QA,"")}function by(n,e){return e=Ty(e),Ty(n)===e}function El(){}function ln(n,e,a,t,i,l){switch(a){case"children":typeof t=="string"?e==="body"||e==="textarea"&&t===""||Ja(n,t):(typeof t=="number"||typeof t=="bigint")&&e!=="body"&&Ja(n,""+t);break;case"className":pi(n,"class",t);break;case"tabIndex":pi(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(n,a,t);break;case"style":pr(n,t,l);break;case"data":if(e!=="object"){pi(n,"data",t);break}case"src":case"href":if(t===""&&(e!=="a"||a!=="href")){n.removeAttribute(a);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(a);break}t=Hi(""+t),n.setAttribute(a,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(e!=="input"&&ln(n,e,"name",i.name,i,null),ln(n,e,"formEncType",i.formEncType,i,null),ln(n,e,"formMethod",i.formMethod,i,null),ln(n,e,"formTarget",i.formTarget,i,null)):(ln(n,e,"encType",i.encType,i,null),ln(n,e,"method",i.method,i,null),ln(n,e,"target",i.target,i,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(a);break}t=Hi(""+t),n.setAttribute(a,t);break;case"onClick":t!=null&&(n.onclick=El);break;case"onScroll":t!=null&&q("scroll",n);break;case"onScrollEnd":t!=null&&q("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(m(61));if(a=t.__html,a!=null){if(i.children!=null)throw Error(m(60));n.innerHTML=a}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}a=Hi(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(a,""+t):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":t===!0?n.setAttribute(a,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(a,t):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(a,t):n.removeAttribute(a);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(a):n.setAttribute(a,t);break;case"popover":q("beforetoggle",n),q("toggle",n),vi(n,"popover",t);break;case"xlinkActuate":De(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":De(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":De(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":De(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":De(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":De(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":De(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":De(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":De(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":vi(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Df.get(a)||a,vi(n,a,t))}}function Nu(n,e,a,t,i,l){switch(a){case"style":pr(n,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(m(61));if(a=t.__html,a!=null){if(i.children!=null)throw Error(m(60));n.innerHTML=a}}break;case"children":typeof t=="string"?Ja(n,t):(typeof t=="number"||typeof t=="bigint")&&Ja(n,""+t);break;case"onScroll":t!=null&&q("scroll",n);break;case"onScrollEnd":t!=null&&q("scrollend",n);break;case"onClick":t!=null&&(n.onclick=El);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hr.hasOwnProperty(a))n:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),l=n[xn]||null,l=l!=null?l[a]:null,typeof l=="function"&&n.removeEventListener(e,l,i),typeof t=="function")){typeof l!="function"&&l!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(e,t,i);break n}a in n?n[a]=t:t===!0?n.setAttribute(a,""):vi(n,a,t)}}}function Cn(n,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",n),q("load",n);var t=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":t=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ln(n,e,l,o,a,null)}}i&&ln(n,e,"srcSet",a.srcSet,a,null),t&&ln(n,e,"src",a.src,a,null);return;case"input":q("invalid",n);var u=l=o=i=null,r=null,A=null;for(t in a)if(a.hasOwnProperty(t)){var g=a[t];if(g!=null)switch(t){case"name":i=g;break;case"type":o=g;break;case"checked":r=g;break;case"defaultChecked":A=g;break;case"value":l=g;break;case"defaultValue":u=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,e));break;default:ln(n,e,t,g,a,null)}}Wr(n,l,u,r,A,o,i,!1),Ri(n);return;case"select":q("invalid",n),t=o=l=null;for(i in a)if(a.hasOwnProperty(i)&&(u=a[i],u!=null))switch(i){case"value":l=u;break;case"defaultValue":o=u;break;case"multiple":t=u;default:ln(n,e,i,u,a,null)}e=l,a=o,n.multiple=!!t,e!=null?Ia(n,!!t,e,!1):a!=null&&Ia(n,!!t,a,!0);return;case"textarea":q("invalid",n),l=i=t=null;for(o in a)if(a.hasOwnProperty(o)&&(u=a[o],u!=null))switch(o){case"value":t=u;break;case"defaultValue":i=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(m(91));break;default:ln(n,e,o,u,a,null)}br(n,t,i,l),Ri(n);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(t=a[r],t!=null))switch(r){case"selected":n.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:ln(n,e,r,t,a,null)}return;case"dialog":q("beforetoggle",n),q("toggle",n),q("cancel",n),q("close",n);break;case"iframe":case"object":q("load",n);break;case"video":case"audio":for(t=0;t<oi.length;t++)q(oi[t],n);break;case"image":q("error",n),q("load",n);break;case"details":q("toggle",n);break;case"embed":case"source":case"link":q("error",n),q("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in a)if(a.hasOwnProperty(A)&&(t=a[A],t!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,e));default:ln(n,e,A,t,a,null)}return;default:if(Pl(e)){for(g in a)a.hasOwnProperty(g)&&(t=a[g],t!==void 0&&Nu(n,e,g,t,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(t=a[u],t!=null&&ln(n,e,u,t,a,null))}function FA(n,e,a,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,o=null,u=null,r=null,A=null,g=null;for(d in a){var E=a[d];if(a.hasOwnProperty(d)&&E!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":r=E;default:t.hasOwnProperty(d)||ln(n,e,d,null,t,E)}}for(var h in t){var d=t[h];if(E=a[h],t.hasOwnProperty(h)&&(d!=null||E!=null))switch(h){case"type":l=d;break;case"name":i=d;break;case"checked":A=d;break;case"defaultChecked":g=d;break;case"value":o=d;break;case"defaultValue":u=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(m(137,e));break;default:d!==E&&ln(n,e,h,d,t,E)}}jl(n,o,u,r,A,g,l,i);return;case"select":d=o=u=h=null;for(l in a)if(r=a[l],a.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":d=r;default:t.hasOwnProperty(l)||ln(n,e,l,null,t,r)}for(i in t)if(l=t[i],r=a[i],t.hasOwnProperty(i)&&(l!=null||r!=null))switch(i){case"value":h=l;break;case"defaultValue":u=l;break;case"multiple":o=l;default:l!==r&&ln(n,e,i,l,t,r)}e=u,a=o,t=d,h!=null?Ia(n,!!a,h,!1):!!t!=!!a&&(e!=null?Ia(n,!!a,e,!0):Ia(n,!!a,a?[]:"",!1));return;case"textarea":d=h=null;for(u in a)if(i=a[u],a.hasOwnProperty(u)&&i!=null&&!t.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ln(n,e,u,null,t,i)}for(o in t)if(i=t[o],l=a[o],t.hasOwnProperty(o)&&(i!=null||l!=null))switch(o){case"value":h=i;break;case"defaultValue":d=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==l&&ln(n,e,o,i,t,l)}Tr(n,h,d);return;case"option":for(var U in a)if(h=a[U],a.hasOwnProperty(U)&&h!=null&&!t.hasOwnProperty(U))switch(U){case"selected":n.selected=!1;break;default:ln(n,e,U,null,t,h)}for(r in t)if(h=t[r],d=a[r],t.hasOwnProperty(r)&&h!==d&&(h!=null||d!=null))switch(r){case"selected":n.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ln(n,e,r,h,t,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in a)h=a[C],a.hasOwnProperty(C)&&h!=null&&!t.hasOwnProperty(C)&&ln(n,e,C,null,t,h);for(A in t)if(h=t[A],d=a[A],t.hasOwnProperty(A)&&h!==d&&(h!=null||d!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(m(137,e));break;default:ln(n,e,A,h,t,d)}return;default:if(Pl(e)){for(var on in a)h=a[on],a.hasOwnProperty(on)&&h!==void 0&&!t.hasOwnProperty(on)&&Nu(n,e,on,void 0,t,h);for(g in t)h=t[g],d=a[g],!t.hasOwnProperty(g)||h===d||h===void 0&&d===void 0||Nu(n,e,g,h,t,d);return}}for(var y in a)h=a[y],a.hasOwnProperty(y)&&h!=null&&!t.hasOwnProperty(y)&&ln(n,e,y,null,t,h);for(E in t)h=t[E],d=a[E],!t.hasOwnProperty(E)||h===d||h==null&&d==null||ln(n,e,E,h,t,d)}var Yu=null,Ku=null;function Wl(n){return n.nodeType===9?n:n.ownerDocument}function vy(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function py(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Cu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gu=null;function $A(){var n=window.event;return n&&n.type==="popstate"?n===Gu?!1:(Gu=n,!0):(Gu=null,!1)}var Ry=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,Dy=typeof Promise=="function"?Promise:void 0,eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Dy<"u"?function(n){return Dy.resolve(null).then(n).catch(ah)}:Ry;function ah(n){setTimeout(function(){throw n})}function ua(n){return n==="head"}function Hy(n,e){var a=e,t=0,i=0;do{var l=a.nextSibling;if(n.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(0<t&&8>t){a=t;var o=n.ownerDocument;if(a&1&&ri(o.documentElement),a&2&&ri(o.body),a&4)for(a=o.head,ri(a),o=a.firstChild;o;){var u=o.nextSibling,r=o.nodeName;o[bt]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=u}}if(i===0){n.removeChild(l),mi(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:t=a.charCodeAt(0)-48;else t=0;a=l}while(a);mi(e)}function ku(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ku(a),Jl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function th(n,e,a,t){for(;n.nodeType===1;){var i=a;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[bt])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=ge(n.nextSibling),n===null)break}return null}function ih(n,e,a){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=ge(n.nextSibling),n===null))return null;return n}function zu(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function lh(n,e){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")e();else{var t=function(){e(),a.removeEventListener("DOMContentLoaded",t)};a.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function ge(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}var Uu=null;function By(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return n;e--}else a==="/$"&&e++}n=n.previousSibling}return null}function My(n,e,a){switch(e=Wl(a),n){case"html":if(n=e.documentElement,!n)throw Error(m(452));return n;case"head":if(n=e.head,!n)throw Error(m(453));return n;case"body":if(n=e.body,!n)throw Error(m(454));return n;default:throw Error(m(451))}}function ri(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Jl(n)}var Ae=new Map,Ly=new Set;function Tl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ie=D.d;D.d={f:oh,r:uh,D:rh,C:ch,L:sh,m:yh,X:Ah,S:fh,M:hh};function oh(){var n=Ie.f(),e=Al();return n||e}function uh(n){var e=Ga(n);e!==null&&e.tag===5&&e.type==="form"?Qc(e):Ie.r(n)}var gt=typeof document>"u"?null:document;function wy(n,e,a){var t=gt;if(t&&typeof e=="string"&&e){var i=oe(e);i='link[rel="'+n+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Ly.has(i)||(Ly.add(i),n={rel:n,crossOrigin:a,href:e},t.querySelector(i)===null&&(e=t.createElement("link"),Cn(e,"link",n),Hn(e),t.head.appendChild(e)))}}function rh(n){Ie.D(n),wy("dns-prefetch",n,null)}function ch(n,e){Ie.C(n,e),wy("preconnect",n,e)}function sh(n,e,a){Ie.L(n,e,a);var t=gt;if(t&&n&&e){var i='link[rel="preload"][as="'+oe(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+oe(a.imageSizes)+'"]')):i+='[href="'+oe(n)+'"]';var l=i;switch(e){case"style":l=St(n);break;case"script":l=Ot(n)}Ae.has(l)||(n=N({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:n,as:e},a),Ae.set(l,n),t.querySelector(i)!==null||e==="style"&&t.querySelector(ci(l))||e==="script"&&t.querySelector(si(l))||(e=t.createElement("link"),Cn(e,"link",n),Hn(e),t.head.appendChild(e)))}}function yh(n,e){Ie.m(n,e);var a=gt;if(a&&n){var t=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+oe(t)+'"][href="'+oe(n)+'"]',l=i;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ot(n)}if(!Ae.has(l)&&(n=N({rel:"modulepreload",href:n},e),Ae.set(l,n),a.querySelector(i)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(si(l)))return}t=a.createElement("link"),Cn(t,"link",n),Hn(t),a.head.appendChild(t)}}}function fh(n,e,a){Ie.S(n,e,a);var t=gt;if(t&&n){var i=ka(t).hoistableStyles,l=St(n);e=e||"default";var o=i.get(l);if(!o){var u={loading:0,preload:null};if(o=t.querySelector(ci(l)))u.loading=5;else{n=N({rel:"stylesheet",href:n,"data-precedence":e},a),(a=Ae.get(l))&&Iu(n,a);var r=o=t.createElement("link");Hn(r),Cn(r,"link",n),r._p=new Promise(function(A,g){r.onload=A,r.onerror=g}),r.addEventListener("load",function(){u.loading|=1}),r.addEventListener("error",function(){u.loading|=2}),u.loading|=4,bl(o,e,t)}o={type:"stylesheet",instance:o,count:1,state:u},i.set(l,o)}}}function Ah(n,e){Ie.X(n,e);var a=gt;if(a&&n){var t=ka(a).hoistableScripts,i=Ot(n),l=t.get(i);l||(l=a.querySelector(si(i)),l||(n=N({src:n,async:!0},e),(e=Ae.get(i))&&Ju(n,e),l=a.createElement("script"),Hn(l),Cn(l,"link",n),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function hh(n,e){Ie.M(n,e);var a=gt;if(a&&n){var t=ka(a).hoistableScripts,i=Ot(n),l=t.get(i);l||(l=a.querySelector(si(i)),l||(n=N({src:n,async:!0,type:"module"},e),(e=Ae.get(i))&&Ju(n,e),l=a.createElement("script"),Hn(l),Cn(l,"link",n),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(i,l))}}function Ny(n,e,a,t){var i=(i=J.current)?Tl(i):null;if(!i)throw Error(m(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=St(a.href),a=ka(i).hoistableStyles,t=a.get(e),t||(t={type:"style",instance:null,count:0,state:null},a.set(e,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=St(a.href);var l=ka(i).hoistableStyles,o=l.get(n);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,o),(l=i.querySelector(ci(n)))&&!l._p&&(o.instance=l,o.state.loading=5),Ae.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ae.set(n,a),l||dh(i,n,a,o.state))),e&&t===null)throw Error(m(528,""));return o}if(e&&t!==null)throw Error(m(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ot(a),a=ka(i).hoistableScripts,t=a.get(e),t||(t={type:"script",instance:null,count:0,state:null},a.set(e,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,n))}}function St(n){return'href="'+oe(n)+'"'}function ci(n){return'link[rel="stylesheet"]['+n+"]"}function Yy(n){return N({},n,{"data-precedence":n.precedence,precedence:null})}function dh(n,e,a,t){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?t.loading=1:(e=n.createElement("link"),t.preload=e,e.addEventListener("load",function(){return t.loading|=1}),e.addEventListener("error",function(){return t.loading|=2}),Cn(e,"link",a),Hn(e),n.head.appendChild(e))}function Ot(n){return'[src="'+oe(n)+'"]'}function si(n){return"script[async]"+n}function Ky(n,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var t=n.querySelector('style[data-href~="'+oe(a.href)+'"]');if(t)return e.instance=t,Hn(t),t;var i=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),Hn(t),Cn(t,"style",i),bl(t,a.precedence,n),e.instance=t;case"stylesheet":i=St(a.href);var l=n.querySelector(ci(i));if(l)return e.state.loading|=4,e.instance=l,Hn(l),l;t=Yy(a),(i=Ae.get(i))&&Iu(t,i),l=(n.ownerDocument||n).createElement("link"),Hn(l);var o=l;return o._p=new Promise(function(u,r){o.onload=u,o.onerror=r}),Cn(l,"link",t),e.state.loading|=4,bl(l,a.precedence,n),e.instance=l;case"script":return l=Ot(a.src),(i=n.querySelector(si(l)))?(e.instance=i,Hn(i),i):(t=a,(i=Ae.get(l))&&(t=N({},a),Ju(t,i)),n=n.ownerDocument||n,i=n.createElement("script"),Hn(i),Cn(i,"link",t),n.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(m(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(t=e.instance,e.state.loading|=4,bl(t,a.precedence,n));return e.instance}function bl(n,e,a){for(var t=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=t.length?t[t.length-1]:null,l=i,o=0;o<t.length;o++){var u=t[o];if(u.dataset.precedence===e)l=u;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(n,e.firstChild))}function Iu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Ju(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var vl=null;function Cy(n,e,a){if(vl===null){var t=new Map,i=vl=new Map;i.set(a,t)}else i=vl,t=i.get(a),t||(t=new Map,i.set(a,t));if(t.has(n))return t;for(t.set(n,null),a=a.getElementsByTagName(n),i=0;i<a.length;i++){var l=a[i];if(!(l[bt]||l[zn]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(e)||"";o=n+o;var u=t.get(o);u?u.push(l):t.set(o,[l])}}return t}function Gy(n,e,a){n=n.ownerDocument||n,n.head.insertBefore(a,e==="title"?n.querySelector("head > title"):null)}function mh(n,e,a){if(a===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ky(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var yi=null;function gh(){}function Sh(n,e,a){if(yi===null)throw Error(m(475));var t=yi;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=St(a.href),l=n.querySelector(ci(i));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pl.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=l,Hn(l);return}l=n.ownerDocument||n,a=Yy(a),(i=Ae.get(i))&&Iu(a,i),l=l.createElement("link"),Hn(l);var o=l;o._p=new Promise(function(u,r){o.onload=u,o.onerror=r}),Cn(l,"link",a),e.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=pl.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}function Oh(){if(yi===null)throw Error(m(475));var n=yi;return n.stylesheets&&n.count===0&&xu(n,n.stylesheets),0<n.count?function(e){var a=setTimeout(function(){if(n.stylesheets&&xu(n,n.stylesheets),n.unsuspend){var t=n.unsuspend;n.unsuspend=null,t()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(a)}}:null}function pl(){if(this.count--,this.count===0){if(this.stylesheets)xu(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Rl=null;function xu(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Rl=new Map,e.forEach(Eh,n),Rl=null,pl.call(n))}function Eh(n,e){if(!(e.state.loading&4)){var a=Rl.get(n);if(a)var t=a.get(null);else{a=new Map,Rl.set(n,a);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var o=i[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),t=o)}t&&a.set(null,t)}i=e.instance,o=i.getAttribute("data-precedence"),l=a.get(o)||t,l===t&&a.set(null,i),a.set(o,i),this.count++,t=pl.bind(this),i.addEventListener("load",t),i.addEventListener("error",t),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),e.state.loading|=4}}var fi={$$typeof:Dn,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Wh(n,e,a,t,i,l,o,u){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.hiddenUpdates=kl(null),this.identifierPrefix=t,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function zy(n,e,a,t,i,l,o,u,r,A,g,E){return n=new Wh(n,e,a,o,u,r,A,E),e=1,l===!0&&(e|=24),l=$n(3,null,null,e),n.current=l,l.stateNode=n,e=vo(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:t,isDehydrated:a,cache:e},Ho(l),n}function Uy(n){return n?(n=Za,n):Za}function Iy(n,e,a,t,i,l){i=Uy(i),t.context===null?t.context=i:t.pendingContext=i,t=Pe(e),t.payload={element:a},l=l===void 0?null:l,l!==null&&(t.callback=l),a=Xe(n,t,e),a!==null&&(ie(a,n,e),Jt(a,n,e))}function Jy(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<e?a:e}}function Vu(n,e){Jy(n,e),(n=n.alternate)&&Jy(n,e)}function xy(n){if(n.tag===13){var e=Xa(n,67108864);e!==null&&ie(e,n,67108864),Vu(n,67108864)}}var Dl=!0;function Th(n,e,a,t){var i=S.T;S.T=null;var l=D.p;try{D.p=2,_u(n,e,a,t)}finally{D.p=l,S.T=i}}function bh(n,e,a,t){var i=S.T;S.T=null;var l=D.p;try{D.p=8,_u(n,e,a,t)}finally{D.p=l,S.T=i}}function _u(n,e,a,t){if(Dl){var i=ju(t);if(i===null)wu(n,e,t,Hl,a),_y(n,t);else if(ph(i,n,e,a,t))t.stopPropagation();else if(_y(n,t),e&4&&-1<vh.indexOf(n)){for(;i!==null;){var l=Ga(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=da(l.pendingLanes);if(o!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var r=1<<31-Qn(o);u.entanglements[1]|=r,o&=~r}pe(l),(nn&6)===0&&(yl=Ee()+500,li(0))}}break;case 13:u=Xa(l,2),u!==null&&ie(u,l,2),Al(),Vu(l,2)}if(l=ju(t),l===null&&wu(n,e,t,Hl,a),l===i)break;i=l}i!==null&&t.stopPropagation()}else wu(n,e,t,null,a)}}function ju(n){return n=Zl(n),qu(n)}var Hl=null;function qu(n){if(Hl=null,n=Ca(n),n!==null){var e=z(n);if(e===null)n=null;else{var a=e.tag;if(a===13){if(n=Z(e),n!==null)return n;n=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Hl=n,null}function Vy(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cf()){case ir:return 2;case lr:return 8;case Ei:case sf:return 32;case or:return 268435456;default:return 32}default:return 32}}var Pu=!1,ra=null,ca=null,sa=null,Ai=new Map,hi=new Map,ya=[],vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _y(n,e){switch(n){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Ai.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(e.pointerId)}}function di(n,e,a,t,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:a,eventSystemFlags:t,nativeEvent:l,targetContainers:[i]},e!==null&&(e=Ga(e),e!==null&&xy(e)),n):(n.eventSystemFlags|=t,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function ph(n,e,a,t,i){switch(e){case"focusin":return ra=di(ra,n,e,a,t,i),!0;case"dragenter":return ca=di(ca,n,e,a,t,i),!0;case"mouseover":return sa=di(sa,n,e,a,t,i),!0;case"pointerover":var l=i.pointerId;return Ai.set(l,di(Ai.get(l)||null,n,e,a,t,i)),!0;case"gotpointercapture":return l=i.pointerId,hi.set(l,di(hi.get(l)||null,n,e,a,t,i)),!0}return!1}function jy(n){var e=Ca(n.target);if(e!==null){var a=z(e);if(a!==null){if(e=a.tag,e===13){if(e=Z(a),e!==null){n.blockedOn=e,Sf(n.priority,function(){if(a.tag===13){var t=te();t=zl(t);var i=Xa(a,t);i!==null&&ie(i,a,t),Vu(a,t)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Bl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var a=ju(n.nativeEvent);if(a===null){a=n.nativeEvent;var t=new a.constructor(a.type,a);Xl=t,a.target.dispatchEvent(t),Xl=null}else return e=Ga(a),e!==null&&xy(e),n.blockedOn=a,!1;e.shift()}return!0}function qy(n,e,a){Bl(n)&&a.delete(e)}function Rh(){Pu=!1,ra!==null&&Bl(ra)&&(ra=null),ca!==null&&Bl(ca)&&(ca=null),sa!==null&&Bl(sa)&&(sa=null),Ai.forEach(qy),hi.forEach(qy)}function Ml(n,e){n.blockedOn===e&&(n.blockedOn=null,Pu||(Pu=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,Rh)))}var Ll=null;function Py(n){Ll!==n&&(Ll=n,T.unstable_scheduleCallback(T.unstable_NormalPriority,function(){Ll===n&&(Ll=null);for(var e=0;e<n.length;e+=3){var a=n[e],t=n[e+1],i=n[e+2];if(typeof t!="function"){if(qu(t||a)===null)continue;break}var l=Ga(a);l!==null&&(n.splice(e,3),e-=3,qo(l,{pending:!0,data:i,method:a.method,action:t},t,i))}}))}function mi(n){function e(r){return Ml(r,n)}ra!==null&&Ml(ra,n),ca!==null&&Ml(ca,n),sa!==null&&Ml(sa,n),Ai.forEach(e),hi.forEach(e);for(var a=0;a<ya.length;a++){var t=ya[a];t.blockedOn===n&&(t.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)jy(a),a.blockedOn===null&&ya.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(t=0;t<a.length;t+=3){var i=a[t],l=a[t+1],o=i[xn]||null;if(typeof l=="function")o||Py(a);else if(o){var u=null;if(l&&l.hasAttribute("formAction")){if(i=l,o=l[xn]||null)u=o.formAction;else if(qu(i)!==null)continue}else u=o.action;typeof u=="function"?a[t+1]=u:(a.splice(t,3),t-=3),Py(a)}}}function Xu(n){this._internalRoot=n}wl.prototype.render=Xu.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(m(409));var a=e.current,t=te();Iy(a,t,n,e,null,null)},wl.prototype.unmount=Xu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Iy(n.current,2,null,n,null,null),Al(),e[Ka]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var e=yr();n={blockedOn:null,target:n,priority:e};for(var a=0;a<ya.length&&e!==0&&e<ya[a].priority;a++);ya.splice(a,0,n),a===0&&jy(n)}};var Xy=X.version;if(Xy!=="19.1.0")throw Error(m(527,Xy,"19.1.0"));D.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(m(188)):(n=Object.keys(n).join(","),Error(m(268,n)));return n=Y(e),n=n!==null?b(n):null,n=n===null?null:n.stateNode,n};var Dh={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Et=Nl.inject(Dh),Zn=Nl}catch{}}return Si.createRoot=function(n,e){if(!I(n))throw Error(m(299));var a=!1,t="",i=ys,l=fs,o=As,u=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(u=e.unstable_transitionCallbacks)),e=zy(n,1,!1,null,null,a,t,i,l,o,u,null),n[Ka]=e.current,Lu(n),new Xu(e)},Si.hydrateRoot=function(n,e,a){if(!I(n))throw Error(m(299));var t=!1,i="",l=ys,o=fs,u=As,r=null,A=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(r=a.unstable_transitionCallbacks),a.formState!==void 0&&(A=a.formState)),e=zy(n,1,!0,e,a??null,t,i,l,o,u,r,A),e.context=Uy(null),a=e.current,t=te(),t=zl(t),i=Pe(t),i.callback=null,Xe(a,i,t),a=t,e.current.lanes=a,Tt(e,a),pe(e),n[Ka]=e.current,Lu(n),new wl(e)},Si.version="19.1.0",Si}var of;function Gh(){if(of)return Fu.exports;of=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(X){console.error(X)}}return T(),Fu.exports=Ch(),Fu.exports}var kh=Gh();const ar=[{id:1,title:"ええじゃないか",titleKana:"ええじゃないか",lyricist:"岩崎貴文・mildsalt",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["ええじゃないか","ええじゃないか[初回盤]","ええじゃないか[MY BEST CD盤]","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{1}","なにわともあれ、ほんまにありがとう！{14}","一発めぇぇぇぇぇぇぇ！{1}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){1}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){20}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){1}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){20}","パリピポ{12}","パリピポ(各会場オーラス){12}","パリピポ(各会場オーラス){27}","パリピポ(兵庫オーラス){12}","パリピポ(兵庫オーラス){27}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){2}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){2}","ラッキィィィィィィィ7(大阪,宮城){2}","ラッキィィィィィィィ7(大阪オーラス){2}","ラッキィィィィィィィ7(宮城オーラス){2}","24(ニシ)から感謝届けます♡{1}","24(ニシ)から感謝届けます♡(オーラス){1}","24(ニシ)から感謝届けます♡(オーラス){26}","なうぇすと(〜横浜3日目){19}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){19}","なうぇすと(各会場オーラス){19}","なうぇすと(広島オーラス){19}","WESTival(各会場オーラス){28}","WESTival(北海道オーラス){28}","WESTV!{2}","WESTV!(各会場オーラス){2}","WESTV!(北海道オーラス){2}","WESTV!(北海道オーラス){29}","W trouble12/11{26}","W trouble12/12昼,12/13夜{27}","W trouble12/12夜,12/13昼{27}","rainboW(北海道){25}","rainboW(宮城,愛知,新潟,埼玉,熊本){25}","rainboW(円盤){25}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){3}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){3}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){3}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){3}","Mixed Juice(北海道オーラス){3}","TO BE KANSAI COLOR-翔べ関西から-(大阪){34}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){32}","TO BE KANSAI COLOR-翔べ関西から-(東京){30}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){30}","POWER(宮城){2}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){2}","POWER(愛知オーラス){2}","AWARD(大阪){1}","AWARD(新潟){1}","AWARD(宮城){1}","AWARD(愛知){1}","AWARD(横浜,静岡,福岡,広島,北海道){1}","AWARD(北海道オーラス){1}","DOME TOUR AWARD(大阪,福岡){22}","DOME TOUR AWARD(東京){23}","DOME TOUR AWARD(東京オーラス){23}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){3}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){3}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){3}","メトロック2022(大阪){1}","LOVE MUSIC FESTIVAL2022{4}","サマソニ2023(大阪,東京){1}","めざまし30周年フェス(東京){1}","メトロック2024(東京){1}","サマソニ2024(大阪,東京){1}","a-nation2024{4}","KOYABU SONIC2024{1}","CDTV ライブ！ ライブ！大感謝祭2024{4}","CDTV ライブ！ ライブ！春の大感謝祭2025{2}","メトロック2025(東京){2}","Johnny's World Happy LIVE with YOU(3/29){1}","Johnny's World Happy LIVE with YOU(6/18){7}","ジャニーズWEST デビュー記念イベント デビューしてもええじゃないか ～バンザイ!! その先の一等賞へ～{2}","皆様のおかげSummer Carnival!{2}","５周ねんやねん♪よろしゅうねん♪{1}","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{4}","【年越し生配信2024→2025】デビュー10周年ありがとう⭐️&登録者数100万人達成記念SP🎉 ✨100/100✨{1}","10周年生配信トーク＆ライブ「虹会」{3}","WEST. 10th Anniversary Live “W”{18}","WEST. 10th Anniversary Live “W”-Film edition-{20}","なにわ侍　ハローTOKYO!!{5}","台風n Dreamer{5}","WEST. 10th Anniversary 大阪松竹座公演(千穐楽){7}"],singer:"WEST.",date:"2014-04-23",lyrics:`ひとつひとまず「なんでやねん！」
ふたつふたりで「どないやねん！」
みっつみんなで「ほんまやねん！」
愛の花が咲く

浪速生まれの　浪速育ちや
今　世界中　さあ響け
な・に・わ・ぶ・し！

ええじゃないか！ええじゃないか！
まだまだいけるで！
どっこいどっこいどっこいしょ
どっこいどっこいどっこいしょ
ホンマにホンマにホンマにホンマにかなわんわ～
ええじゃないか！ええじゃないか！
まだまだいけるで！
あっぱれあっぱれあっぱれあっぱれの
心意気！

よっつ呼ばれて「どーすんねん」
いつついきなり「なにすんねん」
むっつ無理矢理「やったるねん」
来たで七侍！

なにはなくとも　浪速魂
この地球上　最強の
な・に・わ・ぶ・し！

ええじゃないか！ええじゃないか！
まだまだやれるで！
どっこいどっこいどっこいしょ
どっこいどっこいどっこいしょ
ナンボのナンボのナンボのナンボのもんやねん～
ええじゃないか！ええじゃないか！
まだまだやれるで！
テッペンテッペンテッペンテッペンの
大勝負！

これが生き様やねん　晴れ舞台やねん
踊って舞いあがれ　パッと　花吹雪

ええじゃないか！ええじゃないか！
まだまだいけるで！
どっこいどっこいどっこいしょ
どっこいどっこいどっこいしょ
ホンマにホンマにホンマにホンマにかなわんわ～
ええじゃないか！ええじゃないか！
まだまだいけるで！
あっぱれあっぱれあっぱれあっぱれの
心意気！

ええじゃないか！ええじゃないか！
まだまだやれるで！
どっこいどっこいどっこいしょ
どっこいどっこいどっこいしょ
ナンボのナンボのナンボのナンボのもんやねん～
ええじゃないか！ええじゃないか！
まだまだやれるで！
テッペンテッペンテッペンテッペンの
大勝負！`},{id:2,title:"バンザイ夢マンサイ!",titleKana:"ばんざいゆめまんさい",lyricist:"zopp",composer:"川口進・Joakim Bjornbeg・Christofer Erixon",arranger:"CHOKKAKU",album:["ええじゃないか","ええじゃないか[初回盤]","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{4}","一発めぇぇぇぇぇぇぇ！{8}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){8}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){8}","パリピポ(兵庫オーラス){28}","なうぇすと(〜横浜3日目){20}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){20}","なうぇすと(各会場オーラス){20}","なうぇすと(広島オーラス){20}","皆様のおかげSummer Carnival!{5}"],singer:"WEST.",date:"2014-04-23",tiup:"映画『忍ジャニ参上！未来への戦い』エンディングテーマ",lyrics:`人生はバンザイ！　夢マンサイ！
泣いたり笑たりでGO!!
酸いも甘いも　抱きしめ　笑い飛ばして
ほんまサンキューサンキュー！

ミスだらけで　へこむ毎日　人の群れに　押し潰され
水たまりに　映る惨めな自分と　見つめ合う

「昭和は遠くなりにけり」でも
消せない熱い何かが
胸(ココ)にはあるよ

頑張って　傷ついて　だけど　踏ん張って
泣いたって　Never give up Keep on Moving on

さぁ　運命なんて
変えていったら　ええやろ

人生はバンザイ！　夢マンサイ！
泣いたり笑たりでGO!!
酸いも甘いも　抱きしめ　笑い飛ばそう
愚かでも　構わない　ガムシャラに生きるんだ
怖いものだらけでも
みんながいる
ほんまサンキューサンキュー！

ほんまにサンキュー！

ぶつかる壁　ズタボロの明日　頑張るほど冷やかされて
夜空の下　涙が溢れて　眠れない

「夢を見ること　なにがダサいの？」
熱が冷める毎日
自分を信じろ

胸はって　風切って　走れ　未来へ
なんだって　叶うって　明日を　掴め

もう　振り向かないで
変われなくても　ええねん

人生はバンザイ！　夢マンサイ！
恥ずかしがらないでGO!!
前のめりに　転べば　結果オーライ！
戸惑ってる　暇はない　ハチャメチャにぶつかれ
痛いことだらけさ
でもそれこそ
めっちゃイケてんで！

もし時代が　君を拒み
その扉　閉ざしても
諦めるな
いつでもそばにいるよ
世界を変えてやるんだ　その手で

人生はバンザイ！　夢マンサイ！
明けない夜はない
涙さえも　抱きしめ　今を駆け抜けろ

人生はバンザイ！　夢マンサイ！
泣いたり笑たりでGO!!
酸いも甘いも　抱きしめ　笑い飛ばそう
愚かでも　構わない　ガムシャラに生きるんだ
怖いものだらけでも
みんながいる
ほんまサンキューサンキュー！

ほんまにサンキュー！

ほんまサンキューサンキュー！`},{id:3,title:"その先へ…",titleKana:"そのさきへ",lyricist:"Shusui",composer:"Shusui・Seiji Motoyama",arranger:"丸山真由子",album:["ええじゃないか","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{3}","一発めぇぇぇぇぇぇぇ！{13}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){13}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){13}","rainboW(円盤){32}","皆様のおかげSummer Carnival!{10}","なにわ侍　ハローTOKYO!!{12}"],singer:"WEST.",date:"2014-04-23",tiup:"日本テレビ『SHARK〜2nd Season〜』主題歌",lyrics:`空を見上げて　流れる雲と
自分自身　重ね合う僕ら
いつも不安で頼りないけど
諦めず夢見て

Hold on time Believe me now
歩いて行こう

僕らの人生(みち)はまだまだ続く
時に激しい風に打たれて
共に目指した輝く未来
忘れないで君と笑顔でいよう

傷ついた過去　君と出逢って
変わって行くその姿に何故か
涙溢れて　止まらなくなって
真っすぐ前を見て

Hold you tight Close me now
振り返らない

僕らの未来　照らし続けて
いつか苦しい　そんな時でも
信じる心持ち続けよう
明日はきっと晴れるように願う

君と描いてく人生(みち)のその先に
想像を超える未来が待っている　その先へ

僕らの未来　照らし続けて
いつか苦しい　そんな時でも
信じる心持ち続けよう
明日はきっと晴れるように

僕らの人生(みち)はまだまだ続く
時に激しい風に打たれて
共に目指した輝く未来
忘れないで君と笑顔でいよう`},{id:4,title:"浪速一等賞!",titleKana:"なにわいっとうしょう",lyricist:"ケリー・浅利進吾",composer:"浅利進吾",arranger:"ha-j",album:["ええじゃないか","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{2}","一発めぇぇぇぇぇぇぇ！{17}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){17}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){17}","パリピポ{11}","パリピポ(各会場オーラス){11}","パリピポ(兵庫オーラス){11}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){13}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){13}","ラッキィィィィィィィ7(大阪,宮城){13}","ラッキィィィィィィィ7(大阪オーラス){13}","ラッキィィィィィィィ7(宮城オーラス){13}","24(ニシ)から感謝届けます♡{11}","24(ニシ)から感謝届けます♡(オーラス){11}","AWARD(新潟){22}","AWARD(宮城){22}","AWARD(愛知){22}","AWARD(横浜,静岡,福岡,広島,北海道){22}","AWARD(北海道オーラス){22}","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{5}","なにわ侍　ハローTOKYO!!{13}"],singer:"WEST.",date:"2014-04-23",lyrics:`やったるで　やったるで　浪速の実力見せたるで
いったるで　いったるで　浪速は世界の一等賞！
ほんまに　やったるで？！

Dancing No.1 Singing No.1 Talking No.1　誰にも負けるわけないやろ
愛情 No.1　愛嬌 No.1　熱い No.1　浪速は一等賞！

ドンドン！　俺たちのリズムに合わせろ
Song Song　ハートで勝負　あの子に届け俺らの歌声
タンタンカタッタカタン　息する間もなくしゃべり続けて
ハクのかスウのかわからんくなった

心の中感じるパワー　君と僕の未来のため
世界平和願うんなら
全部を浪速にしたらええ！！

兄ちゃんも　姉ちゃんも　ばあちゃんも　オトンもオカンも
わになろう　わになろう　わになろう　浪速でわになろう
この地球(ほし)もほら　たこ焼きのカタチ
これは絶対誰にも内緒やで

うぉ?!!!!!
Dancing No.1　Singing No.1　Talking No.1　誰にも負けるわけないやろ
No.1 ワン ワン　No.1 ワン ワン　No.1 ワン ワン
No.1 ワ　ワンワ　ワンワン！！

やったるで　やったるで　浪速の実力見せたるで
いったるで　いったるで　浪速は世界の一等賞！

心の中感じるパワー　君と僕の未来のため
世界平和願うんなら
全部を浪速にしたらええ！！
したらええ！！

兄ちゃんも　姉ちゃんも　ばあちゃんも　オトンもオカンも
わになろう　わになろう　わになろう　浪速でわになろう
この地球(ほし)もほら　たこ焼きのカタチ
これは絶対誰にも内緒やで

うぉ?!!!!!
Dancing No.1　Singing No.1　Talking No.1　誰にも負けるわけないやろ
愛情 No.1　愛嬌 No.1　熱い(あっつい)No.1　浪速は一等賞！
No.1 ワン ワン　No.1 ワン ワン　No.1 ワン ワン
No.1 ワ　ワンワ　ワンワン！！

やったるで　やったるで　浪速の実力見せたるで
いったるで　いったるで　浪速は世界の一等賞！

浪速は世界の一等賞！`},{id:5,title:"Rainbow Dream",titleKana:"Rainbow Dream",lyricist:"ケリー",composer:"TSUKASA",arranger:"佐藤泰将",album:["ええじゃないか","ええじゃないか[MY BEST CD盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{13}","一発めぇぇぇぇぇぇぇ！{18}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){18}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){18}","パリピポ{13}","パリピポ(各会場オーラス){13}","パリピポ(兵庫オーラス){13}","AWARD(大阪){27}","AWARD(新潟){28}","AWARD(宮城){28}","AWARD(愛知){28}","AWARD(横浜,静岡,福岡,広島,北海道){28}","AWARD(北海道オーラス){28}","7周年生配信イベント「虹会」{1}","なにわ侍　ハローTOKYO!!{1}","なにわ侍 団五郎一座{10}"],singer:"WEST.",date:"2014-04-23",lyrics:`近づくほどに大きくなる壁
越えてみせると誓った時から
俯いたり逃げるくらいなら
傷つきながらでも進むと決めたよ
不安も恐怖も抱きしめたまま
夢は熱く胸の中で燃える太陽

Rainbow Dream 輝く未来
僕らが届けてみせる
始まりはそうこの時
このステージから
Rainbow Dream 信じて欲しい
僕らは叶えてゆける
君と素敵な夢を
いつまでも見てたいから
Always with you
いつも一緒に

Rainbow Dream 輝く未来
僕らが届けてみせる
始まりはそうこの時
このステージから

Rainbow Dream 信じて欲しい
僕らは叶えてゆける
君と素敵な夢を
いつまでも見てたいから
Always with you
いつも一緒に`},{id:6,title:"My Best Friend",titleKana:"My Best Friend",lyricist:"下地悠",composer:"清水明男",arranger:"家原正樹",album:["ええじゃないか","ええじゃないか[MY BEST CD盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{9}","一発めぇぇぇぇぇぇぇ！{12}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){12}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){12}","なにわ侍　ハローTOKYO!!{11}"],singer:"WEST.",date:"2014-04-23",lyrics:`がむしゃらに 走り続け
たどり着いた 最後の部屋
見上げた窓 強い光
期待と不安がよぎる

周りを見渡せば
同じ目をしてる 仲間がいて

しのぎを削りながら
希望に向かって 必死にもがいた

My Best Friend My Best Friend
僕は探し続けていたよ
教えて 教えて
分かち合える奇跡の出会いを

My Best Friend My Best Friend
僕は運命を手繰り寄せたよ
未来へ 未来へ
分かち合える最後の出会いを

My Best Friend My Best Friend
僕は探し続けていたよ
教えて 教えて
分かち合える奇跡の出会いを

My Best Friend
My Best Friend……`},{id:7,title:"Summer Dreamer",titleKana:"Summer Dreamer",lyricist:"Komei Kobayashi",composer:"Pessi Levanto・MiNE",arranger:"鈴木雅也",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["一発めぇぇぇぇぇぇぇ！{4}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){4}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){4}","パリピポ{15}","パリピポ(各会場オーラス){15}","パリピポ(兵庫オーラス){15}","DOME TOUR AWARD(大阪,福岡){4}","DOME TOUR AWARD(東京){4}","DOME TOUR AWARD(東京オーラス){4}","皆様のおかげSummer Carnival!{1}","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{2}","台風n Dreamer{4}"],singer:"WEST.",date:"2014-08-06",lyrics:`俺らSummer Dreamer　今 I got take off
この季節　終わらないでなんてYou & I
Summer Dreamer　ほら I got take off
こんな夏はきっと It's your night
We are the Summer Dreamer… A Dreamer

今年の夏は　去年よりずっと刺激的
神や魔法使いの仕業でもなく仲間のお陰だよ Oh yeah
I want you, I want you　一度きり、山　越えた先にそっと
俺たちを待っているのは　あの真っ白い砂浜だよ

夜になれば空を走る流星
これ以上　この夏に何を望むの？

俺らSummer Dreamer　今 I got take off
この季節　終わらないでなんてYou & I
Summer Dreamer　ほら I got take off
こんな夏はきっと It's your night
駆け抜けて行くNight & day　泣いてないで
照りつける太陽の下で
What a day go　心配ないから
このままHere we go

Oh We are the Summer Dreamer
Oh We are the Summer Dreamer
Oh We are the Summer Dreamer
I got it, Summer Dreamer

天気予報は　外れて降り続いてた雨
だけど雲の切れ間に太陽が　今、顔をのぞかせるよ

違う色した7つの光が
重なりあの空に虹をかけるよ

俺らSummer Dreamer　今 I got take off
スリルさえ楽しんじゃえ　それGot it so
Summer Dreamer　ほら I got take off
ハメを外しても In the night?
終わらないよA summer day　朝まで
仲間達と笑い飛ばそう
As over night?　ここにおいでよ
そのままHere we go

Summer Dreamer… Summer Dreamer

俺らSummer Dreamer
この季節　終わらないでなんてYou & I
Summer Dreamer　こんな夏 It's your night

We are the Summer Dreamers　お気に入りのTシャツ
着て探しに行こうぜ　真夏のビーナス
線香花火が　そっと火花散らす
消えてしまうまでに　明日へと走り出す

駆け抜けて行くNight & day　泣いてないで
照りつける太陽の下で
What a day go　心配ないから
このままHere we go

Oh We are the Summer Dreamer
Oh We are the Summer Dreamer
Oh We are the Summer Dreamer
I got it, Summer Dreamer

Oh 俺らSummer Dreamer
I got it, Summer Dreamer
We are the Summer Dreamer`},{id:8,title:"粉もん",titleKana:"こなもん",lyricist:"corin.",composer:"corin.",arranger:"鈴木雅也",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{5}","一発めぇぇぇぇぇぇぇ！{3}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){3}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){3}","パリピポ{9}","パリピポ(各会場オーラス){9}","パリピポ(兵庫オーラス){9}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){19}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){19}","ラッキィィィィィィィ7(大阪,宮城){20}","ラッキィィィィィィィ7(大阪オーラス){20}","ラッキィィィィィィィ7(宮城オーラス){20}","24(ニシ)から感謝届けます♡{9}","24(ニシ)から感謝届けます♡(オーラス){9}","なうぇすと(〜横浜3日目){8}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){8}","なうぇすと(各会場オーラス){8}","なうぇすと(広島オーラス){8}","WESTV!{8}","WESTV!(各会場オーラス){8}","WESTV!(北海道オーラス){8}","TO BE KANSAI COLOR-翔べ関西から-(大阪){27}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){26}","TO BE KANSAI COLOR-翔べ関西から-(東京){24}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){24}","AWARD(大阪){17}","AWARD(宮城){17}","AWARD(愛知){17}","AWARD(横浜,静岡,福岡,広島,北海道){17}","AWARD(北海道オーラス){17}","ジャニーズWEST デビュー記念イベント デビューしてもええじゃないか ～バンザイ!! その先の一等賞へ～{3}","皆様のおかげSummer Carnival!{3}","なにわ侍　ハローTOKYO!!{7}","台風n Dreamer{6}","なにわ侍 団五郎一座{9}"],singer:"WEST.",date:"2014-08-06",lyrics:`さぁ朝もはよから準備して　今日も粉もん覚悟はえぇか？
それがナニワの現実　人々はそれを知れへん
あぁ焼きそばお好み with 白飯　炭水化物地獄や
それがナニワの現実　人々はそれを知れへん

なんやそれは？　クレープちゃうんけ？
広島焼きも美味いけどな！

お好み焼いてオモロなる
タコ焼き食べてカシコなる
猫舌やけどそれがえぇんやん
アチチの口内　ハフハフハフ
お好み焼けば仲良なる
タコ焼き食べりゃ国越える
小麦粉練ればそれでえぇやん
アチチの鉄板　ジュウジュウジュウ
青のり付きのチュチュチュ
ナニワんキスやん

さぁ神の配合見せたろか　ナニワ粉もん　それは宇宙や
おかんレシピが最高　人々はそれを知れへん
あぁ月末節約？水多め 痩せる気かおかん？無駄や!
それは小麦粉汁や　人々はそれを知れへん

ぐろーばるって　なんやそれは？
ちっこい事は言うたらあかん！

お好み焼けば言葉いらん
ツレのツレが地球外生命体
小麦粉練ればみんな仲間です
何でも繋ぐで　こ・な・もん！
お好み焼けば仲良なる
タコ焼き食べりゃ国越える
粉もんでさぁ　繋がろうや！
ビリケンさんも　ハッハッハッ
ソース味のチュチュチュ
ナニワんキスやん

もんじゃ？　それがなんぼのもんじゃ！
ナニワの粉もんなめんなや！

お好み焼いてオモロなる
タコ焼き食べてカシコなる
猫舌やけどそれがえぇんやん
アチチの口内　ハフハフハフ

結局もんじゃ食べてみる
ウマ過ぎてもんじゃにハマる
粉もんならば　なんでもえぇわ
お口にかきこめ　パクパクパク
お好み焼けば仲良なる
タコ焼き食べりゃ国越える
粉もんでさぁ　繋がろうや！
ビリケンさんも　ハッハッハッ
ソース味のチュチュチュ
ナニワんキスやん`},{id:9,title:"Wake up!",titleKana:"Wake up!",lyricist:"ケリー",composer:"Peter Nord・Mats Larsson",arranger:"Peter Nord・Mats Larsson",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{8}","なにわ侍　ハローTOKYO!!{3}"],singer:"WEST.",date:"2014-08-06",lyrics:`Wake up! Wake up!　おはようSun

ニヤケ顔で　幸せそう　俺を蹴飛ばしといて　どんな夢見てる？

こいつらといたら　つい時間も忘れて
疲れて寝るまで　熱く語って　遅刻寸前
Oh　さん、に、いち、ハイ、Wake up!

よっしゃ!!　夢の続きだWake up!　Sun Sun　お日さんもご機嫌だし
カーテンを開けて　Wake up! Wake up!　おはようPeace?♪
もっと　いい夢見ようWake up!　Run Run　リアルな世界で
あくびなんてしてる　暇なんてない　乗り遅れるなよ
Wake up! Wake up!　おはようSun

ちょっと待った　なんか足りない感じ
二度寝常習犯の　あいつ見当たらない

いっつもこうやって　みんなで怒られたって
見捨てたりできない　家に戻って　いたずらだ
Yeah　さん、に、いち、ハイ、Wake up!

よっしゃ!!　夢の続きだWake up!　Sun Sun　お日さんもご機嫌だし
カーテンを開けて　Wake up! Wake up!　おはようPeace?♪
もっと　楽しい予感Wake up!　Round Round　地球も駆け足
退屈なんてもん　この世界に　あるわけないだろ
Wake up! Wake up!　おはようSun

どんな無謀な夢も　口に出せば　叶いそうだし
ポジティブに生きよう　世界中を巻き込んで　Hello Hello Wake up!

よっしゃ!!　夢の続きだWake up!　Sun Sun　お日さんもご機嫌だし
カーテンを開けて　Wake up! Wake up!　おはようPeace?♪
もっと　いい夢見ようWake up!　Run Run　リアルな世界で
あくびなんてしてる　暇なんてない　乗り遅れるなよ
Wake up! Wake up!　おはようSun

よっしゃ!!　夢の続きだWake up!　Sun Sun　お日さんもご機嫌だし
カーテンを開けて　Wake up! Wake up!　おはようPeace?♪
もっと　楽しい予感Wake up!　Round Round　地球も駆け足
退屈なんてもん　この世界に　あるわけないだろ
Wake up! Wake up!　おはようSun

Wake up! Wake up!　おはようSun`},{id:10,title:"LET'S GO WEST ～K A N S A I !!～",titleKana:"LET'S GO WEST ～K A N S A I !!～",lyricist:"森月キャス・kenko-p",composer:"Peter Nord・Mats Larsson",arranger:"Peter Nord・Mats Larsson",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{6}","一発めぇぇぇぇぇぇぇ！{10}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){10}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){10}","なにわ侍　ハローTOKYO!!{6}"],singer:"WEST.",date:"2014-08-06",lyrics:`ナーナナ…　アホやCrazy!　ナーナナ…　オモロぃCrazy!
ナーナナ…　アホやCrazy!　ナーナナ…　オモロぃCrazy!

It's K - A - N - S - A - I
まいどアリガトさん
Yeah, We are Funky and Crazy!
やかましいくらいでちょーどええねん

KANSAI!　BANZAI!　いけてます！
ほめ言葉は　アホや
ちょけた笑顔　べっぴんさん!　おいでませ KANSAI!!

Let's Go West! Happy!　KANSAIにおいでや
Let's Go West! Lucky!　笑いのパラダイス
Let's Go West! Happy!　KANSAIにおいでや
Let's Go West! Lucky!　アホは元気のチカラ！

ナーナナ…　アホやCrazy!　ナーナナ…　オモロぃCrazy!
ナーナナ…　アホやCrazy!　ナーナナ…　オモロぃCrazy!

K-A-N-S-A-I　KANSAI!　K-A-N-S-A-I　KANSAI!
K-A-N-S-A-I　KANSAI!　K-A-N-S-A-I　KANSAI!

KANSAI!　BANZAI!　いけてます！
キメ言葉は　アホや
ビビリやけどパワフル　かましたれ KANSAI!!

Let's Go West…　Let's Go West…
Let's Go West…　Let's Go West…

Let's Go West! Happy!　KANSAIにおいでや
Let's Go West! Lucky!　笑いのパラダイス
Let's Go West! Happy!　KANSAI de BANZAI!
Let's Go West! Lucky!　アホは元気のチカラ！

ナーナナ…　アホやCrazy!　ナーナナ…　オモロぃCrazy!
ナーナナ…　アホやCrazy!　ナーナナ…　オモロぃCrazy!
アホやCrazy!`},{id:11,title:"P&P",titleKana:"P&P",lyricist:"Madoka",composer:"Peter Nord・Mats Larsson",arranger:"Peter Nord・Mats Larsson",album:["go WEST よーいドン！","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{7}","パリピポ{25}","パリピポ(各会場オーラス){25}","パリピポ(兵庫オーラス){25}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){10}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){10}","ラッキィィィィィィィ7(大阪,宮城){10}","ラッキィィィィィィィ7(大阪オーラス){10}","ラッキィィィィィィィ7(宮城オーラス){10}","皆様のおかげSummer Carnival!{8}","なにわ侍　ハローTOKYO!!{2}","台風n Dreamer{2}"],singer:"WEST.",date:"2014-08-06",lyrics:`Wow wow P&P Beautiful
Wow wow P&P Wonderful

夢みたい　でも夢じゃない　ここが　そう　僕らの世界
自由で心地イイ場所さ　All day, All way, Feel so good

嘘みたい でも嘘じゃない　目に映る　広い世界
不安なんてどっかいっちゃったよ

どこまで走れるだろう？
どこまで近づけるんだろう？
あの大空まで　届きそう Fly away

1, 2, 3 Come on Come on Now!
僕らと一緒にいかが？P&P　It's a Beautiful Word
ここでBoys&Girls　どうぞご自由に遊んでって
遠慮はNo! No!
嬉しいときは歌って　楽しくなったらDanceしたっていい
気分はPerfect　心もPeakなら
合言葉はP&P!

Wow wow P&P Beautiful
Wow wow P&P Wonderful

夢みたい でも夢じゃない　ここはもう　僕らの世界
心に描いてた場所さ　All day, All way, Feel so good

嘘みたい　でも嘘じゃない　夢叶う　魔法の世界
涙だって笑顔に変わったよ

どこまで続くんだろう？
どこまで広がってくんだろう？
この大地を　揺らそうよ Jumping up!

1, 2, 3 Sing Sing Now!
僕らと一緒にいかが？P&P　It's a Wonderful Word
ここでStep by Step　リズム刻むように踊って
我慢はNo! No!
心のうたを歌って　物足りないならDanceしたっていい
誰もがPerfect　今がPeakなら
合言葉はP&P!

Wow wow P&P Wonderful

新しいこの世界で　また夢をみつけて
いつも絶好調　まさに最高潮さ

1, 2, 3 Come on Come on Now!
僕らと一緒にいかが？P&P　It's a Beautiful Word
ここでBoys&Girls　どうぞご自由に遊んでって
遠慮はNo! No!

1, 2, 3 Sing Sing Now!
僕らと一緒にいかが？P&P　It's a Wonderful Word
ここでStep by Step　リズム刻むように踊って
我慢はNo! No!
心のうたを歌って　物足りないならDanceしたっていい
誰もがPerfect　今がPeakなら
合言葉はP&P!

Wow wow P&P Beautiful
Wow wow P&P Wonderful
Yeah You're my girl
P&PでGo!`},{id:12,title:"Break Out!",titleKana:"Break Out",lyricist:"KOMU",composer:"加藤裕介",arranger:"山路一志",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{10}","一発めぇぇぇぇぇぇぇ！{5}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){5}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){5}","なにわ侍　ハローTOKYO!!{8}","台風n Dreamer{3}"],singer:"WEST.",date:"2014-08-06",lyrics:`Shout!　Let's break out!
Judge myself!

時代ぶち壊せ
Let's break out!　満たされない欲望を常に抱いた
Judge myself!　アスファルトにキスして貫いた前傾姿勢
Let's break out!　鮮明なプラン　頭ん中いつも描いた
Judge myself!　とりあえず目の前のバリケード粉砕希望

乱れた衝動
祈りを取り払い
歪んだ運命を
あざ笑え

尖ったままの眼差しは
The glitter of your eyes freeze even the despair
やすらぎさえも睨みつけ
FINE! Even the adversity becomes paradise
この闇夜を駆け抜ける

Let's break out!
Judge myself!

俺を止めてみろよ
Let's break out!　躊躇いは無い　確かに聞こえたゴーサイン
Judge myself!　周回もう凄え差で　突き放すポーカーフェイス
Let's break out!　いつかじゃない　今を生きる為の判断
Judge myself!　純情も策士も　どっちだってサイテーだろう？

乱れた欲望を

尖ったままの眼差しは
The glitter of your eyes freeze even the despair
やすらぎさえも睨みつけ
FINE! Even the adversity becomes paradise
尖ったままでいれるなら
Even if Love denies this feelings…
叶わぬ夢を見ていたい
I will hold on to the hope and sorrow
終わらない今日を
輝ける この闇夜を駆け抜ける

Let's break out!　Judge myself!
Let's break out!　Judge myself!
Judge myself!`},{id:13,title:"Criminal",titleKana:"Criminal",lyricist:"zopp",composer:"CHOKKAKU・Takuya Harada・Joakim Bjornberg・Christofer Erixon",arranger:"CHOKKAKU",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{11}","一発めぇぇぇぇぇぇぇ！{15}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){15}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){15}","パリピポ{16}","パリピポ(各会場オーラス){16}","パリピポ(兵庫オーラス){16}","24(ニシ)から感謝届けます♡{7}","24(ニシ)から感謝届けます♡(オーラス){7}","TO BE KANSAI COLOR-翔べ関西から-(大阪){20}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){19}","皆様のおかげSummer Carnival!{4}","なにわ侍　ハローTOKYO!!{9}","台風n Dreamer{7}","なにわ侍 団五郎一座{3}"],singer:"WEST.",date:"2014-08-06",lyrics:`火花が散る路地裏　出口のない闇の中
サーチライトから Run Run Run Run Run
君を連れ去って Running away
君のためなら　なんだってさ
出来んだ　だって　愛は無敵
流れる血を　心配そうに　君がじっと見つめるんだ

心隠して　生きるのは　ごめんなんだ　わかるだろ？
愛はいつも　命がけ

Dangerous love　乱れた　Sweet Criminal
戸惑ってる　暇なんて　ないぜ？
Dangerous love　踊ろうぜ　All through the night
もう　ギリギリ　Sweet Criminal
この愛はもう止められない　Criminal…

人波をかきわけて　ざわめく街を置き去り
掴みかかる腕ほどき
車飛び乗りハイウェイへと
誰も信用なんて出来ないまま
生きてた　そうさ　今日までは
君が変えてくれたんだMy girl　誰にも渡さない

後悔なんてない　君なしの　未来なんていらないよ
愛に生きる　どこまでも

You're my treasure　狂わす　理性Tonight
彷徨ってる　心よ　Good night
You're my treasure　世界が　終わっても
もう　構わない　Sweet Criminal
誰にも邪魔はさせない　Criminal…

過去は捨てて　君と二人　未来へ

Dangerous love　乱れた　Sweet Criminal
戸惑ってる　暇なんてないぜ？
Dangerous love　踊ろうぜ　All through the night
さぁ　Come on Come on…　Come on Come on…!

You're my treasure　狂わす　理性Tonight
彷徨ってる　心よ　Good night
You're my treasure　世界が　終わっても
もう　構わない　Sweet Criminal
Dangerous love　乱れた　Sweet Criminal
戸惑ってる　暇なんて　ないぜ？
Dangerous love　踊ろうぜ　All through the night
もう　ギリギリ　Sweet Criminal
この愛はもう止められない　Criminal…
誰にも邪魔はさせない　Criminal…`},{id:14,title:"ちゃうねんっ!!",titleKana:"ちゃうねんっ!!",lyricist:"Kohei Yokono・ULO",composer:"Kohei Yokono・ULO",arranger:"Kohei Yokono",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["皆様のおかげSummer Carnival!{7}","なにわ侍　ハローTOKYO!!{10}","なにわ侍 団五郎一座{7}"],singer:"WEST.",date:"2014-08-06",lyrics:`本当は誰だって
やれば出来る子や
僕達の未来は
輝くダイヤモンド
(ギラギラ)

マニュアルなんて存在しない
勢いでイイ
シャカリキに自分を信じて
やるしかないねん！

スタートダッシュかまして
膝を擦りむいても
まだいける　怖がらずに
ど派手に行こう

チャチャチャ
チャチャちゃうね～ん
失敗もええね～ん
また気張りゃええね～ん
恥ずかしくないね～ん

チャチャチャ
チャチャちゃうね～ん
「やれる事少しでもええから」
チャチャチャ
チャチャちゃうね～ん
「人生は最後まで never give up」

チャチャチャ♪

調子乗って
ドヤされても　やめられない
好きな事に夢中って
素敵な事やで
(そやそや)

頭の中でめぐりめぐる
妄想世界
アホな事やと笑われても
正面突破!!

疲れたらひと眠り
飯食ってふた眠り
夢見てる　あの世界は
今も待ってる

チャチャチャ
チャチャちゃうね～ん
口だけじゃあかんね～ん
カッコだけちゃうね～ん
飛び込めばええね～ん

チャチャチャ
チャチャちゃうね～ん
「始まりは誰でも怖いけど」
チャチャチャ
チャチャちゃうね～ん
「やる時はやらねば never give up」

チャチャチャ♪

いつの日も魂には
熱い情熱を
辛くても泣きたくても
すこぶるファイヤー!!!!

チャチャチャ
チャチャちゃうね～ん
失敗もええね～ん
また気張りゃええね～ん
恥ずかしくないね～ん

チャチャチャ
チャチャちゃうね～ん
アホだけじゃアカンね～ん
オカンも怒るで～ぃ
お前誰やね～ん

チャチャチャ
チャチャちゃうね～ん
「やれる事少しでもええから」
チャチャチャ
チャチャちゃうね～ん
「人生は最後まで never give up」

チャチャチャ
チャチャちゃうね～ん
「始まりは誰でも怖いけど」
チャチャチャ
チャチャちゃうね～ん
「やる時はやらねば never give up」

チャチャチャ♪`},{id:15,title:"バンバンッ!!",titleKana:"バンバンッ!!",lyricist:"KOMU",composer:"浅利進吾",arranger:"鈴木雅也",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",performances:["なにわともあれ、ほんまにありがとう！{12}","一発めぇぇぇぇぇぇぇ！{16}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){16}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){16}","パリピポ{23}","パリピポ(各会場オーラス){23}","パリピポ(兵庫オーラス){23}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){3}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){3}","ラッキィィィィィィィ7(大阪,宮城){3}","ラッキィィィィィィィ7(大阪オーラス){3}","ラッキィィィィィィィ7(宮城オーラス){3}","24(ニシ)から感謝届けます♡{21}","24(ニシ)から感謝届けます♡(オーラス){21}","なうぇすと(各会場オーラス){31}","なうぇすと(広島オーラス){31}","WESTival(北海道オーラス){29}","WESTV!{14}","WESTV!(各会場オーラス){14}","WESTV!(北海道オーラス){14}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){35}","DOME TOUR AWARD(大阪,福岡){41}","DOME TOUR AWARD(東京){42}","DOME TOUR AWARD(東京オーラス){42}","台風n Dreamer{8}"],singer:"WEST.",date:"2014-08-06",lyrics:`今　高く掲げた指の示す　夢の先へ

OK! 毎度毎度！
King of the Partyの登場！

Everybody Yo! Put your hands up!!
Say!! BaBaBaBang!

Bang! Bang! その手上げろ！ 今を生きるアツさをみせろ
やっぱ人生　楽しめなきゃ嘘だろ
High! High! その手上げろ！ 大空に声響かせろ
こんな喜び　こんな瞬間そう　続け永久に
燦然と咲き誇れ　BaBaBaBang!

よそ見はDoubt (Hey) 狙いすましてBang Bang!!
そうThe timeは (Why?) 待ったなし (Yeah!)
Let's hurry hurry up! (Ho!)
I'm gonna make it いつかは　なんて言ってちゃ So wack
今すぐJumpin'さ　掴み取れ　そう
Everytime (Time!) Every night (Night!)
決して気は抜けない (Yo!)
Yes so アンテナは常に全開で Just 速攻Lock on!! で行動に
歌え　叫べ　尽き果てるまで (Uh) もっと感情的に (Yeah!)
Everything, Boooom!! Yo!!

簡単じゃねえ　楽じゃねえ
だけど決めたんだろ自分で
We gotta get! We gotta go!
年中無休で　夢中で飛びまわれ
Are you ready?
Say! BaBaBaBaBaBaBang!

Bang! Bang! その手上げろ！ 今を生きるアツさをみせろ
やっぱ人生　楽しめなきゃ嘘だろ
High! High! その手上げろ！ 大空に声響かせろ
こんな喜び　こんな瞬間そう　続け永久に
燦然と咲き誇れ　BaBaBaBang!

まだまだ行くぜ Aight? こんなもんじゃねえ Jumpin' high
Yes 可能性　You know what I'm saying?
Bang!! Bang!! Bang!! Bang!!
起きちゃ寝ての繰り返し そんなボンクラ意味はねえし
It's my life 揺るがない　Everybody say “What !!!???”

冗談じゃねえ　テキトーじゃねえ
どんなに馬鹿げた夢だって
We gotta get! We gotta go!
年中無休で 目立って駆け抜けろ
Are you ready?
Say! BaBaBaBaBaBaBang!

Bang! Bang! その手上げろ！ 今を生きるアツさをみせろ
やっぱ人生　楽しめなきゃ嘘だろ
High! High! その手上げろ！ 大空に声響かせろ
こんな喜び　こんな瞬間そう　続け永久に
燦然と咲き誇れ　BaBaBaBang!

きっと僕らが伸ばすこの指先は
そう　夢を繋げる架け橋

変幻自在な未来を目指して　そう Are you ready?
Say! BaBaBaBaBaBaBang! BaBaBaBaBaBaBang!

Bang! Bang! その手上げろ！ 今を生きるアツさをみせろ
やっぱ人生　楽しめなきゃ嘘だろ
High! High! その手上げろ！ ともに今日を駆け抜け叫べ
こんな喜び　こんな瞬間そう　続け永久に
年中無休で　さあ Are you ready? Say!

Bang! Bang! その手上げろ！ 今を生きるアツさをみせろ
やっぱ人生　楽しめなきゃ嘘だろ
High! High! その手上げろ！ 大空に声響かせろ
こんな喜び　こんな瞬間そう　続け永久に
燦然と咲き誇れ　BaBaBaBang!

こっから生まれる明日への一歩　恐れる事なく威風も堂々
ほらその表情　気分も上々　世界に誇れよ俺らの人情
かなりアツいぜ今夜のBeat　やりすぎぐらいが俺たちBest
涙がジョージョー　感動劇場　まだまだ行くぜこのまま上々

感謝感激で Say! BaBaBaBaBaBaBang!
Are you ready?
Say! BaBaBaBaBaBaBang!`},{id:16,title:"Ole Ole Carnival!",titleKana:"Ole Ole Carnival!",lyricist:"Shusui・ha-j",composer:"Shusui・ha-j",arranger:"Shusui・ha-j",album:["go WEST よーいドン！","go WEST よーいドン！[通常盤]"],announce:"t",performances:["一発めぇぇぇぇぇぇぇ！{19}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){19}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){19}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){12}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){12}","ラッキィィィィィィィ7(大阪,宮城){12}","ラッキィィィィィィィ7(大阪オーラス){12}","ラッキィィィィィィィ7(宮城オーラス){12}","ジャニーズWEST デビュー記念イベント デビューしてもええじゃないか ～バンザイ!! その先の一等賞へ～{1}","皆様のおかげSummer Carnival!{9}","台風n Dreamer{9}"],singer:"WEST.",date:"2014-08-06",lyrics:`今年もアゲアゲSummer　毎度おかげSummer
～Youもみんなも　おいでや!～

ええじゃないかって背中を押します (ほんまにありがとSummer)
夏生まれが5人もいまして (ほんまにありがとSummer)
季節ごとハジけて　ハメハメ外して
ここでカーニバル (Ole Ole カフェオレ？)

ちょけて外して　眠れなくても
ピーチ チェリー　パインナッポー
よりどりみどり Yeah!

今年もアゲアゲSummer　毎度おかげSummer
なんてったって　夏だから
お祭りSummer　ノリノリWEST
どんなんやって　そんなんやって　フリフリ
愛に恋と　夏やん、しゃ～ないねん
トコナツ　ここ夏
Ole Ole Carnival!

イケメンぞろい　みんなでボケるし (ほんまにありがとSummer)
色気・食い気　なんでもアリです (ほんまにありがとSummer)
気合い入れ過ぎちゃって　フラフラ　ランデブー
それもパラダイス (PARA PARA　炒飯？？)

友達も家族もみんな同じや
トマト　レタス　トーモロコッシー
831もモリモリ

俺たちイケイケSummer　突然Thunder
そんでもって また晴れて
お任せDinner　ハラヘリWEST
どんなんやって　そんなんやって　フリフリ
誰も彼も　何が出るかな？
夏です、ドーナツ！
Ole Ole Carnival!

夏だ　夏だ　騒げ　騒げ
花火 PARTY PARTY　スイカ　ワリワリ
海だ　山だ　はしゃげ　はしゃげ
Ole Ole Carny Balloon!!

今年もアゲアゲSummer　毎度おかげSummer
なんてったって　夏だから
お祭りSummer　ノリノリWEST
こんなんなって　そんなんなって　ヘンなんなって Wao!!

イケイケSummer　キタキタSummer
なんてったって　夏だから
Ole Ole Summer　神様Summer
どんなんやって　そんなんやって　フリフリ
愛に恋と　夏やん、しゃ～ないねん
トコナツ　ここ夏　夏です、夏フェス
Ole Ole Carnival!`},{id:17,title:"ジパングおおきに大作戦",titleKana:"じぱんぐおおきにだいさくせん",lyricist:"市川喜康・マツコタツロウ・ha-j",composer:"市川喜康・マツコタツロウ・ha-j",arranger:"市川喜康・マツコタツロウ・ha-j",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回A]","ジパング・おおきに大作戦/夢を抱きしめて[初回B]","ジパング・おおきに大作戦/夢を抱きしめて[初回C]","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["一発めぇぇぇぇぇぇぇ！{2}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){2}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){2}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){21}","パリピポ{3}","パリピポ(各会場オーラス){3}","パリピポ(兵庫オーラス){3}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){26}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){26}","ラッキィィィィィィィ7(大阪,宮城){27}","ラッキィィィィィィィ7(大阪オーラス){27}","ラッキィィィィィィィ7(宮城オーラス){27}","24(ニシ)から感謝届けます♡{3}","24(ニシ)から感謝届けます♡(オーラス){3}","なうぇすと(〜横浜3日目){26}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){26}","なうぇすと(各会場オーラス){26}","なうぇすと(広島オーラス){26}","WESTival{21}","WESTival(各会場オーラス){21}","WESTival(北海道オーラス){21}","W trouble12/12夜,12/13昼{22}","AWARD(大阪){20}","AWARD(新潟){21}","AWARD(宮城){21}","AWARD(愛知){21}","AWARD(横浜,静岡,福岡,広島,北海道){21}","AWARD(北海道オーラス){21}","DOME TOUR AWARD(大阪,福岡){23}","DOME TOUR AWARD(東京){24}","DOME TOUR AWARD(東京オーラス){24}","なにわ侍 団五郎一座{8}"],singer:"WEST.",date:"2014-10-08",lyrics:`(そーりゃ！ そーりゃ！)
(そーりゃそりゃ　そーりゃそりゃ！)
エビ・バディ・バディ Say “OOKINI”
ニッポンの空に叫ぼう
明日も元気に参りましょ
合言葉は、お・お・き・に！

あっちゃこっちゃと忙しく
今日も全開　大騒ぎ
てんや (てんや)
わんや (わんや)
ややこし日々やけど…

感謝感謝　感謝のこころ　忘れずに
西へ東へ　ジャジャーンと伝えましょう

(そーりゃそりゃ　そーりゃそりゃ！)
エビ・バディ・バディ Say “OOKINI”
ニッポンの空に叫ぼう
ひとりじゃないで　泣いて　はしゃいで
毎度　お・お・き・に！
(どやさー　どやさ！)
ベリー・ハッピー・ハッピー Say “OOKINI”
ニッポンをひとつにしましょう
笑うてみるだけで　ラッキー最高潮
明日も元気に参りましょ
合言葉は、お・お・き・に！

悔し涙もこぼれます
どうも近頃あきまへん
てんや (てんや)
わんや (わんや)
しんどい日々やから…

感謝感謝　感謝の笑顔　絶やさずに
いつかド派手な　花火を上げましょう

(そーりゃそりゃ　そーりゃそりゃ！)
エビ・バディ・バディ Say “OOKINI”
ニッポンの空に叫ぼう
あきらめへんで　勝っても負けても
毎度　お・お・き・に！
(どやさー　どやさ！)
ベリー・ハッピー・ハッピー Say “OOKINI”
ニッポンをひとつにしましょう
七転び八起きで　ラッキー最高潮
ぼちぼち踏ん張って参りましょ
合言葉は、お・お・き・に！

(そーりゃそりゃ　そーりゃそりゃ　そーりゃそりゃ！ はっ！)
(そーりゃそりゃ　そーりゃそりゃ　どっこいしょーどっこいしょ！)
(そーりゃそりゃ　そーりゃそりゃ　そーりゃそりゃ！ はっ！)

(ジャニーズWEST)
ごっついことはエエことやけど
(ジャニーズWEST)
小さなことからコツコツと
(ジャニーズWEST)
喜びを育てましょう

(よぉ～っ！)
(そーりゃそりゃ　そーりゃそりゃ!)
エビ・バディ・バディ Say “OOKINI”
ニッポンの空に叫ぼう
ひとりじゃないで　泣いて　はしゃいで
毎度　お・お・き・に！
(どやさー　どやさ！)
ベリー・ハッピー・ハッピー Say “OOKINI”
ニッポンをひとつにしましょう
笑うてみるでけで　ラッキー最高潮
明日も元気に参りましょ
合言葉は、お・お・き・に！

どなた様も、お・お・き・に！

お・お・き・に！`},{id:18,title:"夢を抱きしめて",titleKana:"ゆめをだきしめて",lyricist:"canna",composer:"Shusui・RAAY・ART HUNTER",arranger:"RAAY",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回A]","ジパング・おおきに大作戦/夢を抱きしめて[初回B]","ジパング・おおきに大作戦/夢を抱きしめて[初回C]","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["一発めぇぇぇぇぇぇぇ！{11}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){11}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){11}","パリピポ{5}","パリピポ(各会場オーラス){5}","パリピポ(兵庫オーラス){5}","なうぇすと(〜横浜3日目){22}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){22}","なうぇすと(各会場オーラス){22}","なうぇすと(広島オーラス){22}","皆様のおかげSummer Carnival!{6}"],singer:"WEST.",date:"2014-10-08",tiup:"MBS/TBS系深夜ドラマ『アゲイン!!』主題歌",lyrics:`午前二時の　待ち合わせ
びしょ濡れに　なりながら
駆け出してく

あの頃の僕はただ
恐れも知らずに生きていたんだ

傷ついて冷えきった心
君だけが白い胸で
あたためてくれた

夢を抱きしめて
涙と誓いを胸に
どんな辛い日々が来たとしても
強く強く生きていたい

夢を抱きしめて
愛を抱きしめて
逃げないで今なら言えるよ君に…

恋に落ちた瞬間に
何もかも奪われて
落ちてゆく

真実の愛なんて
どこに行けば見つけられるのだろう

たとえば　君がそばにいたら
どんな壁も乗り越える僕へ変わるかな

夢を抱きしめて
唇を重ね合う
僕ら二人ひとつになるために
強く強く抱きしめ合う

夢を抱きしめて
愛を抱きしめて
逃げないで今なら言えるよ君に…

大切なことは
君を信じることで
募る想い大事にあたためて
君へ愛をつらぬくこと

夢を抱きしめて
涙と誓いを胸に
どんな辛い日々が来たとしても
強く強く生きていたい

夢を抱きしめて
愛を抱きしめて
逃げないで今なら
言えるよ君に…

これからずっと愛してると`},{id:19,title:"WESTERN PARADE",titleKana:"WESTERN PARADE",lyricist:"Shusui",composer:"Shusui・Fredrik Hult・Car Utbult",arranger:"Shusui・Fredrik Hult・Car Utbult",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回C]"],announce:"t",performances:["一発めぇぇぇぇぇぇぇ！{7}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){7}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){7}"],singer:"WEST.",date:"2014-10-08",lyrics:`夢を叶えるために
旅に出よう、派手なパレードで
7つの海を渡り
辿り着いた　夢の楽園

君に勇気と希望を
ほら　僕らと　さぁ　盛り上がれ！

パレードに行こう
みんなで騒ごう
派手派手衣装　アゲアゲで！
歌わにゃSong!
踊らにゃ損やで！
友達 You達もSo
一緒に笑いなよ WOW

北は北海道　でっかいどう！
南は沖縄　美ら海
仙台　会津若松
さいたま　よこはまアリーナ

僕ら　君の笑顔のためなら
何でもやれるやろ

It's WESTERN PARADE
僕らとはしゃごう
ポジティブパワー　全開で
感じたらええ
裸足のままで
子供の頃のように
無邪気に笑えばええ YEAH YEAH

大阪　東京　名古屋
札幌　福岡　ドーム
富士山　あべのハルカス
High High High!!!
岡山　広島　高知
粉もん　長崎ちゃんぽん
僕ら
ジャニーズWESTやぁ～！

パレードに行こう
みんなで騒ごう
派手派手衣装　アゲアゲで！
歌わにゃSong!
踊らにゃ損やで！
友達 You達もSo
一緒に笑いなよ WOW`},{id:20,title:"Can’t Stop",titleKana:"Can’t Stop",lyricist:"zoop",composer:"Takuya Harada・STEVEN LEE・Goldfingerz",arranger:"鈴木雅也",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回C]"],announce:"t",performances:["一発めぇぇぇぇぇぇぇ！{6}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){6}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){6}","パリピポ{7}","パリピポ(各会場オーラス){7}","パリピポ(兵庫オーラス){7}","24(ニシ)から感謝届けます♡{6}","24(ニシ)から感謝届けます♡(オーラス){6}","TO BE KANSAI COLOR-翔べ関西から-(大阪){19}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){18}","なにわ侍 団五郎一座{2}"],singer:"WEST.",date:"2014-10-08",lyrics:`Can't stop

シャンデリア　煌めき　宴のざわめき
Feel so lonely こんなそばにいても
Can't even touch 君の存在は　近くて遠い

ヤツがくれた　指輪見つめて
作り笑いした君
ふいに視線　ぶつかる
「助けて欲しい」
そんな目してた

Come to me 伝えたい But I can't tell
抱きしめたい強く But I can't do
連れ去りたい　想いが溢れた

綺麗な愛なんて I don't care
世界が軽蔑したって
この想いを遂げたい
もうCan't stop lovin' you
汚れた愛でも I don't care
狂いそうなくらい君が欲しい
ただ君だけ Can't stop lovin' you

君の手つかんで　屋敷を駆けてゆく
Run like crazy ドアの前で止まる
Come to myself ノブを握り戸惑う心

薬指の指輪　抜き捨て
口を結びうなずく
黒目がちな瞳が
「ついて行くよ」
覚悟告げてた

君に出会って For the first time
愛の意味を知った I can say that
二人なら　なにも怖くはないよ

叶わぬ愛なんてないんだ
誰がなに言ったって
この熱は消えない
もうCan't stop lovin' you
命をかける愛なんだ
理屈なんてない　これが多分
運命だったんだよ Can't stop lovin' you

Yeah I can be the one for you
Let's go
Can't stop

君は僕の一部
それでいて全部
誰にも渡さない
No one can stop me

汚れた愛でも I don't care
狂いそうなくらい君が欲しい
ただ君だけ Can't stop lovin' you

叶わぬ愛なんてないんだ
誰がなに言ったって
この熱は消えない
もうCan't stop lovin' you
命をかける愛なんだ
理屈なんてない　これが多分
運命だったんだよ Can't stop lovin' you

Can't stop`},{id:21,title:"SUPERSTAR",titleKana:"SUPERSTAR",lyricist:"Shusui・下地 悠・Litz・堀江里沙",composer:"Shusui・Matjaz Vlasic・Bostjan Grabnar",arranger:"Vlasic・Bostjan Grabnar",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]"],announce:"t",performances:["一発めぇぇぇぇぇぇぇ！{14}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){14}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){14}","パリピポ{14}","パリピポ(各会場オーラス){14}","パリピポ(兵庫オーラス){14}","なにわ侍 団五郎一座{4}"],singer:"WEST.",date:"2014-10-08",tiup:"MBS/TBS系深夜ドラマ『アゲイン!!』オープニング曲",lyrics:`立ち上がろうぜ　怖がらないで
夢に向かって　手にするまで
熱い涙　ネバギバ青春
今を生きろ！ 見せたれ！根性！

迷いと希望　不安、プライド　絡みあう限界超えて
リアルな明日へ　踏み出せ一歩
信じるまま奇跡起こせ

Come on, Here we go, Take a chance again!
LaLaLa…
Here we go, Take a chance again!
LaLaLa…
Here we go, Get a chance again!
LaLaLa…
Here we go, Take a chance again!
LaLaLa…

あの日見てた　傷だらけで
沈む太陽　悔しくても
やり直そうぜ　食らいついて
強くなるんだ！ 走り出すんだ！

Come on, Here we go, Take a chance again!
LaLaLa…
Here we go, Take a chance again!
LaLaLa…
Here we go, Get a chance again!
LaLaLa…
Here we go, Take a chance again!
LaLaLa…

Come on, Here we go, Take a chance again!
LaLaLa…
Here we go, Take a chance again!
LaLaLa…
Here we go, Get a chance again!
LaLaLa…
Here we go, Take a chance again!
LaLaLa…
Here we go`},{id:22,title:"for now and forever",titleKana:"for now and forever",lyricist:"ケリー",composer:"Anders Dannvik・Randy Goodrum",arranger:"CHOKKAKU",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]"],announce:"t",performances:["パリピポ{22}","パリピポ(各会場オーラス){22}","パリピポ(兵庫オーラス){22}","TO BE KANSAI COLOR-翔べ関西から-(大阪){1}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){1}","TO BE KANSAI COLOR-翔べ関西から-(東京){1}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){1}","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{1}","台風n Dreamer{1}"],singer:"WEST.",date:"2014-10-08",lyrics:`まだ見ぬ未来を　想像(イメージ)して
怖くなる日も　あったけれど yeah
絆は強く　軌跡残して
僕らの物語(ストーリー)を　描きだした

ねえ　僕らが生きた　証し残そう
今、この時に

for now and forever
同じ想いを胸に　同じ場所へと共に GO WEST GO WEST
for now and forever
強い風が吹いても　厚い雲かかっても GO WEST いつも
同じ距離で輝いて　同じ夢を見て　歌を歌っていよう
for now and forever

夜が明けるたび　孤独抱いて
変わらぬ夢を　追いかけてきた so
もう大丈夫さ　道に迷っても
君との出会いが　僕ら導く

ねえ　この青く伸びる空の下で
約束しよう

for now and forever
まだ知らない明日へ　まだ知らない世界へ GO WEST GO WEST
for now and forever
喜び分け合って　悲しみ乗り越えて GO WEST いつも
僕に出来る事がある　君の側にいる　どんな未来が来ても
for now and forever

言葉にならない
胸の高鳴り
手を叩いて
(forever)
ねえ一緒に
(forever)
その鼓動(リズム)を聞かせて

for now and forever
同じ想いを胸に　同じ場所へと共に GO WEST GO WEST
for now and forever
強い風が吹いても　厚い雲かかっても GO WEST いつも
同じ距離で輝いて　同じ夢を見て　歌を歌っていよう
for now and forever`},{id:23,title:"ズンドコ パラダイス",titleKana:"ずんどこ ぱらだいす",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["ズンドコ パラダイス","ズンドコ パラダイス[初回A]","ズンドコ パラダイス[初回B]","ズンドコ パラダイス[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["一発めぇぇぇぇぇぇぇ！{9}","一発めぇぇぇぇぇぇぇ！(各会場オーラス){9}","一発めぇぇぇぇぇぇぇ！(大阪オーラス){9}","パリピポ{2}","パリピポ(各会場オーラス){2}","パリピポ(兵庫オーラス){2}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){23}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){23}","ラッキィィィィィィィ7(大阪,宮城){24}","ラッキィィィィィィィ7(大阪オーラス){24}","ラッキィィィィィィィ7(宮城オーラス){24}","24(ニシ)から感謝届けます♡{2}","24(ニシ)から感謝届けます♡(オーラス){2}","なうぇすと(〜横浜3日目){25}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){25}","なうぇすと(各会場オーラス){25}","なうぇすと(広島オーラス){25}","WESTival{3}","WESTival(各会場オーラス){3}","WESTival(北海道オーラス){3}","WESTV!{11}","WESTV!(各会場オーラス){11}","WESTV!(北海道オーラス){11}","W trouble12/12夜,12/13昼{23}","rainboW(北海道){26}","rainboW(宮城,愛知,新潟,埼玉,熊本){27}","rainboW(円盤){27}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){26}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){26}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){26}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){26}","Mixed Juice(北海道オーラス){26}","TO BE KANSAI COLOR-翔べ関西から-(大阪){37}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){34}","TO BE KANSAI COLOR-翔べ関西から-(東京){32}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){32}","POWER(宮城){24}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){23}","POWER(愛知オーラス){23}","AWARD(大阪){16}","AWARD(新潟){16}","AWARD(宮城){16}","AWARD(愛知){16}","AWARD(横浜,静岡,福岡,広島,北海道){16}","AWARD(北海道オーラス){16}","DOME TOUR AWARD(大阪,福岡){5}","DOME TOUR AWARD(東京){5}","DOME TOUR AWARD(東京オーラス){5}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){26}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){26}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){26}","メトロック2022(大阪){2}","LOVE MUSIC FESTIVAL2022{3}","サマソニ2023(大阪,東京){2}","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{3}","なにわ侍 団五郎一座{6}"],singer:"WEST.",date:"2015-02-04",lyrics:`(ズン　ズン　ズンズンズンズン)
ズンズンドコ　ズンズンドコ　今日も絶好調
ズンズンドコ　ズンズンドコ　浪速最高潮
ズバッと決めるで！ ズンドコ　パラダイス

コンビニ座った　にーちゃん　ねーちゃんも
元気で　陽気な　おっちゃん　おばちゃんも
がんばる　張り切る　ついてる　俺達も
夢の花咲け　はい、たっち！ (はい～！)

熱き　想い　滾(たぎ)らせて
燃える　胸の　心意気
俺らの明日はどっちだ？
日本中へと　羽ばたけ

(ズン　ズン　ズンズンズンズン)
ズンズンドコ　ズンズンドコ　今日も絶好調
ズンズンドコ　ズンズンドコ　浪速最高潮
しみったれた日も　甘ったれな日も
笑ったれ　踊ったれ　キンキラキンのキン
ズンズンドコ　ズンズンドコ　好きにやっちゃって～
ズンズンドコ　ズンズンドコ　派手にイっちゃって～
ズバッと決めるで！ ズンドコ　パラダイス

ボケては突っ込む　とーちゃん　かーちゃんも
お祭り騒ぎの　じーちゃん　ばーちゃんも
一切合切　任せろ　俺達に
みんな笑って　はい、ちーず！ (はい～！)

明日は明日の風任せ
俺は俺の新世界
惚れた腫れた恋心
世界中へと　振り撒け

(ズン　ズン　ズンズンズンズン)
ズンズンドコ　ズンズンドコ　涙拭いたって
ズンズンドコ　ズンズンドコ　笑顔見したって
ズッコケてもええねん　這い上がればええねん
歌ったれ　叫んだれ　ピッカピカのピース
ズンズンドコ　ズンズンドコ　前を向いちゃって～
ズンズンドコ　ズンズンドコ　高く飛んじゃって～
バシっと行きましょう！ ズンドコ　パラダイス

掴んだ夢　その先に
続く道　一歩ずつ　踏みしめて

(ズン　ズン　ズンズンズンズン)
ズンズンドコ　ズンズンドコ　今日も絶好調
ズンズンドコ　ズンズンドコ　浪速最高潮
しみったれた日も　甘ったれな日も
笑ったれ　踊ったれ　キンキラキンのキン
ズンズンドコ　ズンズンドコ　好きにやっちゃって～
ズンズンドコ　ズンズンドコ　派手にイっちゃって～
ズバッと決めるで！ ズンドコ　パラダイス

(ズン　ズン　ズンズンズンズン)
ズンズンドコ　ズンズンドコ　涙拭いたって
ズンズンドコ　ズンズンドコ　笑顔見したって
ズッコケてもええねん　這い上がればええねん
歌ったれ　叫んだれ　ピッカピカのピース
ズンズンドコ　ズンズンドコ　前を向いちゃって～
ズンズンドコ　ズンズンドコ　高く飛んじゃって～
バシっと行きましょう！ ズンドコ　パラダイス

もういっちょ
ズバッと決めるで！ ズンドコ　パラダイス`},{id:24,title:"SAKURA〜旅立ちのうた〜",titleKana:"SAKURA〜たびだちのうた〜",lyricist:"Shusui",composer:"Shusui・Matjaz Vlasic・Bostjan Grabnar",arranger:"船山基紀",album:["ズンドコ パラダイス","ズンドコ パラダイス[初回A]","ズンドコ パラダイス[初回B]","ズンドコ パラダイス[通常盤]"],announce:"t",performances:["パリピポ{20}","パリピポ(各会場オーラス){20}","パリピポ(兵庫オーラス){20}"],singer:"WEST.",date:"2015-02-04",lyrics:`もう　春の匂いが　この街を包む頃に
あぁ　もう　冬の面影　少しずつ　遠ざかって

もう一度　君の言葉　思い出して　ナミダ溢れ
目を閉じて 窓の外は　雪も溶けて　春色の世界

SAKURA SAKURA
また咲き誇る
SAKURA SAKURA
君の下で
僕らの夢　叶えるため
今は　旅立ちのうた

そう　愛しい君を　失う恐さの中で
まだ見ぬ　未来の地図を
はっきり描けなくても

もう二度と君と　会えなくても　振り返らない
いつかは　そう　この涙を　力に変えて　歩いてゆくんだ

SAKURA SAKURA
今咲き乱れ
SAKURA SAKURA
君を想う
すぐそばにある　幸せなら
僕が君に贈るよ

僕と君の思い出の場所は変わらない
夕日が沈むまで　はしゃいでいたね
ただ一緒にいれば　それで良かったんだ
そして　僕らは恋に落ちていった

SAKURA SAKURA
なでしこ色の
SAKURA SAKURA
舞い散る恋

SAKURA SAKURA
また咲き誇る
SAKURA SAKURA
君の下で
僕らの夢　叶えるため
今は旅立ちのうた

SAKURA 旅立ちのうた`},{id:25,title:"青春ウォーーー!!",titleKana:"せいしゅんうぉーーー!!",lyricist:"下地悠",composer:"川口進・MiNE",arranger:"CHOKKAKU",album:["ズンドコ パラダイス","ズンドコ パラダイス[通常盤]"],announce:"t",performances:["パリピポ{1}","パリピポ(各会場オーラス){1}","パリピポ(兵庫オーラス){1}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){11}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){11}","ラッキィィィィィィィ7(大阪,宮城){11}","ラッキィィィィィィィ7(大阪オーラス){11}","ラッキィィィィィィィ7(宮城オーラス){11}","24(ニシ)から感謝届けます♡{24}","24(ニシ)から感謝届けます♡(オーラス){24}","AWARD(新潟){15}","AWARD(横浜,静岡,福岡,広島,北海道){15}","AWARD(北海道オーラス){15}"],singer:"WEST.",date:"2015-02-04",lyrics:`さぁCome on！ It's alright！

青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
シャカリキ Yeah Yeah Yeah Yeah Yeah
Yeah Yeah Yeah
青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
バリバリ Yeah Yeah Yeah Yeah Yeah
Yeah Yeah Yeah
モット(モット) ズット(Forever)
そう　ララララララ
青春やねん

思い立った瞬間　未来が動き出して(Good day)
果てしない妄想　デッカく膨らんで暴走
惜しみなく寝だめしてメシ食うたった！
いつでも Here We Go Goやで

西へ東へ　駆けまわって
太陽みたいに　ピッカピー
北へ南へ　ハッピー探して
めちゃめちゃデッカイ　夢を描くんや

青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
シャカリキ Yeah Yeah Yeah Yeah Yeah
Yeah Yeah Yeah
青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
バリバリ Yeah Yeah Yeah Yeah Yeah
Yeah Yeah Yeah
ワクワクすること　めっちゃ好きやねん
ドキドキしてたいねん
モット(モット) ズット(Forever)
そう　ララララララ
青春やねん

めんどくさいこと　さしづめほっといてって(Bad day)
おもろそうなこと　たいらげちゃっていこうや
ひょんなことで才能が花開くって!?
宝箱　開けたれ!!

日進月歩で　結果はオーライ
マイペースでも　いいんじゃない
一期一会　感謝しようや
広い地球で　逢えたミラコーやん

青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
ガッツリ Yeah Yeah Yeah Yeah Yeah
Yeah Yeah Yeah
青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
Yeahって　言え～Yeah Yeah Yeah Yeah
Yeah Yeah Yeah
楽しいことは やめられへんねん
イマは今しかない
キット(キット) ズット(Forever)
そう　ララララララ
青春やねん

サンセット？ なんでやねんって？
そやけど寝て起きればまた陽は昇る
青春は止まらへんわ

青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
みんなで Yeah Yeah Yeah Yeah Yeah
Yeah Yeah Yeah
青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
ジャス民 Yeah Yeah Yeah Yeah Yeah

青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
シャカリキ Yeah Yeah Yeah Yeah Yeah
Yeah Yeah Yeah
青春　ウォーウォーウォーウォーウォー
ウォーウォーウォーウォーウォー
バリバリ Yeah Yeah Yeah Yeah Yeah
Yeah Yeah Yeah
ワクワクすること　めっちゃ好きやねん
ドキドキしてたいねん
モット(モット) ズット(Forever)
そう　ララララララ
青春やねん`},{id:26,title:"Time goes by",titleKana:"Time goes by",lyricist:"あいみょん",composer:"Shusui・川口進",arranger:"ha-j",album:["ズンドコ パラダイス","ズンドコ パラダイス[通常盤]"],announce:"t",performances:["パリピポ{24}","パリピポ(各会場オーラス){24}","パリピポ(兵庫オーラス){24}","AWARD(大阪){28}","AWARD(新潟){29}","AWARD(宮城){29}","AWARD(愛知){29}","AWARD(横浜,静岡,福岡,広島,北海道){29}","AWARD(北海道オーラス){29}","SPECIAL LIVE(サムシング・ニュー[初回B]){5}"],singer:"WEST.",date:"2015-02-04",lyrics:`忘れられないまま　大人になっていた
高いビルを目でなぞり　周り続ける街で
情けないほどに思い出すこと
嘘と書いて石を投げた　僕の顔だった

何もなかったようなそぶり
ごまかし続けていた言葉も
ブレーキをかけたままじゃ一歩も前には進めない

限られた 時間(とき)でどれだけの人に出会えるのかな
後悔してばかりのあの日を　消して
目の前に　ある大切なものに気づく時は来るさ
無限大の　明日があるから

答えられなかった　自信がなかったから
今でも知らんふりして通る　傷つけた場所を

どうでもいい事と割り切って
電話越しに聞こえた泣き声を
今でも思うたび　抱きしめたくなる　ごめんねと

間違いじゃ　なかったとあの日確かに強がっていた
今になって　気づくことばかり　僕は
そばにいる　優しさに照れ笑い素直になりたいから
差し伸べた　手を握らせてよ

出会い　別れを繰り返し　いつだって
オレンジ色の箱の中で　揺れる僕らの影

限られた　時間(とき)でどれだけの人に出会えるのかな
後悔してばかりのあの日を　消して
目の前に　ある大切なものに気づく時は来るさ
無限大の　明日があるから
何度でも　明日は来るから`},{id:27,title:"パリピポアンセム",titleKana:"ぱりぴぽあんせむ",lyricist:"永田雅規",composer:"永田雅規",arranger:"ha-j",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",performances:["パリピポ{4}","パリピポ{26}","パリピポ(各会場オーラス){4}","パリピポ(各会場オーラス){26}","パリピポ(兵庫オーラス){4}","パリピポ(兵庫オーラス){26}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){15}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){15}","ラッキィィィィィィィ7(大阪,宮城){15}","ラッキィィィィィィィ7(大阪オーラス){15}","ラッキィィィィィィィ7(宮城オーラス){15}","ラッキィィィィィィィ7(宮城オーラス){29}","24(ニシ)から感謝届けます♡{4}","24(ニシ)から感謝届けます♡(オーラス){4}","なうぇすと(〜横浜3日目){3}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){3}","なうぇすと(各会場オーラス){3}","なうぇすと(広島オーラス){3}","WESTival{24}","WESTival(各会場オーラス){24}","WESTival(北海道オーラス){24}","WESTV!(各会場オーラス){28}","WESTV!(北海道オーラス){28}","W trouble12/11{23}","W trouble12/12昼,12/13夜{24}","W trouble12/12夜,12/13昼{24}","POWER(宮城){25}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){24}","POWER(愛知オーラス){24}"],singer:"WEST.",date:"2015-04-22",tiup:"テレビ東京系『リトルトーキョーライブ』エンディングテーマ",lyrics:`上がっちゃってこう！！ 騒いじゃってこう！！
ブッ飛ばしてこう！！ 笑っちゃってこう！！
上がっちゃってこう！！ 騒いじゃってこう！！
ブッ飛ばしてこう！！ もうめっちゃサイコー！！
上がっちゃってこう！！ 騒いじゃってこう！！
ブッ飛ばしてこう！！ 笑っちゃってこう！！
上がっちゃってこう！！ 騒いじゃってこう！！
楽しんだもん勝ちでしょ！！

空へ羽ばたけ　ブンブンブンブンブン
飛んで飛んで　ブンブンブンブンブン
まだまだこんなもんじゃ　物足んねえ　もっと湧かせ！！
ハンパねえ　史上最幸 NO SMILE, NO LIFE
マチガイナイ！！ 終わらないぜ
YO Baby 姉ちゃん兄ちゃん寄っといで
盛んに騒いじゃってこう Let's go パリピポ！！

YO！！ Ready Go！！ Ready Go！！ 唸れ　イカしたPartyソング
素敵レディー　刺激的　マジ？なんで？ ハイテンション
Let's Go 先陣きって　俺いっちゃうぜ　ノッてこうぜ
ボンボンッキュッ　ボンボンッキュッ BOMB！！
SEXY ダイナマイト

青い空　白い雲は流れ
まあまあまあドンマイ　そんなもんだい　調子はどうだい
出会っちゃって　恋しちゃって　一目惚れ騒動
声枯らし　叫び　泣き　笑うEveryday
YO 波瀾万丈　完全燃焼　行くぞ
ごっつ　めっちゃ　ガッツ　俺ら参上！！
いつでも心配ご無用　最高潮　ゼッコーチョー！！
1.2.3.4.5

いきまっせ～！！ ブンブンブンブンブン
ハジケ飛んで　ブンブンブンブンブン
いまだかつてない　こんな　スペシャルハッピーな笑顔だらけ
ココロ刻め　忘れんなよ　一分一秒の　熱を
燃えあがれ　メラメラ FLAME FIRE！！
そうだ！！ ブッ放せ！！
行くぜ！！ まだまだ GO GO GO
空へ羽ばたけ　ブンブンブンブンブン
飛んで飛んで　ブンブンブンブンブン
まだまだこんなもんじゃ　物足んねえ　もっと湧かせ！！
ハンパねえ　史上最幸 NO SMILE, NO LIFE
マチガイナイ！！ 終わらないぜ
YO Baby 姉ちゃん兄ちゃん寄っといで
盛んに騒いじゃってこう Let's go パリピポ！！

エンジン全開　バリバリ　寝起きは若干　ダリぃダリぃ
やるときゃやんぜ　キメてみせまっせ！！
でもちょっと待った！！ アッチの方向　左向け左　そう
ボンボンッキュッ　ボンボンッキュッ BOMB！！
SEXY ダイナマイト

駆け抜ける　流れ星の下で
ヘタレ上等　気分上々　テンションは上昇
語り合って　輪になって　お祭り妄想
公園のベンチ座って　気づけば朝まで
完全無敵 We can make it！！ 行くぞ
ごっつ　めっちゃ　やっぱ　俺ら最強！！
さあ皆！！ 気合いをいれろ！！ 最高潮　ゼッコーチョー！！
1.2.3.4.5

いきまっせ～！！ ブンブンブンブンブン
ハジケ飛んで　ブンブンブンブンブン
いまだかつてない　こんな素晴らしい時間(とき)と場所で
ココロ刻め　忘れんなよ　青春のストーリー　今を
鳴らせ　ワレ♂♂(アゲアゲ) ファンファーレ
響き渡れ
行くぜ！！ まだまだ GO GO GO
空へ羽ばたけ　ブンブンブンブンブン
飛んで飛んで　ブンブンブンブンブン
みんなそこらじゅう　ハメ外しちゃって OH YEAH！！ 踊れ！！
ハンパねえ　史上最幸　感謝　感激　マチガイナイ！！ 止まらないぜ
YO Baby 姉ちゃん兄ちゃん寄っといで
盛んに騒いじゃってこう Let's go パリピポ！！

ときには　くじけちゃったり　ときには　逃げてしまったり
投げ出したいこともあるけど
そうやって　つまずいて　涙流して
きっと明日は 1歩踏み出して
笑い飛ばしちゃって　全身全霊で叫べ！！

いきまっせ～！！ ブンブンブンブンブン
ハジケ飛んで　ブンブンブンブンブン
いまだかつてない　こんな　スペシャルハッピーな笑顔だらけ
ココロ刻め　忘れんなよ　一分一秒の　熱を
燃えあがれ　メラメラ FLAME FIRE！！
そうだ！！ ブッ放せ！！
行くぜ！！ まだまだ GO GO GO
空へ羽ばたけ　ブンブンブンブンブン
飛んで飛んで　ブンブンブンブンブン
まだまだこんなもんじゃ　物足んねえ　もっと湧かせ！！
ハンパねえ　史上最幸 NO SMILE, NO LIFE
マチガイナイ！！ 終わらないぜ
YO Baby 姉ちゃん兄ちゃん寄っといで
盛んに騒いじゃってこう Let's go パリピポ！！
盛んに騒いじゃってこう Let's go パリピポ！！

上がっちゃってこう！！ 騒いじゃってこう！！
ブッ飛ばしてこう！！ 笑っちゃってこう！！
上がっちゃってこう！！ 騒いじゃってこう！！
ブッ飛ばしてこう！！ もうめっちゃサイコー！！
上がっちゃってこう！！ 騒いじゃってこう！！`},{id:28,title:"Toxic Love",titleKana:"Toxic Love",lyricist:"Komei Kobayashi",composer:"STEVEN LEE",arranger:"STEVEN LEE",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",performances:["パリピポ{19}","パリピポ(各会場オーラス){19}","パリピポ(兵庫オーラス){19}","AWARD(大阪){3}","AWARD(新潟){3}","AWARD(宮城){3}","AWARD(愛知){3}","AWARD(横浜,静岡,福岡,広島,北海道){3}","AWARD(北海道オーラス){3}","DOME TOUR AWARD(大阪,福岡){3}","DOME TOUR AWARD(東京){3}","DOME TOUR AWARD(東京オーラス){3}"],singer:"WEST.",date:"2015-04-22",lyrics:`Yeah I can't let you go
I've been stuck in your Toxic love
So listen to me now, Let's go
Yeah woo...
Get ready for this 1,2,3
Here we go！

月の　冷たい光へと
逃げ出したら　身を潜めよう
頬のラインを　指でなぞって
閉じた瞼にKiss, Kiss, Kiss oh

滲む暁　重ねた指に
静かに光る　罪にこごえてる
触れて Hot, Hot, Hot
君に Touch, Touch, Touch
奪い去りたい

Baby Baby Baby
Love me Love me Love me
重ねた肌に (止められないKiss me)
Baby Baby Baby
Kiss me Kiss me Kiss me
甘いToxic Love I want you now

Kiss, Kiss 濡れた唇で
Hey girl 今すぐ教えて
火照る肌に　乱れた髪は
ごまかせないよ Yeah Oh Yeah

見つめる瞳　こぼれた雫
今飲み干せば　罪を消せるかな？
まるで Trap, Trap, Trap
ここに Stuck, Stuck, Stuck
もう戻れない Yeah Let's go

Baby Baby Baby
Show me Show me Show me
触れたぬくもり (今感じたいTouch me)
Baby Baby Baby
Touch me Touch me Touch me
君のToxic Love I need you now

You're toxic... Yeah
Make you mine... Ha... Yeah Let's go

もう抜け出せはしないLove
運命さえもUpside down
僕のモノにはならないって
分かってるのに罪を重ねてく
夜明け前にはFar away
君の去った僕の部屋で
残った香りにThinkin' about you
もういっそ君を壊したくなる

Baby Baby Baby 君の全てを
Love me Love me Love me 独り占めしたい

Baby Baby Baby
Love me Love me Love me
重ねた肌に (止められないKiss me)
Baby Baby Baby
Kiss me Kiss me Kiss me
甘いToxic Love I want you now

「もうこれで逢えない」なんて
言いかけた唇　塞いで
束の間の愛や幸せ
燃やすのさ　灰になるまで

Baby Baby Baby
Love me Love me Love me
甘いToxic Love (Give me love....)`},{id:29,title:"キミコイ",titleKana:"きみこい",lyricist:"Shusui",composer:"Shusui・RAAY・Art Hunter・Kresimir Tomec",arranger:"RAAY・Kresimir Tomec",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",performances:["パリピポ{18}","パリピポ(各会場オーラス){18}","パリピポ(兵庫オーラス){18}","10周年生配信トーク＆ライブ「虹会」{6}"],singer:"WEST.",date:"2015-04-22",lyrics:`I WANNA DANCE Oh
I WANNA DANCE Oh

春風がいたずらしてる　フレアの裾揺らしてる
たまらず押さえた手に　恋が回り始めた

ちょっと待って！見とれちゃったんだ
通り過ぎる横顔 Hey！
こんな偶然は二度とはないって
恋を初めまして

人ごみに揺れる髪
このまま　ギュッと　そう、抱きしめたい

COCORO、COCORO 止まんなくなって
ココロ、ココロ　隠しきれなくなっちゃったんだし
どうしても、どうしても
君を振り向かせたい
恋■来いYou＆Me
I WANNA LOVE
恋■来いYou＆Me
I WANNA LOVE

花びらが色づいてくように 僕らも恋に落ちてく
そのピンクのコーデ、可愛いね 笑顔もあったかいね

ちょっとだけ立ち止まっちゃって
触れた花の香り Yeah！
こんな感じは初めてなんだ
恋を始めようか！

誰よりもキレイな瞳
そのまま ずっと もう、見つめていたい

COCORO、COCORO ドキドキしちゃう
ココロ、ココロ 素直に君を感じちゃうんだし
なにしても、なにしても
君と一緒にいたい
恋　来いYou&Me

悲しくて　嬉しくて
泣きたくなる時でも
君となら　大丈夫だね
いつも　いつまでも

COCORO、COCORO 止まんなくなって
ココロ、ココロ　隠しきれなくなっちゃったんだし
どうしても、どうしても
君と踊りたいんだ
恋　来いYou&Me
パーティにいこう
恋　来いYou&Me
I WANNA DANCE Oh
I WANNA DANCE Oh`},{id:30,title:"SCARS",titleKana:"SCARS",lyricist:"SHIKATA",composer:"O-BANKZ・Takuya Harada・SHIKATA",arranger:"O-BANKZ",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",performances:["パリピポ{6}","パリピポ(各会場オーラス){6}","パリピポ(兵庫オーラス){6}","24(ニシ)から感謝届けます♡{5}","24(ニシ)から感謝届けます♡(オーラス){5}","DOME TOUR AWARD(大阪,福岡){19}","DOME TOUR AWARD(東京){20}","DOME TOUR AWARD(東京オーラス){20}"],singer:"WEST.",date:"2015-04-22",lyrics:`あとどれくらいだろ？ 僕らがこうしていられる瞬間(じかん)は
幸せな時間(とき)を刻むほど何故か臆病になる
今日という一日が　終わるとき　側にいたい
誰にも言えない孤独は　お互いに隠さないでいい

まばたきさえ惜しんだ君の不安　たまらないのさ
僕は君の為に　誰かを傷つけても　構わない

愛するほど　戸惑う　この恋心
壊れるくらい抱きしめ合ってく
たどり着くのは幻だとしても
今(ここ)に君がいればいい
他の誰も触(さわ)れない確かな記憶
消せない本能に刻まれていく
ずっと 2人は愛し合うはずなのに
素直になる度　疼く傷跡

君は僕を照らし　僕は君の鏡になる
本当の顔を映した　安らぎがそこにはあった

だからこそ瞬間を求めるように　想いを馳せる
失うくらいなら　罪と罰を受けようと　構わない

傷つくほど　強くなる　愛しき衝動
温めあうように慰めていく
例えばそれがまやかしだとしても
2人だけは真実
他の誰も触(さわ)れない深い傷跡
行き場のない思い　積もらせていく
ずっと 2人は愛し合うはずなのに
思えば思うほど　切なくなる

もし君が消えたら明日はこない
心だけが永遠を知る
どんな哀しい運命だとしても
その腕の中で　ずっと眠りたい

愛するほど　求め合う　裸の心
壊れるくらい抱きしめ合ってく

傷つくほど　強くなる　愛しき衝動
温めあうように慰めていく
例えばそれがまやかしだとしても
2人だけは真実
他の誰も触(さわ)れない深い傷跡
行き場のない思い　積もらせていく
ずっと 2人は愛し合うはずなのに
思えば思うほど　切なくなる
疼く傷跡`},{id:31,title:"アカンLOVE〜純情愛やで〜",titleKana:"あかんLOVE〜じゅんじょうあいやで〜",lyricist:"小松レナ",composer:"星野靖彦",arranger:"渡辺徹",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",performances:["パリピポ{10}","パリピポ(各会場オーラス){10}","パリピポ(兵庫オーラス){10}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){14}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){14}","ラッキィィィィィィィ7(大阪,宮城){14}","ラッキィィィィィィィ7(大阪オーラス){14}","ラッキィィィィィィィ7(宮城オーラス){14}","24(ニシ)から感謝届けます♡{16}","24(ニシ)から感謝届けます♡(オーラス){16}","なうぇすと(〜横浜3日目){14}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){14}","なうぇすと(各会場オーラス){14}","なうぇすと(広島オーラス){14}","WESTival{17}","WESTival(各会場オーラス){17}","WESTival(北海道オーラス){17}","WESTV!{20}","WESTV!(各会場オーラス){20}","WESTV!(北海道オーラス){20}","W trouble12/11{20}","W trouble12/12昼,12/13夜{20}","W trouble12/12夜,12/13昼{20}","rainboW(宮城,愛知,新潟,埼玉,熊本){26}","rainboW(円盤){26}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){25}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){25}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){25}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){25}","Mixed Juice(北海道オーラス){25}","TO BE KANSAI COLOR-翔べ関西から-(大阪){26}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){25}","TO BE KANSAI COLOR-翔べ関西から-(東京){23}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){23}","POWER(宮城){23}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){22}","POWER(愛知オーラス){22}","AWARD(大阪){18}","AWARD(新潟){19}","AWARD(宮城){19}","AWARD(愛知){19}","AWARD(横浜,静岡,福岡,広島,北海道){19}","AWARD(北海道オーラス){19}"],singer:"WEST.",date:"2015-04-22",lyrics:`おちゃらけてても　お前を見ている
見逃さへんから　どんな反応しとるのか

その笑顔が　オレの純情　盛り上げる　罪なやつ
絶対　泣かせへん　信じろ　ほんまのほんま LOVEやで

アカン　めちゃ好きやわ　友達以上の Feeling
お前とオレの　境界線　飛び越えて　はよ　抱きしめたいねん
アカン Baby I love you やせやけど　オレ知っとるで
お前の視線は　いつでも　オレをするりすり抜け
アイツ…

そや　そうや　そうでした　高嶺の花です
笑い以外には　必要ないキャラでござる

それでもええ　オレは一生　この情熱　捧げる
お前を笑かし続けるで　ほんまのほんま LOVEやで

アカン　皆　言うけど　信念以上に I can
現実(リアル)とユメ　紙一重　飛び越えて　いざ　立ち上がるから
せやで Baby I believe you や 欲しいと　思っとったら
お前の視線が　いつしか　オレを見つめるはず
Say！ I get you！

日本一の　いやもっと
アジア一の　もっとでっせ
世界で一番の　笑顔を
絶対オレが守るで

アカン　めちゃ好きやわ　友達以上の Feeling
お前とオレの　境界線　飛び越えて　はよ　抱きしめたいねん
アカン Baby I love you や　せやけど　オレ知っとるで
お前の視線は　いつでも　オレをするりすり抜け
アイツ…`},{id:32,title:"Mambo de WEST!",titleKana:"Mambo de WEST!",lyricist:"市川喜康・マツコタツロウ",composer:"市川喜康・マツコタツロウ",arranger:"ha-j",album:["パリピポ","パリピポ[通常盤]"],announce:"t",performances:["パリピポ{8}","パリピポ(各会場オーラス){8}","パリピポ(兵庫オーラス){8}"],singer:"WEST.",date:"2015-04-22",lyrics:`Mambo！ Mambo de WEST！
ooh！！

Ladys & Gentlemen
We are ジャニーズWEST
Are you ready？
Here we go！

恥ずかしがり屋のキミだって
本当はドキドキしたいのに
真っ赤に色づくハートを抱え
おすましナデシコ

誘われるのは　女子ばかり
もっとオシャレして メイクして
大胆に魅せつけなくちゃ！
キュートに踊れ　シャイなGirls WEST
(Woo Mambo！ Mambo！ Mambo！)

ほろにがい青春に、
またとないハッピーを。
キミだけのスマイルで切り拓け！
(笑う門には福来る)
ほとばしる純情に、
おしみない歓声を。
俺たちのスタイルで立ち向かえ！
(いつも心に太陽を)

Pa pa shu ba du bi du ba！
Pa pa pa！ Pa pa shu ba du bi du ba！
Pa pa pa！ Pa pa shu bi
Pa pa shu bi
Mambo！ Mambo de WEST！
ooh！！

お調子者のアイツだって
本当は悩みもありまっせ
男は泣きたい気持ちを抑え
オチャラけてまう

解ってるのは 男子ばかり
きっとダイジョーブ！ 無理すなや！
俺たちがそばにいるから…
涙まじり盛り上がれ Boys
(ナンボのもんじゃい！ Mamboのもんじゃい！)

ほろにがい青春に、
またとないハッピーを。
キミだけのスマイルで切り拓け！
(笑う門には福来る)
ほとばしる純情に、
おしみない歓声を。
俺たちのスタイルで立ち向かえ！
(いつも心に太陽を)

はぁ、みなさん
今日も一日　お疲れさん
正直に　まっすぐに
あしたもいい汗かきましょかー

想いどおりにはいかないさ
でもそれでイイ！ 僕でイイ！
誰かのマネじゃ意味がない
みんなで踊ろっ♪ VIVA！ Mambo de WEST
(もういっちょ Mambo！ Mambo！ Mambo！)

ほろにがい青春に、
またとないハッピーを。
キミだけのスマイルで切り拓け！
(笑う門には福来る)
ほとばしる純情に、
おしみない歓声を。
俺たちのスタイルで立ち向かえ！
(いつも心に太陽を)

Mambo！ Mambo！ Mambo！
Mambo de WEST！`},{id:33,title:"PARTY MANIACS",titleKana:"PARTY MANIACS",lyricist:"Komei Kobayashi",composer:"STEVEN LEE・Drew Ryan Scott・Andreas Oberg",arranger:"CHOKKAKU",album:["パリピポ","パリピポ[通常盤]"],announce:"t",performances:["パリピポ{21}","パリピポ(各会場オーラス){21}","パリピポ(兵庫オーラス){21}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){6}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){6}","ラッキィィィィィィィ7(大阪,宮城){6}","ラッキィィィィィィィ7(大阪オーラス){6}","ラッキィィィィィィィ7(宮城オーラス){6}","なうぇすと(〜横浜3日目){1}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){1}","なうぇすと(各会場オーラス){1}","なうぇすと(広島オーラス){1}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){22}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){22}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){22}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){22}","Mixed Juice(北海道オーラス){22}","TO BE KANSAI COLOR-翔べ関西から-(大阪){23}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){22}","TO BE KANSAI COLOR-翔べ関西から-(東京){20}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){20}"],singer:"WEST.",date:"2015-04-22",lyrics:`Yo come dance with me…
Baby what you waiting for？ It's time.
So this is my invitation, to the night…

もう迷ってないで　今すぐHere we go
この場所においで　このままRock the show
楽しみたいならここで Anytime
朝まで踊り明かそう

その体がLittle bit hot I like it like that
歌い出せばLittle bit loud Everybody sing along
今夜だけはLittle bit wild You can take it to the head
We'll make you bounce, bounce, bounce

Follow me, Follow me イカれた夜に
Let me see you get low, Let me see you get low
Can't you see？ Can't you see？ お気に召すままに
Baby shake it up & down
WE'RE PARTY MANIACS
WE'RE PARTY MANIACS… WE'RE PARTY MANIACS
WE'RE PARTY MANIACS… WE'RE PARTY MANIACS

Put ya hands up, Everybody get down now Oh
WE'RE PARTY MANIACS
Get ya drinks up, Everybody don't stop now Oh
WE'RE PARTY MANIACS

君が来れば　どこでもParty's on
全てをかき消すように Turn it up
僕に任せてよ Give you what you need
その仮面取ったら Naughty, Naughty (What？)

ほらあのコもLittle bit shy Just lose it right now
まだこれからLittle bit fun Cuz the party never stops
手を取ったらLittle bit nice Let me show you how we do
We'll make you dance, dance, dance

Follow me, Follow me ほら一度きり
Let me see you get low, Let me see you get low
Can't you see？ Can't you see？ 日が昇る前に
Baby shake it up & down
WE'RE PARTY MANIACS
WE'RE PARTY MANIACS… WE'RE PARTY MANIACS
WE'RE PARTY MANIACS… WE'RE PARTY MANIACS

Put ya hands up, Everybody get down now Oh
WE'RE PARTY MANIACS
Get ya drinks up, Everybody don't stop now Oh
WE'RE PARTY MANIACS

Oh… Yeah… Woo… Baby…
ここでずっとDance with me
恐れないでJust believe
これがInvitation Just come & party with me

WE'RE PARTY MANIACS
WE'RE PARTY MANIACS… WE'RE PARTY MANIACS
WE'RE PARTY MANIACS… WE'RE PARTY MANIACS

Put ya hands up, Everybody get down now Oh
WE'RE PARTY MANIACS
Get ya drinks up, Everybody don't stop now Oh
WE'RE PARTY MANIACS
Put ya hands up, Everybody get down now Oh
WE'RE PARTY MANIACS
Get ya drinks up, Everybody don't stop now Oh
WE'RE PARTY MANIACS`},{id:34,title:"バリ ハピ",titleKana:"ばり はぴ",lyricist:"zopp",composer:"Shusui・Raay・Art Hunter",arranger:"Raay",album:["バリ ハピ","バリ ハピ[初回A]","バリ ハピ[初回B]","バリ ハピ[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){9}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){9}","ラッキィィィィィィィ7(大阪,宮城){9}","ラッキィィィィィィィ7(大阪オーラス){9}","ラッキィィィィィィィ7(宮城オーラス){9}","なうぇすと(〜横浜3日目){23}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){23}","なうぇすと(各会場オーラス){23}","なうぇすと(広島オーラス){23}","WESTival{18}","WESTival(各会場オーラス){18}","WESTival(北海道オーラス){18}","W trouble12/12夜,12/13昼{21}","AWARD(大阪){19}","AWARD(新潟){20}","AWARD(宮城){20}","AWARD(愛知){20}","AWARD(横浜,静岡,福岡,広島,北海道){20}","AWARD(北海道オーラス){20}","DOME TOUR AWARD(大阪,福岡){24}","DOME TOUR AWARD(東京){25}","DOME TOUR AWARD(東京オーラス){25}"],singer:"WEST.",date:"2015-07-29",lyrics:`それぞれの自由　それぞれの理由で
悲しみ妬み　また傷つけ合って
なんで僕たちは　同じ夢見れないの
大切な人　今も泣いてる

この手のひらは　傷つけるため　あるわけじゃないよ
一度きりの瞬間　平和になろうよ

1, 2, 3, 4 Go！

今日も超ハッピー　みんなバリハピ　70億のマルになろう
手を繋いだら　心ひとつ　みんなで輪になって踊ろう
明日も超ハッピー　みんなバリハピ　70億のマルになろう
笑顔咲いたら　心ほんわか　みんなで輪になってPeace, Peace, Peace

ケータイ・スマホ　いつも握りしめ
みんなの輪から　はぐれ一人ぼっち
冷めた眼差しじゃ　心も冷えてくる
僕を呼ぶ声に　手を伸ばしたんだ

君の手に触れ　凍てつく心　すぐに溶けてった
胸が　騒ぐ　踊る　一緒に行こうよ

1, 2, 3, 4 Go！

今日も超ハッピー　みんなバリハピ　70億のマルになろう
手を繋いだら　世界変わる　みんなで輪になって歌おう
明日も超ハッピー　みんなバリハピ　70億のマルになろう
君が笑う　地球(ほし)も笑う　みんなで輪になって歌おう

La La La…

この手のひらは　傷つけるため　あるわけじゃないよ
一度きりの瞬間　平和になろうよ

1, 2, 3, 4 Go！

バ・リ・バ・リ　ハッピー　みんなバリハピ　70億のマルになろう
手を繋いだら　心ひとつ　みんなで輪になって踊ろう
明日も超ハッピー　みんなバリハピ　70億のマルになろう
笑顔咲いたら　心ほんわか　みんなで輪になってPeace, Peace, Peace
みんなで輪になってPeace, Peace　輪になってPeace, Peace
輪になってPeace, Peace, Peace`},{id:35,title:"All My Love",titleKana:"All My Love",lyricist:"下地悠",composer:"Joakim Bjornberg・Christofer Erixon・Atsushi Shimada",arranger:"Atsushi Shimada",album:["バリ ハピ","バリ ハピ[初回A]","バリ ハピ[通常盤]"],announce:"t",performances:["24(ニシ)から感謝届けます♡{22}","24(ニシ)から感謝届けます♡(オーラス){22}"],singer:"WEST.",date:"2015-07-29",lyrics:`遠くに離れて気がついたんや
あなただけが僕のこと理解(わか)ってくれた
なのに感謝を言葉にしたり
恩返しもできひんかった　(ごめんな)

ああ　面と向かっては
恥ずかしくていえへんよ
ああ　せやけどこの気持ちを
心から伝えたいねん

All My Love　いまの僕が笑えるのは
So, All My Love　あなたがいたから
しんどいことあっても　乗り越えて強くなれた
All My Love　支えてくれて　ありがとう

どうして素直になれへんかった
こんな僕を見捨てずに叱ってくれたのに
どんなに迷惑をかけたときでも
あなただけは味方してくれた　(ありがとう)

ああ　偉そうにいうても
助けてもらってばかり
ああ　何気ない毎日でも
当たり前なんかやない

All My Love　これからは僕があなたの
So, All My Love　力になりたい
顔が見えなくっても　分かち合える喜びが
All My Love　ほんまに倖せ　ありがとう

いつか　与えられる人から与える人へ
ちょっとずつ　成長したいんや
そして　あなたから学んだ思いやりを
これからもずっと大切な人に伝えたい

All My Love　いま僕が頑張れるのは
So, All My Love　あなたがいたから
これからも一緒に　前向いて歩いていこう
All My Love　勇気をくれて　ありがとう`},{id:36,title:"All My Love〜ちゅらうみっくす〜",titleKana:"All My Love〜ちゅらうみっくす〜",lyricist:"下地悠",composer:"Joakim Bjornberg・Christofer Erixon・Atsushi Shimada",arranger:"Atsushi Shimada",album:["バリ ハピ","バリ ハピ[初回B]"],announce:"f",performances:[],singer:"WEST.",date:"2015-07-29",lyrics:`遠くに離れて気がついたんや
あなただけが僕のこと理解(わか)ってくれた
なのに感謝を言葉にしたり
恩返しもできひんかった　(ごめんな)

ああ　面と向かっては
恥ずかしくていえへんよ
ああ　せやけどこの気持ちを
心から伝えたいねん

All My Love　いまの僕が笑えるのは
So, All My Love　あなたがいたから
しんどいことあっても　乗り越えて強くなれた
All My Love　支えてくれて　ありがとう

どうして素直になれへんかった
こんな僕を見捨てずに叱ってくれたのに
どんなに迷惑をかけたときでも
あなただけは味方してくれた　(ありがとう)

ああ　偉そうにいうても
助けてもらってばかり
ああ　何気ない毎日でも
当たり前なんかやない

All My Love　これからは僕があなたの
So, All My Love　力になりたい
顔が見えなくっても　分かち合える喜びが
All My Love　ほんまに倖せ　ありがとう

いつか　与えられる人から与える人へ
ちょっとずつ　成長したいんや
そして　あなたから学んだ思いやりを
これからもずっと大切な人に伝えたい

All My Love　いま僕が頑張れるのは
So, All My Love　あなたがいたから
これからも一緒に　前向いて歩いていこう
All My Love　勇気をくれて　ありがとう`},{id:37,title:"マ・ル・モ・ウ・ケ",titleKana:"ま・る・も・う・け",lyricist:"栗原暁(Jazzin'park)・久保田真悟(Jazzin'park)",composer:"栗原暁(Jazzin'park)・久保田真悟(Jazzin'park)",arranger:"栗原暁(Jazzin'park)・久保田真悟(Jazzin'park)",album:["バリ ハピ","バリ ハピ[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){24}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){24}","ラッキィィィィィィィ7(大阪,宮城){25}","ラッキィィィィィィィ7(大阪オーラス){25}","ラッキィィィィィィィ7(宮城オーラス){25}","24(ニシ)から感謝届けます♡{25}","24(ニシ)から感謝届けます♡(オーラス){25}","なうぇすと(広島オーラス){32}"],singer:"WEST.",date:"2015-07-29",lyrics:`Oh ピーカン　ピーカン　日本晴れ
ワッショイ　ワッショイ　祭りやで
なんやゆうても人生は (ヘイッ！ ヘイッ！ …)
笑顔でいれたらマ・ル・モ・ウ・ケや！！

待ちわびた君の笑顔
一世一代大勝負 (Go！！)
キメキメの伊達男 (ヨッ！！)
「お友達も一緒なの？」(コンニチハ～)
あ～勘違いのおっちょこちょい (あぁ～)

沈む夕日に　お悩み相談
やけに胸にしみてまうわ
たまにゃ　仲間とハジけりゃえぇ
あっちゅーまに年取るでぇ

Oh ピーカン　ピーカン　日本晴れ
ワッショイ　ワッショイ　祭りやで
なんやゆうても人生は (ヘイッ！ ヘイッ！ …)
笑顔でいれたらマ・ル・モ・ウ・ケや！！
ピーカン　ピーカン　いざまいれ！！
ワッショイ　ワッショイ　勝負やで！！
エネルギッシュにど根性 (ヘイッ！ ヘイッ！ …)
そんなあなたと　ワッショイ！！！ ×4

「忙しい」が口癖だって
たまの休みなんやから (ヨッシャー！！)
久々の顔が並べば (ヨッ！！)
ここで会ったが百年目
さあ　尽きることない思い出話

波打ち際の　黄昏れ当番
やけに胸にしみてまうわ
たまにゃせんとな～親孝行
あっちゅーまに年取るでぇ

Oh ピーカン　ピーカン　日本晴れ
ワッショイ　ワッショイ　祭りやで
なんやゆうても人生は (ヘイッ！ ヘイッ！ …)
努力　体力　義理　人情
ピーカン　ピーカン　いざまいれ！！
ワッショイ　ワッショイ　勝負やで！！
不器用だってええんやで (ヘイッ！ ヘイッ！ …)
そんなオレらとワッショイ！！！ ×4

泣き語言わず　己の道を
雨が降るから　虹が出る
嗚呼、明日も花盛り～

人生楽有れば苦も有ります。
七転八起、七転び八起き。
描いた夢にまっしぐら。
つまずきそうな時、涙で景色が滲む時
あなたのジャニーズWEST、出番です。
それではみなさま、御一緒に。
『盛り上がれんのか！？』
『俺ら次第や～！！！』

Oh ピーカン　ピーカン　日本晴れ
ワッショイ　ワッショイ　祭りやで
なんやゆうても人生は (ヘイッ！ ヘイッ！ …)
笑顔でいれたらマ・ル・モ・ウ・ケや！！
ピーカン　ピーカン　いざまいれ！！
ワッショイ　ワッショイ　勝負やで！！
エネルギッシュにど根性 (ヘイッ！ ヘイッ！ …)
そんなあなたと　ワッショイ！！！ ×4

Oh (ヘイッ！ ヘイッ！ …)
Oh (ヘイッ！ ヘイッ！ …)
コテコテも (oh-oh)
チャキチャキも (oh-oh)
全部ひっくるめてワッショイ！！！ ×4
Oh (ヘイッ！ ヘイッ！ …)
Oh (ヘイッ！ ヘイッ！ …)
泣いちゃっても (oh-oh)
悩んじゃっても (oh-oh)
明日はみんなにやってくるさ`},{id:38,title:"迷宮SUMMER",titleKana:"めいきゅうSUMMER",lyricist:"Komei Kobayashi",composer:"Fredrik“Figge”Bostrom・Josef Melin",arranger:"Josef Melin",album:["バリ ハピ","バリ ハピ[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){5}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){5}","ラッキィィィィィィィ7(大阪,宮城){5}","ラッキィィィィィィィ7(大阪オーラス){5}","ラッキィィィィィィィ7(宮城オーラス){5}"],singer:"WEST.",date:"2015-07-29",lyrics:`I wanna make you, make you, make you, make you mine.
Make you, Make you, Make you…

流れてく風の中　迷い込んだSea side
二人の時間は　今だけかもOne chance
裸足で踊ろうよ　待ち焦がれた　だから弾けるSeason
刺激求めちゃうでしょ？　おかしくなりそうさ

No　このままじゃ　ただここから君をこんな風に見てるだけなんてさ
髪を揺らし　悩ましく
キリがない思い　止まないまま

夏は止められない　誰にも譲れない
このまま Make you mine, Make you mine
Make you mine, alright？
君を離したくない　気持ちを確かめたい
今すぐ Make you mine, Make you mine
君だけを
I wanna make you, make you, make you, make you mine.

Make you, Make you, Make you…
She's wicked, She's wicked…

いつも通り Party People はしゃぎ回るCan't stop
大音量　メッチャBang Bang！！ 今流行りのDreamer
君が踊りだせば　もう周りのみんなが釘付け
見とれているうちに　夏が終わりそうさ

Oh さっきみたいに　君のことを誘い出してみるけど
愛を込めて振り絞ったこの声　また潮騒がかき消すよ

夏は終わらせない　誰も邪魔させない
このまま Make you mine, Make you mine
Make you mine, alright？
二度とは戻らない　今を駆け抜けたい
今すぐ Make you mine, Make you mine
君だけを
I wanna make you, make you, make you, make you mine.

Make you, Make you, Make you…

水平線の向こう側　太陽が燃え尽きてしまうよ
今日と言う日が終わる前に
Be my lady 抱きしめたい

夏は止められない　誰にも譲れない
このまま Make you mine, Make you mine
Make you mine, alright？
君を離したくない　気持ちを確かめたい
今すぐ Make you mine, Make you mine
二人きり
I wanna make you, make you, make you, make you mine.

今年の夏こそ Just give me your love, give me your love
確かめたい　もう二度と離さない　君を抱きしめてたい
今すぐ Make you mine, Make you mine
君だけを
I wanna make you, make you, make you, make you mine.

Make you, Make you, Make you…
She's wicked, She's wicked…`},{id:39,title:"ラッキィスペシャル",titleKana:"らっきぃすぺしゃる",lyricist:"Shusui・ha-j",composer:"Shusui・ha-j",arranger:"Shusui・ha-j",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){1}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){1}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){27}","ラッキィィィィィィィ7(大阪,宮城){1}","ラッキィィィィィィィ7(大阪オーラス){1}","ラッキィィィィィィィ7(大阪オーラス){28}","ラッキィィィィィィィ7(宮城オーラス){1}","ラッキィィィィィィィ7(宮城オーラス){28}","24(ニシ)から感謝届けます♡{20}","24(ニシ)から感謝届けます♡(オーラス){20}","WESTV!{27}","WESTV!(各会場オーラス){27}","WESTV!(北海道オーラス){27}"],singer:"WEST.",date:"2015-12-09",lyrics:`Oh それ見ぃ Ya！
笑うてりゃ福来たる　幸せはいつもスペシャル
Let's Dance, Let's Dance, Party Time！

Everybody！
ちゃうちゃうちゃう　ちゃちゃっちゃうちゃう！
ちゃうちゃうちゃう　ちゃちゃっちゃうちゃう！
ちゃうちゃうちゃう　ちゃうちゃうちゃう！
パンパカパン！ パンパカパン！踊れ！歌え！
Hey！

賽は振られた
ドカンと当てようぜ
やらな、始まんない
運でもツキでも
引き寄せりゃええ

そんじゃみんな　ノるかソるか？
任せときなさい！！
露出度　満点
笑顔で満点
イケイケWEST～

Oh それ見ぃ Ya！
笑うてりゃ福来たる　幸せはいつもスペシャル
Let's Dance, Let's Dance
Party Time！

失敗したって
汗かきべそかき
それでも全力！
みんなでそろって
天下取ったるで～

ちょっと待った、迷った時
オレを信じろよ
迫力満点
気力も満点
アゲアゲWEST～

Oh それ見ぃ Ya！
みんないりゃ福来たる　まだ見ぬ幸せのため
Let's Dance, Let's Dance
Party Time！

君にありったけラッキィを届けたい
そのための
無敵の7人、さぁいこうか！

大空　見いや！
俺たちが見えるやろ！
Oh それ見ぃ Ya！
笑うてりゃ福来たる　幸せはいつもスペシャル
Let's Dance, Let's Dance
Party Time！
Party Time！`},{id:40,title:"Seven Powers",titleKana:"Seven Powers",lyricist:"森若香織",composer:"森若香織",arranger:"杉山圭一・秦千香子・LASTorder",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){8}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){8}","ラッキィィィィィィィ7(大阪,宮城){8}","ラッキィィィィィィィ7(大阪オーラス){8}","ラッキィィィィィィィ7(宮城オーラス){8}"],singer:"WEST.",date:"2015-12-09",lyrics:`ナナナ　ナナナナ　ナナナなんなん？パワー
ナナナ　なんのこっちゃ　七色のパワー

(WEST, WEST, WEST……)

俺はレッド……
俺はピンク……
俺はオレンジ……
俺はイエロー……

おもろいパワー持ってんで　ごっついパワー持ってんで
めっちゃスゴいの持ってんで　俺俺俺を

おもろいやっちゃ思ってんで　ごっついやっちゃ思ってんで
めっちゃスゴいと思ってんで　俺俺王

俺はブルー……
俺はパープル……
俺はミドリ……
おんなじ色ちゃうで　セブンぶんBoom！

おもろいパワー持ってんで　ごっついパワー持ってんで
めっちゃスゴいの持ってんで　俺俺俺を

おもろいやっちゃ思ってんで　ごっついやっちゃ思ってんで
めっちゃスゴいと思ってんで　俺俺王

(WEST, WEST, WEST……)
おもろいおもろい色いろいろ　おもろいおもろい色いろいろ
おもろいおもろい色いろいろ　おもろいおもろい色いろいろ
やで Yeah Yeah Yeah…

ナナナ　ナナナナ　ナナナなんなん？パワー
ナナナ　なんのこっちゃ　七色のパワー
ナナナ　ナナナナ　ナナナなんなん？パワー
ナナナ　なんのこっちゃ　七色のパワー
ナナナ　ナナナナ　ナナナなんなん？パワー
ナナナ　なんのこっちゃ　七色のパワー
ナナナ　ナナナナ　ナナナなんなん？パワー
ナナナ　なんのこっちゃ　七色のパワーパワーパワーパワーパワー`},{id:41,title:"ホルモン〜関西に伝わりしダイアモンド〜",titleKana:"ほるもん〜かんさいにつたわりしだいあもんど〜",lyricist:"チカラ from Civilian Skunk",composer:"ジュンタ from Civilian Skunk",arranger:"鈴木雅也",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){20}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){20}","ラッキィィィィィィィ7(大阪,宮城){21}","ラッキィィィィィィィ7(大阪オーラス){21}","ラッキィィィィィィィ7(宮城オーラス){21}","24(ニシ)から感謝届けます♡{17}","24(ニシ)から感謝届けます♡(オーラス){17}","なうぇすと(〜横浜3日目){15}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){15}","なうぇすと(各会場オーラス){15}","なうぇすと(広島オーラス){15}","WESTival{16}","WESTival(各会場オーラス){16}","WESTival(北海道オーラス){16}","TO BE KANSAI COLOR-翔べ関西から-(大阪){28}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){27}","TO BE KANSAI COLOR-翔べ関西から-(東京){25}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){25}","サマソニ2024(大阪,東京){5}","a-nation2024{3}","Johnny's World Happy LIVE with YOU(6/18){6}"],singer:"WEST.",date:"2015-12-09",lyrics:`ホルモン
関西に伝わりしダイアモンド

ポイポイポポイあしらわれ (ヘイ！ヘイ！)
酸いも甘いも味わって (フゥ！フゥ！)
悶々としてるんだ俺達ゃ
狼煙(のろし)あげろ　ホルモン男児

(ポ～イ　ポ～イ　ポ～イ　ポポ～イ…)

美味くねぇ！味がねぇ！だなんて固定概念で
俺ら放る者ほんとマジでもったいねぇ！！
やればできるぞ大器晩成！？みせたるでいっ！！
待てば待つほど油のノッたイイ男

プルプルの肌　まだ若いぜ！
器測るにゃ　まだ早いぜ！
一度火をつけりゃ止まらないぜ☆
ここらで一丁見せたるでぇ！！

どんな道だって楽じゃない
スタミナがなけれゃ進めない
どんな事だって無駄じゃない
燃え上がれるかは自分次第

生焼けな日々はマジ勘弁　だから

ポイポイポポイあしらわれ (ヘイ！ヘイ！)
酸いも甘いも味わって (フゥ！フゥ！)
悶々としてるんだ俺達ゃ
煮ても焼かれてもイケる男 (ワッショイ！)
放るもんには福がある
ハジケるDAYS 駆け抜けろ
ポイポイ放る者達に
狼煙(のろし)あげろ　ホルモン男児

根性見せるぜ　東西南北
目指すはどこでも人気者
弱火になってどうすんだ！！
強火で攻めろよファイヤー☆ファイヤー☆
あさっり放るのなんでやねん！！
こってりがっつり味わいな
噛めば噛むほど　旨み溢れる良い男

どんな夢だって楽じゃない
焦れば危ない橋ばかり
どんな涙も無駄じゃない
塩気が笑顔の隠し味

甘ダレばかりじゃ物足んねぇ　だから

ポイポイポポイ諦めねぇ (ヘイ！ヘイ！)
悔いも残さずたいらげて (フゥ！フゥ！)
悶々を蹴散らした俺達ゃ
肉汁(いろけ)の滴るイケる男 (ワッショイ！)
放るモンには華がある
ハニカミFACE お手の物
ポイポイ放る者達に
誇りみせろ　ホルモン男児

カルビじゃねぇ！タンでもねぇ！
ホルモン好きなら声だせ！Yeah！
ハラミじゃねぇ！ミノでもねぇ！
ホルモン欲しけりゃ声だせ！Yeah！
迸る汁！道あけな！
油も売るけど買いまっか？
放るもんから目指すは天下
頂 いただくタイミングは
Just now！！
(ソレ　ソレ　ソレ　ソレ)

ポイポイポポイあしらわれ (ヘイ！ヘイ！)
酸いも甘いも味わって (フゥ！フゥ！)
悶々としてるんだ俺達ゃ
煮ても焼かれてもイケる男 (ワッショイ！)
放るもんには福がある
ハジケるDAYS 駆け抜けろ
ポイポイ放る者達に
狼煙(のろし)あげろ　ホルモン男児

ホルモン
関西に伝わりしダイアモンド`},{id:42,title:"ガッテン アンセム",titleKana:"がってん あんせむ",lyricist:"MiNE",composer:"川口進・MiNE・Atsushi Shimada",arranger:"Atsushi Shimada",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){25}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){25}","ラッキィィィィィィィ7(大阪,宮城){26}","ラッキィィィィィィィ7(大阪オーラス){26}","ラッキィィィィィィィ7(宮城オーラス){26}"],singer:"WEST.",date:"2015-12-09",lyrics:`ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
ガッテン　ガッテンだ！！ チキチキバンバンバン！！
ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
イエセッショー　イエセッショー　騒げるヤツ High！！

マジで！？ 何でもかんでも全部君のせいにして
ゆとり世代だってバカにする
ペコペコ頭を下げて身を削る
それってもうしんどいやーん！！
ストレス社会の今　不況の荒波も

だから今日はもう開放してみようよ
締め付けた胸ごとみんな脱いじゃいなよ

ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
ガッテン　ガッテンだ！！ チキチキバンバンバン！！
ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
イエセッショー　イエセッショー　騒げるヤツ High！！
僕らと一緒がパラダイス
(ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！)
ココロもカラダも裸でGO！！
(ガッテン　ガッテンだ！！ チキチキバンバンバン！！)
恥ずかしガールなんてナンセンス
(ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！)
Shout it out, 今日は忘れてハジけて
せーので Bounce！！ 遊ぼうぜ

ガチで！！ 人生一回。エビィデイ楽しく行きましょ
皆も友達連れて来い
誰かが決めたルールを蹴飛ばして
必死でさぁ遊ぼーーやーー！！
スマホなんか置いとけ SNSも無視だ

笑顔が見たいな　とびきりのスマイル
無理するより今日は無茶をしてやれ

ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
ガッテン　ガッテンだ！！ チキチキバンバンバン！！
ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
イエセッショー　イエセッショー 　踊れるヤツ Dance！！
巻き起こすでパーリーハリケーン
(ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！)
ナヤミもフアンも吹き飛ばせ！！
(ガッテン　ガッテンだ！！ チキチキバンバンバン！！)
麗しレディな君はサイコー
(ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！)
Beatiful 今日は素敵な笑顔で
みんなの Love！！ 集めよう

ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
ガッテン　ガッテンだ！！ チキチキバンバンバン！！
ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
イエセッショー　イエセッショー　騒げるヤツ High！！
僕らと一緒がパラダイス
(ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！)
ココロもカラダも裸でGO！！
(ガッテン　ガッテンだ！！ チキチキバンバンバン！！)
恥ずかしガールなんてナンセンス
(ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！)
Shout it out, 今日は忘れてハジけて
せーので Bounce！！ 遊ぼうぜ

ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
ガッテン　ガッテンだ！！ チキチキバンバンバン！！
ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
イエセッショー　イエセッショー　騒げるヤツ High！！`},{id:43,title:"3.141592654",titleKana:"3.141592654",lyricist:"チカラ from Civilian Skunk",composer:"ジュンタ from Civilian Skunk",arranger:"宮崎歩",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){18}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){18}","ラッキィィィィィィィ7(大阪,宮城){19}","ラッキィィィィィィィ7(大阪オーラス){19}","ラッキィィィィィィィ7(宮城オーラス){19}"],singer:"WEST.",date:"2015-12-09",lyrics:`さぁ一緒行こう 3.14

314 159 2653 589
793 238 4626 433

3.141592
さぁ今皆で円になり
Screaming Yeah！！
Jumping Yeah！！
終わらないない Party！！Party！！

僕らで手をとりゃEternity
皆まで言わずに盛り上がり

Three One Four！！
Three One Four！！
Endless Number
Like a We are！！

角張ってちゃロンリーナ
意地張ってちゃメンドイナ
落ち込んでちゃπになれねぇ
WAになれ！！

まんまる笑顔 3.14
君の瞳は 3.14

届け 3.1415926535
どこまでも続く地平線
繋がっているんだ
ほら一人じゃないんだ
3.1415926535
この先が知りたいなら
進みだすんだ
さぁ！一緒行こう！3.1415

314 159 2653 589
793 238 4626 433
良いこと嫌なこと
沢山DAYS！！
マイナス要素は
四捨五入して
切り捨て　切り替え
前向いてやるしかねぇ！！
進むしかねぇ！！
sin, cos, tan
よりかも大事な三大要素
まず根性！！ 次　友情！！
決め手は才能？ NO！NO！直感！！

ひねくれてちゃロンリーナ
べそかいてちゃメンドイナ
俯いてちゃπになれん
WAになれ！！

溢れる涙 3.14
拭える強さ 3.14

響け 3.1415926535
どこにいても同じ夕焼け
繋がっているんだ
ほら一人じゃないんだ
3.1415926535
この先が知りたいから
進みだすんだ
さぁ！一緒いこう！3.1415

全員、整列ー！「ハイ！」
前ならえ！「ハイ！」
なおれ！回れ右！
1 2 サンキュー！
前すすめ！
全体止まれ！「イチ！ニ！」
着席！起立！
礼！よくできました☆

まわる世界は3.14
手を取り合えば3.14

届け 3.1415926535
どこまでも続く地平線
繋がっているんだ
ほら一人じゃないんだ
3.1415926535
この先が知りたいなら
進みだすんだ
さぁ！一緒行こう！3.1415`},{id:44,title:"きみへのメロディー",titleKana:"きみへのめろでぃー",lyricist:"SOU by COZMIC CODE",composer:"KASUMI・SOU by COZMIC CODE",arranger:"KASUMI by COZMIC CODE",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){7}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){7}","ラッキィィィィィィィ7(大阪,宮城){7}","ラッキィィィィィィィ7(大阪オーラス){7}","ラッキィィィィィィィ7(宮城オーラス){7}","DOME TOUR AWARD(大阪,福岡){10}","DOME TOUR AWARD(東京){10}","DOME TOUR AWARD(東京オーラス){10}","WEST. 10th Anniversary Live “W”{1}","WEST. 10th Anniversary Live “W”-Film edition-{1}"],singer:"WEST.",date:"2015-12-09",lyrics:`月が浮かぶ夜空に　気付けばきみを映してるよ
きみの声が聴こえたようで　ちょっと笑顔がこぼれた

強がりな性格にその横顔
誰よりも温かいその声に
柄でもないんだけど　胸が苦しいよ
ゆっくりと募ってゆく感情が走りだした

好きだよ。ねえ好きだよ。きみのことが
一言が言えずにいたけど
今ほらすべてを伝えよう
かけがえのない人へ
あきれるくらいのきみへのメロディー
ふたりなら奏でられるはず
一緒にまた歩んでいきたい　この手はにぎったままで
離さないから

そっと吹いた夜風は　気付けば少し冷えていた
きみは何をしているのかなって　また笑顔になれた

まっすぐな瞳に僕が映る度
この気持ちが吸い寄せられてゆくよ
見上げた夜空にもきみを感じてる
二度目の冬その肩を　抱き寄せてキスをしよう

好きだよ。ねえ好きだよ。ただその想いが
また今日も溢れてゆくから
その目はそらさないでいてほしい
少し照れくさいけれど
これからの未来を　のぞいてみよう
ふたりまた笑っていられますように
新しい明日見つけよう　ふたりだけのLOVE STORY
待ってるから

いつも傍で感じていたいよ
ちょっと　泣き虫なとこもあるけど
すべてが愛おしくて守りたい
僕のすべてで

好きだよ。ねえ好きだよ。きみのことが
それさえも言えずにいたけど
今ならありのまま伝えたい
かけがえのない人へ

あきれるくらいのきみへのメロディー
ふたりなら奏でられるはず
一緒にまた歩んでいきたい　この手はにぎったままで
離さないから`},{id:45,title:"Eternal",titleKana:"Eternal",lyricist:"zopp",composer:"STEVEN LEE・Andreas Stone Johansson",arranger:"STEVEN LEE・Andreas Stone Johansson",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){22}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){22}","ラッキィィィィィィィ7(大阪,宮城){23}","ラッキィィィィィィィ7(大阪オーラス){23}","ラッキィィィィィィィ7(宮城オーラス){23}","TO BE KANSAI COLOR-翔べ関西から-(大阪){21}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){20}"],singer:"WEST.",date:"2015-12-09",lyrics:`No one “Can't stop” ハイウェイを抜け出し
最果ての街へと　廃屋に潜み All good
魚のように身を寄せ合う Just let it go, Don't you worry

セピアの月に照らされ　震える天使を強く抱いた
君を愛せて　自分になれたよ Gotta go Gotta go my way

愛が止められない　止めたくない
どこにも I can't let you go
輝く未来も涙も　全てくれないか
刹那のKissでも Like a 永遠
終わりじゃ消せない情熱
世界中敵になっても　君を守り抜く
君がいないと Only Eternal Darkness

エンジン音が　近づいてくる
あいつらがやってくる　安息の時は Too short
これが最後の戦いだ Just do it now, I'm ready now

君が隣にいるなら　どんな終わりも綺麗だね
後悔なんてない　夜が明けてくよ Gotta go Gotta go my way

命が尽きても　また逢える
どこでも I'll be there for you
君は優しく微笑んで　静かにうなずいた
刹那の愛でも It's a 永遠
闇夜じゃ消せない輝き
どんな罪も罰も受ける　でも邪魔はさせない I never say goodbye

愛が止められない　止めたくない
どこにも I can't let you go
輝く未来も涙も　全てくれないか
刹那のKissでも Like a 永遠
終わりじゃ消せない情熱
世界中敵になっても　君を守り抜く
君がいないと Only Eternal Darkness`},{id:46,title:"TAMER",titleKana:"TAMER",lyricist:"中間淳太",composer:"Kevin Borg・Simon Gribbe",arranger:"Kevin Borg・Simon Gribbe",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){21}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){21}","ラッキィィィィィィィ7(大阪,宮城){22}","ラッキィィィィィィィ7(大阪オーラス){22}","ラッキィィィィィィィ7(宮城オーラス){22}"],singer:"中間淳太",date:"2015-12-09",lyrics:`燃える Fire ring 唸る Something roars
The beast looks crazy in my amazing show

早くおいで Girl ここは Wonderland
Now forget all and let me drive your mind, babe

甘く Open your heart 徐々に Lose control
とまらない Heartbeat まだ欲しいの？ NO…
You'd better to start running
Cuz I このままじゃ心からキミをKill

Hey bro, time to hunt！
またひとり Came up to our show tonight
狙え　全て捕らえろ　出来た子には褒美をGive ya！！
Hey girl, time to fall！
脱け出せぬ檻の中へTonight
Don't be scared, Come here…
Cuz I'm your TAMER
TAMER

照らす Hot spot lights 踊る Clouds of dust
The audience looks crazy in my amazing show

魅了する My beasts 弄ぶ Yellow whip
Don't forget, I run a tight ship, so beware good girl

甘く Open your heart 徐々に Lose control
とまらない Heartbeat まだ欲しいの？ NO…
You'd better to start running
Cuz You このままじゃ心までボクのSlave

Hey bro, time to hunt！
またひとり Came up to our show tonight
掴め　二度と離すな　出来た子には褒美をGive ya！！
Hey girl, time to fall！
ボクの支配する檻へTonight
Don't you know？ You're mine…
Can't escape

Say your prayers！！

何も恐れないRed lion
冷静なBlue wolf
コミカルなOrange bear
宙(そら)飛び回るPurple eagle
オシャレ好きGreen tiger
いつだってCuteなPink elephant
この指鳴らせばGo sign
Are you ready？
It's show time！！

底なしの闇へ
I'm gonna take it all into my world tonight

Hey bro, time to hunt！
また獲物が Came up to our show tonight
全て　手に入れてやる　食べきれない褒美をGive me！！

Hey bro, time to hunt！
またひとり Came up to our show tonight
狙え　全て捕らえろ　出来た子には褒美をGive ya！！
Hey girl, time to fall！
脱け出せぬ檻の中へTonight
Don't be scared, Come here…
Cuz I'm your TAMER

Don't you know？ You're mine…
Can't escape

TAMER`},{id:47,title:"Lovely Xmas",titleKana:"Lovely Xmas",lyricist:"イワツボコーダイ",composer:"GRP・イワツボコーダイ",arranger:"GRP",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){16}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){16}","ラッキィィィィィィィ7(大阪,宮城){17}","ラッキィィィィィィィ7(大阪オーラス){17}","ラッキィィィィィィィ7(宮城オーラス){17}","24(ニシ)から感謝届けます♡{13}","24(ニシ)から感謝届けます♡(オーラス){13}","DOME TOUR AWARD(大阪,福岡){15}","DOME TOUR AWARD(東京){15}","DOME TOUR AWARD(東京オーラス){15}"],singer:"重岡大毅＆神山智洋",date:"2015-12-09",lyrics:`君と初めての待ち合わせ場所へ
プレゼント　バッグに入れ
Ring Ring... 鐘が鳴る
白いコートを着た君が笑ってる
駅の階段の下で
Tick Tack... 今日が始まるよ

何度も夢に見てた　君との近い距離が
嫌なこと　悲しみ全部溶かした

Merry Xmas…
赤いリップが　白い雪の上で
ショートケーキみたいさ
Merry Xmas…
ハニかんだその笑顔
もうずっと離さないから

この瞬間　君にだけシェアしてる
僕の本当の気持ち
Love Love.. もっと甘くしよう

前髪切りすぎたと　おでこを触る君が
可愛くて　抱きしめたくって
困るよ

Merry Xmas …
長いまつげに　白い雪がそっと
舞い降りてくるとき
Merry Xmas…
プレゼントがあるんだ
もうちょっと瞳閉じてて

いつの日か僕ら
思い出すだろう
初めて2人で歩いた今日の日を
キャンドルに灯す光で
いつまでも照らしたい

Merry Xmas …
赤いリップが 白い雪の上で
ショートケーキみたいさ
Merry Xmas …
ハニかんだその笑顔
もうずっと離さないから

街の中はにぎやかなParty Time
遠回りして君とのWinter Road
ショーウィンドウに映る君の笑顔
全部宝物
さぁ開けて1、2、3 For You
赤いリボン　解いたらもう
世界が始まる
もうずっと最高級のDays

もうずっと離さないから`},{id:48,title:"Terrible",titleKana:"Terrible",lyricist:"Komei Kobayashi",composer:"Tommy Clint",arranger:"Tommy Clint",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){4}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){4}","ラッキィィィィィィィ7(大阪,宮城){4}","ラッキィィィィィィィ7(大阪オーラス){4}","ラッキィィィィィィィ7(宮城オーラス){4}","DOME TOUR AWARD(大阪,福岡){14}","DOME TOUR AWARD(東京){14}","DOME TOUR AWARD(東京オーラス){14}"],singer:"藤井流星＆小瀧望",date:"2015-12-09",lyrics:`Come on baby, Make me terrible
Terrible…

素直になってみなよ My lonely girl
刺激が　欲しいんでしょ？ Tonight Tonight
ありふれた日々に Just say goodbye
指先を絡めて I wanna be with you

ただずっと願うよりも
何だってこの僕の手で
欲しいモノ全て　君にあげるよ

こっちへ Closer to me
壊れたいんでしょ？
夢の世界を I'll show you all night long
キスの目隠しで　心奪ったら
Get it on now, Get it on, on now
Come on baby, Make me terrible

Come kiss me, Boo
You gotta give me your love…

誰も知らないような My naughty girl
真面目なフリしても You're bad, So bad
自由になっていいよ Just set you free
ありのままの君と I wanna play with you

そうもっと抱き寄せちゃって
今さら後戻りはNo way
よこしまな笑顔を 僕に見せてよ

今すぐ Show it to me
乱れたいんでしょ？
その寂しさも I'll take you far away
甘い囁きに　溺れていんじゃない？
Get it on now, Get it on, on now
Come on baby, Make me terrible

Come to my world 求め合う心に
Oh, Come to my world 嘘は付かなくていんじゃない？

こっちへ Closer to me
壊れたいんでしょ？
夢の世界を I'll show you all night long
キスの目隠しで　心奪ったら
Get it on now, Get it on, on now
Come on baby, Make me terrible

Terrible…
Come kiss me, Boo`},{id:49,title:"こんな曲作りました",titleKana:"こんなきょくつくりました",lyricist:"照史と崇裕",composer:"Andreas Oberg・Simon Petren",arranger:"Simon Petren",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟){17}","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス){17}","ラッキィィィィィィィ7(大阪,宮城){18}","ラッキィィィィィィィ7(大阪オーラス){18}","ラッキィィィィィィィ7(宮城オーラス){18}"],singer:"桐山照史＆濵田崇裕",date:"2015-12-09",lyrics:`Hey！　キュートな Girlの皆さん Look at me
貴女のHeartを　奪うで Cool Guys
一緒に騒ごや Are you ready？ Say！
Yeah！ 「yeah！」 Yeah！ 「yeah！」

出会って 2秒で　俺らの虜か？ Baby Girl
「照史と崇裕こっち見て」
OK！ Don't worry 優しく包むで　子猫ちゃ～ん
そろそろ　若干　みんなが引きだしてる！

結局　夢物語
結果は現実逃避
照史と
崇裕　伝える
Men'sの叫び～

なんやかんや　言うても　モテタイ
俺らも 男の子
なんやかんや　言うても　モテタイ
人間　顔じゃない
俺らの本当の中味(ココ)見てよ
ココ、ココ、どう？「きゃー素敵！」
なんやかんや　言うても　モテタイ
一応 ジャニーズWEST！！

そーさ。俺達は英語を喋れない

結局　夢物語
結果は現実逃避
照史と
崇裕　伝える
Men'sの叫び～

なんやかんや　言うても　モテタイ
英語を喋りたい
なんやかんや　言うても　モテタイ
誰も俺を止めれない

出てもた俺らの悪い癖
なんやかんや 2番の　歌詞は
ほとんど意味がない

Listen！！

結局　夢物語
結果は現実逃避
照史と
崇裕　伝える
Men'sの叫び～

なんやかんや　どっちが好きなの？
「もちろん、照史！」
なんやかんや　どっちが好きなの？
「もちろん、崇裕！」

なんやかんや　言うても　モテタイ
俺らも　男の子
なんやかんや　言うても　モテタイ
人間　顔じゃない
俺らの本当の中味(ココ)見てよ
ココ、ココ、どう？「きゃー素敵！」
なんやかんや「なんやかんや」
なんやかんや「なんやかんや」
なんやかんや　言うても　普通の
男の子！`},{id:50,title:"逆転Winner",titleKana:"ぎゃくてんWinner",lyricist:"松井五郎",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["逆転Winner","逆転Winner[初回A]","逆転Winner[初回B]","逆転Winner[通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["ラッキィィィィィィィ7(大阪,宮城){16}","ラッキィィィィィィィ7(大阪オーラス){16}","ラッキィィィィィィィ7(宮城オーラス){16}","なうぇすと(〜横浜3日目){21}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){21}","なうぇすと(各会場オーラス){21}","なうぇすと(広島オーラス){21}","WESTival{20}","WESTival(各会場オーラス){20}","WESTival(北海道オーラス){20}"],singer:"WEST.",date:"2016-04-20",tiup:"読売テレビ・日本テレビ系アニメ『逆転裁判〜その「真実」、異議あり！〜』オープニングテーマ",lyrics:`君が目にしてる世界
それってほんとうかい
いま正しい答え
誰が決める？

女神が弾いたコイン
なにかが変わるサイン
ゴールまでの長い距離に
一歩　踏み出す時だろう

運命なんて
決まっちゃいない
ひらめきを
信じなくちゃ

やるならガンガン攻めようぜ
逃げてちゃ将来だって後悔
前を向いて　汗をかいて
ほら　その涙に Shout

異議あり！

逆転しようぜ Justice
絶体絶命も Chance
どんな愛も　どんな夢も
取りに行こう　きっと
きっと勝ちに行こう

負けて覚えた強さ
失くすものもあるさ
つらいときには　誰かの手を
ぎゅっと握りしめていい

限界だって
わかっちゃいない
ときめきを
感じなくちゃ

ここからガンガン攻めようぜ
解けない問題なんてなんだい
君はできる　僕とできる
ほら　その心で Shout

異議あり！

逆転しようぜ Justice
危機一髪こそ Chance
どんな壁も　どんな逆風(かぜ)も
怖くないさ　きっと
きっと勝ちに行こう

それぞれの瞬間が
交わる未来
出逢いは奇跡を
導くだろう

やるならガンガン攻めようぜ
逃げてちゃ将来だって後悔
前を向いて　汗をかいて
ほら　その涙に Shout

異議あり！

逆転しようぜ Justice
絶体絶命も Chance
どんな愛も　どんな夢も
取りに行こう　きっと
きっと勝ちに行こう`},{id:51,title:"100% I Love You",titleKana:"100% I Love You",lyricist:"YHANAEL・MiNE",composer:"川口進・MiNE・Craig McKenzie",arranger:"鈴木雅也",album:["逆転Winner","逆転Winner[初回A]","逆転Winner[初回B]","逆転Winner[通常盤]"],announce:"t",performances:["24(ニシ)から感謝届けます♡{10}","24(ニシ)から感謝届けます♡(オーラス){10}","なうぇすと(〜横浜3日目){28}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){28}","なうぇすと(各会場オーラス){28}","なうぇすと(広島オーラス){28}","WESTV!{18}","WESTV!(各会場オーラス){18}","WESTV!(北海道オーラス){18}","W trouble12/11{22}"],singer:"WEST.",date:"2016-04-20",tiup:"テレビ東京系『リトルトーキョーライフ』エンディングテーマ",lyrics:`ケータイの音が鳴った
ドキって胸が高鳴った wow
待ちに待ったレスポンス
すぐに返そうかなって
いや、でも迷惑かもって wow
どうすればいいかな？

Eyes！　夜空の向こうにキミの顔

そう Baby I love you
そう Baby I love you
100％Yai Yai Yai Yai Ya！
そう Baby I love you
そう Baby I love you
恋を奏でる La La Rock'n'Roll
明日が待ち遠しいって　初めてや
そう Baby I need you
そう Baby I need you
100％大大大好きだぁ
そう Baby I need you
そう Baby I need you
眠れないほど Cry Cry Cry
でも夢で会えるなら　会いにいくよ Baby
キミ以外に欲しい物はない　そう Nothing

とは言えキミは知らない
これはただの片思い wow
すれ違ったあの日
あんまりにも無邪気に
笑うキミにマジで wow
一発でノックダウンや


Fight！　周りのみんなは知らないけど

そう Baby I love you
そう Baby I love you
100％My My My Ah Girl
そう Baby I love you
そう Baby I love you
キミに捧げる La La Love Tune
照れ笑い　春風もそっとキュンとしてる
そう Baby I need you
そう Baby I need you
100％大大大好きだぁ
そう Baby I need you
そう Baby I need you
キミを好きな僕をキミが
ちゃんと好きって言えるまで
ひとつずつ Growing up
あせる気持ちを隠して Walk together

簡単な恋はないから
目が離せないよ Everyday
この恋を実らせたい
夏はすぐそこ！

ホントはどう思っているのかな
ちょっとは僕を意識してるかな
途切れないって事はやっぱり
脈アリって事でいっちゃお Yeah！

そう Baby I love you
そう Baby I love you
100％Yai Yai Yai Yai Ya！
そう Baby I love you
そう Baby I love you
恋を奏でる La La Rock'n'Roll
明日が待ち遠しいって　初めてや
そう Baby I need you
そう Baby I need you
100％大大大好きだぁ
そう Baby I need you
そう Baby I need you
眠れないほど Cry Cry Cry
でも夢で会えるなら　会いにいくよ、絶対
キミ以外に欲しい物はない I Love You`},{id:52,title:"King of Chance",titleKana:"King of Chance",lyricist:"Komei Kobayashi",composer:"Nicklas Eklund・Kevin Borg・Hanif Sabzevari",arranger:"Nicklas Eklund",album:["逆転Winner","逆転Winner[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){4}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){4}","なうぇすと(各会場オーラス){4}","なうぇすと(広島オーラス){4}","WEST. 10th Anniversary Live “W”{9}","WEST. 10th Anniversary Live “W”-Film edition-{9}"],singer:"WEST.",date:"2016-04-20",lyrics:`もう、グダグダ言ってても何も変わらない
一度くらいは本気出してみちゃいなよ
We're gonna, gonna get it on,
We're gonna. gonna get it on
悩んでたって時は過ぎてく

誰にも追いつけないスピードで
誰よりも先にRide on

掴み取れ！ King of Chance
狙ってこうゼ Guys！
King of Chance
たどり着くまで King of Chance tonight
行こうぜ！
迷ってないでついて来な
逃げてちゃ始まんない

自分でやってみなきゃ、答えもないだろう
箙にも限界なんてないぜ
say what… I still rock
その手で　その目で　心で　感じて
Keep trying, Keep trying

その目に溢れる涙
ゴールまで取っておきな

手放すな！ King of Chance
もう怖いモノはないぜ
King of Chance
全て始まる King of Chance tonight
そうだろう？
ビビってないでこっち来な
夢を叶えるんだろう？

そこまで来たら
baby come to me come to me
もうちょっと行ける
baby come to me come to me

そう、この景色を
見せてあげよう

You're looking at the King of Chance
俺たちと King of Chance
今を楽しもうぜ
King of Chance
未来がここから King of Chance tonight
始まる
見たこともないくらいに
光輝いてる
King of Chance
今を楽しもうぜ
King of Chance
未来が始まる King of Chance tonight
I'm King of Chance
迷ってないでついて来な
光のその先へ

We can be a King`},{id:53,title:"KIZUNA",titleKana:"KIZUNA",lyricist:"Takuya Harada",composer:"Takuya Harada・川口進",arranger:"船山基紀",album:["逆転Winner","逆転Winner[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){27}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){27}","なうぇすと(各会場オーラス){27}","なうぇすと(広島オーラス){27}"],singer:"WEST.",date:"2016-04-20",lyrics:`ほら　あの日夢に見た目の前に拡がる世界
歯を食いしばって頑張る君へのエールを送ろう

くじけそうなdays
何度でも確かめ　問いかけて見つめた未来は
前に向かって　声を上げて
今輝くから

奇跡起こして　この一瞬に
僕らはいつでも信じてた
だからつらくても　もう一度立ち上がれ
もう二度と来ないこの夏

まだ幼い夢でも　遠く未来を目指すなら
僕らもこうして君とともに一歩　踏み出すから

倒れそうなdays
このままじゃダメだと　叱りつけ励ました君なら
「強くなりたい」　声を信じて
輝いてゆけるよ

奇跡起こして　この一瞬を
全ての力で応えよう
心に咲く花は　君だけを抱きしめる
忘れられない夏になる

この声届くまで
あきらめない　君は一人じゃない
流した涙の数　笑顔が待っている
心から誇ろう

奇跡起こして　この一瞬に
僕らはいつでも信じてた
だからつらくても　もう一度立ち上がれ
もう二度と来ないこの夏`},{id:54,title:"人生は素晴らしい",titleKana:"じんせいはすばらしい",lyricist:"mildsalt",composer:"岩崎貴文",arranger:"水島康貴",album:["人生は素晴らしい","人生は素晴らしい[初回A]","人生は素晴らしい[初回B]","人生は素晴らしい[通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["24(ニシ)から感謝届けます♡{23}","24(ニシ)から感謝届けます♡(オーラス){23}","なうぇすと(〜横浜3日目){24}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){24}","なうぇすと(各会場オーラス){24}","なうぇすと(広島オーラス){24}","WESTival{19}","WESTival(各会場オーラス){19}","WESTival(北海道オーラス){19}","WESTV!{26}","WESTV!(各会場オーラス){26}","WESTV!(北海道オーラス){26}","W trouble12/12昼,12/13夜{22}","rainboW(北海道){27}","AWARD(新潟){18}","AWARD(宮城){18}","AWARD(愛知){18}","AWARD(横浜,静岡,福岡,広島,北海道){18}","AWARD(北海道オーラス){18}","DOME TOUR AWARD(大阪,福岡){25}","DOME TOUR AWARD(東京){26}","DOME TOUR AWARD(東京オーラス){26}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){27}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){27}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){27}"],singer:"WEST.",date:"2016-07-27",tiup:"読売テレビ・日本テレビ系アニメ『逆転裁判〜その「真実」、異議あり！〜』オープニングテーマ",lyrics:`心のパズル弾け散って　深夜の帰り、疲れ切って
曲がり角、間違えて　知らない道に出た

生きてゆくことの半分は　壁にぶちあたるばかりだ
残された半分は　それを乗り越えてゆくためだ

人生は素晴らしい　誰よりも誇らしい
ひとつ、ひとつ　あきらめずにためらわずに行け！
未来とは七不思議　信じれば叶う夢
僕と、僕と　新しい明日を叫ぼう

初めて見たその景色は　くじけた僕の目を覚ました
すぐ家のそばなのに　まぶしい夏の空

僕が学ぶべきことなんて　正解がある訳じゃなくて
その答え出すために　挑み続けることさ、そうだろう？

人生は素晴らしい　いつだって美しい
ひとつ、ひとつ　組み合わせて　思い描いてく
上手くいく訳じゃない　何度でもトライして
君と、君と　新しい明日を探そう

絶対のピンチか？ (どんな)
絶好のチャンスか？ (時も)
自分次第だろう、ガッツリいこうぜ！

人生は素晴らしい　誰よりも誇らしい
ひとつ、ひとつ　あきらめずにためらわずに行け！
未来とは七不思議　信じれば叶う夢
僕と、僕と　新しい明日を叫ぼう
僕と、僕と　素晴らしい明日を叫ぼう`},{id:55,title:"Mr. Summer WEST",titleKana:"Mr. Summer WEST",lyricist:"Shusui・ha-j",composer:"Shusui・ha-j",arranger:"Shusui・ha-j",album:["人生は素晴らしい","人生は素晴らしい[初回A]","人生は素晴らしい[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){7}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){7}","なうぇすと(各会場オーラス){7}","なうぇすと(広島オーラス){7}"],singer:"WEST.",date:"2016-07-27",tiup:"サーティワンアイスクリームCMソング",lyrics:`だから　そう言ったじゃない
街はRainy day 心もブルーじゃあかん
虹のビーチへ飛ぼう！
それでいいんじゃない　楽しんだもん勝ちやぁ

雨はやがて　止むんやろうて　誰かが言うてたっけ
災い転じて　福となせば　気分上々で Happy and Smile

オエーオアー！ Hey, Yo！ Yo！ Yo！ Yo！
オエーオエー！！ Wow Wow Wow Wow
Ole Omae to ジャニーズWEST オーレ！！ オーレ！！

ええやろ！ 歌え　歌え　叫べ！
せやろ！ 今日は Sunny day！
ええやろ！ 踊れ　踊れ　叫べ！
Ole Mr. Summer WEST

オレはもう一人じゃない
オマエがいる　いやいや四人やろって
そうや、オレもいるで
オレもオレも　七色のフレーバーやん

雲はやがて　虹に変わり　やがて　光あふれて
誰も知らないてっぺんまで　七転び八起きで　行ったるで～

オエーオアー！ Hey, Yo！ Yo！ Yo！ Yo！
オエーオエー！！ Wow Wow Wow Wow
Ole Omae to ジャニーズWEST オーレ！！ オーレ！！

いくで！ 歌え　歌え　叫べ！
せやで！ 今日は Sunny day！
いくで！ 踊れ　踊れ　叫べ！
Ole Mr. Summer WEST

雨はやがて　止むんやろうて　誰かが言うてたっけ
災い転じて　福となせば　気分上々で Happy and Smile

オエーオアー！ Hey, Yo！ Yo！ Yo！ Yo！
オエーオエー！！ Wow Wow Wow Wow
Ole Omae to ジャニーズWEST オーレ！！ オーレ！！

ええやろ！ 歌え　歌え　叫べ！
せやろ！ 今日は Sunny day！
ええやろ！ 踊れ　踊れ　叫べ！
Ole Mr. Summer WEST

オーエーオー！
Wow Wow Mr. Summer WEST`},{id:56,title:"シルエット",titleKana:"しるえっと",lyricist:"川口進・MiNE",composer:"川口進・Thomas G:son",arranger:"石塚知生",album:["人生は素晴らしい","人生は素晴らしい[初回B]","AWARD","AWARD[通常盤]"],announce:"t",performances:["パリピポ{17}","パリピポ(各会場オーラス){17}","パリピポ(兵庫オーラス){17}","24(ニシ)から感謝届けます♡{8}","24(ニシ)から感謝届けます♡(オーラス){8}","なにわ侍　ハローTOKYO!!{4}","なにわ侍 団五郎一座{5}"],singer:"WEST.",date:"2016-07-27",lyrics:`2人歩く帰り道　嬉しそうに君が笑うから
『ちょっと待って』と、その場面をカメラで切り取った

まだ言えなくて残っている　この気持ち届けなきゃ
大切な事は君がいる事

街の灯りが照らす　僕らのシルエット
長く伸びる　ふたつの影
何気ない事が　幸せだと　君がふと　つぶやいたんだ
もしも君が涙し、辛い時は
僕が君の為に笑おう
今は声にせず　その手を握るよ　そばにいて

まだ慣れない駅のホーム　電車が運んでくる風が
どこか懐かしい街の匂い　思い出 頬に触れた

あの頃撮った君の写真　どれもみな笑ってる
伝えた言葉を　まだ覚えてる？

夕日の中に溶ける　僕らのシルエット
少し短い　君の影
時が流れても　変わらぬモノ　僕に教えてくれたんだ
君の大好きな歌　街に響き
僕ら　ずっと口ずさんでた
同じ空の下　いつも微笑んで　歩いていた

君と見る新しい景色(あす)を　見つけにいこう
いつもより　ちょっとだけでいい　遠回りしよう

街の灯りが照らす　僕らのシルエット
長く伸びる　ふたつの影
何気ない事が　幸せだと　僕はふと　気が付いたんだ
もしも君が涙し、辛い時は
僕が君の為に笑おう
今は声にせず　その手を握るよ　そばにいて`},{id:57,title:"覚悟しろよSummer",titleKana:"かくごしろよSummer",lyricist:"SHOCK EYE",composer:"SHOCK EYE",arranger:"草野将史",album:["人生は素晴らしい","人生は素晴らしい[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){29}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){30}","なうぇすと(各会場オーラス){30}","なうぇすと(広島オーラス){30}"],singer:"WEST.",date:"2016-07-27",lyrics:`挑戦状　叩きつけろよ　最強の　夏に向かって
Nobody Knows 焼き付けるMemories 覚悟しろよSummer
レディース＆ジェントルマン ボーイズ＆ガールズ Are you Ready！！？？
史上最高の好カード　チャレンジャーはもちろん YOU ！！！

忙しいリズム　急かす　雑踏を通り抜け
目の前広がる　シーズン　サンダルを投げ捨て
アチアチな砂浜にダイブ　押し寄せる波　ヒップアタック
体全部使って　全力で戦闘開始！

攻め攻めの熱気を　メラメラ燃やして　はしゃぎまくれ
太陽より熱く　後悔なしでいこうかい　行くで！火傷寸前　一度きりだろ

夢がビカビカ　明日へギラギラ　この海が沸いちゃうほど　熱く
やっちゃえばええやん　あっちゅうま　ピーカン
突き抜けた　その笑顔が眩しい　全力で立ち向かった日々が　君を強く
“WIN” つかむんだ　思い出一生分　覚悟しろよSummer

そりゃ　時にはあるさ　くもり　雨の日も
暗い気持ち　逃げ出しちゃうかも
でもめげるな　まじへこたれるな　勝負はこれから！
雨上がりのゴング鳴れば　気分は　虹色さ
文句一つない空　広がった JUMP
雲に手が届きそうなくらい　蹴り上げろ　砂浜

あっという間に終わる季節　後悔しないように
この晴れた空より　どこまでも広く　青く澄んだ夢　デカく強く願おう

夢がビカビカ　明日へギラギラ　この海が沸いちゃうほど　熱く
やっちゃえばええやん　あっちゅうま　ピーカン
突き抜けた　その笑顔が眩しい　全力で立ち向かった日々が　君を強く
“WIN” つかむんだ　思い出一生分　覚悟しろよSummer

赤く火照った体もクールダウン　気づけば　夕焼けが　僕らを包むように
Forever 忘れない　どこか少し寂しい気持ち
いつか　この日を振り返ったなら　思い出すのさ
ガムシャラな日々こそが宝 ありがとうSummer

君とアゲアゲ　心ハレバレ　この空を一面埋めちゃうほど
描いちゃえばええやん　カラフルなFuture
色づいた　明日がほんま楽しみ
その夢抱きしめたなら　迷わずにまっすぐ
“WIN” つかむんだ　大事なことにやっと気づけたSummer
大事なことにやっと気づけたSummer`},{id:58,title:"CHO-EXTACY",titleKana:"CHO-EXTACY",lyricist:"SHIROSE from WHITE JAM",composer:"SECRET WEAPON・SHIROSE from WHITE JAM・MAXX SONG",arranger:"CHOKKAKU",album:["人生は素晴らしい","人生は素晴らしい[通常盤]"],announce:"t",performances:["24(ニシ)から感謝届けます♡{18}","24(ニシ)から感謝届けます♡(オーラス){18}","なうぇすと(〜横浜3日目){6}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){6}","なうぇすと(各会場オーラス){6}","なうぇすと(広島オーラス){6}"],singer:"WEST.",date:"2016-07-27",lyrics:`始まれば、僕ら止めるヤツがバカみたいに思えるよ
凄いものに出会った気分になっちゃ
それに反対するほうが異常か

二人きり悪いことをしよう　って事じゃないよ Oh Oh Oh
多数決で決まる常識　まだきっと僕らは　少数派

マジでCHO-EXTACY
悪魔のパスポートなんて無しでHIGH
CHO-EXTACY
今夜は愛も非合法
Three, Two, One,
CHO-EXTACY…

Overdose, Oh Oh Overdose,
愛におぼれてく (All Night Long)
君の I Love You に殺されそう
深みにハマってく (どこまでも)
Ah Yeah… ゆっくりスワーヴ
目を閉じて　そのまま息を Stop
三時台のフライデーナイ
Test Drive無しのNight Flight

偏見を売り物にして、平気な人も Oh Oh Oh
そう誰もが他人を干渉してるクセに　自由を願う

マジでCHO-EXTACY
今夜のラストなんて無しでFLY
CHO-EXTACY
覚醒してく I Love You
Three, Two, One, Check…

CHO-EXTACY

君のいうこと真に受けるあいつ　冗談でしょ
けど嘘だとしても、本当にすればいい

マジでCHO-EXTACY
悪魔のパスポートなんて無しでHIGH
CHO-EXTACY
今夜は愛も非合法
Three, Two, One,

マジでCHO-EXTACY
今夜のラストなんて無しでFLY
CHO-EXTACY
覚醒してく I Love You
Three, Two, One,
CHO-EXTACY…`},{id:59,title:"Unlimited",titleKana:"Unlimited",lyricist:"SHIKATA",composer:"SHINO",arranger:"REO",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){2}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){2}","なうぇすと(各会場オーラス){2}","なうぇすと(広島オーラス){2}","W trouble12/11{3}","W trouble12/12昼,12/13夜{3}","W trouble12/12夜,12/13昼{3}","TO BE KANSAI COLOR-翔べ関西から-(大阪){25}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){24}","TO BE KANSAI COLOR-翔べ関西から-(東京){22}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){22}","DOME TOUR AWARD(大阪,福岡){40}","DOME TOUR AWARD(東京){41}","DOME TOUR AWARD(東京オーラス){41}"],singer:"WEST.",date:"2016-11-30",lyrics:`そう僕らは数え切れない程の
夢をBackgroundに　より輝いていく oh
Ah...見上げれば　ハッキリと見えるだろう
一緒に行こう Just believe my dream...

Let's go Let's go(Hey)　おもいっきり夢に向かって
Let's go Let's go(Hey) Turn it up Turn it up Turn it up
Let's go Let's go(Hey)　全速力100パーセント
Let's go Let's go(Hey) Turn it up Turn it up

Dreams come true(Hey)　いつの日か
必ずこの手に掴んでみせる　輝く Dreamer
みんなの声が僕らのモーター　共に行こう Don't stop
地図にない明日へ Go now　限界はないよ飛び超えるボーダー

憧れてきた夢のステージに　きっと辿り着けるさ

そう僕らは数え切れない程の
夢をBackgroundに　より輝いていく oh
Ah...見上げれば　ハッキリと見えるだろう
一緒に行こう Just believe my dream... Unlimited

Stand up！！ Here we go！！ Now take it to the top
僕らはずっと夢を描き　進んだ Road
くじけそうになったとしても Don't worry
決して逃げない　険しい道ぐらいが丁度良い
日々日々成長 Step by step　信じる力こそが Make my day
努力は惜しまない　流してきた涙は無駄じゃない
テッペンを目指す僕らは Chaser　光求め掲げる Hands up
諦めない NO NO NO　ただ今は前へ GO GO GO GO

君と交わした約束の場所　辿り着いてみせるさ

さあ走り出そう　最高のステージへ
導いてゆくよ　笑顔の数だけ oh
Ah...今はまだ　僕らは旅の途中
一緒に行こう Just believe yourself... Unlimited

そう僕らは数え切れない程の
夢をBackgroundに　より輝いていく oh
Ah...見上げれば　ハッキリと見えるだろう
一緒に行こう　Just believe my dream... Unlimited`},{id:60,title:"いま逢いたいからしょうがない",titleKana:"いまあいたいからしょうがない",lyricist:"下地悠",composer:"岩崎貴文",arranger:"家原正樹",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",performances:["なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){29}","なうぇすと(各会場オーラス){29}","なうぇすと(広島オーラス){29}"],singer:"WEST.",date:"2016-11-30",lyrics:`出会いは偶然　すれ違う Lady　香りの Shower
サングラスをずらした瞬間　思わず This is Fate

あの時と同じだね　「君を振り向かせたい」
二度と会えなくなってもいいの？
ちょっと待って！ dkdkdkdk　どうしても

いま逢いたいからしょうがない
どうにかなっても In the Night
そのすべて Talking, Making Love　抱きしめたいのさ
いま逢いたいからしょうがない
いま逢いたいからしょうがない
二人きり　本気のなうで Show Time　わかるでしょ？？
今度は Good　離さない

見違えたね　大人びた Make Up　艶めルージュ
止まった時間(とき)動かしたら　Destiny の One More Chance

あれから一度だって　忘れたことなんてない
また恋を始めようよ　だから
こっち向いて！ mjmjmjmj　どうしても

いま逢いたいからしょうがない
ひとつになっても In the Night
止められない Shaking, Making Love　抱きしめたいのさ
いま逢いたいからしょうがない
いま逢いたいからしょうがない
思い切り Cool　に恋して Midnight　欲しいでしょ？？
このまま Good　夢見せて

その腕を(強く)　引き寄せて(強く)
抱き合って踊り明かしたい
揺れるフロア、甘い香り　さあおいで
目を閉じて Kiss しようよ

いま逢いたいからしょうがない
どうにかなっても In the Night
そのすべて Talking, Making Love　抱きしめたいのさ
いま逢いたいからしょうがない
いま逢いたいからしょうがない
二人きり　本気のなうで Show Time　わかるでしょ？？
今度は Good 離さない`},{id:61,title:"エエやんけェ!!",titleKana:"ええやんけぇ!!",lyricist:"無敵DEAD SNAKE",composer:"無敵DEAD SNAKE",arranger:"生田真心",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",performances:["24(ニシ)から感謝届けます♡{15}","24(ニシ)から感謝届けます♡(オーラス){15}","なうぇすと(〜横浜3日目){13}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){13}","なうぇすと(各会場オーラス){13}","なうぇすと(広島オーラス){13}"],singer:"WEST.",date:"2016-11-30",lyrics:`ええやんけ！！

誰一人俺は飼い慣らせない
ダイヤモンドのように意志は固い
どんなに嘲笑われても　どんなに引き止められても
俺には譲れないものがあるんだ

負けへんで！
夢を掴もうじゃないか
プライド脱ぎ捨てて
覚悟決めろ　押忍！押忍！

ええやん　ええやん　ええやん　ええやん

ええやんけ　にぃちゃん！　ええやんけ　にぃちゃん！
男気全開　ええやんけ　にぃちゃん！

もう二度と私は涙見せない
無意味な不満も愚痴も言わない
どんなに追い詰められても　どんなに疲れ果てても
私は笑顔で乗り越えるんだ

負けへんで！
引っくり返そうじゃないか
昨日の自分から
生まれ変われ　押忍！押忍！

ええやん　ええやん　ええやん　ええやん

ええやんけ　ねぇちゃん！　ええやんけ　ねぇちゃん！
あんたに惚れたで　ええやんけ　ねぇちゃん！

何言われてもええやんけ！
誇り持てばええやんけ！
自分貫くその瞳
俺は好きや　私も好きや
マジであんたは最高や！

ええやんけ　にぃちゃん！　ええやんけ　にぃちゃん！
男気全開　ええやんけ　にぃちゃん！

それそれっ！！

ええやんけ　ねぇちゃん！　ええやんけ　ねぇちゃん！
あんたに惚れたで　ええやんけ　ねぇちゃん！

ええやんけ！！`},{id:62,title:"大阪弁ら〜にんぐ",titleKana:"おおさかべんら〜にんぐ",lyricist:"corin.",composer:"corin.",arranger:"corin.",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){9}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){9}","なうぇすと(各会場オーラス){9}","なうぇすと(広島オーラス){9}"],singer:"WEST.",date:"2016-11-30",lyrics:`大阪弁の醍醐味は　まるで清水のような清涼感
そして洗練された抑揚感
さあ、行くでみんなでレッスンわん！

Wow　大阪弁ら～にんぐ
Goo Goo Goo Goo！ Goo Goo Goo Goo！
Wow　大阪弁ら～にんぐ
Goo Goo Goo Goo Goo Goo Goo Goo Gooooo！

「もっさい」
意味：限りなくダサい
例文：もっさい服着た兄ちゃん

「イキっとる」
意味：うかれて調子に乗る様
例文：あいつイキっとんな最近

「アメちゃん」
意味：擬人化してオバちゃんが配ります
例文：兄ちゃんアメちゃん食べるか？

どやせやアカンしてまっせ！
ごっついぎょうさんでっか？
もっさい兄ちゃんイキってチョケて
アメちゃんもらってどないもこないもあれへん
英語みたいやろ？
ちゃうちゃう勘違いや！
ボケてつっこむ俺らベタ
右も左もなにわっ子！
老若男女　こてこて！

えびばでセイ！「もっさい」
ヒョウ柄のエコバッグどこで貰うてん？　さあ！
えびばでセイ！「イキっとる」
アカンのか？イカンのか？目立ってナンボ
せやせやぼちぼち行くで大阪！はっ！

出来そうででけへん『なんで↑やねん』
発音間違いは『な↑んでやねん』
そんなんどうでもえぇけどな
さあ、行くでみんなでレッスンとぅ！

「あほ」
意味：好意を表す最上級
例文：もう、、あほやな

「あほ」
意味：Words to send to those who respect
例文：あいつホンマモンのあほや…

「あほ」
意味：踊る阿呆に見る阿呆
例文：同じ阿呆なら踊らにゃ損損
それ大阪ちゃうやろ！

うちえらいちゃうやん
どついたるねんまいど
ずっこいもっかい堪忍してや
あっちゃこっちゃごっついすんまへん
どいつ語っぽいやろ？
ちゃうちゃう勘違いや！
ボケてつっこむ俺らベタ
猫も杓子もなにわっ子！
産声既にこてこて！

えびばでセイ！「あほ」
馬鹿(うましか)は禁句やで気ぃつけや兄ちゃん　さあ！
えびばでセイ！「アメちゃん」
ガム煎餅アイスクリーム擬人化対象外
どやどやほなほな行こか大阪！はっ！

『おおき↑に』も難しいか？
怪しい関西人『お↑おきに』
そんなんどうでもえぇけどな
さあ、行くでみんなでレッスンすりー！
Wow　大阪弁ら～にんぐ
Goo Goo Goo Goo！ Goo Goo Goo Goo！
Wow　大阪弁ら～にんぐ
Goo Goo Goo Goo Goo Goo Goo Goo Gooooo！

こてこて！

大阪弁ら～にんぐ
意味なんて知らんでえぇ要はハートや！
さあ！
大阪弁ら～にんぐ
困ったら日本語で喋ればえぇやん…
せやせやぼちぼち行くで大阪！
どやどやほなほな行こか大阪！
行くで大阪！
はっ！

大阪弁の醍醐味は　まるで清水のような清涼感
洗練された抑揚感
さあ、行くでみんなでレッスンふぉー！
Wow　大阪弁ら～にんぐ
Goo Goo Goo Goo！ Goo Goo Goo Goo！
Wow　大阪弁ら～にんぐ
Goo Goo Goo Goo Goo Goo Goo Goo
Goo Goo Goo Goo Goo Goo Goo Goo Gooooo！`},{id:63,title:"I got the FLOW",titleKana:"I got the FLOW",lyricist:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・JUN・前田佑",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・JUN・前田佑",arranger:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・JUN・前田佑",album:["なうぇすと","なうぇすと[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){16}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){16}","なうぇすと(各会場オーラス){16}","なうぇすと(広島オーラス){16}"],singer:"神山智洋＆藤井流星",date:"2016-11-30",lyrics:`Let's rock Let's go
Let's rock Let's go
Get ready now, time to party
Come along and shake it everybody

Everybody lovin' it YES
Never too late come on be my GUEST
Everyone アゲてくぜ
We got whole lot of people going
HAPPY HOUR
Drink up this nasty soda
and you be supernova
Bottom up we take it high
I mean way UP high

Hi, 派手な body line
ボンキュッボン凄え Grind
一晩中 shake it,
do it do it do it now. Uh
ハメ外し move
音に乗り groove
ついてこい
PARTY ROCK
OH VERY GOOOOOOOD.........

I got the FLOW(I got the flow)
YABAIZO！！！！(yabaizo)
I got the FLOW(I got the flow)
Oh baby very
WILD WILD WILD
I got the FLOW(I got the flow)
YABAIZO！！！！(yabaizo)
I got the FLOW(I got the flow)
見せつけろ
WOW WOW WOW WOW

Everybody crazy like FES
Positive vibe feeling my BEST
Everyone　連れてくぜ
We got whole lot of people going
HAPPY HOUR
Dancing like BEAST MODE
Continue EPISODE
Get it down we take it high
and don't ask why

Hi, 派手なメイク and スタイル
飛び跳ねな fly
一晩中 shake it,
do it do it do it now.　Uh
理性的 RULE
忘れ be a fool
終わらない
PARTY ROCK
OH VERY GOOOOOOOD.........

I got the FLOW(I got the flow)
YABAIZO！！！！(yabaizo)
I got the FLOW(I got the flow)
Oh baby very
WILD WILD WILD
I got the FLOW(I got the flow)
YABAIZO！！！！(yabaizo)
I got the FLOW(I got the flow)
見せつけろ
WOW WOW WOW WOW

刺激的 Young　衝撃的 Young
刺激的 Young　衝撃的 Young
刺激的 Young　衝撃的 Young

I got the FLOW(I got the flow)
YABAIZO！！！！(yabaizo)
I got the FLOW(I got the flow)
Oh baby very
WILD WILD WILD
I got the FLOW(I got the flow)
YABAIZO！！！！(yabaizo)
I got the FLOW(I got the flow)
見せつけろ
WOW WOW WOW WOW

I got the FLOW(I got the flow)
YABAIZO！！！！(yabaizo)
I got the FLOW(I got the flow)
Oh baby very
WILD WILD WILD
I got the FLOW(I got the flow)
YABAIZO！！！！(yabaizo)
I got the FLOW(I got the flow)
見せつけろ
WOW WOW WOW WOW

Let's rock Let's go
Let's rock Let's go
Get ready now, time to party
Come along and shake it everybody

Let's rock Let's go
Let's rock Let's go
Get ready now, time to party
Come along and shake it everybody`},{id:64,title:"You're My Treasure",titleKana:"You're My Treasure",lyricist:"Atsushi Shimada・MiNE",composer:"SHIKATA・REO",arranger:"REO",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){5}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){5}","なうぇすと(各会場オーラス){5}","なうぇすと(広島オーラス){5}"],singer:"WEST.",date:"2016-11-30",lyrics:`Ha... Miss you girl...
I remember you...
You are the only one, You know？

ドアを開けると　かすかに残ってる
キミの匂いを　探してる
カーテン越しに見える月が
一人の僕を笑った

寂しさ埋めたくて　火を灯すキャンドル
淡い光　浮かんだ影に　キミはいない Tonight

まるでパズルみたい　二人のピース　一人きりじゃ意味がない
まぶた閉じれば今もキミが微笑んでる
時を戻せたら　もっと素直にこの想いを伝えられる
今さらだって笑われちゃうかな
You're my treasure

飾ってた写真そっと伏せたら
新しい朝　迎えに行こう
うまく笑うには　まだかかりそう
強がりも少しだけ許して

街角を歩けば　キミの姿探して
そんなことも終わりにしよう　進み出すよ My life

きっとパズルなら　最後のピース　探している頃かな
少し時間がかかり過ぎてしまったけれど
時を戻せても　ゆっくり探すよ一つ一つ胸に刻み
遅すぎだって笑われちゃうかな
You're my treasure

So　キミが僕にくれた思い出
So　何もかもが宝物さ
くだらないことも笑いあった日々も
すべてキセキ Yeah...

本当パズルみたい　重ねたピース　今はそばで笑ってる
僕に甘えてもたれかかる愛しいキミ
時はイタズラに　またこの街で赤い糸を結んでゆく
過去を二人で笑い話に
You're my treasure

Ha... Love you girl...
Baby kiss for you...
You are the only one, You know？`},{id:65,title:"Colorful Magic",titleKana:"Colorful Magic",lyricist:"市川喜康・マツコタツロウ・ha-j",composer:"市川喜康・マツコタツロウ・ha-j",arranger:"市川喜康・マツコタツロウ・ha-j",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",performances:["24(ニシ)から感謝届けます♡{14}","24(ニシ)から感謝届けます♡(オーラス){14}","W trouble12/11{19}","WEST. 10th Anniversary 大阪松竹座公演(昼){6}","WEST. 10th Anniversary 大阪松竹座公演(夜){6}","WEST. 10th Anniversary 大阪松竹座公演(千穐楽){6}"],singer:"WEST.",date:"2016-11-30",lyrics:`降り出した雪が　街の音色を消した時刻(ころ)
静けさのなかで　僕らは想い出を見上げた

振り返ればいつだって
必ず寄り添いあって
たどり着いた「今」がある

積み重ねていく
小さな時間を忘れないように
これからも僕ら
急がずにゆこう　ずっとふたりらしく

僕にしか出来ないことや
君にしか守れないもの
この地球(ほし)は　そんな奇蹟で溢れている
真っ白に染まる街並
色とりどりの想いがあればこそ
世界は輝いていく
君と夢を願う Holy Night

かじかむ指先　そっとつつみ込む掌
結んだその手を　君はポケットに隠した

簡単なことなんて
僕らの前にはなくて
思えば戸惑うことばかり

手に入れた地図が
またふっと一瞬で　色あせてしまう
信じられるのは
右手に伝う　確かな温もり

僕にしか出来ないことや
君にしか守れないもの
そう誰もが　たった一人の主人公さ
本当は分かっているのになぁ
つまずくたび忘れてしまう僕を
となりで支えてくれた
君は夢に架かるヒカリ

窓辺に咲いた横顔
笑いあった秘密のフォト
すべて僕らのチカラに変わる
魔法の欠片(かけら)

君と巡り会えたことも
僕らをつないだ願いも
この地球(ほし)に　ただ1つだけの物語

僕にしか出来ないことや
君にしか守れないもの
この地球(ほし)は　そんな奇蹟で溢れている
真っ白に染まる街並
色とりどりの想いがあればこそ
世界は輝いていく
君と夢を願う Holy Night

思いのままに
君と夢を願う Holy Night`},{id:66,title:"ギラギラブベイベー",titleKana:"ぎらぎらぶべいびー",lyricist:"Junxix",composer:"Junxix・Saku.",arranger:"kAi",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){10}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){10}","なうぇすと(各会場オーラス){10}","なうぇすと(広島オーラス){10}","WESTival{26}","WESTival(各会場オーラス){26}","WESTival(北海道オーラス){26}","サマソニ2024(大阪,東京){2}"],singer:"WEST.",date:"2016-11-30",lyrics:`ギラギラブベイベー！！！！！！！

Oh Yeah　やってきました　アゲアゲのエビデイ　ナーナナナナー
Oh Yeah　ドライブの Music これがNo.1　ナーナナナナー

Ah　どこもかしこもバケーション　Ah　まさに最高のシチュエーション
手を叩け　声出せ　なんなら俺らとどうですか？

「こっち来いよ」

ギラギラブベイベー　ギラギラブベイベー
気持ちはスッポンポンで飛び込め
ギラギラブじゃね？　ハチャメチャでOK
嫌なコト蹴っ飛ばして夢みろ
いつでも俺らはギラギラ　メッチャギラギラ　ラブラブしてるぜ

Oh Yeah　お待たせしました　ハダカの My Venus　ナーナナナナー
Oh Yeah　心解放だ　ここはパラダイス　ナーナナナナー

Ah　どこもかしこもイチャイチャ　Ah　まさか乗り遅れた！？
手を叩け　声出せ　そんなの俺らのせいぢゃない

「マジかよ？」

ギラギラブかも　ギラギラで Come On
なんだかすっ転んで出逢った
ギラギラブじゃね？　まじで神様
捨てたもんじゃねえ　やっぱり
場面で彼女とギラギラ　メッチャギラギラ　ラブラブしたいぜ

心のままシェケシェケナベイベー

Yeah　この時を Yeah 最高にしようじゃないか
準備OK！？　もっと来いよ　だったら俺らといっとけ　いったれ？

「お前だけやで」

ギラギラブかも　ギラギラブバディ
すべすべ真っ白な素肌を
ギラギラブかも　ウハウハしちゃお
俺色に焦がしちゃいなよ
ギラギラブベイベー　ギラギラブベイベー
気持ちはスッポンポンで飛び込め
ギラギラブじゃね？　ハチャメチャでOK
嫌なコト蹴っ飛ばして夢みろ
いつでも俺らはギラギラ　メッチャギラギラ　ラブラブしてるぜ`},{id:67,title:"Believer",titleKana:"Believer",lyricist:"Komei Kobayashi",composer:"Christofer Erixon・SHIKATA・COMMAND FREAKS",arranger:"COMMAND FREAKS",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){17}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){17}","なうぇすと(各会場オーラス){17}","なうぇすと(広島オーラス){17}"],singer:"WEST.",date:"2016-11-30",lyrics:`惰性を　幸せと割り切れたら
傷付かず　生きてはいけるけれど

Take it back, Take it back
焚きつけるように
脈打つ胸の高鳴り Hey
Bring it back, Bring it back
冷めたフリして
逃げるのはもうやめよう

このまま Get down...
いつでも Don't stop...

今も諦めない I'm a believer Oh singin' Oh
誰も止められない Just take it higher Oh singin' Oh
I got to fight, Got to stand　どんな時も
譲れないモノがあるんだ
何も怖くはない I'm a believer Oh singin' Oh Yeah

誰かが　僕らを笑うとしても
この先も　変わることはないだろう

未来なんて　分からないさ
アテさえない道も Never back down
滲んでいく　淡い過去の約束を
今もまだ覚えてる

今すぐ Wake up...
何度も Stand up...

今でも変わらない I'm a believer Oh singin' Oh
この手は離さない You're my desire Oh singin' Oh
I got to live, Got to dream　手に入れたい
忘れかけていた自由を
ここでは終われない I'm a believer Oh singin' Oh Yeah

そう　あの夜　誓ったんだ
自分が　選んだ道を　歩いて行くと

まだまだ止まれない I'm a believer Oh singin' Oh

今も諦めない I'm a believer Oh singin' Oh
誰も止められない Just take it higher Oh singin' Oh
I got to fight, Got to stand　どんな時も
譲れないモノがあるんだ
何も怖くはない I'm a believer Oh singin' Oh Yeah

Oh singin' Oh Yeah`},{id:68,title:"雪に願いを",titleKana:"ゆきにねがいを",lyricist:"MiNE",composer:"Anders Dannvik・MiNE・Atsushi Shimada",arranger:"ha-j",album:["なうぇすと","なうぇすと[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){12}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){12}","なうぇすと(各会場オーラス){12}","なうぇすと(広島オーラス){12}","WEST. 10th Anniversary Live “W”{3}","WEST. 10th Anniversary Live “W”-Film edition-{3}"],singer:"濵田崇裕＆小瀧望",date:"2016-11-30",lyrics:`ため息さえも白く形どった凍える街で
いつもより寒いのは君がそばにいないせいかな？

そう Little baby girl...
去年と同じ様になんて　とても笑えそうにない
そう Little baby girl...
うつむきながら歩いてる僕の肩に降る華

冬空に舞う雪に願いをかけた
こんなにもこんなにも愛しています
街を静かに白く染めるこの雪が　君にも届け
Wish and snow...Wish and snow...
空は違うけど　君にも見せたいんだ

全てが1人じゃ未完成だよ　君のいない街は
心に残してくれたモノ全部美しすぎて

そう Little baby girl...
粉雪が溶けた道にほら　新しい花が咲いた
そう Little baby girl...
なんだかやさしい記憶が　僕の涙誘った

変わり変わる空に言葉を乗せた
こんなにもこんなにも愛しています
巡る季節のどこかでまた出会えるように　想いを込めて
Wish and snow...Wish and snow...
君も同じ空の下　見てるかな？

確かに僕らは足跡つけた
どれも宝物でまだ思い出すよ
どんな景色でも君がいたから
意味があったよ

そう Little baby girl...
あの日と同じ様になんて　とても笑えそうにない

冬空に舞う雪に願いをかけた
こんなにもこんなにも愛しています
街を静かに白く染めるこの雪が　君にも届け
Wish and snow...Wish and snow...
空は違うけど　君にも見せたいんだ`},{id:69,title:"ボクら",titleKana:"ぼくら",lyricist:"さくらももこ",composer:"松本良喜",arranger:"松本良喜",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]","AWARD","AWARD[通常盤]"],announce:"t",performances:["24(ニシ)から感謝届けます♡{12}","24(ニシ)から感謝届けます♡(オーラス){12}","メトロック2025(東京){5}","9周年生配信トーク＆ライブ「虹会」{6}"],singer:"WEST.",date:"2016-11-30",lyrics:`何もかも飛びこえてすぐに会いに行くよ
ご機嫌ななめの横顔もほらね Just smiley now

いつもボクを見てたこと誰よりも知ってるよ
振り向けば必ずキミが笑ってたよね

ボクがボクだという手がかりはキミのその笑顔だけなんだ
たとえ景色がめぐりめぐって変わったとしても
大事なことはずっと変わらないままさ

あの日と同じ　胸いっぱいのぬくもりを感じて
抱きしめよう　あふれそうな想い　キミに伝えよう
あの日と同じ坂道を　うれしさ抱いて
走り出したらあの日と同じ歌を口ずさもうよ

いつもキミを見てたけど秘密にしていたんだ
でもとっくにバレてたね　背中が笑ってた

キミはキミのために生きるんだボクはキミの陽だまりになる
いつかわかる日がくるさ　きっと幸せだったこと
大事なことはずっと変わらないはずさ

あの日と同じひとりきり涙があふれてる
弱いボクを　隠したはずなのにキミも泣いてたね
あの日と同じ思いきりくやしさを感じて
泣き顔のままあの日と同じ夢を抱いて眠ろう

不思議だね　星の歴史と同じくらい　ボクら
たぶん…
たとえ自分が泣いて転んで
悲しみの中で　倒れても

あの日と同じ誰よりもやさしい瞳で
見つめながら笑うんだろ　そうさ　キミとこの場所で
あの日と同じさわやかなあの風が吹いたら
ステップを踏んであの日と同じ愛で包み込もうよ

キミはキミのために生きるんだ　ボクはキミの陽だまりになる`},{id:70,title:"無鉄砲ボーイ",titleKana:"むてっぽうぼーい",lyricist:"kima'n",composer:"koma'n",arranger:"koma'n",brassarrange:"koma'n・倉内達矢",album:["なうぇすと","なうぇすと[通常盤]"],announce:"t",performances:["なうぇすと(〜横浜3日目){11}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){11}","なうぇすと(各会場オーラス){11}","なうぇすと(広島オーラス){11}"],singer:"重岡大毅＆桐山照史＆中間淳太",date:"2016-11-30",lyrics:`瞬間的　溺れちゃうぜ　夢みたいな出会いだね
Eye to eye　でマジスタート　君にひとめぼれさ

Only you！ So I need you！
話すたびトキメキ Up！ Up！ Dancing！
アホみたいに Hold me tight
この手で君のハート掴み取るさ
行くぜ Bang Bang Ba-Ba-Ba-Bang！

映画行こうぜ？ No No No
水族館は？ No No No No
Oh yes 求愛！　へこたれへんで Vi Vi Vi
ランチ行こうぜ？ No No No
ほな一緒に帰ろ？ No No No No
You are 強敵！　諦めず Go Go Go！
Go Go Go！ Go Go Go！

攻略方法探さなきゃ Let's look for it
意外に相当ハードだね
I can break the 鉄壁ガード
めげずに立ち向かえ

恋夢中！　五里霧中！
難しすぎるから　あっぷあっぷ男子！
What can I say？　わかんないぜ？
ここらで引き下がるわけにゃいかない
飛ばせ Boom Boom B-B-B-Boom！

メールしようぜ？ No No No
電話はどうよ？ No No No No
Please don't 着拒！　負けられへんで Vi Vi Vi
10分だけ！ No No No
ほな3分だけ！ No No No No
Oh It's 拒絶！？　諦めず Go Go Go！
Go Go Go！ Go Go Go！

オーマイガー… You're 厳しい Girl
仲良くなりたいだけなのに
こんなんじゃ I'm a 落武者
とにかく君のハート掴み取るさ
行くぜ
Bang Bang Ba-Ba-Ba-Ba-Ba-Bang Bang Bang Bang！

一切合切 No No No？
未来永劫 No No No No？
Yes more 求愛！　まだまだいくで Vi Vi Vi
Vi Vi Vi  Vi Vi Vi

映画行こうぜ？ No No No　水族館は？
行きたいとこは？ No No No No　どこだっていいぜ君となら
Oh yes 求愛！　へこたれへんで Vi Vi Vi
ランチ行こうぜ？ No No No　ディナーでもいいぜ
ほなご馳走するで No No No No　いくらでも
やっぱ強敵！
諦めず Go Go Go！　強過ぎるぜ
Go Go Go！　あきらめへんへこたれへん
Go Go Go！`},{id:71,title:"one chance",titleKana:"one chance",lyricist:"SHIROSE from WHITE JAM",composer:"Takuya Harada・Christofer Erixon",arranger:"CHOKKAKU",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",performances:["24(ニシ)から感謝届けます♡{19}","24(ニシ)から感謝届けます♡(オーラス){19}","なうぇすと(〜横浜3日目){18}","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島){18}","なうぇすと(各会場オーラス){18}","なうぇすと(広島オーラス){18}","W trouble12/11{2}","W trouble12/12昼,12/13夜{2}","W trouble12/12夜,12/13昼{2}","TO BE KANSAI COLOR-翔べ関西から-(大阪){5}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){5}","TO BE KANSAI COLOR-翔べ関西から-(東京){5}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){5}"],singer:"WEST.",date:"2016-11-30",tiup:"日本テレビ系日曜ドラマ『レンタル救世主』挿入歌",lyrics:`Let's Go！
Hey clap clap clap...　やれフィーバー
Hey clap clap clap...　やれフィーバー

救世主が必要なんじゃない？　世界は文明、文明だ
君を幸せにしたテクノロジー、愛も買えそうだ。
でもどんなに便利になって、不自由がなくなっても
僕らの不安はきっと、アプリじゃ満たせない。

ねえ僕は誰を守りたい？　僕は君を守りたい？
だれか僕を助けて！　守りたくて救われたい
アップデートした僕ら Ah...

運命のone chance　いつも「今」が変われるチャンスだろ
人生を変える　今日がその日になるような　そんな気がしてる
待っていちゃダメだろ　ヒーローは　心の中にある
運命のone chance　本気出したら
こんな今日でも最高に　なるから

Hey clap clap clap...　やれフィーバー

SFのような　未来がきて　進化してくけど
真実は検索しても　出てこない

誰も僕を救えない？　僕も誰も救えない？
誰も助けてくれない！　こんな自分を今変えたい
アップデートする僕ら Ah...

運命のone chance　大事な事はベスト尽くすことさ
積み重ねてく　今日がその日になるかどうかは　わからなくても
一生懸命なんて全員が　やってることだから
運命のone chance　本気出したら
今日が最低でも君と　笑えそうさ

何が　正しいかはわからないよ
だけどLive your life.　描いていくのさ　その手で
Create the future baby. Do it now.
We gotta get down！

誰でも
So get ready
なれるんだ
超いい。。。

運命のone chance　いつも「今」が変われるチャンスだろ
人生を変える　今日がその日になるような そんな気がしてる
待っていちゃダメだろ　ヒーローは　心の中にある
運命のone chance　本気出したら
こんな今日でも最高に　なるから
Let's go！

Hey clap clap clap...　やれフィーバー
Hey clap clap clap...　やれフィーバー`},{id:72,title:"おーさか☆愛・EYE・哀",titleKana:"おーさか☆あい・EYE・あい",lyricist:"松尾潔",composer:"松尾潔・豊島吉宏",arranger:"Maestro-T",produce:"松尾潔・豊島吉宏",album:["おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回A]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回B]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["WESTival{1}","WESTival(各会場オーラス){1}","WESTival(北海道オーラス){1}","W trouble12/11{21}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){24}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){24}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){24}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){24}","Mixed Juice(北海道オーラス){24}","DOME TOUR AWARD(大阪,福岡){26}","DOME TOUR AWARD(東京){27}","DOME TOUR AWARD(東京オーラス){27}"],singer:"WEST.",date:"2017-06-21",lyrics:`じらすようなまなざしで　足を組みかえて笑う
うねるような腰つきで　オトコたちに火をつけな

誰も気づかない時をねらって
僕だけに目くばせした

そんな目で見つめてくんの　やめてくれ
こんな胸騒ぎには慣れてへん
ホレたらアカンから.......おーさか

波のようなまばたきで　罪のないオトコ泣かす
風のようなささやきで　その気にさせたら捨てな

暗闇の中で光る不死鳥
気まぐれに羽ばたく夜

どんな目で君を見つめ返せばいい
こんなゲーム　いつまでも続かへん
ホレたら負けやから.......おーさか

愛・EYE・哀・アイ・l-ight
あ一い・愛・EYE・哀・アイ・l-ight...おーさか

誰も気づかない時をねらって
僕だけに目くばせした

そんな目で見つめてくんの　やめてくれ
こんな胸騒ぎには慣れてへん
ホレたらアカンから.......おーさか
ホレたら負けやから.......おーさか

愛・EYE・哀・アイ・l-ight
あーい・愛・EYE・哀・アイ・l-ight…おーさか`},{id:73,title:"Ya! Hot! Hot!",titleKana:"Ya! Hot! Hot!",lyricist:"下地悠・Lauren Kaori・YHANAEL・岩崎貴文",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回A]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回B]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["WESTival{27}","WESTival(各会場オーラス){27}","WESTival(北海道オーラス){27}","WESTV!{13}","WESTV!(各会場オーラス){13}","WESTV!(北海道オーラス){13}"],singer:"WEST.",date:"2017-06-21",tiup:"サーティワンアイスクリームCMソング",lyrics:`さぁみんな
ヤッホッホ～　ヤッホッホ～
おっきなこえで　うたっちゃお
ヤッホッホ～　ヤッホッホ～
てをつないで　おどっちゃお
なついのすきなひと　このゆびとまれ
アチ　アチ　アチチのチ　アチ　アチ　アチチのチ)

あおいそらは　ゆめいっぱい
なないろ　いろいろ　トッピング
むねのおとが　ドキドキする
たいよう　めがけて　ジャンピング

たのしいこと　さがしにいこうよ oh yeah
にじのむこう　うみをとびこえて

せーのーで！
ヤッホッホ～　ヤッホッホ～
あついのなんて　へっちゃLove
ヤッホッホ～　ヤッホッホ～
ぼくら　まなつの Oh Summer
さあ　みんなおいでよ　このゆびとまれ
(アチ　アチ　アチチのチ　アチ　アチ　アチチのチ)

よるのそらに　ドーンっとはなび
キラキラ　パチパチ　ポッピング
せかいじゅうが　ワクワクする
おどろき　ときめき　ウォッチング

たからものを　さがしにいこうよ oh yeah
やまをこえて　そらのかなたまで

せーのーで！
ヤッホッホ～　ヤッホッホ～
あついのなんて　へっちゃLove
ヤッホッホ～　ヤッホッホ～
きっとみらいの　おひめSummer
さあ　みんなおいでよ　このゆびとまれ

あめがふったって　かぜがふいたって
あしたはきっとハレルヤ
てをたたいて　ピースサイン
いいかんじでハッピーデイ

せーのーで！
ヤッホッホ～　ヤッホッホ～
びしょびしょでも　きにしない
ヤッホッホ～　ヤッホッホ～
うえをむいて　わらっちゃお

さぁみんな
ヤッホッホ～　ヤッホッホ～
おっきなこえで　うたっちゃお
ヤッホッホ～　ヤッホッホ～
てをつないで　おどっちゃお
なついのすきなひと　このゆびとまれ
(アチ　アチ　アチチのチ　アチ　アチ　アチチのチ)`},{id:74,title:"PARA! PARA! チャ〜ハン",titleKana:"PARA! PARA! ちゃ〜はん",lyricist:"Yu-ki Kokubo",composer:"Kohei Yokono・Yu-ki Kokubo",arranger:"Kohei Yokono",album:["おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]"],announce:"t",performances:["WESTival{15}","WESTival(各会場オーラス){15}","WESTival(北海道オーラス){15}","Johnny's World Happy LIVE with YOU(6/18){5}","11周年生配信トーク＆ライブ「虹会」{6}"],singer:"WEST.",date:"2017-06-21",lyrics:`Ladies and gentlemen
メチャウマチャーハンツクリマッセ
キッチン立ってDance Time
ハイ！ハイ！ハイ！ハイ！
Are you ready！？

玉ねぎ　チャーシュー　お好み具材
ザクザク刻んで
昨日の冷や飯をレンチンしたなら
勝負はここから

決め手はそうさ　攻めの姿勢や
強火でBurning Heart
フライパンのダンスフロアで
「ゴマ油ムーンウォーク」

よっしゃ！
お水を一滴垂らしたら
すぐ蒸発するくらい　カ！ネ！ツ！
熱気ムンムンのパーリータイムに
ご飯と卵を混ぜ混ぜ
塩胡椒は？「少々！」
ほら気分は？「上々！」
隠し味に愛情をダンク

This is the パラパラチャーハン
ファイアー　ファイアー
男飯の定番やん
マジ　ハラハラ　ココロ
ハイアー　ハイアー
お口に合うかな？
目指せ君の笑顔 Here we go
鍋振って　腰振って
Shake Shake Shake
ほら　パラパラチャーハン
ファイアー　ファイアー
胃袋を掴め　恋のパラパラチャーハン

盛り付けはスピードが命や
アツアツのうちに
溢れそうなキミヘの想い添えて
お皿にのせましよ

見た目はそうさ　ドーム型よりも
ド派手にMaking Heart
磨き上げた　お玉さばきで
「超絶！！ OTAMA　パンキング！！」

よっしゃ！
お腹のサイレン聞こえてまっせ
今すぐ行くから待っとって～
餃子？　焼売？　グルグル円卓？
でも今日だけは直球の
渾身の一品入魂！！
チャーハンOnlyでFall in Love

ダイエット中とか言いながら
結局残さずに　ペロリ
完食しちゃう　(食いしん坊で)
照れ屋な君が　(大好きなのさ)
料理は　味覚のラブレター

This is the パラパラチャーハン
ファイアー　ファイアー
男飯の定番やん
マジ　ハラハラ　ココロ
ハイアー　ハイアー
お口に合うかな？
仕上げに　パラパラトッピング
ジャンジャン　ジャンジャン
紅生姜は間違いない
きっと　ポロポロ　キミは
Cryや　Cryや
嬉し涙カモーン

目指せ君の笑顔 Here we go
鍋振って　腰振って
Shake Shake Shake
ほら　パラパラチャーハン
ファイアー　ファイアー
胃袋を掴め　恋のパラパラチャーハン`},{id:75,title:"「ありがとう」じゃ足りない",titleKana:"ありがとうじゃたりない",lyricist:"岩崎愛",composer:"岩崎愛",arranger:"岩崎愛・中村タイチ・井上陽介(Turntable Films)",album:["おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]"],announce:"t",performances:["rainboW(円盤){31}"],singer:"WEST.",date:"2017-06-21",lyrics:`Oh...

つらかった事と　楽しかった事
どちらも今は　笑って話せる
叱られた事が　ずいぶん経ってから
あれは大きな　愛だったと気付いた

「ありがとう」じゃ足りない　うまく言葉見つからない
僕が今ここにいる　道を照らしたのはあなた
「ありがとう」じゃ足りない　この気持ち伝えたい
あなたに届く日まで　歌い続けるよ

Oh...

バラバラになって　すれ違った時も
それでも僕ら　乗り越えてきた

アホな話ばかり　いつもふざけるけど
ちゃんと大きな夢　分かち合ってる

「ありがとう」じゃ足りない　いつも側にいるけれど
あなたがいてくれたから　前を向いて進めたよ
「ありがとう」じゃ足りない　力にいつもなりたい
くじけそうになったら　思い出してほしい

「ありがとう」じゃ足りない　うまく言葉見つからない
僕が今ここにいる　道を照らしたのはあなた
「ありがとう」じゃ足りない　この気持ち伝えたい
あなたに届く日まで　歌い続けるよ

Oh...

あなたを笑顔に　包み込めるならば
その為にいつまでも　歌い続けよう`},{id:76,title:"僕ら今日も生きている",titleKana:"ぼくらきょうもいきている",lyricist:"MORISHIN",composer:"川口進・MORISHIN",arranger:"水島康貴",album:["僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![初回A]","僕ら今日も生きている/考えるな、燃えろ!![初回B]","僕ら今日も生きている/考えるな、燃えろ!![通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["WESTival{8}","WESTival(各会場オーラス){8}","WESTival(北海道オーラス){8}"],singer:"WEST.",date:"2017-11-22",tiup:"フジテレビ系アニメ『モンスターハンターストーリーズRIDE ON』主題歌",lyrics:`僕ら今日も生きている　僕ら今日も笑ってる
それだけでもう何もいらない
今すぐにRIDE ON
僕らすぐに求める　欲張りな生き物さ
何も持たずに生まれてきたのに

幸せは　そばにあって　近くにあって
大切なものほど見えなくなるけど
感謝して　何が起きたって分かってくれる人へ
誰にだって　逃げたくなって
自分を見失いそうになるけど
愛は必ず君の心にあるよ
僕ら一緒に歩いて行こうよ

僕ら今日も夢見てる　僕ら今日も笑ってる
それこそがそうだよエネルギー
生きてる証
僕らならば描ける　素晴らしい人生を
どこまでも繋がる出会いこそ

抱きしめて　離さないで　見逃さないで
確かなことはそう　一人じゃないから
感動は　温もりがあって初めて生まれる
誰にだって　逃げたくなって
自分を見失いそうになるけど
明日は輝く君の心にあるよ
僕ら一緒に歩いて行こうよ

同じ空の下　同じ空を見上げながら
美しい色の絆数えていよう

幸せはいつも　そばにあって　近くにあって
大切なものほど見えなくなるけど
感謝して　何が起きたって分かってくれる人へ
誰にだって　逃げたくなって
自分を見失いそうになるけど
愛は必ず君の心にあるよ
僕ら一緒に歩いて行こうよ`},{id:77,title:"考えるな、燃えろ!!",titleKana:"かんがえるな、もえろ!!",lyricist:"PA-NON・松本タカヒロ・ha-j",composer:"PA-NON・松本タカヒロ・ha-j",arranger:"ha-j",album:["僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![初回A]","僕ら今日も生きている/考えるな、燃えろ!![初回B]","僕ら今日も生きている/考えるな、燃えろ!![通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["WESTival{25}","WESTival(各会場オーラス){25}","WESTival(北海道オーラス){25}"],singer:"WEST.",date:"2017-11-22",tiup:"Netflixオリジナルドラマ『炎の転校生REBORN』主題歌",lyrics:`「考えるな、、、燃えろー！！」
もっと激しく　真っ赤に熱く　俺のハートはメラメラ
Fire！

正義のため背負った十字架
受けてたったるわ　(たちまくるわ)
ぐっと拳突き上げ

いちかばちか無茶すぎるバトル
つかみとったるわ　(とりまくるわ)
ガッとこの手に明日を

立ち止まってちゃなにも変わらない
始まりのゴングはもう
ガンガンガンガン鳴っている！
「燃えろ！！」
Fire！

燃えろ！燃え尽きたって行けよFighting Road
汗と涙　流してこそが青春
叫べ！すべてを賭けて挑み続けろ
向かい風が吹いてくるほど
もっと激しく　真っ赤に熱く
俺のハートはメラメラ
Fire！

与えられた宿命歩んで
それで満足か　(No満足！)
よっしゃ蹴り飛ばしてやれ

俺を見守る綺麗な瞳
君からのエールはもう
ガンガンガンガン聞こえてる！
「燃えろ！！」
Fire！

燃えろ！あの未来へと続くFighting Road
ヒィヒィ嘆かんで「火」と「火」で作れ「炎」
愛を握りしめたら夢に飛び込め
逃げ出したらそこで終わりさ
そうだ人生　待ったなしだろ
いつもハートはメラメラ
Fire！

「考えるな、、、燃えろー！！」
Fire！

嗚呼、守りたいものがここにあるなら立ち向かうだけ
これが男だ！
それが男だ！
ぶっとばしてかっとばしてやったるで！
Fire！

燃えろ！燃え尽きたって行けよFighting Road
汗と涙　流してこそが青春
叫べ！すべてを賭けて挑み続けろ
向かい風が吹いてくるほど
もっと激しく　真っ赤に熱く
俺のハートはメラメラ
Fire！

ライライラ　ライライラ　ライライラ　ライ‥`},{id:78,title:"何万回だって「君が好き」",titleKana:"なんまんかいだってきみがすき",lyricist:"岩田秀聡",composer:"岩田秀聡・永野大輔",arranger:"岩田秀聡・永野大輔",album:["僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![通常盤]","AWARD","AWARD[通常盤]"],announce:"t",performances:["WESTival{7}","WESTival(各会場オーラス){7}","WESTival(北海道オーラス){7}","AWARD(大阪){8}","AWARD(新潟){8}","AWARD(宮城){8}","AWARD(愛知){8}","AWARD(横浜,静岡,福岡,広島,北海道){8}","AWARD(北海道オーラス){8}"],singer:"WEST.",date:"2017-11-22",lyrics:`夕陽に染まる君を　いつまでも抱きしめてた
恋とかの気持ちじゃなくて　怖かった、僕が弱虫で

ダメになりそうな　現実から逃げたいこんな夜だって
何も言わずただそばにいてくれた　それだけでよかったんだ

何百回だって伝えるよ　何万回だって「君が好き」
現在(いま)も昨日も　君とだから痛くたって顔を上げた
何百回だって泣けばいい　何万回だってまた笑える
夢も明日も　君とだったら　信じていけるかなって思えるんだ

君に触れるだけで　この胸が感じてるんだよ
いつだって強がりだから　少しずつ僕に甘えなよ

全部を見せてほしい　その心に隠した小さな傷だって
信じてよ　そう言って見つめてた　それだけで君が笑った

何百回だって伝えるよ　何万回だって「君が好き」
苦しい過去も抱きしめるよ　大丈夫越えてゆける
何百回だってつまずいても　何万回だってやり直せる
切ない時間が教えてくれた　いつでもこの心に君がいるんだって

素直になれないまま　言葉に出来ないまま
それでも信じ合うことが出来たんだ
この先何があったとしても　この手だけは離さない
今日が未来へ続いてゆく限り

何百回だって伝えるよ　何万回だって「君が好き」
そばに、そばに　君がいれば毎日が輝いてく

何百回だって伝えるよ　何万回だって「君が好き」
現在(いま)も昨日も　君とだから痛くたって顔を上げた
何百回だって泣けばいい　何万回だってまた笑える
夢も希望も　君とだったら　信じていけるんだって思えるんだ

そう思えたんだ`},{id:79,title:"SHE IS MY…",titleKana:"SHE IS MY…",lyricist:"SHIROSE from WHITE JAM",composer:"COMMAND FREAKS・SHIROSE from WHITE JAM",arranger:"COMMAND FREAKS",album:["僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![通常盤]"],announce:"t",performances:["WESTival{6}","WESTival(各会場オーラス){6}","WESTival(北海道オーラス){6}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){7}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){7}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){7}"],singer:"WEST.",date:"2017-11-22",lyrics:`Hey yo
やなら止めてみろよこのキスを
SHE IS MY BABY…

甘い誘惑、高カロリーのビスケット
「リスク込みで食べるか、我慢するか？」ほら。
もう必要ないよね、説明は省略
Sexy にさ言っちゃってセーノ
Yes or No

どんどん来なよもっと来なよ
ダンスもテキトーテキトーでよし
君が感じるままに　僕らのこの声を頼りに
やなこと全部ふきとばそうよ
笑顔生み出してくための魔法
ジェットコースターよりもドープ
僕らのやり方はこう

ほっぺにキス　おでこにキス　やなら止めろ
ほらほら言いかけてたセリフが出ない

SHE IS MY BABY
やなら止めてみろよこのキスを
帰りたいふりして電源オフして
SHE IS MY BABY
やなら止めてみろよこのキスを
いいのさ綺麗なステップじゃなくても
SHE IS MY BABY
こっちこいよ
ダメダメ
SHE IS MY BABY
やなら止めてみろよこのキスを
守りもしない約束をして
すぐにやぶるぜ

誰にも言えないキスをこれから始めようか
誰にもできないことを今から始めようか

どんどん来なよもっと来なよ
リミッター解除、ダイブ Let's go！
君が笑顔になれば僕も最高に嬉しいから

パーリーは終わらない　僕はここにいる
君を笑顔にしたい　僕の声で

SHE IS MY BABY
やなら止めてみろよこのキスを
あげない、それじゃたりないスパークして
SHE IS MY BABY
やなら止めてみろよこのキスを
いいのさいつもと少し違くても
SHE IS MY BABY
こっちこいよ
ダメダメ
SHE IS MY BABY
やなら止めてみろよこのキスを
破裂しそうな秘密のゆくえ
やばすぎて怖い

心配ない
ここは楽園
僕にサインを見せてみて
その手あげて
声を出して君を見せて

パーリーは終わらない　僕はここにいる
君を笑顔にしたい　僕の声で

SHE IS MY BABY
やなら止めてみろよこのキスを
帰りたいふりして電源オフして
SHE IS MY BABY
やなら止めてみろよこのキスを
いいのさ綺麗なステップじゃなくても
SHE IS MY BABY
こっちこいよ
ダメダメ
SHE IS MY BABY
やなら止めてみろよこのキスを
守りもしない約束をして
すぐにやぶるぜ

SHE IS MY BABY`},{id:80,title:"もう1%",titleKana:"もう1%",lyricist:"Shusui・川口進",composer:"Shusui・川口進",arranger:"川口進",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",performances:["WESTival{9}","WESTival(各会場オーラス){9}","WESTival(北海道オーラス){9}"],singer:"WEST.",date:"2018-01-02",tiup:"映画『レゴ(R)ニンジャゴー ザ・ムービー』日本語吹き替え版主題歌",lyrics:`描いた未来の先に　見えた希望があるから
一歩ずつでも近づきたい
苦しいことの先に　新しい扉が
そうだろう、見つかると信じて

生まれたことが　チャンスの始まりさ
とことん立ち向かえ！　運命よ、邪魔するな！

「あきらめない」強く願えば(Let's go on my way, Let's go to journey)
不可能も自分も変えられる
簡単さ、心のニンジャ　叩き起こせ！(Let's go again)
もう1%　自分を信じていこう、強く！

夢は語る方がいい　言葉が夢になるから
そうだろう、想いは無限大

1%の限界を超えたら
きっと失敗も成長してくれる

「あきらめない」そう答える(Let's go on my way, Let's go to journey)
勝てる気持ちがもったいないから
何度でも立ち上がって、負けたとしても(Let's go again)
恥ずかしがらないで　絆を信じていこう、強く！

100%の限界を超えたら
きっと世界も一つになれるから

「あきらめない」強く願えば(Let's go on my way, Let's go to journey)
不可能も自分も変えられる
簡単さ、心のニンジャ　叩き起こせ！(Let's go again)
もう1%　あきらめたらダメさ
もう1%　自分を信じていこう、強く！`},{id:81,title:"浪速看板息子～なめたらあかん～",titleKana:"なにわかんばんむすこ〜なめたらあかん~",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE",arranger:"MUTEKI DEAD SNAKE",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",performances:["WESTival{2}","WESTival(各会場オーラス){2}","WESTival(北海道オーラス){2}"],singer:"WEST.",date:"2018-01-02",lyrics:`はやくこい
はやくこい
浪速は楽しいよ
だからはやくこい
はやくこい
浪速はこっちだよ

いらっしゃい

あんちゃん　ちょっと待っておくんなまし
ちょっと聞き捨てならねぇなぁ(はいどうぞ！)
図々しくない　優しいだけや
義理と人情　関西人(うぉおおお！)
多分あんちゃん一見さんやろ
そんなことを言う前に(あぁそうだ！)
俺らの歌を聴いていけ
ここは楽しい街やで浪速

っておとっつぁ～ん！
そこで寝たらあきまへんやん！
そこ今から　俺らが歌うステージですやん！
あぁおとっつぁ～ん！　あぁおとっつぁ～ん！
もう風邪引くで　おいとまして
布団はこっちよ！

ちょいとお時間いただきやす！

俺ら浪速の看板息子だよ(YO！)よ(YO！)
なめたらあかん(あらよっと！)
俺ら浪速の看板息子だよ(YO！)よ(YO！)
たこやきいかが？(ヘイらっしゃい！)
乱痴気騒ぎは十八番やで　でも人情だけは忘れへんで
浪速　浪速　浪速はええで
日本一のおもてなし

いらっしゃい

ほなほな、まだまだいくでぇ～！

あんちゃんどうよどうよこの感じが
めっちゃええんとちゃいますの？(あらよっと！)
すってんころりんしちゃいましても
俺らはいたって真面目でいつでも全力奉仕

ってお客さ～ん！
そこは笑うとこちゃいまんがな！
今は俺らが　頑張っているとこですやん！
あぁお客さ～ん！　あぁお客さ～ん！
もうちょいとばかり
真剣に見てもらえます？

いっちょいかせていただきやす！

俺ら浪速の看板しょって歩いてるよ(YO！)よ(YO！)
責任重大(はぁ～どっこい！)
俺ら浪速の看板しょって歩いてるよ(YO！)よ(YO！)
西の男(ヘイどうぞ！)
惚れた腫れたよこの街に　人々が織り成す物語
浪速　浪速　浪速の街は
世界で一番　落ち着くわぁ～

最後にもういっちょかまさせて！

俺ら浪速の看板息子だよ(YO！)よ(YO！)
なめたらあかん(あらよっと！)
俺ら浪速の看板息子だよ(YO！)よ(YO！)
たこやきいかが？(ヘイらっしゃい！)
乱痴気騒ぎは十八番やで　でも人情だけは忘れへんで
浪速　浪速　浪速はええで
日本一のおもてなし

どないや！！`},{id:82,title:"Baby Good!!!",titleKana:"Baby Good!!!",lyricist:"MiNE",composer:"STEVEN LEE・Takuya Harada・Christofer Erixon",arranger:"吉岡たく",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",performances:["WESTival{23}","WESTival(各会場オーラス){23}","WESTival(北海道オーラス){23}"],singer:"WEST.",date:"2018-01-02",lyrics:`Uh… Everybody gonna party time Yeah！！
Uh… To the rainbow mirror ball
1. 2. 3. Hands up！！

Crazy Baby Crazy Baby Crazy Baby Good！！ (Hey！！！)
デッカイ声で So, Make some noise！！ (Hey！！！)
Super Baby Super Baby Super Baby Good！！ (Hey！！！)
今宵出し切れ　全開 Bomb！！ (Oh… Hey！！！)

Fall down, 全部サラケ出せ
Shut down, 常識ナド壊セ
Count down, 一緒ニ遊ボウ
Ah, Ah, Are you ready now？
1… 壊レヨウ 2… 暴レヨウ 3… 乱レヨウ
(始メヨウ…) Let's go！！

悲“シゲ”なキミが“ダイ”好きな (Party time)
時間“キリ”取ろう“アキ”る程　(Oh…)
光の“ナカ”“ジュン”備はOK！？
馬鹿になれ Alright！！

You…“カミ”がかった夜“トモ”に行こう
“フジ”身な Partyが“リュウ”儀 (My Style)
“ハマ”っちゃうぜ“タカ”い Tension
まば“タキ”せず Show を“ノゾ”いて (Hey！！！)

Crazy Baby Crazy Baby Crazy Baby Good！！ (Hey！！！)
デッカイ声で So, Make some noise！！ (Hey！！！)
Super Baby Super Baby Super Baby Good！！ (Hey！！！)
混ざり合うカラー Shall we dance！？ (Oh… Hey！！！)
Na Na Na Na… (Hey！！ Oh… Hey！！)
Baby Good！！！ (So Baby Good！！！)
Baby Good！！！ (So Baby Good！！！)
Na Na Na Na… (Hey！！！)
今宵出し切れ　全開 Bomb！！

“真っ赤”に燃やしてこうぜ Heart beat (Party time)
“オレンジ”の朝が来るまで (Oh…)
“黄色い”歓声　それが大好物
アホになれ Tonight！！

You…“ブルー”なキミも笑顔になる
“紫”の月も笑った (Smiling)
胸の信号“グリーン”のLight
“ピンク”に染まるキミのFace, Hey！！！

Crazy Baby Crazy Baby Crazy Baby Good！！ (Hey！！！)
その手をかざせ Raise your hands！！ (Hey！！！)
Super Baby Super Baby Super Baby Good！！ (Hey！！！)
虹のステージで Shall we bounce！？

Fall down, 全部サラケ出せ
Shut down, 常識ナド壊セ
Count down, 一緒ニ遊ボウ
Ah, Ah, Are you ready now？
Wow… Uh… 終わらない Party
Yeah… Oh… Baby Good… さぁ Evolution…

Crazy Baby Crazy Baby Crazy Baby Good！！ (Hey！！！)
デッカイ声で So, Make some noise！！ (Hey！！！)
Super Baby Super Baby Super Baby Good！！ (Hey！！！)
混ざり合うカラー Shall we dance！？ (Oh… Hey！！！)
Na Na Na Na… (Hey！！ Oh… Hey！！)
Baby Good！！！ (So Baby Good！！！)
Baby Good！！！ (So Baby Good！！！)
Na Na Na Na… (Hey！！！)
ひとつになろう　全開 Bomb！！`},{id:83,title:"Evoke",titleKana:"Evoke",lyricist:"神山智洋",composer:"神山智洋",arranger:"CHOKKAKU",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",performances:["WESTival{22}","WESTival(各会場オーラス){22}","WESTival(北海道オーラス){22}"],singer:"WEST.",date:"2018-01-02",lyrics:`Ladies and Gentlemen
The time has come
We gon' party over here
Everybody clap ya hands
We be coming through
Get out of my way
It's invitation to the new ground
Y'all better watch us
Hey, Don't look away
Let's get the show started now

Hair is done　粋にキメたDress code
誘うRed carpet　手を取りEscort
欲望だらけのParty people　暴走で最高潮
Voltage　上昇徐々に Lose control

一目で虜さ中毒まさにBlack hole
見惚れてCan't sneak　注目掻(か)っ攫(さら)うDarkhorse
轟かすMy name　俺が台風の目
響くBass　ShyなBae
Saveなんて不要さぁFeel the beats

人が犇(ひし)めくDance floor
それぞれが自由に歌い叫び
燦然(さんぜん)と煌(きら)めく宙のMirror ball
踊る心照らし続けて
今宵はSpecial day　Rhythmにのって
ParadiseにRuleはTABOO
心の赴くままDancing now Ready？
Volumeを上げろMake some noise

Until the time ends
Until the sun rises
Hey wussup？ Don't stop the party
Let me hear you say YEAH！ (YEAH！)
say OH！ (OH！)
Let's hang out　もっとTurn it up
イカしたGirl Shall we dance？
Way to go

Beatで揺れるHip
Sceneに合わせるMusic
Heat up　一緒にKeep on
Moving Stepping Jumping Dancing
憧れのVIP seat
Glass 掲げPeace & Cheers
We gon' party like this
Follow me

燃え上がってFire
灼熱の熱帯夜
汗だくDead tired
でももっとアガって　Higher
まだ物足りないでしょ？今すぐCall me
Come on,
Let's move it & Put ya hands up in the air

魅力溢れるDiamond
輝きに心奪われ溺れ
まるで無法地帯　Crazy Ceremony
Limiter　外れ止まれなくて
肌を伝うSweat　髪掻き上げ
暴れ疲れてDIZZY
適当でOkay　更にTo the top Ready？
ただ求めるまま Running wild

Still more swingin' swingin'
Don't stop Get it Get it
Break down, Regret is deferment
Now scream
(Bounce Bounce)
Fangirls voice ExtraでGOATなSuperstar
Got a swag Got your back OMG！！！
Girls are delighted Waves of the light
Tonight we excited
Fly so high Touch the sky
Never felt like that Check this out
It's lit Let's go

Until the time ends
Until the sun rises
Let me sing it now
Oh
One more time
Oh
Let's dance
Oh

Satisfied？`},{id:84,title:"OH LA LA",titleKana:"OH LA LA",lyricist:"SUNNY BOY",composer:"Christofer Erixon・Josef Mekin",arranger:"ha-j",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",performances:["WESTival{10}","WESTival(各会場オーラス){10}","WESTival(北海道オーラス){10}","WESTV!{25}","WESTV!(各会場オーラス){25}","WESTV!(北海道オーラス){25}"],singer:"WEST.",date:"2018-01-02",lyrics:`OH LA LA OH LA LA LA LA
OH LA LA OH LA LA LA LA
1 2 3 Go！

普段はShyな君も Ima set you free
俺らと一緒に Let's
Party Party　どん派手にパーリー
OH LA LA OH LA LA LA LA

リミット突破したいなら
俺らといれば Alright
体を揺らして Now sing
OH LA LA OH LA LA LA LA

人生は一度きりだから
はしゃぎまわって自由になれ

アゲロ！！　Hey！！
ハチャメチャになるまで
行っとけ！！　Hey！！
盛り上がれよ Everyday
嫌なこと全て　忘れるまで Party
枯れるまで We sing
OH LA LA LA LA
OH LA LA LA LA

今はRide　この音でGo side to side
まだまだ激しく
ノレノレ半端なくノレ
OH LA LA OH LA LA LA LA

真面目になりすぎはダメダメ
肩の力をほぐして
気を抜いて Everybody sing
OH LA LA OH LA LA LA LA

人生色々あるけど
喜怒哀楽を楽しもうぜ

アゲロ！！　Hey！！
ハチャメチャになるまで
行っとけ！！　Hey！！
盛り上がれよ Everyday
余計なことばかり　考えすぎずに
どんな時も We sing
OH LA LA LA LA

Everybody stand up (Stand up！)
騒ぐ準備は！？ (出来たッ！)
手を上げな！！ Hands up！！ (Hands up！)
飛び跳ねろ！！ Jump up！！ (& down)
踊りまくろう！！ Yeah！ (Oh yeah)
So　枯れるまで OH LA LA
俺らについてきな Yeah
Are you ready？！
100%今を楽しもうぜ！！

アゲロ！！　Hey！！
ハチャメチャになるまで
行っとけ！！　Hey！！
盛り上がれよ Everyday
嫌なこと全て　忘れるまで Party
枯れるまで We sing
Oh baby
アゲロ！！　Hey！！
ハチャメチャになるまで
行っとけ！！　Hey！！
盛り上がれよ Everyday
余計なことばかり　考えすぎずに
どんな時も We sing
OH LA LA LA LA LA
OH LA LA LA LA LA

OH LA LA OH LA LA LA LA`},{id:85,title:"Parade!!",titleKana:"Parade!!",lyricist:"福岡良太",composer:"Takuya Harada・Christofer Erixon・Josef Melin",arranger:"船山基紀",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",performances:["WESTival{4}","WESTival(各会場オーラス){4}","WESTival(北海道オーラス){4}"],singer:"WEST.",date:"2018-01-02",lyrics:`Ladies & Gentlemen
Welcome to the Parade！！　Ha ha！

天気予報　外れたけど
足取り軽やかに
騒がしい Sunday
僕、はにかんで
飛び越えた水溜り

街中は…
(So happy happy happy mood)
君の待つ場所へ
カラフルに咲いた傘たち
揺れるよサイドステップ

君を見つけた瞬間に
1.2.3. Knock out！
濡れた髪と　肌を滑る Raindrop

I love you！
はぐれぬように今夜は僕がエスコート
流れ出すメロディーに乗せて Shall we dance？
始まるよ恋のパレード
Oh, ファンタジックに描いてくよ Love story
君だけが Specialさ (Just you) I want you (I want you)
今夜こそきっと言うよ…
「You're all I need… You know？」

人混みは…
(So loving loving loving mood)
不意に触れた指
寄り添う二つの影　照れてスライドステップ

君の気持ちが知りたくて
1.2.3. Right now！
焦る僕を　急かすようにライトアップ

I love you！
2人の想い乗せてまわるメリーゴーランド
駆け引きは Round & Round 誘う Take your hands
始まった恋のパレード
Oh, ロマンティックに2人包む Like a magic
君だけがPrecious さ (Just you) I need you (I need you)
今夜こそきっと言うよ…

2人で見る景色(ステージ)は
色とりどりに輝いてる
So come on！ (So come on！)
君に伝えるよ　行こう　フィナーレさ！！

I love you！
君と2人この先もずっと We're in love
祝福のカーニバル　踊ろう Side by side
終わらないよ恋のパレード
Oh, ドラマチックに口付けを交わす2人
君だけさ Only you (Just you) I want you (I want you)
今夜こそきっと
「離さない君を」
って言うよ…
「You're all I need… You know？」`},{id:86,title:"GOD DAMN",titleKana:"GOD DAMN",lyricist:"Kanata Okajima",composer:"COMMAND FREAKS・CHRISTOFER ERIXON・ERIK LIDBOM",arranger:"COMMAND FREAKS",album:["WESTival","WESTival[通常盤]"],announce:"t",performances:["WESTival{13}","WESTival(各会場オーラス){13}","WESTival(北海道オーラス){13}","DOME TOUR AWARD(大阪,福岡){13}","DOME TOUR AWARD(東京){13}","DOME TOUR AWARD(東京オーラス){13}"],singer:"神山智洋＆濵田崇裕",date:"2018-01-02",lyrics:`What's going on？
終わり無き　都会の戦場は
生きるか　死ぬか
もう忙しいゼ

理不尽な Everyday　憤り隠して
不適な微笑み
狙うは TOP of TOP

ひるんだ隙に　一瞬で奪い取れ
永遠なる　フラストレーション Life
いつ終わるのか　何が正解か
…誰もわからない

GOD DAMN
燃え上がる Ambition
リアルに　今は挑むだけ
GOD DAMN
己の限界なんて
決められてたまるか
無駄な光まみれ
駆け抜ける　ランウェイ
毒された　俺ら止まれない
GOD DAMN
お前はちゃんと生きてる？
一度きりのイキザマ

You got it guys？

What's going on？
またも意味の無い Clash
どこもラスボスばかり
もう嫌んなるゼ

余裕かましてる Perfect Hero も
一晩で真っ逆さま
明日は我が身

小さな街から　大きな夢抱いて
戦って来たんだろう？
後ろ向いている
…暇なんてないゼ

GOD DAMN
火を吹く Ignition
貪欲に　今は突っ込むだけ
GOD DAMN
勝ち気なスタイルで
常識を塗り変えて行け
無駄な欲にまみれ
溢れだす Champagnes
毒された　俺ら戻れない
GOD DAMN
お前はちゃんと生きてる？
一度きりのイキザマ

浮ついたこの世界に
意味があるかは I don't know
(No one ever knows)
でも言い訳なら　もう Enough
充分しただろう？

正義をかざすだけで
生きられるなら
そりゃ美しいけれど
幕は上がってるのさ

この先なんて
…誰もわからない

GOD DAMN
燃え上がる Ambition
リアルに　今は挑むだけ
GOD DAMN
己の限界なんて
決められてたまるか
無駄な光まみれ
駆け抜ける　ランウェイ
毒された　俺ら止まれない
GOD DAMN
お前はちゃんと生きてる？
一度きりのイキザマ

GOD DAMN
俺はちゃんと生きてる？
一度きりのイキザマ`},{id:87,title:"Into Your Eyes",titleKana:"Into Your Eyes",lyricist:"中間淳太・Komei Mckinnon",composer:"Josef Melin・Adrian Mckinnon",arranger:"Josef Melin",album:["WESTival","WESTival[通常盤]"],announce:"t",performances:["WESTival{14}","WESTival(各会場オーラス){14}","WESTival(北海道オーラス){14}"],singer:"中間淳太＆藤井流星＆小瀧望",date:"2018-01-02",lyrics:`Yeah… Hey girl… Come here…
Woo… Something I wanna say
You know, Listen up

何気ない　平日の夜
約束もないけれど　こうして会えたね　Alright
苦いコーヒー　飲めないくせに
「私もそれで」と　笑う

まるで　子供みたい
そっと　君を引き寄せ
「嘘つきめ」と抱きしめる

Look into your eyes, girl
何も言わないで
Look into your eyes, girl
その笑顔は誰にも見せないで
鳴った　電話に　遮られた時間の
続きを　探そうか？

Oh　君へと　近づくほど
友達のフリがうまくなってく　Oh no baby
ワガママだって　愛せるけど
本当の　気持ちは　言えない

振り返りざま　そっと　笑う　君に
「またいつか」と手を振った

Look into your eyes, girl
どこにも行かないで
Look into your eyes, girl
その言葉を静かに飲み込んで
最終　電車に　乗り込んでいく君の
背中を　見ていた

Get down, Break down
もっと恋に落ちてく
Get down, Cuz I can't stop
瞳に溺れてく
Get down, Break down
もっと君に堕ちてく
Get down, Cuz I can't stop
瞳に溺れてく
Woo… Pretty baby (Into your eyes)
Keep on lovin' (Lovin', Lovin'), Keep on lovin' (All day)

Look into your eyes, girl
もう何も聞かないで
Look into your eyes, girl
許された　時間を壊さないで
Won't stop　君を
愛すほどに Lost my way
濡れたシャツもTake off

Look into your eyes
肌を重ねDancing
Look into your eyes
首に残すルージュと過ち
今日も　君の
寂しげな瞳が
うつす指のウソ`},{id:88,title:"乗り越しラブストーリー",titleKana:"のりこしらぶすとーりー",lyricist:"重岡大毅",composer:"YHANAEL",arranger:"丸山真由子",album:["WESTival","WESTival[通常盤]"],announce:"t",performances:["WESTival{12}","WESTival(各会場オーラス){12}","WESTival(北海道オーラス){12}","DOME TOUR AWARD(大阪,福岡){12}","DOME TOUR AWARD(東京){12}","DOME TOUR AWARD(東京オーラス){12}"],singer:"桐山照史＆重岡大毅",date:"2018-01-02",lyrics:`ガタンゴトン揺れる僕らは
出会い別れまた恋をして
ドンと構えた僕の切符
乗り越しラブストーリー

「よっ」て言えよはよ
車窓透けた僕赤ら顔
こっち気づいてや
キレイなってる横顔

いつだって何だって繋いだ手と手
「めっちゃ幸せ」言うて見つめ合った
目を閉じて　思い出ひたっとったけど
ドア開く　まだ好きなんや

ガタンゴトン揺れる僕らは
いったいどこへ向かってるの
ポケットつまづいた僕の切符
乗り越しラブストーリー

誕生日にくれた流行りのキャップ
実はサイズ　きつい
「私も一緒に使いたくって」
ってエヘヘちゃうで

怒らせたくて　パシャリ寝顔
「もうやめて～」って僕見つけてギュッ
アダムとイヴも二度見しとったやろ
ドア開く　まだ降りないで

ガタンゴトン揺れる僕らは
きっと笑うため泣いてたの
ポケットでぽけーっと僕の切符
乗り越しラブストーリー

僕を待つ君がもしいたら
どんなに笑えんだろう
本当は知ってた　サヨナラだって
君の切符　幸せそう
僕が降りる駅　見えてきたよ

ガタンゴトン揺れる僕らは
出会い別れまた恋をして
ドンと構えた僕の切符
乗り越しラブストーリー
乗り越しラブストーリー
乗り越しラブストーリー

揺れる心　行け涙　僕の“愛してる”`},{id:89,title:"おーさか☆愛・EYE・哀 (MURO REMIX)",titleKana:"おーさか☆あい・EYE・あい (MURO REMIX)",lyricist:"松尾潔",composer:"松尾潔・豊島吉宏",arranger:"松尾潔",produce:"松尾潔",album:["WESTival","WESTival[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2018-01-02",lyrics:`じらすようなまなざしで　足を組みかえて笑う
うねるような腰つきで　オトコたちに火をつけな

誰も気づかない時をねらって
僕だけに目くばせした

そんな目で見つめてくんの　やめてくれ
こんな胸騒ぎには慣れてへん
ホレたらアカンから.......おーさか

波のようなまばたきで　罪のないオトコ泣かす
風のようなささやきで　その気にさせたら捨てな

暗闇の中で光る不死鳥
気まぐれに羽ばたく夜

どんな目で君を見つめ返せばいい
こんなゲーム　いつまでも続かへん
ホレたら負けやから.......おーさか

愛・EYE・哀・アイ・l-ight
あ一い・愛・EYE・哀・アイ・l-ight...おーさか

誰も気づかない時をねらって
僕だけに目くばせした

そんな目で見つめてくんの　やめてくれ
こんな胸騒ぎには慣れてへん
ホレたらアカンから.......おーさか
ホレたら負けやから.......おーさか

愛・EYE・哀・アイ・l-ight
あーい・愛・EYE・哀・アイ・l-ight…おーさか`},{id:90,title:"プリンシパルの君へ",titleKana:"ぷりんしぱるのきみへ",lyricist:"HoneyWorks",composer:"HoneyWorks",arranger:"CHOKKAKU",album:["プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[初回A]","プリンシパルの君へ/ドラゴンドッグ[初回B]","プリンシパルの君へ/ドラゴンドッグ[通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["WESTival{5}","WESTival(各会場オーラス){5}","WESTival(北海道オーラス){5}","WESTV!{12}","WESTV!(各会場オーラス){12}","WESTV!(北海道オーラス){12}","W trouble12/11{4}","W trouble12/12昼,12/13夜{4}","W trouble12/12夜,12/13昼{4}","rainboW(北海道){13}","rainboW(宮城,愛知,新潟,埼玉,熊本){13}","rainboW(円盤){13}","TO BE KANSAI COLOR-翔べ関西から-(大阪){9}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){9}","TO BE KANSAI COLOR-翔べ関西から-(東京){9}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){9}","DOME TOUR AWARD(大阪,福岡){27}","DOME TOUR AWARD(東京){28}","DOME TOUR AWARD(東京オーラス){28}"],singer:"WEST.",date:"2018-03-07",tiup:"『プリンシパル〜恋する私はヒロインですか？〜』オープニング主題歌",lyrics:`最高最大の物語真っ白な世界
ここから始まる何を描こう

どうしたの？ため息なんて
周りばっか気にしてる
君らしくいる事難しいけど
その方が好きだよ

恋にかかる魔法かけて
君の心の鍵を開ける

最高最大の物語カラフルになれ
大人は見えない夢の地図
最愛を探す旅走り出したら
ここから始まる君の世界

物語主役は君で
どんな話を作るの？
すぐそばに居るから
恐がらないで君の色を描こう

恋が進む魔法かけて
雪は溶けて道ができてく

最高最大の物語わがままになれ
誰にも消せない夢の地図
散々な一日も笑い飛ばそう
涙は似合わない君の世界

いくつもの恋が生まれて
いくつもの恋が眠って
君は誰かに恋してる？
僕は君に恋してる

旅は続く傷ついても
遠回りは近道になる

最高最大の物語カラフルになれ
大人は見えない夢の地図
最愛を探す旅走り出そうよ
無限に広がる世界へ

最高の物語幸せになれ
知らない扉も恐くない
最愛を探す旅息を切らして
世界を楽しめ君は主役`},{id:91,title:"ドラゴンドッグ",titleKana:"どらごんどっぐ",lyricist:"Shusui",composer:"Shusui・Josef Melin",arranger:"Josef Melin",album:["プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[初回A]","プリンシパルの君へ/ドラゴンドッグ[初回B]","プリンシパルの君へ/ドラゴンドッグ[通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["WESTival{11}","WESTival(各会場オーラス){11}","WESTival(北海道オーラス){11}"],singer:"WEST.",date:"2018-03-07",tiup:"日本テレビ系深夜ドラマ『卒業バカメンタリー』主題歌",lyrics:`何言ってんだ　出来ないかもって
何やってんだ　下向いちゃって
Hey you！　やる前に諦めちゃ
何言ってんだ　ダメダメ

上にいくんだろう？
壊していけよ
常識だって

まだだ　ギリギリ間に合うだろう？
もっとガチャガチャかき回せばいい
一度しかない青春なら
ギラギラしてやれ
勝っても負けてもお前は
ドラゴンドッグ！

どこ見てるんだ　顔色ばっかり
何してるんだ　振り向くばっかり
Hey you！　それで勝てるのかって
どこ向いてるんだ　ダメダメ

誰のためじゃない
自分の武器で
戦うんだ

そうだ　めちゃくちゃやっちまえよ
でなきゃトップドッグ
なれるわけがない
どこまでも強く生きてやれ
メラメラ燃えてやれ
勝っても負けてもお前は
ドラゴンドッグ！

もっとギラギラ…
もっとメラメラ…

胸がジンジン痺れるほど
今　ビリビリきまくってるだろう
その手で超えてやれトップドッグ
今こそ火を吹け！

まだだ　ギリギリ間に合うだろう？
もっとガチャガチャかき回せばいい
一度しかない青春なら
ギラギラしてやれ
勝っても負けてもお前は
ドラゴンドッグ！`},{id:92,title:"青空願ってまた明日",titleKana:"あおぞらねがってまたあした",lyricist:"MORISHIN・Komei Kobayashi",composer:"川口進・MORISHIN・佐原康太",arranger:"ha-j",album:["プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[通常盤]"],announce:"t",performances:["WESTV!{24}","WESTV!(各会場オーラス){24}","WESTV!(北海道オーラス){24}","Johnny's World Happy LIVE with YOU(3/29){4}"],singer:"WEST.",date:"2018-03-07",lyrics:`黄昏の街　歩道橋の上
あの僕らの歌　今日も聴いてる
どこかで君も　同じような気持ちでいるかな？

抱えきれないほどの期待と
不安をカバンに詰め込んだら
少し背伸びをして
今日も僕は　歩くよ

ずっと僕ら　探していた
いつかの未来を今生きてる
それぞれの空　晴れ渡る朝
見つけにいこう

そうさ
愛が愛が愛が溢れてる
世界が僕らを繋いでいく
“大丈夫”“大丈夫”
君の声がきっと誰かを笑顔にする
だから
愛が愛が愛が溢れだす
それは僕ら生きている証
描いた夢　芽吹いていくように
青空願ってまた明日

僕らが待ちわびた今日でさえ
いつか思い出になっていくけど
それぞれの未来が
重なる日を　夢見てる

急ぎ足の　街の中で
肩がぶつかることもあるでしょう
自分の弱さ　受け止めたなら
優しくなれる

ずっと
愛が愛が愛が続いてく
未来を僕らは生きていく
“大丈夫”“大丈夫”
いつかの声はちゃんと今も聞こえてるから
いつも
愛が愛が愛が続いてる
あの日僕ら出会った証
夢見た場所　辿り着くように
青空願ってまた明日

がむしゃらにもがいてた
長い夜も明けていく
選んだ道の先
新しい自分　そこで待ってるはずさ

そうさ
愛が愛が愛が溢れてる
世界が僕らを繋いでいく
“大丈夫”“大丈夫”
君の声がきっと誰かを笑顔にする
だから
愛が愛が愛が溢れだす
それは僕ら生きている証
描いた夢　芽吹いていくように
青空願ってまた明日

青空へ`},{id:93,title:"初恋",titleKana:"はつこい",lyricist:"MiNE",composer:"川口進・MiNE",arranger:"川口進",album:["プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[通常盤]"],announce:"t",performances:["WESTV!{7}","WESTV!(各会場オーラス){7}","WESTV!(北海道オーラス){7}"],singer:"WEST.",date:"2018-03-07",lyrics:`ずっと一緒にいようなんて
言葉は照れくさくて
あの日に交わしたキスのあと
甘酸っぱい恋に気づいた

2人あれから笑い合い涙も流し
ずっとそうして乗り越えたその先が「今」

僕らはきっと“愛してる”以上の言葉を　(I love you so)
見つける為に生きてきたんだ　(Never end)
手を取り合ってまた進んでゆこう　(My life)
それがひとつの軌跡さ
僕らはずっと優しさの答え合わせをして　(I love you so)
2人足跡を残してゆくよ
もう汚れた靴でもいいんじゃない？　(My life)
隣では君が笑ってて、幸せ咲く

何度もぶつかり合った後に
何度も好きになって
自然に居場所がここになって
かけがえない2人になってた

僕の溢れるこの気持ちを空に書いて
もっと大事なことを今、君に歌うよ

僕らはきっと“愛してる”以上の想いで　(I love you so)
「これからもずっとこうしていよう」　(Never end)
手を取り合って見つめ合いながら　(My life)
ほら、また君が笑ってる、笑ってる

誰もわからない　未来はわからない
それでも受け止めてゆく　僕が連れてってあげるよ
歩こう　(歩こう)　歩こう　(歩こう)
君を離さない

僕らはきっと“愛してる”以上の言葉を
見つける為に生きていたんだ
旅立つ君と送り出す僕と
それが2人の答えさ
僕らはずっと優しさの答え合わせをして　(I love you so)
支え合って生きてこれたんだ
君のいない街に慣れたら　(My life)
空に書く、僕のこの想い届いてって

My Love…Oh Yeah…`},{id:94,title:"スタートダッシュ!",titleKana:"すたーとだっしゅ!",lyricist:"藤林聖子",composer:"岩崎貴文",arranger:"家原正樹",album:["スタートダッシュ!","スタートダッシュ![初回A]","スタートダッシュ![初回B]","スタートダッシュ![通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["WESTV!{1}","WESTV!(各会場オーラス){1}","WESTV!(北海道オーラス){1}","W trouble12/12昼,12/13夜{21}"],singer:"WEST.",date:"2018-08-15",tiup:"テレビ東京系アニメ『キャプテン翼』オープニング主題歌",lyrics:`転んだ時の　芝生の匂い
仰ぎ見た　空の青　果てしなかった

迷って戻り　進む軌道が
果てしない夢を見る　僕たちの地図

ゴールを逸れた希望があっても
また立ち上がるなら　夢は終わらない

ナンバーワン！　誰より速く　駆け抜け
トリッキーなプレイで世界へ向け　スタートダッシュ！
ラン＆ラン！　憧れだけが僕らを
ジリジリジリ　動かすよ
メラメラメラ　行くぜキックオフ
飛び出そう　どデカイ　ドリームフィールド

誰も最初は　自分がいちばん
上手いって　強いって　信じてるけど

みんな同じ　才能じゃない
違うとこ　認め合い　奇跡を起こせ

悔しさは　心の栄養さ
伸びしろのポテンシャル　迷わず進め

ナンバーワン！　誰より早く　夢まで
一番乗りで注目浴び　スタートダッシュ！
ラン＆ラン！　情熱だけが僕らを
ジリジリジリ　焦がすから
メラメラメラ　本気出して
羽ばたこう　どデカイ　ドリームフィールド

右の手には友情　左の手には夢を
それがそう　僕たちの翼さ

ナンバーワン！　誰より速く　駆け抜け
トリッキーなプレイで世界へ向け　スタートダッシュ！
ラン＆ラン！　憧れだけが僕らを
ジリジリジリ　動かすよ
メラメラメラ　行くぜキックオフ
飛び出そう　どデカイ　ドリームフィールド`},{id:95,title:"アカツキ",titleKana:"あかつき",lyricist:"森若香織",composer:"5u5h1",arranger:"CHOKKAKU",album:["スタートダッシュ!","スタートダッシュ![初回A]","スタートダッシュ![初回B]","スタートダッシュ![通常盤]"],announce:"t",performances:["WESTV!{4}","WESTV!(各会場オーラス){4}","WESTV!(北海道オーラス){4}","DOME TOUR AWARD(大阪,福岡){8}","DOME TOUR AWARD(東京){8}","DOME TOUR AWARD(東京オーラス){8}"],singer:"WEST.",date:"2018-08-15",tiup:"Netflixオリジナルドラマ『宇宙を駆けるよだか』主題歌",lyrics:`赤い光　月の明り　不思議な空　まわる宇宙
綺麗な声　恋におちる　その笑顔の奥のほう
僕の瞳　映る姿　嘘と理想　揺れる世界
甘い言葉　孤独な夢　悲しみ纏ってるジェラシー

心を開いて　ありのままを見せたら
ねえ君は　すべて受け止めてくれるかな

大好きだよ　なのに張り裂けそうに切ない
抱きしめたら　壊れそうなレプリカ
未完成な　僕らのまま愛し合えるように
教室の窓　静かに照らしたアカツキ

赤い神話　月と太陽　無限のリバース　幼い記憶
流す涙　隠すルール　誰かに破ってほしかった

人は見かけより　心に傷があるよ
弱いから　強がって　自分守るんだ

大好きだよ　なのに素直になるのが怖くて
抱きしめても　すり抜けるホログラム
未完成な　僕らのまま許し合えるように
すれ違う廊下　想いを伝えるアカツキ

どうすれば…

愛されたいとか　愛してたいその願いは
終わらない　少しずつ　カタチ変えるだけ

大好きだよ　だから張り裂けそうに切ない
抱きしめたら　壊れそうなレプリカ
未完成な　僕らのまま笑い合える時に
教室のドア　もう一度開けるアカツキ`},{id:96,title:"僕らの軌跡〜ジャニーズWEST列島縦断〜",titleKana:"ぼくらのきせき〜じゃにーずWESTれっとうじゅうだん〜",lyricist:"MiNE",composer:"Takuya Harada・MiNE・Atsushi Shimada",arranger:"ha-j",album:["スタートダッシュ!","スタートダッシュ![通常盤]"],announce:"t",performances:["WESTV!{10}","WESTV!(各会場オーラス){10}","WESTV!(北海道オーラス){10}"],singer:"WEST.",date:"2018-08-15",lyrics:`いらっしゃい！！　いらっしゃい！！
ジャパ！！　ジャパ！！　ジャパ！！　ジャパーン！！
いらっしゃい！！　いらっしゃい！！
ジャパ！！　ジャパ！！　ジャパ！！　ジャパーン！！

日本全国　皆で旅しよか
北海道　青森　岩手　宮城　秋田
山形　福島　茨城　栃木　に　群馬
(そう列島縦断！！)
旅する魂

埼玉　千葉　首都　東京　も越えて
神奈川　新潟　富山　石川　に　福井
そう　山梨　長野
岐阜　静岡　愛知　三重　に　滋賀

京都　大阪　兵庫　奈良　和歌山　鳥取　島根
岡山　広島　山口　徳島　香川　に　愛媛
高知　福岡　佐賀　長崎　熊本　大分　宮崎　鹿児島　沖縄
全国制覇！！

今宵　騒げ　騒げ　全国にセンキュー
47都道府県のジャス民！！
おいで　おいで　宴へいらっしゃい
歌って盛り上がれ
オーエーオーエーオーエーオエーオー！！
オーエーオーエーオーエーオエーオー！！
オーエーオーエーオーエーオエーオー！！
歌って飛び跳ねろ

いらっしゃい！！　いらっしゃい！！
ジャパ！！　ジャパ！！　ジャパ！！　ジャパーン！！
いらっしゃい！！　いらっしゃい！！
ジャパ！！　ジャパ！！　ジャパ！！　ジャパーン！！

札幌　青森　盛岡　仙台　秋田
山形　福島　水戸　宇都宮
前橋　さいたま　千葉　に　東京 Yeah
(そう全身全霊！！)
駆け抜けてゆく

横浜　甲府　新潟　長野
富山　に　金沢　福井　に　名古屋
岐阜　静岡　に　津　大阪　京都
神戸　大津　奈良　和歌山
鳥取　松江　岡山

広島　山口　徳島　に　高松
松山　に　高知　福岡　佐賀
長崎　熊本　大分　に　宮崎
鹿児島　那覇　完全制覇！！

今宵　騒げ　騒げ　全国のピーポー
年がら年中　暴れジャニスト
おいで　おいで　さぁ手の鳴る方へ
踊ってブチアゲろ

誰にだって故郷があるレペゼン地元
俺たちの大阪ありがとうーーー！！
ほら踊れ！！

今宵　騒げ　騒げ　全国にセンキュー
47都道府県のジャス民！！
おいで　おいで　宴へいらっしゃい
歌って盛り上がれ
オーエーオーエーオーエーオエーオー！！
オーエーオーエーオーエーオエーオー！！
オーエーオーエーオーエーオエーオー！！
歌って飛び跳ねろ

いらっしゃい！！　いらっしゃい！！
ジャパ！！　ジャパ！！　ジャパ！！　ジャパーン！！
いらっしゃい！！　いらっしゃい！！
ジャパ！！　ジャパ！！　ジャパ！！　ジャパーン！！`},{id:97,title:"クチウツシ",titleKana:"くちうつし",lyricist:"SHIROSE from WHITE JAM",composer:"Christofer Erixon・Erik Lidbom・Doojinso",arranger:"Erik Lidbom",album:["スタートダッシュ!","スタートダッシュ![通常盤]"],announce:"t",performances:["SPECIAL LIVE(サムシング・ニュー[初回B]){2}"],singer:"WEST.",date:"2018-08-15",lyrics:`いつも通りの夕方　涼しい風
焼けるコンクリート
この季節が来るたびに僕らはまた
子供みたいにアイスを食べよう

300日ぶりの夏
普段は苦手な集団行動
Aye Oh Oh Aye Oh Oh Oh
夜風と仲間と、ビーチ
風に紛れて、別行動
Aye Oh Aye Oh
ジュースでも買いに行こう

何か飲みたい？　こぼすジュース
君が僕をぬぐった。

夏の夕陽、焦がれて
今日は、僕におごらせてeeeい
(so give it to me)
こんな内緒　シェアしない
このあと、君に騙されたaaaい
ねぇまたのどが渇いた
カラカラな唇、ジュースをクチウツシ
びしょびしょな熱帯夜、とけ出した Ice cream

空気を読んだ友達のナイスパス
you got it, oh oh. you got it, yeah.
もう無言でも僕らは感じ合える
ドラマごっこで、わらっちゃうね

何が飲みたい？　もうわかるよ
今夜は全部やろう

夏の夕陽、焦がれて
今日は、僕におごらせてeeeい
(so give it to me)
こんな内緒　シェアしない
このあと、君に騙されたaaaい
ねぇまたのどが渇いた

太陽が沈んだ砂浜
暗い誰もいないビーチさ
何か、いいにおいがするね。
(Ah Ah Ah Ah？　Ah Ah Ah Ah…)
(Ah Ah Ah Ah？　Ah Ah Ah)

夏の夕陽、焦がれて
今日は、僕におごらせてeeeい
(so give it to me)
こんな内緒　シェアしない
このあと、君に騙されたaaaい
ねぇもう一杯飲もうよ

太陽の裏　隠れて
今夜、僕に送らせてeeeい
(so give it to me)
こんな内緒　シェアしない
このあと、君に溺れたaaaい
この気持ちは飲み干せない
カラカラな唇、ジュースをクチウツシ
びしょびしょな熱帯夜、とけ出した Ice cream

カラカラな唇、ジュースをクチウツシ
びしょびしょな熱帯夜、とけ出した Ice cream`},{id:98,title:"We are WEST!!!!!!!",titleKana:"We are WEST!!!!!!!",lyricist:"神山智洋",composer:"神山智洋",arranger:"ha-j",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",performances:["WESTV!{23}","WESTV!(各会場オーラス){23}","WESTV!(北海道オーラス){23}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){2}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){2}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){2}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){2}","Mixed Juice(北海道オーラス){2}","TO BE KANSAI COLOR-翔べ関西から-(大阪){4}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){4}","TO BE KANSAI COLOR-翔べ関西から-(東京){4}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){4}","POWER(宮城){30}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){29}","POWER(愛知オーラス){29}","Johnny's World Happy LIVE with YOU(6/18){3}"],singer:"WEST.",date:"2018-12-05",lyrics:`(しげー！！)はぁーい！！
(あきとー！！)はいさい！！
(じゅんたー！！)あいよー！！
(かみちゃーん！！)はいはーい！！
(りゅーせー！！)えっ！？
(はまちゃーん！！)あぃぃぃいー！！
(のんちゃーん！！)うぃっす！！
ジャニーズWEST！！
We are WEST!!!!!!!
S！！ K！！ N！！ K！！ F！！ H！！ K！！ WEST！！

浪速の魂かかげ参上
誇りを胸に暴れまわって
(なんでやねん！！ どないやねん！！)
希望のつぼみ開いていく
輝く太陽に憧れて
めっちゃ個性的なアホが集った
(ボケて！！ツッコンで！！)
がむしゃらに咲き乱れる

困難でも(はい！！) 信念が(はい！！)
俺ら突き(はい！！) 動かす(はい！！)
純粋な心で(気張って！！行こうぜ！！)
さぁここから　空の彼方へ

跳べ！！(Hey！！) 叫べ！！(Hey！！) 心揺さぶれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 夢の世界へ！！
(あ～もう腕疲れたぁ)
なんてまだ序の口ここから限界突破さ
跳べ！！(Hey！！) 叫べ！！(Hey！！) 高く舞い上がれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 次のStageへ！！(Hey！！)
かけがえない楽しい思い出積み重ね
届け Happiness

がっつりと根を張って奮い立つ
一日花で終わらせないさ
(ガッチャガチャ！！ ワッチャワチャ！！)
たぎる意志は枯らさないから

糧を種に(はい！！)すれば(はい！！)
見事な花(はい！！)が咲く(はい！！)
来たる正念場(踏ん張って！！進め！！)
暗闇でも　さぁ駆け抜けろ

跳べ！！(Hey！！) 叫べ！！(Hey！！) 心揺さぶれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 夢の世界へ！！
(あ～もう声ガラガラ～)
なんてまだ序の口ここから限界突破さ
跳べ！！(Hey！！) 叫べ！！(Hey！！) 高く舞い上がれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 次のStageへ！！(Hey！！)
遠く広がる満開の花びら舞う如く
空へ Fly away

Naughtyな関西人　陽気でやかましい
バリバリのチャキチャキたまに噛み噛みタジタジマジ(ワロタ www)
Funky な感じでも本気で Catch the dream
七転び八起きでファイティーン！！ Ready to go！！

逆境も(ばっちこーい！！)
理不尽も(ばっちこーい！！)
抱いていく大きな夢は(Fu！！Fu！！)
まだこれから(どんどん！！)
増えてくから(頑張れー！！)
風に吹かれても(Go！！)
雨に濡れても(Go！！)
進め一歩でも(Go！！)
描く道のその(Go！！) 先を Wow
さぁ咲き誇れ

跳べ！！(Hey！！) 叫べ！！(Hey！！) 心揺さぶれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 夢の世界へ！！
(やばいめっちゃ楽しい↑↑)
って弾ける笑顔　花丸100点満点さ
跳べ！！(Hey！！) 叫べ！！(Hey！！) 高く舞い上がれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 次のStageへ！！(Hey！！)
大輪の花が彩り　すべての心繋ぐ
虹色の We are WEST!!!!!!!
Wow`},{id:99,title:"パーリパーリパリ - カタカナを叫べ -",titleKana:"ぱーりぱーりぱり - かたかなをさけべ -",lyricist:"SHIROSE from WHITE JAM・GASHIMA from WHITE JAM",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・SHIROSE from WHIT JAM・GASHIMA from WHITE JAM",arranger:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",performances:["WESTV!{3}","WESTV!(各会場オーラス){3}","WESTV!(北海道オーラス){3}"],singer:"WEST.",date:"2018-12-05",lyrics:`下むいてるより　ハイハイハイ　上むいてる方が　サイコー
ぶち上がろうヤ　声を出そうヤ
Johnny's WEST, Jasmine & Everybody
Let's go

パーリパーリパリ Everybody get down
パーリパーリパリ　めんどくさいことほっといて
ぶち上がろうヤ　共に行こうヤ
てんしょん上がって　キター
パーリパーリパリ Everybody get down
パーリパーリパリ　俯いてないで
太陽は誰にも　モエテル
ほら絶対見上げなきゃ　モッタイナイ

ヘイ！ 周り見渡してみ(ミー)
最高な今日が始まる What you wanna do(ドゥー)
こんな時にへこんでちゃ意味ない
すかしてないでのって来い(ハーイ)

So, レッツパーリー
行くで、レッツパーリー
みんなで、レッツパーリー
So check it out！(フーフー)
太陽もジリジリ　乗りな、エビバディ
飛ばせ AXL踏み込んで　ブンブンブンベビ

ヘイ　燃えている太陽も
ホー　輝いてる星も
君がいなきゃ全く意味ない　ってことで
イキマショカ

I know I know You know You know
Say　ふぉー(フォー)
Eyesの愛の準備運動
ほらいっせーので
イッセーノーデッ

パーリパーリパリ Everybody get down
パーリパーリパリ　めんどくさいことほっといて
ぶち上がろうヤ　共に行こうヤ
てんしょん上がって　キター
パーリパーリパリ Everybody get down
パーリパーリパリ　俯いてないで
太陽は誰にも　モエテル
ほら絶対見上げなきゃ　モッタイナイ

下むいてるより　ハイハイハイ　上むいてる方が　サイコー
わかんないくらいが　ライライライ　今日はだいたい　ダイジョウブ

真面目な話は2次会で　イェー
大好きな曲かけて　イェーイェーイェー
適当に替え歌で　ウォーウォー
電波届かないとこに　ゴーゴー

やばすぎ　イェー　食べ過ぎ　イェー
あほすぎ　イェー　そうはしゃぎすぎ　イェー
でも止まらないぜ　マダマダ
これは　マダマダ
ほんのカタナラシ

I know I know You know You know
Say　ふぉー(フォー)
ちょっと　内緒　急にいうよ
ほらいっせーので
イッセーノーデッ

パーリパーリパリ Everybody get down
パーリパーリパリ　めんどくさいことほっといて
ぶち上がろうヤ　声を出そうヤ
てんしょん上がって　キター
パーリパーリパリ Everybody get down
パーリパーリパリ　俯いてないで
太陽は誰にも　モエテル
ほら絶対見上げなきゃ　モッタイナイ

下むいてるより　ハイハイハイ　上むいてる方が　サイコー
わかんないくらいが　ライライライ　今日はだいたい　ダイジョウブ

でもあがりっぱなしも　バテバテ
だから映画みて力　タメタメ
Pizza　半分こで　アーン
ごちそうさま　アンアンアン
Eyesの愛の準備運動 Say

パーリパーリパリ
パーリパーリパリ
パーリパーリパリ
Everybody get down

パーリパーリパリ Everybody get down
パーリパーリパリ　めんどくさいことほっといて
ぶち上がろうヤ　共に行こうヤ
てんしょん上がって　キター
パーリパーリパリ Everybody get down
パーリパーリパリ　俯いてないで
太陽は誰にも　モエテル
ほら絶対見上げなきゃ　モッタイナイ

下むいてるより　ハイハイハイ　上むいてる方が　サイコー
わかんないくらいが　ライライライ　今日はだいたい　ダイジョウブ

下むいてるより　ハイハイハイ　上むいてる方が　サイコー
ぶち上がろうヤ　声を出そうヤ
Johnny's WEST, Jasmine & Everybody
Let's go`},{id:100,title:"WESTV!ショッピング!Part 1",titleKana:"WESTV!しょっぴんぐ!Part 1",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"岩崎貴文",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2018-12-05",lyrics:`良いもの揃えてお値打ちに
真心添えて届けます
あなたの笑顔を見たいから
WESTVショッピング

さぁみなさん！こちらをご覧ください！(どれですか？)
こちらの商品はなで肩と(ん)
なで肩ぎょっ、ぎょっ(ん、ん？なんて？)
なで肩ぎょっ、あれ？(なに？)
なで肩(うん)
ぎょうせいギプスです！(漢字ちゃんと読みなさいよ！)
これをね1日10分(おう)
付けるだけでいいんですよ！(お、付けるだけ！)
みなさん和服とか(うん)
お似合いですよね(や、ちょ、日本語おかしい)
っ、似合いたいですよね(そうそうそう、似合いたい)
そういう時にこちらを付けることによって(おう、どうなるの)
なで肩の養成ギプスになれる、ちょ、いや(いやもうぐちゃぐちゃやないか！)
(ちゃんとやりなさいよ！)(辞めさせてもらうわ！)(もうええわ！)

WESTV！お買い得だ
WESTV！夢のショッピング
WESTV！今がチャンス
WESTV！ショッピング！

あぁもうどうしよう
やぁどうしたんだいジェニファー
あぁボブ掃除する気が起きなくて
そういう時ってあるよね(あるある)
そういう時はこいつの出番だ(お！)
アクロバティックお掃除ロボット「モンチ」(なに！？)
見た目は派手だけど部屋の隅から隅までピカピカにしてくれるんだ
すごいわボブ！(すごい、あ、あ、)
でもそれだけじゃないんだこの「モンチ」
ドローン機能が付いているんだ(ええ！)
手の届かなかった照明や本棚の上だってお茶の子さいさい
すごい！(すごっ！はっ、ジェニファー)
じゃあこれからはボブにお願いしなくていいのね
ってことはもう必要ないってことじゃない？(ボブ、俺もいるぞ)
おいおいジェニファー
冗談がきついな！
ハッハッハ(仲がいいな！)

WESTV！お買い得だ
WESTV！夢のショッピング
WESTV！今がチャンス
WESTV！ショッピング！`},{id:101,title:"愛の奴隷",titleKana:"あいのどれい",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE",arranger:"MUTEKI DEAD SNAKE",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",performances:["WESTV!{19}","WESTV!(各会場オーラス){19}","WESTV!(北海道オーラス){19}"],singer:"WEST.",date:"2018-12-05",lyrics:`I'm a slave！

「どこにいるの？」
「何してるの？」
「誰と一緒なの？」
疑ってるわけじゃないわ
でも不安になるのよ

メールしたり　電話したり
いつも探り合う
四六時中　恋愛ルーティン
踏み絵の繰り返し

もっと下さい(愛！愛！愛！)
愛を下さい(愛！愛！愛！)
心を満たすのは
一つよ Only Love

あなただけを見つめている
従順なる　愛の奴隷
気づけばまた　想い馳せる
哀しいほど　愛の奴隷
ねぇ　これが「好き」ということなの？
自分ではわからない
私、調教済みだから... I'm a slave！

“愛する人と結婚すれば　幸せになれる”
どうしてかな？
いつの間にか
そう刷り込まれていた

学校でも　仕事場でも
みんな探してる
胸が躍る　恋愛チャンス
「誰にしようかしら？」

もっと知りたい(愛！愛！愛！)
愛を知りたい(愛！愛！愛！)
心を染めるのは
いつでも Only Love

この惑星(ほし)を生きる誰もが
完璧なる　愛の奴隷
ラヴ・ロマンスに憑りつかれた
サラブレッド　愛の奴隷
ねぇ　これは「人の性」でしょうか？
客観性持てない
私、調教済みだから...

愛だけが　愛だけが
人を支配し　人を満たす
そういうものってあるのかしら
ないわ！
Without Love！

アイヲクダサイ！

世界はもう気づいている
この世はそう　愛の奴隷
歴史が続いてきたこと
それはつまり　愛の奴隷
自分に嘘はつけないよ
口先で否定しても
心は正直なの
今日も欲しがってるわ
私、調教済みだから... I'm a slave！

愛の奴隷`},{id:102,title:"WESTV!ショッピング!Part 2",titleKana:"WESTV!しょっぴんぐ!Part 2",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"岩崎貴文",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2018-12-05",lyrics:`良いもの揃えてお値打ちに
WESTV！ショッピング

奥さん(なんやの)
日々の生活に潤い、欲しくない？(潤いよりお金欲しいわ)
そんな時はこの「じゅんじゅんリップクリーム」を使えば(ん？)
魅惑のフレグランスが(え？)
リラックス効果を与えて(ちょっと)
プルップルでグラマラスな唇にしてくれますよ(あんたさっきからなに言うてんの)
奥さんの魅力をさらに引き出してくれるでしょう(そんなことより私パーマあてたい)
家事や育児に疲れた奥さん！(パーマどう？)
きっと旦那さんもあなたの変化に気づいてくれるでしょう(旦那よりあんたに気づいて欲しい)
まあ僕は、いつでも気づいてますけどね(...すき)

WESTV！お買い得な
WESTV！夢のショッピング
WESTV！今がチャンス
WESTV！ショッピング！

今回！桐山照史が特別に紹介する商品はこちら！(うん、なんや)
ラーメン！(あぁいいですね、ラーメン)
さぁ、特別に今回はなんと！(うん)
咀嚼音を！お届けいたしましょう！(どういうことやろか)
では参ります(え、食べんの？)
ふーふふっふーズーズズッズー(え、うそやろ、食べてるやん)
もぐもぐもぐ
うーん(うーんじゃなくて)
ふぅん(ふぅんじゃないよ、紹介しようよ)
いいねぇ(いいねぇちゃうねん、商品紹介やって)(え、なんの時間？これ？)
今回限りでもう１つ！
次は、私が大好きなぁ(おぉなんや)
咀嚼音！たくあん！(たくあんて)
では、参ります(いやだから咀嚼音のコーナーじゃないのよ)
カリっカリッカリ(いや、ええ音！ええ音やけど)
ポリっポリ(商品紹介！)
んあぁぁぁ

WSTV！ショッピング！(なんやこれ)

WESTV！お買い得な
WESTV！夢のショッピング
WESTV！今がチャンス
WESTV！ショッピング！`},{id:103,title:"Drift!!",titleKana:"Drift!!",lyricist:"YU-G",composer:"h-wonder",arranger:"h-wonder",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",performances:["WESTV!{5}","WESTV!(各会場オーラス){5}","WESTV!(北海道オーラス){5}"],singer:"WEST.",date:"2018-12-05",lyrics:`Come on now！！

片道一車線　ギリギリのオフロード
握る汗
入り組む3Dなway　制御不能なイエローライト
Nobody let go　無責任

退屈な毎日じゃ　逆に眠気を誘う
こうしちゃいられない　忍ばせた
Secrets　ニトロブースト火を付けて

好きに狂わせて　限界までもうちょっと
Drift！！　焦げ付いた trace
大都会の夜を　派手に横切って
Drift！！　鮮やかに slipping like a skate.

Step deep, Drift！！
Step deeply.
すべて転がしてく Drift！！

色とりどりのstage　目一杯に着飾って
キメるだけ
一途に夢見て　他のは専門外
君も let go　不敵に

半信半疑な振る舞いじゃ　逆に粗が目立っていく
あーもう勿体無い　抑えていた
Inside　独創性に輪をかけて

好きに踊らせて　今日くらいはもうちょっと
Drift！！　外しなよブレーキ
大都会の夜を存分に欲張って
Drift！！　誰よりも slipping like a skate.

今日が明日に変わる
59から0へ
強引に定めたこの境界線を塗り替えよう

好きに狂わせて　限界までもうちょっと
Drift！！　焦げ付いた trace
大都会の夜を　派手に横切って
Drift！！

好きに踊らせて　今日くらいはもうちょっと
Drift！！　外しなよブレーキ
大都会の夜を　存分に欲張って
Drift！！　誰よりも slipping like a skate.

Stepping, Deeply to free.
Step deep　もっと自由に
Drift！！
Stepping, Deeply to free.
Step deeply.
すべて転がしてく Drift！！`},{id:104,title:"YSSB",titleKana:"YSSB",lyricist:"Komei Kobayashi",composer:"Kento Takeda・Christofer Erixon",arranger:"Kento Takeda",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[通常盤]"],announce:"t",performances:["WESTV!{21}","WESTV!(各会場オーラス){21}","WESTV!(北海道オーラス){21}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){21}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){21}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){21}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){21}","Mixed Juice(北海道オーラス){21}","TO BE KANSAI COLOR-翔べ関西から-(大阪){22}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){21}","TO BE KANSAI COLOR-翔べ関西から-(東京){19}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){19}","DOME TOUR AWARD(大阪,福岡){21}","DOME TOUR AWARD(東京){22}","DOME TOUR AWARD(東京オーラス){22}","LOVE MUSIC FESTIVAL2022{6}","CDTV ライブ！ ライブ！大感謝祭2024{5}","Johnny's World Happy LIVE with YOU(3/29){3}"],singer:"WEST.",date:"2018-12-05",lyrics:`Let's party！ YOLO！ Ready to go！
さぁ行こうぜ We can go all night
もう早速 All eyes on you
まずは焦らずに Play it cool
Don't you like it like it too？
いっそこのまま Make it true
Everybody take it to the flooooooor！
Let's go！

Hey！ We can shake it up！
君の思うまま Shake it up！
Yeah...(One time)
Oh...(Two time)
Hey！ Bouncin' up & down！
もっと行こうまた Up & Down
Yeah...
You're mine, mine, mine...

夜空に手が届くまでHands high
音の中へとGet on the floor
Turn it up Turn it up Turn it up
目が眩むほど
You're so sexy baby

そばにおいで
I...たまらない Sexy baby
もう逃げないで
I...Let's take it to the dance floor
まだまだ We can get it on
これから Do it all night long
二人で Dancing to the song
今すぐ Take it to the top
このまま Never ever stop
朝まで Gotta make it hot
Let's take it to the dance floor

You're so sexy baby

ここじゃ止まれない
We ready to party tonight
本能に任せて Let's go crazy

今さら戻れない
Everybody feeling alive
感じるまま Good life
Get it up and feel the vibe

Hey！ We can break it down！
ブレーキ外したら Break it down！
Yeah...(One time)
Get it up and feel the vibe
Hey！ Do it side to side
身体預けたら Side to side
Yeah...
You're mine, mine, mine...

限界越えて行くのさ Let's ride
時間も気にせず Play one more song
Burn it up Burn it up Burn it up
理性も壊れそう
You're so sexy baby

そばにおいで
I...たまらない Sexy baby
もう逃げないで
I...Let's take it to the dance floor
まだまだ We can get it on
これから Do it all night long
二人で Dancing to the song
今すぐ Take it to the top
このまま Never ever stop
朝まで Gotta make it hot
Let's take it to the dance floor

朽ち果てるまで Louder
鳴り止まないこの Music
燃え上がる Weekend
今夜は Feel so high
You're so sexy baby

そばにおいで
I...たまらない Sexy baby
もう逃げないで
I...Let's take it to the dance floor
まだまだ We can get it on
これから Do it all night long
二人で Dancing to the song
今すぐ Take it to the top
このまま Never ever stop
朝まで Gotta make it hot
Let's take it to the dance floor`},{id:105,title:"WESTV!ショッピング!Part 3",titleKana:"WESTV!しょっぴんぐ!Part 3",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"岩崎貴文",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2018-12-05",lyrics:`良いもの揃えてお値打ちに
WESTV！ショッピング

続いての商品はこちらぁ！(かわいいねぇ、うん)(あ、かわいい)
国民的弟による2.5枚目アイマスク、「のんぴろー」(のん...ぴろー)(うん)
表側には瞳をプリントしてありますので(うーん)(うーん)
あなた自身にあっつあつの小瀧愛が(うん)(うぅん)
じんわーっと浸透(あーもう買いますぅ)(うんー買う買うー)
瞳を閉じれば、いつでも憧れの彼と夢の中で会えちゃう！アイマスクゥ！(うん、うん)(うん、どしたん？)
翌朝はとても幸せな気分で目覚めることができるでしょう(あ、買いますぅ)(買う、買う！)
さぁ！最高の幸せをあなたにぃ！(買うー！)(買いまぁぁぁぁす！)

さぁ！次にご紹介する商品はこちら！(お、しげか！)(なにかな)
最新型スマートフォン、「しげフォン」(嫌な予感...)(やな...)
「おいしげ！」と声をかければ、あなたをサポートします！(えぇ、できるかぁ？)
では、早速やってみましょう！(俺はできひんと思う)
「おいしげ！今日の天気は？」
ピロンッ
「んーご機嫌ななめな天気でございますねぇ、こちらは」(いや、なんやねんその声)(しっかり答えなさい)(腹立つなぁ)
「んー、雨、ということですねぇ」(最初から雨でいいわ)
「雨が降るからねぇ傘持ってったほうがいいのかもねぇ」(これはアホフォンですね)
めちゃめちゃスベってるー

WESTV！お買い得な
WESTV！夢のショッピング
WESTV！今がチャンス
WESTV！ショッピング！

ルルルルルルル　ルルルルルルル
ルルルルルルルルー

よっしゃ！(おぉ、びっくりした！)
やっと、俺の、番や！(よし、お前の番や！)(そうですよ)
どうも！藤井流星です！(はい、藤井流星くん！パチパチパチ)
いやぁもう今日はもう、めちゃくちゃ頑張りますっ！(頑張ろうな！)(期待してますよ)
この商品を、みなさんに、届けたい！(圧がすごい)
そ、それだけ！(時間ないから、ほら早く！)(大丈夫か？)
ほんまに、頑張ります(流星...)(なにしてんの、ほら！)
ちょっと待って、めっちゃ緊張してきた(緊張してる場合ちゃうて！)(大丈夫や大丈夫、落ち着け)
ちょっと、人って書いて飲も
手のひらに(割と古風やな)
人、よしっ(古典的)(いけいけ！)
うん、飲んだ！いきまっ

WESTV！ショッピング！

WESTV！お買い得な
WESTV！夢のショッピング
WESTV！今がチャンス
WESTV！ショッピング！

WESTV！ショッピング！

WESTV！ショッピングー！

ジャカジャン！`},{id:106,title:"赤いマフラー",titleKana:"あかいまふらー",lyricist:"草川瞬",composer:"Takuya Harada・Joakim Bjornberg",arranger:"Takuya Harada",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",performances:["WESTV!{6}","WESTV!(各会場オーラス){6}","WESTV!(北海道オーラス){6}"],singer:"WEST.",date:"2018-12-05",lyrics:`冷えた手　ポケットに
突っ込んだまま
あの日の君の温もり探した

ため息白くぼやけて　曖昧になる
このまま忘れられたら
どれだけ　いいかな…

冬が来るたび
何もかも嘘だったかのように
舞い落ちる雪のように溶けて
思い出の君まで奪うよ
それなのに
どこにいても何をしていても
まだ君が隣にいるようで
今年もきっと変えられない
赤いマフラー

それなりに強がっても
格好はつかずに
誰もいない
交差点信号を待つ

二人出逢わなければ
こんな苦しい思い
感じなくて済んだのに
それでも　好きだった

冬の終わりに
何もかも嘘だったかのように
舞い落ちる雪のように溶けて
思い出も消えていったら…
本当は
もし時間を戻せるのなら
まだ君の隣でずっと
巻いていたいよ
一緒に選んだ　赤いマフラー

最後の言葉はまだ
言えないけど
同じ空の下で
君の幸せ願っているよ

何もかも嘘だったかのように
ほら雪のように溶けていくけど
思い出は決して消えないよ
いつかまた
二人笑い合えるその日まで
きっと相変わらず大切に
巻いているよ
一緒に選んだ　赤いマフラー`},{id:107,title:"ONI-CHAN",titleKana:"ONI-CHAN",lyricist:"中間淳太・藤井流星",composer:"Fredrik “Figge” Bostrom・Pontus Soderqvist・Takuya Harada",arranger:"Pontus Soderqvist",album:["WESTV！","WESTV！[通常盤]"],announce:"t",performances:["WESTV!{17}","WESTV!(各会場オーラス){17}","WESTV!(北海道オーラス){17}","DOME TOUR AWARD(大阪,福岡){11}","DOME TOUR AWARD(東京){11}","DOME TOUR AWARD(東京オーラス){11}"],singer:"中間淳太＆藤井流星",date:"2018-12-05",lyrics:`この勝負にかけた　みんなのお兄ちゃん
You たちのためなら　俺ら2人は燃える！

You たちがもしも　辛すぎて落ち込んでる日に
命がけで励ますなら　お前はどうする？

こっちにおいでよ
よしよしってしてあげるから
「これでどうだ？」
「どきな！　次は俺の番だ！！」
大好きなプリン
あーんで口に運んであげる
君は
どっちが
理想なの？
りゅせじゅんお兄ちゃん

熱くなってきた　みんなのお兄ちゃん
You たちのためなら　俺ら2人は頑張る！

You たちがもしも　冬の寒さで凍える夜に
命がけで　あっためるなら　お前はどうする？

俺のジャケットを
ふんわり肩にかけてあげる
「これでどうだ？」
「どきな！　次は俺の番だ！！」
あつめのココアを
フーフーして飲ませてあげる
君は
どっちが
理想なの？
りゅせじゅんお兄ちゃん

「じゅん兄お前やるな…」
「りゅう兄もやるな…」
『でもお兄ちゃんは1人でいい！』
永遠(とわ)のサバイバルゲーム

どっちを選ぶの？
とまらない灼熱ジェットコースター
I want you
I need you
I love you
ブレーキがきかない
You たちのためなら
俺は何だって出来るんだ
ココロ
カラダ
捧げるよ
りゅせじゅんお兄ちゃん`},{id:108,title:"月詠人",titleKana:"つくよみびと",lyricist:"Satomi",composer:"萩原和樹",arranger:"増田武史",album:["WESTV！","WESTV！[通常盤]"],announce:"t",performances:["WESTV!{9}","WESTV!(各会場オーラス){9}","WESTV!(北海道オーラス){9}"],singer:"桐山照史＆小瀧望",date:"2018-12-05",lyrics:`巡る巡る季節
なぜになぜに僕ら
まるで導かれるように
あの日あの日出逢い
揺れる揺れる心
貴女へ恋に落ちたよ

身の丈の違う
想い告げられないまま
音もなく胸で
燃え滾る静かに...

まるで月詠人(つくよみびと)の如く
ひとり空を見上げる
想い届くわけでは　ないのにまた
今宵、貴女も碧い月を
何処かで見ているなら
叶わなくともせめて
その笑顔を
守りたい

願う願うほどに
なぜになぜにこんな
愛より苦しみばかり
清(さや)か清か水へ
朽ちる朽ちる夜は
貴女を想い眠るよ

見つめあうたびに
戸惑いは風の中へ
積もっては消えた
重なる刹那さに...

まるで月詠人の如く
ひとり空を見上げる
未来(あす)が読めるわけでは　ないのになぜ
運命にもしも抗って
ふたりが愛したなら
それこそが決められた
運命だと
信じたい

貴女を知らずにいたのなら
苦しみとあたたかな
気持ち知らないままで
生きてただろう　永遠に...

まるで月詠人の如く
ひとり空を見上げる
想い届くわけでは　ないのにまた
今宵、貴女も碧い月を
何処かで見ているなら
叶わなくともせめて
その笑顔を
守りたい`},{id:109,title:"間違っちゃいない",titleKana:"まちがっちゃいない",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["WESTV！","WESTV！[通常盤]"],announce:"t",performances:["WESTV!{16}","WESTV!(各会場オーラス){16}","WESTV!(北海道オーラス){16}"],singer:"重岡大毅＆濵田崇裕＆神山智洋",date:"2018-12-05",lyrics:`涙　一粒
星降る夜に
光れない　馴染めない
なぜ同じ様に生きれないの

予定詰まった
カバン捨てて帰ろうかな
眩しい近所の夜空

間違い探しの世界で
赤ペン持つのかい
インクが足らないね

間違っちゃいないよな
君と出会ったことも
夢を信じることも
答えに牙むいてさ
何度も何度でも
さよなら上の空
僕は僕で僕なんだ
間違っちゃいない
間違っちゃいないんだ

ないものねだり
タラレバを振り払う
朝の占い　横目で順位気にしてさ

理想と現実で結ぶ靴ひも
歩けるかな
教えて近所の青空

ぐるぐる渦巻く世界で
君が花びら
花丸つくれるね

間違っちゃいないよな
消えたくなった夜も
逃げたくなった朝も
まぁまぁカッコいいんじゃない
泣きたくて泣けなくて
“お疲れ”と夕日が　ほら
君は君で君なんだ
間違ってもいい
間違ってもいいんだ

頑張れなくていい
嫌になったっていい
情け無くていい
ダサくていい
怖くなってもいい
どんな自分だっていい

どうしようも無いくらい
どうしようの繰り返し
誰が明日を知ってるんだ
誰にも解らないから

君と出会ったことも
夢を信じることも
答えに牙むいてさ
間違っちゃいないよな
目が合う近所の空
僕は僕で僕だ
間違っちゃいない
間違っちゃいないんだ
間違っちゃいない
間違っちゃいないんだ`},{id:110,title:"ホメチギリスト",titleKana:"ほめちぎりすと",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[初回A]","ホメチギリスト/傷だらけの愛[初回B]","ホメチギリスト/傷だらけの愛[通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["WESTV!{15}","WESTV!(各会場オーラス){15}","WESTV!(北海道オーラス){15}","W trouble12/12昼,12/13夜{23}","rainboW(北海道){4}","rainboW(宮城,愛知,新潟,埼玉,熊本){4}","rainboW(円盤){4}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){27}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){27}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){27}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){27}","Mixed Juice(北海道オーラス){27}","TO BE KANSAI COLOR-翔べ関西から-(大阪){14}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){35}","TO BE KANSAI COLOR-翔べ関西から-(東京){33}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){33}","DOME TOUR AWARD(大阪,福岡){29}","DOME TOUR AWARD(東京){30}","DOME TOUR AWARD(東京オーラス){30}"],singer:"WEST.",date:"2019-01-30",lyrics:`カバンを背負って猛ダッシュ　満員電車乗り込んだ　いつものルーティン
語った将来これだっけ？　描いた人生これだっけ？　愚痴ってばかりかい？

なんだかんだちょっと　落ち込む日もあるけれど
いじけちゃ(ちゃちゃちゃ～)　ダメダメ(No No No～)
上向いて歩いてこうぜ
ネクタイ(ネクタイ)　取って(取って)　ハイポーズ(はい！)

ホメてホメて　ほらアガってこうぜ！ (Fu Fu)
明日明日から　笑ってこうぜ！ (Fu Fu)
働いてる　その背中を　讃えましょ！
食べて飲んで　お祭り騒ぎや！ (Fu Fu)
おもろおもろくて　男前や～ (Fu Fu)
たまには自分をホメちぎろうぜ
めちゃんこイケてるやん！ (やん！)

化粧をとってホッとして　1日雑務耐えました　独りで残業
ヤバイよ深夜冷蔵庫　ストックアイス食べました　自分へご褒美

甘さにちょっと　しょっぱさ混じって　顔上げた
こぼれた(たったった～)　涙は(わっわっわ～)
輝くためのスキンケア
パック(パック)　取って(取って)　ハイポーズ(はい！)

さすがさすがやで　バシッと頑張った！ (Fu Fu)
昨日昨日まで　お疲れさま！ (Fu Fu)
忘れていた　その魅力に　気づきましょ！
いつも輝いて　ドキッとするわ (Fu Fu)
笑顔可愛くて　惚れてまうわ～ (Fu Fu)
たまには自分をホメちぎろうぜ
めちゃんこイケてるやん！ (やん！)

都会の風に吹かれても　君は君さ　ありのままに　胸を張っていこう
となりの(はい！)　あの子と(はい！)　肩組んで　ハイポーズ(はい！)

ホメてホメて　ほらアガってこうぜ！ (Fu Fu)
明日明日から　笑ってこうぜ！ (Fu Fu)
働いてる　その背中を　讃えましょ！
食べて飲んで　お祭り騒ぎや！ (Fu Fu)
おもろおもろくて　男前や～ (Fu Fu)
たまには自分をホメちぎろうぜ
めちゃんこイケてるやん！ (やん！)`},{id:111,title:"傷だらけの愛",titleKana:"きずだらけのあい",lyricist:"Komei Kobayashi",composer:"Takuya Harada・川口進",arranger:"CHOKKAKU・GAKU",album:["ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[初回A]","ホメチギリスト/傷だらけの愛[初回B]","ホメチギリスト/傷だらけの愛[通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["WESTV!{22}","WESTV!(各会場オーラス){22}","WESTV!(北海道オーラス){22}"],singer:"WEST.",date:"2019-01-30",tiup:"テレビ東京系アニメ『キャプテン翼』中学生編オープニングテーマ",lyrics:`燃えるように　一人でも生きてゆけると
うそぶいて走り続けた
優しさの　意味さえ知らずに

差し伸べた　君の手を振り払うほど
強がり続けた　あの頃
自惚れの脆さを　君は知っていたのに

心まで　打ちのめされたこの夜に
君の声　探す　この弱さが憎いよ
今すぐ取り戻しに行かなきゃ

バカだろ？
愛　傷だらけの愛を信じて
流れ落ちた涙さえも
Ah　Ah　強さへと変えて
愛　傷だらけの愛だとしても
僕らの世界を灯してる
この　愛　もう一秒たりとも
離さない

Ah　僕ら　一つの答えを求めて
正解をぶつけ合ってた
そんなモノないこと　気付いていたのに

二度とこの　声さえも届かないなら
今はただ　君の　幸せ願うけど
本当は君と明日を見たいよ

バカだろ？
愛　傷だらけの愛を手にして
ちっぽけな自分に気付いた
Ah　Ah　遅くはないだろ？
愛　傷だらけの愛抱きしめて
失くした未来を追いかける
この　愛　途切れた日々さえ
埋めていく

自分だけの居場所を　ずっと探していた
だけど　今は　もう迷わないさ
僕がありのまま　いられる場所なら
いつも君の隣にある

バカだろ？
愛　傷だらけの愛を信じて
流れ落ちた涙さえも
Ah　Ah　強さへと変えて
愛　傷だらけの愛だとしても
僕らの世界を灯してる
この　愛　もう一秒たりとも
離さない`},{id:112,title:"大阪とんとんダンス",titleKana:"おおさかとんとんだんす",lyricist:"庄田ゲゲゲ・corin.",composer:"庄田ゲゲゲ・corin.",arranger:"庄田ゲゲゲ・corin.",album:["ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2019-01-30",lyrics:`とんとん！　とんとん！　とんとん！　とんとん！

おおきにほんならさようなら！
ほな兄ちゃんよろしゅうたのんます
いやいやこちらこそほんますんません！
ほなアレとコレでとんとんしとこ
え？とんとんてなんですのん？
え？とんとんはとんとんですやん！
いや、とんとんはとんとんって言われたって
訳ワカメやでおとんどうなっとん！？

ほぼほぼとんとんでぼちぼちやん
ほんでもって俺たちとんとんやん
富田林でもっととんとんやん
抱っこしておんぶしてまたとんとん

いっとんとん！

Yeah！　とんとん…
とうとうとんとんや
おとんとはとんとん
おかんはかんかんや
おまえホンマにとんとんなんか？

へい！　人生はとんとんやん
へい！　人生は単純やん
しんどい事の先にあるの　ええ事やろ？
へい！　大阪とんとんダンス
へい！　大阪とんとんダンス
とんとんでえぇやん　前向いて歌おうや！

ボケたらツッこんで　(とんとん！)
プラスとマイナスで　(とんとん！)
遊んだら勉強して　(とんとん！)
おっさんとおばはんで　(とんとん！)
ぎょうさん食べたらトイレ行って　(とんとん！)
涙は拭いたら　(とんとん！)
風呂入れよ！　(とんとん？)

とんとん！

おやおや兄ちゃんどうしたん？
さっきまで泣いてたのにどこ行くん？
いや、ごっついえぇ事ありまして
泣きっ面に蜂蜜でとんとん
え？とんとんてなんですのん？
え？とんとんはとんとんですやん！
いや、さっきも言うたけどとんとんは
とんとんやなんべん言うたらとんとんなんねん！

そろそろとんとんでえぇ頃やん
大阪名物パチパチパンチ
喜連瓜破ったらとんとんやん
かあさんお肩をたんとんやん

いっとんとん！

ワレワレハ、トントン星人でスねん
地球人をミナ、トントンにするタメにトントン…

へい！　人生はとんとんやん
へい！　人生は単純やん
しんどい事の先にあるの　ええ事やろ？
へい！　大阪とんとんダンス
へい！　大阪とんとんダンス
とんとんでえぇやん　前向いて歌おうや！

へそで茶を沸かして　(とんとん！)
雨降って地固まって　(とんとん！)
キャッチしてリリースして　(とんとん！)
梅田駅と大阪駅で　(とんとん！)
石橋とんとん叩いて渡って　(とんとん！)
嘘からまこと出て　(とんとん！)
歯を磨けよ！　(とんとん？)

Yeah！　とんとん…
とんとん…
いっとんとん！
とんとん…
とんとん…
マタマタ、トントン星人でスねん
すべてはトントンのタメに　トン！

へい！　人生はとんとんやん
へい！　人生は単純やん
しんどい事の先にあるの　ええ事やろ？
へい！　大阪とんとんダンス
へい！　大阪とんとんダンス
とんとんでえぇやん　前向いて歌おうや！

喧嘩して仲直りして　(とんとん！)
理想と現実で　(とんとん！)
攻撃は最大の防御で　(とんとん！)
失敗は笑い飛ばして　(とんとん！)
光と闇で　(とんとん…)
世界中がジャス民を敵に回しても
俺らは君らの味方やから

とん！`},{id:113,title:"バレバレンタイン",titleKana:"ばればれんたいん",lyricist:"Yu-ki Kokubo",composer:"Kohei Yokono・Yu-ki Kokubo",arranger:"Kohei Yokono",album:["ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2019-01-30",lyrics:`Tu tu tu Tu tu ru tu (Yes)
Tu tu tu ru tu (Show me your love)
Tu tu tu Tu tu ru tu (Yes)
Tu tu tu ru tu

興味ないふりして指折り数えた
クールな台詞もリハーサルしてます
机、下駄箱　空っぽにしたら
ドキドキ　本音　隠して
飛び込もうぜ Special day
(時間で～す)

I love you, Love you, Love you, Give me your love↑
(Hey！↑)
I love you, Love you, Love you, Give me your love↑↑
(Hey！↑↑)
I love you, Love you, Love you, Give me your love↑↑↑
(Hey！↑↑↑)
I love you, Love you, Wow

バレバレンタインラブ (Love！)
キミの本チョコ全力で待ってます
Sweetも (Hey！) Bitterも
何だって　ウェルカムや
バレバレンタインラブ (Love！)
愛を確かめ合いたい You & I
絶対に Get (Get) your (your) big (big) heart (heart)
勝負の日だ　2.14

Tu tu tu Tu tu ru tu (Yes)
Tu tu tu ru tu (Show me your love)
Tu tu tu Tu tu ru tu (Yes)
Tu tu tu ru tu

バイトのシフトが同じだけで期待
なるべくキミの近くをウロウロ
急な「甘党宣言」をしたら
ギラギラ　視線送って
時は満ちたで Come on
(時間です！)

I love you, Love you, Love you, Give me your love↑
(Hey！↑)
I love you, Love you, Love you, Give me your love↑↑
(Hey！↑↑)
I love you, Love you, Love you, Give me your love↑↑↑
(Hey！↑↑↑)
I love you, Love you, Wow

バレバレンタインラブ (Love！)
他の誰かじゃ意味がないよ
一直線 (You！) キミに
届けたい My mind
バレバレンタインラブ (Love！)
一年一度のチャンス逃せない
絶対に Get (Get) your (your) big (big) heart (heart)
勝負の日だ　2.14

あ～～世界中の女子に告げる
男心は無茶苦茶　繊細
ハンパな素振りは　マジあかん
甘くとろける恋がした～い

バレバレンタインラブ (Love！)
キミの本チョコ全力で待ってます
Sweetも (Hey！) Bitterも
何だって　ウェルカムや
バレバレンタインラブ (Love！)
愛を確かめ合いたい You & I
絶対に Get (Get) your (your) big (big) heart (heart)
勝負の日だ　2.14

Tu tu tu Tu tu ru tu (Yes)
Tu tu tu ru tu (Show me your love)
Tu tu tu Tu tu ru tu (Yes)
Tu tu tu ru tu`},{id:114,title:"アメノチハレ",titleKana:"あめのちはれ",lyricist:"MORISHIN",composer:"川口進・MORISHIN",arranger:"CHOKKAKU",album:["アメノチハレ","アメノチハレ[初回A]","アメノチハレ[初回B]","アメノチハレ[通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["W trouble12/11{18}","W trouble12/12昼,12/13夜{18}","W trouble12/12夜,12/13昼{18}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){16}"],singer:"WEST.",date:"2019-04-24",tiup:"日本テレビ系ドラマ『白衣の戦士！』主題歌",lyrics:`雨空見上げて
涙を隠した
滲んだ願いを空に
“頑張ろう”
つぶやいてキミは
また歩き出した
真っ白な明日へ

ダメな毎日
自分ごまかし
目を背けてきたけど
“負けないで”
遠く聞こえたよ
だから逃げないよ
朝日が道を照らすよ

微笑みながら　心が泣いていた
日々はもうサヨナラ Good-bye

大丈夫
何回だって何万回だって
やり直せばいい
喜びを抱いて泣いて
笑って生まれてきたキミだから
信じていて(ずっとずっと強く)
そのままで(もっともっと輝くから)
キミ色の明日がきっと来る

片隅に置いた
弾けそうな不安
無理に閉じ込めてきたけど
真っ直ぐに
見つめてあげよう
弱いその気持ち
向き合って気づく強さ

大人になって　嘘ばっかついていた
自分にもうサヨナラ Good-bye

大丈夫
何回だって何万回だって
声に出せばいい
悲しみも抱いて泣いて
笑って分け合ってきた僕らなら
忘れないで(ずっとずっとそばに)
そのままで(もっともっと輝くから)
夜が明ければきっと大丈夫さ

抱きしめそこねた
過去があって現在(いま)があるのさ
「雨のち晴れ」さ　ほら
傘を置いて
幸せに会いに行こう

大丈夫
何回だって何万回だって
声に出せばいい
悲しみも抱いて泣いて
笑って分け合ってきた僕らなら

大丈夫
何回だって何万回だって
やり直せばいい
喜びを抱いて泣いて
笑って生まれてきたキミだから
信じていて(ずっとずっと強く)
そのままで(もっともっと輝くから)
キミ色の明日が待っている`},{id:115,title:"アンジョーヤリーナ",titleKana:"あんじょーやりーな",lyricist:"園田健太郎",composer:"園田健太郎",arranger:"園田健太郎",album:["アメノチハレ","アメノチハレ[初回A]","AWARD","AWARD[通常盤]"],announce:"t",performances:["W trouble12/11{11}","W trouble12/12昼,12/13夜{11}","TO BE KANSAI COLOR-翔べ関西から-(大阪){35}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){33}","TO BE KANSAI COLOR-翔べ関西から-(東京){34}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){34}","AWARD(大阪){26}","AWARD(新潟){27}","AWARD(宮城){27}","AWARD(愛知){27}","AWARD(横浜,静岡,福岡,広島,北海道){27}","AWARD(北海道オーラス){27}","DOME TOUR AWARD(大阪,福岡){38}","DOME TOUR AWARD(東京){39}","DOME TOUR AWARD(東京オーラス){39}","メトロック2022(大阪){8}","メトロック2024(東京){8}","CDTV ライブ！ ライブ！大感謝祭2024{8}","【WESTube生配信SP】結成10周年やねぇぇぇぇぇぇぇん{1}","8周年生配信トーク＆ライブ「虹会」{7}","WEST. 10th Anniversary Live “W”{16}","WEST. 10th Anniversary Live “W”-Film edition-{17}"],singer:"WEST.",date:"2019-04-24",lyrics:`号泣するくらいの感動を
一生一度の冒険を
味わいたいんだ　それは贅沢じゃない
愛せ　君の人生　アンジョーヤリーナ

普通自体が難しい時代に
もがき続ける僕らいったいなんなんだ
余裕で笑える人は別世界で
パリピだリア充だやかましいわ　黙ってくれないか

加工されてる真実　過去になってく現実
だからこそ僕たちは歌いたいんだ
嘘じゃない　本当の気持ち
聞いてくれますか？

日常はそんなにド派手じゃない
ルーティンワークは間違いなわけじゃない
君の毎日に　君の日常に
影がさしたら呼んでおくれよ

号泣するくらいの感動を
一生一度の冒険を
味わいたいんだ　それは贅沢じゃない
愛せ　君の人生　アンジョーヤリーナ

後ろ向きが得意なわけじゃない
ただ前に何も見えないだけなんだ
だけどそんな僕にも意地がある
誰にも負けない何かをずっと探してるんだ

あれでもない　これでもない
見つからないのはどうやら自分のせいだった

振り向かず　進め

日常はそんなにド派手じゃない
ルーティンワークは間違いなわけじゃない
君の毎日に　君の日常に
影がさしたら呼んでおくれよ

号泣するくらいの感動を
一生一度の冒険を
味わいたいんだ　それは贅沢じゃない
愛せ　君の人生　アンジョーヤリーナ
アンジョーヤリーナ`},{id:116,title:"儚",titleKana:"はかな",lyricist:"Takuya Harada・井上紗矢香",composer:"YOUNG HOLLYWOOD・Takuya Harada・Joakim Bjornberg",arranger:"YOUNG HOLLYWOOD・ha-j",album:["アメノチハレ","アメノチハレ[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2019-04-24",lyrics:`風に舞ってどこまでも
昇ってゆく想いを
眺めていた
悲しいほどに艶やかな
春色に打たれては
ざわめくよう

消えてゆく温度に導かれて
うたかたの時に君を探す

二人は儚い花びらのよう
散りぬる春に美しく
凛と咲き踊る
手のひら佇む約束ひとつ
忘れかた　知らないままに
季節(とき)は過ぎゆく

瞬く隙に

ふわり　くすぐる香りが
芽吹く　その訪れを
囁いてる
言葉になれないままに
隠れていた想いが
疼いている

明ける夜の静寂(しじま)に待ち焦がれた
かりそめの時に君を探す

二人は眩ゆい木漏れ日のように
たゆたう春に美しく
凛と立ち昇る
手のひら佇む温もりひとつ
忘れかた　知らないままに
季節(とき)は過ぎゆく

幾千　夜を越えても
僕らまた惹かれ合うだろう
紡がれる二人の想いは
ただ永遠(とわ)に続いていく
きっと

二人は儚い花びらのよう
散りぬる春は美しく

二人は儚い花びらのよう
たゆたう春に美しく
凛と咲き踊る
手のひら佇む約束ひとつ
忘れかた　知らないままに
季節(とき)は過ぎゆく

瞬く隙に`},{id:117,title:"パチモン",titleKana:"ぱちもん",lyricist:"庄田ゲゲゲ・corin.",composer:"庄田ゲゲゲ・corin.",arranger:"庄田ゲゲゲ・corin.",album:["アメノチハレ","アメノチハレ[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2019-04-24",lyrics:`パチもん

ナンボや？　適当に巻いたパスタ
難波で見かけたハリウッドスター
ちょ、待って何このサインなんか、、あれ？

パチもん

めっちゃ眩しいブランドファッション
ナンボでこうたん？　ごっつええやんか
ちょ、待ってそれ「N」いっこ多いんとちゃう？

パチもん

ホンもんパチもんどっち？
じぶんまだまだぼちぼちなんか？
やけどホンもんパチもんどっち？
もうなんでもえぇからやれや！

いつかはなるでホンマもん
せやから磨け審美眼
為せば成るでほら生み出そう
行くで今オンリーワン！

パパパ　パチもん！(Oh, ベイベー！)
パパパ　パチもん！(ホンマもんやろ？)
パパパ　パチもん！(もうわかれへん！)
パパパパパパパパパパパパパパパ　パチもん！

パチもん

難波じゃおばはんもストリートファッション(あれ、オカン？)
アメ村に溶け込んだパッション(あれ、、オカン？)
ちょ、待ってSupreman(スプレーマン)って何モンやねん？(お前何モンや！)

パチもん

「バレンシアでガンバってね！」って
キャワイイあの娘がくれたアディオス
ちょ、待ってこれ線一本多いんとちゃう？

パチもん

ホンもんパチもんどっち？
じぶんそろそろぼちぼちちゃうけ？
やけどホンもんパチもんどっち？
もうなんでもえぇからやれや！

いつかはなるでホンマもん
せやから磨け審美眼
為せば成ったで脱パチもん
君は今オンリーワン！

パパパ　パチもん！(Oh, ベイベー！)
パパパ　パチもん！(ホンマもんやろ？)
パパパ　パチもん！(もうわかれへん！)
パパパパパパパパパパパパパパパ　パチもん！

パチもん`},{id:118,title:"Big Shot!!",titleKana:"Big Shot!!",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["Big Shot!!","Big Shot!![初回A]","Big Shot!![初回B]","Big Shot!![通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["W trouble12/11{24}","W trouble12/12昼,12/13夜{25}","W trouble12/12夜,12/13昼{25}","rainboW(北海道){2}","rainboW(宮城,愛知,新潟,埼玉,熊本){2}","rainboW(円盤){2}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){7}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){7}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){7}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){7}","Mixed Juice(北海道オーラス){7}","TO BE KANSAI COLOR-翔べ関西から-(大阪){2}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){2}","TO BE KANSAI COLOR-翔べ関西から-(東京){2}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){2}","POWER(宮城){14}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){14}","POWER(愛知オーラス){14}","AWARD(大阪){15}","AWARD(新潟){17}","AWARD(宮城){15}","AWARD(愛知){15}","DOME TOUR AWARD(大阪,福岡){31}","DOME TOUR AWARD(東京){32}","DOME TOUR AWARD(東京オーラス){32}","メトロック2022(大阪){4}","LOVE MUSIC FESTIVAL2022{1}","Johnny's World Happy LIVE with YOU(3/29){2}","Johnny's World Happy LIVE with YOU(6/18){2}","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{10}","WEST. 10th Anniversary Live “W”{14}","WEST. 10th Anniversary Live “W”-Film edition-{15}"],singer:"WEST.",date:"2019-10-09",tiup:"フジテレビ系『ワールドカップバレー2019』大会テーマソング",lyrics:`Go Go Jump！！ 掴めよVictory (Hey)
このMusic　君へ届けYell (Hey)
Are you ready！？
Got to get it！！
We're in the Zone
巻き起こせ Big Storm

勝ち取れよ Big Shot！！ Big Shot！！
情熱は君の鼓動がくれた答えだ
信じた自分　見えたなら
それだけできっと　未来はGREATだろ
Winning Rush　必ず To the top
LALALA　LALALA…

Stand up, Get ready！！ Come on & Everybody！！
波乱の幕開け　止まぬファンファーレ
さあ一緒にJumping up　声上げろShout it out
てっぺん目指す衝動からのBattleモード

言葉よりもプライドよりも大事なものがある
信じ合えば宿る絆
Go ahead！！ 超えてゆけボーダーライン
Go ahead！！ Try again！！
“The world is mine！！”

勝ち取れよ Big Shot！！ Big Shot！！
思い出せ　それが君の名前だ(Hey)
やりたいだけ (Hey)　やればいいだけ！！ (Hey)
時代に選ばれし者になれ
Big Shot！！ Big Shot！！
情熱は君の鼓動がくれた答えだ
信じた自分　見えたなら
それだけできっと　未来はGREATだろ
Winning Rush　必ず To the top
LALALA　LALALA…

栄光の陰にある苦悩 As you know
勝利者のみに与えられたカプリシャスな逆境
You don't stop (Hey)
止めるな Your soul (Hey)
The winner takes it all (Hoo)
to be the one
to be the sun
We're No.1！！

ひとりだけじゃ　ガッツだけじゃ　越せない壁もある
認め合えば滾る身体
Go ahead！！　超えてゆけボーダーライン
Go ahead！！ Try again！！
“The world is mine！！”

勝ち取れよ Big Shot！！Big Shot！！
思い出せ　それが夢の名前だ (Hey)
やりたいだけ (Hey)　やればいいだけ！！ (Hey)
世界に選ばれし者になれ
Big Shot！！ Big Shot！！
情熱は君の鼓動がくれた答えだ
信じた自分　見えたなら
それだけできっと　未来はGREATだろ

(so get your Victory on)
(the Music is for the people)
(Jump in Jump into the Zone)
(巻き起こせ Big Storm)

Go Go Jump！！ 掴めよVictory (Hey)
このMusic　君へ届けYell (Hey)
Are you ready！？
Got to get it！！
We're in the Zone
巻き起こせ Big Storm

新たな　記憶も　記録も
孤独に流れる　汗も　涙も
譲れない　譲らない
Let's make our history！！

勝ち取れよ Big Shot！！ Big Shot！！
思い出せ　それが君の名前だ (Hey)
やりたいだけ (Hey)　やればいいだけ！！ (Hey)
時代に選ばれし者になれ
Big Shot！！ Big Shot！！
情熱は君の鼓動がくれた答えだ
信じた自分　見えたなら
それだけできっと　未来はGREATだろ
Winning Rush　必ず To the top
LALALA　LALALA…
LALALA　LALALA…`},{id:119,title:"Go Low Low",titleKana:"Go Low Low",lyricist:"Kanata Okajima",composer:"Takuya Harada・Erik Lidbom",arranger:"CHOKKAKU",album:["Big Shot!!","Big Shot!![初回A]"],announce:"t",performances:["W trouble12/11{16}","W trouble12/12昼,12/13夜{16}","W trouble12/12夜,12/13昼{16}"],singer:"WEST.",date:"2019-10-09",lyrics:`(No one's gonna know it…)

Gonna tell my habit
素通りのBackyard
Innocence　まかせ
いつも Starving for love
戻れないよ
隠れようとも No one's gonna make it
We're groovin'
キミはもう in the zone

When you are with me
飛び交う Flashing
Idiot 同士　睨みつける Instinct
敵 or 味方
You know the truth
消せないなら　確かめればいい

Don't you see
真っ赤な嘘で固められた
Don't you see
奪い合いの世界へ
Don't you see
What to believe　馬鹿の一つ覚え
Crapな正義感？ What you want
「で、どうしたいの？」
Go low low, I'm falling
Go low low, I'm falling
脳内融解のFantasy
Go low low, I'm falling
ヤバい程 Feel alive

壁際 Tactics
Hours & hours
どちらのほうが　引き金 Pull down？
放さないよ
忘れようとも　覚えてるよ
We're groovin'
体温は Always honest

When you are with me
一気に Offensive
奔放なほど　惹かれてるかも
Nothing can't stop me
有能 Excuse
肯定しなくてイイ　否定出来ない

Don't you see
真っ赤な嘘を重ね合って
Don't you see
最期は笑い合うんだろ？
Don't you see
What to believe　馬鹿の一つ覚え
Crapな正義感？ What you want
「で、どうしたいの？」
Go low low, I'm falling
Go low low, I'm falling
境界崩壊でOverflow
Go low low, I'm falling
ヤバい程 Feel alive

Whispering　大胆に
I could see, you're coming back
逃れられないから
常識外れのGame　味わったら
You are the queen of the night

(No one's gonna know it…)

Don't you see
真っ赤な嘘で固められた
Don't you see
奪い合いの世界へ
Don't you see
What to believe　馬鹿の一つ覚え
Crapな正義感？ What you want
「で、どうしたいの？」
Go low low, I'm falling
Go low low, I'm falling
脳内融解のFantasy
Go low low, I'm falling
ヤバい程 Feel alive`},{id:120,title:"Make a Wish!! ～世界中が愛してる～",titleKana:"Make a Wish!! ～せかいじゅうがあいしてる～",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",stringsarrange:"久保田真悟(Jazzin'park)・和音正人",album:["Big Shot!!","Big Shot!![初回B]"],announce:"t",performances:["DOME TOUR AWARD(大阪,福岡){39}","DOME TOUR AWARD(東京){40}","DOME TOUR AWARD(東京オーラス){40}"],singer:"WEST.",date:"2019-10-09",lyrics:`せーの！で　オメデトウ♪
Happy Birthday, Happy Birthday
最高の君に告ぐ
“世界中が愛してる！”

Fu Fu Fu Fu Make a Wish
Fu Fu Fu

まずは“おめでとう”
1番に伝えたかったんだ
待ちかねたキャンドルも
明かり消してスタンバイ

部屋中が踊り出すほどの
デコレーション
プレゼント、、、それだけじゃ
伝えきれないメッセージ

今日の主役は○○(キミ)です
飾らない笑顔見せて
3.2.1で　ハイ、ポーズ！

せーの！で　オメデトウ♪
Happy Birthday, Happy Birtday
最高の君に告ぐ
“It's your Happy Birthday,
Happy Happy Birthday”
スペシャルなパレード
Happy Birthday, Happy Birthday
パーティーはそう　終わらない！
まだまだ Oh, what a night！

Fu Fu Fu Fu Make a Wish
Fu Fu Fu

君の笑顔のせいで
鳴り止まない　カラフルなMusic
去年よりみんなの笑顔だって
アップグレード

沢山の素敵な出来事がほら
一緒なら何度だって
起きちゃうはずさ

今日の主役は○○(キミ)です
未来へ送る One day dream
3.2.1で　ハイ、チーズ！

せーの！で　オメデトウ♪
Happy Birthday, Happy Birthday
最高の君に告ぐ
“It's your Happy Birthday,
Happy Happy Birthday”
スペシャルなパレード
Happy Birthday, Happy Birthday
パーティーはそう　終わらない！
まだまだ Oh, what a night！

いくつになっても変わらない My Dear
夢から覚めても続くから

せーの！で　オメデトウ♪
Happy Birthday, Happy Birthday
最高の君に告ぐ
“It's your Happy Birthday,
Happy Happy Birthday”
スペシャルなパレード
Happy Birthday, Happy Birthday
パーティーはそう　終わらない！
まだまだ Oh, what a night！
Happy Birthday, Happy Birthday

まだまだ　終われない！`},{id:121,title:"虹の旅",titleKana:"にじのたび",lyricist:"CHIYOKO",composer:"CHIYOKO・ U-KIRIN",arranger:"U-KIRIN",album:["Big Shot!!","Big Shot!![通常盤]"],announce:"t",performances:["WEST. 10th Anniversary Live “W”{2}","WEST. 10th Anniversary Live “W”-Film edition-{2}"],singer:"WEST.",date:"2019-10-09",lyrics:`暮れゆく街でひとりきり
あの日の夢とともに
過ぎ行く日々の足跡たどり
僕らの旅は続いていく

ためらうたび
進めるように
この歌にひとつ　キズナを残す

今日も　迷いながら歌い
また　生きる意味を探す
どんな明日も変えていけるから
いま誰のために生きて
この日々を何に捧ぐ
答えはここにある
僕らは行く
旅をしていく

「立ち止まり焦ってた？」
「覚悟なんてなかった？」
怖がらずに行こう
ゆっくりでいい
過ぎ行く日々に祈りをたくし
僕らはまた歩き出す

ためらうたび
進めるように
夢みてた未来への道しるべ

今日も　迷いながら歌い
また　生きる意味を探す
どんな明日も変えていけるから
いま誰のために生きて
この日々を何に捧ぐ
答えはここにある
僕らは行く

今日も　迷いながら歌い
また　生きる意味を探す
いつも何処かで願っているから

いま誰のために生きて
この日々を何に捧ぐ
答えはここにある
僕らは行く

虹の旅を`},{id:122,title:"WESTォォォォ!!! ～愛のセッション～",titleKana:"WESTぉぉぉぉ!!! ～あいのセッション～",lyricist:"庄田ゲゲゲ",composer:"庄田ゲゲゲ",arranger:"庄田ゲゲゲ",album:["Big Shot!!","Big Shot!![通常盤]"],announce:"t",performances:["W trouble12/11{5}","W trouble12/12昼,12/13夜{5}","W trouble12/12夜,12/13昼{5}"],singer:"WEST.",date:"2019-10-09",lyrics:`じゅんじゅじゅ～ん　はままま～ん
しげげげ～ん　あっきき～ん　かみきゃみ～ん
りゅうせせせ～い　こたきき～ん
WESTォォォォ！！！

ジャニーズWEST…
はい　ジャニーズWEST…
はい　ジャニーズWEST…
WEST…

トリリンガルの坊ちゃんはニーハオ
田舎育ち　なで肩Yeah　マッスル
HAHAHAHAHAHAHA　歯が多いセンター
趣味はダイエット特技リバウンド
Yeah！

ジャニーズWEST…
はい　ジャニーズWEST…
はい　ジャニーズWEST…
WEST…

メンバー1真面目で
ピアスバチバチで奇抜でおチビなオカン
ギャップで萌えるガチの天然
最年少のあいつは2.5
それぞれの道つながる結晶
come on！

じゅんじゅじゅ～ん　はままま～ん
しげげげ～ん　あっきき～ん　かみきゃみ～ん
りゅうせせせ～い　こたきき～ん
WESTォォォォ！！！

Yeah！魅せてYeah！数えきれない
夢・笑い・愛のセッション！
Yeah！これぞYeah！浪速魂
希望・勇気・愛のセッション！Yeah

はい　ジャニーズWEST…

じゅんじゅじゅ～ん　はままま～ん
しげげげ～ん　あっきき～ん　かみきゃみ～ん
りゅうせせせ～い　こたきき～ん
WESTォォォォ！！！

Yeah！魅せてYeah！数えきれない
夢・笑い・愛のセッション！
Yeah！これぞYeah！浪速魂
希望・勇気・愛のセッション！Yeah

最高やで！ジャニーズWEST！
完璧やで！ジャニーズWEST！
一番やで！ジャニーズWEST！

キミを笑顔にするためにやってきた
願い叶える　7人の戦士やで
キミに笑って欲しいから歌うよ
いつも心に　7人の天使やで

じゅんじゅじゅ～ん　SAY
(じゅんじゅじゅ～ん)
はままま～ん　SAY
(はままま～ん)
しげげげ～ん　SAY
(しげげげ～ん)
あっきき～ん　SAY
(あっきき～ん)
かみきゃみ～ん　SAY
(かみきゃみ～ん)
りゅうせせせ～い　SAY
(りゅうせせせ～い)
こたきき～ん　SAY
(こたきき～ん)
WESTォォォォ！！！

Yeah！魅せてYeah！数えきれない
夢・笑い・愛のセッション！
Yeah！これぞYeah！浪速魂
希望・勇気・愛のセッション！Yeah

じゅんじゅじゅ～ん
(じゅんじゅじゅ～ん)
はままま～ん
(はままま～ん)
しげげげ～ん
(しげげげ～ん)
あっきき～ん
(あっきき～ん)
かみきゃみ～ん
(かみきゃみ～ん)
りゅうせせせ～い
(りゅうせせせ～い)
こたきき～ん
(こたきき～ん)
ジャニジャニ～ズ
(ジャニジャニ～ズ)
WESTォォォォ！！！`},{id:123,title:"W trouble",titleKana:"W trouble",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",performances:["W trouble12/11{1}","W trouble12/12昼,12/13夜{1}","W trouble12/12夜,12/13昼{1}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){20}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){20}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){20}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){20}","Mixed Juice(北海道オーラス){20}","TO BE KANSAI COLOR-翔べ関西から-(大阪){6}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){6}","TO BE KANSAI COLOR-翔べ関西から-(東京){6}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){6}","LOVE MUSIC FESTIVAL2022{5}","Johnny's World Happy LIVE with YOU(6/18){1}","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{7}"],singer:"WEST.",date:"2020-03-18",lyrics:`W trouble
Make some noise
Let's get started

Do what you want
Hey　縦横無尽にSpin the world
There's no time like now
Oh Gosh！ Gosh！
Hit the ground, Run around
Lose a battle to win a war
型破りなSoul lover
You got the power

チャーミーにお届け Party up
ヒップにフロウかませ Hahaha
世間はDangerous
ゆえのTenderness
キミカワイイね
Hit the road jack

シェイクユアバディ　ムーヴユアバディ
シェイクユアバディ　ムーブユアバディ
Bang it
Beat it
Break your limit
Set the fire
超Beatクレイジー！！

最高　最高　最高　最高
Viva Viva Bravo Bravo
Wow “W trouble”
最強　最強　最強　最強
Viva Viva Bravo Bravo
Wow “W trouble”
挑発的 Make some noise
Woo hah！！
最高　最高　最高　最高
Viva Viva Bravo Bravo
Wow “W trouble”
Come on and shout
Come on and shout
W trouble！！

前代未聞のJack-in-the-box
飛び出せSound　焦んなFirst Round
Don't rush it Don't rush it
ヘイ Body Body Blow Blow
ジワジワSlow Slow
No way...
なんつってGo Wild

キッチュにお届け Party up
ボケたらつっこめ Hahaha
Don't worry　想定外
なくらいで　無問題
キミノリいいね
You are so pretty cat

シェイクユアバディ　ムーヴユアバディ
シェイクユアバディ　ムーヴユアバディ
Bang it
Beat it
Break your limit
Set the fire
超Beatクレイジー！！

最高　最高　最高　最高
Viva Viva Bravo Bravo
Wow “W trouble”
最強　最強　最強　最強
Viva Viva Bravo Bravo
Wow “W trouble”
挑発的 Make some noise
Woo hah！！
最高　最高　最高　最高
Viva Viva Bravo Bravo
Wow “W trouble”
Come on and shout
Come on and shout
W trouble！！

Yeah yeah... Yeah yeah...
It's like a jungle (Feel it)
Just like a heaven (Feel it Beat it)
YOLO！ Gotta have fun！
Let's feel it Beat it Feel it Beat it

すべてのHeart beat　ヒトツになれば
never better... never better...
カラダ中で Fat beat　感じ合えれば
never better... never better...
Just born to be crazy
Hey　その身を任せて...

Bang it
Beat it
Break your limit
Set the fire
超Beatクレイジー！！

最高　最高　最高　最高
Viva Viva Bravo Bravo
Wow“W trouble”
最強　最強　最強　最強
Viva Viva Bravo Bravo
Wow “W trouble”
挑発的 Make some noise
Woo hah！！
最高　最高　最高　最高
Viva Viva Bravo Bravo
Wow“W trouble”
Come on and shout
Come on and shout
W trouble！！

Yeah yeah... Yeah yeah...
It's like a jungle jungle (Feel it)
Just like a heaven (Feel it Beat it)
YOLO！ Gotta have fun！
Let's feel it Beat it Feel it Beat it`},{id:124,title:"Glory Days",titleKana:"Glory Days",lyricist:"Komei Kobayashi",composer:"Josef Melin・Christofer Erixon",arranger:"Josef Melin",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",performances:["W trouble12/11{7}","W trouble12/12昼,12/13夜{7}","W trouble12/12夜,12/13昼{7}"],singer:"WEST.",date:"2020-03-18",lyrics:`Woo！ Yeah, Oh…
LALALA… Yeah…
LALALA… 終わらないGlory Days

見慣れた顔が　また一人、二人現れて
DON DO DON DO DON DON！
お決まりの曲　そっと流れ出せばこの場所で
BON BO BON BO BON BON！

約束なんて要らない　口実だって要らない
どうせ暇してんだろ？　みんな、ここに来な

また集まって騒ごうぜ　LALALA…
これから先も　この場所にいたい
ほらみんなで歌おうぜ　LALALA…
季節が　過ぎたって
終わらないGlory Days

LALALA… Yeah…
LALALA… 終わらないGlory Days
LALALA… Yeah…
LALALA… 終わらないGlory Days

街の景色は　今日も変わるけれど俺たちは
NO NO NO NO NO NO！ (NO NO！)
胸張って歩こう (Let's go)　すれ違う仲間握手して
DAN DA DAN DA DAN DAN！ (Here we go)

常識なんて知らない　説明なんていらない (Turn it up)
俺らだけのルールが　ほら、ここにある

あの日みたいに遊ぼうぜ　LALALA…
憧れた未来　手放しはしない
馬鹿みたいに笑おうぜ　LALALA…
大人に　なったって
終わらないGlory Days

静かに落ちていく　太陽　光灯す町並み
変わらない場所は　ここにあるよ

あの日みたいに遊ぼうぜ　LALALA…
憧れた未来　手放しはしない

また集まって騒ごうぜ　LALALA…
これから先も　この場所にいたい
ほらみんなで歌おうぜ　LALALA…
季節が　過ぎたって
終わらないGlory Days

LALALA… Yeah…
LALALA… 終わらないGlory Days
LALALA… Yeah…
LALALA… 終わらないGlory Days`},{id:125,title:"君だけの 僕だけの",titleKana:"きみだけの ぼくだけの",lyricist:"RYOJI",composer:"RYOJI・GRP",arranger:"CHOKKAKU・GAKU",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",performances:["W trouble12/11{17}","W trouble12/12昼,12/13夜{17}","W trouble12/12夜,12/13昼{17}"],singer:"WEST.",date:"2020-03-18",lyrics:`涙の止め方すら　わからなくなる時
どんなTVショーのチャンネルも見る事を躊躇ったりして

なぜどうしたの？　こんなはずじゃなかったよね僕は…
イフもしもこの迷路の出口が見えなくなっても

はじめから描いてた　未来とは違うけど
君だけが　僕だけが生きてきた日々
迷っても選びながら
迷っても進みながら
君だけの僕だけの道を歩いてきた意味を

大切な異性(ヒト)が誰かも気づけない日々
どんな悩みでも打ち明けられた君ならよかったはずで

ねぇどうしたの　そんな寂しそうな顔をして
言わなくても分かり合えた　君はもういなくて

はじめから分かってた　今更で遅いけど
君だけが　僕だけを愛してた日々
悩んでも笑いながら
悩んでも進みながら
僕らだけの二人だけの道を歩いてきた意味を

生きてきた証が
僕だけの迷路になる
悩んだり迷ったりしながら
今、僕はここにいるよ…

はじめから描いてた　未来とは違うけど
君だけが　僕だけが生きてきた日々
迷っても選びながら
迷っても進みながら
君だけの僕だけの道を歩いてきた意味を`},{id:126,title:"Special Love",titleKana:"Special Love",lyricist:"黒沢薫",composer:"黒沢薫・竹本健一",arranger:"竹本健一",stringsarrange:"井上一平",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",performances:["W trouble12/11{9}","W trouble12/12昼,12/13夜{9}","W trouble12/12夜,12/13昼{9}","WEST. 10th Anniversary Live “W”-Film edition-{13}"],singer:"WEST.",date:"2020-03-18",lyrics:`キミこそが　Special Love
誰より深く愛してる　You're my Special Love

ずっと探してた　運命はそこにあるよ
やっと見つけたよ　雑踏でたたずむキミを
止まってた刻が不意に　動き出す
互いの鼓動感じて　そのまま　恋に落ちたよ

キミこそが　Special Love
いつまでもそばで　みつめていたいから
おいで愛しいひと
誰より深く愛してる　You're my Special Love

寒い夜だけど　触れ合う肩が温かい
胸に残る痛み　ボクが消してあげるから
はにかむように笑って　大丈夫さ
何があってもふたりは　ずっと　一緒さ

キミこそが　Special Love
いつまでもそばで　笑顔がみたいから
おいで愛しいひと　見上げれば　ほら
満点の星空さ　You're my Special Love

ボクらの住むこの世界は
ほんとうみたいな嘘で溢れてるけど
強く抱きしめた
この温もりだけは
永遠に　ほんとうさ

キミこそが　Special Love
いつまでもそばで
みつめていたいから
おいで愛しいひと
誰より深く　愛してる　離さない
You're my Special Love

キミだけを

誰よりも

You're my Special Love`},{id:127,title:"Survival",titleKana:"Survival",lyricist:"神山智洋",composer:"神山智洋",arranger:"akkin",album:["W trouble","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",performances:["W trouble12/11{8}","W trouble12/12昼,12/13夜{8}","W trouble12/12夜,12/13昼{8}"],singer:"WEST.",date:"2020-03-18",lyrics:`Dead or Alive, No place to hide.
Wow yeah.

立ち塞ぐ壁を前にして　為す術無くただ唇噛んで
怯えという鎖で雁字搦め
I wonder that I should do.
俺はいつかどうなりたいんだ？
Oh…Ah…

くだらねぇ言い訳並べて　今の自分正当化して
無理だって吐き捨てて　塞ぎ込んでIt sucks！
足掻きもしないで　それでいいのか？

「無様だな」嘲笑うかのように　睨みつけた鏡の中
Hang in there. (Hang in there.)
ガキの頃に胸を張れる俺でいられてんのか？
抱えたComplex絶つのは今
躊躇う暇はないぜ

Get ready！ Going my way.
振り向かず行け
擦り切れて
噛みつかれて
故に傷だらけ
Kiss your past goodbye.
哭いたって
惨めで
みっともなくたって
何が何でも
運命に牙を剥け

YOLO.
Time waits for no one.

Venusが見出す WinnerこそがLeader.
騒ぐ血が今Heat up　いいか？ We're the freedom.
Hey！ Don't be afraid.　目指せAce.　上行くMake waves.
We're gonna shake the world.
Bring it on. Blllllllah!!!!!!!

いざ開幕　響いたGunfire.
現状は最悪　打ち出せMy style.
負のSpiral　さえもHijack.
戦況はClimax.
これはSurvival!!!!!!!

蟠りの弾を込めて
世界へと引き金をひけ
Are we gonna grow up？
Or we just fall down？
どうなるかは自分次第だろ

Going my way.
先を越されて
崖っぷちで
くじけたって
後に引けなくて
I'll never give it up until I die！
まじで命懸けなんだ

Only we can change our life.
妥協は捨てて
蔑まれ　貶されても
ただかち込むだけ
It serves you right！
そう限界を超えろ
燃え尽きても
夢にしがみつけ
Traumaを取っ払って
Prideを貫け
恥をかくのは
間違いじゃないだろ
何度だってGet up.
世間体なんてBreak out.
挑み続ければ
未来(あす)はこの手の中
We're still alive aiming at higher.`},{id:128,title:"ごっつえーFriday",titleKana:"ごっつえーFriday",lyricist:"SUNNY BOY",composer:"☆Taku Takahashi(m-flo)・SUNNY BOY",arranger:"☆Taku Takahashi(m-flo)・Mitsunori Ikeda(Tachytelic Inc.)",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",performances:["W trouble12/12夜,12/13昼{19}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){23}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){23}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){23}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){23}","Mixed Juice(北海道オーラス){23}"],singer:"WEST.",date:"2020-03-18",lyrics:`朝から　マジしんどい
それでも仕事はバキバキ
いつまでも一緒　乗り気にはなれない！
それでも頑張るから
お願いちょうだいご褒美！！！

やっと半分ラストスパート
でも週末までまだファイト
あともういっちょまで
目標達成するからこれからも
毎日がParty　今日もごっつえーFriday！
どんな日でも花金のような
ハッチャケ祭りやで

わっしょいわっしょい
everybody　わっしょい
だるめの日でもwe can enjoy
頭の中の方向性
ちょびっと　変えるだけで
We could be H a p p y
平日でも we can party like
TGIF day & night
It's ごっつえーFriday Night！！

(Hey Hey) 体まで
(Hey Hey) Run Automatic
(Hey Hey) この音まで
(Hey Hey) アゲアゲで
we party everyday like
It's ごっつえーFriday (ごっつえーFriday)

One more time
君と踊りたい
Now dance with me
まるで Friday Night
羽目を外していこう
don't care at all
singing like
La La La La La La La La (TGIF)
La La La La La La La La (TGIF)
La La La La La La La La
Everybody is Friday Night

残業残業もう無理
wanna go home　いますぐに
楽しみたいでも楽しめない時
いったい何をすればいい
めっちゃ楽勝めちゃ楽勝
どんな時でも想像力を
使ってどの場でもクラブに変身
してdance all night like a パーリー

調子Slowly徐々に上げていくOne weak
終わるまで待てないから
we should all do this all week
嫌な事はすべて忘れて　今夜は踊れ！
Andale！ Andale！
ブルのようにはしゃぎまくれ！

真面目すぎると損損損
堅苦しい考えはno
Always be H a p p y (Happy)
平日でも we can party like (Party)
TGIF day & night
It's ごっつえーFridayNight！ (Night！)

(Hey Hey) 体まで
(Hey Hey) Run Automatic
(Hey Hey) この音まで
(Hey Hey) アゲアゲで
we party everyday like
It's ごっつえーFriday (ごっつえーFriday)

One more time
君と踊りたい
Now dance with me
まるで Friday Night
羽目を外していこう
don't care at all
singing like
La La La La La La La La (TGIF)
La La La La La La La La (TGIF)
La La La La La La La La
Everybody is Friday Night

(Hey Hey) even on Monday
(Hey Hey) even on Tuesday
(Hey Hey) even on Wednesday
(Hey Hey) even on Thursday
we party everyday like
It's ごっつえーFriday (ごっつえーFriday)`},{id:129,title:"HEY!!!!!!!",titleKana:"HEY!!!!!!!",lyricist:"JIN",composer:"JIN",arranger:"ha-j・高田翼(Diosta inc.)",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",performances:["W trouble12/12昼,12/13夜{19}"],singer:"WEST.",date:"2020-03-18",lyrics:`すれ違ってごめん　君とのデスティニー
遠回りしてる　僕だけれど
そこで待ってて　未来のYOU&ME

冴えないeveryday　僕は心鍵をかけた
期待しちゃ滑る　なんて言われた過去

笑ってたって疲れんぜ　泣いたって意味なんてないし
優しく許してくれちゃう　君を妄想しよう
事実につまずいたって　青春って言って流せた
あの日々My way遠くなってく

夜の銀河を超えて　狙え明日の太陽
まだだ　まだだ　今だ　狙え
何度も　やるぞ　さぁ行くんだ
Go for the best
Go for the best
Go for the best
君に逢いに
Go for the best
Go for the best
今すぐ逢いたい

途切れた会話に　うまく返せないままだし
(最近) お釣りさえずっと気持ちよく揃わない

ふざけたって意味ないし　意外と真面目なんなんだ
常識だってちゃんとするし　気も回すんだ
たまには感情爆発　できたら、そりゃぁいいのにな
閉じた世界からのエスケープ！！

夜の芯まで冷えた　風と孤独な君へと
まだだ　まだだ　今だ　届け
何度も　やれと　僕に言うんだ
Go for the best
Go for the best
Go for the best
君に逢いに
Go for the best
Go for the best
今すぐ話したい

すれ違ってごめん　君とのデスティニー
遠回りしてる　僕だけれど
そこで待ってて　未来のYOU&ME

心折れるとき　何もない日々　だがそれでいい
それがいい　それで楽しい　待つのもたまにはいい景色
その時が来た時　世界を一気に飛び出し
そこで待つ君に　届け未来の僕に
『どの瞬間だって振り返れば最高の今』

夜の銀河を超えて　狙え明日の太陽
まだだ　まだだ　今だ　歌え
そうだ　そうだ　ここで負けんな
涙の虹抜けて　狙え君の笑顔を
まだだ　まだだ　今だ　響け
そうだ　そうだ　それでいいんだ
Go for the best
Go for the best
Go for the best
君に逢いに
Go for the best
Go for the best
もうすぐ出逢えるから`},{id:130,title:"to you",titleKana:"to you",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["W trouble","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",performances:["W trouble12/11{25}","W trouble12/12昼,12/13夜{26}","W trouble12/12夜,12/13昼{26}"],singer:"WEST.",date:"2020-03-18",lyrics:`思い出し笑いできるんだ
あの日々僕の足元を照らすんだ
何とかなるって　夜明けの魔法すがろうか
でも何もかも失くしたくない

永遠だとか　一生なんてな
どこにあるんだ

もう　探さない　見つからない
また一人　また一人
それぞれの道　歩いてく
どいつもこいつもいい顔で

じゃあな　じゃあな　寂しくなるぜ
全てが　全てが　恋しくなったって
放物線を空に描こう
あなたへ届け　虹色のピース
ありがとう　ありがとう　旅立つ背中に
いつか僕は僕で　待っていて　見守って
一人帰り道　口ずさむ
新しいメロディー　ふっと笑った

お前の恥ずかしい過去知ってるぜ
お互い様か　ネタには出来ないな
あと何分の一日か　他人事みたいに思う
でも何もかも忘れたくない

永遠だとか　一生なんてな
どこにあるんだ

もう　戻らない　戻れない
いつの日にか　いつの間にか
信じてる道　進むんだ
お前の夢　笑わないぜ

あばよ　あばよ　会いたくなるぜ
でもな　でもな　今はまだ早いね
一人帰り道　この胸に
止まらないリズム　ふっと感じた

どれもこれも何もかもって
大事なもんはどんどん増えてって
自分ってなんだろ　人生ってなんだろ
何だっていいじゃん love you　やっちゃいな

どいつもこいつもいい顔で

じゃあな　じゃあな　寂しくなんかないぜ
またな　またな　今じゃないどこかで
放物線を空に描こう
あなたへ届け　お決まりのピース
ありがとう　ありがとう　旅立つ僕らに
あの日の僕らが　待ってるって　見守ってるって
一人帰り道　立ちどまる
懐かしい声に

思い出し笑いできるんだ
この日いつか足元を照らすんだ`},{id:131,title:"Try me now",titleKana:"Try me now",lyricist:"SHIROSE from WHITE JAM・GASHIMA from WHITE JAM",composer:"COMMAND FREAKS・Christofer Erixon・J. Praize",arranger:"COMMAND FREAKS",album:["W trouble","W trouble[初回A]"],announce:"t",performances:["W trouble12/11{6}","W trouble12/12昼,12/13夜{6}","W trouble12/12夜,12/13昼{6}"],singer:"WEST.",date:"2020-03-18",lyrics:`Just get ready, Imma take you higher
Just keep on burning like the fire
No looking back cuz we're fighters
Can you hear me right now？
Just get ready, Imma take you higher
Just keep on burning like the fire
No looking back cuz we're fighters

俺についてくるってことは
わかってるよね？　どういうことか。
覚悟できたってことね？　今日俺と何かを変えよう。
関係ない奴が　関係あるみたいに　ごちゃごちゃ。
Doesn't matter, Doesn't matter what you say
頭ナデナデしてやるよ。

Work it out, Just to work it out
周りのペースに合わせても
Lonely now, You're feeling lonely now
孤独は消せないぜ

Right now... Living in the moment
Just one life...　一度しか、言わないよ。
おい。だから、僕は、心込めて言うよ。
Don't be scared to be yourself

あげろ心拍数。やんでるキスをしよう。
大丈夫大丈夫大丈夫じゃない。
あげろよその心拍数。俺と火を付けろ。
火遊び火遊び火遊びじゃない。
おい。声をきかせろ。
Hey, We got to do it now
Everybody gotta do it now
Hey, We got to do it now
Come on & Try me now

全部を頑張る必要ない。
変えるのは、たった一個だ。
Be careful what you're wishing for
未来はそこにある。
昨日しなかったことをするとね
運命が少しだけ変わる。
What you gonna, What you gonna, gonna do？
少しずついこーよ。

Fire... We just keep on burning
We're fighters... 夢見ていたいよ。
おい。だから、僕は、心込めて言うよ。
Just show me what you got

あげろ心拍数。俺に気を付けろ。
大丈夫大丈夫大丈夫じゃない。
時には辛いぜ。
あげろよその心拍数。やんでるキスをしよう。
火遊び火遊び火遊びじゃない。
おい。声をきかせろ。
Hey, We got to do it now
Everybody gotta do it now
Hey, We got to do it now
Come on & Try me now

Bring it on
Break it down

Idon't need nobody, I don't need nobody
わかったか？　きこえてるか？
いつかじゃない。誰かじゃない。今、行こう。

あげろ心拍数。やんでるキスをしよう。
あげろ心拍数。俺とならいけるでしょ。

あげろ心拍数。やんでるキスをしよう。
大丈夫大丈夫大丈夫じゃない。
Turn it, Turn it, Turn it up Yeah
あげろよその心拍数。俺と火を付けろ。
火遊び火遊び火遊びじゃない。
おい。声をきかせろ。
Hey, We got to do it now
Everybody gotta do it now
Hey, We got to do it now
Come on & Try me now

Just get ready, Imma take you higher
Just keep on burning like the fire
No looking back cuz we're fighters
Can you hear me right now？
Just get ready, Imma take you higher
Just keep on burning like the fire
No looking back cuz we're fighters
Come on & Try me now`},{id:132,title:"The Call",titleKana:"The Call",lyricist:"常楽寺澪",composer:"Philip Eliason・Anton Hellgren",arranger:"Philip Eliason・Anton Hellgren",album:["W trouble","W trouble[初回B]"],announce:"t",performances:["W trouble12/11{13}","W trouble12/12昼,12/13夜{13}","W trouble12/12夜,12/13昼{13}"],singer:"濱田崇裕＆藤井流星",date:"2020-03-18",lyrics:`震え続けたままのPhone　握り締めた
これ以上優しい声　聞いていられないわ

部屋に残ったあなたの香り
No. I can't forget about it
あなたはまるで陽だまりのよう
その手に包まれてた

窓を叩く雨
but I don't feel like crying crying
今は現実を見たくないのよ

最後の言葉はもう You know it now
どうか忘れないで　愛を

Can't call you back you back you back
堪えてる　何度も
Can't call you back you back you back
I will never call you back

ふいに途切れたCall　耳に残ってる
飲み込んだそのWords　予感してた

本当の声を隠したままで　ずっと側にいたの？
君はまるで漂う雲さ　この手をすり抜けてく

空が泣き出した
but I don't feel like crying crying
今は真実を見つめたいから

最後にサヨナラだけ Call me back now
せめて忘れさせて　愛を

Just call me back me back me back
願ってる　何度も
Just call me back me back me back
I want you to call me back

If you can hear me
もう一度だけ
If you can hear me
声を聞かせてよ Baby

“Hi, It's me
I know, I know... you don't love me anymore.
I feel lonely, just wanna hear your voice, baby
One last time, Will you call me back？ yeah”

最後にサヨナラだけ Call me back now
せめて忘れさせて　愛を

Just call me back me back me back
願ってる　何度も
Just call me back me back me back
I want you to call me back`},{id:133,title:"do you know, girl??",titleKana:"do you know, girl??",lyricist:"重岡大毅・小瀧望",composer:"重岡大毅・小瀧望",arranger:"告井孝通",album:["W trouble","W trouble[初回B]"],announce:"t",performances:["W trouble12/11{15}","W trouble12/12昼,12/13夜{15}","W trouble12/12夜,12/13昼{15}"],singer:"重岡大毅＆小瀧望",date:"2020-03-18",lyrics:`上から下へsecurity check it baby
gateをpass　足早にcheck in　したいね

君の知らない世界
君と行って見せたい
0.01 パスポート　着くも着かぬも俺次第

yeah！！　刺激的旅　満たされる度
何もかも忘れて
行けぇ！！　愛し合って black out
突き抜けて white out
2人乗ってそって
do you know, girl？？ sweet kiss？？
朝になっても気にしない

dessert代わりのproのtalkさ baby
甘い甘い甘い期待サービス say“yes”

君が肩にもたれる
君の息が弾む
0.01 パスポート　飛ぶも飛ばぬも君次第

yeah！！　魅惑的旅　魅せられる度
何もかも果てまで
行けぇ！！　繋がって black out
突き破って white out
2人寄って添って
do you know, girl？？ sweet kiss？？
バカになっても気にしない

yeah！！　せわしない旅
ただ行ったり来たり
何もかもさらけだせ

行っけぇ！！　刺激的旅　満たされる度
何もかも忘れて
行けぇ！！　愛し合って black out
突き抜けて white out
2人乗ってそって
do you know, girl？？ sweet kiss？？
朝になっても気にしない
今夜の君と俺次第`},{id:134,title:"GimmeGimmeGimme",titleKana:"GimmeGimmeGimme",lyricist:"Yuki Kokubo・中間淳太",composer:"Josef Melin",arranger:"Josef Melin",album:["W trouble","W trouble[初回B]"],announce:"t",performances:["W trouble12/11{14}","W trouble12/12昼,12/13夜{14}","W trouble12/12夜,12/13昼{14}"],singer:"中間淳太＆桐山照史＆神山智洋",date:"2020-03-18",lyrics:`衝撃的な　夜のFantasy (GimmeGimme)
耳元で　着飾った言葉は
まるでアルコール　薄れる記憶
そのまま　裸で Goodnight baby

「運命を感じちゃう」なんて
頬赤くして
Oh baby　マジでピュアなんだね
挨拶代わりのキスくらいで
あっちゅーまに　本気になって
Ma ma ma My love is like Don Juan
「楽勝だね。“tonta”」

So GimmeGimmeGimme
抱きしめるたび
Wow oh oh... (Wow oh oh...)
溢れ出す Juicy
本能のまま Tasting
Wow oh oh... (Wow oh oh...)

Hey！ Hey！ Hey！ Hey！ Hey！ Hey！
GimmeGimme
Hey！ Hey！ Hey！ Hey！
Wow oh oh...

現実的な　朝はSuddenly (Suddenly)
So...　ロマンスの先にあるのは未来じゃなくリアル
シーツの中　濡れた瞳
涙は　無意味さ Goodbye baby

「貴方だけ　行かないで」なんて
ダサすぎるって
Don't worry　結局はお前のものだって
タバコふかし　煙にまいた
約束は嘘 I'm a liar
Ma ma ma My love is for everyone's
「逆に親切だろ？“tonta”」

So GimmeGimmeGimme
今夜だけのハニー
Wow oh oh... (Wow oh oh...)
恥じらいの Juicy
躊躇わず Tasting
Wow oh oh... (Wow oh oh...)

Hey！ Hey！ Hey！ Hey！ Hey！ Hey！
GimmeGimme
Hey！ Hey！ Hey！ Hey！
Wow oh oh...

GimmeGimmeGimmeGimme　全て捨て
乱れてごらんよ Fill me all the way
My heart is pumpin'n pumpin'n (Baby)
Your heart is pumpin'n pumpin'n
GimmeGimmeGimmeGimme　果てるまで
乾いた喉、潤すように
飲み干してグッと...

誰もが俺に
酔いしれてKissin'
Wow oh oh... Ohhhhh！！！

So GimmeGimmeGimme
抱きしめるたび
Wow oh oh... (Wow oh oh...)
溢れ出す Juicy
本能のまま Tasting
Wow oh oh... (Wow oh oh...)

Hey！ Hey！ Hey！ Hey！ Hey！ Hey！
GimmeGimme
Hey！ Hey！ Hey！ Hey！
Wow oh oh...

Hey！ Hey！ Hey！ Hey！ Hey！ Hey！
GimmeGimme
Hey！ Hey！ Hey！ Hey！
Wow oh oh...`},{id:135,title:"証拠",titleKana:"しょうこ",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["証拠","証拠[初回A]","証拠[初回B]","証拠[通常盤]","rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["W trouble12/11{10}","W trouble12/12昼,12/13夜{10}","W trouble12/12夜,12/13昼{10}","rainboW(北海道){23}","rainboW(宮城,愛知,新潟,埼玉,熊本){23}","rainboW(円盤){23}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){28}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){28}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){28}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){28}","Mixed Juice(北海道オーラス){28}","TO BE KANSAI COLOR-翔べ関西から-(大阪){30}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){28}","TO BE KANSAI COLOR-翔べ関西から-(東京){26}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){26}","POWER(宮城){27}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){27}","POWER(愛知オーラス){27}","AWARD(大阪){23}","AWARD(新潟){24}","AWARD(宮城){24}","AWARD(愛知){24}","AWARD(横浜,静岡,福岡,広島,北海道){24}","AWARD(北海道オーラス){24}","DOME TOUR AWARD(大阪,福岡){1}","DOME TOUR AWARD(東京){1}","DOME TOUR AWARD(東京オーラス){1}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){9}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){9}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){9}","メトロック2022(大阪){12}","LOVE MUSIC FESTIVAL2022{10}","サマソニ2023(大阪,東京){10}","めざまし30周年フェス(東京){9}","メトロック2024(東京){9}","サマソニ2024(大阪,東京){10}","a-nation2024{1}","KOYABU SONIC2024{2}","CDTV ライブ！ ライブ！大感謝祭2024{3}","CDTV ライブ！ ライブ！春の大感謝祭2025{9}","メトロック2025(東京){12}","Johnny's World Happy LIVE with YOU(6/18){8}","Special Studio Recording(証拠[初回B]){1}","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{11}","新グループ名発表します{1}","WEST. 10th Anniversary Live “W”{5}","WEST. 10th Anniversary Live “W”-Film edition-{5}"],singer:"WEST.",date:"2020-06-24",tiup:"日本テレビシンドラ『正しいロックバンドの作り方』主題歌",lyrics:`こんなにも　笑って　いや　泣いて
忙しなく叫ぶ　キミの心は
頑張っている証拠だよ

「消えちまえ」
それを重ねて
夢見てるばっかの　僕がいたんだよ
眠れない　眠りたくない
迫って来る夜に　また目を背向けた

あーだ　こーだ　言ってみたり
どーの　こーの　ぼやいたり
いいさ　歌ってみればいいさ
そーも　こーも　言ってられない世の中なら
ほら　もっと　もっと　さらけ出せばいい

こんなにも　笑って　いや　泣いて
忙しなく叫ぶ　キミの心は
頑張っている証拠だよ
「置いてきぼり」なんて　言わないで
完璧じゃ疲れちゃうよ
らしく行こうぜ
Long & Winding Road

「もう分からない」
途方に暮れて
助け求めてる　キミもいたんだね
作り笑い　慣れ過ぎてない？
上手く生きるのがすべてじゃないから

みえ透いたウソばかり
見たくないものばかり
でもさ　歌っていればいいさ
どーも　どーも　やってられない世の中なら
ほら　もっと　もっと　愛しちゃえばイイ

こんなにも　笑って　いや　泣いて
忙しなく叫ぶ　キミの心は
頑張っている証拠だよ
「ひとりきり」だなんて　行かないで
いつか泣き疲れちゃうよ
らしく行こうぜ
Long & Winding Road

とは言え　不器用な僕ら
もやもやのあっち側
届かない声は無いって
がむしゃらに　かき鳴らすのさ

どれが正しくて　間違いで
手探りのまんま　生きているんだ
何が悪いのさ Ah

こんなにも　笑って　いや　泣いて
忙しなく叫ぶ　キミの心は
間違ってない証拠だよ
「置いてきぼり」なんて　言わないで
完璧じゃ疲れちゃうよ
らしく行こうぜ
Long & Winding Road`},{id:136,title:"You ain't mine",titleKana:"You ain't mine",lyricist:"Kanata Okajima・CLAUDE S.",composer:"O-BANKZ・Erik Lidbom・J. Praize",arranger:"O-BANKZ",album:["証拠","証拠[初回A]"],announce:"t",performances:["Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{8}"],singer:"WEST.",date:"2020-06-24",lyrics:`You & me　とっくに　スベテ Over
投げやりに Cut　空虚な Talk
充分向き合ったし　なす術も無い
You've crossed the line badly

I regret, I'm sorry とか
聞き飽きたよ Girl
カラダでごまかして
We're so stupid creatures

塞ぎ　重ね合う Lips
傷つけ合うように
You know I'm so selfish
キミのせいさ

You ain't mine
You better know that
行けるものなら　早く Say good-bye
You ain't mine
I can't believe it
心はもう居ない
正義なんて今は Pointlessな言葉
刻み付けて　忘れさせない
You ain't mine
You better know that
で、キミはどうしたい？

いつからだろう　キミの Fake
気づけなかったのが Mistake
今更振り返らない
Let me hung up the phone Girl
“今すぐ会いたいくらい”は Lie
色褪せたメロディ Please don't cry
その涙　騙されない　過ちとか言わせない
Can't get it right　チョイスはない
キミのせい
そう You ain't mine

Firstly　かなり　関係は Complex
From the start　生まれも Far away star
たまにやけになって
I went for somebody else
I've crossed the line badly

But quite sure　俺しかいない
The one that makes you satisfied
荒っぽく誘い合って
We're so stupid creatures

高まってく Breathin'
掻き消される Moral
I know you so selfish
俺のせいかい？

You ain't mine
You better know that
手放せるなら　どうぞ Say good-bye
You ain't mine
I can't believe it
もう巻き戻せない
正義なんて今は Pointlessな言葉
刻み付けて　忘れさせない
You ain't mine
You better know that
さあ罪を感じない？

Girl, can you handle it？
俺に見せた Deep inside
出逢えると良いね
それまで　さあ One more time

間違いだらけの　二人だけど Tonight
浅はかに溶けてく運命 You know that？
戻れない“キミ”はもういない
描いた未来も今ここまで It's over
数えきれないほどの　二人の物語も
儚く散り去り Good night
朝を待つだけ

結局　重ね合う Lips
どこか逃げるように
You know I'm so selfish
キミのせいさ

You ain't mine
You better know that
行けるものなら　早く Say good-bye
You ain't mine
I can't believe it
心はもう居ない
正義なんて今は Pointlessな言葉
刻み付けて　忘れさせない
You ain't mine
You better know that
で、キミはどうしたい？

もう罪も感じない

で、キミはどうしたい？`},{id:137,title:"サヨナラなんかじゃ終わらせないから",titleKana:"さよならなんかじゃおわらせないから",lyricist:"MORISHIN",composer:"MORISHIN・REO",arranger:"REO",album:["証拠","証拠[初回A]"],announce:"t",performances:["Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{9}"],singer:"WEST.",date:"2020-06-24",lyrics:`愛が足りないならおいで
光を注ぐよキミに
涙で咲かせた花を守るよ
踏み潰されないように Wow wow wow

“傷つくのはもう慣れたよ”
そんなこと言わないで
傷の隙間こぼれる希望拾って

“じゃあね”
サヨナラなんかじゃ終わらせないから
何度も言う So 何度でも言う
生きるんだ So 生き抜くんだ
Wow wow wow wow wow wow
悲しみなんかじゃ終わらせないから
I love you　ほら愛ならある
もう一度笑ってよ
サヨナラなんかじゃ終わらせないから

“ありがとう”“ごめんね”
そんな言葉いらない
サヨナラなんかじゃ
絶対終わらせないから

“傷つくのはもう慣れたよ”
そんなこと言わないで
傷の隙間こぼれる希望拾って

“じゃあね”
サヨナラなんかじゃ終わらせないから
何度も言う So 何度でも言う
生きるんだ So 生き抜くんだ
Wow wow wow wow wow wow
悲しみなんかじゃ終わらせないから
I love you　ほら愛ならある
もう一度笑ってよ
サヨナラなんかじゃ終わらせないから

愛が足りないならおいで
光を注ぐよキミに`},{id:138,title:"間違っちゃいない。",titleKana:"まちがっちゃいない。",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["証拠","証拠[初回B]","AWARD","AWARD[通常盤]"],announce:"t",performances:["TO BE KANSAI COLOR-翔べ関西から-(大阪){16}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){15}","TO BE KANSAI COLOR-翔べ関西から-(東京){16}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){16}","DOME TOUR AWARD(大阪,福岡){35}","DOME TOUR AWARD(東京){36}","DOME TOUR AWARD(東京オーラス){36}","メトロック2022(大阪){7}","Special Studio Recording(証拠[初回B]){2}","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演{6}"],singer:"WEST.",date:"2020-06-24",lyrics:`涙一粒　星降る夜に
光れない　馴染めない
なぜ同じ様に生きれないの
予定詰まったカバン捨てて帰ろうかな
眩しい近所の夜空

間違い探しの世界で　赤ペン持つのかい
インクが足らないね

間違っちゃいないよな
君と出会ったことも　夢を信じることも
答えに牙むいてさ
何度も何度でも
さよなら上の空　僕は僕で僕なんだ
間違っちゃいない
間違っちゃいないんだ

ないものねだりタラレバを振り払う
朝の占い　横目で順位気にしてさ
理想と現実で結ぶ靴ひも　歩けるかな
教えて近所の青空

ぐるぐる渦巻く世界で　君が花びら
花丸つくれるね

間違っちゃいないよな
消えたくなった夜も　逃げたくなった朝も
まぁまぁカッコいいんじゃない
泣きたくて泣けなくて
“お疲れ”と夕日がほら　君は君で君なんだ
間違ってもいい
間違ってもいいんだ

頑張れなくていい　嫌になったっていい
情け無くていい　ダサくていい　怖くなってもいい
どんな自分だっていい

どうしようも無いくらい
どうしようの繰り返し
誰が明日を知ってるんだ

誰にも解らないから

君と出会ったことも　夢を信じることも
答えに牙むいてさ
間違っちゃいないよな
目が合う近所の空　僕は僕で僕だ
間違っちゃいない
間違っちゃいないんだ
間違っちゃいない
間違っちゃいないんだ`},{id:139,title:"ANS",titleKana:"ANS",lyricist:"神山智洋・藤井流星",composer:"神山智洋",arranger:"akkin",album:["証拠","証拠[初回B]","AWARD","AWARD[通常盤]"],announce:"t",performances:["W trouble12/12夜,12/13昼{11}","TO BE KANSAI COLOR-翔べ関西から-(東京){13}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){13}","LOVE MUSIC FESTIVAL2022{8}","サマソニ2023(大阪,東京){7}","Special Studio Recording(証拠[初回B]){3}"],singer:"WEST.",date:"2020-06-24",lyrics:`wow oh...

夢に見た主人公は思い返せば遥か彼方
大切にしてた拘りさえ捨てちゃおうか？迷いも生まれんだ
自分と向き合うことにさえ　目を背けて逃げ続けていた
過去に縛られて　やることなすこと空回るんだ

暗い部屋でポツリ　悪戯に時は流れ
辛い筈なのに涙は流れなくて

キエチマエ！！　オマエ！！
お前はいつも影のようにしつこくつきまとって
繰り返し立ち塞がるのなら
強く瞬いて
キエチマエカナシミよ

夕日に照らされ気づく　丸く不細工な背中はいつから？
下を見てなくちゃ帰る道すら見失いそうなんだ

当たり前のように昇る焼ける朝日
吹っ切れてないのにまた今日が始まるのか

キエチマエ！！　オマエ！！
お前がもしも夢ならば早く覚めてくれ
傷だらけな未来は要らない
まじで頼むから
キエチマエカナシミよ

このままずっとただ流されるだけなら楽だけどさ
やりたいことなりたいもの追いかける方が
毎日がワクワクしてこないか？

手繰り寄せた望みがちっぽけでも
決して手放したりしないから
カタチなんて関係ないさ
まだ夢の途中だ　半端じゃ終われないさ

掻き鳴らせ！！　強く！！
続く未来がどうなるかは自分次第だろ
打ち鳴らせ！！
過去の俺がお前を越える度強くなってきたように
何度でも越えてみせるさ　悲しみ(オマエ)の
向こう側へ

高い空へ
キエチマエ！！`},{id:140,title:"ハッピーメイカー",titleKana:"はっぴーめいかー",lyricist:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・前田佑",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・前田佑",arranger:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・前田佑",album:["証拠","証拠[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2020-06-24",lyrics:`Hey Everybody
さあゼロから始めようか
Come on Everybody
派手に Sound　奏でようか
Bakubaku Zokuzoku
ジリジリ Party Party
Hey It's ショータイム！！

ハッピーメイカー　ハッピーメイカー
最高！　太陽と踊れフィエスタ
ありのままのキミを見せて
ジリジリ Party Party
ハッピーメイカー　ハッピーメイカー
さぁ行こう！　情熱と歌えフィエスタ
汗ばむほど心感じてる
エビバディ超ベリーGood！！
SAWAGE SAWAGE SAWAGE！！

Ay Yo Funky flow
灼熱のボディーブロー
最高へのOne way
ドシャ降りでも Go ahead
お楽しみが So メニメニあんだって
Shout it out (Shout it out)
Coming out (Coming out)
Let's get it now now now

エビバディ (Hey！)
Come on & dance with me
シェイキョーバディ (Ho！)
もっと声出して
アユレディ！？ (Yeah！)
Come on
オレたちがユニバース

はみ出しそうさ (We're going high)
This is クレイジーなsoul (Crazy soul)
掴め Fire な　シーズン
So we get up get up get up
Come on and get up get up get up
SA！ WA！ GE！ Let's go！

ハッピーメイカー　ハッピーメイカー
最高！　太陽と踊れフィエスタ
ありのままのキミを見せて
ジリジリ Party Party
ハッピーメイカー　ハッピーメイカー
さぁ行こう！　情熱と歌えフィエスタ
汗ばむほど心感じてる
エビバディ超ベリーGood！！
SAWAGE SAWAGE SAWAGE！！

オチなし禁止 It's better better　フレッシュ
GDP上がるくらいに Party Party it up
ヤングピーポーも　騒ぎな (Hoooo！！)
アダルトピーポーも　騒ぎな (Hoooo！！)
Shout it out (Shout it out)
Coming out (Coming out)
Let's get it now now now

エビバディ (Hey！)
Your heart is shaking now
ムーヴユアバディ (Ho！)
もっとHighんなって
アユレディ！？ (Yeah！)
Come on
オレたちがユニバース

ヤケドしそうさ (We're going high)
This is クレイジーなmode (Crazy mode)
いつも Futureはフリーダム
So we get up get up get up
Come on and get up get up get up
A！ SO！ BE！ Let's go！

ハッピーメイカー　ハッピーメイカー
最高！　天使のエゴイスト
身もココロも裸になって
ジリジリ Party Party
ハッピーメイカー　ハッピーメイカー
さぁ行こう！　衝撃のロマンチスト
とろけるほど心感じてる
エビバディ超ベリーGood！！
ASOBE ASOBE ASOBE！！

ワチャワチャ　ハメはずせ　ついてこい！
Wow wow (Wow wow)
ギリギリ BAKAになれ　ワンモアタイム！
Wow wow
Let's get it now now now

Enjoy to the limit
終わらない…　終わらせない…　この季節
Let's get it together　その素肌
大胆に焦がそう

SA！ WA！ GE！ Let's go！

ハッピーメイカー　ハッピーメイカー
最高！　太陽と踊れフィエスタ
ありのままのキミを見せて
ジリジリ Party Party
ハッピーメイカー　ハッピーメイカー
さぁ行こう！　情熱と歌えフィエスタ
汗ばむほど心感じてる
エビバディ超ベリーGood！！
SAWAGE SAWAGE SAWAGE！！`},{id:141,title:"いまだ!!",titleKana:"いまだ!!",lyricist:"松井五郎",composer:"馬飼野康二",arranger:"佐々木博史",album:["証拠","証拠[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2020-06-24",tiup:"NHK Eテレアニメ『忍たま乱太郎』第28シリーズ　エンディングテーマ",lyrics:`頑張りすぎて
くたびれちゃったり
心は元気かい？
どうだい？　Boys & Girls

ダメな日もある
諦めちゃったり
それで終わりかい？
どうだい？　One more Chance

あっちこっち動いてGo
なんだかんだ試してこう
後ろ向きじゃ　夢だって　逃げちゃうよ
さぁ　やっちゃいな

行くぞ　絶対のHopで
行くぞ　永遠のStepで
行くぞ　完璧Jumpで
君はここじゃ終わらない

やるぞ　太陽はHeartだ
やるぞ　友情はYellだ
やるぞ　青春はDanceだ
それが君の答えさ　いまだ！！

ひとりじゃ無理な
坂道だったら
肩を貸そうか？
そうさ　You're my friend

弱点なんて
誰でもあるさ
それでもいいじゃん？
そうさ　Only One

じっとなんかしてちゃNo
あーだこーだ叫んじゃおう
ひとつひとつ　未来を　積み上げよう
さぁ　やっちゃいな

行くぞ　絶対のRhythmで
行くぞ　永遠のBeatで
行くぞ　完璧Harmony
僕らいつも一緒さ

やるぞ　太陽はSignだ
やるぞ　友情はPowerだ
やるぞ　青春はChallenge
それがきっと答えさ　いまだ！！

難問だって向かってGo
冒険だってしちゃってこう
したいことが　まだまだ　あるはずさ
さぁ　やっちゃいな

行くぞ　絶対のHopで
行くぞ　永遠のStepで
行くぞ　完璧Jumpで
君はここじゃ終わらない

やるぞ　太陽はHeartだ
やるぞ　友情はYellだ
やるぞ　青春はDanceだ
それが君の答えさ　いまだ！！
いまだ！！`},{id:142,title:"はんぶんこ",titleKana:"はんぶんこ",lyricist:"ジャニーズWEST・MiNE",composer:"川口進・MiNE・Atsushi Shimada",arranger:"ha-j",album:["証拠","証拠[通常盤]"],announce:"t",performances:["rainboW(円盤){30}","Johnny's World Happy LIVE with YOU(6/18){4}"],singer:"WEST.",date:"2020-06-24",lyrics:`上手く笑えない今日の涙は僕と“はんぶんこ”
一人の思い出　二人にしよう　何倍も笑えるね

雨がポツリこんな日にでさえ (Anytime)
同じ傘2人で“はんぶんこ” (Oh Oh)
「濡れるって！」笑顔で押し合って　同じ未来(みち)歩こう

きっと孤独や不安は　1人じゃ抱えきれないから
そのはんぶんは　僕が持つよ
ほら空いたその手で　手を繋ごう

涙は越えて行こう　笑顔は集めて行こうよ
君が笑えば僕は嬉しすぎて泣きそう
ずっと味方でいるよ
君とここで生きてる奇跡は偶然じゃない　美しい光
全てを“はんぶんこ”にして歩いて行こう

退屈な毎日にも　何処かに咲いている愛
“はんぶんこ”ずつ持ち寄ってさ
合わせ大きな愛にしよう

涙ホロリそんな時だって (Anytime)
僕も泣くから“はんぶんこ” (Oh Oh)
「なんで泣くの！」って君が笑う　また笑顔重なり合う

きっと涙や弱さは　強さ　優しさ　笑顔に変わる
君は一人じゃないよずっと
僕らのはんぶんは君だからさ

涙は越えて行こう　笑顔は集めて行こうよ
君が笑えば僕は嬉しすぎて泣きそう
ずっと味方でいるよ
君とここで生きてる奇跡は偶然じゃない　美しい光
全てを“はんぶんこ”にして歩いて行こう

幸せのカケラ　拾い集めて
誰かに分けられる人になろう
明るい未来　ともに作っていこう
大丈夫、明日は来る

僕と越えて行こう　笑顔は集めて行こうよ
君が笑えば僕は嬉しすぎて泣きそう
ずっと味方でいるよ
僕も君も生きている
僕ら共に生きてゆく　負けない光
“はんぶんこ”半歩と半歩　僕と君で

ありふれた日常だって　ありのままの僕ら待ってるよ
Oh Oh…Fu Fu…
ともに進もう　ずっと`},{id:143,title:"週刊うまくいく曜日",titleKana:"しゅうかんうまくいくようび",lyricist:"山口隆(サンボマスター)",composer:"山口隆(サンボマスター)",arranger:"ha-j",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回A]","週刊うまくいく曜日[初回B]","週刊うまくいく曜日[通常盤]","rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["W trouble12/11{12}","W trouble12/12昼,12/13夜{12}","W trouble12/12夜,12/13昼{12}","rainboW(北海道){28}","rainboW(宮城,愛知,新潟,埼玉,熊本){28}","rainboW(円盤){28}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){13}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){13}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){13}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){13}","Mixed Juice(北海道オーラス){13}","TO BE KANSAI COLOR-翔べ関西から-(大阪){29}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){13}","TO BE KANSAI COLOR-翔べ関西から-(東京){14}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){14}","POWER(宮城){4}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){4}","POWER(愛知オーラス){4}","AWARD(大阪){11}","AWARD(新潟){11}","AWARD(宮城){11}","AWARD(愛知){11}","AWARD(横浜,静岡,福岡,広島,北海道){11}","AWARD(北海道オーラス){11}","メトロック2022(大阪){9}","LOVE MUSIC FESTIVAL2022{9}","サマソニ2023(大阪,東京){4}","サマソニ2024(大阪,東京){4}","スペシャルセッション(しあわせの花[初回B]){2}"],singer:"WEST.",date:"2021-01-13",tiup:"テレビ東京ドラマホリック！『ゲキカラドウ』主題歌",lyrics:"週刊うまくいく曜日 (さびしい夜に　さけべ　ドンウォーリー)<br />週刊うまくいく曜日 (いつかよろこび　満たしてみたい)<br />はじめようぜ (Love！)<br />おいてかねえぜ (Love！)<br />過去も未来も報われる毎日を<br /><br />Hey what's up what's up　心がひどく曇ってるんなら<br />今は　チックタックチックタック　何かに追われる自分をみつめて<br />口笛ふいて　はじける日々をとり戻すんだよ　キミを夢にみたりして<br /><br />Stand up Stand up　立ち上がれない時があるのは<br />いったいぜんたいどういうきまりに　しばられてるからだろう<br />口笛ふいて　はじける日々にStepふみたいよ　もちろんキミを夢にみて<br /><br />大切なことに　もうすぐ気づけそうさ　とり戻せそうなんだよ<br />もうすぐ　もうすぐ<br /><br />ラララ　明日からきっと (ラブ＆ピース)<br />素晴らしく　笑える気がする<br />必ず光がさすよ　毎日<br />明日からきっと (アイラブ)<br />素敵なことばかり　おきる気がする<br />必ず光がさすよ　毎日に<br /><br />週刊うまくいく曜日 (さびしい夜に　さけべ　ドンウォーリー)<br />週刊うまくいく曜日 (いつかよろこび　満たしてみたい)<br />だから　マンデ　チューズデイ (Love！)<br />ウェンズデ　サーズデイ (Love！)<br />フライデ　サタデ　サンデ　愛を持って<br />はじめようぜ (Love！)<br />おいてかねえぜ (Love！)<br />過去も未来も報われる毎日を<br /><br />ラララ　明日からきっと (ラブ＆ピース)<br />素晴らしく　笑える気がする<br />必ず光がさすよ　毎日<br />明日からきっと (アイラブ)<br />素敵なことばかり　おきる気がする<br />必ず光がさすよ　毎日に<br />ラララ　ララララ　必ず光がさすよ毎日<br />ラララ　ララララ　必ず光がさすよ毎日に"},{id:144,title:"カメレオン",titleKana:"かめれおん",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回A]"],announce:"t",performances:["rainboW(北海道){5}","rainboW(宮城,愛知,新潟,埼玉,熊本){5}","rainboW(円盤){5}","WEST. 10th Anniversary Live “W”{8}","WEST. 10th Anniversary Live “W”-Film edition-{8}"],singer:"WEST.",date:"2021-01-13",lyrics:`澄ました顔しているカメレオンは嫌いだ
そんなに変わり身が早いなんてずるいや
一人変わってみたって同じ顔ぶれ
教えてあげたところで気付けぬ遠吠え

もう　幸せ探しに疲れたからって
誰かを指差す権利なんてないだろう
今朝　鏡に閉じ込めたエゴは
玄関あければそっとまた顔を出した

世間は　光しか見ないふりして　誤魔化して
でもね　汚れた涙も痛みも
私のものだから

誰かのように生きろと言われても
息ができない　できない
ため息で曇った鏡なんて
本当の姿(ジブン)映せない

ただ泣くのを我慢してばかりじゃ
涙枯れちゃう　枯れちゃう
広げすぎた傷口隠しても
痛みなど消えやしない
見せかけじゃもう　生きてけないや

やれ　これみよがし　あいつよりはマシ
口にしたとこで　自己嫌悪の嵐
自分には期待　なんてしない
誰かに擬態　一体誰のスパイ

カラフルに飾る時代に
モノクロに語るアイロニー
振りかざされた正義に
ユーモアなんてあるわけ無いさ

世間は欠陥品と決めつけ　粗探しして
私は　はぐれた心とカラダを
つなぎとめたいだけなんだ…

誰かのように生きろと言われても
息ができない　できない
ため息で曇った鏡なんて
本当の姿(ジブン)映せない

ただ泣くのを我慢してばかりじゃ
涙枯れちゃう　枯れちゃう
広げすぎた傷口隠しても
痛みなど消えやしない
見せかけじゃもう　生きてけないや

君の声を聞かせて
本当の色を教えて
まだ見えない　真っ白な未来
壊したい？
守りたい？

簡単にユメ語れと言われても
覚悟できない　できない
むやみに誰か傷つけてばかりじゃ
居場所なんて見当たらない

ただ泣くのを我慢してばかりじゃ
涙枯れちゃう　枯れちゃう
広げすぎた傷口隠しても
痛みなど消えやしない
見せかけじゃもう　生きてけないや`},{id:145,title:"4年7ヶ月",titleKana:"4ねん7かげつ",lyricist:"家原正樹・Yu-ki Kokubo",composer:"家原正樹・Yu-ki Kokubo",arranger:"家原正樹",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回A]"],announce:"f",performances:[],singer:"WEST.",date:"2021-01-13",lyrics:`波音にそっと耳を傾けたら
寄り添う君の頬にキスをしよう
オレンジ色に染まってく横顔
重なり合った2つのシルエット

夏の終わり迎えた　緊張のFirst date
覚悟決めた　海岸沿いのバス停
他の誰かじゃNo　君だけだよ
You're my everything

忘れないよこの瞬間
I wanna hold you tight　ずっと
約束する　君を悲しませないと
I promise for you
どんな未来が来たって負けない
鮮やかに彩り続けるDelight
今の二人で　変わらぬ夢を描こう

クリスマスなんて興味ないフリしてさ
無邪気な笑顔　嘘が下手だね
時計の針が明日へ向かうたび
拗ねる仕草が　また愛しくて

冬空の下　些細な事で喧嘩
繋ぐ手を手ほどいて距離測った
でも不思議なほど　物足りないよ
You're part of me

忘れないよこの瞬間
I wanna hold you tight　ずっと
誰かを愛す意味を教えてくれる人
I promise for you
春夏秋冬　積み重ねていこう
日ごとに増す　君と叶えたい空想
今の二人で　大きな夢を描こう

ねぇ、君は今幸せかな？
どんな顔しているの？
4年7ヶ月　(桜舞う季節)
サヨナラを告げる　(永遠をリセット)
それぞれの答えを　ゆびきりした未来へ
歩き続けるから

忘れないよあの瞬間
I wanna hold you tight　ずっと
刻まれた想い出と　また踏み出す一歩
My love is for you
たった一つ　言える事はそう
君と過ごした日々は宝物
今の二人で　新たな夢を描こう

Wow oh Wow oh
ずっとずっと
Wow oh Wow oh
You're my everything`},{id:146,title:"おい仕事ッ！",titleKana:"おいしごとっ！",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"CHOKKAKU",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回B]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){24}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){24}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){24}"],singer:"WEST.",date:"2021-01-13",lyrics:`迷子のエゴばら撒く社会
せかせかしてどーすんの
働けど働けど
アゴでGoGo　右往左往Boo

ケツKnock　ペンペン　資本主義
やかましい世間　バナナうんち
健康に生きていたいだけ
速度超過時代　物申す

Oh！休みちょーだい！
土日祝日連休ロンバケ無いないBAD！
されどお仕事
何様俺様お疲れ様

適当こいて　へのカッパ
いちにのさんしご自愛ください
ブーブーたれて　ごめんくっさい
華麗にスカしてブー

態度もエコで済ませてく
イライラしてどーすんの
合わせどマジ合わせど
結局NoNo　右脳左脳Bomb

ハイワカリマシタスミマセン
機械仕掛け3種の神器
速攻で帰りたいだけ
俺無課金限界　物欲す

Oh！情けちょーだい！
贅沢散財出金Oh my God　貯金パー！
されどお仕事
お客様神様ご苦労様

適当こいて　へのカッパ
いちにのさんしご自愛ください
ブーブーたれて　ごめんくっさい
華麗にスカしてプー

頑張る時もありますけど
頑張らない時もあります
山ありゃ谷もあんだぜ
疲労困憊バイバイ　いざララバイ

Oh！休みバンザイ！
土日祝日連休ロンバケいないいないバー！
目指すは大往生
月火水木金ぶっ飛ばしてケンケンパー！
お仕事おい仕事ッ！
何様皆様お疲れ様

適当こいて　へのカッパ
いちにのさんしご自愛ください
ブーブーたれて　ごめんくっさい
華麗にスカして
チョチョイふんばって
水に流してフ～`},{id:147,title:"Candy Shop",titleKana:"Candy Shop",lyricist:"Komei Kobayashi",composer:"Jimmy Claeson・川口進",arranger:"Jimmy Claeson",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回B]"],announce:"t",performances:["rainboW(北海道){6}","rainboW(宮城,愛知,新潟,埼玉,熊本){6}","rainboW(円盤){6}"],singer:"WEST.",date:"2021-01-13",lyrics:`Candy, Candy
Candy, Candy
Candy, Candy
Candy, Candy

笑顔や　態度で　また答えをはぐらかして
二人の間に　曖昧な境界線
I know　素直な
Maybe　気持ちに
Let's go　全てを任せてみない？
言い訳さえいらない
指先を重ねて Closer to me

Woo　裏腹なセリフで
また心隠しても
瞳は嘘つかない
Tonight　その寂しさを
熱い体温で埋めてみたい

連れてくよ Candy Shop
唇に触れて Make it pop
甘く溶けてく Candy Shop
二人で朝まで Don't you stop, No, No
誰も邪魔出来ないこの場所
今すぐ Give it to me, Woo yeah
このまま身体を引き寄せて
とろける Caramel

こぼれた　本音も　酔いが回ったせいにして
そろそろ　時計は　日付を跨ぐよ
You know　途切れた
Baby　言葉が
Don't stop　二人の距離埋めたら
後戻りは出来ない
ただ求め合うまま We can be free

Woo　揺れ動く理性が
僕たちを咎めても
二人は止められない
Alright　この恋しさは
夜が明けても消えはしない

連れ去るよ Candy Shop
この夜を越えて Make it hot
肌を重ねたら Candy Shop
全てを忘れて To the top, No, No
誰も見たことない眼差し
激しく Shake it for me, Woo yeah
隠した孤独も受け止めて
絡まる Chocolate

Don't you go, すぐそばで
Don't you go, 君を感じてたい
止まれない　止まらない　熱いFeeling
まだまだ　終わらない　こんなWeekend
君の甘い香りが Drive me crazy

連れてくよ Candy Shop
唇に触れて Make it pop
甘く溶けてく Candy Shop
二人で朝まで Don't you stop, No, No
誰も邪魔出来ないこの場所
今すぐ Give it to me, Woo yeah
このまま身体を引き寄せて
とろける Caramel

Candy, Candy, Candy, Candy Shop
Candy, Candy, Candy, Candy Shop
Candy, Candy, Candy, Candy Shop
Give it to me, とろける Caramel
Candy, Candy, Candy, Candy Shop
Candy, Candy, Candy, Candy Shop
Candy, Candy, Candy, Candy Shop
Give it to me, 絡まる Chocolate`},{id:148,title:"銀河系",titleKana:"ぎんがけい",lyricist:"新羅慎二",composer:"新羅慎二",arranger:"久保田真悟(Jazzin'park)",album:["週刊うまくいく曜日","週刊うまくいく曜日[通常盤]"],announce:"t",performances:["TO BE KANSAI COLOR-翔べ関西から-(大阪){36}"],singer:"WEST.",date:"2021-01-13",lyrics:`僕達の街の夜空には　煌びやかな星が瞬く
それぞれの形や輝きは違うけど　違うんだけど
君が隣で輝いてるから僕は今日もまばたける
暗い夜空にポツンと一つより天の川のように

どよんとした厚い雲かかっても
嵐や冷たい雨が降ってても
その奥の奥の向こうには　星達が歌う銀河

未来もみんな一人じゃない
光続けろ名もなきSTARよ
未来をみんなで照らそう
何億光年の明日へSTART
生まれた街を離れ　銀河のとある駅で
夢を配る人に　会ったような気がした

西から東へ夕日が　沈む時に涙を流す
これまでもずっと一緒にいた君を　思い出すんだ
誰にも真似できない歴史　僕達の時代を作る
帰り道　約束をした　夕日と肩組みながら

幾千の夢を背負っているから
泣くのは一人になった時だけさ
まぶたの裏の奥の奥のもう一歩先に夢が

夜の孤独な世界に
サヨナラを告げ乗り込めSTARLIGHT
何の為に生きてるか　星屑を集めながら

STARDUST
STARDUST
STARDUST

永遠に続け　永遠へと続け
友よ今声合わせ　星空へ想いを募らせ

未来もみんな一人じゃない
光続けろ名もなきSTARよ
未来をみんなで照らそう
何億光年の明日へSTART
孤独なジョバンニが　カンパネラと出会った
君と僕のように　銀河へと旅立った`},{id:149,title:"Change your mind!",titleKana:"Change your mind!",lyricist:"タナカヒロキ(LEGO BIG MORL)",composer:"阪井一生(flumpool)",arranger:"生田真心",album:["週刊うまくいく曜日","週刊うまくいく曜日[通常盤]"],announce:"t",performances:["rainboW(北海道){11}","rainboW(宮城,愛知,新潟,埼玉,熊本){11}","rainboW(円盤){11}"],singer:"WEST.",date:"2021-01-13",lyrics:`世界変えたくて　今歌っている
それは簡単なことじゃないけれど
でも君の明日ならちょっと変えてみせるから

「もしもの話、嫌いなの」なんて言う君は寂しげに
「期待した方が辛いからさ」って少し笑ってた

全部自分で背負い込んで　両手いっぱい抱え込んで
いつしか張ってた予防線　なくしてみせるよ
もうちょっと　そう、もうちょっと
僕らを頼ってもいいからさ

きっと変えていける　手を離さないで
君を連れていく　もう決めたんだ
いつか君が胸張って笑えるように
ずっと大声で歌っていれば　この世界も変えられるかな？
でも今は君だけを変えてみせよう
そうすれば明日からはきっと
君の目に映る世界も少しずつ変わって見えるよ
視界は晴れてゆく
Change your mind！

「時が経てば笑えるさ」なんて言う人も構わずに
笑いたいのはこの「今」なんだって今を生きてきた

頑張りすぎな君だけど　無理をしちゃう君だけど
僕から君への処方せん　隣にいること
今日だって　いつだって
君は君でしかないんだから

もっと楽にして　力を抜いて
君の人生さ　楽しまないと
思い描く未来に僕もいていいかな？
ずっとなんてない　わかってるけど
離れたくない　時間よ止まれ
でも世界は回ってるんだ　夜が明ける
太陽は街を照らしていった
まるで知らない場所に見えるだろう？　世界は変わるよ
全ては自分次第
Change the world！

何回でも間違ったっていいさ
何回でも転んでもいいさ
その時点で何かが変わり始めてるんだ
間違いすら楽しんでこう　転んでも笑い合おう
その為に僕がいる

そっと風が吹く　君の髪が揺れ
何かが始まる合図みたいだ
大丈夫だって　側にいるって
今踏み出そう

きっと

きっと変えていける　手を離さないで
君を連れていく　もう決めたんだ
いつか君が胸張って笑えるように
ずっと大声で歌っていれば　この世界も変えられるかな？
でも今は君だけを変えてみせよう
そうすれば明日からはきっと
君の目に映る世界も少しずつ変わって見えるよ
視界は晴れてゆく
Change your mind！`},{id:150,title:"WA! WA! ワンダフル!!",titleKana:"WA! WA! わんだふる!!",lyricist:"市川喜康・マツコタツロウ・ha-j",composer:"市川喜康・マツコタツロウ・ha-j",arranger:"市川喜康・マツコタツロウ・ha-j",album:["週刊うまくいく曜日","週刊うまくいく曜日[通常盤]"],announce:"t",performances:["rainboW(北海道){14}","rainboW(宮城,愛知,新潟,埼玉,熊本){14}","rainboW(円盤){14}"],singer:"WEST.",date:"2021-01-13",tiup:"TBS系『パパジャニWEST』テーマソング",lyrics:`何も聞かないまま
そばにいて微笑んでるだけで
飾らぬ優しさに
またも救われた

“愛してる”なんてコトバを
言える柄じゃないし
“ありがとう”の想いを込めて…
おひとつどうかな？

ドーナツのWA！(WA！)
ワンダフルな愛のRing
笑顔WA！(WA！)
翼にもなる
心にWA！(WA！)
君のぬくもり
次の空へ　飛び立とう
ひとりじゃない
それだけで　ワンダフル！！

当たり前のように
振り向くと君が手をつなぐ
守られているのは
たぶん僕のほう

駆け出せば　どんなときにも
向かい風が吹く
飛ばされてしまわぬように
一緒に進もう

ドーナツのWA！(WA！)
ワンダフルな愛のRing
あしたWA！(WA！)
きっと晴れるさ
背中にWA！(WA！)
連ねたMemories
どんな逆境も超えてゆけ
この世界は
僕らのためにある

ドーナツのWA！(WA！)
ワンダフルな愛のRing
笑顔WA！(WA！)
翼にもなる
心にWA！(WA！)
君のぬくもり
次の空へ　飛び立とう

ドーナツのWA！(WA！)
ワンダフルな愛のRing
あしたWA！(WA！)
きっと晴れるさ
背中にWA！(WA！)
連ねたMemories
どんな逆境も超えてゆけ

この世界は
僕らのためにある

ひとりじゃない
それだけで　ワンダフル！！`},{id:151,title:"春じゃなくても",titleKana:"はるじゃなくても",lyricist:"柳沢亮太(SUPER BEAVER)",composer:"柳沢亮太(SUPER BEAVER)",arranger:"柳沢亮太(SUPER BEAVER)",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",performances:["rainboW(北海道){22}","rainboW(宮城,愛知,新潟,埼玉,熊本){22}","rainboW(円盤){22}","AWARD(北海道オーラス){31}","メトロック2024(東京){5}"],singer:"WEST.",date:"2021-03-17",lyrics:`朝じゃなくても　決意をして
春じゃなくても　また会いましょう

好きなら好きと　言えますように
ズレてるなんて　誰が決めるんだろう
明日のことは　わからないけど
つまり未来は　可能性だらけ

知らず知らず僕らは　学んできたのさ
傷つかない手段も　ずる賢さも
それはそれで必要　わかってるけど
なんかもっと単純に笑ってたいよな

だから
朝じゃなくても　決意をして
春じゃなくても　また会いましょう
嘘じゃないこと　大事にして
僕はいつでも　ちゃんと僕でいよう

知らず知らず僕らは　学んできたのさ
建前とか　空気の読みかただとか
それはそれで必要　わかってるけど
なんかもっと単純に笑ってたいよな

だから
朝じゃなくても　決意をして
春じゃなくても　また会いましょう
嘘じゃないこと　大事にして
僕はいつでも　ちゃんと僕でいよう

好きなら好きと　言えますように
ズレてるなんて　誰が決めるんだろう
明日のことは　わからないけど
つまり未来は　可能性だらけ

僕はいつでも　ちゃんと僕でいよう`},{id:152,title:"PUSH",titleKana:"PUSH",lyricist:"JUN・Joshua Leung・D&H",composer:"Tommy Clint・川口 進・Atsushi Shimada",arranger:"Atsushi Shimada・Mitsunori Ikeda(Tachytelic Inc.)",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",performances:["rainboW(北海道){7}","rainboW(宮城,愛知,新潟,埼玉,熊本){7}","rainboW(円盤){7}","TO BE KANSAI COLOR-翔べ関西から-(大阪){24}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){23}","TO BE KANSAI COLOR-翔べ関西から-(東京){21}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){21}"],singer:"WEST.",date:"2021-03-17",lyrics:`Yeah, we goin' like
Push it baby
Push Push チュンビテッソ？
Push it baby
Push Push 来跟著我
Push it baby
Push Push Arigatou
Push it baby
Push Push and Push Push
もっとちょうだいよ

(Another round)
あらやだ、こんな時間だ　帰らなきゃ
そう言う君の目は止めてほしい
(Another round)
わかるよ、建前は守りましょう
Zoom Zoom ノル チゴッソ
今夜はハジけよう

Let's get this party started
放鬆でいいんじゃない
Tonight is the night
内に秘めてる君を見せてよ
Push Push
Party People Mode

Push Push
Party People Mode
Push Push
Party People Mode

(Another round)
押してもダメなら...って言うけれど
君を前に　引く選択肢はない
(Another round)
口嘗過滋味　都無所謂　好好享受現在
マショラ チュクチュク
いつになくFeeling Goooooood!!!!!!!

Let's get this party going
音楽もイイじゃない
Tonight is the night
忘れられないような
最高な夜を
Push Push
Party People Mode

Push Push
Party People Mode
Push Push
Party People Mode

近づく距離 Deep inside
遠慮はいらない
踊る Ladies　苦い Babies
まだまだ足りない

Push it baby
Push Push チュンビテッソ？
Push it baby
Push Push 来跟著我
Push it baby
Push Push Arigatou
Push it baby
Push Push and Push Push
Push Push
Party People Mode

Push Push
Party People Mode
Push Push
Party People Mode

Push Push
Party People Mode`},{id:153,title:"想イ、フワリ",titleKana:"おもい、ふわり",lyricist:"山崎あおい",composer:"川口進・草川瞬・坂室賢一",arranger:"生田真心",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",performances:["rainboW(北海道){12}","rainboW(宮城,愛知,新潟,埼玉,熊本){12}","rainboW(円盤){12}","SPECIAL LIVE(サムシング・ニュー[初回B]){3}"],singer:"WEST.",date:"2021-03-17",lyrics:`ひらひらと　揺れて　近づいて

四月の風が　ぼけた憂鬱をさらう
僕ら同じタイミングで　くしゃみして笑うよ

かかとを踏んだままで　飛び出した春の空
今朝のおぼろげな夢の色に　似ていた

ここに(いつも)君がいることも
あたりまえじゃないけど
願い繋いで　淡く描く未来

ひゅるりら
めぐりめぐる春をふたり待って
分かち合うよ今を　何度だって
同じ場所　同じ温度
それぞれに芽生える愛
見せ合っていたい

それから
いつか赤い糸がほどけたって
結び目からはじめよう
ああ　想イ、フワリとやさしく
手のひら乗せて

うららかな午後　君は大きなあくびをして
そんな気の抜けた光景も　妙に馴染んできて

きっと(すぐに)大げさな夏が
上書きしてく前に
この感情を　ぎゅっと抱きしめよう

ひゅるりら
はぐれはぐれ褪せた地図たどって
理屈じゃない場所で　待ち合わせ
寂しさだって決めつけた
確かめ合う理由だって
超えてゆくよ

それから
目に見えない宝もの探して
深く深く潜ってく
ああ　想イ、フワリと流れる
時に任せて

はなびらの軌道なぞるような
儚い日々を(君と)
見失わぬよう　歩こう
ひらひらと　揺れて　近づいて

ひゅるりら
めぐりめぐる春をふたり待って
分かち合うよ今を　何度だって
同じ場所　同じ温度
それぞれに芽生える愛
見せ合っていたい

これから
いつか赤い糸がほどけたって
結び目からはじめよう
ああ　想イ、フワリとやさしく
手のひら乗せて

想イ、フワリ`},{id:154,title:"Shadows",titleKana:"Shadows",lyricist:"Kanata Okajima",composer:"P3AK・Adrian Mckinnon",arranger:"P3AK",album:["rainboW","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",performances:["rainboW(北海道){17}","rainboW(宮城,愛知,新潟,埼玉,熊本){17}","rainboW(円盤){17}"],singer:"WEST.",date:"2021-03-17",lyrics:`キミを知らない
カラダが増えて
気が狂いそうさ

愛に溺れて
何もかもがキミでも良いのに…
そう良いのに…

何故さ僕から離れて行くの
Don't you tell a lie
もう無理さ

壊れそうな　優しさで
抱き締めて　傷つけ合って
夢を見てた
Why you gone
瞳では語っていたの？
No, it's too late

I still see your shadows
煙(けむ)の中の Utopia
幻のまま　消えるの？
How can I let go
I still see your shadows
この恋を知って僕は
もう戻れない
変わってしまった

キミ無しじゃもう
生きられない僕を
笑いに来て
I can't live like this no more
キミ無しじゃもう
瞳(め)も開けたくないよ
虚しいだけだから
誰もいない Utopia

生温い空気　漂う deep sigh
Been awake for hours
無力な red eyes
機能しないんだ　何もかもそう
キミがいないと　堕ちてく　どんどん

ぼやけてく焦点
その場凌ぎ　微笑んで
崩れてく…
崩れてく…

何故こんなにも
すべてを奪い去っていったの
You know what what you doing

不確かな　世界から
逃げ出した Bonnie & Clyde みたいに
出逢ったんだ
Why you gone
欠けたまま　待ちぼうけだよ
何故だろう

I still see your shadows
煙(けむ)の中の Utopia
幻のまま　消えるの？
How can I let go
I still see your shadows
この恋を知って僕は
もう戻れない
変わってしまった

見つめ合っていた
踊るように帰ってた
日々さえ憎いよ
誰もいない Utopia

このまま　抜け殻のよう
終わっていく　筋書きなの？
そんな無理さ　悪戯ならば　もう止めて
ぼやけた先に　キミがほら…

I still see your shadows
煙(けむ)の中の Utopia
幻のまま　消えるの？
How can I let go
I still see your shadows
この恋を知って僕は
もう戻れない
変わってしまった

キミ無しじゃもう
生きられない僕を
笑いに来て
I can't live like this no more
キミ無しじゃもう
瞳(め)も開けたくないよ
虚しいだけだから
誰もいない Utopia

僕はもう戻れない`},{id:155,title:"グッ!!とあふたぬ～ん",titleKana:"ぐっ!!とあふたぬ～ん",lyricist:"神山智洋",composer:"神山智洋",arranger:"ha-j・神山智洋",album:["rainboW","rainboW[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2021-03-17",lyrics:`フッと一息のお昼休憩　でも働く僕らにはまだ
午後にも山積みの仕事
「こりゃ今日も終電コースかな。。。」
汗をかいて必死になって　そりゃ汗臭くもなるわな
毎月やりくりしてご飯　あぁ小遣いあがらないかなぁ

少し憂鬱なお昼下がり　だって家の中見渡せば
てんこ盛りの洗濯物　終われば掃除機もかけなくちゃ
家事に追われ休みもない　今日の夕飯どうしよう？
「奥さん」って声をかけてくれるイケメンはTVの中

リゾート地に旅行行きたいなぁ
まぁそんな時間は無いから
hurray hurray 男 hurray hurray 女
帰ればビール　ご褒美のアイス
もう一踏ん張りさ

ほら腰を上げて　頬叩いて　気合い入れて
負けないで　きっと誰かは頑張りを見てるから
いつか歳をとって　シワも増えて　ガタがきても
明日からの自分達の笑顔の為　上を向くんだ

一区切りのお昼休み　でも学生にはまだまだ
午後の授業　部活　バイト
「うわ。この後苦手な教科や～ん↓↓」
卒業して待ち受けてる　就活の波に揉まれて
現実逃避　どこかに一億円落ちてないかな

ゆっくり時間流れないかなぁ
まぁそんなのありえないから
hurray hurray 男 hurray hurray 女
ツレとファミレス　カラオケで発散
もう一頑張りさ

ほら胸を張って　頬叩いて　気合入れて
逃げないで　きっとこの先良い事待ってるから
いつか歳重ねて　デッカイ夢　心に決めて
輝いてる自分達の将来の為　前を向くんだ

仕事　学校　早起き辛い
なんだかんだ帰りも遅い

家に着くなりベッド　バッタンキュー
電話かけた相手にwussup？(fu-！！)
携帯と共に自分充電中
お腹がぐぅ～。そのまま(-_-)zzZ　頑張れ You-!!!!!!!

沈んだ太陽がまた昇る
時計の針は待ってはくれないぜ

さぁ笑っていこう　進んでいこう　一人じゃないよ
たまにはほら　自分にも伝えよう「お疲れ様。」
そんな一言でも不思議と力湧いてくるさ
僕たちの　私たちの　未来の為　闘うんだ
う～～～よっしゃー!!!!!!!＼(^o^)／`},{id:156,title:"TRICKSTER",titleKana:"TRICKSTER",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",performances:["TO BE KANSAI COLOR-翔べ関西から-(大阪){7}"],singer:"WEST.",date:"2021-03-17",lyrics:`安定志向集え似た者同士
ってもういい大人だし NGは無し Ah
Hurry Hurry！！
後ろ詰まってる世代 Alright
Hurrah Hurrah！！
ガンガンいこうってな未来

スタートダッシュは
イマニでも心配すんな
キミが望むならこっちは味方だ
Hey！ Body Body
カラダ揺らせば意外
Fuhh！ Buddy Buddy
お隣さんも笑

冷やかしは好きじゃない(Yah Yah)
EVERYBODY　さあ声聞かせて(Yah Yah)
幕は何度開けたってイイんだ...
rrrrRock you！
Are you ready！？ ready！？ Go！！

Trickster Trickster Trickster
キミの　背中押すフィクサー
手を変え品を変え人知れず
キミと　夢描くマイスター
Yeeeeeees
I'm a TRICKSTER

I'm a TRICKSTER

クサイもんに蓋じゃ現実逃避
ぼたもち期待しちゃ　ご褒美は無し Ah
Do you understand？
そんなんわかってる世代
Hey, Do you wanna change？
おだやかじゃない未来

台詞忘れたムービースターも
ひとりぼっちのパーティー野郎も
大丈夫　まかせとけ
明けない夜はないよ
ないよ...ないよ...ないよ...

宴は好きでしょ！？(Yah Yah)
EVERYBODY　さあ手を掲げて(Yah Yah)
たまにゃ喉枯らしたってイイんだ...
rrrrRock you！
Are you ready！？ ready！？ Go！！

Trickster Trickster Trickster
キミの　背中押すフィクサー
手を変え品を変え人知れず
キミと　夢描くマイスター
Yeeeeeees
I'm a TRICKSTER

ツイてる？ツイてない？
頭でっかちじゃノックダウン
でも　バカみたいに笑えば
石ころもダイヤに変わるさ
最後はFeel nice
ハレルヤ Good vibes

I'm a TRICKSTER

全身全霊いつでも
キミをたきつけるファイヤー
心配すんな　一心同体
Are you ready！？ ready！？ Go！！

Trickster Trickster Trickster
キミの　背中押すフィクサー
手を変え品を変え人知れず
キミと　夢描くマイスター
Yeeeeeees
I'm a TRICKSTER
Wow wow wow
I'm a TRICKSTER

I'm a TRICKSTER
I'm a TRICKSTER`},{id:157,title:"DOKODA",titleKana:"DOKODA",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE",arranger:"MUTEKI DEAD SNAKE",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]","AWARD","AWARD[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2021-03-17",lyrics:`淳太は　淳太は　淳太は　淳太は
どこだ！？どこだ！？どこだ！？

淳太　じゅじゅじゅ淳太
じゅじゅじゅ淳太はどこだ

淳太　じゅじゅじゅ淳太
じゅじゅじゅ淳太

僕の唇は繊細だから
すぐに乾燥するから
1に保湿で2に保湿的な
Where's my Where's my リップクリーム

乾いた音に惹かれているから
ビートが呼んでいるから
いつでもリズムを刻みたいのさ
Where's my Where's my パチカ
Where's my Where's my パチカ

Come on baby！

リップは　リップは　リップは　リップは
どこだ！？どこだ！？どこだ！？どこだ！？
ここだ！！

パチカは　パチカは　パチカは　パチカは
どこだ！？どこだ！？どこだ！？どこだ！？
ここだ！！

そこか！

何のために生まれてきたのか？
美味い飯を食うためだろう
ラーメン・つけ麺(濃厚)蕎麦にうどん(あっさり)
どれでもいいから食べたい

すすれ！すすれ！

So come on！

ご飯は　ご飯は　ご飯は　ご飯は
どこだ！？どこだ！？どこだ！？どこだ！？
ここだ！！

探しものは　いつだって
意外と近くにあるものさ
代わりのきかない Essentials

淳太　じゅじゅじゅ淳太
じゅじゅじゅ淳太はどこだ

淳太　じゅじゅじゅ淳太
じゅじゅじゅ淳太

世界の平和を守りたいから
ヒーローになりたいから
今すぐ僕が救いに行かなきゃ
Where's my Where's my ゲーム機

たくましい筋肉が欲しいから
パンプアップ中だから
自重だけでは物足りないのさ
Where's my Where's my ダンベル
Where's my Where's my ダンベル

ダブルバイセップス…

ゲーム機は　ゲーム機は　ゲーム機は　ゲーム機は
どこだ！？どこだ！？どこだ！？どこだ！？
ここだ！！

かいしんのいちげき！

ダンベルは　ダンベルは　ダンベルは　ダンベルは
どこだ！？どこだ！？どこだ！？どこだ！？
ここだ！！

探せ！

前代未聞のなで肩には
ボディコンスーツも敵わない
大量に肩パッド(日本中)持ってこい(品薄に)
一枚だけじゃ足りない

もっと！もっと！

もっともっともっともっと！

肩　肩　肩　肩　肩　肩　肩　肩
どこだ！？どこだ！？どこだ！？どこだ！？
ここだ！！

ここに　ここにあったはずなのに
いざと言うときに見つからない
もしかして　神隠し？

誰にだって　あるだろう
さりげなくて大事なものが
人それぞれの Essentials

どこだ！？

七つの　七つの　七つの　七つの
必需品！！

俺はモノじゃない`},{id:158,title:"We Can!!",titleKana:"We Can!!",lyricist:"Komei Kobayashi",composer:"MiNE・Atsushi Shimada・坂室賢一",arranger:"CHOKKAKU",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",performances:["rainboW(北海道){3}","rainboW(宮城,愛知,新潟,埼玉,熊本){3}","rainboW(円盤){3}","WEST. 10th Anniversary 大阪松竹座公演(昼){1}","WEST. 10th Anniversary 大阪松竹座公演(夜){1}","WEST. 10th Anniversary 大阪松竹座公演(千穐楽){1}"],singer:"WEST.",date:"2021-03-17",lyrics:`気が付けば　長い道のり
僕たちはこんなとこまで来れた
そばに君がいてくれたから　Baby

山あり谷あり、そんな日々を
また今日も僕らは生きている
知らない道でも怖くない
君が笑うから　I can smile
Smile, Smile. Smile

いつまでも
君のすぐの隣
ずっといさせてよ　そばに
そこに君がいれば
We can make it
いつかの夢の続き
誰より君と見たい
僕らの未来へ
Gotta go, Gotta go. We can make it

離さないで
信じていて
忘れないで
We can make it
僕らの生きてく日々
まだまだ終わりは無い
足跡並べて
Gotta go, Gotta go. We can make it

「僕たちが　出会えた奇跡」
なんて言えば　君はまた笑うかな？
理屈じゃ説明出来ないモノ　Baby

晴れ渡る朝も雨の夜も
幸せと呼べる気がしてるよ
無駄なことなんて一つも無い
つまずいてもまた We can try
Try, Try, Try

いつまでも
僕のすぐの隣
離れずいてよ　そばに
ここに君がいれば
We can make it
開いた扉の先
変わらず君といたい
新たな時代へ
Gotta go, Gotta go. We can make it

離さないで
信じていて
忘れないで
We can make it
僕らの生きてく日々
まだまだ終わりは無い
足跡並べて
Gotta go, Gotta go. We can make it

この街の景色は　今日も　すぐに　変わりゆくけれど
変わらないモノなら　いつも　ここにあること　分かるから
もう迷わない

いつまでも
君のすぐの隣
ずっといさせてよ　そばに
そこに君がいれば
We can make it
いつかの夢の続き
誰より君と見たい
僕らの未来へ
Gotta go, Gotta go. We can make it

離さないで
信じていて
忘れないで
We can make it
僕らの生きてく日々
まだまだ終わりは無い
足跡並べて
Gotta go, Gotta go. We can make it`},{id:159,title:"Paradise",titleKana:"Paradise",lyricist:"milet",composer:"Andreas Oberg・Adrian McKinnon・Christoffer Semelius",arranger:"Christoffer Semelius・Andreas Oberg",album:["rainboW","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",performances:["rainboW(北海道){18}","rainboW(宮城,愛知,新潟,埼玉,熊本){18}","rainboW(円盤){18}","SPECIAL LIVE(サムシング・ニュー[初回B]){4}","WEST. 10th Anniversary Live “W”{11}","WEST. 10th Anniversary Live “W”-Film edition-{11}"],singer:"WEST.",date:"2021-03-17",lyrics:`Moonlight, why are you so shy？
I just wanna know you more

Yah, you're right
I'm getting so high
Maybe your kiss would calm me down

24 hours
Can I be your lover？
Give me a chance
Not a boy anymore

You say I'm too young to love ya
But I'll never ever let you down, my girl

Baby rose on the floor
I don't wanna be your secret anymore no
Let me bloom inside your heart

Come on I've found my paradise
And tonight we're gonna come alive
So just try me once or twice
Can't you see？ I'm already yours

Believe in me
Suffocate me, fascinate me,
love me, taste me
Wrap me 'round your little finger

I've found my paradise
Am I the only one who falls in love？

I've been out of control
You're still cracking my code
But I like it
Your lips were like
I won't leave you alone
So I'm writing this song
Let me know when you're ready to go

24 hours
Can I be your lover？
Give me a chance
Not a boy anymore, no

Lights off
If you stay up all night
No, I'll never ever let you down, my girl

Every inch of your soul
It's way deeper than the heaven's ocean, no lie
Let me bloom inside your heart

Come on I've found my paradise
It's outside of the paradigm
So just try me once or twice
Can't you see？I'm already yours

Believe in me
Suffocate me, fascinate me,
love me, taste me
Wrap me 'round your little finger

I've found my paradise
Am I the only one who falls in love？

I will never be the same
'Cause I found you, paradise
Ain't nobody here but you and me

Callin' out my name
Overwriting our memories
Feel you in my veins
I miss you, need you more than ever
Now do it slow
I'ma give you everything you want

Just say you love me
Say you want me
'Cause you've opened up my door

Come on I've found my paradise
And tonight we're gonna come alive
So just try me once or twice
Can't you see？ I'm already yours

Believe in me
Suffocate me, fascinate me,
love me, taste me
Wrap me 'round your little finger

I've found my paradise
I'm not the only one who falls in love

Yah baby, you're my paradise
How did I ever live, ever live without you？
We're gonna come alive together

I'm not the only one who falls in...`},{id:160,title:"Rainbow Chaser",titleKana:"Rainbow Chaser",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",performances:["rainboW(北海道){29}","rainboW(宮城,愛知,新潟,埼玉,熊本){29}","rainboW(円盤){29}","7周年生配信イベント「虹会」{3}","10周年生配信トーク＆ライブ「虹会」{7}"],singer:"WEST.",date:"2021-03-17",lyrics:`誰かに聞いて欲しくて
誰かに気付いて欲しくて
今日も歌い続けんだ

それでもまだ足りなくて
時間も待ってくれなくて
遠くの空見上げた

掴めない未来も
ちゃんと見えているんだ
雨上がり　光が弧を描く

バカにされたって　笑われたって
手を伸ばした　キミはRainbow Chaser
もう　逃げ出したくて　泣き出したくて
でも歩き続けんだ

代わりなどいないピカソみたいに
七色の世界　塗りかえよう
声にして言おう　好きは好きでいい
Oh We're The Rainbow Chaser

わからなかった…
プライドが邪魔だと知った
ぐっと　飲み込んだ　過去
行き場のない理想　自由を忘れた現実
そうさ　遠回りしたっていい

書きかけた譜面と　終わらないHarmony
描いてた音がまだ　鳴らなくても

思い出せ
その痛みも　その苦しみも
見えない明日を　照らすプリズム
胸を張れ
そうさ誰もが　噛みしめるのさ
喜びも　悲しみも
耳をすませ
導く声に　気づけるはずさ

バカにされたって　笑われたって
手を伸ばした　キミはRainbow Chaser
もう　逃げ出したくて　泣き出したくて

そう　追いつきたくて　追い越せなくて
此処まできたんだ
まだ　答えはなくて　でも信じたくて
We're The Rainbow Chaser

代わりなどいないピカソみたいに
七色の世界　塗りかえよう
声にして言おう　好きは好きでいい
Oh We're The Rainbow Chaser

Walkin' In The Rainbow
Walkin' In The Rainbow
Lalala
We're The Rainbow Chaser

Walkin' In The Rainbow
Walkin' In The Rainbow
Lalala
We're The Rainbow Chaser`},{id:161,title:"Big Dipper",titleKana:"Big Dipper",lyricist:"D&H",composer:"Jan Baars・Rajan Muse・Ronnie Icon",arranger:"Jan Baars・Rajan Muse・Ronnie Icon",album:["rainboW","rainboW[初回A]"],announce:"t",performances:["rainboW(北海道){1}","rainboW(宮城,愛知,新潟,埼玉,熊本){1}","rainboW(円盤){1}"],singer:"WEST.",date:"2021-03-17",lyrics:`It's alright
変わらずに Unconditional love at first sight
あの日のままの Galaxy so bright
夢で描いた　星の数くらい
We gotta fill this love
We gotta fill this love

二人の Flame
燃やして We're shooting stars
Looking so amazing
奇跡という火が　道をLight it
(Light it up light it up)
ひとつにつないで

いつだって I'm your satellite
輝く You are my sign of light
この想いに Click Trigger Trigger
To the shiny Big Dipper Dipper
幾千の星が Spotlight
僕らに向けて
迷わず Click Trigger Trigger
To the shiny Big Dipper Dipper

Let't put the lights up
気づかれるように Keep the lights on
光と愛が満たされるように
Betするなら▽にAll in
無限大
願ってたあの星も Blessing us burning
抱きしめて強くなるメテオのように
You are my destiny
行く先はGalaxy
燃料は Love, my energy
Cause you are next to me

このまま Flying
目を逸らさずに To the sky
Feeling so amazing
二人の軌跡が　心をLight it
(Light it up light it up)
ひとつにつないで

いつだって I'm your satellite
輝く You are my sign of light
この想いに Click Trigger Trigger
To the shiny Big Dipper Dipper
幾千の星が Spotlight
僕らに向けて
迷わず Click Trigger Trigger
To the shiny Big Dipper Dipper

今の想いで Stargazing
Look up and imagine
未完成の星をつないで　君にたどり着く
Milky Wayを Light up
Miss you
Almost there, on my way

溢れ出すこの Feelまま
振り向かず More
もっと伝えるんだ
Let's feel this vibe
It's alright　怖くはないんだ
果てしない　この Journey の Answer is you

いつだって I'm your satellite
輝く You are my sign of light
この想いに Click Trigger Trigger
To the shiny Big Dipper Dipper

いつだって I'm your satellite
輝く You are my sign of light
この想いに Click Trigger Trigger
To the shiny Big Dipper Dipper
幾千の星が Spotlight
僕らに向けて
迷わず Click Trigger Trigger
To the shiny Big Dipper Dipper`},{id:162,title:"革新論理",titleKana:"かくしんろんり",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE",arranger:"鈴木雅也",album:["rainboW","rainboW[初回A]","AWARD","AWARD[通常盤]"],announce:"t",performances:["rainboW(北海道){19}","rainboW(宮城,愛知,新潟,埼玉,熊本){19}","rainboW(円盤){19}","WEST. 10th Anniversary 大阪松竹座公演(昼){3}","WEST. 10th Anniversary 大阪松竹座公演(夜){3}","WEST. 10th Anniversary 大阪松竹座公演(千穐楽){3}"],singer:"WEST.",date:"2021-03-17",lyrics:`貼り付けられたレッテル
決めつけないで
未来(あす)のポシビリティー
その目を離した隙に変わってゆくんだろ
時代も人も全部

懐かしい日々　語り合うのも
別に悪いことじゃないけど
ねぇ？
見てよ最新版

Oh
革新論理
1秒後にどうなってるかわからない
こんな世界に僕ら生きているんだ
Oh baby
寄り添ったって　噛み付いたって
100点なんか取れやしない
ずっと今を正解にしていくんだ
だったらいっそ　大胆に更新
人の目ばっか　気にしてもしゃあないし

書き殴られた声明
目を逸らしても消えないディスプレイ
「そんなに悪いことかい？」
無邪気な表情で問いかけてくる

安心感にすがってばかり
別にまあどうでもいいけど
ねぇ？
邪魔はしないで

Oh
革新論理
1秒後にどうなってるかわからない
こんな世界に僕ら生きているんだ
Oh baby
賛否両論　飛び交う論争
どれを選んでもそうでしょ？
そんで　現状維持は実質退化
何回だって　大胆に更新
諸行無常が　きっとこの世の心理

止まれない　止まれない　どうしても
一体何に追われてる？
答えもあやふやなままに
生きるとは　変わり続けることだ
Update only　止まらない

Oh
革新論理
1秒後にどうなってるかわからない
こんな世界に僕ら生きているんだ
Oh baby
寄り添ったって　噛み付いたって
100点なんか取れやしない
ずっと今を正解にしていくんだ
だったらいっそ　大胆に更新
人の目ばっか　気にしてもしゃあないし

繰り返しばっか　退屈なんだ
いつだって　刺激を欲しがってるんだ
何回だって　大胆に更新
諸行無常が　きっとこの世の心理`},{id:163,title:"サラリーマンの父さん",titleKana:"さらりーまんのとうさん",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"CHOKKAKU",album:["rainboW","rainboW[初回B]"],announce:"t",performances:["rainboW(北海道){16}","rainboW(宮城,愛知,新潟,埼玉,熊本){16}","rainboW(円盤){16}"],singer:"重岡大毅",date:"2021-03-17",lyrics:`笑顔とため息が
混じり出した近頃の誕生日
へこんだ缶コーヒーも
空のまんま　しゃんとしなくちゃ

責任の肌触りを
繰り返す日々の意味を
何より誰かの為に生きる
難しさを

赤いちゃんちゃんこ着せられ照れて笑う
あなたの背中思い出す
世界一だなんてことない　金持ちって程でも無いけど
スーパーマンも勝てない　サラリーマンの父さん
赤ん坊の僕を抱きしめた
いつかの背中思ってる
あなたの覚悟がこの僕だから
泣かない　負けない　サラリーマンの父さん

あなたと僕が
重なり出したこの頃の日曜日
鳴らない目覚ましと
置いたまんま枕元のメガネ

あの日ブチ切れられた僕を
下手くそ風の吹き回しで
赤と青のグローブ　キャッチボール
楽しかったなぁ

タイガースが負けてボヤいてたリビング
街頭照らす　パジャマタバコの影
ボロボロになったガラケー
何だって知ってる
母さん怒らせる天才だよな　父さん

鼻で笑う　もう歳だと
助手席　ぬるい風のエアコン
生まれて死ぬまで　僕はあなたの息子だからな

赤いちゃんちゃんこ着せられ照れて笑う
あなたの背中追いかける
何年何十年　会社に向かう
幸せ背負った　サラリーマンの父さん
親孝行って何ができるだろう
俺もゴルフ始めようかな
照れ笑いも似てきた　誇らしく思うよ
あなたの人生　サラリーマンの父さん
憧れの父さん　僕だけの父さん`},{id:164,title:"「かなさんどー」",titleKana:"かなさんどー",lyricist:"桐山照史",composer:"桐山照史",arranger:"生田真心",album:["rainboW","rainboW[初回B]"],announce:"t",performances:["rainboW(北海道){15}","rainboW(宮城,愛知,新潟,埼玉,熊本){15}","rainboW(円盤){15}"],singer:"桐山照史",date:"2021-03-17",lyrics:`アラームより2時間早く　目覚めた緊張しぃの僕
今日はビシッ！と伝えると　鏡の僕と約束

新しく買った服を着て　嬉しそうに向かう足音
同じ気持ちですか？　あなたは？

いつもの砂浜座り　唄う青い空と　共に
小さく　海うさぎ飛び跳ねて　笑おう
拗ねると　すぐ涙する　そんな全てが愛しくて
何気ないこの時間求めて　あなたへ
この声を

出逢ったあの日の匂いも　ゆったりした話し方も
今鮮やかに思い出す　あなたは？

いつもの砂浜座り　唄うオレンジ空　共に
1番好きなこの場所で　あなたと
アリ　カンパイ！

いつもの砂浜座り　唄う月明かりと　共に
眠りに　つく夜凪　見つめて　笑おう
拗ねると　すぐ涙する　そんな全て愛しくて
何気ない　この時間求めて　あなたへ
何気ない　この時間求めて　あなたへ
この歌を

いつかは　隣で2人　あなたに会える日を`},{id:165,title:"“Pinocchio”",titleKana:"Pinocchio",lyricist:"中間淳太",composer:"GRP",arranger:"GRP",album:["rainboW","rainboW[初回B]"],announce:"t",performances:["rainboW(北海道){9}","rainboW(宮城,愛知,新潟,埼玉,熊本){9}","rainboW(円盤){9}"],singer:"中間淳太",date:"2021-03-17",lyrics:`はじめて会ったその時　ボクの心は奪われた
今すぐキミに近づきたい
はやる気持ちを抑え　忍び足
繋がった糸が　絡まないようにね

やっと夢が叶ったんだ
今じゃボクの隣で　キミが笑っている

「あなただけ」
腕の中　キミの言葉　そっと耳をなぞった
「アナタだけ」
そうボクも頷いた
幸せな時間　鼻高々
今日もボクは　鼻高々

はじめて会ったその時　僕の心が奪われた
それがはじめての恋だった
ドキドキがバレないよう　忍び足
繋がった糸が　絡まないようにね

でもそれもバレてたんだ
今じゃヘタだったねと　ボクも笑ってしまう

「あなただけ」
星の瞬いた夜に　僕は君に誓った
「アナタだけ」
そう君も頷いた
腕の中　見えた　鼻高々

やっとの思いで掴んだ　ひとつだけの運命
辿った先で　たくさんの糸を手に踊る君が　僕に微笑んだ

その姿に　心を奪われたんだ
ねえ見てよ　今じゃボクの方が上手に踊れるよ

「あなただけ」
星も眠りだした夜に　キミと僕が重なった
「アナタだけ」
そう2人頷いた
…幸せな時間

「あなただけ」
僕は君に誓った
「あなただけ」
…シアワセな時間　鼻高々
今日もボクは　鼻高々`},{id:166,title:"KNOCK OUT",titleKana:"KNOCK OUT",lyricist:"神山智洋",composer:"神山智洋",arranger:"KNOCK OUT MONKEY",album:["rainboW","rainboW[初回B]"],announce:"t",performances:["rainboW(北海道){8}","rainboW(宮城,愛知,新潟,埼玉,熊本){8}","rainboW(円盤){8}"],singer:"神山智洋",date:"2021-03-17",lyrics:`ただでさえ生き辛い世の中
ひたすら鞭打って騙し騙しそーやって生きてる
メーター振り切りキャパオーバー？
なら本音をぶち撒けろ

ロボットじゃねぇ　着せ替え人形でもねぇ
勝手に私物化してんじゃねぇ
意志を持つ人間だ
何かに染まってたまるかってんだ

嘘ついて自分を曲げんのはゴメンだ
進む道ぐらい選んでもいいだろ

いつどーなるかもわからない人生　一度きりだぞ？
誰でもない　主役は自分だ
バカにされたって　はみ出したっていい　笑い飛ばしてこうぜ
降りかかる全て擦り傷だって
まだまだこれから　無我夢中にやりたいようにやれ

Say hello！！
応答せよ　答えなき迷路　右それとも左　ほら選べよ
“でも”や“けど”の言い訳を並べてもただのPierrot
信号はYellowでも止まれねぇよ　白黒つけろ
押し付けられるEgoに出せベロ　鳴らせよ爆音でStereo
Three Two One Zero　さぁ Let's go　伸ばせ手を！！

過去は足枷じゃない　糧にするもんだ
己の物差しだけで測るな
やる前から無理とか言って逃げても変われねえぞ

比べたりすんな　二度と逃げんな
未熟でも俺たちには　一歩踏み出す力があるんだ
思い返して後悔がなけりゃ万々歳さ
きっといつか実を結ぶ　そう信じて
やるだけやるのさ　我武者羅に生き抜いてやれ`},{id:167,title:"FLOWER OF ROMANCE",titleKana:"FLOWER OF ROMANCE",lyricist:"REO・GOMESS",composer:"LEO",arranger:"ALI",album:["rainboW","rainboW[初回B]"],announce:"t",performances:["rainboW(北海道){20}","rainboW(宮城,愛知,新潟,埼玉,熊本){20}","rainboW(円盤){20}"],singer:"藤井流星",date:"2021-03-17",lyrics:`かわりがわりひかり弾けた
孤独な午後の太陽
危ない色気に目くらみ始めて
孤独が僕に合わさる

ゆらりゆらり
糸を落ちる
顔の無い自分に息詰まる
またもう一回　またもう一回
叶うならごめんと、笑って言いたい

破(わ)れた硝子のハートは
もう砕け散ってバラバラさ
欠片を拾い　繋ぎ直しても
同じ形には戻らなかったね
古くなったチーズ
捨ててしまえばいいのに　飾ってる
解ってるのにまだ
腐ってないからって　馬鹿だろ？
ああ　これじゃまた叱られそうだ

いつからだっけか　僕は君を愛してた
なのに運命は残酷だな
君はもういないのに
君なしの僕に戻れないんだ
蒼天に星を探して祈る
ひとり抱きしめる想いは永遠に
暮れてゆくこんな世界でまだ
君を見つめていたいんだ

かわりがわり踊りはじめた
大袈裟な午後の陽炎
危ない色気に目くらみ始めて
痛みが僕に合わさる

ゆらりゆらり
糸を落ちる
顔の無い自分に息詰まる
またもう一回　またもう一回
叶うならごめんと、笑ってもいいかな

狂い
舞いたい
途方もない
抱きしめてよ、迷える涙
透明な記憶　留まらせて
永遠に近い　時の側で

ゆらりゆらり
糸を落ちる
顔の無い自分に息詰まる
またもう一度　またもう一度
また君に出会って　笑っていたい

かわりがわりひかり弾けた
孤独な午後の太陽
危ない色気に目くらみ始めて
痛みが僕に合わさる

ゆらりゆらり
糸を落ちる
顔の無い自分に息詰まる
またもう一回　またもう一回
また君に出会って　笑っていたい

もう一度、またもう一度

変わり映えない、あの空を

ひらりひらり
舞い落ちる
変わりゆく景色と、甘い香り
もう行かなきゃな　もう行かなくちゃ
神様に頼んで
また会える生命(とき)まで`},{id:168,title:"やさしいひと",titleKana:"やさしいひと",lyricist:"Blue Vintage",composer:"Blue Vintage・前田佑",arranger:"前田佑",album:["rainboW","rainboW[初回B]"],announce:"t",performances:["rainboW(北海道){10}","rainboW(宮城,愛知,新潟,埼玉,熊本){10}","rainboW(円盤){10}"],singer:"濵田崇裕",date:"2021-03-17",lyrics:`僕が知っているあなたは
自分のためよりも誰かのために
損得勘定とは無縁で
ホントに感心するばかり
顔を見るたびに体のことばかり
心配するもんだから
先に僕が答えてたよね

僕にもなれるかな
あなたみたいな人に
ハートを形どらない
角が立たない心模様
どこまでも大きくて
丸いそんな温もり
僕はあなたに出会えた

もらってばかりじゃいられない
甘えた分だけ返したいけど
できるのかな
今はまだわからないけど
喜びを誰かと分かち合い
僕もあなたのような　かわいい人に
なれるのかな
やさしいひとに

僕の知らないところで
あなたはきっと沢山の悲しみを
「涙の数だけ強くなれる」
って誰かが言ってたな
「自分らしく生きなさい」
とかけてくれたその声は何よりも
僕の背中を押してくれる

僕にもなれるかな
あなたみたいな人に
背中で語るような
愛を言葉にしなくたっても
どこまでも広くて
変わらない温もりに
僕はあなたに出会えた

もらってばかりじゃいられない
甘えた分だけ返したいけど
できるのかな
今はまだわからないけど
もらってきたものはそれ以上
僕もあなたのように　許せるように
なれるのかな
やさしいひとに

本当の優しさは
気づきにくいものさ
形のない贈り物
僕にもなれるかな
あなたみたいな人に
いつの日か届くように

もらってきたものを返したい
僕もそんな人であり続けたい
できるまでは
この笑顔絶やさないように
あげたもののお礼はいらない
僕もあなたのような　かわいい人に
なれるのかな
やさしいひとに

やさしいひとに`},{id:169,title:"B U S Y",titleKana:"BUSY",lyricist:"KOMU",composer:"KOMU・YU",arranger:"YU",album:["rainboW","rainboW[初回B]"],announce:"t",performances:["rainboW(北海道){21}","rainboW(宮城,愛知,新潟,埼玉,熊本){21}","rainboW(円盤){21}"],singer:"小瀧望",date:"2021-03-17",lyrics:`Just do it, Make it clap　Let's do it, like a dream
含羞んだ笑顔は Like a ice cream
Just do it, Make it bounce　Let's do it, like a freak
滑り込むソファで Once more, please

We'll make it burn (Shake it shake it shake your body)
You follow me (Go right now, give it up honey)
体中が次第に熱くなって
Let's keep the burn (Shake it shake it shake your body)
You're really sweet (Go low low give it honey)
隠さないで Affection

Yes, I'm busy　止まらない Desire
充たされるまで (Go lady　We gon' do this)
Yes, I'm busy　そう我儘でもいい
君のために (Just keep on moving　Uh yeah)
(Feel me all night long)　Hey！ make it bounce yeah！
(Trust me all night long)　さあ教えて
(Feel me all night long)　Hey！ make it bounce yeah！
(Trust me all night long)　Yeah

Just do it, Make it clap　Let's do it, like a dream
高まる感情は Make a scream
Just do it, Make it bounce　Let's do it, like a freak
窓に映る君は Look so sweet

We'll make it burn (Shake it shake it shake your body)
You follow me (Go right now, give it up honey)
体中が次第に熱くなって
Let's keep the burn (Shake it shake it shake your body)
You're really sweet (Go low low give it honey)
探らないで Addiction

Yes, I'm busy　終わらない Entire
夜が明けるまで (Go lady　We gon' do this)
Yes, I'm busy　そう好きにやればいい
君のために (Just keep on moving　Uh yeah)
(Feel me all night long)　Hey！ make it bounce yeah！
(Trust me all night long)　さあ答えて
(Feel me all night long)　Hey！ make it bounce yeah！
(Trust me all night long)　Yeah

Come on！ Wow yeah
本能の姿で　飽きが来るまで
My baby

Yes, I'm busy　止まらない Desire
充たされるまで (Go lady　We gon' do this)
Yes, I'm busy　そう我儘でもいい
君のために (Just keep on moving　Uh yeah)
Yes, I'm busy　終わらない Entire
夜が明けるまで (Go lady　We gon' do this)
Yes, I'm busy　そう好きにやればいい
君のために (Just keep on moving　Uh yeah)
(Feel me all night long)　Hey！ make it bounce yeah！
(Trust me all night long)　さあ答えて
(Feel me all night long)　Hey！ make it bounce yeah！
(Trust me all night long)　Yeah

Yes, I'm busy for you…`},{id:170,title:"サムシング・ニュー",titleKana:"さむしんぐ・にゅー",lyricist:"あいみょん",composer:"あいみょん",arranger:"ha-j",album:["サムシング・ニュー","サムシング・ニュー[初回A]","サムシング・ニュー[初回B]","サムシング・ニュー[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["rainboW(北海道){24}","rainboW(宮城,愛知,新潟,埼玉,熊本){24}","rainboW(円盤){24}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){31}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){31}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){31}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){31}","Mixed Juice(北海道オーラス){31}","TO BE KANSAI COLOR-翔べ関西から-(大阪){33}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){31}","TO BE KANSAI COLOR-翔べ関西から-(東京){29}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){29}","POWER(宮城){10}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){10}","POWER(愛知オーラス){10}","AWARD(大阪){7}","AWARD(新潟){7}","AWARD(宮城){7}","AWARD(愛知){7}","AWARD(横浜,静岡,福岡,広島,北海道){7}","AWARD(北海道オーラス){7}","DOME TOUR AWARD(大阪,福岡){9}","DOME TOUR AWARD(東京){9}","DOME TOUR AWARD(東京オーラス){9}","メトロック2022(大阪){6}","LOVE MUSIC FESTIVAL2022{13}","サマソニ2023(大阪,東京){6}","めざまし30周年フェス(東京){6}","CDTV ライブ！ ライブ！大感謝祭2024{1}","ファンクラブ限定動画(改名発表){1}","SPECIAL LIVE(サムシング・ニュー[初回B]){6}","7周年生配信イベント「虹会」{2}","8周年生配信トーク＆ライブ「虹会」{2}","WEST. 10th Anniversary Live “W”{19}","WEST. 10th Anniversary Live “W”-Film edition-{21}","WEST. 10th Anniversary 大阪松竹座公演(昼){4}"],singer:"WEST.",date:"2021-05-05",lyrics:`僕らは最強なんだぜ
さあ、進もうよ　姫

大興奮を最小限に落ち着かせ
何でもないフリをしてそのカードを手に取れ
僕らが望んでいた景色全部は
今日という日の為にあったのだ！

大名様もビリケンさんも味方に付け
何ちゃってヒーロー気分でその角を曲がれ
僕らの持つ羅針盤を頼りに
今日という日も乗り越えて行くのだ！

前方100メートル先に
小さな石ころが落ちています
大切な君を守るため
最後まで援護させてください

愛も闇も仕事も君も全部
この背中で戦ってみせるよ
限られた時で出会った人　そうさ
君がいれば
僕らは最強なんだぜ
さあ、進もうよ　姫

だんだん顔が曇ってく君を抱きしめたい
何でもないフリしてるけどやっぱり怖いんでしょ？
君が恐れている未来なんかは
今日限りでサヨナラしてあげる

後方50メートル先に
君を追いかけてきた人がいます
渡すものか！僕の好きな人
最後までこの手離さないよ

嘘も悪も涙も君も全部
この両手で鎮めてあげるよ
無限大の明日があるだろう　そして
君といれば
僕は強くなれるんだぜ
さあ、いざ行こうよ　姫

目の前に2人を引き裂く
敵が現れたとしても
僕らの持つ愛の経験値には
誰もが勝てないよ　進もう

愛も闇も仕事も君も全部
この背中で戦ってみせるよ
限られた時で出会った人　そうさ
君がいれば
僕らは最強なんだぜ
さあ、進もうよ　姫

大興奮で最高潮に幸せです
「愛してる」願いを込めて
このベールをめくる`},{id:171,title:"僕らの理由",titleKana:"ぼくらのりゆう",lyricist:"柳沢亮太(SUPER BEAVER)",composer:"柳沢亮太(SUPER BEAVER)",arranger:"柳沢亮太(SUPER BEAVER)",album:["サムシング・ニュー","サムシング・ニュー[初回A]","AWARD","AWARD[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){29}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){29}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){29}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){29}","Mixed Juice(北海道オーラス){29}","TO BE KANSAI COLOR-翔べ関西から-(大阪){31}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){29}","TO BE KANSAI COLOR-翔べ関西から-(東京){27}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){27}","POWER(宮城){1}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){1}","POWER(愛知オーラス){1}","AWARD(大阪){29}","AWARD(新潟){30}","AWARD(宮城){30}","メトロック2022(大阪){10}","LOVE MUSIC FESTIVAL2022{11}","サマソニ2023(大阪,東京){8}","めざまし30周年フェス(東京){7}","KOYABU SONIC2024{6}","メトロック2025(東京){10}","WEST. 10th Anniversary Live “W”{3}","WEST. 10th Anniversary Live “W”-Film edition-{3}"],singer:"WEST.",date:"2021-05-05",lyrics:`あなたという人の意味は　今日も僕が感じているから

一体何に怯んでしまったの　一体誰と比べてしまったの
あなたが何度　あなたを嫌っても　僕はあなたのことを嫌いになれないよ

一回くらい挫折をしたってさ　一生が失敗なわけないだろう
あなたの涙は　あなたゆえの涙で　きっとあなたの魅力の一つになるだろう

正解のない人生に　盛大な拍手が鳴った
手探りの日々に出会った　手応えはあなたの笑顔で
だからこそ僕は言うよ　何度も救われてるって
あなたが自分自身を　もし見失いかけても
あなたという人の意味は　今日も僕が感じているから
怯まないで　比べないで　あなたは今日もあなたのままでいいんだ

一体何に怯んでいたんだろう　一体誰と比べていたんだろう
僕が僕のこと　何度嫌になっても　あなたは好きだと言い続けてくれた

明日は良い日になるなんて　無責任には言えないよ
明日がどうなるかなんて　知れないから涙こぼれて
だからこそ僕は言うよ　何度もあなたへと言うよ
明日こそ良い日にしようって　もう自己嫌悪はやめよう
綺麗事くらい言おうぜ　願うなら口に出そうぜ
怯まないで　比べないで　僕らは今日も僕らのままでいいんだ

正解のない人生に　盛大な拍手が鳴った
手探りの日々に出会った　手応えはあなたの笑顔で
だからこそ僕は言うよ　何度もあなたへと言うよ
明日こそ良い日にしようって　もう自己嫌悪はやめよう

一回くらい挫折をしたってさ　一生が失敗なわけないだろう
あなたの涙は　あなたゆえの涙で　僕はあなたの魅力の一つだと思う　思うよ

正解のない人生に　盛大な拍手が鳴った
ありがとう僕にとって　歓びはあなたの笑顔で
だからこそ僕は言うよ　何度も救われてるって
あなたが自分自身を　もし見失いかけても
あなたという人の意味は　今日も僕が感じているから
怯まないで　比べないで　あなたは今日もあなたのままでいいんだ

あなたという人の意味を　今日も僕が感じていること
「明日こそ」を願い続ける理由だ`},{id:172,title:"#Followme",titleKana:"#Followme",lyricist:"D&H",composer:"Joshua Leung・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"AKIRA・Joshua Leung・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",album:["サムシング・ニュー","サムシング・ニュー[初回A]"],announce:"f",performances:[],singer:"WEST.",date:"2021-05-05",lyrics:`あの日 Babe　載せたSNS
覚えてるかな　気にしてるんだ
Honestly sayin'
ハマってる　ドラマを言い訳に
誤魔化してみたり
Oh

Ah　ハートもスキップしながら
気持ちがバレないような
絵文字だけ残して
Wating for your love

鬱陶しいぐらいの　Shine of smile
歩く時すら　君が浮かぶのさ
隠すのは終わりにして
(勇気出して　今すぐLike it)
今なら　Yes I'm ready

どっから話せば Baby
今日の君を Follow？　tell me
Wish I can
Hold you ayeyaiyaiya
一人写った写真より
僕らがメインの　Love Story
一緒に書こうよ　Time Line

ある日 Babe　投げたSNS
既読になった　気になってるんだ
Honestly sayin'
上がってる Postを言い訳に
話しかけたり
Oh

たまには返事返しも
気持ちがバレないように
少しだけ遅れて
Sending to you love

鬱陶しいぐらいの　Shine of smile
眠る時すら　君が浮かぶのさ
隠すのは終わりにして
(勇気出して　今すぐLike it)
今なら　Yes I'm ready

どっから話せば Baby
今日の君を Follow？　tell me
Wish I can
Kiss you ayeyaiyaiya
一人では見られない
僕らがメインの　Love Story
一緒に書こうよ　Time Line

(Time Line...Time Line...)
Ooh feel me.　not faraway
(Tonight...Tonight...)
小さな画面の
(Inside...Inside...)
(I feel in love...)
君に伝えるのさ
今なら　Yes I'm ready

どっから話せば Baby
今日の君を Follow？　tell me
Wish I can
Hold you ayeyaiyaiya
一人写った写真より
僕らがメインの　Love Story
一緒に書こうよ　Time Line

どっから Link したらいい？
今日こそ伝えたい
Wish I can
Kiss you ayeyaiyaiya
一人では見られない
僕らがメインのLove Story
一緒に書こうよ未来`},{id:173,title:"Don't Stop Loving",titleKana:"Don't Stop Loving",lyricist:"Kanata Okajima",composer:"Josef Melin",arranger:"Josef Melin・久保田真悟(Jazzin'park)",album:["サムシング・ニュー","サムシング・ニュー[初回B]"],announce:"t",performances:["TO BE KANSAI COLOR-翔べ関西から-(大阪){10}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){10}","TO BE KANSAI COLOR-翔べ関西から-(東京){10}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){10}","SPECIAL LIVE(サムシング・ニュー[初回B]){1}"],singer:"WEST.",date:"2021-05-05",lyrics:`What's the time？
ヤバい　忘れちゃうくらい
Feelin' so good な Day
いいんじゃない？
君と僕とで Fantasy
ハプニングも All okay

楽しんでいこう Everybody
Bangin' da beat　朝まで
だいぶ　釘付け
Nobody but you

You & I
見つめ合ってるだけで
途端にフリーフォールライド

髪が揺れる度
眩しい夢の中
Drowsing, drowsing
心のまま Ride on
さあ　飛び込もう

Do lu tu tu lu
Don't stop loving
愛を歌おう
Do lu tu tu lu
Don't you worry
好きに踊ればイイ
信じてみようよ　もっと This love
Do lu tu tu lu
Don't stop loving tonight
Do lu tu tu lu tu

Every time
変化してくスピードに
戸惑うけど
Feel so right
Hands up で It'll be alright
身を任せて

楽しんでいこう Everybody
Bangin' da beat　朝まで
だいぶ　釘付け
Nobody but you

You & I
気づけば子供みたい
Can't stop laughing all night

時にはスベテを
忘れたくもなるね
I can hear you
次はどんな Move で
アガってこう？

Do lu tu tu lu
Don't stop loving
愛を歌おう
Do lu tu tu lu
Don't you worry
好きに踊ればイイ
信じてみようよ　もっと This love
Do lu tu tu lu
Don't stop loving tonight
Do lu tu tu lu tu

Up and down and up　綺麗だね
Right and left and you　思ったより
すべては So　シンプルかも

Do lu tu tu lu
Don't stop loving
愛を歌おう
Do lu tu tu lu
Don't you worry
好きに踊ればイイ
信じてみようよ　もっと
This love
Do lu tu tu lu
Don't stop loving tonight
Do lu tu tu lu tu

愛を歌おう　Don't stop your love！
愛と踊ろう　Don't stop our love！
愛を歌おう　Don't stop your love！
Don't stop tonight
Do lu tu tu lu tu`},{id:174,title:"君のために歌わせて",titleKana:"きみのためにうたわせて",lyricist:"ONIGASHIMA",composer:"Peter Nord・川口進",arranger:"Peter Nord",album:["サムシング・ニュー","サムシング・ニュー[初回B]"],announce:"f",performances:[],singer:"WEST.",date:"2021-05-05",lyrics:`Yeah… Wow…
君のために歌わせて
Yeah…

迷ったって　悩んだって　歩いて来れた　君と僕ら
その声が　君の手が　この背中押していた
泣いて　弱音吐いて　負けそうな日も僕たちなら
止められない　止められない
いつも前だけを見ていた

行こう　さぁ、行こう　明日へ進もう
この道を照らしてる　Your smile
きっと　そうきっと　おそれるものはない
目指してく　あの未来

君へ　この歌が　この歌が　そっと
届くまで　届くまで　もっと
聴こえるかな？
Everyday, Everynight
We are singing for you
声が　枯れるまで　枯れるまで　ずっと
歌うから　歌うから　きっと
いつまでも
Everyday, Everynight
We are singing for you

Wow… Yeah…
Wow… Yeah…
どんな時だって
Everyday, Everynight
We are singing for you

Yeah… Wow… Yeah…

叫んだって　泣いてたって　日は昇ってくる　東の空
悲しさも　悔しさも　僕たちを強くした
最低　だけど最高　悔やんだ過去も誇れるから
もう逃げない　もう逃げない
明日が来ると信じてた

行こう　さぁ、行こう　最後に笑おう
この先へ続いてく　One way
もっと　そうもっと　輝く景色を
まだ君と見ていたい

君が　すぐそばで　すぐそばで　そっと
笑うから　笑うから　きっと
辿り着けた
Everyday, Everynight
We are singing for you
僕ら　この先へ　この先へ　ずっと
進んでく　進んでく　もっと
いつだって
Everyday, Everynight
We are singing for you

星のない　暗い夜だって
君となら　笑い合えた
だからこれからも　君のすぐそばで　歌うだけ

君へ　この歌が　この歌が　そっと
届くまで　届くまで　もっと
聴こえるかな？
Everyday, Everynight
We are singing for you
声が　枯れるまで　枯れるまで　ずっと
歌うから　歌うから　きっと
いつまでも
Everyday, Everynight
We are singing for you

Wow… Yeah…
Wow… Yeah…
どんな時だって
Everyday, Everynight
We are singing for you

Yeah… Wow… Yeah…

君のために歌わせて`},{id:175,title:"ムーンライト",titleKana:"むーんらいと",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["サムシング・ニュー","サムシング・ニュー[通常盤]","AWARD","AWARD[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){30}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){30}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){30}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){30}","Mixed Juice(北海道オーラス){30}","TO BE KANSAI COLOR-翔べ関西から-(大阪){32}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){30}","TO BE KANSAI COLOR-翔べ関西から-(東京){28}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){28}","POWER(宮城){31}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){30}","POWER(愛知オーラス){30}","AWARD(大阪){25}","AWARD(新潟){26}","AWARD(宮城){26}","AWARD(愛知){26}","AWARD(横浜,静岡,福岡,広島,北海道){26}","AWARD(北海道オーラス){26}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){23}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){23}","メトロック2022(大阪){11}","LOVE MUSIC FESTIVAL2022{12}","サマソニ2023(大阪,東京){9}","めざまし30周年フェス(東京){8}","メトロック2024(東京){7}","サマソニ2024(大阪,東京){9}","a-nation2024{7}","KOYABU SONIC2024{7}","CDTV ライブ！ ライブ！大感謝祭2024{7}","CDTV ライブ！ ライブ！春の大感謝祭2025{8}","メトロック2025(東京){11}"],singer:"WEST.",date:"2021-05-05",lyrics:`手を突っ込めばポケットの中　宇宙行きチケット
縁石に乗り込み青空へ　やじろべぇしよう

真昼間の月に僕は種を植えに行くんだ
誰も見ちゃいないし　見たこともない
花を咲かそう

どこまで行こうか　まだ何も決めたくないな
どこまでも行けそうな気がしてさ　Not yet
知らない明日へセイグッバイ
今だけは歌ってたいや
ここだけの話をしよう
世界が止まっても　僕は止まりゃしないんだ

少年たちがいた
あの頃の僕らだ
季節外れのTシャツで
何だって出来るって　そう思えたっけ

真昼間の月に種を植えてみたくなったのは
いつか君を襲う夜の底　一輪の光を

どこまで行こうか　まだ何も決めたくないな
どこまでも行けそうな気がしてさ　Not yet
知らない明日へセイグッバイ
今だけは歌ってたいや
ここだけの話をしよう
世界が終わっても　君を終わらせないんだ
Not yet`},{id:176,title:"Tomorrow",titleKana:"Tomorrow",lyricist:"神山智洋",composer:"神山智洋",arranger:"akkin",album:["サムシング・ニュー","サムシング・ニュー[通常盤]"],announce:"t",performances:["DOME TOUR AWARD(東京オーラス){44}"],singer:"WEST.",date:"2021-05-05",lyrics:`どこまでも続く人生(みち)
パズルのピース合わせるように
出会い別れ　繰り返し　貴方と出逢った

触れることで傷つけたり
離れることで守れたり
忘れないで　一人じゃない
心を繋ごう

全てが当たり前じゃないから　大切を胸に刻もう
見たことない景色を共に見よう
輝く未来　待っているから

広い空の下で共に　同じ時を過ごし生きてる
笑えなくていい　泣けなくてもいい
そこに　ここに　貴方が居ることに意味があるんだ
辛いことも笑って話せる　そんな日々がやってくるさ
下手くそでも言葉を紡ぐよ
「生まれてきてくれてありがとう。」

明日は何が待ってるかな？　嬉しいこと　悲しいこと
教えてよ　些細なことも　何でも話そう

想いやる心持ち寄って　支え合って越えていこう
雨に濡れ　風に吹かれ　雪に凍えても　いつか必ず晴れるからさ

分かち合った時間や記憶は　色褪せない　嘘じゃない
負けないよ　逃げたりしないよ　強くなれるよ
貴方が居れば

容赦なく降りかかる苦難はこれからもあるでしょう
弱くなることもあるけどその時は　優しい瞳で見守っていて

孤独なTonight　後悔しても振り返らない　Never lie
隠さないで不安の Sign　不甲斐ないけど約束さ　Make you smile
You & I　大切な存在　その先にある未来が　Shine a light
曖昧なことは言わない　辛いことから守りたい　I won't say goodbye

正解がわからなくても　手探りでも生きてゆく
何かを失って　また何かを欲しがって
泣いて傷ついて躓きながらも共に進んでくんだ
頼りなかったあの日からは少しは強くなっているよな
信じてるから信じて欲しいんだ
「貴方に出逢えてよかった。」

きっと虹が架かるから
必ずやってくる　奇跡を信じて
昨日も今日も越えて　迎えに行こう
明日を`},{id:177,title:"Automatic",titleKana:"Automatic",lyricist:"JUN",composer:"Andy Love・dBoi!",arranger:"dBoi!",album:["サムシング・ニュー","サムシング・ニュー[通常盤]"],announce:"t",performances:["WEST. 10th Anniversary 大阪松竹座公演(昼){2}","WEST. 10th Anniversary 大阪松竹座公演(夜){2}","WEST. 10th Anniversary 大阪松竹座公演(千穐楽){2}"],singer:"WEST.",date:"2021-05-05",lyrics:`Oh that's right
You and me, we could do it all right

Hey Girl
気が狂いそう
君は絵に描いた理想
全てが　You're my perfect beauty
Border Line
飛び越えちゃってさ
いわゆる君の何かにはなれないかな

どんな風に振り向かせるかは今　Let me do　Let me do
これがいいんでしょ？
刺激的にアイツよりもスマートに　Let me do　Let me do
Yeah　そんな　Love so hot

Baby Give me your kiss
ここから先は
Automatic Automatic
Automatic Automatic
Baby　あとはもう
ヤメられないよ
Automatic Automatic
Automatic Automatic

マニュアル通りの攻略法
では出せないもっと気持ちがいい方
今演じてる良い子
気づけば欲しがる君は虜

饒舌にもなるよ　Do it one more time
下から上に　You know

どんな風に躍らせてあげるかは　Let me do　Let me do
これがいいんでしょ？
時に甘く、戻れなくなるくらいに　Let me do　Let me do
Yeah　俺の　Love so hot

Baby　走る Beat
早まる鼓動
Automatic Automatic
Automatic Automatic
Baby　何度もリピートしたくもなるよ
Automatic Automatic
Automatic Automatic

火花が散る　鮮やかな夜
花を咲かす Lady
目と目が合う　流れるままに
全てが Automatic

Baby Give me your kiss
ここから先は
Automatic Automatic
Automatic Automatic
Baby　あとはもう
ヤメられないよ
Automatic Automatic
Automatic Automatic`},{id:178,title:"でっかい愛",titleKana:"でっかいあい",lyricist:"岩越涼大・村野直球・栗原暁(Jazzin'park)",composer:"岩越涼大",arranger:"ha-j",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回A]","でっかい愛/喜努愛楽[初回B]","でっかい愛/喜努愛楽[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){12}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){12}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){12}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){12}","Mixed Juice(北海道オーラス){12}","TO BE KANSAI COLOR-翔べ関西から-(大阪){18}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){17}","TO BE KANSAI COLOR-翔べ関西から-(東京){18}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){18}","DOME TOUR AWARD(大阪,福岡){28}","DOME TOUR AWARD(東京){29}","DOME TOUR AWARD(東京オーラス){29}"],singer:"WEST.",date:"2021-07-28",tiup:"TSB系ドラマ『#家族募集します』主題歌",lyrics:`好きな明日を見つけにいこうか
どんな君も僕が抱きしめるから

パーカーのフード握りしめ
慌てて隠す泣き顔
「絆創膏、何千枚も必要」って
ソファーで丸まってほほえむ君

一瞬だって笑って今日が終われるなら
もう少し話そうよ
ジグザグ近づく影　静かに見守る月
どこまでも　ずっと　そばにいるから

好きなように明日をふたり描こう
向かい風　君と追い越して
大きな涙あふれる日も
いつだって僕が
でっかい愛が抱きしめる

大爆笑は何万回だっていい
大好きもいつだって届けたい
突然手紙書いたら
君は喜んでくれるかな

ざわつく日々も大事なヒント
想像以上が君のすぐそばに
明日は熱い風も凪ぎ夏草揺れ
想いはずっと青空渡る

靴ひもを結び直して
夕暮れ　ふたりの帰り道
カレンダーだって知らない未来
一緒なら僕ら
でっかい愛と歩いていける

探してたんだ
君がくれたんだ
明日色のパレット
はじめて知った恋の色に
染まってゆく心
まるごと全部君のしるし

好きな明日を見つけにいこうよ
どんな君も抱きしめるから

あの日見上げた飛行機雲
行く先はわからないけど
同じ空に夢を浮かべながら
いつだって君を
でっかい愛が抱きしめる`},{id:179,title:"喜努愛楽",titleKana:"きどあいらく",lyricist:"吸血亭賛美",composer:"偉町大介",arranger:"MUTEKI DEAD SNAKE",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回A]","でっかい愛/喜努愛楽[初回B]","でっかい愛/喜努愛楽[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){14}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){14}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){14}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){14}","Mixed Juice(北海道オーラス){14}","DOME TOUR AWARD(大阪,福岡){30}","DOME TOUR AWARD(東京){31}","DOME TOUR AWARD(東京オーラス){31}"],singer:"WEST.",date:"2021-07-28",tiup:"日本テレビシンドラ『武士スタント逢坂くん！』主題歌",lyrics:`一歩進んで二歩下がり
七度転んで八起きなら
傷だらけでも笑えれば
少し気も晴れるから

きっと悲しい顔は似合わない
僕がいて　(君がいる)
「喜努愛楽」でいっちゃえば良し！

駄目で元々良いじゃない
失敗を恐れちゃ進めない
動き出した衝動！止まらない！
僕がいて　(君がいる)
独りじゃないさ「喜努愛楽」で良い

どこか寂しい夜空でも
雨降りで曇り空でも
いつか夜が明け陽は昇り
晴れ渡り虹も出る

ずっと全て上手くいくなんて無い
僕がいて　(君がいる)
「喜努愛楽」でいっちゃえば良し！

見慣れてたはずの風景も
一人歩いた帰り道も
同じ空見上げてるから
僕がいて　(君がいる)
独りじゃないさ「喜努愛楽」で良い

哀しくて立ち止まったり
愛しくて胸詰まったり
言葉に出来ない様な瞬間も

いつだって「思うがまま」で良いんじゃない？
「感じたまま」は不器用じゃない
僕ら泣いて笑って生きている
独りじゃないから
「喜努愛楽」って言っちゃえば良し！

駄目で元々良いじゃない
失敗を恐れちゃ進めない
動き出した衝動！止まらない！
僕がいて　(君がいる)
君がいて　(僕がいる)
思うままに描き出せ
自分らしく「喜努愛楽」で良い`},{id:180,title:"真夜中のLION",titleKana:"まよなかのLION",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回A]","AWARD","AWARD[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){18}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){18}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){18}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){18}","Mixed Juice(北海道オーラス){18}"],singer:"WEST.",date:"2021-07-28",lyrics:`無神経な通り雨が
僕の足跡邪魔するんだ
説教じみた街は
腫れ物にでも触れるかのように

雑踏に噛まれた僕は
エゴとエゴのスケープゴート
今日が終わる前に
吠え方を忘れてしまいそうだ

君だって一人で
いたいわけじゃないだろう
誰だってそうさ...

終わらない夜はないと
知った真夜中のLION
慌てるように　闇を喰らう
意地悪なこの世界に
聞いて欲しくて
ただ　ただ　ただ...
歌ってるよ

ラララ...
届きますように

泣き止まない赤ん坊
ヒトリ遊びの意味を知る
歩き出す孤独は
やけに美しく見えていたんだ

行く手を阻むモノは
いつでもジブンさ

眠らない夜はないと
月明かり響く倍音
憂鬱な朝にまで届け
閉じかけたこの世界に
気づいて欲しくて
ただ　ただ　ただ...
歌ってるよ

乾ききった草原と
飲み干したオアシス...
また居場所探した

ちっぽけな僕のハート
触れたら聞こえる心音
奏でるように闇に踊れ
撫でられることのない
このタテガミを揺らして...

終わらない夜はないと
知った真夜中のLION
慌てるように　闇を喰らう
意地悪なこの世界に
聞いて欲しくて
まだ...

眠らない夜はないと
月明かり響く倍音
憂鬱な朝にまで届け
閉じかけたこの世界に
気づいて欲しくて
ただ　ただ　ただ...
Ah　ただ　ただ...
歌ってるよ

ラララ...
届きますように`},{id:181,title:"みんながいる",titleKana:"みんながいる",lyricist:"田尻知之(note native)・本澤尚之",composer:"田尻知之(note native)・本澤尚之",arranger:"田尻知之(note native)・本澤尚之",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回B]"],announce:"f",performances:[],singer:"WEST.",date:"2021-07-28",lyrics:`Ai！ Ai！ Ai！
それ！よいしょ！

横丁の角をまがるとある
ヘンテコなヒーローの看板
夕陽に照らされてるこの街
映えてるね！君が言った

いつの間にか周りが見えなくなり
何でなのか考えもせずに
自分が本当にいるべき場所を　探している
友と呼べる人は誰なんだろう？
幸せになるってどういうことなんだろう？
自由って犠牲を伴うことなのかな？
教えてよ

僕らが描く　未来の明日
閉ざした扉を　開け放て
何度も何度も　見失ったって
君には　みんながいる　ずっと

それ！よいしょ！

ふとした時にこっち見てる
いつもの散歩道の野良猫
今夜のおかずは何にしようか
迷っちゃうね　君が言った

どうしようもなく自暴自棄になり
何であの娘は振り返ってくれない
自分だけが取り残されることを　怖がっている
進むべき道はどこなんだろう？
僕にそんな場所が見つかるのかな？
他人より幸せになれるのかな？
教えてよ

Ai！ Ai！ Ai！
もういっちょ行くぜ！
Ai！ Ai！ Ai！

自分で決めれば　後悔しないよ
逃げ道ばかりを　探さないで
今日も明日もその先も　君と見る
夕陽は　綺麗なんだ

僕らが描く　未来の明日
閉ざした扉を　開け放て
何度も何度も　見失ったって
君には　みんながいる　ずっと

それ！よいしょ！`},{id:182,title:"バニラかチョコ",titleKana:"ばにらかちょこ",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[通常盤]"],announce:"t",performances:["Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){16}","Mixed Juice(北海道オーラス){16}"],singer:"WEST.",date:"2021-07-28",lyrics:`長くなった短い話　とっくに冷えた頭とつま先
玄関悩んだスニーカーorスリッパ
どうせすぐ帰るつもりだったけど
先に君あとから僕が良い“ごめんね”
引くに引けずにコンビニエンスストア　ウロチョロ
うつろな顔の深夜バイトのお兄さん
厄介ごと一仕事　お互い済まそうか

ほのかに口下手くらいが可愛いのに

期間限定アイスクリーム
バニラかチョコのバリエーション
白か黒かで余り物はダーリンダーリン
曖昧な時は甘いチョイスをホラ
ビターで苦いのが僕は好き　うんソレで良い
告白した夏の夜トリップ
Yes or Noのシチュエーション
今も昔も決まり文句でダーリンダーリン
大抵のことは甘いアイスをホラ
おかえりは無くてもグッバイ　また頼むぜコンビニ

一か八か作り話　とっさにひねった頭と口先
必要な嘘は有罪or無罪か
すまし顔　優しい顔　お願い見逃せないか

ほっこり鈍感なくらいが可愛いのに

出し過ぎ注意ハンドクリーム
シェアするべきコミュニケーション
ひび割れ防止で余り物はダーリンダーリン
あんまりな事はドライなチョイスさホラ
ベタつく空気が君は好き　うん割と好き
準備万端冬空とリップ
いつもの街もイルミネーション
OFFでもONでも素敵さ君はダーリンダーリン
大切なキスは甘いセリフとホラ
理想じゃ良い自分でも　寝巻きスリッパ現状にドン引き

“しっかりついてこい”くらいがカッコいいのに

時間制限アイスクリーム
ドア前一人シミュレーション
ただいまおかえり　ぎこちなくてもダーリンダーリン
幸いなことは甘いアイスがほら
リハ通りいけばそれでいい　うんコレでいい　あ～

期間限定アイスクリーム
バニラかチョコのバリエーション
白か黒かで余り物はダーリンダーリン
曖昧な時は甘いチョイスをホラ
ビターで苦いのが僕は好き　うんソレで良い
負担軽減アイスクリーム
酸いも甘いもノンフィクション
あの手この手で何がなんでもダーリンダーリン
「心配事の9割以上はホラ
おこらないって言ったでしょ？」
ハイハイ　よく笑うぜのんきに

oh good day... oh bad day...
oh good day... oh bad day...
oh good day... oh bad day...
oh good day... good day...`},{id:183,title:"Calling",titleKana:"Calling",lyricist:"草川瞬",composer:"川口進・草川瞬",arranger:"山下洋介",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[通常盤]"],announce:"t",performances:["TO BE KANSAI COLOR-翔べ関西から-(東京){31}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){31}"],singer:"WEST.",date:"2021-07-28",lyrics:`Baby Baby　この夏に捧ぐ
Take it Take it　君をまるごと
Diving to the Blue　二人で行こう
Oh Yeah Oh Yeah No No No No

クーラー効かせた部屋でじっと
夏を見過ごしちゃ勿体ないでしょ？
Say Wow wow wow Wow wow wow
太陽昇ればEveryday Weekend
出会いは一瞬で一期一会のLife
Shyな気持ちGood bye　タイミング逃さない
Wow wow wow　蜃気楼抜けて
Wow wow wow　艶やかなリズムで

Baby Baby　この夏に捧ぐ
Shake it Shake it　ココロ踊れ

火照る体を今　解放して
情熱的に　かつロマンチックに
二人の世界へ

君と夏が Calling Calling
見つめるほどに深くハマってく
Love you Love me
交わるBody&Soul
君と夏が Shinin' Shinin'　輝く
取り乱しそうな自分にCalm down
どうやって君の期待裏切ろうか？
Oh baby Lovin' you Oh Lovin' you
もう止められない Can't stop my love

これは運命の悪戯　それとも夢の中
いきなりの出会い　もはやドラマ
Say Wow wow wow Wow wow wow
ココロの整理つかぬまま　始まるストーリー
何もかも　何もかも　俺色に染めたくて
押していこう　押していこう
引かないさこの波のように
Wow wow wow　溢れるこの気持ちを
Wow wow wow　今すぐ届けたくて

Baby Baby　この夏に捧ぐ
Shake it Shake it　ココロ踊れ

夜空に咲いた花火のように
情熱的に　かつロマンチックに
二人の世界へ

この想いは Rolling Rolling
誰にも分からない恋の行方
もっと　もっと
近づいてStay with me
何もかもが Crazy Crazy　戸惑う
余裕なフリして君にSmile
絶対に君を離したくはない
Oh baby Lovin' you Oh Lovin' you
もう止められない Can't stop my love

一夏の恋と分かっていても
走り出す気持ちに素直にいるよ
(Oh baby my love)
戻れない時間の中で後悔はしないように
もっと君を知りたいんだ
そばにいさせて

君と夏が Calling Calling
見つめるほどに深くハマってく
Love you Love me
交わるBody&Soul
君と夏が Shinin' Shinin'　輝く
取り乱しそうな運命にCalm down
どうやって君の期待裏切ろうか？
Oh baby Lovin' you Oh Lovin' you
もう止められない Can't stop my love`},{id:184,title:"黎明",titleKana:"れいめい",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[初回A]","黎明/進むしかねぇ[初回B]","黎明/進むしかねぇ[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){19}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){19}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){19}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){19}","Mixed Juice(北海道オーラス){19}"],singer:"WEST.",date:"2022-01-19",tiup:"テレビ朝日系オシドラサタデー『鹿楓堂よついろ日和』主題歌",lyrics:`ひとりぼっちだと思ってた　夕陽に背を向けて
僕らはのら猫みたいに　いったり　きたりして

みんなそうだと思ってた　君に出逢うまで
まわりの瞳(め)に疲れては　夢をみることも忘れて

「ありがとう」も　「ごめんね」も　「あいたい」も
ゆびきりみたい　君と僕を　結ぶメロディ

うまく声には出来なくても　信じてみたくて
その手を握った

愛に頼ってみたくて
僕らは寄り添っていた
たとえば君にとっての愛とは違っても
何も出来なかったとしても
夜が明けるよ

あたりまえだった事が　君と違って
その度に　はにかんで　少し近づいて

君が今好きなものが　もっと好きになって
僕の大事なものを　もっと知ってほしくて

言葉　言葉　ぶつけ合って　見つけたんだ
抱えている不安とか　鈍い痛み

うまく声には出来ないけど　ずっと聞こえてたんだ
今ならわかるよ

ただ　愛に触れていたくて
君と笑っていたくて
時に言葉がすれ違ってしまったとしても
想いは消えないから

すべて愛だなんて　そんな訳ないし
ただ口にすると　大げさで照れ臭いけど
こんな歌なら
僕ららしい気がすんだ

ずっと愛に触れていたくて
明日を変えてみたくて
でもまだわからないまま

愛に頼ってみたくて
僕らは寄り添っていた
たとえば君にとっての愛とは違っても
何も出来なかったとしても

夜が明けるよ
きっとそうだろう
夜が明けるよ
みんなそうだろう

みんなそうだろう`},{id:185,title:"進むしかねぇ",titleKana:"すすむしかねぇ",lyricist:"田尻知之(note native)・本澤尚之",composer:"田尻知之(note native)・本澤尚之",arranger:"田尻知之(note native)・本澤尚之",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[初回A]","黎明/進むしかねぇ[初回B]","黎明/進むしかねぇ[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){33}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){33}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){33}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){33}","Mixed Juice(北海道オーラス){33}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){23}","WEST. 10th Anniversary Live “W”-Film edition-{19}"],singer:"WEST.",date:"2022-01-19",tiup:"ABCテレビ・テレビ朝日系『あなたの代わりに見てきます！リア突WEST』テーマソング",lyrics:`明日が来れば　きっと笑顔
腐らずに行け　この世界を
ひとりで　悩んだりしなくていい
そう　前へ！　前へ！　もっと！　前へ！
進むしかねぇ！！

どれだけ今が辛くても　泥だらけの毎日でも
凸凹道を転ぶけど　リアルな話　上等だぜ
君も気づいている筈さ　いつもお利口なフリして
お手本通りに生きるのも　苦しくないかい？

精一杯　誰かを頼っていいんだよ
大丈夫　みんなにはこの唄がある

明日が来れば　きっと笑顔
腐らずに行け　この世界を
ひとりで　悩んだりしなくていい
そう　前へ！　前へ！　もっと！　前へ！
進むしかねぇ！！

今はなんも見えなくても　ただ過ぎる毎日だけど
あっちこっちぶつかって　辿り着ける場所がある
だから見守ってくれよな　猪突猛進　我が人生
お前らと共に行けるなら　楽しくなるさ

精一杯　強がって生きてもいいんだよ
大丈夫　みんなにはこの唄がある

明日になれば　もっと笑顔
その為に生きる　この時代を
ひとりきりだなんて　思わないで
そう　前へ！　前へ！　もっと！　前へ！
進むしかねぇ！！

曖昧な覚悟しかできずに
意味あり気に　言葉をじらして
もがきながら　導き出した
まだこのままじゃ　やめられねぇよ！
運命を変えてゆけば　そこから何かが始まるさ
不器用でも　走り出せよ　ありのままに

明日が来れば　きっと笑顔
腐らずに行け　この世界を
ひとりで　悩んだりしなくていい
そう　前へ！　前へ！　もっと！　前へ！
先へ！　先へ！　もっと！　先へ！
進むしかねぇ！！`},{id:186,title:"Cherry on top",titleKana:"Cherry on top",lyricist:"D&H",composer:"Jakob Mihoubi・Rudi Daouk・Isaac Han・Aaron Kim・GHOSTCHILD LTD",arranger:"Isaac Han・GHOSTCHILD LTD・Aaron Kim",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[初回A]"],announce:"t",performances:["TO BE KANSAI COLOR-翔べ関西から-(大阪){11}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){11}","TO BE KANSAI COLOR-翔べ関西から-(東京){11}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){11}"],singer:"WEST.",date:"2022-01-19",lyrics:`Blow my mind 現実も now blind
目を閉じても消えない You are mine
惑わされても今日は良いんじゃない？
重ねた言い訳分だけ
Want you babe

覗かれてしまった心の中
苦笑いで hide it
Chicなまま
Oh baby tonight
目そらさないで
このまま君を乗せ ride it

I just wanna feel you　今すぐ
So cliche な frameから抜け出して
Oh what is your name？
Let's skip it
名前は　必要(いら)ない
コールするのは君さ

I'm on it oh
Put my cherry on top top
Sweeter than sweet
Try me cherry on top top
Feeling so good
Baby cherry on top top
イメージ通りに触れる Love Chain
I'm on it

Yea　まるでケーキ Come here
指先え“付け”“Taste”“Fallin”
今 Focus　ズームアップYou, Meふたり
周りはええんちゃう？　このままで
リズム合わせて踊ろう
息をつき、甘くTake slow
たどり着くココはTasty
一つになる Marinade

もう我慢できないんだ
Come get closer now
首に手まわして
Riskyなまま
Oh Baby tonight
もう離せないよ
このまま君を乗せ ride it

I just wanna feel you　今すぐ
So cliche な frameから抜け出して
Oh what is your name？
Let's skip it
名前は　必要(いら)ない
コールするのは君さ
I'm on it

刺激的な　この絆
想うだけで Feel the groove
後か　先か Cherry on the top
譲れない Sweet な you

I just wanna feel you　今すぐ
So cliche な frameから抜け出して
Oh what is your name？
Let's skip it
名前は　必要(いら)ない
コールするのは君さ

I'm on it oh
Put my cherry on top top
Sweeter than sweet
Try me cherry on top top
Feeling so good
Baby cherry on top top
イメージ通りに触れる Love Chain
I'm on it`},{id:187,title:"オレとオマエと時々チェイサー",titleKana:"おれとおまえとときどきちぇいさー",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[初回B]","AWARD","AWARD[通常盤]"],announce:"t",performances:["Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){16}"],singer:"WEST.",date:"2022-01-19",lyrics:`まだアイツ笑ってる
一番のツマミだな
最近どう？って口を突いて出た
一言じゃ言えない日々

オレがオレのまんまでいれるのは
一人じゃないから
思い出が思い出になったのは
オマエらがそこにいるから

あぁそっか
いつもありがとな！

だんだん年を取り
人生変わってゆく
ちっぽけな自分も
信じてこそかなぁ
きっと汗もかき
ちゃんと恥もかく
あの子可愛いよな
生きてくって大変だ

逆上がり出来るかな？
いやいや、出来るでしょ
50メートル走れば何秒？
わかんねぇ　シャララララ

もしもお先真っ暗になっても
オレにはオマエ　オマエにはオレ
ひとまず　ええじゃないか
また飲もうぜ！

だんだん年を取り
人生変わってゆく
ちっぽけな自分も
信じてこそかなぁ
きっと汗もかき
ちゃんと恥もかく
あの子可愛いよな
生きてくって楽しいんだ

ラララララララ　また飲もうぜ
ラララララララ　また会おうぜ
ラララララララ　また笑おうぜ
生きてくって大変だ
まだ飲もうぜ
ラララララララ　さぁ行こうぜ
ラララララララ　さぁ歌おうぜ
ラララララララ　生きてくって楽しいんだ

ラララララララ　また飲もうぜ
ラララララララ　また会おうぜ
ラララララララ　また笑おうぜ
チェイサーも忘れんな
まだ飲もうぜ
ラララララララ　さぁ行こうぜ
ラララララララ　さぁ歌おうぜ
ラララララララ　ヨイショ！みんなで
飲んだって　ええじゃないか`},{id:188,title:"ブーケ",titleKana:"ぶーけ",lyricist:"NakamuraEmi",composer:"NakamuraEmi",arranger:"Hiroshi Kawamura",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){16}"],singer:"WEST.",date:"2022-01-19",lyrics:`どうしてだろう　僕が飲んだ緑茶だけ濁って見えて
どうしてだろう　シミ抜きしたはずなのに消えなくて

寂しいとも違う　悔しいとも違う　そんな時があって
汚い気持ちを　落としたい時　あなた思い出す

大人になっても変わらない　悩みは大抵変わらない
抜け出した瞬間また来た　御伽の国じゃないから
ひどい顔で泣いた日も　欲張って転んだあの日も
錆び付いて真っ黒なのに　あなたは言ってくれた

花束みたいだ綺麗さ　派手じゃない色だって必要さ
大丈夫さ　抱えきれなくて　溢れそうな時は
一緒に抱えるよ

そんなこと言うから　忘れてた深呼吸してみたよ
そんなこと言うから　錆びたとこ少しずつ溶けてくよ

「もしこうなったら　もしダメだったら」は　旅の荷物になる
大抵のことは　笑い話になる　時間て素敵だ

胸が傷ついた音は　誰にも聞こえないから
忘れるくらい綺麗な　音を探し続けるよ
また濁って見えても　汚い気持ちになっても
あなたが言った言葉を　口ずさむよ

花束みたいだ綺麗さ　派手じゃない色だって必要さ
大丈夫さ　抱えきれなくて　溢れそうな時は　一緒に抱えるよ
花束みたいな日だって　錆び付いて濁った日だって
大丈夫さ　抱えすぎたら　御伽の国じゃないから　ちゃんと手放すよ
そして思い出すよ　僕が花束なんて　笑っちゃうよ

花束みたいだ　大丈夫さ`},{id:189,title:"微笑み一つ咲かせましょう",titleKana:"ほほえもひとつさかせましょう",lyricist:"MORISHIN",composer:"川口進・MORISHIN",arranger:"ha-j・川口進",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){11}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){11}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){11}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){11}","Mixed Juice(北海道オーラス){11}","TO BE KANSAI COLOR-翔べ関西から-(大阪){8}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){8}","TO BE KANSAI COLOR-翔べ関西から-(東京){8}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){8}"],singer:"WEST.",date:"2022-01-19",tiup:"ヤマザキ『ランチパック』CMソング",lyrics:`誰かが泣いているなら
涙あとの虹待ってさ
微笑み一つ　ほら咲かせていきましょう

ダメになりそうな時は
鏡の前でピースサイン
微笑み一つ　ほら枯れないように

僕らは出会い重ね
生まれてきた希望のメロディー
いつまでもずっと奏でていこう

微笑み一つ　咲かせてあげましょう
君のその笑顔は巡り巡り
世界を回って笑って戻ってくる
いつか誰かのため　愛のために生きていこう
「ありがとう」からの「おかげさま」で
僕らの星は育つ

誰もが強いわけじゃない
だからこそ歩み寄ってさ
微笑み一つ　ほら咲かせていきましょう

そばにいるだけでいいのさ
それだけでただそれだけで
微笑み一つ　一つずつ増えていく

僕ら迷いそうな夜
「大丈夫」って一歩踏み出せたのさ
いつも君が僕にくれたから

微笑み一つ　咲かせてあげましょう
当たり前じゃない毎日に届けていこう
大切な君と過ごしていく日々に
そして誰かのため　愛のために生きていこう
「ありがとう」からの「またあしたね」で
僕らの未来(あす)は育つ

夢が溢れ
愛に触れて
色づく笑顔は
この世界もっともっと
大きな輪に変えていくんだ

微笑み一つ　咲かせてあげましょう
君のその笑顔は巡り巡り
世界を回って笑って戻ってくる
いつか誰かのため　愛のために生きていこう
「ありがとう」からの「おかげさま」で
僕らの星は育つ`},{id:190,title:"Mixed Juice",titleKana:"Mixed Juice",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){1}","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){34}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){1}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){34}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){1}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){34}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){1}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){34}","Mixed Juice(北海道オーラス){1}","Mixed Juice(北海道オーラス){34}","TO BE KANSAI COLOR-翔べ関西から-(大阪){3}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){3}","TO BE KANSAI COLOR-翔べ関西から-(東京){3}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){3}","POWER(宮城){15}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){15}","POWER(愛知オーラス){15}","AWARD(大阪){21}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){29}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){29}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){29}","メトロック2022(大阪){5}","LOVE MUSIC FESTIVAL2022{2}","8周年生配信トーク＆ライブ「虹会」{1}"],singer:"WEST.",date:"2022-03-09",tiup:"PILOT『Juice』タイアップソング",lyrics:`Yeah... It's 超JUICE Yeah....

(Mixed Juice, We're 超JUICE)
(With you, It's more GOOD)

どんがらがっしゃん
よせよ冗談w
お釈迦さま
お願いONE CHANCE

評論家ぶってる暇無し
好きなもんなら　マシマシ
まだ人間性だけじゃ勝負出来ないから
ムチャブリ OK！　毒見させて

イイねの王者 Shows up
限界を突破　ヤバっ！
考える前に　脳みそ Rock it
グイグイいこうぜ
Hey！

イイ予感しかない
俺ら Mixed Juice ばりに超JUICE
ワクワクしたいじゃない！？
大胆に Shake it, Shake it　オーライ

エビバディ　サムバディ　陽気にハングリー
おいしすぎるでしょ？
Yes！ No？　どうなの？
過去イチ　シュガーハイ
超JUICE

(Mixed Juice, We're 超JUICE)
(With you, It's more GOOD)

いけるっしょ　やれるっしょ
歌うっしょ　ならば　踊るっしょ
HA HA　お腹空っぽじゃ Weekend
乗り切れないぜ My friend！

逃げなかったって証
褒めてくださいって話
たぶん完成型　もう見えてるから
あとのせ OK！　あとまかして

なんだかんだ　最高
最強の相棒
ガンガン行こうぜ
Hey！

イイ予感しかない
君ら Mixed Juice ばりに超GROOVE
ドキドキしたいじゃない！？
大胆に Shake it, Shake it　オーライ

エビバディ　サムバディ　陽気にハングリー
クセあっていいでしょ？
Yes！ No？　どうなの？
過去イチ　パーティーハイ
超JUICE

飲み干したいじゃない？
こんな Mixed Juice ばりの運命
味わおうじゃない
「まだまだJOYしてこうか？」
Hey！

イイ予感しかない
俺ら Mixed Juice ばりに超JUICE
ワクワクしたいじゃない！？
大胆に Shake it, Shake it　オーライ

エビバディ　サムバディ　陽気にハングリー
おいしすぎるでしょ？
Yes！ No？　どうなの？
過去イチ　シュガーハイ
超JUICE

超JUICE`},{id:191,title:"しらんけど",titleKana:"しらんけど",lyricist:"庄田ゲゲゲ・corin.",composer:"庄田ゲゲゲ・corin.",arranger:"庄田ゲゲゲ・corin.",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){32}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){32}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){32}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){32}","Mixed Juice(北海道オーラス){32}","TO BE KANSAI COLOR-翔べ関西から-(大阪){12}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){12}","TO BE KANSAI COLOR-翔べ関西から-(東京){12}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){12}","AWARD(大阪){13}","AWARD(新潟){13}","AWARD(宮城){13}","AWARD(愛知){13}","AWARD(横浜,静岡,福岡,広島,北海道){13}","AWARD(北海道オーラス){13}","DOME TOUR AWARD(大阪,福岡){18}","DOME TOUR AWARD(東京){19}","DOME TOUR AWARD(東京オーラス){19}","LOVE MUSIC FESTIVAL2022{7}","メトロック2024(東京){4}","KOYABU SONIC2024{8}"],singer:"WEST.",date:"2022-03-09",lyrics:`大阪府の面積は　ちょっと前まで日本で最小
やけど関空出来て　香川抜いて今はブービー　知らんけど
(知らんのかい)
一本筋の通った道大阪の大動脈
御堂筋はノンストップ　だけど高速ちゃうで　知らんけど
(知らんのかい)
キタもミナミもえぇ街　それぞれの個性が花開く
ミナミでハメ外して　キタでしっぽり大人の街　知らんけど
(知らんのかい)
YO！　とにかくノリのえぇとこ　ノリツッコミで出来たDNA
府知事がボケりゃ子供ツッコむ　心の垣根超えろ　知らんけど
(知らんのかい)
知らんけど
(知らんのかい)

大阪は今日も雨　知らんけど
(知らんのかい)
大阪は午前2時　知らんけど

知らんけど It's magic　(知らんけど)
オチの無い Indulgence　(知らんけど)
笑顔になれよ Smile　(知らんけど)
溺れさせて Punch line

知らんけど
(知らんのかい)

その言葉は魔法　どんなシーンでも心を開放
せや一度試しに言うてみたらえぇねん　知らんけど
(知らんのかい)
お客様やったらMでえぇんちゃいます？　知らんけど
(知らんのかい)
おかげさまでめっちゃ好評らしいで　知らんけど
(知らんのかい)
早起きは三文の徳やで　知らんけど
(知らんのかい)
まぁ、言うてもなんとかなるんちゃうかな　知らんけど
(知らんのかい)
こんなん適当やで　知らんけど
(知らんのかい)
えぇ感じちゃう？　知らんけど
(知らんのかい)
うん、知ってる　知らんけど
(知らんのかい)

大阪は今日も雨　知らんけど
(知らんのかい)
大阪は午前2時　知らんけど

知らんけど It's magic　(知らんけど)
午前2時の Teardrop　(知らんけど)
お約束の Running joke　(知らんけど)
ワガママな Rainy train

知らんけど
(知らんのかい)

ただの　ただの　ただの悪戯な口癖やねん
(知らんけど)
ホンマはな　知ってるんやで
(知らんけど)
知ってるんやで…
知らんけど…

知らんのかい

知らんけど It's magic　(知らんけど)
朝靄の Ponytail　(知らんけど)
A・FU・SA・KAの Tenderness　(知らんけど)
風の中に Be cool

知らんけど
(知らんのかい)

大阪は今日も雨　知らんけど
大阪は午前2時
知らんけど`},{id:192,title:"涙腺",titleKana:"るいせん",lyricist:"橋口洋平(wacci)",composer:"橋口洋平(wacci)",arranger:"村中慧慈(wacci)・因幡始(wacci)",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){15}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){15}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){15}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){15}","Mixed Juice(北海道オーラス){15}","8周年生配信トーク＆ライブ「虹会」{3}"],singer:"WEST.",date:"2022-03-09",lyrics:`涙腺が緩くなったと笑ってる　僕らの絆はきっと強くなった
もう長いこと　同じ歩幅で　踏みしめてきた　僕らの軌跡

見失う度に　差し出しあって
立ち止まる度に　励ましあって
僕が勇気を取り戻すのは
決まって　君の隣だった

なんか照れくさい言葉ほどまっすぐにこの想い
伝えてくれるから厄介だな
またこみ上げてくる前に受け取ってくれるか
ありがとう　君がいて良かった

涙腺が緩くなったと笑ってる　僕らの心はきっと強くなった
雨の冷たさ　闇の深さも　知らなかったあの頃と違って

一人じゃないと気づかせあって
諦めんなと声をかけあって
僕が自分を越えられたのは
決まって　君の隣だった

なんかくだらない言葉ほどいくらでも言えるから
いざというときに　そう　躊躇うよな
また誤魔化してしまう前に早く言わなきゃ
ありがとう　君がいて良かった

出会った頃の僕らに向かって　何か言えることがあるとしたら
「大丈夫だよ　信じてゆけよ　かけがえのない旅になるから」

なんの嘘もない言葉ほど喉元につっかえて
せりあがる愛が苦しいよな
でも届けたい　もう一度　聞いてくれるか

なんか照れくさい言葉ほどまっすぐにこの想い
伝えてくれるから厄介だな
いつか言えなくなる前に受け取ってくれるか
ありがとう　君がいて良かった

これからも　ずっとよろしくね`},{id:193,title:"Contrails",titleKana:"Contrails",lyricist:"神山智洋",composer:"神山智洋",arranger:"akkin・神山智洋",album:["Mixed Juice","Mixed Juice[通常盤]"],announce:"t",performances:["8周年生配信トーク＆ライブ「虹会」{5}"],singer:"WEST.",date:"2022-03-09",lyrics:`1枚限りのチケットを握りしめ
地平線の先へと旅をしてる途中だ

瞬き一つで変わってく時代　僕らは何を残せるだろう
足跡をログ替わりにただ前へ

見慣れた光景にさようなら　覚悟してドアを叩いた
意地とかプライドとか重たい荷物背負ってるんだ
夜明けを待ちきれないのなら迎えに行けばいいさ

高らかに夢を謳おうぜ　戯言(たわごと)戯言(ざれごと)上等だって
辛い時こそ笑ってる君も強いんだ
根拠のない自信だって立派なエンジンなんだ
誰よりも高く翔べ
Just believe yourself！！

ほどけた靴紐に無意味に苛立ったり
行き場のない憤り抱えて右往左往

轟音響かせ飛び立つ姿　空を仰いでいる僕らは
迷い悩むちっぽけな存在さ

天秤にかけた〇と×　答えはもうわかっていたさ
後先よりも疼く脚に正直になりゃいいさ

高らかに今は歌おうぜ　でかい雲が行手阻んだって
捉え方次第でどーにでもなるのさ
風の中を駆け抜けて　遠く遥か先まで
笑う為にさぁ進め
Don't be afraid！！

昨日にはもう戻れない　明日の自分を信じていたい
別れ道で心が揺れても　羽が傷み錆び付いても
立ち尽くしている暇なんかないのさ
かかるGも楽しんで　さぁ舵を切れ

涙は恥ずかしくないぜ　君がここに居る証拠だって
生きている理由を空へ向け叫ぶんだ

高らかに夢を謳おうぜ　たとえヒーローじゃないとしたって
僕らの轍を時代へと刻むんだ
思うまま好きに描け　キャンバスは真っ新なんだ
乱気流を乗りこなせ Just believe yourself！！
誰よりも高く翔べ Just believe myself！！`},{id:194,title:"Anything Goes",titleKana:"Anything Goes",lyricist:"KOMU",composer:"KOMU・YU",arranger:"YU",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){4}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){4}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){4}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){4}","Mixed Juice(北海道オーラス){4}","TO BE KANSAI COLOR-翔べ関西から-(大阪){13}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){7}","TO BE KANSAI COLOR-翔べ関西から-(東京){7}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){7}","POWER(宮城){22}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){21}","POWER(愛知オーラス){21}","メトロック2022(大阪){3}","メトロック2024(東京){2}","サマソニ2024(大阪,東京){3}"],singer:"WEST.",date:"2022-03-09",lyrics:`Ohhhh！！
J (J！！) WEST (WEST！！) J (J！！) WEST (WEST！！) Go, Ready go！！
J (J！！) WEST (WEST！！) J (J！！) WEST (WEST！！) Ready go！！

これが俺たちのソウルスタイル
耳かっぽじってよく聞け (OK！！)
かなりハンパない　そんなParty time
さあ皆んな準備はOK？ (Oh yeah！！)
Ready？ Bow Wow WEST (WEST WEST！！)
兎にも角にも出しゃばれ (You know I'm saying！！)
口から産まれたFreestyle boy
ここらじゃそんなん結構多い

共に共にBounce yeah　巡り巡るHappiness
3, 2, 1！！

Let's go, Anything goes！！ (Hey！！)　I got it (Ho！！)
この夜を越えて　Get up　踊ろうぜ
Let's go, Anything goes！！ (Go！！)　I got it (Ho！！)
その声張り上げ　Your mind　解き放て (Yeah yeah yeah！！)
揺らせ

Holla back Holla back
Don't stop get it get it
Just keep it on

間違いないナンバー　上げろバンバン
そうOne shotだけでパッと酔わすパフォーマンス
キレたエンターテイナー
MVPよりV.I.P.　そんなライマー
登場　とにかくGoes on　思い立ったなら我れ先行動
Do or Die？　ならやっちゃうスタイル
だからShall we dance, all night！！

かなりかなりHype yeah　何もかもがHigh sense
3, 2, 1！！

Let's go, Anything goes！！ (Hey！！)　I got it (Ho！！)
まだ未知なゾーンまで　Get up　飛ばそうぜ
Let's go, Anything goes！！ (Go！！)　You got it (Ho！！)
心を滾らせ　Right now　叫びだせ (Yeah yeah yeah！！)
共に

Everytime Everywhere I think of you
そのsmileだけを I just hope you
Yes, I know　君が望むのなら
覚めない夢まで連れてくよ
その扉開けたなら　Now, Let's go！
Are you ready？

Please, My baby Uh

共に共にBounce yeah　巡り巡るHappiness
3, 2, 1...Rewind！！
かなりかなりHype yeah　何もかもがHigh sense
3, 2, 1！！

Let's go, Anything goes！！ (Hey！！)　I got it (Ho！！)
この夜を越えて　Get up　踊ろうぜ
Let's go, Anything goes！！ (Go！！)　I got it (Ho！！)
その声張り上げ　Your mind　解き放て (Yeah yeah yeah！！)
揺らせ

J (J！！) WEST (WEST！！) J (J！！) WEST (WEST！！) Go, Ready go！！
J (J！！) WEST (WEST！！) J (J！！) WEST (WEST！！) Ready go！！`},{id:195,title:"Born To Be Wild",titleKana:"Born To Be Wild",lyricist:"MiNE・Atsushi Shimada",composer:"Xisco・坂室賢一・Tommy Clint",arranger:"Xisco",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){5}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){5}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){5}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){5}","Mixed Juice(北海道オーラス){5}","WEST. 10th Anniversary Live “W”{10}","WEST. 10th Anniversary Live “W”-Film edition-{10}"],singer:"WEST.",date:"2022-03-09",lyrics:`Ah…oh yeah, come on baby
Born to be wild, let's go

完璧すぎる sweetest girl
気が付いたら into your eyes, yeah
刻む step　ほら look at me
エスコートするから so let's get dancin' now

Oh…
見つめ合えば woof, woof, woof, let's go
Baby, so ready for this…

Born to be wild　強引に君を引き寄せ
Born to be wild　この愛表現(プレゼン)して
Born to be wild　遠慮はいらない感じるままに
優等生なシンデレラやめて wild…
We scream and shout…wow…yeah…
Born to be wild　自分を開放して

日常に溢れる black and white
今夜は忘れて break the chain, yeah
本能と beat で change your mind
激しく踊れば so we can feel paradise

Oh…
響き渡る woof, woof, woof, let's go
Baby, so ready for this…

Born to be wild　大胆に手を握り締め
Born to be wild　この愛不意打(サプライズ)して
Born to be wild　後悔させない身を任せて
ガラスの靴を脱ぎ捨てて wild…
We scream and shout…
We scream and shout, you know？

Let's get started
I'm waiting for you, my baby
さぁ溶け合おう　夢中で解けないmagic
君のreaction　止まらないよ crazy in love…

Born to be wild　止まない love
Born to be wild　身を委ねて trust me
Born to be wild, born to be wild, yeah…
Baby…

Born to be wild　強引に君を引き寄せ
Born to be wild　この愛表現(プレゼン)して
Born to be wild　遠慮はいらない感じるままに
優等生なシンデレラやめて wild…
We scream and shout…
Baby…yeah…
We scream and shout…wow…yeah…
Born to be wild　自分を解放して`},{id:196,title:"ブルームーン",titleKana:"ぶるーむーん",lyricist:"eill",composer:"eill・Ryo 'LEFTY' Miyata",arranger:"Ryo 'LEFTY' Miyata・eill・nabeLTD・Katsushiro Sato",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){17}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){17}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){17}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){17}","Mixed Juice(北海道オーラス){17}","11周年生配信トーク＆ライブ「虹会」{4}"],singer:"WEST.",date:"2022-03-09",lyrics:`霧がかった　神秘的な夜
月明かり　ふたりだけの船
浮かべ見つめあって話をしようよ

小さな頃の夢
苦手な味　好きな季節も
僕はまだまだ君のこと知らないけど

きっとなんかのためにさ
ちょっと無理して笑ったりして
空もしょんぼりさ

Baby　月が結んだ出会い
僕があげられるものは何もないから
「代わりに漕ぐよ」なんて言ったら
ちょっと目を逸らした隙に消えちゃいそう
でも気づいてないフリできない
僕はそんな君を守りたいから

またそうやって
誰かの幸せばっか願って眠れないん？
こんな傷だらけでどこいくん
ここにおいでよ
僕にはそんな顔しなくていい
そう思いながらくしゃっと笑う君が眩しい
優しさを振り翳すわけじゃない君はもう…

きっと何度傷ついても
ちょっと無理して笑っちゃうから
空も晴れるのさ

Baby　もっとワガママになってみせてよ
君を困らせる全部
「代わりに持つよ」触れかけた心
そっと分けてくれるまで待つよ

Baby　もう幸せを受け取って
これ以上なにも望めやしない
今は　頭を撫でて側にいるだけさ
Once in a blue moon
つぎの月夜まで
また気づいてないフリをしよう
僕はそんな君を守りたいから`},{id:197,title:"じゃあね",titleKana:"じゃあね",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["Mixed Juice","Mixed Juice[通常盤]"],announce:"t",performances:["8周年生配信トーク＆ライブ「虹会」{4}"],singer:"WEST.",date:"2022-03-09",lyrics:`やっぱりね
もうダメって言えないよね　普段通りしてたくて
「最後かなぁ」って
洗濯カゴを手に　泣かせた

サヨナラ茶化すような魔法下さい
戻りたい戻れない
代わりばんこでサイン　夢見てきた

愛しあう　ただ愛しあう
だけじゃどうにもならないこと
忘れないなんて　忘れてゆくから
そんな事言われたっけ

今日もチックタックチック
おかしいね　涙さえサヨナラしてる

お花見って騒がしそうで
秋のほうが好きかなって
手を引かれた桜並木
春がいちばん好きになった

芽吹いてく　ただ芽吹いてく
だけでどうして咲いてゆくの
変わらないなんて　変わってゆくのか
君に出会い何もかもが変わったように

チックタックチック
おかしいね　涙とサヨナラしてる

二人チックタックチック
おかしいね　誰かと出会ってゆく

いつかチックタックチック
おかしいね　桜は舞い上がり落ちてゆく

愛しあう　また愛しあう
誰かのとなりでラララララ`},{id:198,title:"つばさ",titleKana:"つばさ",lyricist:"柳沢亮太(SUPER BEAVER)",composer:"柳沢亮太(SUPER BEAVER)",arranger:"柳沢亮太(SUPER BEAVER)",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",performances:["Mixed Juice(北海道オーラス){35}","サマソニ2024(大阪,東京){6}","8周年生配信トーク＆ライブ「虹会」{6}","WEST. 10th Anniversary Live “W”{6}","WEST. 10th Anniversary Live “W”-Film edition-{6}"],singer:"WEST.",date:"2022-03-09",lyrics:`深くまで沈んで　冷えた心は
わずかな温もりにも気がつけた
それこそが日々「当たり前」と呼んだ
無防備な優しさ　きっと愛だ

生きがいは　一人一つじゃなくていい
大切は　一人一つじゃなくていい
いくつでも　何度でも　好きなだけ
教えてくれたのは　あなただった

知れば知るほど　広がる世界
触れれば触れるほど　知らない自分
ありのままがどれかはわからないけど
あなたといる自分は笑ってる

ありふれているなんてこと
ありえないんだろうなあ

よくある話も　当事者にだけは
絶望にも　幸せにもなるから
同じ気持ちじゃなくていい
僕ら　互いのこと　少し想えたら

生きがいは　一人一つじゃなくていい
大切は　一人一つじゃなくていい
「当たり前」は　ずっと特別だった
無防備な優しさ　愛をありがとう

ありふれているなんてこと
ありえないのなら
沈み込んだ理由さえも
翼になるかな

知れば知るほど　広がる世界
触れれば触れるほど　知らない自分
ありのままがどれかはわからないけど
あなたといる自分が好きだ

よくある話も　当事者にだけは
絶望にも　幸せにもなるから
同じ気持ちじゃなくていい
僕ら　互いのこと　少し想えたら

それこそが日々「当たり前」と呼んだ
無防備な優しさ　きっと愛だ`},{id:199,title:"セラヴィ",titleKana:"せらゔぃ",lyricist:"キタニタツヤ",composer:"キタニタツヤ",arranger:"Nobuaki Tanaka・キタニタツヤ",album:["Mixed Juice","Mixed Juice[初回A]","AWARD","AWARD[通常盤]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){6}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){6}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){6}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){6}","Mixed Juice(北海道オーラス){6}","AWARD(大阪){6}","AWARD(新潟){6}","AWARD(宮城){6}","AWARD(愛知){6}","AWARD(横浜,静岡,福岡,広島,北海道){6}","AWARD(北海道オーラス){6}"],singer:"WEST.",date:"2022-03-09",lyrics:`冬が終わって春が来るように
気づいた時には大人になっていた
いつか僕も誰かの思い出の花瓶の中で
枯れてゆくのだろう

空白がいつか君になっていた
君がいつかメロディになっていた
そうやっていつか煙になる頃に笑えるように

季節と共に
変わっていく僕を怖がらないで
変わっていく君を責めないで
花は散って、人はさよならを繰り返す
C'est la vie, c'est la vie！
笑えないことばかりが増えてしまって
流せない涙が溜まってく
綺麗じゃなくても
伸ばした手を拒まれても
うつろいながら続いていく
C'est la vie.

冬が終わって春が来るように
あの日の僕らを洗った涼風が
花で飾った君を鮮やかに染めてゆく様
あんまり綺麗だから

育った風景が懐かしくなってゆく
いくつの思い出を落として来たんだろう？
そうやって傷が増えた代わりに君を知れたように

日に日に変わっていく僕も悪くはないと
変わっていく君も素敵だと
少しずつだって受け入れられますように
C'est la vie, c'est la vie！
笑えないことばかりが増えてしまって
流せない涙が溜まってく
綺麗じゃなくても
伸ばした手を拒まれても
うつろいながら続いていく

雪が泥になるように
人が思い出になるように
僕の心の何もない場所に
君が住み着いてしまったりして
全てがうつろっていく
古い自分が流されていく
先の見えない未来に漕ぎ出すこと
怖がらないで進めばいい
C'est la vie.

C'est la vie！`},{id:200,title:"努力賞",titleKana:"どりょくしょう",lyricist:"syudou",composer:"syudou",arranger:"syudou",album:["Mixed Juice","Mixed Juice[初回A]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){8}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){8}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){8}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){8}","Mixed Juice(北海道オーラス){8}"],singer:"WEST.",date:"2022-03-09",lyrics:`努力賞なんて後回し
今は勝って満たされたい

もういったい何度言い訳を並べ
弱い自分を愛そうとしたの
そんな事じゃ忘れられぬと分かりながら
噛んだ砂の味を誰よりも知っているから
自分はいいと諦めたんだよ
それでもまだ

嗚呼　隠した想いがしなだれているんだ
どんなに転んだり淀んだり止まったって
その時のために

努力賞なんて後回し
今は勝って満たされたい
「逃げてええやん」が鳴り止まない
けどやっぱ勝ち取りたい
今日を生きた者だけに明日が待ってる
努力賞なんて後回し
今分かって満たされたいだけ

どうやってみたって結果は同じ
そんな事は知ってんだから
無謀な道は選びはしないと誓ったのに

嗚呼　抑えた希望が夜中暴れるんだ
どんなに堪えたり悶えたり眠ったって
忘れられるかよ

努力賞なんて後回し
今は勝って満たされたい
「これでええやん」じゃ物足りない
勝ち取って見せつけたい
起きて見る夢のため震え眠ってる
努力賞なんて後回し
今分かって満たされたいだけ

この野望きっと潰えない
終わりだって見えもしない
そんな人生を愛したい
理由なんてありはしない

努力賞なんて後回し
今は勝って満たされたい
「逃げてええやん」が鳴り止まない
けどやっぱ勝ち取りたい
今日を生きた者だけに明日が待ってる
努力賞なんて後回し
そこで待ってるアナタと
今は勝って満たされたいだけ`},{id:201,title:"Plan B",titleKana:"Plan B",lyricist:"PURPLE NIGHT・Yohei",composer:"PURPLE NIGHT・Yohei",arranger:"PURPLE NIGHT・Yohei",album:["Mixed Juice","Mixed Juice[初回B]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){9}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){9}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){9}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){9}","Mixed Juice(北海道オーラス){9}"],singer:"中間淳太＆神山智洋＆藤井流星＆小瀧望",date:"2022-03-09",lyrics:`Imagine you again
When we were in California
君をかすめた breeze
outta words
You stole my view oh girl
In that summer mansion
ふと気付く My heart beat

Stay　同じぐらいの
BPM
If you're falling behind
I'll balance it

Feel a little closer
Heart to heart
君と作る harmony

I can feel this love is growing on
二人だけの another
(Love)

All my body on your body flowin'
流れて fall
Coming through
Oh baby together

Wrinkled sheets are sweatin'
嵐のような
Plan B. It's true
Oh baby together

Burning down the street
Over and over now
溶けるまで burn

You always play me right
見つめ合う tonight
I got what you need

Over and over now
溶けるまで burn

駆け引きは要らない
体が remember all of....
You, Even I'm your excuse
I don't call it a lie
Oh my love
Give me a sign
(Tell me, what should I do)

All your body
All of your scent
I know it
隠したまま
Coming through
Oh baby together

Wrinkled sheets are flyin'
囁くような
Plan B. It's true
Oh baby together

Burning down the street
Over and over now
溶けるまで burn

You always play me right
見つめ合う tonight
I got what you need

Over and over now
溶けるまで burn

Burning down the street
Over and over now
溶けるまで burn

You always play me right
見つめ合う tonight
I got what you need

Over and over now
溶けるまで burn`},{id:202,title:"情熱",titleKana:"じょうねつ",lyricist:"上中丈弥(THEイナズマ戦隊)",composer:"久保裕行(THEイナズマ戦隊)",arranger:"久保裕行(THEイナズマ戦隊)・名村武",album:["Mixed Juice","Mixed Juice[初回B]"],announce:"t",performances:["Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10){10}","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11){10}","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜){10}","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼){10}","Mixed Juice(北海道オーラス){10}"],singer:"重岡大毅＆桐山照史＆濵田崇裕",date:"2022-03-09",lyrics:`ちょっと未来につまづいて
見上げた夜空が滲んで
そんな日々と　そんな日々と
情けない程うつむいて
切なさに心震えて
そんな夜と　そんな夜と

通り過ぎれば小さな石ころ
分かってるけど心は不器用
大丈夫さいつもの事
陽は昇り　沈む

そうさ
心には燻った火がある
この炎には情熱の名がある
生きる事は辛くとも
何度でも立ち上がるんだよ

子供の頃は挑戦者
止まったら死ぬ求道者
そうだったろ　そうだったな
今も変わらず挑戦者
仲間と共に挑戦さ
そんな事を　そんな事を

愛を知るから起き上がるんだぜ
背負ってるから潰れないんだぜ
傷だらけでも笑えたら
他にはもう　要らない

そうさ
俺達を繋いでる手がある
この温もりと高鳴った鼓動はエール
生きてこその未来だと
届けよう　遠く遠くへ

いつかまた悲しみに打ちのめされて
地を這うよな孤独が来るかも知れない
切なさを抱きしめて　乗り越えた夜を
噛み締めた唇は　忘れない傷跡のまま

君の目に見えるのが希望なら
どんな悲しみも吹き飛ばすヒーローになろう
それが俺達の明日
俺達の生きる証さ

心には燃えたぎる火がある
この炎には情熱の名がある
生きる事は辛くとも
この手は　離さないから`},{id:203,title:"星の雨",titleKana:"ほしのあめ",lyricist:"敬也-amazuti-(KEYTONE)",composer:"敬也-amazuti-(KEYTONE)",arranger:"生田真心",album:["星の雨","星の雨[初回A]","星の雨[初回B]","星の雨[通常盤]","星の雨[通販盤]","POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["TO BE KANSAI COLOR-翔べ関西から-(大阪){17}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){16}","TO BE KANSAI COLOR-翔べ関西から-(東京){17}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){17}"],singer:"WEST.",date:"2022-08-03",tiup:"テレビ東京系ドラマ24『雪女と蟹を食う』主題歌",lyrics:`僕らの前に　流れる星の雨
掴みたくて　掴めなくて　また手を伸ばし
そこで夢から覚める
忘れたいのに　忘れていいのか分からないのに
輝きだけは覚えている

もしも神様がいるなら　どんな顔してんだろう
なんて言ったものの　興味もなくて
ただ続く道路(みち)を走らせる
スピードを上げて　向かい風を受けるたび
こんな季節なのに　少し肌寒く感じてしまうような

別にもう　寂しくないよ全然この通りさ
地図はないけど　身を任せてみようか
いつだって平気だ　平気だ

僕らの前に　流れる星の雨
掴みたくて　掴めなくて　また手を伸ばし
そこで夢から覚める
忘れたいのに　忘れていいのか分からないのに
残酷だ　輝きだけは覚えている

枝わかれしてる　場所に何度もさしかかる
通ってきたとこ　通らずきたとこ
今も佇んで一人

時が経って　忘れてしまったようで
ちゃんと覚えている事もあったりして
あの夜も　あの朝も

ただもう少し　あともう少しだけ
寝転がって　果てしなく続く夜空に
そっと手を伸ばしてみる
星を辿れば　僕だけの形になるかな
朝がくるその前に　また走りだす

目覚めよう　押し込もう
今日も美しい一日が僕を待っている
笑っていよう　押し込もう

すぐそこにある　小さな奇跡には
なかなか気付けず過ごしてしまうから
上手くいかないもんだよな
でも確かな温度は
君と僕が感じたはずの僕らだけのこの人生は
信じたい　ただそれだけ

僕らの前に　流れる星の雨
掴みたくて　掴めなくて　また手を伸ばし
そこで夢から覚める
もう届かなくても　もうそこにあるはずもなくても
君と見た　輝きだけを覚えていく`},{id:204,title:"SOUL 2 SOUL",titleKana:"SOUL 2 SOUL",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["星の雨","星の雨[初回A]","星の雨[初回B]","星の雨[通常盤]","星の雨[通販盤]"],announce:"t",performances:["TO BE KANSAI COLOR-翔べ関西から-(大阪){15}","TO BE KANSAI COLOR-翔べ関西から-(名古屋){14}","TO BE KANSAI COLOR-翔べ関西から-(東京){15}","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス){15}"],singer:"WEST.",date:"2022-08-03",lyrics:`ちょっと待った　話そうぜ　いいか
ベストがマストなわけないさ
いつからでも　燃やそうぜTHE SOUL
全肯定型キャンペーン　いっちょかましましょ

THE SOUL！！
THE SOUL！！

正解は　世界にあるのか？
雑草って　誰が決めるんだ？
「早起きは三文の徳」って
それ　誰得！？
Hhaaaa…

みんな考え過ぎって
自分だってそうで
結局　一緒なんだな Ah

カモン！
Everybody　集合！

THE SOUL！！
抱きしめたもん勝ちだろう
キミの中の答え
THE SOUL！！
そうだ世界は　後からついてくる
やっちゃえばいい Wow
どちらもありでしょ　キミはどう？

盛大に頬上げてみっか
最大の味方は自分だ
「三歩進んで二歩下がる」って
いいじゃん　進んでんじゃん
GOOOOOOOO

自然体って　なんだろな
どれもこれも全部ジブンか
今はそれでいいんだな Ah

カモン！
Everybody　注目！

THE SOUL！！
抱きしめたもん勝ちだろう
キミの中の答え
THE SOUL！！
そうだ世界は　後からついてくる
やっちゃえばいい Wow
どちらもありでしょ　キミはどう？

ちょっと待った　話そうぜ　いいか
ベストがマストなわけないさ

…とか言って
真っ直ぐしか進めないし俺
四六時中　超陽キャな君
石橋叩いて壊すの誰？
(あーーーー誰だ？)

冒険　最善　好奇心旺盛　どーすんだ？！(どーすんだ？！)
安心　安定　帰宅部OK　何が悪いの？(そうだよな！)
こっそ　こっそ　無言実行も　マチガイない　そう(マチガイない！)
行ったり来たりで　息してんだ
話して　沸かして　どんちゃんしようゼ

Everybody　集合！

THE SOUL！！
抱きしめたもん勝ちだろう
キミの中の答え
THE SOUL！！
そうだ世界は　後からついてくる
やっちゃえばいい Wow
どちらもありでしょ　キミはどう？

THE SOUL！！`},{id:205,title:"愛情至上主義",titleKana:"あいじょうしじょうしゅぎ",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["星の雨","星の雨[初回A]"],announce:"t",performances:["POWER(宮城){26}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){25}","POWER(愛知オーラス){25}"],singer:"WEST.",date:"2022-08-03",lyrics:`ガソリンランプが光ってる　オレンジに沈む夕日
暗闇に渇いてく僕を今すぐに　抱いて欲しい

1に君と
2に僕は
3しがない毎日が横たわる

「GO WEST」のぞみはある
最終列車へ急げ！今夜！

君を抱きしめる
ほかに何にももういらない
指折り数えて待った手を
ほどいて　伸ばしていく

待ってるかい？君は
行けよ行けばわかるんだ
記録にも記憶にも残すような
自己ベストで抱いてやる

1に孤独
2に涙
3しあわせはどこにある

「GO WEST」元気ですか
会いたいから何でも出来る

1、2、3、

大好きだ　愛してる
ほかに何にももういらない
ぬくもり数えて笑ってた
あの日々　取り戻す

待ってるかい？君は
行けよ行けばわかるんだ
記録にも記憶にも残すような
自己ベストで愛してね

記録とか記憶とかどうでもいいや
自己ベストでギュッと抱いてやる`},{id:206,title:"Crazy about you",titleKana:"Crazy about you",lyricist:"草川瞬",composer:"Albin Nordqvist・Marcus Lindberg・草川瞬",arranger:"Marcus Lindberg",album:["星の雨","星の雨[初回B]"],announce:"f",performances:[],singer:"WEST.",date:"2022-08-03",lyrics:`脳内駆け巡る　ただ　心ごと全て奪うMy girl
後悔などさせないから　So baby you can count on me
こんなジグザグの君と僕の恋の始まりは突然だった
最初はお互いに気にしてなかったのに

こんな好きになるとは思わずに　Baby　引き込まれたMaze
迷ったまま探さないExit
閉じ込めた気持ちの中で二人彷徨ってゆきたい
C'mon baby

Can you feel my love　手を繋いで
Laugh and laugh　So KissしてHugしよう
君以外　興味無い Crazy about you, crazy about you
Love me, love me　君の愛をもっと感じたい
瞳閉じて Crazy about you, crazy about you

決められた人生なんてNo way　だけど君との出会いは運命
その横顔守ってゆくよ　何があってもJust don't care

どんなチグハグも君と僕を彩る為の演出だって
些細な言い合いも絆を深めてゆく

そうさ Crying　涙は似合わない　Timing逃さず取るMood
たった一瞬でも逃さないメモリー
気付かぬようにそっと　僕の色に君を染めてゆく
C'mon baby

Can you feel my love　繰り返し
Touch your heart　君で心埋まるまで
君以外　興味無い Crazy about you, crazy about you
Love me, love me　体温で溶けるぐらいの恋しよう
もっと感じて Crazy about you, crazy about you

何もいらない君がいるだけで
Everyday, Everynight, All my life
Tell me, tell me, tell me, tell me, How about you？
ずっと君のそばで感じよう
二人だけの愛の言葉

Can you feel my love　手を繋いで
Laugh and laugh　So KissしてHugしよう
君以外　興味無い Crazy about you, crazy about you

Can you feel my love　手を繋いで
Laugh and laugh　So KissしてHugしよう
君以外　興味無い Crazy about you, crazy about you
Love me, love me　君の愛をもっと感じたい
瞳閉じて Crazy about you, crazy about you`},{id:207,title:"イキテヤレ",titleKana:"いきてやれ",lyricist:"岩越涼大",composer:"岩越涼大",arranger:"NAOKI-T",album:["星の雨","星の雨[通常盤]","星の雨[通販盤]"],announce:"t",performances:["POWER(宮城){18}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){18}","POWER(愛知オーラス){18}"],singer:"WEST.",date:"2022-08-03",tiup:"TBS系『DEEPな店の常連さんに密着 イキスギさんについてった』テーマソング",lyrics:`「愛」という嘘だらけの　この街じゃまた笑われたり
何が正義かなんて　突然悩んで怯えたり

「そこには何もない」「金にならないからしない」
「楽しそうだからやる」「嫌われそうだからやめておこう」

どんな理由だって人生は
間違ってもそう　完璧じゃなくても
信じた明日が答え

意味などないって笑う世界が
呆れるくらい　イキテヤレ
リアルな自分に正直になって
無駄こそ　僕らの生きるパワー
そこに意味は生まれてゆく

「とりあえず」が口癖にいつも歩いてしまうけど
それは本心じゃなくて　理想はちゃんとあって
でも「今日は何食べよう」とか考えるだけで
幸せになれたり　なれなかったりもする

夢なんてなくたって人生は
笑えるのにな　涙できるのに
何か探してしまうよ

なりたい自分に逢える気がして
だからこそまだ　イキテヤル
誰かが描いた地図にないような道でも
眩しいと思う方へ…

不揃いな僕ら　それぞれ違うけど
みんな見上げる　青空を
その下で何ができるのかなんて
わからないけど　もう少し知ってみたくて

意味などないって笑う世界が
呆れるくらい　イキテヤレ
リアルな自分に正直になって
無駄こそ　僕らの生きるパワー
そこに意味は生まれてゆく`},{id:208,title:"サマーレイン",titleKana:"さまーれいん",lyricist:"山崎あおい",composer:"川口進・MiNE・Atsushi Shimada",arranger:"井上薫",album:["星の雨","星の雨[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2022-08-03",lyrics:`水たまりに　反射した空
君はなにをしてるかな
ぼんやり歩いてたら　染みてくつま先
気づかないうち　アイスは溶けて

カメラロール　ふざけた夏が
いとしくて　ぎゅっとなる　会いたいや
色づく季節を　確かめあってから
当たり前が　ずっと

ああ　瞬いて　きらり　雨粒みたいに
そう、きらり　今を照らすんだ
雲の切れ間から　こぼれた
ホントの愛が

いつか　寝ぼけた朝　聴いたような
めまいのなかで　見たような
曖昧なシアワセの途中
君のままで　僕のままで　続くように

空回りで　張り切るくせに
タグのついたままのシャツ
ほっとけない人だと　笑ってくれるから
退屈だって　好きになれたんだ

たぶんそうだ　この恋だけは
何十年　何百年　キリないや
汗ばむ想いが　夜風に冷めても
深いとこで　もっと

ああ　夢のなか　ゆらり　漂うみたいに
そう、ゆらり　同じ歩幅で
寄り道しながら　見つけた
心のありか

いつも　やけにさ　照れ臭くなって
ダメだな　冗談めかして
曖昧な約束ばかり
形にしよう　言葉にしよう…今度こそは

初めてだよ　こんな素顔
僕が最後なら　いいのに
おどけた嘘まじり　でもホントの気持ち
ひとつになる　甘い味

ああ　瞬いて　きらり　雨粒みたいに
そう、未来さえも照らすんだ
雲の切れ間から　こぼれた
ホントの愛が

いつか　寝ぼけた朝　聴いたような
めまいのなかで　見たような
曖昧なシアワセの途中
君のままで　僕のままで　続くように`},{id:209,title:"Summer Memories",titleKana:"Summer Memories",lyricist:"山下洋介",composer:"山下洋介",arranger:"山下洋介",album:["星の雨","星の雨[通販盤]"],announce:"f",performances:[],singer:"WEST.",date:"2022-08-03",lyrics:`(It's burning hot!!) Summer Memories
(Heating the Beat!!) Summer Memories

雲間から射す光を
(Feelin' the winds) キャッチして
クラっとくるくらいでBaby
(Crazy! Crazy!!) 焦がす胸

Let's have a good time!! good time!!
何度だって交わそうフィーリング　浜辺に繰り出して
Let's have a good day!! good day!!
迫る波音が　憂鬱を吹っ飛ばすBGM

Burning da 太陽に向かって
What's up!?What's up!?
水平線遥か蜃気楼へ　夏を迎えに行こう

Clap your hands!!!
日差しスリ抜け　気分最高潮
君と･･･
今日から始まる　熱い日々に
Are you ready!Summer Days!!

(Heating the Beat!!) Summer Memories

渚へと通り過ぎてった
(Feelin' my heart)誘惑
悩殺な笑顔にちょっと
(Crazy! Crazy!!) 目も眩む

Let's have a good time!! good time!!
もっと感じたいねExcite 午後の夏空は
Let's have a good day!! good day!!
ヤケドしちゃいそうな　夕立も遠慮するサプライズ

Shining da ビーチから響くよ
Come on!! Come on!!
海岸線そっとなぞったなら　夏を迎えに行こう

Clap your hands!!!
日差しスリ抜け　気分最高潮
君と･･･
追い風目一杯　重なり合う
奇跡のSummer Days!!

高鳴る胸騒ぎ　まだ終われない
火照る砂浜に　刻もうSummer Memories

燃え盛る夏のGrooveに　Get on!! Get on!!
魅惑的な季節が　僕らを包み込む
Last Forever･･･

Burning da 太陽に向かって
What's up!?What's up!?
水平線遥か蜃気楼へ　夏を迎えに行こう

Clap your hands!!!
日差しスリ抜け　気分最高潮
君と･･･
二度と戻らない　広がる世界
Are you ready! Summer Days!!

(Heating the Beat!!) Summer Memories`},{id:210,title:"POWER",titleKana:"POWER",lyricist:"中村瑛彦・栗原暁(Jazzin'park)",composer:"中村瑛彦・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)・中村瑛彦",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",performances:["POWER(宮城){29}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){28}","POWER(愛知オーラス){28}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){30}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){30}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){30}","9周年生配信トーク＆ライブ「虹会」{1}"],singer:"WEST.",date:"2023-03-01",lyrics:`Hi！
We got the POWER！！

46億年の地球(うえ)で生きる
そりゃ色々ある
そう考えりゃ今日も
人間関係 Big Bang　頑張れます

何十兆もの細胞's
ハーモニーは最高
奇跡の集合体　気分はどうだい？ Yeah
こんなもんじゃないでしょ
So Powerful！？

バタンキューでヘトヘト
ベッドよりもソファにお世話になる
最幸の前フリさ

ありったけでオレ幕開け
味わっていこうぜ
しんどいもめんどいもスパイシー超魅了
迷ったら走ってみるだけ
Day by Day　御Newの自分へ
生まれ変われ
さぁ　出会おうぜ

20XX年！　調子はどう？
Come on！ Spotlight！？
正解も不正解も自分次第さ
パンプアップします

怯むなオレ　ブレんな Ole！！
奇石の集合体　磨いていこうぜ Yeah
こんなもんじゃないでしょ
So Powerful！？

「とりあえず生」でヘロヘロ
5%の黄昏で生き返る
最幸に弾けるさ

ありったけでオレ幕開け
味わっていこうぜ
しんどいもめんどいもスパイシー超魅了
迷ったら走ってみるだけ
Day by Day　御Newの自分へ
生まれ変われ
さぁ　出会おうぜ

Come on！
Never Never
Give up Give up
POWER！！
皆皆　様様
POWER！！

悲しみのエネルギーよ
喜びのエネルギーを燃やせ POWER！！

ありったけ　生きてくだけで
まずは合格だぜ？
しんどいもめんどいもスパイシー超魅了
迷ったら走ってみるだけ
Day by Day　御Newの自分へ
生まれ変われ
誰でもない産声
はじめまして
さぁ　出会おうぜ`},{id:211,title:"WEST NIGHT",titleKana:"WEST NIGHT",lyricist:"こやまたくや(ヤバイTシャツ屋さん)",composer:"こやまたくや(ヤバイTシャツ屋さん)",arranger:"ha-j",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",performances:["POWER(宮城){3}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){3}","POWER(愛知オーラス){3}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){14}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){14}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){14}","サマソニ2023(大阪,東京){3}","めざまし30周年フェス(東京){3}","KOYABU SONIC2024{5}","CDTV ライブ！ ライブ！春の大感謝祭2025{1}","WEST. 10th Anniversary Live “W”{15}","WEST. 10th Anniversary Live “W”-Film edition-{16}"],singer:"WEST.",date:"2023-03-01",lyrics:`WEST NIGHT (Fu・Fu～！)
Let's go, WEST NIGHT

わいわい！今夜　作るストーリー
えーえー！感じに　ケミストリー
最高の夜にするぜ　君とまじで
タダじゃおかないぜ

爆速で駆け上がってるだけじゃ　息が切れてまうで
でも冷静じゃいられへん　ぶっぱなして　完走すんで
誰にも止めさせへんわ

とかカッコつけてるけど　しんどい時はしんどい！
けど余裕を見せたいから　強く hold you tight
オモロくて優しい人になりたい
君のこと　とにかく笑かしたい

納得いかん毎日を　なんでやねんで押し切るで
西の夜は長いど　ほな踊ろう　歌おう　この歌を
朝まで離さんで　帰さへんで

わいわい！今夜　作るストーリー
えーえー！感じに　ケミストリー
最高の夜にするぜ　君と居ると
楽しい!!!!!!!
わいわい！今夜　作るストーリー
えーえー！感じに　ケミストリー
最高の夜にするぜ　君とまじで
タダじゃおかないぜ

俺がボケたときはちゃんと　全力でツッコんでくれ
そんな冷たい目せんといて　確かにネタ弱かったけど
心は折れてへんわ

とかカッコつけてるけど　悔しい時は悔しい！
けどもっと一緒に居たいから　挑む more smile
しょうもないことばっかり言いたい
愛想尽かさんといてね　お願い！

退屈過ぎる日常を　なんでやねんで押し切るで
西の夜は長いど　ほな踊ろう歌おう　この歌を
朝まで離さんで　帰さへんで

「えー！なんか元気ないやん！どうしたん！？」
「やっぱお前のこと笑かしたいねん！」
「そうそう、その笑顔めっちゃええやん」
「いつでも俺んとこ遊びにきいやー！」

わいわい！今夜　作るストーリー
えーえー！感じに　ケミストリー
最高の夜にするぜ　君と居ると
楽しい!!!!!!!
わいわい！今夜　作るストーリー
えーえー！感じに　ケミストリー
最高の夜にするぜ　君とまじで
タダじゃおかないぜ

今夜はまじで WEST NIGHT
みんなどない？気付いたかい？
サビの頭文字とったら 「W・E・S・T」
すごい！WESTになっとるで！
これすっごいこと　起きとるで！
だからなんやねん！って話やけどさぁ
そのぐらいの遊び心を大切に
したいよな　なんて思ったりするよな
俺と君の化学反応で
しょうもない夜も全部 PARTY NIGHTに変える
It's WEST NIGHT`},{id:212,title:"Rewind It Back",titleKana:"Rewind It Back",lyricist:"PURPLE NIGHT",composer:"PURPLE NIGHT",arranger:"PURPLE NIGHT",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",performances:["POWER(宮城){5}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){5}","POWER(愛知オーラス){5}"],singer:"WEST.",date:"2023-03-01",lyrics:`Rewind it back

フルムーン
City lights
染みつく君の香水 tonight
踊ろう
近づいて groovin'
終わらない夢に乗せて

Tell me what you wanna hear baby
Oh　耳にそっと囁いてあげるよ
ステージに立つ二人
Yo DJ drop the Friday
かけて Your favorite song
READY？
Let it go let it go now

I wanna feel you now
Come try me baby
言葉は要らない
I know you feel me now
重なる movin'
見つめ合う今を
Rewind it back

Rewind it back
Rewind it back

Drum bass vibesが作る
完璧な夜
Spin spin our フィルム
ここにはない
There is no border
隠したい shyは
通用しないんだ alright yeah
Come in close
Come in close
僕らに任せて
West Johnny's on the track
めくろう brand new chapter
夜が明ける our episode

Tell me what I wanna hear baby
この胸の中に響かせてよ now
時の流れに Jump in
Yo DJ drop the Party
かけて Our favorite song
READY？
Let it flow let it flow yo

I wanna feel you now
Come try me baby
言葉は要らない

I wanna feel you now
Come try me baby
迷いは要らない
I know you feel me now
I can't stop groovin'
夢だとしても oh
Rewind it back

Rewind it back
Rewind it back`},{id:213,title:"膝銀座",titleKana:"ひざぎんざ",lyricist:"ミヤケ武器",composer:"ミヤケ武器",arranger:"ミヤケ武器",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",performances:["POWER(宮城){7}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){7}","POWER(愛知オーラス){7}","KOYABU SONIC2024{3}"],singer:"WEST.",date:"2023-03-01",lyrics:`膝、膝、膝、膝集まれば膝銀座
若者達が膝を寄せ合い、膝を打ち、膝で笑い、膝を伸ばし
夢の膝集まる膝銀座

出会い頭　膝頭合わせたい
が、右膝頭と左膝頭平行線
膝に住む小僧耳貸そう
探せばある膝銀座

ダン・ド・ダンディン

「ねぇ、ヒザって10回言って」
嫌だって言われて
膝から崩れ落ちた公園で
膝小僧なんて汚れて良いって
強がりながら膝小僧を抱えて

呪文のように膝膝言い出してる
吸い寄せられて膝集まり出してる

膝膝並べて膝銀座　夢叶えたいな膝枕
膝膝傷増え傷銀座　膝膝合わせたいな膝銀座

ダン・ド・ダンディン

ヒザ、ヒザ、ヒザ…って10回言った後に
肘を突き出して「ここは何？」って
それをやるならピザと言わせて
銀座で食べたあのマルゲリータ

君の膝がもう大人になりだしてる
僕の膝はやっとかさぶためくれだす

僕のkneeも君のkneeも傷を負ってgrowでup
大きくなってまた並べたいな

おやおや若者達は今日も膝銀座で膝を合わせて、膝、膝、膝！

膝膝並べて膝銀座　空いた愛だ君から膝枕
膝膝おかしくなりそうな　膝膝合わせて膝銀座

絆創膏で覆えないや　膝とも談合したい
七重の膝を八重に折れれば膝銀座

ダン・ド・ダンディン`},{id:214,title:"恋にて",titleKana:"こいにて",lyricist:"ARAKI",composer:"ARAKI",arranger:"ARAKI",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",performances:["9周年生配信トーク＆ライブ「虹会」{2}"],singer:"WEST.",date:"2023-03-01",lyrics:`ボックス席に溜まる水滴を
君が拭き取った瞬間に
今日も終わってしまうんだ

何回会って、何分話して
出来上がった“いつも通り”は
僕が欲しいモノとは違っていたんだ

月が綺麗で何もかも弾けそうな
路地裏のフィルムで君を撮って
最初から到底“LIKE”じゃないと
思い出したの

ごめんなさい　もう帰さない
僕らにもう嘘は要らないよ
当て馬だって気にしないよ
もっとあなたに堕ちている
ずっと　2人で夢のように
昔から好きな歌のように
運命なんて　奇跡だなんて
どうでもいいって
あの時、恋を知った

バイバイまであと少しぐらい
まだ勘違いしてたいんだ
いつも通りに茶化してくだらない
意味のない　2人のまま

君の匂いが今になって僕を試す
大概はひと目で息を呑んで
無意識で恋するタイプじゃないと
思っていたの

ごめんなさい　もう離せない
優しさなんかで誤魔化さないで
涙の跡を探して撫でる
その風になってゆく
そっと　2人で抜け出すように
あの頃の夜を騒ぐように
後先なんて　理由だなんて
どうでもいいって
迷える手を握った

誰かのせいで泣いた君を
肩を並べて慰めても
君との関係は僕にとって
最初から当然“LOVE”じゃないと
思っていたの
見ないフリして
本当はずっと

愛してたの　ごめんなさい
僕らにもう嘘は要らないよ
当て馬だって気にしないよ
もっとあなたに堕ちている
ずっと　2人で夢のように
昔から好きな歌のように
運命なんて　奇跡だなんて
どうでもいいって
あの時、恋を知った

ボックス席に溜まる水滴を
君が拭き取った瞬間に
今日が終わってしまうんだ`},{id:215,title:"Share The Time",titleKana:"Share The Time",lyricist:"Yu-ki Kokubo",composer:"Yu-ki Kokubo・Eunsol(1008)・SUNHEE",arranger:"Eunsol(1008)・ Gou Ishikuro",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"f",performances:[],singer:"WEST.",date:"2023-03-01",lyrics:`遠くで　瞬く　淡いStar
今も手、伸ばしてる
Neon light　眩い　ビルの隙間
瞳、凝らした
いつかは届くかな？

誰かが敷いたレールは歩きづらくて
ずっとSet me free
遠回りでも　一つ一つがマテリアル

世界を変えるくらいの
POWER(チカラ)かわからないけど
その泣き顔、笑顔に変えてみせるから
君がいるから僕がいて
ちょっとやそっとくらいじゃ全然ブレないOur trust
モノクロな景色も照らして (Lit up)
共にOne way (Ready steady go)

Be together
最高の未来へ
La la la la
Say la la la la
願えば　叶うと信じて
Baby, sing a long
響かせよう La la la

Let me share the time (Can you feel it now？)
どんな瞬間も (Every moment)
So let me share the time (Don't you give me now？)
ずっとずっと歩んでこう
Be together

飾らないYou & me
軌跡が証明に (Cuz we are precious)
10年先だって
バカ笑いしてたいね (Always together)

めくるPage　繋ぐPhrase
Back in da day, yah
ヤワなSense　脱ぎ捨てWe'll never change
思い通りの景色じゃなくたって (Alright)
共にOne step (We gotta go now)

Be together
描いた未来へ
La la la la
Say la la la la
掲げた　夢のトキメキで
Baby, sing a long
響かせよう La la la

Let me share the time (Can you feel it now？)
どんな瞬間も (Every moment)
So let me share the time (Don't you give me now？)
ずっとずっと歩んでこう
Be together

好きで選んだ道を
好きのままでいたいから
ボロボロになった Shoelace　結び直したら
さぁ踏み出そう

Be together
最高の未来へ
La la la la
Say la la la la
願えば　叶うと信じて
Baby, sing a long
響かせよう La la la

Let me share the time (Can you feel it now？)
どんな瞬間も (Every moment)
So let me share the time (Don't you give me now？)
ずっとずっと歩んでこう
Be together`},{id:216,title:"Mood",titleKana:"Mood",lyricist:"D&H(PURPLE NIGHT)",composer:"Adam Alexander Sjostrand・Tobias Naslund・Maria Marcus",arranger:"Tobias Naslund・前田佑",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",performances:["POWER(宮城){6}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){6}","POWER(愛知オーラス){6}"],singer:"WEST.",date:"2023-03-01",lyrics:`高まるfeel 登場は like a kingkong
カミナリ speedで Level up リロード
東 to the West side 全部 Get down
敵はもう Freeze it's time for chaser
数えてcount down 3.2.1 鬼は俺のターン
隠れ You better run
oh oh

Everywhere I go I'm on the red carpet
빛이나는 Aura 가 날 감싸 yeah
全てが完璧な気流 you know
はみ出して my highway to go

太陽が月に重なる時に
Oh kill the pain and noise
Eclipseの隙を狙え I'm on beast mode

襟 立てて I'm in 狩 mood
肩 叩いて walking smooth
ランプのGenieみたいに make wish to true
Watch yourself I'm in 狩 mood
触れたものは 全部 follow me

君が俺に 堕ちる狩
顰(しか)める 3rd eyes
(3rd eyes on)
Watch yourself I'm in 狩 狩 狩 mood

邪魔させない
口だけのやつとは 相手にもならない right
I don't take it
数えきれない声と想いが
俺の proof you know it right now

正面から show me what you got! Okay
바람조차 피해가는 perfect swag
答えはすでに break into the 脳
はみ出して my highway to go

繰り返して繋げて行く Our race
Oh kill the pain and noise
溜めた息を吐き出して Beast mode

襟 立てて I'm in 狩 mood
肩 叩いて walking smooth
ランプのGenieみたいに make wish to true
Watch yourself I'm in 狩 mood
触れたものは 全部 follow me

君が俺に 堕ちる狩顰(しか)める 3rd eyes
(3rd eyes on)
Watch yourself I'm in 狩 狩 狩 mood

I can feel flame under my skin raise up
焦がす渇きが burn and burn
飢えた牙で bite you now
獲物は”R3” I got it

顰(しか)める 3rd eyes
生まれる One of kind
一歩踏み出したら 噛みつくまで
ooh Got it right ya

襟 立てて I'm in 狩 mood
肩 叩いて walking smooth
ランプのGenieみたいに make wish to true
Watch yourself I'm in 狩 mood
触れたものは 全部 follow me

君が俺に 堕ちる狩
顰(しか)める 3rd eyes
(3rd eyes on)
Watch yourself I'm in 狩 狩 狩 mood`},{id:217,title:"We're the one",titleKana:"We're the one",lyricist:"川口進・坂室賢一",composer:"川口進・坂室賢一",arranger:"井上薫",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",performances:["POWER(宮城){21}"],singer:"WEST.",date:"2023-03-01",tiup:"ヤマザキ『ランチパック』CMソング",lyrics:`ねぇ
人波に隠れてはぐれないように
ボロボロのシャツ　汚してきた夢はどこ？
ねぇ
なんとなくの昨日を　振り返れない今日
ほどほどの明日　想像した自分にBye Bye

踏み出せばいい　いつだって僕ら
その一歩　何度も

君に届け　熱い想い
心からの We're the one
明日は明日の風が吹く
笑えばきっと
愛を探そう　夢を語ろう
僕たちに無限大の未来が
笑顔で手招きしている
大丈夫さ　一人じゃない
We're the one！

ねえ
あてもない瞳が見つめるTimeline
本当の君　その声で聴きたいじゃない？

二度とない瞬間(とき)を共に生きてる
「奇跡」なんかじゃ足りない

君に届け　強い気持ち
信じたなら We're the one
いつかの夢はリアルになる
君ならきっと
愛を探そう　夢を語ろうに
いつだって胸の中の答えは
希望を指差しているんだ

全力の汗も悔し涙も　繋いできた想いも
全部抱きしめていこう
いま動き出すんだ

君に届け　強い気持ち
信じたなら We're the one
いつかの夢はリアルになる
君ならきっと

君に届け　熱い想い
心からの We're the one
明日は明日の風が吹く
笑えばきっと
愛を探そう　夢を語ろう
僕たちに無限大の未来が
笑顔で手招きしている
大丈夫さ　一人じゃないん
We're the one！

We're the one！`},{id:218,title:"むちゃくちゃなフォーム",titleKana:"むちゃくちゃなふぉーむ",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"久保田真悟(Jazzin'park)",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",performances:["POWER(宮城){32}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){31}","POWER(愛知オーラス){31}"],singer:"WEST.",date:"2023-03-01",lyrics:`なぁ　大人になれば解るって　誰かの言葉
いま　僕は大人になれますか　なぁ　なぁ

やれそうかな　やれなそうだな　やりたいんだけどな
無茶をする歳じゃないし　そうさ
どうしようもない　しょうがないって
自分モドキじゃない　もう終わらすんだ　この涙

むちゃくちゃなフォームで生きていく
そんな背中悪くもないか
心臓だって　ど真ん中を
一歩はみ出し止まらないんだ
ぐしゃぐしゃなフォームで笑ってる　夢はありますか？
あるよ　あるよ　僕にもやれるんだ

なぁ　地球の色は青だって　もしも嘘なら
あぁ　怒りはしないよ　この目で見たいな

話そうかな　話せそうだな　話があるんだ
強くも弱くもない僕　そうさ
普通なんだよ　普通ってなんだ
ただいまってきっと言える
そう思えたんだ　この涙

むちゃくちゃなフォームで生きていく
そんな背中に羽があった
信じてるって　ただそれだけで
風が旅立ちを告げたんだ
ぐしゃぐしゃなフォームで笑ってる　夢はありますか？
あるよ　あるよ　君にも見せるんだ

君がいるのに　僕がいるのに
人はなぜだか　人はなんだか
君じゃないとか　僕じゃないとか
君以外だとか　僕以外だとか
君じゃなくても　僕じゃなくても
世界は巡っていこうとするんだ
なんとなくまた陽が沈む

むちゃくちゃなフォームの愛してる
どんな理屈も敵わないな
そばにいようか　そばにいたいな
ぬくもりだけは守りたい

むちゃくちゃなフォームで生きていく
そんな背中悪くもないか
心臓だって　ど真ん中を
一歩はみ出し止まらないんだ
ぐしゃぐしゃなフォームで笑ってる　夢はありますか？
あるよ　あるよ　君にも見せるんだ

むちゃくちゃなフォームで生きている　いつか会えますか？
そうか　そうだ　僕にもやれるんだ

僕らはやれるんだ`},{id:219,title:"忘れないでいてね",titleKana:"わすれないでいてね",lyricist:"大橋ちっぽけ",composer:"大橋ちっぽけ",arranger:"岩崎隆一",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",performances:["POWER(愛知オーラス){32}","9周年生配信トーク＆ライブ「虹会」{4}"],singer:"WEST.",date:"2023-03-01",lyrics:`君が好きなものが好き
それを話す君の瞳は
どんな闇さえもかき消しちゃうから
僕なんて　強くなくて
その光にまた救われてる
でも　これだけは伝えておきたいんだ

愛し方は忘れないでいてね
不確かなものばかりに思えて
本当の君を無くさないでね

そう　君だけが僕の太陽
沈んでしまう夜だって
どうか恐れずいてほしいよ

総じて風の強い日ばっか
「優しく在りたい」なんて
その想いだけでじゅうぶんさ

愛し方は忘れないでいてね
本当の君を無くさないでね

未だ世界はコンプリケイテッド
ちょっと辛いことが大前提？
流されなくていいんだよ
変わらずに　ほらシングアロング

誰だって　見失っていく
心を震わせた原体験
もう一度　その胸に手を当てて

愛し方は忘れないでいてね
どんな感動と君が出会って
大切になったのか　聞かせて

そう　君だけが僕の太陽
曇ってしまう表情を
何も恥じることはないよ

総じて風の強い日ばっか
「優しく在りたい」なんて
その想いだけでじゅうぶんさ

街の喧騒に砂埃
宝物も煤けていく
綺麗じゃなくても　気にしないでよ
否定じゃなくて　LOVEにしかない魔法
その力だけはどうか　忘れないでいてね

愛し方は忘れないでいてね

そう君だけが僕の太陽
沈んでしまう夜だって
どうか恐れずいてほしいよ

総じて風の強い日ばっか
「優しく在りたい」なんて
その想いだけでじゅうぶんさ

愛し方は忘れないでいてね
本当の君を無くさないでね

忘れないでいてね`},{id:220,title:"アンノウン",titleKana:"あんのうん",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["POWER","POWER[初回A]"],announce:"t",performances:["POWER(宮城){8}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){8}","POWER(愛知オーラス){8}"],singer:"WEST.",date:"2023-03-01",lyrics:`愛されたい？ hah...
愛していい？ see ya...

誰もいない　やけに無口な部屋
現実逃避　探すキミの抜け殻
雨上がりの虹を待つ Timeline
あてのないメッセージ
綴っては消し　読み返しては消し...

何も持たず Walking in the dark
忘れさられた　公園のベンチ
誰かが捨てた　愛も風晒し
そこは寂れた One man stage

自分重ね　涙の雨
色のない世界...
No more pain
No more rain

行き場のない　この感情
痛みの破片　かき集めて
想い出に火を灯してるだけ

泣いても泣いても許してみたり
笑って笑ってごまかしたり
気付けば Passion　無防備んなって
Ah...
愛されたい？ hah...
愛していい？ see ya...
息しても良い場所探した

愛されたい？ hah...
愛していい？ see ya...

逃げ出した　そこは酷く広い世界
知りたくもない　現実ばかりスクロール
華やかな Fake　踊らされる Truth
拡声器で本音晒す
匿名(アノニマス)

要らないエンパシー
Shower で洗い流し
物思いにふけ　今夜飛びたい気分
空などないさ...
笑えないジョーク
それなら楽しめ True man show

入り口だらけ
出口なんてないんだ
No more fantasy
此処はどこ　僕は誰

抱きしめた　この感情
君の欠片　集めた
カレイドスコープ
もっと覗いて欲しいだけ

理想な自分演じてみたり
ジャンクな気分晒してみたり
気付けば Passion　無防備んなって
Ah...
愛されたい？ hah...
愛していい？ see ya...
息しても良い場所探した

行き場のない　この感情
痛みの破片　かき集めて
想い出に火を灯してるだけ

ただたわいのないキスをして
またじゃれあってカラダ重ね
気付けば Passion　無防備んなって
Ah...
愛されたい？ hah...
愛していい？ see ya...
息しても良い場所探した`},{id:221,title:"Guilty",titleKana:"Guilty",lyricist:"渡辺拓也",composer:"渡辺拓也",arranger:"渡辺拓也",album:["POWER","POWER[初回A]"],announce:"t",performances:["POWER(宮城){20}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){19}","POWER(愛知オーラス){19}"],singer:"WEST.",date:"2023-03-01",lyrics:`明けない夜　月が照らす
光と影　浮かぶregret

僕ら時代をただ睨んでいる
だけど未来を今　探してんだよ
一筋の希望　光射す日まで

叫んで　壊して　うざったい罪はもう捨てて
破って　吐き出して　抱いた痛み愛していたい
守りたい大切なもんだけ　無くさないように

変わり続けてく毎日の中で　戸惑い　溺れて
見つけ出した答えすら信じ合えず　傷つけ合ってしまった

誰も知らず知らず　すれ違ってく
だから君の想い伝えなきゃ
過去の過ちを許し合える日まで

唸って　剥がして　じれったい罪はもう捨てて
繋いで　混ぜ込んで　笑って痛いの飛んでいけ
譲れないもの同士でも　道の先に

遠い空の下　誰かが奪った笑顔が
巡り巡って僕らの涙になって流れた

それでも進もう

叫んで　壊して　うざったい罪はもう捨てて
破って　吐き出して　抱いた痛み愛していたい
守りたい大切なもんだけ　無くさないように
譲れないもの同士でも　道の先に

一筋の希望　光を探して`},{id:222,title:"似てないふたり",titleKana:"にてないふたり",lyricist:"吉田崇展",composer:"ズーカラデル",arranger:"ズーカラデル",album:["POWER","POWER[初回A]"],announce:"t",performances:["POWER(宮城){16}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){16}","POWER(愛知オーラス){16}"],singer:"WEST.",date:"2023-03-01",lyrics:`君と出会うためこの世に生まれた
とか　そんなことは言えないけれど
わかって欲しいよ
愛とか恋だけじゃ生きていけないが
君がそこにいるだけで
それも忘れてしまうのさ
そりゃもう忘れちまうのさ

できれば言葉には頼らずに伝えたいよ
今のこの感じ
真実の愛とか運命とか
そういうのよりちょっとだけ面白い
からかったり愚痴こぼしたりしながら
なるべく優しくありたい
やりすぎてむかついた夜は
ちゃんと話し合おうね

喜びや悲しみの全部を
あなたと見せ合いたいのよ
虚しさや退屈の全部を
あなたと分け合って

誰にも似てないふたりをただ重ねよう
ふざけ合って呆れたりしながら歳をとってさ
誰にも似てない記憶をただ集めよう
それだけでなんだかドキドキしているんだよ
拾い集めた毎日を
名前のつかない未来を
全部飲み込んで行く

息をするだけで擦り傷は絶えないな
人だかりで躓いてたら置いて行かれた
できれば言葉には頼らずに
心だけで君の全てが分かればいいのに

耳鳴りやはらいたの全部を
分け合えなくてもそばにいて
体が遠く離れた時も
ちゃんと思い出して

誰にも似てないふたりをただ重ねよう
駄目な夜は震えながら体寄せ合ってさ
誰にも似てない記憶をただ集めよう
朝焼けの方角　窓から手を伸ばして
悲しみの毎日を
未だ見えぬ未来を
全部飲み込んで行く

広がってる真っ暗闇で
どこまでも他人同士のふたり
君がそこにいるだけでもう全部
忘れてしまうようなこと

誰にも似てない心をただ誇ろう
その涙は自分の手で拭ってみせて

誰にも似てないふたりをただ重ねよう
ふざけ合って呆れたりしながら歳をとってさ
誰にも似てない記憶をただ集めよう
それだけでなんだかドキドキしているんだよ

誰にも似てないふたりをただ誇ろう
誰にも似てない記憶をただ誇ろう

拾い集めた毎日を
名前のつかない未来を
全部飲み込んで行く
喜びの毎日を
未だ見えぬ未来を
全部飲み込んで行く`},{id:223,title:"真っ直ぐ",titleKana:"まっすぐ",lyricist:"ティーナ•カリーナ",composer:"松本良喜",arranger:"松本良喜",album:["POWER","POWER[初回B]"],announce:"t",performances:["POWER(宮城){12}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){12}","POWER(愛知オーラス){12}"],singer:"桐山照史＆神山智洋",date:"2023-03-01",lyrics:`あなたと出会い　あなたに恋して
今までずっと幸せでした
でも　さよなら…

さっき観た映画の感想
夢中になって話す横顔
いつもならふざけてばっかりの声の色が
少し違ってた

「叶えたい夢のために一緒におられへん」って
そんなセリフ笑えないでしょ
こんなにも早く終わりが来たのね

あなたと出会い　あなたに恋して
モノクロだった世界がやっと色づいたの
勝手ばかりで憎めない　可愛い人
私が幸せにしてあげたかった

「そのままのお前が好きや」と
出会った頃に言ってくれたね
真っ直ぐな瞳に吸い込まれ
気づけばもう　恋に落ちてた

あなたの喋り方を真似して笑われたっけ
そんな顔で謝らないでよ
笑ってるあなたが一番好きなの

些細なことで喧嘩した夜も
子犬みたいにじゃれ合うように甘えた日々も
お酒の味の口づけも忘れない
いつまでもこうしていられたらいいのに

生まれ変わっても　また私を見つけて恋してね
思い出にしてあげるわ
私の好きなあなたのまま　貫いて

最後にお願い
強く抱きしめて
溶け合うように一つになって
綺麗にして
過ぎた時間はどこまでも真っ直ぐに
この胸で輝くの…

あなたと出会い　あなたに恋して
今までずっと幸せでした
元気でいてね
大事な夢をその手で叶えるまで
中途半端なまま連絡してきたら
絶対許さへんから`},{id:224,title:"ぼくらしく",titleKana:"ぼくらしく",lyricist:"竹原ピストル",composer:"竹原ピストル",arranger:"河野圭",album:["POWER","POWER[初回B]"],announce:"t",performances:["POWER(宮城){17}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){17}","POWER(愛知オーラス){17}"],singer:"重岡大毅＆藤井流星",date:"2023-03-01",lyrics:`季節の終わりの風が吹いている。
ふと思い浮かぶ顔がある。
甘いような苦いような。。
どっちつかずの感傷を持て余し、ツムジをつつく。

“ありがとう。”も“ごめんね。”も、
“好きだよ。”も“好きだったよ。”も
口に出さなくなっただけで、思わなくなったわけじゃない。
大人になったけど、大人になったけど
大人になったけど、大人になっただけ。

やるせなさに寝返りを繰り返し
不甲斐なさに唇を噛み締める夜を越えて

全然そんな気分じゃないのに晴模様。
チグハグチグハグ歩いて行くよ。
ぼくらしさって何だろ？何だろ？何だろ？って
首をかしげ続けていくよ、ぼくらしく。

季節の始まりの風が吹いている。
ふと込み上げる胸の高鳴りがある。
例えば新しい服で、新しい靴で
街と街の継ぎ目をいよいよ跨ごうとするときのような。。

“夢”も“希望”も、“勝ちたい”も“負けたくない”も
口に出さなくなっただけで、思わなくなったわけじゃない。
大人になったけど、大人になったけど
大人になったけど、大人になっただけ。

めくるめくイメージにひとりニヤけ
そっと吸い込まれるように眠る夜を越えて

せっかくこんな気持ちなのに雨模様。
あべこべあべこべ歩いて行くよ。
ぼくらしさって何だろ？何だろ？何だろ？って
首をかしげ続けていくよ、ぼくらしく。

全然そんな気分じゃないのに晴模様。
チグハグチグハグ歩いて行くよ。
ぼくらしさって何だろ？何だろ？何だろ？って
首をかしげ続けていくよ、ぼくらしく。`},{id:225,title:"エゴと一途",titleKana:"えごといちず",lyricist:"Penthouse",composer:"Penthouse",arranger:"TARO MIZOTE・須田悦弘(Relic Lyric inc.)",album:["POWER","POWER[初回B]"],announce:"t",performances:["POWER(宮城){11}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){11}","POWER(愛知オーラス){11}"],singer:"中間淳太＆濵田崇裕＆小瀧望",date:"2023-03-01",lyrics:`そう　どうにか　隣にいたいなど
とっくに　望んじゃいないよ　そういうもんさ
身勝手に　理想系のディテールを描いて
思い出は　嘘並べて作っていく

エゴと一途の境目を　いつ見失ったかわからない
「見返りなど　求めぬもの　それこそが愛だから」

This is love in isolation　届かなくていい
いつまでも見つめていたいだけだ　終わりは見えないの
I don't need any conversation　いつかの声を
徒に慰めの当てにして　また「愛」に耽る

つまんない漫画に　挟んだ栞が
積み上がって見えなくなったって　どこかで　続きを気にしている

エゴと一途の境目に　今更気づいても戻れない
「わたしだけはあなたのこと　信じるって決めたから」

This is love in isolation　届かなくていい
いつまでも見つめていたいだけだ　終わりは見えないの
I don't need any conversation　かすれた声で
無理矢理な言い訳を口にして　また「愛」に沈む

指先がなぞる唇
うだるような口づけを
気づいたの　わたし本当は
あなたのこと　独り占めする夢見てる

This is love in isolation　忘れなくていい？
気づいてる届きやしない　だけど終わらせられないの
I don't need any conversation　いつかの声を
徒に慰めの当てにして　また「愛」に耽る

This is love in isolation　届かなくていい
いつまでも見つめていたいだけだ　終わりは見えないの
I don't need any conversation　かすれた声で
無理矢理な言い訳を口にして　また「愛」に沈む`},{id:226,title:"Strike a blow",titleKana:"Strike a blow",lyricist:"神山智洋",composer:"神山智洋",arranger:"MUTEKI DEAD SNAKE",album:["POWER","POWER[通常盤]"],announce:"t",performances:["POWER(宮城){9}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){9}","POWER(愛知オーラス){9}"],singer:"WEST.",date:"2023-03-01",lyrics:`We are all challengers
Now is the time to stand up
始まるSurvival　鳴り響いたGong

ピリピリと張り詰めた日々の中
絶え間なくConfront
避けては通れぬMatch up

しかと焼き付けろこれが生き様

I'm gonna take it back　夢を奏で
Just brace yourself　術が要
塗り潰せWipe out　戦い現在進行形
「どうなったっていい」これが運命(さだめ)？
Don't worry　ちょいミスっただけ！
掴むのさ Grand slam
有象無象はねじ伏せ Perfect game

We are all fighters
May be a lonely battle
立ち塞ぐRival　既にUnder dog？

ジリジリと詰め寄った
隙見せりゃすかさずLock on
努力も虚しくTime's up

下されたJudgement
白旗あげりゃそこでGame over
砕け散った誇りを拾い集めて
己焚き付けもぎ取る白星

I'm gonna take it back　夢を奏で
Just brace yourself　術が要
塗り潰せ Wipe out　戦い現在進行形
「どうなったっていい」これが運命(さだめ)？
Don't worry　ちょいミスっただけ！
掴むのさ Grand slam
有象無象はねじ伏せ Perfect game

What were we born for？
What can I do in my lifetime？
Live each day as if it's your last.
It's all up to you.

後悔ばかりの日々とおさらば

I'm gonna take it back　夢を奏で
Just brace yourself　術が要
塗り潰せ Wipe out　戦い現在進行形

Take it back　さあ呼び醒ませ
Wish I could have done　雁字搦め？
まだまだ Life goes on　我ら未だ未完成形
いつか勝利の花咲かせ　いずれ有終の美を飾れ
ぶちかませ Knock out
狙い定めど真ん中 Strike a blow`},{id:227,title:"Don't be afraid",titleKana:"Don't be afraid",lyricist:"MORISHIN",composer:"MORISHIN・REO",arranger:"REO",album:["POWER","POWER[通常盤]"],announce:"t",performances:["POWER(宮城){19}"],singer:"WEST.",date:"2023-03-01",tiup:"テレビ東京系ドラマプレミア23『警視庁考察一課』エンディングテーマ",lyrics:`聞こえるよ痛いほど
聞こえてくるよ胸痛いほど
キミならできるよFight
たまらずにCry
耳寒いだ日々
脳内がメリーゴーランド
ほらごらんまわる前に
優しい声に手を伸ばすんだ

負けるなgoing going going　行こう行こうよ
聞こえるよhurray！ hurray！
光射す方へ今日もgoing
たまに力抜いてgroovin'
忘れない愛から生まれてきた感謝を
優しい声もう受け止めるよ

忘れないから
忘れないから
キミの声を胸に強く生きるよ
立ち向かうから
負けたくないから
キミの声を信じ進み続けるよ
Don't be afraid Don't be afraid Don't be afraid
今日も聞こえる
Don't be afraid Don't be afraid Don't be afraid
光射す方へ
Don't be afraid

広がるよ見たいもの
広がり続けるよ見たいもの
キミならできるよTry
止まらずにFly
見失わない道
問題ないReady go now
ほらごらん考える前に
行きたい場所に手を伸ばすんだ

負けるなgoing going going　行こう行こうよ
聞こえるよhurray！ hurray！
光待つ方へ今日もgoing
たまに身を任せてgroovin'
失くさない愛から生まれてきた願いを
描いた夢また動きだすよ

失くさないから
失くさないから
キミと夢を胸に強く生きるよ
立ち向かうから
負けたくないから
キミと夢を信じ進み続けるよ
Don't be afraid Don't be afraid Don't be afraid
今日も呼んでる
Don't be afraid Don't be afraid Don't be afraid
光待つ方へ
Don't be afraid

耳を澄ませば聞こえてくる
目を閉じても迷わない地図
答えはいつもそこにあるから
恐れないで突き進むよ

忘れないから
忘れないから
キミの声を胸に強く生きるよ
立ち向かうから
負けたくないから
キミの声を信じ進み続けるよ
Don't be afraid Don't be afraid Don't be afraid
今日も聞こえる
Don't be afraid Don't be afraid Don't be afraid
光射す方へ
Don't be afraid`},{id:228,title:"ハルカナレ",titleKana:"はるかなれ",lyricist:"岩越涼大",composer:"川口進・佐原康太・兼松衆",arranger:"井上薫",album:["POWER","POWER[通常盤]"],announce:"t",performances:["POWER(宮城){13}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){13}","POWER(愛知オーラス){13}"],singer:"WEST.",date:"2023-03-01",tiup:"近鉄不動産 あべのハルカス CMソング",lyrics:`1.2.3
せーので　ここからじゃない？(強く)
空高く
君の声よ　ハルカナレ
未来に響きますように

空に夢を描き合えば
まるで世界を旅してる気分
かけがえない希望(チケット)を片手に
あかね雲飛び乗るんだ

昨日よりきっと
明日はもっと
新しい風吹くって　君が笑うのさ

終わらない鼓動が止まらない理由だ
行く先遥か　進め
どこまでも

1.2.3
せーので　ここからじゃない？(強く)
想い重ね　奏で合わせ輝け　歌え愛を
3.2.1
羽ばたく勇気つばさに(高く)
空高く
君の声よ　ハルカナレ
未来に響きますように

「じゃあ、またね」と手を振るのは
すぐに会えると信じてるから
少しの寂しさもスパイスに
日々を深く味わえるように

昨日のナミダも
明日にずっと
繋がるストーリー　全部連れて行こう

幾千の願いがいつかの景色を
宝物に変えるよ
いつまでも

1.2.3
せーのでここからじゃない？(強く)
想い重ね　奏で合わせ輝け　歌え愛を
3.2.1
雲の上はいつでも(青く)
晴れ晴れさ
君の声が　届くとき
ありえない正解が待ってる

ココロの地図広げてみて
いつもそこに答えがある

君といればどんな夢さえも叶うよ
oh yeah

いつだって

1.2.3
せーのでここからじゃない？(強く)
想い重ね　奏で合わせ輝け　歌え愛を
3.2.1
羽ばたく勇気つばさに(高く)
空高く
君の声よ　ハルカナレ
未来に響きますように`},{id:229,title:"調子っぱずれの僕の歌",titleKana:"ちょうしっぱずれのぼくのうた",lyricist:"浅利進吾",composer:"浅利進吾",arranger:"井上薫",album:["POWER","POWER[通販盤]"],announce:"f",performances:[],singer:"WEST.",date:"2023-03-01",lyrics:`生き方は一つじゃない
決められた道筋なんて・・・
知らないペンで書かれたストーリー
時には落書きしたいんだ

落ちてく　夕日が
灯ってく　星々が
「変わらなくてもいい」
教えてくれた　気がしたんだ

調子っぱずれの歌を
どんな時でも　恐れないでいい
「ヨロシク」と明日へ
挨拶を込めて　手を振って行こう
僕が僕のために歌うメロディ
歌おう

いつものバス停に並ぶ
行き先の違う人たち
どこをとっても　同じじゃないんだな
当たり前のことなのに

忙しい　毎日に
ながれる　流行りに廃りに
追いかけられてた　そんな日々に
さよならさ

生き方は一つじゃない
何も決められちゃいない

そういうことさ

調子っぱずれの歌を
どんな時でも　誇れたらいい
「アイシテル」と未来へ
希望を抱いて　迎えられるように
僕が僕であるためのメロディ
歌おう

歌おう

ラララ・・・

行こう`},{id:230,title:"SOUL 2 SOUL〈Special Wind Orchestra Collab Ver.〉",titleKana:"SOUL 2 SOUL〈Special Wind Orchestra Collab Ver.〉",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)・村田陽一",album:["POWER","POWER[通販盤]"],announce:"f",performances:[],singer:"WEST.",date:"2023-03-01",lyrics:`ちょっと待った　話そうぜ　いいか
ベストがマストなわけないさ
いつからでも　燃やそうぜTHE SOUL
全肯定型キャンペーン　いっちょかましましょ

THE SOUL！！
THE SOUL！！

正解は　世界にあるのか？
雑草って　誰が決めるんだ？
「早起きは三文の徳」って
それ　誰得！？
Hhaaaa…

みんな考え過ぎって
自分だってそうで
結局　一緒なんだな Ah

カモン！
Everybody　集合！

THE SOUL！！
抱きしめたもん勝ちだろう
キミの中の答え
THE SOUL！！
そうだ世界は　後からついてくる
やっちゃえばいい Wow
どちらもありでしょ　キミはどう？

盛大に頬上げてみっか
最大の味方は自分だ
「三歩進んで二歩下がる」って
いいじゃん　進んでんじゃん
GOOOOOOOO

自然体って　なんだろな
どれもこれも全部ジブンか
今はそれでいいんだな Ah

カモン！
Everybody　注目！

THE SOUL！！
抱きしめたもん勝ちだろう
キミの中の答え
THE SOUL！！
そうだ世界は　後からついてくる
やっちゃえばいい Wow
どちらもありでしょ　キミはどう？

ちょっと待った　話そうぜ　いいか
ベストがマストなわけないさ

…とか言って
真っ直ぐしか進めないし俺
四六時中　超陽キャな君
石橋叩いて壊すの誰？
(あーーーー誰だ？)

冒険　最善　好奇心旺盛　どーすんだ？！(どーすんだ？！)
安心　安定　帰宅部OK　何が悪いの？(そうだよな！)
こっそ　こっそ　無言実行も　マチガイない　そう(マチガイない！)
行ったり来たりで　息してんだ
話して　沸かして　どんちゃんしようゼ

Everybody　集合！

THE SOUL！！
抱きしめたもん勝ちだろう
キミの中の答え
THE SOUL！！
そうだ世界は　後からついてくる
やっちゃえばいい Wow
どちらもありでしょ　キミはどう？

THE SOUL！！`},{id:231,title:"しあわせの花",titleKana:"しあわせのはな",lyricist:"山口隆(サンボマスター)",composer:"山口隆(サンボマスター)",arranger:"ha-j",album:["しあわせの花","しあわせの花[初回A]","しあわせの花[初回B]","しあわせの花[通常盤]","しあわせの花[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["POWER(宮城){27}","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){26}","POWER(愛知オーラス){26}","DOME TOUR AWARD(大阪,福岡){33}","DOME TOUR AWARD(東京){34}","DOME TOUR AWARD(東京オーラス){34}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){28}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){28}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){28}","サマソニ2023(大阪,東京){5}","スペシャルセッション(しあわせの花[初回B]){1}","9周年生配信トーク＆ライブ「虹会」{5}","WEST. 10th Anniversary 大阪松竹座公演(昼){5}","WEST. 10th Anniversary 大阪松竹座公演(夜){5}","WEST. 10th Anniversary 大阪松竹座公演(千穐楽){5}"],singer:"WEST.",date:"2023-06-07",tiup:"テレビ東京木ドラ24『ゲキカラドウ２』主題歌",lyrics:`幸せよこの指にとまれ　抱きしめた思いに花が咲くのさ
夢のような日　早くはじまれ　今すぐ　今すぐ　今すぐ

君自身を悲しませないで　(我々ははじまったばかり)
冷たい夜は続かないさ (HERE WE GO！ HERE WE GO！)
呼びかけてくるものと　感じ取って選んだもの
それだけを見つめよう　それだけを見つめようよ

行き詰まったなんて言わないで　(やり方はいくらでもあるさ)
長い夜が終わり始めた (HERE WE GO！ HERE WE GO！)
つかみかけているのさ　きっとそれでいいのさ
だから確かめに行こう　だから確かめに行こうよ

みなよ長い間　僕らを閉じ込めてた窓
君が笑ったとたんに　開いたのさ　そんな君に誓いたい
I Love You！ I Love You！ I Love You！

幸せよこの指にとまれ　抱きしめた思いに花が咲くのさ
夢のような日　早くはじまれ　今すぐ　今すぐ　今すぐ

幸せよこの指にとまれ　愛しさが悲しみ打ち破るのさ
夢のような日に　向かって駈けだせ
ためらわず　ためらわず　ためらわず

SIAWASE　笑っているほうがずっといい
SIAWASE　笑っているほうがきっといい

SIAWASE　笑っているほうがずっといい
SIAWASE　笑っているほうがきっといい

目の前のこと　受けとめきれない時は
思い出そうよ　優しい気持ちの歌

やるせない夜　いくつもこえてきた　だから寂しさよ　懐かしさに変われ
ひとしずくでも望みがあれば　僕ら笑って咲けるさ

幸せよこの指にとまれ　いま生命(いのち)がキミに語りはじめて
見える景色の色が変わっていく　だからもう　ためらわず　ためらわず

幸せよこの指にとまれ　咲きほこる喜び感じたいのさ
夢のような日　早くはじまれ　今すぐ　今すぐ　今すぐ

幸せよこの指とまれ　キミと笑い合いたくてしかたないのさ
夢のような日に　向かって駈けだして　踊ろう　踊ろう　踊ろう

SIAWASE　笑っているほうがずっといい
SIAWASE　笑っているほうがきっといい

SIAWASE　笑っているほうがずっといい
SIAWASE　笑っているほうがきっといい

SIAWASE　笑っているほうがずっといい
SIAWASE　笑っているほうがきっといい`},{id:232,title:"パロディ",titleKana:"ぱろでぃ",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["しあわせの花","しあわせの花[初回A]","しあわせの花[初回B]","しあわせの花[通常盤]","しあわせの花[通販盤]"],announce:"t",performances:["POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知){20}","POWER(愛知オーラス){20}","9周年生配信トーク＆ライブ「虹会」{3}"],singer:"WEST.",date:"2023-06-07",tiup:"日本テレビ系ドラマ『それってパクリじゃないですか？』オープニング曲",lyrics:`Uh wow baby
Live the life you love
Sing along！
Ah Ah Ah Ah
Nobody knows tomorrow
Pa Pa Pa Pa
Like a parody

Dirtyなことほど
Cleanに塗られて uh
あらま世間は従順な優等生
悪戦苦闘した
自己ブランディングで
So　どうにか乗り切る Friday

誰だって辛い　そのくせしてDRYな
日常にちょっとしたユーモア
Let it flow flow flow
寝落ちしそうな　夕焼けが
「おつかれさま」って笑ってる

格好つけちゃってすっ転んでBaby
汗も涙も　そりゃ才能さ
人生にパロディって思えたら
明日もきっと
笑ってキミと
過ごせるんじゃない

Ah Ah Ah Ah
Nobody knows tomorrow
Pa Pa Pa Pa
Like a parody

思い切ったら
おもいっきりやっちゃって...uh
ドンマイからの　楽しむ方向で
どんなお悩みも　角度次第じゃ
So　満員御礼　Good Game

あれも欲しい　これも欲しくて
結局それって必要なの？
Let it flow flow flow
ちょっとまって　ふりだしでも口笛
吹いてたいね

格好つけちゃってすっ転んでBaby
汗も涙も　そりゃ才能さ
人生にパロディって思えたら
明日もきっと
笑ってキミと
過ごせるんじゃない

思い通りになんなくたって
やった通りになるもんだって
いっちょまえに
も一歩前に
たまにはグッと期待ね

守るべきものは何だっけ？Baby
恋も仕事も...そりゃそうだけど
今日が最高とか言えたなら
明日はもっと Oh Yeah

格好つけちゃってすっ転んでBaby
汗も涙も　そりゃ才能さ
人生にパロディって思えたら
明日もきっと
笑ってキミと
過ごせるんじゃない

Ah Ah Ah Ah
Nobody knows tomorrow
Pa Pa Pa Pa
それでいいんじゃない

ね！それが良いんじゃない`},{id:233,title:"恋は負け認めなきゃ勝てない",titleKana:"こいはまけみとめなきゃかてない",lyricist:"ゆっきゅん",composer:"高橋諒",arranger:"高橋諒",album:["しあわせの花","しあわせの花[初回A]"],announce:"t",performances:["10周年生配信トーク＆ライブ「虹会」{5}"],singer:"WEST.",date:"2023-06-07",lyrics:`新宿でルーローハン　一人で食べてる
行けなかった台北旅行の雑誌の味
意地悪な質問　自問自答して
大学生みたいに泣きそうだ

「別れよう」って結論みたいに
悲しそうに言うから　悔しい
突然だと思ってるのは僕の方だけだよね
そういうとこだな　負けたよ

十年！君のこと想った
この恋は負け認めなきゃ勝てない
TAXI！捕まえんの上手かったね
立ちすくむ今の僕とは大違いだ
誰に伝えりゃいい？

でかすぎるポップコーン　食べて寝てたね
もう観に行かない　シリーズ5作目は来月
本棚から好きに持っていけばいいよ
どっちのかもう覚えてないし

いつだって僕は昨日ばっか
君は明日の夢　語っていた
そんな風にして二人の道
続いてるみたいだよねって
笑えてた部屋　戻れない

十年！君は友達でもあった
この恋に負け認め続け勝ちたい
Two Weeks！　受け止めてみてるんだ
だけど…

思い出は　(ああ忘れるかな)　完璧になってしまう
追いつけないくらい　光に打たれて
離れるきっかけ探して　行かないで　(ここにいて)

十年！君のこと想った
この恋は負け認めなきゃ勝てない
何年！過ぎても好きだったら
キモいかなあ　ねえわかりたかったもっと
十年！君は友達でもあった
どうしようもない今を認めてあげなくちゃ
Music！情けない笑えない
大丈夫じゃない自分も自分なのがしんどい
君に負けて知った、心を`},{id:234,title:"On & On",titleKana:"On & On",lyricist:"栗原暁(Jazzin'park)・D&H(PURPLE NIGHT)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・D&H(PURPLE NIGHT)",arranger:"久保田真悟(Jazzin'park)",album:["しあわせの花","しあわせの花[初回B]"],announce:"f",performances:[],singer:"WEST.",date:"2023-06-07",lyrics:`君はどこにもいない
街は笑ってら
ベタつく雑踏　俺に愛を
クラクションからGet away

どこまでも続くドラマ
行く先はもう決めない
たまにセンチメンタルに揺られて
口笛吹きながら
たまんないね～

Ride on, ride on
Good luck, alright
ノープランで窓全開

BGMは爆音
人生はOn & On
羊雲の背中を追って
ロマンス探すみたいな
サングラスはTeardrop
キメ顔でHere we go
おひとりさま　それも味な
はやる気持ち　ちょいとお待ち
邪魔はいないぜ

誰がさらってくれんだ
超Busyな　ため息
日々のTrouble　うなされTerrible
自画自賛でフェーダウェイ

フォトジェニックな夕陽
誰かのイイねなんていらない
でっかすぎる　世界の片隅で
妙に寂しくなっちゃう
わかんないね～

Ride on, ride on
Good luck, alright
ご心配はノーセンキュー

BGMは爆音
人生はOn & On
羊雲の背中を追って
ロマンス探すみたいな
エンドレスにTurn it up
胸躍れツーステップ
気の向くまま　それも味な
やけに恋しくなってきたね
夜が近いね

ヴァイブス right
All set
Are you ready to jump
Livin' it up
今
Oh feeling the moment
Burn it up
Right now
It's time to show
Go higher
今
Hands in the air ah

What you waiting for now
Follow me let's get start it
Speakerより　Shout out
弾けて　Let's go up
風、太陽　so LIT
Everything is slow motion
熱い Passionのせいで
溶けてしまった Clock
Hold up！！！
Turn it up Turn it up
テンションは MAXで行こうぜ
Turn it up Turn it up
“Y”ou “O”nly “L”ive “O”nce
YOLO！！！！！！！

気の向くままにGo on
星空とシンガロン
今日の景色　やけに素敵
なんだこれジワリくんだ

BGMは爆音
人生はOn & On
羊雲の背中を追って
ロマンス探すみたいな
サングラスはTeardrop
キメ顔でHere we go
おひとりさま　それも味な
はやる気持ち　ちょいとお待ち
邪魔はいないぜ`},{id:235,title:"弱くても",titleKana:"よわくても",lyricist:"岩越涼大",composer:"岩越涼大",arranger:"生田真心",album:["しあわせの花","しあわせの花[通常盤]","しあわせの花[通販盤]"],announce:"f",performances:[],singer:"WEST.",date:"2023-06-07",lyrics:`誰かが言ったひょんな言葉が
ずっとずっと胸に残って一人傷付いて
見えないとこで泣いてる君

不安はきっと希望のせいだ
愛を知ってしまった僕らはみんな欲張りで
幸せじゃなきゃ怖くなるから

“ありのまま”に蓋をして嘘を食べて生きてる
そんな今日が許せるなら
その涙に頼ればいい

弱くても強くあれ
明日が怖くても
信じた自分で歩いてこそ全てが輝く
変わらない愛も
消したい昨日も
どれも本当さ
そうやって強く胸を張れ

毒にも薬にもならない　そんな言葉が欲しくなって
いつも逃げ出すのは
誰でもない自分自身から

“明日からこうするんだ”と僕ら何度誓っただろう
変われないのが人ならば
変わらぬまま歩くのもいい

弱くても強くあれ
明日が怖くても
迷い止めないで歩いてこそ何かに出会える
それが笑顔でも
それが涙でも
どれも人生さ
誰だって強くないから

遠回りでも
近道でも
真っ直ぐにでも
手探りでいい
道しるべなら　いつでも心が知っている

弱くても強くあれ...

弱くても強くあれ
明日が怖くても
信じた自分で歩いてこそ全てが輝く
変わらない愛も
消したい昨日も
どれも本当さ
そうやって強く胸を張れ`},{id:236,title:"大それたロックンロール",titleKana:"だいそれたろっくんろーる",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["しあわせの花","しあわせの花[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2023-06-07",lyrics:`二度寝ばっか　もう愛想を尽かしてる
二度見ばっか　夢の続きはどうしたの
二度あること三度ある　嘘偽りじゃない
あのバンドマンまた　良い曲書くんだろうな

三度目の正直って　言い回しもあるんだ　あぁ

今日のオレはどんな言葉を信じて
誰のために歯を食いしばって
何気なく情けない日だって
歌を歌って　笑っていたい

こんにちはロックンロールスター
あなたなら何を歌いますか
大それたこと　言うのなら
オレだってベイベ！

夜明けまで降った大雨は
窓に残る涙の跡さ
素直になれたそんな気がした

言葉なんて　ずっと探しているけど
言葉なんて　大事な所でいつも
足りないこと　バーカ　で呆れもするんだよ

もう一度　正直に愛してるって言っていいですか？

君がどんな言葉を信じて
誰と何処で何をしてたって
さみしい　夜の隙間を狙って
この声で　オトしてみたい

こんにちはロックンロールスター
あなたなら何を歌いますか
大それたこと　言うのなら
誰だってベイベ！ベイベ！

人はどんな言葉を信じて
何のために歯を食いしばって
頬を伝う涙の数より
歌を歌って　笑っていたい

オレは目にうつるこの景色も
耳に残るどんな出来事も
夢にみてる　いつか君と
その声で　笑っていたい

大好きかロックンロールは？
大嫌いかロックンロールは？

大それたロックンロール　さぁ`},{id:237,title:"パイル",titleKana:"ぱいる",lyricist:"河原健介",composer:"河原健介",arranger:"石塚知生　　　",album:["しあわせの花","しあわせの花[通販盤]"],announce:"f",performances:[],singer:"WEST.",date:"2023-06-07",lyrics:`ずっと頭に鳴り響いてたメロディ
気づけばどうしても思い出せない
アンドゥして拾い出せたらいいのに

思わず口から飛び出した言葉と
忘れたことさえ気付いてない記憶は
もう取り戻せないって知った

いつのまにかこんなに
遠くまで来たんだなんて
感慨はなくもないけど今は
日当たり悪い窓辺に
置いたままにしてしまった
あの花が気がかりだ

車窓の向こうに閃いた
焦燥に目を逸らしたんだ
行き場をなくした言葉が
降り積もって出口塞いでく
「もしあの時もっと...」
脳裏に響く声に
打ち込まれたままのパイルが
ふらつきだしてまた
ため息に溺れる
Fu......

知らなくてもいいようなことばかりを
溜め込んでいつでも容量不足
大事なことも見えなくなって

窓に映る自分を
ぼんやり眺めてると
考え過ぎの癖のせいでまた
浮かんでは消えてゆく
答えのない問いかけに
当てもなく沈み込んでく

虚像の向こうに煌めいた
希望に目を凝らしたんだ
未来はいつまでもずっと
未来のままで揺らいでる
通りすぎた場所に
手を伸ばしてるより
打ち込まれたままのパイルを
握ってる力を少しずつ緩めて

ドアが閉まる
列車は次の駅へと
違う景色が流れてゆく

車窓の向こうに閃いた
焦燥に目を逸らしたんだ
行き場をなくした言葉が
新しいメロディ紡いでく
こんな日々もきっと
温かく思えるよ
喉元すぎるようにそっと
変わってく季節に
ため息が溶けてく
Fu......`},{id:238,title:"絶体絶命",titleKana:"ぜったいぜつめい",lyricist:"杉山勝彦",composer:"杉山勝彦・佐々木”コジロー”貴之",arranger:"佐々木”コジロー”貴之",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]","絶体絶命 / Beautiful / AS ONE[初回B]","絶体絶命 / Beautiful / AS ONE[初回C]","絶体絶命 / Beautiful / AS ONE[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["AWARD(大阪){10}","AWARD(新潟){10}","AWARD(宮城){10}","AWARD(愛知){10}","AWARD(横浜,静岡,福岡,広島,北海道){10}","AWARD(北海道オーラス){10}","DOME TOUR AWARD(大阪,福岡){20}","DOME TOUR AWARD(東京){21}","DOME TOUR AWARD(東京オーラス){21}"],singer:"WEST.",date:"2023-10-25",tiup:"テレビ朝日系 オシドラサタデー『単身花日』主題歌",lyrics:`良い人とか呼ぶなって
僕はそんな良いヤツじゃない
そこ止まりの人と
ラベルを貼るのやめろって
秒針の音も胸の鼓動も耳障りだ
君がすぐに返事をしないせいで壊れそうだ

眠れない　僕の知らない　誰かの指で
悶える君が　浮かんで消える
ひとり見上げる夜空に
やけに綺麗な月とかいらない Ah
届かない願いなら
壊してしまいたい

今夜　絶体絶命
愛せば愛すほどに
君を遠く感じて　狂おしくなる
どうせ僕だけでしょう？
現在進行形
どうしてフリーじゃない女性(ヒト)
奪いたい癖(ヘキ)とか
全然ないって
ただ君が欲しいだけ

僕は君にとって
さみしい時だけの存在かい？
それってもしかして　都合の良い男性(ヒト)

ね、良いの？　そんな僕を信用して
胸のホクロさえも知ってるのに
違う　そんな　君を脅すワケ
ないよ　ただね　少し逢いたいだけ

信じたい　僕の目を見て
はじめて本気になったよと言ってた
あの日の君を
いくら飲んでも酔えない夜に限って
飲まずにいられない Ah
行くあてのない感情
飲み干してしまいたい

今夜　絶体絶命
どうしても止まれない
独りで果てたってさ　消えるわけないのに
あの肌の感触
目一杯説明
なんていらない抱きしめて
それよりも何よりも　抱きしめさせて
僕だけの女性(ヒト)でいて

絶体絶命
愛せば愛すほどに
君を遠く感じて　狂おしくなる
どうせ僕だけでしょう？
一体全体さ
ルールなんかで止まれるの？
そうじゃないのが愛だって
教えたくせに
知らなけりゃ良かったよ

この痛みに　愛情以外
何があるの？
ただ君が欲しいだけ`},{id:239,title:"Beautiful",titleKana:"Beautiful",lyricist:"栗原暁(Jazzin'park)",composer:"栗原暁(Jazzin'park)・前田佑",arranger:"前田佑",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]","絶体絶命 / Beautiful / AS ONE[初回B]","絶体絶命 / Beautiful / AS ONE[初回C]","絶体絶命 / Beautiful / AS ONE[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["AWARD(大阪){5}","AWARD(新潟){5}","AWARD(宮城){5}","AWARD(愛知){5}","AWARD(横浜,静岡,福岡,広島,北海道){5}","AWARD(北海道オーラス){5}","DOME TOUR AWARD(大阪,福岡){7}","DOME TOUR AWARD(東京){7}","DOME TOUR AWARD(東京オーラス){7}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){13}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){13}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){13}"],singer:"WEST.",date:"2023-10-25",tiup:"ABCテレビ・テレビ朝日系ドラマ『18歳、新妻、不倫します』主題歌",lyrics:`Sha La La
Love is automatic　逆らえない...
思わず息を呑んだ

Beautiful Beautiful
You're Beautiful Beautiful
Beautiful Beautiful
You're Beautiful Beautiful

ないものばかり　探してる
纏った涙は何色？
誰かじゃなくてキミの運命はどこ
What do you really want？

Why…　自由なほど不自由で
危険なほど気になって
「出口はこちらへどうぞ」
自分見失うくらいなら
ちゃんと欲しがればいいさ

本当のキミは隠せない
てゆうか　隠さなくて良い
裸の瞳　吸い込まれてゆく
Secret...　ひとさし指　約束

Sha La La
Love is automatic　逆らえない...
思わず息を呑んだ Your lips
たとえ全て失っても　確かにキミを
抱きしめるよ...

Bitter or Sweet！？
どんなオレが欲しい！？
Don't wait and see
おあずけとか無理
Crazy baby... Let's kiss

いつも誰かと比べてない？
気にしないオレSuit & tie
大切なのは今日も
昨日より上手く笑うことさ

Love...　近づくほど遠のいて
期待するほど不安で
「入口はこちらですよ」
無防備なほどに守りたい
そのままでいればいいよ

本当のオレも隠せない
てゆうか　隠さなくて良い
裸の瞳　ちゃんとこっちを見て
Don't move...　触れた頬　色づく

Sha La La
Love is automatic　逆らえない...
思わず息を呑んだ Your lips
たとえ全て失っても　確かにキミを

一番近くで...
キミを見ていたんだ
何度触れたって...
まだ足りなくて
生まれ変わってもキミがいい
どんな明日が待っていても

誰も邪魔できない　邪魔させない
迷わず愛したいんだ This love
キミがいるこの世界ごと
奪い去りたい
Sha La La
Love is automatic　逆らえない...
思わず息を呑んだ Your lips
たとえ全て失っても　確かにキミを
抱きしめるよ...

Beautiful Beautiful
You're Beautiful Beautiful
Beautiful Beautiful
You're Beautiful Beautiful`},{id:240,title:"AS ONE",titleKana:"AS ONE",lyricist:"WaO",composer:"WaO",arranger:"NAOKI-T",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]","絶体絶命 / Beautiful / AS ONE[初回B]","絶体絶命 / Beautiful / AS ONE[初回C]","絶体絶命 / Beautiful / AS ONE[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["DOME TOUR AWARD(大阪,福岡){32}","DOME TOUR AWARD(東京){33}","DOME TOUR AWARD(東京オーラス){33}"],singer:"WEST.",date:"2023-10-25",tiup:"テレビアニメ『キャプテン翼シーズン2 ジュニアユース編』オープニングテーマ",lyrics:`何度立ち上がってきただろう
ここで終われるわけないと
悔しさは明日へのアンセム
心の支えは君の呼ぶ声

強いから勝つんじゃない
勝者がいつだって強い
笑いあうその日まで
諦める理由探すのやめて
挑み続けるよ
そう何度でも

Oh
君と描くHistory
Oh
BE AS ONE

揺らせgo！ go！ goal！
最高の景色を目指して
最後の最後の一秒まで共にゆこう
刻め忘れ得ぬ時代を
パッションは群青
オオゾラアガレ愛
Oh
君の思い
繋げる　未来へと
届け僕らの願い(シュート)！
go！ go！ goal！

今日を頑張ったって
誰かに褒められたいからじゃない
心は誤魔化せない鏡さ
僕ららしくいたい　昨日よりもっと

傷つきたいわけじゃない
傷つけたいわけじゃない
だから強くありたい
焦り苛立ちもがく日々でも
夜明けは来るんだ
そう何度でも

Oh
一人一人が奇跡
Oh
BE AS ONE

掴めgo！ go！ goal！
最高の景色を目指して
最後の最後の一秒まで共にゆこう
歌え忘れ得ぬ夢を
エモーションは金青
オオゾラアガレ愛
Oh
君の思い
駆けだす　未来へと
叫べ僕らの衝動
go！ go！ go！

届け僕らの願い(シュート)！
go！ go！ goal！`},{id:241,title:"超きっと大丈夫",titleKana:"ちょうきっとだいじょうぶ",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]"],announce:"t",performances:["AWARD(大阪){24}","AWARD(新潟){25}","AWARD(宮城){25}","AWARD(愛知){25}","AWARD(横浜,静岡,福岡,広島,北海道){25}","AWARD(北海道オーラス){25}","DOME TOUR AWARD(大阪,福岡){36}","DOME TOUR AWARD(東京){37}","DOME TOUR AWARD(東京オーラス){37}","メトロック2024(東京){6}","サマソニ2024(大阪,東京){8}","a-nation2024{6}","CDTV ライブ！ ライブ！春の大感謝祭2025{7}","メトロック2025(東京){1}","WEST. 10th Anniversary Live “W”{17}","WEST. 10th Anniversary Live “W”-Film edition-{18}"],singer:"WEST.",date:"2023-10-25",lyrics:`くだらない明日ってなんだろう
みっともない明日ってなんだろう
おんなじ　おんなじ事で悩んでる
知らない誰かになってみるなら
知らない明日を生きてみるのさ
終わり　そんな事言うなよ

笑ってる　笑ってる　いっせーのーせーエイエイオー

おまたせしました　ジャジャーン登場さ応援団！
見える　見える　君が笑ってる
悲しい言葉など　似合わないから
超きっと大丈夫　もういっちょ大丈夫
そうきっと大丈夫

くだらない明日ってなんだろう
みっともない明日ってなんだろう
おんなじ　終わりのない日々に

おまたせしました　ジャジャーン登場さ応援団！
言える　言える　君は頑張ってる
押してもダメならば引いてみようか
そんな事言わない　超一緒に押してやる
超きっと大丈夫　超一緒に生きてやる　さぁ行け

おもいっきり　ジャジャーンプで登場さ応援団！
見える　見える　君が笑ってる
悲しい言葉など　似合わないから
超きっと大丈夫　もういっちょ大丈夫
そうきっと大丈夫

美しい　美しい　君は何より美しい
笑ってる　笑ってる　最後に君が笑ってる`},{id:242,title:"POP&POP",titleKana:"POP&POP",lyricist:"meiyo",composer:"meiyo",arranger:"平田洋一郎",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回B]"],announce:"f",performances:[],singer:"WEST.",date:"2023-10-25",lyrics:`Get Up！Get Up！Get Up！Get Up！Pop&Pop！
踏み出せばOK！

あぁもうまたウッカリ　落ちてしまうことばかりコリゴリ
自分で自分のご機嫌取り　とりあえずまた来る明日
いつも通り　無問題
ハッ！と気付いたらまた　大胆に本末転倒
嫌んなる本当…ってかいつになりゃ
ブラックなんて頼める大人になれるんだ？

涙目でも　ダメダメでも
僕だけは君の味方、なんて
柄じゃないけど

パッパレ！
なんもかんも忘れて Be alright！
もうあんなことこんなこと Dreams come true！
案外そのまんまで良いんじゃない？　パラッパッパッパッパ！

Get Up！Get Up！Get Up！Get Up！Pop&Pop！
踏み出せばOK！

あれやこれや夢や妄想の類じゃマズいか？
現実に向き合うか…
なんか上手いこと説得されてばっかりじゃないか！？
いつからこんなに難しくなった？
淡々生きる毎日の散々だこと
やることなすこと希望に溢れた時代に縋ってたってもう

君とふたり　取り留めのない
言葉も一つずつ拾いあえば
無くさないでしょ？

パッパレ！
簡単なことだぜ Be alright！
困難も楽しめたら Dreams come true！
今日はダメだっても良いんじゃない？　パラッパッパッパッパ！

Get Up！Get Up！Get Up！Get Up！Pop&Pop！
笑えばOK！

間違いなんて一つもない
心が歌い出すフレーズを
ただ真っ直ぐに飛ばそう
それだけ

パッパレ！
なんもかんも忘れて Be alright！
もうあんなことこんなこと Dreams come true！
案外そのまんまで良いんじゃない？　パラッパッパッパッパ！

Get Up！Get Up！Get Up！Get Up！Pop&Pop！
踏み出せばOK！

La La La…

自分のことほど分かんない　そのくらいで良い！

Get Up！Get Up！Get Up！Get Up！Pop&Pop！
それだけでOK！`},{id:243,title:"BOYFRIEND",titleKana:"BOYFRIEND",lyricist:"神山智洋",composer:"神山智洋",arranger:"井上薫",translate:"D&H(PURPLE NIGHT)",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回C]"],announce:"f",performances:[],singer:"WEST.",date:"2023-10-25",lyrics:`I got the lightning shock yea
Your beauty caught my eyes
What're you looking for？
よそ見しないで
I'm all yours alright
I can't breath cause of ya
Our time is ticking
Tell me about you babe
どうしたらいい？
My heart is pounding
What'd you do to me？

I can't control
My head is full of ya
Can't you feel it now？
I can't do anything without you
Would you be my...
Sending the sign for you
Start with the letter “L”
All you gotta say is “YES”
Would you be my girl？
Wanna be your boyfriend now

なんかフワフワすんだ
何も喉を通らない
これがいわゆる恋煩いってやつか
教えてよ
君の好きを好きになりたいから
ビビッと来た
僕らを結ぶ赤い糸

You got me all over this game of love
Feelin' me right now
I can't do anything without you
Would you be my...
Even I see you in my dream
I'll say the start with “L”
All you gotta say is “YES”
Would you be my girl？
Wanna be your boyfriend now

I just wanna be your boyfriend now
(Your boyfriend)
Would you be my girlfriend now？
(My girlfriend)
例えばアダムとイヴさ
どうしようもなく君が好き

I can't control
My head is full of ya
Can't you feel it now？
I can't do anything without you
Would you be my...
Sending the sign for you
Start with the letter “L”
All you gotta say is “YES”
Would you be my girl？

I can't control
My head is full of ya
(Can't you feel it now？)
I can't do anything without you
(Would you be my...)
You got me all over this game of love
(Feelin' me right now)
I can't do anything without you
Would you be my girl？
Wanna be your boyfriend now`},{id:244,title:"疲れちゃうや",titleKana:"つかれちゃうや",lyricist:"Kanata Okajima",composer:"Kanata Okajima・ESME MORI",arranger:"ESME MORI",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[通常盤]"],announce:"t",performances:["AWARD(大阪){9}","AWARD(新潟){9}","AWARD(宮城){9}","AWARD(愛知){9}","AWARD(横浜,静岡,福岡,広島,北海道){9}","AWARD(北海道オーラス){9}"],singer:"WEST.",date:"2023-10-25",lyrics:`疲れちゃうや
デタラメの海に
疲れちゃうや
欲しいのは君と静けさだけ
また振り出しとか反吐が出るや
こんなに無駄に好きだったのに

気づいてる？
君＆僕(ぼくら)の世界
おかげさまで
微妙なムード

上手く行っていたはずなのに
目の前にいる君はもう
Like　画面の向こう

飲み飽きた珈琲
無理矢理流し込んで
なんだか笑えてきた

疲れちゃうや
デタラメの海に
疲れちゃうや
欲しいのは君と静けさだけ
また振り出しとか反吐が出るや
こんなに無駄に好きだったのに

夢見てた
いわゆる未来
“普通”が一番
何気にむずい

真面目に生きているのに
信じてる幸せはもう
Only　画面の向こう？

わからないや
此処はどこだ
嫌になるや
僕はどこだ
わからないや
此処はどこだ
嫌になるや

疲れちゃうや
デタラメの海に
疲れちゃうや
欲しいのは君と静けさだけ
また振り出しとか反吐が出るや
こんなに好きだったのに

疲れちゃうや
ため息の部屋に
疲れちゃうや
残った支払いと甘めMemory
また振り出しとか反吐が出るや
こんなに無駄に好きだったのに

疲れちゃうや
わかんないや
疲れちゃうや
わかんないや`},{id:245,title:"AWARD",titleKana:"AWARD",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["AWARD(大阪){2}","AWARD(新潟){2}","AWARD(宮城){2}","AWARD(愛知){2}","AWARD(横浜,静岡,福岡,広島,北海道){2}","AWARD(北海道オーラス){2}","DOME TOUR AWARD(大阪,福岡){2}","DOME TOUR AWARD(東京){2}","DOME TOUR AWARD(東京オーラス){2}","めざまし30周年フェス(東京){2}","10周年生配信トーク＆ライブ「虹会」{1}"],singer:"WEST.",date:"2024-03-13",lyrics:`オリジナルのRUNWAY
夢　並べてこうぜ
明日もきっと素敵で賞
言わせてよ　あえて
君と出逢えて
一生がHAPPY AWARD

「やれば出来る」って？
分かるけど待って！
レペゼンマイペースからの3 2 1 でAction！
「なんでもない日バンザイ！」
とか言えたら君も天才
一山超えたらノミネート　毎日Vパレード

晴れでも雨でも
君の隣だから
全部愛しいんじゃない
オツカレ　ごめんね　アリガト　だいすき
AWARD

オリジナルのRUNWAY
夢　並べてこうぜ
明日もきっと素敵で賞
言わせてよ　あえて
君と出逢えて
一生がHAPPY AWARD

関係各位感謝　つねに新陳代謝
色々あるけれどバラ色です
目指せオンリーワンのしわしわ作品賞
酸いも甘いも抱きしめて Hey！　もう一杯どう？

メンタル四面楚歌
程々にしてください
なんかごめんなさい
何卒よろしくどうにかお願い
AWARD

まがりくねった MY WAY
肩　並べてこうぜ
明日はきっと無敵で賞
言わせてよ　あえて
君と出逢えて
一生がHAPPY AWARD

こんなもんじゃない
Gimme！
(Gimme AWARD AWARD)
叶えたいじゃない
Gimme！
(Gimme AWARD AWARD)
待って！　ネタじゃない
Gimme！
(Gimme　慌,　慌 AWARD, AWARD...)

これからも　いつまでも
何度でも　一緒に笑ってくれますか

伝えたいことがあって
会いたい人がいて
全部全部　ひっくるめて人生でShow

はいもういっちょ

オリジナルのRUNWAY
夢　並べてこうぜ
明日もきっと素敵で賞
言わせてよ　あえて
君と出逢えて
世界一の超幸せ者
一生がHAPPY AWARD`},{id:246,title:"REWARD",titleKana:"REWARD",lyricist:"TAKA 3",composer:"TAKA 3・芳賀政哉",arranger:"芳賀政哉",album:["AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["AWARD(大阪){14}","AWARD(新潟){14}","AWARD(宮城){14}","AWARD(愛知){14}","AWARD(横浜,静岡,福岡,広島,北海道){14}","AWARD(北海道オーラス){14}","めざまし30周年フェス(東京){4}"],singer:"WEST.",date:"2024-03-13",lyrics:`Award part2
Let's go
さあさあ
待ちわびた
Showの幕開けだ
It's time for seven
いざ今日をこじ開けよう
Put your hands up say ho (Ho)
負け戦はNo more (Oh)
雨は上がり
虹はかかる
願いかける
Keep in mind

恥かいたら
みっともねーか？
やる前から
言ってもねーや
食らいつくように進め
思い上がんなや
当たってから
砕けりゃいーや
そうやって前へ
hoo hoo
Everybody
hoo hoo
タラリラ

Let's go up and up

愛だって恋だって
前ならえ？ (Hey)
前例なんてなくたって
気持ち鼓舞して
手をとって
輪になって
声あげて (Hey)
オドレヤ　(オドレヤ)
騒ぎましょ宴　(ウタゲ)

wo o o o o o　(ワッショイ)
wo o o o　歌えや going going
(Let's go Let's go)
wo o o o o o　(ワッショイ)
前人未到の
Award掴め

Eeny, meeny, miny, moe
俯いても何も
希望は見当たらね
光射す方へ
手を伸ばせ
One more time
地を張って
もう一回
いざ賞手にするまで
ビビデバビデランデブー

あの日君と誓った場所へ
扉は今ここで開かれる
これからも一緒に
夢のまた夢　叶えにいこう

Let's go up and up

愛だって恋だって
前ならえ？ (Hey)
前例なんてなくたって
気持ち鼓舞して
手をとって
輪になって
声あげて (Hey)
オドレヤ　(オドレヤ)
騒ぎましょ宴　(ウタゲ)

wo o o o o o　(ワッショイ)
wo o o o　歌えや going going
(Let's go Let's go)
wo o o o o o　(ワッショイ)
前人未到の
Award掴め`},{id:247,title:"ファンタジスタ",titleKana:"ふぁんたじすた",lyricist:"今井了介・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",composer:"今井了介・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"今井了介・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",album:["AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2024-03-13",tiup:"テレビアニメ『キャプテン翼シーズン2 ジュニアユース編』オープニングテーマ",lyrics:`手を伸ばせばきっと掴めるさ
Make my dreams come true
必ず
Don't wanna, don't wanna,
don't wanna give it up

走り続けた　涙も汗も枯れるほど
あの日々がFlash back
痛みを勇気に変えて

今 Stand up
守るべきものがある
Now, we can get together
見えない道でもたどり着ける
We go！

手を伸ばせばきっと掴めるさ
Make my dreams come true
必ず
Don't wanna, don't wanna,
don't wanna give it up
誰よりも願えば　勝ち取る翼になる
必ず
We're gonna, we're gonna,
we're gonna be the one

逆境は最強への兆候
時代を変えろファンタジスタ
地平線へ続く Victory road
信じた分だけ近づくゴール
Come on！！

Stand up
誇るべきものがある
Now, we can get together
世界の風に髪がなびく
We go！

手を伸ばせばきっと掴めるさ
Make my dreams come true
必ず
Don't wanna, don't wanna,
don't wanna give it up
誰よりも願えば　勝ち取る翼になる
必ず
We're gonna, we're gonna,
we're gonna be the one
To the next stage

近づくほどに遠ざかる理想
好奇心を追い風に
キミが信じた君でゆけばいいさ

手を伸ばせばきっと掴めるさ
Make my dreams come true
必ず
Don't wanna, don't wanna,
don't wanna give it up
同じ時を越えて　同じ鼓動感じた
必ず
We're gonna, we're gonna,
we're gonna be the one

あの日見た大空を飛び越えて`},{id:248,title:"FICTION",titleKana:"FICTION",lyricist:"中村瑛彦・栗原暁(Jazzin'park)",composer:"中村瑛彦・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)・中村瑛彦",album:["AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",performances:["AWARD(大阪){22}","AWARD(新潟){23}","AWARD(宮城){23}","AWARD(愛知){23}","AWARD(横浜,静岡,福岡,広島,北海道){23}","AWARD(北海道オーラス){23}","めざまし30周年フェス(東京){5}"],singer:"WEST.",date:"2024-03-13",tiup:"映画『ある閉ざされた雪の山荘で』主題歌",lyrics:`単調なノンフィクションに
飾られた騙し絵
そうやって演じ疲れて
ねえ　今　キミは誰？

無限の階段上って降りても
ここはどこ...頂上(こたえ)はない
やけに虚しくて

目に映った君は
理不尽なほどに美しい
次のセリフ　隠さないで
ワンカットで

どうして月に裏切られた太陽
僕は誰のために泣いた
知れば傷つき　知らぬも傷ついて
どこからどこまでフィクション？
今まだ抱えきれない絶望も
そこから生まれてよ　希望
それが愛なら
優しい嘘はいらない...

作り笑いでセッション
皮肉混じり　やつれた現実
覗き込む　ボクは誰？

誰かの過ち願ってみたって
それがなに...
喜劇になる筈もなくて

信じてた涙は
雪解けのように美しい
その景色に　隠れないで
スポットライトへ

どうして月に裏切られた太陽
僕は誰のために泣いた
知れば傷つき　知らぬも傷ついて
どこからどこまでフィクション？
今まだ抱えきれない絶望も
そこから生まれてよ　希望
それが愛なら
優しい嘘はいらない...

自作自演　絡み合うエゴのFlame
疑心暗鬼　逃れられないBad End
Wow　痛いのはごめんだ
目を伏せ無関心の完成
ダレカレカマワズ
アレコレネタバレ
ルートA　ルートB
ティックタックどっちだ

気づけばずっと探してた結末
君は誰のために泣いた？
信じてみたくて
信じて欲しくて
そばにいたのに

どうして月に裏切られた太陽
僕は誰のために泣いた
知れば傷つき　知らぬも傷ついて
どこからどこまでフィクション？
今まだ抱えきれない絶望も
そこから生まれてよ　希望
それが愛なら
終わらないから
抱きしめるから
優しい嘘はいらない...`},{id:249,title:"あかさたなららら",titleKana:"あかさたなららら",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["AWARD","AWARD[初回A]"],announce:"t",performances:["DOME TOUR AWARD(大阪,福岡){42}","DOME TOUR AWARD(東京){43}","DOME TOUR AWARD(東京オーラス){43}"],singer:"WEST.",date:"2024-03-13",lyrics:`ありがとう　あなたにちゃんと送るよ
また会おう　思い出にそっと手を振ろう
おめでとう　答えは一つじゃないのさ
初めまして　ピリオド

おはよう　おやすみ僕らの間に
ただいま　君の声が聞こえてきた
おかえり　いつかはきっとくるのさ
またね　いってらっしゃい

あかさたな　はまやらわ　たった50音で
ありのままの僕の自由を縛り付けてみせてよ

あぁ　感じたままに
君のもとへ駆け出せる
負けないよ　ありがとうにさえも
僕はどんな言葉も超える
僕はどんな僕らを探し出す
あぁ　楽しいって楽しいんだ！

ありがとう　小さい子どもが言ってきた
まっすぐ　夢いっぱいそうな声で
あした晴れるといいね
元気でいてね

ありがとう　愛してる　本気のごめんなさい
ありのままの僕の全てを伝えることができるの

あぁ　感じたままに
君のもとへ駆け出せる
負けないよ　ありがとうにさえも
僕はどんな言葉も超える
僕はどんな僕らを探し出す
あぁ　楽しいって楽しいんだ！

あぁ　感じたままに
君のもとへ駆け出してる
負けないよ　アイラブユーにさえも
君はなにげない日々の君へ
かけがえのない日々を送る
あぁ　会いたいって会いたいんだ
あぁ　何度だって何度だって
あぁ　幸せって幸せだ！`},{id:250,title:"あなたへ",titleKana:"あなたへ",lyricist:"神山智洋",composer:"神山智洋",arranger:"久保田真悟(Jazzin'park)・神山智洋",album:["AWARD","AWARD[初回B]"],announce:"t",performances:["DOME TOUR AWARD(大阪,福岡){16}","DOME TOUR AWARD(東京){16}","DOME TOUR AWARD(東京オーラス){16}","CDTV ライブ！ ライブ！春の大感謝祭2025{3}"],singer:"WEST.",date:"2024-03-13",lyrics:`言葉じゃ上手く纏められそうもないけど
歌にすれば伝えられそう
どうか聞いてください

ありのままが一番難しい
でも　あなたにしか出せない魅力
唯一無二の色

ちょっとでも自分を褒めてあげれば
ガチガチの心ほどけていく
痛いの痛いのとんでいけ

あなたへ
一人じゃない　一人にしない
隣で笑う僕たちがいる
七転び八起きなんて言うけどさ
疲れたんなら転がったままでいいんじゃない？

「大丈夫」って魔法の言葉
重なって「ま、いっか」って
明日は今日よリー皮剥けたらいいな

肩肘張って幾重にもバリアを張って
気づかぬよう　傷つかぬよう　準備をしてるの？

1のマイナスが10のプラスを越えちゃって
ネガティブスイッチ　無条件にON　現実逃避行

どん底に落ちた夜は長くて
遠くまで逃げたいよね
ただ　ここが地獄じゃあるまいし

あなたへ
日が昇る　夜明けはすぐ
意味の無い人なんてどこにも居ないんだ
強くなれとか言われてもさ
悲しいんなら泣きじゃくっていたっていいんじゃない？

時が経てばしょーもなくなるさ
切り替えて「もういっちょ」って
自分のことだけは信じてあげようか

苦しむなら自分の為に苦しみたいよな
何かを大切にするならまずは自分を大切にしないとな
考えること多いな　疲れるな
だからこそ自分らしく“I”したい
そんな自分を一番に愛していたい

あなたへ
ただ届け　あなたの元へ
軌跡(みち)は続くよ
響けファンファーレ
何気ない一日が幸せと気づいた
たまにはさ　急がば回れでいいんじゃない？

「なんとかなる」って些細なことが
連なって　叶っちゃって
新たな何か探し続けていくんだろうな

生きとし生ける　あなたへ愛を`},{id:251,title:"あじわい",titleKana:"あじわい",lyricist:"橋口洋平(wacci)",composer:"橋口洋平(wacci)",arranger:"因幡始(wacci)",album:["AWARD","AWARD[通常盤]"],announce:"t",performances:["AWARD(大阪){12}","AWARD(新潟){12}","AWARD(宮城){12}","AWARD(愛知){12}","AWARD(横浜,静岡,福岡,広島,北海道){12}","AWARD(北海道オーラス){12}"],singer:"WEST.",date:"2024-03-13",tiup:"テレビ東京系ドラマNEXT『パティスリーMON』エンディングテーマ",lyrics:`こっちは薄くて　こっちは濃すぎるな
ふいに思い立った僕の慣れない料理に
美味しいと笑いながら食べる君を見て
なんだか照れくさくて　俯く僕

春がアルバムをめくる
花瓶の花が揺れる
出会いから全てが宝物だよ

狭いけれど甘い夜も　背を向け合う苦い朝も
とろけそうなほどのキスも　しょっぱくて仕方ない涙も
まだまだまだ君と味わっていきたいんだよ
大好きな君へ

同じレシピでも　人によって違う
この世界でたった一つ　僕らの恋
妬いて　沸かして　煮詰まって　不器用だけれど
ごめんね　に　ありがとう　をまぶしながら

変わりゆく時の中で　変わることのないもの
一つでも多く　君と二人で

チョコレートの甘い文字も　背伸びをしたフルコースも
飲めもしないアルコールも　甘酸っぱくて青い台詞も
まだまだまだ君と味わっていきたいんだよ
全然飽きないから

大好物のその笑顔　クセになるあの冗談も
まろみのある粋な毒も　噛めば噛むほどに出る魅力も
まだまだまだ君を味わっていきたいんだよ
しわしわになるまで

狭いけれど甘い夜も　背を向け合う苦い朝も
とろけそうなほどのキスも　しょっぱくて仕方ない涙も
まだまだまだ君と味わっていきたいんだよ
確かめにいこう　幸せの味を

こっちは薄くて　こっちは濃すぎるな
ふいに思い立った僕の慣れない料理に
椅子にもたれて　お腹をさすりながら
「美味しかったよ」とやっぱり笑う君に
「そうでしょ」と言いながら泣きそうな僕`},{id:252,title:"We are WEST!!!!!!! (10th Anniversary Version)",titleKana:"We are WEST!!!!!!! (10th Anniversary Version)",lyricist:"神山智洋",composer:"神山智洋",arranger:"ha-j・神山智洋",album:["AWARD","AWARD[通常盤]"],announce:"t",performances:["AWARD(大阪){4}","AWARD(新潟){4}","AWARD(宮城){4}","AWARD(愛知){4}","AWARD(横浜,静岡,福岡,広島,北海道){4}","AWARD(北海道オーラス){4}","DOME TOUR AWARD(大阪,福岡){6}","DOME TOUR AWARD(東京){6}","DOME TOUR AWARD(東京オーラス){6}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){32}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){32}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){32}"],singer:"WEST.",date:"2024-03-13",lyrics:`(しげー！！)はぁーい！！
(あきとー！！)はいさい！！
(じゅんたー！！)あいよー！！
(かみちゃーん！！)はいはーい！！
(りゅーせー！！)えっ！？
(はまちゃーん！！)あぃぃぃいー！！
(のんちゃーん！！)うぃっす！！
LOVE, PEACE & WEST.
We are WEST!!!!!!!
S！！ K！！ N！！ K！！ F！！ H！！ K！！ WEST！！

浪速の魂かかげ参上
誇りを胸に暴れまわって
(なんでやねん！！ どないやねん！！)
希望のつぼみ開いていく
輝く太陽に憧れて
めっちゃ個性的なアホが集った
(ボケて！！ツッコンで！！)
がむしゃらに咲き乱れる

困難でも(はい！！) 信念が(はい！！)
俺ら突き(はい！！) 動かす(はい！！)
純粋な心で(気張って！！行こうぜ！！)
さぁここから　空の彼方へ

跳べ！！(Hey！！) 叫べ！！(Hey！！) 心揺さぶれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 夢の世界へ！！
(あ～もう腕疲れたぁ)
なんてまだ序の口ここから限界突破さ
跳べ！！(Hey！！) 叫べ！！(Hey！！) 高く舞い上がれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 次のStageへ！！(Hey！！)
かけがえない楽しい思い出積み重ね
届け Happiness

がっつりと根を張って奮い立つ
一日花で終わらせないさ
(ガッチャガチャ！！ ワッチャワチャ！！)
たぎる意志は枯らさないから

糧を種に(はい！！)すれば(はい！！)
見事な花(はい！！)が咲く(はい！！)
来たる正念場(踏ん張って！！進め！！)
暗闇でも　さぁ駆け抜けろ

跳べ！！(Hey！！) 叫べ！！(Hey！！) 心揺さぶれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 夢の世界へ！！
(あ～もう声ガラガラ～)
なんてまだ序の口ここから限界突破さ
跳べ！！(Hey！！) 叫べ！！(Hey！！) 高く舞い上がれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 次のStageへ！！(Hey！！)
遠く広がる満開の花びら舞う如く
空へ Fly away

Naughtyな関西人　陽気でやかましい
バリバリのチャキチャキたまに噛み噛みタジタジマジ(ワロタ www)
Funky な感じでも本気で Catch the dream
七転び八起きでファイティーン！！ Ready to go！！

逆境も(ばっちこーい！！)
理不尽も(ばっちこーい！！)
抱いていく大きな夢は(Fu！！Fu！！)
まだこれから(どんどん！！)
増えてくから(頑張れー！！)
風に吹かれても(Go！！)
雨に濡れても(Go！！)
進め一歩でも(Go！！)
描く道のその(Go！！) 先を Wow
さぁ咲き誇れ

跳べ！！(Hey！！) 叫べ！！(Hey！！) 心揺さぶれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 夢の世界へ！！
(やばいめっちゃ楽しい↑↑)
って弾ける笑顔　花丸100点満点さ
跳べ！！(Hey！！) 叫べ！！(Hey！！) 高く舞い上がれ！！(Hey！！)
踊れ！！(Hey！！) 騒げ！！(Hey！！) 次のStageへ！！(Hey！！)
大輪の花が彩り　すべての心繋ぐ
虹色の We are WEST!!!!!!!
Wow`},{id:253,title:"ハート",titleKana:"はーと",lyricist:"柳沢亮太(SUPER BEAVER)",composer:"柳沢亮太(SUPER BEAVER)",arranger:"ha-j・柳沢亮太(SUPER BEAVER)",album:["ハート / FATE","ハート / FATE[初回A]","ハート / FATE[初回B]","ハート / FATE[通常盤]","ハート / FATE[通販盤]","A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["AWARD(愛知){30}","AWARD(横浜,静岡,福岡,広島,北海道){30}","AWARD(北海道オーラス){30}","DOME TOUR AWARD(大阪,福岡){37}","DOME TOUR AWARD(東京){38}","DOME TOUR AWARD(東京オーラス){38}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){31}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){31}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){31}","メトロック2024(東京){3}","サマソニ2024(大阪,東京){7}","a-nation2024{2}","CDTV ライブ！ ライブ！大感謝祭2024{6}","【WESTube生配信】4.23デビュー10周年やねぇぇぇぇぇぇぇんSP{1}","WEST. 10th Anniversary Live “W”{7}","WEST. 10th Anniversary Live “W”-Film edition-{7}"],singer:"WEST.",date:"2024-04-24",tiup:"テレビアニメ『キャプテン翼シーズン2 ジュニアユース編』第3クールオープニングテーマ",lyrics:`諦めたい夢なんてないよな

敵わないかも　横を見て　上を見て　落ち込んだって
いずれ全身全霊が　必須なことには違いない
叶わないかも　焦るけど　足元見て　気がつくんだ
いずれ前進する以外　叶えられる術はないと

楽しいってさ　涙を蹴散らすことじゃなくて
悔しい気持ちも　仲間と思えたときの心のこと

きっと　いつまでも　どこまでも　ずっと
戦っていくんだろう　張り合っていくんだろう　自分と
諦めたい夢なんてないよな
涙って僕らの　正直さなんだよ
誰にも止められやしない　勝ち越せたらいい
好機を演出するのは　「信じる」をやめないハート

本当の敵は内側に　それもまた一つの真実
それでも負けたくない誰か　競り合うことも間違いじゃない
ただ見失いたくないな　打ち負かして　ニヤけたい　わけじゃないこと
横も　上も　下もない　僕自身を

楽しいってさ　涙を蹴散らすことじゃなくて
悔しい気持ちも　仲間と思えたときの心のこと

きっと　いつまでも　どこまでも　ずっと
戦っていくんだろう　張り合っていくんだろう

そう　いつまでも　どこまでも　ずっと
戦っていくんだよ　張り合っていくんだよ　自分と
諦めたい夢なんてないよな
涙って僕らの　正直さなんだよ
誰にも止められやしない　勝ち越せたらいい
言い換えるのなら　最後の最後に
仲間と肩組み　笑えたならいい
好機を演出するのは　「信じる」をやめないハート

「信じる」をやめないハート`},{id:254,title:"FATE",titleKana:"FATE",lyricist:"久保田真悟(Jazzin'park)・UTA・AKIRA・Yohei",composer:"久保田真悟(Jazzin'park)・UTA・AKIRA・Yohei",arranger:"久保田真悟(Jazzin'park)・UTA",album:["ハート / FATE","ハート / FATE[初回A]","ハート / FATE[初回B]","ハート / FATE[通常盤]","ハート / FATE[通販盤]","A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["DOME TOUR AWARD(大阪,福岡){34}","DOME TOUR AWARD(東京){35}","DOME TOUR AWARD(東京オーラス){35}","WEST. 10th Anniversary Live “W”{12}","WEST. 10th Anniversary Live “W”-Film edition-{12}"],singer:"WEST.",date:"2024-04-24",tiup:"WOWOW 連続ドラマW-30『白暮のクロニクル』主題歌",lyrics:`魘(うな)された夢は現(うつつ)か
嗚呼　いつしか涙涸らして
彷徨って
使命とやらを喰いもんにして

感じないようにしてた
見えないようにしてたんだ

戻れぬ道だろうと
もう果てなど無かろうと
思い出すんだ...誰の為だよ
声にならなくたって
もう一度逆らい叫ぶ
I'll be the one
明日も目覚める運命だ

箱に仕舞った感情など
嗚呼　鍵も失くした筈だった
巡り合う　その瞬間(とき)までの話さ

とめどなく染まってる
Colorful world　戸惑う
刹那に触れ　色を取り戻す
I wanna run　僕の番
一筋の光　掴もう
失っても　乗り越えればいい

光を手繰り寄せた手に残った感触を
忘れないんだ...乾きが襲っても
我が身燃え尽きたって
この目逸らしはしない
Why I'm the one？
明日も目覚める運命だ

焦がれた夢　邪魔で動けやしない
ただ守り抜くのが無様って言うんなら
無様な儘でいいんだ

戻れぬ道だろうと
もう果てなど無かろうと
思い出すんだ...誰の為だよ
声にならなくたって
もう一度逆らい叫ぶ
I'll be the one

光を手繰り寄せた手に残った感触を
忘れないんだ...乾きが襲っても
我が身燃え尽きたって
この目逸らしはしない
Why I'm the one？
明日も目覚める運命だ`},{id:255,title:"・(ten)",titleKana:"ten",lyricist:"WEST.",composer:"重岡大毅・神山智洋",arranger:"ha-j・神山智洋",album:["ハート / FATE","ハート / FATE[初回A]","ハート / FATE[初回B]","ハート / FATE[通常盤]","ハート / FATE[通販盤]"],announce:"t",performances:["DOME TOUR AWARD(大阪,福岡){17}","DOME TOUR AWARD(東京){18}","DOME TOUR AWARD(東京オーラス){18}","10周年生配信トーク＆ライブ「虹会」{4}","WEST. 10th Anniversary 大阪松竹座公演(夜){4}","WEST. 10th Anniversary 大阪松竹座公演(千穐楽){4}"],singer:"WEST.",date:"2024-04-24",lyrics:`ライフ　イズ　オンリーワン！
もうこんな時間か
自分ってなんだ
自由っておもしろいよなぁ
今日やろうかな？
いや、明日でいいよな
会いたいな。

「大人」になったな！って
笑い合ったりしてさ…
本当はずっと「こどな」でいたいんだ！
「また明日ね」ってフレーズ
なんか良いよね
ずっと言ってたい
そう思わん？

この前買ったビンテージのワイン
今度一緒に開けてみようよ
もうすぐお前誕生日だし
よく笑った
明日何時？
遅刻するなよ。
お前がゆうな！w

ドレミファ　なんでもいい
ソラシド　なんじゃない
ドシラソファミレ　どうかなぁ
なんとかしなくたっていい
なるようになってるし
今までもこれからも
話をしようよ

シャラララ　ラランラン　いつ
ルルルン　どこで
ドタバタ　ジャカジャン　誰が
なんにもしなくたっていい
ちゃんとわかってるし
今までもこれからも
待ちあわせしようよ

「そうやっけ？」「そうやって！」
笑い合ってそうやって
どこまでだって
変わりゆく中で　変わりはしないもの
らしく行こう　今日も

ドレミファ　なんでもいい
ソラシド　なんじゃない
ドシラソファミレ　どうかなぁ
なんとかしなくたっていい
なるようになってるし
今までもこれからも
話をしようよ

シャラララ　ラランラン　いつ
ルルルン　どこで
ドタバタ　ジャカジャン　誰が
なんにもしなくたっていい
ちゃんとわかってるし
今までもこれからも
待ちあわせしようよ`},{id:256,title:"コンビニ行くけどなんかいる？",titleKana:"こんびにいくけどなんかいる？",lyricist:"ゆっきゅん",composer:"岩崎貴文",arranger:"岩崎貴文",album:["ハート / FATE","ハート / FATE[初回A]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){4}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){4}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){4}","CDTV ライブ！ ライブ！春の大感謝祭2025{4}","メトロック2025(東京){4}","WEST. 10th Anniversary Live “W”{13}","WEST. 10th Anniversary Live “W”-Film edition-{14}"],singer:"WEST.",date:"2024-04-24",lyrics:`コンビニ行くけどなんかいる？
なあ俺にできることなんかある？
コンビニ行くけど一緒行く？
よし俺にできること考える！

この時間帯っておにぎりゼロじゃん　(えー！)
来た意味ないけど笑えるね (YEAH！)
そんな今日もOK！ (OK！)　散歩でもしようよ (YEAH！)
隣でふざけ続けてもいい？　(はーい)

さくら味の春　頑張っちゃう夏　ずっと見てたいよ (YO！)
すべての君に会いにゆく覚悟あるんだ (YEAH！)

24 Hours！
眠れない夜も　寝過ぎた朝も
コンビニみたいに寄り添って
君が笑顔になる瞬間　なんで泣けてくるんだろう
充電器貸すよ　何度だって100%で永遠を始めようよ
気圧、貯蓄、たんぱく、口角？
一緒にアゲてく　人生ってYEAH！

期間限定を何度も逃して　(はーあ)
二人それなりに過ごしたね (YEAH！)
どんな今日もOK！ (OK！)　来週末遊園地！ (YEAH！)
隣で歌い続けてもいい？　(はーい)

ピスタチオは秋　極端な冬　そっと見てたいよ (YO！)
すべての君に会いにきてもらえるように (YEAH！)

24 Hours！
何もない日曜も　特別な水曜も
コンビニみたいにここにいよう
俺が真顔になる瞬間　なんか君は笑ってくる
偶然だったかな？何度も確かめて必然を見つけようよ
経験値、前髪、まなざし、セロトニン！
一緒にアゲてく　人生ってYEAH！

コンビニ行くけどなんかいる？
コンビニ行くけどなんかいる？
コンビニ行くけどなんかいる？
コンビニ行くけどなんかいる？
コンビニ行くけどなんかいる？
コンビニ行くけどなんかいる？
コンビニ行くけどなんかいる？
ああ、なんかあったらほんまに言って

24 Hours！
眠れない夜も　寝過ぎた朝も
コンビニみたいに寄り添って
君が笑顔になる瞬間　そのために生きてこう
充電器貸すよ　何度だって100%で永遠を作り出そうよ
気圧、貯蓄、たんぱく、口角？
経験値、前髪、まなざし、セロトニン！
一緒にアゲてく　人生ってYEAH！`},{id:257,title:"クセになる",titleKana:"くせになる",lyricist:"NakamuraEmi・カワムラヒロシ",composer:"NakamuraEmi・カワムラヒロシ",arranger:"カワムラヒロシ",album:["ハート / FATE","ハート / FATE[初回B]"],announce:"f",performances:[],singer:"WEST.",date:"2024-04-24",lyrics:`君に釘付けクセになる　ステキなステキなMy Fave
君に釘付けクセになる　ステキなステキなMy Fave

メイク落としてさっぱり　今日の嫌なことバッサリ
年々あっちゅう間に過ぎてくさ　理想は素敵なVintage
モヤモヤはスパイスと煮込んでしまえ
飲み込めるかは　知らんけど

でも君は風呂上がりのビールのよう　眠る前のアイスのよう
キュートでコメディー　遠巻きニヤリ眺めております

君のキラキラした生き様を　見るとこっちも輝けちゃうよ
何でも話してくれる君が大好きさ

君に釘付けクセになる　ステキなステキなMy Fave
君に釘付けクセになる　ステキなステキなMy Fave
目薬をさしたところで　その白目にはならない
マシュマロを食べたところで　その白さにもならない
でもいいのさ　そんなのいいのさ
明日は明日　頑張りましょう！

ここは洗濯機の中ですか？　気持ちの渦に泡吹きそう
それは燃えるゴミですか？　いえ自分にとっちゃ宝物
あちらの電球が切れそうです　こちらの電池も切れそうです
どの花も枯れちゃうよ　あぁもうカラカラ

誰かを受けとめること　誰かを応援すること
自分に余裕がないと　できないかもしれない

たまには空気を入れ替えて　新しい柔軟剤にして
誰かの価値観なんて　じゃぶじゃぶ洗い流して
いっぱい太陽を浴びて　遊び心の余裕を
君のことが大事な今が大好きさ

君に釘付けクセになる　ステキなステキなMy Fave
君に釘付けクセになる　ステキなステキなMy Fave
向かい風も追い風に変えてしまおう
綺麗な白い花がゆらゆら揺れてる
土砂降りの雨も止んだら七色の虹がかかるよ
明日は明日　頑張りましょう！`},{id:258,title:"天空エスカレーション",titleKana:"てんくうえすかれーしょん",lyricist:"河田総一郎",composer:"河田総一郎・佐々木望",arranger:"Soulife",album:["ハート / FATE","ハート / FATE[通常盤]"],announce:"t",performances:["10周年生配信トーク＆ライブ「虹会」{2}"],singer:"WEST.",date:"2024-04-24",tiup:"近鉄不動産 あべのハルカス 10周年記念CMソング",lyrics:`上がる　上がる　天空まで上がってく
ハルカ澄んだ　あの場所に
届けるまで　止めないでエナジー

あの日君に出会った瞬間
ディストーションみたいな直感
目の前の景色が全部
パワースポットに変わったよ

泣き出しそうなCloudy skyもRainy dayも
虹を待つ序章なんだよって
君が教えてくれたから
もうどんな　今日も　無駄にしない

曲がりくねった道だからこそ
たくさんのカーブで景色見れるよ
君といるなら　遠回りもOK

変わる　変わる　この街も変わってく
昨日よりも　“今日が好き”
Everyday, Power-Up
明日もBeautiful day
上がる　上がる　天空まで上がってく
ハルカ澄んだ　あの場所が
待ってるから　止めないでエナジー

幸せの基準は曖昧
だからこそ感じてたい I like it！！
MAPに載らない up-downも
君となら　アトラクションさ

迷った時は　あのタワーのように
目印にして　僕を頼って
つまずいたって　止まらないで　One way

Higher Higher Higher
無重力の世界みたいに　(離さないで)
Fly Fly Fly
恋も急上昇　(どこまでも)
君と上がってこう

きらり　ひかり　今日がまた始まる
君を連れて　駆け上がってく

変わる　変わる　僕たちも変わってく
昨日よりも　“君が好き”
Everyday, Power-Up
今日だってBeautiful day
上がる　上がる　天空まで上がってく
ハルカ澄んだ　あの場所に
どんな景色　広がってるの？
この目で君と　見たいから
いま心に　湧き上がるエナジー`},{id:259,title:"Closer",titleKana:"Closer",lyricist:"Shadow-words・篠原とまと",composer:"高橋諒",arranger:"高橋諒",album:["ハート / FATE","ハート / FATE[通販盤]"],announce:"f",performances:[],singer:"WEST.",date:"2024-04-24",lyrics:`(Got this melting love)
(Lighting up my soul)
(Right, you might be in love)
(But not in control)

さあ 君ならこれからどうしたい？
未知の展開 find
居心地最高 ぬるま湯ライフ
ハッピーな振りだけなんじゃない？
一貫した no clueless
それとも素直になれないフェーズ？
解せない じゃ俺から先制で
0から100まで Give me all of you

選べぬ choice
揺れ動いて heart beating
リスキーな priority
I can understand
Don't hide away
Why'd you make that face?
塞いだ唇に this reality
Yeah, I know
I still love you

窓の外 rainy blue
さめざめ止まぬ小雨
雨にも負けず
心に問う 躊躇いの決め手に
広がる sky blue
厚い雲はいずれ晴れる
もうその愛が呼んでんだ

So I won't let you go
(Baby)
掛け違えた想いが drowning
惹かれ合ってまた向こう
交わらない 逃避行
I won't let you go
(No)
御伽話でも構わない
Alright, alright
Come on closer

(Got this melting love)
(Lighting up my soul)
(Right, you might be in love)
(But not in control)
Yeah 焦ってんな
アドリブだけじゃ無理 突破
溢れる思いをブチまけたい
喉は痺れて何も言えない
Yeah 焦ってんな
アドリブだけじゃ無理 突破
溢れる思いをブチまけたい
君の目の中へ now respond

めでたく一緒 新生 couple
そうなりゃ毎日 bright
陽だまりの中 見つめ合い
分かち合うのさ 喜怒哀楽(Always)
たまにはmore遠くまで
なんぼあってもいい思い出
最高 no mercyな現実に
見えた夢

(Met you, my heart unsealed)
愛に口実はいらない
(Just feel)
縛れない
(Know you now and it's real)
もう誰も止められない
(Just feel)
I'll take you out
(Thought of you, my heart peels)

輝いて city lights
雨模様 空の下
(Up high)
強く抱き寄せた
(in these skies)
このハートを君へ
(Feel them inside)

言葉なんていいから
君の全てを
教えてほしい 心からの君を
言い訳なんていいから
描いてみよう 無限の夢想

So I won't let you go
(Baby)
絡み合う日々を now, draw them
つかず離れず 探り合う
時間忘れて all night long
I won't let you go
(No)
ありふれた朝を君と keep on

So I won't let you go
(Baby)
掛け違えた想いが drowning
惹かれ合ってまた向こう
交わらない 逃避行
I won't let you go
(No)
御伽話でも構わない
Alright, alright
Come on closer

(Got this melting love)
(Lighting up my soul)
(Right, you might be in love)
(But not in control)
Yeah そんな馬鹿な
胸を焦がして オーバーヒート
シナリオ狂って大暴走
見つけた気がした ハッピーエンド
Yeah 馬鹿は俺だ
見えないものを見ようとした
醒めた後に残った感情
まっすぐに君を愛してた`},{id:260,title:"まぁいっか！",titleKana:"まぁいっか！",lyricist:"meiyo",composer:"meiyo",arranger:"高橋諒",album:["まぁいっか！","まぁいっか！[初回A]","まぁいっか！[初回B]","まぁいっか！[通常盤]","A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["DOME TOUR AWARD(東京){17}","DOME TOUR AWARD(東京オーラス){17}","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){5}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){5}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){5}","a-nation2024{5}","KOYABU SONIC2024{4}","CDTV ライブ！ ライブ！大感謝祭2024{2}"],singer:"WEST.",date:"2024-09-10",lyrics:`(ワンツー...まぁいっか！)
La La La...
(まぁいっか！まぁいっか！)

この物語の主人公は僕です
絶対そうって言い切れる！
いつか見た理想や　あのとき笑われた夢が
キラッと光って今　僕を照らしている

(まぁいっか！)

ちょっとの事など気にしないぜ (Z！)
昨日よりも今日の方が最強じゃん！ (でも？)
時々あっちゃこっちゃ羨ましいなって...
僕は僕なのに！

まぁいっか！
なんとなく過ごす日々に愛は隠れてる
やり切れないことばっか押し寄せて来ちゃうけど
みんな違ってみんな良いだなんて思えなくても良い
僕が僕を愛してあげないとさ
大好きな君に笑われちゃうよな

少し大げさに言うなれば
無敵のヒーローです
誰かの理想に　イヤイヤ合わせるくらいなら
サイテーの上で　歌って踊ってやる！

(まぁいっか！)

「みんなそんなもんでしょ」ってかなわんわ (そーれ！)
楽しんだもん勝ちって言ってんじゃん！ (ピース！)
根拠なんてないんだけど
馬鹿馬鹿しいなって　とりあえず　それとなく
笑えればIt's OK！

まぁいっか！
なんとなく過ごす日々に愛は隠れてる
やり切れないことばっか押し寄せて来ちゃうけど
みんな違ってみんな良いだなんて思えなくても良い
僕が僕を愛してあげないとさ
大好きな君に笑われちゃうよな

La La La...

まぁいっか！

こうやってなんとなく過ごす日々に愛が溢れてく
そんなイメージ持ってりゃこんな世界もちょっと煌めくぜ！
みんな違ってみんな良いだなんて思えなくても良い
少しも難しいことはないのさ
僕が僕を愛していたいから
大好きな君のために歌っていいかな

La La La...
(まぁいっか！まぁいっか！)`},{id:261,title:"なりふり",titleKana:"なりふり",lyricist:"Kanata Okajima・Hayato Yamamoto",composer:"Kanata Okajima・Hayato Yamamoto",arranger:"Hayato Yamamoto",album:["まぁいっか！","まぁいっか！[初回A]","まぁいっか！[初回B]","まぁいっか！[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){8}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){8}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){8}"],singer:"WEST.",date:"2024-09-10",tiup:"ABCテレビ・テレビ朝日系『あなたの代わりに見てきます！リア突WEST.』テーマソング",lyrics:`僕が選んだからには
ありきたりで終わらせないぜ
扉　ぶっ壊れた今こそ
誰も邪魔出来ないんだ

アリエナイ　バカミタイ
散々言われたけれど
後悔するくらいなら
笑われたほうが良いや

「何者かになりたい」それだけ
ポケットに捩じ込んだ Night
時代のせいにしてたら
なんかゲームセットじゃない
眺めてた　街の灯りも
消えてくころ　僕は出てくよ
勇敢なヒーローの振りして

なりふりかまわず　生きたくて
何処かで愛求め　迷子だった衝動は
僕をつくり　僕を目覚めさせる
前だけ見てりゃ上等さ

なにやってんの
涼しい顔してらんないよ
心に突き刺さるメンション
Why'd you stop？ お前に聞いてんの
変わってみたいなら
向き合うしか無いかな
まだ　僕を諦めたくないや

ひたすら信じていたい　それだけ
止まっては　進んでく Style
時計の針に追いかけられている場合じゃない
つまづいた時の砂利の味も
今でも忘れていないよ
いっさいがっさいを味方にして

なりふりかまわず　生きたくて
何処かで愛求め　迷子だった衝動は
僕をつくり　僕を目覚めさせる
前だけ見てりゃ上等さ

Wow...... 響いていく
Wow...... 広がっていく

僕らがいて
あなたがいて
それだけで笑える
これでいいんだって思える
あなたがいて
僕らがいる
生きたいって思える

なりふりかまわず　生きたくて
何処かで愛求め　迷子だった衝動は
僕をつくり　僕を目覚めさせる
今を歌えりゃ　充分さ

僕らがいて
あなたがいて
あなたがいて
僕らがいる

僕らがいる`},{id:262,title:"I like you!!",titleKana:"I like you!!",lyricist:"山崎あおい",composer:"白戸佑輔",arranger:"白戸佑輔",album:["まぁいっか！","まぁいっか！[初回A]"],announce:"t",performances:["ファンクラブ限定動画(ゴールデンウィークはWEST. WEEK!<Special Performance>){1}"],singer:"WEST.",date:"2024-09-10",lyrics:`まっすぐ声にしよう
やっぱり僕らは
“I like you！！”
ねえ、手を繋ごう

午後の金木犀が
ゆっくり街をつつんだの
ふいに出会ったころの
君が揺らめいて

とっくに見慣れたすっぴん
良いのに、うつむかないで
からかってないけどさ
いとしくて　ごめんね

ふたつの影
まるで当たり前の幸せ
こんな日に似合う
言の葉を集めて

まっすぐ声にしよう
やっぱり僕らは
“I love you！！”以上
“I like you！！”が「らしい」ね

しわくちゃになったら
着こなせるかな
“I love you！！”
そっと待ってて

巡るたび季節は
きっとね　加速してる
君もそう思うんなら
気のせいじゃないかも？

バースデー　そろそろだね
ヒントは9つまで
かわいい願い事を
今年こそ当てるよ

ひとつになる
思い出と未来のシュプール
はぐれないように
ひらめく限りの灯を

最後の恋にしよう
やっぱり君だよ
“I like you！！”一生
言ったって　足りないや

芽生えたあの日と
同じ温度の
“I like you！！”
ねえ、手を繋ごう

夕暮れ　細道　笑い合えば
こだましたやさしさ
やっと見つけた　愛だ

格好もつけたいけど
やっぱり僕には
“I love you！！”以上
“I like you！！”が「らしい」ね

しわくちゃになっても
こんな「好き」を重ねよう
何百回だってさ

最後の恋にしよう
やっぱり君だよ
“I like you！！”一生
言ったって　足りないや

芽生えたあの日と
同じ温度の
“I like you！！”
ねえ、手を繋ごう`},{id:263,title:"諦める主役へ",titleKana:"あきらめるしゅやくへ",lyricist:"コ太郎 from テンパーセントカーテン",composer:"コ太朗 from テンパーセントカーテン",arranger:"佐々木”コジロー”貴之",album:["まぁいっか！","まぁいっか！[初回B]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){11}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){11}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){11}"],singer:"WEST.",date:"2024-09-10",lyrics:`私の毎日を狂わすのは
錆びた弦でも切れた縁でもない
まだ好きでいたくて
まだ好きなのに痛くて
白黒を選べない
私は私を選べない

さよなら私の夢よ
私の想いよ
このまま枯れるよりも
さよなら私の日々よ
私の全てよ
おやすみ

春は親切に訪れるの
風は健気に街を駆けていくの
私は私で居たくて
私が私だと痛くて
何者にでも慣れて
未だ何者にも成れない

泣いて笑って
落ち込んで崩れて
それでも私の人生
強く生きてみたりする

誰か気付いて
誰か気付いて
こんな私の人生
これも私だ

今でも私の光よ。
これまでの痛みも
抱えて探して進んでいく
全てが私の日々よ
私が決めるのよ

もう会わないでいようね
諦める主役`},{id:264,title:"ゴールデンタイム",titleKana:"ごーるでんたいむ",lyricist:"ET-KING・NAOKI-T",composer:"ET-KING・NAOKI-T",arranger:"NAOKI-T",album:["まぁいっか！","まぁいっか！[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){2}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){2}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){2}"],singer:"WEST.",date:"2024-09-10",tiup:"TBS『ひらめけ！うんぴょこちゃんねる』エンディングテーマ",lyrics:`踊ろうや歌おうやど真ん中人生謳歌
(あんたもそうでっか？)
ほな良かったまだまだせーへんSlow down
めったにないよなこの瞬間
乗ってけみんなで魔法の絨毯
しんどい？ hahaまたまた御冗談
Shall we dance？お任せ僕、長男

待ちに待った夢見心地
(風吹かそうその手を叩いて)
忘れてええよ明日なんて
(ふっ飛ばそうぜ月の向こうまで)

君が照らした光目指し
駆け出す　はじまる　全てはここから

ひとりになんてさせやしないぜ
瞳奪うなんてお手のもんです
一度きりなんて言わんといて
他の誰かはちょっと置いといて

巡り巡り君と共に声を響かす (Hey！)
熱意決意込めて奥に音を届ける (Hey！)
It's show time！ ゴールデンタイム！
踊りたい人　どこ！？　そこ！！
あそこにも！！了解！！

ピカピカ光る笑顔　集まれば始まりの合図
Hey！ 今はぼちぼちじゃなく強引にGoing！
奇跡起こる予感
イラーッとなんかしないでここにくれば
夢のような世界へ
なにわともあれいくぜ I go my way
男子も女子も手に手をとったら歌え
ナイナイ心配ナイ緊張なんていらナイ
ここに来たなら楽しむしかナイ

Let it be　思うままに
予測可能な明日なんかつまんない
背伸びした景色に
胸を膨らまして生きる方がいい

君が照らした光　受け取り
今また　はじまる　まだまだこれから

Hey　口から出まかせ
蔓延る世界に立ち向かえ
未来に期待全部自分次第
めちゃくちゃに肩組んで喋りもて

おい！今何時や？
ん？7時ぐらいやな
おい！めっちゃええやん！
ゴールデンタイムや！
ほんまやな！
でもゴールデンタイムってなんで
ゴールデンタイムなんや？
そりゃみんな集まって
『どっひゃー』なれるからやろ？
ほんまやなー　ピッカピカやー！

ピカピカ光る笑顔　集まれば始まりの合図
Hey！ 今はぼちぼちじゃなく強引にGoing！
奇跡起こる予感
イラーッとなんかしないでここにくれば
夢のような世界へ
なにわともあれいくぜ I go my way
男子も女子も手に手をとったら歌え
ナイナイ心配ナイ緊張なんていらナイ
ここに来たなら楽しむしかナイ

踊らにゃそんそん

めちゃめちゃええやん最高
めちゃめちゃええやん最高超でいこう
キラキラのその笑顔抱きしめに行くよ
めちゃめちゃええやん最高
めちゃめちゃええやん最高超でいこう
曇った世界にこの声届けどこまでも晴れ渡れ
Hey！ めちゃめちゃええ夢みさせるぜ Yeah！

君の為に声を大にここに宣言(Hey！)
煌びやかに照らすキラリ笑みは満面(Hey！)
It's show time！ ゴールデンタイム！
声聞かせてよ
いつ！？　今！！いくでGO WEST.`},{id:265,title:"Checkmate",titleKana:"Checkmate",lyricist:"長沢知亜紀・永野小織・Kaz Kuwamura・小木岳司",composer:"長沢知亜紀・永野小織・Kaz Kuwamura・小木岳司",arranger:"小木岳司",album:["まぁいっか！","まぁいっか！[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){21}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){21}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){21}","メトロック2025(東京){9}"],singer:"WEST.",date:"2024-09-10",lyrics:`Checkmate

Oh Checkmate

目が合うたび逸らす君は
ねぇLove youが漏れてるよ
白黒つかない態度で
ごまかしたってWhat's your point？

左ならもうGo home
右ならこの恋Stay hope
どっち選べばいいか
わかってるんでしょう

心は“行かないで”
口では“バイバイ”なんて
引き止めてほしい君はずるい

覚悟決めて
会いたいなら会いたい
触れたいなら触れたい
素直になれたらYou're the winner
簡単に攻略できないから燃えるんだろう
結局
愛したいから愛したい
言いたいもう言いたい
降参しちゃえば欲しいものあげる
目を閉じてごらん　君の唇に
Checkmate
Checkmate

指先触れるたび君は
Want youの裏返しだね
僕は強気の一手
気づかれないよPoker face

下ならひとりDream world
上ならふたりSweetest night
どっち狙ってるかなんて
言うまでもないでしょう

頭じゃ“わかってる”
みつめて“どうしたい？”なんて
委ねて逃げるから追いかけちゃう

Checkmate

君のReady次第で僕らはSteady
もうわかってるくせに
Don't be a silly billy！
No 猜疑心
Endgame, Checkmate
終わりのその先へ
その先へ

「なぁ......言わせんなよ」

会いたいなら会いたい
触れたいなら触れたい
素直になれたらYou're the winner
簡単に攻略できないから燃えるんだろう

結局
愛したいから愛したい
言いたいもう言いたい
降参しちゃえば欲しいものあげる
目を閉じてごらん　君の唇に
Checkmate

Yeah eh eh, Yeah eh eh eh
Checkmate
Mate, this is how we make it
Checkmate`},{id:266,title:"A.H.O.",titleKana:"A.H.O",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE・Hiroki Sagawa・児山啓介・鈴木まなか(Relic Lyric, inc.)",arranger:"Hiroki Sagawa(Relic Lyric inc.)",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){1}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){1}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){1}","CDTV ライブ！ ライブ！春の大感謝祭2025{6}","メトロック2025(東京){7}","11周年生配信トーク＆ライブ「虹会」{1}"],singer:"WEST.",date:"2025-03-12",tiup:"Red Bull『Red Bull The Spring Edition』タイアップソング",lyrics:`夢から醒めた
現実にマジか (泣)
余裕とかなくても
スマホでコーヒータイム
月曜日 Bonus Day
火曜日 おつかれDay
水木金は実質土日で毎日Party
Oh No！前代未聞の失態
友人に電話して　号泣した翌日
「まあ、次あるっしょ！」
「なんとかなるっしょ！」
反省しても後悔しない
切り替え早めのスタイル Yeah

本来　人類はみなアニマル
兄弟　まあ気楽にもう一杯
アクセルベタ踏みで空も飛びたい

超弩級のAHO AHO AHO AHO AHO
最強のAHO AHO AHO
なんて素晴らしい！
一寸先も　千年先も
笑えりゃOK　全てはAlright
つまり悩んでるのもアホらしい
まあいいっしょ　最低でも最高
こんなんじゃ足りないや

やめときなさいって　なんでやねん
ほいならおたくはどないやねん
っちゅうか　なんたらかんたら説教垂れる前に
踊りゃええんちゃうの？

四の五の言わずに笑えばええ
恥ずかしがらんで遊べばええ
そうなんとかかんとか　考えるよりも今
全部脱ぎ去って

あーやれやれだ　だめだめだ
アセアセだ　風邪気味だ
そんなのどうでもいいよ
人生が一度きりなら
人の目とか気にすんじゃねえ！
We're サラブレッド　ドアホ　ドアホ

最上級のAHO AHO AHO AHO AHO
空前のAHO AHO AHO
だってそうでしょ？
白でもいいじゃん　黒でもいいじゃん
幸せならば　全ては正解
つまり後悔するのもアホらしい
超いいっしょ　最高以上行こう
胸張って生きたいじゃん

楽しくないと意味ないよ実際
全部は気分次第

天才じゃなくても
ご立派じゃなくても
いつだって自分だけは自分の味方でいたい
マジくだらないよな
ああしろ　こうしろってさ
やってられないよな
誰だってアホみたいなもんやのに
アホがアホにアホって
言うのが一番アホやん
Oh Yeah！

心配事の99%気にしすぎ
顔色ばっか窺っても意味ない
さっさと遊びに行こうか！

超弩級のAHO AHO AHO AHO AHO
最強のAHO AHO AHO
なんて素晴らしい！
一寸先も　千年先も
笑えりゃOK　全てはAlright
つまり悩んでるのもアホらしい
まあいいっしょ　最低でも最高
人生は喜劇
最高以上行こう
確定でハッピーエンド
人類みな解放
AHOに生きようぜ

Audio Hang Out`},{id:267,title:"アップルパイ",titleKana:"あっぷるぱい",lyricist:"篠原とまと",composer:"川口進・MiNE・佐原康太",arranger:"佐原康太",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){19}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){19}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){19}"],singer:"WEST.",date:"2025-03-12",lyrics:`(Mmm... c'est si bon...)
Ooh yeah
Wow baby
Open your eyes, my sweetie

兎角、この世は愛おしい
全て手に入れてみせましょう
投げたRed apple
夜に溶ける
惚れ薬　毒をちょっと一匙

In the night sky (In the night sky)
甘くないの (甘くないの)
これが罠なんて
もう台無しだわ

Follow me
世間知らずなフリをして
炙り出す　本当の答え
染まる前の夜空にFly away
触れば仰天、齧(かじ)れば昇天
君にだけ

You wanna kiss kiss
Kissing my heart tonight
丸裸にしたい
You wanna kiss kiss
Kissing my lips tonight
もっと求めてしまいそう
いずれは醒める夢と
分かってるつもりよ
You wanna kiss kiss
Kissing my lips tonight
さあ、愛を召し上がれ
アップルパイ

いつかは素敵な王子様と……
信じてるなんてお子様ね、ホント

I'm here if you want (I'm here if you want)
どこにいるの (どこにいるの)
ただ足掻いても
抜け出せないわ

想像以上　手強い恋の迷路
貴方を翻弄
迷う前に出口にRunaway
迷えば反転、曲がれば終点
私の方へ

You wanna kiss kiss
Kissing my heart tonight
丸裸にしたい
You wanna kiss kiss
Kissing my lips tonight
もっと求めてしまいそう
いずれは醒める夢と
分かってるつもりよ
You wanna kiss kiss
Kissing my lips tonight
さあ、愛を召し上がれ
アップルパイ

甘い蜜に誘われて
いい気味ね、好きで身を投げて
Oh boy
軽くお芝居
全て思い通り
You say yes, you say more
ちょろいもんね

Ooh yeah
Wow baby
Open your eyes, my sweetie

You wanna kiss kiss
Kissing my heart tonight
まだまだ満たされない
You wanna kiss kiss
Kissing my heart tonight
飲み込まれてしまいそう
派手に振り回されても
たまにはいいでしょ？
You wanna kiss kiss
Kissing my heart tonight
さあ、おはようのキスを
アップルパイ

抜け出せないわ
抜け出せないわ`},{id:268,title:"shhhhhhh!!",titleKana:"shhhhhhh!!",lyricist:"前田佑・栗原暁(Jazzin’park)",composer:"前田佑・栗原暁(Jazzin’park)",arranger:"前田佑",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){18}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){18}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){18}","CDTV ライブ！ ライブ！春の大感謝祭2025{5}","11周年生配信トーク＆ライブ「虹会」{5}"],singer:"WEST.",date:"2025-03-12",tiup:"読売テレビ ドラマDiVE+『キスでふさいで、バレないで。』オープニング主題歌",lyrics:`わかってるくせに... shhhhhhh！！
大胆なセリフ
ねえ　言いたい　言えない　言わない　絶対？
初めての顔を見せて...

無理　無理　昨日から
普通のフリ　フリ
思い出すたびにHoney, honey
甘過ぎて隠しきれないPassionate
桜色...

Hey don't miss it
Our love is the real
二人を縛る運命のひも
Step over the line if you want me...
なんてね

焦(あせ)り過ぎでしょ...
まだ開けちゃいけないSweet Box
誰かに言いたくて
とろけそうさ

わかってるくせに... shhhhhhh！！
大胆なセリフ
ねえ　言いたい　言えない　言わない　絶対？
焦(じ)れったいほどにSweet
もう　バレちゃう　バレたい　バレない　今日も
そのままのキミを見たくて...
Kiss you

シャツの奥で　ざわつく　鼓動
耳を塞いでも　消えない程
いつから呼んでたファーストネーム
二人だけが知ってる
確信犯

Can you feel it？
Our love is the real
電話越しでもわかる感触
Check deep in my heart if you want me...
おやすみ

静かな部屋は
余計に愛しくなるよ
らしくないことさえ
しちゃいそうさ

わかってるくせに... shhhhhhh！！
大胆なセリフ
ねえ　言いたい　言えない　言わない　絶対？
焦(じ)れったいほどにSweet
もう　バレちゃう　バレたい　バレない今日も
そのままのキミを見たくて...

Feelin'... missin'...
I'm twistin'
Fallin'... Callin'...
my heart insistin'
Bitter　今　何処　誰...
Sweet ok　じゃあ　後で
Bitter　嘘...　自問　自答
Sweet　そっか　君も　同じ？

今以上が欲しいから
Don't change change change my heart
たったひとつのラストシーン
わかってるくせに... shhhhhhh！！
時がとまったのは
僕だけのキミだったから

わかってるくせに... shhhhhhh！！
大胆なセリフ
ねえ　言いたい　言えない　言わない　絶対？
焦(じ)れったいほどにSweet
もう　バレちゃう　バレたい　バレない今日も
そのままのキミを見たくて...
唇に確かめたんだ
君が少し照れた瞬間
Kiss you`},{id:269,title:"TICKTOK",titleKana:"TICKTOK",lyricist:"TSINGTAO・Sorato・Dvii・Ryo Ito",composer:"TSINGTAO・Sorato・Dvii・Ryo Ito",arranger:"Sorato",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){12}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){12}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){12}"],singer:"WEST.",date:"2025-03-12",lyrics:`Yeah
TICK TICKTOK
Uh uh uh

Yeah　胸の奥でずっと Ringing
逃げられなくて
Yeah　揺れ動く瞳　I'm asking
Wanna go or stay？ Aye

時計の針重なる瞬間
急かすように始まる Countdown
進むほどに戻れない
うつろう Mind　惹き合う Silhouette

It's toxic but sweet
惑わせて焦らせて
On & on & on & on
近づくたび So deep
もっと君を知りたい　But why？
Just watch me

Uh huh

We go like TICKTOK
We don't stop
時を忘れ君と刻むこの Rhythm
Like TICKTOK
We don't talk
言葉じゃなくて距離で確かめる Feelin'
TICKTOK
密かに触れ合った手
TICKTOK
溶け出す二人の Moment
TICKTOK
秒針を狂わせて
終わりのない夜へ Dive in

Aye　失った Patience
動くだけが Mission
Aye Gotta run　もっと Speed up
鼓動は BUM BUM
越える Dimensions

規則的かつ神秘的
迷い込んだ Space
吐息だけがずっと Echo
TICKTOK
迫り来る音
You hear？

Don't stay just say
気づかせて滾(たぎ)らせて
On & on & on & on
消えていく My fear
熱を帯びて高鳴った Heart
Just touch me

One more time

We go like TICKTOK
We don't stop
時を忘れ君と刻むこの Rhythm
Like TICKTOK
We don't talk
言葉じゃなく距離で確かめる Feelin'
TICKTOK
密かに触れ合った手
TICKTOK
溶け出す二人の Moment
TICKTOK
秒針を狂わせて
終わりのない夜へ Dive in

永遠が流れてる
君と僕二人の Room
止まらずこのまま
誰もいない場所へ
時を忘れて Let's dive in

We go like TICKTOK
We don't stop
時を忘れ君と刻むこの Rhythm
Like TICKTOK
We don't talk
言葉じゃなく距離で確かめる Feelin'
TICKTOK
密かに触れ合った手
TICKTOK
溶け出す二人の Moment
TICKTOK
秒針を狂わせて
終わりのない夜へ Dive in`},{id:270,title:"Sweety",titleKana:"Sweety",lyricist:"CONY・Sayaka Inoue",composer:"CONY・Sayaka Inoue",arranger:"CONY",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){20}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){20}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){20}"],singer:"WEST.",date:"2025-03-12",lyrics:`Sunlight
You're my light
Sunlight

待ち合わせていた 3pm
高鳴る鼓動は BGM
I know

Everytime, oh oh oh
Everytime, oh oh oh

憂鬱もスプーンで溶かして
ふたりきりで過ごせば So slow
最高に贅沢な Saturday

言葉なんていらない Stay with me
君という Flavor を
Just let me try

Baby, you are my sweety
I feel it
そばにいるだけで
甘い想い溢れ出す
So sweet tea
We feel it
時が止まるように
ふたりだけの世界
永遠に感じたい

Sunlight
You're my light
Sunlight
君がいるなら Alright

君に含まれている成分
ハマってくよ Twenty-four seven
You know？

Tell me now, oh oh oh
Tell me now, oh oh oh

これから先も変わらずに
吸い寄せられる Honeybee みたい
それすら愛おしい Common name

他の何かじゃ満ち足りない
君という Flavor を
Just let me try

Baby, you are my sweety
I feel it
過ごしてく中で
ときに苦い日もあるけど
So sweet tea
We feel it
また君と踊れば
人生は輝くから
明日も It's OK

渇いた心に (So sweet)
愛が満ちてゆく (I need your love)
花が水を待つように
僕には君だけだって
感じてるのさ

Baby, you are my sweety
I feel it
そばにいるだけで
甘い想い溢れ出す
So sweet tea
We feel it
時が止まるように
ふたりだけの世界
永遠に感じたい

Sunlight
You're my light
Sunlight
いつまでも Your side
Light
You're my light
Sunlight
君がいるなら Alright`},{id:271,title:"Rainy Rhapsody",titleKana:"Rainy Rhapsody",lyricist:"大原拓真(Penthouse)",composer:"浪岡真太郎(Penthouse)",arranger:"久保田真悟(Jazzin'park)・浪岡真太郎(Penthouse)",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){16}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){16}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){16}"],singer:"WEST.",date:"2025-03-12",lyrics:`降り出した通り雨がくれた
ひとときの帰れない言い訳
呟いた「あのね」に手を引かれ
意味のないくちづけを交わそう

「さよなら」の約束を　濡らす涙がほどいていく

恋は終わりって知ってたって　二度と会えないって知ってたって
「あと少し」「あと少し」あなたの腕で眠るの
雨音と鼓動のラプソディーに　呼吸が重なったハーモニーが
この願いを確かめさせる
どうせならこのまま帰れないようにして

雨粒は絶えず鳴り続いて
古ぼけた映写機のようだね
いたずらに回り出す思い出
嫌気がさすほどに美しくて

「さよなら」の熱(ほとぼ)りを　窓の雫が冷ましていく

恋は終わりって言ってたって　二度と会わないって言ってたって
「もう一度」「もう一度」あなたの腕で眠るの
雨音に隠したダイアローグ　きっと後少しのエンドロール
肌重ねてごまかしていく
言いかけたわがまま気づかれぬようにして

終らせるなら　土砂降りの中
一人にさせて欲しいのに
どこまでもずるい人　ほら忘れられなくなってしまうでしょ？

恋は終わりって知ってたって　二度と会えないって知ってたって
「いつまでも」「いつまでも」あなたの腕で眠るの
雨音と鼓動のラプソディーに　呼吸が重なったハーモニーで
この願いを止められないの
どうせならこのまま帰れないようにして`},{id:272,title:"それいけベストフレンド！",titleKana:"それいけべすとふれんど！",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){15}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){15}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){15}"],singer:"WEST.",date:"2025-03-12",lyrics:`頑張ってんだろ　ヘイどうだい？

旅立ちの日　名もなき道
心もとない　僕の鼻唄
桜吹雪　手を振る先
言葉に出来ずに　なんだかなぁ

元気でいろよ　ベストフレンド
新しい街　相も変わらぬフリして
正直どっかでなんかわかっている
僕らに幸あれ！

頑張ってんだろ　ヘイどうだい？
さぁはじめようぜ　胸張ってオーライ
ベイビー　未来は自由自在
なんだかんだいっても L O V E ラブ

諸行無常の響きあり
難しくて解りはしないし
その日暮らし　それも良い感じ
ちいさくでっかく　やっていこう

約束しろよ　ベストフレンド
いつか会う日に　生きててよかったなんて
クサいセリフでうまい酒を飲む
世界に幸あれ！

頑張ってんだろ　ヘイどうだい？
さぁはじめようぜ　胸張ってオーライ
ベイビー　未来は自由自在
なんだかんだいっても L O V E ラブ

泣きたくなんだろ　ヘイどうだい？
なぁよくわかるぜ　誰だってオーライ
ベイビー　いつでも自慢したい
どいつもこいつも L O V E

頑張ってんだろ　ヘイどうだい？
さぁはじめようぜ　胸張ってオーライ
勝たなくてもいい　ただ負けないで
なんだかんだいっても L O V E ラブ
そう愛だよな！

それいけ頑張ろう　ラブ&ピース`},{id:273,title:"WESTraight",titleKana:"WESTraight",lyricist:"KOPERU・peko・コーラ・KBD・teppei・HATCH・KZ・KennyDoes",composer:"Cosaqu",arranger:"Cosaqu",produce:"梅田サイファー",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){6}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){6}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){6}","メトロック2025(東京){8}"],singer:"WEST.",date:"2025-03-12",lyrics:`強くもねぇけど弱くもねぇ
硬い意志持ってまっすぐに突き進め
止まらず go way　目指したい方へ
Don't stop get it get it　今ぶちかませ
誰もかれも諦めなきゃきっとできる ok？
なんでもかんでも抱え込んじゃ満足しないどうせ
所々見直してその繰り返しで
無理難題の壁ぶち壊せ

するわけないやんびびってガクブル
分厚い壁おもっくそブチ破る
突き抜けた先に見えてくるブルー
狙い目がけて真っ直ぐ当てるブル
上には上がいるならその上行くだけ
一生涯走り切る終わりがくるまで
腹に括った覚悟は揺るがねえ
俺ら始まったばっかつまり今からだ

今の俺ならブレない右にも左にも
ボイスとプライドはマケナイ説一文
斜め上の予想だにしないビジョン
真っ直ぐに届ける君の期待以上
もはやハンドルロック
脇見なんて無しでキャントストップ
コンパス代わりにマイクロフォンが
さし示す先まで life goes on

デクレシェンドよりもまた make legend
不滅の熱量で WESTraight
外野の野次とか受け付けんと
減速せず正面抜けるゲート
未だ進行形　新しい光景
笑い声仲間　魂の共鳴
怠惰な日常へ抗い挑戦
Feelしたなら皆　かましにいこうぜ

WESTraight
駆け抜けていくでネクストへ c'mon
WESTraight
真っ直ぐ行くのがベストウェイ c'mon
WESTraight
まあ、なんしかしっかりせんとね c'mon
WESTraight

一度決めたら変えねえルート
道も半ばじゃ降りねぇずっと
例えナビが俺を阻もうとしても直線 WESTraight
Can't stop！
Won't stop！
Don't stop now！
超えろ難関一点突破
Can't stop！
Won't stop！
Don't stop now！
飛ばせガンガン信じろ直感

振り向くな後ろ前だけを見ろ
あるで力量メーター振り切ろう
破竹の勢い　増してくスピード
ライフは一度真っ直ぐ生きろ
(Hey)100％で挑む
この身ひとつでピークに切り込む
(Hey)まずは Let's get it on
やってみ？そこの君も　君も

道の先見たかっこいい理想
憧れてたのはあの日のヒーロー
俺も主人公　君も主人公
折れそうな時ほどまっすぐに行こう
誰だって最初の一歩は新人
まずは己が己を信じる
ピンチはチャンスの意味を知り
必死のバッチで　一本道

rep関西沸かす日本
芯一本通しノリは keep on
勢いゴリ押しで通す猛スピード
道のりは強引に go　よーいどん
でも忘れへんで義理と人情　目指してる場所は前人未到
全員集合　王道　正規ルートをまっすぐでええっちゅうの
It's not over till it's over やでほんま We let you know
毎回ベストの更新続けるWESTraightや調子どう？

WESTraight
駆け抜けていくでネクストへ c'mon
WESTraight
真っ直ぐ行くのがベストウェイ c'mon
WESTraight
まあ、なんしかしっかりせんとね c'mon
WESTraight

W to da E to da S to da T
行き止まりもまだ序の口
W to da E to da S to da T
壁にぶつかってもまだ直進
W to da E to da S to da T
北から南　西から東
W to da E to da S to da T
W to da E to da S to da T`},{id:274,title:"ティダ",titleKana:"てぃだ",lyricist:"東里梨生",composer:"東里梨生",arranger:"芳賀政哉",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){17}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){17}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){17}"],singer:"WEST.",date:"2025-03-12",lyrics:`照りつけるティダ
僕の心も　熱く焦がしておくれよ

きらめく波に　身を委ねて
ゆらりゆらゆら

普通はこうとか　当たり前だとか
そんなことはどうでもいいよ
君が笑っていられるのなら　どんな日もかりゆしDAY
さぁ両手揺らして　幸せみんなで招き入れよう！

1・2・3 (ティー！ター！ミー！)

ハイサイ！　君も一緒に歌おう
老いも若きも　いちゃりばちょーでー
ハイサイ！　ここで出会えたことが　奇跡なのさ

手を伸ばせば　届きそうな空が
全て包んでくれるさ

海も風も鳥も花達も
君を待ってる

誰かと比べて　落ち込まないでね
君は君のまんまでいいよ
明日は今日より強くなれるさ　どんな日もかりゆしDAY
さぁ両手揺らして　喜び悲しみかき混ぜよう！

1・2・3 (ティー！ター！ミー！)

ハイサイ！　みんな一緒に歌おう
君もあなたも　いちゃりばちょーでー
ハイサイ！　君が生まれたことは　奇跡なのさ

もう一回！(ナーティーチ！)

ハイサイ！　君も一緒に歌おう
老いも若きも　いちゃりばちょーでー
ハイサイ！　ここで出会えたことが　奇跡なのさ

君　照らせ　ティダ
道　照らせ　ティダ
明日　照らせ　ティダ
雲突き抜けて

夢　照らせ　ティダ
日々　照らせ　ティダ
愛　照らせ　ティダ
遥か彼方まで`},{id:275,title:"SOUTH WEST BEACH!!",titleKana:"SOUTH WEST BEACH!!",lyricist:"キヨサク",composer:"キヨサク",arranger:"ha-j",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){22}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){22}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){22}","メトロック2025(東京){3}"],singer:"WEST.",date:"2025-03-12",lyrics:`Summer breeze, sweet melodies
風を追いかけて
You raise me up, sweet memories
太陽みたいに笑う
あどけない夢をみる
眩しい夏に溶けてく

今すぐ逃げ出そう
着の身着のまま
気の向くまま

流離(さすら)い彷徨う
行くあてもなく
どこまでも

迷子のように
ドキドキと不安が

振り子のように
止まらない胸の鼓動
揺れてる

Summer breeze, sweet melodies
風に吹かれながら
You raise me up, sweet memories
答えを探しに行こう
2人だけの夢を見る
新しい夏に飛び込む

South WEST beach！！
South WEST beach！！

迷子のように
ドキドキと不安が

振り子のように
止まらない胸の鼓動
揺れてる

Summer breeze, sweet melodies
風を追いかけて
You raise me up, sweet memories
太陽みたいに笑う
あどけない夢をみる
眩しい夏に溶けてく`},{id:276,title:"Go.",titleKana:"Go.",lyricist:"Soflan Daichi",composer:"鈴木盛広",arranger:"鈴木盛広",stringsarrange:"服部瑞樹",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]"],announce:"f",performances:[],singer:"WEST.",date:"2025-03-12",tiup:"『WEST.10th Anniversary Live ”W”-Film edition-』テーマソング",lyrics:`雨上がり手に持て余してる　傘みたいなもんだな　後悔なんて
晴れ渡る空　塞がる手では Any more　何も掴めなくて

Life...　溢れ出す　その涙輝かすため
世界はスタートを繰り返す
東の空に　ほら今日もSun goes up

0秒先の未来だけ見据え　歩み続ける
無駄なもんは　何ひとつなかったと言えるように
過去じゃなく　その意味を　変えていけばいい
「もしあの時」だなんてさ　遠くばっか見てちゃ躓くぜ
新しい時代　そのど真ん中行こう
何処へ？なんてないぜ　答えならそう
心(ここ)にあんだ

地図(ナビ)を辿れば　正解地点
道を間違えるほうが　難しい時代だろう？

Right...　時に迷い　踏み外し　笑われていいさ
いつも“未知”切り拓くのは　そんなヤツらさ
そうやって Make my way

0・100　二元論で出来上がった　イマって時代を
泥臭い人間論で　彩っていくんだよ
過去も全部　傷も全部　模様に変えてく
明るい色だけじゃほら　綺麗な絵なんて描けないぜ
白・黒じゃない　極彩色の日々を
書いて　消して　泣いて　繰り返して
描き上げんだ

Wow　濡れたアスファルト Wow　出来た水溜まり　眩しく映った青空
Wow　俯いてたって Wow　どんな場所にいたって　そうさ
希望(ひかり)は見える

僕らは　後戻りなど出来ない日々を生きてる
どんな今日も手探りで　進むしかないんだよ
0秒先の未来だけ見据えてく
無駄なもんは　何ひとつなかったと言えるように
過去じゃなく　その意味を　変えていけばいい
「もしあの時」だなんてさ　遠くばっか見てちゃ躓くぜ
新しい時代　そのど真ん中行こう
前へ　前へ　惹かれ続け
生きて　生きて　讃え続け
何処へ？なんてないぜ　答えならそう
心(ここ)にあんだ
始めようか Yeah`},{id:277,title:"この旋律よ 誰かの歌になれ",titleKana:"このせんりつよ だれかのうたになれ",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin’park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin’park)",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回B]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){25}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){25}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){25}"],singer:"WEST.",date:"2025-03-12",lyrics:`上手く歌えなくてもかまわない
そのクセ　君には届けたい
何が正義かもわからない
でも、君といるなら

We go round & round
No need for doubt, doubt, doubt
We just sing it loud

「初めまして」も思い出せないくらい
響いてた音が
気づけば　ノイズだらけの部屋
見失った僕は oh

譜面からはみでたメロディー
必死にすくって　叫んだ
ねえ　今も　聞こえてるの？
ずっと　飲み込んでいた想い　空に向けて
奏でるのは自由だ

二度とはない感情
歌うよ　全部　歌うよ
世界中の賞賛より
誰かの歌になれ

泣きながら笑っても
いいんだ　全部　いいんだ
もう一度始めよう
君といたいから　僕でいたいから

100回目の渇望　名も無き thrive
クタクタになろうとも　追いかけてたい
こんなのどう？　未来永劫 We sing along

目を合わすのも　わずらわしいくらい
気持ちミュートしてた
誰かのせいにしていたら
いつの間にか　ぼっちか oh

今度こそを繰り返して
奇跡のコード探した
ねえ　今も　聞こえてるの？
ずっと　言いかけてた言葉かき集めて
奏でるのは自分だ

二度とはない感情
歌うよ　全部　歌うよ
世界中の賞賛より
誰かの歌になれ

泣きながら笑っても
いいんだ　全部　いいんだ
もう一度始めよう
君といたいから　僕でいたいから

この旋律よ　僕らの歌になれ
この旋律よ　誰かの歌になれ
この旋律よ　僕らの歌になれ
この旋律よ

口ずさむ　探してる
終わらない　アカペラ
過ぎて行く今日も
変わっていく明日も
昨日の正解(こたえ)も
嘘じゃない　いいんじゃない
全部　歌にするんだ

二度とはない感情
歌うよ　全部　歌うよ
世界中の賞賛より
誰かの歌になれ

泣きながら笑っても
いいんだ　全部　いいんだ
もう一度始めよう
君といたいから　僕でいたいから

この旋律よ　僕らの歌になれ
この旋律よ　誰かの歌になれ
この旋律よ　僕らの歌になれ
この旋律よ　僕らの歌になれ`},{id:278,title:"パワースポット俺",titleKana:"ぱわーすぽっとおれ",lyricist:"ミヤケ武器",composer:"ミヤケ武器",arranger:"井上薫",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",performances:["11周年生配信トーク＆ライブ「虹会」{3}"],singer:"WEST.",date:"2025-03-12",lyrics:`パワースポット俺「ほらどうぞ」
見ていたいなら遠慮なく
パワースポット俺「あらどうも」
君はもう何回目よ

パワースポット俺

どっかの山だけじゃ足りてないの
どっかの岩よりも俺だろ
一礼したあと手合わせ
賽銭よりも目を合わせ

気分落ちたらここに来い
故に作法なんてもう要らない
風の噂で落ちてない
そんなに気にしないでも

パワースポット俺「ほらどうぞ」
見ていたいなら遠慮なく
パワースポット俺「あらどうも」
君はもう何回目よ

どっかしらオイラも縋りたいの
負担かけ合う人はどこ
強がってる人だってもう
飽和スレスレなの

気分癒やしたら行って良い
故に作法なんてもう要らない
風の噂が耳痛い
そんなに気にしたくはない

パワースポットお前「ほらどうぞ」
見ていたいから離れない
パワースポットお前「あらどうも」
どうも

パワースポット俺

拝まないで俺の鈴の緒
巻いたままどっか行かないで
拝まないで俺の鈴の緒
御利益なんてもう

パワースポット俺「ほらどうぞ」
見ていたいなら遠慮なく
パワースポット俺「あらどうも」
君はもう何回目よ

パワースポット俺`},{id:279,title:"ウェッサイソウル！",titleKana:"うぇっさいそうる！",lyricist:"トータス松本",composer:"トータス松本",arranger:"ウルフルズ・菅原龍平",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回A]","ウェッサイソウル！ / BIG LOVE SONG[初回B]","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){10}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){10}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){10}","メトロック2025(東京){6}","11周年生配信トーク＆ライブ「虹会」{7}"],singer:"WEST.",date:"2025-05-07",tiup:"映画『裏社員。ースパイやらせてもろてますー』主題歌",lyrics:`騙されたのか
悪い夢なのか
おらは死んじまったのか

誰もいなくなって
(寂しいよ)
ケータイも壊れちゃって
(悲しいよ)
どうすりゃ届くのか
真っ暗闇で

優柔不断が命取り
笑わないでお願い

だけど
最後にゃ最高
ゲットだ　最高を
最初は最低でも
Never Give Up！
前後も左右も　上下も関係ないわ！
おれがおれでおれはおれさそうさ
負けへんぞ！

ダサい嘘をついた
(虚しいよ)
消えてしまおう
(悔しいよ)
君が恋しいよ

強く抱きしめて
(ひと息に)
叱り飛ばしてよ
(思いきり)
思わず涙ぐんだ
坂の途中で

空前絶後の空回り
構わないでお願い

だけど
最後にゃ最高
ゲットだ　最高を
最初は最低でも
Never Give Up！
汗と涙で　白黒つけたるわ！
伸るか反るか一か八かそうさ
負けへんぞ！

ひとりじゃ張り切れない
(Oh～West Side Soul)
君がいなきゃつまらない
(Oh～West Side Soul)
悲しくてやりきれない
(Oh～West Side Soul)
愛して愛されたい
(Clap Your Hands
負けへんぞ！)

最後にゃ最高
ゲットだ　最高を
最初は最低でも
Never Give Up！
前後も左右も　上下も関係ないわ！
おれがおれでおれはおれさそうさ
もういっちょう！
最後にゃ最高
ゲットだ　最高を
最初は最低でも
Never Give Up！
最初で最後
人生そんなもんやっ！
伸るか反るか一か八かそうさ
負けへんぞ！`},{id:280,title:"BIG LOVE SONG",titleKana:"BIG LOVE SONG",lyricist:"AKIRA・栗原暁(Jazzin'park)",composer:"AKIRA・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回A]","ウェッサイソウル！ / BIG LOVE SONG[初回B]","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12){33}","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知){33}","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){33}","11周年生配信トーク＆ライブ「虹会」{2}"],singer:"WEST.",date:"2025-05-07",tiup:"東海テレビ・フジテレビ系　土ドラ『ミッドナイト屋台〜ラ・ボンノォ〜』主題歌",lyrics:`I know　すぐそこにある
小さく色づく BIG LOVE
逢いにゆこう
Tu tu tu tu...
Who's with BIG LOVE？

手のひらの中に収まる
現実ばかりスライドで
ちょっと食傷気味なDays
作りかけの理想ばかりで
味気ないじゃない？ Deny it
You'll see that ain't true

ゆれるベルベットの夕暮れが
信号待ち二人を包んだ
おなじようで違う日々さ
Let's say...
なんてBeautiful, Beautiful！

I know　すぐそこにある
小さく色づく BIG LOVE
僕らなら
You know　その胸の中
小さく華やぐ BIG HEART
逢いにゆこう
Tu tu tu tu...

遠回りの近道に
気づいたら It's OK
ふと開いたPhoto bookで涙
それってひょっとして　幸せのカケラ
ひとりぼっちの夜は
星屑をスプーンですくって
珈琲に混ぜて
ケセラセラ

そよぐヘルメットの風ん中
いつものように　手を振るんだ
こんな日が続けばいいな
Let's say...
なんてBeautiful, Beautiful！

I know　すぐそこにある
小さく色づく BIG LOVE
抱きしめよう
You know　その胸の中
小さく華やぐ BIG HEART
逢いにゆこう

'足りない'だらけだって
そのままでいいよ
きっと　大丈夫さ
変わり者と呼ばれても
オリジナルのスパイスで
'Life' is yours
なんてBeautiful

I know　すぐそこにある
小さく色づく BIG LOVE
抱きしめよう
You know　その胸の中
小さく華やぐ BIG HEART
逢いにゆこう

I know　すぐそこにある
BIG LOVE
抱きしめよう
You know　その胸の中
Tu tu tu tu...
Who's with BIG LOVE？`},{id:281,title:"君の嫌いな君",titleKana:"きみのきらいなきみ",lyricist:"ゆっきゅん",composer:"如月結愛",arranger:"如月結愛",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回A]"],announce:"f",performances:[],singer:"WEST.",date:"2025-05-07",lyrics:`愛が嫌いなんて　潤んだ目で　言わないでよ

去年は思い出さずにいられた気がしたけど
また君　別れて壊した　だとか聞いたから

成長が過去の罪を増やしてく
今でも、今更、今なら、なんて　遅すぎて

愛が嫌いだって鍵をかけて
閉じこもった君がまだ泣いてんだ
名前を呼んで追いかけても
聴こえないふりしたね　最悪な日

傷つけたくないと遠ざけてさ
適当に誰かと笑ってんだ
君の嫌いな君にも会いたかった
後悔のように疼く夢

楽しく時間を過ごすことだけ考えてたから
大事な話を逸らすみたいに側にいた

成功は過去の傷を癒やすかな
それでも、あの日の、二人の涙　乾かない

ぐちゃぐちゃの心で鏡を見た
いつもと変わらない顔した人がいるんだ
こうやって　大人になって　強くなって
弱くなって　ああ　何を守れたんだろう

愛が嫌いだって鍵をかけて
閉じこもった君は元気ですか
名前を呼んで追いかけても
聴こえないふりしても　忘れないよ

傷つけることを恐れないで
誰かを本気で愛せましたか
君の嫌いな君にも会いたかった
後悔を消すように響け　歌

人生で一番好きな人`},{id:282,title:"escape",titleKana:"escape",lyricist:"Yohei",composer:"前田佑・Yohei",arranger:"前田佑",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回B]"],announce:"f",performances:[],singer:"WEST.",date:"2025-05-07",lyrics:`愛が嫌いなんて　潤んだ目で　言わないでよ

去年は思い出さずにいられた気がしたけど
また君　別れて壊した　だとか聞いたから

成長が過去の罪を増やしてく
今でも、今更、今なら、なんて　遅すぎて

愛が嫌いだって鍵をかけて
閉じこもった君がまだ泣いてんだ
名前を呼んで追いかけても
聴こえないふりしたね　最悪な日

傷つけたくないと遠ざけてさ
適当に誰かと笑ってんだ
君の嫌いな君にも会いたかった
後悔のように疼く夢

楽しく時間を過ごすことだけ考えてたから
大事な話を逸らすみたいに側にいた

成功は過去の傷を癒やすかな
それでも、あの日の、二人の涙　乾かない

ぐちゃぐちゃの心で鏡を見た
いつもと変わらない顔した人がいるんだ
こうやって　大人になって　強くなって
弱くなって　ああ　何を守れたんだろう

愛が嫌いだって鍵をかけて
閉じこもった君は元気ですか
名前を呼んで追いかけても
聴こえないふりしても　忘れないよ

傷つけることを恐れないで
誰かを本気で愛せましたか
君の嫌いな君にも会いたかった
後悔を消すように響け　歌

人生で一番好きな人`},{id:283,title:"春びより",titleKana:"はるびより",lyricist:"瀬奈",composer:"竹内聖",arranger:"竹内聖",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],announce:"t",performances:["A.H.O. -Audio Hang Out-A.H.O(愛知オーラス){34}","11周年生配信トーク＆ライブ「虹会」{8}"],singer:"WEST.",date:"2025-05-07",lyrics:`バラバラに光って見えていた
またすれ違った言葉
そっと触れたら壊れちゃいそうな
僕らのせいだ

曇り空がまた明けていった
友達みたいな距離を映し出してる
少しだけ背伸びしてみたくなった
ひとりが好きだなんて
嘘ついたりしてみたんだ

Rainy day　止まらないでいて
Tiny Tiny　届かなくて
また曖昧な時間の中
色づいた景色から

バラバラに光って見えていた
またすれ違った色で
だらしない空が晴れて
意地悪に影を濃くして
バカにしてんだ
きっとまた増えてくこの愛してる
壊れちゃうから
言葉なんて要らないや
このままで

たしかめたい心の中
満天の空が褪せた
Tell me　夢の中の僕ら
みたいな未来は？
なんとなく期待してみた
さっきまでの相合傘
ずっと進まないストーリーは
君の笑顔がもっと見たいから

Rainy day　開(ひら)けてく空
Shiny　光るアスファルトが
どうにもできないこの心色づいた日から

何光年も遠いようで
傍らに感じている
だらしない空が晴れて
僕らが離れてかないように
君が好きって言いたくて
増えてくこの愛してる
壊れないように、大切にしたいんだ
笑っていてよ

2人光って見えていた
重なり合った色で
だらしない空が晴れて
僕らと答えを重ねてく
バカにしてんだ
きっとまた増えてくこの愛してる
雨上がりに春風が舞い込んだ
そばにいてよ`},{id:284,title:"僕だけの小さな花",titleKana:"ぼくだけのちいさなはな",lyricist:"篠原とまと",composer:"山田竜平",arranger:"山田竜平",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],announce:"f",performances:[],singer:"WEST.",date:"2025-05-07",lyrics:`帰り道　ここでお別れ
手を振って離れて「じゃあまたね」
明日へ向かって伸びた影
戻れない、静かすぎた恋

つまらない授業も
忙しなく人行き交う大通りも
二人でなら
何もかも楽しかった

人は皆違うから面白い
派手にぶつかるのもご愛嬌
すれ違うほど強く
絆の糸は　繋がってく

「ずっとこのままでいられるなら」
何度も迷って言えないまま
あと少しだけ時間があれば
ちゃんとした気持ちも伝えられたかな
とか、考える

今も心の中に咲く
僕だけの小さな花だから
ささやかにそっと守りたい
知らぬ間に　消えないように
胸いっぱい　大きな花束に
隠す　お気に入りの一輪
見えなくてもただ祈ろう
喜びと笑顔　溢れるように

無邪気だった僕も
忙しなく今じゃ街を駆け回る
らしくもない
大人ってやつになっちまった

運命は思惑通りには動かない
いつも降りかかる急展開
二択を外したって
時は戻らず　ただ流れる

ポストに届いた君の便り
君らしいややこしい言葉選び
どうやら元気でいるみたい
遠く同じ空の下　幸せならば
それでいい

恋の終わりに咲いていた
あの頃の小さな花だから
甘酸っぱくて懐かしい
二人だけ　手も繋げない日々

後悔しないわけじゃない
胸の棘は取れそうにもない
この痛みさえも大切に
忘れないように
抱きしめるように
大事に守るよ

今も心の中に咲く
僕だけの小さな花だから
ささやかにそっと守りたい
知らぬ間に　消えないように
胸いっぱい　大きな花束に
隠す　お気に入りの一輪
舞い上がる風に託すよ
いつまでも愛に満ちた日々を`}],zh=({song:T,onClose:X})=>{if(!T)return null;const M=z=>z==="t"?"披露あり":z==="f"?"未披露":"不明",m=T.album.filter(z=>z.includes("[")&&z.includes("]")),I=z=>{const Z=z.match(/(.*?)\{/);return Z&&Z[1]?Z[1]:z};return p.jsx("div",{className:"modal-overlay",onClick:X,children:p.jsxs("div",{className:"modal-content",onClick:z=>z.stopPropagation(),children:[p.jsx("h2",{children:T.title}),p.jsxs("p",{children:[p.jsx("strong",{children:"作詞者:"})," ",p.jsx("span",{className:"modal-item-value",children:T.lyricist})]}),"   ",p.jsxs("p",{children:[p.jsx("strong",{children:"作曲者:"})," ",p.jsx("span",{className:"modal-item-value",children:T.composer})]})," ",T.arranger&&p.jsxs("p",{children:[p.jsx("strong",{children:"編曲者:"})," ",p.jsx("span",{className:"modal-item-value",children:T.arranger})]}),T.brassarrange&&p.jsxs("p",{children:[p.jsx("strong",{children:"ブラスアレンジ:"})," ",p.jsx("span",{className:"modal-item-value",children:T.brassarrange})]}),T.produce&&p.jsxs("p",{children:[p.jsx("strong",{children:"プロデュース:"})," ",p.jsx("span",{className:"modal-item-value",children:T.produce})]}),T.stringsarrange&&p.jsxs("p",{children:[p.jsx("strong",{children:"ストリングスアレンジ:"})," ",p.jsx("span",{className:"modal-item-value",children:T.stringsarrange})]}),T.translate&&p.jsxs("p",{children:[p.jsx("strong",{children:"英訳詞:"})," ",p.jsx("span",{className:"modal-item-value",children:T.translate})]}),p.jsxs("p",{children:[p.jsx("strong",{children:"ユニット:"})," ",p.jsx("span",{className:"modal-item-value",children:T.singer||"WEST."})]})," ",p.jsxs("p",{children:[p.jsx("strong",{children:"発売日:"})," ",p.jsx("span",{className:"modal-item-value",children:T.date})]}),"      ",T.tiup&&p.jsxs("p",{children:[p.jsx("strong",{children:"タイアップ:"})," ",p.jsx("span",{className:"modal-item-value",children:T.tiup})]}),p.jsx("p",{children:p.jsx("strong",{children:"収録シングル/アルバム:"})}),p.jsxs("ul",{children:[m.map((z,Z)=>p.jsx("li",{children:p.jsx("span",{className:"modal-item-value",children:z})},Z)),m.length===0&&p.jsx("li",{children:p.jsx("span",{className:"modal-item-value",children:"[]付きの収録はありません"})})]}),p.jsxs("p",{children:[p.jsx("strong",{children:"披露情報:"})," ",p.jsx("span",{className:"modal-item-value",children:M(T.announce)})]})," ",T.lyrics&&p.jsxs("div",{className:"lyrics-section",children:[" ",p.jsx("h3",{children:"歌詞"}),p.jsx("p",{className:"modal-lyrics-text",children:T.lyrics})," "]}),T.performances&&T.performances.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("p",{children:p.jsx("strong",{children:"披露公演:"})}),p.jsx("ul",{className:"performance-list",children:T.performances.map((z,Z)=>p.jsx("li",{children:p.jsx("span",{className:"modal-item-value",children:I(z)})},Z))})]}),p.jsx("button",{onClick:X,className:"modal-close-button",children:"閉じる"})]})})},Uh=["タイトル","作詞者","作曲者","編曲者","歌詞","収録","披露","ユニット","タイアップ","セトリ"];function Ih(){const[T,X]=Na.useState(""),[M,m]=Na.useState("タイトル"),[I,z]=Na.useState("name_asc"),[Z,Rn]=Na.useState(null),[Y,b]=Na.useState(!1);Na.useEffect(()=>{X("")},[M]);const N=["ええじゃないか","ええじゃないか[初回盤]","ええじゃないか[MY BEST CD盤]","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]","ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回A]","ジパング・おおきに大作戦/夢を抱きしめて[初回B]","ジパング・おおきに大作戦/夢を抱きしめて[初回C]","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]","ズンドコ パラダイス","ズンドコ パラダイス[初回A]","ズンドコ パラダイス[初回B]","ズンドコ パラダイス[通常盤]","パリピポ","パリピポ[初回盤]","パリピポ[通常盤]","バリ ハピ","バリ ハピ[初回A]","バリ ハピ[初回B]","バリ ハピ[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","逆転Winner","逆転Winner[初回A]","逆転Winner[初回B]","逆転Winner[通常盤]","人生は素晴らしい","人生は素晴らしい[初回A]","人生は素晴らしい[初回B]","人生は素晴らしい[通常盤]","なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]","おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回A]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回B]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]","僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![初回A]","僕ら今日も生きている/考えるな、燃えろ!![初回B]","僕ら今日も生きている/考えるな、燃えろ!![通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[初回A]","プリンシパルの君へ/ドラゴンドッグ[初回B]","プリンシパルの君へ/ドラゴンドッグ[通常盤]","スタートダッシュ!","スタートダッシュ![初回A]","スタートダッシュ![初回B]","スタートダッシュ![通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[初回A]","ホメチギリスト/傷だらけの愛[初回B]","ホメチギリスト/傷だらけの愛[通常盤]","アメノチハレ","アメノチハレ[初回A]","アメノチハレ[初回B]","アメノチハレ[通常盤]","Big Shot!!","Big Shot!![初回A]","Big Shot!![初回B]","Big Shot!![通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","証拠","証拠[初回A]","証拠[初回B]","証拠[通常盤]","週刊うまくいく曜日","週刊うまくいく曜日[初回A]","週刊うまくいく曜日[初回B]","週刊うまくいく曜日[通常盤]","rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]","サムシング・ニュー","サムシング・ニュー[初回A]","サムシング・ニュー[初回B]","サムシング・ニュー[通常盤]","でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回A]","でっかい愛/喜努愛楽[初回B]","でっかい愛/喜努愛楽[通常盤]","黎明/進むしかねぇ","黎明/進むしかねぇ[初回A]","黎明/進むしかねぇ[初回B]","黎明/進むしかねぇ[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","星の雨","星の雨[初回A]","星の雨[初回B]","星の雨[通常盤]","星の雨[通販盤]","POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]","しあわせの花","しあわせの花[初回A]","しあわせの花[初回B]","しあわせの花[通常盤]","しあわせの花[通販盤]","絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]","絶体絶命 / Beautiful / AS ONE[初回B]","絶体絶命 / Beautiful / AS ONE[初回C]","絶体絶命 / Beautiful / AS ONE[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]","ハート / FATE","ハート / FATE[初回A]","ハート / FATE[初回B]","ハート / FATE[通常盤]","ハート / FATE[通販盤]","まぁいっか！","まぁいっか！[初回A]","まぁいっか！[初回B]","まぁいっか！[通常盤]","A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]","ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回A]","ウェッサイソウル！ / BIG LOVE SONG[初回B]","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],un=["なにわともあれ、ほんまにありがとう！","一発めぇぇぇぇぇぇぇ！","一発めぇぇぇぇぇぇぇ！(各会場オーラス)","一発めぇぇぇぇぇぇぇ！(大阪オーラス)","パリピポ","パリピポ(各会場オーラス)","パリピポ(兵庫オーラス)","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟)","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス)","ラッキィィィィィィィ7(大阪,宮城)","ラッキィィィィィィィ7(大阪オーラス)","ラッキィィィィィィィ7(宮城オーラス)","24(ニシ)から感謝届けます♡","24(ニシ)から感謝届けます♡(オーラス)","なうぇすと(〜横浜3日目)","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島)","なうぇすと(各会場オーラス)","なうぇすと(広島オーラス)","WESTival","WESTival(各会場オーラス)","WESTival(北海道オーラス)","WESTV!","WESTV!(各会場オーラス)","WESTV!(北海道オーラス)","W trouble12/11","W trouble12/12昼,12/13夜","W trouble12/12夜,12/13昼","rainboW(北海道)","rainboW(宮城,愛知,新潟,埼玉,熊本)","rainboW(円盤)","Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10)","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11)","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜)","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼)","Mixed Juice(北海道オーラス)","TO BE KANSAI COLOR-翔べ関西から-(大阪)","TO BE KANSAI COLOR-翔べ関西から-(名古屋)","TO BE KANSAI COLOR-翔べ関西から-(東京)","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス)","POWER(宮城)","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知)","POWER(愛知オーラス)","AWARD(大阪)","AWARD(新潟)","AWARD(宮城)","AWARD(愛知)","AWARD(横浜,静岡,福岡,広島,北海道)","AWARD(北海道オーラス)","DOME TOUR AWARD(大阪,福岡)","DOME TOUR AWARD(東京)","DOME TOUR AWARD(東京オーラス)","A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12)","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知)","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス)","メトロック2022(大阪)","LOVE MUSIC FESTIVAL2022","サマソニ2023(大阪,東京)","めざまし30周年フェス(東京)","メトロック2024(東京)","サマソニ2024(大阪,東京)","a-nation2024","KOYABU SONIC2024","CDTV ライブ！ ライブ！大感謝祭2024","CDTV ライブ！ ライブ！春の大感謝祭2025","メトロック2025(東京)","ファンクラブ限定動画(改名発表)","ファンクラブ限定動画(ゴールデンウィークはWEST. WEEK!<Special Performance>)","Johnny's World Happy LIVE with YOU(3/29)","Johnny's World Happy LIVE with YOU(6/18)","ジャニーズWEST デビュー記念イベント デビューしてもええじゃないか ～バンザイ!! その先の一等賞へ～","皆様のおかげSummer Carnival!","We are WEST!!!!!!! やったぜ5周ねぇぇぇぇぇぇぇん ほんまサンキューサンキュー！今日は懐かしい想い出振り返ってもええじゃないか！SP","５周ねんやねん♪よろしゅうねん♪","Special Studio Recording(証拠[初回B])","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演","SPECIAL LIVE(サムシング・ニュー[初回B])","スペシャルセッション(しあわせの花[初回B])","新グループ名発表します","【WESTube生配信SP】結成10周年やねぇぇぇぇぇぇぇん","【WESTube生配信】4.23デビュー10周年やねぇぇぇぇぇぇぇんSP","【年越し生配信2024→2025】デビュー10周年ありがとう⭐️&登録者数100万人達成記念SP🎉 ✨100/100✨","7周年生配信イベント「虹会」","8周年生配信トーク＆ライブ「虹会」","9周年生配信トーク＆ライブ「虹会」","10周年生配信トーク＆ライブ「虹会」","11周年生配信トーク＆ライブ「虹会」","WEST. 10th Anniversary Live “W”","WEST. 10th Anniversary Live “W”-Film edition-","なにわ侍　ハローTOKYO!!","台風n Dreamer","なにわ侍 団五郎一座","WEST. 10th Anniversary 大阪松竹座公演(昼)","WEST. 10th Anniversary 大阪松竹座公演(夜)","WEST. 10th Anniversary 大阪松竹座公演(千穐楽)"],an=Array.from(new Set(ar.map(W=>W.singer).filter(Boolean))),wn=[{label:"⇅ 名前順(あ→わ)",value:"name_asc"},{label:"⇅ 名前順(わ→あ)",value:"name_desc"},{label:"⇅ 古い曲順",value:"date_asc"},{label:"⇅ 新しい曲順",value:"date_desc"}],Nn=W=>{const L=W.match(/(.*?)\{(\d+)\}/);return L&&L[1]&&L[2]?{name:L[1],order:parseInt(L[2],10)}:null},Pn=ar.flatMap(W=>!W.performances||W.performances.length===0?[{originalSong:W,performanceDetail:null,id:`song-${W.id}`}]:W.performances.map(L=>{const sn=Nn(L);return sn?{originalSong:W,performanceDetail:sn,id:`${W.id}-${sn.name}-${sn.order}`}:(console.warn(`Warning: Could not parse performance entry: "${L}" for song: "${W.title}"`),{originalSong:W,performanceDetail:null,id:`song-${W.id}-unparsed-${L.replace(/[^a-zA-Z0-9]/g,"")}`})}).filter(Boolean));let En=[];M==="セトリ"?(En=Pn.filter(W=>W.performanceDetail?T===""?(console.log("DEBUG: セトリモードで検索値が空です。このアイテムは除外されます。",W.originalSong.title),!1):T===""||W.performanceDetail.name===T:!1),En.sort((W,L)=>{let sn=W.performanceDetail?W.performanceDetail.order:1/0,fn=L.performanceDetail?L.performanceDetail.order:1/0;return sn-fn})):(En=ar.filter(W=>{const L=T.toLowerCase(),sn=fn=>fn?fn.toLowerCase().replace(/[！♪？「」（）、。、～…]/g,"").replace(/[\s　]+/g," ").trim():"";return M==="タイトル"?W.title.toLowerCase().includes(L):M==="作詞者"?W.lyricist.toLowerCase().includes(L):M==="作曲者"?W.composer.toLowerCase().includes(L):M==="編曲者"?W.arranger.toLowerCase().includes(L):M==="歌詞"?sn(W.lyrics).includes(sn(L)):M==="収録"?T===""||W.album.includes(T):M==="披露"?T==="披露あり"?W.announce=="t":T==="未披露"?W.announce==="f":!0:M==="ユニット"?T===""||W.singer===T:M==="タイアップ"?T==="あり"?W.tiup&&W.tiup.trim()!=="":T==="なし"?!W.tiup||W.tiup.trim()==="":!0:!0}),En.sort((W,L)=>{const sn=fn=>{const Wn=fn.charAt(0);return Wn.match(/^[\u3040-\u30FF]/)?0:Wn.match(/^[a-zA-Z]/)?1:2};if(I==="name_asc"||I==="name_desc"){const fn=sn(W.titleKana),Wn=sn(L.titleKana);return fn!==Wn?I==="name_asc"?fn-Wn:Wn-fn:I==="name_asc"?W.titleKana.localeCompare(L.titleKana,"ja",{sensitivity:"base"}):L.titleKana.localeCompare(W.titleKana,"ja",{sensitivity:"base"})}return I==="date_asc"?new Date(W.date)-new Date(L.date):I==="date_desc"?new Date(L.date)-new Date(W.date):0}));const Se=En,he=W=>{Rn(W),b(!0)},Dn=()=>{b(!1),Rn(null)};return p.jsxs("div",{className:"container",children:[p.jsx("h1",{children:"WEST. 楽曲リスト"}),p.jsxs("div",{className:"controls",children:[p.jsx("select",{value:M,onChange:W=>m(W.target.value),children:Uh.map(W=>p.jsx("option",{value:W,children:W},W))}),M==="収録"?p.jsxs("select",{value:T,onChange:W=>X(W.target.value),children:[p.jsx("option",{value:"",children:"すべての収録"}),N.map(W=>p.jsx("option",{value:W,children:W},W))]}):M==="ユニット"?p.jsxs("select",{value:T,onChange:W=>X(W.target.value),children:[p.jsx("option",{value:"",children:"すべてのユニット"}),an.map(W=>p.jsx("option",{value:W,children:W},W))]}):M==="披露"?p.jsxs("select",{value:T,onChange:W=>X(W.target.value),children:[p.jsx("option",{value:"",children:"すべての曲"}),p.jsx("option",{value:"披露あり",children:"披露あり"}),p.jsx("option",{value:"未披露",children:"未披露"})]}):M==="タイアップ"?p.jsxs("select",{value:T,onChange:W=>X(W.target.value),children:[p.jsx("option",{value:"",children:"すべて"})," ",p.jsx("option",{value:"あり",children:"あり"}),p.jsx("option",{value:"なし",children:"なし"})]}):M==="セトリ"?p.jsxs("select",{value:T,onChange:W=>X(W.target.value),children:[p.jsx("option",{value:"",disabled:!0,selected:!0,children:"公演を選択してください"}),un.map(W=>p.jsx("option",{value:W,children:W},W))]}):M==="歌詞"?p.jsx("input",{type:"text",placeholder:"歌詞で検索...",value:T,onChange:W=>X(W.target.value)}):p.jsx("input",{type:"text",placeholder:`${M}で検索...`,value:T,onChange:W=>X(W.target.value)}),p.jsx("select",{value:I,onChange:W=>z(W.target.value),children:wn.map(W=>p.jsx("option",{value:W.value,children:W.label},W.value))})]}),p.jsxs("div",{style:{marginBottom:"0.5rem",fontSize:"0.9rem"},children:[Se.length," 件の曲が見つかりました"]}),p.jsx("div",{className:"song-list-wrapper",children:p.jsxs("div",{className:M==="セトリ"&&T!==""?"song-list show-performance-cols":"song-list",children:[p.jsxs("div",{className:"song-header",children:[p.jsx("span",{children:"タイトル"}),p.jsx("span",{children:"作詞者"}),p.jsx("span",{children:"作曲者"}),p.jsx("span",{children:"初収録"}),p.jsx("span",{children:"発売日"})]}),Se.map(W=>p.jsxs("div",{className:"song-card",onClick:()=>he(M==="セトリ"?W.originalSong:W),children:[p.jsx("span",{className:"song-title",children:M==="セトリ"?W.originalSong.title:W.title}),p.jsx("span",{children:M==="セトリ"?W.originalSong.lyricist:W.lyricist}),p.jsx("span",{children:M==="セトリ"?W.originalSong.composer:W.composer}),p.jsx("span",{children:M==="セトリ"?W.originalSong.album[0]:W.album[0]}),p.jsx("span",{className:"song-date",children:M==="セトリ"?W.originalSong.date:W.date})]},W.id))]})}),Y&&Z&&p.jsx(zh,{song:Z,onClose:Dn})]})}kh.createRoot(document.getElementById("root")).render(p.jsx(Na.StrictMode,{children:p.jsx(Ih,{})}));
