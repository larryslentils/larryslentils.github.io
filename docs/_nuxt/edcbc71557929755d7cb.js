(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{224:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("6e669651",content,!0,{sourceMap:!1})},225:function(t,e,n){"use strict";var r=n(9),o=n(44),c=n(59),l=n(136),d=n(100),h=n(22),m=n(82).f,f=n(102).f,_=n(20).f,v=n(228).trim,C=r.Number,y=C,w=C.prototype,x="Number"==c(n(101)(w)),k="trim"in String.prototype,O=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=k?e.trim():v(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,h=l.length;i<h;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(x?h((function(){w.valueOf.call(n)})):"Number"!=c(n))?l(new y(O(e)),n,C):O(e)};for(var j,M=n(18)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;M.length>L;L++)o(y,j=M[L])&&!o(C,j)&&_(C,j,f(y,j));C.prototype=w,w.constructor=C,n(24)(r,"Number",C)}},226:function(t,e,n){"use strict";var r=n(224);n.n(r).a},227:function(t,e,n){(e=n(103)(!1)).push([t.i,"",""]),t.exports=e},228:function(t,e,n){var r=n(13),o=n(60),c=n(22),l=n(229),d="["+l+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),f=function(t,e,n){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),h=o[t]=d?e(_):l[t];n&&(o[n]=h),r(r.P+r.F*d,"String",o)},_=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},229:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},231:function(t,e,n){"use strict";n.r(e);n(34);var r,o=n(6),c=(n(35),n(36),n(17),n(2)),l=n(58),d=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"31",height:"100%",viewBox:"0 0 31 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.10512 0.368718C0.560256 0.368718 0.118164 0.812066 0.118164 1.35848C0.118164 1.9049 0.560256 2.34824 1.10512 2.34824H4.90887L8.30138 18.4009C8.43503 19.0053 8.83085 19.5079 9.32946 19.5041H25.7788C26.3005 19.5118 26.7799 19.0375 26.7799 18.5143C26.7799 17.9911 26.3006 17.5168 25.7788 17.5245H10.1315L9.71003 15.545H27.095C27.5371 15.5412 27.9547 15.2048 28.0511 14.7718L30.354 4.87412C30.4825 4.29933 29.9852 3.67172 29.3979 3.66786H7.21171L6.6771 1.15221C6.58329 0.71276 6.15921 0.368652 5.7107 0.368652L1.10512 0.368718ZM7.623 5.64746H12.7634L13.2569 8.61674H8.25005L7.623 5.64746ZM14.7785 5.64746H20.9881L20.4946 8.61674H15.2719L14.7785 5.64746ZM23.0031 5.64746H28.1537L27.4649 8.61674H22.5097L23.0031 5.64746ZM8.67181 10.5963H13.5862L14.0797 13.5656H9.29919L8.67181 10.5963ZM15.6009 10.5963H20.1656L19.6721 13.5656H16.0944L15.6009 10.5963ZM22.1807 10.5963H27.0023L26.3135 13.5656H21.6872L22.1807 10.5963ZM12.6197 20.164C10.8141 20.164 9.32979 21.6525 9.32979 23.4632C9.32979 25.2739 10.8141 26.7624 12.6197 26.7624C14.4252 26.7624 15.9095 25.2739 15.9095 23.4632C15.9095 21.6525 14.4252 20.164 12.6197 20.164ZM22.4892 20.164C20.6837 20.164 19.1994 21.6525 19.1994 23.4632C19.1994 25.2739 20.6837 26.7624 22.4892 26.7624C24.2948 26.7624 25.7791 25.2739 25.7791 23.4632C25.7791 21.6525 24.2948 20.164 22.4892 20.164ZM12.6197 22.1435C13.3586 22.1435 13.9356 22.7222 13.9356 23.4632C13.9356 24.2042 13.3586 24.7829 12.6197 24.7829C11.8807 24.7829 11.3037 24.2042 11.3037 23.4632C11.3037 22.7222 11.8807 22.1435 12.6197 22.1435ZM22.4892 22.1435C23.2282 22.1435 23.8052 22.7222 23.8052 23.4632C23.8052 24.2042 23.2282 24.7829 22.4892 24.7829C21.7503 24.7829 21.1733 24.2042 21.1733 23.4632C21.1733 22.7222 21.7503 22.1435 22.4892 22.1435Z",fill:"#429bfc"}})])}),[],!1,null,null,null).exports,h=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"207",height:"207",viewBox:"6 20 110 110","enable-background":"new 0 0 110 110","xml:space":"preserve"}},[e("path",{attrs:{fill:"#FDFEFD",opacity:"1.000000",stroke:"none",d:"\nM1.000000,58.000000 \n\tC1.000000,38.666668 1.000000,19.833334 1.000000,1.000000 \n\tC41.000000,1.000000 81.000000,1.000000 121.000000,1.000000 \n\tC121.000000,49.000000 121.000000,97.000000 121.000000,145.000000 \n\tC81.000000,145.000000 41.000000,145.000000 1.000000,145.000000 \n\tC1.000000,116.166664 1.000000,87.333336 1.000000,58.000000 \nM60.871616,137.397705 \n\tC91.838165,132.569168 115.824997,107.059555 117.909157,76.739212 \n\tC120.154404,44.075375 100.455048,15.506556 69.700943,6.372430 \n\tC55.784351,2.239130 42.002609,4.206320 28.152130,6.286568 \n\tC19.832563,7.536110 11.516739,8.810585 3.147312,10.081740 \n\tC9.561021,54.696663 15.876384,98.627480 22.247646,142.947144 \n\tC35.082119,141.132248 47.555752,139.368378 60.871616,137.397705 \nz"}}),this._v(" "),e("path",{attrs:{fill:"#29903D",opacity:"1.000000",stroke:"none",d:"\nM60.450500,137.501099 \n\tC47.555752,139.368378 35.082119,141.132248 22.247646,142.947144 \n\tC15.876384,98.627480 9.561021,54.696663 3.147312,10.081740 \n\tC11.516739,8.810585 19.832563,7.536110 28.152130,6.286568 \n\tC42.002609,4.206320 55.784351,2.239130 69.700943,6.372430 \n\tC100.455048,15.506556 120.154404,44.075375 117.909157,76.739212 \n\tC115.824997,107.059555 91.838165,132.569168 60.450500,137.501099 \nM76.793251,31.630545 \n\tC60.647289,20.532324 43.395382,23.646059 25.920120,27.343946 \n\tC26.672770,32.796547 27.251474,37.918980 28.177761,42.977768 \n\tC28.382746,44.097256 29.629971,45.427147 30.724600,45.896030 \n\tC32.781235,46.776985 35.076576,47.100666 37.272655,47.656078 \n\tC38.736366,46.680695 41.508900,45.721127 41.932899,46.348583 \n\tC43.647209,48.885471 44.449657,49.412319 45.686077,46.135464 \n\tC45.800625,45.831879 48.702263,45.886784 49.022392,46.475407 \n\tC50.320450,48.862106 51.364120,49.094086 52.717297,46.703945 \n\tC54.385384,43.757568 55.907372,44.744576 56.564140,47.136169 \n\tC57.319901,49.888241 58.130245,50.059883 59.953640,48.063187 \n\tC61.930115,45.898846 63.582726,46.299351 63.681061,49.202644 \n\tC63.793011,52.507652 64.462959,52.959904 66.946899,50.706749 \n\tC67.444656,50.255245 68.785683,50.237206 69.422920,50.589317 \n\tC69.952980,50.882210 70.394020,52.106129 70.230370,52.755257 \n\tC69.386353,56.102966 70.304955,56.487770 73.082230,54.795326 \n\tC73.624306,54.464996 75.053833,54.719467 75.426842,55.203228 \n\tC75.895866,55.811520 76.017769,57.053490 75.731804,57.811726 \n\tC74.729523,60.469345 75.328072,61.192112 78.086662,60.322594 \n\tC78.781647,60.103531 80.266991,60.464046 80.430946,60.910282 \n\tC80.725273,61.711323 80.044128,62.831329 80.230530,63.721775 \n\tC80.447205,64.756821 81.024536,66.420433 81.677727,66.539825 \n\tC84.729774,67.097702 85.083092,67.745789 83.666321,70.281563 \n\tC83.301277,70.934929 83.966881,72.993385 84.596825,73.227272 \n\tC87.084854,74.151047 88.010254,75.300514 85.616905,77.118210 \n\tC83.303871,78.874908 82.671646,79.915794 86.040024,81.026436 \n\tC86.401306,81.145561 86.136497,83.509453 85.918800,84.790688 \n\tC85.865646,85.103546 84.850349,85.252922 84.277428,85.477463 \n\tC87.391487,89.010971 85.759048,91.725647 82.771553,94.206558 \n\tC87.942230,99.021469 81.581787,98.156967 80.350281,99.761116 \n\tC80.250290,101.618866 79.595490,104.826378 79.229492,104.793770 \n\tC73.860931,104.315239 76.133881,107.590782 76.400734,109.986923 \n\tC101.495018,96.140739 108.373810,53.712864 76.793251,31.630545 \nz"}}),this._v(" "),e("path",{attrs:{fill:"#FCFDFC",opacity:"1.000000",stroke:"none",d:"\nM77.102448,31.819195 \n\tC108.373810,53.712864 101.495018,96.140739 76.400734,109.986923 \n\tC76.133881,107.590782 73.860931,104.315239 79.229492,104.793770 \n\tC79.595490,104.826378 80.250290,101.618866 80.350281,99.761116 \n\tC81.581787,98.156967 87.942230,99.021469 82.771553,94.206558 \n\tC85.759048,91.725647 87.391487,89.010971 84.277428,85.477463 \n\tC84.850349,85.252922 85.865646,85.103546 85.918800,84.790688 \n\tC86.136497,83.509453 86.401306,81.145561 86.040024,81.026436 \n\tC82.671646,79.915794 83.303871,78.874908 85.616905,77.118210 \n\tC88.010254,75.300514 87.084854,74.151047 84.596825,73.227272 \n\tC83.966881,72.993385 83.301277,70.934929 83.666321,70.281563 \n\tC85.083092,67.745789 84.729774,67.097702 81.677727,66.539825 \n\tC81.024536,66.420433 80.447205,64.756821 80.230530,63.721775 \n\tC80.044128,62.831329 80.725273,61.711323 80.430946,60.910282 \n\tC80.266991,60.464046 78.781647,60.103531 78.086662,60.322594 \n\tC75.328072,61.192112 74.729523,60.469345 75.731804,57.811726 \n\tC76.017769,57.053490 75.895866,55.811520 75.426842,55.203228 \n\tC75.053833,54.719467 73.624306,54.464996 73.082230,54.795326 \n\tC70.304955,56.487770 69.386353,56.102966 70.230370,52.755257 \n\tC70.394020,52.106129 69.952980,50.882210 69.422920,50.589317 \n\tC68.785683,50.237206 67.444656,50.255245 66.946899,50.706749 \n\tC64.462959,52.959904 63.793011,52.507652 63.681061,49.202644 \n\tC63.582726,46.299351 61.930115,45.898846 59.953640,48.063187 \n\tC58.130245,50.059883 57.319901,49.888241 56.564140,47.136169 \n\tC55.907372,44.744576 54.385384,43.757568 52.717297,46.703945 \n\tC51.364120,49.094086 50.320450,48.862106 49.022392,46.475407 \n\tC48.702263,45.886784 45.800625,45.831879 45.686077,46.135464 \n\tC44.449657,49.412319 43.647209,48.885471 41.932899,46.348583 \n\tC41.508900,45.721127 38.736366,46.680695 37.272655,47.656078 \n\tC35.076576,47.100666 32.781235,46.776985 30.724600,45.896030 \n\tC29.629971,45.427147 28.382746,44.097256 28.177761,42.977768 \n\tC27.251474,37.918980 26.672770,32.796547 25.920120,27.343946 \n\tC43.395382,23.646059 60.647289,20.532324 77.102448,31.819195 \nz"}})])}),[],!1,null,null,null).exports,m=c.a.extend({data:function(){return{loggedIn:!1,isDarkMode:!1}},components:{Checkout:d,Logo:h},props:["title"],methods:{toggleDarkMode:function(){this.isDarkMode=!this.isDarkMode,window.toggleDarkMode(this.isDarkMode)}},mounted:function(){this.isDarkMode=null!=window.localStorage.getItem("isDarkMode")&&"false"!=window.localStorage.getItem("isDarkMode")},created:function(){var t=this;"undefined"!=typeof window&&document.addEventListener("snipcart.ready",Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Snipcart.events.on("customer.signedin",(function(e){t.loggedIn=!0})),Snipcart.events.on("customer.signedout",(function(){t.loggedIn=!1})),e.next=4,Snipcart.ready;case 4:t.loggedIn="SignedIn"===Snipcart.store.getState().customer.status?t.loggedIn=!0:t.loggedIn=!1;case 5:case"end":return e.stop()}}),e)}))))}}),f=Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header__container"},[n("nuxt-link",{staticClass:"header__link header__left",attrs:{to:"/"}},[n("Logo",{staticClass:"header__logo"}),t._v(" "),n("h1",{staticClass:"header__title"},[t._v(t._s(t.title))])],1),t._v(" "),n("div",{staticClass:"header__right"},[n("label",{staticClass:"toggle"},[n("svg",{staticClass:"before",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"moon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}})]),t._v(" "),n("svg",{staticClass:"after",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sun",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}})]),t._v(" "),n("input",{staticClass:"toggle-checkbox",attrs:{type:"checkbox"},domProps:{checked:t.isDarkMode},on:{click:t.toggleDarkMode}}),t._v(" "),n("div",{staticClass:"toggle-switch"})]),t._v(" "),n("button",{staticClass:"header__button header__account snipcart-customer-signin"},[n("div",{staticClass:"header__button-text"},[t._v("\n          "+t._s(t.loggedIn?t.$t("my_account"):t.$t("login"))+"\n        ")])]),t._v(" "),n("button",{staticClass:"header__button header__checkout snipcart-checkout"},[n("Checkout"),t._v(" "),n("span",{staticClass:"header__button-text header__price snipcart-total-price"})],1)])],1)])}),[],!1,null,null,null).exports,_=(n(226),Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticStyle:{"enable-background":"new 0 0 48 48"},attrs:{fill:"#FFFFFF",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48","xml:space":"preserve"}},[e("path",{attrs:{d:"M3.29,28.71l8,8C11.48,36.9,11.73,37,12,37s0.52-0.1,0.71-0.29S13,36.27,13,36s-0.1-0.52-0.29-0.71L6.41,29H36  c4.96,0,9-4.04,9-9s-4.04-9-9-9H20c-0.55,0-1,0.45-1,1s0.45,1,1,1h16c3.86,0,7,3.14,7,7s-3.14,7-7,7H6.41l6.29-6.29  C12.9,20.52,13,20.27,13,20s-0.1-0.52-0.29-0.71c-0.39-0.39-1.02-0.39-1.41,0l-8,8c-0.09,0.09-0.17,0.2-0.22,0.33  c-0.1,0.24-0.1,0.52,0,0.76C3.13,28.5,3.2,28.61,3.29,28.71z"}})])}),[],!1,null,"16130fed",null).exports),v=c.a.extend({components:{Back:_},props:["title"]}),C=Object(l.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notice"},[e("div",{staticClass:"notice__content"},[e("a",{staticClass:"notice__link",attrs:{href:"https://www.larryslentils.com"}},[this._v("← larryslentils.com")]),this._v(" "),e("div",{staticClass:"notice__title"},[this._v(this._s(this.title))])])])}),[],!1,null,null,null).exports;n(225);!function(t){t.Physical="physical",t.Digital="digital"}(r||(r={}));var y,w=c.a.extend({props:{product:{type:Object}},data:function(){return{quantity:1,format:r.Physical}},methods:{changeQuantity:function(t){this.quantity=Number(t.target.value)},changeFormat:function(t){this.format=t.target.value}},computed:{physicalButtonClasses:function(){return this.format===r.Physical?"":"product__button--hide"},digitalButtonClasses:function(){return this.format===r.Digital?"":"product__button--hide"}}}),x=Object(l.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product__summary"},[n("div",[n("label",{attrs:{for:"quantity"}},[t._v(t._s(t.$t("quantity")))]),t._v(" "),n("input",{attrs:{type:"number",name:"quantity",id:"quantity",value:"1",min:"1"},on:{change:t.changeQuantity}})]),t._v(" "),n("div",[n("label",{attrs:{for:"format"}},[t._v(t._s(t.$t("format")))]),t._v(" "),n("select",{attrs:{name:"format",id:"format"},on:{change:t.changeFormat}},[n("option",{attrs:{value:"physical"}},[t._v(t._s(t.$t("physical_copy")))]),t._v(" "),n("option",{attrs:{value:"digital"}},[t._v(t._s(t.$t("digital_copy")))])])]),t._v(" "),n("div",{staticClass:"product__price"},[t._v("$"+t._s((t.quantity*t.product.prices[t.format]).toFixed(2)))]),t._v(" "),n("button",{class:"product__button snipcart-add-item "+t.physicalButtonClasses,attrs:{"data-item-id":t.product.id,"data-item-price":t.product.prices.physical,"data-item-url":"https://demo.snipcart.com/","data-item-description":t.product.description,"data-item-image":t.product.image,"data-item-name":t.product.name,"data-item-quantity":t.quantity}},[t._v(t._s(t.$t("add_to_cart")))]),t._v(" "),n("button",{class:"product__button snipcart-add-item "+t.digitalButtonClasses,attrs:{"data-item-id":t.product.id+"-digital","data-item-price":t.product.prices.digital,"data-item-url":"https://demo.snipcart.com/","data-item-description":t.product.description,"data-item-image":t.product.image,"data-item-name":t.product.name+" (.jpg)","data-item-quantity":t.quantity,"data-item-file-guid":t.product.fileGuid}},[t._v(t._s(t.$t("add_to_cart")))])])}),[],!1,null,null,null).exports,k=(n(61),n(23),n(25),n(37),n(21));n(31);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.Physical="physical",t.Digital="digital"}(y||(y={}));var M,L=c.a.extend({props:{product:{type:Object}},computed:{defaultPlan:function(){return this.product.plans[0]},displayPrice:function(){return"$".concat(this.defaultPlan.price.toFixed(2)," / ").concat(this.displayFrequency)},displayFrequency:function(){switch(this.defaultPlan.frequency){case"daily":return"day";case"weekly":return"week";case"monthly":return"month"}},planData:function(){return this.product.plans.map((function(t,e){var n,i=e+1,r=(n={},Object(k.a)(n,"data-plan".concat(i,"-name"),t.name),Object(k.a)(n,"data-plan".concat(i,"-id"),t.id),Object(k.a)(n,"data-plan".concat(i,"-frequency"),t.frequency),Object(k.a)(n,"data-plan".concat(i,"-interval"),t.interval),Object(k.a)(n,"data-item-plan".concat(i,"-price"),t.price),n);return 0==e&&(r["data-item-selected-plan"]=t.id),r})).reduce((function(t,e){return j(j({},t),e)}),{})}}}),F=Object(l.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subscription__summary"},[n("div",{staticClass:"subscription__price"},[t._v("\n            "+t._s(t.displayPrice)+"\n        ")]),t._v(" "),n("button",t._b({staticClass:"product__button snipcart-add-item",attrs:{"data-item-id":t.product.id,"data-item-price":t.product.prices.physical,"data-item-url":"https://demo.snipcart.com/","data-item-description":t.product.description,"data-item-image":t.product.image,"data-item-name":t.product.name}},"button",t.planData,!1),[t._v(t._s(t.$t("subscribe"))+"\n        ")])])}),[],!1,null,null,null).exports;!function(t){t.Physical="physical",t.Digital="digital"}(M||(M={}));var E=c.a.extend({components:{ProductBuyButton:x,SubscriptionBuyButton:F},data:function(){return{quantity:1,format:M.Physical}},methods:{changeQuantity:function(t){this.quantity=Number(t.target.value)},changeFormat:function(t){this.format=t.target.value}},computed:{physicalButtonClasses:function(){return this.format===M.Physical?"":"product__button--hide"},digitalButtonClasses:function(){return this.format===M.Digital?"":"product__button--hide"},hasPlans:function(){return this.data.plans.length>0}},props:["data"]}),I=Object(l.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product"},[n("img",{staticClass:"product__image",attrs:{src:t.data.image,alt:""}}),t._v(" "),n("div",{staticClass:"product__content"},[n("h2",{staticClass:"product__title"},[t._v(t._s(t.data.name))]),t._v(" "),n("p",{staticClass:"product__description"},[t._v(t._s(t.data.description))]),t._v(" "),t.hasPlans?n("subscription-buy-button",{attrs:{product:t.data}}):n("product-buy-button",{attrs:{product:t.data}})],1)])}),[],!1,null,null,null).exports,P=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("g",[n("g",[n("path",{attrs:{d:"M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016\n\t\t\tc-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992\n\t\t\tc0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056\n\t\t\tc0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152\n\t\t\tc0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792\n\t\t\tc13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44\n\t\t\tC46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568\n\t\t\tC480.224,136.96,497.728,118.496,512,97.248z"}})])]),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g"),t._v(" "),n("g")])}),[],!1,null,null,null).exports,D=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"enable-background":"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"}})])}),[],!1,null,null,null).exports,$=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{id:"Bold","enable-background":"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"}})])}),[],!1,null,null,null).exports,B=c.a.extend({components:{Twitter:P,Github:D,Facebook:$}}),N=Object(l.a)(B,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer__container"},[e("div",{staticClass:"footer__copy"},[this._v(this._s(this.$t("footer_text")))]),this._v(" "),e("div",{staticClass:"footer__socials"},[e("a",{attrs:{href:"https://twitter.com/DeliverHealthyU"}},[e("Twitter",{staticClass:"footer__icon"})],1),this._v(" "),e("a",{attrs:{href:"https://www.facebook.com/deliverhealthy/"}},[e("Facebook",{staticClass:"footer__icon"})],1)])])])}),[],!1,null,null,null).exports,S=[{id:"demo-magazine-subscription",name:"Unlimited B2B introductions, featuring Larry's Lentils & Friends",prices:{physical:99,digital:0},description:"Subscribe to our B2B hospitality service, featuring 'Larry's Lentils and Friends'. Enjoy unlimited hosted introductions to freelancers at our locations with savory foods. Taste power! Choose a weekly or monthly subscription. Contact us directly for 'Pay Whatever' payment options.",image:"/images/ah.jpg",plans:[{frequency:"monthly",id:"magazine-monthly-plan",interval:1,name:"Monthly subscription",price:99},{frequency:"weekly",id:"magazine-weekly-plan",interval:1,name:"Weekly subscription",price:35}]}],H=[{id:"demo-starry-night",name:"Nuit étoilée",prices:{physical:79.95,digital:29.75},description:"Réplique d'excellente qualité de La Nuit Étoilée par le paintre Vincent van Gogh.",image:"/images/starry-night.jpg",fileGuid:"09e589c7-3d18-4c2e-9cee-4f447e9f054a",plans:[]},{id:"demo-magazine-subscription",name:"Abonnement au magazine",prices:{physical:10,digital:0},description:"Abonnez-vous à notre magazine pour paintres. Un abonnement hebdomadaire ou mensuel est disponible.",image:"/images/painting.jpg",plans:[{frequency:"monthly",id:"magazine-monthly-plan",interval:1,name:"Abonnement mensuel",price:20},{frequency:"weekly",id:"magazine-weekly-plan",interval:1,name:"Abonnement hebdomadaire",price:10}]},{id:"demo-rosy",name:"Rosy-Fingered Dawn at Louse Point",prices:{physical:49.95,digital:29.75},description:"Le titre Rosy-Fingered Dawn at Louse Point réfère à un des endroits préférés de Willem de Kooning's à Long Island.",image:"/images/rosy.jpg",fileGuid:"98dbd416-159d-4f76-8a59-30703cf6189f",plans:[]},{id:"demo-irises",name:"Irises",prices:{physical:65.95,digital:29.75},description:"Irises est, encore une fois, une peinture de Vincent van Gogh.",image:"/images/irises.jpg",fileGuid:"66edfe7f-0851-4418-93e8-785975df7318",plans:[]},{id:"demo-almond",name:"Branches with Almond Blossom",prices:{physical:99.95,digital:29.75},description:"Branches with Almond Blossom est un autre van Gogh peint en 1890.",image:"/images/almond.jpg",fileGuid:"79b1504d-9127-4e7f-bcdb-dff84a337775",plans:[]}],z=c.a.extend({components:{Header:f,Notice:C,Product:I,Footer:N},head:function(){return{title:this.$i18n.t("full_title").toString()}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.i18n,e.abrupt("return",{products:"fr"==n.locale?H:S});case 2:case"end":return e.stop()}}),e)})))()}}),A=Object(l.a)(z,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("Notice",{attrs:{title:this.$t("notice")}}),this._v(" "),e("Header",{attrs:{title:this.$t("title")}}),this._v(" "),e("div",{staticClass:"index__gallery"},[this._l(this.products,(function(t,n){return[e("Product",{key:n,attrs:{data:t}})]}))],2),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=A.exports}}]);