(()=>{var e={};e.id=790,e.ids=[790],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2758:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(7965),s(1506),s(5866);var r=s(3191),n=s(8716),a=s(7922),i=s.n(a),o=s(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let d=["",{children:["payment",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7965)),"/Users/dmitriyudovik/projects/seples/5k/app/payment/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1506)),"/Users/dmitriyudovik/projects/seples/5k/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/dmitriyudovik/projects/seples/5k/app/payment/page.tsx"],u="/payment/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/payment/page",pathname:"/payment",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9062:(e,t,s)=>{Promise.resolve().then(s.bind(s,9613))},9528:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},8723:()=>{},9613:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(326),n=s(434),a=s(772),i=s(6333);/**
 * @license lucide-react v0.387.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,s(2881).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);var l=s(5047);let d=()=>{let e=(0,l.useRouter)(),t=()=>{e.push("/invoice")};return(0,r.jsxs)("section",{children:[(0,r.jsxs)("header",{className:"relative text-center mb-4",children:[(0,r.jsxs)(n.default,{href:"/sale",className:"absolute left-0 p-0 m-0 h-auto",children:[" ",r.jsx(i.Z,{})]}),r.jsx("p",{children:"Payment method"})]}),r.jsx("div",{children:r.jsx("h1",{className:"text-6xl font-bold pb-6 pt-5",children:"$10.00"})}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)(a.z,{variant:"ghost",className:"w-full flex justify-between items-center border-b py-9 rounded-none",onClick:t,children:[r.jsx("span",{className:"font-bold",children:"USDT"}),(0,r.jsxs)("span",{children:[" ",r.jsx(o,{})]})]}),(0,r.jsxs)(a.z,{variant:"ghost",className:"w-full flex justify-between items-center border-b py-9 rounded-none",onClick:t,children:[r.jsx("span",{className:"font-bold",children:"TON"}),(0,r.jsxs)("span",{children:[" ",r.jsx(o,{})]})]}),(0,r.jsxs)(a.z,{variant:"ghost",className:"w-full flex justify-between items-center border-b py-9 rounded-none",onClick:t,children:[r.jsx("span",{className:"font-bold",children:"Bitcoin"}),(0,r.jsxs)("span",{children:[" ",r.jsx(o,{})]})]}),(0,r.jsxs)(a.z,{variant:"ghost",className:"w-full flex justify-between items-center border-b py-9 rounded-none",onClick:t,children:[r.jsx("span",{className:"font-bold",children:"Cash"}),(0,r.jsxs)("span",{children:[" ",r.jsx(o,{})]})]})]})]})}},772:(e,t,s)=>{"use strict";s.d(t,{z:()=>d});var r=s(326),n=s(7577),a=s(4214),i=s(8671),o=s(7863);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef(({className:e,variant:t,size:s,asChild:n=!1,...i},d)=>{let c=n?a.g7:"button";return r.jsx(c,{className:(0,o.cn)(l({variant:t,size:s,className:e})),ref:d,...i})});d.displayName="Button"},7863:(e,t,s)=>{"use strict";s.d(t,{cn:()=>a});var r=s(1135),n=s(1009);function a(...e){return(0,n.m6)((0,r.W)(e))}},1506:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>i});var r=s(9510),n=s(5384),a=s.n(n);s(7272),s(1159);let i={title:"Create Next App",description:"Generated by create next app"};function o({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:a().className,children:r.jsx("div",{className:"flex justify-center items-start",children:r.jsx("div",{className:"max-w-custom w-full h-full px-4 py-6",children:e})})})})}},7965:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});var r=s(8570);let n=(0,r.createProxy)(String.raw`/Users/dmitriyudovik/projects/seples/5k/app/payment/page.tsx`),{__esModule:a,$$typeof:i}=n;n.default;let o=(0,r.createProxy)(String.raw`/Users/dmitriyudovik/projects/seples/5k/app/payment/page.tsx#default`)},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,892,384,730,867],()=>s(2758));module.exports=r})();