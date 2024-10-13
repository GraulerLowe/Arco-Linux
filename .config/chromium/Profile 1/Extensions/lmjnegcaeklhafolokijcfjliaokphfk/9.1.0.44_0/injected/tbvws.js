"use strict";(()=>{var I=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var le=Object.prototype.hasOwnProperty;var ge=(r,e)=>()=>(r&&(e=r(r=0)),e);var M=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),me=(r,e)=>{for(var t in e)I(r,t,{get:e[t],enumerable:!0})},ce=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of oe(e))!le.call(r,n)&&n!==t&&I(r,n,{get:()=>e[n],enumerable:!(i=ae(e,n))||i.enumerable});return r};var Ae=r=>ce(I({},"__esModule",{value:!0}),r);var D=M((j,V)=>{(function(r,e){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],e);else if(typeof j<"u")e(V);else{var t={exports:{}};e(t),r.browser=t.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:j,function(r){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let e="The message port closed before a response was received.",t=i=>{let n={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(n).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class s extends WeakMap{constructor(o,m=void 0){super(m),this.createItem=o}get(o){return this.has(o)||this.set(o,this.createItem(o)),super.get(o)}}let g=a=>a&&typeof a=="object"&&typeof a.then=="function",p=(a,o)=>(...m)=>{i.runtime.lastError?a.reject(new Error(i.runtime.lastError.message)):o.singleCallbackArg||m.length<=1&&o.singleCallbackArg!==!1?a.resolve(m[0]):a.resolve(m)},A=a=>a==1?"argument":"arguments",u=(a,o)=>function(c,...x){if(x.length<o.minArgs)throw new Error(`Expected at least ${o.minArgs} ${A(o.minArgs)} for ${a}(), got ${x.length}`);if(x.length>o.maxArgs)throw new Error(`Expected at most ${o.maxArgs} ${A(o.maxArgs)} for ${a}(), got ${x.length}`);return new Promise((w,b)=>{if(o.fallbackToNoCallback)try{c[a](...x,p({resolve:w,reject:b},o))}catch(l){console.warn(`${a} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,l),c[a](...x),o.fallbackToNoCallback=!1,o.noCallback=!0,w()}else o.noCallback?(c[a](...x),w()):c[a](...x,p({resolve:w,reject:b},o))})},f=(a,o,m)=>new Proxy(o,{apply(c,x,w){return m.call(x,a,...w)}}),C=Function.call.bind(Object.prototype.hasOwnProperty),S=(a,o={},m={})=>{let c=Object.create(null),x={has(b,l){return l in a||l in c},get(b,l,y){if(l in c)return c[l];if(!(l in a))return;let d=a[l];if(typeof d=="function")if(typeof o[l]=="function")d=f(a,a[l],o[l]);else if(C(m,l)){let v=u(l,m[l]);d=f(a,a[l],v)}else d=d.bind(a);else if(typeof d=="object"&&d!==null&&(C(o,l)||C(m,l)))d=S(d,o[l],m[l]);else if(C(m,"*"))d=S(d,o[l],m["*"]);else return Object.defineProperty(c,l,{configurable:!0,enumerable:!0,get(){return a[l]},set(v){a[l]=v}}),d;return c[l]=d,d},set(b,l,y,d){return l in c?c[l]=y:a[l]=y,!0},defineProperty(b,l,y){return Reflect.defineProperty(c,l,y)},deleteProperty(b,l){return Reflect.deleteProperty(c,l)}},w=Object.create(a);return new Proxy(w,x)},$=a=>({addListener(o,m,...c){o.addListener(a.get(m),...c)},hasListener(o,m){return o.hasListener(a.get(m))},removeListener(o,m){o.removeListener(a.get(m))}}),se=new s(a=>typeof a!="function"?a:function(m){let c=S(m,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}),q=new s(a=>typeof a!="function"?a:function(m,c,x){let w=!1,b,l=new Promise(_=>{b=function(E){w=!0,_(E)}}),y;try{y=a(m,c,b)}catch(_){y=Promise.reject(_)}let d=y!==!0&&g(y);if(y!==!0&&!d&&!w)return!1;let v=_=>{_.then(E=>{x(E)},E=>{let L;E&&(E instanceof Error||typeof E.message=="string")?L=E.message:L="An unexpected error occurred",x({__mozWebExtensionPolyfillReject__:!0,message:L})}).catch(E=>{console.error("Failed to send onMessage rejected reply",E)})};return v(d?y:l),!0}),ne=({reject:a,resolve:o},m)=>{i.runtime.lastError?i.runtime.lastError.message===e?o():a(new Error(i.runtime.lastError.message)):m&&m.__mozWebExtensionPolyfillReject__?a(new Error(m.message)):o(m)},B=(a,o,m,...c)=>{if(c.length<o.minArgs)throw new Error(`Expected at least ${o.minArgs} ${A(o.minArgs)} for ${a}(), got ${c.length}`);if(c.length>o.maxArgs)throw new Error(`Expected at most ${o.maxArgs} ${A(o.maxArgs)} for ${a}(), got ${c.length}`);return new Promise((x,w)=>{let b=ne.bind(null,{resolve:x,reject:w});c.push(b),m.sendMessage(...c)})},ie={devtools:{network:{onRequestFinished:$(se)}},runtime:{onMessage:$(q),onMessageExternal:$(q),sendMessage:B.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:B.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},O={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return n.privacy={network:{"*":O},services:{"*":O},websites:{"*":O}},S(i,ie,n)};r.exports=t(chrome)}else r.exports=globalThis.browser})});var H=M((Ne,k)=>{"use strict";k.exports.browser=D();var T;typeof browser>"u"&&typeof chrome<"u"&&chrome.runtime?/\bOPR\//.test(navigator.userAgent)?T="opera":T="chrome":/\bEdge\//.test(navigator.userAgent)?T="edge":T="firefox",k.exports.browserType=T,typeof k.exports.browser.action>"u"&&(k.exports.browser.action=k.exports.browser.browserAction),k.exports.isBrowser=(...r)=>{for(let e=0;e<r.length;e++)if(r[e]==k.exports.browserType)return!0;return!1},k.exports.error=r=>{console.groupCollapsed(r.message),r.stack&&console.error(r.stack),console.groupEnd()}});var K=M((Re,W)=>{"use strict";var F=class{constructor(){this.replyId=0,this.replies={},this.listeners={},this.hook=this.nullHook,this.debugLevel=0,this.useTarget=!1,this.logger=console,this.posts={}}setPost(e,t){typeof e=="string"?this.posts[e]=t:this.post=e}setUseTarget(e){this.useTarget=e}setDebugLevel(e){this.debugLevel=e}setHook(e){let t=this,i=Date.now();function n(){return typeof window<"u"&&typeof window.performance<"u"?window.performance.now():Date.now()-i}e?this.hook=s=>{s.timestamp=n();try{e(s)}catch(g){t.logger.warn("Hoor error",g)}}:this.hook=this.nullHook}nullHook(){}call(){let e=this,t,i,n,s,g=Array.prototype.slice.call(arguments);return typeof g[0]=="function"&&(t=g.shift()),e.useTarget?[i,n,...s]=g:[n,...s]=g,new Promise(function(p,A){let u=++e.replyId;e.debugLevel>=2&&e.logger.info("rpc #"+u,"call =>",n,s),e.hook({type:"call",callee:i,rid:u,method:n,args:s}),e.replies[u]={resolve:p,reject:A,peer:i};let f=t||e.useTarget&&e.posts[i]||e.post;e.useTarget?f(i,{type:"weh#rpc",_request:u,_method:n,_args:[...s]}):f({type:"weh#rpc",_request:u,_method:n,_args:[...s]})})}receive(e,t,i){let n=this;if(e._request)Promise.resolve().then(()=>{let s=n.listeners[e._method];if(typeof s=="function")return n.debugLevel>=2&&n.logger.info("rpc #"+e._request,"serve <= ",e._method,e._args),n.hook({type:"call",caller:i,rid:e._request,method:e._method,args:e._args}),Promise.resolve(s.apply(null,e._args)).then(g=>(n.hook({type:"reply",caller:i,rid:e._request,result:g}),g)).catch(g=>{throw n.hook({type:"reply",caller:i,rid:e._request,error:g.message}),g});throw new Error("Method "+e._method+" is not a function")}).then(s=>{n.debugLevel>=2&&n.logger.info("rpc #"+e._request,"serve => ",s),t({type:"weh#rpc",_reply:e._request,_result:s})}).catch(s=>{n.debugLevel>=1&&n.logger.info("rpc #"+e._request,"serve => !",s.message),t({type:"weh#rpc",_reply:e._request,_error:s.message})});else if(e._reply){let s=n.replies[e._reply];delete n.replies[e._reply],s?e._error?(n.debugLevel>=1&&n.logger.info("rpc #"+e._reply,"call <= !",e._error),n.hook({type:"reply",callee:s.peer,rid:e._reply,error:e._error}),s.reject(new Error(e._error))):(n.debugLevel>=2&&n.logger.info("rpc #"+e._reply,"call <= ",e._result),n.hook({type:"reply",callee:s.peer,rid:e._reply,result:e._result}),s.resolve(e._result)):n.logger.error("Missing reply handler")}}listen(e){Object.assign(this.listeners,e)}};W.exports=new F});var z=M(($e,Z)=>{"use strict";var h=H(),J=h.browser;h.rpc=K();h.uiName=window._wehPanelName;h.uiName||(h.uiName="injected-"+Math.round(Math.random()*1e9));var ue="weh:"+J.runtime.id+":"+h.uiName,P=J.runtime.connect({name:ue});h.rpc.setPost(P.postMessage.bind(P));P.onMessage.addListener(r=>{h.rpc.receive(r,P.postMessage.bind(P))});h.rpc.listen({setPrefs:()=>{},close:()=>{}});h.is_safe=(async()=>{await h.rpc.call("appStarted",{uiName:h.uiName}),await h.rpc.call("appReady",{uiName:h.uiName})})();Z.exports=h});var G={};me(G,{SmartNameEvaluate:()=>de});function de(r){let e=r.xpath,t=null;function i(){if(t=t&&t.trim()||"",t&&r.regexp){let s=new RegExp(r.regexp,"m").exec(t);s?typeof s[1]<"u"?t=s[1]||"":t=s[0]||"":t=""}}switch(r.mode){case"page-title":e="/html/head/title/text()";case"page-content":t=document.evaluate(e,document,null,XPathResult.STRING_TYPE,null).stringValue||null;break;case"obfuscated":return new Promise((n,s)=>{crypto.subtle.digest("SHA-256",new TextEncoder("utf-8").encode(window.location.href)).then(g=>{t=Array.from(new Uint8Array(g)).slice(0,16).map(A=>("00"+A.toString(16)).slice(-2)).join(""),i(),n(t)}).catch(s)});case"header-url":if(t=r.headerFilename||r.urlFilename,!t){let n=fe.exec(window.location.href);n?t=n[1]:t=""}break;default:t=""}return i(),t.length>128&&(t=t.substr(0,64)),t}var fe,X=ge(()=>{"use strict";fe=new RegExp("^.*?:/?/?[^/]+/(?:[^/]*/)*([^#\\?/]+?)(?:\\.[a-zA-Z0-9]{1,5})?(?:$|#|\\?|/)")});var xe=z(),{SmartNameEvaluate:pe}=(X(),Ae(G)),N="youtube",Y="YouTube",he=new RegExp('"(?:apiKey|innertubeApiKey)"s*:s*"(.*?)["]'),we=new RegExp("/(?:watch.*v=|embed/|shorts/)([^&\\?]+)"),Q=new RegExp("/base\\.js$"),be=new RegExp('\\.get\\("n"\\)\\)&&\\(b=([a-zA-Z0-9$]+)(?:\\[(\\d+)\\])?\\([a-zA-Z0-9]\\)'),ye=new URLSearchParams(window.location.search).get("vdh-bulk"),R=null,U=null;function Ee(r){let e=we.exec(window.location.href);return r.videoId=e&&e[1]||null,r}async function ke(r){if(R)return r.baseJs=R,r;let e=document.getElementsByTagName("link"),t=null;for(let i=0;i<e.length&&!t;i++){let s=e[i].getAttribute("href");s&&Q.test(s)&&(t=new URL(s,window.location.origin).href)}if(!t){let i=document.querySelectorAll("[data-version]");for(let n=0;n<i.length&&!t;n++){let g=i[n].getAttribute("data-version");g&&Q.test(g)&&(t=new URL(g,window.location.origin).href)}}if(!t)return console.log("VDH ExtractBaseJS: no base.js ref"),r;try{let i=await fetch(t);if(!i.ok)throw new Error(`request to ${t} returns ${i.status} ${i.statusText}`);let n=await i.text(),s=be.exec(n)[1];return s=new RegExp(`var ${s}\\s*=\\s*\\[(.+?)\\]\\s*[,;]`).exec(n)[1],R=new RegExp(`${s}\\s*=\\s*function\\s*\\(([\\w$]+)\\)\\s*{(.+?}\\s*return\\ [\\w$]+.join\\(""\\))};`,"s").exec(n)[2],r.baseJs=R,r}catch(i){return console.error("VDH ExtractBaseJS: getting base.js",i),null}}function ee(r,e=document){let t=null;if([...e.getElementsByTagName("script")].forEach(n=>{if(!n.getAttribute("nonce"))return;let s=n.textContent,g=s.indexOf("{"),p=s.indexOf("};");if(g>=0&&p>=0){let A=s.substring(g,p+1);try{let u=JSON.parse(A);u.streamingData&&(t&&console.log("VDH initial multiple candidates"),t=u)}catch{}}}),t&&t.videoDetails&&t.videoDetails.videoId==r.videoId&&t.streamingData){let n=t.streamingData.formats||[],s=t.streamingData.adaptiveFormats||[];(n.length||s.length)&&(r.videoDetails=t.videoDetails,r.formats=n,r.adaptiveFormats=s,n.concat(s).forEach(g=>{g.url&&(r.gotVariantUrl=!0)}))}return r}async function ve(r,e){let t=/^(https?:\/\/[^\/]+)/.exec(window.location.href)[1],i={Origin:t,"Content-Type":"application/json"};i[`X-${Y}-Client-Name`]="3";let n=`${t}/${N}i/v1/player?key=${r.apiKey}&prettyPrint=false`,s;e=="android"?s={context:{client:{clientName:"ANDROID",clientVersion:"17.31.35",androidSdkVersion:30,userAgent:`com.google.android.${N}/17.31.35 (Linux; U; Android 11) gzip`,hl:"en",timeZone:"UTC",utcOffsetMinutes:0}},videoId:r.videoId,params:"CgIQBg==",playbackContext:{contentPlaybackContext:{html5Preference:"HTML5_PREF_WANTS"}},contentCheckOk:!0,racyCheckOk:!0}:e=="tvep"?s={context:{client:{clientName:"TVHTML5_SIMPLY_EMBEDDED_PLAYER",clientVersion:"2.0",hl:"en",timeZone:"UTC",utcOffsetMinutes:0},thirdParty:{embedUrl:`https://www.${N}.com/`}},videoId:r.videoId,playbackContext:{contentPlaybackContext:{html5Preference:"HTML5_PREF_WANTS",signatureTimestamp:19585}},contentCheckOk:!0,racyCheckOk:!0}:e=="web"?s={videoId:r.videoId,context:{client:{clientName:"WEB",clientVersion:"2.20230810.05.00"}}}:s={context:{client:{clientName:"IOS",clientVersion:"17.33.2",deviceModel:"iPhone14,3",userAgent:`com.google.ios.${N}/17.33.2 (iPhone14,3; U; CPU iOS 15_6 like Mac OS X)`,hl:"en",timeZone:"UTC",utcOffsetMinutes:0}},videoId:r.videoId,playbackContext:{contentPlaybackContext:{html5Preference:"HTML5_PREF_WANTS"}},contentCheckOk:!0,racyCheckOk:!0},i["User-Agent"]=s.context.client.userAgent,i[`X-${Y}-Client-Version`]=s.context.client.clientVersion;try{if(s=await(await fetch(n,{method:"POST",headers:i,body:JSON.stringify(s)})).json(),s.videoDetails){let p=s.streamingData&&s.streamingData.formats||[],A=s.streamingData&&s.streamingData.adaptiveFormats||[];(p.length||A.length)&&(r.videoDetails=s.videoDetails,r.formats=p,r.adaptiveFormats=A),s.streamingData&&s.streamingData.hlsManifestUrl&&(r.hlsManifestUrl=s.streamingData.hlsManifestUrl)}}catch(g){console.log("VDH: getting player data",g)}return r}function _e(r){if(U)return r.apiKey=U,r;let e=document.getElementsByTagName("script"),t=null;for(let i=0;i<e.length&&!t;i++){let s=e[i].textContent,g=he.exec(s);g&&(t=g[1])}return U=t,r.apiKey=t,r}async function Te(r,e){return r.title=r.videoDetails&&r.videoDetails.title||e,window._$vdhSmartNameSpecs?new Promise((t,i)=>{setTimeout(()=>{try{let n=pe(window._$vdhSmartNameSpecs);r.title=n||r.title}finally{t(r)}},window._$vdhSmartNameSpecs.delay)}):r}function Pe(r){let e=new Set(r.map(i=>Object.keys(i)).flat()),t={};return e.forEach(i=>{if(i=="source")return;let n=r.filter(s=>typeof s[i]<"u");if(i=="formats"||i=="adaptiveFormats"){let s=new Set,g=n.map(A=>{let u={};return A[i].forEach(f=>{u[f.itag]=f}),s=new Set([...s,...Object.keys(u)]),u}),p=[];s.forEach(A=>{let u=g.filter(f=>!!f[A]);p.push(Object.assign({},...u.map(f=>f[A])))}),t[i]=p}else i=="videoDetails"?t.videoDetails=Object.assign({},...r.map(s=>s.videoDetails)):t[i]=n[n.length-1][i]}),t}async function re(r){if(window._$vdhSupportChallenge&&await ke(r),r.baseJs&&ee(r),r.baseJs&&(!r.videoDetails||!r.gotVariantUrl)){let t=await(await fetch(window.location.href)).text(),n=new DOMParser().parseFromString(t,"text/html");ee(r,n)}return r.source="local",r}function Ce(r){return _e(r),r.apiKey?window._$vdhExtractMethod.split("_").filter(e=>e!="page").reverse().map(e=>ve({source:e,videoId:r.videoId,apiKey:r.apiKey})):[]}async function te(){let r=new RegExp("^page"),e=new RegExp("page$"),t={};try{if(Ee(t),!t.videoId)throw new Error;let i=[],n=!1;e.test(window._$vdhExtractMethod)&&(i.push(re(t)),n=!0);let s=Ce(t);i.push(...s),r.test(window._$vdhExtractMethod)&&!n&&i.push(re(t));let p=(await Promise.allSettled(i)).filter(f=>f.status=="fulfilled").map(f=>f.value);Object.assign(t,Pe(p));let A=document.querySelector("meta[property='og:image']")?.getAttribute("content"),u=document.querySelector("link[as='image']")?.getAttribute("href");if(t.videoDetails){await Te(t,"No title");let f=Object.assign({},window._$vdhData,{videoId:t.videoId,thumbnailUrl:A??u,pageTitle:document.title,pageUrl:window.location.href,topUrl:window===window.top?window.location.href:window._$vdhTopUrl,title:t.title,videoDetails:t.videoDetails,formats:t.formats||[],adaptiveFormats:t.adaptiveFormats||[],bulk:ye,baseJs:t.baseJs,hlsManifestUrl:t.hlsManifestUrl});xe.rpc.call("tbvwsDetectedVideo",f)}}catch(i){t.videoId&&console.log("VDH ProcessPage:",i)}}function Se(){let r=document.location.href,e=document.querySelector("body"),t=new MutationObserver(function(n){r!=document.location.href&&(r=document.location.href,te())}),i={childList:!0,subtree:!0};t.observe(e,i)}Se();te();})();
