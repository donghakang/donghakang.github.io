(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{41293:function(t,n,e){"use strict";e.d(n,{n:function(){return i},k:function(){return r}});var i={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.05}}},r={hidden:{y:-20,opacity:0},visible:{y:0,opacity:1}}},70017:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return b},default:function(){return w}});var i=e(41664);var r=(0,e(70917).iv)("",""),a={name:"1781dh2",styles:"list-style-type:none;display:flex;flex-wrap:wrap;padding:0;margin:0.25em;flex:1 0 auto;justify-content:space-evenly"},l={name:"tfebzr",styles:"background-color:orange;color:white;text-decoration:none;padding:0.75em;margin:0.5em 0.875em;font-size:0.875rem;border-radius:2em;position:relative;display:inline-block;.badge{position:absolute;top:-5px;right:-5px;width:20px;height:20px;font-size:0.875em;border-radius:50%;background:red;color:white;display:flex;justify-content:center;align-items:center;margin:0;padding:0;}"},s={name:"1xclg2i",styles:"margin:0;padding:0"},o={name:"1c0w6m7",styles:"list-style-type:none;margin:1em;padding:0"},c={name:"1oaop5e",styles:'margin:1em 0;a{font-family:"Inter",sans-serif;font-weight:800;letter-spacing:-0.3;line-height:0.8;font-size:calc(1.5rem + 1vw);}'},d=e(4453),u=e(35944);var f=function(t){var n=function(t){var n={all:t.length},e=t.map((function(t){return t.frontMatter.tag}));return e.forEach((function(t){t.forEach((function(t){n[t]?n[t]+=1:n[t]=1}))})),n}(t.blogs);return(0,u.tZ)("nav",{css:r,children:(0,u.tZ)("ul",{css:a,children:Object.keys(n).map((function(t){return(0,u.tZ)(i.default,{href:"/blog?tag=".concat(t),passHref:!0,children:(0,u.BX)(d.E.li,{initial:{scale:0},animate:{scale:1},transition:{delay:1.3*Math.random()},css:l,children:[(0,u.tZ)("span",{children:t}),(0,u.tZ)("div",{className:"badge",children:(0,u.tZ)("span",{children:n[t]})})]})},t)}))})})},g=e(41293),h=function(t){var n=t.blog;return(0,u.tZ)(i.default,{href:"blog/".concat(n.slug),children:(0,u.tZ)("a",{children:n.frontMatter.title})})},m=function(t){var n=t.blogs;return(0,u.tZ)("main",{css:s,children:(0,u.tZ)(d.E.ul,{variants:g.n,initial:"hidden",animate:"visible",css:o,children:n.sort((function(t,n){return Date.parse(n.frontMatter.date)-Date.parse(t.frontMatter.date)})).map((function(t){return(0,u.tZ)(d.E.li,{variants:g.k,css:c,children:(0,u.tZ)(h,{blog:t})},t.frontMatter.title)}))})})},p=e(11163);var b=!0,v={name:"11ikxj0",styles:"margin:auto;max-width:var(--mobile-view)"},y={name:"11ikxj0",styles:"margin:auto;max-width:var(--mobile-view)"},w=function(t){var n=t.blogs,e=(0,p.useRouter)().query.tag;return(0,u.tZ)(u.HY,{children:e&&"all"!==e?(0,u.BX)("div",{css:v,children:[(0,u.tZ)(f,{blogs:n}),(0,u.tZ)(m,{blogs:n.filter((function(t){return t.frontMatter.tag.includes(e)}))})]}):(0,u.BX)("div",{css:y,children:[(0,u.tZ)(f,{blogs:n}),(0,u.tZ)(m,{blogs:n})]})})}},15423:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e(70017)}])}},function(t){t.O(0,[243,774,888,179],(function(){return n=15423,t(t.s=n);var n}));var n=t.O();_N_E=n}]);