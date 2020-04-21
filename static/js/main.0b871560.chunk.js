(this["webpackJsonpreact-mui-reversi-ts"]=this["webpackJsonpreact-mui-reversi-ts"]||[]).push([[0],{232:function(e,t,a){e.exports=a(436)},431:function(e,t,a){},436:function(e,t,a){"use strict";a.r(t);a(233),a(242);var n=a(0),r=a.n(n),o=a(44),i=a.n(o),l=(a(431),a(45)),c=a(224),s=a(473),u=a(438),m=a(467),d=a(461),v=a(462),f=a(463),h=a(475),b=a(214),p=a.n(b),E=a(440),g=Object(E.a)((function(){return{typographyStyles:{flex:1}}})),y=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=g();return r.a.createElement(d.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(f.a,{className:n.typographyStyles},"Material UI Reversi (2020.04.21 18.23)"),r.a.createElement(u.a,{title:"use this switch for dark/light mode"},r.a.createElement(p.a,null)),r.a.createElement(h.a,{checked:t,onChange:function(){return a(!t)}})))},j=a(215),k=a(216),O=a(226),x=a(225),w=a(92),C=a(49),I=a(19),S=a(465),z=a(477),M=a(468),W=a(469),P=a(470),N=a(476),R=a(471),B=a(472),D=a(218),q=a(466),U=a(91),L=a.n(U),H=a(221),J=a.n(H),V=a(223),Z=a.n(V),A=a(220),F=a.n(A),$=a(222),G=a.n($),K=a(217),Q=a.n(K),T=Object(S.a)((function(e){var t,a;return Object(z.a)({root:{margin:"15px 0"},cell:{display:"flex",justifyContent:"center",backgroundColor:"green",height:"100%",alignItems:"center"},token:(t={},Object(I.a)(t,e.breakpoints.up("xs"),{fontSize:25}),Object(I.a)(t,e.breakpoints.up("sm"),{fontSize:35}),Object(I.a)(t,e.breakpoints.up("md"),{fontSize:40}),Object(I.a)(t,e.breakpoints.up("lg"),{fontSize:50}),Object(I.a)(t,e.breakpoints.up("xl"),{fontSize:60}),t),validCellMarker:(a={},Object(I.a)(a,e.breakpoints.up("xs"),{fontSize:25}),Object(I.a)(a,e.breakpoints.up("sm"),{fontSize:35}),Object(I.a)(a,e.breakpoints.up("md"),{fontSize:40}),Object(I.a)(a,e.breakpoints.up("lg"),{fontSize:50}),Object(I.a)(a,e.breakpoints.up("xl"),{fontSize:60}),a)})})),X=function(e){var t=T(),a=e.row,r=e.column,o=e.isWhite,i=e.handleClick,l=e.isValid,c=e.currentPlayerIsWhite,s=void 0!==o,u=s?o?"white":"black":void 0,m=n.createElement("span",{className:t.validCellMarker,style:{color:u,cursor:"not-allowed"}},"\xa0");!s&&l&&(u=c?"white":"black",m=n.createElement(Q.a,{className:t.validCellMarker,style:{color:u}}));var d=s?n.createElement(L.a,{className:t.token,style:{color:u}}):m;return n.createElement("div",{onClick:s?function(){}:function(){return i(a,r)},style:{cursor:l?"pointer":"not-allowed"}},d)},Y=a(474),_=a(464),ee=a(219),te=a.n(ee),ae=Object(S.a)((function(e){return Object(z.a)({root:{backgroundColor:e.palette.info.main}})})),ne=function(e){var t=e.message,a=ae(),o=r.a.useState(!1),i=Object(l.a)(o,2),c=i[0],s=i[1];Object(n.useEffect)((function(){s(!0)}),[]);var u=function(e,t){"clickaway"!==t&&s(!1)};return r.a.createElement("div",{className:a.root},r.a.createElement(Y.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:c,autoHideDuration:6e3,onClose:u,message:t,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{size:"small","aria-label":"close",color:"inherit",onClick:u},r.a.createElement(te.a,{fontSize:"small"})))}))},re=[99,-8,8,6,6,8,-8,99,-8,-24,-4,-3,-3,-4,-24,-8,8,-4,7,4,4,7,-4,8,6,-3,4,0,0,4,-3,6,6,-3,4,0,0,4,-3,6,8,-4,7,4,4,7,-4,8,-8,-24,-4,-3,-3,-4,-24,-8,99,-8,8,6,6,8,-8,99],oe=function(e){console.table?console.table(e):console.log(e)},ie=function(e,t){return e.map((function(e,a){return void 0===e||e===t?-1:a})).filter((function(e){return e>-1})).reduce((function(e,t){return e+re[t]}),0)},le=function e(t,a,n,r,o){var i=he(t,o),l=0===i.length;if(0===a||l)return ie(t,o);var c=0;if(o){c=-1/0;var s,u=Object(C.a)(i);try{for(u.s();!(s=u.n()).done;){var m=s.value,d=ce(t,o,m);if(c=ie(t,o),c=Math.max(c,e(d,a-1,n,r,!1)),Math.max(n,c)>=r)break}}catch(p){u.e(p)}finally{u.f()}return c}c=1/0;var v,f=Object(C.a)(i);try{for(f.s();!(v=f.n()).done;){var h=v.value,b=ce(t,o,h);if(c=ie(t,o),c=Math.min(c,e(b,a-1,n,r,!0)),n>=Math.min(r,c))break}}catch(p){f.e(p)}finally{f.f()}return c},ce=function(e,t,a){for(var n=fe(e,t,a),r=[],o=0;o<e.length;o++)if(o===a)r.push(t);else{var i=e[o];n.indexOf(o)>-1?r.push(t):r.push(i)}return r},se=new Map;se.set(0,6),se.set(7,6),se.set(56,6),se.set(63,6),se.set(2,5),se.set(3,5),se.set(4,5),se.set(5,5),se.set(16,5),se.set(24,5),se.set(32,5),se.set(40,5),se.set(23,5),se.set(31,5),se.set(39,5),se.set(47,5),se.set(57,5),se.set(58,5),se.set(59,5),se.set(60,5),se.set(18,4),se.set(21,4),se.set(42,4),se.set(45,4),se.set(1,2),se.set(6,2),se.set(8,2),se.set(15,2),se.set(48,2),se.set(55,2),se.set(57,2),se.set(62,2),se.set(9,1),se.set(14,1),se.set(49,1),se.set(54,1);var ue=function(e,t){if(!Number.isInteger(e))throw new Error("rowIndex must be a whole number");if(!Number.isInteger(t))throw new Error("columnIndex must be a whole number");if(e<0)throw new Error("rowIndex must be greater than or equal to zero");if(e>7)throw new Error("rowIndex must be less than or equal to 7");if(t<0)throw new Error("columnIndex must be greater than or equal to zero");if(t>7)throw new Error("columnIndex must be less than or equal to 7");return 8*e+t},me=function(e,t,a,n,r){var o=t+n,i=a+r;if(!(o>-1&&o<8&&(i>-1&&i<8)))return null;var l=ue(o,i);return{status:e[l],index:l}},de=function(e,t,a,n,r){var o,i={items:[]},l=t,c=a;do{(o=me(e,l,c,n,r))&&(i.items.push(o),l+=n,c+=r)}while(o);return i},ve=function(e,t,a){var n=[];return n.push(de(e,t,a,-1,0)),n.push(de(e,t,a,-1,1)),n.push(de(e,t,a,0,1)),n.push(de(e,t,a,1,1)),n.push(de(e,t,a,1,0)),n.push(de(e,t,a,1,-1)),n.push(de(e,t,a,0,-1)),n.push(de(e,t,a,-1,-1)),n},fe=function(e,t,a){var n,r=[],o=a%8,i=ve(e,(a-o)/8,o),l=Object(C.a)(i);try{for(l.s();!(n=l.n()).done;){var c=n.value;if(c.items.length)for(var s=0,u=[],m=0;m<c.items.length;m++){var d=c.items[m],v=d.status;if(!(void 0!==v))break;if(!(t?!v:v)){s>0&&(r=[].concat(Object(w.a)(r),u));break}s++,u.push(d.index)}}}catch(f){l.e(f)}finally{l.f()}return r},he=function(e,t){var a,n=e.map((function(e,t){return void 0===e?{status:e,index:t}:{status:e,index:-1}})).filter((function(e){return e.index>-1})),r=[],o=Object(C.a)(n);try{for(o.s();!(a=o.n()).done;){var i,l=a.value,c=l.index%8,s=(l.index-c)/8,u=ve(e,s,c),m=Object(C.a)(u);try{for(m.s();!(i=m.n()).done;){var d=i.value;if(d.items.length)for(var v=0,f=0;f<d.items.length;f++){var h=d.items[f].status,b=void 0!==h;if(!b)break;if(!(b&&t?!h:h)){v>0&&r.push(l);break}v++}}}catch(p){m.e(p)}finally{m.f()}}}catch(p){o.e(p)}finally{o.f()}return r.map((function(e){return e.index}))},be=Object(S.a)((function(e){var t,a,n="light"===e.palette.type?e.palette.primary.main:void 0;return Object(z.a)({root:(t={},Object(I.a)(t,e.breakpoints.up("xs"),{margin:"3px 0 0 0"}),Object(I.a)(t,e.breakpoints.up("sm"),{margin:"15px 0 0 0"}),t),cell:{display:"flex",justifyContent:"center",backgroundColor:"green",height:"100%",alignItems:"center"},token:(a={},Object(I.a)(a,e.breakpoints.up("xs"),{fontSize:30}),Object(I.a)(a,e.breakpoints.up("sm"),{fontSize:30}),Object(I.a)(a,e.breakpoints.up("md"),{fontSize:40}),Object(I.a)(a,e.breakpoints.up("xl"),{fontSize:60}),a),currentCountContainer:{padding:"20px 0 10px 0",backgroundColor:n}})})),pe=[void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,!0,!1,void 0,void 0,void 0,void 0,void 0,void 0,!1,!0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0],Ee=function(e){var t=e.initialBoard,a=be(),o=Object(n.useState)(Array.from(t).map((function(e,t){return t}))),i=Object(l.a)(o,1)[0],c=Object(n.useState)(t),s=Object(l.a)(c,2),u=s[0],d=s[1],v=Object(n.useState)(!1),f=Object(l.a)(v,2),h=f[0],b=f[1],p=Object(n.useState)(0),E=Object(l.a)(p,2),g=E[0],y=E[1],j=Object(n.useState)([]),k=Object(l.a)(j,2),O=k[0],x=k[1],I=Object(D.a)();Object(q.a)(I.breakpoints.up("sm"));console.log("currentPlayerIsWhite",h);var S=function(){var e=he(u,h);if(0!==e.length){var t,a=-1/0,n=null,r=Object(C.a)(e);try{for(r.s();!(t=r.n()).done;){var o=t.value,i=ce(u,h,o),l=le(i,2,a,1/0,!1);l>a&&(a=l,n=o)}}catch(d){r.e(d)}finally{r.f()}if(null!==n){var c=V(n),s=c.row,m=c.column;z(s,m)}else U()}else U()};Object(n.useEffect)((function(){console.log("useEffect : currentPlayerIsWhite : ",h),h&&S()}),[h]);var z=function(e,t){console.log("handleCellClick : Start",e,t);var a=ue(e,t);console.log("handleCellClick : boardPlacedCellIndex",a),console.log("handleCellClick : currentPlayerIsWhite",h);for(var n=fe(u,h,a),r=[],o=0;o<u.length;o++)if(o===a)r.push(h);else{var i=u[o];n.indexOf(o)>-1?r.push(h):r.push(i)}d(r),b(!h),y(0);var l=[].concat(Object(w.a)(O),[{currentPlayerIsWhite:h,boardPlacedCellIndex:a}]);x(l),oe(l),console.log("handleCellClick : End",e,t)},U=function(){b(!h),y(g+1)},H=function(){if(0!==O.length){var e=Object(w.a)(O),a=null,n=!1;do{a=e[e.length-1],e.pop(),a.currentPlayerIsWhite||(n=!0)}while(!n&&e.length>0);oe(e);var r=function(e,t){var a,n=e,r=Object(C.a)(t);try{for(r.s();!(a=r.n()).done;){var o=a.value;n=ce(n,o.currentPlayerIsWhite,o.boardPlacedCellIndex)}}catch(i){r.e(i)}finally{r.f()}return n}(t,e);d(r),x(e),b(h)}},V=function(e){var t=e%8;return{row:(e-t)/8,column:t}},A=u.filter((function(e){return void 0===e})),$=u.filter((function(e){return void 0!==e&&e})),K=u.filter((function(e){return void 0!==e&&!e})),Q=0===A.length||g>1,T="";if(Q){var Y=$.length,_=K.length;T=Y===_?"Neither: It was a Draw.":Y>_?"White":"Black"}var ee=he(u,h);console.log("currentPlayerIsWhite",h),console.log("validCells",ee);var te=r.a.createElement("div",{className:a.currentCountContainer},r.a.createElement(m.a,{item:!0,container:!0,alignItems:"center",alignContent:"space-between"},r.a.createElement(m.a,{item:!0,xs:2}),r.a.createElement(m.a,{item:!0,xs:3,container:!0},r.a.createElement(m.a,{item:!0,container:!0,justify:"center"},r.a.createElement(M.a,{color:"secondary",showZero:!0,overlap:"circle",badgeContent:$.length},r.a.createElement(L.a,{className:a.token,style:{color:"white"}})))),r.a.createElement(m.a,{item:!0,xs:2,container:!0},h&&r.a.createElement(m.a,{item:!0,container:!0,alignItems:"center",alignContent:"space-between"},r.a.createElement(m.a,{item:!0,xs:1,sm:2}),r.a.createElement(m.a,{item:!0,xs:10,sm:8,container:!0},r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement(W.a,{color:"secondary",size:20}))),r.a.createElement(m.a,{item:!0,xs:1,sm:2}))),r.a.createElement(m.a,{item:!0,xs:3,container:!0},r.a.createElement(m.a,{item:!0,container:!0,justify:"center"},r.a.createElement(M.a,{color:"secondary",showZero:!0,overlap:"circle",badgeContent:K.length},r.a.createElement(L.a,{className:a.token,style:{color:"black"}})))),r.a.createElement(m.a,{item:!0,xs:2})),Q&&r.a.createElement(m.a,{item:!0,container:!0,alignItems:"center",alignContent:"space-between"},r.a.createElement(m.a,{item:!0,xs:1,sm:2}),r.a.createElement(m.a,{item:!0,xs:10,sm:8,container:!0},r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement("div",{style:{fontSize:"14px"}},r.a.createElement("span",null,"Winner is ",T,"!")))),r.a.createElement(m.a,{item:!0,xs:1,sm:2})),Q&&g>1&&r.a.createElement(m.a,{item:!0,container:!0},r.a.createElement(m.a,{item:!0,xs:1,sm:2}),r.a.createElement(m.a,{item:!0,xs:10,sm:8,alignItems:"center",alignContent:"space-between",container:!0},r.a.createElement(m.a,{container:!0,justify:"center"},r.a.createElement("div",{style:{fontSize:"14px"}},r.a.createElement("span",null,"Both players have passed - game finished early")))),r.a.createElement(m.a,{item:!0,xs:1,sm:2})));return r.a.createElement("div",{className:a.root},r.a.createElement(P.a,{cols:8,cellHeight:"auto"},i.map((function(e){var t=Math.floor(e/8),n=e%8,o=ee.indexOf(e)>-1;return r.a.createElement(N.a,{key:e,cols:1,style:{cursor:o?"pointer":"not-allowed"}},r.a.createElement("div",{className:a.cell},r.a.createElement(X,{row:t,column:n,isWhite:u[e],handleClick:o?function(e,t){return z(e,t)}:function(){},isValid:o,currentPlayerIsWhite:h})))}))),r.a.createElement("br",null),te,r.a.createElement(R.a,{value:null,onChange:function(e,t){if(console.log(t),"Restart"===t)return d(pe),x([]),b(!1),void y(0);"Random"!==t?"Pass"!==t?"UndoLastMove"!==t||H():U():S()},showLabels:!0,className:a.root},r.a.createElement(B.a,{label:"Restart",value:"Restart",icon:r.a.createElement(F.a,null)}),!Q&&ee.length>0&&r.a.createElement(B.a,{label:"Random",value:"Random",icon:r.a.createElement(J.a,null)}),!Q&&O.length>0&&r.a.createElement(B.a,{label:"Undo",value:"UndoLastMove",icon:r.a.createElement(G.a,null)}),!Q&&0===ee.length&&r.a.createElement(B.a,{label:"Must Pass!",value:"Pass",icon:r.a.createElement(Z.a,null)})),Q&&r.a.createElement(ne,{message:"Winner is ".concat(T,"!")}),!Q&&!h&&g>0&&r.a.createElement(ne,{message:"Computer has passed!"}))},ge=function(e){Object(O.a)(a,e);var t=Object(x.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return n.createElement(Ee,{initialBoard:pe})}}]),a}(n.Component),ye=a(113);var je=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(c.a)({palette:{type:a?"dark":"light",primary:ye.a,secondary:ye.a}});return r.a.createElement(s.a,{theme:i},r.a.createElement(u.a,{elevation:0,square:!0,style:{height:"100%"}},r.a.createElement(m.a,{container:!0,direction:"column"},r.a.createElement(m.a,{item:!0},r.a.createElement(y,{isDarkMode:a,setIsDarkMode:o})),r.a.createElement(m.a,{item:!0,container:!0},r.a.createElement(m.a,{item:!0,xs:!1,sm:1}),r.a.createElement(m.a,{item:!0,xs:12,sm:10},r.a.createElement(ge,null)),r.a.createElement(m.a,{item:!0,xs:!1,sm:1})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.0b871560.chunk.js.map