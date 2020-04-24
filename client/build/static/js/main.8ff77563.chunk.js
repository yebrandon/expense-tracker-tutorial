(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{21:function(e,t,n){e.exports=n(45)},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),o=function(){return r.a.createElement("h2",null,"Expense Tracker")},u=n(2),s=n.n(u),i=n(7),m=n(4),p=n(20),d=n(5),E=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(d.a)({},e,{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(d.a)({},e,{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(d.a)({},e,{transactions:[].concat(Object(p.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(d.a)({},e,{error:t.payload});default:return e}},f=n(8),v=n.n(f),b={transactions:[],error:null,loading:!0},O=Object(a.createContext)(b),T=function(e){var t=e.children,n=Object(a.useReducer)(E,b),c=Object(m.a)(n,2),l=c[0],o=c[1];function u(){return(u=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/v1/transactions");case 3:t=e.sent,o({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/api/v1/transactions/".concat(t));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 8:o({type:"DELETE_TRANSACTION",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,v.a.post("/api/v1/transactions",t,n);case 4:a=e.sent,o({type:"ADD_TRANSACTION",payload:a.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement(O.Provider,{value:{transactions:l.transactions,error:l.error,loading:l.loading,getTransactions:function(){return u.apply(this,arguments)},deleteTransaction:function(e){return p.apply(this,arguments)},addTransaction:function(e){return d.apply(this,arguments)}}},t)};function h(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var x=function(){var e=Object(a.useContext)(O).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"$",h(e)))},y=function(){var e=Object(a.useContext)(O).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+$",h(t))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expenses"),r.a.createElement("p",{className:"money minus"},"-$",h(n))))},N=function(e){var t=e.transaction,n=Object(a.useContext)(O).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"$",h(Math.abs(t.amount))),r.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t._id)}},"x"))},A=function(){var e=Object(a.useContext)(O),t=e.transactions,n=e.getTransactions;return Object(a.useEffect)((function(){n()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(N,{key:e.id,transaction:e})}))))},R=n(19),j=n.n(R),C=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)("0"),o=Object(m.a)(l,2),u=o[0],s=o[1],i=Object(a.useContext)(O).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:j()(),text:n,amount:+u};i(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:u,onChange:function(e){return s(e.target.value)},id:"amount",placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};n(44);var g=function(){return r.a.createElement(T,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(y,null),r.a.createElement(A,null),r.a.createElement(C,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8ff77563.chunk.js.map