import{C as te,S as F,i as P,s as R,e as p,c as b,a as z,d as _,b as i,D,f as V,E as f,F as k,G as se,H as C,A as ae,I as re,J as oe,K as ne,k as N,t as H,n as A,g as S,L as X,j as L,m as O,o as j,x as w,u as M,M as le,v as q,N as ie,O as Z,w as ce,P as ue,Q as ve,R as fe,T as de,U as _e,r as he,V as x}from"../chunks/vendor-8c8d27f9.js";const G=te(null);function ge(n){let e,t,s;return{c(){e=p("div"),t=p("div"),this.h()},l(o){e=b(o,"DIV",{class:!0,style:!0});var a=z(e);t=b(a,"DIV",{class:!0}),z(t).forEach(_),a.forEach(_),this.h()},h(){i(t,"class","navigation-progress__inner svelte-v0s5h1"),i(e,"class","navigation-progress svelte-v0s5h1"),i(e,"style",s=`--progress: ${n[1]}`),D(e,"navigation-progress--bottom",n[0]==="bottom")},m(o,a){V(o,e,a),f(e,t)},p(o,[a]){a&2&&s!==(s=`--progress: ${o[1]}`)&&i(e,"style",s),a&1&&D(e,"navigation-progress--bottom",o[0]==="bottom")},i:k,o:k,d(o){o&&_(e)}}}function me(n,e,t){let s,{position:o="top"}=e,{duration:a=300}=e;const m=se(0,{duration:a,easing:oe});C(n,m,c=>t(1,s=c));const h={interval:null,numRandom(c=.1){return Math.random()*c},inc(c){this.resetInterval();let g=0;const l=function(){g+=this.numRandom(),g<.99?c.set(g):clearInterval(this.interval)}.bind(this);l(),this.interval=setInterval(l,500)},done(c){this.resetInterval(),c.set(1)},resetInterval(){this.interval&&clearInterval(this.interval)}},u=G.subscribe(c=>{c==="loaded"&&h.done(m)});return ae(()=>{h.inc(m)}),re(()=>{h.resetInterval(),u()}),n.$$set=c=>{"position"in c&&t(0,o=c.position),"duration"in c&&t(3,a=c.duration)},[o,s,m,a]}class pe extends F{constructor(e){super();P(this,e,me,ge,R,{position:0,duration:3})}}const be=()=>{const n=ne("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session}},ze={subscribe(n){return be().page.subscribe(n)}};function $e(n){let e,t,s,o,a,m,h,u,c,g,l,$,d,r,v,y;return{c(){e=p("header"),t=p("div"),s=p("a"),o=p("img"),m=N(),h=p("nav"),u=p("ul"),c=p("li"),g=p("a"),l=H("Home"),$=N(),d=p("div"),r=p("a"),v=p("img"),this.h()},l(E){e=b(E,"HEADER",{class:!0});var I=z(e);t=b(I,"DIV",{class:!0});var T=z(t);s=b(T,"A",{href:!0,class:!0});var U=z(s);o=b(U,"IMG",{src:!0,alt:!0,class:!0}),U.forEach(_),T.forEach(_),m=A(I),h=b(I,"NAV",{class:!0});var B=z(h);u=b(B,"UL",{class:!0});var J=z(u);c=b(J,"LI",{class:!0});var K=z(c);g=b(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=z(g);l=S(Q,"Home"),Q.forEach(_),K.forEach(_),J.forEach(_),B.forEach(_),$=A(I),d=b(I,"DIV",{class:!0});var Y=z(d);r=b(Y,"A",{href:!0,class:!0});var W=z(r);v=b(W,"IMG",{src:!0,alt:!0,class:!0}),W.forEach(_),Y.forEach(_),I.forEach(_),this.h()},h(){X(o.src,a="/logo.svg")||i(o,"src",a),i(o,"alt","ik logo"),i(o,"class","svelte-ozmeoz"),i(s,"href","https://kit.svelte.dev"),i(s,"class","svelte-ozmeoz"),i(t,"class","corner svelte-ozmeoz"),i(g,"sveltekit:prefetch",""),i(g,"href","/"),i(g,"class","svelte-ozmeoz"),D(g,"active",n[0].path==="/"),i(c,"class","svelte-ozmeoz"),i(u,"class","svelte-ozmeoz"),i(h,"class","svelte-ozmeoz"),X(v.src,y="/logos/github.svg")||i(v,"src",y),i(v,"alt","Github"),i(v,"class","svelte-ozmeoz"),i(r,"href","https://github.com/k-ivan"),i(r,"class","svelte-ozmeoz"),i(d,"class","corner svelte-ozmeoz"),i(e,"class","header svelte-ozmeoz"),D(e,"is-home",n[1])},m(E,I){V(E,e,I),f(e,t),f(t,s),f(s,o),f(e,m),f(e,h),f(h,u),f(u,c),f(c,g),f(g,l),f(e,$),f(e,d),f(d,r),f(r,v)},p(E,[I]){I&1&&D(g,"active",E[0].path==="/"),I&2&&D(e,"is-home",E[1])},i:k,o:k,d(E){E&&_(e)}}}function Ee(n,e,t){let s,o;return C(n,ze,a=>t(0,o=a)),n.$$.update=()=>{n.$$.dirty&1&&t(1,s=o.path==="/")},[o,s]}class Ie extends F{constructor(e){super();P(this,e,Ee,$e,R,{})}}function ye(n){let e,t,s,o,a=new Date().getFullYear()+"",m,h,u,c,g,l;return{c(){e=p("footer"),t=p("div"),s=p("div"),o=H("\xA9 "),m=H(a),h=N(),u=p("div"),c=H("Make with "),g=p("span"),l=H("\u2764"),this.h()},l($){e=b($,"FOOTER",{class:!0});var d=z(e);t=b(d,"DIV",{class:!0});var r=z(t);s=b(r,"DIV",{class:!0});var v=z(s);o=S(v,"\xA9 "),m=S(v,a),v.forEach(_),h=A(r),u=b(r,"DIV",{class:!0});var y=z(u);c=S(y,"Make with "),g=b(y,"SPAN",{class:!0});var E=z(g);l=S(E,"\u2764"),E.forEach(_),y.forEach(_),r.forEach(_),d.forEach(_),this.h()},h(){i(s,"class","footer__copy"),i(g,"class","svelte-8hz5ss"),i(u,"class","footer__created svelte-8hz5ss"),i(t,"class","container footer__container svelte-8hz5ss"),i(e,"class","footer svelte-8hz5ss")},m($,d){V($,e,d),f(e,t),f(t,s),f(s,o),f(s,m),f(t,h),f(t,u),f(u,c),f(u,g),f(g,l)},p:k,i:k,o:k,d($){$&&_(e)}}}class ke extends F{constructor(e){super();P(this,e,null,ye,R,{})}}function ee(n){let e,t,s,o;return t=new pe({}),{c(){e=p("div"),L(t.$$.fragment),this.h()},l(a){e=b(a,"DIV",{class:!0});var m=z(e);O(t.$$.fragment,m),m.forEach(_),this.h()},h(){i(e,"class","progress-bar svelte-1ocrbek")},m(a,m){V(a,e,m),j(t,e,null),o=!0},i(a){o||(w(t.$$.fragment,a),s&&s.end(1),o=!0)},o(a){M(t.$$.fragment,a),s=le(e,_e,{delay:300}),o=!1},d(a){a&&_(e),q(t),a&&s&&s.end()}}}function we(n){let e,t,s,o,a,m,h,u,c,g,l=n[0]==="loading"&&ee();s=new Ie({});const $=n[4].default,d=ie($,n,n[3],null);return h=new ke({}),{c(){l&&l.c(),e=N(),t=p("div"),L(s.$$.fragment),o=N(),a=p("main"),d&&d.c(),m=N(),L(h.$$.fragment),this.h()},l(r){l&&l.l(r),e=A(r),t=b(r,"DIV",{class:!0});var v=z(t);O(s.$$.fragment,v),o=A(v),a=b(v,"MAIN",{});var y=z(a);d&&d.l(y),y.forEach(_),m=A(v),O(h.$$.fragment,v),v.forEach(_),this.h()},h(){i(t,"class","layout svelte-1ocrbek")},m(r,v){l&&l.m(r,v),V(r,e,v),V(r,t,v),j(s,t,null),f(t,o),f(t,a),d&&d.m(a,null),f(t,m),j(h,t,null),u=!0,c||(g=[Z(window,"sveltekit:navigation-start",n[1]),Z(window,"sveltekit:navigation-end",n[2])],c=!0)},p(r,[v]){r[0]==="loading"?l?v&1&&w(l,1):(l=ee(),l.c(),w(l,1),l.m(e.parentNode,e)):l&&(he(),M(l,1,1,()=>{l=null}),ce()),d&&d.p&&(!u||v&8)&&ue(d,$,r,r[3],u?fe($,r[3],v,null):ve(r[3]),null)},i(r){u||(w(l),w(s.$$.fragment,r),w(d,r),w(h.$$.fragment,r),u=!0)},o(r){M(l),M(s.$$.fragment,r),M(d,r),M(h.$$.fragment,r),u=!1},d(r){l&&l.d(r),r&&_(e),r&&_(t),q(s),d&&d.d(r),q(h),c=!1,de(g)}}}function De(n,e,t){let s;C(n,G,u=>t(0,s=u));let{$$slots:o={},$$scope:a}=e;function m(){x(G,s="loading",s)}function h(){x(G,s="loaded",s)}return n.$$set=u=>{"$$scope"in u&&t(3,a=u.$$scope)},[s,m,h,a,o]}class Ne extends F{constructor(e){super();P(this,e,De,we,R,{})}}export{Ne as default};
