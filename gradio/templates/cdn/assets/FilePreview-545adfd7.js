import{S,e as j,s as q,I as y,m as h,g as c,K as k,h as p,j as u,n as A,k as v,O as D,a0 as E,a1 as G,C as H,t as w,o as B,N as z,p as M,x as K,ao as N}from"./index-40573ec4.js";const T=l=>{let e=["B","KB","MB","GB","PB"],t=0;for(;l>1024;)l/=1024,t++;let n=e[t];return l.toFixed(1)+"&nbsp;"+n},F=l=>{var e;e=l.orig_name||l.name;const t=30;if(e.length>t){const n=e.substring(0,t),o=e.lastIndexOf(".");if(o!==-1){const i=e.slice(o);return`${n}..${i}`}return n}return e},P=l=>{var e=0;if(Array.isArray(l))for(var t of l)t.size!==void 0&&(e+=t.size);else e=l.size||0;return T(e)};function C(l,e,t){const n=l.slice();return n[6]=e[t],n[8]=t,n}function X(l){let e=l[3]("file.uploading")+"",t;return{c(){t=w(e)},m(n,o){p(n,t,o)},p(n,o){o&8&&e!==(e=n[3]("file.uploading")+"")&&K(t,e)},d(n){n&&v(t)}}}function J(l){let e,t,n=P(l[6])+"",o,i,a;return{c(){e=h("a"),t=new N(!1),o=w(" ⇣"),t.a=o,c(e,"href",i=l[6].data),c(e,"target","_blank"),c(e,"download",a=window.__is_colab__?null:l[6].orig_name||l[6].name),c(e,"class","svelte-1lop6bc")},m(r,s){p(r,e,s),t.m(n,e),u(e,o)},p(r,s){s&1&&n!==(n=P(r[6])+"")&&t.p(n),s&1&&i!==(i=r[6].data)&&c(e,"href",i),s&1&&a!==(a=window.__is_colab__?null:r[6].orig_name||r[6].name)&&c(e,"download",a)},d(r){r&&v(e)}}}function I(l){let e,t,n=F(l[6])+"",o,i,a,r,s,_;function g(d,m){return d[6].data?J:X}let b=g(l),f=b(l);function O(){return l[5](l[6],l[8])}return{c(){e=h("tr"),t=h("td"),o=w(n),i=B(),a=h("td"),f.c(),r=B(),c(t,"class","svelte-1lop6bc"),c(a,"class","download svelte-1lop6bc"),c(e,"class","file svelte-1lop6bc"),z(e,"selectable",l[1])},m(d,m){p(d,e,m),u(e,t),u(t,o),u(e,i),u(e,a),f.m(a,null),u(e,r),s||(_=M(e,"click",O),s=!0)},p(d,m){l=d,m&1&&n!==(n=F(l[6])+"")&&K(o,n),b===(b=g(l))&&f?f.p(l,m):(f.d(1),f=b(l),f&&(f.c(),f.m(a,null))),m&2&&z(e,"selectable",l[1])},d(d){d&&v(e),f.d(),s=!1,_()}}}function L(l){let e,t,n,o=y(Array.isArray(l[0])?l[0]:[l[0]]),i=[];for(let a=0;a<o.length;a+=1)i[a]=I(C(l,o,a));return{c(){e=h("div"),t=h("table"),n=h("tbody");for(let a=0;a<i.length;a+=1)i[a].c();c(n,"class","svelte-1lop6bc"),c(t,"class","file-preview svelte-1lop6bc"),c(e,"class","file-preview-holder svelte-1lop6bc"),k(e,"max-height",typeof l[2]===void 0?"auto":l[2]+"px")},m(a,r){p(a,e,r),u(e,t),u(t,n);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(n,null)},p(a,[r]){if(r&27){o=y(Array.isArray(a[0])?a[0]:[a[0]]);let s;for(s=0;s<o.length;s+=1){const _=C(a,o,s);i[s]?i[s].p(_,r):(i[s]=I(_),i[s].c(),i[s].m(n,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=o.length}r&4&&k(e,"max-height",typeof a[2]===void 0?"auto":a[2]+"px")},i:A,o:A,d(a){a&&v(e),D(i,a)}}}function Q(l,e,t){let n;E(l,G,_=>t(3,n=_));const o=H();let{value:i}=e,{selectable:a=!1}=e,{height:r=void 0}=e;const s=(_,g)=>o("select",{value:_.orig_name||_.name,index:g});return l.$$set=_=>{"value"in _&&t(0,i=_.value),"selectable"in _&&t(1,a=_.selectable),"height"in _&&t(2,r=_.height)},[i,a,r,n,o,s]}class U extends S{constructor(e){super(),j(this,e,Q,L,q,{value:0,selectable:1,height:2})}}export{U as F};
//# sourceMappingURL=FilePreview-545adfd7.js.map
