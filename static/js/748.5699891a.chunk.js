"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[748],{5748:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(885),s=r(2791),i=r(501),a=r(8438),u={coverBox:"markup_coverBox__qfhcp",input:"markup_input__Bl2Kj",button:"markup_button__0FzpD"},c=r(184),o=function(e){var t=e.submit,r=e.search;return(0,c.jsx)("form",{onSubmit:t,method:"get",children:(0,c.jsxs)("label",{className:u.coverEl,htmlFor:"searchingFilms",children:[(0,c.jsx)("input",{className:u.input,type:"search",defaultValue:r,id:"searchingFilms",placeholder:"Type movie name",name:"movie",required:!0}),(0,c.jsx)("button",{className:u.button,type:"submit",children:"Search"})]})})},l="style_filmBox__soqdr",m=function(e){var t=e.movieArr.map((function(e){var t=e.id,r=e.title;return(0,c.jsx)(i.rU,{to:"/movies/".concat(t),children:(0,c.jsx)("li",{children:r})},t)}));return(0,c.jsx)("div",{className:l,children:t})},h="style_block__o8Rzq",v=function(){var e=(0,s.useState)([]),t=(0,n.Z)(e,2),r=t[0],u=t[1],l=(0,s.useState)(""),v=(0,n.Z)(l,2),_=v[0],d=v[1],f=(0,i.lr)(),p=(0,n.Z)(f,2),x=p[0],b=p[1],j=x.get("movie");(0,s.useEffect)((function(){0!==j&&(0,a.dV)(_).then((function(e){var t=e.results;u(t)}))}),[_,j]);return(0,c.jsxs)("div",{className:h,children:[(0,c.jsx)(o,{submit:function(e){e.preventDefault();var t=e.currentTarget,r=t.elements.movie.value;d(r),b({name:r}),t.reset()},state:_,search:j}),(0,c.jsx)(m,{movieArr:r})]})}}}]);
//# sourceMappingURL=748.5699891a.chunk.js.map