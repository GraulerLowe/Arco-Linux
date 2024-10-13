chrome||browser||(window.chrome=chrome||window.chrome||window.browser),(chrome||window.chrome).runtime.getURL(""),(()=>{"use strict";const e="undefined"!=typeof window?window:self,t=e.chrome||e.browser||browser;let s;console.log(`POLYFILL => User Agent: ${navigator.userAgent}, Browser: ${t}`);try{s=indexedDB||e.indexedDB}catch(e){console.log(`Error initializing indexedDB: ${e.message}`)}performance||e.performance,URL||e.URL,t.i18n.getUILanguage().split("-")[0],Object.freeze({LicenseStateUnknown:0,LicenseStateFree:1,LicenseStateTrial:2,LicenseStateTrialExpired:3,LicenseStateLicensed:4,LicenseStateLicenseExpired:5,LicenseStateLicenseGrace:6}),Object.freeze([2,4,6]),Object.defineProperty({},"browser",{writable:!0}),Object.defineProperty({},"os",{writable:!0}),Object.defineProperty({},"isMV3",{writable:!0});let n={};async function o(){const e=document.querySelector('#choose-features input[name="feature"]:checked');if(!e)return;const s=e.value;console.debug("SELECTED CHOICE: ",s),document.querySelector("#save-choice-btn").disabled=!0,c(!0),i(!1),await async function(e){try{return void await t.runtime.sendMessage({type:"MSG_MV3_INIT_WITH_FEATURES",features:e,mv3:!0})}catch(e){console.error(e),console.error(t.runtime.lastError)}}(s),document.querySelector("#save-choice-btn").disabled=!1,r(!1),c(!1),i(!0)}function r(e){e?document.querySelector("#save-choice-btn").classList.remove("hidden"):document.querySelector("#save-choice-btn").classList.add("hidden")}function c(e){e?document.querySelector("#save-choice-btn .sk-fading-circle").classList.remove("hidden"):document.querySelector("#save-choice-btn .sk-fading-circle").classList.add("hidden")}function i(e){e?document.querySelector("#choice-saved").classList.remove("hidden"):document.querySelector("#choice-saved").classList.add("hidden")}Object.defineProperty(n,"bgVersion",{writable:!0}),n.bgVersion||t.runtime.getManifest(),document.addEventListener("DOMContentLoaded",(async()=>{((e,s=document)=>{[{id:"re-title",msg:"mv3RulesetErrorTitle"},{id:"re-what-happened-title",msg:"mv3WhatHappenedTitle"},{id:"re-what-happened",msg:"mv3WhatHappened"},{id:"re-what-happened-link",msg:"mv3WhatHappenedLink"},{id:"re-what-you-can-do-title",msg:"mv3WhatYouCanDoTitle"},{id:"re-what-you-can-do",msg:"mv3WhatYouCanDo"},{id:"re-what-you-can-do-or",msg:"mv3WhatYouCanDoOr"},{id:"re-choose-features-title",msg:"mv3ChooseFeaturesTitle"},{id:"re-choose-features-ads",msg:"mv3ChooseFeaturesAds"},{id:"re-choose-features-ads-hint",msg:"mv3ChooseFeaturesAdsHint"},{id:"re-choose-features-ads-desc",msg:"mv3ChooseFeaturesAdsDesc"},{id:"re-choose-features-malware",msg:"mv3ChooseFeaturesMalware"},{id:"re-choose-features-malware-desc",msg:"mv3ChooseFeaturesMalwareDesc"},{id:"re-rule-type-dynamic",msg:"mv3RuleStatsDynamic"},{id:"re-rule-type-dynamic-desc",msg:"mv3RuleStatsDynamicDesc"},{id:"re-rule-type-static",msg:"mv3RuleStatsStatic"},{id:"re-rule-type-static-desc",msg:"mv3RuleStatsStaticDesc"},{id:"re-rule-type-static-ruleset",msg:"mv3RuleStatsStaticRuleset"},{id:"re-rule-type-static-ruleset-desc",msg:"mv3RuleStatsStaticRulesetDesc"},{id:"mv3-block-level-up",msg:"mv3WebsiteBlockLevelUp"},{id:"mv3-block-level-up-info",msg:"mv3WebsiteBlockLevelUpInfo"},{id:"mv3-block-level-up-info-link",msg:"mv3WebsiteBlockLevelUpInfoLink"},{id:"mv3-block-level-up-info-contd",msg:"mv3WebsiteBlockLevelUpInfoContd"},{id:"mv3-block-get-started",msg:"mv3WebsiteBlockGetStarted"}].forEach((({id:e,msg:n,sub:o=null})=>{const r=s.getElementById(e);r&&(r.textContent=t.i18n.getMessage(n,o||void 0))}))})(),function(){document.querySelector("#save-choice-btn").addEventListener("click",o),document.querySelectorAll('#choose-features input[name="feature"]').forEach((e=>{e.addEventListener("change",(()=>{r(!0),i(!1)}))}));const{dynamicRuleCount:e,statcicRuleCount:t,staticRulesetCount:s}=function(){let e=function(e){let t={},s=new URLSearchParams(e).entries();for(let e of s){const s="$"+e[0];"null"===e[1]?t[s]=null:"undefined"===e[1]?t[s]=void 0:t[s]=e[1]}return new Proxy(t,{get:(e,t)=>t.startsWith("$")?e[t]:e[`$${t}`]})}(window.location.search);return{dynamicRuleCount:e.dCnt||0,statcicRuleCount:e.sCnt||0,staticRulesetCount:e.srCnt||0}}();document.querySelector("#d-cnt").textContent=e,document.querySelector("#s-cnt").textContent=t,document.querySelector("#sr-cnt").textContent=s}()}))})();