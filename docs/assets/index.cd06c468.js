const ql=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};ql();function oo(t,e){const r=Object.create(null),n=t.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return e?o=>!!r[o.toLowerCase()]:o=>!!r[o]}const Vl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gl=oo(Vl);function ai(t){return!!t||t===""}function ao(t){if(B(t)){const e={};for(let r=0;r<t.length;r++){const n=t[r],o=ut(n)?Jl(n):ao(n);if(o)for(const a in o)e[a]=o[a]}return e}else{if(ut(t))return t;if(mt(t))return t}}const Xl=/;(?![^(]*\))/g,Ql=/:(.+)/;function Jl(t){const e={};return t.split(Xl).forEach(r=>{if(r){const n=r.split(Ql);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function io(t){let e="";if(ut(t))e=t;else if(B(t))for(let r=0;r<t.length;r++){const n=io(t[r]);n&&(e+=n+" ")}else if(mt(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const Vp=t=>ut(t)?t:t==null?"":B(t)||mt(t)&&(t.toString===ci||!H(t.toString))?JSON.stringify(t,ii,2):String(t),ii=(t,e)=>e&&e.__v_isRef?ii(t,e.value):Me(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[n,o])=>(r[`${n} =>`]=o,r),{})}:li(e)?{[`Set(${e.size})`]:[...e.values()]}:mt(e)&&!B(e)&&!di(e)?String(e):e,rt={},je=[],Tt=()=>{},Zl=()=>!1,ts=/^on[^a-z]/,Vr=t=>ts.test(t),lo=t=>t.startsWith("onUpdate:"),ht=Object.assign,so=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},es=Object.prototype.hasOwnProperty,K=(t,e)=>es.call(t,e),B=Array.isArray,Me=t=>Gr(t)==="[object Map]",li=t=>Gr(t)==="[object Set]",H=t=>typeof t=="function",ut=t=>typeof t=="string",co=t=>typeof t=="symbol",mt=t=>t!==null&&typeof t=="object",si=t=>mt(t)&&H(t.then)&&H(t.catch),ci=Object.prototype.toString,Gr=t=>ci.call(t),rs=t=>Gr(t).slice(8,-1),di=t=>Gr(t)==="[object Object]",mo=t=>ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cr=oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xr=t=>{const e=Object.create(null);return r=>e[r]||(e[r]=t(r))},ns=/-(\w)/g,Ht=Xr(t=>t.replace(ns,(e,r)=>r?r.toUpperCase():"")),os=/\B([A-Z])/g,Ue=Xr(t=>t.replace(os,"-$1").toLowerCase()),Qr=Xr(t=>t.charAt(0).toUpperCase()+t.slice(1)),un=Xr(t=>t?`on${Qr(t)}`:""),cr=(t,e)=>!Object.is(t,e),gn=(t,e)=>{for(let r=0;r<t.length;r++)t[r](e)},Nr=(t,e,r)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:r})},as=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yo;const is=()=>Yo||(Yo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ft;class ls{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ft&&(this.parent=Ft,this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}run(e){if(this.active){const r=Ft;try{return Ft=this,e()}finally{Ft=r}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this.active){let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.scopes)for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);if(this.parent&&!e){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function ss(t,e=Ft){e&&e.active&&e.effects.push(t)}const fo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mi=t=>(t.w&de)>0,fi=t=>(t.n&de)>0,cs=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=de},ds=t=>{const{deps:e}=t;if(e.length){let r=0;for(let n=0;n<e.length;n++){const o=e[n];mi(o)&&!fi(o)?o.delete(t):e[r++]=o,o.w&=~de,o.n&=~de}e.length=r}},Cn=new WeakMap;let Xe=0,de=1;const On=30;let Pt;const xe=Symbol(""),Pn=Symbol("");class po{constructor(e,r=null,n){this.fn=e,this.scheduler=r,this.active=!0,this.deps=[],this.parent=void 0,ss(this,n)}run(){if(!this.active)return this.fn();let e=Pt,r=le;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pt,Pt=this,le=!0,de=1<<++Xe,Xe<=On?cs(this):Wo(this),this.fn()}finally{Xe<=On&&ds(this),de=1<<--Xe,Pt=this.parent,le=r,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pt===this?this.deferStop=!0:this.active&&(Wo(this),this.onStop&&this.onStop(),this.active=!1)}}function Wo(t){const{deps:e}=t;if(e.length){for(let r=0;r<e.length;r++)e[r].delete(t);e.length=0}}let le=!0;const pi=[];function He(){pi.push(le),le=!1}function Ye(){const t=pi.pop();le=t===void 0?!0:t}function _t(t,e,r){if(le&&Pt){let n=Cn.get(t);n||Cn.set(t,n=new Map);let o=n.get(r);o||n.set(r,o=fo()),ui(o)}}function ui(t,e){let r=!1;Xe<=On?fi(t)||(t.n|=de,r=!mi(t)):r=!t.has(Pt),r&&(t.add(Pt),Pt.deps.push(t))}function qt(t,e,r,n,o,a){const i=Cn.get(t);if(!i)return;let l=[];if(e==="clear")l=[...i.values()];else if(r==="length"&&B(t))i.forEach((s,d)=>{(d==="length"||d>=n)&&l.push(s)});else switch(r!==void 0&&l.push(i.get(r)),e){case"add":B(t)?mo(r)&&l.push(i.get("length")):(l.push(i.get(xe)),Me(t)&&l.push(i.get(Pn)));break;case"delete":B(t)||(l.push(i.get(xe)),Me(t)&&l.push(i.get(Pn)));break;case"set":Me(t)&&l.push(i.get(xe));break}if(l.length===1)l[0]&&Sn(l[0]);else{const s=[];for(const d of l)d&&s.push(...d);Sn(fo(s))}}function Sn(t,e){const r=B(t)?t:[...t];for(const n of r)n.computed&&Ko(n);for(const n of r)n.computed||Ko(n)}function Ko(t,e){(t!==Pt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ms=oo("__proto__,__v_isRef,__isVue"),gi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(co)),fs=uo(),ps=uo(!1,!0),us=uo(!0),qo=gs();function gs(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...r){const n=V(this);for(let a=0,i=this.length;a<i;a++)_t(n,"get",a+"");const o=n[e](...r);return o===-1||o===!1?n[e](...r.map(V)):o}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...r){He();const n=V(this)[e].apply(this,r);return Ye(),n}}),t}function uo(t=!1,e=!1){return function(n,o,a){if(o==="__v_isReactive")return!t;if(o==="__v_isReadonly")return t;if(o==="__v_isShallow")return e;if(o==="__v_raw"&&a===(t?e?Rs:wi:e?vi:xi).get(n))return n;const i=B(n);if(!t&&i&&K(qo,o))return Reflect.get(qo,o,a);const l=Reflect.get(n,o,a);return(co(o)?gi.has(o):ms(o))||(t||_t(n,"get",o),e)?l:gt(l)?i&&mo(o)?l:l.value:mt(l)?t?yi(l):xr(l):l}}const bs=bi(),hs=bi(!0);function bi(t=!1){return function(r,n,o,a){let i=r[n];if(dr(i)&&gt(i)&&!gt(o))return!1;if(!t&&!dr(o)&&(Rn(o)||(o=V(o),i=V(i)),!B(r)&&gt(i)&&!gt(o)))return i.value=o,!0;const l=B(r)&&mo(n)?Number(n)<r.length:K(r,n),s=Reflect.set(r,n,o,a);return r===V(a)&&(l?cr(o,i)&&qt(r,"set",n,o):qt(r,"add",n,o)),s}}function xs(t,e){const r=K(t,e);t[e];const n=Reflect.deleteProperty(t,e);return n&&r&&qt(t,"delete",e,void 0),n}function vs(t,e){const r=Reflect.has(t,e);return(!co(e)||!gi.has(e))&&_t(t,"has",e),r}function ws(t){return _t(t,"iterate",B(t)?"length":xe),Reflect.ownKeys(t)}const hi={get:fs,set:bs,deleteProperty:xs,has:vs,ownKeys:ws},ys={get:us,set(t,e){return!0},deleteProperty(t,e){return!0}},ks=ht({},hi,{get:ps,set:hs}),go=t=>t,Jr=t=>Reflect.getPrototypeOf(t);function yr(t,e,r=!1,n=!1){t=t.__v_raw;const o=V(t),a=V(e);r||(e!==a&&_t(o,"get",e),_t(o,"get",a));const{has:i}=Jr(o),l=n?go:r?xo:mr;if(i.call(o,e))return l(t.get(e));if(i.call(o,a))return l(t.get(a));t!==o&&t.get(e)}function kr(t,e=!1){const r=this.__v_raw,n=V(r),o=V(t);return e||(t!==o&&_t(n,"has",t),_t(n,"has",o)),t===o?r.has(t):r.has(t)||r.has(o)}function _r(t,e=!1){return t=t.__v_raw,!e&&_t(V(t),"iterate",xe),Reflect.get(t,"size",t)}function Vo(t){t=V(t);const e=V(this);return Jr(e).has.call(e,t)||(e.add(t),qt(e,"add",t,t)),this}function Go(t,e){e=V(e);const r=V(this),{has:n,get:o}=Jr(r);let a=n.call(r,t);a||(t=V(t),a=n.call(r,t));const i=o.call(r,t);return r.set(t,e),a?cr(e,i)&&qt(r,"set",t,e):qt(r,"add",t,e),this}function Xo(t){const e=V(this),{has:r,get:n}=Jr(e);let o=r.call(e,t);o||(t=V(t),o=r.call(e,t)),n&&n.call(e,t);const a=e.delete(t);return o&&qt(e,"delete",t,void 0),a}function Qo(){const t=V(this),e=t.size!==0,r=t.clear();return e&&qt(t,"clear",void 0,void 0),r}function Ar(t,e){return function(n,o){const a=this,i=a.__v_raw,l=V(i),s=e?go:t?xo:mr;return!t&&_t(l,"iterate",xe),i.forEach((d,c)=>n.call(o,s(d),s(c),a))}}function Er(t,e,r){return function(...n){const o=this.__v_raw,a=V(o),i=Me(a),l=t==="entries"||t===Symbol.iterator&&i,s=t==="keys"&&i,d=o[t](...n),c=r?go:e?xo:mr;return!e&&_t(a,"iterate",s?Pn:xe),{next(){const{value:f,done:u}=d.next();return u?{value:f,done:u}:{value:l?[c(f[0]),c(f[1])]:c(f),done:u}},[Symbol.iterator](){return this}}}}function te(t){return function(...e){return t==="delete"?!1:this}}function _s(){const t={get(a){return yr(this,a)},get size(){return _r(this)},has:kr,add:Vo,set:Go,delete:Xo,clear:Qo,forEach:Ar(!1,!1)},e={get(a){return yr(this,a,!1,!0)},get size(){return _r(this)},has:kr,add:Vo,set:Go,delete:Xo,clear:Qo,forEach:Ar(!1,!0)},r={get(a){return yr(this,a,!0)},get size(){return _r(this,!0)},has(a){return kr.call(this,a,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:Ar(!0,!1)},n={get(a){return yr(this,a,!0,!0)},get size(){return _r(this,!0)},has(a){return kr.call(this,a,!0)},add:te("add"),set:te("set"),delete:te("delete"),clear:te("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=Er(a,!1,!1),r[a]=Er(a,!0,!1),e[a]=Er(a,!1,!0),n[a]=Er(a,!0,!0)}),[t,r,e,n]}const[As,Es,zs,Cs]=_s();function bo(t,e){const r=e?t?Cs:zs:t?Es:As;return(n,o,a)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?n:Reflect.get(K(r,o)&&o in n?r:n,o,a)}const Os={get:bo(!1,!1)},Ps={get:bo(!1,!0)},Ss={get:bo(!0,!1)},xi=new WeakMap,vi=new WeakMap,wi=new WeakMap,Rs=new WeakMap;function Is(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ts(t){return t.__v_skip||!Object.isExtensible(t)?0:Is(rs(t))}function xr(t){return dr(t)?t:ho(t,!1,hi,Os,xi)}function js(t){return ho(t,!1,ks,Ps,vi)}function yi(t){return ho(t,!0,ys,Ss,wi)}function ho(t,e,r,n,o){if(!mt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=o.get(t);if(a)return a;const i=Ts(t);if(i===0)return t;const l=new Proxy(t,i===2?n:r);return o.set(t,l),l}function Ne(t){return dr(t)?Ne(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function ki(t){return Ne(t)||dr(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function _i(t){return Nr(t,"__v_skip",!0),t}const mr=t=>mt(t)?xr(t):t,xo=t=>mt(t)?yi(t):t;function Ai(t){le&&Pt&&(t=V(t),ui(t.dep||(t.dep=fo())))}function Ei(t,e){t=V(t),t.dep&&Sn(t.dep)}function gt(t){return!!(t&&t.__v_isRef===!0)}function Ms(t){return zi(t,!1)}function Ns(t){return zi(t,!0)}function zi(t,e){return gt(t)?t:new Ls(t,e)}class Ls{constructor(e,r){this.__v_isShallow=r,this.dep=void 0,this.__v_isRef=!0,this._rawValue=r?e:V(e),this._value=r?e:mr(e)}get value(){return Ai(this),this._value}set value(e){e=this.__v_isShallow?e:V(e),cr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:mr(e),Ei(this))}}function Ze(t){return gt(t)?t.value:t}const Fs={get:(t,e,r)=>Ze(Reflect.get(t,e,r)),set:(t,e,r,n)=>{const o=t[e];return gt(o)&&!gt(r)?(o.value=r,!0):Reflect.set(t,e,r,n)}};function Ci(t){return Ne(t)?t:new Proxy(t,Fs)}class $s{constructor(e,r,n,o){this._setter=r,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new po(e,()=>{this._dirty||(this._dirty=!0,Ei(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const e=V(this);return Ai(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ds(t,e,r=!1){let n,o;const a=H(t);return a?(n=t,o=Tt):(n=t.get,o=t.set),new $s(n,o,a||!o,r)}function se(t,e,r,n){let o;try{o=n?t(...n):t()}catch(a){Zr(a,e,r)}return o}function jt(t,e,r,n){if(H(t)){const a=se(t,e,r,n);return a&&si(a)&&a.catch(i=>{Zr(i,e,r)}),a}const o=[];for(let a=0;a<t.length;a++)o.push(jt(t[a],e,r,n));return o}function Zr(t,e,r,n=!0){const o=e?e.vnode:null;if(e){let a=e.parent;const i=e.proxy,l=r;for(;a;){const d=a.ec;if(d){for(let c=0;c<d.length;c++)if(d[c](t,i,l)===!1)return}a=a.parent}const s=e.appContext.config.errorHandler;if(s){se(s,null,10,[t,i,l]);return}}Bs(t,r,o,n)}function Bs(t,e,r,n=!0){console.error(t)}let Lr=!1,In=!1;const kt=[];let Kt=0;const tr=[];let Qe=null,Oe=0;const er=[];let oe=null,Pe=0;const Oi=Promise.resolve();let vo=null,Tn=null;function Pi(t){const e=vo||Oi;return t?e.then(this?t.bind(this):t):e}function Us(t){let e=Kt+1,r=kt.length;for(;e<r;){const n=e+r>>>1;fr(kt[n])<t?e=n+1:r=n}return e}function Si(t){(!kt.length||!kt.includes(t,Lr&&t.allowRecurse?Kt+1:Kt))&&t!==Tn&&(t.id==null?kt.push(t):kt.splice(Us(t.id),0,t),Ri())}function Ri(){!Lr&&!In&&(In=!0,vo=Oi.then(ji))}function Hs(t){const e=kt.indexOf(t);e>Kt&&kt.splice(e,1)}function Ii(t,e,r,n){B(t)?r.push(...t):(!e||!e.includes(t,t.allowRecurse?n+1:n))&&r.push(t),Ri()}function Ys(t){Ii(t,Qe,tr,Oe)}function Ws(t){Ii(t,oe,er,Pe)}function tn(t,e=null){if(tr.length){for(Tn=e,Qe=[...new Set(tr)],tr.length=0,Oe=0;Oe<Qe.length;Oe++)Qe[Oe]();Qe=null,Oe=0,Tn=null,tn(t,e)}}function Ti(t){if(tn(),er.length){const e=[...new Set(er)];if(er.length=0,oe){oe.push(...e);return}for(oe=e,oe.sort((r,n)=>fr(r)-fr(n)),Pe=0;Pe<oe.length;Pe++)oe[Pe]();oe=null,Pe=0}}const fr=t=>t.id==null?1/0:t.id;function ji(t){In=!1,Lr=!0,tn(t),kt.sort((r,n)=>fr(r)-fr(n));const e=Tt;try{for(Kt=0;Kt<kt.length;Kt++){const r=kt[Kt];r&&r.active!==!1&&se(r,null,14)}}finally{Kt=0,kt.length=0,Ti(),Lr=!1,vo=null,(kt.length||tr.length||er.length)&&ji(t)}}function Ks(t,e,...r){if(t.isUnmounted)return;const n=t.vnode.props||rt;let o=r;const a=e.startsWith("update:"),i=a&&e.slice(7);if(i&&i in n){const c=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:u}=n[c]||rt;u&&(o=r.map(h=>h.trim())),f&&(o=r.map(as))}let l,s=n[l=un(e)]||n[l=un(Ht(e))];!s&&a&&(s=n[l=un(Ue(e))]),s&&jt(s,t,6,o);const d=n[l+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,jt(d,t,6,o)}}function Mi(t,e,r=!1){const n=e.emitsCache,o=n.get(t);if(o!==void 0)return o;const a=t.emits;let i={},l=!1;if(!H(t)){const s=d=>{const c=Mi(d,e,!0);c&&(l=!0,ht(i,c))};!r&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}return!a&&!l?(n.set(t,null),null):(B(a)?a.forEach(s=>i[s]=null):ht(i,a),n.set(t,i),i)}function en(t,e){return!t||!Vr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Ue(e))||K(t,e))}let Bt=null,rn=null;function Fr(t){const e=Bt;return Bt=t,rn=t&&t.type.__scopeId||null,e}function Gp(t){rn=t}function Xp(){rn=null}function Or(t,e=Bt,r){if(!e||t._n)return t;const n=(...o)=>{n._d&&la(-1);const a=Fr(e),i=t(...o);return Fr(a),n._d&&la(1),i};return n._n=!0,n._c=!0,n._d=!0,n}function bn(t){const{type:e,vnode:r,proxy:n,withProxy:o,props:a,propsOptions:[i],slots:l,attrs:s,emit:d,render:c,renderCache:f,data:u,setupState:h,ctx:E,inheritAttrs:j}=t;let O,b;const k=Fr(t);try{if(r.shapeFlag&4){const $=o||n;O=Dt(c.call($,$,f,a,h,u,E)),b=s}else{const $=e;O=Dt($.length>1?$(a,{attrs:s,slots:l,emit:d}):$(a,null)),b=e.props?s:qs(s)}}catch($){nr.length=0,Zr($,t,1),O=dt(pr)}let I=O;if(b&&j!==!1){const $=Object.keys(b),{shapeFlag:W}=I;$.length&&W&7&&(i&&$.some(lo)&&(b=Vs(b,i)),I=Fe(I,b))}return r.dirs&&(I=Fe(I),I.dirs=I.dirs?I.dirs.concat(r.dirs):r.dirs),r.transition&&(I.transition=r.transition),O=I,Fr(k),O}const qs=t=>{let e;for(const r in t)(r==="class"||r==="style"||Vr(r))&&((e||(e={}))[r]=t[r]);return e},Vs=(t,e)=>{const r={};for(const n in t)(!lo(n)||!(n.slice(9)in e))&&(r[n]=t[n]);return r};function Gs(t,e,r){const{props:n,children:o,component:a}=t,{props:i,children:l,patchFlag:s}=e,d=a.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&s>=0){if(s&1024)return!0;if(s&16)return n?Jo(n,i,d):!!i;if(s&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const u=c[f];if(i[u]!==n[u]&&!en(d,u))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:n===i?!1:n?i?Jo(n,i,d):!0:!!i;return!1}function Jo(t,e,r){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!0;for(let o=0;o<n.length;o++){const a=n[o];if(e[a]!==t[a]&&!en(r,a))return!0}return!1}function Xs({vnode:t,parent:e},r){for(;e&&e.subTree===t;)(t=e.vnode).el=r,e=e.parent}const Qs=t=>t.__isSuspense;function Js(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Ws(t)}function Pr(t,e){if(pt){let r=pt.provides;const n=pt.parent&&pt.parent.provides;n===r&&(r=pt.provides=Object.create(n)),r[t]=e}}function ce(t,e,r=!1){const n=pt||Bt;if(n){const o=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return r&&H(e)?e.call(n.proxy):e}}const Zo={};function rr(t,e,r){return Ni(t,e,r)}function Ni(t,e,{immediate:r,deep:n,flush:o,onTrack:a,onTrigger:i}=rt){const l=pt;let s,d=!1,c=!1;if(gt(t)?(s=()=>t.value,d=Rn(t)):Ne(t)?(s=()=>t,n=!0):B(t)?(c=!0,d=t.some(b=>Ne(b)||Rn(b)),s=()=>t.map(b=>{if(gt(b))return b.value;if(Ne(b))return Re(b);if(H(b))return se(b,l,2)})):H(t)?e?s=()=>se(t,l,2):s=()=>{if(!(l&&l.isUnmounted))return f&&f(),jt(t,l,3,[u])}:s=Tt,e&&n){const b=s;s=()=>Re(b())}let f,u=b=>{f=O.onStop=()=>{se(b,l,4)}};if(gr)return u=Tt,e?r&&jt(e,l,3,[s(),c?[]:void 0,u]):s(),Tt;let h=c?[]:Zo;const E=()=>{if(!!O.active)if(e){const b=O.run();(n||d||(c?b.some((k,I)=>cr(k,h[I])):cr(b,h)))&&(f&&f(),jt(e,l,3,[b,h===Zo?void 0:h,u]),h=b)}else O.run()};E.allowRecurse=!!e;let j;o==="sync"?j=E:o==="post"?j=()=>vt(E,l&&l.suspense):j=()=>Ys(E);const O=new po(s,j);return e?r?E():h=O.run():o==="post"?vt(O.run.bind(O),l&&l.suspense):O.run(),()=>{O.stop(),l&&l.scope&&so(l.scope.effects,O)}}function Zs(t,e,r){const n=this.proxy,o=ut(t)?t.includes(".")?Li(n,t):()=>n[t]:t.bind(n,n);let a;H(e)?a=e:(a=e.handler,r=e);const i=pt;$e(this);const l=Ni(o,a.bind(n),r);return i?$e(i):ve(),l}function Li(t,e){const r=e.split(".");return()=>{let n=t;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}function Re(t,e){if(!mt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),gt(t))Re(t.value,e);else if(B(t))for(let r=0;r<t.length;r++)Re(t[r],e);else if(li(t)||Me(t))t.forEach(r=>{Re(r,e)});else if(di(t))for(const r in t)Re(t[r],e);return t}function vr(t){return H(t)?{setup:t,name:t.name}:t}const Sr=t=>!!t.type.__asyncLoader,Fi=t=>t.type.__isKeepAlive;function tc(t,e){$i(t,"a",e)}function ec(t,e){$i(t,"da",e)}function $i(t,e,r=pt){const n=t.__wdc||(t.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(nn(e,n,r),r){let o=r.parent;for(;o&&o.parent;)Fi(o.parent.vnode)&&rc(n,e,r,o),o=o.parent}}function rc(t,e,r,n){const o=nn(e,t,n,!0);Di(()=>{so(n[e],o)},r)}function nn(t,e,r=pt,n=!1){if(r){const o=r[t]||(r[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(r.isUnmounted)return;He(),$e(r);const l=jt(e,r,t,i);return ve(),Ye(),l});return n?o.unshift(a):o.push(a),a}}const Qt=t=>(e,r=pt)=>(!gr||t==="sp")&&nn(t,e,r),nc=Qt("bm"),oc=Qt("m"),ac=Qt("bu"),ic=Qt("u"),lc=Qt("bum"),Di=Qt("um"),sc=Qt("sp"),cc=Qt("rtg"),dc=Qt("rtc");function mc(t,e=pt){nn("ec",t,e)}function pe(t,e,r,n){const o=t.dirs,a=e&&e.dirs;for(let i=0;i<o.length;i++){const l=o[i];a&&(l.oldValue=a[i].value);let s=l.dir[n];s&&(He(),jt(s,r,8,[t.el,l,t,e]),Ye())}}const Bi="components";function hn(t,e){return pc(Bi,t,!0,e)||t}const fc=Symbol();function pc(t,e,r=!0,n=!1){const o=Bt||pt;if(o){const a=o.type;if(t===Bi){const l=Hc(a,!1);if(l&&(l===e||l===Ht(e)||l===Qr(Ht(e))))return a}const i=ta(o[t]||a[t],e)||ta(o.appContext[t],e);return!i&&n?a:i}}function ta(t,e){return t&&(t[e]||t[Ht(e)]||t[Qr(Ht(e))])}const jn=t=>t?tl(t)?_o(t)||t.proxy:jn(t.parent):null,$r=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jn(t.parent),$root:t=>jn(t.root),$emit:t=>t.emit,$options:t=>Hi(t),$forceUpdate:t=>t.f||(t.f=()=>Si(t.update)),$nextTick:t=>t.n||(t.n=Pi.bind(t.proxy)),$watch:t=>Zs.bind(t)}),uc={get({_:t},e){const{ctx:r,setupState:n,data:o,props:a,accessCache:i,type:l,appContext:s}=t;let d;if(e[0]!=="$"){const h=i[e];if(h!==void 0)switch(h){case 1:return n[e];case 2:return o[e];case 4:return r[e];case 3:return a[e]}else{if(n!==rt&&K(n,e))return i[e]=1,n[e];if(o!==rt&&K(o,e))return i[e]=2,o[e];if((d=t.propsOptions[0])&&K(d,e))return i[e]=3,a[e];if(r!==rt&&K(r,e))return i[e]=4,r[e];Mn&&(i[e]=0)}}const c=$r[e];let f,u;if(c)return e==="$attrs"&&_t(t,"get",e),c(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(r!==rt&&K(r,e))return i[e]=4,r[e];if(u=s.config.globalProperties,K(u,e))return u[e]},set({_:t},e,r){const{data:n,setupState:o,ctx:a}=t;return o!==rt&&K(o,e)?(o[e]=r,!0):n!==rt&&K(n,e)?(n[e]=r,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:n,appContext:o,propsOptions:a}},i){let l;return!!r[i]||t!==rt&&K(t,i)||e!==rt&&K(e,i)||(l=a[0])&&K(l,i)||K(n,i)||K($r,i)||K(o.config.globalProperties,i)},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:K(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};let Mn=!0;function gc(t){const e=Hi(t),r=t.proxy,n=t.ctx;Mn=!1,e.beforeCreate&&ea(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:i,watch:l,provide:s,inject:d,created:c,beforeMount:f,mounted:u,beforeUpdate:h,updated:E,activated:j,deactivated:O,beforeDestroy:b,beforeUnmount:k,destroyed:I,unmounted:$,render:W,renderTracked:nt,renderTriggered:st,errorCaptured:Et,serverPrefetch:ft,expose:Zt,inheritAttrs:Yt,components:Ct,directives:ke,filters:_e}=e;if(d&&bc(d,n,null,t.appContext.config.unwrapInjectedRef),i)for(const tt in i){const G=i[tt];H(G)&&(n[tt]=G.bind(r))}if(o){const tt=o.call(r,r);mt(tt)&&(t.data=xr(tt))}if(Mn=!0,a)for(const tt in a){const G=a[tt],wt=H(G)?G.bind(r,r):H(G.get)?G.get.bind(r,r):Tt,Ee=!H(G)&&H(G.set)?G.set.bind(r):Tt,Wt=lt({get:wt,set:Ee});Object.defineProperty(n,tt,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Mt=>Wt.value=Mt})}if(l)for(const tt in l)Ui(l[tt],n,r,tt);if(s){const tt=H(s)?s.call(r):s;Reflect.ownKeys(tt).forEach(G=>{Pr(G,tt[G])})}c&&ea(c,t,"c");function ct(tt,G){B(G)?G.forEach(wt=>tt(wt.bind(r))):G&&tt(G.bind(r))}if(ct(nc,f),ct(oc,u),ct(ac,h),ct(ic,E),ct(tc,j),ct(ec,O),ct(mc,Et),ct(dc,nt),ct(cc,st),ct(lc,k),ct(Di,$),ct(sc,ft),B(Zt))if(Zt.length){const tt=t.exposed||(t.exposed={});Zt.forEach(G=>{Object.defineProperty(tt,G,{get:()=>r[G],set:wt=>r[G]=wt})})}else t.exposed||(t.exposed={});W&&t.render===Tt&&(t.render=W),Yt!=null&&(t.inheritAttrs=Yt),Ct&&(t.components=Ct),ke&&(t.directives=ke)}function bc(t,e,r=Tt,n=!1){B(t)&&(t=Nn(t));for(const o in t){const a=t[o];let i;mt(a)?"default"in a?i=ce(a.from||o,a.default,!0):i=ce(a.from||o):i=ce(a),gt(i)&&n?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):e[o]=i}}function ea(t,e,r){jt(B(t)?t.map(n=>n.bind(e.proxy)):t.bind(e.proxy),e,r)}function Ui(t,e,r,n){const o=n.includes(".")?Li(r,n):()=>r[n];if(ut(t)){const a=e[t];H(a)&&rr(o,a)}else if(H(t))rr(o,t.bind(r));else if(mt(t))if(B(t))t.forEach(a=>Ui(a,e,r,n));else{const a=H(t.handler)?t.handler.bind(r):e[t.handler];H(a)&&rr(o,a,t)}}function Hi(t){const e=t.type,{mixins:r,extends:n}=e,{mixins:o,optionsCache:a,config:{optionMergeStrategies:i}}=t.appContext,l=a.get(e);let s;return l?s=l:!o.length&&!r&&!n?s=e:(s={},o.length&&o.forEach(d=>Dr(s,d,i,!0)),Dr(s,e,i)),a.set(e,s),s}function Dr(t,e,r,n=!1){const{mixins:o,extends:a}=e;a&&Dr(t,a,r,!0),o&&o.forEach(i=>Dr(t,i,r,!0));for(const i in e)if(!(n&&i==="expose")){const l=hc[i]||r&&r[i];t[i]=l?l(t[i],e[i]):e[i]}return t}const hc={data:ra,props:ge,emits:ge,methods:ge,computed:ge,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:ge,directives:ge,watch:vc,provide:ra,inject:xc};function ra(t,e){return e?t?function(){return ht(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function xc(t,e){return ge(Nn(t),Nn(e))}function Nn(t){if(B(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function ge(t,e){return t?ht(ht(Object.create(null),t),e):e}function vc(t,e){if(!t)return e;if(!e)return t;const r=ht(Object.create(null),t);for(const n in e)r[n]=bt(t[n],e[n]);return r}function wc(t,e,r,n=!1){const o={},a={};Nr(a,on,1),t.propsDefaults=Object.create(null),Yi(t,e,o,a);for(const i in t.propsOptions[0])i in o||(o[i]=void 0);r?t.props=n?o:js(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function yc(t,e,r,n){const{props:o,attrs:a,vnode:{patchFlag:i}}=t,l=V(o),[s]=t.propsOptions;let d=!1;if((n||i>0)&&!(i&16)){if(i&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let u=c[f];if(en(t.emitsOptions,u))continue;const h=e[u];if(s)if(K(a,u))h!==a[u]&&(a[u]=h,d=!0);else{const E=Ht(u);o[E]=Ln(s,l,E,h,t,!1)}else h!==a[u]&&(a[u]=h,d=!0)}}}else{Yi(t,e,o,a)&&(d=!0);let c;for(const f in l)(!e||!K(e,f)&&((c=Ue(f))===f||!K(e,c)))&&(s?r&&(r[f]!==void 0||r[c]!==void 0)&&(o[f]=Ln(s,l,f,void 0,t,!0)):delete o[f]);if(a!==l)for(const f in a)(!e||!K(e,f)&&!0)&&(delete a[f],d=!0)}d&&qt(t,"set","$attrs")}function Yi(t,e,r,n){const[o,a]=t.propsOptions;let i=!1,l;if(e)for(let s in e){if(Cr(s))continue;const d=e[s];let c;o&&K(o,c=Ht(s))?!a||!a.includes(c)?r[c]=d:(l||(l={}))[c]=d:en(t.emitsOptions,s)||(!(s in n)||d!==n[s])&&(n[s]=d,i=!0)}if(a){const s=V(r),d=l||rt;for(let c=0;c<a.length;c++){const f=a[c];r[f]=Ln(o,s,f,d[f],t,!K(d,f))}}return i}function Ln(t,e,r,n,o,a){const i=t[r];if(i!=null){const l=K(i,"default");if(l&&n===void 0){const s=i.default;if(i.type!==Function&&H(s)){const{propsDefaults:d}=o;r in d?n=d[r]:($e(o),n=d[r]=s.call(null,e),ve())}else n=s}i[0]&&(a&&!l?n=!1:i[1]&&(n===""||n===Ue(r))&&(n=!0))}return n}function Wi(t,e,r=!1){const n=e.propsCache,o=n.get(t);if(o)return o;const a=t.props,i={},l=[];let s=!1;if(!H(t)){const c=f=>{s=!0;const[u,h]=Wi(f,e,!0);ht(i,u),h&&l.push(...h)};!r&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!a&&!s)return n.set(t,je),je;if(B(a))for(let c=0;c<a.length;c++){const f=Ht(a[c]);na(f)&&(i[f]=rt)}else if(a)for(const c in a){const f=Ht(c);if(na(f)){const u=a[c],h=i[f]=B(u)||H(u)?{type:u}:u;if(h){const E=ia(Boolean,h.type),j=ia(String,h.type);h[0]=E>-1,h[1]=j<0||E<j,(E>-1||K(h,"default"))&&l.push(f)}}}const d=[i,l];return n.set(t,d),d}function na(t){return t[0]!=="$"}function oa(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function aa(t,e){return oa(t)===oa(e)}function ia(t,e){return B(e)?e.findIndex(r=>aa(r,t)):H(e)&&aa(e,t)?0:-1}const Ki=t=>t[0]==="_"||t==="$stable",wo=t=>B(t)?t.map(Dt):[Dt(t)],kc=(t,e,r)=>{if(e._n)return e;const n=Or((...o)=>wo(e(...o)),r);return n._c=!1,n},qi=(t,e,r)=>{const n=t._ctx;for(const o in t){if(Ki(o))continue;const a=t[o];if(H(a))e[o]=kc(o,a,n);else if(a!=null){const i=wo(a);e[o]=()=>i}}},Vi=(t,e)=>{const r=wo(e);t.slots.default=()=>r},_c=(t,e)=>{if(t.vnode.shapeFlag&32){const r=e._;r?(t.slots=V(e),Nr(e,"_",r)):qi(e,t.slots={})}else t.slots={},e&&Vi(t,e);Nr(t.slots,on,1)},Ac=(t,e,r)=>{const{vnode:n,slots:o}=t;let a=!0,i=rt;if(n.shapeFlag&32){const l=e._;l?r&&l===1?a=!1:(ht(o,e),!r&&l===1&&delete o._):(a=!e.$stable,qi(e,o)),i=e}else e&&(Vi(t,e),i={default:1});if(a)for(const l in o)!Ki(l)&&!(l in i)&&delete o[l]};function Gi(){return{app:null,config:{isNativeTag:Zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ec=0;function zc(t,e){return function(n,o=null){H(n)||(n=Object.assign({},n)),o!=null&&!mt(o)&&(o=null);const a=Gi(),i=new Set;let l=!1;const s=a.app={_uid:Ec++,_component:n,_props:o,_container:null,_context:a,_instance:null,version:Wc,get config(){return a.config},set config(d){},use(d,...c){return i.has(d)||(d&&H(d.install)?(i.add(d),d.install(s,...c)):H(d)&&(i.add(d),d(s,...c))),s},mixin(d){return a.mixins.includes(d)||a.mixins.push(d),s},component(d,c){return c?(a.components[d]=c,s):a.components[d]},directive(d,c){return c?(a.directives[d]=c,s):a.directives[d]},mount(d,c,f){if(!l){const u=dt(n,o);return u.appContext=a,c&&e?e(u,d):t(u,d,f),l=!0,s._container=d,d.__vue_app__=s,_o(u.component)||u.component.proxy}},unmount(){l&&(t(null,s._container),delete s._container.__vue_app__)},provide(d,c){return a.provides[d]=c,s}};return s}}function Fn(t,e,r,n,o=!1){if(B(t)){t.forEach((u,h)=>Fn(u,e&&(B(e)?e[h]:e),r,n,o));return}if(Sr(n)&&!o)return;const a=n.shapeFlag&4?_o(n.component)||n.component.proxy:n.el,i=o?null:a,{i:l,r:s}=t,d=e&&e.r,c=l.refs===rt?l.refs={}:l.refs,f=l.setupState;if(d!=null&&d!==s&&(ut(d)?(c[d]=null,K(f,d)&&(f[d]=null)):gt(d)&&(d.value=null)),H(s))se(s,l,12,[i,c]);else{const u=ut(s),h=gt(s);if(u||h){const E=()=>{if(t.f){const j=u?c[s]:s.value;o?B(j)&&so(j,a):B(j)?j.includes(a)||j.push(a):u?(c[s]=[a],K(f,s)&&(f[s]=c[s])):(s.value=[a],t.k&&(c[t.k]=s.value))}else u?(c[s]=i,K(f,s)&&(f[s]=i)):h&&(s.value=i,t.k&&(c[t.k]=i))};i?(E.id=-1,vt(E,r)):E()}}}const vt=Js;function Cc(t){return Oc(t)}function Oc(t,e){const r=is();r.__VUE__=!0;const{insert:n,remove:o,patchProp:a,createElement:i,createText:l,createComment:s,setText:d,setElementText:c,parentNode:f,nextSibling:u,setScopeId:h=Tt,cloneNode:E,insertStaticContent:j}=t,O=(m,p,g,w=null,v=null,A=null,P=!1,_=null,z=!!p.dynamicChildren)=>{if(m===p)return;m&&!Ve(m,p)&&(w=M(m),zt(m,v,A,!0),m=null),p.patchFlag===-2&&(z=!1,p.dynamicChildren=null);const{type:y,ref:N,shapeFlag:R}=p;switch(y){case yo:b(m,p,g,w);break;case pr:k(m,p,g,w);break;case xn:m==null&&I(p,g,w,P);break;case $t:ke(m,p,g,w,v,A,P,_,z);break;default:R&1?nt(m,p,g,w,v,A,P,_,z):R&6?_e(m,p,g,w,v,A,P,_,z):(R&64||R&128)&&y.process(m,p,g,w,v,A,P,_,z,et)}N!=null&&v&&Fn(N,m&&m.ref,A,p||m,!p)},b=(m,p,g,w)=>{if(m==null)n(p.el=l(p.children),g,w);else{const v=p.el=m.el;p.children!==m.children&&d(v,p.children)}},k=(m,p,g,w)=>{m==null?n(p.el=s(p.children||""),g,w):p.el=m.el},I=(m,p,g,w)=>{[m.el,m.anchor]=j(m.children,p,g,w,m.el,m.anchor)},$=({el:m,anchor:p},g,w)=>{let v;for(;m&&m!==p;)v=u(m),n(m,g,w),m=v;n(p,g,w)},W=({el:m,anchor:p})=>{let g;for(;m&&m!==p;)g=u(m),o(m),m=g;o(p)},nt=(m,p,g,w,v,A,P,_,z)=>{P=P||p.type==="svg",m==null?st(p,g,w,v,A,P,_,z):Zt(m,p,v,A,P,_,z)},st=(m,p,g,w,v,A,P,_)=>{let z,y;const{type:N,props:R,shapeFlag:L,transition:D,patchFlag:q,dirs:Q}=m;if(m.el&&E!==void 0&&q===-1)z=m.el=E(m.el);else{if(z=m.el=i(m.type,A,R&&R.is,R),L&8?c(z,m.children):L&16&&ft(m.children,z,null,w,v,A&&N!=="foreignObject",P,_),Q&&pe(m,null,w,"created"),R){for(const ot in R)ot!=="value"&&!Cr(ot)&&a(z,ot,null,R[ot],A,m.children,w,v,C);"value"in R&&a(z,"value",null,R.value),(y=R.onVnodeBeforeMount)&&Lt(y,w,m)}Et(z,m,m.scopeId,P,w)}Q&&pe(m,null,w,"beforeMount");const J=(!v||v&&!v.pendingBranch)&&D&&!D.persisted;J&&D.beforeEnter(z),n(z,p,g),((y=R&&R.onVnodeMounted)||J||Q)&&vt(()=>{y&&Lt(y,w,m),J&&D.enter(z),Q&&pe(m,null,w,"mounted")},v)},Et=(m,p,g,w,v)=>{if(g&&h(m,g),w)for(let A=0;A<w.length;A++)h(m,w[A]);if(v){let A=v.subTree;if(p===A){const P=v.vnode;Et(m,P,P.scopeId,P.slotScopeIds,v.parent)}}},ft=(m,p,g,w,v,A,P,_,z=0)=>{for(let y=z;y<m.length;y++){const N=m[y]=_?ae(m[y]):Dt(m[y]);O(null,N,p,g,w,v,A,P,_)}},Zt=(m,p,g,w,v,A,P)=>{const _=p.el=m.el;let{patchFlag:z,dynamicChildren:y,dirs:N}=p;z|=m.patchFlag&16;const R=m.props||rt,L=p.props||rt;let D;g&&ue(g,!1),(D=L.onVnodeBeforeUpdate)&&Lt(D,g,p,m),N&&pe(p,m,g,"beforeUpdate"),g&&ue(g,!0);const q=v&&p.type!=="foreignObject";if(y?Yt(m.dynamicChildren,y,_,g,w,q,A):P||wt(m,p,_,null,g,w,q,A,!1),z>0){if(z&16)Ct(_,p,R,L,g,w,v);else if(z&2&&R.class!==L.class&&a(_,"class",null,L.class,v),z&4&&a(_,"style",R.style,L.style,v),z&8){const Q=p.dynamicProps;for(let J=0;J<Q.length;J++){const ot=Q[J],Ot=R[ot],ze=L[ot];(ze!==Ot||ot==="value")&&a(_,ot,Ot,ze,v,m.children,g,w,C)}}z&1&&m.children!==p.children&&c(_,p.children)}else!P&&y==null&&Ct(_,p,R,L,g,w,v);((D=L.onVnodeUpdated)||N)&&vt(()=>{D&&Lt(D,g,p,m),N&&pe(p,m,g,"updated")},w)},Yt=(m,p,g,w,v,A,P)=>{for(let _=0;_<p.length;_++){const z=m[_],y=p[_],N=z.el&&(z.type===$t||!Ve(z,y)||z.shapeFlag&70)?f(z.el):g;O(z,y,N,null,w,v,A,P,!0)}},Ct=(m,p,g,w,v,A,P)=>{if(g!==w){for(const _ in w){if(Cr(_))continue;const z=w[_],y=g[_];z!==y&&_!=="value"&&a(m,_,y,z,P,p.children,v,A,C)}if(g!==rt)for(const _ in g)!Cr(_)&&!(_ in w)&&a(m,_,g[_],null,P,p.children,v,A,C);"value"in w&&a(m,"value",g.value,w.value)}},ke=(m,p,g,w,v,A,P,_,z)=>{const y=p.el=m?m.el:l(""),N=p.anchor=m?m.anchor:l("");let{patchFlag:R,dynamicChildren:L,slotScopeIds:D}=p;D&&(_=_?_.concat(D):D),m==null?(n(y,g,w),n(N,g,w),ft(p.children,g,N,v,A,P,_,z)):R>0&&R&64&&L&&m.dynamicChildren?(Yt(m.dynamicChildren,L,g,v,A,P,_),(p.key!=null||v&&p===v.subTree)&&Xi(m,p,!0)):wt(m,p,g,N,v,A,P,_,z)},_e=(m,p,g,w,v,A,P,_,z)=>{p.slotScopeIds=_,m==null?p.shapeFlag&512?v.ctx.activate(p,g,w,P,z):Ae(p,g,w,v,A,P,z):ct(m,p,z)},Ae=(m,p,g,w,v,A,P)=>{const _=m.component=Fc(m,w,v);if(Fi(m)&&(_.ctx.renderer=et),$c(_),_.asyncDep){if(v&&v.registerDep(_,tt),!m.el){const z=_.subTree=dt(pr);k(null,z,p,g)}return}tt(_,m,p,g,v,A,P)},ct=(m,p,g)=>{const w=p.component=m.component;if(Gs(m,p,g))if(w.asyncDep&&!w.asyncResolved){G(w,p,g);return}else w.next=p,Hs(w.update),w.update();else p.el=m.el,w.vnode=p},tt=(m,p,g,w,v,A,P)=>{const _=()=>{if(m.isMounted){let{next:N,bu:R,u:L,parent:D,vnode:q}=m,Q=N,J;ue(m,!1),N?(N.el=q.el,G(m,N,P)):N=q,R&&gn(R),(J=N.props&&N.props.onVnodeBeforeUpdate)&&Lt(J,D,N,q),ue(m,!0);const ot=bn(m),Ot=m.subTree;m.subTree=ot,O(Ot,ot,f(Ot.el),M(Ot),m,v,A),N.el=ot.el,Q===null&&Xs(m,ot.el),L&&vt(L,v),(J=N.props&&N.props.onVnodeUpdated)&&vt(()=>Lt(J,D,N,q),v)}else{let N;const{el:R,props:L}=p,{bm:D,m:q,parent:Q}=m,J=Sr(p);if(ue(m,!1),D&&gn(D),!J&&(N=L&&L.onVnodeBeforeMount)&&Lt(N,Q,p),ue(m,!0),R&&U){const ot=()=>{m.subTree=bn(m),U(R,m.subTree,m,v,null)};J?p.type.__asyncLoader().then(()=>!m.isUnmounted&&ot()):ot()}else{const ot=m.subTree=bn(m);O(null,ot,g,w,m,v,A),p.el=ot.el}if(q&&vt(q,v),!J&&(N=L&&L.onVnodeMounted)){const ot=p;vt(()=>Lt(N,Q,ot),v)}(p.shapeFlag&256||Q&&Sr(Q.vnode)&&Q.vnode.shapeFlag&256)&&m.a&&vt(m.a,v),m.isMounted=!0,p=g=w=null}},z=m.effect=new po(_,()=>Si(y),m.scope),y=m.update=()=>z.run();y.id=m.uid,ue(m,!0),y()},G=(m,p,g)=>{p.component=m;const w=m.vnode.props;m.vnode=p,m.next=null,yc(m,p.props,w,g),Ac(m,p.children,g),He(),tn(void 0,m.update),Ye()},wt=(m,p,g,w,v,A,P,_,z=!1)=>{const y=m&&m.children,N=m?m.shapeFlag:0,R=p.children,{patchFlag:L,shapeFlag:D}=p;if(L>0){if(L&128){Wt(y,R,g,w,v,A,P,_,z);return}else if(L&256){Ee(y,R,g,w,v,A,P,_,z);return}}D&8?(N&16&&C(y,v,A),R!==y&&c(g,R)):N&16?D&16?Wt(y,R,g,w,v,A,P,_,z):C(y,v,A,!0):(N&8&&c(g,""),D&16&&ft(R,g,w,v,A,P,_,z))},Ee=(m,p,g,w,v,A,P,_,z)=>{m=m||je,p=p||je;const y=m.length,N=p.length,R=Math.min(y,N);let L;for(L=0;L<R;L++){const D=p[L]=z?ae(p[L]):Dt(p[L]);O(m[L],D,g,null,v,A,P,_,z)}y>N?C(m,v,A,!0,!1,R):ft(p,g,w,v,A,P,_,z,R)},Wt=(m,p,g,w,v,A,P,_,z)=>{let y=0;const N=p.length;let R=m.length-1,L=N-1;for(;y<=R&&y<=L;){const D=m[y],q=p[y]=z?ae(p[y]):Dt(p[y]);if(Ve(D,q))O(D,q,g,null,v,A,P,_,z);else break;y++}for(;y<=R&&y<=L;){const D=m[R],q=p[L]=z?ae(p[L]):Dt(p[L]);if(Ve(D,q))O(D,q,g,null,v,A,P,_,z);else break;R--,L--}if(y>R){if(y<=L){const D=L+1,q=D<N?p[D].el:w;for(;y<=L;)O(null,p[y]=z?ae(p[y]):Dt(p[y]),g,q,v,A,P,_,z),y++}}else if(y>L)for(;y<=R;)zt(m[y],v,A,!0),y++;else{const D=y,q=y,Q=new Map;for(y=q;y<=L;y++){const yt=p[y]=z?ae(p[y]):Dt(p[y]);yt.key!=null&&Q.set(yt.key,y)}let J,ot=0;const Ot=L-q+1;let ze=!1,Bo=0;const qe=new Array(Ot);for(y=0;y<Ot;y++)qe[y]=0;for(y=D;y<=R;y++){const yt=m[y];if(ot>=Ot){zt(yt,v,A,!0);continue}let Nt;if(yt.key!=null)Nt=Q.get(yt.key);else for(J=q;J<=L;J++)if(qe[J-q]===0&&Ve(yt,p[J])){Nt=J;break}Nt===void 0?zt(yt,v,A,!0):(qe[Nt-q]=y+1,Nt>=Bo?Bo=Nt:ze=!0,O(yt,p[Nt],g,null,v,A,P,_,z),ot++)}const Uo=ze?Pc(qe):je;for(J=Uo.length-1,y=Ot-1;y>=0;y--){const yt=q+y,Nt=p[yt],Ho=yt+1<N?p[yt+1].el:w;qe[y]===0?O(null,Nt,g,Ho,v,A,P,_,z):ze&&(J<0||y!==Uo[J]?Mt(Nt,g,Ho,2):J--)}}},Mt=(m,p,g,w,v=null)=>{const{el:A,type:P,transition:_,children:z,shapeFlag:y}=m;if(y&6){Mt(m.component.subTree,p,g,w);return}if(y&128){m.suspense.move(p,g,w);return}if(y&64){P.move(m,p,g,et);return}if(P===$t){n(A,p,g);for(let R=0;R<z.length;R++)Mt(z[R],p,g,w);n(m.anchor,p,g);return}if(P===xn){$(m,p,g);return}if(w!==2&&y&1&&_)if(w===0)_.beforeEnter(A),n(A,p,g),vt(()=>_.enter(A),v);else{const{leave:R,delayLeave:L,afterLeave:D}=_,q=()=>n(A,p,g),Q=()=>{R(A,()=>{q(),D&&D()})};L?L(A,q,Q):Q()}else n(A,p,g)},zt=(m,p,g,w=!1,v=!1)=>{const{type:A,props:P,ref:_,children:z,dynamicChildren:y,shapeFlag:N,patchFlag:R,dirs:L}=m;if(_!=null&&Fn(_,null,g,m,!0),N&256){p.ctx.deactivate(m);return}const D=N&1&&L,q=!Sr(m);let Q;if(q&&(Q=P&&P.onVnodeBeforeUnmount)&&Lt(Q,p,m),N&6)T(m.component,g,w);else{if(N&128){m.suspense.unmount(g,w);return}D&&pe(m,null,p,"beforeUnmount"),N&64?m.type.remove(m,p,g,v,et,w):y&&(A!==$t||R>0&&R&64)?C(y,p,g,!1,!0):(A===$t&&R&384||!v&&N&16)&&C(z,p,g),w&&pn(m)}(q&&(Q=P&&P.onVnodeUnmounted)||D)&&vt(()=>{Q&&Lt(Q,p,m),D&&pe(m,null,p,"unmounted")},g)},pn=m=>{const{type:p,el:g,anchor:w,transition:v}=m;if(p===$t){x(g,w);return}if(p===xn){W(m);return}const A=()=>{o(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(m.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:_}=v,z=()=>P(g,A);_?_(m.el,A,z):z()}else A()},x=(m,p)=>{let g;for(;m!==p;)g=u(m),o(m),m=g;o(p)},T=(m,p,g)=>{const{bum:w,scope:v,update:A,subTree:P,um:_}=m;w&&gn(w),v.stop(),A&&(A.active=!1,zt(P,m,p,g)),_&&vt(_,p),vt(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(m,p,g,w=!1,v=!1,A=0)=>{for(let P=A;P<m.length;P++)zt(m[P],p,g,w,v)},M=m=>m.shapeFlag&6?M(m.component.subTree):m.shapeFlag&128?m.suspense.next():u(m.anchor||m.el),X=(m,p,g)=>{m==null?p._vnode&&zt(p._vnode,null,null,!0):O(p._vnode||null,m,p,null,null,null,g),Ti(),p._vnode=m},et={p:O,um:zt,m:Mt,r:pn,mt:Ae,mc:ft,pc:wt,pbc:Yt,n:M,o:t};let Y,U;return e&&([Y,U]=e(et)),{render:X,hydrate:Y,createApp:zc(X,Y)}}function ue({effect:t,update:e},r){t.allowRecurse=e.allowRecurse=r}function Xi(t,e,r=!1){const n=t.children,o=e.children;if(B(n)&&B(o))for(let a=0;a<n.length;a++){const i=n[a];let l=o[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[a]=ae(o[a]),l.el=i.el),r||Xi(i,l))}}function Pc(t){const e=t.slice(),r=[0];let n,o,a,i,l;const s=t.length;for(n=0;n<s;n++){const d=t[n];if(d!==0){if(o=r[r.length-1],t[o]<d){e[n]=o,r.push(n);continue}for(a=0,i=r.length-1;a<i;)l=a+i>>1,t[r[l]]<d?a=l+1:i=l;d<t[r[a]]&&(a>0&&(e[n]=r[a-1]),r[a]=n)}}for(a=r.length,i=r[a-1];a-- >0;)r[a]=i,i=e[i];return r}const Sc=t=>t.__isTeleport,$t=Symbol(void 0),yo=Symbol(void 0),pr=Symbol(void 0),xn=Symbol(void 0),nr=[];let Rt=null;function Qi(t=!1){nr.push(Rt=t?null:[])}function Rc(){nr.pop(),Rt=nr[nr.length-1]||null}let ur=1;function la(t){ur+=t}function Ic(t){return t.dynamicChildren=ur>0?Rt||je:null,Rc(),ur>0&&Rt&&Rt.push(t),t}function Ji(t,e,r,n,o,a){return Ic(it(t,e,r,n,o,a,!0))}function $n(t){return t?t.__v_isVNode===!0:!1}function Ve(t,e){return t.type===e.type&&t.key===e.key}const on="__vInternal",Zi=({key:t})=>t!=null?t:null,Rr=({ref:t,ref_key:e,ref_for:r})=>t!=null?ut(t)||gt(t)||H(t)?{i:Bt,r:t,k:e,f:!!r}:t:null;function it(t,e=null,r=null,n=0,o=null,a=t===$t?0:1,i=!1,l=!1){const s={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zi(e),ref:e&&Rr(e),scopeId:rn,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null};return l?(ko(s,r),a&128&&t.normalize(s)):r&&(s.shapeFlag|=ut(r)?8:16),ur>0&&!i&&Rt&&(s.patchFlag>0||a&6)&&s.patchFlag!==32&&Rt.push(s),s}const dt=Tc;function Tc(t,e=null,r=null,n=0,o=null,a=!1){if((!t||t===fc)&&(t=pr),$n(t)){const l=Fe(t,e,!0);return r&&ko(l,r),ur>0&&!a&&Rt&&(l.shapeFlag&6?Rt[Rt.indexOf(t)]=l:Rt.push(l)),l.patchFlag|=-2,l}if(Yc(t)&&(t=t.__vccOpts),e){e=jc(e);let{class:l,style:s}=e;l&&!ut(l)&&(e.class=io(l)),mt(s)&&(ki(s)&&!B(s)&&(s=ht({},s)),e.style=ao(s))}const i=ut(t)?1:Qs(t)?128:Sc(t)?64:mt(t)?4:H(t)?2:0;return it(t,e,r,n,o,i,a,!0)}function jc(t){return t?ki(t)||on in t?ht({},t):t:null}function Fe(t,e,r=!1){const{props:n,ref:o,patchFlag:a,children:i}=t,l=e?Mc(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Zi(l),ref:e&&e.ref?r&&o?B(o)?o.concat(Rr(e)):[o,Rr(e)]:Rr(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$t?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fe(t.ssContent),ssFallback:t.ssFallback&&Fe(t.ssFallback),el:t.el,anchor:t.anchor}}function Ir(t=" ",e=0){return dt(yo,null,t,e)}function Dt(t){return t==null||typeof t=="boolean"?dt(pr):B(t)?dt($t,null,t.slice()):typeof t=="object"?ae(t):dt(yo,null,String(t))}function ae(t){return t.el===null||t.memo?t:Fe(t)}function ko(t,e){let r=0;const{shapeFlag:n}=t;if(e==null)e=null;else if(B(e))r=16;else if(typeof e=="object")if(n&65){const o=e.default;o&&(o._c&&(o._d=!1),ko(t,o()),o._c&&(o._d=!0));return}else{r=32;const o=e._;!o&&!(on in e)?e._ctx=Bt:o===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Bt},r=32):(e=String(e),n&64?(r=16,e=[Ir(e)]):r=8);t.children=e,t.shapeFlag|=r}function Mc(...t){const e={};for(let r=0;r<t.length;r++){const n=t[r];for(const o in n)if(o==="class")e.class!==n.class&&(e.class=io([e.class,n.class]));else if(o==="style")e.style=ao([e.style,n.style]);else if(Vr(o)){const a=e[o],i=n[o];i&&a!==i&&!(B(a)&&a.includes(i))&&(e[o]=a?[].concat(a,i):i)}else o!==""&&(e[o]=n[o])}return e}function Lt(t,e,r,n=null){jt(t,e,7,[r,n])}const Nc=Gi();let Lc=0;function Fc(t,e,r){const n=t.type,o=(e?e.appContext:t.appContext)||Nc,a={uid:Lc++,vnode:t,type:n,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ls(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wi(n,o),emitsOptions:Mi(n,o),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:n.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Ks.bind(null,a),t.ce&&t.ce(a),a}let pt=null;const $e=t=>{pt=t,t.scope.on()},ve=()=>{pt&&pt.scope.off(),pt=null};function tl(t){return t.vnode.shapeFlag&4}let gr=!1;function $c(t,e=!1){gr=e;const{props:r,children:n}=t.vnode,o=tl(t);wc(t,r,o,e),_c(t,n);const a=o?Dc(t,e):void 0;return gr=!1,a}function Dc(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=_i(new Proxy(t.ctx,uc));const{setup:n}=r;if(n){const o=t.setupContext=n.length>1?Uc(t):null;$e(t),He();const a=se(n,t,0,[t.props,o]);if(Ye(),ve(),si(a)){if(a.then(ve,ve),e)return a.then(i=>{sa(t,i,e)}).catch(i=>{Zr(i,t,0)});t.asyncDep=a}else sa(t,a,e)}else el(t,e)}function sa(t,e,r){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:mt(e)&&(t.setupState=Ci(e)),el(t,r)}let ca;function el(t,e,r){const n=t.type;if(!t.render){if(!e&&ca&&!n.render){const o=n.template;if(o){const{isCustomElement:a,compilerOptions:i}=t.appContext.config,{delimiters:l,compilerOptions:s}=n,d=ht(ht({isCustomElement:a,delimiters:l},i),s);n.render=ca(o,d)}}t.render=n.render||Tt}$e(t),He(),gc(t),Ye(),ve()}function Bc(t){return new Proxy(t.attrs,{get(e,r){return _t(t,"get","$attrs"),e[r]}})}function Uc(t){const e=n=>{t.exposed=n||{}};let r;return{get attrs(){return r||(r=Bc(t))},slots:t.slots,emit:t.emit,expose:e}}function _o(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ci(_i(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in $r)return $r[r](t)}}))}function Hc(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Yc(t){return H(t)&&"__vccOpts"in t}const lt=(t,e)=>Ds(t,e,gr);function an(t,e,r){const n=arguments.length;return n===2?mt(e)&&!B(e)?$n(e)?dt(t,null,[e]):dt(t,e):dt(t,null,e):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&$n(r)&&(r=[r]),dt(t,e,r))}const Wc="3.2.37",Kc="http://www.w3.org/2000/svg",be=typeof document!="undefined"?document:null,da=be&&be.createElement("template"),qc={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,n)=>{const o=e?be.createElementNS(Kc,t):be.createElement(t,r?{is:r}:void 0);return t==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:t=>be.createTextNode(t),createComment:t=>be.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>be.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,r,n,o,a){const i=r?r.previousSibling:e.lastChild;if(o&&(o===a||o.nextSibling))for(;e.insertBefore(o.cloneNode(!0),r),!(o===a||!(o=o.nextSibling)););else{da.innerHTML=n?`<svg>${t}</svg>`:t;const l=da.content;if(n){const s=l.firstChild;for(;s.firstChild;)l.appendChild(s.firstChild);l.removeChild(s)}e.insertBefore(l,r)}return[i?i.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}};function Vc(t,e,r){const n=t._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}function Gc(t,e,r){const n=t.style,o=ut(r);if(r&&!o){for(const a in r)Dn(n,a,r[a]);if(e&&!ut(e))for(const a in e)r[a]==null&&Dn(n,a,"")}else{const a=n.display;o?e!==r&&(n.cssText=r):e&&t.removeAttribute("style"),"_vod"in t&&(n.display=a)}}const ma=/\s*!important$/;function Dn(t,e,r){if(B(r))r.forEach(n=>Dn(t,e,n));else if(r==null&&(r=""),e.startsWith("--"))t.setProperty(e,r);else{const n=Xc(t,e);ma.test(r)?t.setProperty(Ue(n),r.replace(ma,""),"important"):t[n]=r}}const fa=["Webkit","Moz","ms"],vn={};function Xc(t,e){const r=vn[e];if(r)return r;let n=Ht(e);if(n!=="filter"&&n in t)return vn[e]=n;n=Qr(n);for(let o=0;o<fa.length;o++){const a=fa[o]+n;if(a in t)return vn[e]=a}return e}const pa="http://www.w3.org/1999/xlink";function Qc(t,e,r,n,o){if(n&&e.startsWith("xlink:"))r==null?t.removeAttributeNS(pa,e.slice(6,e.length)):t.setAttributeNS(pa,e,r);else{const a=Gl(e);r==null||a&&!ai(r)?t.removeAttribute(e):t.setAttribute(e,a?"":r)}}function Jc(t,e,r,n,o,a,i){if(e==="innerHTML"||e==="textContent"){n&&i(n,o,a),t[e]=r==null?"":r;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=r;const s=r==null?"":r;(t.value!==s||t.tagName==="OPTION")&&(t.value=s),r==null&&t.removeAttribute(e);return}let l=!1;if(r===""||r==null){const s=typeof t[e];s==="boolean"?r=ai(r):r==null&&s==="string"?(r="",l=!0):s==="number"&&(r=0,l=!0)}try{t[e]=r}catch{}l&&t.removeAttribute(e)}const[rl,Zc]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const r=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(r&&Number(r[1])<=53)}return[t,e]})();let Bn=0;const td=Promise.resolve(),ed=()=>{Bn=0},rd=()=>Bn||(td.then(ed),Bn=rl());function nd(t,e,r,n){t.addEventListener(e,r,n)}function od(t,e,r,n){t.removeEventListener(e,r,n)}function ad(t,e,r,n,o=null){const a=t._vei||(t._vei={}),i=a[e];if(n&&i)i.value=n;else{const[l,s]=id(e);if(n){const d=a[e]=ld(n,o);nd(t,l,d,s)}else i&&(od(t,l,i,s),a[e]=void 0)}}const ua=/(?:Once|Passive|Capture)$/;function id(t){let e;if(ua.test(t)){e={};let r;for(;r=t.match(ua);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[Ue(t.slice(2)),e]}function ld(t,e){const r=n=>{const o=n.timeStamp||rl();(Zc||o>=r.attached-1)&&jt(sd(n,r.value),e,5,[n])};return r.value=t,r.attached=rd(),r}function sd(t,e){if(B(e)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},e.map(n=>o=>!o._stopped&&n&&n(o))}else return e}const ga=/^on[a-z]/,cd=(t,e,r,n,o=!1,a,i,l,s)=>{e==="class"?Vc(t,n,o):e==="style"?Gc(t,r,n):Vr(e)?lo(e)||ad(t,e,r,n,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dd(t,e,n,o))?Jc(t,e,n,a,i,l,s):(e==="true-value"?t._trueValue=n:e==="false-value"&&(t._falseValue=n),Qc(t,e,n,o))};function dd(t,e,r,n){return n?!!(e==="innerHTML"||e==="textContent"||e in t&&ga.test(e)&&H(r)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ga.test(e)&&ut(r)?!1:e in t}const md=ht({patchProp:cd},qc);let ba;function fd(){return ba||(ba=Cc(md))}const pd=(...t)=>{const e=fd().createApp(...t),{mount:r}=e;return e.mount=n=>{const o=ud(n);if(!o)return;const a=e._component;!H(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.innerHTML="";const i=r(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},e};function ud(t){return ut(t)?document.querySelector(t):t}var nl=(t,e)=>{const r=t.__vccOpts||t;for(const[n,o]of e)r[n]=o;return r};const gd={},bd={class:"navbar sticky-top navbar-expand-lg navbar-dark",style:{"padding-left":"1rem","background-color":"#23272a"}},hd=it("a",{class:"navbar-brand"},"Aidan Neal",-1),xd={class:"collapse navbar-collapse"},vd={class:"navbar-nav"},wd={class:"nav-item"},yd=it("a",{class:"nav-link"},"Home",-1),kd={class:"nav-item"},_d=it("a",{class:"nav-link"},"Projects",-1),Ad={class:"social_links"},Ed={class:"social_link__list"},zd={class:"social_link__hyperlink",href:"https://github.com/El-Wumbus",target:"_blank"},Cd={class:"social_link__hyperlink",href:"",target:"_blank"},Od={class:"social_link__hyperlink",href:"mailto:decator.c@proton.me",target:"_blank"},Pd={class:"social_link__hyperlink",href:"discord.gg/8wBUFeGGYc",target:"_blank"};function Sd(t,e){const r=hn("RouterLink"),n=hn("RouterView"),o=hn("font-awesome-icon");return Qi(),Ji($t,null,[it("header",null,[it("nav",bd,[dt(r,{style:{"text-decoration":"none"},to:"/"},{default:Or(()=>[hd]),_:1}),it("div",xd,[it("ul",vd,[it("li",wd,[dt(r,{style:{"text-decoration":"none"},to:"/"},{default:Or(()=>[yd]),_:1})]),it("li",kd,[dt(r,{style:{"text-decoration":"none"},to:"/projects"},{default:Or(()=>[_d]),_:1})])])])])]),dt(n),it("div",Ad,[it("ul",Ed,[it("li",null,[it("a",zd,[dt(o,{class:"social_link__icon",icon:"fa-brands fa-github"})])]),it("li",null,[it("a",Cd,[dt(o,{class:"social_link__icon",icon:"fa-brands fa-spotify"})])]),it("li",null,[it("a",Od,[dt(o,{class:"social_link__icon",icon:"fa-solid fa-envelope"})])]),it("li",null,[it("a",Pd,[dt(o,{class:"social_link__icon",icon:"fa-brands fa-discord"})])])])])],64)}var Rd=nl(gd,[["render",Sd]]);const Id="modulepreload",ha={},Td="/",jd=function(e,r){return!r||r.length===0?e():Promise.all(r.map(n=>{if(n=`${Td}${n}`,n in ha)return;ha[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Id,o||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),o)return new Promise((l,s)=>{i.addEventListener("load",l),i.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ol=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",We=t=>ol?Symbol(t):"_vr_"+t,Md=We("rvlm"),xa=We("rvd"),Ao=We("r"),al=We("rl"),Un=We("rvl"),Se=typeof window!="undefined";function Nd(t){return t.__esModule||ol&&t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function wn(t,e){const r={};for(const n in e){const o=e[n];r[n]=Array.isArray(o)?o.map(t):t(o)}return r}const or=()=>{},Ld=/\/$/,Fd=t=>t.replace(Ld,"");function yn(t,e,r="/"){let n,o={},a="",i="";const l=e.indexOf("?"),s=e.indexOf("#",l>-1?l:0);return l>-1&&(n=e.slice(0,l),a=e.slice(l+1,s>-1?s:e.length),o=t(a)),s>-1&&(n=n||e.slice(0,s),i=e.slice(s,e.length)),n=Ud(n!=null?n:e,r),{fullPath:n+(a&&"?")+a+i,path:n,query:o,hash:i}}function $d(t,e){const r=e.query?t(e.query):"";return e.path+(r&&"?")+r+(e.hash||"")}function va(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Dd(t,e,r){const n=e.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&De(e.matched[n],r.matched[o])&&il(e.params,r.params)&&t(e.query)===t(r.query)&&e.hash===r.hash}function De(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function il(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const r in t)if(!Bd(t[r],e[r]))return!1;return!0}function Bd(t,e){return Array.isArray(t)?wa(t,e):Array.isArray(e)?wa(e,t):t===e}function wa(t,e){return Array.isArray(e)?t.length===e.length&&t.every((r,n)=>r===e[n]):t.length===1&&t[0]===e}function Ud(t,e){if(t.startsWith("/"))return t;if(!t)return e;const r=e.split("/"),n=t.split("/");let o=r.length-1,a,i;for(a=0;a<n.length;a++)if(i=n[a],!(o===1||i==="."))if(i==="..")o--;else break;return r.slice(0,o).join("/")+"/"+n.slice(a-(a===n.length?1:0)).join("/")}var br;(function(t){t.pop="pop",t.push="push"})(br||(br={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function Hd(t){if(!t)if(Se){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fd(t)}const Yd=/^[^#]+#/;function Wd(t,e){return t.replace(Yd,"#")+e}function Kd(t,e){const r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{behavior:e.behavior,left:n.left-r.left-(e.left||0),top:n.top-r.top-(e.top||0)}}const ln=()=>({left:window.pageXOffset,top:window.pageYOffset});function qd(t){let e;if("el"in t){const r=t.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;e=Kd(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ya(t,e){return(history.state?history.state.position-e:-1)+t}const Hn=new Map;function Vd(t,e){Hn.set(t,e)}function Gd(t){const e=Hn.get(t);return Hn.delete(t),e}let Xd=()=>location.protocol+"//"+location.host;function ll(t,e){const{pathname:r,search:n,hash:o}=e,a=t.indexOf("#");if(a>-1){let l=o.includes(t.slice(a))?t.slice(a).length:1,s=o.slice(l);return s[0]!=="/"&&(s="/"+s),va(s,"")}return va(r,t)+n+o}function Qd(t,e,r,n){let o=[],a=[],i=null;const l=({state:u})=>{const h=ll(t,location),E=r.value,j=e.value;let O=0;if(u){if(r.value=h,e.value=u,i&&i===E){i=null;return}O=j?u.position-j.position:0}else n(h);o.forEach(b=>{b(r.value,E,{delta:O,type:br.pop,direction:O?O>0?ar.forward:ar.back:ar.unknown})})};function s(){i=r.value}function d(u){o.push(u);const h=()=>{const E=o.indexOf(u);E>-1&&o.splice(E,1)};return a.push(h),h}function c(){const{history:u}=window;!u.state||u.replaceState(Z({},u.state,{scroll:ln()}),"")}function f(){for(const u of a)u();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c),{pauseListeners:s,listen:d,destroy:f}}function ka(t,e,r,n=!1,o=!1){return{back:t,current:e,forward:r,replaced:n,position:window.history.length,scroll:o?ln():null}}function Jd(t){const{history:e,location:r}=window,n={value:ll(t,r)},o={value:e.state};o.value||a(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function a(s,d,c){const f=t.indexOf("#"),u=f>-1?(r.host&&document.querySelector("base")?t:t.slice(f))+s:Xd()+t+s;try{e[c?"replaceState":"pushState"](d,"",u),o.value=d}catch(h){console.error(h),r[c?"replace":"assign"](u)}}function i(s,d){const c=Z({},e.state,ka(o.value.back,s,o.value.forward,!0),d,{position:o.value.position});a(s,c,!0),n.value=s}function l(s,d){const c=Z({},o.value,e.state,{forward:s,scroll:ln()});a(c.current,c,!0);const f=Z({},ka(n.value,s,null),{position:c.position+1},d);a(s,f,!1),n.value=s}return{location:n,state:o,push:l,replace:i}}function Zd(t){t=Hd(t);const e=Jd(t),r=Qd(t,e.state,e.location,e.replace);function n(a,i=!0){i||r.pauseListeners(),history.go(a)}const o=Z({location:"",base:t,go:n,createHref:Wd.bind(null,t)},e,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function tm(t){return typeof t=="string"||t&&typeof t=="object"}function sl(t){return typeof t=="string"||typeof t=="symbol"}const ee={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cl=We("nf");var _a;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_a||(_a={}));function Be(t,e){return Z(new Error,{type:t,[cl]:!0},e)}function re(t,e){return t instanceof Error&&cl in t&&(e==null||!!(t.type&e))}const Aa="[^/]+?",em={sensitive:!1,strict:!1,start:!0,end:!0},rm=/[.+*?^${}()[\]/\\]/g;function nm(t,e){const r=Z({},em,e),n=[];let o=r.start?"^":"";const a=[];for(const d of t){const c=d.length?[]:[90];r.strict&&!d.length&&(o+="/");for(let f=0;f<d.length;f++){const u=d[f];let h=40+(r.sensitive?.25:0);if(u.type===0)f||(o+="/"),o+=u.value.replace(rm,"\\$&"),h+=40;else if(u.type===1){const{value:E,repeatable:j,optional:O,regexp:b}=u;a.push({name:E,repeatable:j,optional:O});const k=b||Aa;if(k!==Aa){h+=10;try{new RegExp(`(${k})`)}catch($){throw new Error(`Invalid custom RegExp for param "${E}" (${k}): `+$.message)}}let I=j?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(I=O&&d.length<2?`(?:/${I})`:"/"+I),O&&(I+="?"),o+=I,h+=20,O&&(h+=-8),j&&(h+=-20),k===".*"&&(h+=-50)}c.push(h)}n.push(c)}if(r.strict&&r.end){const d=n.length-1;n[d][n[d].length-1]+=.7000000000000001}r.strict||(o+="/?"),r.end?o+="$":r.strict&&(o+="(?:/|$)");const i=new RegExp(o,r.sensitive?"":"i");function l(d){const c=d.match(i),f={};if(!c)return null;for(let u=1;u<c.length;u++){const h=c[u]||"",E=a[u-1];f[E.name]=h&&E.repeatable?h.split("/"):h}return f}function s(d){let c="",f=!1;for(const u of t){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const h of u)if(h.type===0)c+=h.value;else if(h.type===1){const{value:E,repeatable:j,optional:O}=h,b=E in d?d[E]:"";if(Array.isArray(b)&&!j)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const k=Array.isArray(b)?b.join("/"):b;if(!k)if(O)u.length<2&&t.length>1&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);c+=k}}return c}return{re:i,score:n,keys:a,parse:l,stringify:s}}function om(t,e){let r=0;for(;r<t.length&&r<e.length;){const n=e[r]-t[r];if(n)return n;r++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function am(t,e){let r=0;const n=t.score,o=e.score;for(;r<n.length&&r<o.length;){const a=om(n[r],o[r]);if(a)return a;r++}if(Math.abs(o.length-n.length)===1){if(Ea(n))return 1;if(Ea(o))return-1}return o.length-n.length}function Ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const im={type:0,value:""},lm=/[a-zA-Z0-9_]/;function sm(t){if(!t)return[[]];if(t==="/")return[[im]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${r})/"${d}": ${h}`)}let r=0,n=r;const o=[];let a;function i(){a&&o.push(a),a=[]}let l=0,s,d="",c="";function f(){!d||(r===0?a.push({type:0,value:d}):r===1||r===2||r===3?(a.length>1&&(s==="*"||s==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:d,regexp:c,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):e("Invalid state to consume buffer"),d="")}function u(){d+=s}for(;l<t.length;){if(s=t[l++],s==="\\"&&r!==2){n=r,r=4;continue}switch(r){case 0:s==="/"?(d&&f(),i()):s===":"?(f(),r=1):u();break;case 4:u(),r=n;break;case 1:s==="("?r=2:lm.test(s)?u():(f(),r=0,s!=="*"&&s!=="?"&&s!=="+"&&l--);break;case 2:s===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+s:r=3:c+=s;break;case 3:f(),r=0,s!=="*"&&s!=="?"&&s!=="+"&&l--,c="";break;default:e("Unknown state");break}}return r===2&&e(`Unfinished custom RegExp for param "${d}"`),f(),i(),o}function cm(t,e,r){const n=nm(sm(t.path),r),o=Z(n,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf==!e.record.aliasOf&&e.children.push(o),o}function dm(t,e){const r=[],n=new Map;e=Ca({strict:!1,end:!0,sensitive:!1},e);function o(c){return n.get(c)}function a(c,f,u){const h=!u,E=fm(c);E.aliasOf=u&&u.record;const j=Ca(e,c),O=[E];if("alias"in c){const I=typeof c.alias=="string"?[c.alias]:c.alias;for(const $ of I)O.push(Z({},E,{components:u?u.record.components:E.components,path:$,aliasOf:u?u.record:E}))}let b,k;for(const I of O){const{path:$}=I;if(f&&$[0]!=="/"){const W=f.record.path,nt=W[W.length-1]==="/"?"":"/";I.path=f.record.path+($&&nt+$)}if(b=cm(I,f,j),u?u.alias.push(b):(k=k||b,k!==b&&k.alias.push(b),h&&c.name&&!za(b)&&i(c.name)),"children"in E){const W=E.children;for(let nt=0;nt<W.length;nt++)a(W[nt],b,u&&u.children[nt])}u=u||b,s(b)}return k?()=>{i(k)}:or}function i(c){if(sl(c)){const f=n.get(c);f&&(n.delete(c),r.splice(r.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=r.indexOf(c);f>-1&&(r.splice(f,1),c.record.name&&n.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function l(){return r}function s(c){let f=0;for(;f<r.length&&am(c,r[f])>=0&&(c.record.path!==r[f].record.path||!dl(c,r[f]));)f++;r.splice(f,0,c),c.record.name&&!za(c)&&n.set(c.record.name,c)}function d(c,f){let u,h={},E,j;if("name"in c&&c.name){if(u=n.get(c.name),!u)throw Be(1,{location:c});j=u.record.name,h=Z(mm(f.params,u.keys.filter(k=>!k.optional).map(k=>k.name)),c.params),E=u.stringify(h)}else if("path"in c)E=c.path,u=r.find(k=>k.re.test(E)),u&&(h=u.parse(E),j=u.record.name);else{if(u=f.name?n.get(f.name):r.find(k=>k.re.test(f.path)),!u)throw Be(1,{location:c,currentLocation:f});j=u.record.name,h=Z({},f.params,c.params),E=u.stringify(h)}const O=[];let b=u;for(;b;)O.unshift(b.record),b=b.parent;return{name:j,path:E,params:h,matched:O,meta:um(O)}}return t.forEach(c=>a(c)),{addRoute:a,resolve:d,removeRoute:i,getRoutes:l,getRecordMatcher:o}}function mm(t,e){const r={};for(const n of e)n in t&&(r[n]=t[n]);return r}function fm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:pm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function pm(t){const e={},r=t.props||!1;if("component"in t)e.default=r;else for(const n in t.components)e[n]=typeof r=="boolean"?r:r[n];return e}function za(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function um(t){return t.reduce((e,r)=>Z(e,r.meta),{})}function Ca(t,e){const r={};for(const n in t)r[n]=n in e?e[n]:t[n];return r}function dl(t,e){return e.children.some(r=>r===t||dl(t,r))}const ml=/#/g,gm=/&/g,bm=/\//g,hm=/=/g,xm=/\?/g,fl=/\+/g,vm=/%5B/g,wm=/%5D/g,pl=/%5E/g,ym=/%60/g,ul=/%7B/g,km=/%7C/g,gl=/%7D/g,_m=/%20/g;function Eo(t){return encodeURI(""+t).replace(km,"|").replace(vm,"[").replace(wm,"]")}function Am(t){return Eo(t).replace(ul,"{").replace(gl,"}").replace(pl,"^")}function Yn(t){return Eo(t).replace(fl,"%2B").replace(_m,"+").replace(ml,"%23").replace(gm,"%26").replace(ym,"`").replace(ul,"{").replace(gl,"}").replace(pl,"^")}function Em(t){return Yn(t).replace(hm,"%3D")}function zm(t){return Eo(t).replace(ml,"%23").replace(xm,"%3F")}function Cm(t){return t==null?"":zm(t).replace(bm,"%2F")}function Br(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Om(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<n.length;++o){const a=n[o].replace(fl," "),i=a.indexOf("="),l=Br(i<0?a:a.slice(0,i)),s=i<0?null:Br(a.slice(i+1));if(l in e){let d=e[l];Array.isArray(d)||(d=e[l]=[d]),d.push(s)}else e[l]=s}return e}function Oa(t){let e="";for(let r in t){const n=t[r];if(r=Em(r),n==null){n!==void 0&&(e+=(e.length?"&":"")+r);continue}(Array.isArray(n)?n.map(a=>a&&Yn(a)):[n&&Yn(n)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+r,a!=null&&(e+="="+a))})}return e}function Pm(t){const e={};for(const r in t){const n=t[r];n!==void 0&&(e[r]=Array.isArray(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return e}function Ge(){let t=[];function e(n){return t.push(n),()=>{const o=t.indexOf(n);o>-1&&t.splice(o,1)}}function r(){t=[]}return{add:e,list:()=>t,reset:r}}function ie(t,e,r,n,o){const a=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((i,l)=>{const s=f=>{f===!1?l(Be(4,{from:r,to:e})):f instanceof Error?l(f):tm(f)?l(Be(2,{from:e,to:f})):(a&&n.enterCallbacks[o]===a&&typeof f=="function"&&a.push(f),i())},d=t.call(n&&n.instances[o],e,r,s);let c=Promise.resolve(d);t.length<3&&(c=c.then(s)),c.catch(f=>l(f))})}function kn(t,e,r,n){const o=[];for(const a of t)for(const i in a.components){let l=a.components[i];if(!(e!=="beforeRouteEnter"&&!a.instances[i]))if(Sm(l)){const d=(l.__vccOpts||l)[e];d&&o.push(ie(d,r,n,a,i))}else{let s=l();o.push(()=>s.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));const c=Nd(d)?d.default:d;a.components[i]=c;const u=(c.__vccOpts||c)[e];return u&&ie(u,r,n,a,i)()}))}}return o}function Sm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pa(t){const e=ce(Ao),r=ce(al),n=lt(()=>e.resolve(Ze(t.to))),o=lt(()=>{const{matched:s}=n.value,{length:d}=s,c=s[d-1],f=r.matched;if(!c||!f.length)return-1;const u=f.findIndex(De.bind(null,c));if(u>-1)return u;const h=Sa(s[d-2]);return d>1&&Sa(c)===h&&f[f.length-1].path!==h?f.findIndex(De.bind(null,s[d-2])):u}),a=lt(()=>o.value>-1&&jm(r.params,n.value.params)),i=lt(()=>o.value>-1&&o.value===r.matched.length-1&&il(r.params,n.value.params));function l(s={}){return Tm(s)?e[Ze(t.replace)?"replace":"push"](Ze(t.to)).catch(or):Promise.resolve()}return{route:n,href:lt(()=>n.value.href),isActive:a,isExactActive:i,navigate:l}}const Rm=vr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pa,setup(t,{slots:e}){const r=xr(Pa(t)),{options:n}=ce(Ao),o=lt(()=>({[Ra(t.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[Ra(t.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const a=e.default&&e.default(r);return t.custom?a:an("a",{"aria-current":r.isExactActive?t.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},a)}}}),Im=Rm;function Tm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jm(t,e){for(const r in e){const n=e[r],o=t[r];if(typeof n=="string"){if(n!==o)return!1}else if(!Array.isArray(o)||o.length!==n.length||n.some((a,i)=>a!==o[i]))return!1}return!0}function Sa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ra=(t,e,r)=>t!=null?t:e!=null?e:r,Mm=vr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:r}){const n=ce(Un),o=lt(()=>t.route||n.value),a=ce(xa,0),i=lt(()=>o.value.matched[a]);Pr(xa,a+1),Pr(Md,i),Pr(Un,o);const l=Ms();return rr(()=>[l.value,i.value,t.name],([s,d,c],[f,u,h])=>{d&&(d.instances[c]=s,u&&u!==d&&s&&s===f&&(d.leaveGuards.size||(d.leaveGuards=u.leaveGuards),d.updateGuards.size||(d.updateGuards=u.updateGuards))),s&&d&&(!u||!De(d,u)||!f)&&(d.enterCallbacks[c]||[]).forEach(E=>E(s))},{flush:"post"}),()=>{const s=o.value,d=i.value,c=d&&d.components[t.name],f=t.name;if(!c)return Ia(r.default,{Component:c,route:s});const u=d.props[t.name],h=u?u===!0?s.params:typeof u=="function"?u(s):u:null,j=an(c,Z({},h,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Ia(r.default,{Component:j,route:s})||j}}});function Ia(t,e){if(!t)return null;const r=t(e);return r.length===1?r[0]:r}const Nm=Mm;function Lm(t){const e=dm(t.routes,t),r=t.parseQuery||Om,n=t.stringifyQuery||Oa,o=t.history,a=Ge(),i=Ge(),l=Ge(),s=Ns(ee);let d=ee;Se&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=wn.bind(null,x=>""+x),f=wn.bind(null,Cm),u=wn.bind(null,Br);function h(x,T){let C,M;return sl(x)?(C=e.getRecordMatcher(x),M=T):M=x,e.addRoute(M,C)}function E(x){const T=e.getRecordMatcher(x);T&&e.removeRoute(T)}function j(){return e.getRoutes().map(x=>x.record)}function O(x){return!!e.getRecordMatcher(x)}function b(x,T){if(T=Z({},T||s.value),typeof x=="string"){const U=yn(r,x,T.path),m=e.resolve({path:U.path},T),p=o.createHref(U.fullPath);return Z(U,m,{params:u(m.params),hash:Br(U.hash),redirectedFrom:void 0,href:p})}let C;if("path"in x)C=Z({},x,{path:yn(r,x.path,T.path).path});else{const U=Z({},x.params);for(const m in U)U[m]==null&&delete U[m];C=Z({},x,{params:f(x.params)}),T.params=f(T.params)}const M=e.resolve(C,T),X=x.hash||"";M.params=c(u(M.params));const et=$d(n,Z({},x,{hash:Am(X),path:M.path})),Y=o.createHref(et);return Z({fullPath:et,hash:X,query:n===Oa?Pm(x.query):x.query||{}},M,{redirectedFrom:void 0,href:Y})}function k(x){return typeof x=="string"?yn(r,x,s.value.path):Z({},x)}function I(x,T){if(d!==x)return Be(8,{from:T,to:x})}function $(x){return st(x)}function W(x){return $(Z(k(x),{replace:!0}))}function nt(x){const T=x.matched[x.matched.length-1];if(T&&T.redirect){const{redirect:C}=T;let M=typeof C=="function"?C(x):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=k(M):{path:M},M.params={}),Z({query:x.query,hash:x.hash,params:x.params},M)}}function st(x,T){const C=d=b(x),M=s.value,X=x.state,et=x.force,Y=x.replace===!0,U=nt(C);if(U)return st(Z(k(U),{state:X,force:et,replace:Y}),T||C);const m=C;m.redirectedFrom=T;let p;return!et&&Dd(n,M,C)&&(p=Be(16,{to:m,from:M}),Ee(M,M,!0,!1)),(p?Promise.resolve(p):ft(m,M)).catch(g=>re(g)?re(g,2)?g:wt(g):tt(g,m,M)).then(g=>{if(g){if(re(g,2))return st(Z(k(g.to),{state:X,force:et,replace:Y}),T||m)}else g=Yt(m,M,!0,Y,X);return Zt(m,M,g),g})}function Et(x,T){const C=I(x,T);return C?Promise.reject(C):Promise.resolve()}function ft(x,T){let C;const[M,X,et]=Fm(x,T);C=kn(M.reverse(),"beforeRouteLeave",x,T);for(const U of M)U.leaveGuards.forEach(m=>{C.push(ie(m,x,T))});const Y=Et.bind(null,x,T);return C.push(Y),Ce(C).then(()=>{C=[];for(const U of a.list())C.push(ie(U,x,T));return C.push(Y),Ce(C)}).then(()=>{C=kn(X,"beforeRouteUpdate",x,T);for(const U of X)U.updateGuards.forEach(m=>{C.push(ie(m,x,T))});return C.push(Y),Ce(C)}).then(()=>{C=[];for(const U of x.matched)if(U.beforeEnter&&!T.matched.includes(U))if(Array.isArray(U.beforeEnter))for(const m of U.beforeEnter)C.push(ie(m,x,T));else C.push(ie(U.beforeEnter,x,T));return C.push(Y),Ce(C)}).then(()=>(x.matched.forEach(U=>U.enterCallbacks={}),C=kn(et,"beforeRouteEnter",x,T),C.push(Y),Ce(C))).then(()=>{C=[];for(const U of i.list())C.push(ie(U,x,T));return C.push(Y),Ce(C)}).catch(U=>re(U,8)?U:Promise.reject(U))}function Zt(x,T,C){for(const M of l.list())M(x,T,C)}function Yt(x,T,C,M,X){const et=I(x,T);if(et)return et;const Y=T===ee,U=Se?history.state:{};C&&(M||Y?o.replace(x.fullPath,Z({scroll:Y&&U&&U.scroll},X)):o.push(x.fullPath,X)),s.value=x,Ee(x,T,C,Y),wt()}let Ct;function ke(){Ct||(Ct=o.listen((x,T,C)=>{const M=b(x),X=nt(M);if(X){st(Z(X,{replace:!0}),M).catch(or);return}d=M;const et=s.value;Se&&Vd(ya(et.fullPath,C.delta),ln()),ft(M,et).catch(Y=>re(Y,12)?Y:re(Y,2)?(st(Y.to,M).then(U=>{re(U,20)&&!C.delta&&C.type===br.pop&&o.go(-1,!1)}).catch(or),Promise.reject()):(C.delta&&o.go(-C.delta,!1),tt(Y,M,et))).then(Y=>{Y=Y||Yt(M,et,!1),Y&&(C.delta?o.go(-C.delta,!1):C.type===br.pop&&re(Y,20)&&o.go(-1,!1)),Zt(M,et,Y)}).catch(or)}))}let _e=Ge(),Ae=Ge(),ct;function tt(x,T,C){wt(x);const M=Ae.list();return M.length?M.forEach(X=>X(x,T,C)):console.error(x),Promise.reject(x)}function G(){return ct&&s.value!==ee?Promise.resolve():new Promise((x,T)=>{_e.add([x,T])})}function wt(x){return ct||(ct=!x,ke(),_e.list().forEach(([T,C])=>x?C(x):T()),_e.reset()),x}function Ee(x,T,C,M){const{scrollBehavior:X}=t;if(!Se||!X)return Promise.resolve();const et=!C&&Gd(ya(x.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return Pi().then(()=>X(x,T,et)).then(Y=>Y&&qd(Y)).catch(Y=>tt(Y,x,T))}const Wt=x=>o.go(x);let Mt;const zt=new Set;return{currentRoute:s,addRoute:h,removeRoute:E,hasRoute:O,getRoutes:j,resolve:b,options:t,push:$,replace:W,go:Wt,back:()=>Wt(-1),forward:()=>Wt(1),beforeEach:a.add,beforeResolve:i.add,afterEach:l.add,onError:Ae.add,isReady:G,install(x){const T=this;x.component("RouterLink",Im),x.component("RouterView",Nm),x.config.globalProperties.$router=T,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(s)}),Se&&!Mt&&s.value===ee&&(Mt=!0,$(o.location).catch(X=>{}));const C={};for(const X in ee)C[X]=lt(()=>s.value[X]);x.provide(Ao,T),x.provide(al,xr(C)),x.provide(Un,s);const M=x.unmount;zt.add(x),x.unmount=function(){zt.delete(x),zt.size<1&&(d=ee,Ct&&Ct(),Ct=null,s.value=ee,Mt=!1,ct=!1),M()}}}}function Ce(t){return t.reduce((e,r)=>e.then(()=>r()),Promise.resolve())}function Fm(t,e){const r=[],n=[],o=[],a=Math.max(e.matched.length,t.matched.length);for(let i=0;i<a;i++){const l=e.matched[i];l&&(t.matched.find(d=>De(d,l))?n.push(l):r.push(l));const s=t.matched[i];s&&(e.matched.find(d=>De(d,s))||o.push(s))}return[r,n,o]}const $m={},Dm={class:"introduction"},Bm=it("p",null,[Ir(" Hello \u{1F44B} \u2014 My name is "),it("strong",{style:{color:"#bf616a"}},"Aidan"),Ir(". "),it("br"),Ir(" I occasionally create software \u2699\uFE0F. ")],-1),Um=[Bm];function Hm(t,e){return Qi(),Ji("div",Dm,Um)}var Ym=nl($m,[["render",Hm]]);const Wm=Lm({history:Zd("/"),routes:[{path:"/",name:"home",component:Ym},{path:"/projects",name:"projects",component:()=>jd(()=>import("./ProjectView.595138df.js"),["assets/ProjectView.595138df.js","assets/ProjectView.7a2b2698.css"])}]});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ta(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Ta(Object(r),!0).forEach(function(n){Vm(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ta(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function Ur(t){return Ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ur(t)}function Km(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ja(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function qm(t,e,r){return e&&ja(t.prototype,e),r&&ja(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Vm(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function zo(t,e){return Xm(t)||Jm(t,e)||bl(t,e)||tf()}function sn(t){return Gm(t)||Qm(t)||bl(t)||Zm()}function Gm(t){if(Array.isArray(t))return Wn(t)}function Xm(t){if(Array.isArray(t))return t}function Qm(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Jm(t,e){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var n=[],o=!0,a=!1,i,l;try{for(r=r.call(t);!(o=(i=r.next()).done)&&(n.push(i.value),!(e&&n.length===e));o=!0);}catch(s){a=!0,l=s}finally{try{!o&&r.return!=null&&r.return()}finally{if(a)throw l}}return n}}function bl(t,e){if(!!t){if(typeof t=="string")return Wn(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Wn(t,e)}}function Wn(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Zm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ma=function(){},Co={},hl={},xl=null,vl={mark:Ma,measure:Ma};try{typeof window!="undefined"&&(Co=window),typeof document!="undefined"&&(hl=document),typeof MutationObserver!="undefined"&&(xl=MutationObserver),typeof performance!="undefined"&&(vl=performance)}catch{}var ef=Co.navigator||{},Na=ef.userAgent,La=Na===void 0?"":Na,me=Co,at=hl,Fa=xl,zr=vl;me.document;var Jt=!!at.documentElement&&!!at.head&&typeof at.addEventListener=="function"&&typeof at.createElement=="function",wl=~La.indexOf("MSIE")||~La.indexOf("Trident/"),Vt="___FONT_AWESOME___",Kn=16,yl="fa",kl="svg-inline--fa",we="data-fa-i2svg",qn="data-fa-pseudo-element",rf="data-fa-pseudo-element-pending",Oo="data-prefix",Po="data-icon",$a="fontawesome-i2svg",nf="async",of=["HTML","HEAD","STYLE","SCRIPT"],_l=function(){try{return!0}catch{return!1}}(),So={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Hr={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Al={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},af={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},lf=/fa[srltdbk\-\ ]/,El="fa-layers-text",sf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,cf={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},zl=[1,2,3,4,5,6,7,8,9,10],df=zl.concat([11,12,13,14,15,16,17,18,19,20]),mf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],he={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ff=[].concat(sn(Object.keys(Hr)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",he.GROUP,he.SWAP_OPACITY,he.PRIMARY,he.SECONDARY]).concat(zl.map(function(t){return"".concat(t,"x")})).concat(df.map(function(t){return"w-".concat(t)})),Cl=me.FontAwesomeConfig||{};function pf(t){var e=at.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uf(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(at&&typeof at.querySelector=="function"){var gf=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gf.forEach(function(t){var e=zo(t,2),r=e[0],n=e[1],o=uf(pf(r));o!=null&&(Cl[n]=o)})}var bf={familyPrefix:yl,styleDefault:"solid",replacementClass:kl,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ir=S(S({},bf),Cl);ir.autoReplaceSvg||(ir.observeMutations=!1);var F={};Object.keys(ir).forEach(function(t){Object.defineProperty(F,t,{enumerable:!0,set:function(r){ir[t]=r,Tr.forEach(function(n){return n(F)})},get:function(){return ir[t]}})});me.FontAwesomeConfig=F;var Tr=[];function hf(t){return Tr.push(t),function(){Tr.splice(Tr.indexOf(t),1)}}var ne=Kn,Ut={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xf(t){if(!(!t||!Jt)){var e=at.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var r=at.head.childNodes,n=null,o=r.length-1;o>-1;o--){var a=r[o],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=a)}return at.head.insertBefore(e,n),t}}var vf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hr(){for(var t=12,e="";t-- >0;)e+=vf[Math.random()*62|0];return e}function Ke(t){for(var e=[],r=(t||[]).length>>>0;r--;)e[r]=t[r];return e}function Ro(t){return t.classList?Ke(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ol(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wf(t){return Object.keys(t||{}).reduce(function(e,r){return e+"".concat(r,'="').concat(Ol(t[r]),'" ')},"").trim()}function cn(t){return Object.keys(t||{}).reduce(function(e,r){return e+"".concat(r,": ").concat(t[r].trim(),";")},"")}function Io(t){return t.size!==Ut.size||t.x!==Ut.x||t.y!==Ut.y||t.rotate!==Ut.rotate||t.flipX||t.flipY}function yf(t){var e=t.transform,r=t.containerWidth,n=t.iconWidth,o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),s={transform:"".concat(a," ").concat(i," ").concat(l)},d={transform:"translate(".concat(n/2*-1," -256)")};return{outer:o,inner:s,path:d}}function kf(t){var e=t.transform,r=t.width,n=r===void 0?Kn:r,o=t.height,a=o===void 0?Kn:o,i=t.startCentered,l=i===void 0?!1:i,s="";return l&&wl?s+="translate(".concat(e.x/ne-n/2,"em, ").concat(e.y/ne-a/2,"em) "):l?s+="translate(calc(-50% + ".concat(e.x/ne,"em), calc(-50% + ").concat(e.y/ne,"em)) "):s+="translate(".concat(e.x/ne,"em, ").concat(e.y/ne,"em) "),s+="scale(".concat(e.size/ne*(e.flipX?-1:1),", ").concat(e.size/ne*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var _f=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
    transition-delay: 0s;
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
}`;function Pl(){var t=yl,e=kl,r=F.familyPrefix,n=F.replacementClass,o=_f;if(r!==t||n!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");o=o.replace(a,".".concat(r,"-")).replace(i,"--".concat(r,"-")).replace(l,".".concat(n))}return o}var Da=!1;function _n(){F.autoAddCss&&!Da&&(xf(Pl()),Da=!0)}var Af={mixout:function(){return{dom:{css:Pl,insertCss:_n}}},hooks:function(){return{beforeDOMElementCreation:function(){_n()},beforeI2svg:function(){_n()}}}},Gt=me||{};Gt[Vt]||(Gt[Vt]={});Gt[Vt].styles||(Gt[Vt].styles={});Gt[Vt].hooks||(Gt[Vt].hooks={});Gt[Vt].shims||(Gt[Vt].shims=[]);var It=Gt[Vt],Sl=[],Ef=function t(){at.removeEventListener("DOMContentLoaded",t),Yr=1,Sl.map(function(e){return e()})},Yr=!1;Jt&&(Yr=(at.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(at.readyState),Yr||at.addEventListener("DOMContentLoaded",Ef));function zf(t){!Jt||(Yr?setTimeout(t,0):Sl.push(t))}function wr(t){var e=t.tag,r=t.attributes,n=r===void 0?{}:r,o=t.children,a=o===void 0?[]:o;return typeof t=="string"?Ol(t):"<".concat(e," ").concat(wf(n),">").concat(a.map(wr).join(""),"</").concat(e,">")}function Ba(t,e,r){if(t&&t[e]&&t[e][r])return{prefix:e,iconName:r,icon:t[e][r]}}var Cf=function(e,r){return function(n,o,a,i){return e.call(r,n,o,a,i)}},An=function(e,r,n,o){var a=Object.keys(e),i=a.length,l=o!==void 0?Cf(r,o):r,s,d,c;for(n===void 0?(s=1,c=e[a[0]]):(s=0,c=n);s<i;s++)d=a[s],c=l(c,e[d],d,e);return c};function Of(t){for(var e=[],r=0,n=t.length;r<n;){var o=t.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var a=t.charCodeAt(r++);(a&64512)==56320?e.push(((o&1023)<<10)+(a&1023)+65536):(e.push(o),r--)}else e.push(o)}return e}function Vn(t){var e=Of(t);return e.length===1?e[0].toString(16):null}function Pf(t,e){var r=t.length,n=t.charCodeAt(e),o;return n>=55296&&n<=56319&&r>e+1&&(o=t.charCodeAt(e+1),o>=56320&&o<=57343)?(n-55296)*1024+o-56320+65536:n}function Ua(t){return Object.keys(t).reduce(function(e,r){var n=t[r],o=!!n.icon;return o?e[n.iconName]=n.icon:e[r]=n,e},{})}function Gn(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.skipHooks,o=n===void 0?!1:n,a=Ua(e);typeof It.hooks.addPack=="function"&&!o?It.hooks.addPack(t,Ua(e)):It.styles[t]=S(S({},It.styles[t]||{}),a),t==="fas"&&Gn("fa",e)}var lr=It.styles,Sf=It.shims,Rf=Object.values(Al),To=null,Rl={},Il={},Tl={},jl={},Ml={},If=Object.keys(So);function Tf(t){return~ff.indexOf(t)}function jf(t,e){var r=e.split("-"),n=r[0],o=r.slice(1).join("-");return n===t&&o!==""&&!Tf(o)?o:null}var Nl=function(){var e=function(a){return An(lr,function(i,l,s){return i[s]=An(l,a,{}),i},{})};Rl=e(function(o,a,i){if(a[3]&&(o[a[3]]=i),a[2]){var l=a[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){o[s.toString(16)]=i})}return o}),Il=e(function(o,a,i){if(o[i]=i,a[2]){var l=a[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){o[s]=i})}return o}),Ml=e(function(o,a,i){var l=a[2];return o[i]=i,l.forEach(function(s){o[s]=i}),o});var r="far"in lr||F.autoFetchSvg,n=An(Sf,function(o,a){var i=a[0],l=a[1],s=a[2];return l==="far"&&!r&&(l="fas"),typeof i=="string"&&(o.names[i]={prefix:l,iconName:s}),typeof i=="number"&&(o.unicodes[i.toString(16)]={prefix:l,iconName:s}),o},{names:{},unicodes:{}});Tl=n.names,jl=n.unicodes,To=dn(F.styleDefault)};hf(function(t){To=dn(t.styleDefault)});Nl();function jo(t,e){return(Rl[t]||{})[e]}function Mf(t,e){return(Il[t]||{})[e]}function Ie(t,e){return(Ml[t]||{})[e]}function Ll(t){return Tl[t]||{prefix:null,iconName:null}}function Nf(t){var e=jl[t],r=jo("fas",t);return e||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function fe(){return To}var Mo=function(){return{prefix:null,iconName:null,rest:[]}};function dn(t){var e=So[t],r=Hr[t]||Hr[e],n=t in It.styles?t:null;return r||n||null}function mn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,n=r===void 0?!1:r,o=null,a=t.reduce(function(i,l){var s=jf(F.familyPrefix,l);if(lr[l]?(l=Rf.includes(l)?af[l]:l,o=l,i.prefix=l):If.indexOf(l)>-1?(o=l,i.prefix=dn(l)):s?i.iconName=s:l!==F.replacementClass&&i.rest.push(l),!n&&i.prefix&&i.iconName){var d=o==="fa"?Ll(i.iconName):{},c=Ie(i.prefix,i.iconName);d.prefix&&(o=null),i.iconName=d.iconName||c||i.iconName,i.prefix=d.prefix||i.prefix,i.prefix==="far"&&!lr.far&&lr.fas&&!F.autoFetchSvg&&(i.prefix="fas")}return i},Mo());return(a.prefix==="fa"||o==="fa")&&(a.prefix=fe()||"fas"),a}var Lf=function(){function t(){Km(this,t),this.definitions={}}return qm(t,[{key:"add",value:function(){for(var r=this,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];var i=o.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(l){r.definitions[l]=S(S({},r.definitions[l]||{}),i[l]),Gn(l,i[l]);var s=Al[l];s&&Gn(s,i[l]),Nl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,n){var o=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(o).map(function(a){var i=o[a],l=i.prefix,s=i.iconName,d=i.icon,c=d[2];r[l]||(r[l]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(r[l][f]=d)}),r[l][s]=d}),r}}]),t}(),Ha=[],Te={},Le={},Ff=Object.keys(Le);function $f(t,e){var r=e.mixoutsTo;return Ha=t,Te={},Object.keys(Le).forEach(function(n){Ff.indexOf(n)===-1&&delete Le[n]}),Ha.forEach(function(n){var o=n.mixout?n.mixout():{};if(Object.keys(o).forEach(function(i){typeof o[i]=="function"&&(r[i]=o[i]),Ur(o[i])==="object"&&Object.keys(o[i]).forEach(function(l){r[i]||(r[i]={}),r[i][l]=o[i][l]})}),n.hooks){var a=n.hooks();Object.keys(a).forEach(function(i){Te[i]||(Te[i]=[]),Te[i].push(a[i])})}n.provides&&n.provides(Le)}),r}function Xn(t,e){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];var a=Te[t]||[];return a.forEach(function(i){e=i.apply(null,[e].concat(n))}),e}function ye(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var o=Te[t]||[];o.forEach(function(a){a.apply(null,r)})}function Xt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Le[t]?Le[t].apply(null,e):void 0}function Qn(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,r=t.prefix||fe();if(!!e)return e=Ie(r,e)||e,Ba(Fl.definitions,r,e)||Ba(It.styles,r,e)}var Fl=new Lf,Df=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,ye("noAuto")},Bf={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jt?(ye("beforeI2svg",e),Xt("pseudoElements2svg",e),Xt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,zf(function(){Hf({autoReplaceSvgRoot:r}),ye("watch",e)})}},Uf={icon:function(e){if(e===null)return null;if(Ur(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ie(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var r=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=dn(e[0]);return{prefix:n,iconName:Ie(n,r)||r}}if(typeof e=="string"&&(e.indexOf("".concat(F.familyPrefix,"-"))>-1||e.match(lf))){var o=mn(e.split(" "),{skipLookups:!0});return{prefix:o.prefix||fe(),iconName:Ie(o.prefix,o.iconName)||o.iconName}}if(typeof e=="string"){var a=fe();return{prefix:a,iconName:Ie(a,e)||e}}}},At={noAuto:Df,config:F,dom:Bf,parse:Uf,library:Fl,findIconDefinition:Qn,toHtml:wr},Hf=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.autoReplaceSvgRoot,n=r===void 0?at:r;(Object.keys(It.styles).length>0||F.autoFetchSvg)&&Jt&&F.autoReplaceSvg&&At.dom.i2svg({node:n})};function fn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return wr(n)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Jt){var n=at.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function Yf(t){var e=t.children,r=t.main,n=t.mask,o=t.attributes,a=t.styles,i=t.transform;if(Io(i)&&r.found&&!n.found){var l=r.width,s=r.height,d={x:l/s/2,y:.5};o.style=cn(S(S({},a),{},{"transform-origin":"".concat(d.x+i.x/16,"em ").concat(d.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function Wf(t){var e=t.prefix,r=t.iconName,n=t.children,o=t.attributes,a=t.symbol,i=a===!0?"".concat(e,"-").concat(F.familyPrefix,"-").concat(r):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},o),{},{id:i}),children:n}]}]}function No(t){var e=t.icons,r=e.main,n=e.mask,o=t.prefix,a=t.iconName,i=t.transform,l=t.symbol,s=t.title,d=t.maskId,c=t.titleId,f=t.extra,u=t.watchable,h=u===void 0?!1:u,E=n.found?n:r,j=E.width,O=E.height,b=o==="fak",k=[F.replacementClass,a?"".concat(F.familyPrefix,"-").concat(a):""].filter(function(ft){return f.classes.indexOf(ft)===-1}).filter(function(ft){return ft!==""||!!ft}).concat(f.classes).join(" "),I={children:[],attributes:S(S({},f.attributes),{},{"data-prefix":o,"data-icon":a,class:k,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(O)})},$=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(j/O*16*.0625,"em")}:{};h&&(I.attributes[we]=""),s&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(c||hr())},children:[s]}),delete I.attributes.title);var W=S(S({},I),{},{prefix:o,iconName:a,main:r,mask:n,maskId:d,transform:i,symbol:l,styles:S(S({},$),f.styles)}),nt=n.found&&r.found?Xt("generateAbstractMask",W)||{children:[],attributes:{}}:Xt("generateAbstractIcon",W)||{children:[],attributes:{}},st=nt.children,Et=nt.attributes;return W.children=st,W.attributes=Et,l?Wf(W):Yf(W)}function Ya(t){var e=t.content,r=t.width,n=t.height,o=t.transform,a=t.title,i=t.extra,l=t.watchable,s=l===void 0?!1:l,d=S(S(S({},i.attributes),a?{title:a}:{}),{},{class:i.classes.join(" ")});s&&(d[we]="");var c=S({},i.styles);Io(o)&&(c.transform=kf({transform:o,startCentered:!0,width:r,height:n}),c["-webkit-transform"]=c.transform);var f=cn(c);f.length>0&&(d.style=f);var u=[];return u.push({tag:"span",attributes:d,children:[e]}),a&&u.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),u}function Kf(t){var e=t.content,r=t.title,n=t.extra,o=S(S(S({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),a=cn(n.styles);a.length>0&&(o.style=a);var i=[];return i.push({tag:"span",attributes:o,children:[e]}),r&&i.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),i}var En=It.styles;function Jn(t){var e=t[0],r=t[1],n=t.slice(4),o=zo(n,1),a=o[0],i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(F.familyPrefix,"-").concat(he.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(he.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(he.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:r,icon:i}}var qf={found:!1,width:512,height:512};function Vf(t,e){!_l&&!F.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Zn(t,e){var r=e;return e==="fa"&&F.styleDefault!==null&&(e=fe()),new Promise(function(n,o){if(Xt("missingIconAbstract"),r==="fa"){var a=Ll(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&En[e]&&En[e][t]){var i=En[e][t];return n(Jn(i))}Vf(t,e),n(S(S({},qf),{},{icon:F.showMissingIcons&&t?Xt("missingIconAbstract")||{}:{}}))})}var Wa=function(){},to=F.measurePerformance&&zr&&zr.mark&&zr.measure?zr:{mark:Wa,measure:Wa},Je='FA "6.1.1"',Gf=function(e){return to.mark("".concat(Je," ").concat(e," begins")),function(){return $l(e)}},$l=function(e){to.mark("".concat(Je," ").concat(e," ends")),to.measure("".concat(Je," ").concat(e),"".concat(Je," ").concat(e," begins"),"".concat(Je," ").concat(e," ends"))},Lo={begin:Gf,end:$l},jr=function(){};function Ka(t){var e=t.getAttribute?t.getAttribute(we):null;return typeof e=="string"}function Xf(t){var e=t.getAttribute?t.getAttribute(Oo):null,r=t.getAttribute?t.getAttribute(Po):null;return e&&r}function Qf(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(F.replacementClass)}function Jf(){if(F.autoReplaceSvg===!0)return Mr.replace;var t=Mr[F.autoReplaceSvg];return t||Mr.replace}function Zf(t){return at.createElementNS("http://www.w3.org/2000/svg",t)}function tp(t){return at.createElement(t)}function Dl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.ceFn,n=r===void 0?t.tag==="svg"?Zf:tp:r;if(typeof t=="string")return at.createTextNode(t);var o=n(t.tag);Object.keys(t.attributes||[]).forEach(function(i){o.setAttribute(i,t.attributes[i])});var a=t.children||[];return a.forEach(function(i){o.appendChild(Dl(i,{ceFn:n}))}),o}function ep(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Mr={replace:function(e){var r=e[0];if(r.parentNode)if(e[1].forEach(function(o){r.parentNode.insertBefore(Dl(o),r)}),r.getAttribute(we)===null&&F.keepOriginalSource){var n=at.createComment(ep(r));r.parentNode.replaceChild(n,r)}else r.remove()},nest:function(e){var r=e[0],n=e[1];if(~Ro(r).indexOf(F.replacementClass))return Mr.replace(e);var o=new RegExp("".concat(F.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(l,s){return s===F.replacementClass||s.match(o)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",a.toNode.join(" "))}var i=n.map(function(l){return wr(l)}).join(`
`);r.setAttribute(we,""),r.innerHTML=i}};function qa(t){t()}function Bl(t,e){var r=typeof e=="function"?e:jr;if(t.length===0)r();else{var n=qa;F.mutateApproach===nf&&(n=me.requestAnimationFrame||qa),n(function(){var o=Jf(),a=Lo.begin("mutate");t.map(o),a(),r()})}}var Fo=!1;function Ul(){Fo=!0}function eo(){Fo=!1}var Wr=null;function Va(t){if(!!Fa&&!!F.observeMutations){var e=t.treeCallback,r=e===void 0?jr:e,n=t.nodeCallback,o=n===void 0?jr:n,a=t.pseudoElementsCallback,i=a===void 0?jr:a,l=t.observeMutationsRoot,s=l===void 0?at:l;Wr=new Fa(function(d){if(!Fo){var c=fe();Ke(d).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ka(f.addedNodes[0])&&(F.searchPseudoElements&&i(f.target),r(f.target)),f.type==="attributes"&&f.target.parentNode&&F.searchPseudoElements&&i(f.target.parentNode),f.type==="attributes"&&Ka(f.target)&&~mf.indexOf(f.attributeName))if(f.attributeName==="class"&&Xf(f.target)){var u=mn(Ro(f.target)),h=u.prefix,E=u.iconName;f.target.setAttribute(Oo,h||c),E&&f.target.setAttribute(Po,E)}else Qf(f.target)&&o(f.target)})}}),Jt&&Wr.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rp(){!Wr||Wr.disconnect()}function np(t){var e=t.getAttribute("style"),r=[];return e&&(r=e.split(";").reduce(function(n,o){var a=o.split(":"),i=a[0],l=a.slice(1);return i&&l.length>0&&(n[i]=l.join(":").trim()),n},{})),r}function op(t){var e=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",o=mn(Ro(t));return o.prefix||(o.prefix=fe()),e&&r&&(o.prefix=e,o.iconName=r),o.iconName&&o.prefix||o.prefix&&n.length>0&&(o.iconName=Mf(o.prefix,t.innerText)||jo(o.prefix,Vn(t.innerText))),o}function ap(t){var e=Ke(t.attributes).reduce(function(o,a){return o.name!=="class"&&o.name!=="style"&&(o[a.name]=a.value),o},{}),r=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return F.autoA11y&&(r?e["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(n||hr()):(e["aria-hidden"]="true",e.focusable="false")),e}function ip(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ut,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ga(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=op(t),n=r.iconName,o=r.prefix,a=r.rest,i=ap(t),l=Xn("parseNodeAttributes",{},t),s=e.styleParser?np(t):[];return S({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:o,transform:Ut,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},l)}var lp=It.styles;function Hl(t){var e=F.autoReplaceSvg==="nest"?Ga(t,{styleParser:!1}):Ga(t);return~e.extra.classes.indexOf(El)?Xt("generateLayersText",t,e):Xt("generateSvgReplacementMutation",t,e)}function Xa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jt)return Promise.resolve();var r=at.documentElement.classList,n=function(f){return r.add("".concat($a,"-").concat(f))},o=function(f){return r.remove("".concat($a,"-").concat(f))},a=F.autoFetchSvg?Object.keys(So):Object.keys(lp),i=[".".concat(El,":not([").concat(we,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(we,"])")})).join(", ");if(i.length===0)return Promise.resolve();var l=[];try{l=Ke(t.querySelectorAll(i))}catch{}if(l.length>0)n("pending"),o("complete");else return Promise.resolve();var s=Lo.begin("onTree"),d=l.reduce(function(c,f){try{var u=Hl(f);u&&c.push(u)}catch(h){_l||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,f){Promise.all(d).then(function(u){Bl(u,function(){n("active"),n("complete"),o("pending"),typeof e=="function"&&e(),s(),c()})}).catch(function(u){s(),f(u)})})}function sp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hl(t).then(function(r){r&&Bl([r],e)})}function cp(t){return function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Qn(e||{}),o=r.mask;return o&&(o=(o||{}).icon?o:Qn(o||{})),t(n,S(S({},r),{},{mask:o}))}}var dp=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?Ut:n,a=r.symbol,i=a===void 0?!1:a,l=r.mask,s=l===void 0?null:l,d=r.maskId,c=d===void 0?null:d,f=r.title,u=f===void 0?null:f,h=r.titleId,E=h===void 0?null:h,j=r.classes,O=j===void 0?[]:j,b=r.attributes,k=b===void 0?{}:b,I=r.styles,$=I===void 0?{}:I;if(!!e){var W=e.prefix,nt=e.iconName,st=e.icon;return fn(S({type:"icon"},e),function(){return ye("beforeDOMElementCreation",{iconDefinition:e,params:r}),F.autoA11y&&(u?k["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(E||hr()):(k["aria-hidden"]="true",k.focusable="false")),No({icons:{main:Jn(st),mask:s?Jn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:nt,transform:S(S({},Ut),o),symbol:i,title:u,maskId:c,titleId:E,extra:{attributes:k,styles:$,classes:O}})})}},mp={mixout:function(){return{icon:cp(dp)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=Xa,r.nodeCallback=sp,r}}},provides:function(e){e.i2svg=function(r){var n=r.node,o=n===void 0?at:n,a=r.callback,i=a===void 0?function(){}:a;return Xa(o,i)},e.generateSvgReplacementMutation=function(r,n){var o=n.iconName,a=n.title,i=n.titleId,l=n.prefix,s=n.transform,d=n.symbol,c=n.mask,f=n.maskId,u=n.extra;return new Promise(function(h,E){Promise.all([Zn(o,l),c.iconName?Zn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var O=zo(j,2),b=O[0],k=O[1];h([r,No({icons:{main:b,mask:k},prefix:l,iconName:o,transform:s,symbol:d,maskId:f,title:a,titleId:i,extra:u,watchable:!0})])}).catch(E)})},e.generateAbstractIcon=function(r){var n=r.children,o=r.attributes,a=r.main,i=r.transform,l=r.styles,s=cn(l);s.length>0&&(o.style=s);var d;return Io(i)&&(d=Xt("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(d||a.icon),{children:n,attributes:o}}}},fp={mixout:function(){return{layer:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.classes,a=o===void 0?[]:o;return fn({type:"layer"},function(){ye("beforeDOMElementCreation",{assembler:r,params:n});var i=[];return r(function(l){Array.isArray(l)?l.map(function(s){i=i.concat(s.abstract)}):i=i.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(F.familyPrefix,"-layers")].concat(sn(a)).join(" ")},children:i}]})}}}},pp={mixout:function(){return{counter:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.title,a=o===void 0?null:o,i=n.classes,l=i===void 0?[]:i,s=n.attributes,d=s===void 0?{}:s,c=n.styles,f=c===void 0?{}:c;return fn({type:"counter",content:r},function(){return ye("beforeDOMElementCreation",{content:r,params:n}),Kf({content:r.toString(),title:a,extra:{attributes:d,styles:f,classes:["".concat(F.familyPrefix,"-layers-counter")].concat(sn(l))}})})}}}},up={mixout:function(){return{text:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.transform,a=o===void 0?Ut:o,i=n.title,l=i===void 0?null:i,s=n.classes,d=s===void 0?[]:s,c=n.attributes,f=c===void 0?{}:c,u=n.styles,h=u===void 0?{}:u;return fn({type:"text",content:r},function(){return ye("beforeDOMElementCreation",{content:r,params:n}),Ya({content:r,transform:S(S({},Ut),a),title:l,extra:{attributes:f,styles:h,classes:["".concat(F.familyPrefix,"-layers-text")].concat(sn(d))}})})}}},provides:function(e){e.generateLayersText=function(r,n){var o=n.title,a=n.transform,i=n.extra,l=null,s=null;if(wl){var d=parseInt(getComputedStyle(r).fontSize,10),c=r.getBoundingClientRect();l=c.width/d,s=c.height/d}return F.autoA11y&&!o&&(i.attributes["aria-hidden"]="true"),Promise.resolve([r,Ya({content:r.innerHTML,width:l,height:s,transform:a,title:o,extra:i,watchable:!0})])}}},gp=new RegExp('"',"ug"),Qa=[1105920,1112319];function bp(t){var e=t.replace(gp,""),r=Pf(e,0),n=r>=Qa[0]&&r<=Qa[1],o=e.length===2?e[0]===e[1]:!1;return{value:Vn(o?e[0]:e),isSecondary:n||o}}function Ja(t,e){var r="".concat(rf).concat(e.replace(":","-"));return new Promise(function(n,o){if(t.getAttribute(r)!==null)return n();var a=Ke(t.children),i=a.filter(function(nt){return nt.getAttribute(qn)===e})[0],l=me.getComputedStyle(t,e),s=l.getPropertyValue("font-family").match(sf),d=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(i&&!s)return t.removeChild(i),n();if(s&&c!=="none"&&c!==""){var f=l.getPropertyValue("content"),u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Hr[s[2].toLowerCase()]:cf[d],h=bp(f),E=h.value,j=h.isSecondary,O=s[0].startsWith("FontAwesome"),b=jo(u,E),k=b;if(O){var I=Nf(E);I.iconName&&I.prefix&&(b=I.iconName,u=I.prefix)}if(b&&!j&&(!i||i.getAttribute(Oo)!==u||i.getAttribute(Po)!==k)){t.setAttribute(r,k),i&&t.removeChild(i);var $=ip(),W=$.extra;W.attributes[qn]=e,Zn(b,u).then(function(nt){var st=No(S(S({},$),{},{icons:{main:nt,mask:Mo()},prefix:u,iconName:k,extra:W,watchable:!0})),Et=at.createElement("svg");e==="::before"?t.insertBefore(Et,t.firstChild):t.appendChild(Et),Et.outerHTML=st.map(function(ft){return wr(ft)}).join(`
`),t.removeAttribute(r),n()}).catch(o)}else n()}else n()})}function hp(t){return Promise.all([Ja(t,"::before"),Ja(t,"::after")])}function xp(t){return t.parentNode!==document.head&&!~of.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(qn)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Za(t){if(!!Jt)return new Promise(function(e,r){var n=Ke(t.querySelectorAll("*")).filter(xp).map(hp),o=Lo.begin("searchPseudoElements");Ul(),Promise.all(n).then(function(){o(),eo(),e()}).catch(function(){o(),eo(),r()})})}var vp={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=Za,r}}},provides:function(e){e.pseudoElements2svg=function(r){var n=r.node,o=n===void 0?at:n;F.searchPseudoElements&&Za(o)}}},ti=!1,wp={mixout:function(){return{dom:{unwatch:function(){Ul(),ti=!0}}}},hooks:function(){return{bootstrap:function(){Va(Xn("mutationObserverCallbacks",{}))},noAuto:function(){rp()},watch:function(r){var n=r.observeMutationsRoot;ti?eo():Va(Xn("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},ei=function(e){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,o){var a=o.toLowerCase().split("-"),i=a[0],l=a.slice(1).join("-");if(i&&l==="h")return n.flipX=!0,n;if(i&&l==="v")return n.flipY=!0,n;if(l=parseFloat(l),isNaN(l))return n;switch(i){case"grow":n.size=n.size+l;break;case"shrink":n.size=n.size-l;break;case"left":n.x=n.x-l;break;case"right":n.x=n.x+l;break;case"up":n.y=n.y-l;break;case"down":n.y=n.y+l;break;case"rotate":n.rotate=n.rotate+l;break}return n},r)},yp={mixout:function(){return{parse:{transform:function(r){return ei(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,n){var o=n.getAttribute("data-fa-transform");return o&&(r.transform=ei(o)),r}}},provides:function(e){e.generateAbstractTransformGrouping=function(r){var n=r.main,o=r.transform,a=r.containerWidth,i=r.iconWidth,l={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(o.x*32,", ").concat(o.y*32,") "),d="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),c="rotate(".concat(o.rotate," 0 0)"),f={transform:"".concat(s," ").concat(d," ").concat(c)},u={transform:"translate(".concat(i/2*-1," -256)")},h={outer:l,inner:f,path:u};return{tag:"g",attributes:S({},h.outer),children:[{tag:"g",attributes:S({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:S(S({},n.icon.attributes),h.path)}]}]}}}},zn={x:0,y:0,width:"100%",height:"100%"};function ri(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function kp(t){return t.tag==="g"?t.children:[t]}var _p={hooks:function(){return{parseNodeAttributes:function(r,n){var o=n.getAttribute("data-fa-mask"),a=o?mn(o.split(" ").map(function(i){return i.trim()})):Mo();return a.prefix||(a.prefix=fe()),r.mask=a,r.maskId=n.getAttribute("data-fa-mask-id"),r}}},provides:function(e){e.generateAbstractMask=function(r){var n=r.children,o=r.attributes,a=r.main,i=r.mask,l=r.maskId,s=r.transform,d=a.width,c=a.icon,f=i.width,u=i.icon,h=yf({transform:s,containerWidth:f,iconWidth:d}),E={tag:"rect",attributes:S(S({},zn),{},{fill:"white"})},j=c.children?{children:c.children.map(ri)}:{},O={tag:"g",attributes:S({},h.inner),children:[ri(S({tag:c.tag,attributes:S(S({},c.attributes),h.path)},j))]},b={tag:"g",attributes:S({},h.outer),children:[O]},k="mask-".concat(l||hr()),I="clip-".concat(l||hr()),$={tag:"mask",attributes:S(S({},zn),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,b]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:kp(u)},$]};return n.push(W,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(k,")")},zn)}),{children:n,attributes:o}}}},Ap={provides:function(e){var r=!1;me.matchMedia&&(r=me.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],o={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:S(S({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=S(S({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:S(S({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||l.children.push({tag:"animate",attributes:S(S({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(l),n.push({tag:"path",attributes:S(S({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:S(S({},i),{},{values:"1;0;0;0;0;1;"})}]}),r||n.push({tag:"path",attributes:S(S({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ep={hooks:function(){return{parseNodeAttributes:function(r,n){var o=n.getAttribute("data-fa-symbol"),a=o===null?!1:o===""?!0:o;return r.symbol=a,r}}}},zp=[Af,mp,fp,pp,up,vp,wp,yp,_p,Ap,Ep];$f(zp,{mixoutsTo:At});At.noAuto;var Yl=At.config,Cp=At.library;At.dom;var Kr=At.parse;At.findIconDefinition;At.toHtml;var Op=At.icon;At.layer;var Pp=At.text;At.counter;function ni(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function St(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?ni(Object(r),!0).forEach(function(n){xt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ni(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function qr(t){return qr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qr(t)}function xt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Sp(t,e){if(t==null)return{};var r={},n=Object.keys(t),o,a;for(a=0;a<n.length;a++)o=n[a],!(e.indexOf(o)>=0)&&(r[o]=t[o]);return r}function Rp(t,e){if(t==null)return{};var r=Sp(t,e),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(r[n]=t[n]))}return r}function ro(t){return Ip(t)||Tp(t)||jp(t)||Mp()}function Ip(t){if(Array.isArray(t))return no(t)}function Tp(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jp(t,e){if(!!t){if(typeof t=="string")return no(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return no(t,e)}}function no(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Mp(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Np=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Wl={exports:{}};(function(t){(function(e){var r=function(b,k,I){if(!d(k)||f(k)||u(k)||h(k)||s(k))return k;var $,W=0,nt=0;if(c(k))for($=[],nt=k.length;W<nt;W++)$.push(r(b,k[W],I));else{$={};for(var st in k)Object.prototype.hasOwnProperty.call(k,st)&&($[b(st,I)]=r(b,k[st],I))}return $},n=function(b,k){k=k||{};var I=k.separator||"_",$=k.split||/(?=[A-Z])/;return b.split($).join(I)},o=function(b){return E(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(k,I){return I?I.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},a=function(b){var k=o(b);return k.substr(0,1).toUpperCase()+k.substr(1)},i=function(b,k){return n(b,k).toLowerCase()},l=Object.prototype.toString,s=function(b){return typeof b=="function"},d=function(b){return b===Object(b)},c=function(b){return l.call(b)=="[object Array]"},f=function(b){return l.call(b)=="[object Date]"},u=function(b){return l.call(b)=="[object RegExp]"},h=function(b){return l.call(b)=="[object Boolean]"},E=function(b){return b=b-0,b===b},j=function(b,k){var I=k&&"process"in k?k.process:k;return typeof I!="function"?b:function($,W){return I($,b,W)}},O={camelize:o,decamelize:i,pascalize:a,depascalize:i,camelizeKeys:function(b,k){return r(j(o,k),b)},decamelizeKeys:function(b,k){return r(j(i,k),b,k)},pascalizeKeys:function(b,k){return r(j(a,k),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(Np)})(Wl);var Lp=Wl.exports,Fp=["class","style"];function $p(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,r){var n=r.indexOf(":"),o=Lp.camelize(r.slice(0,n)),a=r.slice(n+1).trim();return e[o]=a,e},{})}function Dp(t){return t.split(/\s+/).reduce(function(e,r){return e[r]=!0,e},{})}function $o(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(s){return $o(s)}),o=Object.keys(t.attributes||{}).reduce(function(s,d){var c=t.attributes[d];switch(d){case"class":s.class=Dp(c);break;case"style":s.style=$p(c);break;default:s.attrs[d]=c}return s},{attrs:{},class:{},style:{}});r.class;var a=r.style,i=a===void 0?{}:a,l=Rp(r,Fp);return an(t.tag,St(St(St({},e),{},{class:o.class,style:St(St({},o.style),i)},o.attrs),l),n)}var Kl=!1;try{Kl=!0}catch{}function Bp(){if(!Kl&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function sr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?xt({},t,e):{}}function Up(t){var e,r=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},xt(e,"fa-".concat(t.size),t.size!==null),xt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),xt(e,"fa-pull-".concat(t.pull),t.pull!==null),xt(e,"fa-swap-opacity",t.swapOpacity),xt(e,"fa-bounce",t.bounce),xt(e,"fa-shake",t.shake),xt(e,"fa-beat",t.beat),xt(e,"fa-fade",t.fade),xt(e,"fa-beat-fade",t.beatFade),xt(e,"fa-flash",t.flash),xt(e,"fa-spin-pulse",t.spinPulse),xt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(r).map(function(n){return r[n]?n:null}).filter(function(n){return n})}function oi(t){if(t&&qr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kr.icon)return Kr.icon(t);if(t===null)return null;if(qr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Hp=vr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,r){var n=r.attrs,o=lt(function(){return oi(e.icon)}),a=lt(function(){return sr("classes",Up(e))}),i=lt(function(){return sr("transform",typeof e.transform=="string"?Kr.transform(e.transform):e.transform)}),l=lt(function(){return sr("mask",oi(e.mask))}),s=lt(function(){return Op(o.value,St(St(St(St({},a.value),i.value),l.value),{},{symbol:e.symbol,title:e.title}))});rr(s,function(c){if(!c)return Bp("Could not find one or more icon(s)",o.value,l.value)},{immediate:!0});var d=lt(function(){return s.value?$o(s.value.abstract[0],{},n):null});return function(){return d.value}}});vr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,r){var n=r.slots,o=Yl.familyPrefix,a=lt(function(){return["".concat(o,"-layers")].concat(ro(e.fixedWidth?["".concat(o,"-fw")]:[]))});return function(){return an("div",{class:a.value},n.default?n.default():[])}}});vr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,r){var n=r.attrs,o=Yl.familyPrefix,a=lt(function(){return sr("classes",[].concat(ro(e.counter?["".concat(o,"-layers-counter")]:[]),ro(e.position?["".concat(o,"-layers-").concat(e.position)]:[])))}),i=lt(function(){return sr("transform",typeof e.transform=="string"?Kr.transform(e.transform):e.transform)}),l=lt(function(){var d=Pp(e.value.toString(),St(St({},i.value),a.value)),c=d.abstract;return e.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),s=lt(function(){return $o(l.value,{},n)});return function(){return s.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Yp={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"]},Wp={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Kp={prefix:"fab",iconName:"spotify",icon:[496,512,[],"f1bc","M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var qp={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,61443,9993],"f0e0","M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"]};Cp.add(Wp,Yp,Kp,qp);const Do=pd(Rd);Do.component("font-awesome-icon",Hp);Do.use(Wm);Do.mount("#app");export{nl as _,it as a,Xp as b,Ji as c,Qi as o,Gp as p,Vp as t};
