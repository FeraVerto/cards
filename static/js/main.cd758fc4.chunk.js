(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,r){e.exports={form:"Registration_form__1JqTq",form_item:"Registration_form_item__3XN0u",error:"Registration_error__25BlV",loading:"Registration_loading__2RcRF"}},15:function(e,t,r){e.exports={table:"Table_table__S9kva",table_caption:"Table_table_caption__ouukp",button_group:"Table_button_group__2ZO4v"}},18:function(e,t,r){e.exports={form:"login_form__8BK8y",form_item:"login_form_item__3Ykha",button:"login_button__3LGme",error:"login_error__3fqnE",loading:"login_loading__2m_7X",form_item_rememberMe:"login_form_item_rememberMe__1mrbN"}},20:function(e,t,r){e.exports={modal:"Modal_modal__2tE-q",appear:"Modal_appear__p62wv","modal-dialog":"Modal_modal-dialog__ije8g",animatetop:"Modal_animatetop__2SyTm","slide-in":"Modal_slide-in__3ifUR","modal-header":"Modal_modal-header__2eXki","modal-footer":"Modal_modal-footer__3TF9k","modal-close":"Modal_modal-close__3lHcr","modal-body":"Modal_modal-body__1gUBV","modal-content":"Modal_modal-content__4eRHm","modal-title":"Modal_modal-title__KUmW-"}},35:function(e,t,r){e.exports={default:"Button_default__3BL9W",red:"Button_red__3vE5N"}},36:function(e,t,r){},37:function(e,t,r){e.exports={main:"NewPassword_main__2QV19",inputs:"NewPassword_inputs__1qhdP"}},38:function(e,t,r){e.exports={main:"LostPassword_main__1p9VZ",error:"LostPassword_error__1XO_D",message:"LostPassword_message__3cQcO"}},58:function(e,t,r){e.exports={packs:"Packs_packs__1kL2t"}},59:function(e,t,r){e.exports={nav:"Nav_nav__1axFw"}},65:function(e,t,r){},66:function(e,t,r){},93:function(e,t,r){"use strict";r.r(t);var n,a=r(0),c=r.n(a),s=r(28),o=r.n(s),i=(r(65),r(7)),l=(r(66),r(3)),d=r(5),u=r(24),j=r(18),b=r.n(j),m=r(2),h={},p=function(e){return{type:"IS-FETCHING",payload:{isFetching:e}}},O=r(57),f=r.n(O).a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),x=function(e,t,r){return f.post("auth/login",{password:e,email:t,rememberMe:r})},v=function(){return f.post("auth/me",{})},g=function(){return f.delete("auth/me",{})},_=function(e,t){return f.post("/auth/register",{email:e,password:t})},w=function(e,t){return f.post("auth/set-new-password",{password:e,resetPasswordToken:t}).then((function(e){return e.data}))},y=function(e){return f.post("auth/forgot",{email:e,from:"cards-admin <themightymasha@gmail.com>",message:"<div style=\"background-color: lime; padding: 15px\"> password recovery link: <a href='https://feraverto.github.io/cards/#/enter-new-password/$token$'>link</a></div>"}).then((function(e){return e.data}))},N=function(){return f.get("/cards/pack").then((function(e){return e.data}))},k=function(e,t,r,n,a,c,s){return f.post("/cards/pack",{cardsPack:{name:e}}).then((function(e){return e.data}))},C={},E=function(e,t,r){return{type:"SUCCESS-LOGIN",payload:{data:Object(m.a)({},e),isAuth:t,errorMessage:r}}},P=function(e,t){return{type:"FAILED-LOGIN",payload:{errorMessage:e,isAuth:t}}},R=r(34),S=r(35),A=r.n(S),T=r(1),L=function(e){var t=e.red,r=e.className,n=Object(R.a)(e,["red","className"]),a="".concat(t?A.a.red:A.a.default," ").concat(r);return Object(T.jsx)("div",{className:A.a.button_container,children:Object(T.jsx)("button",Object(m.a)({className:a},n))})},M=r(36),F=r.n(M),I=function(e){e.type;var t=e.onChange,r=e.onChangeText,n=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(R.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(F.a.error," ").concat(o||""),d=c?"".concat(F.a.errorInput," ").concat(s):F.a.input;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("input",Object(m.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&a&&a()},className:d},i)),c&&Object(T.jsx)("span",{className:l,children:c})]})},D=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.login})),r=t.isAuth,n=t.errorMessage,a=Object(l.c)((function(e){return e.app.isFetching})),c=Object(u.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var r,n,a;e((r=t.password,n=t.email,a=t.rememberMe,function(e){e(p(!0)),x(r,n,a).then((function(t){e(E(t.data,!0,"")),e(p(!1))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(P(r,!1)),e(p(!1))}))}))}});return console.log(n),r?Object(T.jsx)(d.a,{to:"/profile"}):Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{className:b.a.h1,children:"Login"}),n&&Object(T.jsx)("div",{className:b.a.error,children:n}),Object(T.jsxs)("form",{className:b.a.form,onSubmit:c.handleSubmit,children:[Object(T.jsxs)("div",{className:b.a.form_item,children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(T.jsx)(I,{id:"email",name:"email",type:"email",onChange:c.handleChange,value:c.values.email})]}),Object(T.jsxs)("div",{className:b.a.form_item,children:[Object(T.jsx)("label",{htmlFor:"password",children:"Password"}),Object(T.jsx)(I,{type:"password",name:"password",id:"password",value:c.values.password,onChange:c.handleChange})]}),Object(T.jsxs)("div",{className:"".concat(b.a.form_item," ").concat(b.a.form_item_rememberMe),children:[Object(T.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"}),Object(T.jsx)("input",{type:"checkbox",name:"rememberMe",value:"rememberMe",onChange:c.handleChange})]}),Object(T.jsx)(L,{className:b.a.button,type:"submit",disabled:a,children:"Submit"})]}),a&&Object(T.jsx)("div",{className:b.a.loading,children:"Loading..."})]})},G=r(11),K=r.n(G),U=r(21);!function(e){e.REDIRECT="Registration/REDIRECT",e.LOADING="Registration/LOADING",e.ERROR="Registration/ERROR"}(n||(n={}));var q,B={isRedirecting:!1,isLoading:!1,error:null},V=function(e){return{type:n.REDIRECT,payload:{redirect:e}}},H=function(e){return{type:n.ERROR,payload:{error:e}}},Z=function(e){return{type:n.LOADING,payload:{loading:e}}},X=r(13),J=r.n(X),W=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.registration.error})),r=Object(l.c)((function(e){return e.registration.isRedirecting})),n=Object(l.c)((function(e){return e.registration.isLoading})),a=Object(u.a)({initialValues:{email:"",password:"",confirmPassword:""},onSubmit:function(t){var r,n;e((r=t.email,n=t.password,function(){var e=Object(U.a)(K.a.mark((function e(t){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Z(!0)),e.prev=1,e.next=4,_(r,n);case 4:t(Z(!1)),t(V(!0)),t(V(!1)),t(H(null)),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),a=e.t0.response,t(H(a.data.error)),t(Z(!1));case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<=7&&(t.password="Password should be more 7 symbols"):t.password="Required",e.password!==e.confirmPassword&&""!==e.confirmPassword&&(t.password="Passwords do not match"),t}});return r?Object(T.jsx)(d.a,{to:"login"}):Object(T.jsxs)("div",{className:J.a.registration,children:[Object(T.jsx)("h1",{className:J.a.h1,children:"Registration form"}),Object(T.jsxs)("form",{className:J.a.form,onSubmit:a.handleSubmit,children:[Object(T.jsxs)("div",{className:J.a.form_item,children:[Object(T.jsx)("label",{htmlFor:"email",children:"Enter your email address"}),Object(T.jsx)(I,Object(m.a)({id:"email",type:"text"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?Object(T.jsx)("div",{className:J.a.error,children:a.errors.email}):null]}),Object(T.jsxs)("div",{className:J.a.form_item,children:[Object(T.jsx)("label",{htmlFor:"email",children:"Enter your password"}),Object(T.jsx)(I,Object(m.a)({id:"password",type:"password"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?Object(T.jsx)("div",{className:J.a.error,children:a.errors.password}):null]}),Object(T.jsxs)("div",{className:J.a.form_item,children:[Object(T.jsx)("label",{htmlFor:"repeat",children:"Repeat password"}),Object(T.jsx)(I,Object(m.a)({id:"repeat",type:"password"},a.getFieldProps("confirmPassword"))),a.touched.confirmPassword&&a.errors.confirmPassword?Object(T.jsx)("div",{className:J.a.error,children:a.errors.confirmPassword}):null]}),Object(T.jsx)(L,{className:J.a.button,type:"submit",disabled:n,children:"Sign up"})]}),t&&!n&&Object(T.jsx)("div",{className:J.a.error,children:t}),n&&Object(T.jsx)("div",{className:J.a.loading,children:"LOADING..."})]})},$=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.login.isAuth})),r=(Object(l.c)((function(e){return e.app.isFetching})),Object(l.c)((function(e){return e.login.data})));return t?Object(T.jsxs)("div",{children:["Profile",Object(T.jsxs)("div",{children:[Object(T.jsx)("img",{src:r.avatar,alt:""}),Object(T.jsx)("div",{children:r.name})]}),Object(T.jsx)("button",{onClick:function(){e((function(e){e(p(!0)),g().then((function(t){e({type:"SUCCESS-LOGOUT",payload:{isAuth:!1}}),e(p(!1))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(P(r,!1)),e(p(!1))}))}))},children:"logout"})]}):Object(T.jsx)(d.a,{to:"/login"})},Q=r(16),Y={error:null,redirect:!1},z=function(e){return{type:"SET-ERROR",responseError:e}},ee=function(e){return{type:"CHANGE-REDIRECT",redirectStatus:e}},te=r(37),re=r.n(te),ne=function(){var e=Object(a.useState)(""),t=Object(Q.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(""),s=Object(Q.a)(c,2),o=s[0],i=s[1],u=Object(d.g)().token,j=Object(l.b)(),b=Object(l.c)((function(e){return e.enterNewPassword.redirect})),m=Object(a.useState)(!1),h=Object(Q.a)(m,2),p=h[0],O=h[1],f=Object(l.c)((function(e){return e.enterNewPassword.error}));return b?Object(T.jsx)(d.a,{to:"/login"}):Object(T.jsxs)("div",{className:re.a.main,children:[Object(T.jsx)("h1",{children:"Enter a new password"}),Object(T.jsxs)("div",{className:re.a.inputs,children:[Object(T.jsx)(I,{onChange:function(e){n(e.currentTarget.value)},type:"password",placeholder:"Enter new password"}),Object(T.jsx)(I,{onChange:function(e){i(e.currentTarget.value)},type:"password",placeholder:"Repeat new password"}),p?Object(T.jsx)("div",{children:"Passwords mismatch!"}):null,f?Object(T.jsx)("div",{className:re.a.error,children:f}):null]}),Object(T.jsx)(L,{onClick:function(){return r===o?j((e=o,t=u,function(){var r=Object(U.a)(K.a.mark((function r(n){var a;return K.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w(e,t);case 3:n(ee(!0)),r.next=10;break;case 6:r.prev=6,r.t0=r.catch(0),a=r.t0.response?r.t0.response.data.error:r.t0.message+", more details in the console",n(z(a));case 10:case"end":return r.stop()}}),r,null,[[0,6]])})));return function(e){return r.apply(this,arguments)}}())):O(!0);var e,t},children:"Next"})]})},ae=r(38),ce=r.n(ae),se=function(){var e=Object(l.c)((function(e){return e.enterNewPassword.error})),t=Object(a.useState)(""),r=Object(Q.a)(t,2),n=r[0],c=r[1],s=Object(l.c)((function(e){return e.enterNewPassword.redirect})),o=Object(l.b)();return Object(T.jsx)("div",{children:s?Object(T.jsxs)("h3",{className:ce.a.message,children:["We have sent you a message with a link to change your password to this address:",n]}):Object(T.jsxs)("div",{className:ce.a.main,children:[Object(T.jsx)("h1",{children:"Enter your email or phone number"}),Object(T.jsx)("h3",{children:"Please enter the email or phone number you used to login"}),Object(T.jsx)(I,{onChange:function(e){c(e.currentTarget.value),o(z(null))},placeholder:"Enter Email"}),e?Object(T.jsx)("div",{className:ce.a.error,children:e}):null,Object(T.jsx)(L,{onClick:function(){return o(function(e){return function(){var t=Object(U.a)(K.a.mark((function t(r){var n;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:r(ee(!0)),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),n=t.t0.response?t.t0.response.data.error:t.t0.message+", more details in the console",r(z(n));case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(n))},children:"Next"})]})})},oe=function(){return Object(T.jsx)("div",{children:"Error404"})},ie=r(33);!function(e){e.GET_PACKS="Packs/GET_PACKS",e.ADD_PACK="Packs/ADD_PACK"}(q||(q={}));var le={cardPacks:[]},de=function(e){return{type:q.GET_PACKS,payload:{data:e}}},ue=function(e){return{type:q.ADD_PACK,payload:{pack:e}}},je=r(20),be=r.n(je),me=function(e){var t=e.visible,r=void 0!==t&&t,n=e.title,c=void 0===n?"":n,s=e.content,o=void 0===s?"":s,i=e.footer,l=void 0===i?"":i,d=e.onClose,u=function(e){switch(e.key){case"Escape":d()}};return Object(a.useEffect)((function(){return document.addEventListener("keydown",u),function(){return document.removeEventListener("keydown",u)}})),r?Object(T.jsx)("div",{className:be.a.modal,onClick:d,children:Object(T.jsxs)("div",{className:be.a.modal_dialog,onClick:function(e){return e.stopPropagation()},children:[Object(T.jsxs)("div",{className:be.a.modal_header,children:[Object(T.jsx)("h3",{className:be.a.modal_title,children:c}),Object(T.jsx)("span",{className:be.a.modal_close,onClick:d,children:"\xd7"})]}),Object(T.jsx)("div",{className:be.a.modal_body,children:Object(T.jsx)("div",{className:be.a.modal_content,children:o})}),l&&Object(T.jsx)("div",{className:be.a.modal_footer,children:l})]})}):null},he=function(e){var t=e.onClose,r=Object(l.b)(),n=Object(u.a)({initialValues:{name:""},onSubmit:function(e){var n;r((n=e.name,function(){var e=Object(U.a)(K.a.mark((function e(t){var r,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("name pack thunk",n),t(Z(!0)),e.prev=2,e.next=5,k(n);case 5:r=e.sent,a=r.newCardsPack,t(ue(a)),t(Z(!1)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),e.t0.response,t(Z(!1));case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}())),t()}});return Object(T.jsxs)("form",{onSubmit:n.handleSubmit,children:[Object(T.jsx)("input",Object(m.a)({type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u0434\u044b"},n.getFieldProps("name"))),Object(T.jsx)("button",{type:"submit",children:"add"})]})},pe=r(15),Oe=r.n(pe),fe=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=Object(a.useState)(t),n=Object(Q.a)(r,2),c=n[0],s=n[1];return{items:Object(a.useMemo)((function(){var t=Object(ie.a)(e);return null!==c&&t.sort((function(e,t){return e[c.key]<t[c.key]?"ascending"===c.direction?-1:1:e[c.key]>t[c.key]?"ascending"===c.direction?1:-1:0})),t}),[e,c]),requestSort:function(e){var t="ascending";c&&c.key===e&&"ascending"===c.direction&&(t="descending"),s({key:e,direction:t})},sortConfig:c}}(e.items),r=t.items,n=t.requestSort,c=Object(a.useState)(!1),s=Object(Q.a)(c,2),o=s[0],i=s[1],l=function(){return i(!1)};return Object(T.jsxs)("div",{children:[Object(T.jsxs)("table",{className:Oe.a.table,children:[Object(T.jsx)("caption",{className:Oe.a.table_caption,children:"Packs"}),Object(T.jsx)("thead",{className:Oe.a.table_thead,children:Object(T.jsxs)("tr",{className:Oe.a.table_title_row,children:[Object(T.jsx)("th",{className:Oe.a.table_title,children:Object(T.jsx)("div",{onClick:function(){return n("name")},children:"Name"})}),Object(T.jsx)("th",{className:Oe.a.table_title,children:Object(T.jsx)("div",{onClick:function(){return n("cardsCount")},children:"CardsCount"})}),Object(T.jsx)("th",{className:Oe.a.table_title,children:Object(T.jsx)("div",{onClick:function(){return n("updated")},children:"Updated"})})]})}),Object(T.jsx)("tbody",{children:r.map((function(e){return Object(T.jsxs)("tr",{className:Oe.a.table_item,children:[Object(T.jsx)("td",{children:e.name}),Object(T.jsx)("td",{children:e.cardsCount}),Object(T.jsx)("td",{children:e.updated})]})}))})]}),Object(T.jsxs)("div",{className:Oe.a.button_group,children:[Object(T.jsx)(L,{className:Oe.a.button,onClick:function(){return i(!0)},children:"add"}),Object(T.jsx)(L,{children:"delete"}),Object(T.jsx)(L,{children:"update"})]}),Object(T.jsx)(me,{visible:o,title:"add pack",content:Object(T.jsx)(he,{onClose:l}),footer:Object(T.jsx)("button",{onClick:l,children:"close"}),onClose:l})]})},xe=r(58),ve=r.n(xe),ge=function(){var e=Object(l.b)();Object(a.useEffect)((function(){e(function(){var e=Object(U.a)(K.a.mark((function e(t){var r,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Z(!0)),e.prev=1,e.next=4,N();case 4:r=e.sent,n=r.cardPacks,t(de(n)),t(Z(!1)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response,t(Z(!1));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(l.c)((function(e){return e.packs.cardPacks}));return Object(T.jsx)("div",{className:ve.a.packs,children:Object(T.jsx)(fe,{items:t})})},_e=function(){return Object(T.jsx)("div",{children:"Table"})},we="/login",ye="/registration",Ne="/profile",ke="/enter-new-password/:token",Ce="/password-recovery",Ee="/show-all",Pe="/packs",Re="/cards",Se=function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(d.d,{children:[Object(T.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(T.jsx)(d.a,{to:Ne})}}),Object(T.jsx)(d.b,{path:we,render:function(){return Object(T.jsx)(D,{})}}),Object(T.jsx)(d.b,{path:ye,render:function(){return Object(T.jsx)(W,{})}}),Object(T.jsx)(d.b,{path:Ne,render:function(){return Object(T.jsx)($,{})}}),Object(T.jsx)(d.b,{path:ke,render:function(){return Object(T.jsx)(ne,{})}}),Object(T.jsx)(d.b,{path:Ce,render:function(){return Object(T.jsx)(se,{})}}),Object(T.jsx)(d.b,{path:Pe,render:function(){return Object(T.jsx)(ge,{})}}),Object(T.jsx)(d.b,{path:Re,render:function(){return Object(T.jsx)(_e,{})}}),"\u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(T.jsx)(d.b,{render:function(){return Object(T.jsx)(oe,{})}})]})})},Ae=r(59),Te=r.n(Ae),Le=function(){return Object(T.jsxs)("nav",{className:Te.a.nav,children:[Object(T.jsx)(i.b,{to:we,children:"Login "}),Object(T.jsx)(i.b,{to:ye,children:"Registration"}),Object(T.jsx)(i.b,{to:Ne,children:"Profile"}),Object(T.jsx)(i.b,{to:Ce,children:"Password recovery"}),Object(T.jsx)(i.b,{to:ke,children:"New password"}),Object(T.jsx)(i.b,{to:Ee,children:"Show all"}),Object(T.jsx)(i.b,{to:Pe,children:"Packs"}),Object(T.jsx)(i.b,{to:Re,children:"Cards"})]})};var Me=function(){Object(a.useEffect)((function(){e((function(e){v().then((function(t){e(E(t.data,!0,""))})).catch((function(t){var r=t.response?t.response.data.error:t.message+", more details in the console";e(P(r,!1))}))}))}),[]);var e=Object(l.b)();return Object(T.jsxs)(i.a,{children:[Object(T.jsx)(Le,{}),Object(T.jsx)(Se,{})]})},Fe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,94)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},Ie=r(22),De=r(60),Ge={},Ke={},Ue={a:1},qe=Object(Ie.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS-LOGIN":return Object(m.a)(Object(m.a)({},e),{},{isAuth:t.payload.isAuth,data:t.payload.data,errorMessage:""});case"FAILED-LOGIN":return Object(m.a)(Object(m.a)({},e),{},{isAuth:t.payload.isAuth,errorMessage:t.payload.errorMessage});case"SUCCESS-LOGOUT":return Object(m.a)(Object(m.a)({},e),{},{isAuth:t.payload.isAuth});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.REDIRECT:return Object(m.a)(Object(m.a)({},e),{},{isRedirecting:t.payload.redirect});case n.ERROR:return Object(m.a)(Object(m.a)({},e),{},{error:t.payload.error});case n.LOADING:return Object(m.a)(Object(m.a)({},e),{},{isLoading:t.payload.loading});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;return t.type,e},enterNewPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:t.responseError});case"CHANGE-REDIRECT":return Object(m.a)(Object(m.a)({},e),{},{redirect:t.redirectStatus});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS-FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.payload.isFetching});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.GET_PACKS:return Object(m.a)(Object(m.a)({},e),{},{cardPacks:t.payload.data});case q.ADD_PACK:return Object(m.a)(Object(m.a)({},e),{},{cardPacks:[].concat(Object(ie.a)(e.cardPacks),[t.payload.pack])});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"":default:return e}}}),Be=Object(Ie.d)(qe,Object(Ie.a)(De.a));o.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(i.a,{children:Object(T.jsx)(l.a,{store:Be,children:Object(T.jsx)(Me,{})})})}),document.getElementById("root")),Fe()}},[[93,1,2]]]);
//# sourceMappingURL=main.cd758fc4.chunk.js.map