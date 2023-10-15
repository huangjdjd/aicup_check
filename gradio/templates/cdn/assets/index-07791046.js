import{S as D,e as F,s as G,f as O,g as _,h as L,j as g,n as E,k as M,m as B,t as I,o as j,N as q,K as A,x as K,C as y,I as Q,Q as P,O as x,p as $,F as C,G as N,w as h,u as H,H as Z,a0 as ee,a1 as le,Z as te,ae as ne,V as se,W as ae,r as R,v as W}from"./index-40573ec4.js";import{B as ie}from"./Button-20e55939.js";import{B as ce}from"./BlockLabel-06126da7.js";import{E as fe}from"./Empty-4e214ade.js";function oe(s){let e,t;return{c(){e=O("svg"),t=O("path"),_(t,"fill","currentColor"),_(t,"d","M4 2H2v26a2 2 0 0 0 2 2h26v-2H4v-3h22v-8H4v-4h14V5H4Zm20 17v4H4v-4ZM16 7v4H4V7Z"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),_(e,"aria-hidden","true"),_(e,"role","img"),_(e,"class","iconify iconify--carbon"),_(e,"width","100%"),_(e,"height","100%"),_(e,"preserveAspectRatio","xMidYMid meet"),_(e,"viewBox","0 0 32 32")},m(l,n){L(l,e,n),g(e,t)},p:E,i:E,o:E,d(l){l&&M(e)}}}class T extends D{constructor(e){super(),F(this,e,null,oe,G,{})}}function X(s,e,t){const l=s.slice();return l[5]=e[t],l[7]=t,l}function Y(s){let e,t=Q(s[0].confidences),l=[];for(let n=0;n<t.length;n+=1)l[n]=z(X(s,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=P()},m(n,a){for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(n,a);L(n,e,a)},p(n,a){if(a&13){t=Q(n[0].confidences);let i;for(i=0;i<t.length;i+=1){const f=X(n,t,i);l[i]?l[i].p(f,a):(l[i]=z(f),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},d(n){n&&M(e),x(l,n)}}}function p(s){let e,t,l,n=Math.round(s[5].confidence*100)+"",a,i;return{c(){e=B("div"),t=j(),l=B("div"),a=I(n),i=I("%"),_(e,"class","line svelte-75gm11"),_(l,"class","confidence svelte-75gm11")},m(f,o){L(f,e,o),L(f,t,o),L(f,l,o),g(l,a),g(l,i)},p(f,o){o&1&&n!==(n=Math.round(f[5].confidence*100)+"")&&K(a,n)},d(f){f&&(M(e),M(t),M(l))}}}function z(s){let e,t,l,n,a,i,f=s[5].label+"",o,v,u,k,m,S,c=s[0].confidences&&p(s);function d(){return s[4](s[7],s[5])}return{c(){e=B("div"),t=B("div"),l=B("div"),n=j(),a=B("div"),i=B("div"),o=I(f),v=j(),c&&c.c(),u=j(),_(l,"class","bar svelte-75gm11"),A(l,"width",s[5].confidence*100+"%"),_(i,"class","text svelte-75gm11"),_(a,"class","label svelte-75gm11"),_(t,"class","inner-wrap svelte-75gm11"),_(e,"class","confidence-set group svelte-75gm11"),_(e,"data-testid",k=`${s[5].label}-confidence-set`),q(e,"selectable",s[2])},m(w,b){L(w,e,b),g(e,t),g(t,l),g(t,n),g(t,a),g(a,i),g(i,o),g(a,v),c&&c.m(a,null),g(e,u),m||(S=$(e,"click",d),m=!0)},p(w,b){s=w,b&1&&A(l,"width",s[5].confidence*100+"%"),b&1&&f!==(f=s[5].label+"")&&K(o,f),s[0].confidences?c?c.p(s,b):(c=p(s),c.c(),c.m(a,null)):c&&(c.d(1),c=null),b&1&&k!==(k=`${s[5].label}-confidence-set`)&&_(e,"data-testid",k),b&4&&q(e,"selectable",s[2])},d(w){w&&M(e),c&&c.d(),m=!1,S()}}}function re(s){let e,t,l=s[0].label+"",n,a,i=typeof s[0]=="object"&&s[0].confidences&&Y(s);return{c(){e=B("div"),t=B("div"),n=I(l),a=j(),i&&i.c(),_(t,"class","output-class svelte-75gm11"),_(t,"data-testid","label-output-value"),q(t,"no-confidence",!("confidences"in s[0])),A(t,"background-color",s[1]||"transparent"),_(e,"class","container svelte-75gm11")},m(f,o){L(f,e,o),g(e,t),g(t,n),g(e,a),i&&i.m(e,null)},p(f,[o]){o&1&&l!==(l=f[0].label+"")&&K(n,l),o&1&&q(t,"no-confidence",!("confidences"in f[0])),o&2&&A(t,"background-color",f[1]||"transparent"),typeof f[0]=="object"&&f[0].confidences?i?i.p(f,o):(i=Y(f),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:E,o:E,d(f){f&&M(e),i&&i.d()}}}function ue(s,e,t){let{value:l}=e;const n=y();let{color:a=void 0}=e,{selectable:i=!1}=e;const f=(o,v)=>{n("select",{index:o,value:v.label})};return s.$$set=o=>{"value"in o&&t(0,l=o.value),"color"in o&&t(1,a=o.color),"selectable"in o&&t(2,i=o.selectable)},[l,a,i,n,f]}class _e extends D{constructor(e){super(),F(this,e,ue,re,G,{value:0,color:1,selectable:2})}}function J(s){let e,t;return e=new ce({props:{Icon:T,label:s[5],disable:s[6]===!1}}),{c(){C(e.$$.fragment)},m(l,n){N(e,l,n),t=!0},p(l,n){const a={};n&32&&(a.label=l[5]),n&64&&(a.disable=l[6]===!1),e.$set(a)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function de(s){let e,t;return e=new fe({props:{unpadded_box:!0,$$slots:{default:[be]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment)},m(l,n){N(e,l,n),t=!0},p(l,n){const a={};n&131072&&(a.$$scope={dirty:n,ctx:l}),e.$set(a)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function me(s){let e,t;return e=new _e({props:{selectable:s[11],value:s[4],color:s[3]}}),e.$on("select",s[15]),{c(){C(e.$$.fragment)},m(l,n){N(e,l,n),t=!0},p(l,n){const a={};n&2048&&(a.selectable=l[11]),n&16&&(a.value=l[4]),n&8&&(a.color=l[3]),e.$set(a)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function be(s){let e,t;return e=new T({}),{c(){C(e.$$.fragment)},m(l,n){N(e,l,n),t=!0},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function ge(s){let e,t,l,n,a,i,f;const o=[s[9]];let v={};for(let c=0;c<o.length;c+=1)v=te(v,o[c]);e=new ne({props:v});let u=s[10]&&J(s);const k=[me,de],m=[];function S(c,d){return c[13]!==void 0&&c[13]!==null?0:1}return n=S(s),a=m[n]=k[n](s),{c(){C(e.$$.fragment),t=j(),u&&u.c(),l=j(),a.c(),i=P()},m(c,d){N(e,c,d),L(c,t,d),u&&u.m(c,d),L(c,l,d),m[n].m(c,d),L(c,i,d),f=!0},p(c,d){const w=d&512?se(o,[ae(c[9])]):{};e.$set(w),c[10]?u?(u.p(c,d),d&1024&&h(u,1)):(u=J(c),u.c(),h(u,1),u.m(l.parentNode,l)):u&&(R(),H(u,1,1,()=>{u=null}),W());let b=n;n=S(c),n===b?m[n].p(c,d):(R(),H(m[b],1,1,()=>{m[b]=null}),W(),a=m[n],a?a.p(c,d):(a=m[n]=k[n](c),a.c()),h(a,1),a.m(i.parentNode,i))},i(c){f||(h(e.$$.fragment,c),h(u),h(a),f=!0)},o(c){H(e.$$.fragment,c),H(u),H(a),f=!1},d(c){c&&(M(t),M(l),M(i)),Z(e,c),u&&u.d(c),m[n].d(c)}}}function ve(s){let e,t;return e=new ie({props:{test_id:"label",visible:s[2],elem_id:s[0],elem_classes:s[1],container:s[6],scale:s[7],min_width:s[8],padding:!1,$$slots:{default:[ge]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment)},m(l,n){N(e,l,n),t=!0},p(l,[n]){const a={};n&4&&(a.visible=l[2]),n&1&&(a.elem_id=l[0]),n&2&&(a.elem_classes=l[1]),n&64&&(a.container=l[6]),n&128&&(a.scale=l[7]),n&256&&(a.min_width=l[8]),n&147064&&(a.$$scope={dirty:n,ctx:l}),e.$set(a)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function he(s,e,t){let l,n,a;ee(s,le,r=>t(16,a=r));let{elem_id:i=""}=e,{elem_classes:f=[]}=e,{visible:o=!0}=e,{color:v=void 0}=e,{value:u={}}=e,{label:k=a("label.label")}=e,{container:m=!0}=e,{scale:S=null}=e,{min_width:c=void 0}=e,{loading_status:d}=e,{show_label:w=!0}=e,{selectable:b=!1}=e,{gradio:V}=e;const U=({detail:r})=>V.dispatch("select",r);return s.$$set=r=>{"elem_id"in r&&t(0,i=r.elem_id),"elem_classes"in r&&t(1,f=r.elem_classes),"visible"in r&&t(2,o=r.visible),"color"in r&&t(3,v=r.color),"value"in r&&t(4,u=r.value),"label"in r&&t(5,k=r.label),"container"in r&&t(6,m=r.container),"scale"in r&&t(7,S=r.scale),"min_width"in r&&t(8,c=r.min_width),"loading_status"in r&&t(9,d=r.loading_status),"show_label"in r&&t(10,w=r.show_label),"selectable"in r&&t(11,b=r.selectable),"gradio"in r&&t(12,V=r.gradio)},s.$$.update=()=>{s.$$.dirty&16&&t(14,{confidences:l,label:n}=u,l,(t(13,n),t(4,u))),s.$$.dirty&28672&&V.dispatch("change")},[i,f,o,v,u,k,m,S,c,d,w,b,V,n,l,U]}class ke extends D{constructor(e){super(),F(this,e,he,ve,G,{elem_id:0,elem_classes:1,visible:2,color:3,value:4,label:5,container:6,scale:7,min_width:8,loading_status:9,show_label:10,selectable:11,gradio:12})}}const Be=ke;export{Be as default};
//# sourceMappingURL=index-07791046.js.map
