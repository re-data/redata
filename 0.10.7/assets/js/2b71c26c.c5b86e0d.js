"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="great-expectations",l={unversionedId:"re_cloud/integrations/great_expectations",id:"re_cloud/integrations/great_expectations",title:"great-expectations",description:"Overview",source:"@site/docs/re_cloud/integrations/great_expectations.md",sourceDirName:"re_cloud/integrations",slug:"/re_cloud/integrations/great_expectations",permalink:"/0.10.7/docs/re_cloud/integrations/great_expectations",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_cloud/integrations/great_expectations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dbt docs",permalink:"/0.10.7/docs/re_cloud/integrations/dbt_docs"},next:{title:"Jupyter notebook",permalink:"/0.10.7/docs/re_cloud/integrations/jupyter_notebook"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Uploading to re_cloud",id:"uploading-to-re_cloud",level:2},{value:"re_cloud command",id:"re_cloud-command",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"great-expectations"},"great-expectations"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Great expectations let's you test & document your data.\nIt supports many computation backends from pandas, spark to databases like snowflake."),(0,o.kt)("p",null,"On some level great-expectations competes with ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt test")," functionality."),(0,o.kt)("p",null,"One cool feature of great-expectations is ability to generate data docs which describe your data & tests run."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"great_expectations_example",src:r(8215).Z,width:"1908",height:"931"})),(0,o.kt)("h2",{id:"uploading-to-re_cloud"},"Uploading to re_cloud"),(0,o.kt)("p",null,"Great-expectations data docs, are most usefull when shared with others. That's why we made is easily possible to send them to ",(0,o.kt)("inlineCode",{parentName:"p"},"re_cloud")," and collobarote on the results with other people."),(0,o.kt)("p",null,"To upload great_expectations docs to re_cloud ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," to you GE folder with data docs generated and run upload command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd YOUR_GE_FOLDER\nre_cloud upload great-expectations\n")),(0,o.kt)("h2",{id:"re_cloud-command"},"re_cloud command"),(0,o.kt)("p",null,"Below we show all the currently supported options on how you can upload great-expectations to ",(0,o.kt)("inlineCode",{parentName:"p"},"re_cloud")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"re_cloud upload great-expectations --name TEXT\n\nOptions:\n  --name TEXT  Name of the upload used for identification\n")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"If you would like to jump into uploading data you can create your ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cloud.getre.io/#/register"},"free account here \ud83d\ude0a"))," if you have more questions for us: don't be reluctant to join our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))))}d.isMDXComponent=!0},8215:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/great_expectations-268983a24271a3f71f81a7bf516dba2b.png"}}]);