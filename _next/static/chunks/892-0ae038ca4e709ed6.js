(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let i=r(8754),n=r(1757),o=n._(r(7294)),l=r(3935),a=i._(r(2636)),s=r(5471),u=r(3735),c=r(3341);r(4210);let d=r(9955),f=i._(r(7746)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e,t,r,i,n,o){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function m(e){let[t,r]=o.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:a,decoding:s,className:u,style:c,fetchPriority:d,placeholder:f,loading:g,unoptimized:h,fill:v,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:S,onLoad:C,onError:_,...E}=e;return o.default.createElement("img",{...E,...m(d),loading:g,width:a,height:l,decoding:s,"data-nimg":v?"fill":"1",className:u,style:c,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&p(e,f,y,b,w,h))},[r,f,y,b,w,_,h,t]),onLoad:e=>{let t=e.currentTarget;p(t,f,y,b,w,h)},onError:e=>{S(!0),"empty"!==f&&w(!0),_&&_(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&l.preload?((0,l.preload)(r.src,i),null):o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...i}))}let y=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(d.RouterContext),i=(0,o.useContext)(c.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=g||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:a}=e,p=(0,o.useRef)(l);(0,o.useEffect)(()=>{p.current=l},[l]);let m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let[y,b]=(0,o.useState)(!1),[w,S]=(0,o.useState)(!1),{props:C,meta:_}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:y,showAltText:w});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...C,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:p,onLoadingCompleteRef:m,setBlurComplete:b,setShowAltText:S,ref:t}),_.priority?o.default.createElement(v,{isAppRouter:!r,imgAttributes:C}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(4210);let i=r(7757),n=r(3735);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:g=!1,loading:p,className:m,quality:h,width:v,height:y,fill:b=!1,style:w,onLoad:S,onLoadingComplete:C,placeholder:_="empty",blurDataURL:E,fetchPriority:j,layout:O,objectFit:z,objectPosition:P,lazyBoundary:x,lazyRoot:k,...I}=e,{imgConf:R,showAltText:M,blurComplete:N,defaultLoader:A}=t,D=R||n.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t}}let B=I.loader||A;delete I.loader,delete I.srcSet;let G="__next_img_default"in B;if(G){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...i}=t;return e(i)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!d&&(d=t)}let L="",W=l(v),F=l(y);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,E=E||e.blurDataURL,L=e.src,!b){if(W||F){if(W&&!F){let t=W/e.width;F=Math.round(e.height*t)}else if(!W&&F){let t=F/e.height;W=Math.round(e.width*t)}}else W=e.width,F=e.height}}let U=!g&&("lazy"===p||void 0===p);(!(c="string"==typeof c?c:L)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,U=!1),a.unoptimized&&(f=!0),G&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),g&&(j="high");let T=l(h),V=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:P}:{},M?{}:{color:"transparent"},w),q=N||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:W,heightInt:F,blurWidth:s,blurHeight:u,blurDataURL:E||"",objectFit:V.objectFit})+'")':'url("'+_+'")',J=q?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Y=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:l,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,l),c=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,i)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[c]})}}({config:a,src:c,unoptimized:f,width:W,quality:T,sizes:d,loader:B}),H={...I,loading:U?"lazy":p,fetchPriority:j,width:W,height:F,decoding:"async",className:m,style:{...V,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},$={unoptimized:f,priority:g,placeholder:_,fill:b};return{props:H,meta:$}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:l}=e,a=i?40*i:t,s=n?40*n:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},unstable_getImgProps:function(){return s}});let i=r(8754),n=r(5471),o=r(4210),l=r(8872),a=i._(r(7746)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=l.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},5675:function(e,t,r){e.exports=r(2555)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var i=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(n),l=function(){return(l=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r};function s(e){return function(t){return i.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return i.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var r,n=e.attr,o=e.size,s=e.title,u=a(e,["attr","size","title"]),c=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&i.createElement("title",null,s),e.children)};return void 0!==o?i.createElement(o.Consumer,null,function(e){return t(e)}):t(n)}}}]);