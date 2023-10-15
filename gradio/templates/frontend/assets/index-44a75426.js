import{S as Y,e as $,s as H,F as v,o as q,Q as D,G as V,h as y,r as F,u as g,v as G,w,k as p,H as N,C as ue,E as B,m as L,t as Q,g as R,j as T,x as X,n as P,R as _e,U as fe,X as ce,a9 as de,ab as me,ac as he,ad as be,ag as h,Z as ge,ae as we,V as ke,W as ye}from"./index-d50163a8.js";import{B as pe,n as Z}from"./Button-7dd65143.js";import{U as ve}from"./UploadText-087a7235.js";import{U as Ve}from"./Upload-2fa84c01.js";import{M as Ne}from"./ModifyUpload-430e5927.js";import{B as Ue}from"./BlockLabel-44aab9bd.js";import{V as Be,p as A,P as Se,a as ze}from"./Player-9faac786.js";import{W as Ie}from"./InteractiveImage-ae06681e.js";import"./IconButton-0f491d39.js";import"./Undo-23491313.js";/* empty css                                             */import"./Image-27babe2c.js";import"./utils-90f3612b.js";function We(i){let e,l,t,n,a,r,o;e=new Ne({}),e.$on("clear",i[11]);const s=[Ee,Ce],d=[];function u(c,b){return t==null&&(t=!!ze()),t?0:c[0].size?1:-1}return~(n=u(i))&&(a=d[n]=s[n](i)),{c(){v(e.$$.fragment),l=q(),a&&a.c(),r=D()},m(c,b){V(e,c,b),y(c,l,b),~n&&d[n].m(c,b),y(c,r,b),o=!0},p(c,b){let m=n;n=u(c),n===m?~n&&d[n].p(c,b):(a&&(F(),g(d[m],1,1,()=>{d[m]=null}),G()),~n?(a=d[n],a?a.p(c,b):(a=d[n]=s[n](c),a.c()),w(a,1),a.m(r.parentNode,r)):a=null)},i(c){o||(w(e.$$.fragment,c),w(a),o=!0)},o(c){g(e.$$.fragment,c),g(a),o=!1},d(c){c&&(p(l),p(r)),N(e,c),~n&&d[n].d(c)}}}function je(i){let e,l,t,n;const a=[Me,Je],r=[];function o(s,d){return s[2]==="upload"?0:s[2]==="webcam"?1:-1}return~(e=o(i))&&(l=r[e]=a[e](i)),{c(){l&&l.c(),t=D()},m(s,d){~e&&r[e].m(s,d),y(s,t,d),n=!0},p(s,d){let u=e;e=o(s),e===u?~e&&r[e].p(s,d):(l&&(F(),g(r[u],1,1,()=>{r[u]=null}),G()),~e?(l=r[e],l?l.p(s,d):(l=r[e]=a[e](s),l.c()),w(l,1),l.m(t.parentNode,t)):l=null)},i(s){n||(w(l),n=!0)},o(s){g(l),n=!1},d(s){s&&p(t),~e&&r[e].d(s)}}}function Ce(i){let e,l=i[0].name+"",t,n,a,r=A(i[0].size)+"",o;return{c(){e=L("div"),t=Q(l),n=q(),a=L("div"),o=Q(r),R(e,"class","file-name svelte-a6ruol"),R(a,"class","file-size svelte-a6ruol")},m(s,d){y(s,e,d),T(e,t),y(s,n,d),y(s,a,d),T(a,o)},p(s,d){d&1&&l!==(l=s[0].name+"")&&X(t,l),d&1&&r!==(r=A(s[0].size)+"")&&X(o,r)},i:P,o:P,d(s){s&&(p(e),p(n),p(a))}}}function Ee(i){let e=i[0]?.data,l,t,n=K(i);return{c(){n.c(),l=D()},m(a,r){n.m(a,r),y(a,l,r),t=!0},p(a,r){r&1&&H(e,e=a[0]?.data)?(F(),g(n,1,1,P),G(),n=K(a),n.c(),w(n,1),n.m(l.parentNode,l)):n.p(a,r)},i(a){t||(w(n),t=!0)},o(a){g(n),t=!1},d(a){a&&p(l),n.d(a)}}}function K(i){let e,l;return e=new Se({props:{autoplay:i[7],src:i[0].data,subtitle:i[1]?.data,mirror:i[5]&&i[2]==="webcam",label:i[3]}}),e.$on("play",i[18]),e.$on("pause",i[19]),e.$on("stop",i[20]),e.$on("end",i[21]),{c(){v(e.$$.fragment)},m(t,n){V(e,t,n),l=!0},p(t,n){const a={};n&128&&(a.autoplay=t[7]),n&1&&(a.src=t[0].data),n&2&&(a.subtitle=t[1]?.data),n&36&&(a.mirror=t[5]&&t[2]==="webcam"),n&8&&(a.label=t[3]),e.$set(a)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){N(e,t)}}}function Je(i){let e,l;return e=new Ie({props:{mirror_webcam:i[5],include_audio:i[6],mode:"video"}}),e.$on("error",i[14]),e.$on("capture",i[15]),e.$on("start_recording",i[16]),e.$on("stop_recording",i[17]),{c(){v(e.$$.fragment)},m(t,n){V(e,t,n),l=!0},p(t,n){const a={};n&32&&(a.mirror_webcam=t[5]),n&64&&(a.include_audio=t[6]),e.$set(a)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){N(e,t)}}}function Me(i){let e,l,t;function n(r){i[13](r)}let a={filetype:"video/x-m4v,video/*",$$slots:{default:[Oe]},$$scope:{ctx:i}};return i[8]!==void 0&&(a.dragging=i[8]),e=new Ve({props:a}),_e.push(()=>fe(e,"dragging",n)),e.$on("load",i[10]),{c(){v(e.$$.fragment)},m(r,o){V(e,r,o),t=!0},p(r,o){const s={};o&4194304&&(s.$$scope={dirty:o,ctx:r}),!l&&o&256&&(l=!0,s.dragging=r[8],ce(()=>l=!1)),e.$set(s)},i(r){t||(w(e.$$.fragment,r),t=!0)},o(r){g(e.$$.fragment,r),t=!1},d(r){N(e,r)}}}function Oe(i){let e;const l=i[12].default,t=de(l,i,i[22],null);return{c(){t&&t.c()},m(n,a){t&&t.m(n,a),e=!0},p(n,a){t&&t.p&&(!e||a&4194304)&&me(t,l,n,n[22],e?be(l,n[22],a,null):he(n[22]),null)},i(n){e||(w(t,n),e=!0)},o(n){g(t,n),e=!1},d(n){t&&t.d(n)}}}function Pe(i){let e,l,t,n,a,r;e=new Ue({props:{show_label:i[4],Icon:Be,label:i[3]||"Video"}});const o=[je,We],s=[];function d(u,c){return u[0]===null?0:1}return t=d(i),n=s[t]=o[t](i),{c(){v(e.$$.fragment),l=q(),n.c(),a=D()},m(u,c){V(e,u,c),y(u,l,c),s[t].m(u,c),y(u,a,c),r=!0},p(u,[c]){const b={};c&16&&(b.show_label=u[4]),c&8&&(b.label=u[3]||"Video"),e.$set(b);let m=t;t=d(u),t===m?s[t].p(u,c):(F(),g(s[m],1,1,()=>{s[m]=null}),G(),n=s[t],n?n.p(u,c):(n=s[t]=o[t](u),n.c()),w(n,1),n.m(a.parentNode,a))},i(u){r||(w(e.$$.fragment,u),w(n),r=!0)},o(u){g(e.$$.fragment,u),g(n),r=!1},d(u){u&&(p(l),p(a)),N(e,u),s[t].d(u)}}}function qe(i,e,l){let{$$slots:t={},$$scope:n}=e,{value:a=null}=e,{subtitle:r=null}=e,{source:o}=e,{label:s=void 0}=e,{show_label:d=!0}=e,{mirror_webcam:u=!1}=e,{include_audio:c}=e,{autoplay:b}=e;const m=ue();function I({detail:f}){m("change",f),m("upload",f),l(0,a=f)}function W({detail:f}){l(0,a=null),m("change",f),m("clear")}let U=!1;function j(f){U=f,l(8,U)}function C(f){B.call(this,i,f)}const E=({detail:f})=>m("change",f);function J(f){B.call(this,i,f)}function M(f){B.call(this,i,f)}function k(f){B.call(this,i,f)}function S(f){B.call(this,i,f)}function z(f){B.call(this,i,f)}function O(f){B.call(this,i,f)}return i.$$set=f=>{"value"in f&&l(0,a=f.value),"subtitle"in f&&l(1,r=f.subtitle),"source"in f&&l(2,o=f.source),"label"in f&&l(3,s=f.label),"show_label"in f&&l(4,d=f.show_label),"mirror_webcam"in f&&l(5,u=f.mirror_webcam),"include_audio"in f&&l(6,c=f.include_audio),"autoplay"in f&&l(7,b=f.autoplay),"$$scope"in f&&l(22,n=f.$$scope)},i.$$.update=()=>{i.$$.dirty&256&&m("drag",U)},[a,r,o,s,d,u,c,b,U,m,I,W,t,j,C,E,J,M,k,S,z,O,n]}class De extends Y{constructor(e){super(),$(this,e,qe,Pe,H,{value:0,subtitle:1,source:2,label:3,show_label:4,mirror_webcam:5,include_audio:6,autoplay:7})}}function Fe(i){let e,l;return e=new ve({props:{type:"video"}}),{c(){v(e.$$.fragment)},m(t,n){V(e,t,n),l=!0},p:P,i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){N(e,t)}}}function Ge(i){let e,l,t,n;const a=[i[1]];let r={};for(let o=0;o<a.length;o+=1)r=ge(r,a[o]);return e=new we({props:r}),t=new De({props:{value:i[17],subtitle:i[18],label:i[5],show_label:i[7],source:i[6],mirror_webcam:i[10],include_audio:i[11],autoplay:i[15],$$slots:{default:[Fe]},$$scope:{ctx:i}}}),t.$on("change",i[20]),t.$on("drag",i[24]),t.$on("error",i[25]),t.$on("clear",i[26]),t.$on("play",i[27]),t.$on("pause",i[28]),t.$on("upload",i[29]),t.$on("stop",i[30]),t.$on("end",i[31]),t.$on("start_recording",i[32]),t.$on("stop_recording",i[33]),{c(){v(e.$$.fragment),l=q(),v(t.$$.fragment)},m(o,s){V(e,o,s),y(o,l,s),V(t,o,s),n=!0},p(o,s){const d=s[0]&2?ke(a,[ye(o[1])]):{};e.$set(d);const u={};s[0]&131072&&(u.value=o[17]),s[0]&262144&&(u.subtitle=o[18]),s[0]&32&&(u.label=o[5]),s[0]&128&&(u.show_label=o[7]),s[0]&64&&(u.source=o[6]),s[0]&1024&&(u.mirror_webcam=o[10]),s[0]&2048&&(u.include_audio=o[11]),s[0]&32768&&(u.autoplay=o[15]),s[1]&8&&(u.$$scope={dirty:s,ctx:o}),t.$set(u)},i(o){n||(w(e.$$.fragment,o),w(t.$$.fragment,o),n=!0)},o(o){g(e.$$.fragment,o),g(t.$$.fragment,o),n=!1},d(o){o&&p(l),N(e,o),N(t,o)}}}function He(i){let e,l;return e=new pe({props:{visible:i[4],variant:i[0]===null&&i[6]==="upload"?"dashed":"solid",border_mode:i[19]?"focus":"base",padding:!1,elem_id:i[2],elem_classes:i[3],height:i[8],width:i[9],container:i[12],scale:i[13],min_width:i[14],allow_overflow:!1,$$slots:{default:[Ge]},$$scope:{ctx:i}}}),{c(){v(e.$$.fragment)},m(t,n){V(e,t,n),l=!0},p(t,n){const a={};n[0]&16&&(a.visible=t[4]),n[0]&65&&(a.variant=t[0]===null&&t[6]==="upload"?"dashed":"solid"),n[0]&524288&&(a.border_mode=t[19]?"focus":"base"),n[0]&4&&(a.elem_id=t[2]),n[0]&8&&(a.elem_classes=t[3]),n[0]&256&&(a.height=t[8]),n[0]&512&&(a.width=t[9]),n[0]&4096&&(a.container=t[12]),n[0]&8192&&(a.scale=t[13]),n[0]&16384&&(a.min_width=t[14]),n[0]&1019106|n[1]&8&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){l||(w(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){N(e,t)}}}function Le(i,e,l){let{elem_id:t=""}=e,{elem_classes:n=[]}=e,{visible:a=!0}=e,{value:r=null}=e,o=null,{label:s}=e,{source:d}=e,{root:u}=e,{root_url:c}=e,{show_label:b}=e,{loading_status:m}=e,{height:I}=e,{width:W}=e,{mirror_webcam:U}=e,{include_audio:j}=e,{container:C=!1}=e,{scale:E=null}=e,{min_width:J=void 0}=e,{autoplay:M=!1}=e,{gradio:k}=e,S=null,z=null,O=!1;function f({detail:_}){_!=null?l(0,r=[_,null]):l(0,r=null)}const x=({detail:_})=>l(19,O=_),ee=({detail:_})=>{l(1,m=m||{}),l(1,m.status="error",m),l(1,m.message=_,m)},te=()=>k.dispatch("clear"),le=()=>k.dispatch("play"),ne=()=>k.dispatch("pause"),ie=()=>k.dispatch("upload"),ae=()=>k.dispatch("stop"),se=()=>k.dispatch("end"),re=()=>k.dispatch("start_recording"),oe=()=>k.dispatch("stop_recording");return i.$$set=_=>{"elem_id"in _&&l(2,t=_.elem_id),"elem_classes"in _&&l(3,n=_.elem_classes),"visible"in _&&l(4,a=_.visible),"value"in _&&l(0,r=_.value),"label"in _&&l(5,s=_.label),"source"in _&&l(6,d=_.source),"root"in _&&l(21,u=_.root),"root_url"in _&&l(22,c=_.root_url),"show_label"in _&&l(7,b=_.show_label),"loading_status"in _&&l(1,m=_.loading_status),"height"in _&&l(8,I=_.height),"width"in _&&l(9,W=_.width),"mirror_webcam"in _&&l(10,U=_.mirror_webcam),"include_audio"in _&&l(11,j=_.include_audio),"container"in _&&l(12,C=_.container),"scale"in _&&l(13,E=_.scale),"min_width"in _&&l(14,J=_.min_width),"autoplay"in _&&l(15,M=_.autoplay),"gradio"in _&&l(16,k=_.gradio)},i.$$.update=()=>{i.$$.dirty[0]&6291457&&(r!=null?(l(17,S=Z(r[0],u,c)),l(18,z=Z(r[1],u,c))):(l(17,S=null),l(18,z=null))),i.$$.dirty[0]&8454145&&JSON.stringify(r)!==JSON.stringify(o)&&(l(23,o=r),k.dispatch("change"))},[r,m,t,n,a,s,d,b,I,W,U,j,C,E,J,M,k,S,z,O,f,u,c,o,x,ee,te,le,ne,ie,ae,se,re,oe]}class Qe extends Y{constructor(e){super(),$(this,e,Le,He,H,{elem_id:2,elem_classes:3,visible:4,value:0,label:5,source:6,root:21,root_url:22,show_label:7,loading_status:1,height:8,width:9,mirror_webcam:10,include_audio:11,container:12,scale:13,min_width:14,autoplay:15,gradio:16},null,[-1,-1])}get elem_id(){return this.$$.ctx[2]}set elem_id(e){this.$$set({elem_id:e}),h()}get elem_classes(){return this.$$.ctx[3]}set elem_classes(e){this.$$set({elem_classes:e}),h()}get visible(){return this.$$.ctx[4]}set visible(e){this.$$set({visible:e}),h()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),h()}get label(){return this.$$.ctx[5]}set label(e){this.$$set({label:e}),h()}get source(){return this.$$.ctx[6]}set source(e){this.$$set({source:e}),h()}get root(){return this.$$.ctx[21]}set root(e){this.$$set({root:e}),h()}get root_url(){return this.$$.ctx[22]}set root_url(e){this.$$set({root_url:e}),h()}get show_label(){return this.$$.ctx[7]}set show_label(e){this.$$set({show_label:e}),h()}get loading_status(){return this.$$.ctx[1]}set loading_status(e){this.$$set({loading_status:e}),h()}get height(){return this.$$.ctx[8]}set height(e){this.$$set({height:e}),h()}get width(){return this.$$.ctx[9]}set width(e){this.$$set({width:e}),h()}get mirror_webcam(){return this.$$.ctx[10]}set mirror_webcam(e){this.$$set({mirror_webcam:e}),h()}get include_audio(){return this.$$.ctx[11]}set include_audio(e){this.$$set({include_audio:e}),h()}get container(){return this.$$.ctx[12]}set container(e){this.$$set({container:e}),h()}get scale(){return this.$$.ctx[13]}set scale(e){this.$$set({scale:e}),h()}get min_width(){return this.$$.ctx[14]}set min_width(e){this.$$set({min_width:e}),h()}get autoplay(){return this.$$.ctx[15]}set autoplay(e){this.$$set({autoplay:e}),h()}get gradio(){return this.$$.ctx[16]}set gradio(e){this.$$set({gradio:e}),h()}}const it=Qe;export{it as default};
//# sourceMappingURL=index-44a75426.js.map
