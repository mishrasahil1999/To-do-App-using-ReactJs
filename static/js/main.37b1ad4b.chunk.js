(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(2),o=c.n(s),a=c(9),n=c.n(a),l=(c(16),c(4)),d=c.p+"static/media/logo.501adae8.png",i=c.p+"static/media/bg.cbc3f2f3.png",r=c(11),j=c(10),b=c(1);var u=function(e){var t=e.setInputText,c=e.todos,s=e.setTodos,o=e.inputText,a=e.setStatus;return Object(b.jsxs)("form",{className:"todo_form",children:[Object(b.jsxs)("div",{className:"add_todo_container",children:[Object(b.jsxs)("div",{className:"form_container",children:[Object(b.jsx)("input",{value:o,onChange:function(e){console.log(e.target.value),t(e.target.value)},type:"text",className:"todo_input",placeholder:" ",required:!0}),Object(b.jsx)("label",{className:"todo_label",children:"Add Agenda"})]}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),s([].concat(Object(r.a)(c),[{text:o,completed:!1,id:1e3*Math.random()}])),t(" ")},className:"add_button",type:"submit",children:Object(b.jsx)(j.a,{})})]}),Object(b.jsx)("div",{className:"dropdown",children:Object(b.jsxs)("select",{onChange:function(e){console.log(e.target.value),a(e.target.value)},name:"todo",className:"filter-todos",children:[Object(b.jsx)("option",{value:"all",className:"select-item",children:"All"}),Object(b.jsx)("option",{value:"completed",className:"select-item",children:"Completed"}),Object(b.jsx)("option",{value:"uncompleted",className:"select-item",children:"Uncompleted"})]})})]})},m=c(8),O=c(6);var x=function(e){var t=e.text,c=e.todo,s=e.todos,o=e.setTodos;return Object(b.jsxs)("div",{className:"todo",children:[Object(b.jsx)("ul",{className:"todo_item ".concat(c.completed?"completed":""),children:t}),Object(b.jsxs)("div",{className:"todo_buttons",children:[Object(b.jsx)("button",{onClick:function(){o(s.map((function(e){return e.id===c.id?Object(m.a)(Object(m.a)({},e),{},{completed:!e.completed}):e})))},className:"done-btn",children:Object(b.jsx)(O.a,{})}),Object(b.jsx)("button",{onClick:function(){o(s.filter((function(e){return e.id!==c.id})))},className:"delete-btn",children:Object(b.jsx)(O.b,{})})]})]})};var h=function(e){var t=e.todos,c=e.setTodos,s=e.filteredTodos;return Object(b.jsx)("div",{className:"todo-list-container",children:Object(b.jsx)("ul",{className:"todo-list",children:s.map((function(e){return Object(b.jsx)(x,{setTodos:c,todos:t,todo:e,text:e.text},e.id)}))})})};c(18);var f=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],o=t[1],a=Object(s.useState)([]),n=Object(l.a)(a,2),r=n[0],j=n[1],m=Object(s.useState)("all"),O=Object(l.a)(m,2),x=O[0],f=O[1],p=Object(s.useState)([]),g=Object(l.a)(p,2),v=g[0],N=g[1];Object(s.useEffect)((function(){!function(){if(null==localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todos",JSON.stringify("todos")));j(e)}}()}),[]),Object(s.useEffect)((function(){!function(){switch(x){case"completed":N(r.filter((function(e){return!0===e.completed})));break;case"uncompleted":N(r.filter((function(e){return!1===e.completed})));break;default:N(r)}}(),_()}),[r,x]);var _=function(){localStorage.setItem("todos",JSON.stringify(r))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("div",{className:"navbar_brand",children:Object(b.jsx)("img",{src:d,alt:"logo",className:"brand_logo"})}),Object(b.jsx)("div",{className:"nav_text",children:" SAHIL'S TO DO LIST"})]})}),Object(b.jsx)("main",{className:"content_holder",children:Object(b.jsxs)("section",{className:"hero",children:[Object(b.jsx)("div",{className:"hero_bg_Image_container",children:Object(b.jsx)("img",{src:i,alt:"BG hero image",className:"hero_bg_image"})}),Object(b.jsx)("div",{className:"hero_bg_overlay"}),Object(b.jsxs)("div",{className:"hero_card",children:[Object(b.jsx)("h2",{className:"hero_title",children:"Add Your Today's Agenda"}),Object(b.jsx)(u,{inputText:c,todos:r,setTodos:j,setInputText:o,setStatus:f,filteredTodos:v}),Object(b.jsx)(h,{setTodos:j,todos:r,filteredTodos:v})]})]})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,s=t.getFID,o=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),o(e),a(e),n(e)}))};n.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.37b1ad4b.chunk.js.map