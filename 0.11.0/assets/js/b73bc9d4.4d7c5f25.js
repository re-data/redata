"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:3},o="Notify",l={unversionedId:"re_data/reference/cli/notify",id:"re_data/reference/cli/notify",title:"Notify",description:"redata notify command is used to send notifications relating to redata alerts.",source:"@site/docs/re_data/reference/cli/notify.md",sourceDirName:"re_data/reference/cli",slug:"/re_data/reference/cli/notify",permalink:"/0.11.0/docs/re_data/reference/cli/notify",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/reference/cli/notify.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/0.11.0/docs/re_data/reference/cli/run"},next:{title:"Overview",permalink:"/0.11.0/docs/re_data/reference/metrics/overview_metric"}},s={},d=[{value:"slack",id:"slack",level:3},{value:"email",id:"email",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"notify"},"Notify"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"re_data notify")," command is used to send notifications relating to re_data alerts."),(0,n.kt)("h3",{id:"slack"},"slack"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'re_data notify slack \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--webhook-url https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \\\n--subtitle="[Optional] Markdown text to be added as a subtitle in the slack message generated" \\\n--select anomaly \\\n--select test \\\n--select schema_change\n')),(0,n.kt)("p",null,"Running this command would generate a slack message from the alerts re_data detected."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supported arguments:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"start-date (default: today - 7 days) - start date of the period for which you want to generate alerts"),(0,n.kt)("li",{parentName:"ul"},"end-date (default: today) - end date of the period for which you want to generate alerts"),(0,n.kt)("li",{parentName:"ul"},"webhook-url - ",(0,n.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks"},"incoming webhook")," gotten from a slack app."),(0,n.kt)("li",{parentName:"ul"},"subtitle (optional) - extra markdown text passed to the generated message. Often used to add some more context to the message generated."),(0,n.kt)("li",{parentName:"ul"},"dbt-vars - This accepts a valid YAML dictionary as string which is passed down to the dbt command using ",(0,n.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/using-variables"},"--vars"),"."),(0,n.kt)("li",{parentName:"ul"},"select - (default: anomaly, schema_change, test) - alert type to be included in the notifications. This option allows multiple values and must be a valid alert type."))),(0,n.kt)("li",{parentName:"ul"},"Dbt supported arguments:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"profile - Which profile to load. Overrides setting in dbt_project.yml."),(0,n.kt)("li",{parentName:"ul"},"target - Which target to load for the given profile."),(0,n.kt)("li",{parentName:"ul"},"project-dir - Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents."),(0,n.kt)("li",{parentName:"ul"},"profiles-dir - Which directory to look in for the profiles.yml file. Default = ~/.dbt.")))),(0,n.kt)("h3",{id:"email"},"email"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"re_data notify email \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--select anomaly \\\n--select test \\\n--select schema_change\n")),(0,n.kt)("p",null,"Running this command would generate a slack message from the alerts re_data detected."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supported arguments:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"start-date (default: today - 7 days) - start date of the period for which you want to generate alerts"),(0,n.kt)("li",{parentName:"ul"},"end-date (default: today) - end date of the period for which you want to generate alerts"),(0,n.kt)("li",{parentName:"ul"},"select - (default: anomaly, schema_change, test) - alert type to be included in the notifications. This option allows multiple values and must be a valid alert type."),(0,n.kt)("li",{parentName:"ul"},"dbt-vars - This accepts a valid YAML dictionary as string which is passed down to the dbt command using ",(0,n.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/using-variables"},"--vars"),"."))),(0,n.kt)("li",{parentName:"ul"},"Dbt supported arguments:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"profile - Which profile to load. Overrides setting in dbt_project.yml."),(0,n.kt)("li",{parentName:"ul"},"target - Which target to load for the given profile."),(0,n.kt)("li",{parentName:"ul"},"project-dir - Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents."),(0,n.kt)("li",{parentName:"ul"},"profiles-dir - Which directory to look in for the profiles.yml file. Default = ~/.dbt.")))))}u.isMDXComponent=!0}}]);