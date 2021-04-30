(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(31)},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(13),i=a.n(l),c=(a(26),a(1)),s=a(6),r=function(e){return o.a.createElement("label",{className:e.className,id:e.id,value:"text"===e.type?null:e.value},e.labelBefore?e.label:null,o.a.createElement("input",{type:e.type,className:e.labelBefore?"ml-2":"mr-2",onChange:function(t){e.definition?e.onChange(t,e.definition):e.onChange(t,"")},checked:e.checked,required:e.required,max:e.max,min:e.min,value:e.value,placeholder:e.placeholder,id:e.id}),e.labelBefore?null:e.label)},m=function(e){var t=["btn","btn-purple"];e.disabled&&t.push("disabled"),e.simple&&t.push("btn-purple-basic"),e.size&&t.push("btn-".concat(e.size));return o.a.createElement("button",{type:e.type,onClick:function(t){e.link?window.open(e.link,"_self"):e.onClick(t)},className:t.join(" ")},e.children)},d=function(e){var t=e.value,a=function(a){var n=Object(c.a)({},t),o=a.target.id,l=a.target.value;n[o]=l,e.update(Object(c.a)({},n),"infoForm")};return o.a.createElement("div",null,o.a.createElement("h3",null,"Get Your Quote"),o.a.createElement("form",{className:"d-flex flex-column flex-wrap flex-md-row justify-content-center align-items-around"},o.a.createElement("div",{className:"my-4 col-12 col-md-6"},o.a.createElement(r,{id:"name",value:t.name,placeholder:" Name",type:"text",onChange:a})),o.a.createElement("div",{className:"my-4 col-12 col-md-6"},o.a.createElement(r,{id:"phone",value:t.phone,placeholder:" Phone",type:"phone",onChange:a})),o.a.createElement("div",{className:"my-4 col-12"},o.a.createElement(r,{id:"email",value:t.email,placeholder:" Email",type:"text",onChange:a})),o.a.createElement("div",{className:"my-4 col-12"},o.a.createElement("textarea",{className:"pl-2",placeholder:"Message",id:"message",onChange:a},t.message)),o.a.createElement("div",{className:"my-4 pr-md-5 pr-3 d-flex justify-content-end col-12"},o.a.createElement(m,{size:"lg",type:"button",simple:!0,onClick:e.submitForm},"Submit Form"))))},u=function(e){var t=e.value,a=function(a,n){var o="".concat(a.target.id),l=Number(a.target.value);e.update({siteType:o,design:100*t.pages+l,subtotal:100*t.pages+l,pages:t.pages},"pages",n)};return o.a.createElement("form",{className:"d-flex flex-column flex-wrap flex-row justify-content-center align-items-around"},o.a.createElement("h3",{className:"mb-3"},"Lets Start With Pages"),o.a.createElement("div",{className:"col-12 align-items-center"},o.a.createElement(r,{id:"basic",value:240,label:"Fast Design with Less Consulting & Meetings",type:"radio",checked:"basic"===t.siteType,onChange:a,definition:"We build a templated site, with consoltations in the beginning to get the proper theme and styling. A more hands off approach."})),o.a.createElement("div",{className:"col-12 align-items-center"},o.a.createElement(r,{id:"custom",value:600,label:"Custom Website with Consultative Process",type:"radio",checked:"custom"===t.siteType,onChange:a,definition:"We build you a custom site, with multiple consaltations to get capture exactly what you invision, where you get to be a part of the large and small scale process."})),o.a.createElement("div",{className:"my-4 col-12 d-flex flex-row align-items-center justify-content-start"},o.a.createElement(r,{id:"pages",value:t.pages,label:"How many pages will you want custom built?",type:"number",step:"1",min:"0",max:"1000",onChange:function(a,n){var o=Number(a.target.value);e.update({siteType:t.siteType,pages:o,design:t.design+100*o,subtotal:t.design+100*o},"pages",n)},className:"page-num",required:!0,labelBefore:!0,definition:"This is the number of pages you will want us to build for you (Home, contact, ect.). Any page you won't want to build on your own."})))},p=function(e){return o.a.createElement("div",{className:"d-flex flex-column flex-wrap justify-content-center align-items-around pl-3"},e.options.map(function(t){return o.a.createElement(r,{id:t.name,type:"radio",value:t.value,onChange:function(a){e.onChange(a.target.value,e.id,e.options.indexOf(t))},label:t.definition,checked:t.checked})}))},h=function(e){var t=e.value,a=function(a,n){var o=Object(c.a)({},t),l=a.target.id,i=Number(a.target.value);o[l]=!o[l],o[l]?o.subtotal+=i:o.subtotal-=i,e.update(Object(c.a)({},o),"backEndNeeds",n)},n=function(a,n,o){var l=Object(c.a)({},t);l.subtotal-=l[n].subtotal;for(var i=0;i<l[n].options.length;i++)l[n].options[i]=i===o;l[n].subtotal=Number(a),l.subtotal+=l[n].subtotal,e.update(Object(c.a)({},l),"backEndNeeds","")};return o.a.createElement("form",{className:"d-flex flex-column flex-wrap justify-content-center align-items-around"},o.a.createElement("h3",null,"Back End Needs"),o.a.createElement("div",{className:"col-12 d-flex flex-column justify-content-start align-items-start"},o.a.createElement(r,{id:"option1",value:500,label:"Customer Login",type:"checkbox",checked:t.option1,onChange:a}),t.option1?o.a.createElement(p,{id:"sudo1",onChange:n,options:[{name:"opt1",definition:"Basic login to veiw members only features or information",value:500,checked:t.sudo1.options[0]},{name:"opt2",definition:"Including the basics customers will also have a profile section where they can customize their info.",value:1e3,checked:t.sudo1.options[1]},{name:"opt3",definition:"Along with options 1 and 2 will also be able to post and edit content.",value:1500,checked:t.sudo1.options[2]},{name:"opt4",definition:"All of the above, and members can also like and comment on others work.",value:2e3,checked:t.sudo1.options[3]}]}):null,o.a.createElement(r,{id:"option2",value:400,label:"Employee Login",type:"checkbox",checked:t.option2,onChange:a}),t.option2?o.a.createElement(p,{id:"sudo2",onChange:n,options:[{name:"opt1",definition:"Basic login to veiw employee only features or information.",value:500,checked:t.sudo2.options[0]},{name:"opt2",definition:"Including the basics employees will also have a profile section where they can customize their info.",value:1e3,checked:t.sudo2.options[1]},{name:"opt3",definition:"Along with the first 2 employees will also be able to post/store and edit content.",value:1500,checked:t.sudo2.options[2]}]}):null,o.a.createElement(r,{id:"option3",value:500,label:"eCommerce",type:"checkbox",checked:t.option3,onChange:a}),t.option3?o.a.createElement("div",null,o.a.createElement(p,{id:"sudo3",onChange:n,options:[{name:"opt1",definition:"eCommerce items and pages route to a different website (shopify, amazon, ect)",value:200,checked:t.sudo3.options[0]},{name:"opt2",definition:"Built off shopify: we build you a basic site shopify site, with limited customization, but clean user flow and experience. ",value:1e3,checked:t.sudo3.options[1]},{name:"opt3",definition:"The more customizable version of option 2.",value:1800,checked:t.sudo3.options[2]}]}),o.a.createElement("textarea",{className:"pl-2 ml-3 col-11",placeholder:"Any additional info about your eCommerce needs?",id:"message",onChange:function(a){var n=Object(c.a)({},t),o=a.target.id,l=a.target.value;n[o]=l,e.update(Object(c.a)({},n),"backEndNeeds"," Any additional info about your eCommerce needs?")}},t.message)):null))},b=function(e){var t=e.value,a=function(a,n){var o=Object(c.a)({},t),l=a.target.id,i=Number(a.target.value);o[l]=!o[l],o[l]?o.subtotal+=i:o.subtotal-=i,e.update(Object(c.a)({},o),"basicNeeds","".concat(n,": Most of these pages require a basic database and editing features built in. Theses pages will need to be built dynamicly. Note - this is only for full pages. Some of these can be built as less dynamic sections."))};return o.a.createElement("div",{subtotal:t.subtotal},o.a.createElement("form",{className:"d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around"},o.a.createElement("h3",null,"Basic Pages Needs"),o.a.createElement("h5",null,"Do you plan to include any of these types of pages in your site?"),o.a.createElement("div",{className:"col-12 col-md-6 d-flex flex-column justify-content-start align-items-start"},o.a.createElement(r,{id:"option1",value:220,label:"Blog",type:"checkbox",checked:t.option1,onChange:a,definition:"Blog Page"}),o.a.createElement(r,{id:"option2",value:330,label:"Events",type:"checkbox",checked:t.option2,onChange:a,definition:"Events Page"}),o.a.createElement(r,{id:"option3",value:220,label:"Specials",type:"checkbox",checked:t.option3,onChange:a,definition:"Specials Page"}),o.a.createElement(r,{id:"option4",value:220,label:"FAQ's",type:"checkbox",checked:t.option4,onChange:a,definition:""}),o.a.createElement(r,{id:"option5",value:220,label:"Staff/Board Members",type:"checkbox",checked:t.option5,onChange:a,definition:"Staff or Board Members Page"}),o.a.createElement(r,{id:"option6",value:220,label:"News/Press Releases",type:"checkbox",checked:t.option6,onChange:a,definition:"News or Press Release Page"}),o.a.createElement(r,{id:"option7",value:330,label:"Clients",type:"checkbox",checked:t.option7,onChange:a,definition:"Clients Page"}),o.a.createElement(r,{id:"option8",value:220,label:"Resources or Documentation Library",type:"checkbox",checked:t.option8,onChange:a,definition:"Resources or Documentation Library Page"}),o.a.createElement(r,{id:"option9",value:330,label:"Projects/Portfolio",type:"checkbox",checked:t.option9,onChange:a,definition:"Projects or Portfolio Page"}),o.a.createElement(r,{id:"option10",value:110,label:"Sponsors",type:"checkbox",checked:t.option10,onChange:a,definition:"Sponsors Page"}),o.a.createElement(r,{id:"option11",value:220,label:"Careers/Jobs",type:"checkbox",checked:t.option11,onChange:a,definition:"Careers or Jobs Page"}),o.a.createElement(r,{id:"option12",value:110,label:"Testimonials",type:"checkbox",checked:t.option12,onChange:a,definition:"Testeomnials Page"}))))},f=a(14),g=a(15),v=a(19),E=a(16),y=a(20),k=function(e){function t(e){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).call(this,e))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"price-card p-3"},o.a.createElement("h5",{id:"pages",className:0===this.props.pages?"d-none":"d-block"},"Basic Site Needs: ",o.a.createElement("span",{className:"float-right"},"$ ",this.props.pages)),o.a.createElement("h5",{id:"design",className:0===this.props.design?"d-none":"d-block"},"Dynamic Design: ",o.a.createElement("span",{className:"float-right"},"$ ",this.props.design)),o.a.createElement("h5",{id:"programming",className:0===this.props.programming?"d-none":"d-block"},"Programming: ",o.a.createElement("span",{className:"float-right"},"$ ",this.props.programming)),o.a.createElement("hr",null),o.a.createElement("h4",{className:"px-3 bold"},"Subtotal:  ",o.a.createElement("span",{className:"float-right"},"$ ",this.props.pages+this.props.design+this.props.programming)))}}]),t}(o.a.Component),N=function(e){var t=Object(n.useState)({pages:{siteType:"",subtotal:0,design:0,pages:0},basicNeeds:{option1:!1,option2:!1,option3:!1,option4:!1,option5:!1,option6:!1,option7:!1,option8:!1,option9:!1,option10:!1,option11:!1,option12:!1,subtotal:0},backEndNeeds:{option1:!1,sudo1:{options:[!1,!1,!1,!1],subtotal:0},option2:!1,sudo2:{options:[!1,!1,!1],subtotal:0},option3:!1,sudo3:{options:[!1,!1,!1,!1],subtotal:0},subtotal:0,message:""},infoForm:{name:"",email:"",phone:"",message:""}}),a=Object(s.a)(t,2),l=a[0],i=a[1],r=Object(n.useState)(0),p=Object(s.a)(r,2),f=p[0],g=p[1],v=Object(n.useState)(""),E=Object(s.a)(v,2),y=E[0],N=E[1],x=function(e,t,a){var n=Object(c.a)({},l);n[t]=Object(c.a)({},e),i(n),N(a)},w=[o.a.createElement(u,{value:l.pages,update:x}),o.a.createElement(b,{value:l.basicNeeds,update:x}),o.a.createElement(h,{value:l.backEndNeeds,update:x}),o.a.createElement(d,{value:l.infoForm,update:x,submitForm:function(){window.open("/thanks","_self")}})];return o.a.createElement("div",{className:"container flex-wrap flex-row d-flex justify-content-center align-items-center"},o.a.createElement("div",{className:"col-12 col-md-8"},o.a.createElement("div",null,o.a.createElement("h4",null,"Step ",f+1," of ",w.length)),w[f],o.a.createElement("div",null,y),o.a.createElement("div",{className:"my-4 pr-md-5 pr-3 d-flex justify-content-end col-12"},0!==f?o.a.createElement(m,{size:"lg",simple:!0,onClick:function(){f>0&&(g(f-1),N(""))}},"Previous"):null,f!==w.length-1?o.a.createElement(m,{size:"lg",onClick:function(){f<3&&(g(f+1),N(""))}},"Next"):null)),o.a.createElement("div",{className:"col-12 col-md-4"},o.a.createElement(k,{pages:l.pages.subtotal,design:l.basicNeeds.subtotal,programming:l.backEndNeeds.subtotal})))},x=[{path:"/",name:"HomePage",component:function(e){return o.a.createElement("article",{id:"contact"},o.a.createElement("section",{className:"py-5 h-100vh d-flex flex-wrap overflow-hidden color-change-bg"},o.a.createElement("div",{className:"container flex-wrap flex-row d-flex justify-content-center align-items-center"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"card"},o.a.createElement("h1",{className:"text-center m-4"},"Your New Project Starts Here"),o.a.createElement(N,null))))))}}],w=a(4),C=a(33),j=Object(w.a)();i.a.render(o.a.createElement(C.b,{history:j},o.a.createElement(C.c,null,x.map(function(e,t){return o.a.createElement(C.a,{path:e.path,key:t,component:e.component})}))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.04b54d84.chunk.js.map