(this.webpackJsonpfanikauppa=this.webpackJsonpfanikauppa||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(5),a=c.n(s),r=(c(10),c(2)),j=(c.p,c(11),c(3)),u=c(0),l=function(e){var t=e.tuote,c=e.addtocart,n=e.removefromcart,s=Object(i.useState)(!1),a=Object(r.a)(s,2),j=a[0],l=a[1];return Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"tuote",children:[Object(u.jsx)("div",{className:"kuvadiv",children:Object(u.jsx)("img",{src:t.img,className:"tuotekuva"})}),Object(u.jsxs)("div",{className:"tietodiv",children:[Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:t.name})}),Object(u.jsxs)("p",{children:[Object(u.jsx)("i",{children:t.hinta}),"\u20ac/kpl"]}),Object(u.jsx)("p",{onClick:function(){return l(!j)},className:"lisatieto",children:"Lis\xe4tiedot"}),j?Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:t.tietoja})]}):null]}),Object(u.jsxs)("div",{className:"tietodiv",children:[Object(u.jsx)("button",{className:"vihrea",onClick:function(){return c(t.id)},children:"Lis\xe4\xe4 koriin"}),0!=t.cart&&Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"punainen",onClick:function(){return n(t.id)},children:"Poista korista"}),Object(u.jsxs)("p",{children:["Korissa: ",t.cart," | Yhteens\xe4: ",Math.round(t.cart*t.hinta*100)/100,"\u20ac"]})]})]})]})})},b=function(e){var t=e.tuotteetdata,c=e.setProducts,i=function(e){c(t.map((function(t){return e===t.id?Object(j.a)(Object(j.a)({},t),{},{cart:t.cart+1}):t})))},n=function(e){c(t.map((function(t){return e===t.id?Object(j.a)(Object(j.a)({},t),{},{cart:t.cart-1}):t})))};return Object(u.jsx)("div",{className:"center",children:t.map((function(e,t){return Object(u.jsx)(l,{tuote:e,addtocart:i,removefromcart:n,setProducts:c},t)}))})},o=function(e){var t=e.tuote;return Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"tuote",children:[Object(u.jsx)("div",{className:"kuvadiv",children:Object(u.jsx)("img",{src:t.img,className:"tuotekuva"})}),Object(u.jsxs)("div",{className:"tietodiv",children:[Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:t.name})}),Object(u.jsxs)("p",{children:["Korissa: ",t.cart]}),Object(u.jsxs)("p",{children:["Yhteens\xe4: ",Math.round(t.cart*t.hinta*100)/100,"\u20ac"]})]})]})})},d=function(e){var t=e.tuotteetdata,c=e.setProducts,i=e.tuotteetalku,n=e.onClick2;return!t.map((function(e){return e.cart})).reduce((function(e,t){return e+t}))<1?Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"center",children:t.filter((function(e){return e.cart>0})).map((function(e){return Object(u.jsx)(o,{tuote:e},e.id)}))}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Yhteens\xe4: ",Math.round(100*t.map((function(e){return e.cart*e.hinta})).reduce((function(e,t){return e+t})))/100,"\u20ac"]}),Object(u.jsx)("button",{className:"vihrea",onClick:n,children:"Kassalle"}),Object(u.jsx)("button",{className:"punainen",onClick:function(){c(i)},children:"Tyhjenn\xe4"})]})]})}):Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("h2",{children:Object(u.jsx)("b",{children:"Ostoskorisi on tyhj\xe4!"})})})},h=function(e){var t=e.tuote,c=e.i;return Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"tuote",children:[Object(u.jsx)("div",{className:"kuvadiv",children:Object(u.jsx)("img",{src:t.img,className:"tuotekuva"})}),Object(u.jsxs)("div",{className:"tietodiv",children:[Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:t.name})}),Object(u.jsxs)("p",{children:["Korissa: ",t.cart]}),Object(u.jsxs)("p",{children:["Yhteens\xe4: ",Math.round(t.cart*t.hinta*100)/100,"\u20ac"]})]})]})},c)},O=function(e){var t=e.tuotteetdata,c=e.setProducts,n=e.tuotteetalku,s=e.onClick2,a=e.setShowText2,j=Object(i.useState)(""),l=Object(r.a)(j,2),b=l[0],o=l[1],d=Object(i.useState)(""),O=Object(r.a)(d,2),x=O[0],m=O[1],p=Object(i.useState)(""),v=Object(r.a)(p,2),k=v[0],f=v[1],g=Object(i.useState)(""),N=Object(r.a)(g,2),C=N[0],S=N[1],y=Object(i.useState)(""),T=Object(r.a)(y,2),P=T[0],K=T[1],M=Object(i.useState)(""),q=Object(r.a)(M,2),L=q[0],w=q[1],Y=Object(i.useState)(""),F=Object(r.a)(Y,2),E=F[0],J=F[1],A=Object(i.useState)(""),B=Object(r.a)(A,2),D=B[0],I=B[1],_=Object(i.useState)({etunimi:"",sukunimi:"",mail:"",puhelin:"",katuosoite:"",postitoimipaikka:"",postinumero:""}),H=Object(r.a)(_,2),V=H[0],z=H[1],G=Object(i.useState)(Math.round(100*t.map((function(e){return e.cart*e.hinta})).reduce((function(e,t){return e+t})))/100),Q=Object(r.a)(G,2),R=Q[0],U=Q[1];return Object(u.jsx)("div",{className:"center",children:V.etunimi.length<1?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Tilaus"}),Object(u.jsx)("div",{className:"center",children:t.filter((function(e){return e.cart>0})).map((function(e){return Object(u.jsx)(h,{tuote:e},e.id)}))}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Yhteens\xe4: ",Math.round(100*t.map((function(e){return e.cart*e.hinta})).reduce((function(e,t){return e+t})))/100,"\u20ac"]}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"lomake",children:[Object(u.jsx)("h2",{children:"Tilaus lomake"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),z({etunimi:b,sukunimi:x,mail:k,puhelin:C,katuosoite:P,postitoimipaikka:L,postinumero:E}),"free"==D?U(0):"lol"==D?U(.9*R):R>=200?U(.925*R):R>=100&&U(.95*R),o(""),m(""),f(""),S(""),K(""),w(""),J(""),I("")},children:[Object(u.jsxs)("div",{className:"lomakkeet",children:[Object(u.jsxs)("div",{className:"inputdiv",children:[Object(u.jsx)("h3",{children:"Henkil\xf6kohtaiset tiedot"}),Object(u.jsx)("label",{children:"Etunimi*"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",onChange:function(e){return o(e.target.value)},required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Sukunimi*"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)},required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"S\xe4hk\xf6posti*"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"mail",onChange:function(e){return f(e.target.value)},required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Puhelinnumero*"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"tel",onChange:function(e){return S(e.target.value)},required:!0}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{className:"inputdiv",children:[Object(u.jsx)("h3",{children:"Osoite tiedot"}),Object(u.jsx)("label",{children:"Katuosoite*"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",onChange:function(e){return K(e.target.value)},required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Postitoimipaikka*"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",onChange:function(e){return w(e.target.value)},required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Postinumero*"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",onChange:function(e){return J(e.target.value)},required:!0}),Object(u.jsx)("br",{})]})]}),Object(u.jsx)("label",{children:"Kuponki: "}),Object(u.jsx)("p",{className:"kuponki",children:Object(u.jsxs)("i",{children:["Jos yhteishinta on 100\u20ac tai yli saat 5% alennusta,",Object(u.jsx)("br",{}),"mutta jos hinta on yli 200\u20ac saat 7.5% alennusta!",Object(u.jsx)("br",{}),"Kupongit antavat enemm\xe4n alennusta aina!"]})}),Object(u.jsx)("input",{className:"free"==D||"lol"==D?"kupkyl":"kupei",type:"ale",onChange:function(e){return I(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"vihrea",type:"submit",value:"Tilaa"})]})]})})]}),Object(u.jsx)("button",{className:"punainen",onClick:s,children:"Takaisin"})]}):Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{className:"tuote",children:[Object(u.jsxs)("div",{className:"tietodiv",children:[Object(u.jsx)("h1",{children:"Tilaus:"}),t.filter((function(e){return e.cart>0})).map((function(e){return Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:e.name})," x ",e.cart]})})),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Lopullinen hinta:"})," ",Math.round(100*R)/100,"\u20ac"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Tilaaja:"})," ",V.etunimi," ",V.sukunimi]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"S\xe4hk\xf6posti:"})," ",V.mail]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Puhelinnumero:"})," ",V.puhelin]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Osoite:"})," ",V.katuosoite," ",V.postitoimipaikka," ",V.postinumero]}),Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:"Kiitos tilauksestasi!"})})]}),Object(u.jsx)("button",{className:"punainen",onClick:function(){c(n),a(!0)},children:"Etusivulle"})]})})})},x=function(){var e=[{id:1,name:"Special edition muki",hinta:"12.99",tietoja:"T\xe4m\xe4 hieno t\xe4ysin valkoinen muki on t\xe4ydellinen.",img:"https://freesvg.org/img/1554826850.png",cart:0},{id:2,name:"Liian iso liipis",hinta:"9.99",tietoja:"T\xe4m\xe4 lippis on liian iso kenellekk\xe4\xe4n.",img:"https://freesvg.org/img/baseballcap.png",cart:0},{id:3,name:"T-paita",hinta:"15",tietoja:"T\xe4m\xe4 paita on 51% muovia, 9% puuvillaa ja 40% polyesteri\xe4",img:"https://freesvg.org/img/t-shirt_white.png",cart:0},{id:4,name:"Valkoinen juliste",hinta:"0.01",tietoja:"T\xe4ysin valkoinen juliste...",img:"https://cdn.pixabay.com/photo/2021/03/27/10/20/frame-6127989_1280.jpg",cart:0}],t=Object(i.useState)(e),c=Object(r.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)(!0),j=Object(r.a)(a,2),l=j[0],o=j[1],h=function(){return o(!l)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:"Turha fanikauppa"}),l?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Tuotteet"}),Object(u.jsx)(b,{tuotteetdata:n,setProducts:s}),Object(u.jsx)("hr",{}),Object(u.jsx)("h1",{children:"Ostoskori"}),Object(u.jsx)(d,{tuotteetdata:n,setProducts:s,tuotteetalku:e,onClick2:h})]}):Object(u.jsx)("div",{children:Object(u.jsx)(O,{tuotteetdata:n,setProducts:s,tuotteetalku:e,onClick2:h,setShowText2:o})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.25185121.chunk.js.map