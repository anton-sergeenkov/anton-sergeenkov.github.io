(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{6375:(e,t,s)=>{"use strict";s.d(t,{default:()=>m});var l=s(5155),i=s(4617),n=s.n(i);let r=[{title:"Profile",path:"/"},{title:"Technologies Stack",path:"/stack"},{title:"Contacts",path:"/contacts"},{title:"QR",path:"/qr"}],a=[{title:"English version",path:"https://anton-sergeenkov.github.io/cv-en.pdf"},{title:"Russian version",path:"https://anton-sergeenkov.github.io/cv-ru.pdf"}];var o=s(9828),c=s(9194),_=s.n(c);let d="light-blue",m=()=>(0,l.jsx)(o.on,{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.K3,{type:"links",theme:d,list:a,title:"CV",isAccent:!0})}),(0,l.jsx)("li",{className:n()(_().mobile),children:(0,l.jsx)(o.K3,{type:"routes",theme:d,list:r,title:"Menu"})}),r.map((e,t)=>(0,l.jsx)("li",{className:n()(_().desktop),children:(0,l.jsx)(o.x_,{theme:d,item:e})},t))]})})},7599:(e,t,s)=>{"use strict";s.d(t,{A:()=>_});var l=s(5155),i=s(7824),n=s.n(i),r=s(6789),a=s(4071),o=s(3747),c=s.n(o);let _=e=>{let{children:t,className:s,theme:i="basic",variant:o="contained",size:_="small",color:d="primary",sx:m={},endIcon:u=null,disabled:h=!1,isMenuButton:x=!1,onClick:y}=e,p=(0,a.a)(i,c());return(0,l.jsx)(r.default,{className:n()(!x&&c().buttonBasic,c().button,p,s),variant:o,size:_,color:d,sx:m,endIcon:u,disabled:h,onClick:y,children:t})}},4836:(e,t,s)=>{"use strict";s.d(t,{A:()=>c});var l=s(5155),i=s(7824),n=s.n(i),r=s(4071),a=s(567),o=s.n(a);let c=e=>{let{theme:t,className:s,href:i,target:a="_blank",children:c}=e,_=(0,r.a)(t,o());return(0,l.jsx)("a",{className:n()(o().item,_,s),href:i,target:a,children:c})}},9828:(e,t,s)=>{"use strict";s.d(t,{Kf:()=>m,Ne:()=>k,on:()=>w,Fy:()=>C,ie:()=>j,bQ:()=>u.A,K3:()=>T.default,x_:()=>H.A,ob:()=>p}),s(7599);var l=s(5155),i=s(7824),n=s.n(i),r=s(2115),a=s(4071),o=s(5957),c=s.n(o),_=s(5142),d=s.n(_);let m=e=>{let{theme:t="light",className:s,items:i,isUserSelect:o=!0}=e,_=(0,a.a)(t,d());return(0,l.jsx)(l.Fragment,{children:i.map((e,t)=>(0,l.jsx)(r.Fragment,{children:(0,l.jsx)("span",{className:n()(d().item,c().className,_,s),style:{userSelect:o?"auto":"none"},children:e})},t))})};var u=s(4836),h=s(4889),x=s(5212),y=s.n(x);let p=e=>{let{children:t,className:s,disableAutoFocus:i=!1,open:r,onClose:a,isContentClickClose:o=!1}=e;return(0,l.jsx)(h.default,{className:n()(y().modal),disableAutoFocus:i,open:r,onClose:a,children:(0,l.jsx)("div",{...o&&{onClick:a},className:n()(s,y().modalContent),children:t})})};s(2672),s(2134);var g=s(2923),b=s.n(g);let k=e=>{let{theme:t="basic",className:s,children:i}=e,r=(0,a.a)(t,b());return"dark-filled"===t||"light-filled"===t?(0,l.jsx)("h2",{className:n()(b().headerFilled,c().className,s),children:(0,l.jsx)("span",{className:n()(b().itemFilled,r),children:i})}):(0,l.jsx)("h2",{className:n()(b().headerBasic,c().className,s,r),children:i})};s(3725),s(5875),s(7080),s(798);var v=s(1398),f=s.n(v);let j=e=>{let{theme:t="basic",className:s,children:i,isSpacingX:r=!0,isSpacingY:o=!0,fullWidth:c=!1}=e,_=(0,a.a)(t,f());return(0,l.jsx)("div",{className:n()(f().wrapper,s),children:(0,l.jsx)("div",{className:n()(!c&&f().sectionMaxWidth,r&&f().sectionPaddingX,o&&f().sectionPaddingY,_),children:i})})};var A=s(5445),N=s.n(A);let C=e=>{let{className:t,isNoPadding:s=!1,children:i}=e;return(0,l.jsx)("div",{className:n()(N().container,s?{}:N().containerPadding,t),children:i})};var F=s(3340),S=s.n(F);let w=e=>{let{className:t,children:s,fullWidth:i=!1}=e;return(0,l.jsx)(j,{className:n()(t,S().wrapper),theme:"header-footer",isSpacingY:!1,fullWidth:i,children:(0,l.jsx)("div",{className:S().container,children:s})})};var T=s(2484);s(6268);var H=s(2101);s(9803)},2484:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>k,options:()=>g});var l=s(5155),i=s(2115),n=s(4993),r=s(2042),a=s(6268);let o=e=>{let{theme:t,className:s,list:o,title:c,isAccent:_=!1,Component:d}=e,[m,u]=(0,i.useState)(null),h=()=>{u(null)};return(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)(a.A,{theme:t,isAccent:_,onClick:e=>{u(e.currentTarget)},endIcon:(0,l.jsx)(r.A,{}),children:c}),(0,l.jsx)(n.A,{anchorEl:m,open:!!m,onClose:h,children:(0,l.jsx)(d,{theme:t,list:o,onClose:h})})]})};var c=s(9980),_=s(2101);let d={padding:0,margin:0,minHeight:"auto",cursor:"default"};var m=s(5303),u=s.n(m);let h=e=>{let{theme:t,list:s,onClose:i}=e;return(0,l.jsx)(l.Fragment,{children:s.map((e,s)=>(0,l.jsx)("div",{className:u().linkRoutes,children:(0,l.jsx)(c.A,{onClick:i,sx:d,children:(0,l.jsx)(_.A,{theme:t,item:e,isTextLeft:!0})})},s))})};var x=s(5016),y=s.n(x);let p=e=>{let{theme:t,list:s,onClose:i}=e;return(0,l.jsx)(l.Fragment,{children:s.map((e,s)=>(0,l.jsx)(c.A,{onClick:i,sx:d,children:(0,l.jsx)("a",{className:y().linkLinks,href:e.path,target:"_blank",children:(0,l.jsx)(a.A,{theme:t,isAccent:!1,isActive:!1,disabled:!!e.disabled,isHoverTransparent:!0,isTextLeft:!0,children:e.title})})},s))})},g={type:["routes","links"]},b=e=>{switch(e){case"routes":default:return h;case"links":return p}},k=e=>{let{type:t,theme:s,list:i,title:n,isAccent:r,className:a}=e;return(0,l.jsx)(o,{className:a,theme:s,list:i,title:n,isAccent:r,Component:b(t)})}},983:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var l=s(5155),i=s(8173),n=s.n(i),r=s(6046),a=s(6268);let o=e=>{let{theme:t,item:s,isAccent:i=!1,isTextLeft:o=!1}=e,c=(0,r.usePathname)();return(0,l.jsx)(n(),{href:s.path,children:(0,l.jsx)(a.A,{theme:t,isAccent:i,isActive:c===s.path,isTextLeft:o,children:s.title})})}},2101:(e,t,s)=>{"use strict";s.d(t,{A:()=>l.default});var l=s(983)},6268:(e,t,s)=>{"use strict";s.d(t,{A:()=>h});var l=s(5155),i=s(7599);let n={default:{color:"#2b2b2b",bgHover:"#ececec"},active:{color:"#6673ff"},accent:{color:"#edeeef",bg:"#6673ff",bgHover:"#2b2b2b"}},r={color:n.default.color,backgroundColor:"transparent",width:"auto",padding:"4px 10px",":hover":{backgroundColor:n.default.bgHover}},a={backgroundColor:n.accent.bg,color:n.accent.color,":hover":{backgroundColor:n.accent.bgHover}},o={StylesButtonDefault:r,StylesButtonAccent:a,StylesButtonActive:{},StylesTextDefault:{color:n.default.color},StylesTextAccent:{color:n.accent.color},StylesTextActive:{color:n.active.color}},c={StylesButtonDefault:{},StylesButtonAccent:{},StylesButtonActive:{},StylesTextDefault:{},StylesTextAccent:{},StylesTextActive:{}},_=e=>{switch(e){case"basic":default:return c;case"light-blue":return o}},d={":hover":{background:"none"}},m={color:"var(--color-gray-50)"},u=e=>{let{theme:t,isAccent:s=!1,isActive:l=!1,isHoverTransparent:i=!1,isDisabled:n=!1,isTextLeft:r=!1}=e,{StylesButtonDefault:a,StylesButtonAccent:o,StylesButtonActive:c,StylesTextDefault:u,StylesTextAccent:h,StylesTextActive:x}=_(t);return{stylesButton:{...a,...s&&o,...!s&&l&&c,...i&&d,width:"100%"},stylesText:{...u,...s&&h,...!s&&l&&x,...n&&m,width:"100%",textAlign:r?"left":"center"}}},h=e=>{let{className:t,children:s,theme:n="basic",isAccent:r,isActive:a,isHoverTransparent:o=!1,isTextLeft:c=!1,disabled:_=!1,endIcon:d=null,onClick:m=()=>null}=e,{stylesButton:h,stylesText:x}=u({theme:n,isAccent:r,isActive:a,isHoverTransparent:o,isDisabled:_,isTextLeft:c});return(0,l.jsx)(i.A,{variant:"text",size:"small",className:t,sx:h,endIcon:d,disabled:_,onClick:m,isMenuButton:!0,children:(0,l.jsx)("div",{style:x,children:s})})}},7080:(e,t,s)=>{"use strict";s.d(t,{default:()=>y});var l=s(5155),i=s(7824),n=s.n(i),r=s(2115),a=s(789),o=s(4993),c=s(9980),_=s(8610),d=s(4836),m=s(5957),u=s.n(m),h=s(8229),x=s.n(h);let y=e=>{let{options:t,classes:s={container:"",button:"",icon:"",link:""}}=e,[i,m]=(0,r.useState)(null),h=()=>{m(null)};return(0,l.jsxs)("div",{className:n()(x().container,s.container),children:[(0,l.jsx)(a.A,{onClick:e=>{m(e.currentTarget)},className:x().button,children:(0,l.jsx)(_.A,{className:n()(x().icon,s.icon)})}),(0,l.jsx)(o.A,{anchorEl:i,open:!!i,onClose:h,children:t.map((e,t)=>(0,l.jsx)(c.A,{onClick:h,sx:{minHeight:"auto"},children:(0,l.jsx)(d.A,{href:e.link,theme:"dark-underlined",className:n()(x().link,u().className,s.link),children:e.name})},t))})]})}},4071:(e,t,s)=>{"use strict";s.d(t,{a:()=>l});let l=(e,t)=>e?t["item--"+e]:""},8606:e=>{e.exports={wrapper:"Footer_wrapper__znyEu",container:"Footer_container__Mn8SS",items:"Footer_items__UTuj_",logoConteiner:"Footer_logoConteiner__Fiy48",logo:"Footer_logo__ZNv_V"}},9194:e=>{e.exports={mobile:"Header_mobile__e5zAc",desktop:"Header_desktop__0NABT"}},3747:e=>{e.exports={button:"styles_button__oTKO0",buttonBasic:"styles_buttonBasic__hECcC","item--basic":"styles_item--basic__aB_wS","item--black":"styles_item--black__2StM_","item--white":"styles_item--white__ix_0U"}},5142:e=>{e.exports={item:"styles_item__LtJHw","item--light":"styles_item--light__JzoCf","item--dark":"styles_item--dark__W1s_p","item--success":"styles_item--success__3frjp","item--error":"styles_item--error__IYa84"}},3725:e=>{e.exports={details:"styles_details__33tSF",summary:"styles_summary__ljsu_",title:"styles_title___nd_n",content:"styles_content__hYYRb"}},2923:e=>{e.exports={headerFilled:"styles_headerFilled__JfhNK",itemFilled:"styles_itemFilled__kIzuh",headerBasic:"styles_headerBasic__WS5RY","item--dark-filled":"styles_item--dark-filled__Mf_7A","item--light-filled":"styles_item--light-filled__oDE1z","item--basic":"styles_item--basic__3xUM6"}},5875:e=>{e.exports={code:"styles_code__E_i4K"}},567:e=>{e.exports={"item--blue-underlined":"styles_item--blue-underlined__x6qSJ","item--dark-underlined":"styles_item--dark-underlined__GD4Y5",item:"styles_item__XFs1V"}},5212:e=>{e.exports={modal:"styles_modal__f7xns",modalContent:"styles_modalContent__Mgfnm"}},2134:e=>{e.exports={item:"styles_item__c_lMq","item--blue-lightblue":"styles_item--blue-lightblue__axNC4","item--green-blue":"styles_item--green-blue__VM1fH","item--darkblue-violet":"styles_item--darkblue-violet__iuyi8"}},2672:e=>{e.exports={h1:"styles_h1__9WDVC",h2:"styles_h2__Zs0Cy",h3:"styles_h3__Xtgr_",p:"styles_p__7c_xn",comment:"styles_comment__oIGx_",noSpacing:"styles_noSpacing__kX4t1"}},798:e=>{e.exports={gridContainer:"styles_gridContainer__HyPli",gridItem:"styles_gridItem__ImdV7",logo:"styles_logo__dgRMN",gridContent:"styles_gridContent__wxa8g",header:"styles_header__t18qp",description:"styles_description___NlXq","item--light":"styles_item--light__eOEGq","item--dark":"styles_item--dark__iDp3k"}},3340:e=>{e.exports={wrapper:"styles_wrapper__qa4vr",container:"styles_container__3FYKH"}},5445:e=>{e.exports={container:"styles_container__wUG2K",containerPadding:"styles_containerPadding__O8bR7"}},1398:e=>{e.exports={sectionMaxWidth:"styles_sectionMaxWidth__pdFVl",sectionPaddingY:"styles_sectionPaddingY__R_yJ_",sectionPaddingX:"styles_sectionPaddingX__yz4m5","item--basic":"styles_item--basic__SJlgR","item--header-footer":"styles_item--header-footer__0peFX"}},5016:e=>{e.exports={linkLinks:"styles_linkLinks__ibWyN"}},5303:e=>{e.exports={linkRoutes:"styles_linkRoutes__JzL0k"}},8229:e=>{e.exports={container:"styles_container__PJPrD",button:"styles_button__oGFHH",icon:"styles_icon__jirNM",link:"styles_link__6FFOp"}},9803:e=>{e.exports={container:"styles_container__R8qo6",link:"styles_link__Tm2WW"}}}]);