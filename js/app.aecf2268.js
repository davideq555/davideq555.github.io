(function(e){function n(n){for(var r,a,o=n[0],l=n[1],i=n[2],h=0,f=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(n);while(f.length)f.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var o=t[a];0!==c[o]&&(r=!1)}r&&(u.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0f0100":"d61bd6d0","chunk-4671f6ee":"2f7c338e","chunk-112ac1a0":"9943ad11","chunk-bd110868":"deb3b295","chunk-2c669692":"fece728a","chunk-f529c4ee":"636dfba8","chunk-2d0b306f":"37443d86","chunk-3455cd64":"f3d2136d","chunk-4952fc00":"3f1c5c0b","chunk-6ebd8f30":"20fc7677","chunk-a1c680aa":"4c80a598","chunk-01863224":"8ce52fca","chunk-e9bc6ba0":"806ae058","chunk-60ac7c06":"d7441295","chunk-0d4e7cb0":"e627ff8f","chunk-7aa86949":"58066697","chunk-ce1959a6":"f162103e","chunk-4f76fa4f":"9825989e"}[e]+".js"}function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-4671f6ee":1,"chunk-112ac1a0":1,"chunk-bd110868":1,"chunk-f529c4ee":1,"chunk-4952fc00":1,"chunk-6ebd8f30":1,"chunk-a1c680aa":1,"chunk-01863224":1,"chunk-e9bc6ba0":1,"chunk-60ac7c06":1,"chunk-0d4e7cb0":1,"chunk-7aa86949":1,"chunk-ce1959a6":1,"chunk-4f76fa4f":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0f0100":"31d6cfe0","chunk-4671f6ee":"9f8319a8","chunk-112ac1a0":"121837b3","chunk-bd110868":"1d5a726d","chunk-2c669692":"31d6cfe0","chunk-f529c4ee":"79dd7676","chunk-2d0b306f":"31d6cfe0","chunk-3455cd64":"31d6cfe0","chunk-4952fc00":"c067faa3","chunk-6ebd8f30":"ce9e4fb0","chunk-a1c680aa":"b334234b","chunk-01863224":"5fda5fc1","chunk-e9bc6ba0":"9ab121d5","chunk-60ac7c06":"b334234b","chunk-0d4e7cb0":"e9a01353","chunk-7aa86949":"6de00e6e","chunk-ce1959a6":"e9a01353","chunk-4f76fa4f":"3733bfe8"}[e]+".css",c=l.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===r||h===c))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],h=i.getAttribute("data-href");if(h===r||h===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],s.parentNode.removeChild(s),t(u)},s.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(s)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=u);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,l.nc&&h.setAttribute("nonce",l.nc),h.src=o(e);var f=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}c[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var s=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3a9c":function(e){e.exports=JSON.parse('[{"title":"Moroccan Days","author":"John L","category":"Travel","hero":"moroccandays.jpg"},{"title":"Swedish Fishing","author":"Rachel L","category":"Leisure","hero":"autumnclouds.jpg"},{"title":"The Adventure Begins","hero":"snowcup.jpg","prominent":true},{"title":"Paris in Spring","author":"John L","category":"Travel","hero":"christmas.jpg"},{"title":"Youthful Independence","author":"Rachel L","category":"Political","hero":"july4.jpg"},{"title":"Trial By Fire","author":"Anthony R","category":"Cooking","hero":"firepots.jpg"},{"title":"Water Ventures","author":"Rachel L","category":"Leisure","hero":"jellyfish.jpg"},{"title":"Mt. Zekial","author":"Rachel L","category":"Travel","hero":"mountaincabin.jpg"},{"title":"Cozumel Caves","author":"Rachel L","category":"Travel","hero":"lightcave.jpg"},{"title":"Amazing Ireland","author":"Rachel L","category":"Travel","hero":"greengrass.jpg"},{"title":"Cabin Fever","author":"Rachel L","category":"Travel","hero":"snowcabin.jpg"},{"title":"To the ancient ruins","author":"Rachel L","category":"Travel","hero":"ruins.jpg"},{"title":"New fashion trends","author":"Rachel L","category":"Travel","hero":"umbrella.jpg"},{"title":"Go on a vacation","author":"Rachel L","category":"Travel","hero":"adventurecave.jpg"}]')},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=t("f309");r["a"].use(a["a"]);var c=new a["a"]({theme:{themes:{light:{primary:"#CBAA5C",secondary:"#083759"}}}}),u=(t("b0c0"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-btn",e._g(e._b({style:e.styles,attrs:{color:"primary",fab:"",small:""}},"v-btn",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),o=[],l={name:"BaseBtn",props:{square:Boolean},computed:{styles:function(){return{borderRadius:this.square?"2px":void 0}}}},i=l,h=t("2877"),f=t("6544"),s=t.n(f),d=t("8336"),p=Object(h["a"])(i,u,o,!1,null,null,null),b=p.exports;s()(p,{VBtn:d["a"]});var m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-card",e._g(e._b({attrs:{flat:"",tile:""}},"v-card",e.$attrs,!1),e.$listeners),[e._t("default")],2)},g=[],k={name:"BaseCard"},v=k,y=t("b0af"),w=Object(h["a"])(v,m,g,!1,null,null,null),j=w.exports;s()(w,{VCard:y["a"]});var _=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h2",e._g(e._b({staticClass:"subheading text-uppercase font-weight-medium mb-3"},"h2",e.$attrs,!1),e.$listeners),[e._t("default")],2)},C=[],T={name:"BaseSubheading"},x=T,L=Object(h["a"])(x,_,C,!1,null,null,null),O=L.exports;r["a"].component(b.name,b),r["a"].component(j.name,j),r["a"].component(O.name,O);var P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("core-app-bar"),t("core-drawer"),t("core-view"),t("core-footer"),t("core-cta")],1)},A=[],S=(t("d3b7"),{name:"App",components:{CoreCta:function(){return t.e("chunk-a1c680aa").then(t.bind(null,"26f4"))},CoreDrawer:function(){return Promise.all([t.e("chunk-bd110868"),t.e("chunk-01863224")]).then(t.bind(null,"41c0"))},CoreFooter:function(){return Promise.all([t.e("chunk-4671f6ee"),t.e("chunk-4952fc00")]).then(t.bind(null,"7a74"))},CoreAppBar:function(){return Promise.all([t.e("chunk-4671f6ee"),t.e("chunk-112ac1a0"),t.e("chunk-f529c4ee")]).then(t.bind(null,"dc21"))},CoreView:function(){return t.e("chunk-6ebd8f30").then(t.bind(null,"9306"))}}}),B=S,E=t("7496"),R=Object(h["a"])(B,P,A,!1,null,null,null),$=R.exports;s()(R,{VApp:E["a"]});var N=t("8c4f"),D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"home"}},[t("articles",[t("banner")],1),t("about"),t("subscribe"),t("social")],1)},M=[],F={name:"Home",components:{About:function(){return Promise.all([t.e("chunk-4671f6ee"),t.e("chunk-2d0b306f")]).then(t.bind(null,"272f"))},Articles:function(){return t.e("chunk-2d0f0100").then(t.bind(null,"9b89"))},Banner:function(){return t.e("chunk-e9bc6ba0").then(t.bind(null,"40cf"))},Social:function(){return Promise.all([t.e("chunk-4671f6ee"),t.e("chunk-3455cd64")]).then(t.bind(null,"3337"))},Subscribe:function(){return Promise.all([t.e("chunk-4671f6ee"),t.e("chunk-112ac1a0"),t.e("chunk-bd110868"),t.e("chunk-2c669692")]).then(t.bind(null,"d144"))}}},J=F,V=Object(h["a"])(J,D,M,!1,null,null,null),q=V.exports;r["a"].use(N["a"]);var H=new N["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:q}]}),I=(t("99af"),t("7db0"),t("fb6a"),t("b85c")),z=t("2f62");r["a"].use(z["a"]);var G=new z["a"].Store({state:{articles:t("3a9c"),drawer:!1,items:[{text:"Home",href:"#!"},{text:"About",href:"#about"}]},getters:{categories:function(e){var n,t=[],r=Object(I["a"])(e.articles);try{var a=function(){var e=n.value;if(!e.category||t.find((function(n){return n.text===e.category})))return"continue";var r=e.category;t.push({text:r,href:"#!"})};for(r.s();!(n=r.n()).done;)a()}catch(c){r.e(c)}finally{r.f()}return t.sort().slice(0,4)},links:function(e,n){return e.items.concat(n.categories)}},mutations:{setDrawer:function(e,n){return e.drawer=n},toggleDrawer:function(e){return e.drawer=!e.drawer}},actions:{}});r["a"].config.productionTip=!1,new r["a"]({vuetify:c,router:H,store:G,render:function(e){return e($)}}).$mount("#app")}});
//# sourceMappingURL=app.aecf2268.js.map