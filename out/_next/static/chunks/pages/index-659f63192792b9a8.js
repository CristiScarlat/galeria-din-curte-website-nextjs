(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4727)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,a=o(n(7294)),l=n(1003),i=n(7795),u=n(4465),c=n(2692),s=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function g(e,t,n,o){if(l.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+r;if(h.has(a))return;h.add(a)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function m(e){return"string"==typeof e?e:i.formatUrl(e)}let v=a.default.forwardRef(function(e,t){let n,o;let{href:i,as:h,children:v,prefetch:y,passHref:b,replace:_,shallow:k,scroll:j,locale:x,onClick:C,onMouseEnter:L,onTouchStart:P,legacyBehavior:M=!0!==Boolean(!0)}=e,E=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,M&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let w=!1!==y,O=a.default.useContext(c.RouterContext),N=a.default.useContext(s.AppRouterContext),R=null!=O?O:N,S=!O,{href:I,as:T}=a.default.useMemo(()=>{if(!O){let e=m(i);return{href:e,as:h?m(h):e}}let[t,n]=l.resolveHref(O,i,!0);return{href:t,as:h?l.resolveHref(O,h):n||t}},[O,i,h]),H=a.default.useRef(I),B=a.default.useRef(T);M&&(o=a.default.Children.only(n));let z=M?o&&"object"==typeof o&&o.ref:t,[D,K,U]=f.useIntersection({rootMargin:"200px"}),A=a.default.useCallback(e=>{(B.current!==T||H.current!==I)&&(U(),B.current=T,H.current=I),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[T,z,I,U,D]);a.default.useEffect(()=>{R&&K&&w&&g(R,I,T,{locale:x})},[T,I,K,x,w,null==O?void 0:O.locale,R]);let G={ref:A,onClick(e){M||"function"!=typeof C||C(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,o,r,i,u,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!l.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:i,locale:c,scroll:u}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};s?a.default.startTransition(h):h()}(e,R,I,T,_,k,j,x,S,w)},onMouseEnter(e){M||"function"!=typeof L||L(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),R&&(w||!S)&&g(R,I,T,{locale:x,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){M||"function"!=typeof P||P(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),R&&(w||!S)&&g(R,I,T,{locale:x,priority:!0,bypassPrefetchedCheck:!0})}};if(!M||b||"a"===o.type&&!("href"in o.props)){let X=void 0!==x?x:null==O?void 0:O.locale,Z=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(T,X,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);G.href=Z||p.addBasePath(u.addLocale(T,X,null==O?void 0:O.defaultLocale))}return M?a.default.cloneElement(o,G):a.default.createElement("a",Object.assign({},E,G),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:u}=e,c=u||!a,[s,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(a){if(!c&&!s&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=i.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=l.get(o)))return t;let r=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:r},i.push(n),l.set(n,t),t}(n);return a.set(e,t),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),l.delete(o);let t=i.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&i.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,c,n,t,s]);let h=o.useCallback(()=>{f(!1)},[]);return[p,s,h]};var o=n(7294),r=n(4686);let a="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4727:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(5893),r=n(9008),a=n.n(r),l=n(1664),i=n.n(l),u=n(7294),c=n(6915),s=n.n(c);let f=(0,u.forwardRef)((e,t)=>{let{children:n,style:r,href:a}=e;return(0,o.jsxs)("a",{className:s().homeLinkContainer,href:a,ref:t,children:[(0,o.jsx)("div",{className:s().homeLink,style:r}),(0,o.jsx)("p",{children:n})]})});f.displayName="HomeLink";var d=n(7160),p=n.n(d);function h(){return(0,o.jsxs)("div",{className:p().container,children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"Galeria din curte"}),(0,o.jsx)("meta",{name:"description",content:"The oficial website of art gallery Galeria din curte"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)("main",{className:p().main,children:(0,o.jsxs)("section",{className:"ms-3 me-3 d-flex justify-content-center align-items-center flex-wrap gap-3",children:[(0,o.jsx)(i(),{href:"/gallery",legacyBehavior:!0,passHref:!0,children:(0,o.jsx)(f,{style:{backgroundImage:"url(/images/home/1.jpg)",backgroundRepeat:"no-repeat, repeat",backgroundSize:"cover",backgroundPosition:"center"},children:"Galeria din Curte"})}),(0,o.jsx)(i(),{href:"/ateliere",legacyBehavior:!0,passHref:!0,children:(0,o.jsx)(f,{style:{backgroundImage:"url(/images/home/6.jpg)",backgroundRepeat:"no-repeat, repeat",backgroundSize:"cover",backgroundPosition:"center"},children:"Ateliere de artă plastică pentru copii și adolescenți"})}),(0,o.jsx)(i(),{href:"/about",legacyBehavior:!0,passHref:!0,children:(0,o.jsx)(f,{style:{backgroundImage:"url(/images/home/8.jpg)",backgroundRepeat:"no-repeat, repeat",backgroundSize:"cover",backgroundPosition:"top"},children:"Despre noi"})}),(0,o.jsx)(i(),{href:"/colaborations",legacyBehavior:!0,passHref:!0,children:(0,o.jsx)(f,{style:{backgroundImage:"url(/images/home/3.jpg)",backgroundRepeat:"no-repeat, repeat",backgroundSize:"cover",backgroundPosition:"center"},children:"Colaborări"})})]})})]})}},7160:function(e){e.exports={main:"Home_main__nLjiQ",customCursor:"Home_customCursor__mpFiv"}},6915:function(e){e.exports={homeLinkContainer:"homeLink_homeLinkContainer__dKRxP",homeLink:"homeLink_homeLink__tyeoN"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);