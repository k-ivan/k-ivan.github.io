import{C as te,S as H,i as F,s as P,e as p,c as b,a as $,d as _,b as i,D as R,f as D,E as f,F as k,G as se,H as C,A as ae,I as re,J as oe,K as ne,k as V,t as M,n as N,g as S,L as W,j as L,m as O,o as j,x as w,u as A,M as le,v as q,N as ie,O as X,w as ce,P as ue,Q as ve,R as fe,T as de,U as _e,r as he,V as Z}from"../chunks/vendor-8c8d27f9.js";const G=te(null);function ge(n){let e,t,s;return{c(){e=p("div"),t=p("div"),this.h()},l(o){e=b(o,"DIV",{class:!0,style:!0});var r=$(e);t=b(r,"DIV",{class:!0}),$(t).forEach(_),r.forEach(_),this.h()},h(){i(t,"class","navigation-progress__inner svelte-v0s5h1"),i(e,"class","navigation-progress svelte-v0s5h1"),i(e,"style",s=`--progress: ${n[1]}`),R(e,"navigation-progress--bottom",n[0]==="bottom")},m(o,r){D(o,e,r),f(e,t)},p(o,[r]){r&2&&s!==(s=`--progress: ${o[1]}`)&&i(e,"style",s),r&1&&R(e,"navigation-progress--bottom",o[0]==="bottom")},i:k,o:k,d(o){o&&_(e)}}}function me(n,e,t){let s,{position:o="top"}=e,{duration:r=300}=e;const m=se(0,{duration:r,easing:oe});C(n,m,c=>t(1,s=c));const h={interval:null,numRandom(c=.1){return Math.random()*c},inc(c){this.resetInterval();let g=0;const l=function(){g+=this.numRandom(),g<.99?c.set(g):clearInterval(this.interval)}.bind(this);l(),this.interval=setInterval(l,500)},done(c){this.resetInterval(),c.set(1)},resetInterval(){this.interval&&clearInterval(this.interval)}},u=G.subscribe(c=>{c==="loaded"&&h.done(m)});return ae(()=>{h.inc(m)}),re(()=>{h.resetInterval(),u()}),n.$$set=c=>{"position"in c&&t(0,o=c.position),"duration"in c&&t(3,r=c.duration)},[o,s,m,r]}class pe extends H{constructor(e){super();F(this,e,me,ge,P,{position:0,duration:3})}}const be=()=>{const n=ne("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session}},$e={subscribe(n){return be().page.subscribe(n)}};function ze(n){let e,t,s,o,r,m,h,u,c,g,l,z,d,a,v,y;return{c(){e=p("header"),t=p("div"),s=p("a"),o=p("img"),m=V(),h=p("nav"),u=p("ul"),c=p("li"),g=p("a"),l=M("Home"),z=V(),d=p("div"),a=p("a"),v=p("img"),this.h()},l(E){e=b(E,"HEADER",{class:!0});var I=$(e);t=b(I,"DIV",{class:!0});var T=$(t);s=b(T,"A",{href:!0,class:!0});var U=$(s);o=b(U,"IMG",{src:!0,alt:!0,class:!0}),U.forEach(_),T.forEach(_),m=N(I),h=b(I,"NAV",{class:!0});var B=$(h);u=b(B,"UL",{class:!0});var J=$(u);c=b(J,"LI",{class:!0});var K=$(c);g=b(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=$(g);l=S(Q,"Home"),Q.forEach(_),K.forEach(_),J.forEach(_),B.forEach(_),z=N(I),d=b(I,"DIV",{class:!0});var Y=$(d);a=b(Y,"A",{href:!0,class:!0});var x=$(a);v=b(x,"IMG",{src:!0,alt:!0,class:!0}),x.forEach(_),Y.forEach(_),I.forEach(_),this.h()},h(){W(o.src,r="/logo.svg")||i(o,"src",r),i(o,"alt","ik logo"),i(o,"class","svelte-ozmeoz"),i(s,"href","/"),i(s,"class","svelte-ozmeoz"),i(t,"class","corner svelte-ozmeoz"),i(g,"sveltekit:prefetch",""),i(g,"href","/"),i(g,"class","svelte-ozmeoz"),R(g,"active",n[0].path==="/"),i(c,"class","svelte-ozmeoz"),i(u,"class","svelte-ozmeoz"),i(h,"class","svelte-ozmeoz"),W(v.src,y="/logos/github.svg")||i(v,"src",y),i(v,"alt","Github"),i(v,"class","svelte-ozmeoz"),i(a,"href","https://github.com/k-ivan"),i(a,"class","svelte-ozmeoz"),i(d,"class","corner svelte-ozmeoz"),i(e,"class","header svelte-ozmeoz")},m(E,I){D(E,e,I),f(e,t),f(t,s),f(s,o),f(e,m),f(e,h),f(h,u),f(u,c),f(c,g),f(g,l),f(e,z),f(e,d),f(d,a),f(a,v)},p(E,[I]){I&1&&R(g,"active",E[0].path==="/")},i:k,o:k,d(E){E&&_(e)}}}function Ee(n,e,t){let s;return C(n,$e,o=>t(0,s=o)),[s]}class Ie extends H{constructor(e){super();F(this,e,Ee,ze,P,{})}}function ye(n){let e,t,s,o,r=new Date().getFullYear()+"",m,h,u,c,g,l;return{c(){e=p("footer"),t=p("div"),s=p("div"),o=M("\xA9 "),m=M(r),h=V(),u=p("div"),c=M("Make with "),g=p("span"),l=M("\u2764"),this.h()},l(z){e=b(z,"FOOTER",{class:!0});var d=$(e);t=b(d,"DIV",{class:!0});var a=$(t);s=b(a,"DIV",{class:!0});var v=$(s);o=S(v,"\xA9 "),m=S(v,r),v.forEach(_),h=N(a),u=b(a,"DIV",{class:!0});var y=$(u);c=S(y,"Make with "),g=b(y,"SPAN",{class:!0});var E=$(g);l=S(E,"\u2764"),E.forEach(_),y.forEach(_),a.forEach(_),d.forEach(_),this.h()},h(){i(s,"class","footer__copy"),i(g,"class","svelte-8hz5ss"),i(u,"class","footer__created svelte-8hz5ss"),i(t,"class","container footer__container svelte-8hz5ss"),i(e,"class","footer svelte-8hz5ss")},m(z,d){D(z,e,d),f(e,t),f(t,s),f(s,o),f(s,m),f(t,h),f(t,u),f(u,c),f(u,g),f(g,l)},p:k,i:k,o:k,d(z){z&&_(e)}}}class ke extends H{constructor(e){super();F(this,e,null,ye,P,{})}}function ee(n){let e,t,s,o;return t=new pe({}),{c(){e=p("div"),L(t.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var m=$(e);O(t.$$.fragment,m),m.forEach(_),this.h()},h(){i(e,"class","progress-bar svelte-1ocrbek")},m(r,m){D(r,e,m),j(t,e,null),o=!0},i(r){o||(w(t.$$.fragment,r),s&&s.end(1),o=!0)},o(r){A(t.$$.fragment,r),s=le(e,_e,{delay:300}),o=!1},d(r){r&&_(e),q(t),r&&s&&s.end()}}}function we(n){let e,t,s,o,r,m,h,u,c,g,l=n[0]==="loading"&&ee();s=new Ie({});const z=n[4].default,d=ie(z,n,n[3],null);return h=new ke({}),{c(){l&&l.c(),e=V(),t=p("div"),L(s.$$.fragment),o=V(),r=p("main"),d&&d.c(),m=V(),L(h.$$.fragment),this.h()},l(a){l&&l.l(a),e=N(a),t=b(a,"DIV",{class:!0});var v=$(t);O(s.$$.fragment,v),o=N(v),r=b(v,"MAIN",{});var y=$(r);d&&d.l(y),y.forEach(_),m=N(v),O(h.$$.fragment,v),v.forEach(_),this.h()},h(){i(t,"class","layout svelte-1ocrbek")},m(a,v){l&&l.m(a,v),D(a,e,v),D(a,t,v),j(s,t,null),f(t,o),f(t,r),d&&d.m(r,null),f(t,m),j(h,t,null),u=!0,c||(g=[X(window,"sveltekit:navigation-start",n[1]),X(window,"sveltekit:navigation-end",n[2])],c=!0)},p(a,[v]){a[0]==="loading"?l?v&1&&w(l,1):(l=ee(),l.c(),w(l,1),l.m(e.parentNode,e)):l&&(he(),A(l,1,1,()=>{l=null}),ce()),d&&d.p&&(!u||v&8)&&ue(d,z,a,a[3],u?fe(z,a[3],v,null):ve(a[3]),null)},i(a){u||(w(l),w(s.$$.fragment,a),w(d,a),w(h.$$.fragment,a),u=!0)},o(a){A(l),A(s.$$.fragment,a),A(d,a),A(h.$$.fragment,a),u=!1},d(a){l&&l.d(a),a&&_(e),a&&_(t),q(s),d&&d.d(a),q(h),c=!1,de(g)}}}function De(n,e,t){let s;C(n,G,u=>t(0,s=u));let{$$slots:o={},$$scope:r}=e;function m(){Z(G,s="loading",s)}function h(){Z(G,s="loaded",s)}return n.$$set=u=>{"$$scope"in u&&t(3,r=u.$$scope)},[s,m,h,r,o]}class Ne extends H{constructor(e){super();F(this,e,De,we,P,{})}}export{Ne as default};