(this["webpackJsonpreact-mui-reversi-ts"]=this["webpackJsonpreact-mui-reversi-ts"]||[]).push([[0],{208:function(e,t,a){e.exports=a(412)},407:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);a(209),a(218);var n=a(0),r=a.n(n),c=a(59),l=a.n(c),o=(a(407),a(205)),i=a(204),s=a(438),m=a(414),u=a(439),d=a(440),E=a(432),h=a(433),p=a(434),f=a(441),g=a(202),k=a.n(g),v=a(415),b=Object(v.a)((function(){return{typographyStyles:{flex:1}}})),y=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=b();return r.a.createElement(E.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(p.a,{className:n.typographyStyles},"Material UI Reversi Sample"),r.a.createElement(m.a,{title:"use this switch for dark/light mode"},r.a.createElement(k.a,null)),r.a.createElement(f.a,{checked:t,onChange:function(){return a(!t)}})))},w=a(99),j=a(435),x=a(443),O=a(437),S=a(442),M=a(203),C=a.n(M),I=a(436),W=Object(j.a)((function(e){var t;return Object(x.a)({root:{backgroundColor:"white",margin:"15px 0"},cell:{display:"flex",justifyContent:"center",backgroundColor:"green",height:"100%",alignItems:"center"},token:(t={padding:e.spacing(1)},Object(w.a)(t,e.breakpoints.up("xs"),{fontSize:30}),Object(w.a)(t,e.breakpoints.up("sm"),{fontSize:40}),Object(w.a)(t,e.breakpoints.up("md"),{fontSize:60}),t)})})),D=function(e){var t=W(),a=Array.from(Array(64)).map((function(e,t){return t}));console.log(a);Object(I.a)();return r.a.createElement("div",{className:t.root},r.a.createElement(O.a,{cols:8,cellHeight:"auto"},a.map((function(e){Math.floor(e/8);var a=e%8%2===0?"black":"white";return r.a.createElement(S.a,{key:e,cols:1},r.a.createElement("div",{className:t.cell},r.a.createElement(C.a,{className:t.token,style:{color:a}})))}))))};var N=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(i.a)({palette:{type:a?"dark":"light"}});return r.a.createElement(s.a,{theme:l},r.a.createElement(m.a,{elevation:0},r.a.createElement(u.a,{container:!0,direction:"column"},r.a.createElement(u.a,{item:!0},r.a.createElement(y,{isDarkMode:a,setIsDarkMode:c})),r.a.createElement(u.a,{item:!0,container:!0},r.a.createElement(u.a,{item:!0,xs:1,sm:2}),r.a.createElement(u.a,{item:!0,xs:10,sm:8},r.a.createElement(D,null)),r.a.createElement(u.a,{item:!0,xs:1,sm:2})),r.a.createElement(u.a,{item:!0,container:!0},r.a.createElement(u.a,{item:!0,xs:1,sm:2}),r.a.createElement(u.a,{item:!0,xs:10,sm:8,alignItems:"center",alignContent:"space-between"},r.a.createElement(d.a,{variant:"contained",color:"primary",fullWidth:!0,style:{margin:3}},"Restart"),r.a.createElement(d.a,{variant:"contained",color:"default",fullWidth:!0,style:{margin:3}},"Select Random Cell"),r.a.createElement(d.a,{variant:"contained",color:"default",fullWidth:!0,style:{margin:3}},"Pass")),r.a.createElement(u.a,{item:!0,xs:1,sm:2})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[208,1,2]]]);
//# sourceMappingURL=main.876b5632.chunk.js.map