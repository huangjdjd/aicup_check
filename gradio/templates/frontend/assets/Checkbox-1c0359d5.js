import{S as k,e as p,s as v,m as h,o as C,t as j,g as _,N as b,h as S,j as o,p as r,x as T,n as m,k as q,B as x,C as y,al as B}from"./index-d50163a8.js";function D(a){let t,e,n,c,f,u,d;return{c(){t=h("label"),e=h("input"),n=C(),c=h("span"),f=j(a[2]),e.disabled=a[1],_(e,"type","checkbox"),_(e,"name","test"),_(e,"data-testid","checkbox"),_(e,"class","svelte-1ojmf70"),_(c,"class","ml-2 svelte-1ojmf70"),_(t,"class","svelte-1ojmf70"),b(t,"disabled",a[1])},m(l,i){S(l,t,i),o(t,e),e.checked=a[0],o(t,n),o(t,c),o(c,f),u||(d=[r(e,"change",a[5]),r(e,"input",a[6])],u=!0)},p(l,[i]){i&2&&(e.disabled=l[1]),i&1&&(e.checked=l[0]),i&4&&T(f,l[2]),i&2&&b(t,"disabled",l[1])},i:m,o:m,d(l){l&&q(t),u=!1,x(d)}}}function E(a,t,e){let{value:n}=t,{value_is_output:c=!1}=t,{disabled:f=!1}=t,{label:u}=t;const d=y();function l(){d("change",n),c||d("input")}B(()=>{e(4,c=!1)});function i(){n=this.checked,e(0,n)}const g=s=>{e(0,n=s.currentTarget.checked),d("select",{index:0,value:u,selected:s.currentTarget.checked})};return a.$$set=s=>{"value"in s&&e(0,n=s.value),"value_is_output"in s&&e(4,c=s.value_is_output),"disabled"in s&&e(1,f=s.disabled),"label"in s&&e(2,u=s.label)},a.$$.update=()=>{a.$$.dirty&1&&l()},[n,f,u,d,c,i,g]}class U extends k{constructor(t){super(),p(this,t,E,D,v,{value:0,value_is_output:4,disabled:1,label:2})}}export{U as C};
//# sourceMappingURL=Checkbox-1c0359d5.js.map
