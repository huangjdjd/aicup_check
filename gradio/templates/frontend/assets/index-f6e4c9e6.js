import{S as U,e as C,s as E,F as I,G as S,w as q,u as F,H as G,a0 as H,a1 as T,ar as X,as as j,t as D,h as J,x as K,k as L,a7 as M}from"./index-d50163a8.js";import{U as N}from"./UploadButton-cf4f6d95.js";import{d as O}from"./Button-7dd65143.js";function P(t){let i=t[11](t[3])+"",l;return{c(){l=D(i)},m(n,a){J(n,l,a)},p(n,a){a&2056&&i!==(i=n[11](n[3])+"")&&K(l,i)},d(n){n&&L(l)}}}function Q(t){let i,l;return i=new N({props:{elem_id:t[0],elem_classes:t[1],visible:t[2],file_count:t[4],file_types:t[5],size:t[6],scale:t[7],min_width:t[8],variant:t[9],label:t[3],$$slots:{default:[P]},$$scope:{ctx:t}}}),i.$on("click",t[15]),i.$on("load",t[12]),{c(){I(i.$$.fragment)},m(n,a){S(i,n,a),l=!0},p(n,[a]){const s={};a&1&&(s.elem_id=n[0]),a&2&&(s.elem_classes=n[1]),a&4&&(s.visible=n[2]),a&16&&(s.file_count=n[4]),a&32&&(s.file_types=n[5]),a&64&&(s.size=n[6]),a&128&&(s.scale=n[7]),a&256&&(s.min_width=n[8]),a&512&&(s.variant=n[9]),a&8&&(s.label=n[3]),a&133128&&(s.$$scope={dirty:a,ctx:n}),i.$set(s)},i(n){l||(q(i.$$.fragment,n),l=!0)},o(n){F(i.$$.fragment,n),l=!1},d(n){G(i,n)}}}function R(t,i,l){let n;H(t,T,e=>l(11,n=e));let{elem_id:a=""}=i,{elem_classes:s=[]}=i,{visible:m=!0}=i,{label:b}=i,{value:_}=i,{file_count:r}=i,{file_types:h=[]}=i,{root:c}=i,{size:g="lg"}=i,{scale:w=null}=i,{min_width:d=void 0}=i,{variant:v="secondary"}=i,{gradio:u}=i;const z=X("upload_files")??j;async function A({detail:e}){l(13,_=e),await M();let B=(Array.isArray(e)?e:[e]).map(o=>o.blob);z(c,B).then(async o=>{o.error?(Array.isArray(e)?e:[e]).forEach(async(f,y)=>{f.data=await O(f.blob),f.blob=void 0}):(Array.isArray(e)?e:[e]).forEach((f,y)=>{o.files&&(f.orig_name=f.name,f.name=o.files[y],f.is_file=!0,f.blob=void 0)}),u.dispatch("change",_),u.dispatch("upload",e)})}const k=()=>u.dispatch("click");return t.$$set=e=>{"elem_id"in e&&l(0,a=e.elem_id),"elem_classes"in e&&l(1,s=e.elem_classes),"visible"in e&&l(2,m=e.visible),"label"in e&&l(3,b=e.label),"value"in e&&l(13,_=e.value),"file_count"in e&&l(4,r=e.file_count),"file_types"in e&&l(5,h=e.file_types),"root"in e&&l(14,c=e.root),"size"in e&&l(6,g=e.size),"scale"in e&&l(7,w=e.scale),"min_width"in e&&l(8,d=e.min_width),"variant"in e&&l(9,v=e.variant),"gradio"in e&&l(10,u=e.gradio)},[a,s,m,b,r,h,g,w,d,v,u,n,A,_,c,k]}class V extends U{constructor(i){super(),C(this,i,R,Q,E,{elem_id:0,elem_classes:1,visible:2,label:3,value:13,file_count:4,file_types:5,root:14,size:6,scale:7,min_width:8,variant:9,gradio:10})}}const x=V;export{x as default};
//# sourceMappingURL=index-f6e4c9e6.js.map
