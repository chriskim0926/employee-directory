(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{96:function(e,t,a){"use strict";a.r(t);var o=a(5),r=a(1),s=a.n(r),n=a(9),l=a.n(n),c=a(39),i=a(40),d=a(49),m=a(48),p=a(41),h=a.n(p),u=a(47),b=function(e){var t={columns:[{label:"Name",field:"name",sort:"asc",width:500},{label:"Email",field:"email",sort:"asc",width:500},{label:"Image",field:"image",sort:"asc",width:500},{label:"Phone",field:"phone",sort:"asc",width:300},{label:"DOB",field:"dob",sort:"asc",width:250}],rows:e.employees};return console.log("Props",e),Object(o.jsx)(u.c,{sorting:!0,striped:!0,bordered:!0,data:t})},j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employeeRecords:[]},e.componentDidMount=function(){h.a.get("https://randomuser.me/api/?results=500&nat=us").then((function(t){var a=t.data.results,o=[];console.log(a);for(var r=0;r<a.length;r++){var s={name:a[r].name.first+" "+a[r].name.last,email:a[r].email,image:a[r].picture.thumbnail,phone:a[r].cell,dob:a[r].dob.date};o.push(s)}console.log(o),e.setState({employeeRecords:o})}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Employee Details"}),Object(o.jsx)(b,{employees:this.state.employeeRecords})]})}}]),a}(s.a.Component);var f=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"jumotron",children:"Employee Directory"}),Object(o.jsx)(j,{})]})};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.d34aeca7.chunk.js.map