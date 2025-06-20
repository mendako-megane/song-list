(function(){const P=document.createElement("link").relList;if(P&&P.supports&&P.supports("modulepreload"))return;for(const Y of document.querySelectorAll('link[rel="modulepreload"]'))g(Y);new MutationObserver(Y=>{for(const q of Y)if(q.type==="childList")for(const sn of q.addedNodes)sn.tagName==="LINK"&&sn.rel==="modulepreload"&&g(sn)}).observe(document,{childList:!0,subtree:!0});function U(Y){const q={};return Y.integrity&&(q.integrity=Y.integrity),Y.referrerPolicy&&(q.referrerPolicy=Y.referrerPolicy),Y.crossOrigin==="use-credentials"?q.credentials="include":Y.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function g(Y){if(Y.ep)return;Y.ep=!0;const q=U(Y);fetch(Y.href,q)}})();var Qo={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function Dm(){if(Qf)return Al;Qf=1;var O=Symbol.for("react.transitional.element"),P=Symbol.for("react.fragment");function U(g,Y,q){var sn=null;if(q!==void 0&&(sn=""+q),Y.key!==void 0&&(sn=""+Y.key),"key"in Y){q={};for(var On in Y)On!=="key"&&(q[On]=Y[On])}else q=Y;return Y=q.ref,{$$typeof:O,type:g,key:sn,ref:Y!==void 0?Y:null,props:q}}return Al.Fragment=P,Al.jsx=U,Al.jsxs=U,Al}var Ff;function Mm(){return Ff||(Ff=1,Qo.exports=Dm()),Qo.exports}var B=Mm(),Fo={exports:{}},_={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function Ym(){if(Pf)return _;Pf=1;var O=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),sn=Symbol.for("react.context"),On=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),un=Symbol.iterator;function en(c){return c===null||typeof c!="object"?null:(c=un&&c[un]||c["@@iterator"],typeof c=="function"?c:null)}var Wn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mn=Object.assign,qn={};function H(c,T,R){this.props=c,this.context=T,this.refs=qn,this.updater=R||Wn}H.prototype.isReactComponent={},H.prototype.setState=function(c,T){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,T,"setState")},H.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Yn(){}Yn.prototype=H.prototype;function ue(c,T,R){this.props=c,this.context=T,this.refs=qn,this.updater=R||Wn}var mn=ue.prototype=new Yn;mn.constructor=ue,Mn(mn,H.prototype),mn.isPureReactComponent=!0;var pn=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},Xn=Object.prototype.hasOwnProperty;function In(c,T,R,W,K,Z){return R=Z.ref,{$$typeof:O,type:c,key:T,ref:R!==void 0?R:null,props:Z}}function Zn(c,T){return In(c.type,T,void 0,void 0,void 0,c.props)}function Ee(c){return typeof c=="object"&&c!==null&&c.$$typeof===O}function Ka(c){var T={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(R){return T[R]})}var He=/\/+/g;function zn(c,T){return typeof c=="object"&&c!==null&&c.key!=null?Ka(""+c.key):T.toString(36)}function da(){}function ma(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(da,da):(c.status="pending",c.then(function(T){c.status==="pending"&&(c.status="fulfilled",c.value=T)},function(T){c.status==="pending"&&(c.status="rejected",c.reason=T)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function Gn(c,T,R,W,K){var Z=typeof c;(Z==="undefined"||Z==="boolean")&&(c=null);var k=!1;if(c===null)k=!0;else switch(Z){case"bigint":case"string":case"number":k=!0;break;case"object":switch(c.$$typeof){case O:case P:k=!0;break;case N:return k=c._init,Gn(k(c._payload),T,R,W,K)}}if(k)return K=K(c),k=W===""?"."+zn(c,0):W,pn(K)?(R="",k!=null&&(R=k.replace(He,"$&/")+"/"),Gn(K,T,R,"",function(Je){return Je})):K!=null&&(Ee(K)&&(K=Zn(K,R+(K.key==null||c&&c.key===K.key?"":(""+K.key).replace(He,"$&/")+"/")+k)),T.push(K)),1;k=0;var Qn=W===""?".":W+":";if(pn(c))for(var fn=0;fn<c.length;fn++)W=c[fn],Z=Qn+zn(W,fn),k+=Gn(W,T,R,Z,K);else if(fn=en(c),typeof fn=="function")for(c=fn.call(c),fn=0;!(W=c.next()).done;)W=W.value,Z=Qn+zn(W,fn++),k+=Gn(W,T,R,Z,K);else if(Z==="object"){if(typeof c.then=="function")return Gn(ma(c),T,R,W,K);throw T=String(c),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return k}function S(c,T,R){if(c==null)return c;var W=[],K=0;return Gn(c,W,"","",function(Z){return T.call(R,Z,K++)}),W}function p(c){if(c._status===-1){var T=c._result;T=T(),T.then(function(R){(c._status===0||c._status===-1)&&(c._status=1,c._result=R)},function(R){(c._status===0||c._status===-1)&&(c._status=2,c._result=R)}),c._status===-1&&(c._status=0,c._result=T)}if(c._status===1)return c._result.default;throw c._result}var C=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)};function on(){}return _.Children={map:S,forEach:function(c,T,R){S(c,function(){T.apply(this,arguments)},R)},count:function(c){var T=0;return S(c,function(){T++}),T},toArray:function(c){return S(c,function(T){return T})||[]},only:function(c){if(!Ee(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},_.Component=H,_.Fragment=U,_.Profiler=Y,_.PureComponent=ue,_.StrictMode=g,_.Suspense=L,_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,_.__COMPILER_RUNTIME={__proto__:null,c:function(c){return I.H.useMemoCache(c)}},_.cache=function(c){return function(){return c.apply(null,arguments)}},_.cloneElement=function(c,T,R){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var W=Mn({},c.props),K=c.key,Z=void 0;if(T!=null)for(k in T.ref!==void 0&&(Z=void 0),T.key!==void 0&&(K=""+T.key),T)!Xn.call(T,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&T.ref===void 0||(W[k]=T[k]);var k=arguments.length-2;if(k===1)W.children=R;else if(1<k){for(var Qn=Array(k),fn=0;fn<k;fn++)Qn[fn]=arguments[fn+2];W.children=Qn}return In(c.type,K,void 0,void 0,Z,W)},_.createContext=function(c){return c={$$typeof:sn,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:q,_context:c},c},_.createElement=function(c,T,R){var W,K={},Z=null;if(T!=null)for(W in T.key!==void 0&&(Z=""+T.key),T)Xn.call(T,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(K[W]=T[W]);var k=arguments.length-2;if(k===1)K.children=R;else if(1<k){for(var Qn=Array(k),fn=0;fn<k;fn++)Qn[fn]=arguments[fn+2];K.children=Qn}if(c&&c.defaultProps)for(W in k=c.defaultProps,k)K[W]===void 0&&(K[W]=k[W]);return In(c,Z,void 0,void 0,null,K)},_.createRef=function(){return{current:null}},_.forwardRef=function(c){return{$$typeof:On,render:c}},_.isValidElement=Ee,_.lazy=function(c){return{$$typeof:N,_payload:{_status:-1,_result:c},_init:p}},_.memo=function(c,T){return{$$typeof:v,type:c,compare:T===void 0?null:T}},_.startTransition=function(c){var T=I.T,R={};I.T=R;try{var W=c(),K=I.S;K!==null&&K(R,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(on,C)}catch(Z){C(Z)}finally{I.T=T}},_.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},_.use=function(c){return I.H.use(c)},_.useActionState=function(c,T,R){return I.H.useActionState(c,T,R)},_.useCallback=function(c,T){return I.H.useCallback(c,T)},_.useContext=function(c){return I.H.useContext(c)},_.useDebugValue=function(){},_.useDeferredValue=function(c,T){return I.H.useDeferredValue(c,T)},_.useEffect=function(c,T,R){var W=I.H;if(typeof R=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return W.useEffect(c,T)},_.useId=function(){return I.H.useId()},_.useImperativeHandle=function(c,T,R){return I.H.useImperativeHandle(c,T,R)},_.useInsertionEffect=function(c,T){return I.H.useInsertionEffect(c,T)},_.useLayoutEffect=function(c,T){return I.H.useLayoutEffect(c,T)},_.useMemo=function(c,T){return I.H.useMemo(c,T)},_.useOptimistic=function(c,T){return I.H.useOptimistic(c,T)},_.useReducer=function(c,T,R){return I.H.useReducer(c,T,R)},_.useRef=function(c){return I.H.useRef(c)},_.useState=function(c){return I.H.useState(c)},_.useSyncExternalStore=function(c,T,R){return I.H.useSyncExternalStore(c,T,R)},_.useTransition=function(){return I.H.useTransition()},_.version="19.1.0",_}var $f;function ar(){return $f||($f=1,Fo.exports=Ym()),Fo.exports}var La=ar(),Po={exports:{}},Sl={},$o={exports:{}},nr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function Nm(){return ny||(ny=1,function(O){function P(S,p){var C=S.length;S.push(p);n:for(;0<C;){var on=C-1>>>1,c=S[on];if(0<Y(c,p))S[on]=p,S[C]=c,C=on;else break n}}function U(S){return S.length===0?null:S[0]}function g(S){if(S.length===0)return null;var p=S[0],C=S.pop();if(C!==p){S[0]=C;n:for(var on=0,c=S.length,T=c>>>1;on<T;){var R=2*(on+1)-1,W=S[R],K=R+1,Z=S[K];if(0>Y(W,C))K<c&&0>Y(Z,W)?(S[on]=Z,S[K]=C,on=K):(S[on]=W,S[R]=C,on=R);else if(K<c&&0>Y(Z,C))S[on]=Z,S[K]=C,on=K;else break n}}return p}function Y(S,p){var C=S.sortIndex-p.sortIndex;return C!==0?C:S.id-p.id}if(O.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;O.unstable_now=function(){return q.now()}}else{var sn=Date,On=sn.now();O.unstable_now=function(){return sn.now()-On}}var L=[],v=[],N=1,un=null,en=3,Wn=!1,Mn=!1,qn=!1,H=!1,Yn=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,mn=typeof setImmediate<"u"?setImmediate:null;function pn(S){for(var p=U(v);p!==null;){if(p.callback===null)g(v);else if(p.startTime<=S)g(v),p.sortIndex=p.expirationTime,P(L,p);else break;p=U(v)}}function I(S){if(qn=!1,pn(S),!Mn)if(U(L)!==null)Mn=!0,Xn||(Xn=!0,zn());else{var p=U(v);p!==null&&Gn(I,p.startTime-S)}}var Xn=!1,In=-1,Zn=5,Ee=-1;function Ka(){return H?!0:!(O.unstable_now()-Ee<Zn)}function He(){if(H=!1,Xn){var S=O.unstable_now();Ee=S;var p=!0;try{n:{Mn=!1,qn&&(qn=!1,ue(In),In=-1),Wn=!0;var C=en;try{e:{for(pn(S),un=U(L);un!==null&&!(un.expirationTime>S&&Ka());){var on=un.callback;if(typeof on=="function"){un.callback=null,en=un.priorityLevel;var c=on(un.expirationTime<=S);if(S=O.unstable_now(),typeof c=="function"){un.callback=c,pn(S),p=!0;break e}un===U(L)&&g(L),pn(S)}else g(L);un=U(L)}if(un!==null)p=!0;else{var T=U(v);T!==null&&Gn(I,T.startTime-S),p=!1}}break n}finally{un=null,en=C,Wn=!1}p=void 0}}finally{p?zn():Xn=!1}}}var zn;if(typeof mn=="function")zn=function(){mn(He)};else if(typeof MessageChannel<"u"){var da=new MessageChannel,ma=da.port2;da.port1.onmessage=He,zn=function(){ma.postMessage(null)}}else zn=function(){Yn(He,0)};function Gn(S,p){In=Yn(function(){S(O.unstable_now())},p)}O.unstable_IdlePriority=5,O.unstable_ImmediatePriority=1,O.unstable_LowPriority=4,O.unstable_NormalPriority=3,O.unstable_Profiling=null,O.unstable_UserBlockingPriority=2,O.unstable_cancelCallback=function(S){S.callback=null},O.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Zn=0<S?Math.floor(1e3/S):5},O.unstable_getCurrentPriorityLevel=function(){return en},O.unstable_next=function(S){switch(en){case 1:case 2:case 3:var p=3;break;default:p=en}var C=en;en=p;try{return S()}finally{en=C}},O.unstable_requestPaint=function(){H=!0},O.unstable_runWithPriority=function(S,p){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var C=en;en=S;try{return p()}finally{en=C}},O.unstable_scheduleCallback=function(S,p,C){var on=O.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?on+C:on):C=on,S){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=C+c,S={id:N++,callback:p,priorityLevel:S,startTime:C,expirationTime:c,sortIndex:-1},C>on?(S.sortIndex=C,P(v,S),U(L)===null&&S===U(v)&&(qn?(ue(In),In=-1):qn=!0,Gn(I,C-on))):(S.sortIndex=c,P(L,S),Mn||Wn||(Mn=!0,Xn||(Xn=!0,zn()))),S},O.unstable_shouldYield=Ka,O.unstable_wrapCallback=function(S){var p=en;return function(){var C=en;en=p;try{return S.apply(this,arguments)}finally{en=C}}}}(nr)),nr}var ey;function Lm(){return ey||(ey=1,$o.exports=Nm()),$o.exports}var er={exports:{}},kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function Km(){if(ay)return kn;ay=1;var O=ar();function P(L){var v="https://react.dev/errors/"+L;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)v+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+L+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(){}var g={d:{f:U,r:function(){throw Error(P(522))},D:U,C:U,L:U,m:U,X:U,S:U,M:U},p:0,findDOMNode:null},Y=Symbol.for("react.portal");function q(L,v,N){var un=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:un==null?null:""+un,children:L,containerInfo:v,implementation:N}}var sn=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function On(L,v){if(L==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,kn.createPortal=function(L,v){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(P(299));return q(L,v,null,N)},kn.flushSync=function(L){var v=sn.T,N=g.p;try{if(sn.T=null,g.p=2,L)return L()}finally{sn.T=v,g.p=N,g.d.f()}},kn.preconnect=function(L,v){typeof L=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,g.d.C(L,v))},kn.prefetchDNS=function(L){typeof L=="string"&&g.d.D(L)},kn.preinit=function(L,v){if(typeof L=="string"&&v&&typeof v.as=="string"){var N=v.as,un=On(N,v.crossOrigin),en=typeof v.integrity=="string"?v.integrity:void 0,Wn=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;N==="style"?g.d.S(L,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:un,integrity:en,fetchPriority:Wn}):N==="script"&&g.d.X(L,{crossOrigin:un,integrity:en,fetchPriority:Wn,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},kn.preinitModule=function(L,v){if(typeof L=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var N=On(v.as,v.crossOrigin);g.d.M(L,{crossOrigin:N,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&g.d.M(L)},kn.preload=function(L,v){if(typeof L=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var N=v.as,un=On(N,v.crossOrigin);g.d.L(L,N,{crossOrigin:un,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},kn.preloadModule=function(L,v){if(typeof L=="string")if(v){var N=On(v.as,v.crossOrigin);g.d.m(L,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:N,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else g.d.m(L)},kn.requestFormReset=function(L){g.d.r(L)},kn.unstable_batchedUpdates=function(L,v){return L(v)},kn.useFormState=function(L,v,N){return sn.H.useFormState(L,v,N)},kn.useFormStatus=function(){return sn.H.useHostTransitionStatus()},kn.version="19.1.0",kn}var ty;function zm(){if(ty)return er.exports;ty=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(P){console.error(P)}}return O(),er.exports=Km(),er.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function Gm(){if(ly)return Sl;ly=1;var O=Lm(),P=ar(),U=zm();function g(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Y(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function q(n){var e=n,a=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(a=e.return),n=e.return;while(n)}return e.tag===3?a:null}function sn(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function On(n){if(q(n)!==n)throw Error(g(188))}function L(n){var e=n.alternate;if(!e){if(e=q(n),e===null)throw Error(g(188));return e!==n?null:n}for(var a=n,t=e;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(t=l.return,t!==null){a=t;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return On(l),n;if(i===t)return On(l),e;i=i.sibling}throw Error(g(188))}if(a.return!==t.return)a=l,t=i;else{for(var u=!1,o=l.child;o;){if(o===a){u=!0,a=l,t=i;break}if(o===t){u=!0,t=l,a=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===a){u=!0,a=i,t=l;break}if(o===t){u=!0,t=i,a=l;break}o=o.sibling}if(!u)throw Error(g(189))}}if(a.alternate!==t)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?n:e}function v(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=v(n),e!==null)return e;n=n.sibling}return null}var N=Object.assign,un=Symbol.for("react.element"),en=Symbol.for("react.transitional.element"),Wn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),qn=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),Yn=Symbol.for("react.provider"),ue=Symbol.for("react.consumer"),mn=Symbol.for("react.context"),pn=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Xn=Symbol.for("react.suspense_list"),In=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ka=Symbol.for("react.memo_cache_sentinel"),He=Symbol.iterator;function zn(n){return n===null||typeof n!="object"?null:(n=He&&n[He]||n["@@iterator"],typeof n=="function"?n:null)}var da=Symbol.for("react.client.reference");function ma(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===da?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Mn:return"Fragment";case H:return"Profiler";case qn:return"StrictMode";case I:return"Suspense";case Xn:return"SuspenseList";case Ee:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Wn:return"Portal";case mn:return(n.displayName||"Context")+".Provider";case ue:return(n._context.displayName||"Context")+".Consumer";case pn:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case In:return e=n.displayName||null,e!==null?e:ma(n.type)||"Memo";case Zn:e=n._payload,n=n._init;try{return ma(n(e))}catch{}}return null}var Gn=Array.isArray,S=P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,p=U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C={pending:!1,data:null,method:null,action:null},on=[],c=-1;function T(n){return{current:n}}function R(n){0>c||(n.current=on[c],on[c]=null,c--)}function W(n,e){c++,on[c]=n.current,n.current=e}var K=T(null),Z=T(null),k=T(null),Qn=T(null);function fn(n,e){switch(W(k,e),W(Z,n),W(K,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Wf(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Wf(e),n=pf(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}R(K),W(K,n)}function Je(){R(K),R(Z),R(k)}function Ki(n){n.memoizedState!==null&&W(Qn,n);var e=K.current,a=pf(e,n.type);e!==a&&(W(Z,n),W(K,a))}function El(n){Z.current===n&&(R(K),R(Z)),Qn.current===n&&(R(Qn),yl._currentValue=C)}var zi=Object.prototype.hasOwnProperty,Gi=O.unstable_scheduleCallback,Ci=O.unstable_cancelCallback,oy=O.unstable_shouldYield,ry=O.unstable_requestPaint,be=O.unstable_now,cy=O.unstable_getCurrentPriorityLevel,tr=O.unstable_ImmediatePriority,lr=O.unstable_UserBlockingPriority,bl=O.unstable_NormalPriority,sy=O.unstable_LowPriority,ir=O.unstable_IdlePriority,fy=O.log,yy=O.unstable_setDisableYieldValue,bt=null,Fn=null;function xe(n){if(typeof fy=="function"&&yy(n),Fn&&typeof Fn.setStrictMode=="function")try{Fn.setStrictMode(bt,n)}catch{}}var Pn=Math.clz32?Math.clz32:hy,dy=Math.log,my=Math.LN2;function hy(n){return n>>>=0,n===0?32:31-(dy(n)/my|0)|0}var vl=256,Tl=4194304;function ha(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ol(n,e,a){var t=n.pendingLanes;if(t===0)return 0;var l=0,i=n.suspendedLanes,u=n.pingedLanes;n=n.warmLanes;var o=t&134217727;return o!==0?(t=o&~i,t!==0?l=ha(t):(u&=o,u!==0?l=ha(u):a||(a=o&~n,a!==0&&(l=ha(a))))):(o=t&~i,o!==0?l=ha(o):u!==0?l=ha(u):a||(a=t&~n,a!==0&&(l=ha(a)))),l===0?0:e!==0&&e!==l&&(e&i)===0&&(i=l&-l,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:l}function vt(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function gy(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ur(){var n=vl;return vl<<=1,(vl&4194048)===0&&(vl=256),n}function or(){var n=Tl;return Tl<<=1,(Tl&62914560)===0&&(Tl=4194304),n}function wi(n){for(var e=[],a=0;31>a;a++)e.push(n);return e}function Tt(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ay(n,e,a,t,l,i){var u=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var o=n.entanglements,r=n.expirationTimes,d=n.hiddenUpdates;for(a=u&~a;0<a;){var A=31-Pn(a),b=1<<A;o[A]=0,r[A]=-1;var m=d[A];if(m!==null)for(d[A]=null,A=0;A<m.length;A++){var h=m[A];h!==null&&(h.lane&=-536870913)}a&=~b}t!==0&&rr(n,t,0),i!==0&&l===0&&n.tag!==0&&(n.suspendedLanes|=i&~(u&~e))}function rr(n,e,a){n.pendingLanes|=e,n.suspendedLanes&=~e;var t=31-Pn(e);n.entangledLanes|=e,n.entanglements[t]=n.entanglements[t]|1073741824|a&4194090}function cr(n,e){var a=n.entangledLanes|=e;for(n=n.entanglements;a;){var t=31-Pn(a),l=1<<t;l&e|n[t]&e&&(n[t]|=e),a&=~l}}function ki(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ui(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function sr(){var n=p.p;return n!==0?n:(n=window.event,n===void 0?32:jf(n.type))}function Sy(n,e){var a=p.p;try{return p.p=n,e()}finally{p.p=a}}var je=Math.random().toString(36).slice(2),Cn="__reactFiber$"+je,_n="__reactProps$"+je,za="__reactContainer$"+je,_i="__reactEvents$"+je,Ey="__reactListeners$"+je,by="__reactHandles$"+je,fr="__reactResources$"+je,Ot="__reactMarker$"+je;function Ji(n){delete n[Cn],delete n[_n],delete n[_i],delete n[Ey],delete n[by]}function Ga(n){var e=n[Cn];if(e)return e;for(var a=n.parentNode;a;){if(e=a[za]||a[Cn]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(n=Df(n);n!==null;){if(a=n[Cn])return a;n=Df(n)}return e}n=a,a=n.parentNode}return null}function Ca(n){if(n=n[Cn]||n[za]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function Wt(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(g(33))}function wa(n){var e=n[fr];return e||(e=n[fr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Hn(n){n[Ot]=!0}var yr=new Set,dr={};function ga(n,e){ka(n,e),ka(n+"Capture",e)}function ka(n,e){for(dr[n]=e,n=0;n<e.length;n++)yr.add(e[n])}var vy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mr={},hr={};function Ty(n){return zi.call(hr,n)?!0:zi.call(mr,n)?!1:vy.test(n)?hr[n]=!0:(mr[n]=!0,!1)}function Wl(n,e,a){if(Ty(e))if(a===null)n.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var t=e.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+a)}}function pl(n,e,a){if(a===null)n.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+a)}}function Be(n,e,a,t){if(t===null)n.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(e,a,""+t)}}var xi,gr;function Ua(n){if(xi===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);xi=e&&e[1]||"",gr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xi+n+gr}var ji=!1;function Vi(n,e){if(!n||ji)return"";ji=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(e){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(h){var m=h}Reflect.construct(n,[],b)}else{try{b.call()}catch(h){m=h}n.call(b.prototype)}}else{try{throw Error()}catch(h){m=h}(b=n())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(h){if(h&&m&&typeof h.stack=="string")return[h.stack,m.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=t.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var r=u.split(`
`),d=o.split(`
`);for(l=t=0;t<r.length&&!r[t].includes("DetermineComponentFrameRoot");)t++;for(;l<d.length&&!d[l].includes("DetermineComponentFrameRoot");)l++;if(t===r.length||l===d.length)for(t=r.length-1,l=d.length-1;1<=t&&0<=l&&r[t]!==d[l];)l--;for(;1<=t&&0<=l;t--,l--)if(r[t]!==d[l]){if(t!==1||l!==1)do if(t--,l--,0>l||r[t]!==d[l]){var A=`
`+r[t].replace(" at new "," at ");return n.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",n.displayName)),A}while(1<=t&&0<=l);break}}}finally{ji=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Ua(a):""}function Oy(n){switch(n.tag){case 26:case 27:case 5:return Ua(n.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return Vi(n.type,!1);case 11:return Vi(n.type.render,!1);case 1:return Vi(n.type,!0);case 31:return Ua("Activity");default:return""}}function Ar(n){try{var e="";do e+=Oy(n),n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function oe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Sr(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wy(n){var e=Sr(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),t=""+n[e];if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(u){t=""+u,i.call(this,u)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Hl(n){n._valueTracker||(n._valueTracker=Wy(n))}function Er(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var a=e.getValue(),t="";return n&&(t=Sr(n)?n.checked?"true":"false":n.value),n=t,n!==a?(e.setValue(n),!0):!1}function Bl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var py=/[\n"\\]/g;function re(n){return n.replace(py,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function qi(n,e,a,t,l,i,u,o){n.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.type=u:n.removeAttribute("type"),e!=null?u==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+oe(e)):n.value!==""+oe(e)&&(n.value=""+oe(e)):u!=="submit"&&u!=="reset"||n.removeAttribute("value"),e!=null?Xi(n,u,oe(e)):a!=null?Xi(n,u,oe(a)):t!=null&&n.removeAttribute("value"),l==null&&i!=null&&(n.defaultChecked=!!i),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+oe(o):n.removeAttribute("name")}function br(n,e,a,t,l,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;a=a!=null?""+oe(a):"",e=e!=null?""+oe(e):a,o||e===n.value||(n.value=e),n.defaultValue=e}t=t??l,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=o?n.checked:!!t,n.defaultChecked=!!t,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.name=u)}function Xi(n,e,a){e==="number"&&Bl(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function _a(n,e,a,t){if(n=n.options,e){e={};for(var l=0;l<a.length;l++)e["$"+a[l]]=!0;for(a=0;a<n.length;a++)l=e.hasOwnProperty("$"+n[a].value),n[a].selected!==l&&(n[a].selected=l),l&&t&&(n[a].defaultSelected=!0)}else{for(a=""+oe(a),e=null,l=0;l<n.length;l++){if(n[l].value===a){n[l].selected=!0,t&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function vr(n,e,a){if(e!=null&&(e=""+oe(e),e!==n.value&&(n.value=e),a==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=a!=null?""+oe(a):""}function Tr(n,e,a,t){if(e==null){if(t!=null){if(a!=null)throw Error(g(92));if(Gn(t)){if(1<t.length)throw Error(g(93));t=t[0]}a=t}a==null&&(a=""),e=a}a=oe(e),n.defaultValue=a,t=n.textContent,t===a&&t!==""&&t!==null&&(n.value=t)}function Ja(n,e){if(e){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=e;return}}n.textContent=e}var Hy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Or(n,e,a){var t=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?t?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":t?n.setProperty(e,a):typeof a!="number"||a===0||Hy.has(e)?e==="float"?n.cssFloat=a:n[e]=(""+a).trim():n[e]=a+"px"}function Wr(n,e,a){if(e!=null&&typeof e!="object")throw Error(g(62));if(n=n.style,a!=null){for(var t in a)!a.hasOwnProperty(t)||e!=null&&e.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var l in e)t=e[l],e.hasOwnProperty(l)&&a[l]!==t&&Or(n,l,t)}else for(var i in e)e.hasOwnProperty(i)&&Or(n,i,e[i])}function Ii(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var By=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(n){return Ry.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Zi=null;function Qi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xa=null,ja=null;function pr(n){var e=Ca(n);if(e&&(n=e.stateNode)){var a=n[_n]||null;n:switch(n=e.stateNode,e.type){case"input":if(qi(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+re(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var t=a[e];if(t!==n&&t.form===n.form){var l=t[_n]||null;if(!l)throw Error(g(90));qi(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<a.length;e++)t=a[e],t.form===n.form&&Er(t)}break n;case"textarea":vr(n,a.value,a.defaultValue);break n;case"select":e=a.value,e!=null&&_a(n,!!a.multiple,e,!1)}}}var Fi=!1;function Hr(n,e,a){if(Fi)return n(e,a);Fi=!0;try{var t=n(e);return t}finally{if(Fi=!1,(xa!==null||ja!==null)&&(di(),xa&&(e=xa,n=ja,ja=xa=null,pr(e),n)))for(e=0;e<n.length;e++)pr(n[e])}}function pt(n,e){var a=n.stateNode;if(a===null)return null;var t=a[_n]||null;if(t===null)return null;a=t[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(g(231,e,typeof a));return a}var Re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=!1;if(Re)try{var Ht={};Object.defineProperty(Ht,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch{Pi=!1}var Ve=null,$i=null,Dl=null;function Br(){if(Dl)return Dl;var n,e=$i,a=e.length,t,l="value"in Ve?Ve.value:Ve.textContent,i=l.length;for(n=0;n<a&&e[n]===l[n];n++);var u=a-n;for(t=1;t<=u&&e[a-t]===l[i-t];t++);return Dl=l.slice(n,1<t?1-t:void 0)}function Ml(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Yl(){return!0}function Rr(){return!1}function Jn(n){function e(a,t,l,i,u){this._reactName=a,this._targetInst=l,this.type=t,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(a=n[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Yl:Rr,this.isPropagationStopped=Rr,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),e}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=Jn(Aa),Bt=N({},Aa,{view:0,detail:0}),Dy=Jn(Bt),nu,eu,Rt,Ll=N({},Bt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Rt&&(Rt&&n.type==="mousemove"?(nu=n.screenX-Rt.screenX,eu=n.screenY-Rt.screenY):eu=nu=0,Rt=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:eu}}),Dr=Jn(Ll),My=N({},Ll,{dataTransfer:0}),Yy=Jn(My),Ny=N({},Bt,{relatedTarget:0}),au=Jn(Ny),Ly=N({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ky=Jn(Ly),zy=N({},Aa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gy=Jn(zy),Cy=N({},Aa,{data:0}),Mr=Jn(Cy),wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Uy[n])?!!e[n]:!1}function tu(){return _y}var Jy=N({},Bt,{key:function(n){if(n.key){var e=wy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ml(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ky[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(n){return n.type==="keypress"?Ml(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ml(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xy=Jn(Jy),jy=N({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yr=Jn(jy),Vy=N({},Bt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),qy=Jn(Vy),Xy=N({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=Jn(Xy),Zy=N({},Ll,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qy=Jn(Zy),Fy=N({},Aa,{newState:0,oldState:0}),Py=Jn(Fy),$y=[9,13,27,32],lu=Re&&"CompositionEvent"in window,Dt=null;Re&&"documentMode"in document&&(Dt=document.documentMode);var nd=Re&&"TextEvent"in window&&!Dt,Nr=Re&&(!lu||Dt&&8<Dt&&11>=Dt),Lr=" ",Kr=!1;function zr(n,e){switch(n){case"keyup":return $y.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gr(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Va=!1;function ed(n,e){switch(n){case"compositionend":return Gr(e);case"keypress":return e.which!==32?null:(Kr=!0,Lr);case"textInput":return n=e.data,n===Lr&&Kr?null:n;default:return null}}function ad(n,e){if(Va)return n==="compositionend"||!lu&&zr(n,e)?(n=Br(),Dl=$i=Ve=null,Va=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nr&&e.locale!=="ko"?null:e.data;default:return null}}var td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cr(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!td[n.type]:e==="textarea"}function wr(n,e,a,t){xa?ja?ja.push(t):ja=[t]:xa=t,e=Ei(e,"onChange"),0<e.length&&(a=new Nl("onChange","change",null,a,t),n.push({event:a,listeners:e}))}var Mt=null,Yt=null;function ld(n){Ef(n,0)}function Kl(n){var e=Wt(n);if(Er(e))return n}function kr(n,e){if(n==="change")return e}var Ur=!1;if(Re){var iu;if(Re){var uu="oninput"in document;if(!uu){var _r=document.createElement("div");_r.setAttribute("oninput","return;"),uu=typeof _r.oninput=="function"}iu=uu}else iu=!1;Ur=iu&&(!document.documentMode||9<document.documentMode)}function Jr(){Mt&&(Mt.detachEvent("onpropertychange",xr),Yt=Mt=null)}function xr(n){if(n.propertyName==="value"&&Kl(Yt)){var e=[];wr(e,Yt,n,Qi(n)),Hr(ld,e)}}function id(n,e,a){n==="focusin"?(Jr(),Mt=e,Yt=a,Mt.attachEvent("onpropertychange",xr)):n==="focusout"&&Jr()}function ud(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Kl(Yt)}function od(n,e){if(n==="click")return Kl(e)}function rd(n,e){if(n==="input"||n==="change")return Kl(e)}function cd(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var $n=typeof Object.is=="function"?Object.is:cd;function Nt(n,e){if($n(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var a=Object.keys(n),t=Object.keys(e);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var l=a[t];if(!zi.call(e,l)||!$n(n[l],e[l]))return!1}return!0}function jr(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vr(n,e){var a=jr(n);n=0;for(var t;a;){if(a.nodeType===3){if(t=n+a.textContent.length,n<=e&&t>=e)return{node:a,offset:e-n};n=t}n:{for(;a;){if(a.nextSibling){a=a.nextSibling;break n}a=a.parentNode}a=void 0}a=jr(a)}}function qr(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?qr(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Xr(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Bl(n.document);e instanceof n.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)n=e.contentWindow;else break;e=Bl(n.document)}return e}function ou(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var sd=Re&&"documentMode"in document&&11>=document.documentMode,qa=null,ru=null,Lt=null,cu=!1;function Ir(n,e,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||qa==null||qa!==Bl(t)||(t=qa,"selectionStart"in t&&ou(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Lt&&Nt(Lt,t)||(Lt=t,t=Ei(ru,"onSelect"),0<t.length&&(e=new Nl("onSelect","select",null,e,a),n.push({event:e,listeners:t}),e.target=qa)))}function Sa(n,e){var a={};return a[n.toLowerCase()]=e.toLowerCase(),a["Webkit"+n]="webkit"+e,a["Moz"+n]="moz"+e,a}var Xa={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionrun:Sa("Transition","TransitionRun"),transitionstart:Sa("Transition","TransitionStart"),transitioncancel:Sa("Transition","TransitionCancel"),transitionend:Sa("Transition","TransitionEnd")},su={},Zr={};Re&&(Zr=document.createElement("div").style,"AnimationEvent"in window||(delete Xa.animationend.animation,delete Xa.animationiteration.animation,delete Xa.animationstart.animation),"TransitionEvent"in window||delete Xa.transitionend.transition);function Ea(n){if(su[n])return su[n];if(!Xa[n])return n;var e=Xa[n],a;for(a in e)if(e.hasOwnProperty(a)&&a in Zr)return su[n]=e[a];return n}var Qr=Ea("animationend"),Fr=Ea("animationiteration"),Pr=Ea("animationstart"),fd=Ea("transitionrun"),yd=Ea("transitionstart"),dd=Ea("transitioncancel"),$r=Ea("transitionend"),nc=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function ge(n,e){nc.set(n,e),ga(e,[n])}var ec=new WeakMap;function ce(n,e){if(typeof n=="object"&&n!==null){var a=ec.get(n);return a!==void 0?a:(e={value:n,source:e,stack:Ar(e)},ec.set(n,e),e)}return{value:n,source:e,stack:Ar(e)}}var se=[],Ia=0,yu=0;function zl(){for(var n=Ia,e=yu=Ia=0;e<n;){var a=se[e];se[e++]=null;var t=se[e];se[e++]=null;var l=se[e];se[e++]=null;var i=se[e];if(se[e++]=null,t!==null&&l!==null){var u=t.pending;u===null?l.next=l:(l.next=u.next,u.next=l),t.pending=l}i!==0&&ac(a,l,i)}}function Gl(n,e,a,t){se[Ia++]=n,se[Ia++]=e,se[Ia++]=a,se[Ia++]=t,yu|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function du(n,e,a,t){return Gl(n,e,a,t),Cl(n)}function Za(n,e){return Gl(n,null,null,e),Cl(n)}function ac(n,e,a){n.lanes|=a;var t=n.alternate;t!==null&&(t.lanes|=a);for(var l=!1,i=n.return;i!==null;)i.childLanes|=a,t=i.alternate,t!==null&&(t.childLanes|=a),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(l=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,l&&e!==null&&(l=31-Pn(a),n=i.hiddenUpdates,t=n[l],t===null?n[l]=[e]:t.push(e),e.lane=a|536870912),i):null}function Cl(n){if(50<ll)throw ll=0,bo=null,Error(g(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Qa={};function md(n,e,a,t){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ne(n,e,a,t){return new md(n,e,a,t)}function mu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function De(n,e){var a=n.alternate;return a===null?(a=ne(n.tag,e,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=e,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,e=n.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function tc(n,e){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,e=a.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function wl(n,e,a,t,l,i){var u=0;if(t=n,typeof n=="function")mu(n)&&(u=1);else if(typeof n=="string")u=gm(n,a,K.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Ee:return n=ne(31,a,e,l),n.elementType=Ee,n.lanes=i,n;case Mn:return ba(a.children,l,i,e);case qn:u=8,l|=24;break;case H:return n=ne(12,a,e,l|2),n.elementType=H,n.lanes=i,n;case I:return n=ne(13,a,e,l),n.elementType=I,n.lanes=i,n;case Xn:return n=ne(19,a,e,l),n.elementType=Xn,n.lanes=i,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Yn:case mn:u=10;break n;case ue:u=9;break n;case pn:u=11;break n;case In:u=14;break n;case Zn:u=16,t=null;break n}u=29,a=Error(g(130,n===null?"null":typeof n,"")),t=null}return e=ne(u,a,e,l),e.elementType=n,e.type=t,e.lanes=i,e}function ba(n,e,a,t){return n=ne(7,n,t,e),n.lanes=a,n}function hu(n,e,a){return n=ne(6,n,null,e),n.lanes=a,n}function gu(n,e,a){return e=ne(4,n.children!==null?n.children:[],n.key,e),e.lanes=a,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Fa=[],Pa=0,kl=null,Ul=0,fe=[],ye=0,va=null,Me=1,Ye="";function Ta(n,e){Fa[Pa++]=Ul,Fa[Pa++]=kl,kl=n,Ul=e}function lc(n,e,a){fe[ye++]=Me,fe[ye++]=Ye,fe[ye++]=va,va=n;var t=Me;n=Ye;var l=32-Pn(t)-1;t&=~(1<<l),a+=1;var i=32-Pn(e)+l;if(30<i){var u=l-l%5;i=(t&(1<<u)-1).toString(32),t>>=u,l-=u,Me=1<<32-Pn(e)+l|a<<l|t,Ye=i+n}else Me=1<<i|a<<l|t,Ye=n}function Au(n){n.return!==null&&(Ta(n,1),lc(n,1,0))}function Su(n){for(;n===kl;)kl=Fa[--Pa],Fa[Pa]=null,Ul=Fa[--Pa],Fa[Pa]=null;for(;n===va;)va=fe[--ye],fe[ye]=null,Ye=fe[--ye],fe[ye]=null,Me=fe[--ye],fe[ye]=null}var Un=null,hn=null,F=!1,Oa=null,ve=!1,Eu=Error(g(519));function Wa(n){var e=Error(g(418,""));throw Gt(ce(e,n)),Eu}function ic(n){var e=n.stateNode,a=n.type,t=n.memoizedProps;switch(e[Cn]=n,e[_n]=t,a){case"dialog":V("cancel",e),V("close",e);break;case"iframe":case"object":case"embed":V("load",e);break;case"video":case"audio":for(a=0;a<ul.length;a++)V(ul[a],e);break;case"source":V("error",e);break;case"img":case"image":case"link":V("error",e),V("load",e);break;case"details":V("toggle",e);break;case"input":V("invalid",e),br(e,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0),Hl(e);break;case"select":V("invalid",e);break;case"textarea":V("invalid",e),Tr(e,t.value,t.defaultValue,t.children),Hl(e)}a=t.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||t.suppressHydrationWarning===!0||Of(e.textContent,a)?(t.popover!=null&&(V("beforetoggle",e),V("toggle",e)),t.onScroll!=null&&V("scroll",e),t.onScrollEnd!=null&&V("scrollend",e),t.onClick!=null&&(e.onclick=bi),e=!0):e=!1,e||Wa(n)}function uc(n){for(Un=n.return;Un;)switch(Un.tag){case 5:case 13:ve=!1;return;case 27:case 3:ve=!0;return;default:Un=Un.return}}function Kt(n){if(n!==Un)return!1;if(!F)return uc(n),F=!0,!1;var e=n.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Go(n.type,n.memoizedProps)),a=!a),a&&hn&&Wa(n),uc(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(e===0){hn=Se(n.nextSibling);break n}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;n=n.nextSibling}hn=null}}else e===27?(e=hn,oa(n.type)?(n=Uo,Uo=null,hn=n):hn=e):hn=Un?Se(n.stateNode.nextSibling):null;return!0}function zt(){hn=Un=null,F=!1}function oc(){var n=Oa;return n!==null&&(Vn===null?Vn=n:Vn.push.apply(Vn,n),Oa=null),n}function Gt(n){Oa===null?Oa=[n]:Oa.push(n)}var bu=T(null),pa=null,Ne=null;function qe(n,e,a){W(bu,e._currentValue),e._currentValue=a}function Le(n){n._currentValue=bu.current,R(bu)}function vu(n,e,a){for(;n!==null;){var t=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),n===a)break;n=n.return}}function Tu(n,e,a,t){var l=n.child;for(l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;n:for(;i!==null;){var o=i;i=l;for(var r=0;r<e.length;r++)if(o.context===e[r]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),vu(i.return,a,n),t||(u=null);break n}i=o.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(g(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),vu(u,a,n),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===n){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function Ct(n,e,a,t){n=null;for(var l=e,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(g(387));if(u=u.memoizedProps,u!==null){var o=l.type;$n(l.pendingProps.value,u.value)||(n!==null?n.push(o):n=[o])}}else if(l===Qn.current){if(u=l.alternate,u===null)throw Error(g(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(n!==null?n.push(yl):n=[yl])}l=l.return}n!==null&&Tu(e,n,a,t),e.flags|=262144}function _l(n){for(n=n.firstContext;n!==null;){if(!$n(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ha(n){pa=n,Ne=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function wn(n){return rc(pa,n)}function Jl(n,e){return pa===null&&Ha(n),rc(n,e)}function rc(n,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ne===null){if(n===null)throw Error(g(308));Ne=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Ne=Ne.next=e;return a}var hd=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(a,t){n.push(t)}};this.abort=function(){e.aborted=!0,n.forEach(function(a){return a()})}},gd=O.unstable_scheduleCallback,Ad=O.unstable_NormalPriority,vn={$$typeof:mn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new hd,data:new Map,refCount:0}}function wt(n){n.refCount--,n.refCount===0&&gd(Ad,function(){n.controller.abort()})}var kt=null,Wu=0,$a=0,nt=null;function Sd(n,e){if(kt===null){var a=kt=[];Wu=0,$a=Bo(),nt={status:"pending",value:void 0,then:function(t){a.push(t)}}}return Wu++,e.then(cc,cc),e}function cc(){if(--Wu===0&&kt!==null){nt!==null&&(nt.status="fulfilled");var n=kt;kt=null,$a=0,nt=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Ed(n,e){var a=[],t={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return n.then(function(){t.status="fulfilled",t.value=e;for(var l=0;l<a.length;l++)(0,a[l])(e)},function(l){for(t.status="rejected",t.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),t}var sc=S.S;S.S=function(n,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Sd(n,e),sc!==null&&sc(n,e)};var Ba=T(null);function pu(){var n=Ba.current;return n!==null?n:cn.pooledCache}function xl(n,e){e===null?W(Ba,Ba.current):W(Ba,e.pool)}function fc(){var n=pu();return n===null?null:{parent:vn._currentValue,pool:n}}var Ut=Error(g(460)),yc=Error(g(474)),jl=Error(g(542)),Hu={then:function(){}};function dc(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Vl(){}function mc(n,e,a){switch(a=n[a],a===void 0?n.push(e):a!==e&&(e.then(Vl,Vl),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,gc(n),n;default:if(typeof e.status=="string")e.then(Vl,Vl);else{if(n=cn,n!==null&&100<n.shellSuspendCounter)throw Error(g(482));n=e,n.status="pending",n.then(function(t){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=t}},function(t){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=t}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,gc(n),n}throw _t=e,Ut}}var _t=null;function hc(){if(_t===null)throw Error(g(459));var n=_t;return _t=null,n}function gc(n){if(n===Ut||n===jl)throw Error(g(483))}var Xe=!1;function Bu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ie(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ze(n,e,a){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,($&2)!==0){var l=t.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e,e=Cl(n),ac(n,null,a),e}return Gl(n,t,e,a),Cl(n)}function Jt(n,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var t=e.lanes;t&=n.pendingLanes,a|=t,e.lanes=a,cr(n,a)}}function Du(n,e){var a=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?l=i=e:i=i.next=e}else l=i=e;a={baseState:t.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:t.shared,callbacks:t.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=e:n.next=e,a.lastBaseUpdate=e}var Mu=!1;function xt(){if(Mu){var n=nt;if(n!==null)throw n}}function jt(n,e,a,t){Mu=!1;var l=n.updateQueue;Xe=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var r=o,d=r.next;r.next=null,u===null?i=d:u.next=d,u=r;var A=n.alternate;A!==null&&(A=A.updateQueue,o=A.lastBaseUpdate,o!==u&&(o===null?A.firstBaseUpdate=d:o.next=d,A.lastBaseUpdate=r))}if(i!==null){var b=l.baseState;u=0,A=d=r=null,o=i;do{var m=o.lane&-536870913,h=m!==o.lane;if(h?(X&m)===m:(t&m)===m){m!==0&&m===$a&&(Mu=!0),A!==null&&(A=A.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});n:{var w=n,z=o;m=e;var ln=a;switch(z.tag){case 1:if(w=z.payload,typeof w=="function"){b=w.call(ln,b,m);break n}b=w;break n;case 3:w.flags=w.flags&-65537|128;case 0:if(w=z.payload,m=typeof w=="function"?w.call(ln,b,m):w,m==null)break n;b=N({},b,m);break n;case 2:Xe=!0}}m=o.callback,m!==null&&(n.flags|=64,h&&(n.flags|=8192),h=l.callbacks,h===null?l.callbacks=[m]:h.push(m))}else h={lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},A===null?(d=A=h,r=b):A=A.next=h,u|=m;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;h=o,o=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);A===null&&(r=b),l.baseState=r,l.firstBaseUpdate=d,l.lastBaseUpdate=A,i===null&&(l.shared.lanes=0),ta|=u,n.lanes=u,n.memoizedState=b}}function Ac(n,e){if(typeof n!="function")throw Error(g(191,n));n.call(e)}function Sc(n,e){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Ac(a[n],e)}var et=T(null),ql=T(0);function Ec(n,e){n=Ue,W(ql,n),W(et,e),Ue=n|e.baseLanes}function Yu(){W(ql,Ue),W(et,et.current)}function Nu(){Ue=ql.current,R(et),R(ql)}var Qe=0,J=null,an=null,En=null,Xl=!1,at=!1,Ra=!1,Il=0,Vt=0,tt=null,bd=0;function An(){throw Error(g(321))}function Lu(n,e){if(e===null)return!1;for(var a=0;a<e.length&&a<n.length;a++)if(!$n(n[a],e[a]))return!1;return!0}function Ku(n,e,a,t,l,i){return Qe=i,J=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,S.H=n===null||n.memoizedState===null?as:ts,Ra=!1,i=a(t,l),Ra=!1,at&&(i=vc(e,a,t,l)),bc(n),i}function bc(n){S.H=ni;var e=an!==null&&an.next!==null;if(Qe=0,En=an=J=null,Xl=!1,Vt=0,tt=null,e)throw Error(g(300));n===null||Bn||(n=n.dependencies,n!==null&&_l(n)&&(Bn=!0))}function vc(n,e,a,t){J=n;var l=0;do{if(at&&(tt=null),Vt=0,at=!1,25<=l)throw Error(g(301));if(l+=1,En=an=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=Bd,i=e(a,t)}while(at);return i}function vd(){var n=S.H,e=n.useState()[0];return e=typeof e.then=="function"?qt(e):e,n=n.useState()[0],(an!==null?an.memoizedState:null)!==n&&(J.flags|=1024),e}function zu(){var n=Il!==0;return Il=0,n}function Gu(n,e,a){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a}function Cu(n){if(Xl){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Xl=!1}Qe=0,En=an=J=null,at=!1,Vt=Il=0,tt=null}function xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?J.memoizedState=En=n:En=En.next=n,En}function bn(){if(an===null){var n=J.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var e=En===null?J.memoizedState:En.next;if(e!==null)En=e,an=n;else{if(n===null)throw J.alternate===null?Error(g(467)):Error(g(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},En===null?J.memoizedState=En=n:En=En.next=n}return En}function wu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qt(n){var e=Vt;return Vt+=1,tt===null&&(tt=[]),n=mc(tt,n,e),e=J,(En===null?e.memoizedState:En.next)===null&&(e=e.alternate,S.H=e===null||e.memoizedState===null?as:ts),n}function Zl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return qt(n);if(n.$$typeof===mn)return wn(n)}throw Error(g(438,String(n)))}function ku(n){var e=null,a=J.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var t=J.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(e={data:t.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=wu(),J.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(n),t=0;t<n;t++)a[t]=Ka;return e.index++,a}function Ke(n,e){return typeof e=="function"?e(n):e}function Ql(n){var e=bn();return Uu(e,an,n)}function Uu(n,e,a){var t=n.queue;if(t===null)throw Error(g(311));t.lastRenderedReducer=a;var l=n.baseQueue,i=t.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}e.baseQueue=l=i,t.pending=null}if(i=n.baseState,l===null)n.memoizedState=i;else{e=l.next;var o=u=null,r=null,d=e,A=!1;do{var b=d.lane&-536870913;if(b!==d.lane?(X&b)===b:(Qe&b)===b){var m=d.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),b===$a&&(A=!0);else if((Qe&m)===m){d=d.next,m===$a&&(A=!0);continue}else b={lane:0,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(o=r=b,u=i):r=r.next=b,J.lanes|=m,ta|=m;b=d.action,Ra&&a(i,b),i=d.hasEagerState?d.eagerState:a(i,b)}else m={lane:b,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(o=r=m,u=i):r=r.next=m,J.lanes|=b,ta|=b;d=d.next}while(d!==null&&d!==e);if(r===null?u=i:r.next=o,!$n(i,n.memoizedState)&&(Bn=!0,A&&(a=nt,a!==null)))throw a;n.memoizedState=i,n.baseState=u,n.baseQueue=r,t.lastRenderedState=i}return l===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function _u(n){var e=bn(),a=e.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=n;var t=a.dispatch,l=a.pending,i=e.memoizedState;if(l!==null){a.pending=null;var u=l=l.next;do i=n(i,u.action),u=u.next;while(u!==l);$n(i,e.memoizedState)||(Bn=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,t]}function Tc(n,e,a){var t=J,l=bn(),i=F;if(i){if(a===void 0)throw Error(g(407));a=a()}else a=e();var u=!$n((an||l).memoizedState,a);u&&(l.memoizedState=a,Bn=!0),l=l.queue;var o=pc.bind(null,t,l,n);if(Xt(2048,8,o,[n]),l.getSnapshot!==e||u||En!==null&&En.memoizedState.tag&1){if(t.flags|=2048,lt(9,Fl(),Wc.bind(null,t,l,a,e),null),cn===null)throw Error(g(349));i||(Qe&124)!==0||Oc(t,e,a)}return a}function Oc(n,e,a){n.flags|=16384,n={getSnapshot:e,value:a},e=J.updateQueue,e===null?(e=wu(),J.updateQueue=e,e.stores=[n]):(a=e.stores,a===null?e.stores=[n]:a.push(n))}function Wc(n,e,a,t){e.value=a,e.getSnapshot=t,Hc(e)&&Bc(n)}function pc(n,e,a){return a(function(){Hc(e)&&Bc(n)})}function Hc(n){var e=n.getSnapshot;n=n.value;try{var a=e();return!$n(n,a)}catch{return!0}}function Bc(n){var e=Za(n,2);e!==null&&ie(e,n,2)}function Ju(n){var e=xn();if(typeof n=="function"){var a=n;if(n=a(),Ra){xe(!0);try{a()}finally{xe(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:n},e}function Rc(n,e,a,t){return n.baseState=a,Uu(n,an,typeof t=="function"?t:Ke)}function Td(n,e,a,t,l){if($l(n))throw Error(g(485));if(n=e.action,n!==null){var i={payload:l,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};S.T!==null?a(!0):i.isTransition=!1,t(i),a=e.pending,a===null?(i.next=e.pending=i,Dc(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Dc(n,e){var a=e.action,t=e.payload,l=n.state;if(e.isTransition){var i=S.T,u={};S.T=u;try{var o=a(l,t),r=S.S;r!==null&&r(u,o),Mc(n,e,o)}catch(d){xu(n,e,d)}finally{S.T=i}}else try{i=a(l,t),Mc(n,e,i)}catch(d){xu(n,e,d)}}function Mc(n,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(t){Yc(n,e,t)},function(t){return xu(n,e,t)}):Yc(n,e,a)}function Yc(n,e,a){e.status="fulfilled",e.value=a,Nc(e),n.state=a,e=n.pending,e!==null&&(a=e.next,a===e?n.pending=null:(a=a.next,e.next=a,Dc(n,a)))}function xu(n,e,a){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do e.status="rejected",e.reason=a,Nc(e),e=e.next;while(e!==t)}n.action=null}function Nc(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Lc(n,e){return e}function Kc(n,e){if(F){var a=cn.formState;if(a!==null){n:{var t=J;if(F){if(hn){e:{for(var l=hn,i=ve;l.nodeType!==8;){if(!i){l=null;break e}if(l=Se(l.nextSibling),l===null){l=null;break e}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){hn=Se(l.nextSibling),t=l.data==="F!";break n}}Wa(t)}t=!1}t&&(e=a[0])}}return a=xn(),a.memoizedState=a.baseState=e,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lc,lastRenderedState:e},a.queue=t,a=$c.bind(null,J,t),t.dispatch=a,t=Ju(!1),i=Iu.bind(null,J,!1,t.queue),t=xn(),l={state:e,dispatch:null,action:n,pending:null},t.queue=l,a=Td.bind(null,J,l,i,a),l.dispatch=a,t.memoizedState=n,[e,a,!1]}function zc(n){var e=bn();return Gc(e,an,n)}function Gc(n,e,a){if(e=Uu(n,e,Lc)[0],n=Ql(Ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var t=qt(e)}catch(u){throw u===Ut?jl:u}else t=e;e=bn();var l=e.queue,i=l.dispatch;return a!==e.memoizedState&&(J.flags|=2048,lt(9,Fl(),Od.bind(null,l,a),null)),[t,i,n]}function Od(n,e){n.action=e}function Cc(n){var e=bn(),a=an;if(a!==null)return Gc(e,a,n);bn(),e=e.memoizedState,a=bn();var t=a.queue.dispatch;return a.memoizedState=n,[e,t,!1]}function lt(n,e,a,t){return n={tag:n,create:a,deps:t,inst:e,next:null},e=J.updateQueue,e===null&&(e=wu(),J.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=n.next=n:(t=a.next,a.next=n,n.next=t,e.lastEffect=n),n}function Fl(){return{destroy:void 0,resource:void 0}}function wc(){return bn().memoizedState}function Pl(n,e,a,t){var l=xn();t=t===void 0?null:t,J.flags|=n,l.memoizedState=lt(1|e,Fl(),a,t)}function Xt(n,e,a,t){var l=bn();t=t===void 0?null:t;var i=l.memoizedState.inst;an!==null&&t!==null&&Lu(t,an.memoizedState.deps)?l.memoizedState=lt(e,i,a,t):(J.flags|=n,l.memoizedState=lt(1|e,i,a,t))}function kc(n,e){Pl(8390656,8,n,e)}function Uc(n,e){Xt(2048,8,n,e)}function _c(n,e){return Xt(4,2,n,e)}function Jc(n,e){return Xt(4,4,n,e)}function xc(n,e){if(typeof e=="function"){n=n();var a=e(n);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function jc(n,e,a){a=a!=null?a.concat([n]):null,Xt(4,4,xc.bind(null,e,n),a)}function ju(){}function Vc(n,e){var a=bn();e=e===void 0?null:e;var t=a.memoizedState;return e!==null&&Lu(e,t[1])?t[0]:(a.memoizedState=[n,e],n)}function qc(n,e){var a=bn();e=e===void 0?null:e;var t=a.memoizedState;if(e!==null&&Lu(e,t[1]))return t[0];if(t=n(),Ra){xe(!0);try{n()}finally{xe(!1)}}return a.memoizedState=[t,e],t}function Vu(n,e,a){return a===void 0||(Qe&1073741824)!==0?n.memoizedState=e:(n.memoizedState=a,n=Zs(),J.lanes|=n,ta|=n,a)}function Xc(n,e,a,t){return $n(a,e)?a:et.current!==null?(n=Vu(n,a,t),$n(n,e)||(Bn=!0),n):(Qe&42)===0?(Bn=!0,n.memoizedState=a):(n=Zs(),J.lanes|=n,ta|=n,e)}function Ic(n,e,a,t,l){var i=p.p;p.p=i!==0&&8>i?i:8;var u=S.T,o={};S.T=o,Iu(n,!1,e,a);try{var r=l(),d=S.S;if(d!==null&&d(o,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var A=Ed(r,t);It(n,e,A,le(n))}else It(n,e,t,le(n))}catch(b){It(n,e,{then:function(){},status:"rejected",reason:b},le())}finally{p.p=i,S.T=u}}function Wd(){}function qu(n,e,a,t){if(n.tag!==5)throw Error(g(476));var l=Zc(n).queue;Ic(n,l,e,C,a===null?Wd:function(){return Qc(n),a(t)})}function Zc(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:C,baseState:C,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:C},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ke,lastRenderedState:a},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Qc(n){var e=Zc(n).next.queue;It(n,e,{},le())}function Xu(){return wn(yl)}function Fc(){return bn().memoizedState}function Pc(){return bn().memoizedState}function pd(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var a=le();n=Ie(a);var t=Ze(e,n,a);t!==null&&(ie(t,e,a),Jt(t,e,a)),e={cache:Ou()},n.payload=e;return}e=e.return}}function Hd(n,e,a){var t=le();a={lane:t,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},$l(n)?ns(e,a):(a=du(n,e,a,t),a!==null&&(ie(a,n,t),es(a,e,t)))}function $c(n,e,a){var t=le();It(n,e,a,t)}function It(n,e,a,t){var l={lane:t,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if($l(n))ns(e,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,o=i(u,a);if(l.hasEagerState=!0,l.eagerState=o,$n(o,u))return Gl(n,e,l,0),cn===null&&zl(),!1}catch{}finally{}if(a=du(n,e,l,t),a!==null)return ie(a,n,t),es(a,e,t),!0}return!1}function Iu(n,e,a,t){if(t={lane:2,revertLane:Bo(),action:t,hasEagerState:!1,eagerState:null,next:null},$l(n)){if(e)throw Error(g(479))}else e=du(n,a,t,2),e!==null&&ie(e,n,2)}function $l(n){var e=n.alternate;return n===J||e!==null&&e===J}function ns(n,e){at=Xl=!0;var a=n.pending;a===null?e.next=e:(e.next=a.next,a.next=e),n.pending=e}function es(n,e,a){if((a&4194048)!==0){var t=e.lanes;t&=n.pendingLanes,a|=t,e.lanes=a,cr(n,a)}}var ni={readContext:wn,use:Zl,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useLayoutEffect:An,useInsertionEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useSyncExternalStore:An,useId:An,useHostTransitionStatus:An,useFormState:An,useActionState:An,useOptimistic:An,useMemoCache:An,useCacheRefresh:An},as={readContext:wn,use:Zl,useCallback:function(n,e){return xn().memoizedState=[n,e===void 0?null:e],n},useContext:wn,useEffect:kc,useImperativeHandle:function(n,e,a){a=a!=null?a.concat([n]):null,Pl(4194308,4,xc.bind(null,e,n),a)},useLayoutEffect:function(n,e){return Pl(4194308,4,n,e)},useInsertionEffect:function(n,e){Pl(4,2,n,e)},useMemo:function(n,e){var a=xn();e=e===void 0?null:e;var t=n();if(Ra){xe(!0);try{n()}finally{xe(!1)}}return a.memoizedState=[t,e],t},useReducer:function(n,e,a){var t=xn();if(a!==void 0){var l=a(e);if(Ra){xe(!0);try{a(e)}finally{xe(!1)}}}else l=e;return t.memoizedState=t.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},t.queue=n,n=n.dispatch=Hd.bind(null,J,n),[t.memoizedState,n]},useRef:function(n){var e=xn();return n={current:n},e.memoizedState=n},useState:function(n){n=Ju(n);var e=n.queue,a=$c.bind(null,J,e);return e.dispatch=a,[n.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(n,e){var a=xn();return Vu(a,n,e)},useTransition:function(){var n=Ju(!1);return n=Ic.bind(null,J,n.queue,!0,!1),xn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,a){var t=J,l=xn();if(F){if(a===void 0)throw Error(g(407));a=a()}else{if(a=e(),cn===null)throw Error(g(349));(X&124)!==0||Oc(t,e,a)}l.memoizedState=a;var i={value:a,getSnapshot:e};return l.queue=i,kc(pc.bind(null,t,i,n),[n]),t.flags|=2048,lt(9,Fl(),Wc.bind(null,t,i,a,e),null),a},useId:function(){var n=xn(),e=cn.identifierPrefix;if(F){var a=Ye,t=Me;a=(t&~(1<<32-Pn(t)-1)).toString(32)+a,e="«"+e+"R"+a,a=Il++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=bd++,e="«"+e+"r"+a.toString(32)+"»";return n.memoizedState=e},useHostTransitionStatus:Xu,useFormState:Kc,useActionState:Kc,useOptimistic:function(n){var e=xn();e.memoizedState=e.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Iu.bind(null,J,!0,a),a.dispatch=e,[n,e]},useMemoCache:ku,useCacheRefresh:function(){return xn().memoizedState=pd.bind(null,J)}},ts={readContext:wn,use:Zl,useCallback:Vc,useContext:wn,useEffect:Uc,useImperativeHandle:jc,useInsertionEffect:_c,useLayoutEffect:Jc,useMemo:qc,useReducer:Ql,useRef:wc,useState:function(){return Ql(Ke)},useDebugValue:ju,useDeferredValue:function(n,e){var a=bn();return Xc(a,an.memoizedState,n,e)},useTransition:function(){var n=Ql(Ke)[0],e=bn().memoizedState;return[typeof n=="boolean"?n:qt(n),e]},useSyncExternalStore:Tc,useId:Fc,useHostTransitionStatus:Xu,useFormState:zc,useActionState:zc,useOptimistic:function(n,e){var a=bn();return Rc(a,an,n,e)},useMemoCache:ku,useCacheRefresh:Pc},Bd={readContext:wn,use:Zl,useCallback:Vc,useContext:wn,useEffect:Uc,useImperativeHandle:jc,useInsertionEffect:_c,useLayoutEffect:Jc,useMemo:qc,useReducer:_u,useRef:wc,useState:function(){return _u(Ke)},useDebugValue:ju,useDeferredValue:function(n,e){var a=bn();return an===null?Vu(a,n,e):Xc(a,an.memoizedState,n,e)},useTransition:function(){var n=_u(Ke)[0],e=bn().memoizedState;return[typeof n=="boolean"?n:qt(n),e]},useSyncExternalStore:Tc,useId:Fc,useHostTransitionStatus:Xu,useFormState:Cc,useActionState:Cc,useOptimistic:function(n,e){var a=bn();return an!==null?Rc(a,an,n,e):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Pc},it=null,Zt=0;function ei(n){var e=Zt;return Zt+=1,it===null&&(it=[]),mc(it,n,e)}function Qt(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function ai(n,e){throw e.$$typeof===un?Error(g(525)):(n=Object.prototype.toString.call(e),Error(g(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function ls(n){var e=n._init;return e(n._payload)}function is(n){function e(f,s){if(n){var y=f.deletions;y===null?(f.deletions=[s],f.flags|=16):y.push(s)}}function a(f,s){if(!n)return null;for(;s!==null;)e(f,s),s=s.sibling;return null}function t(f){for(var s=new Map;f!==null;)f.key!==null?s.set(f.key,f):s.set(f.index,f),f=f.sibling;return s}function l(f,s){return f=De(f,s),f.index=0,f.sibling=null,f}function i(f,s,y){return f.index=y,n?(y=f.alternate,y!==null?(y=y.index,y<s?(f.flags|=67108866,s):y):(f.flags|=67108866,s)):(f.flags|=1048576,s)}function u(f){return n&&f.alternate===null&&(f.flags|=67108866),f}function o(f,s,y,E){return s===null||s.tag!==6?(s=hu(y,f.mode,E),s.return=f,s):(s=l(s,y),s.return=f,s)}function r(f,s,y,E){var D=y.type;return D===Mn?A(f,s,y.props.children,E,y.key):s!==null&&(s.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Zn&&ls(D)===s.type)?(s=l(s,y.props),Qt(s,y),s.return=f,s):(s=wl(y.type,y.key,y.props,null,f.mode,E),Qt(s,y),s.return=f,s)}function d(f,s,y,E){return s===null||s.tag!==4||s.stateNode.containerInfo!==y.containerInfo||s.stateNode.implementation!==y.implementation?(s=gu(y,f.mode,E),s.return=f,s):(s=l(s,y.children||[]),s.return=f,s)}function A(f,s,y,E,D){return s===null||s.tag!==7?(s=ba(y,f.mode,E,D),s.return=f,s):(s=l(s,y),s.return=f,s)}function b(f,s,y){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=hu(""+s,f.mode,y),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case en:return y=wl(s.type,s.key,s.props,null,f.mode,y),Qt(y,s),y.return=f,y;case Wn:return s=gu(s,f.mode,y),s.return=f,s;case Zn:var E=s._init;return s=E(s._payload),b(f,s,y)}if(Gn(s)||zn(s))return s=ba(s,f.mode,y,null),s.return=f,s;if(typeof s.then=="function")return b(f,ei(s),y);if(s.$$typeof===mn)return b(f,Jl(f,s),y);ai(f,s)}return null}function m(f,s,y,E){var D=s!==null?s.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return D!==null?null:o(f,s,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case en:return y.key===D?r(f,s,y,E):null;case Wn:return y.key===D?d(f,s,y,E):null;case Zn:return D=y._init,y=D(y._payload),m(f,s,y,E)}if(Gn(y)||zn(y))return D!==null?null:A(f,s,y,E,null);if(typeof y.then=="function")return m(f,s,ei(y),E);if(y.$$typeof===mn)return m(f,s,Jl(f,y),E);ai(f,y)}return null}function h(f,s,y,E,D){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return f=f.get(y)||null,o(s,f,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case en:return f=f.get(E.key===null?y:E.key)||null,r(s,f,E,D);case Wn:return f=f.get(E.key===null?y:E.key)||null,d(s,f,E,D);case Zn:var x=E._init;return E=x(E._payload),h(f,s,y,E,D)}if(Gn(E)||zn(E))return f=f.get(y)||null,A(s,f,E,D,null);if(typeof E.then=="function")return h(f,s,y,ei(E),D);if(E.$$typeof===mn)return h(f,s,y,Jl(s,E),D);ai(s,E)}return null}function w(f,s,y,E){for(var D=null,x=null,M=s,G=s=0,Dn=null;M!==null&&G<y.length;G++){M.index>G?(Dn=M,M=null):Dn=M.sibling;var Q=m(f,M,y[G],E);if(Q===null){M===null&&(M=Dn);break}n&&M&&Q.alternate===null&&e(f,M),s=i(Q,s,G),x===null?D=Q:x.sibling=Q,x=Q,M=Dn}if(G===y.length)return a(f,M),F&&Ta(f,G),D;if(M===null){for(;G<y.length;G++)M=b(f,y[G],E),M!==null&&(s=i(M,s,G),x===null?D=M:x.sibling=M,x=M);return F&&Ta(f,G),D}for(M=t(M);G<y.length;G++)Dn=h(M,f,G,y[G],E),Dn!==null&&(n&&Dn.alternate!==null&&M.delete(Dn.key===null?G:Dn.key),s=i(Dn,s,G),x===null?D=Dn:x.sibling=Dn,x=Dn);return n&&M.forEach(function(ya){return e(f,ya)}),F&&Ta(f,G),D}function z(f,s,y,E){if(y==null)throw Error(g(151));for(var D=null,x=null,M=s,G=s=0,Dn=null,Q=y.next();M!==null&&!Q.done;G++,Q=y.next()){M.index>G?(Dn=M,M=null):Dn=M.sibling;var ya=m(f,M,Q.value,E);if(ya===null){M===null&&(M=Dn);break}n&&M&&ya.alternate===null&&e(f,M),s=i(ya,s,G),x===null?D=ya:x.sibling=ya,x=ya,M=Dn}if(Q.done)return a(f,M),F&&Ta(f,G),D;if(M===null){for(;!Q.done;G++,Q=y.next())Q=b(f,Q.value,E),Q!==null&&(s=i(Q,s,G),x===null?D=Q:x.sibling=Q,x=Q);return F&&Ta(f,G),D}for(M=t(M);!Q.done;G++,Q=y.next())Q=h(M,f,G,Q.value,E),Q!==null&&(n&&Q.alternate!==null&&M.delete(Q.key===null?G:Q.key),s=i(Q,s,G),x===null?D=Q:x.sibling=Q,x=Q);return n&&M.forEach(function(Rm){return e(f,Rm)}),F&&Ta(f,G),D}function ln(f,s,y,E){if(typeof y=="object"&&y!==null&&y.type===Mn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case en:n:{for(var D=y.key;s!==null;){if(s.key===D){if(D=y.type,D===Mn){if(s.tag===7){a(f,s.sibling),E=l(s,y.props.children),E.return=f,f=E;break n}}else if(s.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Zn&&ls(D)===s.type){a(f,s.sibling),E=l(s,y.props),Qt(E,y),E.return=f,f=E;break n}a(f,s);break}else e(f,s);s=s.sibling}y.type===Mn?(E=ba(y.props.children,f.mode,E,y.key),E.return=f,f=E):(E=wl(y.type,y.key,y.props,null,f.mode,E),Qt(E,y),E.return=f,f=E)}return u(f);case Wn:n:{for(D=y.key;s!==null;){if(s.key===D)if(s.tag===4&&s.stateNode.containerInfo===y.containerInfo&&s.stateNode.implementation===y.implementation){a(f,s.sibling),E=l(s,y.children||[]),E.return=f,f=E;break n}else{a(f,s);break}else e(f,s);s=s.sibling}E=gu(y,f.mode,E),E.return=f,f=E}return u(f);case Zn:return D=y._init,y=D(y._payload),ln(f,s,y,E)}if(Gn(y))return w(f,s,y,E);if(zn(y)){if(D=zn(y),typeof D!="function")throw Error(g(150));return y=D.call(y),z(f,s,y,E)}if(typeof y.then=="function")return ln(f,s,ei(y),E);if(y.$$typeof===mn)return ln(f,s,Jl(f,y),E);ai(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,s!==null&&s.tag===6?(a(f,s.sibling),E=l(s,y),E.return=f,f=E):(a(f,s),E=hu(y,f.mode,E),E.return=f,f=E),u(f)):a(f,s)}return function(f,s,y,E){try{Zt=0;var D=ln(f,s,y,E);return it=null,D}catch(M){if(M===Ut||M===jl)throw M;var x=ne(29,M,null,f.mode);return x.lanes=E,x.return=f,x}finally{}}}var ut=is(!0),us=is(!1),de=T(null),Te=null;function Fe(n){var e=n.alternate;W(Tn,Tn.current&1),W(de,n),Te===null&&(e===null||et.current!==null||e.memoizedState!==null)&&(Te=n)}function os(n){if(n.tag===22){if(W(Tn,Tn.current),W(de,n),Te===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(Te=n)}}else Pe()}function Pe(){W(Tn,Tn.current),W(de,de.current)}function ze(n){R(de),Te===n&&(Te=null),R(Tn)}var Tn=T(0);function ti(n){for(var e=n;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ko(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Zu(n,e,a,t){e=n.memoizedState,a=a(t,e),a=a==null?e:N({},e,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qu={enqueueSetState:function(n,e,a){n=n._reactInternals;var t=le(),l=Ie(t);l.payload=e,a!=null&&(l.callback=a),e=Ze(n,l,t),e!==null&&(ie(e,n,t),Jt(e,n,t))},enqueueReplaceState:function(n,e,a){n=n._reactInternals;var t=le(),l=Ie(t);l.tag=1,l.payload=e,a!=null&&(l.callback=a),e=Ze(n,l,t),e!==null&&(ie(e,n,t),Jt(e,n,t))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var a=le(),t=Ie(a);t.tag=2,e!=null&&(t.callback=e),e=Ze(n,t,a),e!==null&&(ie(e,n,a),Jt(e,n,a))}};function rs(n,e,a,t,l,i,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,i,u):e.prototype&&e.prototype.isPureReactComponent?!Nt(a,t)||!Nt(l,i):!0}function cs(n,e,a,t){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,t),e.state!==n&&Qu.enqueueReplaceState(e,e.state,null)}function Da(n,e){var a=e;if("ref"in e){a={};for(var t in e)t!=="ref"&&(a[t]=e[t])}if(n=n.defaultProps){a===e&&(a=N({},a));for(var l in n)a[l]===void 0&&(a[l]=n[l])}return a}var li=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function ss(n){li(n)}function fs(n){console.error(n)}function ys(n){li(n)}function ii(n,e){try{var a=n.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(t){setTimeout(function(){throw t})}}function ds(n,e,a){try{var t=n.onCaughtError;t(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Fu(n,e,a){return a=Ie(a),a.tag=3,a.payload={element:null},a.callback=function(){ii(n,e)},a}function ms(n){return n=Ie(n),n.tag=3,n}function hs(n,e,a,t){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=t.value;n.payload=function(){return l(i)},n.callback=function(){ds(e,a,t)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){ds(e,a,t),typeof l!="function"&&(la===null?la=new Set([this]):la.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})})}function Rd(n,e,a,t,l){if(a.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(e=a.alternate,e!==null&&Ct(e,a,l,!0),a=de.current,a!==null){switch(a.tag){case 13:return Te===null?To():a.alternate===null&&gn===0&&(gn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,t===Hu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([t]):e.add(t),Wo(n,t,l)),!1;case 22:return a.flags|=65536,t===Hu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([t])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([t]):a.add(t)),Wo(n,t,l)),!1}throw Error(g(435,a.tag))}return Wo(n,t,l),To(),!1}if(F)return e=de.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,t!==Eu&&(n=Error(g(422),{cause:t}),Gt(ce(n,a)))):(t!==Eu&&(e=Error(g(423),{cause:t}),Gt(ce(e,a))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,t=ce(t,a),l=Fu(n.stateNode,t,l),Du(n,l),gn!==4&&(gn=2)),!1;var i=Error(g(520),{cause:t});if(i=ce(i,a),tl===null?tl=[i]:tl.push(i),gn!==4&&(gn=2),e===null)return!0;t=ce(t,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,n=l&-l,a.lanes|=n,n=Fu(a.stateNode,t,n),Du(a,n),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(la===null||!la.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=ms(l),hs(l,n,a,t),Du(a,l),!1}a=a.return}while(a!==null);return!1}var gs=Error(g(461)),Bn=!1;function Nn(n,e,a,t){e.child=n===null?us(e,null,a,t):ut(e,n.child,a,t)}function As(n,e,a,t,l){a=a.render;var i=e.ref;if("ref"in t){var u={};for(var o in t)o!=="ref"&&(u[o]=t[o])}else u=t;return Ha(e),t=Ku(n,e,a,u,i,l),o=zu(),n!==null&&!Bn?(Gu(n,e,l),Ge(n,e,l)):(F&&o&&Au(e),e.flags|=1,Nn(n,e,t,l),e.child)}function Ss(n,e,a,t,l){if(n===null){var i=a.type;return typeof i=="function"&&!mu(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,Es(n,e,i,t,l)):(n=wl(a.type,null,t,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!io(n,l)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Nt,a(u,t)&&n.ref===e.ref)return Ge(n,e,l)}return e.flags|=1,n=De(i,t),n.ref=e.ref,n.return=e,e.child=n}function Es(n,e,a,t,l){if(n!==null){var i=n.memoizedProps;if(Nt(i,t)&&n.ref===e.ref)if(Bn=!1,e.pendingProps=t=i,io(n,l))(n.flags&131072)!==0&&(Bn=!0);else return e.lanes=n.lanes,Ge(n,e,l)}return Pu(n,e,a,t,l)}function bs(n,e,a){var t=e.pendingProps,l=t.children,i=n!==null?n.memoizedState:null;if(t.mode==="hidden"){if((e.flags&128)!==0){if(t=i!==null?i.baseLanes|a:a,n!==null){for(l=e.child=n.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;e.childLanes=i&~t}else e.childLanes=0,e.child=null;return vs(n,e,t,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&xl(e,i!==null?i.cachePool:null),i!==null?Ec(e,i):Yu(),os(e);else return e.lanes=e.childLanes=536870912,vs(n,e,i!==null?i.baseLanes|a:a,a)}else i!==null?(xl(e,i.cachePool),Ec(e,i),Pe(),e.memoizedState=null):(n!==null&&xl(e,null),Yu(),Pe());return Nn(n,e,l,a),e.child}function vs(n,e,a,t){var l=pu();return l=l===null?null:{parent:vn._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},n!==null&&xl(e,null),Yu(),os(e),n!==null&&Ct(n,e,t,!0),null}function ui(n,e){var a=e.ref;if(a===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(n===null||n.ref!==a)&&(e.flags|=4194816)}}function Pu(n,e,a,t,l){return Ha(e),a=Ku(n,e,a,t,void 0,l),t=zu(),n!==null&&!Bn?(Gu(n,e,l),Ge(n,e,l)):(F&&t&&Au(e),e.flags|=1,Nn(n,e,a,l),e.child)}function Ts(n,e,a,t,l,i){return Ha(e),e.updateQueue=null,a=vc(e,t,a,l),bc(n),t=zu(),n!==null&&!Bn?(Gu(n,e,i),Ge(n,e,i)):(F&&t&&Au(e),e.flags|=1,Nn(n,e,a,i),e.child)}function Os(n,e,a,t,l){if(Ha(e),e.stateNode===null){var i=Qa,u=a.contextType;typeof u=="object"&&u!==null&&(i=wn(u)),i=new a(t,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qu,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=t,i.state=e.memoizedState,i.refs={},Bu(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?wn(u):Qa,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Zu(e,a,u,t),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Qu.enqueueReplaceState(i,i.state,null),jt(e,t,i,l),xt(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),t=!0}else if(n===null){i=e.stateNode;var o=e.memoizedProps,r=Da(a,o);i.props=r;var d=i.context,A=a.contextType;u=Qa,typeof A=="object"&&A!==null&&(u=wn(A));var b=a.getDerivedStateFromProps;A=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,A||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||d!==u)&&cs(e,i,t,u),Xe=!1;var m=e.memoizedState;i.state=m,jt(e,t,i,l),xt(),d=e.memoizedState,o||m!==d||Xe?(typeof b=="function"&&(Zu(e,a,b,t),d=e.memoizedState),(r=Xe||rs(e,a,r,t,m,d,u))?(A||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=d),i.props=t,i.state=d,i.context=u,t=r):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{i=e.stateNode,Ru(n,e),u=e.memoizedProps,A=Da(a,u),i.props=A,b=e.pendingProps,m=i.context,d=a.contextType,r=Qa,typeof d=="object"&&d!==null&&(r=wn(d)),o=a.getDerivedStateFromProps,(d=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==b||m!==r)&&cs(e,i,t,r),Xe=!1,m=e.memoizedState,i.state=m,jt(e,t,i,l),xt();var h=e.memoizedState;u!==b||m!==h||Xe||n!==null&&n.dependencies!==null&&_l(n.dependencies)?(typeof o=="function"&&(Zu(e,a,o,t),h=e.memoizedState),(A=Xe||rs(e,a,A,t,m,h,r)||n!==null&&n.dependencies!==null&&_l(n.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,h,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,h,r)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=h),i.props=t,i.state=h,i.context=r,t=A):(typeof i.componentDidUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&m===n.memoizedState||(e.flags|=1024),t=!1)}return i=t,ui(n,e),t=(e.flags&128)!==0,i||t?(i=e.stateNode,a=t&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,n!==null&&t?(e.child=ut(e,n.child,null,l),e.child=ut(e,null,a,l)):Nn(n,e,a,l),e.memoizedState=i.state,n=e.child):n=Ge(n,e,l),n}function Ws(n,e,a,t){return zt(),e.flags|=256,Nn(n,e,a,t),e.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function no(n){return{baseLanes:n,cachePool:fc()}}function eo(n,e,a){return n=n!==null?n.childLanes&~a:0,e&&(n|=me),n}function ps(n,e,a){var t=e.pendingProps,l=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=n!==null&&n.memoizedState===null?!1:(Tn.current&2)!==0),u&&(l=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,n===null){if(F){if(l?Fe(e):Pe(),F){var o=hn,r;if(r=o){n:{for(r=o,o=ve;r.nodeType!==8;){if(!o){o=null;break n}if(r=Se(r.nextSibling),r===null){o=null;break n}}o=r}o!==null?(e.memoizedState={dehydrated:o,treeContext:va!==null?{id:Me,overflow:Ye}:null,retryLane:536870912,hydrationErrors:null},r=ne(18,null,null,0),r.stateNode=o,r.return=e,e.child=r,Un=e,hn=null,r=!0):r=!1}r||Wa(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return ko(o)?e.lanes=32:e.lanes=536870912,null;ze(e)}return o=t.children,t=t.fallback,l?(Pe(),l=e.mode,o=oi({mode:"hidden",children:o},l),t=ba(t,l,a,null),o.return=e,t.return=e,o.sibling=t,e.child=o,l=e.child,l.memoizedState=no(a),l.childLanes=eo(n,u,a),e.memoizedState=$u,t):(Fe(e),ao(e,o))}if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null)){if(i)e.flags&256?(Fe(e),e.flags&=-257,e=to(n,e,a)):e.memoizedState!==null?(Pe(),e.child=n.child,e.flags|=128,e=null):(Pe(),l=t.fallback,o=e.mode,t=oi({mode:"visible",children:t.children},o),l=ba(l,o,a,null),l.flags|=2,t.return=e,l.return=e,t.sibling=l,e.child=t,ut(e,n.child,null,a),t=e.child,t.memoizedState=no(a),t.childLanes=eo(n,u,a),e.memoizedState=$u,e=l);else if(Fe(e),ko(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var d=u.dgst;u=d,t=Error(g(419)),t.stack="",t.digest=u,Gt({value:t,source:null,stack:null}),e=to(n,e,a)}else if(Bn||Ct(n,e,a,!1),u=(a&n.childLanes)!==0,Bn||u){if(u=cn,u!==null&&(t=a&-a,t=(t&42)!==0?1:ki(t),t=(t&(u.suspendedLanes|a))!==0?0:t,t!==0&&t!==r.retryLane))throw r.retryLane=t,Za(n,t),ie(u,n,t),gs;o.data==="$?"||To(),e=to(n,e,a)}else o.data==="$?"?(e.flags|=192,e.child=n.child,e=null):(n=r.treeContext,hn=Se(o.nextSibling),Un=e,F=!0,Oa=null,ve=!1,n!==null&&(fe[ye++]=Me,fe[ye++]=Ye,fe[ye++]=va,Me=n.id,Ye=n.overflow,va=e),e=ao(e,t.children),e.flags|=4096);return e}return l?(Pe(),l=t.fallback,o=e.mode,r=n.child,d=r.sibling,t=De(r,{mode:"hidden",children:t.children}),t.subtreeFlags=r.subtreeFlags&65011712,d!==null?l=De(d,l):(l=ba(l,o,a,null),l.flags|=2),l.return=e,t.return=e,t.sibling=l,e.child=t,t=l,l=e.child,o=n.child.memoizedState,o===null?o=no(a):(r=o.cachePool,r!==null?(d=vn._currentValue,r=r.parent!==d?{parent:d,pool:d}:r):r=fc(),o={baseLanes:o.baseLanes|a,cachePool:r}),l.memoizedState=o,l.childLanes=eo(n,u,a),e.memoizedState=$u,t):(Fe(e),a=n.child,n=a.sibling,a=De(a,{mode:"visible",children:t.children}),a.return=e,a.sibling=null,n!==null&&(u=e.deletions,u===null?(e.deletions=[n],e.flags|=16):u.push(n)),e.child=a,e.memoizedState=null,a)}function ao(n,e){return e=oi({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function oi(n,e){return n=ne(22,n,null,e),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function to(n,e,a){return ut(e,n.child,null,a),n=ao(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Hs(n,e,a){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e),vu(n.return,e,a)}function lo(n,e,a,t,l){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:l}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=a,i.tailMode=l)}function Bs(n,e,a){var t=e.pendingProps,l=t.revealOrder,i=t.tail;if(Nn(n,e,t.children,a),t=Tn.current,(t&2)!==0)t=t&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hs(n,a,e);else if(n.tag===19)Hs(n,a,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}switch(W(Tn,t),l){case"forwards":for(a=e.child,l=null;a!==null;)n=a.alternate,n!==null&&ti(n)===null&&(l=a),a=a.sibling;a=l,a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null),lo(e,!1,l,a,i);break;case"backwards":for(a=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&ti(n)===null){e.child=l;break}n=l.sibling,l.sibling=a,a=l,l=n}lo(e,!0,a,null,i);break;case"together":lo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ge(n,e,a){if(n!==null&&(e.dependencies=n.dependencies),ta|=e.lanes,(a&e.childLanes)===0)if(n!==null){if(Ct(n,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(g(153));if(e.child!==null){for(n=e.child,a=De(n,n.pendingProps),e.child=a,a.return=e;n.sibling!==null;)n=n.sibling,a=a.sibling=De(n,n.pendingProps),a.return=e;a.sibling=null}return e.child}function io(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&_l(n)))}function Dd(n,e,a){switch(e.tag){case 3:fn(e,e.stateNode.containerInfo),qe(e,vn,n.memoizedState.cache),zt();break;case 27:case 5:Ki(e);break;case 4:fn(e,e.stateNode.containerInfo);break;case 10:qe(e,e.type,e.memoizedProps.value);break;case 13:var t=e.memoizedState;if(t!==null)return t.dehydrated!==null?(Fe(e),e.flags|=128,null):(a&e.child.childLanes)!==0?ps(n,e,a):(Fe(e),n=Ge(n,e,a),n!==null?n.sibling:null);Fe(e);break;case 19:var l=(n.flags&128)!==0;if(t=(a&e.childLanes)!==0,t||(Ct(n,e,a,!1),t=(a&e.childLanes)!==0),l){if(t)return Bs(n,e,a);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(Tn,Tn.current),t)break;return null;case 22:case 23:return e.lanes=0,bs(n,e,a);case 24:qe(e,vn,n.memoizedState.cache)}return Ge(n,e,a)}function Rs(n,e,a){if(n!==null)if(n.memoizedProps!==e.pendingProps)Bn=!0;else{if(!io(n,a)&&(e.flags&128)===0)return Bn=!1,Dd(n,e,a);Bn=(n.flags&131072)!==0}else Bn=!1,F&&(e.flags&1048576)!==0&&lc(e,Ul,e.index);switch(e.lanes=0,e.tag){case 16:n:{n=e.pendingProps;var t=e.elementType,l=t._init;if(t=l(t._payload),e.type=t,typeof t=="function")mu(t)?(n=Da(t,n),e.tag=1,e=Os(null,e,t,n,a)):(e.tag=0,e=Pu(null,e,t,n,a));else{if(t!=null){if(l=t.$$typeof,l===pn){e.tag=11,e=As(null,e,t,n,a);break n}else if(l===In){e.tag=14,e=Ss(null,e,t,n,a);break n}}throw e=ma(t)||t,Error(g(306,e,""))}}return e;case 0:return Pu(n,e,e.type,e.pendingProps,a);case 1:return t=e.type,l=Da(t,e.pendingProps),Os(n,e,t,l,a);case 3:n:{if(fn(e,e.stateNode.containerInfo),n===null)throw Error(g(387));t=e.pendingProps;var i=e.memoizedState;l=i.element,Ru(n,e),jt(e,t,null,a);var u=e.memoizedState;if(t=u.cache,qe(e,vn,t),t!==i.cache&&Tu(e,[vn],a,!0),xt(),t=u.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Ws(n,e,t,a);break n}else if(t!==l){l=ce(Error(g(424)),e),Gt(l),e=Ws(n,e,t,a);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(hn=Se(n.firstChild),Un=e,F=!0,Oa=null,ve=!0,a=us(e,null,t,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zt(),t===l){e=Ge(n,e,a);break n}Nn(n,e,t,a)}e=e.child}return e;case 26:return ui(n,e),n===null?(a=Lf(e.type,null,e.pendingProps,null))?e.memoizedState=a:F||(a=e.type,n=e.pendingProps,t=vi(k.current).createElement(a),t[Cn]=e,t[_n]=n,Kn(t,a,n),Hn(t),e.stateNode=t):e.memoizedState=Lf(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ki(e),n===null&&F&&(t=e.stateNode=Mf(e.type,e.pendingProps,k.current),Un=e,ve=!0,l=hn,oa(e.type)?(Uo=l,hn=Se(t.firstChild)):hn=l),Nn(n,e,e.pendingProps.children,a),ui(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&F&&((l=t=hn)&&(t=tm(t,e.type,e.pendingProps,ve),t!==null?(e.stateNode=t,Un=e,hn=Se(t.firstChild),ve=!1,l=!0):l=!1),l||Wa(e)),Ki(e),l=e.type,i=e.pendingProps,u=n!==null?n.memoizedProps:null,t=i.children,Go(l,i)?t=null:u!==null&&Go(l,u)&&(e.flags|=32),e.memoizedState!==null&&(l=Ku(n,e,vd,null,null,a),yl._currentValue=l),ui(n,e),Nn(n,e,t,a),e.child;case 6:return n===null&&F&&((n=a=hn)&&(a=lm(a,e.pendingProps,ve),a!==null?(e.stateNode=a,Un=e,hn=null,n=!0):n=!1),n||Wa(e)),null;case 13:return ps(n,e,a);case 4:return fn(e,e.stateNode.containerInfo),t=e.pendingProps,n===null?e.child=ut(e,null,t,a):Nn(n,e,t,a),e.child;case 11:return As(n,e,e.type,e.pendingProps,a);case 7:return Nn(n,e,e.pendingProps,a),e.child;case 8:return Nn(n,e,e.pendingProps.children,a),e.child;case 12:return Nn(n,e,e.pendingProps.children,a),e.child;case 10:return t=e.pendingProps,qe(e,e.type,t.value),Nn(n,e,t.children,a),e.child;case 9:return l=e.type._context,t=e.pendingProps.children,Ha(e),l=wn(l),t=t(l),e.flags|=1,Nn(n,e,t,a),e.child;case 14:return Ss(n,e,e.type,e.pendingProps,a);case 15:return Es(n,e,e.type,e.pendingProps,a);case 19:return Bs(n,e,a);case 31:return t=e.pendingProps,a=e.mode,t={mode:t.mode,children:t.children},n===null?(a=oi(t,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=De(n.child,t),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return bs(n,e,a);case 24:return Ha(e),t=wn(vn),n===null?(l=pu(),l===null&&(l=cn,i=Ou(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),e.memoizedState={parent:t,cache:l},Bu(e),qe(e,vn,l)):((n.lanes&a)!==0&&(Ru(n,e),jt(e,null,null,a),xt()),l=n.memoizedState,i=e.memoizedState,l.parent!==t?(l={parent:t,cache:t},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),qe(e,vn,t)):(t=i.cache,qe(e,vn,t),t!==l.cache&&Tu(e,[vn],a,!0))),Nn(n,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(g(156,e.tag))}function Ce(n){n.flags|=4}function Ds(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!wf(e)){if(e=de.current,e!==null&&((X&4194048)===X?Te!==null:(X&62914560)!==X&&(X&536870912)===0||e!==Te))throw _t=Hu,yc;n.flags|=8192}}function ri(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?or():536870912,n.lanes|=e,st|=e)}function Ft(n,e){if(!F)switch(n.tailMode){case"hidden":e=n.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function dn(n){var e=n.alternate!==null&&n.alternate.child===n.child,a=0,t=0;if(e)for(var l=n.child;l!==null;)a|=l.lanes|l.childLanes,t|=l.subtreeFlags&65011712,t|=l.flags&65011712,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)a|=l.lanes|l.childLanes,t|=l.subtreeFlags,t|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=t,n.childLanes=a,e}function Md(n,e,a){var t=e.pendingProps;switch(Su(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(e),null;case 1:return dn(e),null;case 3:return a=e.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Le(vn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Kt(e)?Ce(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,oc())),dn(e),null;case 26:return a=e.memoizedState,n===null?(Ce(e),a!==null?(dn(e),Ds(e,a)):(dn(e),e.flags&=-16777217)):a?a!==n.memoizedState?(Ce(e),dn(e),Ds(e,a)):(dn(e),e.flags&=-16777217):(n.memoizedProps!==t&&Ce(e),dn(e),e.flags&=-16777217),null;case 27:El(e),a=k.current;var l=e.type;if(n!==null&&e.stateNode!=null)n.memoizedProps!==t&&Ce(e);else{if(!t){if(e.stateNode===null)throw Error(g(166));return dn(e),null}n=K.current,Kt(e)?ic(e):(n=Mf(l,t,a),e.stateNode=n,Ce(e))}return dn(e),null;case 5:if(El(e),a=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==t&&Ce(e);else{if(!t){if(e.stateNode===null)throw Error(g(166));return dn(e),null}if(n=K.current,Kt(e))ic(e);else{switch(l=vi(k.current),n){case 1:n=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof t.is=="string"?l.createElement("select",{is:t.is}):l.createElement("select"),t.multiple?n.multiple=!0:t.size&&(n.size=t.size);break;default:n=typeof t.is=="string"?l.createElement(a,{is:t.is}):l.createElement(a)}}n[Cn]=e,n[_n]=t;n:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break n;for(;l.sibling===null;){if(l.return===null||l.return===e)break n;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=n;n:switch(Kn(n,a,t),a){case"button":case"input":case"select":case"textarea":n=!!t.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&Ce(e)}}return dn(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==t&&Ce(e);else{if(typeof t!="string"&&e.stateNode===null)throw Error(g(166));if(n=k.current,Kt(e)){if(n=e.stateNode,a=e.memoizedProps,t=null,l=Un,l!==null)switch(l.tag){case 27:case 5:t=l.memoizedProps}n[Cn]=e,n=!!(n.nodeValue===a||t!==null&&t.suppressHydrationWarning===!0||Of(n.nodeValue,a)),n||Wa(e)}else n=vi(n).createTextNode(t),n[Cn]=e,e.stateNode=n}return dn(e),null;case 13:if(t=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=Kt(e),t!==null&&t.dehydrated!==null){if(n===null){if(!l)throw Error(g(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));l[Cn]=e}else zt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;dn(e),l=!1}else l=oc(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(ze(e),e):(ze(e),null)}if(ze(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=t!==null,n=n!==null&&n.memoizedState!==null,a){t=e.child,l=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(l=t.alternate.memoizedState.cachePool.pool);var i=null;t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==l&&(t.flags|=2048)}return a!==n&&a&&(e.child.flags|=8192),ri(e,e.updateQueue),dn(e),null;case 4:return Je(),n===null&&Yo(e.stateNode.containerInfo),dn(e),null;case 10:return Le(e.type),dn(e),null;case 19:if(R(Tn),l=e.memoizedState,l===null)return dn(e),null;if(t=(e.flags&128)!==0,i=l.rendering,i===null)if(t)Ft(l,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(i=ti(n),i!==null){for(e.flags|=128,Ft(l,!1),n=i.updateQueue,e.updateQueue=n,ri(e,n),e.subtreeFlags=0,n=a,a=e.child;a!==null;)tc(a,n),a=a.sibling;return W(Tn,Tn.current&1|2),e.child}n=n.sibling}l.tail!==null&&be()>fi&&(e.flags|=128,t=!0,Ft(l,!1),e.lanes=4194304)}else{if(!t)if(n=ti(i),n!==null){if(e.flags|=128,t=!0,n=n.updateQueue,e.updateQueue=n,ri(e,n),Ft(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!F)return dn(e),null}else 2*be()-l.renderingStartTime>fi&&a!==536870912&&(e.flags|=128,t=!0,Ft(l,!1),e.lanes=4194304);l.isBackwards?(i.sibling=e.child,e.child=i):(n=l.last,n!==null?n.sibling=i:e.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=be(),e.sibling=null,n=Tn.current,W(Tn,t?n&1|2:n&1),e):(dn(e),null);case 22:case 23:return ze(e),Nu(),t=e.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(e.flags|=8192):t&&(e.flags|=8192),t?(a&536870912)!==0&&(e.flags&128)===0&&(dn(e),e.subtreeFlags&6&&(e.flags|=8192)):dn(e),a=e.updateQueue,a!==null&&ri(e,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(e.flags|=2048),n!==null&&R(Ba),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Le(vn),dn(e),null;case 25:return null;case 30:return null}throw Error(g(156,e.tag))}function Yd(n,e){switch(Su(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Le(vn),Je(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return El(e),null;case 13:if(ze(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(g(340));zt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return R(Tn),null;case 4:return Je(),null;case 10:return Le(e.type),null;case 22:case 23:return ze(e),Nu(),n!==null&&R(Ba),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Le(vn),null;case 25:return null;default:return null}}function Ms(n,e){switch(Su(e),e.tag){case 3:Le(vn),Je();break;case 26:case 27:case 5:El(e);break;case 4:Je();break;case 13:ze(e);break;case 19:R(Tn);break;case 10:Le(e.type);break;case 22:case 23:ze(e),Nu(),n!==null&&R(Ba);break;case 24:Le(vn)}}function Pt(n,e){try{var a=e.updateQueue,t=a!==null?a.lastEffect:null;if(t!==null){var l=t.next;a=l;do{if((a.tag&n)===n){t=void 0;var i=a.create,u=a.inst;t=i(),u.destroy=t}a=a.next}while(a!==l)}}catch(o){rn(e,e.return,o)}}function $e(n,e,a){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var i=l.next;t=i;do{if((t.tag&n)===n){var u=t.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,l=e;var r=a,d=o;try{d()}catch(A){rn(l,r,A)}}}t=t.next}while(t!==i)}}catch(A){rn(e,e.return,A)}}function Ys(n){var e=n.updateQueue;if(e!==null){var a=n.stateNode;try{Sc(e,a)}catch(t){rn(n,n.return,t)}}}function Ns(n,e,a){a.props=Da(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(t){rn(n,e,t)}}function $t(n,e){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof a=="function"?n.refCleanup=a(t):a.current=t}}catch(l){rn(n,e,l)}}function Oe(n,e){var a=n.ref,t=n.refCleanup;if(a!==null)if(typeof t=="function")try{t()}catch(l){rn(n,e,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){rn(n,e,l)}else a.current=null}function Ls(n){var e=n.type,a=n.memoizedProps,t=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break n;case"img":a.src?t.src=a.src:a.srcSet&&(t.srcset=a.srcSet)}}catch(l){rn(n,n.return,l)}}function uo(n,e,a){try{var t=n.stateNode;Pd(t,n.type,a,e),t[_n]=e}catch(l){rn(n,n.return,l)}}function Ks(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&oa(n.type)||n.tag===4}function oo(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Ks(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&oa(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ro(n,e,a){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(n),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=bi));else if(t!==4&&(t===27&&oa(n.type)&&(a=n.stateNode,e=null),n=n.child,n!==null))for(ro(n,e,a),n=n.sibling;n!==null;)ro(n,e,a),n=n.sibling}function ci(n,e,a){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?a.insertBefore(n,e):a.appendChild(n);else if(t!==4&&(t===27&&oa(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(ci(n,e,a),n=n.sibling;n!==null;)ci(n,e,a),n=n.sibling}function zs(n){var e=n.stateNode,a=n.memoizedProps;try{for(var t=n.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Kn(e,t,a),e[Cn]=n,e[_n]=a}catch(i){rn(n,n.return,i)}}var we=!1,Sn=!1,co=!1,Gs=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function Nd(n,e){if(n=n.containerInfo,Ko=Bi,n=Xr(n),ou(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else n:{a=(a=n.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var l=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break n}var u=0,o=-1,r=-1,d=0,A=0,b=n,m=null;e:for(;;){for(var h;b!==a||l!==0&&b.nodeType!==3||(o=u+l),b!==i||t!==0&&b.nodeType!==3||(r=u+t),b.nodeType===3&&(u+=b.nodeValue.length),(h=b.firstChild)!==null;)m=b,b=h;for(;;){if(b===n)break e;if(m===a&&++d===l&&(o=u),m===i&&++A===t&&(r=u),(h=b.nextSibling)!==null)break;b=m,m=b.parentNode}b=h}a=o===-1||r===-1?null:{start:o,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(zo={focusedElem:n,selectionRange:a},Bi=!1,Rn=e;Rn!==null;)if(e=Rn,n=e.child,(e.subtreeFlags&1024)!==0&&n!==null)n.return=e,Rn=n;else for(;Rn!==null;){switch(e=Rn,i=e.alternate,n=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&i!==null){n=void 0,a=e,l=i.memoizedProps,i=i.memoizedState,t=a.stateNode;try{var w=Da(a.type,l,a.elementType===a.type);n=t.getSnapshotBeforeUpdate(w,i),t.__reactInternalSnapshotBeforeUpdate=n}catch(z){rn(a,a.return,z)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,a=n.nodeType,a===9)wo(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":wo(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(g(163))}if(n=e.sibling,n!==null){n.return=e.return,Rn=n;break}Rn=e.return}}function Cs(n,e,a){var t=a.flags;switch(a.tag){case 0:case 11:case 15:na(n,a),t&4&&Pt(5,a);break;case 1:if(na(n,a),t&4)if(n=a.stateNode,e===null)try{n.componentDidMount()}catch(u){rn(a,a.return,u)}else{var l=Da(a.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(l,e,n.__reactInternalSnapshotBeforeUpdate)}catch(u){rn(a,a.return,u)}}t&64&&Ys(a),t&512&&$t(a,a.return);break;case 3:if(na(n,a),t&64&&(n=a.updateQueue,n!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Sc(n,e)}catch(u){rn(a,a.return,u)}}break;case 27:e===null&&t&4&&zs(a);case 26:case 5:na(n,a),e===null&&t&4&&Ls(a),t&512&&$t(a,a.return);break;case 12:na(n,a);break;case 13:na(n,a),t&4&&Us(n,a),t&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=_d.bind(null,a),im(n,a))));break;case 22:if(t=a.memoizedState!==null||we,!t){e=e!==null&&e.memoizedState!==null||Sn,l=we;var i=Sn;we=t,(Sn=e)&&!i?ea(n,a,(a.subtreeFlags&8772)!==0):na(n,a),we=l,Sn=i}break;case 30:break;default:na(n,a)}}function ws(n){var e=n.alternate;e!==null&&(n.alternate=null,ws(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Ji(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var yn=null,jn=!1;function ke(n,e,a){for(a=a.child;a!==null;)ks(n,e,a),a=a.sibling}function ks(n,e,a){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:Sn||Oe(a,e),ke(n,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||Oe(a,e);var t=yn,l=jn;oa(a.type)&&(yn=a.stateNode,jn=!1),ke(n,e,a),rl(a.stateNode),yn=t,jn=l;break;case 5:Sn||Oe(a,e);case 6:if(t=yn,l=jn,yn=null,ke(n,e,a),yn=t,jn=l,yn!==null)if(jn)try{(yn.nodeType===9?yn.body:yn.nodeName==="HTML"?yn.ownerDocument.body:yn).removeChild(a.stateNode)}catch(i){rn(a,e,i)}else try{yn.removeChild(a.stateNode)}catch(i){rn(a,e,i)}break;case 18:yn!==null&&(jn?(n=yn,Rf(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),gl(n)):Rf(yn,a.stateNode));break;case 4:t=yn,l=jn,yn=a.stateNode.containerInfo,jn=!0,ke(n,e,a),yn=t,jn=l;break;case 0:case 11:case 14:case 15:Sn||$e(2,a,e),Sn||$e(4,a,e),ke(n,e,a);break;case 1:Sn||(Oe(a,e),t=a.stateNode,typeof t.componentWillUnmount=="function"&&Ns(a,e,t)),ke(n,e,a);break;case 21:ke(n,e,a);break;case 22:Sn=(t=Sn)||a.memoizedState!==null,ke(n,e,a),Sn=t;break;default:ke(n,e,a)}}function Us(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{gl(n)}catch(a){rn(e,e.return,a)}}function Ld(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Gs),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Gs),e;default:throw Error(g(435,n.tag))}}function so(n,e){var a=Ld(n);e.forEach(function(t){var l=Jd.bind(null,n,t);a.has(t)||(a.add(t),t.then(l,l))})}function ee(n,e){var a=e.deletions;if(a!==null)for(var t=0;t<a.length;t++){var l=a[t],i=n,u=e,o=u;n:for(;o!==null;){switch(o.tag){case 27:if(oa(o.type)){yn=o.stateNode,jn=!1;break n}break;case 5:yn=o.stateNode,jn=!1;break n;case 3:case 4:yn=o.stateNode.containerInfo,jn=!0;break n}o=o.return}if(yn===null)throw Error(g(160));ks(i,u,l),yn=null,jn=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)_s(e,n),e=e.sibling}var Ae=null;function _s(n,e){var a=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ee(e,n),ae(n),t&4&&($e(3,n,n.return),Pt(3,n),$e(5,n,n.return));break;case 1:ee(e,n),ae(n),t&512&&(Sn||a===null||Oe(a,a.return)),t&64&&we&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:var l=Ae;if(ee(e,n),ae(n),t&512&&(Sn||a===null||Oe(a,a.return)),t&4){var i=a!==null?a.memoizedState:null;if(t=n.memoizedState,a===null)if(t===null)if(n.stateNode===null){n:{t=n.type,a=n.memoizedProps,l=l.ownerDocument||l;e:switch(t){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ot]||i[Cn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(t),l.head.insertBefore(i,l.querySelector("head > title"))),Kn(i,t,a),i[Cn]=n,Hn(i),t=i;break n;case"link":var u=Gf("link","href",l).get(t+(a.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(o,1);break e}}i=l.createElement(t),Kn(i,t,a),l.head.appendChild(i);break;case"meta":if(u=Gf("meta","content",l).get(t+(a.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(o,1);break e}}i=l.createElement(t),Kn(i,t,a),l.head.appendChild(i);break;default:throw Error(g(468,t))}i[Cn]=n,Hn(i),t=i}n.stateNode=t}else Cf(l,n.type,n.stateNode);else n.stateNode=zf(l,t,n.memoizedProps);else i!==t?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,t===null?Cf(l,n.type,n.stateNode):zf(l,t,n.memoizedProps)):t===null&&n.stateNode!==null&&uo(n,n.memoizedProps,a.memoizedProps)}break;case 27:ee(e,n),ae(n),t&512&&(Sn||a===null||Oe(a,a.return)),a!==null&&t&4&&uo(n,n.memoizedProps,a.memoizedProps);break;case 5:if(ee(e,n),ae(n),t&512&&(Sn||a===null||Oe(a,a.return)),n.flags&32){l=n.stateNode;try{Ja(l,"")}catch(h){rn(n,n.return,h)}}t&4&&n.stateNode!=null&&(l=n.memoizedProps,uo(n,l,a!==null?a.memoizedProps:l)),t&1024&&(co=!0);break;case 6:if(ee(e,n),ae(n),t&4){if(n.stateNode===null)throw Error(g(162));t=n.memoizedProps,a=n.stateNode;try{a.nodeValue=t}catch(h){rn(n,n.return,h)}}break;case 3:if(Wi=null,l=Ae,Ae=Ti(e.containerInfo),ee(e,n),Ae=l,ae(n),t&4&&a!==null&&a.memoizedState.isDehydrated)try{gl(e.containerInfo)}catch(h){rn(n,n.return,h)}co&&(co=!1,Js(n));break;case 4:t=Ae,Ae=Ti(n.stateNode.containerInfo),ee(e,n),ae(n),Ae=t;break;case 12:ee(e,n),ae(n);break;case 13:ee(e,n),ae(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ao=be()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,so(n,t)));break;case 22:l=n.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,d=we,A=Sn;if(we=d||l,Sn=A||r,ee(e,n),Sn=A,we=d,ae(n),t&8192)n:for(e=n.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(a===null||r||we||Sn||Ma(n)),a=null,e=n;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(i=r.stateNode,l)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=r.stateNode;var b=r.memoizedProps.style,m=b!=null&&b.hasOwnProperty("display")?b.display:null;o.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(h){rn(r,r.return,h)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=l?"":r.memoizedProps}catch(h){rn(r,r.return,h)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}t&4&&(t=n.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,so(n,a))));break;case 19:ee(e,n),ae(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,so(n,t)));break;case 30:break;case 21:break;default:ee(e,n),ae(n)}}function ae(n){var e=n.flags;if(e&2){try{for(var a,t=n.return;t!==null;){if(Ks(t)){a=t;break}t=t.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var l=a.stateNode,i=oo(n);ci(n,i,l);break;case 5:var u=a.stateNode;a.flags&32&&(Ja(u,""),a.flags&=-33);var o=oo(n);ci(n,o,u);break;case 3:case 4:var r=a.stateNode.containerInfo,d=oo(n);ro(n,d,r);break;default:throw Error(g(161))}}catch(A){rn(n,n.return,A)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Js(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Js(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function na(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Cs(n,e.alternate,e),e=e.sibling}function Ma(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:$e(4,e,e.return),Ma(e);break;case 1:Oe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Ns(e,e.return,a),Ma(e);break;case 27:rl(e.stateNode);case 26:case 5:Oe(e,e.return),Ma(e);break;case 22:e.memoizedState===null&&Ma(e);break;case 30:Ma(e);break;default:Ma(e)}n=n.sibling}}function ea(n,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var t=e.alternate,l=n,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:ea(l,i,a),Pt(4,i);break;case 1:if(ea(l,i,a),t=i,l=t.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(d){rn(t,t.return,d)}if(t=i,l=t.updateQueue,l!==null){var o=t.stateNode;try{var r=l.shared.hiddenCallbacks;if(r!==null)for(l.shared.hiddenCallbacks=null,l=0;l<r.length;l++)Ac(r[l],o)}catch(d){rn(t,t.return,d)}}a&&u&64&&Ys(i),$t(i,i.return);break;case 27:zs(i);case 26:case 5:ea(l,i,a),a&&t===null&&u&4&&Ls(i),$t(i,i.return);break;case 12:ea(l,i,a);break;case 13:ea(l,i,a),a&&u&4&&Us(l,i);break;case 22:i.memoizedState===null&&ea(l,i,a),$t(i,i.return);break;case 30:break;default:ea(l,i,a)}e=e.sibling}}function fo(n,e){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&wt(a))}function yo(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&wt(n))}function We(n,e,a,t){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xs(n,e,a,t),e=e.sibling}function xs(n,e,a,t){var l=e.flags;switch(e.tag){case 0:case 11:case 15:We(n,e,a,t),l&2048&&Pt(9,e);break;case 1:We(n,e,a,t);break;case 3:We(n,e,a,t),l&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&wt(n)));break;case 12:if(l&2048){We(n,e,a,t),n=e.stateNode;try{var i=e.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(r){rn(e,e.return,r)}}else We(n,e,a,t);break;case 13:We(n,e,a,t);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?We(n,e,a,t):nl(n,e):i._visibility&2?We(n,e,a,t):(i._visibility|=2,ot(n,e,a,t,(e.subtreeFlags&10256)!==0)),l&2048&&fo(u,e);break;case 24:We(n,e,a,t),l&2048&&yo(e.alternate,e);break;default:We(n,e,a,t)}}function ot(n,e,a,t,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=n,u=e,o=a,r=t,d=u.flags;switch(u.tag){case 0:case 11:case 15:ot(i,u,o,r,l),Pt(8,u);break;case 23:break;case 22:var A=u.stateNode;u.memoizedState!==null?A._visibility&2?ot(i,u,o,r,l):nl(i,u):(A._visibility|=2,ot(i,u,o,r,l)),l&&d&2048&&fo(u.alternate,u);break;case 24:ot(i,u,o,r,l),l&&d&2048&&yo(u.alternate,u);break;default:ot(i,u,o,r,l)}e=e.sibling}}function nl(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=n,t=e,l=t.flags;switch(t.tag){case 22:nl(a,t),l&2048&&fo(t.alternate,t);break;case 24:nl(a,t),l&2048&&yo(t.alternate,t);break;default:nl(a,t)}e=e.sibling}}var el=8192;function rt(n){if(n.subtreeFlags&el)for(n=n.child;n!==null;)js(n),n=n.sibling}function js(n){switch(n.tag){case 26:rt(n),n.flags&el&&n.memoizedState!==null&&Sm(Ae,n.memoizedState,n.memoizedProps);break;case 5:rt(n);break;case 3:case 4:var e=Ae;Ae=Ti(n.stateNode.containerInfo),rt(n),Ae=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=el,el=16777216,rt(n),el=e):rt(n));break;default:rt(n)}}function Vs(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function al(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var t=e[a];Rn=t,Xs(t,n)}Vs(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qs(n),n=n.sibling}function qs(n){switch(n.tag){case 0:case 11:case 15:al(n),n.flags&2048&&$e(9,n,n.return);break;case 3:al(n);break;case 12:al(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,si(n)):al(n);break;default:al(n)}}function si(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var t=e[a];Rn=t,Xs(t,n)}Vs(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:$e(8,e,e.return),si(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,si(e));break;default:si(e)}n=n.sibling}}function Xs(n,e){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:$e(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var t=a.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:wt(a.memoizedState.cache)}if(t=a.child,t!==null)t.return=a,Rn=t;else n:for(a=n;Rn!==null;){t=Rn;var l=t.sibling,i=t.return;if(ws(t),t===a){Rn=null;break n}if(l!==null){l.return=i,Rn=l;break n}Rn=i}}}var Kd={getCacheForType:function(n){var e=wn(vn),a=e.data.get(n);return a===void 0&&(a=n(),e.data.set(n,a)),a}},zd=typeof WeakMap=="function"?WeakMap:Map,$=0,cn=null,j=null,X=0,nn=0,te=null,aa=!1,ct=!1,mo=!1,Ue=0,gn=0,ta=0,Ya=0,ho=0,me=0,st=0,tl=null,Vn=null,go=!1,Ao=0,fi=1/0,yi=null,la=null,Ln=0,ia=null,ft=null,yt=0,So=0,Eo=null,Is=null,ll=0,bo=null;function le(){if(($&2)!==0&&X!==0)return X&-X;if(S.T!==null){var n=$a;return n!==0?n:Bo()}return sr()}function Zs(){me===0&&(me=(X&536870912)===0||F?ur():536870912);var n=de.current;return n!==null&&(n.flags|=32),me}function ie(n,e,a){(n===cn&&(nn===2||nn===9)||n.cancelPendingCommit!==null)&&(dt(n,0),ua(n,X,me,!1)),Tt(n,a),(($&2)===0||n!==cn)&&(n===cn&&(($&2)===0&&(Ya|=a),gn===4&&ua(n,X,me,!1)),pe(n))}function Qs(n,e,a){if(($&6)!==0)throw Error(g(327));var t=!a&&(e&124)===0&&(e&n.expiredLanes)===0||vt(n,e),l=t?wd(n,e):Oo(n,e,!0),i=t;do{if(l===0){ct&&!t&&ua(n,e,0,!1);break}else{if(a=n.current.alternate,i&&!Gd(a)){l=Oo(n,e,!1),i=!1;continue}if(l===2){if(i=e,n.errorRecoveryDisabledLanes&i)var u=0;else u=n.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;n:{var o=n;l=tl;var r=o.current.memoizedState.isDehydrated;if(r&&(dt(o,u).flags|=256),u=Oo(o,u,!1),u!==2){if(mo&&!r){o.errorRecoveryDisabledLanes|=i,Ya|=i,l=4;break n}i=Vn,Vn=l,i!==null&&(Vn===null?Vn=i:Vn.push.apply(Vn,i))}l=u}if(i=!1,l!==2)continue}}if(l===1){dt(n,0),ua(n,e,0,!0);break}n:{switch(t=n,i=l,i){case 0:case 1:throw Error(g(345));case 4:if((e&4194048)!==e)break;case 6:ua(t,e,me,!aa);break n;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(g(329))}if((e&62914560)===e&&(l=Ao+300-be(),10<l)){if(ua(t,e,me,!aa),Ol(t,0,!0)!==0)break n;t.timeoutHandle=Hf(Fs.bind(null,t,a,Vn,yi,go,e,me,Ya,st,aa,i,2,-0,0),l);break n}Fs(t,a,Vn,yi,go,e,me,Ya,st,aa,i,0,-0,0)}}break}while(!0);pe(n)}function Fs(n,e,a,t,l,i,u,o,r,d,A,b,m,h){if(n.timeoutHandle=-1,b=e.subtreeFlags,(b&8192||(b&16785408)===16785408)&&(fl={stylesheets:null,count:0,unsuspend:Am},js(e),b=Em(),b!==null)){n.cancelPendingCommit=b(lf.bind(null,n,e,i,a,t,l,u,o,r,A,1,m,h)),ua(n,i,u,!d);return}lf(n,e,i,a,t,l,u,o,r)}function Gd(n){for(var e=n;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var t=0;t<a.length;t++){var l=a[t],i=l.getSnapshot;l=l.value;try{if(!$n(i(),l))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ua(n,e,a,t){e&=~ho,e&=~Ya,n.suspendedLanes|=e,n.pingedLanes&=~e,t&&(n.warmLanes|=e),t=n.expirationTimes;for(var l=e;0<l;){var i=31-Pn(l),u=1<<i;t[i]=-1,l&=~u}a!==0&&rr(n,a,e)}function di(){return($&6)===0?(il(0),!1):!0}function vo(){if(j!==null){if(nn===0)var n=j.return;else n=j,Ne=pa=null,Cu(n),it=null,Zt=0,n=j;for(;n!==null;)Ms(n.alternate,n),n=n.return;j=null}}function dt(n,e){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,nm(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),vo(),cn=n,j=a=De(n.current,null),X=e,nn=0,te=null,aa=!1,ct=vt(n,e),mo=!1,st=me=ho=Ya=ta=gn=0,Vn=tl=null,go=!1,(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var l=31-Pn(t),i=1<<l;e|=n[l],t&=~i}return Ue=e,zl(),a}function Ps(n,e){J=null,S.H=ni,e===Ut||e===jl?(e=hc(),nn=3):e===yc?(e=hc(),nn=4):nn=e===gs?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,te=e,j===null&&(gn=1,ii(n,ce(e,n.current)))}function $s(){var n=S.H;return S.H=ni,n===null?ni:n}function nf(){var n=S.A;return S.A=Kd,n}function To(){gn=4,aa||(X&4194048)!==X&&de.current!==null||(ct=!0),(ta&134217727)===0&&(Ya&134217727)===0||cn===null||ua(cn,X,me,!1)}function Oo(n,e,a){var t=$;$|=2;var l=$s(),i=nf();(cn!==n||X!==e)&&(yi=null,dt(n,e)),e=!1;var u=gn;n:do try{if(nn!==0&&j!==null){var o=j,r=te;switch(nn){case 8:vo(),u=6;break n;case 3:case 2:case 9:case 6:de.current===null&&(e=!0);var d=nn;if(nn=0,te=null,mt(n,o,r,d),a&&ct){u=0;break n}break;default:d=nn,nn=0,te=null,mt(n,o,r,d)}}Cd(),u=gn;break}catch(A){Ps(n,A)}while(!0);return e&&n.shellSuspendCounter++,Ne=pa=null,$=t,S.H=l,S.A=i,j===null&&(cn=null,X=0,zl()),u}function Cd(){for(;j!==null;)ef(j)}function wd(n,e){var a=$;$|=2;var t=$s(),l=nf();cn!==n||X!==e?(yi=null,fi=be()+500,dt(n,e)):ct=vt(n,e);n:do try{if(nn!==0&&j!==null){e=j;var i=te;e:switch(nn){case 1:nn=0,te=null,mt(n,e,i,1);break;case 2:case 9:if(dc(i)){nn=0,te=null,af(e);break}e=function(){nn!==2&&nn!==9||cn!==n||(nn=7),pe(n)},i.then(e,e);break n;case 3:nn=7;break n;case 4:nn=5;break n;case 7:dc(i)?(nn=0,te=null,af(e)):(nn=0,te=null,mt(n,e,i,7));break;case 5:var u=null;switch(j.tag){case 26:u=j.memoizedState;case 5:case 27:var o=j;if(!u||wf(u)){nn=0,te=null;var r=o.sibling;if(r!==null)j=r;else{var d=o.return;d!==null?(j=d,mi(d)):j=null}break e}}nn=0,te=null,mt(n,e,i,5);break;case 6:nn=0,te=null,mt(n,e,i,6);break;case 8:vo(),gn=6;break n;default:throw Error(g(462))}}kd();break}catch(A){Ps(n,A)}while(!0);return Ne=pa=null,S.H=t,S.A=l,$=a,j!==null?0:(cn=null,X=0,zl(),gn)}function kd(){for(;j!==null&&!oy();)ef(j)}function ef(n){var e=Rs(n.alternate,n,Ue);n.memoizedProps=n.pendingProps,e===null?mi(n):j=e}function af(n){var e=n,a=e.alternate;switch(e.tag){case 15:case 0:e=Ts(a,e,e.pendingProps,e.type,void 0,X);break;case 11:e=Ts(a,e,e.pendingProps,e.type.render,e.ref,X);break;case 5:Cu(e);default:Ms(a,e),e=j=tc(e,Ue),e=Rs(a,e,Ue)}n.memoizedProps=n.pendingProps,e===null?mi(n):j=e}function mt(n,e,a,t){Ne=pa=null,Cu(e),it=null,Zt=0;var l=e.return;try{if(Rd(n,l,e,a,X)){gn=1,ii(n,ce(a,n.current)),j=null;return}}catch(i){if(l!==null)throw j=l,i;gn=1,ii(n,ce(a,n.current)),j=null;return}e.flags&32768?(F||t===1?n=!0:ct||(X&536870912)!==0?n=!1:(aa=n=!0,(t===2||t===9||t===3||t===6)&&(t=de.current,t!==null&&t.tag===13&&(t.flags|=16384))),tf(e,n)):mi(e)}function mi(n){var e=n;do{if((e.flags&32768)!==0){tf(e,aa);return}n=e.return;var a=Md(e.alternate,e,Ue);if(a!==null){j=a;return}if(e=e.sibling,e!==null){j=e;return}j=e=n}while(e!==null);gn===0&&(gn=5)}function tf(n,e){do{var a=Yd(n.alternate,n);if(a!==null){a.flags&=32767,j=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(n=n.sibling,n!==null)){j=n;return}j=n=a}while(n!==null);gn=6,j=null}function lf(n,e,a,t,l,i,u,o,r){n.cancelPendingCommit=null;do hi();while(Ln!==0);if(($&6)!==0)throw Error(g(327));if(e!==null){if(e===n.current)throw Error(g(177));if(i=e.lanes|e.childLanes,i|=yu,Ay(n,a,i,u,o,r),n===cn&&(j=cn=null,X=0),ft=e,ia=n,yt=a,So=i,Eo=l,Is=t,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,xd(bl,function(){return sf(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||t){t=S.T,S.T=null,l=p.p,p.p=2,u=$,$|=4;try{Nd(n,e,a)}finally{$=u,p.p=l,S.T=t}}Ln=1,uf(),of(),rf()}}function uf(){if(Ln===1){Ln=0;var n=ia,e=ft,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var t=p.p;p.p=2;var l=$;$|=4;try{_s(e,n);var i=zo,u=Xr(n.containerInfo),o=i.focusedElem,r=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&qr(o.ownerDocument.documentElement,o)){if(r!==null&&ou(o)){var d=r.start,A=r.end;if(A===void 0&&(A=d),"selectionStart"in o)o.selectionStart=d,o.selectionEnd=Math.min(A,o.value.length);else{var b=o.ownerDocument||document,m=b&&b.defaultView||window;if(m.getSelection){var h=m.getSelection(),w=o.textContent.length,z=Math.min(r.start,w),ln=r.end===void 0?z:Math.min(r.end,w);!h.extend&&z>ln&&(u=ln,ln=z,z=u);var f=Vr(o,z),s=Vr(o,ln);if(f&&s&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==s.node||h.focusOffset!==s.offset)){var y=b.createRange();y.setStart(f.node,f.offset),h.removeAllRanges(),z>ln?(h.addRange(y),h.extend(s.node,s.offset)):(y.setEnd(s.node,s.offset),h.addRange(y))}}}}for(b=[],h=o;h=h.parentNode;)h.nodeType===1&&b.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<b.length;o++){var E=b[o];E.element.scrollLeft=E.left,E.element.scrollTop=E.top}}Bi=!!Ko,zo=Ko=null}finally{$=l,p.p=t,S.T=a}}n.current=e,Ln=2}}function of(){if(Ln===2){Ln=0;var n=ia,e=ft,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var t=p.p;p.p=2;var l=$;$|=4;try{Cs(n,e.alternate,e)}finally{$=l,p.p=t,S.T=a}}Ln=3}}function rf(){if(Ln===4||Ln===3){Ln=0,ry();var n=ia,e=ft,a=yt,t=Is;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ln=5:(Ln=0,ft=ia=null,cf(n,n.pendingLanes));var l=n.pendingLanes;if(l===0&&(la=null),Ui(a),e=e.stateNode,Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(bt,e,void 0,(e.current.flags&128)===128)}catch{}if(t!==null){e=S.T,l=p.p,p.p=2,S.T=null;try{for(var i=n.onRecoverableError,u=0;u<t.length;u++){var o=t[u];i(o.value,{componentStack:o.stack})}}finally{S.T=e,p.p=l}}(yt&3)!==0&&hi(),pe(n),l=n.pendingLanes,(a&4194090)!==0&&(l&42)!==0?n===bo?ll++:(ll=0,bo=n):ll=0,il(0)}}function cf(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,wt(e)))}function hi(n){return uf(),of(),rf(),sf()}function sf(){if(Ln!==5)return!1;var n=ia,e=So;So=0;var a=Ui(yt),t=S.T,l=p.p;try{p.p=32>a?32:a,S.T=null,a=Eo,Eo=null;var i=ia,u=yt;if(Ln=0,ft=ia=null,yt=0,($&6)!==0)throw Error(g(331));var o=$;if($|=4,qs(i.current),xs(i,i.current,u,a),$=o,il(0,!1),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(bt,i)}catch{}return!0}finally{p.p=l,S.T=t,cf(n,e)}}function ff(n,e,a){e=ce(a,e),e=Fu(n.stateNode,e,2),n=Ze(n,e,2),n!==null&&(Tt(n,2),pe(n))}function rn(n,e,a){if(n.tag===3)ff(n,n,a);else for(;e!==null;){if(e.tag===3){ff(e,n,a);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(la===null||!la.has(t))){n=ce(a,n),a=ms(2),t=Ze(e,a,2),t!==null&&(hs(a,t,e,n),Tt(t,2),pe(t));break}}e=e.return}}function Wo(n,e,a){var t=n.pingCache;if(t===null){t=n.pingCache=new zd;var l=new Set;t.set(e,l)}else l=t.get(e),l===void 0&&(l=new Set,t.set(e,l));l.has(a)||(mo=!0,l.add(a),n=Ud.bind(null,n,e,a),e.then(n,n))}function Ud(n,e,a){var t=n.pingCache;t!==null&&t.delete(e),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,cn===n&&(X&a)===a&&(gn===4||gn===3&&(X&62914560)===X&&300>be()-Ao?($&2)===0&&dt(n,0):ho|=a,st===X&&(st=0)),pe(n)}function yf(n,e){e===0&&(e=or()),n=Za(n,e),n!==null&&(Tt(n,e),pe(n))}function _d(n){var e=n.memoizedState,a=0;e!==null&&(a=e.retryLane),yf(n,a)}function Jd(n,e){var a=0;switch(n.tag){case 13:var t=n.stateNode,l=n.memoizedState;l!==null&&(a=l.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(g(314))}t!==null&&t.delete(e),yf(n,a)}function xd(n,e){return Gi(n,e)}var gi=null,ht=null,po=!1,Ai=!1,Ho=!1,Na=0;function pe(n){n!==ht&&n.next===null&&(ht===null?gi=ht=n:ht=ht.next=n),Ai=!0,po||(po=!0,Vd())}function il(n,e){if(!Ho&&Ai){Ho=!0;do for(var a=!1,t=gi;t!==null;){if(n!==0){var l=t.pendingLanes;if(l===0)var i=0;else{var u=t.suspendedLanes,o=t.pingedLanes;i=(1<<31-Pn(42|n)+1)-1,i&=l&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,gf(t,i))}else i=X,i=Ol(t,t===cn?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(i&3)===0||vt(t,i)||(a=!0,gf(t,i));t=t.next}while(a);Ho=!1}}function jd(){df()}function df(){Ai=po=!1;var n=0;Na!==0&&($d()&&(n=Na),Na=0);for(var e=be(),a=null,t=gi;t!==null;){var l=t.next,i=mf(t,e);i===0?(t.next=null,a===null?gi=l:a.next=l,l===null&&(ht=a)):(a=t,(n!==0||(i&3)!==0)&&(Ai=!0)),t=l}il(n)}function mf(n,e){for(var a=n.suspendedLanes,t=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var u=31-Pn(i),o=1<<u,r=l[u];r===-1?((o&a)===0||(o&t)!==0)&&(l[u]=gy(o,e)):r<=e&&(n.expiredLanes|=o),i&=~o}if(e=cn,a=X,a=Ol(n,n===e?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,a===0||n===e&&(nn===2||nn===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&Ci(t),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||vt(n,a)){if(e=a&-a,e===n.callbackPriority)return e;switch(t!==null&&Ci(t),Ui(a)){case 2:case 8:a=lr;break;case 32:a=bl;break;case 268435456:a=ir;break;default:a=bl}return t=hf.bind(null,n),a=Gi(a,t),n.callbackPriority=e,n.callbackNode=a,e}return t!==null&&t!==null&&Ci(t),n.callbackPriority=2,n.callbackNode=null,2}function hf(n,e){if(Ln!==0&&Ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(hi()&&n.callbackNode!==a)return null;var t=X;return t=Ol(n,n===cn?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(Qs(n,t,e),mf(n,be()),n.callbackNode!=null&&n.callbackNode===a?hf.bind(null,n):null)}function gf(n,e){if(hi())return null;Qs(n,e,!0)}function Vd(){em(function(){($&6)!==0?Gi(tr,jd):df()})}function Bo(){return Na===0&&(Na=ur()),Na}function Af(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Rl(""+n)}function Sf(n,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,n.id&&a.setAttribute("form",n.id),e.parentNode.insertBefore(a,e),n=new FormData(n),a.parentNode.removeChild(a),n}function qd(n,e,a,t,l){if(e==="submit"&&a&&a.stateNode===l){var i=Af((l[_n]||null).action),u=t.submitter;u&&(e=(e=u[_n]||null)?Af(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var o=new Nl("action","action",null,t,l);n.push({event:o,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Na!==0){var r=u?Sf(l,u):new FormData(l);qu(a,{pending:!0,data:r,method:l.method,action:i},null,r)}}else typeof i=="function"&&(o.preventDefault(),r=u?Sf(l,u):new FormData(l),qu(a,{pending:!0,data:r,method:l.method,action:i},i,r))},currentTarget:l}]})}}for(var Ro=0;Ro<fu.length;Ro++){var Do=fu[Ro],Xd=Do.toLowerCase(),Id=Do[0].toUpperCase()+Do.slice(1);ge(Xd,"on"+Id)}ge(Qr,"onAnimationEnd"),ge(Fr,"onAnimationIteration"),ge(Pr,"onAnimationStart"),ge("dblclick","onDoubleClick"),ge("focusin","onFocus"),ge("focusout","onBlur"),ge(fd,"onTransitionRun"),ge(yd,"onTransitionStart"),ge(dd,"onTransitionCancel"),ge($r,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function Ef(n,e){e=(e&4)!==0;for(var a=0;a<n.length;a++){var t=n[a],l=t.event;t=t.listeners;n:{var i=void 0;if(e)for(var u=t.length-1;0<=u;u--){var o=t[u],r=o.instance,d=o.currentTarget;if(o=o.listener,r!==i&&l.isPropagationStopped())break n;i=o,l.currentTarget=d;try{i(l)}catch(A){li(A)}l.currentTarget=null,i=r}else for(u=0;u<t.length;u++){if(o=t[u],r=o.instance,d=o.currentTarget,o=o.listener,r!==i&&l.isPropagationStopped())break n;i=o,l.currentTarget=d;try{i(l)}catch(A){li(A)}l.currentTarget=null,i=r}}}}function V(n,e){var a=e[_i];a===void 0&&(a=e[_i]=new Set);var t=n+"__bubble";a.has(t)||(bf(e,n,2,!1),a.add(t))}function Mo(n,e,a){var t=0;e&&(t|=4),bf(a,n,t,e)}var Si="_reactListening"+Math.random().toString(36).slice(2);function Yo(n){if(!n[Si]){n[Si]=!0,yr.forEach(function(a){a!=="selectionchange"&&(Zd.has(a)||Mo(a,!1,n),Mo(a,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Si]||(e[Si]=!0,Mo("selectionchange",!1,e))}}function bf(n,e,a,t){switch(jf(e)){case 2:var l=Tm;break;case 8:l=Om;break;default:l=Vo}a=l.bind(null,e,a,n),l=void 0,!Pi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),t?l!==void 0?n.addEventListener(e,a,{capture:!0,passive:l}):n.addEventListener(e,a,!0):l!==void 0?n.addEventListener(e,a,{passive:l}):n.addEventListener(e,a,!1)}function No(n,e,a,t,l){var i=t;if((e&1)===0&&(e&2)===0&&t!==null)n:for(;;){if(t===null)return;var u=t.tag;if(u===3||u===4){var o=t.stateNode.containerInfo;if(o===l)break;if(u===4)for(u=t.return;u!==null;){var r=u.tag;if((r===3||r===4)&&u.stateNode.containerInfo===l)return;u=u.return}for(;o!==null;){if(u=Ga(o),u===null)return;if(r=u.tag,r===5||r===6||r===26||r===27){t=i=u;continue n}o=o.parentNode}}t=t.return}Hr(function(){var d=i,A=Qi(a),b=[];n:{var m=nc.get(n);if(m!==void 0){var h=Nl,w=n;switch(n){case"keypress":if(Ml(a)===0)break n;case"keydown":case"keyup":h=xy;break;case"focusin":w="focus",h=au;break;case"focusout":w="blur",h=au;break;case"beforeblur":case"afterblur":h=au;break;case"click":if(a.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Dr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=qy;break;case Qr:case Fr:case Pr:h=Ky;break;case $r:h=Iy;break;case"scroll":case"scrollend":h=Dy;break;case"wheel":h=Qy;break;case"copy":case"cut":case"paste":h=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Yr;break;case"toggle":case"beforetoggle":h=Py}var z=(e&4)!==0,ln=!z&&(n==="scroll"||n==="scrollend"),f=z?m!==null?m+"Capture":null:m;z=[];for(var s=d,y;s!==null;){var E=s;if(y=E.stateNode,E=E.tag,E!==5&&E!==26&&E!==27||y===null||f===null||(E=pt(s,f),E!=null&&z.push(ol(s,E,y))),ln)break;s=s.return}0<z.length&&(m=new h(m,w,null,a,A),b.push({event:m,listeners:z}))}}if((e&7)===0){n:{if(m=n==="mouseover"||n==="pointerover",h=n==="mouseout"||n==="pointerout",m&&a!==Zi&&(w=a.relatedTarget||a.fromElement)&&(Ga(w)||w[za]))break n;if((h||m)&&(m=A.window===A?A:(m=A.ownerDocument)?m.defaultView||m.parentWindow:window,h?(w=a.relatedTarget||a.toElement,h=d,w=w?Ga(w):null,w!==null&&(ln=q(w),z=w.tag,w!==ln||z!==5&&z!==27&&z!==6)&&(w=null)):(h=null,w=d),h!==w)){if(z=Dr,E="onMouseLeave",f="onMouseEnter",s="mouse",(n==="pointerout"||n==="pointerover")&&(z=Yr,E="onPointerLeave",f="onPointerEnter",s="pointer"),ln=h==null?m:Wt(h),y=w==null?m:Wt(w),m=new z(E,s+"leave",h,a,A),m.target=ln,m.relatedTarget=y,E=null,Ga(A)===d&&(z=new z(f,s+"enter",w,a,A),z.target=y,z.relatedTarget=ln,E=z),ln=E,h&&w)e:{for(z=h,f=w,s=0,y=z;y;y=gt(y))s++;for(y=0,E=f;E;E=gt(E))y++;for(;0<s-y;)z=gt(z),s--;for(;0<y-s;)f=gt(f),y--;for(;s--;){if(z===f||f!==null&&z===f.alternate)break e;z=gt(z),f=gt(f)}z=null}else z=null;h!==null&&vf(b,m,h,z,!1),w!==null&&ln!==null&&vf(b,ln,w,z,!0)}}n:{if(m=d?Wt(d):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var D=kr;else if(Cr(m))if(Ur)D=rd;else{D=ud;var x=id}else h=m.nodeName,!h||h.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&Ii(d.elementType)&&(D=kr):D=od;if(D&&(D=D(n,d))){wr(b,D,a,A);break n}x&&x(n,m,d),n==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&Xi(m,"number",m.value)}switch(x=d?Wt(d):window,n){case"focusin":(Cr(x)||x.contentEditable==="true")&&(qa=x,ru=d,Lt=null);break;case"focusout":Lt=ru=qa=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Ir(b,a,A);break;case"selectionchange":if(sd)break;case"keydown":case"keyup":Ir(b,a,A)}var M;if(lu)n:{switch(n){case"compositionstart":var G="onCompositionStart";break n;case"compositionend":G="onCompositionEnd";break n;case"compositionupdate":G="onCompositionUpdate";break n}G=void 0}else Va?zr(n,a)&&(G="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(G="onCompositionStart");G&&(Nr&&a.locale!=="ko"&&(Va||G!=="onCompositionStart"?G==="onCompositionEnd"&&Va&&(M=Br()):(Ve=A,$i="value"in Ve?Ve.value:Ve.textContent,Va=!0)),x=Ei(d,G),0<x.length&&(G=new Mr(G,n,null,a,A),b.push({event:G,listeners:x}),M?G.data=M:(M=Gr(a),M!==null&&(G.data=M)))),(M=nd?ed(n,a):ad(n,a))&&(G=Ei(d,"onBeforeInput"),0<G.length&&(x=new Mr("onBeforeInput","beforeinput",null,a,A),b.push({event:x,listeners:G}),x.data=M)),qd(b,n,d,a,A)}Ef(b,e)})}function ol(n,e,a){return{instance:n,listener:e,currentTarget:a}}function Ei(n,e){for(var a=e+"Capture",t=[];n!==null;){var l=n,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=pt(n,a),l!=null&&t.unshift(ol(n,l,i)),l=pt(n,e),l!=null&&t.push(ol(n,l,i))),n.tag===3)return t;n=n.return}return[]}function gt(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function vf(n,e,a,t,l){for(var i=e._reactName,u=[];a!==null&&a!==t;){var o=a,r=o.alternate,d=o.stateNode;if(o=o.tag,r!==null&&r===t)break;o!==5&&o!==26&&o!==27||d===null||(r=d,l?(d=pt(a,i),d!=null&&u.unshift(ol(a,d,r))):l||(d=pt(a,i),d!=null&&u.push(ol(a,d,r)))),a=a.return}u.length!==0&&n.push({event:e,listeners:u})}var Qd=/\r\n?/g,Fd=/\u0000|\uFFFD/g;function Tf(n){return(typeof n=="string"?n:""+n).replace(Qd,`
`).replace(Fd,"")}function Of(n,e){return e=Tf(e),Tf(n)===e}function bi(){}function tn(n,e,a,t,l,i){switch(a){case"children":typeof t=="string"?e==="body"||e==="textarea"&&t===""||Ja(n,t):(typeof t=="number"||typeof t=="bigint")&&e!=="body"&&Ja(n,""+t);break;case"className":pl(n,"class",t);break;case"tabIndex":pl(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":pl(n,a,t);break;case"style":Wr(n,t,i);break;case"data":if(e!=="object"){pl(n,"data",t);break}case"src":case"href":if(t===""&&(e!=="a"||a!=="href")){n.removeAttribute(a);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(a);break}t=Rl(""+t),n.setAttribute(a,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&tn(n,e,"name",l.name,l,null),tn(n,e,"formEncType",l.formEncType,l,null),tn(n,e,"formMethod",l.formMethod,l,null),tn(n,e,"formTarget",l.formTarget,l,null)):(tn(n,e,"encType",l.encType,l,null),tn(n,e,"method",l.method,l,null),tn(n,e,"target",l.target,l,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(a);break}t=Rl(""+t),n.setAttribute(a,t);break;case"onClick":t!=null&&(n.onclick=bi);break;case"onScroll":t!=null&&V("scroll",n);break;case"onScrollEnd":t!=null&&V("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(g(61));if(a=t.__html,a!=null){if(l.children!=null)throw Error(g(60));n.innerHTML=a}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}a=Rl(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(a,""+t):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":t===!0?n.setAttribute(a,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(a,t):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(a,t):n.removeAttribute(a);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(a):n.setAttribute(a,t);break;case"popover":V("beforetoggle",n),V("toggle",n),Wl(n,"popover",t);break;case"xlinkActuate":Be(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Be(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Be(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Be(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Be(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Be(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Be(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Be(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Be(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Wl(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=By.get(a)||a,Wl(n,a,t))}}function Lo(n,e,a,t,l,i){switch(a){case"style":Wr(n,t,i);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(g(61));if(a=t.__html,a!=null){if(l.children!=null)throw Error(g(60));n.innerHTML=a}}break;case"children":typeof t=="string"?Ja(n,t):(typeof t=="number"||typeof t=="bigint")&&Ja(n,""+t);break;case"onScroll":t!=null&&V("scroll",n);break;case"onScrollEnd":t!=null&&V("scrollend",n);break;case"onClick":t!=null&&(n.onclick=bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dr.hasOwnProperty(a))n:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),e=a.slice(2,l?a.length-7:void 0),i=n[_n]||null,i=i!=null?i[a]:null,typeof i=="function"&&n.removeEventListener(e,i,l),typeof t=="function")){typeof i!="function"&&i!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(e,t,l);break n}a in n?n[a]=t:t===!0?n.setAttribute(a,""):Wl(n,a,t)}}}function Kn(n,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":V("error",n),V("load",n);var t=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":t=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e));default:tn(n,e,i,u,a,null)}}l&&tn(n,e,"srcSet",a.srcSet,a,null),t&&tn(n,e,"src",a.src,a,null);return;case"input":V("invalid",n);var o=i=u=l=null,r=null,d=null;for(t in a)if(a.hasOwnProperty(t)){var A=a[t];if(A!=null)switch(t){case"name":l=A;break;case"type":u=A;break;case"checked":r=A;break;case"defaultChecked":d=A;break;case"value":i=A;break;case"defaultValue":o=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(g(137,e));break;default:tn(n,e,t,A,a,null)}}br(n,i,o,r,d,u,l,!1),Hl(n);return;case"select":V("invalid",n),t=u=i=null;for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":t=o;default:tn(n,e,l,o,a,null)}e=i,a=u,n.multiple=!!t,e!=null?_a(n,!!t,e,!1):a!=null&&_a(n,!!t,a,!0);return;case"textarea":V("invalid",n),i=l=t=null;for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"value":t=o;break;case"defaultValue":l=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(g(91));break;default:tn(n,e,u,o,a,null)}Tr(n,t,l,i),Hl(n);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(t=a[r],t!=null))switch(r){case"selected":n.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:tn(n,e,r,t,a,null)}return;case"dialog":V("beforetoggle",n),V("toggle",n),V("cancel",n),V("close",n);break;case"iframe":case"object":V("load",n);break;case"video":case"audio":for(t=0;t<ul.length;t++)V(ul[t],n);break;case"image":V("error",n),V("load",n);break;case"details":V("toggle",n);break;case"embed":case"source":case"link":V("error",n),V("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(t=a[d],t!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e));default:tn(n,e,d,t,a,null)}return;default:if(Ii(e)){for(A in a)a.hasOwnProperty(A)&&(t=a[A],t!==void 0&&Lo(n,e,A,t,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(t=a[o],t!=null&&tn(n,e,o,t,a,null))}function Pd(n,e,a,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,o=null,r=null,d=null,A=null;for(h in a){var b=a[h];if(a.hasOwnProperty(h)&&b!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":r=b;default:t.hasOwnProperty(h)||tn(n,e,h,null,t,b)}}for(var m in t){var h=t[m];if(b=a[m],t.hasOwnProperty(m)&&(h!=null||b!=null))switch(m){case"type":i=h;break;case"name":l=h;break;case"checked":d=h;break;case"defaultChecked":A=h;break;case"value":u=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(g(137,e));break;default:h!==b&&tn(n,e,m,h,t,b)}}qi(n,u,o,r,d,A,i,l);return;case"select":h=u=o=m=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":h=r;default:t.hasOwnProperty(i)||tn(n,e,i,null,t,r)}for(l in t)if(i=t[l],r=a[l],t.hasOwnProperty(l)&&(i!=null||r!=null))switch(l){case"value":m=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==r&&tn(n,e,l,i,t,r)}e=o,a=u,t=h,m!=null?_a(n,!!a,m,!1):!!t!=!!a&&(e!=null?_a(n,!!a,e,!0):_a(n,!!a,a?[]:"",!1));return;case"textarea":h=m=null;for(o in a)if(l=a[o],a.hasOwnProperty(o)&&l!=null&&!t.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:tn(n,e,o,null,t,l)}for(u in t)if(l=t[u],i=a[u],t.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":m=l;break;case"defaultValue":h=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(g(91));break;default:l!==i&&tn(n,e,u,l,t,i)}vr(n,m,h);return;case"option":for(var w in a)if(m=a[w],a.hasOwnProperty(w)&&m!=null&&!t.hasOwnProperty(w))switch(w){case"selected":n.selected=!1;break;default:tn(n,e,w,null,t,m)}for(r in t)if(m=t[r],h=a[r],t.hasOwnProperty(r)&&m!==h&&(m!=null||h!=null))switch(r){case"selected":n.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:tn(n,e,r,m,t,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in a)m=a[z],a.hasOwnProperty(z)&&m!=null&&!t.hasOwnProperty(z)&&tn(n,e,z,null,t,m);for(d in t)if(m=t[d],h=a[d],t.hasOwnProperty(d)&&m!==h&&(m!=null||h!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(g(137,e));break;default:tn(n,e,d,m,t,h)}return;default:if(Ii(e)){for(var ln in a)m=a[ln],a.hasOwnProperty(ln)&&m!==void 0&&!t.hasOwnProperty(ln)&&Lo(n,e,ln,void 0,t,m);for(A in t)m=t[A],h=a[A],!t.hasOwnProperty(A)||m===h||m===void 0&&h===void 0||Lo(n,e,A,m,t,h);return}}for(var f in a)m=a[f],a.hasOwnProperty(f)&&m!=null&&!t.hasOwnProperty(f)&&tn(n,e,f,null,t,m);for(b in t)m=t[b],h=a[b],!t.hasOwnProperty(b)||m===h||m==null&&h==null||tn(n,e,b,m,t,h)}var Ko=null,zo=null;function vi(n){return n.nodeType===9?n:n.ownerDocument}function Wf(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pf(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Go(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Co=null;function $d(){var n=window.event;return n&&n.type==="popstate"?n===Co?!1:(Co=n,!0):(Co=null,!1)}var Hf=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,em=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(n){return Bf.resolve(null).then(n).catch(am)}:Hf;function am(n){setTimeout(function(){throw n})}function oa(n){return n==="head"}function Rf(n,e){var a=e,t=0,l=0;do{var i=a.nextSibling;if(n.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<t&&8>t){a=t;var u=n.ownerDocument;if(a&1&&rl(u.documentElement),a&2&&rl(u.body),a&4)for(a=u.head,rl(a),u=a.firstChild;u;){var o=u.nextSibling,r=u.nodeName;u[Ot]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=o}}if(l===0){n.removeChild(i),gl(e);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:t=a.charCodeAt(0)-48;else t=0;a=i}while(a);gl(e)}function wo(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wo(a),Ji(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function tm(n,e,a,t){for(;n.nodeType===1;){var l=a;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[Ot])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==l.rel||n.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=Se(n.nextSibling),n===null)break}return null}function lm(n,e,a){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Se(n.nextSibling),n===null))return null;return n}function ko(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function im(n,e){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")e();else{var t=function(){e(),a.removeEventListener("DOMContentLoaded",t)};a.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function Se(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}var Uo=null;function Df(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return n;e--}else a==="/$"&&e++}n=n.previousSibling}return null}function Mf(n,e,a){switch(e=vi(a),n){case"html":if(n=e.documentElement,!n)throw Error(g(452));return n;case"head":if(n=e.head,!n)throw Error(g(453));return n;case"body":if(n=e.body,!n)throw Error(g(454));return n;default:throw Error(g(451))}}function rl(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Ji(n)}var he=new Map,Yf=new Set;function Ti(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var _e=p.d;p.d={f:um,r:om,D:rm,C:cm,L:sm,m:fm,X:dm,S:ym,M:mm};function um(){var n=_e.f(),e=di();return n||e}function om(n){var e=Ca(n);e!==null&&e.tag===5&&e.type==="form"?Qc(e):_e.r(n)}var At=typeof document>"u"?null:document;function Nf(n,e,a){var t=At;if(t&&typeof e=="string"&&e){var l=re(e);l='link[rel="'+n+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Yf.has(l)||(Yf.add(l),n={rel:n,crossOrigin:a,href:e},t.querySelector(l)===null&&(e=t.createElement("link"),Kn(e,"link",n),Hn(e),t.head.appendChild(e)))}}function rm(n){_e.D(n),Nf("dns-prefetch",n,null)}function cm(n,e){_e.C(n,e),Nf("preconnect",n,e)}function sm(n,e,a){_e.L(n,e,a);var t=At;if(t&&n&&e){var l='link[rel="preload"][as="'+re(e)+'"]';e==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+re(a.imageSizes)+'"]')):l+='[href="'+re(n)+'"]';var i=l;switch(e){case"style":i=St(n);break;case"script":i=Et(n)}he.has(i)||(n=N({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:n,as:e},a),he.set(i,n),t.querySelector(l)!==null||e==="style"&&t.querySelector(cl(i))||e==="script"&&t.querySelector(sl(i))||(e=t.createElement("link"),Kn(e,"link",n),Hn(e),t.head.appendChild(e)))}}function fm(n,e){_e.m(n,e);var a=At;if(a&&n){var t=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+re(t)+'"][href="'+re(n)+'"]',i=l;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Et(n)}if(!he.has(i)&&(n=N({rel:"modulepreload",href:n},e),he.set(i,n),a.querySelector(l)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(sl(i)))return}t=a.createElement("link"),Kn(t,"link",n),Hn(t),a.head.appendChild(t)}}}function ym(n,e,a){_e.S(n,e,a);var t=At;if(t&&n){var l=wa(t).hoistableStyles,i=St(n);e=e||"default";var u=l.get(i);if(!u){var o={loading:0,preload:null};if(u=t.querySelector(cl(i)))o.loading=5;else{n=N({rel:"stylesheet",href:n,"data-precedence":e},a),(a=he.get(i))&&_o(n,a);var r=u=t.createElement("link");Hn(r),Kn(r,"link",n),r._p=new Promise(function(d,A){r.onload=d,r.onerror=A}),r.addEventListener("load",function(){o.loading|=1}),r.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Oi(u,e,t)}u={type:"stylesheet",instance:u,count:1,state:o},l.set(i,u)}}}function dm(n,e){_e.X(n,e);var a=At;if(a&&n){var t=wa(a).hoistableScripts,l=Et(n),i=t.get(l);i||(i=a.querySelector(sl(l)),i||(n=N({src:n,async:!0},e),(e=he.get(l))&&Jo(n,e),i=a.createElement("script"),Hn(i),Kn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(l,i))}}function mm(n,e){_e.M(n,e);var a=At;if(a&&n){var t=wa(a).hoistableScripts,l=Et(n),i=t.get(l);i||(i=a.querySelector(sl(l)),i||(n=N({src:n,async:!0,type:"module"},e),(e=he.get(l))&&Jo(n,e),i=a.createElement("script"),Hn(i),Kn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},t.set(l,i))}}function Lf(n,e,a,t){var l=(l=k.current)?Ti(l):null;if(!l)throw Error(g(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=St(a.href),a=wa(l).hoistableStyles,t=a.get(e),t||(t={type:"style",instance:null,count:0,state:null},a.set(e,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=St(a.href);var i=wa(l).hoistableStyles,u=i.get(n);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,u),(i=l.querySelector(cl(n)))&&!i._p&&(u.instance=i,u.state.loading=5),he.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},he.set(n,a),i||hm(l,n,a,u.state))),e&&t===null)throw Error(g(528,""));return u}if(e&&t!==null)throw Error(g(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Et(a),a=wa(l).hoistableScripts,t=a.get(e),t||(t={type:"script",instance:null,count:0,state:null},a.set(e,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,n))}}function St(n){return'href="'+re(n)+'"'}function cl(n){return'link[rel="stylesheet"]['+n+"]"}function Kf(n){return N({},n,{"data-precedence":n.precedence,precedence:null})}function hm(n,e,a,t){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?t.loading=1:(e=n.createElement("link"),t.preload=e,e.addEventListener("load",function(){return t.loading|=1}),e.addEventListener("error",function(){return t.loading|=2}),Kn(e,"link",a),Hn(e),n.head.appendChild(e))}function Et(n){return'[src="'+re(n)+'"]'}function sl(n){return"script[async]"+n}function zf(n,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var t=n.querySelector('style[data-href~="'+re(a.href)+'"]');if(t)return e.instance=t,Hn(t),t;var l=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),Hn(t),Kn(t,"style",l),Oi(t,a.precedence,n),e.instance=t;case"stylesheet":l=St(a.href);var i=n.querySelector(cl(l));if(i)return e.state.loading|=4,e.instance=i,Hn(i),i;t=Kf(a),(l=he.get(l))&&_o(t,l),i=(n.ownerDocument||n).createElement("link"),Hn(i);var u=i;return u._p=new Promise(function(o,r){u.onload=o,u.onerror=r}),Kn(i,"link",t),e.state.loading|=4,Oi(i,a.precedence,n),e.instance=i;case"script":return i=Et(a.src),(l=n.querySelector(sl(i)))?(e.instance=l,Hn(l),l):(t=a,(l=he.get(i))&&(t=N({},a),Jo(t,l)),n=n.ownerDocument||n,l=n.createElement("script"),Hn(l),Kn(l,"link",t),n.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(g(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(t=e.instance,e.state.loading|=4,Oi(t,a.precedence,n));return e.instance}function Oi(n,e,a){for(var t=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=t.length?t[t.length-1]:null,i=l,u=0;u<t.length;u++){var o=t[u];if(o.dataset.precedence===e)i=o;else if(i!==l)break}i?i.parentNode.insertBefore(n,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(n,e.firstChild))}function _o(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Jo(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Wi=null;function Gf(n,e,a){if(Wi===null){var t=new Map,l=Wi=new Map;l.set(a,t)}else l=Wi,t=l.get(a),t||(t=new Map,l.set(a,t));if(t.has(n))return t;for(t.set(n,null),a=a.getElementsByTagName(n),l=0;l<a.length;l++){var i=a[l];if(!(i[Ot]||i[Cn]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=n+u;var o=t.get(u);o?o.push(i):t.set(u,[i])}}return t}function Cf(n,e,a){n=n.ownerDocument||n,n.head.insertBefore(a,e==="title"?n.querySelector("head > title"):null)}function gm(n,e,a){if(a===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function wf(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var fl=null;function Am(){}function Sm(n,e,a){if(fl===null)throw Error(g(475));var t=fl;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=St(a.href),i=n.querySelector(cl(l));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pi.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=i,Hn(i);return}i=n.ownerDocument||n,a=Kf(a),(l=he.get(l))&&_o(a,l),i=i.createElement("link"),Hn(i);var u=i;u._p=new Promise(function(o,r){u.onload=o,u.onerror=r}),Kn(i,"link",a),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=pi.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}function Em(){if(fl===null)throw Error(g(475));var n=fl;return n.stylesheets&&n.count===0&&xo(n,n.stylesheets),0<n.count?function(e){var a=setTimeout(function(){if(n.stylesheets&&xo(n,n.stylesheets),n.unsuspend){var t=n.unsuspend;n.unsuspend=null,t()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(a)}}:null}function pi(){if(this.count--,this.count===0){if(this.stylesheets)xo(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Hi=null;function xo(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Hi=new Map,e.forEach(bm,n),Hi=null,pi.call(n))}function bm(n,e){if(!(e.state.loading&4)){var a=Hi.get(n);if(a)var t=a.get(null);else{a=new Map,Hi.set(n,a);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),t=u)}t&&a.set(null,t)}l=e.instance,u=l.getAttribute("data-precedence"),i=a.get(u)||t,i===t&&a.set(null,l),a.set(u,l),this.count++,t=pi.bind(this),l.addEventListener("load",t),l.addEventListener("error",t),i?i.parentNode.insertBefore(l,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),e.state.loading|=4}}var yl={$$typeof:mn,Provider:null,Consumer:null,_currentValue:C,_currentValue2:C,_threadCount:0};function vm(n,e,a,t,l,i,u,o){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.hiddenUpdates=wi(null),this.identifierPrefix=t,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function kf(n,e,a,t,l,i,u,o,r,d,A,b){return n=new vm(n,e,a,u,o,r,d,b),e=1,i===!0&&(e|=24),i=ne(3,null,null,e),n.current=i,i.stateNode=n,e=Ou(),e.refCount++,n.pooledCache=e,e.refCount++,i.memoizedState={element:t,isDehydrated:a,cache:e},Bu(i),n}function Uf(n){return n?(n=Qa,n):Qa}function _f(n,e,a,t,l,i){l=Uf(l),t.context===null?t.context=l:t.pendingContext=l,t=Ie(e),t.payload={element:a},i=i===void 0?null:i,i!==null&&(t.callback=i),a=Ze(n,t,e),a!==null&&(ie(a,n,e),Jt(a,n,e))}function Jf(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<e?a:e}}function jo(n,e){Jf(n,e),(n=n.alternate)&&Jf(n,e)}function xf(n){if(n.tag===13){var e=Za(n,67108864);e!==null&&ie(e,n,67108864),jo(n,67108864)}}var Bi=!0;function Tm(n,e,a,t){var l=S.T;S.T=null;var i=p.p;try{p.p=2,Vo(n,e,a,t)}finally{p.p=i,S.T=l}}function Om(n,e,a,t){var l=S.T;S.T=null;var i=p.p;try{p.p=8,Vo(n,e,a,t)}finally{p.p=i,S.T=l}}function Vo(n,e,a,t){if(Bi){var l=qo(t);if(l===null)No(n,e,t,Ri,a),Vf(n,t);else if(pm(l,n,e,a,t))t.stopPropagation();else if(Vf(n,t),e&4&&-1<Wm.indexOf(n)){for(;l!==null;){var i=Ca(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=ha(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var r=1<<31-Pn(u);o.entanglements[1]|=r,u&=~r}pe(i),($&6)===0&&(fi=be()+500,il(0))}}break;case 13:o=Za(i,2),o!==null&&ie(o,i,2),di(),jo(i,2)}if(i=qo(t),i===null&&No(n,e,t,Ri,a),i===l)break;l=i}l!==null&&t.stopPropagation()}else No(n,e,t,null,a)}}function qo(n){return n=Qi(n),Xo(n)}var Ri=null;function Xo(n){if(Ri=null,n=Ga(n),n!==null){var e=q(n);if(e===null)n=null;else{var a=e.tag;if(a===13){if(n=sn(e),n!==null)return n;n=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Ri=n,null}function jf(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cy()){case tr:return 2;case lr:return 8;case bl:case sy:return 32;case ir:return 268435456;default:return 32}default:return 32}}var Io=!1,ra=null,ca=null,sa=null,dl=new Map,ml=new Map,fa=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vf(n,e){switch(n){case"focusin":case"focusout":ra=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":dl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(e.pointerId)}}function hl(n,e,a,t,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:a,eventSystemFlags:t,nativeEvent:i,targetContainers:[l]},e!==null&&(e=Ca(e),e!==null&&xf(e)),n):(n.eventSystemFlags|=t,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function pm(n,e,a,t,l){switch(e){case"focusin":return ra=hl(ra,n,e,a,t,l),!0;case"dragenter":return ca=hl(ca,n,e,a,t,l),!0;case"mouseover":return sa=hl(sa,n,e,a,t,l),!0;case"pointerover":var i=l.pointerId;return dl.set(i,hl(dl.get(i)||null,n,e,a,t,l)),!0;case"gotpointercapture":return i=l.pointerId,ml.set(i,hl(ml.get(i)||null,n,e,a,t,l)),!0}return!1}function qf(n){var e=Ga(n.target);if(e!==null){var a=q(e);if(a!==null){if(e=a.tag,e===13){if(e=sn(a),e!==null){n.blockedOn=e,Sy(n.priority,function(){if(a.tag===13){var t=le();t=ki(t);var l=Za(a,t);l!==null&&ie(l,a,t),jo(a,t)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Di(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var a=qo(n.nativeEvent);if(a===null){a=n.nativeEvent;var t=new a.constructor(a.type,a);Zi=t,a.target.dispatchEvent(t),Zi=null}else return e=Ca(a),e!==null&&xf(e),n.blockedOn=a,!1;e.shift()}return!0}function Xf(n,e,a){Di(n)&&a.delete(e)}function Hm(){Io=!1,ra!==null&&Di(ra)&&(ra=null),ca!==null&&Di(ca)&&(ca=null),sa!==null&&Di(sa)&&(sa=null),dl.forEach(Xf),ml.forEach(Xf)}function Mi(n,e){n.blockedOn===e&&(n.blockedOn=null,Io||(Io=!0,O.unstable_scheduleCallback(O.unstable_NormalPriority,Hm)))}var Yi=null;function If(n){Yi!==n&&(Yi=n,O.unstable_scheduleCallback(O.unstable_NormalPriority,function(){Yi===n&&(Yi=null);for(var e=0;e<n.length;e+=3){var a=n[e],t=n[e+1],l=n[e+2];if(typeof t!="function"){if(Xo(t||a)===null)continue;break}var i=Ca(a);i!==null&&(n.splice(e,3),e-=3,qu(i,{pending:!0,data:l,method:a.method,action:t},t,l))}}))}function gl(n){function e(r){return Mi(r,n)}ra!==null&&Mi(ra,n),ca!==null&&Mi(ca,n),sa!==null&&Mi(sa,n),dl.forEach(e),ml.forEach(e);for(var a=0;a<fa.length;a++){var t=fa[a];t.blockedOn===n&&(t.blockedOn=null)}for(;0<fa.length&&(a=fa[0],a.blockedOn===null);)qf(a),a.blockedOn===null&&fa.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(t=0;t<a.length;t+=3){var l=a[t],i=a[t+1],u=l[_n]||null;if(typeof i=="function")u||If(a);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[_n]||null)o=u.formAction;else if(Xo(l)!==null)continue}else o=u.action;typeof o=="function"?a[t+1]=o:(a.splice(t,3),t-=3),If(a)}}}function Zo(n){this._internalRoot=n}Ni.prototype.render=Zo.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(g(409));var a=e.current,t=le();_f(a,t,n,e,null,null)},Ni.prototype.unmount=Zo.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;_f(n.current,2,null,n,null,null),di(),e[za]=null}};function Ni(n){this._internalRoot=n}Ni.prototype.unstable_scheduleHydration=function(n){if(n){var e=sr();n={blockedOn:null,target:n,priority:e};for(var a=0;a<fa.length&&e!==0&&e<fa[a].priority;a++);fa.splice(a,0,n),a===0&&qf(n)}};var Zf=P.version;if(Zf!=="19.1.0")throw Error(g(527,Zf,"19.1.0"));p.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(g(188)):(n=Object.keys(n).join(","),Error(g(268,n)));return n=L(e),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var Bm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{bt=Li.inject(Bm),Fn=Li}catch{}}return Sl.createRoot=function(n,e){if(!Y(n))throw Error(g(299));var a=!1,t="",l=ss,i=fs,u=ys,o=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=kf(n,1,!1,null,null,a,t,l,i,u,o,null),n[za]=e.current,Yo(n),new Zo(e)},Sl.hydrateRoot=function(n,e,a){if(!Y(n))throw Error(g(299));var t=!1,l="",i=ss,u=fs,o=ys,r=null,d=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(r=a.unstable_transitionCallbacks),a.formState!==void 0&&(d=a.formState)),e=kf(n,1,!0,e,a??null,t,l,i,u,o,r,d),e.context=Uf(null),a=e.current,t=le(),t=ki(t),l=Ie(t),l.callback=null,Ze(a,l,t),a=t,e.current.lanes=a,Tt(e,a),pe(e),n[za]=e.current,Yo(n),new Ni(e)},Sl.version="19.1.0",Sl}var iy;function Cm(){if(iy)return Po.exports;iy=1;function O(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O)}catch(P){console.error(P)}}return O(),Po.exports=Gm(),Po.exports}var wm=Cm();const uy=[{id:1,title:"ええじゃないか",titleKana:"ええじゃないか",lyricist:"岩崎貴文・mildsalt",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["ええじゃないか","ええじゃないか[初回盤]","ええじゃないか[MY BEST CD盤]","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2014-04-23",lyrics:`ひとつひとまず「なんでやねん！」
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
大勝負！`},{id:2,title:"バンザイ夢マンサイ!",titleKana:"ばんざいゆめまんさい",lyricist:"zopp",composer:"川口進・Joakim Bjornbeg・Christofer Erixon",arranger:"CHOKKAKU",album:["ええじゃないか","ええじゃないか[初回盤]","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-04-23",lyrics:`人生はバンザイ！　夢マンサイ！
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

ほんまサンキューサンキュー！`},{id:3,title:"その先へ…",titleKana:"そのさきへ",lyricist:"Shusui",composer:"Shusui・Seiji Motoyama",arranger:"丸山真由子",album:["ええじゃないか","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-04-23",lyrics:`空を見上げて　流れる雲と
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
忘れないで君と笑顔でいよう`},{id:4,title:"浪速一等賞!",titleKana:"なにわいっとうしょう",lyricist:"ケリー・浅利進吾",composer:"浅利進吾",arranger:"ha-j",album:["ええじゃないか","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-04-23",lyrics:`やったるで　やったるで　浪速の実力見せたるで
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

浪速は世界の一等賞！`},{id:5,title:"Rainbow Dream",titleKana:"Rainbow Dream",lyricist:"ケリー",composer:"TSUKASA",arranger:"佐藤泰将",album:["ええじゃないか","ええじゃないか[MY BEST CD盤]"],announce:"t",singer:"WEST.",date:"2014-04-23",lyrics:`近づくほどに大きくなる壁
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
いつも一緒に`},{id:6,title:"My Best Friend",titleKana:"My Best Friend",lyricist:"下地悠",composer:"清水明男",arranger:"家原正樹",album:["ええじゃないか","ええじゃないか[MY BEST CD盤]"],announce:"t",singer:"WEST.",date:"2014-04-23",lyrics:`がむしゃらに 走り続け
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
My Best Friend……`},{id:7,title:"Summer Dreamer",titleKana:"Summer Dreamer",lyricist:"Komei Kobayashi",composer:"Pessi Levanto・MiNE",arranger:"鈴木雅也",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`俺らSummer Dreamer　今 I got take off
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
We are the Summer Dreamer`},{id:8,title:"粉もん",titleKana:"こなもん",lyricist:"corin.",composer:"corin.",arranger:"鈴木雅也",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`さぁ朝もはよから準備して　今日も粉もん覚悟はえぇか？
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
ナニワんキスやん`},{id:9,title:"Wake up!",titleKana:"Wake up!",lyricist:"ケリー",composer:"Peter Nord・Mats Larsson",arranger:"Peter Nord・Mats Larsson",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`Wake up! Wake up!　おはようSun

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

Wake up! Wake up!　おはようSun`},{id:10,title:"LET'S GO WEST ～K A N S A I !!～",titleKana:"LET'S GO WEST ～K A N S A I !!～",lyricist:"森月キャス・kenko-p",composer:"Peter Nord・Mats Larsson",arranger:"Peter Nord・Mats Larsson",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`ナーナナ…　アホやCrazy!　ナーナナ…　オモロぃCrazy!
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
アホやCrazy!`},{id:11,title:"P&P",titleKana:"P&P",lyricist:"Madoka",composer:"Peter Nord・Mats Larsson",arranger:"Peter Nord・Mats Larsson",album:["go WEST よーいドン！","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`Wow wow P&P Beautiful
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
P&PでGo!`},{id:12,title:"Break Out!",titleKana:"Break Out",lyricist:"KOMU",composer:"加藤裕介",arranger:"山路一志",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`Shout!　Let's break out!
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
Judge myself!`},{id:13,title:"Criminal",titleKana:"Criminal",lyricist:"zopp",composer:"CHOKKAKU・Takuya Harada・Joakim Bjornberg・Christofer Erixon",arranger:"CHOKKAKU",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`火花が散る路地裏　出口のない闇の中
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
誰にも邪魔はさせない　Criminal…`},{id:14,title:"ちゃうねんっ!!",titleKana:"ちゃうねんっ!!",lyricist:"Kohei Yokono・ULO",composer:"Kohei Yokono・ULO",arranger:"Kohei Yokono",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`本当は誰だって
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

チャチャチャ♪`},{id:15,title:"バンバンッ!!",titleKana:"バンバンッ!!",lyricist:"KOMU",composer:"浅利進吾",arranger:"鈴木雅也",album:["go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`今　高く掲げた指の示す　夢の先へ

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
Say! BaBaBaBaBaBaBang!`},{id:16,title:"Ole Ole Carnival!",titleKana:"Ole Ole Carnival!",lyricist:"Shusui・ha-j",composer:"Shusui・ha-j",arranger:"Shusui・ha-j",album:["go WEST よーいドン！","go WEST よーいドン！[通常盤]"],announce:"t",singer:"WEST.",date:"2014-08-06",lyrics:`今年もアゲアゲSummer　毎度おかげSummer
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
Ole Ole Carnival!`},{id:17,title:"ジパングおおきに大作戦",titleKana:"じぱんぐおおきにだいさくせん",lyricist:"市川喜康・マツコタツロウ・ha-j",composer:"市川喜康・マツコタツロウ・ha-j",arranger:"市川喜康・マツコタツロウ・ha-j",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回A]","ジパング・おおきに大作戦/夢を抱きしめて[初回B]","ジパング・おおきに大作戦/夢を抱きしめて[初回C]","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2014-10-08",lyrics:`(そーりゃ！ そーりゃ！)
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

お・お・き・に！`},{id:18,title:"夢を抱きしめて",titleKana:"ゆめをだきしめて",lyricist:"canna",composer:"Shusui・RAAY・ART HUNTER",arranger:"RAAY",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回A]","ジパング・おおきに大作戦/夢を抱きしめて[初回B]","ジパング・おおきに大作戦/夢を抱きしめて[初回C]","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2014-10-08",lyrics:`午前二時の　待ち合わせ
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

これからずっと愛してると`},{id:19,title:"WESTERN PARADE",titleKana:"WESTERN PARADE",lyricist:"Shusui",composer:"Shusui・Fredrik Hult・Car Utbult",arranger:"Shusui・Fredrik Hult・Car Utbult",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回C]"],announce:"t",singer:"WEST.",date:"2014-10-08",lyrics:`夢を叶えるために
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
一緒に笑いなよ WOW`},{id:20,title:"Can’t Stop",titleKana:"Can’t Stop",lyricist:"zoop",composer:"Takuya Harada・STEVEN LEE・Goldfingerz",arranger:"鈴木雅也",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回C]"],announce:"t",singer:"WEST.",date:"2014-10-08",lyrics:`Can't stop

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

Can't stop`},{id:21,title:"SUPERSTAR",titleKana:"SUPERSTAR",lyricist:"Shusui・下地 悠・Litz・堀江里沙",composer:"Shusui・Matjaz Vlasic・Bostjan Grabnar",arranger:"Vlasic・Bostjan Grabnar",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]"],announce:"t",singer:"WEST.",date:"2014-10-08",lyrics:`立ち上がろうぜ　怖がらないで
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
Here we go`},{id:22,title:"for now and forever",titleKana:"for now and forever",lyricist:"ケリー",composer:"Anders Dannvik・Randy Goodrum",arranger:"CHOKKAKU",album:["ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]"],announce:"t",singer:"WEST.",date:"2014-10-08",lyrics:`まだ見ぬ未来を　想像(イメージ)して
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
for now and forever`},{id:23,title:"ズンドコ パラダイス",titleKana:"ずんどこ ぱらだいす",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["ズンドコ パラダイス","ズンドコ パラダイス[初回A]","ズンドコ パラダイス[初回B]","ズンドコ パラダイス[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2015-02-04",lyrics:`(ズン　ズン　ズンズンズンズン)
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
ズバッと決めるで！ ズンドコ　パラダイス`},{id:24,title:"SAKURA〜旅立ちのうた〜",titleKana:"SAKURA〜たびだちのうた〜",lyricist:"Shusui",composer:"Shusui・Matjaz Vlasic・Bostjan Grabnar",arranger:"船山基紀",album:["ズンドコ パラダイス","ズンドコ パラダイス[初回A]","ズンドコ パラダイス[初回B]","ズンドコ パラダイス[通常盤]"],announce:"t",singer:"WEST.",date:"2015-02-04",lyrics:`もう　春の匂いが　この街を包む頃に
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

SAKURA 旅立ちのうた`},{id:25,title:"青春ウォーーー!!",titleKana:"せいしゅんうぉーーー!!",lyricist:"下地悠",composer:"川口進・MiNE",arranger:"CHOKKAKU",album:["ズンドコ パラダイス","ズンドコ パラダイス[通常盤]"],announce:"t",singer:"WEST.",date:"2015-02-04",lyrics:`さぁCome on！ It's alright！

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
青春やねん`},{id:26,title:"Time goes by",titleKana:"Time goes by",lyricist:"あいみょん",composer:"Shusui・川口進",arranger:"ha-j",album:["ズンドコ パラダイス","ズンドコ パラダイス[通常盤]"],announce:"t",singer:"WEST.",date:"2015-02-04",lyrics:`忘れられないまま　大人になっていた
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
何度でも　明日は来るから`},{id:27,title:"パリピポアンセム",titleKana:"ぱりぴぽあんせむ",lyricist:"永田雅規",composer:"永田雅規",arranger:"ha-j",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-04-22",lyrics:`上がっちゃってこう！！ 騒いじゃってこう！！
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
上がっちゃってこう！！ 騒いじゃってこう！！`},{id:28,title:"Toxic Love",titleKana:"Toxic Love",lyricist:"Komei Kobayashi",composer:"STEVEN LEE",arranger:"STEVEN LEE",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-04-22",lyrics:`Yeah I can't let you go
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
甘いToxic Love (Give me love....)`},{id:29,title:"キミコイ",titleKana:"きみこい",lyricist:"Shusui",composer:"Shusui・RAAY・Art Hunter・Kresimir Tomec",arranger:"RAAY・Kresimir Tomec",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-04-22",lyrics:`I WANNA DANCE Oh
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
I WANNA DANCE Oh`},{id:30,title:"SCARS",titleKana:"SCARS",lyricist:"SHIKATA",composer:"O-BANKZ・Takuya Harada・SHIKATA",arranger:"O-BANKZ",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-04-22",lyrics:`あとどれくらいだろ？ 僕らがこうしていられる瞬間(じかん)は
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
疼く傷跡`},{id:31,title:"アカンLOVE〜純情愛やで〜",titleKana:"あかんLOVE〜じゅんじょうあいやで〜",lyricist:"小松レナ",composer:"星野靖彦",arranger:"渡辺徹",album:["パリピポ","パリピポ[初回盤]","パリピポ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-04-22",lyrics:`おちゃらけてても　お前を見ている
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
アイツ…`},{id:32,title:"Mambo de WEST!",titleKana:"Mambo de WEST!",lyricist:"市川喜康・マツコタツロウ",composer:"市川喜康・マツコタツロウ",arranger:"ha-j",album:["パリピポ","パリピポ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-04-22",lyrics:`Mambo！ Mambo de WEST！
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
Mambo de WEST！`},{id:33,title:"PARTY MANIACS",titleKana:"PARTY MANIACS",lyricist:"Komei Kobayashi",composer:"STEVEN LEE・Drew Ryan Scott・Andreas Oberg",arranger:"CHOKKAKU",album:["パリピポ","パリピポ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-04-22",lyrics:`Yo come dance with me…
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
WE'RE PARTY MANIACS`},{id:34,title:"バリ ハピ",titleKana:"ばり はぴ",lyricist:"zopp",composer:"Shusui・Raay・Art Hunter",arranger:"Raay",album:["バリ ハピ","バリ ハピ[初回A]","バリ ハピ[初回B]","バリ ハピ[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2015-07-29",lyrics:`それぞれの自由　それぞれの理由で
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
輪になってPeace, Peace, Peace`},{id:35,title:"All My Love",titleKana:"All My Love",lyricist:"下地悠",composer:"Joakim Bjornberg・Christofer Erixon・Atsushi Shimada",arranger:"Atsushi Shimada",album:["バリ ハピ","バリ ハピ[初回A]","バリ ハピ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-07-29",lyrics:`遠くに離れて気がついたんや
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
All My Love　勇気をくれて　ありがとう`},{id:36,title:"All My Love〜ちゅらうみっくす〜",titleKana:"All My Love〜ちゅらうみっくす〜",lyricist:"下地悠",composer:"Joakim Bjornberg・Christofer Erixon・Atsushi Shimada",arranger:"Atsushi Shimada",album:["バリ ハピ","バリ ハピ[初回B]"],announce:"f",singer:"WEST.",date:"2015-07-29",lyrics:`遠くに離れて気がついたんや
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
All My Love　勇気をくれて　ありがとう`},{id:37,title:"マ・ル・モ・ウ・ケ",titleKana:"ま・る・も・う・け",lyricist:"栗原暁(Jazzin'park)・久保田真悟(Jazzin'park)",composer:"栗原暁(Jazzin'park)・久保田真悟(Jazzin'park)",arranger:"栗原暁(Jazzin'park)・久保田真悟(Jazzin'park)",album:["バリ ハピ","バリ ハピ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-07-29",lyrics:`Oh ピーカン　ピーカン　日本晴れ
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
明日はみんなにやってくるさ`},{id:38,title:"迷宮SUMMER",titleKana:"めいきゅうSUMMER",lyricist:"Komei Kobayashi",composer:"Fredrik“Figge”Bostrom・Josef Melin",arranger:"Josef Melin",album:["バリ ハピ","バリ ハピ[通常盤]"],announce:"t",singer:"WEST.",date:"2015-07-29",lyrics:`I wanna make you, make you, make you, make you mine.
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
She's wicked, She's wicked…`},{id:39,title:"ラッキィスペシャル",titleKana:"らっきぃすぺしゃる",lyricist:"Shusui・ha-j",composer:"Shusui・ha-j",arranger:"Shusui・ha-j",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"WEST.",date:"2015-12-09",lyrics:`Oh それ見ぃ Ya！
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
Party Time！`},{id:40,title:"Seven Powers",titleKana:"Seven Powers",lyricist:"森若香織",composer:"森若香織",arranger:"杉山圭一・秦千香子・LASTorder",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"WEST.",date:"2015-12-09",lyrics:`ナナナ　ナナナナ　ナナナなんなん？パワー
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
ナナナ　なんのこっちゃ　七色のパワーパワーパワーパワーパワー`},{id:41,title:"ホルモン〜関西に伝わりしダイアモンド〜",titleKana:"ほるもん〜かんさいにつたわりしだいあもんど〜",lyricist:"チカラ from Civilian Skunk",composer:"ジュンタ from Civilian Skunk",arranger:"鈴木雅也",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"WEST.",date:"2015-12-09",lyrics:`ホルモン
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
関西に伝わりしダイアモンド`},{id:42,title:"ガッテン アンセム",titleKana:"がってん あんせむ",lyricist:"MiNE",composer:"川口進・MiNE・Atsushi Shimada",arranger:"Atsushi Shimada",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"WEST.",date:"2015-12-09",lyrics:`ガッテン　ガッテンだ！！ チキチキバンバン　バンババン！！
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
イエセッショー　イエセッショー　騒げるヤツ High！！`},{id:43,title:"3.141592654",titleKana:"3.141592654",lyricist:"チカラ from Civilian Skunk",composer:"ジュンタ from Civilian Skunk",arranger:"宮崎歩",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"WEST.",date:"2015-12-09",lyrics:`さぁ一緒行こう 3.14

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
さぁ！一緒行こう！3.1415`},{id:44,title:"きみへのメロディー",titleKana:"きみへのめろでぃー",lyricist:"SOU by COZMIC CODE",composer:"KASUMI・SOU by COZMIC CODE",arranger:"KASUMI by COZMIC CODE",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"WEST.",date:"2015-12-09",lyrics:`月が浮かぶ夜空に　気付けばきみを映してるよ
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
離さないから`},{id:45,title:"Eternal",titleKana:"Eternal",lyricist:"zopp",composer:"STEVEN LEE・Andreas Stone Johansson",arranger:"STEVEN LEE・Andreas Stone Johansson",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"WEST.",date:"2015-12-09",lyrics:`No one “Can't stop” ハイウェイを抜け出し
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
君がいないと Only Eternal Darkness`},{id:46,title:"TAMER",titleKana:"TAMER",lyricist:"中間淳太",composer:"Kevin Borg・Simon Gribbe",arranger:"Kevin Borg・Simon Gribbe",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"中間淳太",date:"2015-12-09",lyrics:`燃える Fire ring 唸る Something roars
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

TAMER`},{id:47,title:"Lovely Xmas",titleKana:"Lovely Xmas",lyricist:"イワツボコーダイ",composer:"GRP・イワツボコーダイ",arranger:"GRP",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"重岡大毅＆神山智洋",date:"2015-12-09",lyrics:`君と初めての待ち合わせ場所へ
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

もうずっと離さないから`},{id:48,title:"Terrible",titleKana:"Terrible",lyricist:"Komei Kobayashi",composer:"Tommy Clint",arranger:"Tommy Clint",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"藤井流星＆小瀧望",date:"2015-12-09",lyrics:`Come on baby, Make me terrible
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
Come kiss me, Boo`},{id:49,title:"こんな曲作りました",titleKana:"こんなきょくつくりました",lyricist:"照史と崇裕",composer:"Andreas Oberg・Simon Petren",arranger:"Simon Petren",album:["ラッキィィィィィィィ7","ラッキィィィィィィィ7[通常盤]"],announce:"t",singer:"桐山照史＆濵田崇裕",date:"2015-12-09",lyrics:`Hey！　キュートな Girlの皆さん Look at me
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
男の子！`},{id:50,title:"逆転Winner",titleKana:"ぎゃくてんWinner",lyricist:"松井五郎",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["逆転Winner","逆転Winner[初回A]","逆転Winner[初回B]","逆転Winner[通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2016-04-20",lyrics:`君が目にしてる世界
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
きっと勝ちに行こう`},{id:51,title:"100% I Love You",titleKana:"100% I Love You",lyricist:"YHANAEL・MiNE",composer:"川口進・MiNE・Craig McKenzie",arranger:"鈴木雅也",album:["逆転Winner","逆転Winner[初回A]","逆転Winner[初回B]","逆転Winner[通常盤]"],announce:"t",singer:"WEST.",date:"2016-04-20",lyrics:`ケータイの音が鳴った
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
キミ以外に欲しい物はない I Love You`},{id:52,title:"King of Chance",titleKana:"King of Chance",lyricist:"Komei Kobayashi",composer:"Nicklas Eklund・Kevin Borg・Hanif Sabzevari",arranger:"Nicklas Eklund",album:["逆転Winner","逆転Winner[通常盤]"],announce:"t",singer:"WEST.",date:"2016-04-20",lyrics:`もう、グダグダ言ってても何も変わらない
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

We can be a King`},{id:53,title:"KIZUNA",titleKana:"KIZUNA",lyricist:"Takuya Harada",composer:"Takuya Harada・川口進",arranger:"船山基紀",album:["逆転Winner","逆転Winner[通常盤]"],announce:"t",singer:"WEST.",date:"2016-04-20",lyrics:`ほら　あの日夢に見た目の前に拡がる世界
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
もう二度と来ないこの夏`},{id:54,title:"人生は素晴らしい",titleKana:"じんせいはすばらしい",lyricist:"mildsalt",composer:"岩崎貴文",arranger:"水島康貴",album:["人生は素晴らしい","人生は素晴らしい[初回A]","人生は素晴らしい[初回B]","人生は素晴らしい[通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2016-07-27",lyrics:`心のパズル弾け散って　深夜の帰り、疲れ切って
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
僕と、僕と　素晴らしい明日を叫ぼう`},{id:55,title:"Mr. Summer WEST",titleKana:"Mr. Summer WEST",lyricist:"Shusui・ha-j",composer:"Shusui・ha-j",arranger:"Shusui・ha-j",album:["人生は素晴らしい","人生は素晴らしい[初回A]","人生は素晴らしい[通常盤]"],announce:"t",singer:"WEST.",date:"2016-07-27",lyrics:`だから　そう言ったじゃない
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
Wow Wow Mr. Summer WEST`},{id:56,title:"シルエット",titleKana:"しるえっと",lyricist:"川口進・MiNE",composer:"川口進・Thomas G:son",arranger:"石塚知生",album:["人生は素晴らしい","人生は素晴らしい[初回B]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2016-07-27",lyrics:`2人歩く帰り道　嬉しそうに君が笑うから
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
今は声にせず　その手を握るよ　そばにいて`},{id:57,title:"覚悟しろよSummer",titleKana:"かくごしろよSummer",lyricist:"SHOCK EYE",composer:"SHOCK EYE",arranger:"草野将史",album:["人生は素晴らしい","人生は素晴らしい[通常盤]"],announce:"t",singer:"WEST.",date:"2016-07-27",lyrics:`挑戦状　叩きつけろよ　最強の　夏に向かって
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
大事なことにやっと気づけたSummer`},{id:58,title:"CHO-EXTACY",titleKana:"CHO-EXTACY",lyricist:"SHIROSE from WHITE JAM",composer:"SECRET WEAPON・SHIROSE from WHITE JAM・MAXX SONG",arranger:"CHOKKAKU",album:["人生は素晴らしい","人生は素晴らしい[通常盤]"],announce:"t",singer:"WEST.",date:"2016-07-27",lyrics:`始まれば、僕ら止めるヤツがバカみたいに思えるよ
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
CHO-EXTACY…`},{id:59,title:"Unlimited",titleKana:"Unlimited",lyricist:"SHIKATA",composer:"SHINO",arranger:"REO",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`そう僕らは数え切れない程の
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
一緒に行こう　Just believe my dream... Unlimited`},{id:60,title:"いま逢いたいからしょうがない",titleKana:"いまあいたいからしょうがない",lyricist:"下地悠",composer:"岩崎貴文",arranger:"家原正樹",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`出会いは偶然　すれ違う Lady　香りの Shower
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
今度は Good 離さない`},{id:61,title:"エエやんけェ!!",titleKana:"ええやんけぇ!!",lyricist:"無敵DEAD SNAKE",composer:"無敵DEAD SNAKE",arranger:"生田真心",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`ええやんけ！！

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

ええやんけ！！`},{id:62,title:"大阪弁ら〜にんぐ",titleKana:"おおさかべんら〜にんぐ",lyricist:"corin.",composer:"corin.",arranger:"corin.",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`大阪弁の醍醐味は　まるで清水のような清涼感
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
Goo Goo Goo Goo Goo Goo Goo Goo Gooooo！`},{id:63,title:"I got the FLOW",titleKana:"I got the FLOW",lyricist:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・JUN・前田佑",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・JUN・前田佑",arranger:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・JUN・前田佑",album:["なうぇすと","なうぇすと[通常盤]"],announce:"t",singer:"神山智洋＆藤井流星",date:"2016-11-30",lyrics:`Let's rock Let's go
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
Come along and shake it everybody`},{id:64,title:"You're My Treasure",titleKana:"You're My Treasure",lyricist:"Atsushi Shimada・MiNE",composer:"SHIKATA・REO",arranger:"REO",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`Ha... Miss you girl...
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
You are the only one, You know？`},{id:65,title:"Colorful Magic",titleKana:"Colorful Magic",lyricist:"市川喜康・マツコタツロウ・ha-j",composer:"市川喜康・マツコタツロウ・ha-j",arranger:"市川喜康・マツコタツロウ・ha-j",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`降り出した雪が　街の音色を消した時刻(ころ)
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
君と夢を願う Holy Night`},{id:66,title:"ギラギラブベイベー",titleKana:"ぎらぎらぶべいびー",lyricist:"Junxix",composer:"Junxix・Saku.",arranger:"kAi",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`ギラギラブベイベー！！！！！！！

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
いつでも俺らはギラギラ　メッチャギラギラ　ラブラブしてるぜ`},{id:67,title:"Believer",titleKana:"Believer",lyricist:"Komei Kobayashi",composer:"Christofer Erixon・SHIKATA・COMMAND FREAKS",arranger:"COMMAND FREAKS",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`惰性を　幸せと割り切れたら
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

Oh singin' Oh Yeah`},{id:68,title:"雪に願いを",titleKana:"ゆきにねがいを",lyricist:"MiNE",composer:"Anders Dannvik・MiNE・Atsushi Shimada",arranger:"ha-j",album:["なうぇすと","なうぇすと[通常盤]"],announce:"t",singer:"濵田崇裕＆小瀧望",date:"2016-11-30",lyrics:`ため息さえも白く形どった凍える街で
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
空は違うけど　君にも見せたいんだ`},{id:69,title:"ボクら",titleKana:"ぼくら",lyricist:"さくらももこ",composer:"松本良喜",arranger:"松本良喜",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`何もかも飛びこえてすぐに会いに行くよ
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

キミはキミのために生きるんだ　ボクはキミの陽だまりになる`},{id:70,title:"無鉄砲ボーイ",titleKana:"むてっぽうぼーい",lyricist:"kima'n",composer:"koma'n",arranger:"koma'n",brassarrange:"koma'n/ 倉内達矢",album:["なうぇすと","なうぇすと[通常盤]"],announce:"t",singer:"重岡大毅＆桐山照史＆中間淳太",date:"2016-11-30",lyrics:`瞬間的　溺れちゃうぜ　夢みたいな出会いだね
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
Go Go Go！`},{id:71,title:"one chance",titleKana:"one chance",lyricist:"SHIROSE from WHITE JAM",composer:"Takuya Harada・Christofer Erixon",arranger:"CHOKKAKU",album:["なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]"],announce:"t",singer:"WEST.",date:"2016-11-30",lyrics:`Let's Go！
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
Hey clap clap clap...　やれフィーバー`},{id:72,title:"おーさか☆愛・EYE・哀",titleKana:"おーさか☆あい・EYE・あい",lyricist:"松尾潔",composer:"松尾潔・豊島吉宏",arranger:"Maestro-T",produce:"松尾潔",album:["おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回A]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回B]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2017-06-21",lyrics:`じらすようなまなざしで　足を組みかえて笑う
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
あーい・愛・EYE・哀・アイ・l-ight…おーさか`},{id:73,title:"Ya! Hot! Hot!",titleKana:"Ya! Hot! Hot!",lyricist:"下地悠・Lauren Kaori・YHANAEL・岩崎貴文",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回A]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回B]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2017-06-21",lyrics:`さぁみんな
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
(アチ　アチ　アチチのチ　アチ　アチ　アチチのチ)`},{id:74,title:"PARA! PARA! チャ〜ハン",titleKana:"PARA! PARA! ちゃ〜はん",lyricist:"Yu-ki Kokubo",composer:"Kohei Yokono・Yu-ki Kokubo",arranger:"Kohei Yokono",album:["おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]"],announce:"t",singer:"WEST.",date:"2017-06-21",lyrics:`Ladies and gentlemen
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
胃袋を掴め　恋のパラパラチャーハン`},{id:75,title:"「ありがとう」じゃ足りない",titleKana:"ありがとうじゃたりない",lyricist:"岩崎愛",composer:"岩崎愛",arranger:"岩崎愛・中村タイチ・井上陽介(Turntable Films)",album:["おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]"],announce:"t",singer:"WEST.",date:"2017-06-21",lyrics:`Oh...

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
その為にいつまでも　歌い続けよう`},{id:76,title:"僕ら今日も生きている",titleKana:"ぼくらきょうもいきている",lyricist:"MORISHIN",composer:"川口進・MORISHIN",arranger:"水島康貴",album:["僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![初回A]","僕ら今日も生きている/考えるな、燃えろ!![初回B]","僕ら今日も生きている/考えるな、燃えろ!![通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2017-11-22",lyrics:`僕ら今日も生きている　僕ら今日も笑ってる
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
僕ら一緒に歩いて行こうよ`},{id:77,title:"考えるな、燃えろ!!",titleKana:"かんがえるな、もえろ!!",lyricist:"PA-NON・松本タカヒロ・ha-j",composer:"PA-NON・松本タカヒロ・ha-j",arranger:"ha-j",album:["僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![初回A]","僕ら今日も生きている/考えるな、燃えろ!![初回B]","僕ら今日も生きている/考えるな、燃えろ!![通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2017-11-22",lyrics:`「考えるな、、、燃えろー！！」
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

ライライラ　ライライラ　ライライラ　ライ‥`},{id:78,title:"何万回だって「君が好き」",titleKana:"なんまんかいだってきみがすき",lyricist:"岩田秀聡",composer:"岩田秀聡・永野大輔",arranger:"岩田秀聡・永野大輔",album:["僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![通常盤]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2017-11-22",lyrics:`夕陽に染まる君を　いつまでも抱きしめてた
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

そう思えたんだ`},{id:79,title:"SHE IS MY…",titleKana:"SHE IS MY…",lyricist:"SHIROSE from WHITE JAM",composer:"COMMAND FREAKS・SHIROSE from WHITE JAM",arranger:"COMMAND FREAKS",album:["僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![通常盤]"],announce:"t",singer:"WEST.",date:"2017-11-22",lyrics:`Hey yo
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

SHE IS MY BABY`},{id:80,title:"もう1%",titleKana:"もう1%",lyricist:"Shusui・川口進",composer:"Shusui・川口進",arranger:"川口進",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",singer:"WEST.",date:"2018-01-02",lyrics:`描いた未来の先に　見えた希望があるから
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
もう1%　自分を信じていこう、強く！`},{id:81,title:"浪速看板息子～なめたらあかん～",titleKana:"なにわかんばんむすこ〜なめたらあかん~",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE",arranger:"MUTEKI DEAD SNAKE",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",singer:"WEST.",date:"2018-01-02",lyrics:`はやくこい
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

どないや！！`},{id:82,title:"Baby Good!!!",titleKana:"Baby Good!!!",lyricist:"MiNE",composer:"STEVEN LEE・Takuya Harada・Christofer Erixon",arranger:"吉岡たく",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",singer:"WEST.",date:"2018-01-02",lyrics:`Uh… Everybody gonna party time Yeah！！
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
ひとつになろう　全開 Bomb！！`},{id:83,title:"Evoke",titleKana:"Evoke",lyricist:"神山智洋",composer:"神山智洋",arranger:"CHOKKAKU",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",singer:"WEST.",date:"2018-01-02",lyrics:`Ladies and Gentlemen
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

Satisfied？`},{id:84,title:"OH LA LA",titleKana:"OH LA LA",lyricist:"SUNNY BOY",composer:"Christofer Erixon・Josef Mekin",arranger:"ha-j",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",singer:"WEST.",date:"2018-01-02",lyrics:`OH LA LA OH LA LA LA LA
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

OH LA LA OH LA LA LA LA`},{id:85,title:"Parade!!",titleKana:"Parade!!",lyricist:"福岡良太",composer:"Takuya Harada・Christofer Erixon・Josef Melin",arranger:"船山基紀",album:["WESTival","WESTival[初回盤]","WESTival[通常盤]"],announce:"t",singer:"WEST.",date:"2018-01-02",lyrics:`Ladies & Gentlemen
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
「You're all I need… You know？」`},{id:86,title:"GOD DAMN",titleKana:"GOD DAMN",lyricist:"Kanata Okajima",composer:"COMMAND FREAKS・CHRISTOFER ERIXON・ERIK LIDBOM",arranger:"COMMAND FREAKS",album:["WESTival","WESTival[通常盤]"],announce:"t",singer:"神山智洋＆濵田崇裕",date:"2018-01-02",lyrics:`What's going on？
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
一度きりのイキザマ`},{id:87,title:"Into Your Eyes",titleKana:"Into Your Eyes",lyricist:"中間淳太・Komei Mckinnon",composer:"Josef Melin・Adrian Mckinnon",arranger:"Josef Melin",album:["WESTival","WESTival[通常盤]"],announce:"t",singer:"中間淳太＆藤井流星＆小瀧望",date:"2018-01-02",lyrics:`Yeah… Hey girl… Come here…
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
うつす指のウソ`},{id:88,title:"乗り越しラブストーリー",titleKana:"のりこしらぶすとーりー",lyricist:"重岡大毅",composer:"YHANAEL",arranger:"丸山真由子",album:["WESTival","WESTival[通常盤]"],announce:"t",singer:"桐山照史＆重岡大毅",date:"2018-01-02",lyrics:`ガタンゴトン揺れる僕らは
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

揺れる心　行け涙　僕の“愛してる”`},{id:89,title:"おーさか☆愛・EYE・哀 (MURO REMIX)",titleKana:"おーさか☆あい・EYE・あい (MURO REMIX)",lyricist:"松尾潔",composer:"松尾潔・豊島吉宏",arranger:"",album:["WESTival","WESTival[通常盤]"],announce:"f",singer:"WEST.",date:"2018-01-02",lyrics:`じらすようなまなざしで　足を組みかえて笑う
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
あーい・愛・EYE・哀・アイ・l-ight…おーさか`},{id:90,title:"プリンシパルの君へ",titleKana:"ぷりんしぱるのきみへ",lyricist:"HoneyWorks",composer:"HoneyWorks",arranger:"CHOKKAKU",album:["プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[初回A]","プリンシパルの君へ/ドラゴンドッグ[初回B]","プリンシパルの君へ/ドラゴンドッグ[通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2018-03-07",lyrics:`最高最大の物語真っ白な世界
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
世界を楽しめ君は主役`},{id:91,title:"ドラゴンドッグ",titleKana:"どらごんどっぐ",lyricist:"Shusui",composer:"Shusui・Josef Melin",arranger:"Josef Melin",album:["プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[初回A]","プリンシパルの君へ/ドラゴンドッグ[初回B]","プリンシパルの君へ/ドラゴンドッグ[通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2018-03-07",lyrics:`何言ってんだ　出来ないかもって
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
ドラゴンドッグ！`},{id:92,title:"青空願ってまた明日",titleKana:"あおぞらねがってまたあした",lyricist:"MORISHIN・Komei Kobayashi",composer:"川口進・MORISHIN・佐原康太",arranger:"ha-j",album:["プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[通常盤]"],announce:"t",singer:"WEST.",date:"2018-03-07",lyrics:`黄昏の街　歩道橋の上
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

青空へ`},{id:93,title:"初恋",titleKana:"はつこい",lyricist:"MiNE",composer:"川口進・MiNE",arranger:"川口進",album:["プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[通常盤]"],announce:"t",singer:"WEST.",date:"2018-03-07",lyrics:`ずっと一緒にいようなんて
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

My Love…Oh Yeah…`},{id:94,title:"スタートダッシュ!",titleKana:"すたーとだっしゅ!",lyricist:"藤林聖子",composer:"岩崎貴文",arranger:"家原正樹",album:["スタートダッシュ!","スタートダッシュ![初回A]","スタートダッシュ![初回B]","スタートダッシュ![通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2018-08-15",lyrics:`転んだ時の　芝生の匂い
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
飛び出そう　どデカイ　ドリームフィールド`},{id:95,title:"アカツキ",titleKana:"あかつき",lyricist:"森若香織",composer:"5u5h1",arranger:"CHOKKAKU",album:["スタートダッシュ!","スタートダッシュ![初回A]","スタートダッシュ![初回B]","スタートダッシュ![通常盤]"],announce:"t",singer:"WEST.",date:"2018-08-15",lyrics:`赤い光　月の明り　不思議な空　まわる宇宙
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
教室のドア　もう一度開けるアカツキ`},{id:96,title:"僕らの軌跡〜ジャニーズWEST列島縦断〜",titleKana:"ぼくらのきせき〜じゃにーずWESTれっとうじゅうだん〜",lyricist:"MiNE",composer:"Takuya Harada・MiNE・Atsushi Shimada",arranger:"ha-j",album:["スタートダッシュ!","スタートダッシュ![通常盤]"],announce:"t",singer:"WEST.",date:"2018-08-15",lyrics:`いらっしゃい！！　いらっしゃい！！
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
ジャパ！！　ジャパ！！　ジャパ！！　ジャパーン！！`},{id:97,title:"クチウツシ",titleKana:"くちうつし",lyricist:"SHIROSE from WHITE JAM",composer:"Christofer Erixon・Erik Lidbom・Doojinso",arranger:"Erik Lidbom",album:["スタートダッシュ!","スタートダッシュ![通常盤]"],announce:"t",singer:"WEST.",date:"2018-08-15",lyrics:`いつも通りの夕方　涼しい風
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
びしょびしょな熱帯夜、とけ出した Ice cream`},{id:98,title:"We are WEST!!!!!!!",titleKana:"We are WEST!!!!!!!",lyricist:"神山智洋",composer:"神山智洋",arranger:"ha-j",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",singer:"WEST.",date:"2018-12-05",lyrics:`(しげー！！)はぁーい！！
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
Wow`},{id:99,title:"パーリパーリパリ - カタカナを叫べ -",titleKana:"ぱーりぱーりぱり - かたかなをさけべ -",lyricist:"SHIROSE from WHITE JAM・GASHIMA from WHITE JAM",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・SHIROSE from WHIT JAM・GASHIMA from WHITE JAM",arranger:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",singer:"WEST.",date:"2018-12-05",lyrics:`下むいてるより　ハイハイハイ　上むいてる方が　サイコー
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
Let's go`},{id:100,title:"WESTV!ショッピング!Part 1",titleKana:"WESTV!しょっぴんぐ!Part 1",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"岩崎貴文",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"f",singer:"WEST.",date:"2018-12-05",lyrics:`良いもの揃えてお値打ちに
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
WESTV！ショッピング！`},{id:101,title:"愛の奴隷",titleKana:"あいのどれい",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE",arranger:"MUTEKI DEAD SNAKE",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",singer:"WEST.",date:"2018-12-05",lyrics:`I'm a slave！

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

愛の奴隷`},{id:102,title:"WESTV!ショッピング!Part 2",titleKana:"WESTV!しょっぴんぐ!Part 2",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"岩崎貴文",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"f",singer:"WEST.",date:"2018-12-05",lyrics:`良いもの揃えてお値打ちに
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
WESTV！ショッピング！`},{id:103,title:"Drift!!",titleKana:"Drift!!",lyricist:"YU-G",composer:"h-wonder",arranger:"h-wonder",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",singer:"WEST.",date:"2018-12-05",lyrics:`Come on now！！

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
すべて転がしてく Drift！！`},{id:104,title:"YSSB",titleKana:"YSSB",lyricist:"Komei Kobayashi",composer:"Kento Takeda・Christofer Erixon",arranger:"Kento Takeda",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2018-12-05",lyrics:`Let's party！ YOLO！ Ready to go！
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
Let's take it to the dance floor`},{id:105,title:"WESTV!ショッピング!Part 3",titleKana:"WESTV!しょっぴんぐ!Part 3",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"岩崎貴文",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"f",singer:"WEST.",date:"2018-12-05",lyrics:`良いもの揃えてお値打ちに
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

ジャカジャン！`},{id:106,title:"赤いマフラー",titleKana:"あかいまふらー",lyricist:"草川瞬",composer:"Takuya Harada・Joakim Bjornberg",arranger:"Takuya Harada",album:["WESTV！","WESTV！[初回盤]","WESTV！[通常盤]"],announce:"t",singer:"WEST.",date:"2018-12-05",lyrics:`冷えた手　ポケットに
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
一緒に選んだ　赤いマフラー`},{id:107,title:"ONI-CHAN",titleKana:"ONI-CHAN",lyricist:"中間淳太・藤井流星",composer:"Fredrik “Figge” Bostrom・Pontus Soderqvist・Takuya Harada",arranger:"Pontus Soderqvist",album:["WESTV！","WESTV！[通常盤]"],announce:"t",singer:"中間淳太＆藤井流星",date:"2018-12-05",lyrics:`この勝負にかけた　みんなのお兄ちゃん
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
りゅせじゅんお兄ちゃん`},{id:108,title:"月詠人",titleKana:"つくよみびと",lyricist:"Satomi",composer:"萩原和樹",arranger:"増田武史",album:["WESTV！","WESTV！[通常盤]"],announce:"t",singer:"桐山照史＆小瀧望",date:"2018-12-05",lyrics:`巡る巡る季節
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
守りたい`},{id:109,title:"間違っちゃいない",titleKana:"まちがっちゃいない",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["WESTV！","WESTV！[通常盤]"],announce:"t",singer:"重岡大毅＆濵田崇裕＆神山智洋",date:"2018-12-05",lyrics:`涙　一粒
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
間違っちゃいないんだ`},{id:110,title:"ホメチギリスト",titleKana:"ほめちぎりすと",lyricist:"岩崎貴文",composer:"岩崎貴文",arranger:"CHOKKAKU",album:["ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[初回A]","ホメチギリスト/傷だらけの愛[初回B]","ホメチギリスト/傷だらけの愛[通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2019-01-30",lyrics:`カバンを背負って猛ダッシュ　満員電車乗り込んだ　いつものルーティン
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
めちゃんこイケてるやん！ (やん！)`},{id:111,title:"傷だらけの愛",titleKana:"きずだらけのあい",lyricist:"Komei Kobayashi",composer:"Takuya Harada・川口進",arranger:"CHOKKAKU・GAKU",album:["ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[初回A]","ホメチギリスト/傷だらけの愛[初回B]","ホメチギリスト/傷だらけの愛[通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2019-01-30",lyrics:`燃えるように　一人でも生きてゆけると
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
離さない`},{id:112,title:"大阪とんとんダンス",titleKana:"おおさかとんとんだんす",lyricist:"庄田ゲゲゲ・corin.",composer:"庄田ゲゲゲ・corin.",arranger:"庄田ゲゲゲ・corin.",album:["ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[通常盤]"],announce:"f",singer:"WEST.",date:"2019-01-30",lyrics:`とんとん！　とんとん！　とんとん！　とんとん！

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

とん！`},{id:113,title:"バレバレンタイン",titleKana:"ばればれんたいん",lyricist:"Yu-ki Kokubo",composer:"Kohei Yokono・Yu-ki Kokubo",arranger:"Kohei Yokono",album:["ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[通常盤]"],announce:"t",singer:"WEST.",date:"2019-01-30",lyrics:`Tu tu tu Tu tu ru tu (Yes)
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
Tu tu tu ru tu`},{id:114,title:"アメノチハレ",titleKana:"あめのちはれ",lyricist:"MORISHIN",composer:"川口進・MORISHIN",arranger:"CHOKKAKU",album:["アメノチハレ","アメノチハレ[初回A]","アメノチハレ[初回B]","アメノチハレ[通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2019-04-24",lyrics:`雨空見上げて
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
キミ色の明日が待っている`},{id:115,title:"アンジョーヤリーナ",titleKana:"あんじょーやりーな",lyricist:"園田健太郎",composer:"園田健太郎",arranger:"園田健太郎",album:["アメノチハレ","アメノチハレ[初回A]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2019-04-24",lyrics:`号泣するくらいの感動を
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
アンジョーヤリーナ`},{id:116,title:"儚",titleKana:"はかな",lyricist:"Takuya Harada・井上紗矢香",composer:"YOUNG HOLLYWOOD・Takuya Harada・Joakim Bjornberg",arranger:"YOUNG HOLLYWOOD・ha-j",album:["アメノチハレ","アメノチハレ[通常盤]"],announce:"f",singer:"WEST.",date:"2019-04-24",lyrics:`風に舞ってどこまでも
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

瞬く隙に`},{id:117,title:"パチモン",titleKana:"ぱちもん",lyricist:"庄田ゲゲゲ・corin.",composer:"庄田ゲゲゲ・corin.",arranger:"庄田ゲゲゲ・corin.",album:["アメノチハレ","アメノチハレ[通常盤]"],announce:"f",singer:"WEST.",date:"2019-04-24",lyrics:`パチもん

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

パチもん`},{id:118,title:"Big Shot!!",titleKana:"Big Shot!!",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["Big Shot!!","Big Shot!![初回A]","Big Shot!![初回B]","Big Shot!![通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2019-10-09",lyrics:`Go Go Jump！！ 掴めよVictory (Hey)
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
LALALA　LALALA…`},{id:119,title:"Go Low Low",titleKana:"Go Low Low",lyricist:"Kanata Okajima",composer:"Takuya Harada・Erik Lidbom",arranger:"CHOKKAKU",album:["Big Shot!!","Big Shot!![初回A]"],announce:"t",singer:"WEST.",date:"2019-10-09",lyrics:`(No one's gonna know it…)

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
ヤバい程 Feel alive`},{id:120,title:"Make a Wish!! ～世界中が愛してる～",titleKana:"Make a Wish!! ～せかいじゅうがあいしてる～",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",stringsarrange:"久保田真悟(Jazzin'park)・和音正人",album:["Big Shot!!","Big Shot!![初回B]"],announce:"t",singer:"WEST.",date:"2019-10-09",lyrics:`せーの！で　オメデトウ♪
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

まだまだ　終われない！`},{id:121,title:"虹の旅",titleKana:"にじのたび",lyricist:"CHIYOKO",composer:"CHIYOKO・ U-KIRIN",arranger:"U-KIRIN",album:["Big Shot!!","Big Shot!![通常盤]"],announce:"t",singer:"WEST.",date:"2019-10-09",lyrics:`暮れゆく街でひとりきり
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

虹の旅を`},{id:122,title:"WESTォォォォ!!! ～愛のセッション～",titleKana:"WESTぉぉぉぉ!!! ～あいのセッション～",lyricist:"庄田ゲゲゲ",composer:"庄田ゲゲゲ",arranger:"庄田ゲゲゲ",album:["Big Shot!!","Big Shot!![通常盤]"],announce:"t",singer:"WEST.",date:"2019-10-09",lyrics:`じゅんじゅじゅ～ん　はままま～ん
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
WESTォォォォ！！！`},{id:123,title:"W trouble",titleKana:"W trouble",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",singer:"WEST.",date:"2020-03-18",lyrics:`W trouble
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
Let's feel it Beat it Feel it Beat it`},{id:124,title:"Glory Days",titleKana:"Glory Days",lyricist:"Komei Kobayashi",composer:"Josef Melin・Christofer Erixon",arranger:"Josef Melin",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",singer:"WEST.",date:"2020-03-18",lyrics:`Woo！ Yeah, Oh…
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
LALALA… 終わらないGlory Days`},{id:125,title:"君だけの 僕だけの",titleKana:"きみだけの ぼくだけの",lyricist:"RYOJI",composer:"RYOJI・GRP",arranger:"CHOKKAKU・GAKU",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",singer:"WEST.",date:"2020-03-18",lyrics:`涙の止め方すら　わからなくなる時
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
君だけの僕だけの道を歩いてきた意味を`},{id:126,title:"Special Love",titleKana:"Special Love",lyricist:"黒沢薫",composer:"黒沢薫・竹本健一",arranger:"竹本健一",stringsarrange:"井上一平",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",singer:"WEST.",date:"2020-03-18",lyrics:`キミこそが　Special Love
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

You're my Special Love`},{id:127,title:"Survival",titleKana:"Survival",lyricist:"神山智洋",composer:"神山智洋",arranger:"akkin",album:["W trouble","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",singer:"WEST.",date:"2020-03-18",lyrics:`Dead or Alive, No place to hide.
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
We're still alive aiming at higher.`},{id:128,title:"ごっつえーFriday",titleKana:"ごっつえーFriday",lyricist:"SUNNY BOY",composer:"☆Taku Takahashi(m-flo)・SUNNY BOY",arranger:"☆Taku Takahashi(m-flo)・Mitsunori Ikeda(Tachytelic Inc.)",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",singer:"WEST.",date:"2020-03-18",lyrics:`朝から　マジしんどい
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
It's ごっつえーFriday (ごっつえーFriday)`},{id:129,title:"HEY!!!!!!!",titleKana:"HEY!!!!!!!",lyricist:"JIN",composer:"JIN",arranger:"ha-j・高田翼(Diosta inc.)",album:["W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",singer:"WEST.",date:"2020-03-18",lyrics:`すれ違ってごめん　君とのデスティニー
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
もうすぐ出逢えるから`},{id:130,title:"to you",titleKana:"to you",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["W trouble","W trouble[通常盤]","W trouble[通販盤]"],announce:"t",singer:"WEST.",date:"2020-03-18",lyrics:`思い出し笑いできるんだ
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
この日いつか足元を照らすんだ`},{id:131,title:"Try me now",titleKana:"Try me now",lyricist:"SHIROSE from WHITE JAM・GASHIMA from WHITE JAM",composer:"COMMAND FREAKS・Christofer Erixon・J. Praize",arranger:"COMMAND FREAKS",album:["W trouble","W trouble[初回A]"],announce:"t",singer:"WEST.",date:"2020-03-18",lyrics:`Just get ready, Imma take you higher
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
Come on & Try me now`},{id:132,title:"The Call",titleKana:"The Call",lyricist:"常楽寺澪",composer:"Philip Eliason・Anton Hellgren",arranger:"Philip Eliason・Anton Hellgren",album:["W trouble","W trouble[初回B]"],announce:"t",singer:"濱田崇裕＆藤井流星",date:"2020-03-18",lyrics:`震え続けたままのPhone　握り締めた
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
I want you to call me back`},{id:133,title:"do you know, girl??",titleKana:"do you know, girl??",lyricist:"重岡大毅・小瀧望",composer:"重岡大毅・小瀧望",arranger:"告井孝通",album:["W trouble","W trouble[初回B]"],announce:"t",singer:"重岡大毅＆小瀧望",date:"2020-03-18",lyrics:`上から下へsecurity check it baby
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
今夜の君と俺次第`},{id:134,title:"GimmeGimmeGimme",titleKana:"GimmeGimmeGimme",lyricist:"Yuki Kokubo・中間淳太",composer:"Josef Melin",arranger:"Josef Melin",album:["W trouble","W trouble[初回B]"],announce:"t",singer:"中間淳太＆桐山照史＆神山智洋",date:"2020-03-18",lyrics:`衝撃的な　夜のFantasy (GimmeGimme)
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
Wow oh oh...`},{id:135,title:"証拠",titleKana:"しょうこ",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["証拠","証拠[初回A]","証拠[初回B]","証拠[通常盤]","rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2020-06-24",lyrics:`こんなにも　笑って　いや　泣いて
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
Long & Winding Road`},{id:136,title:"You ain't mine",titleKana:"You ain't mine",lyricist:"Kanata Okajima・CLAUDE S.",composer:"O-BANKZ・Erik Lidbom・J. Praize",arranger:"O-BANKZ",album:["証拠","証拠[初回A]"],announce:"t",singer:"WEST.",date:"2020-06-24",lyrics:`You & me　とっくに　スベテ Over
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

で、キミはどうしたい？`},{id:137,title:"サヨナラなんかじゃ終わらせないから",titleKana:"さよならなんかじゃおわらせないから",lyricist:"MORISHIN",composer:"MORISHIN・REO",arranger:"REO",album:["証拠","証拠[初回A]"],announce:"t",singer:"WEST.",date:"2020-06-24",lyrics:`愛が足りないならおいで
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
光を注ぐよキミに`},{id:138,title:"間違っちゃいない。",titleKana:"まちがっちゃいない。",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["証拠","証拠[初回B]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2020-06-24",lyrics:`涙一粒　星降る夜に
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
間違っちゃいないんだ`},{id:139,title:"ANS",titleKana:"ANS",lyricist:"神山智洋・藤井流星",composer:"神山智洋",arranger:"akkin",album:["証拠","証拠[初回B]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2020-06-24",lyrics:`wow oh...

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
キエチマエ！！`},{id:140,title:"ハッピーメイカー",titleKana:"はっぴーめいかー",lyricist:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・前田佑",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・前田佑",arranger:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・前田佑",album:["証拠","証拠[通常盤]"],announce:"f",singer:"WEST.",date:"2020-06-24",lyrics:`Hey Everybody
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
SAWAGE SAWAGE SAWAGE！！`},{id:141,title:"いまだ!!",titleKana:"いまだ!!",lyricist:"松井五郎",composer:"馬飼野康二",arranger:"佐々木博史",album:["証拠","証拠[通常盤]"],announce:"f",singer:"WEST.",date:"2020-06-24",lyrics:`頑張りすぎて
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
いまだ！！`},{id:142,title:"はんぶんこ",titleKana:"はんぶんこ",lyricist:"ジャニーズWEST・MiNE",composer:"川口進・MiNE・Atsushi Shimada",arranger:"ha-j",album:["証拠","証拠[通常盤]"],announce:"t",singer:"WEST.",date:"2020-06-24",lyrics:`上手く笑えない今日の涙は僕と“はんぶんこ”
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
ともに進もう　ずっと`},{id:143,title:"週刊うまくいく曜日",titleKana:"しゅうかんうまくいくようび",lyricist:"山口隆(サンボマスター)",composer:"山口隆(サンボマスター)",arranger:"ha-j",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回A]","週刊うまくいく曜日[初回B]","週刊うまくいく曜日[通常盤]","rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2021-01-13",lyrics:`上手く笑えない今日の涙は僕と“はんぶんこ”
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
ともに進もう　ずっと`},{id:144,title:"カメレオン",titleKana:"かめれおん",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回A]"],announce:"t",singer:"WEST.",date:"2021-01-13",lyrics:`澄ました顔しているカメレオンは嫌いだ
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
見せかけじゃもう　生きてけないや`},{id:145,title:"4年7ヶ月",titleKana:"4ねん7かげつ",lyricist:"家原正樹・Yu-ki Kokubo",composer:"家原正樹・Yu-ki Kokubo",arranger:"家原正樹",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回A]"],announce:"f",singer:"WEST.",date:"2021-01-13",lyrics:`波音にそっと耳を傾けたら
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
You're my everything`},{id:146,title:"おい仕事ッ！",titleKana:"おいしごとっ！",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"CHOKKAKU",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回B]"],announce:"t",singer:"WEST.",date:"2021-01-13",lyrics:`迷子のエゴばら撒く社会
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
水に流してフ～`},{id:147,title:"Candy Shop",titleKana:"Candy Shop",lyricist:"Komei Kobayashi",composer:"Jimmy Claeson・川口進",arranger:"Jimmy Claeson",album:["週刊うまくいく曜日","週刊うまくいく曜日[初回B]"],announce:"t",singer:"WEST.",date:"2021-01-13",lyrics:`Candy, Candy
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
Give it to me, 絡まる Chocolate`},{id:148,title:"銀河系",titleKana:"ぎんがけい",lyricist:"新羅慎二",composer:"新羅慎二",arranger:"久保田真悟(Jazzin'park)",album:["週刊うまくいく曜日","週刊うまくいく曜日[通常盤]"],announce:"t",singer:"WEST.",date:"2021-01-13",lyrics:`僕達の街の夜空には　煌びやかな星が瞬く
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
君と僕のように　銀河へと旅立った`},{id:149,title:"Change your mind!",titleKana:"Change your mind!",lyricist:"タナカヒロキ(LEGO BIG MORL)",composer:"阪井一生(flumpool)",arranger:"生田真心",album:["週刊うまくいく曜日","週刊うまくいく曜日[通常盤]"],announce:"t",singer:"WEST.",date:"2021-01-13",lyrics:`世界変えたくて　今歌っている
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
Change your mind！`},{id:150,title:"WA! WA! ワンダフル!!",titleKana:"WA! WA! わんだふる!!",lyricist:"市川喜康・マツコタツロウ・ha-j",composer:"市川喜康・マツコタツロウ・ha-j",arranger:"市川喜康・マツコタツロウ・ha-j",album:["週刊うまくいく曜日","週刊うまくいく曜日[通常盤]"],announce:"t",singer:"WEST.",date:"2021-01-13",lyrics:`何も聞かないまま
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
それだけで　ワンダフル！！`},{id:151,title:"春じゃなくても",titleKana:"はるじゃなくても",lyricist:"柳沢亮太(SUPER BEAVER)",composer:"柳沢亮太(SUPER BEAVER)",arranger:"柳沢亮太(SUPER BEAVER)",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:152,title:"PUSH",titleKana:"PUSH",lyricist:"JUN・Joshua Leung・D&H",composer:"Tommy Clint・川口 進・Atsushi Shimada",arranger:"Atsushi Shimada・Mitsunori Ikeda(Tachytelic Inc.)",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:153,title:"想イ、フワリ",titleKana:"おもい、ふわり",lyricist:"山崎あおい",composer:"川口進・草川瞬・坂室賢一",arranger:"生田真心",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:154,title:"Shadows",titleKana:"Shadows",lyricist:"Kanata Okajima",composer:"P3AK・Adrian Mckinnon",arranger:"P3AK",album:["rainboW","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:155,title:"グッ!!とあふたぬ～ん",titleKana:"ぐっ!!とあふたぬ～ん",lyricist:"神山智洋",composer:"神山智洋",arranger:"ha-j・神山智洋",album:["rainboW","rainboW[通常盤]"],announce:"f",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:156,title:"TRICKSTER",titleKana:"TRICKSTER",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:157,title:"DOKODA",titleKana:"DOKODA",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE",arranger:"MUTEKI DEAD SNAKE",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]","AWARD","AWARD[通常盤]"],announce:"f",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:158,title:"We Can!!",titleKana:"We Can!!",lyricist:"Komei Kobayashi",composer:"MiNE・Atsushi Shimada・坂室賢一",arranger:"CHOKKAKU",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:159,title:"Paradise",titleKana:"Paradise",lyricist:"milet",composer:"Andreas Oberg・Adrian McKinnon・Christoffer Semelius",arranger:"Christoffer Semelius・Andreas Oberg",album:["rainboW","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:160,title:"Rainbow Chaser",titleKana:"Rainbow Chaser",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:161,title:"Big Dipper",titleKana:"Big Dipper",lyricist:"D&H",composer:"Jan Baars・Rajan Muse・Ronnie Icon",arranger:"Jan Baars・Rajan Muse・Ronnie Icon",album:["rainboW","rainboW[初回A]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:162,title:"革新論理",titleKana:"かくしんろんり",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE",arranger:"鈴木雅也",album:["rainboW","rainboW[初回A]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2021-03-17",lyrics:""},{id:163,title:"サラリーマンの父さん",titleKana:"さらりーまんのとうさん",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"CHOKKAKU",album:["rainboW","rainboW[初回B]"],announce:"t",singer:"重岡大毅",date:"2021-03-17",lyrics:""},{id:164,title:"「かなさんどー」",titleKana:"かなさんどー",lyricist:"桐山照史",composer:"桐山照史",arranger:"生田真心",album:["rainboW","rainboW[初回B]"],announce:"t",singer:"桐山照史",date:"2021-03-17",lyrics:""},{id:165,title:"“Pinocchio”",titleKana:"Pinocchio",lyricist:"中間淳太",composer:"GRP",arranger:"GRP",album:["rainboW","rainboW[初回B]"],announce:"t",singer:"中間淳太",date:"2021-03-17",lyrics:""},{id:166,title:"KNOCK OUT",titleKana:"KNOCK OUT",lyricist:"神山智洋",composer:"神山智洋",arranger:"KNOCK OUT MONKEY",album:["rainboW","rainboW[初回B]"],announce:"t",singer:"神山智洋",date:"2021-03-17",lyrics:""},{id:167,title:"FLOWER OF ROMANCE",titleKana:"FLOWER OF ROMANCE",lyricist:"REO・GOMESS",composer:"LEO",arranger:"ALI",album:["rainboW","rainboW[初回B]"],announce:"t",singer:"藤井流星",date:"2021-03-17",lyrics:""},{id:168,title:"やさしいひと",titleKana:"やさしいひと",lyricist:"Blue Vintage",composer:"Blue Vintage・前田佑",arranger:"前田佑",album:["rainboW","rainboW[初回B]"],announce:"t",singer:"濵田崇裕",date:"2021-03-17",lyrics:""},{id:169,title:"B U S Y",titleKana:"BUSY",lyricist:"KOMU",composer:"KOMU・YU",arranger:"YU",album:["rainboW","rainboW[初回B]"],announce:"t",singer:"小瀧望",date:"2021-03-17",lyrics:""},{id:170,title:"サムシング・ニュー",titleKana:"さむしんぐ・にゅー",lyricist:"あいみょん",composer:"あいみょん",arranger:"ha-j",album:["サムシング・ニュー","サムシング・ニュー[初回A]","サムシング・ニュー[初回B]","サムシング・ニュー[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2021-05-05",lyrics:""},{id:171,title:"僕らの理由",titleKana:"ぼくらのりゆう",lyricist:"柳沢亮太(SUPER BEAVER)",composer:"柳沢亮太(SUPER BEAVER)",arranger:"柳沢亮太(SUPER BEAVER)",album:["サムシング・ニュー","サムシング・ニュー[初回A]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2021-05-05",lyrics:""},{id:172,title:"#Followme",titleKana:"#Followme",lyricist:"D&H",composer:"Joshua Leung・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"AKIRA・Joshua Leung・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",album:["サムシング・ニュー","サムシング・ニュー[初回A]"],announce:"f",singer:"WEST.",date:"2021-05-05",lyrics:""},{id:173,title:"Don't Stop Loving",titleKana:"Don't Stop Loving",lyricist:"Kanata Okajima",composer:"Josef Melin",arranger:"Josef Melin・久保田真悟(Jazzin'park)",album:["サムシング・ニュー","サムシング・ニュー[初回B]"],announce:"t",singer:"WEST.",date:"2021-05-05",lyrics:""},{id:174,title:"君のために歌わせて",titleKana:"きみのためにうたわせて",lyricist:"ONIGASHIMA",composer:"Peter Nord・川口進",arranger:"Peter Nord",album:["サムシング・ニュー","サムシング・ニュー[初回B]"],announce:"f",singer:"WEST.",date:"2021-05-05",lyrics:""},{id:175,title:"ムーンライト",titleKana:"むーんらいと",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["サムシング・ニュー","サムシング・ニュー[通常盤]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2021-05-05",lyrics:""},{id:176,title:"Tomorrow",titleKana:"Tomorrow",lyricist:"神山智洋",composer:"神山智洋",arranger:"akkin",album:["サムシング・ニュー","サムシング・ニュー[通常盤]"],announce:"t",singer:"WEST.",date:"2021-05-05",lyrics:""},{id:177,title:"Automatic",titleKana:"Automatic",lyricist:"JUN",composer:"Andy Love・dBoi!",arranger:"dBoi!",album:["サムシング・ニュー","サムシング・ニュー[通常盤]"],announce:"t",singer:"WEST.",date:"2021-05-05",lyrics:""},{id:178,title:"でっかい愛",titleKana:"でっかいあい",lyricist:"岩越涼大・村野直球・栗原暁(Jazzin'park)",composer:"岩越涼大",arranger:"ha-j",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回A]","でっかい愛/喜努愛楽[初回B]","でっかい愛/喜努愛楽[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2021-07-28",lyrics:""},{id:179,title:"喜努愛楽",titleKana:"きどあいらく",lyricist:"吸血亭賛美",composer:"偉町大介",arranger:"MUTEKI DEAD SNAKE",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回A]","でっかい愛/喜努愛楽[初回B]","でっかい愛/喜努愛楽[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2021-07-28",lyrics:""},{id:180,title:"真夜中のLION",titleKana:"まよなかのLION",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回A]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2021-07-28",lyrics:""},{id:181,title:"みんながいる",titleKana:"みんながいる",lyricist:"田尻知之(note native)・本澤尚之",composer:"田尻知之(note native)・本澤尚之",arranger:"田尻知之(note native)・本澤尚之",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回B]"],announce:"f",singer:"WEST.",date:"2021-07-28",lyrics:""},{id:182,title:"バニラかチョコ",titleKana:"ばにらかちょこ",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[通常盤]"],announce:"t",singer:"WEST.",date:"2021-07-28",lyrics:""},{id:183,title:"Calling",titleKana:"Calling",lyricist:"草川瞬",composer:"川口進・草川瞬",arranger:"山下洋介",album:["でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[通常盤]"],announce:"t",singer:"WEST.",date:"2021-07-28",lyrics:""},{id:184,title:"黎明",titleKana:"れいめい",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[初回A]","黎明/進むしかねぇ[初回B]","黎明/進むしかねぇ[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2022-01-19",lyrics:""},{id:185,title:"進むしかねぇ",titleKana:"すすむしかねぇ",lyricist:"田尻知之(note native)・本澤尚之",composer:"田尻知之(note native)・本澤尚之",arranger:"田尻知之(note native)・本澤尚之",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[初回A]","黎明/進むしかねぇ[初回B]","黎明/進むしかねぇ[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2022-01-19",lyrics:""},{id:186,title:"Cherry on top",titleKana:"Cherry on top",lyricist:"D&H",composer:"Jakob Mihoubi・Rudi Daouk・Isaac Han・Aaron Kim・GHOSTCHILD LTD",arranger:"Isaac Han・GHOSTCHILD LTD・Aaron Kim",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[初回A]"],announce:"t",singer:"WEST.",date:"2022-01-19",lyrics:""},{id:187,title:"オレとオマエと時々チェイサー",titleKana:"おれとおまえとときどきちぇいさー",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[初回B]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2022-01-19",lyrics:""},{id:188,title:"ブーケ",titleKana:"ぶーけ",lyricist:"NakamuraEmi",composer:"NakamuraEmi",arranger:"Hiroshi Kawamura",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[通常盤]"],announce:"t",singer:"WEST.",date:"2022-01-19",lyrics:""},{id:189,title:"微笑み一つ咲かせましょう",titleKana:"ほほえもひとつさかせましょう",lyricist:"MORISHIN",composer:"川口進・MORISHIN",arranger:"ha-j・川口進",album:["黎明/進むしかねぇ","黎明/進むしかねぇ[通常盤]"],announce:"t",singer:"WEST.",date:"2022-01-19",lyrics:""},{id:190,title:"Mixed Juice",titleKana:"Mixed Juice",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:191,title:"しらんけど",titleKana:"しらんけど",lyricist:"庄田ゲゲゲ・corin.",composer:"庄田ゲゲゲ・corin.",arranger:"庄田ゲゲゲ・corin.",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:192,title:"涙腺",titleKana:"るいせん",lyricist:"橋口洋平(wacci)",composer:"橋口洋平(wacci)",arranger:"村中慧慈(wacci)・因幡始(wacci)",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:193,title:"Contrails",titleKana:"Contrails",lyricist:"神山智洋",composer:"神山智洋",arranger:"akkin・神山智洋",album:["Mixed Juice","Mixed Juice[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:194,title:"Anything Goes",titleKana:"Anything Goes",lyricist:"KOMU",composer:"KOMU・YU",arranger:"YU",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:195,title:"Born To Be Wild",titleKana:"Born To Be Wild",lyricist:"MiNE・Atsushi Shimada",composer:"Xisco・坂室賢一・Tommy Clint",arranger:"Xisco",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:196,title:"ブルームーン",titleKana:"ぶるーむーん",lyricist:"eill",composer:"eill・Ryo 'LEFTY' Miyata",arranger:"Ryo 'LEFTY' Miyata・eill・nabeLTD・Katsushiro Sato",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:197,title:"じゃあね",titleKana:"じゃあね",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["Mixed Juice","Mixed Juice[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:198,title:"つばさ",titleKana:"つばさ",lyricist:"柳沢亮太(SUPER BEAVER)",composer:"柳沢亮太(SUPER BEAVER)",arranger:"柳沢亮太(SUPER BEAVER)",album:["Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:199,title:"セラヴィ",titleKana:"せらゔぃ",lyricist:"キタニタツヤ",composer:"キタニタツヤ",arranger:"Nobuaki Tanaka・キタニタツヤ",album:["Mixed Juice","Mixed Juice[初回A]","AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:200,title:"努力賞",titleKana:"どりょくしょう",lyricist:"syudou",composer:"syudou",arranger:"syudou",album:["Mixed Juice","Mixed Juice[初回A]"],announce:"t",singer:"WEST.",date:"2022-03-09",lyrics:""},{id:201,title:"Plan B",titleKana:"Plan B",lyricist:"PURPLE NIGHT・Yohei",composer:"PURPLE NIGHT・Yohei",arranger:"PURPLE NIGHT・Yohei",album:["Mixed Juice","Mixed Juice[初回B]"],announce:"t",singer:"中間淳太＆神山智洋＆藤井流星＆小瀧望",date:"2022-03-09",lyrics:""},{id:202,title:"情熱",titleKana:"じょうねつ",lyricist:"上中丈弥(THEイナズマ戦隊)",composer:"久保裕行(THEイナズマ戦隊)",arranger:"久保裕行(THEイナズマ戦隊)・名村武",album:["Mixed Juice","Mixed Juice[初回B]"],announce:"t",singer:"重岡大毅＆桐山照史＆濵田崇裕",date:"2022-03-09",lyrics:""},{id:203,title:"星の雨",titleKana:"ほしのあめ",lyricist:"敬也-amazuti-(KEYTONE)",composer:"敬也-amazuti-(KEYTONE)",arranger:"生田真心",album:["星の雨","星の雨[初回A]","星の雨[初回B]","星の雨[通常盤]","星の雨[通販盤]","POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2022-08-03",lyrics:""},{id:204,title:"SOUL 2 SOUL",titleKana:"SOUL 2 SOUL",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["星の雨","星の雨[初回A]","星の雨[初回B]","星の雨[通常盤]","星の雨[通販盤]"],announce:"t",singer:"WEST.",date:"2022-08-03",lyrics:""},{id:205,title:"愛情至上主義",titleKana:"あいじょうしじょうしゅぎ",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["星の雨","星の雨[初回A]"],announce:"t",singer:"WEST.",date:"2022-08-03",lyrics:""},{id:206,title:"Crazy about you",titleKana:"Crazy about you",lyricist:"草川瞬",composer:"Albin Nordqvist・Marcus Lindberg・草川瞬",arranger:"Marcus Lindberg",album:["星の雨","星の雨[初回B]"],announce:"f",singer:"WEST.",date:"2022-08-03",lyrics:""},{id:207,title:"イキテヤレ",titleKana:"いきてやれ",lyricist:"岩越涼大",composer:"岩越涼大",arranger:"NAOKI-T",album:["星の雨","星の雨[通常盤]","星の雨[通販盤]"],announce:"t",singer:"WEST.",date:"2022-08-03",lyrics:""},{id:208,title:"サマーレイン",titleKana:"さまーれいん",lyricist:"山崎あおい",composer:"川口進・MiNE・Atsushi Shimada",arranger:"井上薫",album:["星の雨","星の雨[通常盤]"],announce:"f",singer:"WEST.",date:"2022-08-03",lyrics:""},{id:209,title:"Summer Memories",titleKana:"Summer Memories",lyricist:"山下洋介",composer:"山下洋介",arranger:"山下洋介",album:["星の雨","星の雨[通販盤]"],announce:"f",singer:"WEST.",date:"2022-08-03",lyrics:""},{id:210,title:"POWER",titleKana:"POWER",lyricist:"中村瑛彦・栗原暁(Jazzin'park)",composer:"中村瑛彦・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)・中村瑛彦",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:211,title:"WEST NIGHT",titleKana:"WEST NIGHT",lyricist:"こやまたくや(ヤバイTシャツ屋さん)",composer:"こやまたくや(ヤバイTシャツ屋さん)",arranger:"ha-j",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:212,title:"Rewind It Back",titleKana:"Rewind It Back",lyricist:"PURPLE NIGHT",composer:"PURPLE NIGHT",arranger:"PURPLE NIGHT",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:213,title:"膝銀座",titleKana:"ひざぎんざ",lyricist:"ミヤケ武器",composer:"ミヤケ武器",arranger:"ミヤケ武器",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:214,title:"恋にて",titleKana:"こいにて",lyricist:"ARAKI",composer:"ARAKI",arranger:"ARAKI",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:215,title:"Share The Time",titleKana:"Share The Time",lyricist:"Yu-ki Kokubo",composer:"Yu-ki Kokubo・Eunsol(1008)・SUNHEE",arranger:"Eunsol(1008)・ Gou Ishikuro",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"f",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:216,title:"Mood",titleKana:"Mood",lyricist:"D&H(PURPLE NIGHT)",composer:"Adam Alexander Sjostrand・Tobias Naslund・Maria Marcus",arranger:"Tobias Naslund・前田佑",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:217,title:"We're the one",titleKana:"We're the one",lyricist:"川口進・坂室賢一",composer:"川口進・坂室賢一",arranger:"井上薫",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:218,title:"むちゃくちゃなフォーム",titleKana:"むちゃくちゃなふぉーむ",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"久保田真悟(Jazzin'park)",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:219,title:"忘れないでいてね",titleKana:"わすれないでいてね",lyricist:"大橋ちっぽけ",composer:"大橋ちっぽけ",arranger:"岩崎隆一",album:["POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:220,title:"アンノウン",titleKana:"あんのうん",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["POWER","POWER[初回A]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:221,title:"Guilty",titleKana:"Guilty",lyricist:"渡辺拓也",composer:"渡辺拓也",arranger:"渡辺拓也",album:["POWER","POWER[初回A]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:222,title:"似てないふたり",titleKana:"にてないふたり",lyricist:"吉田崇展",composer:"ズーカラデル",arranger:"ズーカラデル",album:["POWER","POWER[初回A]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:223,title:"真っ直ぐ",titleKana:"まっすぐ",lyricist:"ティーナ•カリーナ",composer:"松本良喜",arranger:"松本良喜",album:["POWER","POWER[初回B]"],announce:"t",singer:"桐山照史＆神山智洋",date:"2023-03-01",lyrics:""},{id:224,title:"ぼくらしく",titleKana:"ぼくらしく",lyricist:"竹原ピストル",composer:"竹原ピストル",arranger:"河野圭",album:["POWER","POWER[初回B]"],announce:"t",singer:"重岡大毅＆藤井流星",date:"2023-03-01",lyrics:""},{id:225,title:"エゴと一途",titleKana:"えごといちず",lyricist:"Penthouse",composer:"Penthouse",arranger:"TARO MIZOTE・須田悦弘(Relic Lyric inc.)",album:["POWER","POWER[初回B]"],announce:"t",singer:"中間淳太＆濵田崇裕＆小瀧望",date:"2023-03-01",lyrics:""},{id:226,title:"Strike a blow",titleKana:"Strike a blow",lyricist:"神山智洋",composer:"神山智洋",arranger:"MUTEKI DEAD SNAKE",album:["POWER","POWER[通常盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:227,title:"Don't be afraid",titleKana:"Don't be afraid",lyricist:"MORISHIN",composer:"MORISHIN・REO",arranger:"REO",album:["POWER","POWER[通常盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:228,title:"ハルカナレ",titleKana:"はるかなれ",lyricist:"岩越涼大",composer:"川口進・佐原康太・兼松衆",arranger:"井上薫",album:["POWER","POWER[通常盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:229,title:"調子っぱずれの僕の歌",titleKana:"ちょうしっぱずれのぼくのうた",lyricist:"浅利進吾",composer:"浅利進吾",arranger:"",album:["POWER","POWER[通販盤]"],announce:"f",singer:"WEST.",date:"2023-03-01",lyrics:"井上薫"},{id:230,title:"SOUL 2 SOUL〈Special Wind Orchestra Collab Ver.〉",titleKana:"SOUL 2 SOUL〈Special Wind Orchestra Collab Ver.〉",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)・村田陽一",album:["POWER","POWER[通販盤]"],announce:"t",singer:"WEST.",date:"2023-03-01",lyrics:""},{id:231,title:"しあわせの花",titleKana:"しあわせのはな",lyricist:"山口隆(サンボマスター)",composer:"山口隆(サンボマスター)",arranger:"ha-j",album:["しあわせの花","しあわせの花[初回A]","しあわせの花[初回B]","しあわせの花[通常盤]","しあわせの花[通販盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2023-06-07",lyrics:""},{id:232,title:"パロディ",titleKana:"ぱろでぃ",lyricist:"栗原暁(Jazzin'park)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["しあわせの花","しあわせの花[初回A]","しあわせの花[初回B]","しあわせの花[通常盤]","しあわせの花[通販盤]"],announce:"t",singer:"WEST.",date:"2023-06-07",lyrics:""},{id:233,title:"恋は負け認めなきゃ勝てない",titleKana:"こいはまけみとめなきゃかてない",lyricist:"ゆっきゅん",composer:"高橋諒",arranger:"高橋諒",album:["しあわせの花","しあわせの花[初回A]"],announce:"t",singer:"WEST.",date:"2023-06-07",lyrics:""},{id:234,title:"On & On",titleKana:"On & On",lyricist:"栗原暁(Jazzin'park)・D&H(PURPLE NIGHT)",composer:"久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)・D&H(PURPLE NIGHT)",arranger:"久保田真悟(Jazzin'park)",album:["しあわせの花","しあわせの花[初回B]"],announce:"f",singer:"WEST.",date:"2023-06-07",lyrics:""},{id:235,title:"弱くても",titleKana:"よわくても",lyricist:"岩越涼大",composer:"岩越涼大",arranger:"生田真心",album:["しあわせの花","しあわせの花[通常盤]","しあわせの花[通販盤]"],announce:"f",singer:"WEST.",date:"2023-06-07",lyrics:""},{id:236,title:"大それたロックンロール",titleKana:"だいそれたろっくんろーる",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["しあわせの花","しあわせの花[通常盤]"],announce:"f",singer:"WEST.",date:"2023-06-07",lyrics:""},{id:237,title:"パイル",titleKana:"ぱいる",lyricist:"河原健介",composer:"河原健介",arranger:"石塚知生　　　",album:["しあわせの花","しあわせの花[通販盤]"],announce:"f",singer:"WEST.",date:"2023-06-07",lyrics:""},{id:238,title:"絶体絶命",titleKana:"ぜったいぜつめい",lyricist:"杉山勝彦",composer:"杉山勝彦・佐々木”コジロー”貴之",arranger:"佐々木”コジロー”貴之",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]","絶体絶命 / Beautiful / AS ONE[初回B]","絶体絶命 / Beautiful / AS ONE[初回C]","絶体絶命 / Beautiful / AS ONE[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2023-10-25",lyrics:""},{id:239,title:"Beautiful",titleKana:"Beautiful",lyricist:"栗原暁(Jazzin'park)",composer:"栗原暁(Jazzin'park)・前田佑",arranger:"前田佑",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]","絶体絶命 / Beautiful / AS ONE[初回B]","絶体絶命 / Beautiful / AS ONE[初回C]","絶体絶命 / Beautiful / AS ONE[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2023-10-25",lyrics:""},{id:240,title:"AS ONE",titleKana:"AS ONE",lyricist:"WaO",composer:"WaO",arranger:"NAOKI-T",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]","絶体絶命 / Beautiful / AS ONE[初回B]","絶体絶命 / Beautiful / AS ONE[初回C]","絶体絶命 / Beautiful / AS ONE[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2023-10-25",lyrics:""},{id:241,title:"超きっと大丈夫",titleKana:"ちょうきっとだいじょうぶ",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]"],announce:"t",singer:"WEST.",date:"2023-10-25",lyrics:""},{id:242,title:"POP&POP",titleKana:"POP&POP",lyricist:"meiyo",composer:"meiyo",arranger:"平田洋一郎",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回B]"],announce:"f",singer:"WEST.",date:"2023-10-25",lyrics:""},{id:243,title:"BOYFRIEND",titleKana:"BOYFRIEND",lyricist:"神山智洋",composer:"神山智洋",arranger:"井上薫",translate:"D&H( PURPLE NIGHT)",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回C]"],announce:"f",singer:"WEST.",date:"2023-10-25",lyrics:""},{id:244,title:"疲れちゃうや",titleKana:"つかれちゃうや",lyricist:"Kanata Okajima",composer:"Kanata Okajima・ESME MORI",arranger:"ESME MORI",album:["絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[通常盤]"],announce:"t",singer:"WEST.",date:"2023-10-25",lyrics:""},{id:245,title:"AWARD",titleKana:"AWARD",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2024-03-13",lyrics:""},{id:246,title:"REWARD",titleKana:"REWARD",lyricist:"TAKA 3",composer:"TAKA 3・芳賀政哉",arranger:"芳賀政哉",album:["AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2024-03-13",lyrics:""},{id:247,title:"ファンタジスタ",titleKana:"ふぁんたじすた",lyricist:"今井了介・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",composer:"今井了介・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"今井了介・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",album:["AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"f",singer:"WEST.",date:"2024-03-13",lyrics:""},{id:248,title:"FICTION",titleKana:"FICTION",lyricist:"中村瑛彦・栗原暁(Jazzin'park)",composer:"中村瑛彦・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)・中村瑛彦",album:["AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2024-03-13",lyrics:""},{id:249,title:"あかさたなららら",titleKana:"あかさたなららら",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"生田真心",album:["AWARD","AWARD[初回A]"],announce:"t",singer:"WEST.",date:"2024-03-13",lyrics:""},{id:250,title:"あなたへ",titleKana:"あなたへ",lyricist:"神山智洋",composer:"神山智洋",arranger:"久保田真悟(Jazzin'park)・神山智洋",album:["AWARD","AWARD[初回B]"],announce:"t",singer:"WEST.",date:"2024-03-13",lyrics:""},{id:251,title:"あじわい",titleKana:"あじわい",lyricist:"橋口洋平(wacci)",composer:"橋口洋平(wacci)",arranger:"因幡始(wacci)",album:["AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2024-03-13",lyrics:""},{id:252,title:"We are WEST!!!!!!! (10th Anniversary Version)",titleKana:"We are WEST!!!!!!! (10th Anniversary Version)",lyricist:"神山智洋",composer:"神山智洋",arranger:"ha-j・神山智洋",album:["AWARD","AWARD[通常盤]"],announce:"t",singer:"WEST.",date:"2024-03-13",lyrics:""},{id:253,title:"ハート",titleKana:"はーと",lyricist:"柳沢亮太(SUPER BEAVER)",composer:"柳沢亮太(SUPER BEAVER)",arranger:"ha-j・柳沢亮太(SUPER BEAVER)",album:["ハート / FATE","ハート / FATE[初回A]","ハート / FATE[初回B]","ハート / FATE[通常盤]","ハート / FATE[通販盤]","A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2024-04-24",lyrics:""},{id:254,title:"FATE",titleKana:"FATE",lyricist:"久保田真悟(Jazzin'park)・UTA・AKIRA・Yohei",composer:"久保田真悟(Jazzin'park)・UTA・AKIRA・Yohei",arranger:"久保田真悟(Jazzin'park)・UTA",album:["ハート / FATE","ハート / FATE[初回A]","ハート / FATE[初回B]","ハート / FATE[通常盤]","ハート / FATE[通販盤]","A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2024-04-24",lyrics:""},{id:255,title:"・(ten)",titleKana:"ten",lyricist:"WEST.",composer:"重岡大毅・神山智洋",arranger:"ha-j・神山智洋",album:["ハート / FATE","ハート / FATE[初回A]","ハート / FATE[初回B]","ハート / FATE[通常盤]","ハート / FATE[通販盤]"],announce:"t",singer:"WEST.",date:"2024-04-24",lyrics:""},{id:256,title:"コンビニ行くけどなんかいる？",titleKana:"こんびにいくけどなんかいる？",lyricist:"ゆっきゅん",composer:"岩崎貴文",arranger:"岩崎貴文",album:["ハート / FATE","ハート / FATE[初回A]"],announce:"t",singer:"WEST.",date:"2024-04-24",lyrics:""},{id:257,title:"クセになる",titleKana:"くせになる",lyricist:"NakamuraEmi・カワムラヒロシ",composer:"NakamuraEmi・カワムラヒロシ",arranger:"カワムラヒロシ",album:["ハート / FATE","ハート / FATE[初回B]"],announce:"f",singer:"WEST.",date:"2024-04-24",lyrics:""},{id:258,title:"天空エスカレーション",titleKana:"てんくうえすかれーしょん",lyricist:"河田総一郎",composer:"河田総一郎・佐々木望",arranger:"Soulife",album:["ハート / FATE","ハート / FATE[通常盤]"],announce:"t",singer:"WEST.",date:"2024-04-24",lyrics:""},{id:259,title:"Closer",titleKana:"Closer",lyricist:"Shadow-words・篠原とまと",composer:"高橋諒",arranger:"高橋諒",album:["ハート / FATE","ハート / FATE[通販盤]"],announce:"f",singer:"WEST.",date:"2024-04-24",lyrics:""},{id:260,title:"まぁいっか！",titleKana:"まぁいっか！",lyricist:"meiyo",composer:"meiyo",arranger:"高橋諒",album:["まぁいっか！","まぁいっか！[初回A]","まぁいっか！[初回B]","まぁいっか！[通常盤]","A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2024-09-10",lyrics:""},{id:261,title:"なりふり",titleKana:"なりふり",lyricist:"Kanata Okajima・Hayato Yamamoto",composer:"Kanata Okajima・Hayato Yamamoto",arranger:"Hayato Yamamoto",album:["まぁいっか！","まぁいっか！[初回A]","まぁいっか！[初回B]","まぁいっか！[通常盤]"],announce:"t",singer:"WEST.",date:"2024-09-10",lyrics:""},{id:262,title:"I like you!!",titleKana:"I like you!!",lyricist:"山崎あおい",composer:"白戸佑輔",arranger:"白戸佑輔",album:["まぁいっか！","まぁいっか！[初回A]"],announce:"t",singer:"WEST.",date:"2024-09-10",lyrics:""},{id:263,title:"諦める主役へ",titleKana:"あきらめるしゅやくへ",lyricist:"コ太郎 from テンパーセントカーテン",composer:"コ太朗 from テンパーセントカーテン",arranger:"佐々木”コジロー”貴之",album:["まぁいっか！","まぁいっか！[初回B]"],announce:"t",singer:"WEST.",date:"2024-09-10",lyrics:""},{id:264,title:"ゴールデンタイム",titleKana:"ごーるでんたいむ",lyricist:"ET-KING・NAOKI-T",composer:"ET-KING・NAOKI-T",arranger:"NAOKI-T",album:["まぁいっか！","まぁいっか！[通常盤]"],announce:"t",singer:"WEST.",date:"2024-09-10",lyrics:""},{id:265,title:"Checkmate",titleKana:"Checkmate",lyricist:"長沢知亜紀・永野小織・Kaz Kuwamura・小木岳司",composer:"長沢知亜紀・永野小織・Kaz Kuwamura・小木岳司",arranger:"小木岳司",album:["まぁいっか！","まぁいっか！[通常盤]"],announce:"t",singer:"WEST.",date:"2024-09-10",lyrics:""},{id:266,title:"A.H.O.",titleKana:"A.H.O",lyricist:"MUTEKI DEAD SNAKE",composer:"MUTEKI DEAD SNAKE・Hiroki Sagawa・児山啓介・鈴木まなか(Relic Lyric, inc.)",arranger:"Hiroki Sagawa(Relic Lyric inc.)",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:267,title:"アップルパイ",titleKana:"あっぷるぱい",lyricist:"篠原とまと",composer:"川口進・MiNE・佐原康太",arranger:"佐原康太",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:268,title:"shhhhhhh!!",titleKana:"shhhhhhh!!",lyricist:"前田佑・栗原暁(Jazzin’park)",composer:"前田佑・栗原暁(Jazzin’park)",arranger:"前田佑",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:269,title:"TICKTOK",titleKana:"TICKTOK",lyricist:"TSINGTAO・Sorato・Dvii・Ryo Ito",composer:"TSINGTAO・Sorato・Dvii・Ryo Ito",arranger:"Sorato",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:270,title:"Sweety",titleKana:"Sweety",lyricist:"CONY・Sayaka Inoue",composer:"CONY・Sayaka Inoue",arranger:"CONY",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:271,title:"Rainy Rhapsody",titleKana:"Rainy Rhapsody",lyricist:"大原拓真(Penthouse)",composer:"浪岡真太郎(Penthouse)",arranger:"久保田真悟(Jazzin'park)・浪岡真太郎(Penthouse)",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:272,title:"それいけベストフレンド！",titleKana:"それいけべすとふれんど！",lyricist:"重岡大毅",composer:"重岡大毅",arranger:"ha-j",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:273,title:"WESTraight",titleKana:"WESTraight",lyricist:"KOPERU・peko・コーラ・KBD・teppei・HATCH・KZ・KennyDoes",composer:"Cosaqu",arranger:"Cosaqu",produce:"梅田サイファー",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:274,title:"ティダ",titleKana:"てぃだ",lyricist:"東里梨生",composer:"東里梨生",arranger:"芳賀政哉",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:275,title:"SOUTH WEST BEACH!!",titleKana:"SOUTH WEST BEACH!!",lyricist:"キヨサク",composer:"キヨサク",arranger:"ha-j",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:276,title:"Go.",titleKana:"Go.",lyricist:"Soflan Daichi",composer:"鈴木盛広",arranger:"鈴木盛広",stringsarrange:"服部瑞樹",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]"],announce:"f",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:277,title:"この旋律よ 誰かの歌になれ",titleKana:"このせんりつよ だれかのうたになれ",lyricist:"Kanata Okajima・栗原暁(Jazzin'park)",composer:"Kanata Okajima・久保田真悟(Jazzin’park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin’park)",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回B]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:278,title:"パワースポット俺",titleKana:"ぱわーすぽっとおれ",lyricist:"ミヤケ武器",composer:"ミヤケ武器",arranger:"井上薫",album:["A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[通常盤]"],announce:"t",singer:"WEST.",date:"2025-03-12",lyrics:""},{id:279,title:"ウェッサイソウル！",titleKana:"うぇっさいそうる！",lyricist:"トータス松本",composer:"トータス松本",arranger:"ウルフルズ・菅原龍平",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回A]","ウェッサイソウル！ / BIG LOVE SONG[初回B]","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],announce:"t",singer:"WEST.",date:"2025-05-07",lyrics:""},{id:280,title:"BIG LOVE SONG",titleKana:"BIG LOVE SONG",lyricist:"AKIRA・栗原暁(Jazzin'park)",composer:"AKIRA・久保田真悟(Jazzin'park)・栗原暁(Jazzin'park)",arranger:"久保田真悟(Jazzin'park)",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回A]","ウェッサイソウル！ / BIG LOVE SONG[初回B]","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],announce:"t",singer:"WEST.",date:"2025-05-07",lyrics:""},{id:281,title:"君の嫌いな君",titleKana:"きみのきらいなきみ",lyricist:"ゆっきゅん",composer:"如月結愛",arranger:"如月結愛",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回A]"],announce:"f",singer:"WEST.",date:"2025-05-07",lyrics:""},{id:282,title:"escape",titleKana:"escape",lyricist:"Yohei",composer:"前田佑・Yohei",arranger:"前田佑",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回B]"],announce:"f",singer:"WEST.",date:"2025-05-07",lyrics:""},{id:283,title:"春びより",titleKana:"はるびより",lyricist:"瀬奈",composer:"竹内聖",arranger:"竹内聖",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],announce:"t",singer:"WEST.",date:"2025-05-07",lyrics:""},{id:284,title:"僕だけの小さな花",titleKana:"ぼくだけのちいさなはな",lyricist:"篠原とまと",composer:"山田竜平",arranger:"山田竜平",album:["ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],announce:"f",singer:"WEST.",date:"2025-05-07",lyrics:""}],km=({song:O,onClose:P})=>{if(!O)return null;const U=Y=>Y==="t"?"披露あり":Y==="f"?"未披露":"不明",g=O.album.filter(Y=>Y.includes("[")&&Y.includes("]"));return B.jsx("div",{className:"modal-overlay",onClick:P,children:B.jsxs("div",{className:"modal-content",onClick:Y=>Y.stopPropagation(),children:[B.jsx("h2",{children:O.title}),B.jsxs("p",{children:[B.jsx("strong",{children:"作詞者:"})," ",B.jsx("span",{className:"modal-item-value",children:O.lyricist})]}),"   ",B.jsxs("p",{children:[B.jsx("strong",{children:"作曲者:"})," ",B.jsx("span",{className:"modal-item-value",children:O.composer})]})," ",O.arranger&&B.jsxs("p",{children:[B.jsx("strong",{children:"編曲者:"})," ",B.jsx("span",{className:"modal-item-value",children:O.arranger})]}),B.jsxs("p",{children:[B.jsx("strong",{children:"ユニット:"})," ",B.jsx("span",{className:"modal-item-value",children:O.singer||"WEST."})]})," ",B.jsxs("p",{children:[B.jsx("strong",{children:"発売日:"})," ",B.jsx("span",{className:"modal-item-value",children:O.date})]}),"      ",B.jsx("p",{children:B.jsx("strong",{children:"収録シングル/アルバム:"})}),B.jsxs("ul",{children:[g.map((Y,q)=>B.jsx("li",{children:B.jsx("span",{className:"modal-item-value",children:Y})},q)),g.length===0&&B.jsx("li",{children:B.jsx("span",{className:"modal-item-value",children:"[]付きの収録はありません"})})]}),B.jsxs("p",{children:[B.jsx("strong",{children:"披露情報:"})," ",B.jsx("span",{className:"modal-item-value",children:U(O.announce)})]})," ",O.lyrics&&B.jsxs("div",{className:"lyrics-section",children:[" ",B.jsx("h3",{children:"歌詞"}),B.jsx("p",{className:"modal-lyrics-text",children:O.lyrics})," "]}),B.jsx("button",{onClick:P,className:"modal-close-button",children:"閉じる"})]})})},Um=["タイトル","作詞者","作曲者","収録","披露","ユニット"];function _m(){const[O,P]=La.useState(""),[U,g]=La.useState("タイトル"),[Y,q]=La.useState("name_asc"),[sn,On]=La.useState(null),[L,v]=La.useState(!1);La.useEffect(()=>{P("")},[U]);const N=["ええじゃないか","ええじゃないか[初回盤]","ええじゃないか[MY BEST CD盤]","ええじゃないか[通常盤]","go WEST よーいドン！","go WEST よーいドン！[初回盤]","go WEST よーいドン！[通常盤]","ジパング・おおきに大作戦/夢を抱きしめて","ジパング・おおきに大作戦/夢を抱きしめて[初回A]","ジパング・おおきに大作戦/夢を抱きしめて[初回B]","ジパング・おおきに大作戦/夢を抱きしめて[初回C]","ジパング・おおきに大作戦/夢を抱きしめて[通常盤]","ズンドコ パラダイス","ズンドコ パラダイス[初回A]","ズンドコ パラダイス[初回B]","ズンドコ パラダイス[通常盤]","パリピポ","パリピポ[初回盤]","パリピポ[通常盤]","バリ ハピ","バリ ハピ[初回A]","バリ ハピ[初回B]","バリ ハピ[通常盤]","ラッキィィィィィィィ7","ラッキィィィィィィィ7[初回盤]","ラッキィィィィィィィ7[通常盤]","逆転Winner","逆転Winner[初回A]","逆転Winner[初回B]","逆転Winner[通常盤]","人生は素晴らしい","人生は素晴らしい[初回A]","人生は素晴らしい[初回B]","人生は素晴らしい[通常盤]","なうぇすと","なうぇすと[初回盤]","なうぇすと[通常盤]","おーさか☆愛・EYE・哀/Ya! Hot! Hot!","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回A]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回B]","おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]","僕ら今日も生きている/考えるな、燃えろ!!","僕ら今日も生きている/考えるな、燃えろ!![初回A]","僕ら今日も生きている/考えるな、燃えろ!![初回B]","僕ら今日も生きている/考えるな、燃えろ!![通常盤]","WESTival","WESTival[初回盤]","WESTival[通常盤]","プリンシパルの君へ/ドラゴンドッグ","プリンシパルの君へ/ドラゴンドッグ[初回A]","プリンシパルの君へ/ドラゴンドッグ[初回B]","プリンシパルの君へ/ドラゴンドッグ[通常盤]","スタートダッシュ!","スタートダッシュ![初回A]","スタートダッシュ![初回B]","スタートダッシュ![通常盤]","WESTV！","WESTV！[初回盤]","WESTV！[通常盤]","ホメチギリスト/傷だらけの愛","ホメチギリスト/傷だらけの愛[初回A]","ホメチギリスト/傷だらけの愛[初回B]","ホメチギリスト/傷だらけの愛[通常盤]","アメノチハレ","アメノチハレ[初回A]","アメノチハレ[初回B]","アメノチハレ[通常盤]","Big Shot!!","Big Shot!![初回A]","Big Shot!![初回B]","Big Shot!![通常盤]","W trouble","W trouble[初回A]","W trouble[初回B]","W trouble[通常盤]","W trouble[通販盤]","証拠","証拠[初回A]","証拠[初回B]","証拠[通常盤]","週刊うまくいく曜日","週刊うまくいく曜日[初回A]","週刊うまくいく曜日[初回B]","週刊うまくいく曜日[通常盤]","rainboW","rainboW[初回A]","rainboW[初回B]","rainboW[通常盤]","rainboW[通販盤]","サムシング・ニュー","サムシング・ニュー[初回A]","サムシング・ニュー[初回B]","サムシング・ニュー[通常盤]","でっかい愛/喜努愛楽","でっかい愛/喜努愛楽[初回A]","でっかい愛/喜努愛楽[初回B]","でっかい愛/喜努愛楽[通常盤]","黎明/進むしかねぇ","黎明/進むしかねぇ[初回A]","黎明/進むしかねぇ[初回B]","黎明/進むしかねぇ[通常盤]","Mixed Juice","Mixed Juice[初回A]","Mixed Juice[初回B]","Mixed Juice[通常盤]","星の雨","星の雨[初回A]","星の雨[初回B]","星の雨[通常盤]","星の雨[通販盤]","POWER","POWER[初回A]","POWER[初回B]","POWER[通常盤]","POWER[通販盤]","しあわせの花","しあわせの花[初回A]","しあわせの花[初回B]","しあわせの花[通常盤]","しあわせの花[通販盤]","絶体絶命 / Beautiful / AS ONE","絶体絶命 / Beautiful / AS ONE[初回A]","絶体絶命 / Beautiful / AS ONE[初回B]","絶体絶命 / Beautiful / AS ONE[初回C]","絶体絶命 / Beautiful / AS ONE[通常盤]","AWARD","AWARD[初回A]","AWARD[初回B]","AWARD[通常盤]","ハート / FATE","ハート / FATE[初回A]","ハート / FATE[初回B]","ハート / FATE[通常盤]","ハート / FATE[通販盤]","まぁいっか！","まぁいっか！[初回A]","まぁいっか！[初回B]","まぁいっか！[通常盤]","A.H.O. -Audio Hang Out-","A.H.O. -Audio Hang Out-[初回A]","A.H.O. -Audio Hang Out-[初回B]","A.H.O. -Audio Hang Out-[通常盤]","ウェッサイソウル！ / BIG LOVE SONG","ウェッサイソウル！ / BIG LOVE SONG[初回A]","ウェッサイソウル！ / BIG LOVE SONG[初回B]","ウェッサイソウル！ / BIG LOVE SONG[通常盤]"],un=Array.from(new Set(uy.map(H=>H.singer).filter(Boolean))),en=[{label:"⇅ 名前順(あ→わ)",value:"name_asc"},{label:"⇅ 名前順(わ→あ)",value:"name_desc"},{label:"⇅ 古い曲順",value:"date_asc"},{label:"⇅ 新しい曲順",value:"date_desc"}],Wn=uy.filter(H=>{const Yn=O.toLowerCase();return U==="タイトル"?H.title.toLowerCase().includes(Yn):U==="作詞者"?H.lyricist.toLowerCase().includes(Yn):U==="作曲者"?H.composer.toLowerCase().includes(Yn):U==="収録"?O===""||H.album.includes(O):U==="披露"?O==="披露あり"?H.announce=="t":O==="未披露"?H.announce==="f":!0:U==="ユニット"?O===""||H.singer===O:!0}).sort((H,Yn)=>{const ue=mn=>{const pn=mn.charAt(0);return pn.match(/^[\u3040-\u30FF]/)?0:pn.match(/^[a-zA-Z]/)?1:2};if(Y==="name_asc"||Y==="name_desc"){const mn=ue(H.titleKana),pn=ue(Yn.titleKana);return mn!==pn?Y==="name_asc"?mn-pn:pn-mn:Y==="name_asc"?H.titleKana.localeCompare(Yn.titleKana,"ja",{sensitivity:"base"}):Yn.titleKana.localeCompare(H.titleKana,"ja",{sensitivity:"base"})}return Y==="date_asc"?new Date(H.date)-new Date(Yn.date):Y==="date_desc"?new Date(Yn.date)-new Date(H.date):0}),Mn=H=>{On(H),v(!0)},qn=()=>{v(!1),On(null)};return B.jsxs("div",{className:"container",children:[B.jsx("h1",{children:"WEST. 楽曲リスト"}),B.jsxs("div",{className:"controls",children:[B.jsx("select",{value:U,onChange:H=>g(H.target.value),children:Um.map(H=>B.jsx("option",{value:H,children:H},H))}),U==="収録"?B.jsxs("select",{value:O,onChange:H=>P(H.target.value),children:[B.jsx("option",{value:"",children:"すべての収録"}),N.map(H=>B.jsx("option",{value:H,children:H},H))]}):U==="ユニット"?B.jsxs("select",{value:O,onChange:H=>P(H.target.value),children:[B.jsx("option",{value:"",children:"すべてのユニット"}),un.map(H=>B.jsx("option",{value:H,children:H},H))]}):U==="披露"?B.jsxs("select",{value:O,onChange:H=>P(H.target.value),children:[B.jsx("option",{value:"",children:"すべての曲"}),B.jsx("option",{value:"披露あり",children:"披露あり"}),B.jsx("option",{value:"未披露",children:"未披露"})]}):B.jsx("input",{type:"text",placeholder:`${U}で検索...`,value:O,onChange:H=>P(H.target.value)}),B.jsx("select",{value:Y,onChange:H=>q(H.target.value),children:en.map(H=>B.jsx("option",{value:H.value,children:H.label},H.value))})]}),B.jsxs("div",{style:{marginBottom:"0.5rem",fontSize:"0.9rem"},children:[Wn.length," 件の曲が見つかりました"]}),B.jsx("div",{className:"song-list-wrapper",children:B.jsxs("div",{className:"song-list",children:[B.jsxs("div",{className:"song-header",children:[B.jsx("span",{children:"タイトル"}),B.jsx("span",{children:"作詞者"}),B.jsx("span",{children:"作曲者"}),B.jsx("span",{children:"初収録"}),B.jsx("span",{children:"発売日"})]}),Wn.map(H=>B.jsxs("div",{className:"song-card",onClick:()=>Mn(H),children:[B.jsx("span",{className:"song-title",children:H.title}),B.jsx("span",{children:H.lyricist}),B.jsx("span",{children:H.composer}),B.jsx("span",{children:H.album[0]}),B.jsx("span",{className:"song-date",children:H.date})]},H.id))]})}),L&&sn&&B.jsx(km,{song:sn,onClose:qn})]})}wm.createRoot(document.getElementById("root")).render(B.jsx(La.StrictMode,{children:B.jsx(_m,{})}));
