(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{4815:function(e,t,n){"use strict";n.d(t,{h:function(){return r},Z:function(){return d}});var i,r,l=n(7437),o=n(2265),s=n(4313),a=n.n(s),c=n(1127),_=n(6527),u=n.n(_);(i=r||(r={})).LIGHT="light",i.DARK="dark";var d=e=>{let{theme:t,className:n,items:i,isUserSelect:r=!1}=e,s=(0,c.V)(t,u());return(0,l.jsx)(l.Fragment,{children:i.map((e,t)=>(0,l.jsx)(o.Fragment,{children:(0,l.jsx)("span",{className:a()(u().item,s,n),style:{userSelect:r?"auto":"none"},children:e})},t))})}},1584:function(e,t,n){"use strict";n.d(t,{h:function(){return r},Z:function(){return u}});var i,r,l=n(7437),o=n(4313),s=n.n(o),a=n(1127),c=n(2035),_=n.n(c);(i=r||(r={})).BLUE_UNDERLINED_THIN="blue-underlined-thin",i.DARK_UNDERLINED="dark-underlined";var u=e=>{let{theme:t,className:n,href:i,target:r="_blank",children:o}=e,c=(0,a.V)(t,_());return(0,l.jsx)("a",{className:s()(_().item,c,n),href:i,target:r,children:o})}},6297:function(e,t,n){"use strict";n.d(t,{h:function(){return i},Z:function(){return _}});var i,r=n(7437),l=n(4313),o=n.n(l),s=n(1127),a=n(695),c=n.n(a);(i||(i={})).HEADER_FOOTER="header-footer";var _=e=>{let{theme:t,className:n,children:i}=e,l=(0,s.V)(t,c());return(0,r.jsx)("div",{className:o()(c().section,l,n),children:i})}},6362:function(e,t,n){"use strict";n.d(t,{h:function(){return i},Z:function(){return p}});var i,r=n(7437),l=n(5753),o=e=>{let{children:t,buttonProps:n}=e;return(0,r.jsx)(l.Z,{...n,variant:"filled",children:t})};let s="#2b2b2b",a="#edeeef",c={StylesButtonDefault:{color:s,textTransform:"none",fontFamily:"var(--font-roboto-regular)",borderRadius:"20px",backgroundColor:"transparent",width:"auto",padding:"4px 10px",transition:".4s"},StylesButtonAccent:{backgroundColor:"#6673ff",color:a,":hover":{backgroundColor:"#2b2b2b"}},StylesButtonActive:{},StylesTextDefault:{color:s},StylesTextAccent:{color:a},StylesTextActive:{color:"#6673ff"}},_={StylesButtonDefault:{},StylesButtonAccent:{},StylesButtonActive:{},StylesTextDefault:{},StylesTextAccent:{},StylesTextActive:{}},u=e=>e===i.LIGHT_BLUE?c:_,d={":hover":{background:"none"}},m={color:"var(--color-gray-50)"},h=e=>{let{mode:t,isAccent:n=!1,isActive:i=!1,isHoverTransparent:r=!1,isDisabled:l=!1,isTextLeft:o=!1}=e,{StylesButtonDefault:s,StylesButtonAccent:a,StylesButtonActive:c,StylesTextDefault:_,StylesTextAccent:h,StylesTextActive:p}=u(t);return{stylesButton:{...s,...n&&a,...!n&&i&&c,...r&&d,width:"100%"},stylesText:{..._,...n&&h,...!n&&i&&p,...l&&m,width:"100%",textAlign:o?"left":"center"}}};(i||(i={})).LIGHT_BLUE="light-blue";var p=e=>{let{className:t,children:n,theme:i,isAccent:l,isActive:s,isHoverTransparent:a=!1,isTextLeft:c=!1,disabled:_=!1,endIcon:u=null,onClick:d=()=>null}=e,{stylesButton:m,stylesText:p}=h({mode:null==i?void 0:i.mode,isAccent:l,isActive:s,isHoverTransparent:a,isDisabled:_,isTextLeft:c});return(0,r.jsx)(o,{buttonProps:{className:t,size:"small",sx:m,endIcon:u,disabled:_,onClick:d},children:(0,r.jsx)("div",{style:p,children:n})})}},8575:function(e,t,n){"use strict";var i=n(7437),r=n(2265),l=n(4313),o=n.n(l),s=n(9375),a=n(3267),c=n(5418),_=n(766),u=n(1584),d=n(8336),m=n.n(d);t.default=e=>{let{options:t,classes:n={container:"",button:"",icon:"",link:""}}=e,[l,d]=(0,r.useState)(null),h=()=>{d(null)};return(0,i.jsxs)("div",{className:o()(m().container,n.container),children:[(0,i.jsx)(s.Z,{onClick:e=>{d(e.currentTarget)},className:m().button,children:(0,i.jsx)(_.Z,{className:o()(m().icon,n.icon)})}),(0,i.jsx)(a.Z,{anchorEl:l,open:!!l,onClose:h,children:t.map((e,t)=>(0,i.jsx)(c.Z,{onClick:h,sx:{minHeight:"auto"},children:(0,i.jsx)(u.Z,{href:e.link,theme:{mode:u.h.DARK_UNDERLINED},className:o()(m().link,n.link),children:e.name})},t))})]})}},1127:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});let i=(e,t)=>(null==e?void 0:e.mode)?t["item--"+e.mode]:""},6688:function(e,t,n){"use strict";n.d(t,{default:function(){return D}});var i=n(7437),r=n(6800),l=n.n(r),o=n(6297);let s=[{title:"Profile",path:"/"},{title:"Technologies Stack",path:"/stack"},{title:"Contacts",path:"/contacts"},{title:"QR",path:"/qr"}],a=[{title:"English version",path:"https://anton-sergeenkov.github.io/cv-en.pdf"},{title:"Russian version",path:"https://anton-sergeenkov.github.io/cv-ru.pdf"}];var c=n(9482),_=n(5418),u=n(2265),d=n(3267),m=n(9021),h=n(6362),p=e=>{let{theme:t,className:n,list:r,title:l,isAccent:o=!1,Component:s}=e,[a,c]=(0,u.useState)(null),_=()=>{c(null)};return(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)(h.Z,{theme:t,isAccent:o,onClick:e=>{c(e.currentTarget)},endIcon:(0,i.jsx)(m.Z,{}),children:l}),(0,i.jsx)(d.Z,{anchorEl:a,open:!!a,onClose:_,children:(0,i.jsx)(s,{theme:t,list:r,onClose:_})})]})};let E={padding:0,margin:0,minHeight:"auto",cursor:"default"};var x=n(6705),f=n.n(x);let g=e=>{let{theme:t,list:n,onClose:r}=e;return(0,i.jsx)(i.Fragment,{children:n.items.map((e,n)=>(0,i.jsx)(_.Z,{onClick:r,sx:E,children:(0,i.jsx)("a",{className:f().link,href:e.path,target:"_blank",children:(0,i.jsx)(h.Z,{theme:t,isAccent:!1,isActive:!1,disabled:!!e.disabled,isHoverTransparent:!0,isTextLeft:!0,children:e.title})})},n))})};var k=e=>{let{theme:t,list:n,title:r,isAccent:l,className:o}=e;return(0,i.jsx)(p,{className:o,theme:t,list:n,title:r,isAccent:l,Component:g})},y=n(4388),v=n(6463),C=e=>{let{theme:t,item:n,isAccent:r=!1,isTextLeft:l=!1}=e,o=(0,v.usePathname)();return(0,i.jsx)(y.default,{href:n.path,children:(0,i.jsx)(h.Z,{theme:t,isAccent:r,isActive:o===n.path,isTextLeft:l,children:n.title})})},L=n(8155),T=n.n(L);let b=e=>{let{theme:t,list:n,onClose:r}=e;return(0,i.jsx)(i.Fragment,{children:n.map((e,n)=>(0,i.jsx)("div",{className:T().link,children:(0,i.jsx)(_.Z,{onClick:r,sx:E,children:(0,i.jsx)(C,{theme:t,item:e,isTextLeft:!0})})},n))})};var j=e=>{let{theme:t,list:n,title:r,isAccent:l,className:o}=e;return(0,i.jsx)(p,{className:o,theme:t,list:n,title:r,isAccent:l,Component:b})},N=n(2167),A=n.n(N),D=()=>(0,i.jsx)(o.Z,{className:A().wrapper,theme:{mode:c.C.HEADER_FOOTER},children:(0,i.jsxs)("ul",{className:l()(A().list),children:[(0,i.jsx)("li",{className:A().listItem,children:(0,i.jsx)(k,{theme:{mode:c.C.MENU},list:{title:"CV",items:a},title:"CV",isAccent:!0})}),s.map((e,t)=>(0,i.jsx)("li",{className:l()(A().listItem,A().desktop),children:(0,i.jsx)(C,{theme:{mode:c.C.MENU},item:e})},t)),(0,i.jsx)("li",{className:l()(A().listItem,A().mobile),children:(0,i.jsx)(j,{theme:{mode:c.C.MENU},list:s,title:"Menu"})})]})})},9482:function(e,t,n){"use strict";n.d(t,{C:function(){return h}});var i,r,l,o,s,a,c,_=n(4815);n(7437),n(4313),n(2189),(o||(o={})).DARKBLUE_BLUE="darkblue-blue";var u=n(6362),d=n(1584);n(8575),n(9177),(i=s||(s={})).LIGHT="light",i.DARK="dark";var m=n(6297);n(8806),(r=a||(a={})).DARK_FILLED="dark-filled",r.LIGHT_OUTLINE="light-outline",(l=c||(c={})).H1="h1",l.H2="h2",l.H3="h3",l.P="p";let h={MENU:u.h.LIGHT_BLUE,CARD:s.LIGHT,TEXT_GRADIENT:o.DARKBLUE_BLUE,CHIPS_DARK:_.h.DARK,HEADER_FOOTER:m.h.HEADER_FOOTER,H2:a.DARK_FILLED,LINK:d.h.BLUE_UNDERLINED_THIN,LINK_CARD:d.h.DARK_UNDERLINED}},6527:function(e){e.exports={item:"ChipsElement_item__YbJXE","item--dark":"ChipsElement_item--dark__ClCck"}},2035:function(e){e.exports={"item--blue-underlined-thin":"LinkElement_item--blue-underlined-thin__K2e5F","item--dark-underlined":"LinkElement_item--dark-underlined__cIio6",item:"LinkElement_item__X3USg"}},8806:function(e){e.exports={h1:"TypographyElement_h1___n6qw",h2:"TypographyElement_h2__oSVyb",item:"TypographyElement_item__i_1vm",h3:"TypographyElement_h3__nPhC2",p:"TypographyElement_p__PJnp8","item--dark-filled":"TypographyElement_item--dark-filled__tlAHK","item--light-outline":"TypographyElement_item--light-outline__A4HQZ"}},2189:function(e){e.exports={"item--darkblue-blue":"TypographyGradientElement_item--darkblue-blue__nlSoh",item:"TypographyGradientElement_item__3m3V7"}},9177:function(e){e.exports={gridContainer:"LayoutCardsElement_gridContainer__0wYPL",gridItem:"LayoutCardsElement_gridItem__Eg8kl",logo:"LayoutCardsElement_logo__r6FBZ",gridContent:"LayoutCardsElement_gridContent__2gfaq",header:"LayoutCardsElement_header__7Aswv",description:"LayoutCardsElement_description___nIIQ","item--light":"LayoutCardsElement_item--light__G4wKT","item--dark":"LayoutCardsElement_item--dark__28Kjv"}},695:function(e){e.exports={section:"LayoutSectionElement_section__bycW0","item--header-footer":"LayoutSectionElement_item--header-footer__XhBS7"}},6705:function(e){e.exports={link:"MenuItemGroupLinksElement_link__XxX_o"}},8155:function(e){e.exports={link:"MenuItemGroupRoutesElement_link__Rwzfr"}},8336:function(e){e.exports={container:"OptionsElement_container__3Im1j",button:"OptionsElement_button__bUkUx",icon:"OptionsElement_icon__2KeWD",link:"OptionsElement_link__6kyis"}},9360:function(e){e.exports={wrapper:"Footer_wrapper__znyEu",container:"Footer_container__Mn8SS",items:"Footer_items__UTuj_",logoConteiner:"Footer_logoConteiner__Fiy48",logo:"Footer_logo__ZNv_V",chips:"Footer_chips__g7u4C",chip1:"Footer_chip1__IFdOY",chip2:"Footer_chip2__H_tbR"}},2167:function(e){e.exports={wrapper:"Header_wrapper__Gvcid",list:"Header_list__0TOiz",listItem:"Header_listItem__mMR_n",mobile:"Header_mobile__e5zAc",desktop:"Header_desktop__0NABT"}}}]);