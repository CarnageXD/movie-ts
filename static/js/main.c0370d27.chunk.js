(this["webpackJsonpmovie-ts"]=this["webpackJsonpmovie-ts"]||[]).push([[0],{34:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s=c(26),i=c.n(s),r=(c(34),c(1)),a=c(3),l=c(9),n=c.p+"static/media/logo.de09db8e.png",o=c(0),d=function(){return Object(o.jsx)("div",{className:"container mx-auto ",children:Object(o.jsxs)("div",{className:"flex justify-between items-center px-8 py-2 bg-gray-lightest border-t-2 rounded-t-lg border-gray-lightest flex-col md:flex-row",children:[Object(o.jsx)("div",{className:"pt-2 pb-2",children:Object(o.jsx)(l.b,{to:"/trends",children:Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("img",{className:"lg:w-12 lg:h-12 sm:w-8 sm:h-8 h-8 w-8 ",src:n,alt:"siteLogo"}),Object(o.jsx)("p",{className:"lg:text-5xl md:text-4xl sm:text-3xl text-3xl text-white",children:"Movielike"})]})})}),Object(o.jsx)("div",{className:"p-2 whitespace-nowrap",children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{className:" flex space-x-10 text-sm md:text-lg text-white font-body font-semibold md:font-bold md:uppercase ",children:[Object(o.jsx)(l.b,{to:"/trends",children:Object(o.jsx)("li",{className:"cursor-pointer hover:text-yellow-400",children:"Trends"})}),Object(o.jsx)(l.b,{to:"/search",children:Object(o.jsx)("li",{className:"cursor-pointer hover:text-yellow-400",children:"Search by"})}),Object(o.jsx)(l.b,{to:"/saved",children:Object(o.jsx)("li",{className:"cursor-pointer hover:text-yellow-400",children:"Watch later"})})]})})})]})})},b=c(5),j=c.n(b),x=c(11),u=c(2),A=c(28),h=c.n(A).a.create({baseURL:"https://api.themoviedb.org/3/"}),g=function(e){return h.get("/movie/".concat(e,"?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-U")).then((function(e){return e.data}))},m=function(e){return h.get("/movie/".concat(e,"/videos?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US")).then((function(e){return e.data.results[0]}))},v=function(e){return Object(x.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/movie/".concat(e,"/similar?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US"));case 2:return c=t.sent,t.abrupt("return",c.data.results);case 4:case"end":return t.stop()}}),t)})))()},O=function(e){return Object(x.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.get("/movie/popular?api_key=e5bf0d2a91e3d8acf07245cbd2950b9f&language=en-US&page=".concat(e));case 3:return c=t.sent,t.abrupt("return",c.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.error(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},p=function(e,t){return Object(x.a)(j.a.mark((function c(){var s;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,""===e){c.next=6;break}return c.next=4,h.get("/search/movie?api_key=4b8235a2493fa47038f86ca8c6056b47&language=en&query=".concat(e,"&page=").concat(t));case 4:return s=c.sent,c.abrupt("return",s.data);case 6:c.next=11;break;case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",console.error(c.t0));case 11:case"end":return c.stop()}}),c,null,[[0,8]])})))()},f=function(e){var t=e.text;return Object(o.jsx)("div",{className:"p-2 mt-4 mb-2 bg-yellow-400 text-black transition-all rounded-xl text-lg border-2 w-52 border-yellow-400 text-center cursor-pointer",children:Object(o.jsxs)("button",{className:"disabled:opacity-50 font-bold",disabled:!0,children:[t," \u2713"]})})},N=function(e){var t=e.text;return Object(o.jsx)("div",{className:"font-bold p-2 mt-4 mb-2 hover:bg-yellow-400 hover:text-black transition-all rounded-xl text-gray text-lg border-2 w-52 hover:border-yellow-400 text-center cursor-pointer",children:t})},w=c(29),y=function(){return Object(o.jsxs)(w.a,{speed:1,width:320,height:621,viewBox:"0 0 320 621",backgroundColor:"#0f1016",foregroundColor:"#171923",children:[Object(o.jsx)("rect",{x:"56",y:"430",rx:"10",ry:"10",width:"208",height:"48"}),Object(o.jsx)("rect",{x:"16",y:"-58",rx:"2",ry:"2",width:"288",height:"425"}),Object(o.jsx)("rect",{x:"20",y:"384",rx:"0",ry:"0",width:"280",height:"16"})]})},I=c.p+"static/media/clock.cbee6daf.png",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAHRCAIAAABMxFMRAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAACcQAAAnEAGUaVEZAAAGgGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDMgNzkuMTY0NTI3LCAyMDIwLzEwLzE1LTE3OjQ4OjMyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA3LTA3VDEzOjA3OjEwKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA3LTA3VDEzOjA3OjEwKzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNy0wN1QxMzowNzoxMCswMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxYjYzOTUzMy01OTI2LTFjNGYtYTEwYy1lOTdjNGNkY2Q5MjIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjMTA2YmJmOS0zYTI4LWFiNDMtODE5Ny04ZTkxYTZjOWUzMDMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozMmVhYTlhNS1kNTc5LWIzNDctYTJlNy1hZDQ5M2MyZTA4MTUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJBZG9iZSBSR0IgKDE5OTgpIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzJlYWE5YTUtZDU3OS1iMzQ3LWEyZTctYWQ0OTNjMmUwODE1IiBzdEV2dDp3aGVuPSIyMDIxLTA3LTA3VDEzOjA3OjEwKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFiNjM5NTMzLTU5MjYtMWM0Zi1hMTBjLWU5N2M0Y2RjZDkyMiIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wN1QxMzowNzoxMCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwv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",B=function(){var e,t,c=Object(r.useState)(null),s=Object(u.a)(c,2),i=s[0],n=s[1],d=Object(r.useState)({}),b=Object(u.a)(d,2),A=b[0],h=b[1],O=Object(r.useState)([]),p=Object(u.a)(O,2),w=p[0],B=p[1],G=Object(r.useState)(!1),E=Object(u.a)(G,2),D=E[0],Q=E[1],Z=Object(r.useState)(!1),L=Object(u.a)(Z,2),S=L[0],W=L[1],z=Object(r.useState)(!1),R=Object(u.a)(z,2),M=R[0],k=R[1],C=Object(r.useState)(!1),T=Object(u.a)(C,2),P=T[0],H=T[1],J=Object(a.f)().id;Object(r.useEffect)((function(){function e(){return(e=Object(x.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.t0=n,e.next=4,g(J);case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=h,e.next=9,m(J);case 9:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=B,e.next=14,v(J);case 14:e.t5=e.sent,(0,e.t4)(e.t5),k(!1);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[J]),Object(r.useEffect)((function(){var e=localStorage.getItem("saved"),t=(e?JSON.parse(e):[]).some((function(e){return e.id===(null===i||void 0===i?void 0:i.id)}));Q(t)}),[i]);return w.length>10&&(w.length=10),Object(o.jsxs)("div",{className:"text-gray leading-loose",children:[M?Object(o.jsx)(y,{}):Object(o.jsxs)("div",{className:"flex flex-col lg:flex-row ",children:[Object(o.jsxs)("div",{className:"flex-2 mr-0 lg:mr-10 flex flex-col items-center",children:[Object(o.jsxs)("div",{className:"relative",children:[(null===i||void 0===i?void 0:i.vote_average)?Object(o.jsx)("div",{className:"flex items-center justify-center absolute w-9 h-9 bg-yellow-400 rounded-full index-10 top-3 right-3 text-black font-semibold",children:null===i||void 0===i?void 0:i.vote_average}):null,Object(o.jsx)("img",{onLoad:function(){return H(!0)},className:"h-imgList w-imgList",src:(null===i||void 0===i?void 0:i.poster_path)&&P?"https://image.tmdb.org/t/p/w500/".concat(null===i||void 0===i?void 0:i.poster_path):Y,alt:"poster"})]}),Object(o.jsx)("div",{onClick:function(){return W(!0)},children:Object(o.jsx)(N,{text:"Watch trailer"})})]}),Object(o.jsxs)("div",{className:"flex flex-col flex-1 relative items-center lg:items-start",children:[Object(o.jsx)("div",{onClick:function(){return function(){var e=localStorage.getItem("saved"),t=e?JSON.parse(e):[];t.push(i),localStorage.setItem("saved",JSON.stringify(t)),Q(!0)}()},className:"relative lg:absolute top-0 right-0",children:D?Object(o.jsx)(f,{text:"Added "}):Object(o.jsx)(N,{text:"Add to watch later"})}),Object(o.jsx)("div",{className:"flex justify-between",children:Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("img",{height:16,width:16,src:I,alt:""}),Object(o.jsxs)("span",{className:"ml-1",children:[null===i||void 0===i?void 0:i.runtime," minutes"]})]})}),Object(o.jsxs)("div",{className:"mt-6 mb-6 flex flex-col items-center lg:items-start",children:[Object(o.jsx)("span",{children:null===i||void 0===i||null===(e=i.release_date)||void 0===e?void 0:e.slice(0,4)}),Object(o.jsx)("h2",{className:"text-5xl text-white",children:null===i||void 0===i?void 0:i.original_title}),Object(o.jsx)("p",{className:"italic",children:null===i||void 0===i?void 0:i.tagline})]}),Object(o.jsx)("ul",{className:"flex flex-wrap justify-center md:justify-start mb-4 text-xl md:text-2xl list-disc lg:ml-5 ml-12",children:null===i||void 0===i||null===(t=i.genres)||void 0===t?void 0:t.map((function(e,t){return Object(o.jsx)("li",{className:"mr-10",children:e.name},t)}))}),Object(o.jsx)("div",{className:"mb-4 text-xl leading-loose",children:Object(o.jsxs)("div",{children:["Status: ",null===i||void 0===i?void 0:i.status]})}),Object(o.jsx)("div",{className:"p-3 bg-gray-light",children:null===i||void 0===i?void 0:i.overview}),Object(o.jsx)("div",{children:w.length>0?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h2",{className:"text-3xl mt-8",children:["Similar to ",null===i||void 0===i?void 0:i.original_title,": "]}),Object(o.jsx)("div",{className:"flex flex-col md:flex-row md:flex-wrap md:justify-between mt-4",children:w.map((function(e){return Object(o.jsxs)("div",{className:"flex flex-col items-center mb-4",children:[Object(o.jsx)("div",{children:Object(o.jsx)(l.b,{to:"./".concat(e.id),children:Object(o.jsx)("img",{className:"h-64 w-48",src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"poster"})})}),Object(o.jsx)("h2",{className:"w-48 text-xl text-white p-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-center",children:e.original_title})]},e.id)}))})]}):null})]})]}),S?Object(o.jsx)("div",{onClick:function(){return W(!1)},className:"fixed inset-1/2 transform -translate-y-1/2 transform -translate-x-1/2 w-full h-full flex justify-center items-center bg-gray-lightest bg-opacity-95",children:Object(o.jsx)("iframe",{className:"w-9/12 h-3/5",src:"https://www.youtube.com/embed/".concat(A.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):null]})},G=function(e){var t=e.poster,c=e.title,s=e.description,i=e.id,r=e.score,a=e.isLoading;return Object(o.jsx)(o.Fragment,{children:a?Object(o.jsx)(y,{}):Object(o.jsx)("div",{className:"w-imgList py-10 relative mt-8",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"relative",children:r?Object(o.jsx)("div",{className:"flex items-center justify-center absolute w-9 h-9 bg-yellow-400 rounded-full index-10 top-3 right-3 text-black font-semibold",children:(r-1).toPrecision(2)}):null}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:t?Object(o.jsx)("img",{className:"h-imgList w-imgList",src:"https://image.tmdb.org/t/p/w500".concat(t),alt:"poster"}):Object(o.jsx)("div",{className:"h-imgList w-imgList border-2 text-gray flex items-center justify-center",children:Object(o.jsx)("h2",{children:"Poster in unavailable"})})}),Object(o.jsx)("div",{className:"leading-loose text-gray-200 h-imgList w-imgList p-3 absolute top-10 left-0 opacity-0 hover:opacity-100 hover:bg-gray-lightest hover:bg-opacity-80 transition-all overflow-hidden overflow-ellipsis flex flex-col items-center justify-center text-sm",children:s})]}),Object(o.jsxs)("div",{className:"flex items-center flex-col",children:[Object(o.jsx)("h2",{className:"w-full text-xl text-white p-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-center",children:c}),Object(o.jsx)(l.b,{to:"/details/".concat(i),children:Object(o.jsx)(N,{text:"More details"})})]})]})})})},E=function(e){var t=e.movies,c=e.isLoading;return Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)(G,{isLoading:c,id:e.id,poster:e.poster_path,title:e.original_title,release:e.release_date,score:e.vote_average,description:e.overview},e.id)}))})},D=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(!1),a=Object(u.a)(i,2),l=a[0],n=a[1];return Object(r.useEffect)((function(){n(!0);var e=localStorage.getItem("saved"),t=e?JSON.parse(e):[];s(t),n(!1)}),[]),Object(o.jsx)("div",{children:c.length>0?Object(o.jsx)("div",{className:"flex justify-between flex-col items-center md:items-start md:flex-row md:flex-wrap",children:Object(o.jsx)(E,{isLoading:l,movies:c})}):Object(o.jsx)("h2",{className:"text-xl text-gray",children:"There no saved movies by now"})})},Q=function(e){var t=e.currentPage,c=e.onPageChanged,s=e.totalPagesCount,i=[];if(s>10)if(t+5>s)for(var r=s-5;r<=s;r++)i.push(r);else if(t>5)for(var a=t-4;a<=t+5;a++)i.push(a);else for(var l=1;l<10;l++)i.push(l);else for(var n=1;n<=s;n++)i.push(n);return Object(o.jsxs)("div",{className:"flex text-gray items-center justify-around mt-12",children:[t>5?Object(o.jsx)("div",{onClick:function(){return c(1)},className:"hover:text-yellow-400 transition-all cursor-pointer",children:"\u0412 \u043d\u0430\u0447\u0430\u043b\u043e"}):null,i.map((function(e){return Object(o.jsx)("div",{onClick:function(){return c(e)},className:"w-12 h-12 border-2 cursor-pointer rounded-full flex items-center justify-center ".concat(e===t?"border-yellow-400":""," hover:border-yellow-400 transition-all"),children:e},e)})),t!==s?Object(o.jsx)("div",{onClick:function(){return c(s)},className:"hover:text-yellow-400 transition-all cursor-pointer",children:"\u0412 \u043a\u043e\u043d\u0435\u0446"}):null]})},Z=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),a=Object(u.a)(i,2),l=a[0],n=a[1],d=Object(r.useState)(1),b=Object(u.a)(d,2),A=b[0],h=b[1],g=Object(r.useState)(1),m=Object(u.a)(g,2),v=m[0],O=m[1],f=Object(r.useState)(!1),N=Object(u.a)(f,2),w=N[0],y=N[1];Object(r.useEffect)((function(){function e(){return(e=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,p(l,A);case 3:(t=e.sent)?(s(t.results),O(t.total_pages)):s([]),y(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[A,l]);return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"w-full rounded-lg bg-gray-light flex items-center mb-10",children:[Object(o.jsx)("input",{onChange:function(e){n(e.target.value)},className:"w-full border-0 p-3 bg-transparent outline-none text-gray ",placeholder:"Search something, for example 'The Shawshank Redemption'..."}),Object(o.jsx)("img",{className:"pr-4 cursor-pointer",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgBnZPJbcJAFIZnDBLHkCMSSLgDOohTQejApoK0QAlJBYEKCBXgdEAHRl7kY5ybLW/5f2sGESuWLZ40nsXvffO2keJGPM+bTiYTu6qqNbYrjClGIqV0DcP4nM1me9ESqRdhGK7quj5AeSm6xR2NRhuALvrA4CeOYxqdlPEZY5Pn+eN8PpcwMLkHnEZWURQnevoHGwSBBw9q3/d3XVfzEq0XRdFB3Lju8JA/RY8QAt1vpW/pEGwuxuPxtg/A2BGKTuQVwGyLNE2PYoAA4KrlSgOahJimmQwBINGJmh80oDlQlRgCWCpPfhoAm4QLlMcZCHjhjJw1lTDQde/qx2ufF8w8bl6r7VcDWCwWLmaOKZukC0JjXKLr/6a7sWllGtFYx4d5V5blkQlTZyy1pWHsSoTwTMj1LRCC9t3i0djif0lgyHBtQjVEtrWUNw6UnpQ3F4xzlmV7lrrlrSvFHUIIQvzgy/wFFSbLL+0Hs0cAAAAASUVORK5CYII=",alt:"searchButton"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"flex justify-between flex-col items-center md:items-start md:flex-row md:flex-wrap",children:Object(o.jsx)(E,{isLoading:w,movies:c})}),w||0===c.length?null:Object(o.jsx)("div",{children:v>1?Object(o.jsx)(Q,{currentPage:A,onPageChanged:function(e){h(e)},totalPagesCount:v}):null})]})]})},L=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)([]),a=Object(u.a)(i,2),l=a[0],n=a[1],d=Object(r.useState)(1),b=Object(u.a)(d,2),A=b[0],h=b[1],g=Object(r.useState)(1),m=Object(u.a)(g,2),v=m[0],p=m[1];Object(r.useEffect)((function(){function e(){return(e=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,O(A);case 3:(t=e.sent)&&(p(t.total_pages),n(t.results)),s(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[A]);return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"flex justify-between flex-col items-center md:items-start md:flex-row md:flex-wrap",children:Object(o.jsx)(E,{isLoading:c,movies:l})}),Object(o.jsx)("div",{children:c?null:Object(o.jsx)(Q,{currentPage:A,onPageChanged:function(e){h(e)},totalPagesCount:v})})]})})},S=function(){return Object(o.jsx)("div",{className:"bg-gray-dark font-body ",children:Object(o.jsxs)("div",{className:"p-10",children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"container mx-auto p-10 bg-gray-darkest border-b-2 rounded-b-lg border-gray-darkest ",children:Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{exact:!0,path:"/",children:Object(o.jsx)(L,{})}),Object(o.jsx)(a.a,{path:"/trends",children:Object(o.jsx)(L,{})}),Object(o.jsx)(a.a,{path:"/search",children:Object(o.jsx)(Z,{})}),Object(o.jsx)(a.a,{path:"/details/:id",children:Object(o.jsx)(B,{})}),Object(o.jsx)(a.a,{path:"/saved",children:Object(o.jsx)(D,{})})]})})]})})};i.a.render(Object(o.jsx)(l.a,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.c0370d27.chunk.js.map