(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){e.exports={form:"Registration_form__1JqTq",form_item:"Registration_form_item__3XN0u",error:"Registration_error__25BlV",loading:"Registration_loading__2RcRF"}},20:function(e,t,n){e.exports={form:"login_form__8BK8y",form_item:"login_form_item__3Ykha",button:"login_button__3LGme",error:"login_error__3fqnE",loading:"login_loading__2m_7X",form_item_rememberMe:"login_form_item_rememberMe__1mrbN"}},21:function(e,t,n){e.exports={table:"Table_table__S9kva",table_caption:"Table_table_caption__ouukp",table_item_button:"Table_table_item_button__1HQfq",table_button:"Table_table_button__1w0rW",button_group:"Table_button_group__2ZO4v"}},34:function(e,t,n){e.exports={default:"Button_default__3BL9W",red:"Button_red__3vE5N"}},35:function(e,t,n){e.exports={input:"Input_input__2Oa_C"}},36:function(e,t,n){e.exports={main:"NewPassword_main__2QV19"}},37:function(e,t,n){e.exports={main:"LostPassword_main__1p9VZ",error:"LostPassword_error__1XO_D",message:"LostPassword_message__3cQcO"}},38:function(e,t,n){e.exports={modal:"Modal_modal__2tE-q",appear:"Modal_appear__p62wv",modal_dialog:"Modal_modal_dialog__2kYmj",animatetop:"Modal_animatetop__2SyTm","slide-in":"Modal_slide-in__3ifUR",modal_dialog_border:"Modal_modal_dialog_border__3XknN",modal_header:"Modal_modal_header__3OvGs",modal_footer:"Modal_modal_footer__8QXpQ",modal_close:"Modal_modal_close__3cctW",modal_content:"Modal_modal_content__FBYA2",modal_title:"Modal_modal_title__oVt5U"}},39:function(e,t,n){e.exports={default:"ButtonModal_default__20ObA",red:"ButtonModal_red__1ljdx"}},40:function(e,t,n){e.exports={packs:"Packs_packs__1kL2t"}},41:function(e,t,n){e.exports={cards:"Cards_cards__1YVNP"}},61:function(e,t,n){e.exports={button_modal:"updatePacksModal_button_modal__1FUJy"}},62:function(e,t,n){e.exports={button_modal:"addPacksModal_button_modal__1c0Kb"}},63:function(e,t,n){e.exports={button_modal:"addCardsModal_button_modal__1H9Db"}},64:function(e,t,n){e.exports={nav:"Nav_nav__1axFw"}},70:function(e,t,n){},71:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),s=n(28),o=n.n(s),i=(n(70),n(8)),d=(n(71),n(3)),l=n(6),u=n(17),j=n(20),b=n.n(j),p=n(2),m={},O=function(e){return{type:"IS-FETCHING",payload:{isFetching:e}}},h=n(60),f=n.n(h).a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),_=function(e,t,n){return f.post("auth/login",{password:e,email:t,rememberMe:n})},x=function(){return f.post("auth/me",{})},v=function(){return f.delete("auth/me",{})},g=function(e,t){return f.post("/auth/register",{email:e,password:t})},C=function(e,t){return f.post("auth/set-new-password",{password:e,resetPasswordToken:t}).then((function(e){return e.data}))},w=function(e){return f.post("auth/forgot",{email:e,from:"cards-admin <poterjannaja@bk.com>",message:"<div style=\"background-color: lime; padding: 15px\"> password recovery link: <a href='https://feraverto.github.io/cards/#/enter-new-password/$token$'>link</a></div>"}).then((function(e){return e.data}))},y=function(){return f.get("/cards/pack").then((function(e){return e.data}))},k=function(e,t,n,r,a,c,s){return f.post("/cards/pack",{cardsPack:{name:e}}).then((function(e){return e.data}))},E=function(e){return f.delete("/cards/pack?id=".concat(e))},P=function(e,t,n){return f.put("/cards/pack",{cardsPack:{_id:e,name:t,cardsCount:n}}).then((function(e){return e.data.updatedCardsPack}))},N=function(e){return f.get("/cards/card&cardsPack_id=".concat(e)).then((function(e){return e.data}))},R={},A=function(e,t,n){return{type:"SUCCESS-LOGIN",payload:{data:Object(p.a)({},e),isAuth:t,errorMessage:n}}},S=function(e,t){return{type:"FAILED-LOGIN",payload:{errorMessage:e,isAuth:t}}},D=n(24),T=n(34),L=n.n(T),M=n(0),F=function(e){var t=e.red,n=e.className,r=Object(D.a)(e,["red","className"]),a="".concat(t?L.a.red:L.a.default," ").concat(n);return Object(M.jsx)("div",{className:L.a.button_container,children:Object(M.jsx)("button",Object(p.a)({className:a},r))})},I=n(35),G=n.n(I),K=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(D.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),d="".concat(G.a.error," ").concat(o||""),l=c?"".concat(G.a.errorInput," ").concat(s):G.a.input;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("input",Object(p.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),"Enter"===e.key&&a&&a()},className:l},i)),c&&Object(M.jsx)("span",{className:d,children:c})]})},U=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.login})),n=t.isAuth,r=t.errorMessage,a=Object(d.c)((function(e){return e.app.isFetching})),c=Object(u.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var n,r,a;e((n=t.password,r=t.email,a=t.rememberMe,function(e){e(O(!0)),_(n,r,a).then((function(t){e(A(t.data,!0,"")),e(O(!1))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(S(n,!1)),e(O(!1))}))}))}});return console.log(r),n?Object(M.jsx)(l.a,{to:"/profile"}):Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{className:b.a.h1,children:"Login"}),Object(M.jsxs)("form",{className:b.a.form,onSubmit:c.handleSubmit,children:[Object(M.jsxs)("div",{className:b.a.form_item,children:[Object(M.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(M.jsx)(K,{id:"email",name:"email",type:"email",onChange:c.handleChange,value:c.values.email})]}),Object(M.jsxs)("div",{className:b.a.form_item,children:[Object(M.jsx)("label",{htmlFor:"password",children:"Password"}),Object(M.jsx)(K,{type:"password",name:"password",id:"password",value:c.values.password,onChange:c.handleChange})]}),Object(M.jsxs)("div",{className:"".concat(b.a.form_item," ").concat(b.a.form_item_rememberMe),children:[Object(M.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"}),Object(M.jsx)("input",{type:"checkbox",name:"rememberMe",value:"rememberMe",onChange:c.handleChange})]}),Object(M.jsx)(F,{className:b.a.button,type:"submit",disabled:a,children:"Submit"})]}),a&&Object(M.jsx)("div",{className:b.a.loading,children:"Loading..."})]})},q=n(5),B=n.n(q),V=n(12);!function(e){e.REDIRECT="Registration/REDIRECT",e.LOADING="Registration/LOADING",e.ERROR="Registration/ERROR"}(r||(r={}));var H,Q={isRedirecting:!1,isLoading:!1,error:null},X=function(e){return{type:r.REDIRECT,payload:{redirect:e}}},Z=function(e){return{type:r.ERROR,payload:{error:e}}},J=function(e){return{type:r.LOADING,payload:{loading:e}}},W=n(15),Y=n.n(W),$=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.registration.error})),n=Object(d.c)((function(e){return e.registration.isRedirecting})),r=Object(d.c)((function(e){return e.registration.isLoading})),a=Object(u.a)({initialValues:{email:"",password:"",confirmPassword:""},onSubmit:function(t){var n,r;e((n=t.email,r=t.password,function(){var e=Object(V.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(J(!0)),e.prev=1,e.next=4,g(n,r);case 4:t(J(!1)),t(X(!0)),t(X(!1)),t(Z(null)),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),a=e.t0.response,t(Z(a.data.error)),t(J(!1));case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<=7&&(t.password="Password should be more 7 symbols"):t.password="Required",e.password!==e.confirmPassword&&""!==e.confirmPassword&&(t.password="Passwords do not match"),t}});return n?Object(M.jsx)(l.a,{to:"login"}):Object(M.jsxs)("div",{className:Y.a.registration,children:[Object(M.jsx)("h1",{className:Y.a.h1,children:"Registration form"}),Object(M.jsxs)("form",{className:Y.a.form,onSubmit:a.handleSubmit,children:[Object(M.jsxs)("div",{className:Y.a.form_item,children:[Object(M.jsx)("label",{htmlFor:"email",children:"Enter your email address"}),Object(M.jsx)(K,Object(p.a)({id:"email",type:"text"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?Object(M.jsx)("div",{className:Y.a.error,children:a.errors.email}):null]}),Object(M.jsxs)("div",{className:Y.a.form_item,children:[Object(M.jsx)("label",{htmlFor:"email",children:"Enter your password"}),Object(M.jsx)(K,Object(p.a)({id:"password",type:"password"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?Object(M.jsx)("div",{className:Y.a.error,children:a.errors.password}):null]}),Object(M.jsxs)("div",{className:Y.a.form_item,children:[Object(M.jsx)("label",{htmlFor:"repeat",children:"Repeat password"}),Object(M.jsx)(K,Object(p.a)({id:"repeat",type:"password"},a.getFieldProps("confirmPassword"))),a.touched.confirmPassword&&a.errors.confirmPassword?Object(M.jsx)("div",{className:Y.a.error,children:a.errors.confirmPassword}):null]}),Object(M.jsx)(F,{className:Y.a.button,type:"submit",disabled:r,children:"Sign up"})]}),t&&!r&&Object(M.jsx)("div",{className:Y.a.error,children:t}),r&&Object(M.jsx)("div",{className:Y.a.loading,children:"LOADING..."})]})},z=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.login.isAuth})),n=(Object(d.c)((function(e){return e.app.isFetching})),Object(d.c)((function(e){return e.login.data})));return t?Object(M.jsxs)("div",{children:["Profile",Object(M.jsxs)("div",{children:[Object(M.jsx)("img",{src:n.avatar,alt:""}),Object(M.jsx)("div",{children:n.name})]}),Object(M.jsx)("button",{onClick:function(){e((function(e){e(O(!0)),v().then((function(t){e({type:"SUCCESS-LOGOUT",payload:{isAuth:!1}}),e(O(!1))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(S(n,!1)),e(O(!1))}))}))},children:"logout"})]}):Object(M.jsx)(l.a,{to:"/login"})},ee=n(9),te={error:null,redirect:!1},ne=function(e){return{type:"SET-ERROR",responseError:e}},re=function(e){return{type:"CHANGE-REDIRECT",redirectStatus:e}},ae=n(36),ce=n.n(ae),se=function(){var e=Object(a.useState)(""),t=Object(ee.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(ee.a)(c,2),o=s[0],i=s[1],u=Object(l.g)().token,j=Object(d.b)(),b=Object(d.c)((function(e){return e.enterNewPassword.redirect})),p=Object(a.useState)(!1),m=Object(ee.a)(p,2),O=m[0],h=m[1],f=Object(d.c)((function(e){return e.enterNewPassword.error}));return b?Object(M.jsx)(l.a,{to:"/login"}):Object(M.jsxs)("div",{className:ce.a.main,children:[Object(M.jsx)("h1",{children:"Enter a new password"}),Object(M.jsxs)("div",{className:ce.a.inputs,children:[Object(M.jsx)(K,{onChange:function(e){r(e.currentTarget.value)},type:"password",placeholder:"Enter new password"}),Object(M.jsx)(K,{onChange:function(e){i(e.currentTarget.value)},type:"password",placeholder:"Repeat new password"}),O?Object(M.jsx)("div",{children:"Passwords mismatch!"}):null,f?Object(M.jsx)("div",{className:ce.a.error,children:f}):null]}),Object(M.jsx)(F,{onClick:function(){return n===o?j((e=o,t=u,function(){var n=Object(V.a)(B.a.mark((function n(r){var a;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C(e,t);case 3:r(re(!0)),n.next=10;break;case 6:n.prev=6,n.t0=n.catch(0),a=n.t0.response?n.t0.response.data.error:n.t0.message+", more details in the console",r(ne(a));case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}())):h(!0);var e,t},children:"Next"})]})},oe=n(37),ie=n.n(oe),de=function(){var e=Object(d.c)((function(e){return e.enterNewPassword.error})),t=Object(a.useState)(""),n=Object(ee.a)(t,2),r=n[0],c=n[1],s=Object(d.c)((function(e){return e.enterNewPassword.redirect})),o=Object(d.b)();return Object(M.jsx)("div",{children:s?Object(M.jsxs)("h3",{className:ie.a.message,children:["We have sent you a message with a link to change your password to this address:",r]}):Object(M.jsxs)("div",{className:ie.a.main,children:[Object(M.jsx)("h1",{children:"Enter your email or phone number"}),Object(M.jsx)("h3",{children:"Please enter the email or phone number you used to login"}),Object(M.jsx)(K,{onChange:function(e){c(e.currentTarget.value),o(ne(null))},placeholder:"Enter Email"}),e?Object(M.jsx)("div",{className:ie.a.error,children:e}):null,Object(M.jsx)(F,{onClick:function(){return o(function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){var r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:n(re(!0)),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),r=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",n(ne(r));case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(r))},children:"Next"})]})})},le=function(){return Object(M.jsx)("div",{children:"Error404"})},ue=n(33);!function(e){e.GET_PACKS="Packs/GET_PACKS",e.ADD_PACK="Packs/ADD_PACK",e.DELETE_PACK="Packs/DELETE_PACK",e.UPDATE_PACK="Packs/UPDATE_PACK",e.ERROR_PACK="Packs/ERROR_PACK"}(H||(H={}));var je,be={cardPacks:[],error:null},pe=function(e){return{type:H.GET_PACKS,payload:{data:e}}},me=function(e){return{type:H.ADD_PACK,payload:{pack:e}}},Oe=function(e){return{type:H.DELETE_PACK,payload:{id:e}}},he=function(e,t,n){return{type:H.UPDATE_PACK,payload:{id:e,name:t,cardsCount:n}}},fe=n(38),_e=n.n(fe),xe=function(e){var t=e.visible,n=void 0!==t&&t,r=e.title,c=void 0===r?"":r,s=e.content,o=void 0===s?"":s,i=e.onClose,d=function(e){switch(e.key){case"Escape":i()}};return Object(a.useEffect)((function(){return document.addEventListener("keydown",d),function(){return document.removeEventListener("keydown",d)}})),n?Object(M.jsx)("div",{className:_e.a.modal,onClick:i,children:Object(M.jsx)("div",{className:_e.a.modal_dialog,onClick:function(e){return e.stopPropagation()},children:Object(M.jsxs)("fieldset",{children:[Object(M.jsx)("legend",{children:c}),Object(M.jsx)("div",{className:_e.a.modal_content,children:o})]})})}):null},ve=n(21),ge=n.n(ve),Ce=n(61),we=n.n(Ce),ye=n(39),ke=n.n(ye),Ee=function(e){var t=e.red,n=e.className,r=Object(D.a)(e,["red","className"]),a="".concat(t?ke.a.red:ke.a.default," ").concat(n);return Object(M.jsx)("div",{className:ke.a.button_container,children:Object(M.jsx)("button",Object(p.a)({className:a},r))})},Pe=function(e){var t=e.onClose,n=e.name,r=e.cardsCount,a=e.id,c=Object(d.b)(),s=Object(u.a)({initialValues:{_id:a,name:n,cardsCount:r},onSubmit:function(e){c(function(e,t,n){return function(){var r=Object(V.a)(B.a.mark((function r(a){var c;return B.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(J(!0)),r.prev=1,r.next=4,P(e,t,n);case 4:c=r.sent,console.log("packsAPI.updatePack(id, name, cardsCount)",c),a(he(c._id,c.name,c.cardsCount)),a(J(!1)),r.next=12;break;case 10:r.prev=10,r.t0=r.catch(1);case 12:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()}(e._id,e.name,e.cardsCount)),t()}});return Object(M.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(M.jsx)("input",Object(p.a)({type:"text",placeholder:"Enter pack's name"},s.getFieldProps("name"))),Object(M.jsx)("input",Object(p.a)({type:"number",placeholder:"Enter cards count"},s.getFieldProps("cardsCount"))),Object(M.jsxs)("div",{className:we.a.button_modal,children:[Object(M.jsx)(Ee,{type:"submit",children:"update"}),Object(M.jsx)(Ee,{onClick:t,children:"cancel"})]})]})},Ne=function(e){var t=Object(a.useState)(!1),n=Object(ee.a)(t,2),r=n[0],c=n[1],s=function(){return c(!1)};return Object(M.jsx)("div",{children:Object(M.jsxs)("table",{className:ge.a.table,children:[Object(M.jsx)("caption",{className:ge.a.table_caption,children:e.caption}),Object(M.jsx)("thead",{className:ge.a.table_thead,children:Object(M.jsx)("tr",{className:ge.a.table_title_row,children:e.title.map((function(t){return Object(M.jsx)("th",{className:ge.a.table_title,children:Object(M.jsx)("div",{onClick:function(){return e.requestSort(t)},children:t.charAt(0).toUpperCase()+t.slice(1)})})}))})}),Object(M.jsx)("tbody",{children:e.items.map((function(t,n){var a=e.f(t);return Object(M.jsxs)("tr",{className:ge.a.table_item,children:[a.map((function(e){return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("td",{children:[e,Object(M.jsx)("div",{className:ge.a.table_item_button,children:Object(M.jsx)(xe,{visible:r,title:"update pack",content:Object(M.jsx)(Pe,{onClose:s,id:"",name:"p.name",cardsCount:4}),onClose:s})})]})})})),Object(M.jsxs)("div",{className:ge.a.table_button,children:[Object(M.jsx)(F,{onClick:function(){return n=t._id,void e.deletePack(n);var n},children:"D"}),Object(M.jsx)(F,{onClick:function(){return c(!0)},children:"U"}),Object(M.jsx)(F,{children:Object(M.jsx)(i.b,{to:"cards",children:"Cards"})})]})]},n)}))})]})})},Re=n(40),Ae=n.n(Re),Se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(a.useState)(t),r=Object(ee.a)(n,2),c=r[0],s=r[1],o=Object(a.useMemo)((function(){var t=Object(ue.a)(e);return null!==c&&t.sort((function(e,t){return e[c.key]<t[c.key]?"ascending"===c.direction?-1:1:e[c.key]>t[c.key]?"ascending"===c.direction?1:-1:0})),t}),[e,c]),i=function(e){var t="ascending";c&&c.key===e&&"ascending"===c.direction&&(t="descending"),s({key:e,direction:t})};return{items:o,requestSort:i,sortConfig:c}},De=n(62),Te=n.n(De),Le=function(e){var t=e.onClose,n=Object(d.b)(),r=Object(u.a)({initialValues:{name:""},onSubmit:function(e){var r;n((r=e.name,function(){var e=Object(V.a)(B.a.mark((function e(t){var n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(J(!0)),e.prev=1,e.next=4,k(r);case 4:n=e.sent,a=n.newCardsPack,t(me(a)),t(J(!1)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())),t()}});return Object(M.jsxs)("form",{onSubmit:r.handleSubmit,children:[Object(M.jsx)("input",Object(p.a)({type:"text",placeholder:"Enter pack's name"},r.getFieldProps("name"))),Object(M.jsxs)("div",{className:Te.a.button_modal,children:[Object(M.jsx)(Ee,{type:"submit",children:"add"}),Object(M.jsx)(Ee,{onClick:t,children:"cancel"})]})]})},Me=function(){var e=Object(d.c)((function(e){return e.packs.error})),t=Object(d.b)();Object(a.useEffect)((function(){t(function(){var e=Object(V.a)(B.a.mark((function e(t){var n,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(J(!0)),e.prev=1,e.next=4,y();case 4:n=e.sent,r=n.cardPacks,t(pe(r)),t(J(!1)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var n=Object(d.c)((function(e){return e.packs.cardPacks})),r=Se(n),c=r.items,s=r.requestSort,o=function(){return j(!1)},i=Object(a.useState)(!1),l=Object(ee.a)(i,2),u=l[0],j=l[1];return Object(M.jsxs)("div",{className:Ae.a.packs,children:[null!==e&&Object(M.jsx)("div",{children:e}),Object(M.jsx)(Ne,{title:["name","cardsCount","updated","actions"],caption:"Packs",items:c,f:function(e){return[e.name,e.cardsCount,e.updated]},deletePack:function(e){t(function(e){return function(){var t=Object(V.a)(B.a.mark((function t(n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(J(!0)),t.prev=1,t.next=4,E(e);case 4:n(Oe(e)),n(J(!1)),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))},requestSort:s}),Object(M.jsx)("div",{className:Ae.a.button_group,children:Object(M.jsx)(F,{className:Ae.a.button,onClick:function(){return j(!0)},children:"add"})}),Object(M.jsx)(xe,{visible:u,title:"add packs",content:Object(M.jsx)(Le,{onClose:o}),onClose:o})]})},Fe=n(41),Ie=n.n(Fe);!function(e){e.GET_CARDS="Cards/GET_CARDS",e.ADD_CARDS="Cards/ADD_CARDS",e.DELETE_CARDS="Cards/DELETE_CARDS",e.UPDATE_CARDS="Cards/UPDATE_CARDS",e.ERROR_CARDS="Cards/ERROR_CARDS"}(je||(je={}));var Ge={},Ke=function(e){return{type:je.GET_CARDS,payload:{data:e}}},Ue=n(63),qe=n.n(Ue),Be=function(e){var t=e.onClose,n=(Object(d.b)(),Object(u.a)({initialValues:{name:""},onSubmit:function(e){t()}}));return Object(M.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(M.jsx)("input",Object(p.a)({type:"text",placeholder:"Enter card's name"},n.getFieldProps("name"))),Object(M.jsxs)("div",{className:qe.a.button_modal,children:[Object(M.jsx)(Ee,{type:"submit",children:"add"}),Object(M.jsx)(Ee,{onClick:t,children:"cancel"})]})]})},Ve=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.packs.cardPacks}));Object(a.useEffect)((function(){var t;e((t="608057f48637cd0c64ca062e",function(){var e=Object(V.a)(B.a.mark((function e(n){var r,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(J(!0)),e.prev=1,e.next=4,N(t);case 4:r=e.sent,n(Ke(r.cards)),console.log("data.cards",r.cards),n(J(!1)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),a=e.t0.response.data.error,console.log(a),n(J(!1));case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))}),[]);var n=Se(t),r=n.items,c=n.requestSort,s=function(){return u(!1)},o=Object(a.useState)(!1),i=Object(ee.a)(o,2),l=i[0],u=i[1];return Object(M.jsxs)("div",{className:Ie.a.cards,children:[Object(M.jsx)(Ne,{title:["question","answer","grade","updated","actions"],caption:"Cards",f:function(e){return[e.question,e.answer,e.grade,e.updated]},items:r,deletePack:function(e){},requestSort:c}),Object(M.jsx)("div",{className:Ie.a.button_group,children:Object(M.jsx)(F,{className:Ie.a.button,onClick:function(){return u(!0)},children:"add"})}),Object(M.jsx)(xe,{visible:l,title:"add card",content:Object(M.jsx)(Be,{onClose:s}),onClose:s})]})},He="/login",Qe="/registration",Xe="/profile",Ze="/enter-new-password/:token",Je="/password-recovery",We="/show-all",Ye="/packs",$e="/cards",ze=function(){return Object(M.jsx)("div",{children:Object(M.jsxs)(l.d,{children:[Object(M.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(M.jsx)(l.a,{to:Xe})}}),Object(M.jsx)(l.b,{path:He,render:function(){return Object(M.jsx)(U,{})}}),Object(M.jsx)(l.b,{path:Qe,render:function(){return Object(M.jsx)($,{})}}),Object(M.jsx)(l.b,{path:Xe,render:function(){return Object(M.jsx)(z,{})}}),Object(M.jsx)(l.b,{path:Ze,render:function(){return Object(M.jsx)(se,{})}}),Object(M.jsx)(l.b,{path:Je,render:function(){return Object(M.jsx)(de,{})}}),Object(M.jsx)(l.b,{path:Ye,render:function(){return Object(M.jsx)(Me,{})}}),Object(M.jsx)(l.b,{path:$e,render:function(){return Object(M.jsx)(Ve,{})}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(M.jsx)(l.b,{render:function(){return Object(M.jsx)(le,{})}})]})})},et=n(64),tt=n.n(et),nt=function(){return Object(M.jsxs)("nav",{className:tt.a.nav,children:[Object(M.jsx)(i.b,{to:He,children:"Login "}),Object(M.jsx)(i.b,{to:Qe,children:"Registration"}),Object(M.jsx)(i.b,{to:Xe,children:"Profile"}),Object(M.jsx)(i.b,{to:Je,children:"Password recovery"}),Object(M.jsx)(i.b,{to:Ze,children:"New password"}),Object(M.jsx)(i.b,{to:We,children:"Show all"}),Object(M.jsx)(i.b,{to:Ye,children:"Packs"}),Object(M.jsx)(i.b,{to:$e,children:"Cards"})]})};var rt=function(){Object(a.useEffect)((function(){e((function(e){x().then((function(t){e(A(t.data,!0,""))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(S(n,!1))}))}))}),[]);var e=Object(d.b)();return Object(M.jsxs)(i.a,{children:[Object(M.jsx)(nt,{}),Object(M.jsx)(ze,{})]})},at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,99)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},ct=n(22),st=n(65),ot={},it={},dt=Object(ct.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS-LOGIN":return Object(p.a)(Object(p.a)({},e),{},{isAuth:t.payload.isAuth,data:t.payload.data,errorMessage:""});case"FAILED-LOGIN":return Object(p.a)(Object(p.a)({},e),{},{isAuth:t.payload.isAuth,errorMessage:t.payload.errorMessage});case"SUCCESS-LOGOUT":return Object(p.a)(Object(p.a)({},e),{},{isAuth:t.payload.isAuth});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.REDIRECT:return Object(p.a)(Object(p.a)({},e),{},{isRedirecting:t.payload.redirect});case r.ERROR:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload.error});case r.LOADING:return Object(p.a)(Object(p.a)({},e),{},{isLoading:t.payload.loading});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;return t.type,e},enterNewPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.responseError});case"CHANGE-REDIRECT":return Object(p.a)(Object(p.a)({},e),{},{redirect:t.redirectStatus});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-FETCHING":return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.payload.isFetching});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.GET_PACKS:return Object(p.a)(Object(p.a)({},e),{},{cardPacks:t.payload.data});case H.ADD_PACK:return Object(p.a)(Object(p.a)({},e),{},{cardPacks:[].concat(Object(ue.a)(e.cardPacks),[t.payload.pack])});case H.DELETE_PACK:return Object(p.a)(Object(p.a)({},e),{},{cardPacks:e.cardPacks.filter((function(e){return e._id!==t.payload.id}))});case H.UPDATE_PACK:return Object(p.a)(Object(p.a)({},e),{},{cardPacks:e.cardPacks.map((function(e){return e._id===t.payload.id?Object(p.a)(Object(p.a)({},e),{},{name:t.payload.name,cardsCount:t.payload.cardsCount}):e}))});case H.ERROR_PACK:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload.error});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je.GET_CARDS:return Object(p.a)(Object(p.a)({},e),{},{cards:t.payload.data});case je.ERROR_CARDS:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload.error});default:return e}}}),lt=Object(ct.d)(dt,Object(ct.a)(st.a));o.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(i.a,{children:Object(M.jsx)(d.a,{store:lt,children:Object(M.jsx)(rt,{})})})}),document.getElementById("root")),at()}},[[98,1,2]]]);
//# sourceMappingURL=main.87e3599e.chunk.js.map