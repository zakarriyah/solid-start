const __vite__fileDeps=["assets/_...404_-DK5yL7Fl.js","assets/index-DPR8_67c.js","assets/web-D2Ofs8l4.js","assets/HttpStatusCode-DjTx85av.js","assets/about-Bvt7zmE-.js","assets/index-Q_MW7Ycc.js","assets/index-7whypOeP.css","assets/test-1FFuTXyr.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as he,c as $,g as me,u as ee,a as pe,b as D,d as Oe,e as X,f as ie,o as ge,s as De,i as Me,h as y,j as Fe,S as we,k as Ue,l as ve,m as Be,n as M,p as We,q as T,t as W,w as q,x as I,y as k,z as qe,A as U,B as je,E as ze,C as He}from"./web-D2Ofs8l4.js";import{H as Ve}from"./HttpStatusCode-DjTx85av.js";const V="Invariant Violation",{setPrototypeOf:Ke=function(e,t){return e.__proto__=t,e}}=Object;class te extends Error{framesToPop=1;name=V;constructor(t=V){super(typeof t=="number"?`${V}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),Ke(this,te.prototype)}}function K(e,t){if(!e)throw new te(t)}const Ze=/^[A-Za-z]:\//;function Ge(e=""){return e&&e.replace(/\\/g,"/").replace(Ze,t=>t.toUpperCase())}const Je=/^[/\\]{2}/,Xe=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Ye=/^[A-Za-z]:$/,Qe=function(e){if(e.length===0)return".";e=Ge(e);const t=e.match(Je),n=Y(e),r=e[e.length-1]==="/";return e=et(e,!n),e.length===0?n?"/":r?"./":".":(r&&(e+="/"),Ye.test(e)&&(e+="/"),t?n?`//${e}`:`//./${e}`:n&&!Y(e)?`/${e}`:e)},ye=function(...e){if(e.length===0)return".";let t;for(const n of e)n&&n.length>0&&(t===void 0?t=n:t+=`/${n}`);return t===void 0?".":Qe(t.replace(/\/\/+/g,"/"))};function et(e,t){let n="",r=0,o=-1,s=0,i=null;for(let a=0;a<=e.length;++a){if(a<e.length)i=e[a];else{if(i==="/")break;i="/"}if(i==="/"){if(!(o===a-1||s===1))if(s===2){if(n.length<2||r!==2||n[n.length-1]!=="."||n[n.length-2]!=="."){if(n.length>2){const c=n.lastIndexOf("/");c===-1?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),o=a,s=0;continue}else if(n.length>0){n="",r=0,o=a,s=0;continue}}t&&(n+=n.length>0?"/..":"..",r=2)}else n.length>0?n+=`/${e.slice(o+1,a)}`:n=e.slice(o+1,a),r=a-o-1;o=a,s=0}else i==="."&&s!==-1?++s:s=-1}return n}const Y=function(e){return Xe.test(e)};function tt(e){return`virtual:${e}`}function nt(e){return e.handler?.endsWith(".html")?Y(e.handler)?e.handler:ye(e.root,e.handler):`$vinxi/handler/${e.name}`}const rt=new Proxy({},{get(e,t){return K(typeof t=="string","Bundler name should be a string"),{name:t,type:"client",handler:tt(nt({name:t})),baseURL:"/_build",chunks:new Proxy({},{get(n,r){K(typeof r=="string","Chunk expected");let o=ye("/_build",r+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(n,r){K(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return import(o)},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=rt;function be(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const i={to:o,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const a of e)a.listener({...i,from:a.location,retry:c=>{c&&(n=!0),a.navigate(o,{...s,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let Q;function ne(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Q=window.history.state._depth}ne();function ot(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function st(e,t){let n=!1;return()=>{const r=Q;ne();const o=r==null?null:Q-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const at=/^(?:[a-z0-9]+:)?\/\//i,it=/^\/+|(\/)\/+$/g,$e="http://sr";function C(e,t=!1){const n=e.replace(it,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function j(e,t,n){if(at.test(t))return;const r=C(e),o=n&&C(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+C(t,!s)}function lt(e,t){if(e==null)throw new Error(t);return e}function ct(e,t){return C(e).replace(/\/*(\*.*)?$/g,"")+C(t)}function Ee(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function ut(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),i=s.length;return a=>{const c=a.split("/").filter(Boolean),l=c.length-i;if(l<0||l>0&&o===void 0&&!t)return null;const u={path:i?"":"/",params:{}},g=h=>n===void 0?void 0:n[h];for(let h=0;h<i;h++){const w=s[h],E=c[h],d=w[0]===":",f=d?w.slice(1):w;if(d&&Z(E,g(f)))u.params[f]=E;else if(d||!Z(E,w))return null;u.path+=`/${E}`}if(o){const h=l?c.slice(-l).join("/"):"";if(Z(h,g(o)))u.params[o]=h;else return null}return u}}function Z(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function dt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Re(e){const t=new Map,n=me();return new Proxy({},{get(r,o){return t.has(o)||he(n,()=>t.set(o,$(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function _e(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return _e(r).reduce((s,i)=>[...s,...o.map(a=>a+i)],[])}const ft=100,Pe=pe(),re=pe(),oe=()=>lt(ee(Pe),"<A> and 'use' router primitives can be only used inside a Route."),ht=()=>ee(re)||oe().base,mt=e=>{const t=ht();return $(()=>t.resolvePath(e()))},pt=e=>{const t=oe();return $(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},gt=()=>oe().location;function wt(e,t=""){const{component:n,load:r,children:o,info:s}=e,i=!o||Array.isArray(o)&&!o.length,a={key:e,component:n,load:r,info:s};return Ae(e.path).reduce((c,l)=>{for(const u of _e(l)){const g=ct(t,u);let h=i?g:g.split("/*",1)[0];h=h.split("/").map(w=>w.startsWith(":")||w.startsWith("*")?w:encodeURIComponent(w)).join("/"),c.push({...a,originalPath:l,pattern:h,matcher:ut(h,!i,e.matchFilters)})}return c},[])}function vt(e,t=0){return{routes:e,score:dt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],i=s.matcher(n);if(!i)return null;r.unshift({...i,route:s})}return r}}}function Ae(e){return Array.isArray(e)?e:[e]}function Se(e,t="",n=[],r=[]){const o=Ae(e);for(let s=0,i=o.length;s<i;s++){const a=o[s];if(a&&typeof a=="object"){a.hasOwnProperty("path")||(a.path="");const c=wt(a,t);for(const l of c){n.push(l);const u=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!u)Se(a.children,l.pattern,n,r);else{const g=vt([...n],r.length);r.push(g)}n.pop()}}}return n.length?r:r.sort((s,i)=>i.score-s.score)}function G(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function yt(e,t){const n=new URL($e),r=$(c=>{const l=e();try{return new URL(l,n)}catch{return console.error(`Invalid path ${l}`),c}},n,{equals:(c,l)=>c.href===l.href}),o=$(()=>r().pathname),s=$(()=>r().search,!0),i=$(()=>r().hash),a=()=>"";return{get pathname(){return o()},get search(){return s()},get hash(){return i()},get state(){return t()},get key(){return a()},query:Re(ge(s,()=>Ee(r())))}}let P;function bt(){return P}function $t(e,t,n,r={}){const{signal:[o,s],utils:i={}}=e,a=i.parsePath||(p=>p),c=i.renderPath||(p=>p),l=i.beforeLeave||be(),u=j("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[g,h]=D(!1),w=async p=>{h(!0);try{await De(p)}finally{h(!1)}},[E,d]=D(o().value),[f,v]=D(o().state),m=yt(E,f),A=[],_=D([]),x=$(()=>typeof r.transformUrl=="function"?G(t(),r.transformUrl(m.pathname)):G(t(),m.pathname)),F=Re(()=>{const p=x(),b={};for(let R=0;R<p.length;R++)Object.assign(b,p[R].params);return b}),se={pattern:u,path:()=>u,outlet:()=>null,resolvePath(p){return j(u,p)}};return Oe(()=>{const{value:p,state:b}=o();X(()=>{w(()=>{P="native",p!==E()&&d(p),v(b),ie(),_[1]([])}).then(()=>{P=void 0})})}),{base:se,location:m,params:F,isRouting:g,renderPath:c,parsePath:a,navigatorFactory:ke,matches:x,beforeLeave:l,preloadRoute:Ne,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:_};function Le(p,b,R){X(()=>{if(typeof b=="number"){b&&(i.go?i.go(b):console.warn("Router integration does not support relative routing"));return}const{replace:z,resolve:H,scroll:L,state:O}={replace:!1,resolve:!0,scroll:!0,...R},S=H?p.resolvePath(b):j("",b);if(S===void 0)throw new Error(`Path '${b}' is not a routable path`);if(A.length>=ft)throw new Error("Too many redirects");const ae=E();if((S!==ae||O!==f())&&!Me){if(l.confirm(S,R)){const Ie=A.push({value:ae,replace:z,scroll:L,state:f()});w(()=>{P="navigate",d(S),v(O),ie(),_[1]([])}).then(()=>{A.length===Ie&&(P=void 0,Te({value:S,state:O}))})}}})}function ke(p){return p=p||ee(re)||se,(b,R)=>Le(p,b,R)}function Te(p){const b=A[0];b&&((p.value!==b.value||p.state!==b.state)&&s({...p,replace:b.replace,scroll:b.scroll}),A.length=0)}function Ne(p,b){const R=G(t(),p.pathname),z=P;P="preload";for(let H in R){const{route:L,params:O}=R[H];L.component&&L.component.preload&&L.component.preload();const{load:S}=L;b&&S&&he(n(),()=>S({params:O,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:Ee(p),state:null,key:""},intent:"preload"}))}P=z}}function Et(e,t,n,r){const{base:o,location:s,params:i}=e,{pattern:a,component:c,load:l}=r().route,u=$(()=>r().path);c&&c.preload&&c.preload();const g=l?l({params:i,location:s,intent:P||"initial"}):void 0;return{parent:t,pattern:a,path:u,outlet:()=>c?y(c,{params:i,location:s,data:g,get children(){return n()}}):n(),resolvePath(w){return j(o.path(),w,u())}}}const Rt=e=>t=>{const{base:n}=t,r=Fe(()=>t.children),o=$(()=>Se(r(),t.base||""));let s;const i=$t(e,o,()=>s,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),y(Pe.Provider,{value:i,get children(){return y(_t,{routerState:i,get root(){return t.root},get load(){return t.rootLoad},get children(){return[$(()=>(s=me())&&null),y(Pt,{routerState:i,get branches(){return o()}})]}})}})};function _t(e){const t=e.routerState.location,n=e.routerState.params,r=$(()=>e.load&&X(()=>{e.load({params:n,location:t,intent:bt()||"initial"})}));return y(we,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>y(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Pt(e){const t=[];let n;const r=$(ge(e.routerState.matches,(o,s,i)=>{let a=s&&o.length===s.length;const c=[];for(let l=0,u=o.length;l<u;l++){const g=s&&s[l],h=o[l];i&&g&&h.route.key===g.route.key?c[l]=i[l]:(a=!1,t[l]&&t[l](),Ue(w=>{t[l]=w,c[l]=Et(e.routerState,c[l-1]||e.routerState.base,le(()=>r()[l+1]),()=>e.routerState.matches()[l])}))}return t.splice(o.length).forEach(l=>l()),i&&a?i:(n=c[0],c)}));return le(()=>r()&&n)()}const le=e=>()=>y(we,{get when(){return e()},keyed:!0,children:t=>y(re.Provider,{value:t,get children(){return t.outlet()}})});function At([e,t],n,r){return[e,r?o=>t(r(o)):t]}function St(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function xt(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=At(D(n(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!t&&e.set(o),o));return e.init&&ve(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Rt({signal:r,create:e.create,utils:e.utils})}function Ct(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Lt(e,t){const n=St(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const kt=new Map;function Tt(e=!0,t=!1,n="/_server",r){return o=>{const s=o.base.path(),i=o.navigatorFactory(o.base);let a={};function c(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function l(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const f=d.composedPath().find(F=>F instanceof Node&&F.nodeName.toUpperCase()==="A");if(!f||t&&!f.hasAttribute("link"))return;const v=c(f),m=v?f.href.baseVal:f.href;if((v?f.target.baseVal:f.target)||!m&&!f.hasAttribute("state"))return;const _=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||_&&_.includes("external"))return;const x=v?new URL(m,document.baseURI):new URL(m);if(!(x.origin!==window.location.origin||s&&x.pathname&&!x.pathname.toLowerCase().startsWith(s.toLowerCase())))return[f,x]}function u(d){const f=l(d);if(!f)return;const[v,m]=f,A=o.parsePath(m.pathname+m.search+m.hash),_=v.getAttribute("state");d.preventDefault(),i(A,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:_&&JSON.parse(_)})}function g(d){const f=l(d);if(!f)return;const[v,m]=f;typeof r=="function"&&(m.pathname=r(m.pathname)),a[m.pathname]||o.preloadRoute(m,v.getAttribute("preload")!=="false")}function h(d){const f=l(d);if(!f)return;const[v,m]=f;typeof r=="function"&&(m.pathname=r(m.pathname)),!a[m.pathname]&&(a[m.pathname]=setTimeout(()=>{o.preloadRoute(m,v.getAttribute("preload")!=="false"),delete a[m.pathname]},200))}function w(d){const f=l(d);if(!f)return;const[,v]=f;typeof r=="function"&&(v.pathname=r(v.pathname)),a[v.pathname]&&(clearTimeout(a[v.pathname]),delete a[v.pathname])}function E(d){if(d.defaultPrevented)return;let f=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!f)return;if(!f.startsWith("https://action/")){const m=new URL(f,$e);if(f=o.parsePath(m.pathname+m.search),!f.startsWith(n))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const v=kt.get(f);if(v){d.preventDefault();const m=new FormData(d.target);d.submitter&&d.submitter.name&&m.append(d.submitter.name,d.submitter.value),v.call({r:o,f:d.target},m)}}Be(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",h),document.addEventListener("mouseout",w),document.addEventListener("focusin",g),document.addEventListener("touchstart",g)),document.addEventListener("submit",E),ve(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",w),document.removeEventListener("focusin",g),document.removeEventListener("touchstart",g)),document.removeEventListener("submit",E)})}}function Nt(e){const t=()=>{const r=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},n=be();return xt({get:t,set({value:r,replace:o,scroll:s,state:i}){o?window.history.replaceState(ot(i),"",r):window.history.pushState(i,"",r),Lt(window.location.hash.slice(1),s),ne()},init:r=>Ct(window,"popstate",st(r,o=>{if(o&&o<0)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:Tt(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}var It=I("<a>");function J(e){e=M({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=We(e,["href","state","class","activeClass","inactiveClass","end"]),n=mt(()=>e.href),r=pt(n),o=gt(),s=$(()=>{const i=n();if(i===void 0)return[!1,!1];const a=C(i.split(/[?#]/,1)[0]).toLowerCase(),c=C(o.pathname).toLowerCase();return[e.end?a===c:c.startsWith(a+"/")||c===a,a===c]});return(()=>{var i=T(It);return W(i,M(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s()[0],[e.activeClass]:s()[0],...t.classList}},link:"",get"aria-current"(){return s()[1]?"page":void 0}}),!1,!1),q(),i})()}function Ot(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var Dt=I("<style>"),Mt=I("<link>"),Ft=I("<script> ");const Ut={style:e=>(()=>{var t=T(Dt);return W(t,M(()=>e.attrs),!1,!0),k(t,()=>e.children),q(),t})(),link:e=>(()=>{var t=T(Mt);return W(t,M(()=>e.attrs),!1,!1),q(),t})(),script:e=>e.attrs.src?(()=>{var t=T(Ft);return W(t,M(()=>e.attrs,{get id(){return e.key}}),!1,!0),q(),t})():null};function Bt(e,t){let{tag:n,attrs:{key:r,...o}={key:void 0},children:s}=e;return Ut[n]({attrs:{...o,nonce:t},key:r,children:s})}function Wt(e,t,n,r="default"){return qe(async()=>{{const s=(await e.import())[r],a=(await t.inputs?.[e.src].assets()).filter(l=>l.tag==="style"||l.attrs.rel==="stylesheet");return typeof window<"u"&&Ot(a),{default:l=>[...a.map(u=>Bt(u)),y(s,l)]}}})}const N={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function qt(e={}){const t={options:e,rootNode:xe(),staticRoutesMap:{}},n=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)ce(t,n(r),e.routes[r]);return{ctx:t,lookup:r=>jt(t,n(r)),insert:(r,o)=>ce(t,n(r),o),remove:r=>zt(t,n(r))}}function jt(e,t){const n=e.staticRoutesMap[t];if(n)return n.data;const r=t.split("/"),o={};let s=!1,i=null,a=e.rootNode,c=null;for(let l=0;l<r.length;l++){const u=r[l];a.wildcardChildNode!==null&&(i=a.wildcardChildNode,c=r.slice(l).join("/"));const g=a.children.get(u);if(g===void 0){if(a&&a.placeholderChildren.length>1){const h=r.length-l;a=a.placeholderChildren.find(w=>w.maxDepth===h)||null}else a=a.placeholderChildren[0]||null;if(!a)break;a.paramName&&(o[a.paramName]=u),s=!0}else a=g}return(a===null||a.data===null)&&i!==null&&(a=i,o[a.paramName||"_"]=c,s=!0),a?s?{...a.data,params:s?o:void 0}:a.data:null}function ce(e,t,n){let r=!0;const o=t.split("/");let s=e.rootNode,i=0;const a=[s];for(const c of o){let l;if(l=s.children.get(c))s=l;else{const u=Ht(c);l=xe({type:u,parent:s}),s.children.set(c,l),u===N.PLACEHOLDER?(l.paramName=c==="*"?`_${i++}`:c.slice(1),s.placeholderChildren.push(l),r=!1):u===N.WILDCARD&&(s.wildcardChildNode=l,l.paramName=c.slice(3)||"_",r=!1),a.push(l),s=l}}for(const[c,l]of a.entries())l.maxDepth=Math.max(a.length-c,l.maxDepth||0);return s.data=n,r===!0&&(e.staticRoutesMap[t]=s),s}function zt(e,t){let n=!1;const r=t.split("/");let o=e.rootNode;for(const s of r)if(o=o.children.get(s),!o)return n;if(o.data){const s=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(s),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),n=!0}return n}function xe(e={}){return{type:e.type||N.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Ht(e){return e.startsWith("**")?N.WILDCARD:e[0]===":"||e==="*"?N.PLACEHOLDER:N.NORMAL}const Vt="modulepreload",Kt=function(e){return"/_build/"+e},ue={},B=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=s?.nonce||s?.getAttribute("nonce");o=Promise.all(n.map(a=>{if(a=Kt(a),a in ue)return;ue[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Vt,c||(u.as="script",u.crossOrigin=""),u.href=a,i&&u.setAttribute("nonce",i),document.head.appendChild(u),c)return new Promise((g,h)=>{u.addEventListener("load",g),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},Ce=[{page:!0,$component:{src:"src/routes/[...404].mdx?pick=$css",build:()=>B(()=>import("./_...404_-DK5yL7Fl.js"),__vite__mapDeps([0,1,2,3])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].mdx?pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/solid-start/solid-start/src/routes/[...404].mdx"},{page:!0,$component:{src:"src/routes/about.mdx?pick=$css",build:()=>B(()=>import("./about-Bvt7zmE-.js"),__vite__mapDeps([4,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/about.mdx?pick=$css"].output.path)},path:"/about",filePath:"/home/runner/work/solid-start/solid-start/src/routes/about.mdx"},{page:!0,$component:{src:"src/routes/index.mdx?pick=$css",build:()=>B(()=>import("./index-Q_MW7Ycc.js"),__vite__mapDeps([5,1,2,6])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.mdx?pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/solid-start/solid-start/src/routes/index.mdx"},{page:!0,$component:{src:"src/routes/test.mdx?pick=$css",build:()=>B(()=>import("./test-1FFuTXyr.js"),__vite__mapDeps([7,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/test.mdx?pick=$css"].output.path)},path:"/test",filePath:"/home/runner/work/solid-start/solid-start/src/routes/test.mdx"}],Zt=Gt(Ce.filter(e=>e.page));function Gt(e){function t(n,r,o,s){const i=Object.values(n).find(a=>o.startsWith(a.id+"/"));return i?(t(i.children||(i.children=[]),r,o.slice(i.id.length)),n):(n.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),n)}return e.sort((n,r)=>n.path.length-r.path.length).reduce((n,r)=>t(n,r,r.path,r.path),[])}function Jt(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}qt({routes:Ce.reduce((e,t)=>{if(!Jt(t))return e;let n=t.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`);if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function Xt(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:n.$component&&Wt(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return Zt.map(e)}let de;const Yt=()=>de||(de=Xt());var Qt=I("<main><!$><!/><!$><!/><!$><!/><!$><!/>");function en(){return y(Nt,{root:e=>(()=>{var t=T(Qt),n=t.firstChild,[r,o]=U(n.nextSibling),s=r.nextSibling,[i,a]=U(s.nextSibling),c=i.nextSibling,[l,u]=U(c.nextSibling),g=l.nextSibling,[h,w]=U(g.nextSibling);return k(t,y(J,{href:"/",activeClass:"active",children:"Index"}),r,o),k(t,y(J,{href:"/about",activeClass:"active",children:"About"}),i,a),k(t,y(J,{href:"/test",activeClass:"active",children:"test"}),l,u),k(t,y(je,{get children(){return e.children}}),h,w),t})(),get children(){return y(Yt,{})}})}var tn=I("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const nn=e=>{const t="Error | Uncaught Client Exception";return y(ze,{fallback:n=>(console.error(n),[(()=>{var r=T(tn);return k(r,t),r})(),y(Ve,{code:500})]),get children(){return e.children}})};function rn(e,t){return He(e,t)}function fe(e){return e.children}function on(){return y(fe,{get children(){return y(fe,{get children(){return y(nn,{get children(){return y(en,{})}})}})}})}rn(()=>y(on,{}),document.getElementById("app"));const cn=void 0;export{cn as default};
