var K=Object.create;var B=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var J=Object.getPrototypeOf,X=Object.prototype.hasOwnProperty;var Q=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);var Y=(t,r,e,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of G(r))!X.call(t,o)&&o!==e&&B(t,o,{get:()=>r[o],enumerable:!(s=Z(r,o))||s.enumerable});return t};var ee=(t,r,e)=>(e=t!=null?K(J(t)):{},Y(r||!t||!t.__esModule?B(e,"default",{value:t,enumerable:!0}):e,t));var N=Q((M,I)=>{(function(t,r){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],r);else if(typeof M<"u")r(I);else{var e={exports:{}};r(e),t.browser=e.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:M,function(t){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let r="The message port closed before a response was received.",e=s=>{let o={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(o).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class l extends WeakMap{constructor(a,m=void 0){super(m),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}let c=n=>n&&typeof n=="object"&&typeof n.then=="function",_=(n,a)=>(...m)=>{s.runtime.lastError?n.reject(new Error(s.runtime.lastError.message)):a.singleCallbackArg||m.length<=1&&a.singleCallbackArg!==!1?n.resolve(m[0]):n.resolve(m)},A=n=>n==1?"argument":"arguments",f=(n,a)=>function(g,...u){if(u.length<a.minArgs)throw new Error(`Expected at least ${a.minArgs} ${A(a.minArgs)} for ${n}(), got ${u.length}`);if(u.length>a.maxArgs)throw new Error(`Expected at most ${a.maxArgs} ${A(a.maxArgs)} for ${n}(), got ${u.length}`);return new Promise((x,p)=>{if(a.fallbackToNoCallback)try{g[n](...u,_({resolve:x,reject:p},a))}catch(i){console.warn(`${n} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),g[n](...u),a.fallbackToNoCallback=!1,a.noCallback=!0,x()}else a.noCallback?(g[n](...u),x()):g[n](...u,_({resolve:x,reject:p},a))})},h=(n,a,m)=>new Proxy(a,{apply(g,u,x){return m.call(u,n,...x)}}),y=Function.call.bind(Object.prototype.hasOwnProperty),S=(n,a={},m={})=>{let g=Object.create(null),u={has(p,i){return i in n||i in g},get(p,i,b){if(i in g)return g[i];if(!(i in n))return;let d=n[i];if(typeof d=="function")if(typeof a[i]=="function")d=h(n,n[i],a[i]);else if(y(m,i)){let C=f(i,m[i]);d=h(n,n[i],C)}else d=d.bind(n);else if(typeof d=="object"&&d!==null&&(y(a,i)||y(m,i)))d=S(d,a[i],m[i]);else if(y(m,"*"))d=S(d,a[i],m["*"]);else return Object.defineProperty(g,i,{configurable:!0,enumerable:!0,get(){return n[i]},set(C){n[i]=C}}),d;return g[i]=d,d},set(p,i,b,d){return i in g?g[i]=b:n[i]=b,!0},defineProperty(p,i,b){return Reflect.defineProperty(g,i,b)},deleteProperty(p,i){return Reflect.deleteProperty(g,i)}},x=Object.create(n);return new Proxy(x,u)},T=n=>({addListener(a,m,...g){a.addListener(n.get(m),...g)},hasListener(a,m){return a.hasListener(n.get(m))},removeListener(a,m){a.removeListener(n.get(m))}}),H=new l(n=>typeof n!="function"?n:function(m){let g=S(m,{},{getContent:{minArgs:0,maxArgs:0}});n(g)}),R=new l(n=>typeof n!="function"?n:function(m,g,u){let x=!1,p,i=new Promise(k=>{p=function(w){x=!0,k(w)}}),b;try{b=n(m,g,p)}catch(k){b=Promise.reject(k)}let d=b!==!0&&c(b);if(b!==!0&&!d&&!x)return!1;let C=k=>{k.then(w=>{u(w)},w=>{let D;w&&(w instanceof Error||typeof w.message=="string")?D=w.message:D="An unexpected error occurred",u({__mozWebExtensionPolyfillReject__:!0,message:D})}).catch(w=>{console.error("Failed to send onMessage rejected reply",w)})};return C(d?b:i),!0}),z=({reject:n,resolve:a},m)=>{s.runtime.lastError?s.runtime.lastError.message===r?a():n(new Error(s.runtime.lastError.message)):m&&m.__mozWebExtensionPolyfillReject__?n(new Error(m.message)):a(m)},F=(n,a,m,...g)=>{if(g.length<a.minArgs)throw new Error(`Expected at least ${a.minArgs} ${A(a.minArgs)} for ${n}(), got ${g.length}`);if(g.length>a.maxArgs)throw new Error(`Expected at most ${a.maxArgs} ${A(a.maxArgs)} for ${n}(), got ${g.length}`);return new Promise((u,x)=>{let p=z.bind(null,{resolve:u,reject:x});g.push(p),m.sendMessage(...g)})},W={devtools:{network:{onRequestFinished:T(H)}},runtime:{onMessage:T(R),onMessageExternal:T(R),sendMessage:F.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:F.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},E={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return o.privacy={network:{"*":E},services:{"*":E},websites:{"*":E}},S(s,W,o)};t.exports=e(chrome)}else t.exports=globalThis.browser})});var O=ee(N(),1);function v(t){return t?t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"):""}function $(t,r,e){let s=()=>(console.error(`Requesting unknown i18n string ${t}`),t);r=r.map(o=>o.toString()).map(v);try{if(t in e){let o=e[t],l=1;for(let c=0;c<r.length;c++)o=o.replace(`$${l}`,r[c]);return o}else{let o=O.default.i18n.getMessage(t,r);return o||s()}}catch{return s()}}function j(t,r){for(let e of Array.from(t.querySelectorAll("[data-i18n]"))){let s=e.dataset.i18nArgs,o=e.dataset.i18nAttr,l;s?l=$(e.dataset.i18n,JSON.parse(s),r):l=$(e.dataset.i18n,[],r),o?e.setAttribute(o,l):e.textContent=l}}function q(t){return t<1048576?`${(t/1024).toFixed(0)}Kb`:`${(t/1048576).toFixed(0)}Mb`}function P(t){let r=Math.floor(t/3600);t-=r*3600;let e=Math.floor(t/60);t-=e*60;let s=Math.round(t),o=("0"+r+":").slice(-3),l=("0"+e+":").slice(-3),c=("0"+s).slice(-2);return o=="00:"&&(o=""),o+l+c}var V=["download","copy","download_as","download_audio"];function te(t,r){let e=document.querySelector(`[data-downloadable-id="${t}"]`),s=e.querySelector("sl-progress-bar"),o=e.querySelector(".span-percent"),l=e.querySelector(".span-bitrate"),c=e.querySelector(".span-downloading-duration");e.classList.remove("progress-unknown"),typeof r!="string"?(c.textContent=P(r.duration_since_start/1e3)+"s",e.querySelector(".button-stop").removeAttribute("loading"),e.querySelector(".button-stop").removeAttribute("disabled"),l.removeAttribute("hidden"),l.querySelector("sl-format-bytes").setAttribute("value",r.bitrate_bs.toString()),r.progress!="unknown"?(o.removeAttribute("hidden"),o.querySelector("sl-format-number").setAttribute("value",r.progress.toString()),s.removeAttribute("indeterminate"),s.setAttribute("value",(r.progress*100).toString())):(o.setAttribute("hidden","true"),s.removeAttribute("value"),s.setAttribute("indeterminate","true"),e.classList.add("progress-unknown"))):(e.querySelector(".button-stop").setAttribute("loading","true"),e.querySelector(".button-stop").setAttribute("disabled","true"),l.setAttribute("hidden","true"))}function re(t,r){let e=t.core_media,s=[],o=e.container.extension;e.av.video||(o=e.container.audio_only_extension),s.push(`<span class="variant-container">${o}</span>`);let l=$("v9_panel_downloadable_variant_no_details",[],r);if(e.av.video){if(e.av.video.quality.isSome()){let c=e.av.video.quality.unwrap()+"p";s.push(`<span class="variant-quality _${c}">${c}</span>`)}if(e.av.video.dimensions.isSome()){let c=e.av.video.dimensions.unwrap();l=`${c.width}x${c.height}`,e.av.video.bitrate.isSome()&&(l+=` ${q(e.av.video.bitrate.unwrap())}/s`)}else e.content_length.isSome()?l=q(e.content_length.unwrap()):e.av.video.bitrate.isSome()&&(l+=`${q(e.av.video.bitrate.unwrap())}/s`)}return s.push(`<span class="variant-differentiator">${l}</span>`),`<sl-menu-item class="menu-item-variant" data-variant-id="${t.id}" data-to-copy="${v(t.to_copy)}">
    ${s.join("")}
  </sl-menu-item>`}function be(t,r){t.dataset.defaultAction=r;let e=t.querySelector("sl-menu-item.action-"+r),s=e.querySelector("sl-icon").getAttribute("name"),o=e.querySelector("span").textContent,l=t.querySelector(".button-group-actions > sl-button");for(let c of V)l.classList.remove("action-"+c);l.classList.add("action-"+r),l.querySelector("sl-icon").setAttribute("name",s),l.querySelector("span").textContent=o}function U(t){let r=t.core_media.container.extension;t.core_media.av.video||(r=t.core_media.container.audio_only_extension);let e=`<span class="variant-container">${r}</span>`,s=t.core_media.av.video,o=e;if(s&&s.quality.isSome()){let c=s.quality.unwrap()+"p",_=`<span class="variant-quality _${c}">${c}</span>`;o+=_}else if(t.core_media.content_length.isSome()){let l=t.core_media.content_length.unwrap();o+=`<span class="variant-quality">${q(l)}</span>`}return o}function L(t,r){let e=[...t.variants.values()][0],s=document.createElement("hbox");s.classList.add("download"),s.dataset.selectedVariantId=e.id,s.dataset.downloadableId=t.id,s.dataset.timestamp=t.timestamp.toString(),s.dataset.toCopy=e.to_copy;let o;{let A=e.core_media.duration,f="";typeof A=="number"&&(f=`<div class="duration">${P(A)}</div>`),o=`<hbox class="download-left" align="start" style="background-image:url('${v(t.thumbnail_url)}')">
      <div class="favicon" style="background-image:url('${v(t.favicon_url)}')"></div>
      ${f}
    </hbox>`}let l;{let A=`
      <span class="span-bitrate"><sl-format-bytes></sl-format-bytes>/s</span>
      <span class="span-downloading-duration"></span>
      <span size="small" class="span-percent"><sl-format-number type="percent"></sl-format-number></span>`,f='<sl-icon name="film"></sl-icon>';e.core_media.av.video?f='<sl-icon name="film"></sl-icon><sl-icon name="plus"></sl-icon><sl-icon name="music-note-beamed"></sl-icon>':f='<sl-icon name="music-note-beamed"></sl-icon>';let h=`
      <hbox class="hbox-tags">
        <sl-tag variant="primary" size="small">${e.core_media.builder}</sl-tag>
        <sl-tooltip content="Video & Audio">
          <sl-tag variant="neutral" size="small">${f}</sl-tag>
        </sl-tooltip>
      </hbox>`,y=v(t.page_title);l=`
    <hbox class="download-top" align="center">
      ${h}<div class="favicon" style="background-image:url('${v(t.favicon_url)}')"></div>
      <p class="title" flex="1" title="${y}">${y}</p>
      ${A}
      <sl-icon-button name="x" class="button-hide"></sl-icon-button>
    </hbox>`}let c;{let A="";for(let S of t.variants.values())A+=re(S,r);c=`
      <hbox align="center" pack="end" class="download-bottom" flex="1">
        ${`
        <sl-dropdown stay-open-on-select="true" class="dropdown-variants">
          <sl-button slot="trigger" size="small" caret>
            ${U(e)}
          </sl-button>
          <sl-menu>
            ${A}
            <sl-divider></sl-divider>
            <sl-menu-item type="checkbox" class="menu-prefer-quality"><span data-i18n="v9_panel_variant_menu_prefer_quality"></span></sl-menu-item>
            <sl-menu-item type="checkbox" class="menu-prefer-container"><span data-i18n="v9_panel_variant_menu_prefer_format"></span></sl-menu-item>
          </sl-menu>
        </sl-dropdown>`}
        <sl-progress-bar flex="1"></sl-progress-bar>
        <spacer flex="1"></spacer>
        <hbox class="progress-unknown-component"><sl-icon name="broadcast"></sl-icon></hbox>
        <sl-button size="small" variant="danger" loading class="button-stop" data-i18n="v9_panel_downloading_stop" pill></sl-button>
        
      <sl-tooltip data-i18n-attr="content" data-i18n="v9_panel_downloaded_retry_tooltip" class="button-downloaded-action">
        <sl-icon-button name="arrow-clockwise" class="button-retry"></sl-icon-button>
      </sl-tooltip>

      <sl-tooltip data-i18n-attr="content" data-i18n="v9_panel_downloaded_delete_file_tooltip" class="button-downloaded-action">
        <sl-icon-button variant="danger" name="trash" class="button-rm"></sl-icon-button>
      </sl-tooltip>

      <!-- FIXME: there's a duplicate of that code in history.html -->
      <sl-button-group class="button-downloaded-action" pill>
        <sl-button variant="success" class="button-play" size="small" pill>
          <sl-icon slot="prefix" name="play-circle-fill"></sl-icon>Play
        </sl-button>
        <sl-tooltip data-i18n-attr="content" data-i18n="v9_panel_downloaded_show_dir_tooltip">
          <sl-button variant="success" class="button-dir" size="small" pill>
            <sl-icon slot="suffix" name="folder-fill"></sl-icon>
          </sl-button>
        </sl-tooltip>
      </sl-button-group>
    
        <!-- button-group-actions from template -->
        <!-- menu-actions from template -->
      </hbox>`}s.innerHTML=`
  ${o}
  <vbox class="download-right" flex="1">
    ${l}
    ${c}
  </vbox>
  `;let _=document.querySelector("template").content;{let A=_.querySelector(".button-group-actions").cloneNode(!0),f=_.querySelector(".menu-actions").cloneNode(!0),h=s.querySelector(".download-bottom");h.appendChild(A),h.appendChild(f)}return j(s,r),s}function fe(t,r){let e=document.querySelector(`[data-downloadable-id="${t.downloadable.id}"]`);return e||(e=L(t.downloadable,r),document.querySelector("#core-downloads").append(e)),e.setAttribute("status","downloading"),te(t.downloadable.id,t.progress),e}function we(t,r){let e=document.querySelector(`[data-downloadable-id="${t.id}"]`);e||(e=L(t,r),document.querySelector("#core-downloads").append(e)),e.setAttribute("status","downloadable");{let s=e.dataset.selectedVariantId,o=t.variants.get(s),l=U(o),c=e.querySelector(".dropdown-variants > sl-button");c.innerHTML=l}return e}function he(t,r){let e=document.querySelector(`[data-downloadable-id="${t.downloadable.id}"]`);e||(e=L(t.downloadable,r),document.querySelector("#core-downloads").append(e)),e.setAttribute("status","downloaded");let s=e.querySelector(".title");return t.download_result.inbrowser?(e.dataset.inBrowserDownloadId=t.download_result.download_id.toString(),s.textContent=t.downloadable.title):s.textContent=t.download_result.filename,e}export{U as RenderVariantButton,be as UpdateDefaultAction,we as UpdateDownloadable,he as UpdateDownloaded,fe as UpdateDownloading,te as UpdateProgress};
