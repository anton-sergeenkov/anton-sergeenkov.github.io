(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{8779:(e,t,s)=>{Promise.resolve().then(s.bind(s,4128)),Promise.resolve().then(s.bind(s,923)),Promise.resolve().then(s.bind(s,207)),Promise.resolve().then(s.bind(s,4612))},3207:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var i=s(5155),n=s(9492),l=s(3886),r=s.n(l);let d=e=>{let{children:t,buttonProps:s}=e;return(0,i.jsx)(n.default,{...s,className:r().button,children:t})}},9771:(e,t,s)=>{"use strict";s.d(t,{l:()=>m,A:()=>u});var i=s(5155),n=s(3721),l=s.n(n),r=s(2115),d=s(7316),a=s(9508),o=s.n(a),c=s(3915),h=s.n(c),m=function(e){return e.LIGHT="light",e.DARK="dark",e}({});let u=e=>{let{theme:t,className:s,items:n,isUserSelect:a=!1}=e,c=(0,d.d)(t,h());return(0,i.jsx)(i.Fragment,{children:n.map((e,t)=>(0,i.jsx)(r.Fragment,{children:(0,i.jsx)("span",{className:l()(h().item,o().className,c,s),style:{userSelect:a?"auto":"none"},children:e})},t))})}},8633:(e,t,s)=>{"use strict";s.d(t,{l:()=>o,A:()=>c});var i=s(5155),n=s(3721),l=s.n(n),r=s(7316),d=s(3606),a=s.n(d),o=function(e){return e.BLUE_UNDERLINED_THIN="blue-underlined-thin",e.DARK_UNDERLINED="dark-underlined",e}({});let c=e=>{let{theme:t,className:s,href:n,target:d="_blank",children:o}=e,c=(0,r.d)(t,a());return(0,i.jsx)("a",{className:l()(a().item,c,s),href:n,target:d,children:o})}},4230:(e,t,s)=>{"use strict";s.d(t,{l:()=>u,A:()=>_});var i=s(5155),n=s(3721),l=s.n(n),r=s(7316),d=s(8633),a=s(7009),o=s(9508),c=s.n(o),h=s(6601),m=s.n(h),u=function(e){return e.LIGHT="light",e.DARK="dark",e}({});let _=e=>{let{theme:t,themeLink:s,items:n,isOptions:o=!1}=e,h=(0,r.d)(t,m());return(0,i.jsx)("div",{className:l()(m().gridContainer,h),children:n.map((e,t)=>(0,i.jsxs)("div",{className:m().gridItem,children:[(0,i.jsx)("a",{href:e.link,className:m().logo,style:{backgroundImage:"url(".concat(e.img.src,")")},target:"_blank"}),(0,i.jsxs)("div",{className:m().gridContent,children:[(0,i.jsx)("h3",{className:m().header,children:e.title}),(0,i.jsx)("div",{className:l()(c().className,m().description),children:e.description}),e.links.map((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(d.A,{href:e.link,theme:s,children:e.name})},t)),o&&(0,i.jsx)(a.default,{options:e.links})]})]},t))})}},7009:(e,t,s)=>{"use strict";s.d(t,{default:()=>j});var i=s(5155),n=s(3721),l=s.n(n),r=s(2115),d=s(3828),a=s(5889),o=s(8890),c=s(4087),h=s(8633),m=s(9508),u=s.n(m),_=s(2004),x=s.n(_);let j=e=>{let{options:t,classes:s={container:"",button:"",icon:"",link:""}}=e,[n,m]=(0,r.useState)(null),_=()=>{m(null)};return(0,i.jsxs)("div",{className:l()(x().container,s.container),children:[(0,i.jsx)(d.A,{onClick:e=>{m(e.currentTarget)},className:x().button,children:(0,i.jsx)(c.A,{className:l()(x().icon,s.icon)})}),(0,i.jsx)(a.A,{anchorEl:n,open:!!n,onClose:_,children:t.map((e,t)=>(0,i.jsx)(o.A,{onClick:_,sx:{minHeight:"auto"},children:(0,i.jsx)(h.A,{href:e.link,theme:{mode:h.l.DARK_UNDERLINED},className:l()(x().link,u().className,s.link),children:e.name})},t))})]})}},7316:(e,t,s)=>{"use strict";s.d(t,{d:()=>i});let i=(e,t)=>(null==e?void 0:e.mode)?t["item--"+e.mode]:""},4128:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var i=s(5155),n=s(3207);let l=()=>{let e=()=>{console.log("Click")};return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Buttons"}),(0,i.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,i.jsx)(n.A,{buttonProps:{size:"small",variant:"contained",onClick:e},children:"variant: contained"}),(0,i.jsx)(n.A,{buttonProps:{size:"small",variant:"outlined",onClick:e},children:"variant: outlined"}),(0,i.jsx)(n.A,{buttonProps:{size:"small",variant:"text",onClick:e},children:"variant: text"})]})]})}},923:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var i=s(5155),n=s(9771);let l=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Chips"}),(0,i.jsxs)("div",{style:{display:"flex",gap:"20px",flexDirection:"column"},children:[(0,i.jsx)("div",{children:(0,i.jsx)(n.A,{items:["One","Two"],theme:{mode:n.l.DARK},isUserSelect:!0})}),(0,i.jsx)("div",{children:(0,i.jsx)(n.A,{items:["One","Two"],theme:{mode:n.l.LIGHT},isUserSelect:!0})})]})]})},207:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var i=s(5155),n=s(4230),l=s(8633);let r={src:"/_next/static/media/image.e8fa2e5d.svg",height:200,width:200,blurWidth:0,blurHeight:0},d=()=>{let e=[{title:"Title",link:"https://letscode-dev.github.io/",img:r,description:"School of Frontend Development, courses and mentoring",links:[{name:"Website",link:"https://letscode-dev.github.io/"},{name:"YouTube",link:"https://www.youtube.com/c/letscode-dev"}]}];return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"LayoutCard"}),(0,i.jsxs)("div",{style:{display:"flex",gap:"20px",flexDirection:"column"},children:[(0,i.jsx)("div",{children:(0,i.jsx)(n.A,{items:e,theme:{mode:n.l.LIGHT},themeLink:{mode:l.l.DARK_UNDERLINED}})}),(0,i.jsx)("div",{children:(0,i.jsx)(n.A,{items:e,theme:{mode:n.l.LIGHT},themeLink:{mode:l.l.DARK_UNDERLINED},isOptions:!0})})]})]})}},4612:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var i=s(5155),n=s(8633);let l=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Links"}),(0,i.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,i.jsx)(n.A,{href:"https://fonts.google.com/",children:"Default"}),(0,i.jsx)(n.A,{href:"https://fonts.google.com/",theme:{mode:n.l.BLUE_UNDERLINED_THIN},children:"Theme: BLUE_UNDERLINED_THIN"}),(0,i.jsx)(n.A,{href:"https://fonts.google.com/",theme:{mode:n.l.DARK_UNDERLINED},children:"Theme: DARK_UNDERLINED"})]})]})},3886:e=>{e.exports={button:"styles_button__qXaow"}},3915:e=>{e.exports={item:"styles_item__P3UF5","item--dark":"styles_item--dark__LQuUa"}},3606:e=>{e.exports={"item--blue-underlined-thin":"styles_item--blue-underlined-thin__zCtgI","item--dark-underlined":"styles_item--dark-underlined__ySLDd",item:"styles_item__2BIOQ"}},6601:e=>{e.exports={gridContainer:"styles_gridContainer__ua51r",gridItem:"styles_gridItem__kB7gY",logo:"styles_logo__OLHKE",gridContent:"styles_gridContent__AWaNL",header:"styles_header__BLHBa",description:"styles_description__9AWJ6","item--light":"styles_item--light__dFej3","item--dark":"styles_item--dark__nEO0U"}},2004:e=>{e.exports={container:"styles_container__l9iAL",button:"styles_button__lfq_w",icon:"styles_icon__EQUGb",link:"styles_link__4CFsz"}}},e=>{var t=t=>e(e.s=t);e.O(0,[173,381,425,441,517,358],()=>t(8779)),_N_E=e.O()}]);