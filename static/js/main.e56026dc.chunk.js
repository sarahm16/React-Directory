(this["webpackJsonpreact-directory"]=this["webpackJsonpreact-directory"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=(a(13),a(1)),m=a(2),c=a(4),d=a(3),s=[{id:1,name:"Mark",email:"mark@email.com",role:"Lead Engineer",department:"Engineering"},{id:2,name:"Ali",email:"ali@email.com",role:"Manager",department:"Sales"},{id:3,name:"Jonathon",email:"jonathon@email.com",role:"Manager",department:"Engineering"},{id:4,name:"Jared",email:"jared@email.com",role:"Manager",department:"HR"},{id:5,name:"Sarah",email:"sarah@email.com",role:"Recruiter",department:"HR"},{id:6,name:"Mike",email:"mike@email.com",role:"Manager",department:"Legal"},{id:7,name:"Chris",email:"chris@email.com",role:"Lawyer",department:"Legal"},{id:8,name:"Britney",email:"britney@email.com",role:"Software Engineer",department:"Engineering"},{id:9,name:"Josh",email:"josh@email.com",role:"Sales Lead",department:"Sales"},{id:10,name:"Kyle",email:"kyle@email.com",role:"Recruiter",department:"HR"}],u=(a(5),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={employees:e.employees},n}return Object(m.a)(a,[{key:"renderTableData",value:function(){return console.log("rendering"),this.state.employees.map((function(e,t){var a=e.id,n=e.name,l=e.email,o=e.role,i=e.department;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,o),r.a.createElement("td",null,i))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("table",{id:"employees"},r.a.createElement("thead",{id:"table-header"},r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Email"),r.a.createElement("td",null,"Role"),r.a.createElement("td",null,"Department")),r.a.createElement("tbody",null,this.renderTableData())))}}]),a}(n.Component));var h=function(e,t){var a=e.name.toUpperCase(),n=t.name.toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),r};var p=function(e){for(var t=[],a=0;a<s.length;a++)-1===t.indexOf(s[a][e])&&t.push(s[a][e]);return t};var E=function(e){var t=p(e.list);return r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle","data-toggle":"dropdown"},"Filter by ",e.list),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},t.map((function(t){return r.a.createElement("button",{value:t,name:e.list,className:"dropdown-item",onClick:e.handleFilterBtn},t)}))))};var g=function(){return r.a.createElement("div",{id:"header"},r.a.createElement("h1",null,"Employee Roster"),r.a.createElement("i",{class:"fas fa-globe-americas"}))},f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:s},e.handleSortBtn=function(){e.setState({employees:s.sort(h)})},e.handleFilterBtn=function(t){for(var a=t.target.value,n=s.filter((function(e){return e[t.target.name].includes(a)})),r=0;r<n.length;r++)s[r]=n[r];s.splice(n.length,s.length-n.length),e.setState({})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(u,{employees:this.state.employees}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:this.handleSortBtn,className:"btn btn-secondary"},"Sort A-Z"),r.a.createElement(E,{list:"department",handleFilterBtn:this.handleFilterBtn}),r.a.createElement(E,{list:"role",handleFilterBtn:this.handleFilterBtn})))}}]),a}(n.Component);var v=function(){return r.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e56026dc.chunk.js.map