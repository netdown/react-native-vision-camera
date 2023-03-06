"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[554],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var i=n(3117),a=(n(7294),n(3905));const o={id:"TakePhotoOptions",title:"TakePhotoOptions",sidebar_position:0,custom_edit_url:null},r=void 0,l={unversionedId:"api/interfaces/TakePhotoOptions",id:"api/interfaces/TakePhotoOptions",title:"TakePhotoOptions",description:"Properties",source:"@site/docs/api/interfaces/TakePhotoOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TakePhotoOptions",permalink:"/docs/api/interfaces/TakePhotoOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TakePhotoOptions",title:"TakePhotoOptions",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"RecordVideoOptions",permalink:"/docs/api/interfaces/RecordVideoOptions"},next:{title:"TakeSnapshotOptions",permalink:"/docs/api/interfaces/TakeSnapshotOptions"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"enableAutoDistortionCorrection",id:"enableautodistortioncorrection",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"enableAutoRedEyeReduction",id:"enableautoredeyereduction",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"enableAutoStabilization",id:"enableautostabilization",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"flash",id:"flash",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"qualityPrioritization",id:"qualityprioritization",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"skipMetadata",id:"skipmetadata",level:3},{value:"Defined in",id:"defined-in-5",level:4}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"enableautodistortioncorrection"},"enableAutoDistortionCorrection"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"enableAutoDistortionCorrection"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Specifies whether the photo output should use content aware distortion correction on this photo request (at its discretion)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,a.kt)("p",null,"false"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/PhotoFile.ts#L38"},"PhotoFile.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enableautoredeyereduction"},"enableAutoRedEyeReduction"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"enableAutoRedEyeReduction"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Specifies whether red-eye reduction should be applied automatically on flash captures."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,a.kt)("p",null,"false"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/PhotoFile.ts#L26"},"PhotoFile.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enableautostabilization"},"enableAutoStabilization"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"enableAutoStabilization"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Indicates whether still image stabilization will be employed when capturing the photo"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,a.kt)("p",null,"false"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/PhotoFile.ts#L32"},"PhotoFile.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"flash"},"flash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"flash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"off"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"auto"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"on"')),(0,a.kt)("p",null,"Whether the Flash should be enabled or disabled"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,a.kt)("p",null,'"auto"'),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/PhotoFile.ts#L20"},"PhotoFile.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"qualityprioritization"},"qualityPrioritization"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"qualityPrioritization"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"quality"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"balanced"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"speed"')),(0,a.kt)("p",null,"Indicates how photo quality should be prioritized against speed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"quality"')," Indicates that photo quality is paramount, even at the expense of shot-to-shot time"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"balanced"')," Indicates that photo quality and speed of delivery are balanced in priority"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"speed"')," Indicates that speed of photo delivery is most important, even at the expense of quality")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Platform"))),(0,a.kt)("p",null,"iOS 13.0+"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,a.kt)("p",null,'"balanced"'),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/PhotoFile.ts#L14"},"PhotoFile.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"skipmetadata"},"skipMetadata"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"skipMetadata"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"When set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", metadata reading and mapping will be skipped. (",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/PhotoFile#metadata"},(0,a.kt)("inlineCode",{parentName:"a"},"metadata"))," will be null)"),(0,a.kt)("p",null,"This might result in a faster capture, as metadata reading and mapping requires File IO."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,a.kt)("p",null,"false"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Platform"))),(0,a.kt)("p",null,"Android"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/ab75712/src/PhotoFile.ts#L48"},"PhotoFile.ts:48")))}c.isMDXComponent=!0}}]);