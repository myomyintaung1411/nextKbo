(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-393486ec"],{"0a1c":function(t,e,n){t.exports=n.p+"img/ba2.a3e800c3.jpg"},"10a6":function(t,e,n){t.exports=n.p+"img/qrcode.8b3421f8.png"},"124a":function(t,e,n){t.exports=n.p+"img/g.048eeef3.png"},1276:function(t,e,n){"use strict";var a=n("d784"),r=n("44e7"),i=n("825a"),s=n("1d80"),o=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),f=n("d039"),g=[].push,p=Math.min,h=4294967295,v=!f((function(){return!RegExp(h,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(s(this)),i=void 0===n?h:n>>>0;if(0===i)return[];if(void 0===t)return[a];if(!r(t))return e.call(a,t,i);var o,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,f+"g");while(o=d.call(v,a)){if(c=v.lastIndex,c>p&&(u.push(a.slice(p,o.index)),o.length>1&&o.index<a.length&&g.apply(u,o.slice(1)),l=o[0].length,p=c,u.length>=i))break;v.lastIndex===o.index&&v.lastIndex++}return p===a.length?!l&&v.test("")||u.push(""):u.push(a.slice(p)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,n):a.call(String(r),e,n)},function(t,r){var s=n(a,t,this,r,a!==e);if(s.done)return s.value;var d=i(t),f=String(this),g=o(d,RegExp),x=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),b=new g(v?d:"^(?:"+d.source+")",m),y=void 0===r?h:r>>>0;if(0===y)return[];if(0===f.length)return null===u(b,f)?[f]:[];var C=0,w=0,_=[];while(w<f.length){b.lastIndex=v?w:0;var S,A=u(b,v?f:f.slice(w));if(null===A||(S=p(l(b.lastIndex+(v?0:w)),f.length))===C)w=c(f,w,x);else{if(_.push(f.slice(C,w)),_.length===y)return _;for(var E=1;E<=A.length-1;E++)if(_.push(A[E]),_.length===y)return _;w=C=S}}return _.push(f.slice(C)),_}]}),!v)},"14c3":function(t,e,n){var a=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"16a9":function(t,e,n){"use strict";n("51c2")},2911:function(t,e,n){t.exports=n.p+"img/card3.2fc432d3.png"},"2e9a":function(t,e,n){t.exports=n.p+"img/f22.e3753a1b.png"},3069:function(t,e,n){t.exports=n.p+"img/ba1.69985a68.jpg"},3662:function(t,e,n){"use strict";n("dd13")},"44e7":function(t,e,n){var a=n("861d"),r=n("c6b6"),i=n("b622"),s=i("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},"4a93":function(t,e,n){t.exports=n.p+"img/f11.a003fefd.png"},"51c2":function(t,e,n){},"5e1f":function(t,e,n){t.exports=n.p+"img/footerimg.9f6c5495.png"},"5f67":function(t,e,n){t.exports=n.p+"img/scrollinfo.85f228ec.png"},6547:function(t,e,n){var a=n("a691"),r=n("1d80"),i=function(t){return function(e,n){var i,s,o=String(r(e)),c=a(n),l=o.length;return c<0||c>=l?t?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===l||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):i:t?o.slice(c,c+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"6b3f":function(t,e,n){t.exports=n.p+"img/card2.10853de6.png"},"7d61":function(t,e,n){t.exports=n.p+"img/ba3.a2e52ae6.jpg"},8753:function(t,e,n){t.exports=n.p+"img/f33.d79535e6.png"},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(o=function(t){var e,n,r,o,d=this,f=l&&d.sticky,g=a.call(d),p=d.source,h=0,v=t;return f&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",v=" "+v,h++),n=new RegExp("^(?:"+p+")",g)),u&&(n=new RegExp("^"+p+"$(?!\\s)",g)),c&&(e=d.lastIndex),r=i.call(f?n:d,v),f?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:c&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&s.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},9863:function(t,e,n){t.exports=n.p+"img/card4.e571a062.png"},"99af":function(t,e,n){"use strict";var a=n("23e7"),r=n("d039"),i=n("e8b5"),s=n("861d"),o=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),g=n("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",x=g>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},y=!x||!m;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,a,r,i,s=o(this),d=u(s,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?s:arguments[e],b(i)){if(r=c(i.length),f+r>h)throw TypeError(v);for(n=0;n<r;n++,f++)n in i&&l(d,f,i[n])}else{if(f>=h)throw TypeError(v);l(d,f++,i)}return d.length=f,d}})},"9f7f":function(t,e,n){"use strict";var a=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a033:function(t,e,n){t.exports=n.p+"img/d.d5387108.png"},a6cb:function(t,e,n){t.exports=n.p+"img/s.fbcc0dd9.png"},ac1f:function(t,e,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Banner"),a("div",{staticClass:"main_section"},[a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"customer-service"},[a("img",{staticClass:"img",attrs:{src:n("c7a0"),alt:"",draggable:"false"},on:{click:function(e){return t.Service()}}}),a("div",{staticClass:"qr_code"},[a("img",{attrs:{src:n("10a6"),alt:"",height:"200px",width:"100%"}}),a("div",{staticClass:"text"},[t._v("QQ: "+t._s(t.qq))]),a("div",{staticClass:"text"},[t._v("WX: "+t._s(t.wx))]),a("div",{staticClass:"text"},[t._v("PH: "+t._s(t.ph))])])])]),a("div",{staticClass:"scroll_parent"},[a("div",{staticClass:"scroll_div"},[a("img",{staticStyle:{position:"absolute",top:"5px",left:"400px"},attrs:{src:n("5f67"),alt:"",height:"30px",width:"auto",draggable:"false"}}),a("div",{staticClass:"scroll"},[a("marquee",{staticStyle:{cursor:"pointer",color:"#fff","font-size":"16px","font-weight":"800","text-align":"center",width:"100%"},attrs:{onmouseover:"this.stop();",onmouseout:"this.start();"}},[t._v(" 为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！ ")])],1)])]),a("div",{staticClass:"main_body"},[a("img",{staticClass:"img1",attrs:{src:n("c1985"),alt:"",draggable:"false"},on:{click:function(e){return t.PlayGround()}}}),a("img",{staticClass:"img2",attrs:{src:n("6b3f"),alt:"",draggable:"false"}}),a("img",{staticClass:"img3",attrs:{src:n("2911"),alt:"",draggable:"false"}}),a("img",{staticClass:"img4",attrs:{src:n("9863"),alt:"",draggable:"false"}}),a("img",{staticClass:"service",attrs:{src:n("bcab"),alt:"",draggable:"false"}}),a("span",{staticClass:"txt1"},[t._v("易记域名")]),a("span",{staticClass:"txt2",on:{click:function(e){return t.GoKb()}}},[t._v("KB1234.COM")]),a("img",{staticClass:"d_img",attrs:{src:n("a033"),alt:"",width:"auto",height:"auto",draggable:"false"}}),a("img",{staticClass:"g_img",attrs:{src:n("124a"),alt:"",width:"auto",height:"auto",draggable:"false"}}),a("img",{staticClass:"s_img",attrs:{src:n("a6cb"),alt:"",width:"auto",height:"auto",draggable:"false"}})])]),t._m(0),t._m(1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer_main"},[a("div",{staticClass:"sub-footer"},[a("div",{staticClass:"footer-des"},[a("span",{staticClass:"footer-text"},[t._v("关于我们")]),a("span",{staticClass:"line"}),a("span",{staticClass:"footer-text"},[t._v("联系我们")]),a("span",{staticClass:"line"}),a("span",{staticClass:"footer-text"},[t._v("合作伙伴")]),a("span",{staticClass:"line"}),a("span",{staticClass:"footer-text"},[t._v("存款帮助")]),a("span",{staticClass:"line"}),a("span",{staticClass:"footer-text"},[t._v("取款帮助")]),a("span",{staticClass:"line"}),a("span",{staticClass:"footer-text"},[t._v("常见问题")])]),a("img",{staticStyle:{cursor:"pointer"},attrs:{src:n("5e1f"),alt:"",width:"100%",height:"40px",draggable:"false"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"th_text_div"},[a("div",{staticClass:"sub_txtdiv"},[a("div",{staticClass:"title"},[a("h1",[t._v("关于凯博娱乐")]),a("h1",[t._v("全新产品")]),a("h1",[t._v("信息中心")])])]),a("div",{staticClass:"imgparent"},[a("div",{staticStyle:{width:"250px",background:"",height:"auto"}},[a("img",{staticStyle:{width:"auto","margin-left":"0px"},attrs:{src:n("4a93"),alt:"",draggable:"false"}})]),a("div",{staticStyle:{width:"250px",background:"",height:"auto"}},[a("img",{staticStyle:{width:"auto","margin-left":"50px"},attrs:{src:n("2e9a"),alt:"",draggable:"false"}})]),a("div",{staticStyle:{width:"250px",background:"",height:"auto"}},[a("img",{staticStyle:{width:"auto","margin-left":"50px"},attrs:{src:n("8753"),alt:"",draggable:"false"}})])])])}],i=(n("99af"),n("b0c0"),n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousal"},[t._l(t.banners,(function(e,a){return n("div",{key:a,staticClass:"carousal-img"},[n("transition",{attrs:{name:"fade"}},[t.currentSlide==a?n("img",{staticStyle:{height:"400px",width:"100%"},attrs:{src:e.image}}):t._e()])],1)})),n("div",{staticStyle:{height:"390px",width:"100%",position:"relative"}},[n("div",{staticStyle:{position:"absolute",bottom:"0%",width:"100%",display:"flex","justify-content":"center"}},t._l(t.banners,(function(e,a){return n("div",{key:a,class:t.currentSlide==a?"gray":"white",staticStyle:{width:"60px",height:"15px","border-radius":"10%",cursor:"pointer",margin:"5px"},on:{click:function(e){return t.makeActive(a)}}})})),0)])],2)}),s=[],o={components:{},data:function(){return{currentSlide:1,banners:[{image:n("3069")},{image:n("0a1c")},{image:n("7d61")}],interval:"",isTitleShowing:!0}},methods:{makeActive:function(t){this.currentSlide=t}},mounted:function(){var t=this;this.interval=setInterval((function(){t.currentSlide=2===t.currentSlide?0:t.currentSlide+1}),4e3)},beforeUnmount:function(){clearInterval(this.interval)}},c=o,l=(n("3662"),n("2877")),u=Object(l["a"])(c,i,s,!1,null,"43d2a5a0",null),d=u.exports,f=n("beba"),g=n("e762"),p={name:"Home",components:{Banner:d},data:function(){return{qq:"",wx:"",ph:"",scrolldata:"",id:this.$Global.myLoginInfo.loginId}},methods:{GetScrollData:function(t){var e=this,n=this.$Global.en,a=JSON.stringify({Id:t}),r=f["a"].encrypt(a,n);this.axios.post(this.$Global.scrollData,{data:r}).then((function(t){var a=t.data,r=JSON.parse(f["a"].decrypt(a,n));200==r.JsonData.code?e.scrolldata=r.JsonData.msg:e.scrolldata="为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！"})).catch((function(t){console.log(t)}))},PlayGround:function(){if(0==this.$store.state.login)return this.$message.warning("请先登录");var t=this.$Global.gameEn,e={name:this.$store.state.myAccount,password:this.$md5(this.$store.state.myPassword)},n=f["a"].encrypt(JSON.stringify(e),t);window.open("http://kb1234.com/?token=".concat(n))},GoKb:function(){window.open("http://kb1234.com")},GetAgentdata:function(t){var e=this,n=this.$Global.en,a=JSON.stringify({Id:t}),r=f["a"].encrypt(a,n);this.axios.post(this.$Global.agentUrl,{data:r}).then((function(t){var a=t.data,r=JSON.parse(f["a"].decrypt(a,n));200==r.JsonData.code&&(e.qq=r.JsonData.QQ,e.wx=r.JsonData.WXH,e.ph=r.JsonData.phone,e.$Global.optioner.QQ=r.JsonData.QQ,e.$Global.optioner.WX=r.JsonData.WXH,e.$Global.optioner.PH=r.JsonData.phone,e.$Global.optioner.Agentid=r.JsonData.Id,e.$Global.optioner.Agentname=r.JsonData.name)})).catch((function(t){console.log(t)}))},randomString:function(t,e){e=e||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/";for(var n="",a=0;a<t;a++){var r=Math.floor(Math.random()*e.length);n+=e.substring(r,r+1)}return n},doEncrypt:function(){var t={acc:this.$store.state.myAccount,pwd:this.$md5(this.$store.state.myPassword),agent:5},e=g["a"].encode(JSON.stringify(t)),n=e.substring(0,8),a=e.substring(8),r=n+this.randomString(8),i=this.randomString(9)+r+a;return i},Service:function(){if(1==this.$store.state.login){var t=this.$Global.myLoginInfo.loginId,e=this.$Global.myLoginInfo.loginName;window.open("https://www.maiijf888.com/index/index/home?visiter_id=".concat(t,"&visiter_name=").concat(e,"&avatar=&business_id=40&groupid=0&special=50"))}else window.open("https://www.maiijf888.com/index/index/home?visiter_id=&visiter_name=&avatar=&business_id=40&groupid=0&special=50")}},created:function(){var t=window.location.href,e=t,n=e.split(".")[0],a=n.split("//")[1];this.GetAgentdata(a),this.GetScrollData(this.id)}},h=p,v=(n("16a9"),Object(l["a"])(h,a,r,!1,null,"3b49d226",null));e["default"]=v.exports},bcab:function(t,e,n){t.exports=n.p+"img/cu_service.67598180.png"},c1985:function(t,e,n){t.exports=n.p+"img/card1.6c15004b.png"},c7a0:function(t,e,n){t.exports=n.p+"img/serviceimg.e426d84e.png"},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),s=n("9263"),o=n("9112"),c=i("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),g=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var p=i(t),h=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=h&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!h||!v||"replace"===t&&(!l||!u||f)||"split"===t&&!g){var x=/./[p],m=n(p,""[t],(function(t,e,n,a,r){return e.exec===s?h&&!r?{done:!0,value:x.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=m[0],y=m[1];a(String.prototype,t,b),a(RegExp.prototype,p,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&o(RegExp.prototype[p],"sham",!0)}},dd13:function(t,e,n){},e762:function(t,e,n){"use strict";n.d(e,"a",(function(){return L}));const a="3.6.0",r=a,i="function"===typeof atob,s="function"===typeof btoa,o="function"===typeof Buffer,c="function"===typeof TextDecoder?new TextDecoder:void 0,l="function"===typeof TextEncoder?new TextEncoder:void 0,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=[...u],f=(t=>{let e={};return t.forEach((t,n)=>e[t]=n),e})(d),g=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,p=String.fromCharCode.bind(String),h="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),v=t=>t.replace(/[+\/]/g,t=>"+"==t?"-":"_").replace(/=+$/m,""),x=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),m=t=>{let e,n,a,r,i="";const s=t.length%3;for(let o=0;o<t.length;){if((n=t.charCodeAt(o++))>255||(a=t.charCodeAt(o++))>255||(r=t.charCodeAt(o++))>255)throw new TypeError("invalid character found");e=n<<16|a<<8|r,i+=d[e>>18&63]+d[e>>12&63]+d[e>>6&63]+d[63&e]}return s?i.slice(0,s-3)+"===".substring(s):i},b=s?t=>btoa(t):o?t=>Buffer.from(t,"binary").toString("base64"):m,y=o?t=>Buffer.from(t).toString("base64"):t=>{const e=4096;let n=[];for(let a=0,r=t.length;a<r;a+=e)n.push(p.apply(null,t.subarray(a,a+e)));return b(n.join(""))},C=(t,e=!1)=>e?v(y(t)):y(t),w=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?p(192|e>>>6)+p(128|63&e):p(224|e>>>12&15)+p(128|e>>>6&63)+p(128|63&e)}e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return p(240|e>>>18&7)+p(128|e>>>12&63)+p(128|e>>>6&63)+p(128|63&e)},_=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,S=t=>t.replace(_,w),A=o?t=>Buffer.from(t,"utf8").toString("base64"):l?t=>y(l.encode(t)):t=>b(S(t)),E=(t,e=!1)=>e?v(A(t)):A(t),I=t=>E(t,!0),$=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,R=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),n=e-65536;return p(55296+(n>>>10))+p(56320+(1023&n));case 3:return p((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return p((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},B=t=>t.replace($,R),D=t=>{if(t=t.replace(/\s+/g,""),!g.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,n,a,r="";for(let i=0;i<t.length;)e=f[t.charAt(i++)]<<18|f[t.charAt(i++)]<<12|(n=f[t.charAt(i++)])<<6|(a=f[t.charAt(i++)]),r+=64===n?p(e>>16&255):64===a?p(e>>16&255,e>>8&255):p(e>>16&255,e>>8&255,255&e);return r},U=i?t=>atob(x(t)):o?t=>Buffer.from(t,"base64").toString("binary"):D,G=o?t=>h(Buffer.from(t,"base64")):t=>h(U(t),t=>t.charCodeAt(0)),k=t=>G(P(t)),J=o?t=>Buffer.from(t,"base64").toString("utf8"):c?t=>c.decode(G(t)):t=>B(U(t)),P=t=>x(t.replace(/[-_]/g,t=>"-"==t?"+":"/")),T=t=>J(P(t)),O=t=>{if("string"!==typeof t)return!1;const e=t.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},F=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),N=function(){const t=(t,e)=>Object.defineProperty(String.prototype,t,F(e));t("fromBase64",(function(){return T(this)})),t("toBase64",(function(t){return E(this,t)})),t("toBase64URI",(function(){return E(this,!0)})),t("toBase64URL",(function(){return E(this,!0)})),t("toUint8Array",(function(){return k(this)}))},j=function(){const t=(t,e)=>Object.defineProperty(Uint8Array.prototype,t,F(e));t("toBase64",(function(t){return C(this,t)})),t("toBase64URI",(function(){return C(this,!0)})),t("toBase64URL",(function(){return C(this,!0)}))},q=()=>{N(),j()},L={version:a,VERSION:r,atob:U,atobPolyfill:D,btoa:b,btoaPolyfill:m,fromBase64:T,toBase64:E,encode:E,encodeURI:I,encodeURL:I,utob:S,btou:B,decode:T,isValid:O,fromUint8Array:C,toUint8Array:k,extendString:N,extendUint8Array:j,extendBuiltins:q}}}]);
//# sourceMappingURL=chunk-393486ec.f75cc4ce.js.map