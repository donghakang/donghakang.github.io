(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{3675:function(e,i,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/playlist/[id]",function(){return c(9506)}])},6224:function(e,i,c){"use strict";c.d(i,{Z:function(){return v}});var l=c(5893),r=c(7294),s=c(4184),a=c.n(s),t=c(89),n=c(5675),o=c.n(n),_=c(3750),d=c(7735),p=c(7148),u=c.n(p),y=c(833),m=c.n(y),x={Circle:function(e){let{color:i}=e;return(0,l.jsxs)("div",{className:m().circles,children:[(0,l.jsx)("div",{className:a()(m().stick,m().one),style:{backgroundColor:i}}),(0,l.jsx)("div",{className:a()(m().stick,m().two),style:{backgroundColor:i}}),(0,l.jsx)("div",{className:a()(m().stick,m().three),style:{backgroundColor:i}}),(0,l.jsx)("div",{className:a()(m().stick,m().four),style:{backgroundColor:i}}),(0,l.jsx)("div",{className:a()(m().stick,m().five),style:{backgroundColor:i}}),(0,l.jsx)("div",{className:a()(m().stick,m().six),style:{backgroundColor:i}})]})}};function h(e){let{src:i,alt:c,background:r,opacity:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.E.div,{className:a()(u().PlaylistDetailBackground),children:(0,l.jsx)(o(),{src:i,alt:c,objectFit:"cover",fill:!0})}),(0,l.jsx)(t.E.div,{style:{background:r,position:"fixed",opacity:.4,top:0,left:0,right:0,bottom:0},initial:{opacity:0},animate:{opacity:s},transition:{duration:.2,delay:.4}})]})}var k=c(1664),j=c.n(k);function f(e){let{setIsLoading:i}=e,[c,s]=(0,r.useState)([!1,!1]);return(0,r.useEffect)(()=>{c[0]&&c[1]&&i(!1)},[c,i]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("video",{className:a()(u().BackgroundVideo),muted:!0,autoPlay:!0,loop:!0,onLoadedData:()=>s(e=>[!0,e[1]]),children:(0,l.jsx)("source",{src:"/assets/mov/play.mov",type:"video/mp4"})}),(0,l.jsx)("video",{className:a()(u().BackgroundVideo2),muted:!0,autoPlay:!0,loop:!0,onLoadedData:()=>s(e=>[e[0],!0]),children:(0,l.jsx)("source",{src:"/assets/mov/play2.mov",type:"video/mp4"})})]})}var v={List:function(e){let{list:i}=e,[c,s]=(0,r.useState)(!1);return(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:a()(u().PlaylistContainer),children:c?(0,l.jsx)("div",{children:"Loading..."}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{setIsLoading:s}),(0,l.jsx)("div",{className:a()(u().DetailLinkWrapper),children:i.map(e=>(0,l.jsx)(j(),{href:"playlist/".concat(e.replace("Dongha Radio ","")),children:(0,l.jsx)("span",{className:a()(u().DetailLink),children:e})},e))})]})})})},Detail:function(e){let{content:i}=e,c=JSON.parse(i);return(0,l.jsxs)("div",{className:a()(u().PlaylistDetail),children:[(0,l.jsx)(h,{src:"/assets/png/playlist/".concat(c.name.replace("Dongha Radio ",""),".png"),alt:c.name,background:c.theme.background,opacity:c.theme.opacity}),(0,l.jsx)(t.E.div,{className:a()(u().PlaylistItemWrapper),initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:1},style:{color:c.theme.color},children:c.tracks.map(e=>(0,l.jsxs)("div",{className:a()(u().TrackWrapper),children:[(0,l.jsxs)("div",{className:a()(u().song),children:[e.track,(0,l.jsx)("div",{className:a()(u().CircleWrapper),children:(0,l.jsx)(x.Circle,{color:c.theme.color})}),e.artists.join(" / ")]}),(0,l.jsx)("span",{className:a()(u().duration),children:e.duration})]},e.track))}),(0,l.jsxs)(t.E.div,{className:a()(u().LinkWrapper),initial:{opacity:0},animate:{opacity:1},transition:{duration:.2,delay:1},children:[c.spotify_url&&(0,l.jsx)("a",{className:a()(u().link),style:{color:c.theme.color},href:c.spotify_url,children:(0,l.jsx)(_.SLO,{size:40})}),c.apple_url&&(0,l.jsx)("a",{className:a()(u().link),style:{color:c.theme.color},href:c.apple_url,children:(0,l.jsx)(d.Wr0,{size:40})}),c.youtube_url&&(0,l.jsx)("a",{className:a()(u().link),style:{color:c.theme.color},href:c.youtube_url,children:(0,l.jsx)(d.ory,{size:40})})]})]})}}},9506:function(e,i,c){"use strict";c.r(i),c.d(i,{__N_SSG:function(){return t}});var l=c(5893),r=c(6224),s=c(9008),a=c.n(s),t=!0;i.default=function(e){let{content:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a(),{children:[(0,l.jsx)("title",{children:"P L A Y"}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),i&&(0,l.jsx)(r.Z.Detail,{content:i})]})}},7148:function(e){e.exports={PlaylistContainer:"playlist_PlaylistContainer__VCdmR",BackgroundVideo:"playlist_BackgroundVideo__U3NET",BackgroundVideo2:"playlist_BackgroundVideo2__VKeG8",DetailLinkWrapper:"playlist_DetailLinkWrapper__tpFeE",DetailLink:"playlist_DetailLink__0wrhM",PlaylistDetail:"playlist_PlaylistDetail__a4oxW",PlaylistDetailBackground:"playlist_PlaylistDetailBackground__wz884",PlaylistItemWrapper:"playlist_PlaylistItemWrapper__hRwCG",TrackWrapper:"playlist_TrackWrapper__FffpO",song:"playlist_song__UFU36",CircleWrapper:"playlist_CircleWrapper__CbNqI",LinkWrapper:"playlist_LinkWrapper__H7mha",link:"playlist_link__Hfzqk"}},833:function(e){e.exports={circles:"circles_circles__geRrU",rotating:"circles_rotating__YYEL_",stick:"circles_stick__eB87x",one:"circles_one__PidPq",two:"circles_two__x1aNY",three:"circles_three__jBMvU",four:"circles_four__0MjIH",five:"circles_five__TIIpc",six:"circles_six__xixEl",rotatingCircles:"circles_rotatingCircles__Y_2Ej",rotation:"circles_rotation__XgNyH",translation:"circles_translation__zsoVE","circle-1":"circles_circle-1__RJn9_","circle-2":"circles_circle-2__FA4aj","circle-3":"circles_circle-3__36SYA","circle-4":"circles_circle-4__bca65","circle-5":"circles_circle-5__WdaNS","circle-6":"circles_circle-6__Eveyr","circle-7":"circles_circle-7__KA_d0","circle-8":"circles_circle-8__rJf9D","circle-9":"circles_circle-9__RqXs3","circle-10":"circles_circle-10__Ol2Eq","circle-11":"circles_circle-11__4Hf5p","circle-12":"circles_circle-12__7Ak6s",walkingCircles:"circles_walkingCircles__PSlhc",carousel:"circles_carousel__ZAxF_"}}},function(e){e.O(0,[415,13,698,892,774,888,179],function(){return e(e.s=3675)}),_N_E=e.O()}]);