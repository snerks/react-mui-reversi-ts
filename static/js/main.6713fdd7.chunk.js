(this["webpackJsonpreact-mui-reversi-ts"]=this["webpackJsonpreact-mui-reversi-ts"]||[]).push([[0],{229:function(e,t,a){e.exports=a(433)},428:function(e,t,a){},433:function(e,t,a){"use strict";a.r(t);a(230),a(239);var n=a(0),r=a.n(n),i=a(44),o=a.n(i),l=(a(428),a(47)),c=a(220),s=a(466),u=a(436),m=a(461),d=a(456),v=a(457),f=a(458),h=a(468),p=a(212),b=a.n(p),E=a(437),g=Object(E.a)((function(){return{typographyStyles:{flex:1}}})),k=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=g();return r.a.createElement(d.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(f.a,{className:n.typographyStyles},"Material UI Reversi Sample"),r.a.createElement(u.a,{title:"use this switch for dark/light mode"},r.a.createElement(b.a,null)),r.a.createElement(h.a,{checked:t,onChange:function(){return a(!t)}})))},y=a(213),j=a(214),O=a(223),x=a(221),C=a(222),w=a(111),S=a(28),z=a(460),I=a(470),W=a(462),N=a(463),M=a(469),P=a(464),B=a(465),D=a(89),R=a.n(D),H=a(217),J=a.n(H),V=a(218),Z=a.n(V),q=a(219),A=a.n(q),F=a(215),L=a.n(F),U=Object(z.a)((function(e){var t,a;return Object(I.a)({root:{margin:"15px 0"},cell:{display:"flex",justifyContent:"center",backgroundColor:"green",height:"100%",alignItems:"center"},token:(t={},Object(S.a)(t,e.breakpoints.up("xs"),{fontSize:30}),Object(S.a)(t,e.breakpoints.up("sm"),{fontSize:30}),Object(S.a)(t,e.breakpoints.up("md"),{fontSize:40}),Object(S.a)(t,e.breakpoints.up("lg"),{fontSize:60}),t),validCellMarker:(a={},Object(S.a)(a,e.breakpoints.up("xs"),{fontSize:30}),Object(S.a)(a,e.breakpoints.up("sm"),{fontSize:30}),Object(S.a)(a,e.breakpoints.up("md"),{fontSize:40}),Object(S.a)(a,e.breakpoints.up("lg"),{fontSize:60}),a)})})),$=function(e){var t=U(),a=e.row,r=e.column,i=e.isWhite,o=e.handleClick,l=e.isValid,c=e.currentPlayerIsWhite,s=void 0!==i,u=s?i?"white":"black":void 0,m=n.createElement("span",{className:t.validCellMarker,style:{color:u}},"\xa0");!s&&l&&(u=c?"white":"black",m=n.createElement(L.a,{className:t.validCellMarker,style:{color:u}}));var d=s?n.createElement(R.a,{className:t.token,style:{color:u}}):m;return n.createElement("div",{onClick:s?function(){}:function(){return o(a,r)},style:{cursor:l?"pointer":"not-allowed"}},d)},G=a(467),K=a(459),Q=a(216),T=a.n(Q),X=function(e){var t=e.message,a=r.a.useState(!1),i=Object(l.a)(a,2),o=i[0],c=i[1];Object(n.useEffect)((function(){c(!0)}),[]);var s=function(e,t){"clickaway"!==t&&c(!1)};return r.a.createElement("div",null,r.a.createElement(G.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:o,autoHideDuration:6e3,onClose:s,message:t,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{size:"small","aria-label":"close",color:"inherit",onClick:s},r.a.createElement(T.a,{fontSize:"small"})))}))},Y=Object(z.a)((function(e){var t,a="light"===e.palette.type?e.palette.primary.main:void 0;return Object(I.a)({root:{margin:"15px 0"},cell:{display:"flex",justifyContent:"center",backgroundColor:"green",height:"100%",alignItems:"center"},token:(t={},Object(S.a)(t,e.breakpoints.up("xs"),{fontSize:30}),Object(S.a)(t,e.breakpoints.up("sm"),{fontSize:30}),Object(S.a)(t,e.breakpoints.up("md"),{fontSize:40}),Object(S.a)(t,e.breakpoints.up("lg"),{fontSize:60}),t),currentCountContainer:{padding:"20px 0 10px 0",backgroundColor:a}})})),_=[void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0,!1,void 0,void 0,void 0,void 0,void 0,void 0,!1,!0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0],ee=function(e){var t=e.initialBoard,a=Y(),i=Object(n.useState)(Array.from(t).map((function(e,t){return t}))),o=Object(l.a)(i,1)[0],c=Object(n.useState)(t),s=Object(l.a)(c,2),u=s[0],d=s[1],v=Object(n.useState)(!1),f=Object(l.a)(v,2),h=f[0],p=f[1],b=Object(n.useState)(0),E=Object(l.a)(b,2),g=E[0],k=E[1];console.log("currentPlayerIsWhite",h),Object(n.useEffect)((function(){console.log("useEffect : currentPlayerIsWhite : ",h),h&&D()}),[h]);var y=function(e,t){return 8*e+t},j=function(e,t,a,n){var r=e+a,i=t+n;if(!(r>-1&&r<8&&(i>-1&&i<8)))return null;var o=y(r,i);return{status:u[o],index:o}},O=function(e,t){var a=[];return a.push(x(e,t,-1,0)),a.push(x(e,t,-1,1)),a.push(x(e,t,0,1)),a.push(x(e,t,1,1)),a.push(x(e,t,1,0)),a.push(x(e,t,1,-1)),a.push(x(e,t,0,-1)),a.push(x(e,t,-1,-1)),a},x=function(e,t,a,n){var r,i={items:[]},o=e,l=t;do{(r=j(o,l,a,n))&&(i.items.push(r),o+=a,l+=n)}while(r);return i},S=function(e,t){var a,n=e.map((function(e,t){return void 0===e?{status:e,index:t}:{status:e,index:-1}})).filter((function(e){return e.index>-1})),r=[],i=Object(w.a)(n);try{for(i.s();!(a=i.n()).done;){var o,l=a.value,c=l.index%8,s=(l.index-c)/8,u=O(s,c),m=Object(w.a)(u);try{for(m.s();!(o=m.n()).done;){var d=o.value;if(d.items.length)for(var v=0,f=0;f<d.items.length;f++){var h=d.items[f].status,p=void 0!==h;if(!p)break;if(!(p&&t?!h:h)){v>0&&r.push(l);break}v++}}}catch(b){m.e(b)}finally{m.f()}}}catch(b){i.e(b)}finally{i.f()}return r.map((function(e){return e.index}))},z=function(e,t){console.log("handleCellClick : Start",e,t);var a=y(e,t);console.log("handleCellClick : currentPlayerIsWhite",h);for(var n=function(e,t){var a,n=[],r=t%8,i=O((t-r)/8,r),o=Object(w.a)(i);try{for(o.s();!(a=o.n()).done;){var l=a.value;if(l.items.length)for(var c=0,s=[],u=0;u<l.items.length;u++){var m=l.items[u],d=m.status,v=void 0!==d;if(!v)break;if(!(v&&e?!d:d)){c>0&&(n=[].concat(Object(C.a)(n),s));break}c++,s.push(m.index)}}}catch(f){o.e(f)}finally{o.f()}return n}(h,a),r=[],i=0;i<u.length;i++)if(i===a)r.push(h);else{var o=u[i];n.indexOf(i)>-1?r.push(h):r.push(o)}d(r),p(!h),k(0),console.log("handleCellClick : End",e,t)},I=function(){p(!h),k(g+1)},D=function(){var e=S(u,h);if(0!==e.length){var t=function(e){var t=e%8;return{row:(e-t)/8,column:t}}(e[0]),a=t.row,n=t.column;z(a,n)}else I()},H=u.filter((function(e){return void 0===e})),V=u.filter((function(e){return void 0!==e&&e})),q=u.filter((function(e){return void 0!==e&&!e})),F=0===H.length||g>1,L="";if(F){var U=V.length,G=q.length;L=U===G?"Neither: It was a Draw.":U>G?"White":"Black"}var K=S(u,h);console.log("currentPlayerIsWhite",h),console.log("validCells",K);var Q=r.a.createElement("div",{className:a.currentCountContainer},r.a.createElement(m.a,{item:!0,container:!0,alignItems:"center",alignContent:"space-between"},r.a.createElement(m.a,{item:!0,xs:3}),r.a.createElement(m.a,{item:!0,xs:3,container:!0},r.a.createElement(m.a,{item:!0,container:!0,justify:"center"},r.a.createElement(W.a,{color:"secondary",showZero:!0,overlap:"circle",badgeContent:V.length},r.a.createElement(R.a,{className:a.token,style:{color:"white"}})))),r.a.createElement(m.a,{item:!0,xs:3,container:!0},r.a.createElement(m.a,{item:!0,container:!0,justify:"center"},r.a.createElement(W.a,{color:"secondary",showZero:!0,overlap:"circle",badgeContent:q.length},r.a.createElement(R.a,{className:a.token,style:{color:"black"}})))),r.a.createElement(m.a,{item:!0,xs:3})),F&&r.a.createElement(m.a,{item:!0,container:!0,alignItems:"center",alignContent:"space-between"},r.a.createElement(m.a,{item:!0,xs:1,sm:2}),r.a.createElement(m.a,{item:!0,xs:10,sm:8,container:!0},r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement("div",{style:{fontSize:"14px"}},r.a.createElement("span",null,"Winner is ",L,"!")))),r.a.createElement(m.a,{item:!0,xs:1,sm:2})),F&&g>1&&r.a.createElement(m.a,{item:!0,container:!0},r.a.createElement(m.a,{item:!0,xs:1,sm:2}),r.a.createElement(m.a,{item:!0,xs:10,sm:8,alignItems:"center",alignContent:"space-between",container:!0},r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement("div",{style:{fontSize:"14px"}},r.a.createElement("span",null,"Both players have passed - game finished early")))),r.a.createElement(m.a,{item:!0,xs:1,sm:2})));return r.a.createElement("div",{className:a.root},r.a.createElement(N.a,{cols:8,cellHeight:"auto"},o.map((function(e){var t=Math.floor(e/8),n=e%8,i=K.indexOf(e)>-1;return r.a.createElement(M.a,{key:e,cols:1},r.a.createElement("div",{className:a.cell},r.a.createElement($,{row:t,column:n,isWhite:u[e],handleClick:i?function(e,t){return z(e,t)}:function(){},isValid:i,currentPlayerIsWhite:h})))}))),r.a.createElement("br",null),Q,r.a.createElement(P.a,{value:null,onChange:function(e,t){if(console.log(t),0===t)return d(_),p(!1),void k(0);1!==t?2!==t||I():D()},showLabels:!0,className:a.root},r.a.createElement(B.a,{label:"Restart",icon:r.a.createElement(J.a,null)}),!F&&K.length>0&&r.a.createElement(B.a,{label:"Random",icon:r.a.createElement(Z.a,null)}),!F&&r.a.createElement(B.a,{label:0===K.length?"Must Pass!":"Pass",icon:r.a.createElement(A.a,null)})),F&&r.a.createElement(X,{message:"Winner is ".concat(L,"!")}))},te=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return n.createElement(ee,{initialBoard:_})}}]),a}(n.Component),ae=a(110);var ne=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(c.a)({palette:{type:a?"dark":"light",primary:ae.a,secondary:ae.a}});return r.a.createElement(s.a,{theme:o},r.a.createElement(u.a,{elevation:0,square:!0,style:{height:"100%"}},r.a.createElement("div",{style:{paddingBottom:100}},r.a.createElement(m.a,{container:!0,direction:"column"},r.a.createElement(m.a,{item:!0},r.a.createElement(k,{isDarkMode:a,setIsDarkMode:i})),r.a.createElement(m.a,{item:!0,container:!0},r.a.createElement(m.a,{item:!0,xs:!1,sm:1}),r.a.createElement(m.a,{item:!0,xs:12,sm:10},r.a.createElement(te,null)),r.a.createElement(m.a,{item:!0,xs:!1,sm:1}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[229,1,2]]]);
//# sourceMappingURL=main.6713fdd7.chunk.js.map