(this.webpackJsonpnetflixclone=this.webpackJsonpnetflixclone||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){},61:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(28),c=n.n(r),i=(n(39),n(13)),o=n(2),l=n(5),u=n.n(l),d=n(9),j=n(11),f=(n(41),n(29)),h=n.n(f).a.create({baseURL:"https://api.themoviedb.org/3"}),b="4fac81442e49a0849060733bebb2ac8a",m=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={getHomeList:function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(b));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,m("/trending/tv/week?language=pt-BR&api_key=".concat(b));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,m("/tv/top_rated?&language=pt-BR&api_key=".concat(b));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",items:e.t4},e.next=14,m("/discover/tv?with_genres=16&language=pt-BR&api_key=".concat(b));case 14:return e.t6=e.sent,e.t7={slug:"animation",title:"Anima\xe7\xe3o",items:e.t6},e.next=18,m("/discover/tv?with_genres=10759&language=pt-BR&api_key=".concat(b));case 18:return e.t8=e.sent,e.t9={slug:"adventure",title:"A\xe7\xe3o e Aventura",items:e.t8},e.next=22,m("/discover/tv?with_genres=10762&language=pt-BR&api_key=".concat(b));case 22:return e.t10=e.sent,e.t11={slug:"kids",title:"Infantil",items:e.t10},e.next=26,m("/discover/tv?with_genres=10764&language=pt-BR&api_key=".concat(b));case 26:return e.t12=e.sent,e.t13={slug:"reality",title:"Reality",items:e.t12},e.next=30,m("/discover/tv?with_genres=10765&language=pt-BR&api_key=".concat(b));case 30:return e.t14=e.sent,e.t15={slug:"scifi&fantasy",title:"Sci-Fi & Fantasia",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(d.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={},!t){e.next=13;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,m("/movie/".concat(t,"?language=pt-BR&api_key=").concat(b));case 7:return a=e.sent,e.abrupt("break",13);case 9:return e.next=11,m("/tv/".concat(t,"?language=pt-BR&api_key=").concat(b));case 11:return a=e.sent,e.abrupt("break",13);case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},v=(n(61),n(0)),g=function(e){var t=e.title,n=e.items,s=Object(a.useState)(-400),r=Object(j.a)(s,2),c=r[0],o=r[1];return Object(v.jsxs)("div",{className:"movieRow",children:[Object(v.jsx)("div",{className:"movieRow--left",onClick:function(){var e=c+Math.round(window.innerWidth/1.5);e>0&&(e=0),o(e)},children:Object(v.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/60/ffffff/chevron-left.png"})}),Object(v.jsx)("div",{className:"movieRow--right",onClick:function(){var e=c-Math.round(window.innerWidth/1.5),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),o(e)},children:Object(v.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/60/ffffff/chevron-right.png"})}),Object(v.jsxs)("h2",{children:[t," "]}),Object(v.jsx)("div",{className:"movieRow--listarea",children:Object(v.jsx)("div",{className:"movieRow--list",style:{marginLeft:c,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(v.jsx)(i.b,{to:"info-page/".concat(e.id),children:Object(v.jsx)("div",{className:"movieRow--item",children:Object(v.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.orignal_title})},t)})}))})})]})},x=(n(68),function(e){var t=e.black;return Object(v.jsxs)("header",{className:t?"black":"",children:[Object(v.jsx)("div",{className:"header--logo",children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"netflix"})})}),Object(v.jsx)("div",{className:"header--user",children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("img",{src:"https://yt3.ggpht.com/a/AATXAJzkjyPyw1fsZbqCc95v6GWiUJTgkS6ZU2d8XwN5=s900-c-k-c0xffffffff-no-rj-mo",alt:""})})})]})}),O=(n(69),function(e){var t=e.item,n=new Date(t.first_air_date),a=[];for(var s in t.genres)a.push(t.genres[s].name);var r=t.overview;return r.length>200&&(r=r.substring(0,200)+"..."),Object(v.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(v.jsx)("div",{className:"featured--vertical",children:Object(v.jsxs)("div",{className:"featured--horizontal",children:[Object(v.jsx)("div",{className:"featured--name",children:t.original_name}),Object(v.jsxs)("div",{className:"featured--info",children:[Object(v.jsxs)("div",{className:"featured--points",children:[t.vote_average," pontos"]}),Object(v.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(v.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]}),Object(v.jsx)("div",{className:"featured--description",children:r}),Object(v.jsxs)("div",{className:"featured--buttons",children:[Object(v.jsx)("a",{href:"/watch/".concat(t.id),className:"featured--watchbutton",children:" \u25b6 Assistir"}),Object(v.jsx)("a",{href:"/list/add/".concat(t.id),className:"featured--mylistbutton",children:" + Minha Lista"})]}),Object(v.jsxs)("div",{className:"featured--genres",children:[Object(v.jsx)("strong",{children:"G\xeaneros:"}),a.join(", ")]})]})]})})})}),w=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(null),c=Object(j.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(!1),f=Object(j.a)(l,2),h=f[0],b=f[1];return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getHomeList();case 2:return t=e.sent,s(t),n=t.filter((function(e){return"originals"===e.slug})),a=Math.floor(Math.random()*(n[0].items.results.length-1)),r=n[0].items.results[a],e.next=9,p.getMovieInfo(r.id,"tv");case 9:c=e.sent,o(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=function(){window.scrollY>15?b(!0):b(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(v.jsxs)("div",{className:"page",children:[Object(v.jsx)(x,{black:h}),i&&Object(v.jsx)(O,{item:i}),Object(v.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(v.jsx)(g,{title:e.title,items:e.items},t)}))}),n.length<=0&&Object(v.jsx)("div",{className:"loading",children:Object(v.jsx)("img",{src:"https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2000,c_limit/Netflix_LoadTime.gif",alt:"loadig.."})})]})},_=n(31),k=n(32),y=n(34),N=n(33),R=(n(70),function(e){var t=e.serie,n=new Date(t.first_air_date),a=[];for(var s in t.genres)a.push(t.genres[s].name);var r=[];for(var c in t.created_by)r.push(t.created_by[c].name);return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"info--title",children:Object(v.jsx)("h1",{children:t.name})}),Object(v.jsxs)("section",{className:"info--group",children:[Object(v.jsxs)("div",{className:"info--left",children:[Object(v.jsx)("div",{className:"info--points",children:Object(v.jsxs)("h3",{children:[t.vote_average," pontos"]})}),Object(v.jsxs)("div",{className:"info--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]}),Object(v.jsx)("div",{className:"info--year",children:n.getFullYear()}),Object(v.jsx)("div",{className:"info--description",children:Object(v.jsx)("p",{children:t.overview})})]}),Object(v.jsxs)("div",{className:"info--right",children:[Object(v.jsxs)("div",{className:"info--genres",children:[Object(v.jsx)("strong",{children:"G\xeaneros: "}),a.join(", ")]}),Object(v.jsxs)("div",{className:"info--creators",children:[Object(v.jsx)("strong",{children:"Criado por: "}),r.join(", ")]})]})]})]})}),B=(n(71),function(e){Object(y.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(_.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={serie:[],trailer:[]},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,s=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.pathname,n=t.split("/"),a=n[2],e.next=5,h.get("/tv/".concat(a,"/videos?api_key=").concat(b)).then((function(e){var t=e;console.log(t.data.results),s.setState({trailer:t.data.results[0].key})})).catch((function(e){console.log(e)}));case 5:return e.next=7,h.get("/tv/".concat(a,"?language=pt-BR&api_key=").concat(b)).then((function(e){var t=e;s.setState({serie:t.data})})).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.serie,t=this.state.trailer;return Object(v.jsxs)("div",{children:[Object(v.jsx)(x,{black:!0}),Object(v.jsx)("div",{className:"info--video",children:Object(v.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t,"?showinfo=0&rel=0&modestbranding=1&autoplay=1"),frameborder:"0",allow:"accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),Object(v.jsx)(R,{serie:e})]})}}]),n}(a.Component)),A=function(){return Object(v.jsx)(i.a,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(v.jsx)(o.a,{path:"/info-page/",component:B})]})})},S=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(A,{})})};c.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.c2882f06.chunk.js.map