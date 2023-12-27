"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:0},i="What is re_cloud?",s={unversionedId:"re_cloud/whatis_cloud",id:"re_cloud/whatis_cloud",title:"What is re_cloud?",description:"recloud enables you to make your data reports (like dbt-docs, greatexpectation docs, custom html reports, re_data report) available online to your team and business users.",source:"@site/docs/re_cloud/whatis_cloud.md",sourceDirName:"re_cloud",slug:"/re_cloud/whatis_cloud",permalink:"/0.11.0/docs/re_cloud/whatis_cloud",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_cloud/whatis_cloud.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Q&A \ud83d\udcac",permalink:"/0.11.0/docs/re_data/qa"},next:{title:"Quickstart",permalink:"/0.11.0/docs/re_cloud/quickstart"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-re_cloud"},"What is re_cloud?"),(0,a.kt)("p",null,"re_cloud enables you to make your data reports (like dbt-docs, great_expectation docs, custom html reports, re_data report) available online to your team and business users."),(0,a.kt)("h1",{id:"why-do-i-need-it"},"Why do I need it?"),(0,a.kt)("p",null,"We talked with more than a 100 companies on how they are storing output from tools like dbt-docs, great-expectations, our open-source library and others. Answer is almost always the same - S3, GCS, github pages."),(0,a.kt)("p",null,"But those methods makes it hard to share reports with your team and business users. You need to learn how to setup permissions, buckets, github pages and more."),(0,a.kt)("p",null,"With re_cloud using single line of code like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"re_cloud upload dbt-docs\n")),(0,a.kt)("p",null,"You can make your docs available to your team and business users."),(0,a.kt)("p",null,"And apart from just viewing them, you are getting new previously impossible features avaiable to you like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dashboard with all the reports in one place"),(0,a.kt)("li",{parentName:"ul"},"possiblity to view each report version history (to debug what changed)"),(0,a.kt)("li",{parentName:"ul"},"predefined & customized slack notifications"),(0,a.kt)("li",{parentName:"ul"},"and much more comming soon! \ud83d\ude80")),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"If you are curious about re_cloud and would like to jump right into it, you can start with a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://cloud.getre.io/#/register"},"free trial here"))),(0,a.kt)("p",null,"To see docs on how to upload reports into the cloud check our ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/re_cloud/quickstart"},"Quickstart guide"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"DashboardExample",src:r(6296).Z,width:"2874",height:"1590"})))}p.isMDXComponent=!0},6296:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/dashboard-a0a86286085f40c813881bbc2819f8fd.png"}}]);