(this["webpackJsonpkhud-ka"]=this["webpackJsonpkhud-ka"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),r=n(16),o=n.n(r),s=(n(22),n(23),n(13)),i=n(9),l=n(10);n(32),n(33),n(24);l.a.initializeApp({apiKey:"AIzaSyDO4YwBMNzDfCJg1YTj5cCXyGAdKImoStE",authDomain:"hero-tu.firebaseapp.com",databaseURL:"https://hero-tu-default-rtdb.firebaseio.com",projectId:"hero-tu",storageBucket:"hero-tu.appspot.com",messagingSenderId:"802551569383",appId:"1:802551569383:web:f948dcbd62a1e7d6fcfb42"});var u=l.a.storage(),d=(l.a.database(),l.a.firestore()),j=l.a.firestore.FieldValue.serverTimestamp;var f=n(12),b=n.n(f),p=n(17);n(28);var h=n(2);function g(){var e=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t=d.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){t()}}),[e]),{docs:a}}("image").docs;return Object(h.jsx)("div",{className:"Grid",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(h.jsxs)("div",{className:"wrap",children:[Object(h.jsx)("div",{className:"imgBx",children:Object(h.jsx)("img",{src:e.url})}),Object(h.jsx)("button",{onClick:function(){var t,n;t=e.id,n=e.name,d.collection("image").doc(t).delete().then((function(e){return console.log("delted succefully")})).catch((function(e){return console.log("error found aomething")})),u.ref(n).delete().then((function(e){return console.log("storage deleted")})).catch((function(){return console.log("storage not delted")})),console.log("here was ")},children:"Hatao be"})]},e.id)}))})}n(30);function O(e){var t=e.file,n=e.setFile,a=Object(c.useState)(0),r=Object(i.a)(a,2),o=(r[0],r[1],function(e){var t=Object(c.useState)(0),n=Object(i.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(null),s=Object(i.a)(o,2),l=s[0],f=s[1],h=Object(c.useState)(null),g=Object(i.a)(h,2),O=g[0],m=g[1];return Object(c.useEffect)((function(){var t=u.ref(e.name),n=d.collection("image"),c=!0;return c&&t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){f(e)}),Object(p.a)(b.a.mark((function c(){var a,r,o;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getDownloadURL();case 2:a=c.sent,r=e.name,o=j(),n.add({url:a,createdAt:o,name:r}),m(a);case 7:case"end":return c.stop()}}),c)})))),function(){c=!1}}),[e]),{progress:a,url:O,error:l}}(t)),s=o.url,l=o.progress;return Object(c.useEffect)((function(){s&&n(null)}),[s]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"progressbar",style:{width:l+"%",height:"14px",marginTop:"5px",textAlign:"center",backgroundColor:"yellow"}})})}function m(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),o=Object(i.a)(r,2),s=o[0],l=o[1],u=["image/jpeg","image/png"];return Object(h.jsx)("div",{style:{padding:"10px"},children:Object(h.jsxs)("form",{style:{position:"relative",padding:"10px"},children:[Object(h.jsxs)("label",{htmlFor:"fui",style:{cursor:"pointer"},children:[Object(h.jsx)("span",{style:{fontSize:"2.3rem",width:"20px",position:"absolute",left:"50%",top:"0",transform:"translateX(-50%)"},children:"\ud83d\ude97"}),Object(h.jsx)("input",{style:{opacity:"0",zIndex:"-1"},type:"file",name:"photo",id:"fui",onChange:function(e){var t=e.target.files[0];t&&u.includes(t.type)?(a(t),l("")):(a(null),l("please select an image File"))}})]}),Object(h.jsxs)("div",{className:"outPut",children:[s&&Object(h.jsx)("h2",{children:s}),n&&Object(h.jsx)("h3",{children:n.name}),n&&Object(h.jsx)(O,{file:n,setFile:a})]})]})})}var x=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{}),Object(h.jsx)(g,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),v()}},[[31,1,2]]]);
//# sourceMappingURL=main.20ec8b37.chunk.js.map