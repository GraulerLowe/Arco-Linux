import{chrome}from"../../../utils/polyfill.ts";import{isMV3,urlHost,browserName}from"../../../utils/utils";export const DYNAMIC_TRACKER_EASYLIST_WHITELIST_PRIORITY=17;export const DYNAMIC_TRACKER_WHITELIST_PRIORITY=18;export const DYNAMIC_WHITELIST_PRIORITY=19;export const RULESET_OVERRIDE_PRIORITY=20;export const DYNAMIC_RULE_ADS_PRIORITY=21;export const DYNAMIC_RULE_MALWARE_PRIORITY=22;export const DYNAMIC_RULE_SCAMS_PRIORITY=23;export const DYNAMIC_RULE_CONTENT_CONTROL_PRIORITY=24;export const DYNAMIC_RULE_HEURISTIC_PRIORITY=25;export const DYNAMIC_RULE_HEURISTIC_WHITELIST_PRIORITY=26;export const DYNAMIC_RULE_TEMPORARY_PRIORITY=29;export const DYNAMIC_RULE_ALL_PRIORITY=30;export const RISKY_TLDS_PRIORITY=10;export const getExistingDynamicRules=async e=>{if(!isMV3())return[];const t=await chrome.declarativeNetRequest.getDynamicRules();return e?Array.isArray(e)?t.filter((t=>e.includes(t.priority))):t.filter((t=>t.priority===e)):t};export const getExistingDynamicRulesByActionTypes=async(e,t)=>{if(!isMV3())return[];const o=await getExistingDynamicRules(t);return console.debug("ALL DYNAMIC RULES: ",o),o.filter((t=>e.includes(t.action.type)))};export const getLastDynamicRuleId=async()=>{if(!isMV3())return[];let e=1;const t=await getExistingDynamicRules();return console.debug("EXISTING_DYNAMIC_RULES",t),t.length>0&&(e=t.at(-1).id),e};export const clearAllDynamicRules=async e=>{if(!isMV3())return;const t=(await getExistingDynamicRules(e)).map((e=>e.id));await chrome.declarativeNetRequest.updateDynamicRules({addRules:[],removeRuleIds:[...t]})};export const getExistingSessionRules=()=>isMV3()?chrome.declarativeNetRequest.getSessionRules():[];export const addSessionRule=async(e,t,o=null)=>{if(!isMV3())return;let s=[];o||(o=21);let i=await getLastSessionRuleId()+1;const r=await getExistingSessionRules();e=e.filter((e=>r.every((t=>t.condition.urlFilter!==e))));let n=allSupportedResourceTypes();for(const r of e){const e={id:i,priority:o,action:{type:t},condition:{urlFilter:r,resourceTypes:n}};s.push(e),i+=1}await chrome.declarativeNetRequest.updateSessionRules({addRules:s,removeRuleIds:[]},(()=>{let e=chrome.runtime.lastError;e&&console.error("Error adding session rules",e)}))};export const addSessionRuleIfNotExists=async(e,t,o)=>{if(!isMV3())return;const s=await getExistingSessionRules();(e=e.filter((e=>s.every((t=>t.condition.urlFilter!==e&&t.priority===o))))).length>0&&await addSessionRule(e,t,o)};export const getLastSessionRuleId=async()=>{let e=1;const t=await getExistingSessionRules();return console.debug("EXISTING_SESSION_RULES",t),t.length>0&&(e=t.at(-1).id),e};const overrideToRules=(e,t)=>{const o=supportedSubFrameResourceTypes(),s=allSupportedResourceTypes(),i=[];return"block"===e.type?(i.push({id:t,priority:20,action:{type:"block"},condition:{urlFilter:e.url,resourceTypes:o}}),i.push({id:t+1,priority:20,action:{type:"redirect",redirect:{extensionPath:`/app/eventpages/block-mv3.html?type=malware&url=${e.url}`}},condition:{urlFilter:e.url,resourceTypes:mainFrameResourceType}})):(i.push({id:t,priority:20,action:{type:"allow"},condition:{urlFilter:urlHost(e.url),resourceTypes:s}}),i.push({id:t+1,priority:20,action:{type:"allow"},condition:{urlFilter:"*",initiatorDomains:[urlHost(e.url)],resourceTypes:s}})),i};export const toggleGtldDomains=async(e,t)=>{if(isMV3())if(e){let e=await getLastDynamicRuleId()+1;const o=[];for(const s of t)o.push({id:e,priority:10,action:{type:"block"},condition:{urlFilter:`||.${s}`,resourceTypes:allSupportedResourceTypes()}}),e+=1;await chrome.declarativeNetRequest.updateDynamicRules({addRules:o,removeRuleIds:[]})}else await clearAllDynamicRules(10)};export const updateRulesetOverrides=async e=>{if(!isMV3())return;console.debug("UPDATE_OVERRIDES: overrides",{overrides:e});let t=await getExistingDynamicRules(20);t=t.filter((e=>["allow","block"].includes(e.action.type)));const o={};for(const e of t){const t=e.action.type,s=e.condition.urlFilter;o[s]?o[s].includes(t)||o[s].push(t):o[s]=[t]}console.debug("UPDATE_OVERRIDES: urlToTypes",{urlToTypes:o});let s=[],i=[],r=await getLastDynamicRuleId();for(const t of e){console.debug("UPDATE_OVERRIDES: processing",{override:t});const{type:e,url:n}=t;if(o[n]&&o[n].includes(e)){console.debug("UPDATE_OVERRIDES: skipping",{override:t});continue}if(o[n]){const e=await getExistingDynamicRules(20);console.debug("UPDATE_OVERRIDES: existingRules",{existingRules:e});const t=e.filter((e=>e.condition.urlFilter===urlHost(n)||(e.condition.initiatorDomains||[]).includes(urlHost(n)))).map((e=>e.id));i=[...i,...t]}const l=overrideToRules(t,r+1);s=[...s,...l],r+=l.length}console.debug("UPDATE_OVERRIDES: newRules",{newAddRules:s,newRemoveRuleIds:i}),await chrome.declarativeNetRequest.updateDynamicRules({addRules:s,removeRuleIds:i});const n=e.map((e=>e.url));rulesetOverrideCache.addToCache(n)};export const updateMV3DynamicWhitelists=async e=>{if(!isMV3())return;console.debug("UDWL: whitelists",{whitelists:e});const t=await getExistingDynamicRules(19),o=[],s=[];let i=await getLastDynamicRuleId();for(const r of e){const e=t.filter((e=>e.condition.urlFilter===r||(e.condition.initiatorDomains||[]).includes(r)));for(const t of e)s.push(t.id);const n={id:i+1,priority:19,action:{type:"allow"},condition:{urlFilter:r,resourceTypes:allSupportedResourceTypes()}};o.push(n),i+=1}console.debug("UPDATE_WHITELISTS: newRules",{rulesToAdd:o,ruleIdsToRemove:s}),await chrome.declarativeNetRequest.updateDynamicRules({addRules:o,removeRuleIds:s})};export const updateMV3DynamicTrackerWhitelist=async e=>{if(!isMV3())return;console.debug("UDTW: trackerWhitelist",{trackerWhitelist:e});const t=[],o=[];let s=await getLastDynamicRuleId()+1;for(const i of e)if(i&&i.host&&i.tracker){let{host:e,tracker:r}=i;if(e=urlHost(e),"easylist"!==r.toLowerCase()){const i=(await getExistingDynamicRules(18)).filter((t=>t.condition.initiatorDomains&&t.condition.initiatorDomains.includes(e)));for(const e of i)o.push(e.id);const n={id:++s,priority:18,action:{type:"allow"},condition:{initiatorDomains:[e],urlFilter:r,resourceTypes:allSupportedResourceTypes()}};t.push(n)}else{const i=(await getExistingDynamicRules(17)).filter((t=>t.condition.url&&t.condition.urlFilter==e));for(const e of i)o.push(e.id);const r={id:++s,priority:17,action:{type:"allow"},condition:{urlFilter:e,resourceTypes:allSupportedResourceTypes()}};t.push(r)}}console.debug("UDTW: newRules",{rulesToAdd:t,ruleIdsToRemove:o}),await chrome.declarativeNetRequest.updateDynamicRules({addRules:t,removeRuleIds:o})};export class RulesetOverrideCache{constructor(){this.CACHE={},this.loadCache()}async loadCache(){const e=(await getExistingDynamicRules(20)).filter((e=>"allow"===e.action&&e.condition.urlFilter&&"*"!==e.condition.urlFilter));for(const t of e)this.CACHE[t.condition.urlFilter]=!0}addToCache(e){for(const t of e)this.CACHE[t]=!0}isOverriden(e){return!!this.CACHE[e]}}function allSupportedResourceTypes(){return"Firefox"===browserName()?allResourceTypes.filter((e=>!["webtransport","webbundle"].includes(e))):allResourceTypes}function supportedSubFrameResourceTypes(){return"Firefox"===browserName()?subFrameResourceType.filter((e=>!["webtransport","webbundle"].includes(e))):subFrameResourceType}export const rulesetOverrideCache=new RulesetOverrideCache;export const mainFrameResourceType=["main_frame"];export const subFrameResourceType=["sub_frame","stylesheet","script","image","font","object","xmlhttprequest","ping","csp_report","media","websocket","other","webtransport","webbundle"];export const allResourceTypes=[...mainFrameResourceType,...supportedSubFrameResourceTypes()];