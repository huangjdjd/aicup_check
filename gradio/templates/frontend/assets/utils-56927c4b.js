import{S as m,e as p,s as d,f as c,g as e,h as f,j as u,n as o,k as h}from"./index-d50163a8.js";function v(r){let t,n,a,i;return{c(){t=c("svg"),n=c("path"),a=c("circle"),i=c("circle"),e(n,"d","M9 18V5l12-2v13"),e(a,"cx","6"),e(a,"cy","18"),e(a,"r","3"),e(i,"cx","18"),e(i,"cy","16"),e(i,"r","3"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"width","100%"),e(t,"height","100%"),e(t,"viewBox","0 0 24 24"),e(t,"fill","none"),e(t,"stroke","currentColor"),e(t,"stroke-width","1.5"),e(t,"stroke-linecap","round"),e(t,"stroke-linejoin","round"),e(t,"class","feather feather-music")},m(s,l){f(s,t,l),u(t,n),u(t,a),u(t,i)},p:o,i:o,o,d(s){s&&h(t)}}}class w extends m{constructor(t){super(),p(this,t,null,v,d,{})}}function k(r,{crop_values:t,autoplay:n}={}){function a(){if(t===void 0)return;const s=t[0]/100*r.duration,l=t[1]/100*r.duration;r.currentTime<s&&(r.currentTime=s),r.currentTime>l&&(r.currentTime=s,r.pause())}async function i(){n&&(r.pause(),await r.play())}return r.addEventListener("loadeddata",i),r.addEventListener("timeupdate",a),{destroy(){r.removeEventListener("loadeddata",i),r.removeEventListener("timeupdate",a)}}}export{w as M,k as l};
//# sourceMappingURL=utils-56927c4b.js.map