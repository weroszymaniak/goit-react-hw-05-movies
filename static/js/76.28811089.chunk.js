"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{713:function(t,e,n){n.d(e,{Bt:function(){return l},Ch:function(){return p},t8:function(){return o},wr:function(){return i},y:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="b45693f974135662667746d6804bf1da",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(439),a=n(791),c=n(689),u=n(713),s=n(639),i="Cast_list__GlWio",o="Cast_item__a0CDL",p="Cast_img__-isbW",f=n(184),l=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],l=e[1],h=(0,a.useState)(!1),d=(0,r.Z)(h,2),v=d[0],m=d[1],g=(0,c.UO)().id;return(0,a.useEffect)((function(){!function(){try{m(!0),(0,u.y)(g).then((function(t){l(t)})),console.log((0,u.y)(g))}catch(t){console.log("error")}finally{m(!1)}}()}),[g]),(0,f.jsxs)("div",{children:[v&&(0,f.jsx)(s.Z,{}),(0,f.jsx)("ul",{className:i,children:n.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.name,c=t.character;return(0,f.jsxs)("li",{className:o,children:[(0,f.jsx)("img",{className:p,width:"200px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://placehold.co/200x300?text=Photo+not+available",alt:r}),(0,f.jsx)("p",{children:a}),(0,f.jsxs)("p",{children:["Character: ",c]})]},e)}))})]})}}}]);
//# sourceMappingURL=76.28811089.chunk.js.map