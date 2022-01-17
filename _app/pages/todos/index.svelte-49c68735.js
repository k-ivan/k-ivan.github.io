import{S as ae,i as oe,s as ne,e as E,k as U,c as T,a as z,n as I,d as w,b as n,D as Y,f as Z,E as h,a0 as q,a1 as G,a2 as le,a3 as se,a4 as re,a5 as ie,a6 as $,T as ue,t as de,Z as ce,g as _e,a7 as fe,w as he,x as pe,u as me,a8 as ve,a9 as x,r as be,aa as ge,F as we}from"../../chunks/vendor-8c8d27f9.js";function C(u,{pending:t,error:e,result:a}){let d;async function k(p){const _=d={};p.preventDefault();const v=new FormData(u);t&&t(v,u);try{const r=await fetch(u.action,{method:u.method,headers:{accept:"application/json"},body:v});if(_!==d)return;r.ok?a(r,u):e?e(r,null,u):console.error(await r.text())}catch(r){if(e)e(null,r,u);else throw r}}return u.addEventListener("submit",k),{destroy(){u.removeEventListener("submit",k)}}}function ee(u,t,e){const a=u.slice();return a[6]=t[e],a[7]=t,a[8]=e,a}function te(u,t){let e,a,d,k,p,_,v,r,o,m,f,b,D,M,O,s,i,l,j,R,F,B,L,N,V,A=we,y,H,J;function K(...g){return t[3](t[6],t[7],t[8],...g)}function Q(){return t[4](t[6],t[7],t[8])}function W(){return t[5](t[6])}return{key:u,first:null,c(){e=E("div"),a=E("form"),d=E("input"),p=U(),_=E("button"),m=U(),f=E("form"),b=E("input"),M=U(),O=E("button"),i=U(),l=E("form"),j=E("button"),L=U(),this.h()},l(g){e=T(g,"DIV",{class:!0});var c=z(e);a=T(c,"FORM",{action:!0,method:!0});var P=z(a);d=T(P,"INPUT",{type:!0,name:!0,class:!0}),p=I(P),_=T(P,"BUTTON",{class:!0,"aria-label":!0}),z(_).forEach(w),P.forEach(w),m=I(c),f=T(c,"FORM",{class:!0,action:!0,method:!0});var S=z(f);b=T(S,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),M=I(S),O=T(S,"BUTTON",{class:!0,"aria-label":!0}),z(O).forEach(w),S.forEach(w),i=I(c),l=T(c,"FORM",{action:!0,method:!0});var X=z(l);j=T(X,"BUTTON",{class:!0,"aria-label":!0}),z(j).forEach(w),X.forEach(w),L=I(c),c.forEach(w),this.h()},h(){n(d,"type","hidden"),n(d,"name","done"),d.value=k=t[6].done?"":"true",n(d,"class","svelte-wd3zo1"),n(_,"class","toggle svelte-wd3zo1"),n(_,"aria-label",v="Mark todo as "+(t[6].done?"not done":"done")),n(a,"action",r="/todos/"+t[6].uid+".json?_method=patch"),n(a,"method","post"),n(b,"aria-label","Edit todo"),n(b,"type","text"),n(b,"name","text"),b.value=D=t[6].text,n(b,"class","svelte-wd3zo1"),n(O,"class","save svelte-wd3zo1"),n(O,"aria-label","Save todo"),n(f,"class","text svelte-wd3zo1"),n(f,"action",s="/todos/"+t[6].uid+".json?_method=patch"),n(f,"method","post"),n(j,"class","delete svelte-wd3zo1"),n(j,"aria-label","Delete todo"),j.disabled=R=t[6].pending_delete,n(l,"action",F="/todos/"+t[6].uid+".json?_method=delete"),n(l,"method","post"),n(e,"class","todo svelte-wd3zo1"),Y(e,"done",t[6].done),this.first=e},m(g,c){Z(g,e,c),h(e,a),h(a,d),h(a,p),h(a,_),h(e,m),h(e,f),h(f,b),h(f,M),h(f,O),h(e,i),h(e,l),h(l,j),h(e,L),y=!0,H||(J=[q(o=C.call(null,a,{pending:K,result:t[1]})),q(C.call(null,f,{result:t[1]})),q(B=C.call(null,l,{pending:Q,result:W}))],H=!0)},p(g,c){t=g,(!y||c&1&&k!==(k=t[6].done?"":"true"))&&(d.value=k),(!y||c&1&&v!==(v="Mark todo as "+(t[6].done?"not done":"done")))&&n(_,"aria-label",v),(!y||c&1&&r!==(r="/todos/"+t[6].uid+".json?_method=patch"))&&n(a,"action",r),o&&G(o.update)&&c&1&&o.update.call(null,{pending:K,result:t[1]}),(!y||c&1&&D!==(D=t[6].text)&&b.value!==D)&&(b.value=D),(!y||c&1&&s!==(s="/todos/"+t[6].uid+".json?_method=patch"))&&n(f,"action",s),(!y||c&1&&R!==(R=t[6].pending_delete))&&(j.disabled=R),(!y||c&1&&F!==(F="/todos/"+t[6].uid+".json?_method=delete"))&&n(l,"action",F),B&&G(B.update)&&c&1&&B.update.call(null,{pending:Q,result:W}),c&1&&Y(e,"done",t[6].done)},r(){V=e.getBoundingClientRect()},f(){le(e),A(),se(e,V)},a(){A(),A=re(e,V,ve,{duration:200})},i(g){y||(g&&ie(()=>{N||(N=$(e,x,{start:.7},!0)),N.run(1)}),y=!0)},o(g){g&&(N||(N=$(e,x,{start:.7},!1)),N.run(0)),y=!1},d(g){g&&w(e),g&&N&&N.end(),H=!1,ue(J)}}}function ke(u){let t,e,a,d,k,p,_,v,r,o=[],m=new Map,f,b,D,M=u[0];const O=s=>s[6].uid;for(let s=0;s<M.length;s+=1){let i=ee(u,M,s),l=O(i);m.set(l,o[s]=te(l,i))}return{c(){t=U(),e=E("div"),a=E("h1"),d=de("Todos"),k=U(),p=E("form"),_=E("input"),r=U();for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){ce('[data-svelte="svelte-181o7gf"]',document.head).forEach(w),t=I(s),e=T(s,"DIV",{class:!0});var l=z(e);a=T(l,"H1",{});var j=z(a);d=_e(j,"Todos"),j.forEach(w),k=I(l),p=T(l,"FORM",{class:!0,action:!0,method:!0});var R=z(p);_=T(R,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),R.forEach(w),r=I(l);for(let F=0;F<o.length;F+=1)o[F].l(l);l.forEach(w),this.h()},h(){document.title="Todos",n(_,"name","text"),n(_,"aria-label","Add todo"),n(_,"placeholder","+ tap to add a todo"),n(_,"class","svelte-wd3zo1"),n(p,"class","new svelte-wd3zo1"),n(p,"action","/todos.json"),n(p,"method","post"),n(e,"class","todos svelte-wd3zo1")},m(s,i){Z(s,t,i),Z(s,e,i),h(e,a),h(a,d),h(e,k),h(e,p),h(p,_),h(e,r);for(let l=0;l<o.length;l+=1)o[l].m(e,null);f=!0,b||(D=q(v=C.call(null,p,{result:u[2]})),b=!0)},p(s,[i]){if(v&&G(v.update)&&i&1&&v.update.call(null,{result:s[2]}),i&3){M=s[0],be();for(let l=0;l<o.length;l+=1)o[l].r();o=fe(o,i,O,1,s,M,m,e,ge,te,null,ee);for(let l=0;l<o.length;l+=1)o[l].a();he()}},i(s){if(!f){for(let i=0;i<M.length;i+=1)pe(o[i]);f=!0}},o(s){for(let i=0;i<o.length;i+=1)me(o[i]);f=!1},d(s){s&&w(t),s&&w(e);for(let i=0;i<o.length;i+=1)o[i].d();b=!1,D()}}}const je=async({fetch:u})=>{await new Promise(d=>setTimeout(d,15e3));const e=await u("/todos.json");if(e.ok)return{props:{todos:await e.json()}};const{message:a}=await e.json();return{error:new Error(a)}};function Ee(u,t,e){let{todos:a}=t;async function d(r){const o=await r.json();e(0,a=a.map(m=>m.uid===o.uid?o:m))}const k=async(r,o)=>{const m=await r.json();e(0,a=[...a,m]),o.reset()},p=(r,o,m,f)=>{e(0,o[m].done=!!f.get("done"),a)},_=(r,o,m)=>e(0,o[m].pending_delete=!0,a),v=r=>{e(0,a=a.filter(o=>o.uid!==r.uid))};return u.$$set=r=>{"todos"in r&&e(0,a=r.todos)},[a,d,k,p,_,v]}class ye extends ae{constructor(t){super();oe(this,t,Ee,ke,ne,{todos:0})}}export{ye as default,je as load};