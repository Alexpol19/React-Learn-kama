(this["webpackJsonpreact-kama"]=this["webpackJsonpreact-kama"]||[]).push([[0],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(42),r=n(10),o={newMessageText:"cdcd",dialogs:[{id:1,name:"Vasea"},{id:2,name:"Misa"},{id:3,name:"Petea"}],messagesData:[{id:1,name:"Vasea",messageText:"Hello!!!",url:"https://io.ua/img_aa/large/3223/32/32233275.jpg",own:0},{id:2,name:"Vasea",messageText:"Where are you?",url:"https://io.ua/img_aa/large/3223/32/32233275.jpg",own:0},{id:3,name:"Vasea",messageText:"AU",url:"https://io.ua/img_aa/large/3223/32/32233275.jpg",own:0},{id:4,name:"I",messageText:"I'm Here",url:"http://lorempixel.com/75/75",own:1}]},u="AddMessage",s=function(e){return{type:u,message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,name:"I",messageText:t.message,url:"http://lorempixel.com/75/75",own:1};return Object(r.a)(Object(r.a)({},e),{},{newMessageText:"",messagesData:[].concat(Object(a.a)(e.messagesData),[n])});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(136),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"Content-Type":"application/json","API-KEY":"92b9295a-17be-4736-8b70-151d480ec64a"}}),o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data.resultCode}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))}},u={auth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e){var t=e.email,n=e.password,a=e.rememberMe,o=void 0!==a&&a;return r.post("auth/login",{email:t,password:n,rememberMe:o}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},s={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data.resultCode}))}}},130:function(e,t,n){"use strict";n.d(t,"e",(function(){return _})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return O}));var a=n(31),r=n.n(a),o=n(55),u=n(42),s=n(10),l=n(13),i={usersData:[],pageSize:5,totalUsers:0,currentPage:1,isFetching:!1},c="FollowUser",m="UnfollowUser",p="SetUsers",f="SetTotalUsers",d="UpdateCurrentPage",h="UpdateIsFetching",g="FetchingFollow",b=function(e){return{type:c,userId:e}},E=function(e){return{type:m,userId:e}},_=function(e){return{type:d,currentPage:e}},v=function(){return{type:h}},w=function(e){return{type:g,userId:e}},k=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(v()),n.next=3,l.c.getUsers(e,t);case 3:o=n.sent,a((u=o.totalCount,{type:f,totalUsers:u})),a((r=o.items,{type:p,newUsers:r})),a(v());case 7:case"end":return n.stop()}var r,u}),n)})));return function(e){return n.apply(this,arguments)}}()},D=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(n)),e.next=3,a(n);case 3:0===e.sent&&t(o(n)),t(w(n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),j=function(e){return function(t){D(t,e,l.c.follow.bind(l.c),b)}},O=function(e){return function(t){D(t,e,l.c.unfollow.bind(l.c),E)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0,n=Object(s.a)({},e);switch(t.type){case p:return n.usersData=Object(u.a)(t.newUsers),n.usersData=n.usersData.map((function(e){return e.followFetching=!1,e})),n;case f:return n.totalUsers=t.totalUsers,n;case d:return n.currentPage=t.currentPage,n;case h:return n.isFetching=!n.isFetching,n;case c:return n.usersData=e.usersData.map((function(e){return e.id==t.userId&&(e.followed=!0),e})),n;case m:return n.usersData=e.usersData.map((function(e){return e.id==t.userId&&(e.followed=!1),e})),n;case g:return n.usersData=e.usersData.map((function(e){return e.id==t.userId&&(e.followFetching=!e.followFetching),e})),n;default:return e}}},134:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},165:function(e,t,n){e.exports=n(313)},170:function(e,t,n){},172:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){return e?void 0:"Required Field"},r=function(e){return function(t){if(t&&t.length<e)return"Need min ".concat(e," symbols")}}},313:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(66),u=n.n(o),s=(n(170),n(171),n(24)),l=n(25),i=n(27),c=n(26),m=n(7),p=n(21),f=(n(172),n(90)),d=n.n(f),h=n(134),g=n.n(h),b=n(71),E=n.n(b),_=function(e){return r.a.createElement("header",{className:"containerFluid"},r.a.createElement("div",{className:"container "+E.a.header__line},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:g.a})),e.isAuth?r.a.createElement("div",null,r.a.createElement("span",{className:E.a.userName},e.login),r.a.createElement("img",{src:e.photoUrl,alt:"logo"}),r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(p.b,{to:"/login",className:E.a.login},"Login")))},v=n(9),w=n(10),k=n(13),D=n(45),j={id:null,email:null,login:null,isAuth:!1},O="setAuthData",y=function(e,t,n,a){return{type:O,data:{id:e,email:t,login:n,isAuth:a}}},F=function(){return function(e){return k.a.auth().then((function(t){if(0===t.resultCode){var n=t.data,a=n.id,r=n.login,o=n.email;e(y(a,o,r,!0))}else if(1===t.resultCode){e(y(null,null,null,!1))}}))}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(w.a)(Object(w.a)({},e),t.data);default:return e}},x=Object(v.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userData:e.profile.userData}}),{logout:function(){return function(e){k.a.logout().then((function(t){0===t.resultCode&&e(F())}))}}})((function(e){var t="";return e.userData&&(t=null!=e.userData.photos.small?e.userData.photos.small:null!=e.userData.photos.large?e.userData.photos.large:"https://media.istockphoto.com/vectors/silhouette-of-male-head-man-face-in-profile-side-view-vector-id956741868?k=6&m=956741868&s=170667a&w=0&h=i5YCJE7emqMCvB8xGTviXpr-OFknbynAXA_hcGAZ_Vc="),r.a.createElement(_,Object.assign({},e,{photoUrl:t}))})),C=(n(194),n(52)),I=n.n(C),N=function(e){var t="";return t=null!=e.friend.photos.small?e.friend.photos.small:null!=e.friend.photos.large?e.friend.photos.large:"https://media.istockphoto.com/vectors/silhouette-of-male-head-man-face-in-profile-side-view-vector-id956741868?k=6&m=956741868&s=170667a&w=0&h=i5YCJE7emqMCvB8xGTviXpr-OFknbynAXA_hcGAZ_Vc=",r.a.createElement("a",{href:"#",className:I.a.friend},r.a.createElement("img",{src:t,alt:"logo"}),r.a.createElement("span",null,e.friend.name))},P=Object(v.b)((function(e){return{friends:e.users.usersData}}))((function(e){return r.a.createElement("div",{className:I.a.friends},r.a.createElement("h2",null,"Friends"),r.a.createElement("div",{className:I.a.friendsLinks},e.friends.map((function(e){if(1==e.followed)return r.a.createElement(N,{key:e.id,friend:e})}))))})),A=n(53),T=n.n(A),U=function(e){return r.a.createElement("div",{className:T.a.menu},r.a.createElement(p.b,{to:"/"+e.linkName,activeClassName:T.a.active},e.name))},M=Object(v.b)((function(e){return{menu:e.navBar.menu}}))((function(e){return r.a.createElement("div",{className:T.a.menu},e.menu.map((function(e){return r.a.createElement(U,{key:e.id,name:e.name,linkName:e.link})})))})),L=function(e){return r.a.createElement("nav",null,r.a.createElement(M,null),r.a.createElement(P,null))},z=n(68),V=(n(195),n(43)),B=n.n(V),W=n(34),H=n.n(W),J=n(139),R=function(e){var t=Object(a.useState)(e.status),n=Object(J.a)(t,2),o=n[0],u=n[1],s=Object(a.useState)(!1),l=s[0],i=s[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("p",{className:B.a.status},r.a.createElement("span",null,"Status: "),l?r.a.createElement("input",{type:"text",className:B.a.status__input,autoFocus:!0,onBlur:function(){i(!1),e.status!=o&&e.updateStatus(o)},onChange:function(e){return function(e){u(e.target.value)}(e)},value:o}):r.a.createElement("span",{onClick:function(){e.authId==e.currentUserId&&i(!0)}},e.status))},X=function(e){return e.profileData?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:e.profileData.photos.large}),r.a.createElement("div",{className:B.a.author},r.a.createElement("img",{src:e.profileData.photos.small}),r.a.createElement("div",{className:B.a.author__details},r.a.createElement("h3",null,e.profileData.fullName),r.a.createElement(R,{status:e.status,authId:e.authId,currentUserId:e.profileData.userId,updateStatus:e.updateStatus}),r.a.createElement("p",null,"About me: ",r.a.createElement("span",null,e.profileData.aboutMe)),e.profileData.lookingForAJob?r.a.createElement("p",null,"Looking for a job"):r.a.createElement("p",null,"Work"),e.profileData.lookingForAJob?r.a.createElement("p",null,e.profileData.lookingForAJobDescription):r.a.createElement(r.a.Fragment,null),r.a.createElement("p",null,"Socials:"),e.profileData.contacts.facebook?r.a.createElement("p",null,"Facebook: ",r.a.createElement("span",null,e.profileData.contacts.facebook)):r.a.createElement(r.a.Fragment,null),e.profileData.contacts.mainLink?r.a.createElement("p",null,"mainLink: ",r.a.createElement("span",null,e.profileData.contacts.mainLink)):r.a.createElement(r.a.Fragment,null),e.profileData.contacts.website?r.a.createElement("p",null,"website: ",r.a.createElement("span",null,e.profileData.contacts.website)):r.a.createElement(r.a.Fragment,null),e.profileData.contacts.vk?r.a.createElement("p",null,"vk: ",r.a.createElement("span",null,e.profileData.contacts.vk)):r.a.createElement(r.a.Fragment,null),e.profileData.contacts.twitter?r.a.createElement("p",null,"twitter: ",r.a.createElement("span",null,e.profileData.contacts.twitter)):r.a.createElement(r.a.Fragment,null),e.profileData.contacts.instagram?r.a.createElement("p",null,"instagram: ",r.a.createElement("span",null,e.profileData.contacts.instagram)):r.a.createElement(r.a.Fragment,null),e.profileData.contacts.youtube?r.a.createElement("p",null,"youtube: ",r.a.createElement("span",null,e.profileData.contacts.youtube)):r.a.createElement(r.a.Fragment,null),e.profileData.contacts.github?r.a.createElement("p",null,"github: ",r.a.createElement("span",null,e.profileData.contacts.github)):r.a.createElement(r.a.Fragment,null)))):r.a.createElement(H.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})},Z=n(31),q=n.n(Z),G=n(55),Y=n(42),K={userStatus:"",userData:null,newPostText:"",postsData:[{id:1,likeCount:2,description:"Hello World",url:"https://klike.net/uploads/posts/2019-05/1556777145_1.jpg"},{id:2,likeCount:5,description:"Hello Peoples",url:"https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg"}]},Q="AddPost",$="AddPost",ee="SetUserData",te="SetStatus",ne=function(e){return{type:ee,userData:e}},ae=function(e){return{type:te,status:e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:var n={id:3,likeCount:0,description:t.text,url:"https://klike.net/uploads/posts/2019-05/1556777145_1.jpg"};return Object(w.a)(Object(w.a)({},e),{},{newPostText:"",postsData:[].concat(Object(Y.a)(e.postsData),[n])});case $:return console.log(t.postId),console.log(e.postsData),Object(w.a)(Object(w.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!=t.postId}))});case ee:return Object(w.a)(Object(w.a)({},e),{},{userData:t.userData});case te:return Object(w.a)(Object(w.a)({},e),{},{userStatus:t.status});default:return e}},oe=n(72),ue=n.n(oe),se=n(94),le=n.n(se),ie=function(e){return r.a.createElement("div",{className:le.a.post},r.a.createElement("img",{src:e.url}),r.a.createElement("p",{className:le.a.post__text},e.description),r.a.createElement("span",null,e.likeCount),"  ",r.a.createElement("button",null,"Like"))},ce=n(131),me=n(132),pe=n(30),fe=n(38),de=Object(pe.a)(7),he=Object(me.a)({form:"newPost"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(ce.a,{name:"postText",placeholder:"New post",component:fe.a,label:"Enter Text",type:"text",validate:[pe.b,de]}),r.a.createElement("button",null,"Add Post"))})),ge=function(e){return r.a.createElement("div",{className:ue.a.posts},r.a.createElement("h2",null,"My posts"),r.a.createElement("div",{className:ue.a.posts__new},r.a.createElement(he,{onSubmit:e.addPost})),r.a.createElement("div",{className:ue.a.posts__others},e.posts.map((function(e){return r.a.createElement(ie,{id:e.id,key:e.id,likeCount:e.likeCount,description:e.description,url:e.url})}))))},be=r.a.memo((function(e){return r.a.createElement(ge,e)})),Ee=Object(v.b)((function(e){return{posts:e.profile.postsData}}),(function(e){return{addPost:function(t){var n;e((n=t.postText,{type:Q,text:n}))}}}))(be),_e=function(e){return r.a.createElement("div",null,r.a.createElement(X,Object.assign({},e,{updateStatus:e.updateStatus})),r.a.createElement(Ee,null))},ve=n(98),we=n(8),ke=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).updateStatus=a.updateStatus.bind(Object(z.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.getProfileThunkCreator(e),this.props.getStatusThunkCreator(e),this.userId||null==this.props.userId||(this.userId=this.props.userId,this.props.setUserData())}},{key:"componentDidUpdate",value:function(){}},{key:"updateStatus",value:function(e){this.props.updateStatusThunkCreator(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_e,Object.assign({},this.props,{authId:this.props.userId,updateStatus:this.updateStatus})))}}]),n}(r.a.Component),De=Object(we.compose)(Object(v.b)((function(e){return{profileData:e.profile.userData,userId:e.auth.id,status:e.profile.userStatus}}),{updateStatusThunkCreator:function(e){return function(t){k.b.updateStatus(e).then((function(n){0===n&&t(ae(e))})).catch((function(e){console.log(e)}))}},getStatusThunkCreator:function(e){return function(){var t=Object(G.a)(q.a.mark((function t(n){var a;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.b.getStatus(e);case 2:(a=t.sent)&&n(ae(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getProfileThunkCreator:function(e){return function(t){t(ne()),k.b.getProfile(e).then((function(e){t(ne(e))})).catch((function(e){console.log(e)}))}},setUserData:ne}),m.f,ve.a)(ke),je=n(97),Oe=n.n(je),ye=Object(pe.a)(6),Fe=Object(pe.a)(10),Se=Object(me.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("div",{className:Oe.a.loginPage},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(ce.a,{name:"email",placeholder:"Login",component:fe.a,validate:[pe.b,Fe],label:"Email",type:"email"})),r.a.createElement("div",null,r.a.createElement(ce.a,{name:"password",placeholder:"Password",component:fe.a,validate:[pe.b,ye],label:"Password",type:"text"})),r.a.createElement("div",null,r.a.createElement(ce.a,{name:"remember",id:"rememberMe",label:"Remember me",component:fe.a,type:"checkbox"})),n?r.a.createElement("div",{className:Oe.a.commonError},n):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",null,r.a.createElement("button",null,"Login"))))})),xe=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.login(t)},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement(Se,{onSubmit:this.onSubmit})}}]),n}(r.a.Component),Ce=Object(v.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e){return function(t){k.a.login(e).then((function(e){if(0===e.resultCode)t(F());else{var n=e.messages.length>0?e.messages:"Some error!",a=Object(D.a)("login",{_error:n});t(a)}}))}}})(xe),Ie={initialized:!1},Ne="SET_INITIALIZED",Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Ae=n(129),Te={menu:[{id:1,name:"Profile",link:"profile"},{id:2,name:"Dialogs",link:"dialogs"},{id:3,name:"Music",link:"music"},{id:4,name:"News",link:"news"},{id:5,name:"Users",link:"users"},{id:6,name:"Settings",link:"settings"}]},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Me=n(130),Le=n(133),ze=n(138),Ve=n(8),Be=Ve.createStore,We=Ve.combineReducers,He=Ve.applyMiddleware,Je=Ve.compose,Re=Be(We({app:Pe,profile:re,chat:Ae.b,navBar:Ue,users:Me.a,auth:S,form:Le.a}),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Je)(He(ze.a))),Xe=r.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,326))})),Ze=r.a.lazy((function(){return n.e(4).then(n.bind(null,325))})),qe=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:d.a.appWrapper},r.a.createElement(x,null),r.a.createElement("main",{className:"container"},r.a.createElement(L,null),r.a.createElement("div",{className:d.a.content},r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(De,null)}}),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(H.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})},r.a.createElement(Ze,null))}}),r.a.createElement(m.b,{path:"/users",render:(e=Xe,function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(H.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})},r.a.createElement(e,t))})}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Ce,null)}})))):r.a.createElement(H.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0});var e}}]),n}(r.a.Component),Ge=Object(we.compose)(m.f,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=[e(F())];Promise.all(t).then((function(t){e({type:Ne})}))}}}))(qe),Ye=function(e){return r.a.createElement(p.a,null,r.a.createElement(v.a,{store:Re},r.a.createElement(Ge,null)))};u.a.render(r.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(44),u=n.n(o),s=function(e){var t=e.label,n=e.children,a=e.meta,o=a.touched,s=a.error,l=a.warning;return r.a.createElement("div",{className:u.a.elemWrap},r.a.createElement("label",null,t),n,o&&(s&&r.a.createElement("span",{className:u.a.error},s)||l&&r.a.createElement("span",{className:u.a.warning},l)))},l=function(e){return r.a.createElement(s,e,r.a.createElement("input",Object.assign({className:u.a.elemStyle},e.input,{type:e.type,placeholder:e.placeholder})))}},43:function(e,t,n){e.exports={author:"ProfileInfo_author__3qY-Z",author__details:"ProfileInfo_author__details__tsDl_",status:"ProfileInfo_status__2i5Hw",status__input:"ProfileInfo_status__input__2K3Pz"}},44:function(e,t,n){e.exports={elemWrap:"FormControls_elemWrap__eM-VS",elemStyle:"FormControls_elemStyle__3VmC5",error:"FormControls_error__28f8R",warning:"FormControls_warning__1Z_Zm"}},52:function(e,t,n){e.exports={friends:"Friends_friends__QGCCp",friendsLinks:"Friends_friendsLinks__2ln0a",friend:"Friends_friend__2jQeo"}},53:function(e,t,n){e.exports={menu:"Menu_menu__RHthm",active:"Menu_active__4FU-g",activeMessages:"Menu_activeMessages__2Vigz"}},71:function(e,t,n){e.exports={header__line:"Header_header__line__3O9L-",login:"Header_login__1ubwc",userName:"Header_userName__8Osrx"}},72:function(e,t,n){e.exports={posts:"MyPosts_posts__34td_",posts__new:"MyPosts_posts__new__3nJ_u",posts__others:"MyPosts_posts__others__3zrVs"}},90:function(e,t,n){e.exports={appWrapper:"App_appWrapper__1FPVF",content:"App_content__tfqI6"}},94:function(e,t,n){e.exports={post:"Post_post__2jJ81",post__text:"Post_post__text__1akz-"}},97:function(e,t,n){e.exports={loginPage:"Login_loginPage__3b_mh",commonError:"Login_commonError___-sVi"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(24),r=n(25),o=n(27),u=n(26),s=n(0),l=n.n(s),i=n(7),c=n(9),m=function(e){return{auth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(s,t);var n=Object(u.a)(s);function s(){return Object(a.a)(this,s),n.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.auth?l.a.createElement(e,this.props):l.a.createElement(i.a,{to:"/login"})}}]),s}(l.a.Component);return Object(c.b)(m)(t)}}},[[165,1,2]]]);
//# sourceMappingURL=main.08c7e883.chunk.js.map