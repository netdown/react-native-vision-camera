"use strict";(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[723],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5243:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const i={},o="TODO",l={unversionedId:"guides/TODO",id:"guides/TODO",title:"TODO",description:"This is an internal TODO list which I am using to keep track of some of the features that are still missing.",source:"@site/docs/guides/TODO.md",sourceDirName:"guides",slug:"/guides/TODO",permalink:"/docs/guides/TODO",draft:!1,editUrl:"https://github.com/mrousavy/react-native-vision-camera/edit/main/docs/docs/guides/TODO.md",tags:[],version:"current",frontMatter:{}},c={},s=[],m={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"todo"},"TODO"),(0,a.kt)("p",null,"This is an internal TODO list which I am using to keep track of some of the features that are still missing."),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Mirror images from selfie cameras (iOS Done, Android WIP)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Allow camera switching (front <-> back) while recording and stich videos together"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make ",(0,a.kt)("inlineCode",{parentName:"li"},"startRecording()")," async. Due to NativeModules limitations, we can only have either one callback or one promise in a native function. For ",(0,a.kt)("inlineCode",{parentName:"li"},"startRecording()")," we need both, since you probably also want to catch any errors that occured during a ",(0,a.kt)("inlineCode",{parentName:"li"},"startRecording()")," call (or wait until the recording has actually started, since this can also take some time)"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Return a ",(0,a.kt)("inlineCode",{parentName:"li"},"jsi::Value")," reference for images (",(0,a.kt)("inlineCode",{parentName:"li"},"UIImage"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"Bitmap"),") on ",(0,a.kt)("inlineCode",{parentName:"li"},"takePhoto()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"takeSnapshot()"),". This way, we skip the entire file writing and reading, making image capture ",(0,a.kt)("em",{parentName:"li"},"a lot")," faster."),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement frame processors. The idea here is that the user passes a small JS function (reanimated worklet) to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Camera::frameProcessor")," prop which will then get called on every frame the camera previews. (I'd say we cap it to 30 times per second, even if the camera fps is higher) This can then be used to scan QR codes, detect faces, detect depth, render something ontop of the camera such as color filters, QR code boundaries or even dog filters, possibly even use AR - all from a single, small, and highly flexible JS function!"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a custom MPEG4 encoder to allow for more customizability in ",(0,a.kt)("inlineCode",{parentName:"li"},"recordVideo()")," (",(0,a.kt)("inlineCode",{parentName:"li"},"bitRate"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"priority"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"minQuantizationParameter"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"allowFrameReordering"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"expectedFrameRate"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"realTime"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"minimizeMemoryUsage"),")")))}u.isMDXComponent=!0}}]);