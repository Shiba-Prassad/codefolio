"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[802],{6113:(e,t,r)=>{r.d(t,{Z:()=>Z});var s=r(390),a=r(1750),n=r(5545),c=r(5400),o=r(8784),i=r(2527),l=r(4205),d=r(8155),p=r(7097),u=r(9719),m=r(237),h=r(7963),f=r(799),v=r(1160),j=r(8722),x=r(5657),g=r(7822),y=r(2559);const b=e=>{const t=(0,n.s0)(),{userdetails:r}=(0,a.v9)((e=>e.user)),b=(0,a.I0)(),[S,N]=(0,s.useState)(!1);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(o.Z,{...e,style:{position:"sticky",top:"0px"},className:"pe-md-3",children:[(0,y.jsx)(i.Z,{tag:c.OL,to:"/",children:(0,y.jsx)("img",{src:"/images/codefolio.png",alt:"Codefolio",title:"Codefolio"})}),(0,y.jsx)(l.Z,{onClick:()=>N(!S)}),(0,y.jsx)(d.Z,{isOpen:S,navbar:!0,children:(0,y.jsxs)(p.Z,{className:"ms-auto",navbar:!0,children:[(0,y.jsx)(u.Z,{children:(0,y.jsx)(m.Z,{tag:c.OL,to:"/home",children:"Home"})}),(0,y.jsx)(u.Z,{children:(0,y.jsx)(m.Z,{tag:c.OL,to:"/portfolios",children:"Portfolio"})}),(0,y.jsx)(u.Z,{children:(0,y.jsx)(m.Z,{tag:c.OL,to:"/blog",children:"Blog"})}),(0,y.jsx)(u.Z,{children:(0,y.jsx)(m.Z,{tag:c.OL,to:"/components",children:"Components"})}),(0,y.jsx)(u.Z,{children:(0,y.jsx)(m.Z,{tag:c.OL,to:"/contact",children:"Contact"})}),(0,y.jsx)(u.Z,{children:r.token?(0,y.jsx)("ul",{className:"px-0",children:(0,y.jsxs)(h.Z,{nav:!0,inNavbar:!0,children:[(0,y.jsxs)(f.Z,{nav:!0,children:[r.pic?(0,y.jsx)(g.Z,{fileSrc:r.pic,fileStyle:{height:"25px",width:"25px"},fileClass:"d-none d-sm-block",alt:r.name}):(0,y.jsx)("img",{src:"/images/user-avatar.jpg",alt:r.name,style:{height:"25px",width:"25px"},className:"d-none d-sm-block"}),(0,y.jsx)("span",{className:"d-block d-sm-none",children:r.email})]}),(0,y.jsxs)(v.Z,{end:!0,className:"mt-md-2",children:[(0,y.jsx)(j.Z,{children:(0,y.jsx)("div",{onClick:e=>t("/profile"),children:"My Profile"})}),(0,y.jsx)(j.Z,{divider:!0}),(0,y.jsx)(j.Z,{children:(0,y.jsx)("div",{onClick:async()=>{await b((0,x.qF)()),t("/login")},children:"Logout"})})]})]})}):(0,y.jsx)(m.Z,{tag:c.OL,to:"/login",children:"Login"})})]})})]})})};var S=r(7864);const N=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(S.Z,{fluid:!0,className:"p-0 py-5",children:[(0,y.jsxs)("div",{className:"footerback",children:[(0,y.jsx)("h4",{className:"f-size-60",children:"Let's work together!"}),(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"sp-btn-secondary rounded-0 px-5 btn btn-secondary",children:(0,y.jsx)("span",{className:"px-5",children:"MAKE AN ENQUIRY"})})]}),(0,y.jsx)("div",{className:"socialmedia-container",children:(0,y.jsxs)("div",{className:"socialmedia-content px-3",children:[(0,y.jsx)("div",{className:"socialmedia-icons fb"}),(0,y.jsx)("div",{className:"socialmedia-icons tt"}),(0,y.jsx)("div",{className:"socialmedia-icons wt"}),(0,y.jsx)("div",{className:"socialmedia-icons li"}),(0,y.jsx)("div",{className:"socialmedia-icons in"})]})})]}),(0,y.jsx)("div",{className:"p-color f-size-15 px-5 py-2 s-back",children:"All rights reserved \xa9 2023"})]});var w=r(9364),O=r(9059);const Z=e=>{const{error:t,success:r,loading:n}=(0,a.v9)((e=>e.common));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b,{color:"dark",expand:"sm",sticky:"top",dark:!0}),e.children,"hideFooter"!==e.isFooter&&(0,y.jsx)(N,{}),t.length>0&&(0,y.jsx)("div",{className:"alert-wrapper",children:t.map(((e,t)=>(0,y.jsx)(s.Fragment,{children:(0,y.jsx)(w.h,{message:e})},t)))}),r.length>0&&(0,y.jsx)("div",{className:"alert-wrapper",children:r.map(((e,t)=>(0,y.jsx)(s.Fragment,{children:(0,y.jsx)(w.I,{message:e})},t)))}),n&&(0,y.jsx)(O.t,{pe:"pe-none"})]})}},4225:(e,t,r)=>{r.d(t,{NX:()=>o,hG:()=>l,kU:()=>p,lC:()=>u,m4:()=>m,vf:()=>i,wi:()=>d});var s=r(3305),a=r(8046);const n={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL?{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL:"",c={servicesData:localStorage.getItem("servicesData")?JSON.parse(localStorage.getItem("servicesData")):{}},o=(0,s.hg)("getServiceQnA",(async(e,t)=>{try{const r={headers:{"Content-type":"application/json"}},{data:s}=await a.Z.get("".concat(n,"/api/services/getQnA/").concat(e.serviceId),t,r);return await s}catch(r){console.log(r)}})),i=(0,s.hg)("createuserservices",(async e=>{try{const t={headers:{"Content-type":"application/json"}};if(e.id){const{data:r}=await a.Z.post("".concat(n,"/api/services/updateQnA"),e,t);return await r}{const{data:r}=await a.Z.post("".concat(n,"/api/services/createQnA"),e,t);return await r}}catch(t){console.log(t)}})),l=(0,s.hg)("deleteserviceqna",(async e=>{try{const t={headers:{"Content-type":"application/json"}},{data:r}=await a.Z.post("".concat(n,"/api/services/deleteQnA"),e,t);return await r}catch(t){console.log(t)}})),d=(0,s.hg)("getServiceInfo",(async(e,t)=>{try{const r={headers:{"Content-type":"application/json"}},{data:s}=await a.Z.get("".concat(n,"/api/services/info/").concat(e._id),t,r);return await s}catch(r){console.log(r)}})),p=(0,s.hg)("getuserservices",(async(e,t)=>{try{const r={headers:{"Content-type":"application/json"}},{data:s}=await a.Z.get("".concat(n,"/api/services/details/").concat(e.token),t,r);return await s}catch(r){console.log(r)}})),u=(0,s.hg)("createuserservices",(async e=>{try{const t={headers:{"Content-type":"application/json"}};if(e.id){const{data:r}=await a.Z.post("".concat(n,"/api/services/update"),e,t);return await r}{const{data:r}=await a.Z.post("".concat(n,"/api/services/create"),e,t);return await r}}catch(t){console.log(t)}})),m=(0,s.hg)("deleteuserservice",(async e=>{try{const t={headers:{"Content-type":"application/json"}},{data:r}=await a.Z.post("".concat(n,"/api/services/delete"),e,t);return await r}catch(t){console.log(t)}}));(0,s.oM)({name:"userServices",initialState:c,reducers:{},extraReducers:{[p.fulfilled]:(e,t)=>{e.homeScreenLoading=!1,t.payload.error?(e.homeScreenError=t.payload.error,e.homeScreenSuccess=""):(e.userService=t.payload,e.success="")},[p.pending]:(e,t)=>{e.homeScreenLoading=!0,e.userService=null,e.homeScreenSuccess="",e.homeScreenError=""},[p.rejected]:(e,t)=>{e.homeScreenLoading=!1,t.payload.error&&(e.userService=null,e.homeScreenError=t.payload.error)},[u.fulfilled]:(e,t)=>{e.homeScreenLoading=!1,t.payload.error?(e.homeScreenError=t.payload.error,e.homeScreenSuccess=""):(e.userService=t.payload,e.success="")},[u.pending]:(e,t)=>{e.homeScreenLoading=!0,e.homeScreenSuccess="",e.homeScreenError=""},[u.rejected]:(e,t)=>{e.homeScreenLoading=!1,t.payload.error&&(e.homeScreenError=t.payload.error)},[m.fulfilled]:(e,t)=>{e.homeScreenLoading=!1,t.payload.error?(e.homeScreenError=t.payload.error,e.homeScreenSuccess=""):(e.userService=t.payload,e.success="")},[m.pending]:(e,t)=>{e.homeScreenLoading=!0,e.homeScreenSuccess="",e.homeScreenError=""},[m.rejected]:(e,t)=>{e.homeScreenLoading=!1,t.payload.error&&(e.homeScreenError=t.payload.error)}}}).reducer},9364:(e,t,r)=>{r.d(t,{I:()=>i,h:()=>o});r(390);var s=r(1750),a=r(885),n=r(856),c=r(2559);const o=e=>{const t=(0,s.I0)();return(0,c.jsx)(a.Z,{color:"danger",onClick:()=>(async e=>{await t((0,n.fw)(e))})(e.message),children:e.message})},i=e=>{const t=(0,s.I0)();return(0,c.jsx)(a.Z,{color:"primary",onClick:async()=>{await t((0,n.Ku)())},children:e.message})}},245:(e,t,r)=>{r.d(t,{Z:()=>n});r(390);var s=r(1823),a=r(2559);const n=e=>{let{children:t}=e;const{ref:r,inView:n}=(0,s.YD)({triggerOnce:!0,threshold:.1});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:n?"animated-element":"hidden-element",ref:r,children:t})})}},7822:(e,t,r)=>{r.d(t,{Z:()=>i});var s=r(390),a=r(856),n=r(1750),c=r(9432),o=r(2559);const i=e=>{const[t,r]=(0,s.useState)(""),i=e.fileSrc.split(".").splice(-1)[0],l=(0,c.ZP)(e.alt),d=(0,n.I0)();return(0,s.useEffect)((()=>{(async e=>{const t=e;if(""!==t&&null!==t){const s=await d((0,a.cI)({fileName:t}));s.payload&&s.payload.fileBase64?["jpg","jpeg","png","gif"].includes(i)?r("data:image/jpeg;base64,".concat(s.payload.fileBase64)):r("data:application/".concat(i,";base64,").concat(s.payload.fileBase64)):["jpg","jpeg","png","gif"].includes(i)?r("/uploads/".concat(e)):r("/uploadedFiles/".concat(e))}})(e.fileSrc)}),[e]),(0,o.jsx)(o.Fragment,{children:!0===["jpg","jpeg","png","gif"].includes(i)?""===t?(0,o.jsx)("img",{src:"/images/loading.gif",alt:l&&l.props?l.props.children:"",style:e.fileStyle?e.fileStyle:{},className:e.fileClass?e.fileClass:""}):(0,o.jsx)("img",{src:t,alt:l&&l.props?l.props.children:"",style:e.fileStyle?e.fileStyle:{},className:e.fileClass?e.fileClass:""}):(0,o.jsx)("a",{href:t,title:l&&l.props?l.props.children:"",style:e.fileStyle?e.fileStyle:{},className:e.fileClass?e.fileClass:"",download:e.fileSrc,children:"Download Attachment"})})}},2802:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var s=r(390),a=r(6113),n=r(7864),c=r(7097),o=r(9719),i=r(237),l=r(5816),d=r(8549),p=r(4225),u=r(1750),m=r(9432),h=r(245),f=r(7905),v=r(4946),j=r(2559);const x=e=>{const[t,r]=(0,s.useState)(!1),a=(0,s.useRef)(null);return(0,j.jsxs)("div",{className:"border-line-light",children:[(0,j.jsx)("h3",{className:"f-size-15 position-relative",tabIndex:0,ref:a,children:(0,j.jsxs)("span",{className:"p-color cursor-pointer",onClick:e=>r(!t),children:[(0,j.jsxs)("span",{className:"pe-3",children:[e.index,"."]})," ",e.item.question]})}),t?(0,j.jsxs)("div",{className:"f-size-15 t-color ql-content",children:[(0,m.ZP)("".concat(e.item.answer)),(0,j.jsxs)("div",{className:"p-color f-size-15 f-bold cursor-pointer d-inline ps-3",onClick:e=>r(!1),children:[(0,j.jsx)(v.G,{icon:f.Aq,className:"mt-1",style:{padding:"0px 7px"}}),"Hide Answer"]})]}):(0,j.jsxs)("div",{className:"p-color f-size-15 f-bold cursor-pointer d-inline ps-3",onClick:e=>{r(!0),a.current&&a.current.focus()},children:[(0,j.jsx)(v.G,{icon:f.Mdf,className:"mt-1",style:{padding:"0px 7px"}}),"Show Answer"]})]},e.item._id)};var g=r(856);const y=e=>{const t=e.serviceId,[r,a]=(0,s.useState)(null),n=(0,u.I0)();return(0,s.useEffect)((()=>{(async e=>{n((0,g.K4)(!0));const t=await n((0,p.NX)({serviceId:e}));t.payload.error?await a(null):await a(t.payload),n((0,g.K4)(!1))})(t)}),[]),(0,j.jsx)("div",{className:"container-fluid p-0 profile",children:(0,j.jsx)("div",{className:"px-md-3",children:r&&r.map(((e,t)=>(0,j.jsx)(s.Fragment,{children:(0,j.jsx)(h.Z,{children:(0,j.jsx)(x,{item:e,index:t+1})})},e._id)))})})},b=e=>{const[t,r]=(0,s.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,j.jsx)("h3",{className:"f-size-20 t-color",children:e.item.serviceName}),(0,j.jsx)("span",{className:"f-bold f-size-15 p-color text-nowrap cursor-pointer",onClick:e=>{r(!t)},children:t?"Hide Q & A":"Show Q & A"})]}),t?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{children:e.item._Id}),(0,j.jsx)(y,{serviceId:e.item._id})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("h4",{className:"f-size-15 f-bold p-color",children:[e.item.serviceHeading,"--",e.item._Id]}),(0,j.jsx)("div",{className:"f-size-15 t-color",children:(0,m.ZP)("".concat(e.item.serviceDesc))})]})]})};var S=r(7822);const N=e=>{const t=(0,u.I0)(),{userdetails:r}=(0,u.v9)((e=>e.user)),[a,m]=(0,s.useState)(null),[h,f]=(0,s.useState)(null),v=(0,s.useRef)(null),x=e=>{h!==e&&(f(e),(()=>{if(v.current){const e=v.current.offsetTop-50;window.scrollTo({top:e,behavior:"smooth"})}})())};return(0,s.useEffect)((()=>{f(e.activeId?e.activeId:null),(async()=>{const e=await t((0,p.kU)({token:r.token}));e.payload.error?await m(null):await m(e.payload)})()}),[r,e.activeId]),(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(n.Z,{className:"blogTech",children:[(0,j.jsx)("h3",{className:"t-color f-size-36 py-3 my-4 text-center",children:"IT Services: Empowering Solutions for a Digital World"}),(0,j.jsx)("div",{className:"blogTech-container",children:a&&(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)("div",{className:"pt-4",children:(0,j.jsx)(c.Z,{pills:!0,vertical:!0,children:a.map(((e,t)=>(0,j.jsx)(s.Fragment,{children:(0,j.jsx)(o.Z,{children:(0,j.jsxs)(i.Z,{className:"text-nowrap p-1 ".concat(h===e._id?"active":""),onClick:()=>x(e._id),children:[(0,j.jsx)("span",{className:"d-none d-md-block",children:e.serviceName}),(0,j.jsx)("span",{className:"avatar d-block d-md-none",children:e.serviceImage?(0,j.jsx)(S.Z,{fileSrc:e.serviceImage,fileClass:"",alt:e.serviceName}):""})]})})},"pill".concat(e._id))))})}),(0,j.jsx)("div",{className:"flex-grow-1 p-2 p-md-4 pt-4 t-back2",ref:v,children:(0,j.jsx)(l.Z,{activeTab:h,children:a.map(((e,t)=>(0,j.jsx)(d.Z,{tabId:e._id,children:(0,j.jsx)(b,{item:e})},"tab".concat(e._id))))})})]})})]})})};var w=r(5545);const O=()=>{const{id:e}=(0,w.UO)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(a.Z,{children:(0,j.jsx)("div",{className:"container-fluid px-0",children:(0,j.jsx)(N,{activeId:e})})})})}},5816:(e,t,r)=>{r.d(t,{Z:()=>x});var s=r(390),a=r(188),n=r.n(a),c=r(7715),o=r.n(c),i=r(5891),l=r(7911);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},p.apply(this,arguments)}function u(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=f(e);if(t){var a=f(this).constructor;r=Reflect.construct(s,arguments,a)}else r=s.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var v={tag:l.iC,activeTab:n().any,className:n().string,cssModule:n().object},j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,r,a,n=h(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=n.call(this,e)).state={activeTab:t.props.activeTab},t}return t=c,a=[{key:"getDerivedStateFromProps",value:function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null}}],(r=[{key:"render",value:function(){var e=this.props,t=e.className,r=e.cssModule,a=e.tag,n=void 0===a?"div":a,c=(0,l.CE)(this.props,Object.keys(v)),d=(0,l.mx)(o()("tab-content",t),r);return s.createElement(i.q.Provider,{value:{activeTabId:this.state.activeTab}},s.createElement(n,p({},c,{className:d})))}}])&&u(t.prototype,r),a&&u(t,a),Object.defineProperty(t,"prototype",{writable:!1}),c}(s.Component);const x=j;j.propTypes=v},5891:(e,t,r)=>{r.d(t,{q:()=>s});var s=r(390).createContext({})},8549:(e,t,r)=>{r.d(t,{Z:()=>h});var s=r(390),a=r(188),n=r.n(a),c=r(7715),o=r.n(c),i=r(5891),l=r(7911),d=["className","cssModule","tabId","tag"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m={tag:l.iC,className:n().string,cssModule:n().object,tabId:n().any};function h(e){var t=e.className,r=e.cssModule,a=e.tabId,n=e.tag,c=void 0===n?"div":n,m=u(e,d),h=function(e){return(0,l.mx)(o()("tab-pane",t,{active:a===e}),r)};return s.createElement(i.q.Consumer,null,(function(e){var t=e.activeTabId;return s.createElement(c,p({},m,{className:h(t)}))}))}h.propTypes=m}}]);
//# sourceMappingURL=802.b7f6bcfd.chunk.js.map