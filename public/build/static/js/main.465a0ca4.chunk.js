(this["webpackJsonpuser-portal"]=this["webpackJsonpuser-portal"]||[]).push([[0],{104:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchMyAccountPage",(function(){return D})),a.d(n,"updateMyAccountPage",(function(){return K}));var r={};a.r(r),a.d(r,"fetchLinksPage",(function(){return Y}));var c={};a.r(c),a.d(c,"fetchMainPage",(function(){return z}));var s={};a.r(s),a.d(s,"fetchAccount",(function(){return q}));var i={};a.r(i),a.d(i,"fetchCalendarPage",(function(){return V}));var o={};a.r(o),a.d(o,"showSuccessSnackbar",(function(){return J})),a.d(o,"showErrorSnackbar",(function(){return Q})),a.d(o,"showInfoSnackbar",(function(){return X})),a.d(o,"clearSnackbar",(function(){return $}));var l,u=a(0),d=a(13),j=a.n(d),p=(a(104),a(18)),b=p.c,_=a(3),O=function(){var e=b((function(e){return e.account})),t=e.firstName,a=e.lastName,n=e.email,r=e.profilePicture,c=e.loading;e.error;return Object(_.jsxs)("div",{className:"portal__user-info ".concat(c?"loading":""),children:[Object(_.jsxs)("div",{className:"portal__user-avatar mb-24",children:[!c&&Object(_.jsx)("img",{src:r,alt:t+a}),Object(_.jsx)("a",{className:"portal__user-edit",children:Object(_.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[Object(_.jsx)("path",{d:"M3.02526 12.5568L7.44727 16.9763L16.2481 8.17045L11.8261 3.75095L3.02526 12.5568Z",fill:"#2D3134"}),Object(_.jsx)("path",{d:"M19.6341 3.01762L16.9827 0.366211C16.7401 0.123594 16.4227 0.00160156 16.1051 0H16.0919C15.7743 0.00160156 15.4573 0.123594 15.2153 0.366211L13.4453 2.13383L17.8665 6.55262L19.6342 4.785C19.8768 4.54238 19.9988 4.22539 20.0004 3.90781V3.89461C19.9987 3.57719 19.8767 3.2602 19.6341 3.01762Z",fill:"#2D3134"}),Object(_.jsx)("path",{d:"M0 20L5.745 18.6738L1.32379 14.255L0 20Z",fill:"#2D3134"})]})})]}),Object(_.jsxs)("h4",{className:"portal__user-name mb-6",children:[t," ",a," ",c&&"..."]}),Object(_.jsxs)("p",{className:"portal__user-email",children:[n," ",c&&"..."]})]})},A=a(6),C=a(91),h=a(177),f=a(174),E=a(83),m=a.n(E),N=a(85),x=a.n(N),S=a(84),g=a.n(S),v=a(86),T=a.n(v),P=a(87),y=a.n(P);!function(e){e.SWITCH_TAB="SWITCH_TAB"}(l||(l={}));var F,U,L=a(160),M=a(37),w=a(16),I=a.n(w),R=a(22),k=a(23),G=a.n(k);!function(e){e.FETCH_MY_ACCOUNT_PAGE="FETCH_MY_ACCOUNT_PAGE",e.FETCH_MY_ACCOUNT_PAGE_SUCCESS="FETCH_MY_ACCOUNT_PAGE_SUCCESS",e.FETCH_MY_ACCOUNT_PAGE_FAIL="FETCH_MY_ACCOUNT_PAGE_FAIL",e.UPDATE_MY_ACCOUNT_PAGE="UPDATE_MY_ACCOUNT_PAGE",e.UPDATE_MY_ACCOUNT_PAGE_SUCCESS="UPDATE_MY_ACCOUNT_PAGE_SUCCESS",e.UPDATE_MY_ACCOUNT_PAGE_FAIL="UPDATE_MY_ACCOUNT_PAGE_FAIL",e.UPDATE_FIRST_NAME="UPDATE_FIRST_NAME",e.UPDATE_LAST_NAME="UPDATE_LAST_NAME",e.UPDATE_EMAIL="UPDATE_EMAIL",e.UPDATE_MESSAGE="UPDATE_MESSAGE"}(F||(F={})),function(e){e.SNACKBAR_SUCCESS="SNACKBAR_SUCCESS",e.SNACKBAR_ERROR="SNACKBAR_ERROR",e.SNACKBAR_INFO="SNACKBAR_INFO",e.SNACKBAR_CLEAR="SNACKBAR_CLEAR"}(U||(U={}));var H,D=function(){return function(){var e=Object(R.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:F.FETCH_MY_ACCOUNT_PAGE}),e.next=4,G.a.get("https://jsonplaceholder.typicode.com/users");case 4:e.sent,setTimeout((function(){t({type:F.FETCH_MY_ACCOUNT_PAGE_SUCCESS,payload:{firstName:"Prosvit",lastName:"Design",email:"test@prosvit.design",profilePicture:"black-printer-and-ink-cartridges-PK2TQCX.jpg"}}),t({type:U.SNACKBAR_INFO,payload:"Account Loaded"})}),2e3),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:F.FETCH_MY_ACCOUNT_PAGE_FAIL,payload:"Loading My Account Page Error"}),t({type:U.SNACKBAR_ERROR,payload:"Loading My Account Page Error"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{firstName:"",lastName:"",email:"",profilePicture:"",password:""};return function(){var t=Object(R.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:F.UPDATE_MY_ACCOUNT_PAGE}),t.next=4,G.a.post("https://jsonplaceholder.typicode.com/posts",e);case 4:t.sent,setTimeout((function(){a({type:F.UPDATE_MY_ACCOUNT_PAGE_SUCCESS}),a({type:U.SNACKBAR_SUCCESS,payload:"Changes Saved"})}),2e3),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:F.UPDATE_MY_ACCOUNT_PAGE_FAIL,payload:"Updating My Account Page Error"}),a({type:U.SNACKBAR_ERROR,payload:"Updating My Account Page Error"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()};!function(e){e.FETCH_LINKS_PAGE="FETCH_LINKS_PAGE",e.FETCH_LINKS_PAGE_SUCCESS="FETCH_LINKS_PAGE_SUCCESS",e.FETCH_LINKS_PAGE_FAIL="FETCH_LINKS_PAGE_FAIL",e.UNMOUNT_LINKS_PAGE="UNMOUNT_LINKS_PAGE"}(H||(H={}));var B,Y=function(){return function(){var e=Object(R.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:H.FETCH_LINKS_PAGE}),e.next=4,G.a.get("https://jsonplaceholder.typicode.com/users");case 4:e.sent,setTimeout((function(){t({type:H.FETCH_LINKS_PAGE_SUCCESS,payload:[{img:"https://servicexservice.com/wp-content/uploads/2021/04/liberty_logo.png",description:"Tax Preparation, File Taxes, Income Tax Filing | Liberty",url:"https://www.libertytax.com/"},{img:"https://servicexservice.com/wp-content/uploads/2021/04/egnyte_logo.png",description:"One Unified Platform to Govern and Secure Content Everywhere",url:"https://www.egnyte.com/"}]}),t({type:U.SNACKBAR_INFO,payload:"Links Loaded"})}),2e3),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:H.FETCH_LINKS_PAGE_FAIL,payload:"Loading Links Page Error"}),t({type:U.SNACKBAR_ERROR,payload:"Loading Links Page Error"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};!function(e){e.FETCH_MAIN_PAGE="FETCH_MAIN_PAGE",e.FETCH_MAIN_PAGE_SUCCESS="FETCH_MAIN_PAGE_SUCCESS",e.FETCH_MAIN_PAGE_FAIL="FETCH_MAIN_PAGE_FAIL"}(B||(B={}));var W,z=function(){return function(){var e=Object(R.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:B.FETCH_MAIN_PAGE}),e.next=4,G.a.get("https://jsonplaceholder.typicode.com/users");case 4:e.sent,setTimeout((function(){t({type:B.FETCH_MAIN_PAGE_SUCCESS,payload:{title:"Hello! Welcome to the new Service2 Portal!",subtitle:"Here you can find important documents, links to your accounts on the applications we use and a helpful calendar detailing everything we have scheduled together.",textArray:["Text line 1","Text line 2"]}}),t({type:U.SNACKBAR_INFO,payload:"Portal Loaded"})}),2e3),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:B.FETCH_MAIN_PAGE_FAIL,payload:"Loading Main Page Error"}),t({type:U.SNACKBAR_ERROR,payload:"Loading Portal Error"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};!function(e){e.FETCH_ACCOUNT="FETCH_ACCOUNT",e.FETCH_ACCOUNT_SUCCESS="FETCH_ACCOUNT_SUCCESS",e.FETCH_ACCOUNT_FAIL="FETCH_ACCOUNT_FAIL"}(W||(W={}));var Z,q=function(){return function(){var e=Object(R.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:W.FETCH_ACCOUNT}),e.next=4,G.a.get("https://jsonplaceholder.typicode.com/users");case 4:e.sent,setTimeout((function(){t({type:W.FETCH_ACCOUNT_SUCCESS,payload:{firstName:"First",lastName:"Last",email:"first@last.email",profilePicture:"https://via.placeholder.com/110"}})}),2e3),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:W.FETCH_ACCOUNT_FAIL,payload:"Loading Account Error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};!function(e){e.FETCH_CALENDAR_PAGE="FETCH_CALENDAR_PAGE",e.FETCH_CALENDAR_PAGE_SUCCESS="FETCH_CALENDAR_PAGE_SUCCESS",e.FETCH_CALENDAR_PAGE_FAIL="FETCH_CALENDAR_PAGE_FAIL",e.UPDATE_MESSAGE="UPDATE_MESSAGE"}(Z||(Z={}));var V=function(){return function(){var e=Object(R.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Z.FETCH_CALENDAR_PAGE}),e.next=4,G.a.get("https://jsonplaceholder.typicode.com/users");case 4:e.sent,setTimeout((function(){t({type:Z.FETCH_CALENDAR_PAGE_SUCCESS,payload:[{date:"2021-08-11",title:"Public Event For all customers",color:"#e328af",description:"First test Description"},{date:"2021-08-11",title:"Repeating Event for test2",color:"#5ecfff",description:"Second test Description"},{date:"2021-08-13",title:"Repeating Event for test2",color:"#5ecfff",description:"Third test Description"}]}),t({type:U.SNACKBAR_INFO,payload:"Calendar Loaded"})}),2e3),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:Z.FETCH_CALENDAR_PAGE_FAIL,payload:"Loading Calendar Page Error"}),t({type:U.SNACKBAR_ERROR,payload:"Loading Calendar Error"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},J=function(e){return function(t){t({type:U.SNACKBAR_SUCCESS,payload:e})}},Q=function(e){return function(t){t({type:U.SNACKBAR_ERROR,payload:e})}},X=function(e){return function(t){t({type:U.SNACKBAR_INFO,payload:e})}},$=function(){return function(e){e({type:U.SNACKBAR_CLEAR})}},ee=Object(A.a)(Object(A.a)(Object(A.a)(Object(A.a)(Object(A.a)(Object(A.a)({},n),r),c),s),i),o),te=function(){var e=Object(p.b)();return Object(M.b)(ee,e)},ae=Object(L.a)((function(e){return{h1:{fontSize:40,fontWeight:700,marginBottom:16,textAlign:"center"},h5:{textAlign:"center",marginBottom:10},p:{textAlign:"center",marginBottom:10}}})),ne=function(){var e=ae(),t=b((function(e){return e.mainPage})),a=t.title,n=t.subtitle,r=t.loading,c=(t.error,t.textArray),s=te().fetchMainPage;return Object(u.useEffect)((function(){s()}),[]),Object(_.jsxs)("div",{className:"portal__page ".concat(r?"loading":""),children:[Object(_.jsx)("h1",{className:"".concat(e.h1," ").concat(r&&"la"),children:r?"...":a}),Object(_.jsx)("h5",{className:"".concat(e.h5," ").concat(r&&"la"),children:r?"...":n}),c.map((function(t,a){return Object(_.jsx)("p",{className:e.h5,children:t},a)}))]})},re=a(162),ce=a(164),se=a(165),ie=a(166),oe=a(167),le=a(168),ue=function(){var e=b((function(e){return e.linksPage})),t=e.links,a=(e.error,e.loading),n=Object(p.b)(),r=te().fetchLinksPage;return Object(u.useEffect)((function(){return r(),function(){n({type:H.UNMOUNT_LINKS_PAGE})}}),[]),Object(_.jsxs)("div",{className:"portal__page ".concat(a?"loading":""),children:[a&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"lat"}),Object(_.jsx)("div",{className:"lat"}),Object(_.jsx)("div",{className:"lat"})]}),Object(_.jsxs)(re.a,{className:"portal__links-table ".concat(a&&"hidden"),size:"small","aria-label":"Links Table",children:[Object(_.jsx)(ce.a,{children:Object(_.jsxs)(se.a,{children:[Object(_.jsx)(ie.a,{}),Object(_.jsx)(ie.a,{children:"Description"}),Object(_.jsx)(ie.a,{children:"Link"})]})}),Object(_.jsx)(oe.a,{children:t.map((function(e,t){return Object(_.jsxs)(se.a,{children:[Object(_.jsx)(ie.a,{component:"th",scope:"row",children:Object(_.jsx)("img",{src:e.img,alt:e.url})}),Object(_.jsx)(ie.a,{component:"th",scope:"row",children:e.description}),Object(_.jsx)(ie.a,{component:"th",scope:"row",children:Object(_.jsx)(le.a,{variant:"contained",size:"small",onClick:function(t){t.preventDefault(),window.open(e.url,"_blank")},children:"Visit"})})]},t)}))})]})]})},de=a(20),je=a(169),pe=a(170),be=a(171),_e=a(182),Oe=a(180),Ae=a(172),Ce=Object(L.a)((function(e){return{formControl:{marginBottom:e.spacing(3),paddingLeft:0,paddingRight:0},helper:{position:"absolute",bottom:-20,left:0,color:"#f44336"},legend:{fontSize:"1.5rem",marginBottom:e.spacing(2)},button:{width:"100%"},progress:{position:"absolute",top:"calc(50% - 20px)",left:"calc(50% - 20px)"}}})),he=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,fe=new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"),Ee=function(){var e=b((function(e){return e.myAccountPage})),t=e.firstName,a=e.lastName,n=e.email,r=e.loading,c=e.profilePicture,s=(e.error,e.message,Object(u.useState)(!1)),i=Object(de.a)(s,2),o=i[0],l=i[1],d=Object(u.useState)(!1),j=Object(de.a)(d,2),O=j[0],A=j[1],C=Object(u.useState)(!1),h=Object(de.a)(C,2),f=h[0],E=h[1],m=Object(u.useState)(!0),N=Object(de.a)(m,2),x=N[0],S=N[1],g=Object(u.useState)(!0),v=Object(de.a)(g,2),T=v[0],P=v[1],y=Object(u.useState)(!0),U=Object(de.a)(y,2),L=U[0],M=U[1],w=Object(u.useState)(""),I=Object(de.a)(w,2),R=I[0],k=I[1],G=Object(u.useState)(""),H=Object(de.a)(G,2),D=H[0],K=H[1],B=Object(u.useState)(""),Y=Object(de.a)(B,2),W=Y[0],z=Y[1],Z=Ce(),q=Object(p.b)(),V=te(),J=V.fetchMyAccountPage,Q=V.updateMyAccountPage,X=function(e,t){var a=e.target;"email"===t&&q({type:F.UPDATE_EMAIL,payload:a.value}),"lastName"===t&&q({type:F.UPDATE_LAST_NAME,payload:a.value}),"firstName"===t&&q({type:F.UPDATE_FIRST_NAME,payload:a.value}),"password"===t&&(k(a.value),S(a.value.length>5)),"newPassword"===t&&(K(a.value),P(fe.test(a.value))),"confirmNewPassword"===t&&(z(a.value),M(D===a.value))};Object(u.useEffect)((function(){J()}),[]),Object(u.useEffect)((function(){E(he.test(String(n).toLowerCase())),l(t.length>=1),A(a.length>=1)}),[n,t,a]);return Object(_.jsx)("div",{className:"portal__page",children:Object(_.jsxs)("form",{noValidate:!0,children:[r&&Object(_.jsx)(je.a,{className:Z.progress}),Object(_.jsx)("div",{className:r?"portal__form-loading":"",children:Object(_.jsxs)(pe.a,{container:!0,spacing:3,children:[Object(_.jsx)(pe.a,{item:!0,xs:12,sm:6,children:Object(_.jsx)("div",{className:Z.formControl,children:Object(_.jsxs)(be.a,{fullWidth:!0,variant:"outlined",required:!0,children:[Object(_.jsx)(_e.a,{htmlFor:"first-name",children:"First Name"}),Object(_.jsx)(Oe.a,{error:!o,labelWidth:105,id:"first-name",value:t,onInput:function(e){X(e,"firstName")}}),!o&&Object(_.jsx)(Ae.a,{className:Z.helper,children:"Field can't be blank"})]})})}),Object(_.jsx)(pe.a,{item:!0,xs:12,sm:6,children:Object(_.jsx)("div",{className:Z.formControl,children:Object(_.jsxs)(be.a,{fullWidth:!0,variant:"outlined",required:!0,children:[Object(_.jsx)(_e.a,{htmlFor:"last-name",children:"Last Name"}),Object(_.jsx)(Oe.a,{error:!O,labelWidth:105,id:"last-name",value:a,onInput:function(e){X(e,"lastName")}}),!O&&Object(_.jsx)(Ae.a,{className:Z.helper,children:"Field can't be blank"})]})})}),Object(_.jsx)(pe.a,{item:!0,xs:12,children:Object(_.jsx)("div",{className:Z.formControl,children:Object(_.jsxs)(be.a,{fullWidth:!0,variant:"outlined",required:!0,children:[Object(_.jsx)(_e.a,{htmlFor:"email",children:"Email"}),Object(_.jsx)(Oe.a,{error:!f,labelWidth:65,id:"email",value:n,onInput:function(e){X(e,"email")}}),!f&&Object(_.jsx)(Ae.a,{className:Z.helper,children:"Enter real email"})]})})}),Object(_.jsxs)(pe.a,{item:!0,xs:12,children:[Object(_.jsx)("legend",{className:Z.legend,children:"Password Change"}),Object(_.jsx)("div",{className:Z.formControl,children:Object(_.jsxs)(be.a,{fullWidth:!0,variant:"outlined",required:!0,children:[Object(_.jsx)(_e.a,{htmlFor:"current-password",children:"Current Password"}),Object(_.jsx)(Oe.a,{error:!x,labelWidth:145,id:"current-password",onInput:function(e){X(e,"password")}}),!x&&Object(_.jsx)(Ae.a,{className:Z.helper,children:"Enter Your current password"})]})})]}),Object(_.jsx)(pe.a,{item:!0,xs:12,children:Object(_.jsx)("div",{className:Z.formControl,children:Object(_.jsxs)(be.a,{fullWidth:!0,variant:"outlined",required:!0,children:[Object(_.jsx)(_e.a,{htmlFor:"new-password",children:"New Password"}),Object(_.jsx)(Oe.a,{error:!T,labelWidth:125,id:"new-password",onInput:function(e){X(e,"newPassword")}}),!T&&Object(_.jsx)(Ae.a,{className:Z.helper,children:"Min 6 chars and contain: uppercase letter, lowercase letter, symbol "})]})})}),Object(_.jsx)(pe.a,{item:!0,xs:12,children:Object(_.jsx)("div",{className:Z.formControl,children:Object(_.jsxs)(be.a,{fullWidth:!0,variant:"outlined",required:!0,children:[Object(_.jsx)(_e.a,{htmlFor:"confirm-password",children:"Confirm new Password"}),Object(_.jsx)(Oe.a,{error:!L,labelWidth:185,id:"confirm-password",onInput:function(e){X(e,"confirmNewPassword")}}),!L&&Object(_.jsx)(Ae.a,{className:Z.helper,children:"New Password didn't match Confirm Password"})]})})}),Object(_.jsx)(pe.a,{item:!0,xs:12,children:Object(_.jsx)(le.a,{disabled:!f||!o||!O,onClick:function(){if(R.length>=1||D.length>=1||W.length>=1){if(R.length<=5)return S(!1),!1;if(S(!0),!fe.test(D))return P(!1),!1;if(P(!0),console.log(D===W),D!==W)return M(!1),!1;M(!0),R.length>=6&&fe.test(D)&&D===W&&Q({firstName:t,lastName:a,email:n,profilePicture:c,password:D})}else Q({firstName:t,lastName:a,email:n,profilePicture:c,password:""})},variant:"contained",color:"primary",size:"large",className:Z.button,children:"Save Changes"})})]})})]})})},me=a(90),Ne=a(92),xe=a(93),Se=a(94),ge=a(178),ve=a(173),Te=a(135),Pe=Object(L.a)((function(e){return{progress:{position:"absolute",top:"calc(50% - 20px)",left:"calc(50% - 20px)",zIndex:10}}})),ye=function(){var e=b((function(e){return e.calendarPage})),t=e.loading,a=e.events,n=te().fetchCalendarPage,r=Pe(),c=Object(u.useState)(!1),s=Object(de.a)(c,2),i=s[0],o=s[1],l=Object(u.useState)({title:"",description:""}),d=Object(de.a)(l,2),j=d[0],p=d[1],O=function(){o(!1)};return Object(u.useEffect)((function(){n()}),[]),Object(_.jsxs)("div",{className:"portal__page",children:[t&&Object(_.jsx)(je.a,{className:r.progress}),Object(_.jsx)("div",{className:t?"portal__calendar-loading portal__calendar maincontainer":"portal__calendar maincontainer",children:Object(_.jsx)(me.a,{plugins:[Ne.a,xe.a,Se.a],initialView:"dayGridMonth",height:"auto",headerToolbar:{left:"prev,next",center:"title",right:"dayGridMonth,dayGridWeek"},events:a,eventClick:function(e){var t=e.event;p({title:t.title,description:t.extendedProps.description}),o(!0)}})}),Object(_.jsx)(ge.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:i,className:"portal__modal",onClose:O,closeAfterTransition:!0,BackdropComponent:ve.a,BackdropProps:{timeout:500},children:Object(_.jsx)(Te.a,{in:i,children:Object(_.jsxs)("div",{className:"portal__modal--box",children:[Object(_.jsx)("button",{className:"portal__modal--close",onClick:O}),Object(_.jsx)("header",{className:"portal__modal--header",children:Object(_.jsx)("h2",{className:"portal__modal--title",children:j.title})}),Object(_.jsx)("div",{className:"portal__modal--body",children:Object(_.jsx)("p",{children:j.description})})]})})})]})},Fe=function(){return Object(_.jsx)("div",{className:"portal__page",children:"Documents"})},Ue=function(e){var t=e.children,a=e.value,n=e.index,r=Object(C.a)(e,["children","value","index"]);return Object(_.jsx)("div",Object(A.a)(Object(A.a)({role:"tabpanel",hidden:a!==n,id:"page-".concat(n),"aria-labelledby":"page-".concat(n)},r),{},{children:a===n&&Object(_.jsx)("div",{children:t})}))},Le=function(e){return{id:"page-tab-".concat(e),"aria-controls":"page-tab-".concat(e)}},Me=function(){var e=Object(p.b)(),t=b((function(e){return e.page})).pageNumber;return Object(_.jsxs)("div",{className:"portal__main-container",children:[Object(_.jsxs)("div",{className:"portal__tabs-nav",children:[Object(_.jsxs)(h.a,{orientation:"vertical",onChange:function(t,a){e({type:l.SWITCH_TAB,payload:a})},value:t,TabIndicatorProps:{style:{display:"none"}},children:[Object(_.jsx)(f.a,Object(A.a)({className:"portal__nav-button",label:Object(_.jsxs)("div",{className:"portal__nav-button--inner",children:[Object(_.jsx)(m.a,{})," My Account"]})},Le(0))),Object(_.jsx)(f.a,Object(A.a)({className:"portal__nav-button",label:Object(_.jsxs)("div",{className:"portal__nav-button--inner",children:[Object(_.jsx)(g.a,{})," Calendar"]})},Le(1))),Object(_.jsx)(f.a,Object(A.a)({className:"portal__nav-button",label:Object(_.jsxs)("div",{className:"portal__nav-button--inner",children:[Object(_.jsx)(x.a,{})," Links"]})},Le(2))),Object(_.jsx)(f.a,Object(A.a)({className:"portal__nav-button",label:Object(_.jsxs)("div",{className:"portal__nav-button--inner",children:[Object(_.jsx)(T.a,{})," Documents"]})},Le(3))),Object(_.jsx)(f.a,Object(A.a)({className:"portal__nav-button hidden"},Le(4)))]}),Object(_.jsxs)("button",{className:"MuiButtonBase-root MuiTab-root MuiTab-textColorInherit portal__nav-button",children:[Object(_.jsx)("span",{className:"MuiTab-wrapper",children:Object(_.jsxs)("div",{className:"portal__nav-button--inner",children:[Object(_.jsx)(y.a,{})," Log Out"]})}),Object(_.jsx)("span",{className:"MuiTouchRipple-root"})]})]}),Object(_.jsxs)("div",{className:"portal__tabs-panels",children:[Object(_.jsx)(Ue,{value:t,index:0,children:Object(_.jsx)(Ee,{})}),Object(_.jsx)(Ue,{value:t,index:1,children:Object(_.jsx)(ye,{})}),Object(_.jsx)(Ue,{value:t,index:2,children:Object(_.jsx)(ue,{})}),Object(_.jsx)(Ue,{value:t,index:3,children:Object(_.jsx)(Fe,{})}),Object(_.jsx)(Ue,{value:t,index:4,children:Object(_.jsx)(ne,{})})]})]})},we=a(176),Ie=a(89),Re=a(179),ke=a(181),Ge=function(e){return Object(_.jsx)(Re.a,Object(A.a)({elevation:6,variant:"filled"},e))},He=function(){var e=b((function(e){return e.snackbar})),t=e.successSnackbarOpen,a=e.successSnackbarMessage,n=te().clearSnackbar,r=function(){n()};return Object(_.jsx)(ke.a,{autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},open:t,onClose:r,children:Object(_.jsx)(Ge,{onClose:r,severity:"success",children:a})})},De=function(e){return Object(_.jsx)(Re.a,Object(A.a)({elevation:6,variant:"filled"},e))},Ke=function(){var e=b((function(e){return e.snackbar})),t=e.errorSnackbarOpen,a=e.errorSnackbarMessage,n=te().clearSnackbar,r=function(){n()};return Object(_.jsx)(ke.a,{autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},open:t,onClose:r,children:Object(_.jsx)(De,{onClose:r,severity:"error",children:a})})},Be=function(e){return Object(_.jsx)(Re.a,Object(A.a)({elevation:6,variant:"filled"},e))},Ye=function(){var e=b((function(e){return e.snackbar})),t=e.infoSnackbarOpen,a=e.infoSnackbarMessage,n=te().clearSnackbar,r=function(){n()};return Object(_.jsx)(ke.a,{autoHideDuration:3e3,anchorOrigin:{vertical:"top",horizontal:"center"},open:t,onClose:r,children:Object(_.jsx)(Be,{onClose:r,severity:"info",children:a})})},We=Object(Ie.a)({palette:{primary:{main:"#47ab82"}}}),ze=function(){var e=Object(p.b)();return Object(u.useEffect)((function(){e(q())}),[]),Object(_.jsxs)(we.a,{theme:We,children:[Object(_.jsx)(O,{}),Object(_.jsx)(Me,{}),Object(_.jsx)(He,{}),Object(_.jsx)(Ke,{}),Object(_.jsx)(Ye,{})]})},Ze=a(88),qe={firstName:"",lastName:"",email:"",profilePicture:"",loading:!0,error:null},Ve={events:[],loading:!0,error:null,message:""},Je={loading:!0,error:null,links:[]},Qe={title:"",subtitle:"",textArray:[],error:null,loading:!0},Xe={firstName:"",lastName:"",email:"",profilePicture:"",message:"",loading:!0,error:null},$e={pageNumber:4},et={successSnackbarOpen:!1,errorSnackbarOpen:!1,infoSnackbarOpen:!1,successSnackbarMessage:"",errorSnackbarMessage:"",infoSnackbarMessage:""},tt=Object(M.c)({account:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.FETCH_ACCOUNT:return{loading:!0,error:null,firstName:"",lastName:"",email:"",profilePicture:""};case W.FETCH_ACCOUNT_SUCCESS:return{loading:!1,error:null,firstName:t.payload.firstName,lastName:t.payload.lastName,email:t.payload.email,profilePicture:t.payload.profilePicture};case W.FETCH_ACCOUNT_FAIL:return{loading:!1,error:t.payload,firstName:"",lastName:"",email:"",profilePicture:""};default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.SWITCH_TAB:return{pageNumber:t.payload};default:return e}},mainPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.FETCH_MAIN_PAGE:return{title:"",subtitle:"",textArray:[],error:null,loading:!0};case B.FETCH_MAIN_PAGE_SUCCESS:return{title:t.payload.title,subtitle:t.payload.subtitle,textArray:t.payload.textArray,error:null,loading:!1};case B.FETCH_MAIN_PAGE_FAIL:return{title:"",subtitle:"",textArray:[],error:t.payload,loading:!1};default:return e}},linksPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.FETCH_LINKS_PAGE:return{loading:!0,error:null,links:[]};case H.FETCH_LINKS_PAGE_SUCCESS:return{loading:!1,error:null,links:t.payload};case H.FETCH_LINKS_PAGE_FAIL:return{loading:!1,error:t.payload,links:[]};case H.UNMOUNT_LINKS_PAGE:return{loading:!0,links:[],error:null};default:return e}},myAccountPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.FETCH_MY_ACCOUNT_PAGE:return Object(A.a)(Object(A.a)({},e),{loading:!0});case F.FETCH_MY_ACCOUNT_PAGE_SUCCESS:return{firstName:t.payload.firstName,lastName:t.payload.lastName,email:t.payload.email,profilePicture:t.payload.profilePicture,message:"",loading:!1,error:null};case F.FETCH_MY_ACCOUNT_PAGE_FAIL:return Object(A.a)(Object(A.a)({},e),{error:t.payload});case F.UPDATE_MY_ACCOUNT_PAGE:return Object(A.a)(Object(A.a)({},e),{loading:!0,message:""});case F.UPDATE_MY_ACCOUNT_PAGE_SUCCESS:return Object(A.a)(Object(A.a)({},e),{loading:!1});case F.UPDATE_MY_ACCOUNT_PAGE_FAIL:return Object(A.a)(Object(A.a)({},e),{loading:!1,error:t.payload});case F.UPDATE_FIRST_NAME:return Object(A.a)(Object(A.a)({},e),{firstName:t.payload});case F.UPDATE_LAST_NAME:return Object(A.a)(Object(A.a)({},e),{lastName:t.payload});case F.UPDATE_EMAIL:return Object(A.a)(Object(A.a)({},e),{email:t.payload});case F.UPDATE_MESSAGE:return Object(A.a)(Object(A.a)({},e),{message:t.payload});default:return e}},calendarPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z.FETCH_CALENDAR_PAGE:return Object(A.a)(Object(A.a)({},e),{loading:!0,message:""});case Z.FETCH_CALENDAR_PAGE_SUCCESS:return{events:t.payload,loading:!1,error:null,message:""};case Z.FETCH_CALENDAR_PAGE_FAIL:return Object(A.a)(Object(A.a)({},e),{error:t.payload});case Z.UPDATE_MESSAGE:return Object(A.a)(Object(A.a)({},e),{message:t.payload});default:return e}},snackbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.SNACKBAR_SUCCESS:return Object(A.a)(Object(A.a)({},e),{},{successSnackbarOpen:!0,successSnackbarMessage:t.payload});case U.SNACKBAR_ERROR:return Object(A.a)(Object(A.a)({},e),{},{errorSnackbarOpen:!0,errorSnackbarMessage:t.payload});case U.SNACKBAR_INFO:return Object(A.a)(Object(A.a)({},e),{},{infoSnackbarOpen:!0,infoSnackbarMessage:t.payload});case U.SNACKBAR_CLEAR:return Object(A.a)(Object(A.a)({},e),{},{successSnackbarOpen:!1,errorSnackbarOpen:!1,infoSnackbarOpen:!1});default:return e}}}),at=Object(M.d)(tt,Object(M.a)(Ze.a));j.a.render(Object(_.jsx)(p.a,{store:at,children:Object(_.jsx)(ze,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.465a0ca4.chunk.js.map