(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){e.exports={table:"Table_table__S9kva",table_caption:"Table_table_caption__ouukp"}},19:function(e,t,n){e.exports={modal:"Modal_modal__2tE-q",appear:"Modal_appear__p62wv","modal-dialog":"Modal_modal-dialog__ije8g",animatetop:"Modal_animatetop__2SyTm","slide-in":"Modal_slide-in__3ifUR","modal-header":"Modal_modal-header__2eXki","modal-footer":"Modal_modal-footer__3TF9k","modal-close":"Modal_modal-close__3lHcr","modal-body":"Modal_modal-body__1gUBV","modal-content":"Modal_modal-content__4eRHm","modal-title":"Modal_modal-title__KUmW-"}},33:function(e,t,n){e.exports={main:"NewPassword_main__2QV19",inputs:"NewPassword_inputs__1qhdP"}},34:function(e,t,n){e.exports={main:"LostPassword_main__1p9VZ",error:"LostPassword_error__1XO_D",message:"LostPassword_message__3cQcO"}},5:function(e,t,n){e.exports={registration:"Registration_registration__OhgLq",h1:"Registration_h1__QCJBi",form:"Registration_form__1JqTq",form_item:"Registration_form_item__3XN0u",button:"Registration_button__WUil5",error:"Registration_error__25BlV",loading:"Registration_loading__2RcRF"}},53:function(e,t,n){e.exports={form_item_rememberMe:"login_form_item_rememberMe__1mrbN"}},55:function(e,t,n){e.exports={packs:"Packs_packs__1kL2t"}},56:function(e,t,n){e.exports={nav:"Nav_nav__1axFw"}},62:function(e,t,n){},63:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),s=n(27),o=n.n(s),i=(n(62),n(8)),l=(n(63),n(3)),d=n(6),u=n(23),j=n(5),b=n.n(j),h=n(53),m=n.n(h),p=n(2),O={},f=function(e){return{type:"IS-FETCHING",payload:{isFetching:e}}},x=n(54),v=n.n(x).a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),g=function(e,t,n){return v.post("auth/login",{password:e,email:t,rememberMe:n})},_=function(){return v.post("auth/me",{})},w=function(){return v.delete("auth/me",{})},y=function(e,t){return v.post("/auth/register",{email:e,password:t})},N=function(e,t){return v.post("auth/set-new-password",{password:e,resetPasswordToken:t}).then((function(e){return e.data}))},k=function(e){return v.post("auth/forgot",{email:e,from:"cards-admin <themightymasha@gmail.com>",message:"<div style=\"background-color: lime; padding: 15px\"> password recovery link: <a href='https://feraverto.github.io/cards/#/enter-new-password/$token$'>link</a></div>"}).then((function(e){return e.data}))},C=function(){return v.get("/cards/pack").then((function(e){return e.data}))},P=function(e,t,n,r,a,c,s){return v.post("/cards/pack",{cardsPack:{name:e}}).then((function(e){return e.data}))},R={},E=function(e,t,n){return{type:"SUCCESS-LOGIN",payload:{data:Object(p.a)({},e),isAuth:t,errorMessage:n}}},S=function(e,t){return{type:"FAILED-LOGIN",payload:{errorMessage:e,isAuth:t}}},A=n(1),L=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.login})),n=t.isAuth,r=t.errorMessage,a=Object(l.c)((function(e){return e.app.isFetching})),c=Object(u.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var n,r,a;e((n=t.password,r=t.email,a=t.rememberMe,function(e){e(f(!0)),g(n,r,a).then((function(t){e(E(t.data,!0,"")),e(f(!1))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(S(n,!1)),e(f(!1))}))}))}});return console.log(r),n?Object(A.jsx)(d.a,{to:"/profile"}):Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{className:b.a.h1,children:"Login"}),Object(A.jsxs)("form",{className:b.a.form,onSubmit:c.handleSubmit,children:[Object(A.jsxs)("div",{className:b.a.form_item,children:[Object(A.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(A.jsx)("input",{id:"email",name:"email",type:"email",onChange:c.handleChange,value:c.values.email})]}),Object(A.jsxs)("div",{className:b.a.form_item,children:[Object(A.jsx)("label",{htmlFor:"password",children:"Password"}),Object(A.jsx)("input",{type:"text",name:"password",id:"password",value:c.values.password,onChange:c.handleChange})]}),Object(A.jsxs)("div",{className:"".concat(b.a.form_item," ").concat(m.a.form_item_rememberMe),children:[Object(A.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"}),Object(A.jsx)("input",{type:"checkbox",name:"rememberMe",value:"rememberMe",onChange:c.handleChange})]}),Object(A.jsx)("button",{className:b.a.button,type:"submit",disabled:a,children:"Submit"})]}),a&&Object(A.jsx)("div",{className:b.a.loading,children:"Loading..."}),r&&Object(A.jsx)("div",{className:b.a.error,children:r})]})},M=n(12),T=n.n(M),I=n(20);!function(e){e.REDIRECT="Registration/REDIRECT",e.LOADING="Registration/LOADING",e.ERROR="Registration/ERROR"}(r||(r={}));var D,F={isRedirecting:!1,isLoading:!1,error:null},G=function(e){return{type:r.REDIRECT,payload:{redirect:e}}},U=function(e){return{type:r.ERROR,payload:{error:e}}},q=function(e){return{type:r.LOADING,payload:{loading:e}}},K=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.registration.error})),n=Object(l.c)((function(e){return e.registration.isRedirecting})),r=Object(l.c)((function(e){return e.registration.isLoading})),a=Object(u.a)({initialValues:{email:"",password:"",confirmPassword:""},onSubmit:function(t){var n,r;e((n=t.email,r=t.password,function(){var e=Object(I.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(q(!0)),e.prev=1,e.next=4,y(n,r);case 4:t(q(!1)),t(G(!0)),t(G(!1)),t(U(null)),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),a=e.t0.response,t(U(a.data.error)),t(q(!1));case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<=7&&(t.password="Password should be more 7 symbols"):t.password="Required",e.password!==e.confirmPassword&&""!==e.confirmPassword&&(t.password="Passwords do not match"),t}});return n?Object(A.jsx)(d.a,{to:"login"}):Object(A.jsxs)("div",{className:b.a.registration,children:[Object(A.jsx)("h1",{className:b.a.h1,children:"\u0424\u043e\u0440\u043c\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(A.jsxs)("form",{className:b.a.form,onSubmit:a.handleSubmit,children:[Object(A.jsxs)("div",{className:b.a.form_item,children:[Object(A.jsx)("input",Object(p.a)({type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?Object(A.jsx)("div",{className:b.a.error,children:a.errors.email}):null]}),Object(A.jsxs)("div",{className:b.a.form_item,children:[Object(A.jsx)("input",Object(p.a)({type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?Object(A.jsx)("div",{className:b.a.error,children:a.errors.password}):null]}),Object(A.jsxs)("div",{className:b.a.form_item,children:[Object(A.jsx)("input",Object(p.a)({type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"},a.getFieldProps("confirmPassword"))),a.touched.confirmPassword&&a.errors.confirmPassword?Object(A.jsx)("div",{className:b.a.error,children:a.errors.confirmPassword}):null]}),Object(A.jsx)("button",{className:b.a.button,type:"submit",disabled:r,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),t&&!r&&Object(A.jsx)("div",{className:b.a.error,children:t}),r&&Object(A.jsx)("div",{className:b.a.loading,children:"LOADING..."})]})},V=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.login.isAuth})),n=(Object(l.c)((function(e){return e.app.isFetching})),Object(l.c)((function(e){return e.login.data})));return t?Object(A.jsxs)("div",{children:["Profile",Object(A.jsxs)("div",{children:[Object(A.jsx)("img",{src:n.avatar,alt:""}),Object(A.jsx)("div",{children:n.name})]}),Object(A.jsx)("button",{onClick:function(){e((function(e){e(f(!0)),w().then((function(t){e({type:"SUCCESS-LOGOUT",payload:{isAuth:!1}}),e(f(!1))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(S(n,!1)),e(f(!1))}))}))},children:"logout"})]}):Object(A.jsx)(d.a,{to:"/login"})},B=n(16),H={error:null,redirect:!1},J=function(e){return{type:"SET-ERROR",responseError:e}},Z=function(e){return{type:"CHANGE-REDIRECT",redirectStatus:e}},Q=n(33),W=n.n(Q),X=function(){var e=Object(a.useState)(""),t=Object(B.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(B.a)(c,2),o=s[0],i=s[1],u=Object(d.g)().token,j=Object(l.b)(),b=Object(l.c)((function(e){return e.enterNewPassword.redirect})),h=Object(a.useState)(!1),m=Object(B.a)(h,2),p=m[0],O=m[1],f=Object(l.c)((function(e){return e.enterNewPassword.error}));return b?Object(A.jsx)(d.a,{to:"/login"}):Object(A.jsxs)("div",{className:W.a.main,children:[Object(A.jsx)("h1",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(A.jsxs)("div",{className:W.a.inputs,children:[Object(A.jsx)("input",{onChange:function(e){r(e.currentTarget.value)},type:"password",placeholder:"Enter new password"}),Object(A.jsx)("input",{onChange:function(e){i(e.currentTarget.value)},type:"password",placeholder:"Repeat new password"}),p?Object(A.jsx)("div",{children:"Passwords mismatch!"}):null,f?Object(A.jsx)("div",{className:W.a.error,children:f}):null]}),Object(A.jsx)("button",{onClick:function(){return n===o?j((e=o,t=u,function(){var n=Object(I.a)(T.a.mark((function n(r){var a;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N(e,t);case 3:r(Z(!0)),n.next=10;break;case 6:n.prev=6,n.t0=n.catch(0),a=n.t0.response?n.t0.response.data.error:n.t0.message+", more details in the console",r(J(a));case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}())):O(!0);var e,t},children:"Next"})]})},$=n(34),z=n.n($),Y=function(){var e=Object(l.c)((function(e){return e.enterNewPassword.error})),t=Object(a.useState)(""),n=Object(B.a)(t,2),r=n[0],c=n[1],s=Object(l.c)((function(e){return e.enterNewPassword.redirect})),o=Object(l.b)();return Object(A.jsx)("div",{children:s?Object(A.jsxs)("h3",{className:z.a.message,children:["We have sent you a message with a link to change your password to this address:",r]}):Object(A.jsxs)("div",{className:z.a.main,children:[Object(A.jsx)("h1",{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 email \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(A.jsx)("h3",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 email \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442"}),Object(A.jsx)("input",{onChange:function(e){c(e.currentTarget.value),o(J(null))},placeholder:"Enter Email"}),e?Object(A.jsx)("div",{className:z.a.error,children:e}):null,Object(A.jsx)("button",{onClick:function(){return o(function(e){return function(){var t=Object(I.a)(T.a.mark((function t(n){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e);case 3:n(Z(!0)),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),r=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",n(J(r));case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(r))},children:"Next"})]})})},ee=function(){return Object(A.jsx)("div",{children:"Error404"})},te=n(32);!function(e){e.GET_PACKS="Packs/GET_PACKS",e.ADD_PACK="Packs/ADD_PACK"}(D||(D={}));var ne={cardPacks:[]},re=function(e){return{type:D.GET_PACKS,payload:{data:e}}},ae=function(e){return{type:D.ADD_PACK,payload:{pack:e}}},ce=n(19),se=n.n(ce),oe=function(e){var t=e.visible,n=void 0!==t&&t,r=e.title,c=void 0===r?"":r,s=e.content,o=void 0===s?"":s,i=e.footer,l=void 0===i?"":i,d=e.onClose,u=function(e){switch(e.key){case"Escape":d()}};return Object(a.useEffect)((function(){return document.addEventListener("keydown",u),function(){return document.removeEventListener("keydown",u)}})),n?Object(A.jsx)("div",{className:se.a.modal,onClick:d,children:Object(A.jsxs)("div",{className:se.a.modal_dialog,onClick:function(e){return e.stopPropagation()},children:[Object(A.jsxs)("div",{className:se.a.modal_header,children:[Object(A.jsx)("h3",{className:se.a.modal_title,children:c}),Object(A.jsx)("span",{className:se.a.modal_close,onClick:d,children:"\xd7"})]}),Object(A.jsx)("div",{className:se.a.modal_body,children:Object(A.jsx)("div",{className:se.a.modal_content,children:o})}),l&&Object(A.jsx)("div",{className:se.a.modal_footer,children:l})]})}):null},ie=function(e){var t=e.onClose,n=Object(l.b)(),r=Object(u.a)({initialValues:{name:""},onSubmit:function(e){var r;n((r=e.name,function(){var e=Object(I.a)(T.a.mark((function e(t){var n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("name pack thunk",r),t(q(!0)),e.prev=2,e.next=5,P(r);case 5:n=e.sent,a=n.newCardsPack,t(ae(a)),t(q(!1)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),e.t0.response,t(q(!1));case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}())),t()}});return Object(A.jsxs)("form",{onSubmit:r.handleSubmit,children:[Object(A.jsx)("input",Object(p.a)({type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u0434\u044b"},r.getFieldProps("name"))),Object(A.jsx)("button",{type:"submit",children:"add"})]})},le=n(15),de=n.n(le),ue=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(a.useState)(t),r=Object(B.a)(n,2),c=r[0],s=r[1];return{items:Object(a.useMemo)((function(){var t=Object(te.a)(e);return null!==c&&t.sort((function(e,t){return e[c.key]<t[c.key]?"ascending"===c.direction?-1:1:e[c.key]>t[c.key]?"ascending"===c.direction?1:-1:0})),t}),[e,c]),requestSort:function(e){var t="ascending";c&&c.key===e&&"ascending"===c.direction&&(t="descending"),s({key:e,direction:t})},sortConfig:c}}(e.items),n=t.items,r=t.requestSort,c=Object(a.useState)(!1),s=Object(B.a)(c,2),o=s[0],i=s[1],l=function(){return i(!1)};return Object(A.jsxs)("div",{children:[Object(A.jsxs)("table",{className:de.a.table,children:[Object(A.jsx)("caption",{className:de.a.table_caption,children:"Packs"}),Object(A.jsx)("thead",{className:de.a.table_thead,children:Object(A.jsxs)("tr",{className:de.a.table_title_row,children:[Object(A.jsx)("th",{className:de.a.table_title,children:Object(A.jsx)("div",{onClick:function(){return r("name")},children:"Name"})}),Object(A.jsx)("th",{className:de.a.table_title,children:Object(A.jsx)("div",{onClick:function(){return r("cardsCount")},children:"CardsCount"})}),Object(A.jsx)("th",{className:de.a.table_title,children:Object(A.jsx)("div",{onClick:function(){return r("updated")},children:"Updated"})}),Object(A.jsx)("th",{className:de.a.table_title,children:"Blablabla"})]})}),Object(A.jsx)("tbody",{children:n.map((function(e){return Object(A.jsxs)("tr",{className:de.a.table_item,children:[Object(A.jsx)("td",{children:e.name}),Object(A.jsx)("td",{children:e.cardsCount}),Object(A.jsx)("td",{children:e.updated}),Object(A.jsxs)("td",{children:[Object(A.jsx)("button",{children:"delete"}),Object(A.jsx)("button",{children:"update"})]})]})}))})]}),Object(A.jsx)("button",{className:de.a.button,onClick:function(){return i(!0)},children:"+"}),Object(A.jsx)(oe,{visible:o,title:"add pack",content:Object(A.jsx)(ie,{onClose:l}),footer:Object(A.jsx)("button",{onClick:l,children:"close"}),onClose:l})]})},je=n(55),be=n.n(je),he=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e(function(){var e=Object(I.a)(T.a.mark((function e(t){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(q(!0)),e.prev=1,e.next=4,C();case 4:n=e.sent,r=n.cardPacks,t(re(r)),t(q(!1)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response,t(q(!1));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(l.c)((function(e){return e.packs.cardPacks}));return Object(A.jsx)("div",{className:be.a.packs,children:Object(A.jsx)(ue,{items:t})})},me=function(){return Object(A.jsx)("div",{children:"Table"})},pe="/login",Oe="/registration",fe="/profile",xe="/enter-new-password/:token",ve="/password-recovery",ge="/show-all",_e="/packs",we="/cards",ye=function(){return Object(A.jsx)("div",{children:Object(A.jsxs)(d.d,{children:[Object(A.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(A.jsx)(d.a,{to:fe})}}),Object(A.jsx)(d.b,{path:pe,render:function(){return Object(A.jsx)(L,{})}}),Object(A.jsx)(d.b,{path:Oe,render:function(){return Object(A.jsx)(K,{})}}),Object(A.jsx)(d.b,{path:fe,render:function(){return Object(A.jsx)(V,{})}}),Object(A.jsx)(d.b,{path:xe,render:function(){return Object(A.jsx)(X,{})}}),Object(A.jsx)(d.b,{path:ve,render:function(){return Object(A.jsx)(Y,{})}}),Object(A.jsx)(d.b,{path:_e,render:function(){return Object(A.jsx)(he,{})}}),Object(A.jsx)(d.b,{path:we,render:function(){return Object(A.jsx)(me,{})}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(A.jsx)(d.b,{render:function(){return Object(A.jsx)(ee,{})}})]})})},Ne=n(56),ke=n.n(Ne),Ce=function(){return Object(A.jsxs)("nav",{className:ke.a.nav,children:[Object(A.jsx)(i.b,{to:pe,children:"Login "}),Object(A.jsx)(i.b,{to:Oe,children:"Registration"}),Object(A.jsx)(i.b,{to:fe,children:"Profile"}),Object(A.jsx)(i.b,{to:ve,children:"Password recovery"}),Object(A.jsx)(i.b,{to:xe,children:"New password"}),Object(A.jsx)(i.b,{to:ge,children:"Show all"}),Object(A.jsx)(i.b,{to:_e,children:"Packs"}),Object(A.jsx)(i.b,{to:we,children:"Cards"})]})};var Pe=function(){Object(a.useEffect)((function(){e((function(e){_().then((function(t){e(E(t.data,!0,""))})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";e(S(n,!1))}))}))}),[]);var e=Object(l.b)();return Object(A.jsxs)(i.a,{children:[Object(A.jsx)(Ce,{}),Object(A.jsx)(ye,{})]})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},Ee=n(21),Se=n(57),Ae={},Le={},Me={a:1},Te=Object(Ee.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS-LOGIN":return Object(p.a)(Object(p.a)({},e),{},{isAuth:t.payload.isAuth,data:t.payload.data,errorMessage:""});case"FAILED-LOGIN":return Object(p.a)(Object(p.a)({},e),{},{isAuth:t.payload.isAuth,errorMessage:t.payload.errorMessage});case"SUCCESS-LOGOUT":return Object(p.a)(Object(p.a)({},e),{},{isAuth:t.payload.isAuth});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.REDIRECT:return Object(p.a)(Object(p.a)({},e),{},{isRedirecting:t.payload.redirect});case r.ERROR:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload.error});case r.LOADING:return Object(p.a)(Object(p.a)({},e),{},{isLoading:t.payload.loading});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;return t.type,e},enterNewPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-ERROR":return Object(p.a)(Object(p.a)({},e),{},{error:t.responseError});case"CHANGE-REDIRECT":return Object(p.a)(Object(p.a)({},e),{},{redirect:t.redirectStatus});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-FETCHING":return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.payload.isFetching});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.GET_PACKS:return Object(p.a)(Object(p.a)({},e),{},{cardPacks:t.payload.data});case D.ADD_PACK:return Object(p.a)(Object(p.a)({},e),{},{cardPacks:[].concat(Object(te.a)(e.cardPacks),[t.payload.pack])});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"":default:return e}}}),Ie=Object(Ee.d)(Te,Object(Ee.a)(Se.a));o.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(i.a,{children:Object(A.jsx)(l.a,{store:Ie,children:Object(A.jsx)(Pe,{})})})}),document.getElementById("root")),Re()}},[[90,1,2]]]);
//# sourceMappingURL=main.080ccb2e.chunk.js.map