(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{8859:function(e,t,n){Promise.resolve().then(n.bind(n,6462)),Promise.resolve().then(n.t.bind(n,9360,23)),Promise.resolve().then(n.bind(n,3942))},5104:function(e,t,n){"use strict";n.d(t,{zx:function(){return a},cL:function(){return m},u_:function(){return u},ZT:function(){return g}});var i=n(7437),r=n(6661);i.Fragment;var a=e=>{let{children:t}=e;return(0,i.jsx)(r.Z,{...e,children:t})},l=n(2265),s=n(4313),o=n.n(s),c=n(5918),d=n.n(c),m=e=>{let{className:t,theme:n,items:r}=e,a=(null==n?void 0:n.mode)?d()["item--"+n.mode]:d()["item--light"];return(0,i.jsx)(i.Fragment,{children:r.map((e,n)=>(0,i.jsx)(l.Fragment,{children:(0,i.jsx)("span",{className:o()(d().item,a,t),children:e})},n))})},h=n(4651);i.Fragment;var u=e=>{let{children:t}=e;return(0,i.jsx)(h.Z,{...e,children:t})},_=n(683),p=n.n(_);i.Fragment;var g=e=>{let{className:t,theme:n,tag:r,children:a}=e,l=(null==n?void 0:n.mode)?p()["item--"+n.mode]:p()["item--light"];switch(r){case"h1":return(0,i.jsx)("h1",{children:a});case"h2":return(0,i.jsx)("h2",{className:o()(p().h2,t),children:(0,i.jsx)("span",{className:o()(p().item,l),children:a})});case"h3":return(0,i.jsx)("h3",{children:a});case"p":return(0,i.jsx)("p",{children:a})}return(0,i.jsx)(i.Fragment,{children:a})}},6462:function(e,t,n){"use strict";n.d(t,{default:function(){return m}});var i=n(7437),r=n(2265),a=n(6800),l=n.n(a),s=n(5104);let o=[{title:"Instagram",img:{src:"/_next/static/media/qr-instagram.f393bc06.svg",height:600,width:600,blurWidth:0,blurHeight:0},name:"anton.sergeenkov"},{title:"Telegram",img:{src:"/_next/static/media/qr-telegram.258c3864.svg",height:600,width:600,blurWidth:0,blurHeight:0},name:"anton_sergeenkov"},{title:"Website",img:{src:"/_next/static/media/qr-website.519a922d.svg",height:600,width:600,blurWidth:0,blurHeight:0},name:"anton-sergeenkov.github.io"}];var c=n(9290),d=n.n(c),m=()=>{var e,t,n;let[a,c]=(0,r.useState)(!1),[m,h]=(0,r.useState)(null),u=e=>{h(e),c(!0)},_=()=>c(!1);return(0,i.jsx)("div",{className:l()(d().wrapper,"section-starter"),children:(0,i.jsxs)("div",{className:l()(d().container),children:[(0,i.jsx)(s.ZT,{tag:"h2",theme:{mode:"light-outline"},children:"QR Codes"}),(0,i.jsxs)("div",{className:d().listContainer,children:[o.map((e,t)=>(0,i.jsxs)("div",{className:d().itemContainer,children:[(0,i.jsx)("div",{onClick:()=>u(t),className:d().logo,style:{backgroundImage:"url(".concat(e.img.src,")")}}),(0,i.jsx)("div",{className:d().title,children:e.title})]},t)),(0,i.jsx)(s.u_,{disableAutoFocus:!0,open:a,onClose:_,className:d().modal,children:(0,i.jsxs)("div",{onClick:_,className:d().modalContent,children:[(0,i.jsx)("div",{className:d().modalLogo,style:{backgroundImage:"url(".concat(null===(e=o[m])||void 0===e?void 0:e.img.src,")")}}),(null===(t=o[m])||void 0===t?void 0:t.name)&&(0,i.jsx)("div",{className:d().modalName,children:(0,i.jsx)(s.ZT,{tag:"h2",theme:{mode:"dark-filled"},className:d().typographyUsername,children:null===(n=o[m])||void 0===n?void 0:n.name})})]})})]})]})})}},3942:function(e,t,n){"use strict";n.d(t,{default:function(){return H}});var i=n(7437),r=n(6800),a=n.n(r);let l=[{title:"Profile",path:"/"},{title:"Technologies Stack",path:"/stack"},{title:"Contacts",path:"/contacts"},{title:"QR",path:"/qr"}],s=[{title:"English version",path:"https://anton-sergeenkov.github.io/cv-en.pdf"},{title:"Russian version",path:"https://anton-sergeenkov.github.io/cv-ru.pdf"}];var o=n(2265),c=n(1110),d=n(5565),m=n(3040),h=n(5104),u=n(7347),_=n.n(u);let p={textTransform:"none",fontFamily:"var(--font-roboto-regular)",borderRadius:"20px",border:"1px solid transparent",backgroundColor:"transparent",width:"auto",color:"#2b2b2b",padding:"4px 10px",transition:".4s"},g={backgroundColor:"#8167f7",color:"#edeeef",":hover":{backgroundColor:"#2b2b2b"}};var x=e=>{let{accent:t,className:n,children:r,onClick:a=null,endIcon:l=null}=e;return(0,i.jsx)(h.zx,{className:n,size:"small",variant:"filled",sx:t?{...p,...g}:p,onClick:a,endIcon:l,children:(0,i.jsx)("span",{style:{color:t?g.color:p.color},className:_().text,children:r})})},v=n(6764),j=n.n(v),f=e=>{let{item:t,accent:n,className:r}=e,[a,l]=(0,o.useState)(null),s=()=>{l(null)};return(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)(x,{accent:n,onClick:e=>{l(e.currentTarget)},endIcon:(0,i.jsx)(m.Z,{}),children:t.title}),(0,i.jsx)(c.Z,{anchorEl:a,open:!!a,onClose:s,children:t.items.map((e,t)=>(0,i.jsx)(d.Z,{onClick:s,sx:{padding:0,margin:0,minHeight:"auto",cursor:"default"},children:(0,i.jsx)(h.zx,{size:"small",fullWidth:!0,variant:"text",disabled:e.disabled,sx:{textTransform:"none",color:"#2b2b2b",justifyContent:"start",padding:"5px 10px",fontFamily:"var(--font-roboto-light)"},children:e.disabled?(0,i.jsx)("span",{children:e.title}):(0,i.jsx)("a",{className:j().link,href:e.path,target:"_blank",children:e.title})})},t))})]})},b=n(4388),k=n(6463),N=n(6414),C=n.n(N),S=e=>{let{item:t,accent:n}=e,r=(0,k.usePathname)();return(0,i.jsx)("div",{className:C().item,children:(0,i.jsx)(x,{accent:n,children:(0,i.jsx)(b.default,{href:t.path,className:r===t.path?C().active:null,children:t.title})})})},y=n(4533),T=n.n(y),F=e=>{let{accent:t}=e,[n,r]=(0,o.useState)(null),a=()=>{r(null)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{accent:t,onClick:e=>{r(e.currentTarget)},endIcon:(0,i.jsx)(m.Z,{}),children:"Menu"}),(0,i.jsx)(c.Z,{anchorEl:n,open:!!n,onClose:a,children:l.map((e,t)=>(0,i.jsx)("div",{className:T().link,children:(0,i.jsx)(d.Z,{onClick:a,sx:{padding:0,margin:0,minHeight:"auto",cursor:"default"},children:(0,i.jsx)(S,{item:e})})},t))})]})},w=n(266),I=n.n(w),H=()=>(0,i.jsx)("div",{className:a()(I().container,"section-header"),children:(0,i.jsxs)("ul",{className:a()(I().list),children:[(0,i.jsx)("li",{className:I().listItem,children:(0,i.jsx)(f,{item:{title:"CV",items:s},accent:!0})}),l.map((e,t)=>(0,i.jsx)("li",{className:a()(I().listItem,I().desktop),children:(0,i.jsx)(S,{item:e})},t)),(0,i.jsx)("li",{className:a()(I().listItem,I().mobile),children:(0,i.jsx)(F,{})})]})})},5918:function(e){e.exports={item:"Chips_item__E8m_9","item--light":"Chips_item--light__N0u43","item--dark":"Chips_item--dark__WXqQr"}},683:function(e){e.exports={h2:"Typography_h2__88yUm",item:"Typography_item__q7Qv3","item--light":"Typography_item--light__uDNun","item--dark":"Typography_item--dark__d1cHI","item--dark-filled":"Typography_item--dark-filled__cvxYv","item--light-outline":"Typography_item--light-outline__UaLq8"}},9290:function(e){e.exports={wrapper:"SectionStarter_wrapper__667RU",container:"SectionStarter_container__hQCgq",listContainer:"SectionStarter_listContainer__u_83_",itemContainer:"SectionStarter_itemContainer__FcArj",logo:"SectionStarter_logo__lwDk9",title:"SectionStarter_title__PdJCP",modal:"SectionStarter_modal__pAJpL",modalContent:"SectionStarter_modalContent__6a_WS",modalLogo:"SectionStarter_modalLogo__tNv5X",modalName:"SectionStarter_modalName__cRJIk",typographyUsername:"SectionStarter_typographyUsername__rh2Wr"}},9360:function(e){e.exports={wrapper:"Footer_wrapper__znyEu",container:"Footer_container__Mn8SS"}},266:function(e){e.exports={container:"Header_container__1EfDa",list:"Header_list__0TOiz",listItem:"Header_listItem__mMR_n",mobile:"Header_mobile__e5zAc",desktop:"Header_desktop__0NABT"}},4533:function(e){e.exports={link:"HeaderOptions_link__EFulC"}},7347:function(e){e.exports={text:"MenuButton_text__Qs_ep"}},6764:function(e){e.exports={link:"MenuOptions_link__IQqXv"}},6414:function(e){e.exports={item:"MenuRoutes_item__mugsF",active:"MenuRoutes_active__lzrEH"}}},function(e){e.O(0,[921,302,971,23,744],function(){return e(e.s=8859)}),_N_E=e.O()}]);