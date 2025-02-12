(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{1674:(e,t,l)=>{"use strict";l.d(t,{default:()=>q});var s=l(5155),n=l(4617),i=l.n(n);let r=[{title:"Profile",path:"/"},{title:"Technologies Stack",path:"/stack"},{title:"Contacts",path:"/contacts"},{title:"QR",path:"/qr"}],o=[{title:"English version",path:"https://anton-sergeenkov.github.io/cv-en.pdf"},{title:"Russian version",path:"https://anton-sergeenkov.github.io/cv-ru.pdf"}];var a=l(7599);let c={default:{color:"#2b2b2b",bgHover:"#ececec"},active:{color:"#6673ff"},accent:{color:"#edeeef",bg:"#6673ff",bgHover:"#2b2b2b"}},_={color:c.default.color,textTransform:"none",borderRadius:"20px",backgroundColor:"transparent",width:"auto",padding:"4px 10px",transition:".4s",":hover":{backgroundColor:c.default.bgHover}},d={backgroundColor:c.accent.bg,color:c.accent.color,":hover":{backgroundColor:c.accent.bgHover}},m={StylesButtonDefault:_,StylesButtonAccent:d,StylesButtonActive:{},StylesTextDefault:{color:c.default.color},StylesTextAccent:{color:c.accent.color},StylesTextActive:{color:c.active.color}},u={StylesButtonDefault:{},StylesButtonAccent:{},StylesButtonActive:{},StylesTextDefault:{},StylesTextAccent:{},StylesTextActive:{}},h=e=>e===y.LIGHT_BLUE?m:u,x={":hover":{background:"none"}},p={color:"var(--color-gray-50)"},g=e=>{let{mode:t,isAccent:l=!1,isActive:s=!1,isHoverTransparent:n=!1,isDisabled:i=!1,isTextLeft:r=!1}=e,{StylesButtonDefault:o,StylesButtonAccent:a,StylesButtonActive:c,StylesTextDefault:_,StylesTextAccent:d,StylesTextActive:m}=h(t);return{stylesButton:{...o,...l&&a,...!l&&s&&c,...n&&x,width:"100%"},stylesText:{..._,...l&&d,...!l&&s&&m,...i&&p,width:"100%",textAlign:r?"left":"center"}}};var y=function(e){return e.LIGHT_BLUE="light-blue",e}({});let b=e=>{let{className:t,children:l,theme:n,isAccent:i,isActive:r,isHoverTransparent:o=!1,isTextLeft:c=!1,disabled:_=!1,endIcon:d=null,onClick:m=()=>null}=e,{stylesButton:u,stylesText:h}=g({mode:null==n?void 0:n.mode,isAccent:i,isActive:r,isHoverTransparent:o,isDisabled:_,isTextLeft:c});return(0,s.jsx)(a.A,{variant:"text",size:"small",className:t,sx:u,endIcon:d,disabled:_,onClick:m,children:(0,s.jsx)("div",{style:h,children:l})})},v={MENU:y.LIGHT_BLUE};var k=l(3293),j=l(9980),f=l(2115),N=l(4993),C=l(2042);let A=e=>{let{theme:t,className:l,list:n,title:i,isAccent:r=!1,Component:o}=e,[a,c]=(0,f.useState)(null),_=()=>{c(null)};return(0,s.jsxs)("div",{className:l,children:[(0,s.jsx)(b,{theme:t,isAccent:r,onClick:e=>{c(e.currentTarget)},endIcon:(0,s.jsx)(C.A,{}),children:i}),(0,s.jsx)(N.A,{anchorEl:a,open:!!a,onClose:_,children:(0,s.jsx)(o,{theme:t,list:n,onClose:_})})]})},T={padding:0,margin:0,minHeight:"auto",cursor:"default"};var H=l(3396),S=l.n(H);let F=e=>{let{theme:t,list:l,onClose:n}=e;return(0,s.jsx)(s.Fragment,{children:l.items.map((e,l)=>(0,s.jsx)(j.A,{onClick:n,sx:T,children:(0,s.jsx)("a",{className:S().link,href:e.path,target:"_blank",children:(0,s.jsx)(b,{theme:t,isAccent:!1,isActive:!1,disabled:!!e.disabled,isHoverTransparent:!0,isTextLeft:!0,children:e.title})})},l))})},I=e=>{let{theme:t,list:l,title:n,isAccent:i,className:r}=e;return(0,s.jsx)(A,{className:r,theme:t,list:l,title:n,isAccent:i,Component:F})};var E=l(8173),w=l.n(E),L=l(6046);let M=e=>{let{theme:t,item:l,isAccent:n=!1,isTextLeft:i=!1}=e,r=(0,L.usePathname)();return(0,s.jsx)(w(),{href:l.path,children:(0,s.jsx)(b,{theme:t,isAccent:n,isActive:r===l.path,isTextLeft:i,children:l.title})})};var P=l(9473),U=l.n(P);let B=e=>{let{theme:t,list:l,onClose:n}=e;return(0,s.jsx)(s.Fragment,{children:l.map((e,l)=>(0,s.jsx)("div",{className:U().link,children:(0,s.jsx)(j.A,{onClick:n,sx:T,children:(0,s.jsx)(M,{theme:t,item:e,isTextLeft:!0})})},l))})},D=e=>{let{theme:t,list:l,title:n,isAccent:i,className:r}=e;return(0,s.jsx)(A,{className:r,theme:t,list:l,title:n,isAccent:i,Component:B})};var G=l(9194),V=l.n(G);let q=()=>(0,s.jsx)("div",{className:V().wrapper,children:(0,s.jsx)(k.ie,{className:V().container,theme:"header-footer",children:(0,s.jsxs)("ul",{className:i()(V().list),children:[(0,s.jsx)("li",{className:V().listItem,children:(0,s.jsx)(I,{theme:{mode:v.MENU},list:{title:"CV",items:o},title:"CV",isAccent:!0})}),r.map((e,t)=>(0,s.jsx)("li",{className:i()(V().listItem,V().desktop),children:(0,s.jsx)(M,{theme:{mode:v.MENU},item:e})},t)),(0,s.jsx)("li",{className:i()(V().listItem,V().mobile),children:(0,s.jsx)(D,{theme:{mode:v.MENU},list:r,title:"Menu"})})]})})})},7599:(e,t,l)=>{"use strict";l.d(t,{A:()=>c});var s=l(5155),n=l(7824),i=l.n(n),r=l(6789),o=l(3747),a=l.n(o);let c=e=>{let{children:t,variant:l="contained",size:n="small",className:o,sx:c={},endIcon:_=null,disabled:d=!1,onClick:m}=e;return(0,s.jsx)(r.default,{variant:l,size:n,className:i()(o,a().button),sx:c,endIcon:_,disabled:d,onClick:m,children:t})}},4836:(e,t,l)=>{"use strict";l.d(t,{A:()=>c});var s=l(5155),n=l(7824),i=l.n(n),r=l(4071),o=l(567),a=l.n(o);let c=e=>{let{theme:t,className:l,href:n,target:o="_blank",children:c}=e,_=(0,r.a)(t,a());return(0,s.jsx)("a",{className:i()(a().item,_,l),href:n,target:o,children:c})}},3293:(e,t,l)=>{"use strict";l.d(t,{Kf:()=>m,ie:()=>v,ne:()=>f,bQ:()=>u.A,ob:()=>g}),l(7599);var s=l(5155),n=l(7824),i=l.n(n),r=l(2115),o=l(4071),a=l(5957),c=l.n(a),_=l(5142),d=l.n(_);let m=e=>{let{theme:t="light",className:l,items:n,isUserSelect:a=!0}=e,_=(0,o.a)(t,d());return(0,s.jsx)(s.Fragment,{children:n.map((e,t)=>(0,s.jsx)(r.Fragment,{children:(0,s.jsx)("span",{className:i()(d().item,c().className,_,l),style:{userSelect:a?"auto":"none"},children:e})},t))})};var u=l(4836),h=l(4889),x=l(5212),p=l.n(x);let g=e=>{let{children:t,className:l,disableAutoFocus:n=!1,open:r,onClose:o,isContentClickClose:a=!1}=e;return(0,s.jsx)(h.default,{className:i()(p().modal),disableAutoFocus:n,open:r,onClose:o,children:(0,s.jsx)("div",{...a&&{onClick:o},className:i()(l,p().modalContent),children:t})})};l(2672),l(64),l(7080),l(798);var y=l(1398),b=l.n(y);let v=e=>{let{theme:t,className:l,isTopSpacing:n,children:r}=e,a=(0,o.a)(t,b());return(0,s.jsx)("div",{className:i()(b().section,n?b().sectionTopSpacing:{},a,l),children:r})};var k=l(8269),j=l.n(k);let f=e=>{let{className:t,isNoPadding:l=!1,children:n}=e;return(0,s.jsx)("div",{className:i()(j().container,l?{}:j().containerPadding,t),children:n})}},7080:(e,t,l)=>{"use strict";l.d(t,{default:()=>p});var s=l(5155),n=l(7824),i=l.n(n),r=l(2115),o=l(789),a=l(4993),c=l(9980),_=l(8610),d=l(4836),m=l(5957),u=l.n(m),h=l(8229),x=l.n(h);let p=e=>{let{options:t,classes:l={container:"",button:"",icon:"",link:""}}=e,[n,m]=(0,r.useState)(null),h=()=>{m(null)};return(0,s.jsxs)("div",{className:i()(x().container,l.container),children:[(0,s.jsx)(o.A,{onClick:e=>{m(e.currentTarget)},className:x().button,children:(0,s.jsx)(_.A,{className:i()(x().icon,l.icon)})}),(0,s.jsx)(a.A,{anchorEl:n,open:!!n,onClose:h,children:t.map((e,t)=>(0,s.jsx)(c.A,{onClick:h,sx:{minHeight:"auto"},children:(0,s.jsx)(d.A,{href:e.link,theme:"dark-underlined",className:i()(x().link,u().className,l.link),children:e.name})},t))})]})}},4071:(e,t,l)=>{"use strict";l.d(t,{a:()=>s});let s=(e,t)=>e?t["item--"+e]:""},8606:e=>{e.exports={wrapper:"Footer_wrapper__znyEu",container:"Footer_container__Mn8SS",items:"Footer_items__UTuj_",logoConteiner:"Footer_logoConteiner__Fiy48",logo:"Footer_logo__ZNv_V"}},9194:e=>{e.exports={wrapper:"Header_wrapper__Gvcid",container:"Header_container__1EfDa",list:"Header_list__0TOiz",listItem:"Header_listItem__mMR_n",mobile:"Header_mobile__e5zAc",desktop:"Header_desktop__0NABT"}},3747:e=>{e.exports={button:"styles_button__oTKO0"}},5142:e=>{e.exports={item:"styles_item__LtJHw","item--light":"styles_item--light__JzoCf","item--dark":"styles_item--dark__W1s_p"}},567:e=>{e.exports={"item--blue-underlined-thin":"styles_item--blue-underlined-thin__8rwge","item--dark-underlined":"styles_item--dark-underlined__GD4Y5",item:"styles_item__XFs1V"}},5212:e=>{e.exports={modal:"styles_modal__f7xns",modalContent:"styles_modalContent__Mgfnm"}},64:e=>{e.exports={item:"styles_item__1pLs2","item--blue-lightblue":"styles_item--blue-lightblue__Ub_UI","item--green-blue":"styles_item--green-blue__SM4Mf","item--darkblue-violet":"styles_item--darkblue-violet__AgLGw"}},2672:e=>{e.exports={h1:"styles_h1__9WDVC",h2:"styles_h2__Zs0Cy",item:"styles_item__b_9V4",h3:"styles_h3__Xtgr_",p:"styles_p__7c_xn","item--dark-filled":"styles_item--dark-filled__60PPO","item--light-outline":"styles_item--light-outline__jIqN4"}},798:e=>{e.exports={gridContainer:"styles_gridContainer__HyPli",gridItem:"styles_gridItem__ImdV7",logo:"styles_logo__dgRMN",gridContent:"styles_gridContent__wxa8g",header:"styles_header__t18qp",description:"styles_description___NlXq","item--light":"styles_item--light__eOEGq","item--dark":"styles_item--dark__iDp3k"}},8269:e=>{e.exports={container:"styles_container__T2dQT",containerPadding:"styles_containerPadding__b_jV0"}},1398:e=>{e.exports={section:"styles_section__ZgTee",sectionTopSpacing:"styles_sectionTopSpacing__CZcqq","item--header-footer":"styles_item--header-footer__0peFX"}},3396:e=>{e.exports={link:"styles_link__j6j76"}},9473:e=>{e.exports={link:"styles_link__Kinb_"}},8229:e=>{e.exports={container:"styles_container__PJPrD",button:"styles_button__oGFHH",icon:"styles_icon__jirNM",link:"styles_link__6FFOp"}}}]);