webpackJsonp([11],[,,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o){var s={userId:e,userPassword:t},a=w.serviceUris.login;o.masterPage.showLoader(),y.default.post(a,(0,Q.default)(s)).then(function(t){o.masterPage.hideLoader(),g(t.access_token,t.expires_at,e),m(t.refresh_token),f((0,Q.default)(t)),o.masterPage.loggedIn=!0,o.masterPage.name=e;var s=n;""===n?P.push("/"):P.push(s)}).fail(function(e){"rejected"===e.state()&&(o.masterPage.showLoginError(),o.masterPage.hideLoader())})}function a(e){l(),d(),e.masterPage.loggedIn=!1,e.masterPage.name="",P.go("/")}function i(e,t,n){p()?n():n({path:"/login",query:{redirect:e.fullPath}})}function r(){return localStorage.getItem(T)}function u(){return localStorage.getItem(M)}function c(){return localStorage.getItem(C)}function l(){localStorage.removeItem(M)}function d(){localStorage.removeItem(C)}function f(e){localStorage.setItem(k,e)}function g(e,t,n){localStorage.setItem(C,e),localStorage.setItem(O,t),localStorage.setItem(T,n)}function m(e){localStorage.setItem(M,e)}function p(){return c()&&v(),!0}function h(){var e=localStorage.getItem(O);if(!e)return null;var t=new Date(0);return t.setUTCSeconds(e),t}function v(){return h()<new Date}Object.defineProperty(t,"__esModule",{value:!0}),t.userId=t.roles=void 0;var I=n(14),Q=o(I);t.login=s,t.logout=a,t.requireAuth=i,t.getUserId=r,t.getRefreshToken=u,t.getAccessToken=c,t.setAccessToken=g,t.setRefreshToken=m,t.isLoggedIn=p;var b=n(33),_=o(b),L=n(29),y=o(L),w=n(26),M="refresh_token",C="access_token",O="access_token_expiry",k="jwt",T="userId",P=new _.default({});t.roles=["ReleaseOrders"],t.userId=void 0},,,,,,,,,,,,,,function(e,t,n){n(182);var o=n(2)(n(84),n(189),"data-v-402243eb",null);e.exports=o.exports},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.serviceUris={server:"api/v1/",eventBus:"eventbus",login:"login"}},,,,function(e,t,n){n(184);var o=n(2)(n(83),n(191),"data-v-618197f5",null);e.exports=o.exports},function(e,t,n){n(183);var o=n(2)(n(85),n(190),"data-v-44d293b2",null);e.exports=o.exports},function(e,t,n){n(181);var o=n(2)(n(86),n(188),"data-v-02bdd1de",null);e.exports=o.exports},,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,o){f.post(e,(0,u.default)(t)).then(function(e){n&&n(e)}).catch(function(n){console.log('Error calling "'+e+'" with data="'+(0,u.default)(t)+'". \nStack trace='+n),o&&o(n)})}Object.defineProperty(t,"__esModule",{value:!0}),t.HTTP=void 0;var a=n(88),i=o(a),r=n(14),u=o(r);t.POSTAPI=s;var c=n(62),l=o(c),d=n(26),f=t.HTTP=l.default.create({baseURL:d.serviceUris.server}),g=l.default.create({baseURL:"https://jsonplaceholder.typicode.com/"}),m=l.default.create({baseURL:"https://api.punkapi.com/v2/"}),p={$http:{get:function(){return{jsonplaceholder:g,punk:m}}}};t.default=function(e){(0,i.default)(e.prototype,p)}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(){return n(194)("./"+e+".vue")}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),i=o(a),r=n(33),u=o(r),c=n(6);i.default.use(u.default),t.default=new u.default({routes:[{path:"/",beforeEnter:c.requireAuth,component:s("views/Mapping/CodeManager"),meta:{name:"Vue Editable Grid"},name:"dash-one"},{path:"/CodeManager",beforeEnter:c.requireAuth,component:s("views/Mapping/CodeManager"),meta:{name:"Vue Editable Grid"},name:"CodeManager"},{path:"*",component:s("Error404")}]})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(10),a=o(s);o(n(4)).default.use(a.default);var i={layoutNeeded:!1,isLoginPage:!0,mobileMode:!1,menuCollapse:!0},r={setLayoutNeeded:function(e,t){e.layoutNeeded=t},setIsLoginPage:function(e,t){e.isLoginPage=t},setMobileMode:function(e,t){e.mobileMode=t},setMenuCollapse:function(e,t){e.menuCollapse=t}},u={getLayoutNeeded:function(){return i.layoutNeeded},getIsLoginPage:function(){return i.isLoginPage},getMobileMode:function(){return i.mobileMode},getMenuCollapse:function(){return i.menuCollapse}};t.default=new a.default.Store({state:i,mutations:r,getters:u})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,function(e,t,n){n(185);var o=n(2)(n(82),n(192),null,null);e.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.groupedLinksAuthorized={Mappings:{routes:[{routeName:"CodeManager",icon:"fa fa-list-alt",materialIcon:"list_compact",name:"Test Codes Manager"}]}},t.groupedLinksUnauthorized={Login:{routes:[{routeName:"login",icon:"fa fa-unlock-alt",materialIcon:"lock_open",name:"Login"}]}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var s=n(4),a=o(s),i=n(1),r=o(i),u=n(34),c=o(u),l=n(35),d=o(l),f=n(36),g=o(f),m=n(37),p=o(m);n(44),n(43),n(42),n(40),n(39),n(41),n(38),n(45),a.default.use(c.default),a.default.use(r.default),a.default.use(d.default),r.default.start(function(){new a.default({el:"#q-app",router:g.default,store:p.default,render:function(e){return e(n(46))}})})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(27),a=o(s),i=n(20),r=o(i),u=n(30),c=o(u),l=n(32),d=o(l),f=n(31),g=o(f),m=n(29),p=o(m),h=n(10),v=n(6),I=n(1);t.default={name:"app",components:{QLayout:I.QLayout,QToolbar:I.QToolbar,QToolbarTitle:I.QToolbarTitle,QBtn:I.QBtn,QIcon:I.QIcon,QList:I.QList,QListHeader:I.QListHeader,QItem:I.QItem,QItemSide:I.QItemSide,QItemMain:I.QItemMain,QAjaxBar:I.QAjaxBar,QCollapsible:I.QCollapsible,QSearch:I.QSearch,QDatetime:I.QDatetime,QDataTable:I.QDataTable,QInput:I.QInput,QSelect:I.QSelect,QTransition:I.QTransition,QInnerLoading:I.QInnerLoading,Drawer:r.default,ContentHeader:c.default,UserMenu:d.default,MessagePopover:g.default,jQuery:p.default,Loading:I.Loading,QSpinnerGears:I.QSpinnerGears},mounted:function(){this.getPosts(),this.$refs.layout.toggleLeft(),this.loggedIn=(0,v.isLoggedIn)(),this.name=(0,v.getUserId)(),this.$root.masterPage=this},data:function(){return{showForNow:!1,posts:[],showMenu:!1,backgroundColor:"rgb(249, 249, 249)",view:"lHh Lpr lFf",reveal:!0,loggedIn:!1,name:""}},computed:(0,a.default)({},(0,h.mapGetters)(["getLayoutNeeded","getMobileMode"])),methods:{toogleMenu:function(){var e=this;this.showMenu=!this.showMenu,setTimeout(function(){document.getElementsByClassName("dark")[0].addEventListener("click",function(){e.closeMenu()})},500)},closeMenu:function(){this.showMenu=!1},getPosts:function(){var e=this;this.$http.jsonplaceholder.get("posts").then(function(t){e.posts=t.data})},showLoginError:function(){I.Toast.create.negative({html:"Login failed with the provided credentials."})},showLoader:function(){I.Loading.show()},hideLoader:function(){I.Loading.hide()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(27),s=function(e){return e&&e.__esModule?e:{default:e}}(o),a=n(10);t.default={computed:(0,s.default)({},(0,a.mapGetters)(["getLayoutNeeded","getIsLoginPage","getMenuCollapse"]),{routerTitle:function(){return this.$route.meta.name}}),methods:(0,s.default)({},(0,a.mapMutations)(["setLayoutNeeded","setMenuCollapse"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n(6),a=n(80);t.default={name:"drawer",components:{QLayout:o.QLayout,QToolbar:o.QToolbar,QToolbarTitle:o.QToolbarTitle,QBtn:o.QBtn,QIcon:o.QIcon,QList:o.QList,QListHeader:o.QListHeader,QItem:o.QItem,QItemSide:o.QItemSide,QItemMain:o.QItemMain,QAjaxBar:o.QAjaxBar,QCollapsible:o.QCollapsible,QSearch:o.QSearch,QDatetime:o.QDatetime,QDataTable:o.QDataTable,QInput:o.QInput,QSelect:o.QSelect,QTransition:o.QTransition,QItemTile:o.QItemTile,QInnerLoading:o.QInnerLoading},props:["loggedIn"],data:function(){return{}},beforeCreate:function(){var e=(0,s.isLoggedIn)();this.groupedLinks=e?a.groupedLinksAuthorized:a.groupedLinksUnauthorized},watch:{loggedIn:function(e){this.updateLinksOnLogin(e)}},methods:{toggleLeft:function(){this.$refs.layout.toggleLeft()},updateLinksOnLogin:function(e){this.groupedLinks=e?a.groupedLinksAuthorized:a.groupedLinksUnauthorized,this.$forceUpdate()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t.default={props:{posts:{type:Array,default:function(){return[]}}},components:{QPopover:o.QPopover,QList:o.QList,QItem:o.QItem,QListHeader:o.QListHeader,QItemSide:o.QItemSide,QItemMain:o.QItemMain,QItemTile:o.QItemTile},computed:{filteredPosts:function(){return this.posts.slice(0,5)}},methods:{randomDate:function(){var e=new Date-Math.floor(1e10*Math.random());return new Date(e).toLocaleDateString()+" "+new Date(e).toLocaleTimeString()},randomAvatarUrl:function(){return"https://api.adorable.io/avatars/face/"+this.randomEye()+"/"+this.randomNose()+"/"+this.randomMouth()+"/"+this.randomHexColor()},randomHexColor:function(){return Math.random().toString(16).slice(2,8)},randomEye:function(){return this.randomArrayElement(["eyes1","eyes10","eyes2","eyes3","eyes4","eyes5","eyes6","eyes7","eyes9"])},randomNose:function(){return this.randomArrayElement(["nose2","nose3","nose4","nose5","nose6","nose7","nose8","nose9"])},randomMouth:function(){return this.randomArrayElement(["mouth1","mouth10","mouth11","mouth3","mouth5","mouth6","mouth7","mouth9"])},randomArrayElement:function(e){return e[Math.floor(Math.random()*e.length)]}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n(6);t.default={props:{name:String,email:String},components:{QBtn:o.QBtn,QList:o.QList,QItemTile:o.QItemTile,QItem:o.QItem,QItemSide:o.QItemSide,QItemMain:o.QItemMain,QCardMain:o.QCardMain,QCard:o.QCard},methods:{logoutt:function(){(0,s.logout)(this.$root)}}}},,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,n){function o(e){return n(s(e))}function s(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./bounce.css":102,"./bounceIn.css":103,"./bounceInDown.css":104,"./bounceInLeft.css":105,"./bounceInRight.css":106,"./bounceInUp.css":107,"./bounceOut.css":108,"./bounceOutDown.css":109,"./bounceOutLeft.css":110,"./bounceOutRight.css":111,"./bounceOutUp.css":112,"./fadeIn.css":113,"./fadeInDown.css":114,"./fadeInDownBig.css":115,"./fadeInLeft.css":116,"./fadeInLeftBig.css":117,"./fadeInRight.css":118,"./fadeInRightBig.css":119,"./fadeInUp.css":120,"./fadeInUpBig.css":121,"./fadeOut.css":122,"./fadeOutDown.css":123,"./fadeOutDownBig.css":124,"./fadeOutLeft.css":125,"./fadeOutLeftBig.css":126,"./fadeOutRight.css":127,"./fadeOutRightBig.css":128,"./fadeOutUp.css":129,"./fadeOutUpBig.css":130,"./flash.css":131,"./flip.css":132,"./flipInX.css":133,"./flipInY.css":134,"./flipOutX.css":135,"./flipOutY.css":136,"./headShake.css":137,"./hinge.css":138,"./jello.css":139,"./lightSpeedIn.css":140,"./lightSpeedOut.css":141,"./pulse.css":142,"./rollIn.css":143,"./rollOut.css":144,"./rotateIn.css":145,"./rotateInDownLeft.css":146,"./rotateInDownRight.css":147,"./rotateInUpLeft.css":148,"./rotateInUpRight.css":149,"./rotateOut.css":150,"./rotateOutDownLeft.css":151,"./rotateOutDownRight.css":152,"./rotateOutUpLeft.css":153,"./rotateOutUpRight.css":154,"./rubberBand.css":155,"./shake.css":156,"./slideInDown.css":157,"./slideInLeft.css":158,"./slideInRight.css":159,"./slideInUp.css":160,"./slideOutDown.css":161,"./slideOutLeft.css":162,"./slideOutRight.css":163,"./slideOutUp.css":164,"./swing.css":165,"./tada.css":166,"./wobble.css":167,"./zoomIn.css":168,"./zoomInDown.css":169,"./zoomInLeft.css":170,"./zoomInRight.css":171,"./zoomInUp.css":172,"./zoomOut.css":173,"./zoomOutDown.css":174,"./zoomOutLeft.css":175,"./zoomOutRight.css":176,"./zoomOutUp.css":177};o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id=187},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticClass:"bg-white text-black",attrs:{id:"menu"}},[n("q-card-main",[n("div",{staticClass:"quote"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"}),e._v(" "),n("div",{staticClass:"col"},[n("h5",[e._v(e._s(e.name))])])])]),e._v(" "),n("div",{staticClass:"text-right"},[n("q-btn",{attrs:{color:"faded",outline:""},on:{click:e.logoutt}},[e._v("Logout")])],1)])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-list",e._l(e.groupedLinks,function(t,o){return n("q-collapsible",{key:o,staticClass:"collapsible-no-padding",attrs:{group:"links",label:o}},[n("q-list",{attrs:{"no-border":""}},e._l(t.routes,function(t,o){return n("q-item",{key:o,attrs:{to:{name:t.routeName},link:""}},[n("q-item-side",[n("q-item-tile",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:""+t.materialIcon,size:"30px"}})],1)],1),e._v(" "),n("q-item-main",[n("q-item-tile",{staticClass:"light-paragraph",attrs:{label:""}},[e._v(e._s(t.name))])],1)],1)}))],1)}))],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-popover",{attrs:{self:"top right"}},[n("q-list",{staticClass:"no-padding",attrs:{highlight:""}},[n("q-list-header",{staticClass:" text-center text-white bg-teal"},[e._v("Messages from people")]),e._v(" "),e._l(e.filteredPosts,function(t,o){return n("q-item",{key:o,staticStyle:{width:"400px"}},[n("q-item-side",{attrs:{avatar:e.randomAvatarUrl()}}),e._v(" "),n("q-item-main",[n("q-item-tile",{attrs:{label:""}},[e._v(e._s(t.title))]),e._v(" "),n("q-item-tile",{attrs:{sublabel:""}},[e._v(e._s(e.randomDate()))])],1),e._v(" "),n("q-item-side",{attrs:{right:""}},[n("q-item-tile",{attrs:{icon:"chat_bubble",color:"green"}})],1)],1)})],2)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.getIsLoginPage?e._e():n("div",{staticClass:"content-header"},[n("span",{staticClass:"vertical-bottom",attrs:{id:"content-header-title"}},[e._v(e._s(e.routerTitle))]),e._v(" "),n("button",{staticClass:"bg-blue-grey-8 text-white ",attrs:{id:"configurations"}},[n("i",[e._v("settings")]),e._v(" "),n("q-popover",{ref:"popover",staticClass:"bg-blue-grey-8 text-white",attrs:{anchor:"top left",self:"top right"}},[n("div",{staticClass:"list highlight "},[n("div",{staticClass:"item"},[n("div",{staticClass:"item-content has-secondary"},[e._v("Layout")]),e._v(" "),n("div",{staticClass:"item-secondary"},[n("q-toggle",{staticClass:"green",on:{input:function(t){e.setLayoutNeeded(!e.getLayoutNeeded)}},model:{value:e.getLayoutNeeded,callback:function(t){e.getLayoutNeeded=t},expression:"getLayoutNeeded"}})],1)]),e._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"item-content has-secondary"},[e._v("Menu Collapse")]),e._v(" "),n("div",{staticClass:"item-secondary"},[n("q-toggle",{staticClass:"green",on:{input:function(t){e.setMenuCollapse(!e.getMenuCollapse)}},model:{value:e.getMenuCollapse,callback:function(t){e.getMenuCollapse=t},expression:"getMenuCollapse"}})],1)])])])],1),e._v(" "),n("hr")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("q-ajax-bar",{ref:"bar",attrs:{position:"top",size:"8"}}),e._v(" "),n("q-layout",{ref:"layout",style:{backgroundColor:e.backgroundColor},attrs:{view:e.view,reveal:e.reveal}},[n("q-toolbar",{staticClass:"bg-primary",slot:"header"},[n("q-toolbar-title",{staticClass:"no-padding pointer",on:{click:function(t){e.$refs.layout.toggleLeft()}}},[n("div",{staticClass:"row xs-gutter"},[n("div",{staticClass:"col-auto self-center"},[n("button",{staticClass:"hidebtn hidden",on:{click:function(t){e.$refs.layout.toggleLeft()}}},[e._v("...")])]),e._v(" "),n("div",{staticClass:"col-auto"},[n("h5",[e._v("First Vue App")])])])]),e._v(" "),e.showForNow?n("q-btn",{staticClass:"relative-position",attrs:{small:"",round:"",color:"secondary"}},[n("q-icon",{attrs:{name:"fa-envelope-o"}}),e._v(" "),n("message-popover",{attrs:{posts:e.posts}})],1):e._e(),e._v(" "),e.loggedIn?n("q-btn",{attrs:{color:"secondary",small:"",round:"",id:"botao-menu",icon:"menu"},on:{click:e.toogleMenu}}):e._e()],1),e._v(" "),n("drawer",{ref:"oqmDrawer",attrs:{loggedIn:e.loggedIn},slot:"left"}),e._v(" "),n("q-transition",{attrs:{appear:"",enter:"flipInX",leave:"flipOutX",duration:"500"}},[e.showMenu?n("user-menu",{attrs:{name:e.name},on:{logout:e.toogleMenu}}):e._e()],1),e._v(" "),n("div",{staticClass:"layout-padding"},[n("router-view")],1)],1),e._v(" "),n("q-inner-loading",{attrs:{visible:e.showMenu,dark:"",size:"0"}})],1)},staticRenderFns:[]}},,function(e,t,n){function o(e){var t=s[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var s={"./Error404.vue":[199,10],"./layout/content-header.vue":[30],"./layout/drawer/drawer.vue":[20],"./layout/drawer/menuOne.vue":[200,4],"./layout/drawer/menuTwo.vue":[201,9],"./layout/messagePopover.vue":[31],"./layout/userMenu.vue":[32],"./views/ACard.vue":[202,8],"./views/Mapping/CodeManager.vue":[203,5],"./views/dashboard/one/barGraph.vue":[197,1],"./views/dashboard/one/cardTotal.vue":[198,7],"./views/dashboard/one/dashboard.vue":[204,0],"./views/dashboard/two/cardTodo.vue":[205,6],"./views/dashboard/two/charge.vue":[206,2],"./views/login/login.vue":[207,3]};o.keys=function(){return Object.keys(s)},e.exports=o,o.id=194}],[81]);