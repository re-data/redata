"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[924],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4340:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},u="Quickstart \ud83d\ude80",c={unversionedId:"re_cloud/quickstart",id:"re_cloud/quickstart",title:"Quickstart \ud83d\ude80",description:"In this quick tutorial we will deploy the UI of redata & dbtdocs to prodocution environment when you and your team can check those 2 usefull reports.",source:"@site/docs/re_cloud/quickstart.md",sourceDirName:"re_cloud",slug:"/re_cloud/quickstart",permalink:"/347-feature-skip-nulls-in-charts-instead-of-treating-them-as-0s/docs/re_cloud/quickstart",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_cloud/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Supported data libraries",permalink:"/347-feature-skip-nulls-in-charts-instead-of-treating-them-as-0s/docs/re_cloud/Introduction/catalog"},next:{title:"Uploading reports",permalink:"/347-feature-skip-nulls-in-charts-instead-of-treating-them-as-0s/docs/re_cloud/upload_command"}},s={},d=[{value:"Install re_cloud package",id:"install-re_cloud-package",level:2},{value:"Configure your API key",id:"configure-your-api-key",level:2},{value:"Generate reports",id:"generate-reports",level:2},{value:"Upload reports! \ud83d\ude0a",id:"upload-reports-",level:2},{value:"View them in the cloud",id:"view-them-in-the-cloud",level:2}],p={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart-"},"Quickstart \ud83d\ude80"),(0,o.kt)("p",null,"In this quick tutorial we will deploy the UI of re_data & dbt_docs to prodocution environment when you and your team can check those 2 usefull reports."),(0,o.kt)("p",null,"This introduction assumes you are using dbt and optionally re_data."),(0,o.kt)("h2",{id:"install-re_cloud-package"},"Install re_cloud package"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"re_cloud")," package is small python package for uploading data reports files to re_cloud \ud83d\ude0a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install re_cloud\n")),(0,o.kt)("h2",{id:"configure-your-api-key"},"Configure your API key"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account Settings")," section of the re_cloud, you can find your API key, which will be used for uploading data."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"DashboardExample",src:r(1020).Z,width:"1559",height:"584"})),(0,o.kt)("p",null,"Than paste this into your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.re_data/re_data.yml")," configuration file. (For simplicity we use the same directory and file as you would use for ",(0,o.kt)("em",{parentName:"p"},"re_data")," package configuration)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="~/.re_data/re_data.yml"',title:'"~/.re_data/re_data.yml"'},"\nre_cloud:\n  api_key: YOUR_KEY_HERE\n")),(0,o.kt)("h2",{id:"generate-reports"},"Generate reports"),(0,o.kt)("p",null,"If you didn't yet generated dbt docs and re_data reports you can do it now. ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," to your dbt project catalog and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dbt docs generate\nre_data overview generate\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This requires you to have ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data")," configured in your environment!\nIf you don't and you don't need to configure it now.\nJust skip re_data parts of the rest of tutorial."))),(0,o.kt)("h2",{id:"upload-reports-"},"Upload reports! \ud83d\ude0a"),(0,o.kt)("p",null,"Now with just 2 commands we can upoad our reports to cloud"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"re_cloud upload dbt-docs\nre_cloud upload re-data\n")),(0,o.kt)("h2",{id:"view-them-in-the-cloud"},"View them in the cloud"),(0,o.kt)("p",null,"Now you cloud account should contain 2 additional reports with recent upload times."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"DashboardExample",src:r(1359).Z,width:"1613",height:"1006"})),(0,o.kt)("p",null,"re_cloud supports uploading a couple of different reports, let's check all of them \ud83d\ude0a"))}m.isMDXComponent=!0},1020:function(e,t,r){t.Z=r.p+"assets/images/getapikey-7e44a22d8ce86b37de77b0870ac2c5cc.png"},1359:function(e,t,r){t.Z=r.p+"assets/images/start_dashboard-61c92ae7a6e6ff4b4006581408b5042b.png"}}]);