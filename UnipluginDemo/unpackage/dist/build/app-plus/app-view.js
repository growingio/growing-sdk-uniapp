(function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="./",e(e.s="3bf6")})({"053d":function(t,n,e){"use strict";var r=e("16a3"),i=e.n(r);i.a},"16a3":function(t,n,e){var r=e("959a");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("7f7e").default;i("dcfd13da",r,!0,{sourceMap:!1,shadowMode:!1})},"24fb":function(t,n,e){"use strict";function r(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"===typeof btoa){var o=i(r),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([o]).join("\n")}return[e].join("\n")}function i(t){var n=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n);return"/*# ".concat(e," */")}t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"===typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);r&&i[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},3081:function(t,n,e){"use strict";e.r(n);var r=e("8e5d"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},3860:function(t,n,e){"use strict";e.r(n);var r=e("5e0f"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},"3bf6":function(t,n,e){"use strict";function r(){function t(t){var n=e("3081");n.__inject__&&n.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}e("fa96"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},"5e0f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};n.default=r},"6c03":function(t,n,e){"use strict";e.r(n);var r=e("8683"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},"7f7e":function(t,n,e){"use strict";function r(t,n){for(var e=[],r={},i=0;i<n.length;i++){var o=n[i],a=o[0],u=o[1],c=o[2],s=o[3],f={id:t+":"+i,css:u,media:c,sourceMap:s};r[a]?r[a].parts.push(f):e.push(r[a]={id:a,parts:[f]})}return e}e.r(n),e.d(n,"default",(function(){return g}));var i="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,s=!1,f=function(){},l=null,d="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(t,n,e,i){s=e,l=i||{};var a=r(t,n);return v(a),function(n){for(var e=[],i=0;i<a.length;i++){var u=a[i],c=o[u.id];c.refs--,e.push(c)}n?(a=r(t,n),v(a)):a=[];for(i=0;i<e.length;i++){c=e[i];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete o[c.id]}}}}function v(t){for(var n=0;n<t.length;n++){var e=t[n],r=o[e.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](e.parts[i]);for(;i<e.parts.length;i++)r.parts.push(_(e.parts[i]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{var a=[];for(i=0;i<e.parts.length;i++)a.push(_(e.parts[i]));o[e.id]={id:e.id,refs:1,parts:a}}}}function h(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function _(t){var n,e,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(s)return f;r.parentNode.removeChild(r)}if(p){var i=c++;r=u||(u=h()),n=b.bind(null,r,i,!1),e=b.bind(null,r,i,!0)}else r=h(),n=m.bind(null,r),e=function(){r.parentNode.removeChild(r)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else e()}}var x=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}();function b(t,n,e,r){var i=e?"":S(r.css);if(t.styleSheet)t.styleSheet.cssText=x(n,i);else{var o=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}function m(t,n){var e=S(n.css),r=n.media,i=n.sourceMap;if(r&&t.setAttribute("media",r),l.ssrId&&t.setAttribute(d,n.id),i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var y=/\b([+-]?\d+(\.\d+)?)[r|u]px\b/g,w=/var\(--status-bar-height\)/gi,C=/var\(--window-top\)/gi,$=/var\(--window-bottom\)/gi,k=/var\(--window-left\)/gi,A=/var\(--window-right\)/gi,j=!1;function S(t){if(!uni.canIUse("css.var")){!1===j&&(j=plus.navigator.getStatusbarHeight());var n={statusBarHeight:j,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace(w,n.statusBarHeight+"px").replace(C,n.top+"px").replace($,n.bottom+"px").replace(k,"0px").replace(A,"0px")}return t.replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(t){return t.replace(y,(function(t,n){return uni.upx2px(n)+"px"}))}))}},8683:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};n.default=r},"8e5d":function(t,n,e){var r=e("b9c0");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("7f7e").default;i("81e3e21c",r,!0,{sourceMap:!1,shadowMode:!1})},"959a":function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,"uni-button{margin-top:30upx;margin-bottom:30upx}.button-sp-area{margin:0 auto;width:60%}.content{text-align:center;height:400upx}.wrapper{flex-direction:column;justify-content:center}.button{width:200px;margin-top:30px;margin-left:20px;padding-top:20px;padding-bottom:20px;border-width:2px;border-style:solid;border-color:#458b00;background-color:#458b00}.text{font-size:30px;color:#666;text-align:center}",""]),t.exports=n},aca3:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[e("uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}},[e("v-uni-text",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[t._v("uni\u539f\u751f\u63d2\u4ef6\u793a\u4f8b")])],1),t._l(t._$g(3,"f"),(function(n,r,i,o){return e("uni-view",{key:n,staticClass:t._$g("3-"+o,"sc"),attrs:{_i:"3-"+o}},[e("uni-view",{staticClass:t._$g("4-"+o,"sc"),class:t._$g("4-"+o,"c"),attrs:{_i:"4-"+o},on:{click:function(n){return t.$handleViewEvent(n)}}},[e("v-uni-text",{staticClass:t._$g("5-"+o,"sc"),attrs:{_i:"5-"+o}},[t._v(t._$g("5-"+o,"t0-0"))]),e("v-uni-text",{staticClass:t._$g("6-"+o,"sc"),class:t._$g("6-"+o,"c"),attrs:{_i:"6-"+o}},[t._v(t._$g("6-"+o,"t0-0"))])],1),t._$g("7-"+o,"i")?e("uni-view",{staticClass:t._$g("7-"+o,"sc"),attrs:{_i:"7-"+o}},t._l(t._$g("8-"+o,"f"),(function(n,r,i,a){return e("uni-view",{key:n,staticClass:t._$g("8-"+o+"-"+a,"sc"),attrs:{_i:"8-"+o+"-"+a},on:{click:function(n){return t.$handleViewEvent(n)}}},[e("v-uni-text",{staticClass:t._$g("9-"+o+"-"+a,"sc"),attrs:{_i:"9-"+o+"-"+a}},[t._v(t._$g("9-"+o+"-"+a,"t0-0"))]),e("v-uni-text",{staticClass:t._$g("10-"+o+"-"+a,"sc"),attrs:{_i:"10-"+o+"-"+a}},[t._v("\ue470")])],1)})),1):t._e()],1)}))],2)},o=[]},b9c0:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nbody{min-height:100%;height:auto}\n.uni-icon{font-family:uniicons;font-weight:400}.uni-bg-red{background-color:#f76260;color:#fff}.uni-bg-green{background-color:#09bb07;color:#fff}.uni-bg-blue{background-color:#007aff;color:#fff}.uni-container{flex:1;padding:15px;background-color:#f8f8f8}.uni-padding-lr{padding-left:15px;padding-right:15px}.uni-padding-tb{padding-top:15px;padding-bottom:15px}.uni-header-logo{padding:15px 15px;flex-direction:column;justify-content:center;align-items:center;margin-top:10upx}.uni-header-image{width:80px;height:80px}.uni-hello-text{margin-bottom:20px}.hello-text{color:#7a7e83;font-size:14px;line-height:20px}.hello-link{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel{margin-bottom:12px}.uni-panel-h{background-color:#fff;flex-direction:row;align-items:center;padding:12px}.uni-panel-h-on{background-color:#f0f0f0}.uni-panel-text{flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);transition-duration:0s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item{flex-direction:row;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item:active{background-color:#f8f8f8}.uni-navigate-text{flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon{margin-left:15px;color:#999;font-size:14px;font-weight:400}.uni-list-cell{position:relative;flex-direction:row;justify-content:flex-start;align-items:center}.uni-list-cell-pd{padding:22upx 30upx}.flex-r{flex-direction:row}.flex-c{flex-direction:column}.a-i-c{align-items:center}.j-c-c{justify-content:center}.list-item{flex-direction:row;padding:10px}",""]),t.exports=n},c45a:function(t,n,e){"use strict";e.r(n);var r=e("aca3"),i=e("3860");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);var a,u=e("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=c.exports},ca14:function(t,n,e){"use strict";e.r(n);var r=e("e441"),i=e("6c03");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("053d");var a,u=e("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=c.exports},e441:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[e("v-uni-button",{attrs:{type:"primary",plain:"true",_i:1},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u521d\u59cb\u5316SDK")]),e("v-uni-button",{attrs:{type:"primary",plain:"true",_i:2},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u5f00\u542f\u91c7\u96c6")]),e("v-uni-button",{attrs:{type:"primary",plain:"true",_i:3},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u5173\u95ed\u91c7\u96c6")]),e("v-uni-button",{attrs:{type:"primary",plain:"true",_i:4},on:{click:function(n){return t.$handleViewEvent(n)}}},[t._v("\u53d1\u9001track\u4e8b\u4ef6")])],1)},o=[]},f0c5:function(t,n,e){"use strict";function r(t,n,e,r,i,o,a,u,c,s){var f,l="function"===typeof t?t.options:t;if(c){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in c)d.call(c,p)&&!d.call(l.components,p)&&(l.components[p]=c[p])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(l.mixins||(l.mixins=[])).push(s)),n&&(l.render=n,l.staticRenderFns=e,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=f):i&&(f=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var g=l.render;l.render=function(t,n){return f.call(n),g(t,n)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:l}}e.d(n,"a",(function(){return r}))},fa96:function(t,n,e){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var n=this.constructor;return this.then((function(e){return n.resolve(t()).then((function(){return e}))}),(function(e){return n.resolve(t()).then((function(){throw e}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}window.__uniConfig={window:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(e("c45a").default)})),__definePage("pages/sample/growingio",(function(){return Vue.extend(e("ca14").default)}))}});