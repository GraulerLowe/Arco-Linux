`).slice(2);i&&i.length>0&&i[0].includes("ErrImpl")&&i.shift(),this._stack=i.join(`
`)}return e.prototype.isOk=function(){return!1},e.prototype.isErr=function(){return!0},e.prototype[Symbol.iterator]=function(){return{next:function(){return{done:!0,value:void 0}}}},e.prototype.else=function(a){return a},e.prototype.unwrapOr=function(a){return a},e.prototype.expect=function(a){throw new Error("".concat(a," - Error: ").concat(M(this.error),`
`).concat(this._stack),{cause:this.error})},e.prototype.expectErr=function(a){return this.error},e.prototype.unwrap=function(){throw new Error("Tried to unwrap Error: ".concat(M(this.error),`
`).concat(this._stack),{cause:this.error})},e.prototype.unwrapErr=function(){return this.error},e.prototype.map=function(a){return this},e.prototype.andThen=function(a){return this},e.prototype.mapErr=function(a){return new D(a(this.error))},e.prototype.mapOr=function(a,i){return a},e.prototype.mapOrElse=function(a,i){return a(this.error)},e.prototype.or=function(a){return a},e.prototype.orElse=function(a){return a(this.error)},e.prototype.toOption=function(){return p},e.prototype.toString=function(){return"Err(".concat(M(this.error),")")},Object.defineProperty(e.prototype,"stack",{get:function(){return"".concat(this,`
`).concat(this._stack)},enumerable:!1,configurable:!0}),e.prototype.toAsyncResult=function(){return new Q(this)},e.EMPTY=new e(void 0),e}();var D=_a,sa=function(){function e(a){if(!(this instanceof e))return new e(a);this.value=a}return e.prototype.isOk=function(){return!0},e.prototype.isErr=function(){return!1},e.prototype[Symbol.iterator]=function(){var a=Object(this.value);return Symbol.iterator in a?a[Symbol.iterator]():{next:function(){return{done:!0,value:void 0}}}},e.prototype.else=function(a){return this.value},e.prototype.unwrapOr=function(a){return this.value},e.prototype.expect=function(a){return this.value},e.prototype.expectErr=function(a){throw new Error(a)},e.prototype.unwrap=function(){return this.value},e.prototype.unwrapErr=function(){throw new Error("Tried to unwrap Ok: ".concat(M(this.value)),{cause:this.value})},e.prototype.map=function(a){return new A(a(this.value))},e.prototype.andThen=function(a){return a(this.value)},e.prototype.mapErr=function(a){return this},e.prototype.mapOr=function(a,i){return i(this.value)},e.prototype.mapOrElse=function(a,i){return i(this.value)},e.prototype.or=function(a){return this},e.prototype.orElse=function(a){return this},e.prototype.toOption=function(){return g(this.value)},e.prototype.safeUnwrap=function(){return this.value},e.prototype.toString=function(){return"Ok(".concat(M(this.value),")")},e.prototype.toAsyncResult=function(){return new Q(this)},e.EMPTY=new e(void 0),e}();var A=sa,L;(function(e){function a(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];for(var m=[],r=0,v=l;r<v.length;r++){var w=v[r];if(w.isOk())m.push(w.value);else return w}return new A(m)}e.all=a;function i(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];for(var m=[],r=0,v=l;r<v.length;r++){var w=v[r];if(w.isOk())return w;m.push(w.error)}return new D(m)}e.any=i;function s(l){try{return new A(l())}catch(d){return new D(d)}}e.wrap=s;function n(l){try{return l().then(function(d){return new A(d)}).catch(function(d){return new D(d)})}catch(d){return Promise.resolve(new D(d))}}e.wrapAsync=n;function o(l){return l instanceof D||l instanceof A}e.isResult=o})(L||(L={}));var ne=function(e,a,i,s){function n(o){return o instanceof i?o:new i(function(l){l(o)})}return new(i||(i=Promise))(function(o,l){function d(v){try{r(s.next(v))}catch(w){l(w)}}function m(v){try{r(s.throw(v))}catch(w){l(w)}}function r(v){v.done?o(v.value):n(v.value).then(d,m)}r((s=s.apply(e,a||[])).next())})},re=function(e,a){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},s,n,o,l;return l={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function d(r){return function(v){return m([r,v])}}function m(r){if(s)throw new TypeError("Generator is already executing.");for(;l&&(l=0,r[0]&&(i=0)),i;)try{if(s=1,n&&(o=r[0]&2?n.return:r[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,r[1])).done)return o;switch(n=0,o&&(r=[r[0]&2,o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,n=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!(o=o.length>0&&o[o.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(r[0]===6&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=a.call(e,i)}catch(v){r=[6,v],n=0}finally{s=o=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},Q=function(){function e(a){this.promise=Promise.resolve(a)}return e.prototype.andThen=function(a){var i=this;return this.thenInternal(function(s){return ne(i,void 0,void 0,function(){var n;return re(this,function(o){return s.isErr()?[2,s]:(n=a(s.value),[2,n instanceof e?n.promise:n])})})})},e.prototype.map=function(a){var i=this;return this.thenInternal(function(s){return ne(i,void 0,void 0,function(){var n;return re(this,function(o){switch(o.label){case 0:return s.isErr()?[2,s]:(n=A,[4,a(s.value)]);case 1:return[2,n.apply(void 0,[o.sent()])]}})})})},e.prototype.thenInternal=function(a){return new e(this.promise.then(a))},e}();function y(e){return Object.assign(e.prototype,{find:function(a){for(let i of this)if(a(i))return g(i);return p},count:function(a){return this.reduce((i,s)=>(a(s)&&i++,i),0)},reduce:function(a,i){let s=i;for(let n of this)s=a(s,n);return s},every:function(a){return!this.any(i=>!a(i))},any:function(a){for(let i of this)if(a(i))return!0;return!1},map:function(a){return this.filterMap(i=>g(a(i)))},filter:function(a){return this.filterMap(i=>a(i)?g(i):p)},enumerate:function(){let a=this;return y(function*(){let i=0;for(let s of a)yield[i,s],i++})()},filterMap:function(a){let i=this;return y(function*(){for(let s of i){let n=a(s);n.isSome()&&(yield n.unwrap())}})()},sort:function(a){let i=this.toArray();return i.sort(a),i},toArray:function(){return[...this]}}),e}Array.prototype.as_iter||(Array.prototype.as_iter=function(){let e=this;return y(function*(){for(let a of e)yield a})()});Set.prototype.as_iter||(Set.prototype.as_iter=function(){let e=this;return y(function*(){for(let a of e)yield a})()});Map.prototype.as_iter||(Map.prototype.as_iter=function(){let e=this;return y(function*(){for(let a of e)yield a})()});var q=/.^/,te={Av1:{name:"Av1",type:"video",mimetype:/av01.*/i,defacto_container:"WebM"},H264:{name:"H264",type:"video",mimetype:/avc1.*/i,defacto_container:"Mp4"},H263:{name:"H263",type:"video",mimetype:q,defacto_container:"3gp"},H265:{name:"H265",type:"video",mimetype:/(hvc1|hevc|h265|h\.265).*/i,defacto_container:"Mp4"},MP4V:{name:"MP4V",type:"video",mimetype:/mp4v\.20.*/i,defacto_container:"Mp4"},MPEG1:{name:"MPEG1",type:"video",mimetype:q,defacto_container:"Mpeg"},MPEG2:{name:"MPEG2",type:"video",mimetype:q,defacto_container:"Mpeg"},Theora:{name:"Theora",type:"video",mimetype:/theora/i,defacto_container:"Ogg"},VP8:{name:"VP8",type:"video",mimetype:/vp0?8.*/i,defacto_container:"WebM"},VP9:{name:"VP9",type:"video",mimetype:/vp0?9.*/i,defacto_container:"WebM"},unknown:{name:"unknown",type:"video",mimetype:q,defacto_container:"Mp4"}},_e={AAC:{name:"AAC",type:"audio",mimetype:/(aac|mp4a.40).*/i,defacto_container:"Mp4"},PCM:{name:"PCM",type:"audio",mimetype:/pcm.*/i,defacto_container:"Wav"},FLAC:{name:"FLAC",type:"audio",mimetype:/flac/i,defacto_container:"Flac"},MP3:{name:"MP3",type:"audio",mimetype:/(\.?mp3|mp4a\.69|mp4a\.6b).*/i,defacto_container:"Mpeg"},Opus:{name:"Opus",type:"audio",mimetype:/(opus|(mp4a\.ad.*))/i,defacto_container:"Ogg"},Vorbis:{name:"Vorbis",type:"audio",mimetype:/vorbis/i,defacto_container:"Ogg"},Wav:{name:"Wav",type:"audio",mimetype:q,defacto_container:"Wav"},unknown:{name:"unknown",type:"audio",mimetype:q,defacto_container:"Mp4"}},se=y(function*(){for(let e of Object.keys(te))yield te[e]}),le=y(function*(){for(let e of Object.keys(_e))yield _e[e]});var de={Mp4:{name:"Mp4",extension:"mp4",audio_only_extension:"mp3",defacto_codecs:{audio:p,video:p},supported_video_codecs:["H264","H265","Av1","MP4V","MPEG2","unknown"],supported_audio_codecs:["Opus","MP3","FLAC","AAC","unknown"],mimetype:/(?:x-)?mp4/i},Mkv:{name:"Mkv",extension:"mkv",audio_only_extension:"mp3",defacto_codecs:{audio:p,video:p},supported_video_codecs:se().filter(e=>e.name!="unknown").map(e=>e.name).toArray(),supported_audio_codecs:le().filter(e=>e.name!="unknown").map(e=>e.name).toArray(),mimetype:/(?:x-)?matroska/i},WebM:{name:"WebM",extension:"webm",audio_only_extension:"oga",defacto_codecs:{audio:p,video:p},supported_video_codecs:["H264","VP8","VP9","Av1"],supported_audio_codecs:["Opus","Vorbis"],mimetype:/(?:x-)?webm/i},M2TS:{name:"M2TS",extension:"mt2s",audio_only_extension:"mp3",defacto_codecs:{audio:p,video:p},supported_video_codecs:["H264","H265","Av1","MP4V","MPEG2","VP9","unknown"],supported_audio_codecs:["Opus","MP3","FLAC","AAC"],mimetype:/(?:x-)?mts/i},MP2T:{name:"MP2T",extension:"mp2t",audio_only_extension:"mp3",defacto_codecs:{audio:g("MP3"),video:g("H264")},supported_video_codecs:["MPEG2","MPEG1"],supported_audio_codecs:["MP3"],mimetype:/(?:x-)?mp2t/i},Flash:{name:"Flash",extension:"flv",audio_only_extension:"mp3",defacto_codecs:{audio:p,video:p},supported_video_codecs:["H264"],supported_audio_codecs:["AAC"],mimetype:/(?:x-)?flv/i},M4V:{name:"M4V",extension:"m4v",audio_only_extension:"mp3",defacto_codecs:{audio:p,video:p},supported_video_codecs:["H264","H265","Av1","MP4V","MPEG2"],supported_audio_codecs:["Opus","MP3","FLAC","AAC"],mimetype:/(?:x-)?m4v/i},M4A:{name:"M4A",extension:"m4a",other_extensions:["aac"],audio_only_extension:"m4a",defacto_codecs:{audio:g("AAC"),video:p},supported_video_codecs:[],supported_audio_codecs:["Opus","MP3","FLAC","AAC","unknown"],mimetype:/(?:x-)?m4a/i},Flac:{name:"Flac",extension:"flac",audio_only_extension:"flac",defacto_codecs:{audio:g("FLAC"),video:p},supported_video_codecs:[],supported_audio_codecs:["FLAC"],mimetype:/(?:x-)?flac/i},Mpeg:{name:"Mpeg",extension:"mpeg",audio_only_extension:"mp3",defacto_codecs:{audio:g("MP3"),video:g("H264")},supported_video_codecs:["MPEG2","MPEG1"],supported_audio_codecs:["MP3"],mimetype:/(?:x-)?mpeg/i},Ogg:{name:"Ogg",extension:"ogv",audio_only_extension:"oga",defacto_codecs:{audio:p,video:p},supported_video_codecs:["VP9","VP8","Theora"],supported_audio_codecs:["Opus","Vorbis","FLAC"],mimetype:/(?:x-)?og./i},Wav:{name:"Wav",extension:"wav",audio_only_extension:"wav",defacto_codecs:{audio:g("Wav"),video:p},supported_video_codecs:[],supported_audio_codecs:["Wav","PCM"],mimetype:/(?:x-)?(?:pn-)?wave?/i},"3gp":{name:"3gp",extension:"3gpp",audio_only_extension:"mp3",defacto_codecs:{audio:p,video:p},supported_video_codecs:["H264","H263","MP4V","VP8"],supported_audio_codecs:["MP3","AAC"],mimetype:/(?:x-)?3gpp2?/i},QuickTime:{name:"QuickTime",extension:"mov",audio_only_extension:"mp3",defacto_codecs:{audio:p,video:p},supported_video_codecs:["MPEG1","MPEG2"],supported_audio_codecs:[],mimetype:/(?:x-)?mov/i}},la=y(function*(){for(let e of Object.keys(de))yield e}),ei=y(function*(){for(let e of la())yield de[e]});var ce={240:{id:"240",loose_name:"Small"},360:{id:"360",loose_name:"SD"},480:{id:"480",loose_name:"SD"},720:{id:"720",loose_name:"HD"},1080:{id:"1080",loose_name:"FullHD"},1440:{id:"1440",loose_name:"UHD"},2160:{id:"2160",loose_name:"4K"},4320:{id:"4320",loose_name:"8K"}};var da=y(function*(){for(let e of Object.keys(ce))yield e}),ti=y(function*(){for(let e of da())yield ce[e]});var ma=W(F(),1);async function pe(e,a){let i=a;e.hooks&&(i=e.hooks.setter(a)),await B.storage[e.where].set({[e.name]:i})}async function V(e){let a=await B.storage[e.where].get(e.name);if(e.name in a){let i=a[e.name];return e.hooks?e.hooks.getter(i,e):i}return e.default()}async function me(e){await B.storage[e.where].remove(e.name)}var T={name:"view_options",default:()=>({}),where:"session"};var X=R.default.i18n.getUILanguage().replace("-","_"),ee=Y[X],ue=Z;function he(){let e=document.querySelector("#only-empty"),i=document.querySelector("#filter").value.toLowerCase(),s=e.checked,n=Array.from(document.querySelectorAll("#entries > vbox"));for(let o of n){let l=o.querySelector(".reference"),d=o.querySelector("sl-input"),r=((d.getAttribute("label")||"")+(l.textContent||"")+d.value).toLowerCase();(i.length==0||r.includes(i))&&(!s||d.value.length==0)?o.removeAttribute("hidden"):o.setAttribute("hidden","true")}}async function ve(){let e=await V(T),a=document.querySelector("#entries");a.innerHTML="";for(let i of Object.keys(ue)){if(!i.startsWith("v9")&&!i.startsWith("_"))continue;let s=ue[i]||"",n=document.createElement("vbox");n.dataset.key=i;let o=document.createElement("sl-input");o.setAttribute("label",i+":"),o.setAttribute("clearable","true");let l=document.createElement("p");l.className="reference",n.appendChild(o),n.appendChild(l),i in e?(o.value=e[i],n.classList.add("custom")):o.value=ee[i]??"",l.textContent="English: "+s,a.appendChild(n)}he()}async function O(e){let a=e.target;if(a){let i=a.closest("#filter"),s=a.closest("#only-empty"),n=a.closest("vbox[data-key]"),o=a.closest("#button-help"),l=a.closest("#button-reset"),d=a.closest("#button-export");if((i||s)&&he(),o&&R.default.tabs.create({url:"https://github.com/aclap-dev/video-downloadhelper/wiki/Translations"}),l&&(await me(T),ve()),d){let m=`[${X}]
`;m+=`# v${R.default.runtime.getManifest().version}
`;let r=await V(T);for(let P of Object.keys(r))m+=`${P} = '''${r[P]}'''
`;let v=new Blob([m],{type:"text/plain;charset=utf-8"}),w=URL.createObjectURL(v);R.default.downloads.download({url:w,filename:`${X}.txt`,saveAs:!0,conflictAction:"uniquify"})}if(n&&e.type!="click"){let m=n.dataset.key,r=n.querySelector("sl-input"),v=await V(T);r.value!=v[m]&&(r.value.length>0&&r.value!=ee[m]?(n.classList.add("custom"),v[m]=r.value):(n.classList.remove("custom"),r.value=ee[m]||"",delete v[m]),await pe(T,v))}}}ve();window.addEventListener("click",O);window.addEventListener("change",O);window.addEventListener("input",O);window.addEventListener("sl-clear",O);