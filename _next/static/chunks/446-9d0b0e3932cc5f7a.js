(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{3207:(e,t,l)=>{"use strict";l.d(t,{A:()=>a});var s=l(5155),n=l(9492),i=l(3886),r=l.n(i);let a=e=>{let{children:t,buttonProps:l}=e;return(0,s.jsx)(n.default,{...l,className:r().button,children:t})}},9771:(e,t,l)=>{"use strict";l.d(t,{l:()=>u,A:()=>m});var s=l(5155),n=l(3721),i=l.n(n),r=l(2115),a=l(7316),o=l(9508),c=l.n(o),d=l(3915),_=l.n(d),u=function(e){return e.LIGHT="light",e.DARK="dark",e}({});let m=e=>{let{theme:t,className:l,items:n,isUserSelect:o=!1}=e,d=(0,a.d)(t,_());return(0,s.jsx)(s.Fragment,{children:n.map((e,t)=>(0,s.jsx)(r.Fragment,{children:(0,s.jsx)("span",{className:i()(_().item,c().className,d,l),style:{userSelect:o?"auto":"none"},children:e})},t))})}},8633:(e,t,l)=>{"use strict";l.d(t,{l:()=>c,A:()=>d});var s=l(5155),n=l(3721),i=l.n(n),r=l(7316),a=l(3606),o=l.n(a),c=function(e){return e.BLUE_UNDERLINED_THIN="blue-underlined-thin",e.DARK_UNDERLINED="dark-underlined",e}({});let d=e=>{let{theme:t,className:l,href:n,target:a="_blank",children:c}=e,d=(0,r.d)(t,o());return(0,s.jsx)("a",{className:i()(o().item,d,l),href:n,target:a,children:c})}},4230:(e,t,l)=>{"use strict";l.d(t,{l:()=>m,A:()=>h});var s=l(5155),n=l(3721),i=l.n(n),r=l(7316),a=l(8633),o=l(7009),c=l(9508),d=l.n(c),_=l(6601),u=l.n(_),m=function(e){return e.LIGHT="light",e.DARK="dark",e}({});let h=e=>{let{theme:t,themeLink:l,items:n,isOptions:c=!1}=e,_=(0,r.d)(t,u());return(0,s.jsx)("div",{className:i()(u().gridContainer,_),children:n.map((e,t)=>(0,s.jsxs)("div",{className:u().gridItem,children:[(0,s.jsx)("a",{href:e.link,className:u().logo,style:{backgroundImage:"url(".concat(e.img.src,")")},target:"_blank"}),(0,s.jsxs)("div",{className:u().gridContent,children:[(0,s.jsx)("h3",{className:u().header,children:e.title}),(0,s.jsx)("div",{className:i()(d().className,u().description),children:e.description}),e.links.map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsx)(a.A,{href:e.link,theme:l,children:e.name})},t)),c&&(0,s.jsx)(o.default,{options:e.links})]})]},t))})}},493:(e,t,l)=>{"use strict";l.d(t,{l:()=>c,A:()=>d});var s=l(5155),n=l(3721),i=l.n(n),r=l(7316),a=l(1237),o=l.n(a),c=function(e){return e.HEADER_FOOTER="header-footer",e}({});let d=e=>{let{theme:t,className:l,isTopSpacing:n,children:a}=e,c=(0,r.d)(t,o());return(0,s.jsx)("div",{className:i()(o().section,n?o().sectionTopSpacing:{},c,l),children:a})}},2752:(e,t,l)=>{"use strict";l.d(t,{l:()=>h,A:()=>x});var s=l(5155),n=l(3207);let i={default:{color:"#2b2b2b",bgHover:"#ececec"},active:{color:"#6673ff"},accent:{color:"#edeeef",bg:"#6673ff",bgHover:"#2b2b2b"}},r={color:i.default.color,textTransform:"none",borderRadius:"20px",backgroundColor:"transparent",width:"auto",padding:"4px 10px",transition:".4s",":hover":{backgroundColor:i.default.bgHover}},a={backgroundColor:i.accent.bg,color:i.accent.color,":hover":{backgroundColor:i.accent.bgHover}},o={StylesButtonDefault:r,StylesButtonAccent:a,StylesButtonActive:{},StylesTextDefault:{color:i.default.color},StylesTextAccent:{color:i.accent.color},StylesTextActive:{color:i.active.color}},c={StylesButtonDefault:{},StylesButtonAccent:{},StylesButtonActive:{},StylesTextDefault:{},StylesTextAccent:{},StylesTextActive:{}},d=e=>e===h.LIGHT_BLUE?o:c,_={":hover":{background:"none"}},u={color:"var(--color-gray-50)"},m=e=>{let{mode:t,isAccent:l=!1,isActive:s=!1,isHoverTransparent:n=!1,isDisabled:i=!1,isTextLeft:r=!1}=e,{StylesButtonDefault:a,StylesButtonAccent:o,StylesButtonActive:c,StylesTextDefault:m,StylesTextAccent:h,StylesTextActive:x}=d(t);return{stylesButton:{...a,...l&&o,...!l&&s&&c,...n&&_,width:"100%"},stylesText:{...m,...l&&h,...!l&&s&&x,...i&&u,width:"100%",textAlign:r?"left":"center"}}};var h=function(e){return e.LIGHT_BLUE="light-blue",e}({});let x=e=>{let{className:t,children:l,theme:i,isAccent:r,isActive:a,isHoverTransparent:o=!1,isTextLeft:c=!1,disabled:d=!1,endIcon:_=null,onClick:u=()=>null}=e,{stylesButton:h,stylesText:x}=m({mode:null==i?void 0:i.mode,isAccent:r,isActive:a,isHoverTransparent:o,isDisabled:d,isTextLeft:c});return(0,s.jsx)(n.A,{buttonProps:{className:t,size:"small",sx:h,endIcon:_,disabled:d,onClick:u},children:(0,s.jsx)("div",{style:x,children:l})})}},7009:(e,t,l)=>{"use strict";l.d(t,{default:()=>p});var s=l(5155),n=l(3721),i=l.n(n),r=l(2115),a=l(3828),o=l(5889),c=l(8890),d=l(4087),_=l(8633),u=l(9508),m=l.n(u),h=l(2004),x=l.n(h);let p=e=>{let{options:t,classes:l={container:"",button:"",icon:"",link:""}}=e,[n,u]=(0,r.useState)(null),h=()=>{u(null)};return(0,s.jsxs)("div",{className:i()(x().container,l.container),children:[(0,s.jsx)(a.A,{onClick:e=>{u(e.currentTarget)},className:x().button,children:(0,s.jsx)(d.A,{className:i()(x().icon,l.icon)})}),(0,s.jsx)(o.A,{anchorEl:n,open:!!n,onClose:h,children:t.map((e,t)=>(0,s.jsx)(c.A,{onClick:h,sx:{minHeight:"auto"},children:(0,s.jsx)(_.A,{href:e.link,theme:{mode:_.l.DARK_UNDERLINED},className:i()(x().link,m().className,l.link),children:e.name})},t))})]})}},7316:(e,t,l)=>{"use strict";l.d(t,{d:()=>s});let s=(e,t)=>(null==e?void 0:e.mode)?t["item--"+e.mode]:""},3601:(e,t,l)=>{"use strict";l.d(t,{default:()=>I});var s=l(5155),n=l(4617),i=l.n(n),r=l(493);let a=[{title:"Profile",path:"/"},{title:"Technologies Stack",path:"/stack"},{title:"Contacts",path:"/contacts"},{title:"QR1",path:"/qr"}],o=[{title:"English version",path:"https://anton-sergeenkov.github.io/cv-en.pdf"},{title:"Russian version",path:"https://anton-sergeenkov.github.io/cv-ru.pdf"}];var c=l(553),d=l(8890),_=l(2115),u=l(5889),m=l(973),h=l(2752);let x=e=>{let{theme:t,className:l,list:n,title:i,isAccent:r=!1,Component:a}=e,[o,c]=(0,_.useState)(null),d=()=>{c(null)};return(0,s.jsxs)("div",{className:l,children:[(0,s.jsx)(h.A,{theme:t,isAccent:r,onClick:e=>{c(e.currentTarget)},endIcon:(0,s.jsx)(m.A,{}),children:i}),(0,s.jsx)(u.A,{anchorEl:o,open:!!o,onClose:d,children:(0,s.jsx)(a,{theme:t,list:n,onClose:d})})]})},p={padding:0,margin:0,minHeight:"auto",cursor:"default"};var g=l(7754),A=l.n(g);let k=e=>{let{theme:t,list:l,onClose:n}=e;return(0,s.jsx)(s.Fragment,{children:l.items.map((e,l)=>(0,s.jsx)(d.A,{onClick:n,sx:p,children:(0,s.jsx)("a",{className:A().link,href:e.path,target:"_blank",children:(0,s.jsx)(h.A,{theme:t,isAccent:!1,isActive:!1,disabled:!!e.disabled,isHoverTransparent:!0,isTextLeft:!0,children:e.title})})},l))})},N=e=>{let{theme:t,list:l,title:n,isAccent:i,className:r}=e;return(0,s.jsx)(x,{className:r,theme:t,list:l,title:n,isAccent:i,Component:k})};var v=l(8173),j=l.n(v),y=l(6046);let b=e=>{let{theme:t,item:l,isAccent:n=!1,isTextLeft:i=!1}=e,r=(0,y.usePathname)();return(0,s.jsx)(j(),{href:l.path,children:(0,s.jsx)(h.A,{theme:t,isAccent:n,isActive:r===l.path,isTextLeft:i,children:l.title})})};var f=l(45),E=l.n(f);let T=e=>{let{theme:t,list:l,onClose:n}=e;return(0,s.jsx)(s.Fragment,{children:l.map((e,l)=>(0,s.jsx)("div",{className:E().link,children:(0,s.jsx)(d.A,{onClick:n,sx:p,children:(0,s.jsx)(b,{theme:t,item:e,isTextLeft:!0})})},l))})},C=e=>{let{theme:t,list:l,title:n,isAccent:i,className:r}=e;return(0,s.jsx)(x,{className:r,theme:t,list:l,title:n,isAccent:i,Component:T})};var L=l(9194),D=l.n(L);let I=()=>(0,s.jsx)("div",{className:D().wrapper,children:(0,s.jsx)(r.A,{className:D().container,theme:{mode:c.C.HEADER_FOOTER},children:(0,s.jsxs)("ul",{className:i()(D().list),children:[(0,s.jsx)("li",{className:D().listItem,children:(0,s.jsx)(N,{theme:{mode:c.C.MENU},list:{title:"CV",items:o},title:"CV",isAccent:!0})}),a.map((e,t)=>(0,s.jsx)("li",{className:i()(D().listItem,D().desktop),children:(0,s.jsx)(b,{theme:{mode:c.C.MENU},item:e})},t)),(0,s.jsx)("li",{className:i()(D().listItem,D().mobile),children:(0,s.jsx)(C,{theme:{mode:c.C.MENU},list:a,title:"Menu"})})]})})})},553:(e,t,l)=>{"use strict";l.d(t,{C:()=>d});var s=l(9771);l(5155),l(3721),l(8555);var n=function(e){return e.DARKBLUE_BLUE="darkblue-blue",e}({}),i=l(2752),r=l(4230),a=l(493);l(5987);var o=function(e){return e.DARK_FILLED="dark-filled",e.LIGHT_OUTLINE="light-outline",e}({}),c=l(8633);let d={MENU:i.l.LIGHT_BLUE,CARD:r.l.LIGHT,TEXT_GRADIENT:n.DARKBLUE_BLUE,CHIPS_DARK:s.l.DARK,HEADER_FOOTER:a.l.HEADER_FOOTER,H2:o.DARK_FILLED,LINK:c.l.BLUE_UNDERLINED_THIN,LINK_CARD:c.l.DARK_UNDERLINED}},3886:e=>{e.exports={button:"styles_button__qXaow"}},3915:e=>{e.exports={item:"styles_item__P3UF5","item--dark":"styles_item--dark__LQuUa"}},3606:e=>{e.exports={"item--blue-underlined-thin":"styles_item--blue-underlined-thin__zCtgI","item--dark-underlined":"styles_item--dark-underlined__ySLDd",item:"styles_item__2BIOQ"}},5987:e=>{e.exports={h1:"styles_h1__eG2yE",h2:"styles_h2__jmeYq",item:"styles_item__Z71dy",h3:"styles_h3__2dN1Y",p:"styles_p__hBTC4","item--dark-filled":"styles_item--dark-filled__dhWv4","item--light-outline":"styles_item--light-outline___3xfA"}},8555:e=>{e.exports={"item--darkblue-blue":"styles_item--darkblue-blue___u86J",item:"styles_item__KW_W_"}},6601:e=>{e.exports={gridContainer:"styles_gridContainer__ua51r",gridItem:"styles_gridItem__kB7gY",logo:"styles_logo__OLHKE",gridContent:"styles_gridContent__AWaNL",header:"styles_header__BLHBa",description:"styles_description__9AWJ6","item--light":"styles_item--light__dFej3","item--dark":"styles_item--dark__nEO0U"}},1237:e=>{e.exports={section:"styles_section__bfN6A",sectionTopSpacing:"styles_sectionTopSpacing__4Tp60","item--header-footer":"styles_item--header-footer__Q0NZT"}},7754:e=>{e.exports={link:"styles_link__PfTjN"}},45:e=>{e.exports={link:"styles_link__w3H_6"}},2004:e=>{e.exports={container:"styles_container__l9iAL",button:"styles_button__lfq_w",icon:"styles_icon__EQUGb",link:"styles_link__4CFsz"}},8606:e=>{e.exports={wrapper:"Footer_wrapper__znyEu",container:"Footer_container__Mn8SS",items:"Footer_items__UTuj_",logoConteiner:"Footer_logoConteiner__Fiy48",logo:"Footer_logo__ZNv_V"}},9194:e=>{e.exports={wrapper:"Header_wrapper__Gvcid",container:"Header_container__1EfDa",list:"Header_list__0TOiz",listItem:"Header_listItem__mMR_n",mobile:"Header_mobile__e5zAc",desktop:"Header_desktop__0NABT"}}}]);