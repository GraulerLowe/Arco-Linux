chrome||browser||(window.chrome=chrome||window.chrome||window.browser),(chrome||window.chrome).runtime.getURL(""),(()=>{"use strict";const e="undefined"!=typeof window?window:self,o=e.chrome||e.browser||browser;let r;console.log(`POLYFILL => User Agent: ${navigator.userAgent}, Browser: ${o}`);try{r=indexedDB||e.indexedDB}catch(e){console.log(`Error initializing indexedDB: ${e.message}`)}performance||e.performance,URL||e.URL,console.debug("DBG: content-debugging.js loaded:  "+window.location.href),"https://www.malwarebytes.com/browserguard/download-debug-logs?yes=true"===window.location.href&&(window.location.href=o.runtime.getURL("app/eventpages/downloading.html"))})();