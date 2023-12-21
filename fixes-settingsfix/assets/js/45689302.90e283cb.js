"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3661],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="pandas-profiling",l={unversionedId:"re_cloud/integrations/pandas_profiling",id:"re_cloud/integrations/pandas_profiling",title:"pandas-profiling",description:"Overview",source:"@site/docs/re_cloud/integrations/pandas_profiling.md",sourceDirName:"re_cloud/integrations",slug:"/re_cloud/integrations/pandas_profiling",permalink:"/fixes-settingsfix/docs/re_cloud/integrations/pandas_profiling",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_cloud/integrations/pandas_profiling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jupyter notebook",permalink:"/fixes-settingsfix/docs/re_cloud/integrations/jupyter_notebook"},next:{title:"Postgres",permalink:"/fixes-settingsfix/docs/re_cloud/integrations/postgres"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Uploading to re_cloud",id:"uploading-to-re_cloud",level:2},{value:"re_cloud command",id:"re_cloud-command",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pandas-profiling"},"pandas-profiling"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Pandas-profiling is a python library which can you help you profile any pandas dataframe.\nIt will automatically generate insights about:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"each of your columns "),(0,o.kt)("li",{parentName:"ul"},"correlations between them"),(0,o.kt)("li",{parentName:"ul"},"missing values"),(0,o.kt)("li",{parentName:"ul"},"alerts")),(0,o.kt)("p",null,"in your dataframe data."),(0,o.kt)("p",null,"You can think of it as a extension of pandas native ",(0,o.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html"},"describe command")),(0,o.kt)("p",null,"Pandas profiling report is most often saved to HTML file to be inspected by data team and potentially data consumers. Below view of the example pandas-profiling output:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pandas_profiling_example",src:r(2907).Z,width:"1909",height:"936"})),(0,o.kt)("h2",{id:"uploading-to-re_cloud"},"Uploading to re_cloud"),(0,o.kt)("p",null,"To collaborate on your pandas-profiling reports, you can easily upload it to re_cloud.\nGenerating pandas profiling report is really easy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from pandas_profiling import ProfileReport\n...\nprofile = ProfileReport(df, title="Pandas Profiling Report")\nprofile.to_file("report.html")\n')),(0,o.kt)("p",null,"Once generated you can upload report to the cloud:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"re_cloud upload pandas-profiling --report-file report.html\n")),(0,o.kt)("h2",{id:"re_cloud-command"},"re_cloud command"),(0,o.kt)("p",null,"Below we show all the currently supported options on how you can upload pandas-profiling to ",(0,o.kt)("inlineCode",{parentName:"p"},"re_cloud")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"re_cloud upload pandas-profiling --name TEXT  --report-file TEXT\n\nOptions:\n--report-file TEXT  Pandas profiling file with html report  [required]\n--name TEXT         Name of the upload used for identification\n")),(0,o.kt)("p",null,"For pandas profiling --report-file is required paramter. re_data will upload your docs in ",(0,o.kt)("inlineCode",{parentName:"p"},"uncommitted/data_docs/local_site/")," path then."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"If you would like to jump into uploading data you can create your ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cloud.getre.io/#/register"},"free account here \ud83d\ude0a"))," if you have more questions for us: don't be reluctant to join our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))))}u.isMDXComponent=!0},2907:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pandas_profiling-e7af959531a1961b4ad815758913dd45.png"}}]);