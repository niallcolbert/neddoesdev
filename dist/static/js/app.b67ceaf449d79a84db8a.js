webpackJsonp([4],{31:function(t,e,n){"use strict";var r=n(32),a=n.n(r);e.a={name:"home",computed:{recentEntries:function(){return a.a.posts.slice(0,6)},olderEntries:function(){return a.a.posts.slice(6)}}}},32:function(t,e){t.exports={posts:[{id:"learning-game-dev",date:"December 30, 2020",title:"Learning Game Dev",featured_image:"/static/img/gameDev1.png",embed_link:!1},{id:"intro",date:"December 30, 2020",title:"Intro",featured_image:"/static/img/nedDoesDev.png",embed_link:!1}]}},33:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19),a=n(37),i=n(41);new r.a({router:i.a,render:function(t){return t(a.a)}}).$mount("#app")},37:function(t,e,n){"use strict";function r(t){n(38)}var a=n(40),i=n(8),s=r,c=i(null,a.a,!1,s,null,null);e.a=c.exports},38:function(t,e){},40:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("router-view")],1)])},a=[],i={render:r,staticRenderFns:a};e.a=i},41:function(t,e,n){"use strict";var r=n(42),a=n.n(r),i=n(68),s=n.n(i),c=n(19),o=n(72),u=n(73),l=n(76),d=n(32),v=n.n(d);c.a.use(o.a);var m=s()(v.a).map(function(t){var e=v.a[t].map(function(e){return{path:e.id,name:e.id,component:function(){return n(79)("./"+t+"/"+e.id+".md")}}});return{path:"/"+t,name:t,component:function(){return n.e(0).then(n.bind(null,84))},children:e}});e.a=new o.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",name:"home",component:u.a},{path:"/about",name:"about",component:l.a}].concat(a()(m))})},73:function(t,e,n){"use strict";function r(t){n(74)}var a=n(31),i=n(75),s=n(8),c=r,o=s(a.a,i.a,!1,c,"data-v-c28d2554",null);e.a=o.exports},74:function(t,e){},75:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),t._v(" "),n("router-link",{staticClass:"aboutLink",attrs:{to:"/about",tag:"a"}},[t._v("About »")]),t._v(" "),n("div",{staticClass:"group"},[n("h2",[t._v("[Recent]")]),t._v(" "),t._l(t.recentEntries,function(e){return n("div",{key:e.id,staticClass:"entry col-sm-12 col-md-6 col-lg-4",style:{backgroundImage:"url("+e.featured_image+")"},on:{click:function(n){return t.$router.push({name:e.id})}}},[n("h2",{staticClass:"title"},[t._v("["+t._s(e.title)+"]")])])})],2),t._v(" "),t.olderEntries.length?n("div",{staticClass:"group archive-list"},[n("h2",[t._v("[Archive]")]),t._v(" "),t._l(t.olderEntries,function(e){return n("div",{key:e.id,staticClass:"archive-item"},[n("h3",{staticClass:"title",on:{click:function(n){return t.$router.push({name:e.id})}}},[t._v("["+t._s(e.title)+"]")]),t._v(" "),n("span",[t._v(t._s(e.date))])])})],2):t._e()],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"headline"},[n("span",{staticClass:"icon"},[n("img",{attrs:{src:"static/img/nedDoesDev.png"}})]),t._v("nedDoesDev")])}],i={render:r,staticRenderFns:a};e.a=i},76:function(t,e,n){"use strict";function r(t){n(77)}var a=n(78),i=n(8),s=r,c=i(null,a.a,!1,s,"data-v-0b4e70b8",null);e.a=c.exports},77:function(t,e){},78:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("router-link",{staticClass:"back",attrs:{to:"/",tag:"a"}},[t._v("« Back")]),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("h1",[t._v("[About Me]")]),t._v(" "),n("p",[t._v("//TODO")])])}],i={render:r,staticRenderFns:a};e.a=i},79:function(t,e,n){function r(t){var e=a[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"./posts/intro.md":[82,2],"./posts/learning-game-dev.md":[83,1]};r.keys=function(){return Object.keys(a)},r.id=79,t.exports=r}},[33]);
//# sourceMappingURL=app.b67ceaf449d79a84db8a.js.map