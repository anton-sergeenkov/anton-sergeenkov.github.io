(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{3963:function(e,t,n){Promise.resolve().then(n.bind(n,9361)),Promise.resolve().then(n.t.bind(n,4587,23)),Promise.resolve().then(n.bind(n,5111))},9361:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n(3827),r=n(6480),i=n.n(r);let a=[{title:"Social Network",items:[{url:"https://www.linkedin.com/in/sergeenkov-anton",title:"LinkedIn",username:"sergeenkov-anton"},{url:"https://www.instagram.com/anton.sergeenkov",title:"Instagram",username:"anton.sergeenkov"},{url:"https://vk.com/anton.sergeenkov",title:"VKontakte",username:"anton.sergeenkov"},{url:"https://www.facebook.com/profile.php?id=100002126643722",title:"Facebook",alias:"profile"}]},{title:"Messengers",items:[{url:"https://join.skype.com/invite/hZmBtAZQ0EXY",title:"Skype",username:"sergeenkov.anton"},{url:"https://t.me/anton_sergeenkov",title:"Telegram",username:"anton_sergeenkov"},{url:"https://wa.me/79674466458",title:"WhatsApp",username:""},{url:"https://viber.click/79674466458",title:"Viber",username:""},{url:"https://us04web.zoom.us/j/2155710738",title:"Zoom",username:""},{url:"https://meet2.webex.com/meet/pr23645025976",title:"Webex",username:""}]},{title:"Developer",items:[{url:"https://anton-sergeenkov.github.io",title:"Website"},{url:"https://github.com/anton-sergeenkov",title:"GitHub",username:"anton-sergeenkov"},{url:"https://habr.com/ru/users/anton-sergeenkov",title:"Habr",username:"@anton-sergeenkov"},{url:"https://habr.com/ru/users/anton-sergeenkov/posts",title:"Habr Publications"},{url:"https://codesandbox.io/u/anton-sergeenkov",title:"CodeSandbox"},{url:"https://codepen.io/anton-sergeenkov",title:"CodePen"},{url:"https://www.npmjs.com/~anton-sergeenkov",title:"NPM"}]},{title:"CV",items:[{url:"https://anton-sergeenkov.github.io/cv-en.pdf",title:"CV (en)"},{url:"https://anton-sergeenkov.github.io/cv-ru.pdf",title:"CV (ru)"},{url:"https://career.habr.com/anton-sergeenkov",title:"Habr Career"}]},{title:"E-mail",items:[{url:"mailto:anthony.sergeenkov@gmail.com",title:"Google Mail",alias:"anthony.sergeenkov@gmail.com",username:""},{url:"mailto:anthony.sergeenkov@yandex.ru",title:"Yandex Mail",alias:"anthony.sergeenkov@yandex.ru",username:""}]}];var l=n(5366),o=n(8532),c=n.n(o),u=()=>(0,s.jsx)("div",{className:i()(c().wrapper,"section-starter"),children:(0,s.jsx)("div",{className:c().container,children:(0,s.jsx)("ul",{className:c().list,children:a.map((e,t)=>(0,s.jsxs)("div",{className:c().listWrapper,children:[(0,s.jsx)("div",{className:c().title,children:e.title}),(0,s.jsx)("ul",{className:c().list,children:e.items.map((e,t)=>(0,s.jsx)("li",{className:c().listItem,children:(0,s.jsxs)("div",{className:c().listItemContainer,children:[(0,s.jsx)(l.Z,{className:c().chip,children:e.title}),(0,s.jsx)("a",{href:e.url,className:"link",target:"_blank",children:e.alias?e.alias:e.url})]})},t))})]},t))})})})},5111:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var s=n(3827),r=n(6480),i=n.n(r);let a=[{title:"Profile",path:"/"},{title:"Technologies Stack",path:"/stack"},{title:"Contacts",path:"/contacts"}],l=[{title:"English version",path:"https://anton-sergeenkov.github.io/cv-en.pdf"},{title:"Russian version",path:"https://anton-sergeenkov.github.io/cv-ru.pdf",disabled:!0}];var o=n(4090),c=n(6115),u=n(697),m=n(8007),d=n(6285),h=n(9468),p=n.n(h);let _={textTransform:"none",fontFamily:"var(--font-roboto-regular)",borderRadius:"20px",border:"1px solid transparent",backgroundColor:"transparent",width:"auto",color:"#2b2b2b",padding:"4px 10px",transition:".4s"},x={backgroundColor:"#8167f7",color:"#edeeef",":hover":{backgroundColor:"#2b2b2b"}};var v=e=>{let{accent:t,className:n,children:r,onClick:i=null,endIcon:a=null}=e;return(0,s.jsx)(d.Z,{className:n,size:"small",variant:"filled",sx:t?{..._,...x}:_,onClick:i,endIcon:a,children:(0,s.jsx)("span",{style:{color:t?x.color:_.color},className:p().text,children:r})})},k=n(5088),g=n.n(k),b=e=>{let{item:t,accent:n,className:r}=e,[i,a]=(0,o.useState)(null),l=()=>{a(null)};return(0,s.jsxs)("div",{className:r,children:[(0,s.jsx)(v,{accent:n,onClick:e=>{a(e.currentTarget)},endIcon:(0,s.jsx)(m.Z,{}),children:t.title}),(0,s.jsx)(c.Z,{anchorEl:i,open:!!i,onClose:l,children:t.items.map((e,t)=>(0,s.jsx)(u.Z,{onClick:l,sx:{padding:0,margin:0,minHeight:"auto",cursor:"default"},children:(0,s.jsx)(d.Z,{size:"small",fullWidth:!0,variant:"text",disabled:e.disabled,sx:{textTransform:"none",color:"#2b2b2b",justifyContent:"start",padding:"5px 10px",fontFamily:"var(--font-roboto-light)"},children:e.disabled?(0,s.jsx)("span",{children:e.title}):(0,s.jsx)("a",{className:g().link,href:e.path,target:"_blank",children:e.title})})},t))})]})},f=n(8792),j=n(7907),N=n(1555),w=n.n(N),C=e=>{let{item:t,accent:n}=e,r=(0,j.usePathname)();return(0,s.jsx)("div",{className:w().item,children:(0,s.jsx)(v,{accent:n,children:(0,s.jsx)(f.default,{href:t.path,className:r===t.path?w().active:null,children:t.title})})})},S=n(5754),I=n.n(S),y=e=>{let{accent:t}=e,[n,r]=(0,o.useState)(null),i=()=>{r(null)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{accent:t,onClick:e=>{r(e.currentTarget)},endIcon:(0,s.jsx)(m.Z,{}),children:"Menu"}),(0,s.jsx)(c.Z,{anchorEl:n,open:!!n,onClose:i,children:a.map((e,t)=>(0,s.jsx)("div",{className:I().link,children:(0,s.jsx)(u.Z,{onClick:i,sx:{padding:0,margin:0,minHeight:"auto",cursor:"default"},children:(0,s.jsx)(C,{item:e})})},t))})]})},H=n(3443),Z=n.n(H),E=()=>(0,s.jsx)("div",{className:i()(Z().container,"section-header"),children:(0,s.jsxs)("ul",{className:i()(Z().list),children:[(0,s.jsx)("li",{className:Z().listItem,children:(0,s.jsx)(b,{item:{title:"CV",items:l},accent:!0})}),a.map((e,t)=>(0,s.jsx)("li",{className:i()(Z().listItem,Z().desktop),children:(0,s.jsx)(C,{item:e})},t)),(0,s.jsx)("li",{className:i()(Z().listItem,Z().mobile),children:(0,s.jsx)(y,{})})]})})},5366:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(3827),r=n(6480),i=n.n(r),a=n(236),l=n.n(a),o=e=>{let{children:t}=e;return(0,s.jsx)("span",{className:i()(l().item,e.className),children:t})}},8532:function(e){e.exports={wrapper:"SectionStarter_wrapper__AStPs",container:"SectionStarter_container__hvmbg",title:"SectionStarter_title__Tu3n5",list:"SectionStarter_list__tcwwh",listItem:"SectionStarter_listItem__XwPdc",listWrapper:"SectionStarter_listWrapper__i9_3N",listItemContainer:"SectionStarter_listItemContainer__sujy1",chip:"SectionStarter_chip__G4uzo"}},4587:function(e){e.exports={wrapper:"Footer_wrapper__znyEu",container:"Footer_container__Mn8SS"}},3443:function(e){e.exports={container:"Header_container__1EfDa",list:"Header_list__0TOiz",listItem:"Header_listItem__mMR_n",mobile:"Header_mobile__e5zAc",desktop:"Header_desktop__0NABT"}},5754:function(e){e.exports={link:"HeaderOptions_link__EFulC"}},9468:function(e){e.exports={text:"MenuButton_text__Qs_ep"}},5088:function(e){e.exports={link:"MenuOptions_link__IQqXv"}},1555:function(e){e.exports={item:"MenuRoutes_item__mugsF",active:"MenuRoutes_active__lzrEH"}},236:function(e){e.exports={item:"Chip_item__LOMNb"}}},function(e){e.O(0,[705,971,69,744],function(){return e(e.s=3963)}),_N_E=e.O()}]);