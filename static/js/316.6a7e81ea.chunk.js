"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[316],{3316:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(8152),c=a(3504),s=a(2791),i=a(8438),r={coverBox:"style_coverBox__mmVVG",block:"style_block__o8Rzq",input:"style_input__AtXTl",filmBox:"style_filmBox__bSMR7",vPlayer:"style_vPlayer__9PaVE",button:"style_button__WGHmj"},l=a(184),o=function(){var e=(0,s.useState)([]),t=(0,n.Z)(e,2),a=t[0],o=t[1],u=(0,s.useState)(""),m=(0,n.Z)(u,2),_=m[0],v=m[1];(0,s.useEffect)((function(){0!==_&&(0,i.dV)(_).then((function(e){var t=e.results;o(t)}))}),[_]);document.addEventListener("submit",(function(e){window.history.replaceState("search/movie?api_key=".concat("0eea8bea59a913a72c55562f66c1e72e","&query=").concat(_,"&page=1&include_adult=false"),"","/?search=".concat(_)),e.preventDefault()}));var d=a.map((function(e){var t=e.id,a=e.title;return(0,l.jsx)(c.rU,{to:"/movies/".concat(t),children:(0,l.jsx)("li",{children:a})},t)}));return(0,l.jsxs)("div",{className:r.block,children:[(0,l.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget,a=t.elements.movie.value;v(a),t.reset()},method:"get",children:(0,l.jsxs)("label",{className:r.coverEl,htmlFor:"searchingFilms",children:[(0,l.jsx)("input",{className:r.input,type:"search",id:"searchingFilms",placeholder:"Type movie name",name:"movie",required:!0}),(0,l.jsx)("button",{className:r.button,ype:"submit",children:"Search"})]})}),(0,l.jsx)("div",{className:r.filmBox,children:d})]})}}}]);
//# sourceMappingURL=316.6a7e81ea.chunk.js.map