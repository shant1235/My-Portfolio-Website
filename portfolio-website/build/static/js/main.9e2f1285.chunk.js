(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(25),r=a.n(l),c=(a(74),a(6)),s=a(10),o=a(8),m=a(7),u=(a(75),a(27)),d=a(20),h=a(14),p=a(28),b=a(68),g=a(56),f=a(18),E=a(16);var v=function(e){return i.a.createElement(g.a,{className:"bg-transparent jumbotron-fluid p-0"},i.a.createElement(h.a,{fluid:!0},i.a.createElement(f.a,{className:"justify-content-center py-5"},i.a.createElement(E.a,{md:8,sm:12},e.title&&i.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.title&&i.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.title&&i.a.createElement("h3",{className:"display-5 font-weight-light"},e.text)))))},k=a(24),y=a(58),S=a.n(y),N=a(59),j=a.n(N),x=a(60),C=a.n(x),w=a(61),T=a.n(w),O=a(62),P=a.n(O),B=a(63),M=a.n(B),R=a(45);var A=function(e){var t=Object(R.b)({opacity:1,from:{opacity:0}});return i.a.createElement(R.a.div,{className:"p-card-info",style:t},i.a.createElement("p",{className:"p-card-title"},e.title),i.a.createElement("p",{className:"p-card-sub-title"},e.subTitle),i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View Project"),i.a.createElement("div",null),i.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},"Source"))};var I=function(e){return i.a.createElement("div",{className:"d-inline-block p-card",onClick:function(t){return e.click(e.item)}},i.a.createElement("img",{className:"p-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&i.a.createElement(A,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link,github:e.item.github}))},V=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(k.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return i.a.createElement(I,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Algorithm Visualiser",subTitle:"React.js ",imgSrc:S.a,link:"https://shant1235.github.io/Sorting-Algorithm-Visualization/",github:"https://github.com/shant1235/Sorting-Algorithm-Visualization",selected:!1},{id:1,title:"Rescue Rover",subTitle:"For high risk enviroments",imgSrc:j.a,link:"https://devpost.com/software/rescue-rover",github:"https://github.com/shant1235/MakeUofT-RescueRover",selected:!1},{id:2,title:"DriveSafe",subTitle:"Computer Vision",imgSrc:C.a,link:"https://devpost.com/software/drivesafe-ub4joi",github:"https://github.com/shant1235/DriveSafe-Pi-Arduino",selected:!1},{id:3,title:"Mars Rover",subTitle:"Computer Vision",imgSrc:P.a,link:"https://teamr3.ca/rover.html",github:"https://github.com/shant1235/URC-2019-Code",selected:!1},{id:4,title:"ESP32 Development Board",subTitle:"Computer Vision",imgSrc:T.a,link:"/ESP32",github:"/",selected:!1},{id:5,title:"16V Buckconverter",subTitle:"Computer Vision",imgSrc:M.a,link:"/Buckconverter",github:"/",selected:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,{fluid:!0},i.a.createElement(f.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(i.a.Component);var D=function(e){return i.a.createElement("div",null,i.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text}),i.a.createElement(V,null))};var F=function(){return i.a.createElement("footer",{className:"mt-5"},i.a.createElement(h.a,{fluid:!0},i.a.createElement(f.a,{className:"border-top justify-content-between p-3"},i.a.createElement(E.a,{className:"p-0",md:3,sm:12},"Prashant Mistry"),i.a.createElement(E.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Prashant Mistry"))))},L=a(23),G=a(13),H=a(65),J=a(64),U=a.n(J),W=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,i=t.name;n.setState(Object(L.a)({},i,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0}),U.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:"null"},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(v,{title:this.props.title}),i.a.createElement(z,null,i.a.createElement(G.a,{onSubmit:this.handleSubmit},i.a.createElement(G.a.Group,null,i.a.createElement(G.a.Label,{htmlFor:"full-name"},"Full Name"),i.a.createElement(G.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),i.a.createElement(G.a.Group,null,i.a.createElement(G.a.Label,{htmlFor:"email"},"Email"),i.a.createElement(G.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),i.a.createElement(G.a.Group,null,i.a.createElement(G.a.Label,{htmlFor:"message"},"Message"),i.a.createElement(G.a.Control,{id:"message",name:"message",as:"textarea",row:"3",value:this.state.message,onChange:this.handleChange})),i.a.createElement(H.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&i.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&i.a.createElement("p",{className:"d-inline error-msg"},"Email not Sent"))))}}]),a}(i.a.Component);var z=function(e){return i.a.createElement(h.a,{fluid:!0},i.a.createElement(f.a,{className:"justify-content-center"},i.a.createElement(E.a,{md:8},e.children)))};a(96);var _=function(e){return i.a.createElement("div",null,i.a.createElement(v,{title:e.title}),i.a.createElement(z,null,i.a.createElement("h3",{className:" "},"Who am I?"),i.a.createElement("p",{className:"my-5 h5 lead"},"I am a student at Ryerson University currently majoring in Computer Engineering. The program is a perfect fit for me as I enjoy learning about analysis and design of complex systems. Having a strong backround in technology has allowed me to develop many complex projects.In the future, I hope to start my own design company to manufacture industrial robots.")))},$=a(39),q=a.n($),K=a(40),Q=a.n(K);var X=function(e){return i.a.createElement("div",null,i.a.createElement("img",{className:"sch-image",src:q.a,alt:q.a}),i.a.createElement("img",{className:"brd-image",src:Q.a,alt:Q.a}))},Y=a(41),Z=a.n(Y),ee=a(42),te=a.n(ee);var ae=function(e){return i.a.createElement("div",null,i.a.createElement("img",{className:"sch2-image",src:Z.a,alt:Z.a}),i.a.createElement("img",{className:"brd2-image",src:te.a,alt:te.a}))},ne=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={title:"Prashant Mistry",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Prashant Mistry",subTitle:"It's always a mystery",text:"Check out my project history"},about:{title:"About me"},contact:{title:"Let's Talk"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(u.a,null,i.a.createElement(h.a,{className:"p-0",fluid:!0},i.a.createElement(p.a,{className:"border-bottom",bg:"transparent",expand:"lg"},i.a.createElement(p.a.Brand,null,"Prashant Mistry"),i.a.createElement(p.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),i.a.createElement(p.a.Collapse,{id:"navbar-toggle"},i.a.createElement(b.a,{className:"ml-auto"},i.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),i.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),i.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),i.a.createElement(d.a,{path:"/",exact:!0,render:function(){return i.a.createElement(D,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),i.a.createElement(d.a,{path:"/about",exact:!0,render:function(){return i.a.createElement(_,{title:e.state.about.title})}}),i.a.createElement(d.a,{path:"/contact",exact:!0,render:function(){return i.a.createElement(W,{title:e.state.contact.title})}}),i.a.createElement(d.a,{path:"/ESP32",exact:!0,render:function(){return i.a.createElement(X,null)}}),i.a.createElement(d.a,{path:"/Buckconverter",exact:!0,render:function(){return i.a.createElement(ae,null)}}),i.a.createElement(F,null)))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(100);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){e.exports=a.p+"static/media/ESP32S.4e7cd382.png"},40:function(e,t,a){e.exports=a.p+"static/media/board.412e4772.png"},41:function(e,t,a){e.exports=a.p+"static/media/BuckS.9a7fa643.png"},42:function(e,t,a){e.exports=a.p+"static/media/BuckB.7bd875de.png"},58:function(e,t,a){e.exports=a.p+"static/media/Algo.698e1de3.png"},59:function(e,t,a){e.exports=a.p+"static/media/Rescue Rover.8063279b.png"},60:function(e,t,a){e.exports=a.p+"static/media/DriveSafe.e5118f0d.png"},61:function(e,t,a){e.exports=a.p+"static/media/test.a8307414.png"},62:function(e,t,a){e.exports=a.p+"static/media/Mars.045c1877.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/Buck.1f59b6f8.jpg"},69:function(e,t,a){e.exports=a(101)},74:function(e,t,a){},75:function(e,t,a){},96:function(e,t,a){e.exports=a.p+"static/media/AboutMe.97f0a8ee.JPG"}},[[69,1,2]]]);
//# sourceMappingURL=main.9e2f1285.chunk.js.map