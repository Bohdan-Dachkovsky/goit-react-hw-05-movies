"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[316],{3316:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var n=i(8152),o=i(3504),l=i(2791),r=i(8438),s={coverBox:"style_coverBox__mmVVG",block:"style_block__o8Rzq",input:"style_input__AtXTl",filmBox:"style_filmBox__bSMR7",vPlayer:"style_vPlayer__9PaVE",button:"style_button__WGHmj"},a=i(184),c=function(){var e=(0,l.useState)([]),t=(0,n.Z)(e,2),i=t[0],c=t[1],u=(0,l.useState)({movie:""}),m=(0,n.Z)(u,2),_=m[0],v=m[1];(0,l.useEffect)((function(){(0,r.dV)(_).then((function(e){var t=e.results;c(t)}))}),[_]);var h=i.map((function(e){var t=e.id,i=e.title;return(0,a.jsx)(o.rU,{to:"/movie/".concat(t),children:(0,a.jsx)("li",{children:i})},t)}));return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:s.block,children:[(0,a.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==_.movie?v(""):alert("The movie isn't ".concat(_.movie," loaded"))}}),(0,a.jsx)("label",{className:s.coverEl,htmlFor:"searchingFilms",children:(0,a.jsx)("input",{className:s.input,type:"search",id:"searchingFilms",onChange:function(e){v({movie:e.currentTarget.value.toLowerCase()})},placeholder:"Type movie name",name:"movie",required:!0})}),(0,a.jsx)("div",{className:s.filmBox,children:h})]})})}}}]);
//# sourceMappingURL=316.7a3e5438.chunk.js.map