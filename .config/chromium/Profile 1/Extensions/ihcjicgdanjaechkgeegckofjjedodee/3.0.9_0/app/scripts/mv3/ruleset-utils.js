import{chrome}from"../../../utils/polyfill.ts";import{MV3_PROTECTION_ADS,MV3_PROTECTION_MALWARE,MV3_PROTECTION_SCAMS}from"../app-consts";export const defaultRulesetPatterns=["mbgc.mv3.whitelist","mbgc.mv3.ads","mbgc.mv3.malware","mbgc.mv3.easylist","mbgc.mv3.easyprivacy"];export const checkAllRulesetsEnabled=async()=>{const e=await getAllAvailableStaticRulesets(),t=await chrome.declarativeNetRequest.getEnabledRulesets();console.debug("CARE: Enabled rulesets: ",{enabledRulesets:t}),t.every((t=>e.includes(t)))||console.warn("CARE: Not all rulesets enabled")};export const tryUpdateEnabledRulesets=async e=>{if(0===e.length)return void console.debug("TUER: No rulesets to enable");let t=0;const l=await chrome.declarativeNetRequest.getAvailableStaticRuleCount();for(console.debug("TUER: Available rule count: ",l);l>=3e4&&t<e.length;)if(await chrome.declarativeNetRequest.updateEnabledRulesets({enableRulesetIds:[e[t]]}),chrome.runtime.lastError)console.error("TUER: Error enabling ruleset ",e[t],chrome.runtime.lastError);else{console.debug("TUER: Enabled ruleset ",e[t]);const l=await chrome.declarativeNetRequest.getAvailableStaticRuleCount();console.debug("TUER: Available rule count: ",l),t++}};export const checkForAdditionalRuleSpace=async()=>{const e=await chrome.declarativeNetRequest.getEnabledRulesets();if(!e||0===e.length)return;const t=(await getAllAvailableStaticRulesets()).filter((t=>!e.includes(t)));0!==t.length&&await tryUpdateEnabledRulesets(t)};export const getRuleStats=async()=>{const e=(await chrome.declarativeNetRequest.getDynamicRules()||[]).length,t=await chrome.declarativeNetRequest.getAvailableStaticRuleCount()||0,l=33e4-t,a=await chrome.declarativeNetRequest.getEnabledRulesets();return{enabledRulesets:a,dynamicRuleCount:e,staticRulesetCount:a.length,staticRuleCount:l,availableStaticRuleCount:t}};export const toggleEnabledRuleset=async(e,t)=>{const l=rulesetsForProtectionConst(e);!1!==t?await tryUpdateEnabledRulesets(l):await chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds:t?[]:l})};export const toggleAllEnabledRulesets=async e=>{const t=await chrome.declarativeNetRequest.getEnabledRulesets();console.debug("TAER: Enabled rulesets: ",t);const l=(await getAllAvailableStaticRulesets()).filter((e=>!t.includes(e)));console.debug("TAER: Not currently enabled: ",l),!1!==e?await tryUpdateEnabledRulesets(l):await chrome.declarativeNetRequest.updateEnabledRulesets({disableRulesetIds:e?[]:t})};const getAllAvailableStaticRulesets=()=>{const e=chrome.runtime.getManifest().declarative_net_request.rule_resources.map((e=>e.id));return console.debug("GASR: All rulesets: ",e),e},rulesetsForProtectionConst=e=>{let t=null;switch(e){case MV3_PROTECTION_ADS:t=["mbgc.mv3.ads","mbgc.mv3.easylist","mbgc.mv3.easyprivacy","mbgc.arw"];break;case MV3_PROTECTION_MALWARE:t=["mbgc.mv3.malware"];break;default:t=[]}const l=getAllAvailableStaticRulesets(),a=[];for(const e of l)t.find((t=>e.startsWith(t)))&&a.push(e);return console.debug("RFPC: Affected rulesets: ",{rulesetPatterns:t,protectionConst:e,affected:a}),a};