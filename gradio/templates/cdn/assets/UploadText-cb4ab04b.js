import{S as y,e as S,s as U,m as g,t as d,o as x,g as h,h as j,j as s,x as f,n as b,k as q,a0 as w,a1 as C}from"./index-40573ec4.js";import"./Button-20e55939.js";function T(t){let e,l=t[1](t[2][t[0]])+"",n,i,o,p,u=t[1]("common.or")+"",c,v,k,r=t[1]("upload_text.click_to_upload")+"",m;return{c(){e=g("div"),n=d(l),i=x(),o=g("span"),p=d("- "),c=d(u),v=d(" -"),k=x(),m=d(r),h(o,"class","or svelte-1ck5uk8"),h(e,"class","wrap svelte-1ck5uk8")},m(a,_){j(a,e,_),s(e,n),s(e,i),s(e,o),s(o,p),s(o,c),s(o,v),s(e,k),s(e,m)},p(a,[_]){_&3&&l!==(l=a[1](a[2][a[0]])+"")&&f(n,l),_&2&&u!==(u=a[1]("common.or")+"")&&f(c,u),_&2&&r!==(r=a[1]("upload_text.click_to_upload")+"")&&f(m,r)},i:b,o:b,d(a){a&&q(e)}}}function X(t,e,l){let n;w(t,C,p=>l(1,n=p));let{type:i="file"}=e;const o={image:"upload_text.drop_image",video:"upload_text.drop_video",audio:"upload_text.drop_audio",file:"upload_text.drop_file",csv:"upload_text.drop_csv"};return t.$$set=p=>{"type"in p&&l(0,i=p.type)},[i,n,o]}class B extends y{constructor(e){super(),S(this,e,X,T,U,{type:0})}}export{B as U};
//# sourceMappingURL=UploadText-cb4ab04b.js.map
