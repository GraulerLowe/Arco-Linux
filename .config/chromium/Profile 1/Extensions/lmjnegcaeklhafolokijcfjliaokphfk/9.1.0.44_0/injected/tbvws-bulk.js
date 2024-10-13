"use strict";(()=>{var C=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var D=C((R,W)=>{(function(n,e){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],e);else if(typeof R<"u")e(W);else{var m={exports:{}};e(m),n.browser=m.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:R,function(n){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let e="The message port closed before a response was received.",m=a=>{let t={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(t).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class i extends WeakMap{constructor(s,o=void 0){super(o),this.createItem=s}get(s){return this.has(s)||this.set(s,this.createItem(s)),super.get(s)}}let A=r=>r&&typeof r=="object"&&typeof r.then=="function",_=(r,s)=>(...o)=>{a.runtime.lastError?r.reject(new Error(a.runtime.lastError.message)):s.singleCallbackArg||o.length<=1&&s.singleCallbackArg!==!1?r.resolve(o[0]):r.resolve(o)},w=r=>r==1?"argument":"arguments",h=(r,s)=>function(l,...u){if(u.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${w(s.minArgs)} for ${r}(), got ${u.length}`);if(u.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${w(s.maxArgs)} for ${r}(), got ${u.length}`);return new Promise((x,p)=>{if(s.fallbackToNoCallback)try{l[r](...u,_({resolve:x,reject:p},s))}catch(g){console.warn(`${r} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,g),l[r](...u),s.fallbackToNoCallback=!1,s.noCallback=!0,x()}else s.noCallback?(l[r](...u),x()):l[r](...u,_({resolve:x,reject:p},s))})},k=(r,s,o)=>new Proxy(s,{apply(l,u,x){return o.call(u,r,...x)}}),P=Function.call.bind(Object.prototype.hasOwnProperty),M=(r,s={},o={})=>{let l=Object.create(null),u={has(p,g){return g in r||g in l},get(p,g,f){if(g in l)return l[g];if(!(g in r))return;let c=r[g];if(typeof c=="function")if(typeof s[g]=="function")c=k(r,r[g],s[g]);else if(P(o,g)){let v=h(g,o[g]);c=k(r,r[g],v)}else c=c.bind(r);else if(typeof c=="object"&&c!==null&&(P(s,g)||P(o,g)))c=M(c,s[g],o[g]);else if(P(o,"*"))c=M(c,s[g],o["*"]);else return Object.defineProperty(l,g,{configurable:!0,enumerable:!0,get(){return r[g]},set(v){r[g]=v}}),c;return l[g]=c,c},set(p,g,f,c){return g in l?l[g]=f:r[g]=f,!0},defineProperty(p,g,f){return Reflect.defineProperty(l,g,f)},deleteProperty(p,g){return Reflect.deleteProperty(l,g)}},x=Object.create(r);return new Proxy(x,u)},N=r=>({addListener(s,o,...l){s.addListener(r.get(o),...l)},hasListener(s,o){return s.hasListener(r.get(o))},removeListener(s,o){s.removeListener(r.get(o))}}),re=new i(r=>typeof r!="function"?r:function(o){let l=M(o,{},{getContent:{minArgs:0,maxArgs:0}});r(l)}),F=new i(r=>typeof r!="function"?r:function(o,l,u){let x=!1,p,g=new Promise(T=>{p=function(b){x=!0,T(b)}}),f;try{f=r(o,l,p)}catch(T){f=Promise.reject(T)}let c=f!==!0&&A(f);if(f!==!0&&!c&&!x)return!1;let v=T=>{T.then(b=>{u(b)},b=>{let L;b&&(b instanceof Error||typeof b.message=="string")?L=b.message:L="An unexpected error occurred",u({__mozWebExtensionPolyfillReject__:!0,message:L})}).catch(b=>{console.error("Failed to send onMessage rejected reply",b)})};return v(c?f:g),!0}),se=({reject:r,resolve:s},o)=>{a.runtime.lastError?a.runtime.lastError.message===e?s():r(new Error(a.runtime.lastError.message)):o&&o.__mozWebExtensionPolyfillReject__?r(new Error(o.message)):s(o)},U=(r,s,o,...l)=>{if(l.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${w(s.minArgs)} for ${r}(), got ${l.length}`);if(l.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${w(s.maxArgs)} for ${r}(), got ${l.length}`);return new Promise((u,x)=>{let p=se.bind(null,{resolve:u,reject:x});l.push(p),o.sendMessage(...l)})},te={devtools:{network:{onRequestFinished:N(re)}},runtime:{onMessage:N(F),onMessageExternal:N(F),sendMessage:U.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:U.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return t.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},M(a,te,t)};n.exports=m(chrome)}else n.exports=globalThis.browser})});var j=C((me,y)=>{"use strict";y.exports.browser=D();var E;typeof browser>"u"&&typeof chrome<"u"&&chrome.runtime?/\bOPR\//.test(navigator.userAgent)?E="opera":E="chrome":/\bEdge\//.test(navigator.userAgent)?E="edge":E="firefox",y.exports.browserType=E,typeof y.exports.browser.action>"u"&&(y.exports.browser.action=y.exports.browser.browserAction),y.exports.isBrowser=(...n)=>{for(let e=0;e<n.length;e++)if(n[e]==y.exports.browserType)return!0;return!1},y.exports.error=n=>{console.groupCollapsed(n.message),n.stack&&console.error(n.stack),console.groupEnd()}});var z=C((Ae,H)=>{"use strict";var O=class{constructor(){this.replyId=0,this.replies={},this.listeners={},this.hook=this.nullHook,this.debugLevel=0,this.useTarget=!1,this.logger=console,this.posts={}}setPost(e,m){typeof e=="string"?this.posts[e]=m:this.post=e}setUseTarget(e){this.useTarget=e}setDebugLevel(e){this.debugLevel=e}setHook(e){let m=this,a=Date.now();function t(){return typeof window<"u"&&typeof window.performance<"u"?window.performance.now():Date.now()-a}e?this.hook=i=>{i.timestamp=t();try{e(i)}catch(A){m.logger.warn("Hoor error",A)}}:this.hook=this.nullHook}nullHook(){}call(){let e=this,m,a,t,i,A=Array.prototype.slice.call(arguments);return typeof A[0]=="function"&&(m=A.shift()),e.useTarget?[a,t,...i]=A:[t,...i]=A,new Promise(function(_,w){let h=++e.replyId;e.debugLevel>=2&&e.logger.info("rpc #"+h,"call =>",t,i),e.hook({type:"call",callee:a,rid:h,method:t,args:i}),e.replies[h]={resolve:_,reject:w,peer:a};let k=m||e.useTarget&&e.posts[a]||e.post;e.useTarget?k(a,{type:"weh#rpc",_request:h,_method:t,_args:[...i]}):k({type:"weh#rpc",_request:h,_method:t,_args:[...i]})})}receive(e,m,a){let t=this;if(e._request)Promise.resolve().then(()=>{let i=t.listeners[e._method];if(typeof i=="function")return t.debugLevel>=2&&t.logger.info("rpc #"+e._request,"serve <= ",e._method,e._args),t.hook({type:"call",caller:a,rid:e._request,method:e._method,args:e._args}),Promise.resolve(i.apply(null,e._args)).then(A=>(t.hook({type:"reply",caller:a,rid:e._request,result:A}),A)).catch(A=>{throw t.hook({type:"reply",caller:a,rid:e._request,error:A.message}),A});throw new Error("Method "+e._method+" is not a function")}).then(i=>{t.debugLevel>=2&&t.logger.info("rpc #"+e._request,"serve => ",i),m({type:"weh#rpc",_reply:e._request,_result:i})}).catch(i=>{t.debugLevel>=1&&t.logger.info("rpc #"+e._request,"serve => !",i.message),m({type:"weh#rpc",_reply:e._request,_error:i.message})});else if(e._reply){let i=t.replies[e._reply];delete t.replies[e._reply],i?e._error?(t.debugLevel>=1&&t.logger.info("rpc #"+e._reply,"call <= !",e._error),t.hook({type:"reply",callee:i.peer,rid:e._reply,error:e._error}),i.reject(new Error(e._error))):(t.debugLevel>=2&&t.logger.info("rpc #"+e._reply,"call <= ",e._result),t.hook({type:"reply",callee:i.peer,rid:e._reply,result:e._result}),i.resolve(e._result)):t.logger.error("Missing reply handler")}}listen(e){Object.assign(this.listeners,e)}};H.exports=new O});var K=C((ce,G)=>{"use strict";var d=j(),Z=d.browser;d.rpc=z();d.uiName=window._wehPanelName;d.uiName||(d.uiName="injected-"+Math.round(Math.random()*1e9));var ne="weh:"+Z.runtime.id+":"+d.uiName,S=Z.runtime.connect({name:ne});d.rpc.setPost(S.postMessage.bind(S));S.onMessage.addListener(n=>{d.rpc.receive(n,S.postMessage.bind(S))});d.rpc.listen({setPrefs:()=>{},close:()=>{}});d.is_safe=(async()=>{await d.rpc.call("appStarted",{uiName:d.uiName}),await d.rpc.call("appReady",{uiName:d.uiName})})();G.exports=d});var Y=C((ue,X)=>{"use strict";var{browser:I}=j(),J={},V=new RegExp("\\$[a-zA-Z]*([0-9]+)\\$","g"),Q=!1,ge=I.storage.local.get("wehI18nCustom").then(n=>{Q=!0;let e=n.wehI18nCustom;e&&Object.assign(J,e)});function oe(n,e){if(Q||console.warn("Using `weh._` before custom strings were loaded:",n),/-/.test(n)){let a=n.replace(/-/g,"_");console.warn("Wrong i18n message name. Should it be",a,"instead of",n,"?"),n=a}let m=J[n];if(e&&!Array.isArray(e)&&(e=[e]),m&&m.message.length>0)return(m.message||"").replace(V,a=>{let t=V.exec(a);return t&&e&&e[parseInt(t[1])-1]||"??"});try{return e?I.i18n.getMessage(n,e):I.i18n.getMessage(n)}catch{return""}}X.exports={getMessage:oe,custom_strings_ready:ge}});var B=K(),ie=new RegExp("\\bv=([^&]+)");function ee(){let n=window.getSelection();if(!n)return;let e={};for(let t=0;t<n.rangeCount;t++){let i=n.getRangeAt(t),A=i.commonAncestorContainer;if(A.nodeType==1&&(A=A.parentNode),typeof A.querySelectorAll!="function")continue;let _=A.querySelectorAll("a[href]");Array.from(_).forEach(w=>{if(!i.isPointInRange(w,0))return;let h=w.getAttribute("href");if(h&&h.length>0){let k=ie.exec(h);k&&(e[k[1]]=1)}})}let m=window._$vdhTopUrl;try{m=window.top.location.href}catch{}let a=Object.keys(e);a.length>0&&browser.runtime.sendMessage({yt_selection:a}),B.rpc.call("tbvwsSelectedIds",{pageUrl:window.location.href,topUrl:m,ids:Object.keys(e)})}var $=null;document.addEventListener("selectionchange",function(){$&&clearTimeout($),$=setTimeout(()=>{ee()},25)});ee();function ae(){B._=Y().getMessage;let n=document.createElement("div");Object.assign(n.style,{backgroundColor:"rgba(0,0,0,.75)",position:"fixed",bottom:0,top:0,left:0,right:0,zIndex:2147483647,display:"flex",alignItems:"center",justifyContent:"center"});let e=document.createElement("div");Object.assign(e.style,{backgroundColor:"#fff",color:"#444",maxWidth:"400px",padding:"1em",textAlign:"center",fontSize:"2em",opacity:1}),e.appendChild(document.createTextNode(B._("bulk_in_progress"))),n.appendChild(e),setInterval(()=>{!n.parentNode&&document.body&&document.body.appendChild(n)},100);let m=setInterval(()=>{let a=document.querySelector("button.videoAdUiSkipButton");a&&(clearInterval(m),a.click())},250)}/vdh\-bulk=/.test(window.location.href)&&ae();})();