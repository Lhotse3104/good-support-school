_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/EDR":function(e,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o("QeBL")}])},QeBL:function(e,a,o){"use strict";o.r(a);var t=o("nKUr"),i=o("YFqc"),n=o.n(i),_=o("q1tI"),r=o("pV2R"),u=o.n(r),c=o("xWvD");a.default=function(){var e=Object(_.useState)({}),a=e[0],o=e[1];return Object(_.useEffect)((function(){c.a.ref("prefecturedata").on("value",(function(e){var a=e.val();a&&o(a)}))}),[]),Object(t.jsxs)("div",{className:u.a.container,children:[Object(t.jsx)("div",{className:u.a.japan_map,children:[{id:"hokkaido_touhoku",name:"\u5317\u6d77\u9053\u30fb\u6771\u5317",prefsId:["1","2","3","4","5","6","7"]},{id:"kantou",name:"\u95a2\u6771",prefsId:["8","9","10","11","12","13","14"]},{id:"tyubu",name:"\u4e2d\u90e8",prefsId:["15","16","17","18","19","20","21","22","23"]},{id:"kinki",name:"\u8fd1\u757f",prefsId:["24","25","26","27","28","29","30"]},{id:"tyugoku",name:"\u4e2d\u56fd",prefsId:["31","32","33","34","35"]},{id:"shikoku",name:"\u56db\u56fd",prefsId:["36","37","38","39"]},{id:"kyusyu",name:"\u4e5d\u5dde\u30fb\u6c96\u7e04",prefsId:["40","41","42","43","44","45","46","47"]}].map((function(e){return Object(t.jsxs)("div",{className:u.a[e.id]+" "+u.a.clearfix,children:[Object(t.jsx)("p",{className:u.a.area_title,children:e.name}),Object(t.jsx)("div",{className:u.a.area,children:e.prefsId.map((function(e){if(a[e])return Object(t.jsx)(n.a,{href:"/prefectures?preCode="+e,children:Object(t.jsx)("a",{children:Object(t.jsx)("div",{className:u.a[a[e].id],children:Object(t.jsx)("p",{children:a[e].name})})})},e)}))})]},e.id)}))}),Object(t.jsx)(n.a,{href:"/kinki",children:"\u95a2\u897f\u306e\u652f\u63f4\u5b66\u6821\u4e00\u89a7"})]})}},YFqc:function(e,a,o){e.exports=o("cTJO")},cTJO:function(e,a,o){"use strict";var t=o("J4zp"),i=o("284h");a.__esModule=!0,a.default=void 0;var n=i(o("q1tI")),_=o("elyg"),r=o("nOHt"),u=o("vNVm"),c={};function s(e,a,o,t){if(e&&(0,_.isLocalURL)(a)){e.prefetch(a,o,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[a+"%"+o+(i?"%"+i:"")]=!0}}var m=function(e){var a=!1!==e.prefetch,o=(0,r.useRouter)(),i=o&&o.pathname||"/",m=n.default.useMemo((function(){var a=(0,_.resolveHref)(i,e.href,!0),o=t(a,2),n=o[0],r=o[1];return{href:n,as:e.as?(0,_.resolveHref)(i,e.as):r||n}}),[i,e.href,e.as]),f=m.href,l=m.as,d=e.children,k=e.replace,h=e.shallow,p=e.scroll,H=e.locale;"string"===typeof d&&(d=n.default.createElement("a",null,d));var g=n.Children.only(d),y=g&&"object"===typeof g&&g.ref,v=(0,u.useIntersection)({rootMargin:"200px"}),b=t(v,2),j=b[0],w=b[1],E=n.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);(0,n.useEffect)((function(){var e=w&&a&&(0,_.isLocalURL)(f),t="undefined"!==typeof H?H:o&&o.locale,i=c[f+"%"+l+(t?"%"+t:"")];e&&!i&&s(o,f,l,{locale:t})}),[l,f,w,H,a,o]);var O={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,a,o,t,i,n,r,u){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,_.isLocalURL)(o))&&(e.preventDefault(),null==r&&(r=t.indexOf("#")<0),a[i?"replace":"push"](o,t,{shallow:n,locale:u,scroll:r}))}(e,o,f,l,k,h,p,H)},onMouseEnter:function(e){(0,_.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(o,f,l,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var I="undefined"!==typeof H?H:o&&o.locale,x=o&&o.isLocaleDomain&&(0,_.getDomainLocale)(l,I,o&&o.locales,o&&o.domainLocales);O.href=x||(0,_.addBasePath)((0,_.addLocale)(l,I,o&&o.defaultLocale))}return n.default.cloneElement(g,O)};a.default=m},pV2R:function(e,a,o){e.exports={container:"Home_container__sDexO",main:"Home_main__1gTMt",footer:"Home_footer__34ULc",title:"Home_title__38XO6",description:"Home_description__p2VX9",code:"Home_code__7lt7E",grid:"Home_grid__2Clz5",card:"Home_card__2kgLM",logo:"Home_logo__qxZJS",clearfix:"Home_clearfix__3L162",japan_map:"Home_japan_map__GJT1j",area:"Home_area__t0_Co",area_title:"Home_area_title__1jmIY",hokkaido_touhoku:"Home_hokkaido_touhoku__BO0Jr",hokkaido:"Home_hokkaido__1DX1G",aomori:"Home_aomori__cf-Cr",akita:"Home_akita__1MMWK",iwate:"Home_iwate__1yZ5Q",yamagata:"Home_yamagata__2v5za",miyagi:"Home_miyagi__3XH0i",fukushima:"Home_fukushima__8JXv4",kantou:"Home_kantou__3d1kg",ibaraki:"Home_ibaraki__1NhVp",tochigi:"Home_tochigi__30KOf",gunma:"Home_gunma__3gtRE",saitama:"Home_saitama__2u2bh",chiba:"Home_chiba__LIAqL",tokyo:"Home_tokyo__3IQ-y",kanagawa:"Home_kanagawa__1fQMS",tyubu:"Home_tyubu__EsgqB",nigata:"Home_nigata__2fEsO",toyama:"Home_toyama__1Tbft",ishikawa:"Home_ishikawa__sraau",fukui:"Home_fukui__2X9Uy",nagano:"Home_nagano__3rKEK",yamanashi:"Home_yamanashi__1Sg1H",gifu:"Home_gifu__2-PPo",shizuoka:"Home_shizuoka__Yvjcm",aichi:"Home_aichi__3M0e2",kinki:"Home_kinki__b2QbK",kyoto:"Home_kyoto__1Jyl4",shiga:"Home_shiga__2kN8Y",osaka:"Home_osaka__1De7f",nara:"Home_nara__37DlF",mie:"Home_mie__2c8pn",wakayama:"Home_wakayama__18JNi",hyougo:"Home_hyougo__91BlI",tyugoku:"Home_tyugoku__3yH-v",tottori:"Home_tottori__yaSIW",okayama:"Home_okayama__26UbQ",shimane:"Home_shimane__1rsh-",hiroshima:"Home_hiroshima__1XR0T",yamaguchi:"Home_yamaguchi__1sMaS",shikoku:"Home_shikoku__oobPE",kagawa:"Home_kagawa__1N6VK",ehime:"Home_ehime__1woVD",tokushima:"Home_tokushima__193fm",kouchi:"Home_kouchi__blrCG",kyusyu:"Home_kyusyu__1_tRY",fukuoka:"Home_fukuoka__2-Rbf",saga:"Home_saga__3KZZ7",nagasaki:"Home_nagasaki__z5yTn",oita:"Home_oita__34oPA",kumamoto:"Home_kumamoto__24VE1",miyazaki:"Home_miyazaki__3HaGg",kagoshima:"Home_kagoshima__29Y2_",okinawa:"Home_okinawa__FUgVO"}},vNVm:function(e,a,o){"use strict";var t=o("J4zp");a.__esModule=!0,a.useIntersection=function(e){var a=e.rootMargin,o=e.disabled||!_,u=(0,i.useRef)(),c=(0,i.useState)(!1),s=t(c,2),m=s[0],f=s[1],l=(0,i.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),o||m||e&&e.tagName&&(u.current=function(e,a,o){var t=function(e){var a=e.rootMargin||"",o=r.get(a);if(o)return o;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var a=t.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;a&&o&&a(o)}))}),e);return r.set(a,o={id:a,observer:i,elements:t}),o}(o),i=t.id,n=t.observer,_=t.elements;return _.set(e,a),n.observe(e),function(){_.delete(e),n.unobserve(e),0===_.size&&(n.disconnect(),r.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:a}))}),[o,a,m]);return(0,i.useEffect)((function(){if(!_&&!m){var e=(0,n.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,n.cancelIdleCallback)(e)}}}),[m]),[l,m]};var i=o("q1tI"),n=o("0G5g"),_="undefined"!==typeof IntersectionObserver;var r=new Map}},[["/EDR",0,2,3,4,6,1,5]]]);