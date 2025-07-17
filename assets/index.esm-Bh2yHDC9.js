import{r as t,_ as e,C as n,d as a,E as i,e as r,F as o,f as s,h as c,j as u,k as l,m as d,n as f,v as p,L as m,p as g}from"./firebase-BYheNj5Y.js";const h="@firebase/installations",w="0.6.9",y=1e4,I=`w:${w}`,v="FIS_v2",b=36e5,T=new i("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function k(t){return t instanceof o&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function S(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function j(t,e){const n=(await e.json()).error;return T.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function $({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function P(t,{refreshToken:e}){const n=$(t);return n.append("Authorization",function(t){return`${v} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),n}async function D(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(t){return new Promise(e=>{setTimeout(e,t)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F=/^[cdef][\w-]{21}$/;function M(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){const e=(n=t,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return F.test(e)?e:""}catch(t){return""}}function E(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=new Map;function x(t,e){const n=E(t);O(n,e),function(t,e){const n=function(){!z&&"BroadcastChannel"in self&&(z=new BroadcastChannel("[Firebase] FID Change"),z.onmessage=t=>{O(t.data.key,t.data.fid)});return z}();n&&n.postMessage({key:t,fid:e});0===q.size&&z&&(z.close(),z=null)}(n,e)}function O(t,e){const n=q.get(t);if(n)for(const a of n)a(e)}let z=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N="firebase-installations-store";let _=null;function L(){return _||(_=r("firebase-installations-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(N)}})),_}async function K(t,e){const n=E(t),a=(await L()).transaction(N,"readwrite"),i=a.objectStore(N),r=await i.get(n);return await i.put(e,n),await a.done,r&&r.fid===e.fid||x(t,e.fid),e}async function U(t){const e=E(t),n=(await L()).transaction(N,"readwrite");await n.objectStore(N).delete(e),await n.done}async function B(t,e){const n=E(t),a=(await L()).transaction(N,"readwrite"),i=a.objectStore(N),r=await i.get(n),o=e(r);return void 0===o?await i.delete(n):await i.put(o,n),await a.done,!o||r&&r.fid===o.fid||x(t,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R(t){let e;const n=await B(t.appConfig,n=>{const a=function(t){const e=t||{fid:M(),registrationStatus:0};return G(e)}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(T.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const a=C(t),i=$(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:v,appId:t.appId,sdkVersion:I},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await D(()=>fetch(a,s));if(c.ok){const t=await c.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:S(t.authToken)}}throw await j("Create Installation",c)}(t,e);return K(t.appConfig,n)}catch(n){throw k(n)&&409===n.customData.serverCode?await U(t.appConfig):await K(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:a}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:H(t)}:{installationEntry:e}}(t,a);return e=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function H(t){let e=await V(t.appConfig);for(;1===e.registrationStatus;)await A(100),e=await V(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await R(t);return n||e}return e}function V(t){return B(t,t=>{if(!t)throw T.create("installation-not-found");return G(t)})}function G(t){return 1===(e=t).registrationStatus&&e.registrationTime+y<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function W({appConfig:t,heartbeatServiceProvider:e},n){const a=function(t,{fid:e}){return`${C(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,n),i=P(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:I,appId:t.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await D(()=>fetch(a,s));if(c.ok){return S(await c.json())}throw await j("Generate Auth Token",c)}async function J(t,e=!1){let n;const a=await B(t.appConfig,a=>{if(!X(a))throw T.create("not-registered");const i=a.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+b}(t)}(i))return a;if(1===i.requestStatus)return n=async function(t,e){let n=await Q(t.appConfig);for(;1===n.authToken.requestStatus;)await A(100),n=await Q(t.appConfig);const a=n.authToken;return 0===a.requestStatus?J(t,e):a}(t,e),a;{if(!navigator.onLine)throw T.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(a);return n=async function(t,e){try{const n=await W(t,e),a=Object.assign(Object.assign({},e),{authToken:n});return await K(t.appConfig,a),n}catch(n){if(!k(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await K(t.appConfig,n)}else await U(t.appConfig);throw n}}(t,e),e}});return n?await n:a.authToken}function Q(t){return B(t,t=>{if(!X(t))throw T.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+y<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function X(t){return void 0!==t&&2===t.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Y(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await R(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await J(n,e)).token}function Z(t){return T.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="installations",et=t=>{const e=t.getProvider("app").getImmediate(),n=a(e,tt).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:a}=await R(e);return a?a.catch(console.error):J(e).catch(console.error),n.fid}(n),getToken:t=>Y(n,t)}};e(new n(tt,t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw Z("App Configuration");if(!t.name)throw Z("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Z(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:a(e,"heartbeat"),_delete:()=>Promise.resolve()}},"PUBLIC")),e(new n("installations-internal",et,"PRIVATE")),t(h,w),t(h,w,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nt="analytics",at="https://www.googletagmanager.com/gtag/js",it=new m("@firebase/analytics"),rt=new i("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ot(t){if(!t.startsWith(at)){const e=rt.create("invalid-gtag-resource",{gtagURL:t});return it.warn(e.message),""}return t}function st(t){return Promise.all(t.map(t=>t.catch(t=>t)))}function ct(t,e){const n=function(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}("firebase-js-sdk-policy",{createScriptURL:ot}),a=document.createElement("script"),i=`${at}?l=${t}&id=${e}`;a.src=n?null==n?void 0:n.createScriptURL(i):i,a.async=!0,document.head.appendChild(a)}function ut(t,e,n,a){return async function(i,...r){try{if("event"===i){const[a,i]=r;await async function(t,e,n,a,i){try{let r=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);const a=await st(n);for(const n of t){const t=a.find(t=>t.measurementId===n),i=t&&e[t.appId];if(!i){r=[];break}r.push(i)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",a,i||{})}catch(r){it.error(r)}}(t,e,n,a,i)}else if("config"===i){const[i,o]=r;await async function(t,e,n,a,i,r){const o=a[i];try{if(o)await e[o];else{const t=(await st(n)).find(t=>t.measurementId===i);t&&await e[t.appId]}}catch(s){it.error(s)}t("config",i,r)}(t,e,n,a,i,o)}else if("consent"===i){const[e,n]=r;t("consent",e,n)}else if("get"===i){const[e,n,a]=r;t("get",e,n,a)}else if("set"===i){const[e]=r;t("set",e)}else t(i,...r)}catch(o){it.error(o)}}}const lt=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function dt(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ft(t,e=lt,n){const{appId:a,apiKey:i,measurementId:r}=t.options;if(!a)throw rt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:a};throw rt.create("no-api-key")}const o=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new mt;return setTimeout(async()=>{s.abort()},6e4),pt({appId:a,apiKey:i,measurementId:r},o,s,e)}async function pt(t,{throttleEndTimeMillis:e,backoffCount:n},a,i=lt){var r;const{appId:s,measurementId:c}=t;try{await function(t,e){return new Promise((n,a)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),a(rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}(a,e)}catch(u){if(c)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:s,measurementId:c};throw u}try{const e=await async function(t){var e;const{appId:n,apiKey:a}=t,i={method:"GET",headers:dt(a)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(s){}throw rt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return i.deleteThrottleMetadata(s),e}catch(u){const e=u;if(!function(t){if(!(t instanceof o&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(i.deleteThrottleMetadata(s),c)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:c};throw u}const l=503===Number(null===(r=null==e?void 0:e.customData)||void 0===r?void 0:r.httpStatus)?g(n,i.intervalMillis,30):g(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(s,d),it.debug(`Calling attemptFetch again in ${l} millis`),pt(t,d,a,i)}}class mt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gt,ht;function wt(t){ht=t}function yt(t){gt=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t,e,n,a,i,r,o){var s;const c=ft(t);c.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>it.error(t)),e.push(c);const u=async function(){if(!f())return it.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await p()}catch(t){return it.warn(rt.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then(t=>t?a.getId():void 0),[l,d]=await Promise.all([c,u]);(function(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(at)&&n.src.includes(t))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r)||ct(r,l.measurementId),ht&&(i("consent","default",ht),wt(void 0)),i("js",new Date);const m=null!==(s=null==o?void 0:o.config)&&void 0!==s?s:{};return m.origin="firebase",m.update=!0,null!=d&&(m.firebase_id=d),i("config",l.measurementId,m),gt&&(i("set",gt),yt(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.app=t}_delete(){return delete bt[this.app.options.appId],Promise.resolve()}}let bt={},Tt=[];const kt={};let Ct,St,jt="dataLayer",$t="gtag",Pt=!1;function Dt(t){if(Pt)throw rt.create("already-initialized");t.dataLayerName&&(jt=t.dataLayerName),t.gtagName&&($t=t.gtagName)}function At(t,e,n){!function(){const t=[];if(l()&&t.push("This is a browser extension environment."),d()||t.push("Cookies are not available."),t.length>0){const e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=rt.create("invalid-analytics-context",{errorInfo:e});it.warn(n.message)}}();const a=t.options.appId;if(!a)throw rt.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw rt.create("no-api-key");it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=bt[a])throw rt.create("already-exists",{id:a});if(!Pt){!function(t){let e=[];Array.isArray(window[t])?e=window[t]:window[t]=e}(jt);const{wrappedGtag:t,gtagCore:e}=function(t,e,n,a,i){let r=function(...t){window[a].push(arguments)};return window[i]&&"function"==typeof window[i]&&(r=window[i]),window[i]=ut(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}(bt,Tt,kt,jt,$t);St=t,Ct=e,Pt=!0}bt[a]=It(t,Tt,kt,e,Ct,jt,n);return new vt(t)}function Ft(t=s()){t=c(t);const e=a(t,nt);return e.isInitialized()?e.getImmediate():Mt(t)}function Mt(t,e={}){const n=a(t,nt);if(n.isInitialized()){const t=n.getImmediate();if(u(e,n.getOptions()))return t;throw rt.create("already-initialized")}return n.initialize({options:e})}async function Et(){if(l())return!1;if(!d())return!1;if(!f())return!1;try{return await p()}catch(t){return!1}}function qt(t,e,n){t=c(t),async function(t,e,n,a){if(a&&a.global)return t("set",{screen_name:n}),Promise.resolve();t("config",await e,{update:!0,screen_name:n})}(St,bt[t.app.options.appId],e,n).catch(t=>it.error(t))}async function xt(t){return t=c(t),async function(t,e){const n=await e;return new Promise((e,a)=>{t("get",n,"client_id",t=>{t||a(rt.create("no-client-id")),e(t)})})}(St,bt[t.app.options.appId])}function Ot(t,e,n){t=c(t),async function(t,e,n,a){if(a&&a.global)return t("set",{user_id:n}),Promise.resolve();t("config",await e,{update:!0,user_id:n})}(St,bt[t.app.options.appId],e,n).catch(t=>it.error(t))}function zt(t,e,n){t=c(t),async function(t,e,n,a){if(a&&a.global){const e={};for(const t of Object.keys(n))e[`user_properties.${t}`]=n[t];return t("set",e),Promise.resolve()}t("config",await e,{update:!0,user_properties:n})}(St,bt[t.app.options.appId],e,n).catch(t=>it.error(t))}function Nt(t,e){t=c(t),async function(t,e){const n=await t;window[`ga-disable-${n}`]=!e}(bt[t.app.options.appId],e).catch(t=>it.error(t))}function _t(t){St?St("set",t):yt(t)}function Lt(t,e,n,a){t=c(t),async function(t,e,n,a,i){if(i&&i.global)t("event",n,a);else{const i=await e;t("event",n,Object.assign(Object.assign({},a),{send_to:i}))}}(St,bt[t.app.options.appId],e,n,a).catch(t=>it.error(t))}function Kt(t){St?St("consent","update",t):wt(t)}const Ut="@firebase/analytics",Bt="0.10.8";e(new n(nt,(t,{options:e})=>At(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e),"PUBLIC")),e(new n("analytics-internal",function(t){try{const e=t.getProvider(nt).getImmediate();return{logEvent:(t,n,a)=>Lt(e,t,n,a)}}catch(e){throw rt.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),t(Ut,Bt),t(Ut,Bt,"esm2017");export{Ft as getAnalytics,xt as getGoogleAnalyticsClientId,Mt as initializeAnalytics,Et as isSupported,Lt as logEvent,Nt as setAnalyticsCollectionEnabled,Kt as setConsent,qt as setCurrentScreen,_t as setDefaultEventParameters,Ot as setUserId,zt as setUserProperties,Dt as settings};
//# sourceMappingURL=index.esm-Bh2yHDC9.js.map
