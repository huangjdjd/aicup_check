import{S as Ve,e as ye,s as Ee,m as U,o as G,g as w,N as S,h as V,j as T,n as Se,k as y,p as F,b as de,ah as we,B as ce,t as K,x as j,I as Ae,Q as pe,O as fl,w as I,r as ke,u as O,v as ve,C as rl,ai as Rl,F as W,G as Z,H as x,a6 as Il,R as Pe,a0 as Ul,a1 as Fl,aj as Ol,_ as Fe,E as Oe,M as ze,af as zl,U as ul,X as ol,a9 as Dl,ab as Nl,ac as Bl,ad as Ll,ag as L,Z as Tl,ae as Cl,V as Kl,W as jl}from"./index-d50163a8.js";import{a as _l,B as Xl,n as ql}from"./Button-7dd65143.js";import{U as Yl}from"./UploadText-087a7235.js";import{U as Jl}from"./Upload-2fa84c01.js";import{M as Gl}from"./ModifyUpload-430e5927.js";import{B as Ql}from"./BlockLabel-44aab9bd.js";import{M as Wl,l as Zl}from"./utils-56927c4b.js";import"./IconButton-0f491d39.js";import"./Undo-23491313.js";function De(l,e,i){const n=l.slice();return n[27]=e[i],n[29]=i,n}function Ne(l){let e,i,n,a,t=(l[6]==="label"||l[7]==="label")&&Be(l);return{c(){e=U("span"),t&&t.c(),w(e,"class","pip first"),w(e,"style",i=l[14]+": 0%;"),S(e,"selected",l[17](l[0])),S(e,"in-range",l[16](l[0]))},m(s,f){V(s,e,f),t&&t.m(e,null),n||(a=[F(e,"click",function(){de(l[20](l[0]))&&l[20](l[0]).apply(this,arguments)}),F(e,"touchend",we(function(){de(l[20](l[0]))&&l[20](l[0]).apply(this,arguments)}))],n=!0)},p(s,f){l=s,l[6]==="label"||l[7]==="label"?t?t.p(l,f):(t=Be(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null),f&16384&&i!==(i=l[14]+": 0%;")&&w(e,"style",i),f&131073&&S(e,"selected",l[17](l[0])),f&65537&&S(e,"in-range",l[16](l[0]))},d(s){s&&y(e),t&&t.d(),n=!1,ce(a)}}}function Be(l){let e,i=l[12](l[0],0,0)+"",n,a=l[10]&&Le(l),t=l[11]&&Te(l);return{c(){e=U("span"),a&&a.c(),n=K(i),t&&t.c(),w(e,"class","pipVal")},m(s,f){V(s,e,f),a&&a.m(e,null),T(e,n),t&&t.m(e,null)},p(s,f){s[10]?a?a.p(s,f):(a=Le(s),a.c(),a.m(e,n)):a&&(a.d(1),a=null),f&4097&&i!==(i=s[12](s[0],0,0)+"")&&j(n,i),s[11]?t?t.p(s,f):(t=Te(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&y(e),a&&a.d(),t&&t.d()}}}function Le(l){let e,i;return{c(){e=U("span"),i=K(l[10]),w(e,"class","pipVal-prefix")},m(n,a){V(n,e,a),T(e,i)},p(n,a){a&1024&&j(i,n[10])},d(n){n&&y(e)}}}function Te(l){let e,i;return{c(){e=U("span"),i=K(l[11]),w(e,"class","pipVal-suffix")},m(n,a){V(n,e,a),T(e,i)},p(n,a){a&2048&&j(i,n[11])},d(n){n&&y(e)}}}function Ce(l){let e,i=Ae(Array(l[19]+1)),n=[];for(let a=0;a<i.length;a+=1)n[a]=Ye(De(l,i,a));return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=pe()},m(a,t){for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(a,t);V(a,e,t)},p(a,t){if(t&2088515){i=Ae(Array(a[19]+1));let s;for(s=0;s<i.length;s+=1){const f=De(a,i,s);n[s]?n[s].p(f,t):(n[s]=Ye(f),n[s].c(),n[s].m(e.parentNode,e))}for(;s<n.length;s+=1)n[s].d(1);n.length=i.length}},d(a){a&&y(e),fl(n,a)}}}function Ke(l){let e,i,n,a,t,s=(l[6]==="label"||l[9]==="label")&&je(l);return{c(){e=U("span"),s&&s.c(),i=G(),w(e,"class","pip"),w(e,"style",n=l[14]+": "+l[15](l[18](l[29]))+"%;"),S(e,"selected",l[17](l[18](l[29]))),S(e,"in-range",l[16](l[18](l[29])))},m(f,u){V(f,e,u),s&&s.m(e,null),T(e,i),a||(t=[F(e,"click",function(){de(l[20](l[18](l[29])))&&l[20](l[18](l[29])).apply(this,arguments)}),F(e,"touchend",we(function(){de(l[20](l[18](l[29])))&&l[20](l[18](l[29])).apply(this,arguments)}))],a=!0)},p(f,u){l=f,l[6]==="label"||l[9]==="label"?s?s.p(l,u):(s=je(l),s.c(),s.m(e,i)):s&&(s.d(1),s=null),u&311296&&n!==(n=l[14]+": "+l[15](l[18](l[29]))+"%;")&&w(e,"style",n),u&393216&&S(e,"selected",l[17](l[18](l[29]))),u&327680&&S(e,"in-range",l[16](l[18](l[29])))},d(f){f&&y(e),s&&s.d(),a=!1,ce(t)}}}function je(l){let e,i=l[12](l[18](l[29]),l[29],l[15](l[18](l[29])))+"",n,a=l[10]&&Xe(l),t=l[11]&&qe(l);return{c(){e=U("span"),a&&a.c(),n=K(i),t&&t.c(),w(e,"class","pipVal")},m(s,f){V(s,e,f),a&&a.m(e,null),T(e,n),t&&t.m(e,null)},p(s,f){s[10]?a?a.p(s,f):(a=Xe(s),a.c(),a.m(e,n)):a&&(a.d(1),a=null),f&299008&&i!==(i=s[12](s[18](s[29]),s[29],s[15](s[18](s[29])))+"")&&j(n,i),s[11]?t?t.p(s,f):(t=qe(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&y(e),a&&a.d(),t&&t.d()}}}function Xe(l){let e,i;return{c(){e=U("span"),i=K(l[10]),w(e,"class","pipVal-prefix")},m(n,a){V(n,e,a),T(e,i)},p(n,a){a&1024&&j(i,n[10])},d(n){n&&y(e)}}}function qe(l){let e,i;return{c(){e=U("span"),i=K(l[11]),w(e,"class","pipVal-suffix")},m(n,a){V(n,e,a),T(e,i)},p(n,a){a&2048&&j(i,n[11])},d(n){n&&y(e)}}}function Ye(l){let e=l[18](l[29])!==l[0]&&l[18](l[29])!==l[1],i,n=e&&Ke(l);return{c(){n&&n.c(),i=pe()},m(a,t){n&&n.m(a,t),V(a,i,t)},p(a,t){t&262147&&(e=a[18](a[29])!==a[0]&&a[18](a[29])!==a[1]),e?n?n.p(a,t):(n=Ke(a),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null)},d(a){a&&y(i),n&&n.d(a)}}}function Je(l){let e,i,n,a,t=(l[6]==="label"||l[8]==="label")&&Ge(l);return{c(){e=U("span"),t&&t.c(),w(e,"class","pip last"),w(e,"style",i=l[14]+": 100%;"),S(e,"selected",l[17](l[1])),S(e,"in-range",l[16](l[1]))},m(s,f){V(s,e,f),t&&t.m(e,null),n||(a=[F(e,"click",function(){de(l[20](l[1]))&&l[20](l[1]).apply(this,arguments)}),F(e,"touchend",we(function(){de(l[20](l[1]))&&l[20](l[1]).apply(this,arguments)}))],n=!0)},p(s,f){l=s,l[6]==="label"||l[8]==="label"?t?t.p(l,f):(t=Ge(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null),f&16384&&i!==(i=l[14]+": 100%;")&&w(e,"style",i),f&131074&&S(e,"selected",l[17](l[1])),f&65538&&S(e,"in-range",l[16](l[1]))},d(s){s&&y(e),t&&t.d(),n=!1,ce(a)}}}function Ge(l){let e,i=l[12](l[1],l[19],100)+"",n,a=l[10]&&Qe(l),t=l[11]&&We(l);return{c(){e=U("span"),a&&a.c(),n=K(i),t&&t.c(),w(e,"class","pipVal")},m(s,f){V(s,e,f),a&&a.m(e,null),T(e,n),t&&t.m(e,null)},p(s,f){s[10]?a?a.p(s,f):(a=Qe(s),a.c(),a.m(e,n)):a&&(a.d(1),a=null),f&528386&&i!==(i=s[12](s[1],s[19],100)+"")&&j(n,i),s[11]?t?t.p(s,f):(t=We(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&y(e),a&&a.d(),t&&t.d()}}}function Qe(l){let e,i;return{c(){e=U("span"),i=K(l[10]),w(e,"class","pipVal-prefix")},m(n,a){V(n,e,a),T(e,i)},p(n,a){a&1024&&j(i,n[10])},d(n){n&&y(e)}}}function We(l){let e,i;return{c(){e=U("span"),i=K(l[11]),w(e,"class","pipVal-suffix")},m(n,a){V(n,e,a),T(e,i)},p(n,a){a&2048&&j(i,n[11])},d(n){n&&y(e)}}}function xl(l){let e,i,n,a=(l[6]&&l[7]!==!1||l[7])&&Ne(l),t=(l[6]&&l[9]!==!1||l[9])&&Ce(l),s=(l[6]&&l[8]!==!1||l[8])&&Je(l);return{c(){e=U("div"),a&&a.c(),i=G(),t&&t.c(),n=G(),s&&s.c(),w(e,"class","rangePips"),S(e,"disabled",l[5]),S(e,"hoverable",l[4]),S(e,"vertical",l[2]),S(e,"reversed",l[3]),S(e,"focus",l[13])},m(f,u){V(f,e,u),a&&a.m(e,null),T(e,i),t&&t.m(e,null),T(e,n),s&&s.m(e,null)},p(f,[u]){f[6]&&f[7]!==!1||f[7]?a?a.p(f,u):(a=Ne(f),a.c(),a.m(e,i)):a&&(a.d(1),a=null),f[6]&&f[9]!==!1||f[9]?t?t.p(f,u):(t=Ce(f),t.c(),t.m(e,n)):t&&(t.d(1),t=null),f[6]&&f[8]!==!1||f[8]?s?s.p(f,u):(s=Je(f),s.c(),s.m(e,null)):s&&(s.d(1),s=null),u&32&&S(e,"disabled",f[5]),u&16&&S(e,"hoverable",f[4]),u&4&&S(e,"vertical",f[2]),u&8&&S(e,"reversed",f[3]),u&8192&&S(e,"focus",f[13])},i:Se,o:Se,d(f){f&&y(e),a&&a.d(),t&&t.d(),s&&s.d()}}}function $l(l,e,i){let n,a,t,s,f,{range:u=!1}=e,{min:c=0}=e,{max:o=100}=e,{step:_=1}=e,{values:g=[(o+c)/2]}=e,{vertical:m=!1}=e,{reversed:d=!1}=e,{hoverable:A=!0}=e,{disabled:P=!1}=e,{pipstep:v=void 0}=e,{all:M=!0}=e,{first:C=void 0}=e,{last:z=void 0}=e,{rest:R=void 0}=e,{prefix:D=""}=e,{suffix:J=""}=e,{formatter:X=(b,le)=>b}=e,{focus:$=void 0}=e,{orientationStart:ee=void 0}=e,{percentOf:N=void 0}=e,{moveHandle:q=void 0}=e;function ae(b){q(void 0,b)}return l.$$set=b=>{"range"in b&&i(21,u=b.range),"min"in b&&i(0,c=b.min),"max"in b&&i(1,o=b.max),"step"in b&&i(22,_=b.step),"values"in b&&i(23,g=b.values),"vertical"in b&&i(2,m=b.vertical),"reversed"in b&&i(3,d=b.reversed),"hoverable"in b&&i(4,A=b.hoverable),"disabled"in b&&i(5,P=b.disabled),"pipstep"in b&&i(24,v=b.pipstep),"all"in b&&i(6,M=b.all),"first"in b&&i(7,C=b.first),"last"in b&&i(8,z=b.last),"rest"in b&&i(9,R=b.rest),"prefix"in b&&i(10,D=b.prefix),"suffix"in b&&i(11,J=b.suffix),"formatter"in b&&i(12,X=b.formatter),"focus"in b&&i(13,$=b.focus),"orientationStart"in b&&i(14,ee=b.orientationStart),"percentOf"in b&&i(15,N=b.percentOf),"moveHandle"in b&&i(25,q=b.moveHandle)},l.$$.update=()=>{l.$$.dirty&20971527&&i(26,n=v||((o-c)/_>=(m?50:100)?(o-c)/(m?10:20):1)),l.$$.dirty&71303171&&i(19,a=parseInt((o-c)/(_*n),10)),l.$$.dirty&71303169&&i(18,t=function(b){return c+b*_*n}),l.$$.dirty&8388608&&i(17,s=function(b){return g.some(le=>le===b)}),l.$$.dirty&10485760&&i(16,f=function(b){if(u==="min")return g[0]>b;if(u==="max")return g[0]<b;if(u)return g[0]<b&&g[1]>b})},[c,o,m,d,A,P,M,C,z,R,D,J,X,$,ee,N,f,s,t,a,ae,u,_,g,v,q,n]}class en extends Ve{constructor(e){super(),ye(this,e,$l,xl,Ee,{range:21,min:0,max:1,step:22,values:23,vertical:2,reversed:3,hoverable:4,disabled:5,pipstep:24,all:6,first:7,last:8,rest:9,prefix:10,suffix:11,formatter:12,focus:13,orientationStart:14,percentOf:15,moveHandle:25})}}function Ze(l,e,i){const n=l.slice();return n[63]=e[i],n[65]=i,n}function xe(l){let e,i=l[21](l[63],l[65],l[23](l[63]))+"",n,a=l[18]&&$e(l),t=l[19]&&el(l);return{c(){e=U("span"),a&&a.c(),n=K(i),t&&t.c(),w(e,"class","rangeFloat")},m(s,f){V(s,e,f),a&&a.m(e,null),T(e,n),t&&t.m(e,null)},p(s,f){s[18]?a?a.p(s,f):(a=$e(s),a.c(),a.m(e,n)):a&&(a.d(1),a=null),f[0]&10485761&&i!==(i=s[21](s[63],s[65],s[23](s[63]))+"")&&j(n,i),s[19]?t?t.p(s,f):(t=el(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&y(e),a&&a.d(),t&&t.d()}}}function $e(l){let e,i;return{c(){e=U("span"),i=K(l[18]),w(e,"class","rangeFloat-prefix")},m(n,a){V(n,e,a),T(e,i)},p(n,a){a[0]&262144&&j(i,n[18])},d(n){n&&y(e)}}}function el(l){let e,i;return{c(){e=U("span"),i=K(l[19]),w(e,"class","rangeFloat-suffix")},m(n,a){V(n,e,a),T(e,i)},p(n,a){a[0]&524288&&j(i,n[19])},d(n){n&&y(e)}}}function ll(l){let e,i,n,a,t,s,f,u,c,o,_,g,m=l[7]&&xe(l);return{c(){e=U("span"),i=U("span"),n=G(),m&&m.c(),w(i,"class","rangeNub"),w(e,"role","slider"),w(e,"class","rangeHandle"),w(e,"data-handle",l[65]),w(e,"style",a=l[28]+": "+l[29][l[65]]+"%; z-index: "+(l[26]===l[65]?3:2)+";"),w(e,"aria-valuemin",t=l[2]===!0&&l[65]===1?l[0][0]:l[3]),w(e,"aria-valuemax",s=l[2]===!0&&l[65]===0?l[0][1]:l[4]),w(e,"aria-valuenow",f=l[63]),w(e,"aria-valuetext",u=""+(l[18]+l[21](l[63],l[65],l[23](l[63]))+l[19])),w(e,"aria-orientation",c=l[6]?"vertical":"horizontal"),w(e,"aria-disabled",l[10]),w(e,"disabled",l[10]),w(e,"tabindex",o=l[10]?-1:0),S(e,"active",l[24]&&l[26]===l[65]),S(e,"press",l[25]&&l[26]===l[65])},m(d,A){V(d,e,A),T(e,i),T(e,n),m&&m.m(e,null),_||(g=[F(e,"blur",l[33]),F(e,"focus",l[34]),F(e,"keydown",l[35])],_=!0)},p(d,A){d[7]?m?m.p(d,A):(m=xe(d),m.c(),m.m(e,null)):m&&(m.d(1),m=null),A[0]&872415232&&a!==(a=d[28]+": "+d[29][d[65]]+"%; z-index: "+(d[26]===d[65]?3:2)+";")&&w(e,"style",a),A[0]&13&&t!==(t=d[2]===!0&&d[65]===1?d[0][0]:d[3])&&w(e,"aria-valuemin",t),A[0]&21&&s!==(s=d[2]===!0&&d[65]===0?d[0][1]:d[4])&&w(e,"aria-valuemax",s),A[0]&1&&f!==(f=d[63])&&w(e,"aria-valuenow",f),A[0]&11272193&&u!==(u=""+(d[18]+d[21](d[63],d[65],d[23](d[63]))+d[19]))&&w(e,"aria-valuetext",u),A[0]&64&&c!==(c=d[6]?"vertical":"horizontal")&&w(e,"aria-orientation",c),A[0]&1024&&w(e,"aria-disabled",d[10]),A[0]&1024&&w(e,"disabled",d[10]),A[0]&1024&&o!==(o=d[10]?-1:0)&&w(e,"tabindex",o),A[0]&83886080&&S(e,"active",d[24]&&d[26]===d[65]),A[0]&100663296&&S(e,"press",d[25]&&d[26]===d[65])},d(d){d&&y(e),m&&m.d(),_=!1,ce(g)}}}function nl(l){let e,i;return{c(){e=U("span"),w(e,"class","rangeBar"),w(e,"style",i=l[28]+": "+l[31](l[29])+"%; "+l[27]+": "+l[32](l[29])+"%;")},m(n,a){V(n,e,a)},p(n,a){a[0]&939524096&&i!==(i=n[28]+": "+n[31](n[29])+"%; "+n[27]+": "+n[32](n[29])+"%;")&&w(e,"style",i)},d(n){n&&y(e)}}}function il(l){let e,i;return e=new en({props:{values:l[0],min:l[3],max:l[4],step:l[5],range:l[2],vertical:l[6],reversed:l[8],orientationStart:l[28],hoverable:l[9],disabled:l[10],all:l[13],first:l[14],last:l[15],rest:l[16],pipstep:l[12],prefix:l[18],suffix:l[19],formatter:l[20],focus:l[24],percentOf:l[23],moveHandle:l[30]}}),{c(){W(e.$$.fragment)},m(n,a){Z(e,n,a),i=!0},p(n,a){const t={};a[0]&1&&(t.values=n[0]),a[0]&8&&(t.min=n[3]),a[0]&16&&(t.max=n[4]),a[0]&32&&(t.step=n[5]),a[0]&4&&(t.range=n[2]),a[0]&64&&(t.vertical=n[6]),a[0]&256&&(t.reversed=n[8]),a[0]&268435456&&(t.orientationStart=n[28]),a[0]&512&&(t.hoverable=n[9]),a[0]&1024&&(t.disabled=n[10]),a[0]&8192&&(t.all=n[13]),a[0]&16384&&(t.first=n[14]),a[0]&32768&&(t.last=n[15]),a[0]&65536&&(t.rest=n[16]),a[0]&4096&&(t.pipstep=n[12]),a[0]&262144&&(t.prefix=n[18]),a[0]&524288&&(t.suffix=n[19]),a[0]&1048576&&(t.formatter=n[20]),a[0]&16777216&&(t.focus=n[24]),a[0]&8388608&&(t.percentOf=n[23]),e.$set(t)},i(n){i||(I(e.$$.fragment,n),i=!0)},o(n){O(e.$$.fragment,n),i=!1},d(n){x(e,n)}}}function ln(l){let e,i,n,a,t,s,f=Ae(l[0]),u=[];for(let _=0;_<f.length;_+=1)u[_]=ll(Ze(l,f,_));let c=l[2]&&nl(l),o=l[11]&&il(l);return{c(){e=U("div");for(let _=0;_<u.length;_+=1)u[_].c();i=G(),c&&c.c(),n=G(),o&&o.c(),w(e,"id",l[17]),w(e,"class","rangeSlider"),S(e,"range",l[2]),S(e,"disabled",l[10]),S(e,"hoverable",l[9]),S(e,"vertical",l[6]),S(e,"reversed",l[8]),S(e,"focus",l[24]),S(e,"min",l[2]==="min"),S(e,"max",l[2]==="max"),S(e,"pips",l[11]),S(e,"pip-labels",l[13]==="label"||l[14]==="label"||l[15]==="label"||l[16]==="label")},m(_,g){V(_,e,g);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(e,null);T(e,i),c&&c.m(e,null),T(e,n),o&&o.m(e,null),l[49](e),a=!0,t||(s=[F(window,"mousedown",l[38]),F(window,"touchstart",l[38]),F(window,"mousemove",l[39]),F(window,"touchmove",l[39]),F(window,"mouseup",l[40]),F(window,"touchend",l[41]),F(window,"keydown",l[42]),F(e,"mousedown",l[36]),F(e,"mouseup",l[37]),F(e,"touchstart",we(l[36])),F(e,"touchend",we(l[37]))],t=!0)},p(_,g){if(g[0]&934020317|g[1]&28){f=Ae(_[0]);let m;for(m=0;m<f.length;m+=1){const d=Ze(_,f,m);u[m]?u[m].p(d,g):(u[m]=ll(d),u[m].c(),u[m].m(e,i))}for(;m<u.length;m+=1)u[m].d(1);u.length=f.length}_[2]?c?c.p(_,g):(c=nl(_),c.c(),c.m(e,n)):c&&(c.d(1),c=null),_[11]?o?(o.p(_,g),g[0]&2048&&I(o,1)):(o=il(_),o.c(),I(o,1),o.m(e,null)):o&&(ke(),O(o,1,1,()=>{o=null}),ve()),(!a||g[0]&131072)&&w(e,"id",_[17]),(!a||g[0]&4)&&S(e,"range",_[2]),(!a||g[0]&1024)&&S(e,"disabled",_[10]),(!a||g[0]&512)&&S(e,"hoverable",_[9]),(!a||g[0]&64)&&S(e,"vertical",_[6]),(!a||g[0]&256)&&S(e,"reversed",_[8]),(!a||g[0]&16777216)&&S(e,"focus",_[24]),(!a||g[0]&4)&&S(e,"min",_[2]==="min"),(!a||g[0]&4)&&S(e,"max",_[2]==="max"),(!a||g[0]&2048)&&S(e,"pips",_[11]),(!a||g[0]&122880)&&S(e,"pip-labels",_[13]==="label"||_[14]==="label"||_[15]==="label"||_[16]==="label")},i(_){a||(I(o),a=!0)},o(_){O(o),a=!1},d(_){_&&y(e),fl(u,_),c&&c.d(),o&&o.d(),l[49](null),t=!1,ce(s)}}}function al(l){if(!l)return-1;for(var e=0;l=l.previousElementSibling;)e++;return e}function Me(l){return l.type.includes("touch")?l.touches[0]:l}function nn(l,e,i){let n,a,t,s,f,u,c=Se,o=()=>(c(),c=Il(B,r=>i(29,u=r)),B);l.$$.on_destroy.push(()=>c());let{slider:_}=e,{range:g=!1}=e,{pushy:m=!1}=e,{min:d=0}=e,{max:A=100}=e,{step:P=1}=e,{values:v=[(A+d)/2]}=e,{vertical:M=!1}=e,{float:C=!1}=e,{reversed:z=!1}=e,{hoverable:R=!0}=e,{disabled:D=!1}=e,{pips:J=!1}=e,{pipstep:X=void 0}=e,{all:$=void 0}=e,{first:ee=void 0}=e,{last:N=void 0}=e,{rest:q=void 0}=e,{id:ae=void 0}=e,{prefix:b=""}=e,{suffix:le=""}=e,{formatter:re=(r,k,H)=>r}=e,{handleFormatter:me=re}=e,{precision:te=2}=e,{springValues:ue={stiffness:.15,damping:.4}}=e;const oe=rl();let Q=0,p=!1,se=!1,fe=!1,be=!1,Y=v.length-1,_e,h,B;function ne(r){const k=_.querySelectorAll(".handle"),H=Array.prototype.includes.call(k,r),E=Array.prototype.some.call(k,ie=>ie.contains(r));return H||E}function he(r){return g==="min"||g==="max"?r.slice(0,1):g?r.slice(0,2):r}function Re(){return _.getBoundingClientRect()}function dl(r){const k=Re();let H=0,E=0,ie=0;M?(H=r.clientY-k.top,E=H/k.height*100,E=z?E:100-E):(H=r.clientX-k.left,E=H/k.width*100,E=z?100-E:E),ie=(A-d)/100*E+d;let Ue;return g===!0&&v[0]===v[1]?ie>v[1]?1:0:(Ue=v.indexOf([...v].sort((Hl,Ml)=>Math.abs(ie-Hl)-Math.abs(ie-Ml))[0]),Ue)}function He(r){const k=Re();let H=0,E=0,ie=0;M?(H=r.clientY-k.top,E=H/k.height*100,E=z?E:100-E):(H=r.clientX-k.left,E=H/k.width*100,E=z?100-E:E),ie=(A-d)/100*E+d,ge(Y,ie)}function ge(r,k){return k=t(k),typeof r>"u"&&(r=Y),g&&(r===0&&k>v[1]?m?i(0,v[1]=k,v):k=v[1]:r===1&&k<v[0]&&(m?i(0,v[0]=k,v):k=v[0])),v[r]!==k&&i(0,v[r]=k,v),h!==k&&(El(),h=k),k}function ml(r){return g==="min"?0:r[0]}function gl(r){return g==="max"?0:g==="min"?100-r[0]:100-r[1]}function cl(r){be&&(i(24,p=!1),se=!1,i(25,fe=!1))}function bl(r){D||(i(26,Y=al(r.target)),i(24,p=!0))}function hl(r){if(!D){const k=al(r.target);let H=r.ctrlKey||r.metaKey||r.shiftKey?P*10:P,E=!1;switch(r.key){case"PageDown":H*=10;case"ArrowRight":case"ArrowUp":ge(k,v[k]+H),E=!0;break;case"PageUp":H*=10;case"ArrowLeft":case"ArrowDown":ge(k,v[k]-H),E=!0;break;case"Home":ge(k,d),E=!0;break;case"End":ge(k,A),E=!0;break}E&&(r.preventDefault(),r.stopPropagation())}}function wl(r){if(!D){const k=r.target,H=Me(r);i(24,p=!0),se=!0,i(25,fe=!0),i(26,Y=dl(H)),_e=h=t(v[Y]),yl(),r.type==="touchstart"&&!k.matches(".pipVal")&&He(H)}}function pl(r){r.type==="touchend"&&Ie(),i(25,fe=!1)}function kl(r){be=!1,p&&r.target!==_&&!_.contains(r.target)&&i(24,p=!1)}function vl(r){D||se&&He(Me(r))}function Sl(r){if(!D){const k=r.target;se&&((k===_||_.contains(k))&&(i(24,p=!0),!ne(k)&&!k.matches(".pipVal")&&He(Me(r))),Ie())}se=!1,i(25,fe=!1)}function Al(r){se=!1,i(25,fe=!1)}function Vl(r){D||(r.target===_||_.contains(r.target))&&(be=!0)}function yl(){!D&&oe("start",{activeHandle:Y,value:_e,values:v.map(r=>t(r))})}function Ie(){!D&&oe("stop",{activeHandle:Y,startValue:_e,value:v[Y],values:v.map(r=>t(r))})}function El(){!D&&oe("change",{activeHandle:Y,startValue:_e,previousValue:typeof h>"u"?_e:h,value:v[Y],values:v.map(r=>t(r))})}function Pl(r){Pe[r?"unshift":"push"](()=>{_=r,i(1,_)})}return l.$$set=r=>{"slider"in r&&i(1,_=r.slider),"range"in r&&i(2,g=r.range),"pushy"in r&&i(43,m=r.pushy),"min"in r&&i(3,d=r.min),"max"in r&&i(4,A=r.max),"step"in r&&i(5,P=r.step),"values"in r&&i(0,v=r.values),"vertical"in r&&i(6,M=r.vertical),"float"in r&&i(7,C=r.float),"reversed"in r&&i(8,z=r.reversed),"hoverable"in r&&i(9,R=r.hoverable),"disabled"in r&&i(10,D=r.disabled),"pips"in r&&i(11,J=r.pips),"pipstep"in r&&i(12,X=r.pipstep),"all"in r&&i(13,$=r.all),"first"in r&&i(14,ee=r.first),"last"in r&&i(15,N=r.last),"rest"in r&&i(16,q=r.rest),"id"in r&&i(17,ae=r.id),"prefix"in r&&i(18,b=r.prefix),"suffix"in r&&i(19,le=r.suffix),"formatter"in r&&i(20,re=r.formatter),"handleFormatter"in r&&i(21,me=r.handleFormatter),"precision"in r&&i(44,te=r.precision),"springValues"in r&&i(45,ue=r.springValues)},l.$$.update=()=>{l.$$.dirty[0]&24&&i(48,a=function(r){return r<=d?d:r>=A?A:r}),l.$$.dirty[0]&56|l.$$.dirty[1]&139264&&i(47,t=function(r){if(r<=d)return d;if(r>=A)return A;let k=(r-d)%P,H=r-k;return Math.abs(k)*2>=P&&(H+=k>0?P:-P),H=a(H),parseFloat(H.toFixed(te))}),l.$$.dirty[0]&24|l.$$.dirty[1]&8192&&i(23,n=function(r){let k=(r-d)/(A-d)*100;return isNaN(k)||k<=0?0:k>=100?100:parseFloat(k.toFixed(te))}),l.$$.dirty[0]&12582937|l.$$.dirty[1]&114688&&(Array.isArray(v)||(i(0,v=[(A+d)/2]),console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")),i(0,v=he(v.map(r=>t(r)))),Q!==v.length?o(i(22,B=Rl(v.map(r=>n(r)),ue))):B.set(v.map(r=>n(r))),i(46,Q=v.length)),l.$$.dirty[0]&320&&i(28,s=M?z?"top":"bottom":z?"right":"left"),l.$$.dirty[0]&320&&i(27,f=M?z?"bottom":"top":z?"left":"right")},[v,_,g,d,A,P,M,C,z,R,D,J,X,$,ee,N,q,ae,b,le,re,me,B,n,p,fe,Y,f,s,u,ge,ml,gl,cl,bl,hl,wl,pl,kl,vl,Sl,Al,Vl,m,te,ue,Q,t,a,Pl]}class an extends Ve{constructor(e){super(),ye(this,e,nn,ln,Ee,{slider:1,range:2,pushy:43,min:3,max:4,step:5,values:0,vertical:6,float:7,reversed:8,hoverable:9,disabled:10,pips:11,pipstep:12,all:13,first:14,last:15,rest:16,id:17,prefix:18,suffix:19,formatter:20,handleFormatter:21,precision:44,springValues:45},null,[-1,-1,-1])}}function tn(l){let e,i,n,a,t,s,f,u,c,o,_;e=new Gl({props:{editable:l[7],absolute:!0}}),e.$on("clear",l[15]),e.$on("edit",l[28]);let g=l[9]==="edit"&&l[10]?.duration&&tl(l);return{c(){W(e.$$.fragment),i=G(),n=U("audio"),f=G(),g&&g.c(),u=pe(),n.controls=!0,w(n,"preload","metadata"),ze(n.src,a=l[1]?.data)||w(n,"src",a),w(n,"data-testid",t=`${l[2]}-audio`),w(n,"class","svelte-1thnwz")},m(m,d){Z(e,m,d),V(m,i,d),V(m,n,d),l[29](n),V(m,f,d),g&&g.m(m,d),V(m,u,d),c=!0,o||(_=[zl(s=Zl.call(null,n,{autoplay:l[6],crop_values:l[11]})),F(n,"play",l[25]),F(n,"pause",l[26]),F(n,"ended",l[18])],o=!0)},p(m,d){const A={};d[0]&128&&(A.editable=m[7]),e.$set(A),(!c||d[0]&2&&!ze(n.src,a=m[1]?.data))&&w(n,"src",a),(!c||d[0]&4&&t!==(t=`${m[2]}-audio`))&&w(n,"data-testid",t),s&&de(s.update)&&d[0]&2112&&s.update.call(null,{autoplay:m[6],crop_values:m[11]}),m[9]==="edit"&&m[10]?.duration?g?(g.p(m,d),d[0]&1536&&I(g,1)):(g=tl(m),g.c(),I(g,1),g.m(u.parentNode,u)):g&&(ke(),O(g,1,1,()=>{g=null}),ve())},i(m){c||(I(e.$$.fragment,m),I(g),c=!0)},o(m){O(e.$$.fragment,m),O(g),c=!1},d(m){m&&(y(i),y(n),y(f),y(u)),x(e,m),l[29](null),g&&g.d(m),o=!1,ce(_)}}}function sn(l){let e,i,n,a;const t=[rn,fn],s=[];function f(u,c){return u[4]==="microphone"?0:u[4]==="upload"?1:-1}return~(e=f(l))&&(i=s[e]=t[e](l)),{c(){i&&i.c(),n=pe()},m(u,c){~e&&s[e].m(u,c),V(u,n,c),a=!0},p(u,c){let o=e;e=f(u),e===o?~e&&s[e].p(u,c):(i&&(ke(),O(s[o],1,1,()=>{s[o]=null}),ve()),~e?(i=s[e],i?i.p(u,c):(i=s[e]=t[e](u),i.c()),I(i,1),i.m(n.parentNode,n)):i=null)},i(u){a||(I(i),a=!0)},o(u){O(i),a=!1},d(u){u&&y(n),~e&&s[e].d(u)}}}function tl(l){let e,i,n;function a(s){l[30](s)}let t={range:!0,min:0,max:100,step:1};return l[11]!==void 0&&(t.values=l[11]),e=new an({props:t}),Pe.push(()=>ul(e,"values",a)),e.$on("change",l[16]),{c(){W(e.$$.fragment)},m(s,f){Z(e,s,f),n=!0},p(s,f){const u={};!i&&f[0]&2048&&(i=!0,u.values=s[11],ol(()=>i=!1)),e.$set(u)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){O(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function fn(l){let e,i,n;function a(s){l[27](s)}let t={filetype:"audio/aac,audio/midi,audio/mpeg,audio/ogg,audio/wav,audio/x-wav,audio/opus,audio/webm,audio/flac,audio/vnd.rn-realaudio,audio/x-ms-wma,audio/x-aiff,audio/amr,audio/*",$$slots:{default:[un]},$$scope:{ctx:l}};return l[0]!==void 0&&(t.dragging=l[0]),e=new Jl({props:t}),Pe.push(()=>ul(e,"dragging",a)),e.$on("load",l[17]),{c(){W(e.$$.fragment)},m(s,f){Z(e,s,f),n=!0},p(s,f){const u={};f[1]&1&&(u.$$scope={dirty:f,ctx:s}),!i&&f[0]&1&&(i=!0,u.dragging=s[0],ol(()=>i=!1)),e.$set(u)},i(s){n||(I(e.$$.fragment,s),n=!0)},o(s){O(e.$$.fragment,s),n=!1},d(s){x(e,s)}}}function rn(l){let e,i,n,a;const t=[_n,on],s=[];function f(u,c){return u[8]?0:1}return i=f(l),n=s[i]=t[i](l),{c(){e=U("div"),n.c(),w(e,"class","mic-wrap svelte-1thnwz")},m(u,c){V(u,e,c),s[i].m(e,null),a=!0},p(u,c){let o=i;i=f(u),i===o?s[i].p(u,c):(ke(),O(s[o],1,1,()=>{s[o]=null}),ve(),n=s[i],n?n.p(u,c):(n=s[i]=t[i](u),n.c()),I(n,1),n.m(e,null))},i(u){a||(I(n),a=!0)},o(u){O(n),a=!1},d(u){u&&y(e),s[i].d()}}}function un(l){let e;const i=l[24].default,n=Dl(i,l,l[31],null);return{c(){n&&n.c()},m(a,t){n&&n.m(a,t),e=!0},p(a,t){n&&n.p&&(!e||t[1]&1)&&Nl(n,i,a,a[31],e?Ll(i,a[31],t,null):Bl(a[31]),null)},i(a){e||(I(n,a),e=!0)},o(a){O(n,a),e=!1},d(a){n&&n.d(a)}}}function on(l){let e,i;return e=new _l({props:{size:"sm",$$slots:{default:[dn]},$$scope:{ctx:l}}}),e.$on("click",l[13]),{c(){W(e.$$.fragment)},m(n,a){Z(e,n,a),i=!0},p(n,a){const t={};a[0]&4096|a[1]&1&&(t.$$scope={dirty:a,ctx:n}),e.$set(t)},i(n){i||(I(e.$$.fragment,n),i=!0)},o(n){O(e.$$.fragment,n),i=!1},d(n){x(e,n)}}}function _n(l){let e,i;return e=new _l({props:{size:"sm",$$slots:{default:[mn]},$$scope:{ctx:l}}}),e.$on("click",l[14]),{c(){W(e.$$.fragment)},m(n,a){Z(e,n,a),i=!0},p(n,a){const t={};a[0]&4096|a[1]&1&&(t.$$scope={dirty:a,ctx:n}),e.$set(t)},i(n){i||(I(e.$$.fragment,n),i=!0)},o(n){O(e.$$.fragment,n),i=!1},d(n){x(e,n)}}}function dn(l){let e,i,n=l[12]("audio.record_from_microphone")+"",a;return{c(){e=U("span"),e.innerHTML='<span class="dot svelte-1thnwz"></span>',i=G(),a=K(n),w(e,"class","record-icon svelte-1thnwz")},m(t,s){V(t,e,s),V(t,i,s),V(t,a,s)},p(t,s){s[0]&4096&&n!==(n=t[12]("audio.record_from_microphone")+"")&&j(a,n)},d(t){t&&(y(e),y(i),y(a))}}}function mn(l){let e,i,n=l[12]("audio.stop_recording")+"",a;return{c(){e=U("span"),e.innerHTML='<span class="pinger svelte-1thnwz"></span> <span class="dot svelte-1thnwz"></span>',i=G(),a=K(n),w(e,"class","record-icon svelte-1thnwz")},m(t,s){V(t,e,s),V(t,i,s),V(t,a,s)},p(t,s){s[0]&4096&&n!==(n=t[12]("audio.stop_recording")+"")&&j(a,n)},d(t){t&&(y(e),y(i),y(a))}}}function gn(l){let e,i,n,a,t,s;e=new Ql({props:{show_label:l[3],Icon:Wl,float:l[4]==="upload"&&l[1]===null,label:l[2]||l[12]("audio.audio")}});const f=[sn,tn],u=[];function c(o,_){return o[1]===null||o[5]?0:1}return n=c(l),a=u[n]=f[n](l),{c(){W(e.$$.fragment),i=G(),a.c(),t=pe()},m(o,_){Z(e,o,_),V(o,i,_),u[n].m(o,_),V(o,t,_),s=!0},p(o,_){const g={};_[0]&8&&(g.show_label=o[3]),_[0]&18&&(g.float=o[4]==="upload"&&o[1]===null),_[0]&4100&&(g.label=o[2]||o[12]("audio.audio")),e.$set(g);let m=n;n=c(o),n===m?u[n].p(o,_):(ke(),O(u[m],1,1,()=>{u[m]=null}),ve(),a=u[n],a?a.p(o,_):(a=u[n]=f[n](o),a.c()),I(a,1),a.m(t.parentNode,t))},i(o){s||(I(e.$$.fragment,o),I(a),s=!0)},o(o){O(e.$$.fragment,o),O(a),s=!1},d(o){o&&(y(i),y(t)),x(e,o),u[n].d(o)}}}const cn=500,sl=44;function bn(l){return new Promise((e,i)=>{let n=new FileReader;n.onerror=i,n.onload=()=>e(n.result),n.readAsDataURL(l)})}function hn(l,e,i){let n;Ul(l,Fl,h=>i(12,n=h));let{$$slots:a={},$$scope:t}=e,{value:s=null}=e,{label:f}=e,{show_label:u=!0}=e,{name:c=""}=e,{source:o}=e,{pending:_=!1}=e,{streaming:g=!1}=e,{autoplay:m=!1}=e,{show_edit_button:d=!0}=e,A=!1,P,v="",M,C=[],z=!1,R,D=!1,J=[0,100],X=[],$;function ee(){$=[Fe(()=>import("./module-b90d7e57.js"),["./module-b90d7e57.js","./index-d50163a8.js","./index-83fff607.css"],import.meta.url),Fe(()=>import("./module-1791af61.js"),[],import.meta.url)]}g&&ee();const N=rl(),q=async(h,B)=>{let ne=new Blob(h,{type:"audio/wav"});i(1,s={data:await bn(ne),name:"audio.wav"}),N(B,s)};async function ae(){let h;try{h=await navigator.mediaDevices.getUserMedia({audio:!0})}catch(B){if(B instanceof DOMException&&B.name=="NotAllowedError"){N("error",n("audio.allow_recording_access"));return}throw B}if(h!=null){if(g){const[{MediaRecorder:B,register:ne},{connect:he}]=await Promise.all($);await ne(await he()),P=new B(h,{mimeType:"audio/wav"}),P.addEventListener("dataavailable",b)}else P=new MediaRecorder(h),P.addEventListener("dataavailable",B=>{X.push(B.data)}),P.addEventListener("stop",async()=>{i(8,A=!1),await q(X,"change"),await q(X,"stop_recording"),X=[]});D=!0}}async function b(h){let B=await h.data.arrayBuffer(),ne=new Uint8Array(B);if(M||(i(21,M=new Uint8Array(B.slice(0,sl))),ne=new Uint8Array(B.slice(sl))),_)C.push(ne);else{let he=[M].concat(C,[ne]);q(he,"stream"),i(22,C=[])}}async function le(){i(8,A=!0),N("start_recording"),D||await ae(),i(21,M=void 0),g?P.start(cn):P.start()}Ol(()=>{P&&P.state!=="inactive"&&P.stop()});function re(){P.stop(),g&&(i(8,A=!1),N("stop_recording"),_&&i(23,z=!0))}function me(){N("change",null),N("clear"),i(9,v=""),i(1,s=null)}function te({detail:{values:h}}){s&&(N("change",{data:s.data,name:c,crop_min:h[0],crop_max:h[1]}),N("edit"))}function ue({detail:h}){i(1,s=h),N("change",{data:h.data,name:h.name}),N("upload",h)}function oe(){N("stop"),N("end")}let{dragging:Q=!1}=e;function p(h){Oe.call(this,l,h)}function se(h){Oe.call(this,l,h)}function fe(h){Q=h,i(0,Q)}const be=()=>i(9,v="edit");function Y(h){Pe[h?"unshift":"push"](()=>{R=h,i(10,R)})}function _e(h){J=h,i(11,J)}return l.$$set=h=>{"value"in h&&i(1,s=h.value),"label"in h&&i(2,f=h.label),"show_label"in h&&i(3,u=h.show_label),"name"in h&&i(19,c=h.name),"source"in h&&i(4,o=h.source),"pending"in h&&i(20,_=h.pending),"streaming"in h&&i(5,g=h.streaming),"autoplay"in h&&i(6,m=h.autoplay),"show_edit_button"in h&&i(7,d=h.show_edit_button),"dragging"in h&&i(0,Q=h.dragging),"$$scope"in h&&i(31,t=h.$$scope)},l.$$.update=()=>{if(l.$$.dirty[0]&15728640&&z&&_===!1&&(i(23,z=!1),M&&C)){let h=[M].concat(C);i(22,C=[]),q(h,"stream")}l.$$.dirty[0]&1&&N("drag",Q)},[Q,s,f,u,o,g,m,d,A,v,R,J,n,le,re,me,te,ue,oe,c,_,M,C,z,a,p,se,fe,be,Y,_e,t]}class wn extends Ve{constructor(e){super(),ye(this,e,hn,gn,Ee,{value:1,label:2,show_label:3,name:19,source:4,pending:20,streaming:5,autoplay:6,show_edit_button:7,dragging:0},null,[-1,-1])}}function pn(l){let e,i;return e=new Yl({props:{type:"audio"}}),{c(){W(e.$$.fragment)},m(n,a){Z(e,n,a),i=!0},p:Se,i(n){i||(I(e.$$.fragment,n),i=!0)},o(n){O(e.$$.fragment,n),i=!1},d(n){x(e,n)}}}function kn(l){let e,i,n,a;const t=[l[1]];let s={};for(let f=0;f<t.length;f+=1)s=Tl(s,t[f]);return e=new Cl({props:s}),n=new wn({props:{label:l[7],show_label:l[8],value:l[17],name:l[5],source:l[6],pending:l[9],streaming:l[10],autoplay:l[14],show_edit_button:l[15],$$slots:{default:[pn]},$$scope:{ctx:l}}}),n.$on("change",l[22]),n.$on("stream",l[23]),n.$on("drag",l[24]),n.$on("edit",l[25]),n.$on("play",l[26]),n.$on("pause",l[27]),n.$on("stop",l[28]),n.$on("end",l[29]),n.$on("start_recording",l[30]),n.$on("stop_recording",l[31]),n.$on("upload",l[32]),n.$on("clear",l[33]),n.$on("error",l[34]),{c(){W(e.$$.fragment),i=G(),W(n.$$.fragment)},m(f,u){Z(e,f,u),V(f,i,u),Z(n,f,u),a=!0},p(f,u){const c=u[0]&2?Kl(t,[jl(f[1])]):{};e.$set(c);const o={};u[0]&128&&(o.label=f[7]),u[0]&256&&(o.show_label=f[8]),u[0]&131072&&(o.value=f[17]),u[0]&32&&(o.name=f[5]),u[0]&64&&(o.source=f[6]),u[0]&512&&(o.pending=f[9]),u[0]&1024&&(o.streaming=f[10]),u[0]&16384&&(o.autoplay=f[14]),u[0]&32768&&(o.show_edit_button=f[15]),u[1]&16&&(o.$$scope={dirty:u,ctx:f}),n.$set(o)},i(f){a||(I(e.$$.fragment,f),I(n.$$.fragment,f),a=!0)},o(f){O(e.$$.fragment,f),O(n.$$.fragment,f),a=!1},d(f){f&&y(i),x(e,f),x(n,f)}}}function vn(l){let e,i;return e=new Xl({props:{variant:l[0]===null&&l[6]==="upload"?"dashed":"solid",border_mode:l[18]?"focus":"base",padding:!1,elem_id:l[2],elem_classes:l[3],visible:l[4],container:l[11],scale:l[12],min_width:l[13],$$slots:{default:[kn]},$$scope:{ctx:l}}}),{c(){W(e.$$.fragment)},m(n,a){Z(e,n,a),i=!0},p(n,a){const t={};a[0]&65&&(t.variant=n[0]===null&&n[6]==="upload"?"dashed":"solid"),a[0]&262144&&(t.border_mode=n[18]?"focus":"base"),a[0]&4&&(t.elem_id=n[2]),a[0]&8&&(t.elem_classes=n[3]),a[0]&16&&(t.visible=n[4]),a[0]&2048&&(t.container=n[11]),a[0]&4096&&(t.scale=n[12]),a[0]&8192&&(t.min_width=n[13]),a[0]&509923|a[1]&16&&(t.$$scope={dirty:a,ctx:n}),e.$set(t)},i(n){i||(I(e.$$.fragment,n),i=!0)},o(n){O(e.$$.fragment,n),i=!1},d(n){x(e,n)}}}function Sn(l,e,i){let{elem_id:n=""}=e,{elem_classes:a=[]}=e,{visible:t=!0}=e,{value:s=null}=e,{name:f}=e,{source:u}=e,{label:c}=e,{root:o}=e,{show_label:_}=e,{pending:g}=e,{streaming:m}=e,{root_url:d}=e,{container:A=!0}=e,{scale:P=null}=e,{min_width:v=void 0}=e,{loading_status:M}=e,{autoplay:C=!1}=e,{show_edit_button:z=!0}=e,{gradio:R}=e,D=null,J,X;const $=({detail:p})=>i(0,s=p),ee=({detail:p})=>{i(0,s=p),R.dispatch("stream",s)},N=({detail:p})=>i(18,X=p),q=()=>R.dispatch("edit"),ae=()=>R.dispatch("play"),b=()=>R.dispatch("pause"),le=()=>R.dispatch("stop"),re=()=>R.dispatch("end"),me=()=>R.dispatch("start_recording"),te=()=>R.dispatch("stop_recording"),ue=()=>R.dispatch("upload"),oe=()=>R.dispatch("clear"),Q=({detail:p})=>{i(1,M=M||{}),i(1,M.status="error",M),R.dispatch("error",p)};return l.$$set=p=>{"elem_id"in p&&i(2,n=p.elem_id),"elem_classes"in p&&i(3,a=p.elem_classes),"visible"in p&&i(4,t=p.visible),"value"in p&&i(0,s=p.value),"name"in p&&i(5,f=p.name),"source"in p&&i(6,u=p.source),"label"in p&&i(7,c=p.label),"root"in p&&i(19,o=p.root),"show_label"in p&&i(8,_=p.show_label),"pending"in p&&i(9,g=p.pending),"streaming"in p&&i(10,m=p.streaming),"root_url"in p&&i(20,d=p.root_url),"container"in p&&i(11,A=p.container),"scale"in p&&i(12,P=p.scale),"min_width"in p&&i(13,v=p.min_width),"loading_status"in p&&i(1,M=p.loading_status),"autoplay"in p&&i(14,C=p.autoplay),"show_edit_button"in p&&i(15,z=p.show_edit_button),"gradio"in p&&i(16,R=p.gradio)},l.$$.update=()=>{l.$$.dirty[0]&1572865&&i(17,J=ql(s,o,d)),l.$$.dirty[0]&2162689&&JSON.stringify(s)!==JSON.stringify(D)&&(i(21,D=s),R.dispatch("change"))},[s,M,n,a,t,f,u,c,_,g,m,A,P,v,C,z,R,J,X,o,d,D,$,ee,N,q,ae,b,le,re,me,te,ue,oe,Q]}class An extends Ve{constructor(e){super(),ye(this,e,Sn,vn,Ee,{elem_id:2,elem_classes:3,visible:4,value:0,name:5,source:6,label:7,root:19,show_label:8,pending:9,streaming:10,root_url:20,container:11,scale:12,min_width:13,loading_status:1,autoplay:14,show_edit_button:15,gradio:16},null,[-1,-1])}get elem_id(){return this.$$.ctx[2]}set elem_id(e){this.$$set({elem_id:e}),L()}get elem_classes(){return this.$$.ctx[3]}set elem_classes(e){this.$$set({elem_classes:e}),L()}get visible(){return this.$$.ctx[4]}set visible(e){this.$$set({visible:e}),L()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),L()}get name(){return this.$$.ctx[5]}set name(e){this.$$set({name:e}),L()}get source(){return this.$$.ctx[6]}set source(e){this.$$set({source:e}),L()}get label(){return this.$$.ctx[7]}set label(e){this.$$set({label:e}),L()}get root(){return this.$$.ctx[19]}set root(e){this.$$set({root:e}),L()}get show_label(){return this.$$.ctx[8]}set show_label(e){this.$$set({show_label:e}),L()}get pending(){return this.$$.ctx[9]}set pending(e){this.$$set({pending:e}),L()}get streaming(){return this.$$.ctx[10]}set streaming(e){this.$$set({streaming:e}),L()}get root_url(){return this.$$.ctx[20]}set root_url(e){this.$$set({root_url:e}),L()}get container(){return this.$$.ctx[11]}set container(e){this.$$set({container:e}),L()}get scale(){return this.$$.ctx[12]}set scale(e){this.$$set({scale:e}),L()}get min_width(){return this.$$.ctx[13]}set min_width(e){this.$$set({min_width:e}),L()}get loading_status(){return this.$$.ctx[1]}set loading_status(e){this.$$set({loading_status:e}),L()}get autoplay(){return this.$$.ctx[14]}set autoplay(e){this.$$set({autoplay:e}),L()}get show_edit_button(){return this.$$.ctx[15]}set show_edit_button(e){this.$$set({show_edit_button:e}),L()}get gradio(){return this.$$.ctx[16]}set gradio(e){this.$$set({gradio:e}),L()}}const Fn=An;export{Fn as default};
//# sourceMappingURL=index-2104d16b.js.map
