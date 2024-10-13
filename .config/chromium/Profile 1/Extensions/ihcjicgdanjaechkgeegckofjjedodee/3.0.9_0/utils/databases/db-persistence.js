import{DB_NAMES_BLOOM,DB_NAMES_RAW,REGEX_DBS,DB_DIR,DB_NAME_FEATURE_FLAGS,rulesetOverrideDbName,DB_NAMES_JSON,DB_NAME_MV3_DYNAMIC_WHITELIST}from"./db-consts";import{IndexedDatabase}from"./indexed-database";import{IndexedDatabaseFile}from"./indexed-database-file";import{isIndexedDbAvailable,cleanDbName,objToBinary}from"../utils";import{simpleStorageGet,simpleStorageSet}from"../storage.ts";import{getObjs as getObjsIndexedDb,saveObjs as saveObjsIndexedDb}from"../indexed-db.ts";import{fileWrite,fileDelete,queuedFileRead}from"../file";import bundledDbVersions from"../../db/version.json";const parseDbsParameter=e=>{const a=new Set(e),s=DB_NAMES_BLOOM.filter((e=>a.has(e))),o=DB_NAMES_RAW.filter((e=>a.has(e))),n=DB_NAMES_JSON.filter((e=>a.has(e))),t=s.map((e=>({name:e,cleanName:cleanDbName(e),isBloom:!0,isFeatureFlags:!1}))).concat(o.map((e=>({name:e,cleanName:cleanDbName(e),isBloom:!1,isFeatureFlags:!1})))).concat(n.map((e=>({name:e,cleanName:cleanDbName(e),isBloom:!1,isFeatureFlags:!1,isJson:!0}))));a.has(DB_NAME_FEATURE_FLAGS)&&t.push({name:DB_NAME_FEATURE_FLAGS,cleanName:cleanDbName(DB_NAME_FEATURE_FLAGS),isBloom:!1,isFeatureFlags:!0});const r=rulesetOverrideDbName();return r.length>0&&a.has(r[0])&&t.push({name:r[0],cleanName:cleanDbName(r[0]),isBloom:!1,isFeatureFlags:!1}),a.has(DB_NAME_MV3_DYNAMIC_WHITELIST)&&t.push({name:DB_NAME_MV3_DYNAMIC_WHITELIST,cleanName:cleanDbName(DB_NAME_MV3_DYNAMIC_WHITELIST),isBloom:!1,isFeatureFlags:!1}),t};export const loadBundledDatabases=async e=>{console.debug("LBD: Forcing reading bundled databases at "+(new Date).toLocaleString()),console.debug("LBD: Databases to be loaded:",e);const a=parseDbsParameter(e),s=[];a.forEach((e=>{s.push(loadBundledDb(e.name,e.isBloom,e.isFeatureFlags))}));const o=[];return(await Promise.all(s)).forEach((e=>{if(!bundledDbVersions[e.name])return void console.warn(`LBD: No DB found for ${e.name}`);let a=bundledDbVersions[e.name].version||"0";o.push(buildDbResult(e,a))})),console.debug("LBD: Bundled unpack complete at "+(new Date).toLocaleString()),console.log(`LBD: ${o.length} bundled databases loaded`),o};export const loadCachedDatabases=async e=>{if(!isIndexedDbAvailable())return console.warn("LCD: IndexedDB not available in this browser"),[];const a=parseDbsParameter(e),s=await getObjsIndexedDb({dbName:"cachedDb",storeName:"cachedDbStore",storeOptions:{keyPath:"dbName"},waitStrategy:"allSettled",keys:a.map((e=>e.cleanName))}),o=[];s.forEach(((e,s)=>{if(!e)return void console.warn(`LCD: No cache db for ${a[s].name}`);const n=a[s];if("rejected"===e.status)return void console.warn(`LCD: Error loading ${n.name} from the cache`,e.reason);if("fulfilled"!==e.status)return void console.log(`LCD: ${n.name} not loaded from cache`);const t=e.value;t?t.dbName&&t.data?o.push(buildDbResult({name:n.name,isBloom:n.isBloom,isFeatureFlags:n.isFeatureFlags,isRaw:!n.isBloom,result:n.isBloom?new IndexedDatabase(n.name,t.data.bloomFilter):t.data},t.version)):console.debug(`LCD: No cache db for ${n.name}.`,n.name):console.log(`LCD: ${n.name} not loaded from cache`)}));const n=o.filter((e=>!e.version));if(n.length>0){console.warn(`LCD: Found ${n.length} dbs with no version in the cache, querying simpleStorage to get the version`),console.debug("LCD: Cache databases with no version",n.map((e=>e.name)));const e=await simpleStorageGet("databases")||{};n.forEach((a=>{a.version=e[a.name]&&e[a.name].version,console.debug(`LCD: Version for ${a.name}:`,a.version)}));const a=n.filter((e=>e.version));a.length>0&&(console.debug(`LCD: Re-writing ${a.length} databases in the cache, version was set`),await saveDbsToCache(a))}return console.log(`LCD: ${o.length} databases loaded from the cache`),o};export const saveDbsToCache=async e=>{if(!isIndexedDbAvailable())return console.warn("SDTC: IndexedDB not available in this browser"),!1;var a=e.map((e=>{let a;return a=e.rawData?e.rawData:e.data instanceof Set?Array.from(e.data):e.data,{dbName:e.cleanName,data:a,version:e.version}}));return await saveObjsIndexedDb({dbName:"cachedDb",storeName:"cachedDbStore",storeOptions:{keyPath:"dbName"},values:a}),!0};export const loadIdbStorageDatabases=async e=>{if(!isIndexedDbAvailable())return console.warn("LISD: IndexedDB not available in this browser"),[];const a=parseDbsParameter(e),s=[];a.forEach((e=>{s.push(loadIdbStorageDb(e.name,e.isBloom,e.isFeatureFlags))}));const o=[];(await Promise.allSettled(s)).forEach(((e,s)=>{const n=a[s];if("rejected"==e.status)return void console.warn(`LISD: Error loading ${n.name} from the IdbStorage`,e.reason);const t=e.value;o.push(buildDbResult(t,t.version))}));const n=o.filter((e=>!e.version));if(n.length>0){console.warn(`LISD: Found ${n.length} dbs with no version file, querying simpleStorage to get the version`),console.debug("LISD: Databases with no version",n.map((e=>e.name)));const e=await simpleStorageGet("databases")||{},a=[];if(n.forEach((s=>{s.version=e[s.name]&&e[s.name].version,console.debug(`LISD: Version for ${s.name}:`,s.version),s.version&&a.push(saveVersionFile(s.name,s.version))})),a.length>0)try{await Promise.all(a),console.debug(`LISD: ${a.length} version files created`)}catch(e){console.error("LISD: Error saving version files",e)}}return console.log(`LBD: ${o.length} databases loaded from IdbStorage`),o};export const saveDownloadedDb=(e,a,s)=>{if(!a)throw new Error("Version is required");return Promise.all([fileDelete(DB_DIR,e),fileWrite(DB_DIR,e,s),saveVersionFile(e,a),simpleStorageSet({idbStorageDatabases:!0})])};const saveVersionFile=(e,a)=>{const s=objToBinary({name:e,version:a});return fileWrite(DB_DIR,`${e}.version`,s)},getVersionFromVersionFile=(e,a)=>{if(a)try{return JSON.parse((new TextDecoder).decode(a)).version}catch(a){return void console.warn(`GVFVF: Error parsing version file for ${e}`,a)}else console.warn(`GVFVF: Version file for ${e} is falsy`,a)};export const buildDbResult=(e,a)=>{const s={};if(s.name=e.name,s.version=a,s.cleanName=cleanDbName(s.name),s.isBloom=e.isBloom,s.isRaw=e.isRaw,s.data=e.result,s.isFeatureFlags=e.isFeatureFlags,"malware_urls"==s.cleanName&&(s.rawData=s.data,s.data=new Set(s.data)),REGEX_DBS.includes(s.cleanName)&&(s.rawData=s.data,s.data=s.data.map((e=>new RegExp(e,"i"))),s.isRegex=!0),DB_NAMES_JSON.includes(s.name)){s.isJson=!0,s.rawData=s.data;for(let e=0;e<s.data.length;e++){let a=s.data[e]?.r;if(!a&&"string"==typeof s.data[e]){let a=s.data[e],o={s:!1,r:new RegExp(a)};s.data[e]=o}if(a&&"string"==typeof a){let o=a;o.startsWith("/")&&o.endsWith("/")&&(o=o.slice(1,-1),o=o.replace(/\\\\/g,"\\")),s.data[e].r=new RegExp(o)}}}return s};const loadBundledDb=(e,a,s)=>{const o=a&&new IndexedDatabase(e),n=!a&&new IndexedDatabaseFile(e);return(a?o.parseBundled():n.readBundled()).then((n=>({name:e,isBloom:a,isFeatureFlags:s,isRaw:!a,result:a?o:n})))},loadIdbStorageDb=(e,a,s)=>{const o=a&&new IndexedDatabase(e),n=!a&&new IndexedDatabaseFile(e),t=a?o.parse():n.read();return Promise.allSettled([t,queuedFileRead(`${e}.version`)]).then((n=>{const[t,r]=n;if("rejected"==t.status){if("string"==typeof t.reason)throw new Error(`Error loading ${e} from IdbStorage: ${t.reason}`);throw t.reason}const i=getVersionFromVersionFile(e,r.value);return{name:e,isBloom:a,isFeatureFlags:s,isRaw:!a,result:a?o:t.value,version:i}}))};