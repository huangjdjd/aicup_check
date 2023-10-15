import{S as G,e as H,s as J,F as k,o as L,Q,G as z,h as R,r as W,u as b,v as Z,w as h,k as S,H as M,D as A,C as K,a7 as T,R as N,m as V,g as X,j as q,n as P,U as Y,X as y,a9 as p,ab as x,ac as $,ad as ee,Z as le,ae as ne,V as ae,W as te}from"./index-40573ec4.js";import{B as oe,n as se}from"./Button-20e55939.js";import{U as ie}from"./UploadText-cb4ab04b.js";import{U as _e}from"./Upload-7b2b8db7.js";import{M as fe}from"./ModifyUpload-832e78e1.js";import{B as re}from"./BlockLabel-06126da7.js";import{F as ue}from"./File-ab309c70.js";import{b as ce,c as me,r as de}from"./babylonjs.loaders.min-22e1ce67.js";import"./IconButton-33a135c8.js";import"./Undo-ce0918a5.js";function ge(o){let e,n,l,t,_;return n=new fe({props:{undoable:!0,absolute:!0}}),n.$on("clear",o[6]),n.$on("undo",o[7]),{c(){e=V("div"),k(n.$$.fragment),l=L(),t=V("canvas"),X(t,"class","svelte-15mfcnc"),X(e,"class","input-model svelte-15mfcnc")},m(f,s){R(f,e,s),z(n,e,null),q(e,l),q(e,t),o[16](t),_=!0},p:P,i(f){_||(h(n.$$.fragment,f),_=!0)},o(f){b(n.$$.fragment,f),_=!1},d(f){f&&S(e),M(n),o[16](null)}}}function be(o){let e,n,l;function t(f){o[15](f)}let _={filetype:".obj, .gltf, .glb",$$slots:{default:[he]},$$scope:{ctx:o}};return o[4]!==void 0&&(_.dragging=o[4]),e=new _e({props:_}),N.push(()=>Y(e,"dragging",t)),e.$on("load",o[5]),{c(){k(e.$$.fragment)},m(f,s){z(e,f,s),l=!0},p(f,s){const i={};s&131072&&(i.$$scope={dirty:s,ctx:f}),!n&&s&16&&(n=!0,i.dragging=f[4],y(()=>n=!1)),e.$set(i)},i(f){l||(h(e.$$.fragment,f),l=!0)},o(f){b(e.$$.fragment,f),l=!1},d(f){M(e,f)}}}function he(o){let e;const n=o[14].default,l=p(n,o,o[17],null);return{c(){l&&l.c()},m(t,_){l&&l.m(t,_),e=!0},p(t,_){l&&l.p&&(!e||_&131072)&&x(l,n,t,t[17],e?ee(n,t[17],_,null):$(t[17]),null)},i(t){e||(h(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function we(o){let e,n,l,t,_,f;e=new re({props:{show_label:o[2],Icon:ue,label:o[1]||"3D Model"}});const s=[be,ge],i=[];function c(r,u){return r[0]===null?0:1}return l=c(o),t=i[l]=s[l](o),{c(){k(e.$$.fragment),n=L(),t.c(),_=Q()},m(r,u){z(e,r,u),R(r,n,u),i[l].m(r,u),R(r,_,u),f=!0},p(r,[u]){const m={};u&4&&(m.show_label=r[2]),u&2&&(m.label=r[1]||"3D Model"),e.$set(m);let d=l;l=c(r),l===d?i[l].p(r,u):(W(),b(i[d],1,1,()=>{i[d]=null}),Z(),t=i[l],t?t.p(r,u):(t=i[l]=s[l](r),t.c()),h(t,1),t.m(_.parentNode,_))},i(r){f||(h(e.$$.fragment,r),h(t),f=!0)},o(r){b(e.$$.fragment,r),b(t),f=!1},d(r){r&&(S(n),S(_)),M(e,r),i[l].d(r)}}}function ke(o,e,n){let l,t,_,{$$slots:f={},$$scope:s}=e,{value:i}=e,{clear_color:c=[0,0,0,0]}=e,{label:r=""}=e,{show_label:u}=e,{zoom_speed:m=1}=e,{camera_position:d=[null,null,null]}=e,U=!1,w,g,D;function B(){g=me(w,g,D,i,c,d,m)}A(()=>{i!=null&&B(),n(11,U=!0)});async function F({detail:a}){n(0,i=a),await T(),B(),E("change",i)}async function I(){g&&D&&(g.dispose(),D.dispose()),n(0,i=null),await T(),E("clear")}async function O(){de(g,d,m)}const E=K();let j=!1;ce.OBJFileLoader.IMPORT_VERTEX_COLORS=!0;function v(a){j=a,n(4,j)}function C(a){N[a?"unshift":"push"](()=>{w=a,n(3,w)})}return o.$$set=a=>{"value"in a&&n(0,i=a.value),"clear_color"in a&&n(8,c=a.clear_color),"label"in a&&n(1,r=a.label),"show_label"in a&&n(2,u=a.show_label),"zoom_speed"in a&&n(9,m=a.zoom_speed),"camera_position"in a&&n(10,d=a.camera_position),"$$scope"in a&&n(17,s=a.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&n(13,{data:l,is_file:t,name:_}=i||{data:void 0,is_file:void 0,name:void 0},l,(n(12,t),n(0,i))),o.$$.dirty&14344&&w&&U&&l!=null&&t&&B(),o.$$.dirty&16&&E("drag",j)},[i,r,u,w,j,F,I,O,c,m,d,U,t,l,f,v,C,s]}class ze extends G{constructor(e){super(),H(this,e,ke,we,J,{value:0,clear_color:8,label:1,show_label:2,zoom_speed:9,camera_position:10})}}function Me(o){let e,n;return e=new ie({props:{type:"file"}}),{c(){k(e.$$.fragment)},m(l,t){z(e,l,t),n=!0},p:P,i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){M(e,l)}}}function Ue(o){let e,n,l,t;const _=[o[5]];let f={};for(let s=0;s<_.length;s+=1)f=le(f,_[s]);return e=new ne({props:f}),l=new ze({props:{label:o[6],show_label:o[7],clear_color:o[4],value:o[15],camera_position:o[14],zoom_speed:o[12],$$slots:{default:[Me]},$$scope:{ctx:o}}}),l.$on("change",o[19]),l.$on("drag",o[20]),l.$on("change",o[21]),l.$on("clear",o[22]),{c(){k(e.$$.fragment),n=L(),k(l.$$.fragment)},m(s,i){z(e,s,i),R(s,n,i),z(l,s,i),t=!0},p(s,i){const c=i&32?ae(_,[te(s[5])]):{};e.$set(c);const r={};i&64&&(r.label=s[6]),i&128&&(r.show_label=s[7]),i&16&&(r.clear_color=s[4]),i&32768&&(r.value=s[15]),i&16384&&(r.camera_position=s[14]),i&4096&&(r.zoom_speed=s[12]),i&8388608&&(r.$$scope={dirty:i,ctx:s}),l.$set(r)},i(s){t||(h(e.$$.fragment,s),h(l.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),b(l.$$.fragment,s),t=!1},d(s){s&&S(n),M(e,s),M(l,s)}}}function De(o){let e,n;return e=new oe({props:{visible:o[3],variant:o[0]===null?"dashed":"solid",border_mode:o[16]?"focus":"base",padding:!1,elem_id:o[1],elem_classes:o[2],container:o[8],scale:o[9],min_width:o[10],height:o[13],$$slots:{default:[Ue]},$$scope:{ctx:o}}}),{c(){k(e.$$.fragment)},m(l,t){z(e,l,t),n=!0},p(l,[t]){const _={};t&8&&(_.visible=l[3]),t&1&&(_.variant=l[0]===null?"dashed":"solid"),t&65536&&(_.border_mode=l[16]?"focus":"base"),t&2&&(_.elem_id=l[1]),t&4&&(_.elem_classes=l[2]),t&256&&(_.container=l[8]),t&512&&(_.scale=l[9]),t&1024&&(_.min_width=l[10]),t&8192&&(_.height=l[13]),t&8509681&&(_.$$scope={dirty:t,ctx:l}),e.$set(_)},i(l){n||(h(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){M(e,l)}}}function Be(o,e,n){let{elem_id:l=""}=e,{elem_classes:t=[]}=e,{visible:_=!0}=e,{value:f=null}=e,{root:s}=e,{root_url:i}=e,{clear_color:c}=e,{loading_status:r}=e,{label:u}=e,{show_label:m}=e,{container:d=!0}=e,{scale:U=null}=e,{min_width:w=void 0}=e,{gradio:g}=e,{zoom_speed:D=1}=e,{height:B=void 0}=e,{camera_position:F=[null,null,null]}=e,I,O=!1;const E=({detail:a})=>n(0,f=a),j=({detail:a})=>n(16,O=a),v=({detail:a})=>g.dispatch("change",a),C=()=>g.dispatch("clear");return o.$$set=a=>{"elem_id"in a&&n(1,l=a.elem_id),"elem_classes"in a&&n(2,t=a.elem_classes),"visible"in a&&n(3,_=a.visible),"value"in a&&n(0,f=a.value),"root"in a&&n(17,s=a.root),"root_url"in a&&n(18,i=a.root_url),"clear_color"in a&&n(4,c=a.clear_color),"loading_status"in a&&n(5,r=a.loading_status),"label"in a&&n(6,u=a.label),"show_label"in a&&n(7,m=a.show_label),"container"in a&&n(8,d=a.container),"scale"in a&&n(9,U=a.scale),"min_width"in a&&n(10,w=a.min_width),"gradio"in a&&n(11,g=a.gradio),"zoom_speed"in a&&n(12,D=a.zoom_speed),"height"in a&&n(13,B=a.height),"camera_position"in a&&n(14,F=a.camera_position)},o.$$.update=()=>{o.$$.dirty&393217&&n(15,I=se(f,s,i))},[f,l,t,_,c,r,u,m,d,U,w,g,D,B,F,I,O,s,i,E,j,v,C]}class je extends G{constructor(e){super(),H(this,e,Be,De,J,{elem_id:1,elem_classes:2,visible:3,value:0,root:17,root_url:18,clear_color:4,loading_status:5,label:6,show_label:7,container:8,scale:9,min_width:10,gradio:11,zoom_speed:12,height:13,camera_position:14})}}const Ve=je;export{Ve as default};
//# sourceMappingURL=index-b05b312b.js.map
