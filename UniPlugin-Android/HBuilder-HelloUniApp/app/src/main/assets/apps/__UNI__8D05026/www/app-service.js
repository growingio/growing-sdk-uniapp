(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"02df":function(t,n,e){"use strict";e.r(n);var r=e("fae6"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"0c7f":function(t,n,e){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var n=this.constructor;return this.then((function(e){return n.resolve(t()).then((function(){return e}))}),(function(e){return n.resolve(t()).then((function(){throw e}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(e("c45a").default)})),__definePage("pages/sample/growingio",(function(){return Vue.extend(e("ca14").default)}))},"0de9":function(t,n,e){"use strict";function r(t){var n=Object.prototype.toString.call(t);return n.substring(8,n.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function a(t,n){switch(r(n)){case"Function":return"function() { [native code] }";default:return n}}function o(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];console[t].apply(console,e)}function u(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var o=n.shift();if(i())return n.push(n.pop().replace("at ","uni-app:///")),console[o].apply(console,n);var u=n.map((function(t){var n=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===n||"[object array]"===n)try{t="---BEGIN:JSON---"+JSON.stringify(t,a)+"---END:JSON---"}catch(i){t=n}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var e=r(t).toUpperCase();t="NUMBER"===e||"BOOLEAN"===e?"---BEGIN:"+e+"---"+t+"---END:"+e+"---":String(t)}return t})),s="";if(u.length>1){var c=u.pop();s=u.join("---COMMA---"),0===c.indexOf(" at ")?s+=c:s+="---COMMA---"+c}else s=u[0];console[o](s)}e.r(n),e.d(n,"log",(function(){return o})),e.d(n,"default",(function(){return u}))},3860:function(t,n,e){"use strict";e.r(n);var r=e("d81d"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"3ab8":function(t,n,e){"use strict";e.r(n);var r=e("02df");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);var a,o,u,s,c=e("f0c5"),l=Object(c["a"])(r["default"],a,o,!1,null,null,null,!1,u,s);n["default"]=l.exports},"3bf6":function(t,n,e){"use strict";e("0c7f");var r=a(e("8bbf")),i=a(e("3ab8"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}r.default.config.productionTip=!1,i.default.mpType="app";var c=new r.default(u({},i.default));c.$mount()},"53e7":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:t._$s(0,"sc","button-sp-area"),attrs:{_i:0}},[e("button",{attrs:{_i:1},on:{click:function(n){return t.startTest()}}}),e("button",{attrs:{_i:2},on:{click:function(n){return t.enableTest()}}}),e("button",{attrs:{_i:3},on:{click:function(n){return t.disableTest()}}}),e("button",{attrs:{_i:4},on:{click:function(n){return t.trackTest()}}})])},a=[]},"6c03":function(t,n,e){"use strict";e.r(n);var r=e("c92d"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},"8bbf":function(t,n){t.exports=Vue},aca3:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:t._$s(0,"sc","uni-container"),attrs:{_i:0}},[e("view",{staticClass:t._$s(1,"sc","uni-hello-text"),attrs:{_i:1}},[e("text",{staticClass:t._$s(2,"sc","hello-text"),attrs:{_i:2}})]),t._l(t._$s(3,"f",{forItems:t.list}),(function(n,r,i,a){return e("view",{key:t._$s(3,"f",{forIndex:i,key:n.id}),staticClass:t._$s("3-"+a,"sc","uni-panel"),attrs:{_i:"3-"+a}},[e("view",{staticClass:t._$s("4-"+a,"sc","uni-panel-h"),class:t._$s("4-"+a,"c",n.open?"uni-panel-h-on":""),attrs:{_i:"4-"+a},on:{click:function(n){return t.triggerCollapse(r)}}},[e("text",{staticClass:t._$s("5-"+a,"sc","uni-panel-text"),attrs:{_i:"5-"+a}},[t._v(t._$s("5-"+a,"t0-0",t._s(n.name)))]),e("text",{staticClass:t._$s("6-"+a,"sc","uni-panel-icon uni-icon"),class:t._$s("6-"+a,"c",n.open?"uni-panel-icon-on":""),attrs:{_i:"6-"+a}},[t._v(t._$s("6-"+a,"t0-0",t._s(n.pages?"\ue581":"\ue470")))])]),t._$s("7-"+a,"i",n.open)?e("view",{staticClass:t._$s("7-"+a,"sc","uni-panel-c"),attrs:{_i:"7-"+a}},t._l(t._$s("8-"+a,"f",{forItems:n.pages}),(function(n,r,i,o){return e("view",{key:t._$s("8-"+a,"f",{forIndex:i,key:r}),staticClass:t._$s("8-"+a+"-"+o,"sc","uni-navigate-item"),attrs:{_i:"8-"+a+"-"+o},on:{click:function(e){return t.goDetailPage(n.url)}}},[e("text",{staticClass:t._$s("9-"+a+"-"+o,"sc","uni-navigate-text"),attrs:{_i:"9-"+a+"-"+o}},[t._v(t._$s("9-"+a+"-"+o,"t0-0",t._s(n.name?n.name:n)))]),e("text",{staticClass:t._$s("10-"+a+"-"+o,"sc","uni-navigate-icon uni-icon"),attrs:{_i:"10-"+a+"-"+o}})])})),0):t._e()])}))],2)},a=[]},c45a:function(t,n,e){"use strict";e.r(n);var r=e("aca3"),i=e("3860");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);var o,u=e("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=s.exports},c92d:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;uni.requireNativePlugin("modal");var r=uni.requireNativePlugin("GrowingIO-Track"),i={data:function(){return{title:""}},onLoad:function(){},methods:{startTest:function(){r.startWithAccountId("9a7f70313f66fb62",{enableLog:!0,androidEnableAndroidId:!1,androidEnableOaid:!1,enableReadClipBoard:!1})},enableTest:function(){r.enableDataCollect()},disableTest:function(){r.disableDataCollect()},trackTest:function(){r.printLog("\u8fd9\u662f GrowingIO \u6a21\u5757\u7684\u6d88\u606f"),r.track({eventId:"login"})}}};n.default=i},ca14:function(t,n,e){"use strict";e.r(n);var r=e("53e7"),i=e("6c03");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);var o,u=e("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=s.exports},d81d:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{list:[{id:"growingio",name:"\u63d2\u4ef6\u793a\u4f8bGrowingIO",open:!1,url:"/pages/sample/growingio"}],navigateFlag:!1}},onLoad:function(){},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var n=0;n<this.list.length;++n)this.list[n].open=t===n&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var n=this;if(!this.navigateFlag)return this.navigateFlag=!0,uni.navigateTo({url:t}),setTimeout((function(){n.navigateFlag=!1}),200),!1}}};n.default=r},f0c5:function(t,n,e){"use strict";function r(t,n,e,r,i,a,o,u,s,c){var l,f="function"===typeof t?t.options:t;if(s){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in s)d.call(s,p)&&!d.call(f.components,p)&&(f.components[p]=s[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),n&&(f.render=n,f.staticRenderFns=e,f._compiled=!0),r&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=l):i&&(l=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var _=f.render;f.render=function(t,n){return l.call(n),_(t,n)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:f}}e.d(n,"a",(function(){return r}))},fae6:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};n.default=e}).call(this,e("0de9")["default"])}},[["3bf6","app-config"]]]);