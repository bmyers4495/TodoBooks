(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(n,t,e){n.exports=e(28)},28:function(n,t,e){"use strict";e.r(t);var o=e(0),a=e.n(o),r=e(13),i=e.n(r),c=e(3),l=e(4),u=e(6),s=e(5),d=e(8),b=e(7),p=e(1),m=e(2);function h(){var n=Object(p.a)(["\n    html{\n        height: 100%;\n        width: 100%;\n    }\n    body{\n        height: 100%;\n        width: 100%;\n        margin:0;\n    }\n    #root{\n        overflow-x:show;\n        height:100%;\n        width:100%;\n    }\n"]);return h=function(){return n},n}function f(){var n=Object(p.a)(["\n    list-style: none;\n    display:block;\n    border-bottom:1px solid grey;\n"]);return f=function(){return n},n}function g(){var n=Object(p.a)(["\n    display:block;\n    background-color: white;\n    width:90%;\n    margin:auto;\n    top:20px;\n    height:90%;\n    overflow-x:scroll;\n    position:absolute;\n    padding-left:0;\n    z-index:1;\n    \n    &::-webkit-scrollbar {\n        display: block;\n        width: .3em;\n        overflow: auto;\n        height: 0;\n    }\n \n    &::-webkit-scrollbar-track {\n        width: 0px;\n        height: 0px;\n        background-color: #aaa; /* or add it to the track */\n    }\n \n    &::-webkit-scrollbar-thumb {\n        background: #000; \n    }\n    h2{\n        margin-top:10px;\n        margin-bottom:10px;\n    }\n    i{\n\n        width:100%;\n    }\n"]);return g=function(){return n},n}function v(){var n=Object(p.a)(["\n    background: linear-gradient(#aaa, #8f8fa5);\n    height:100%;\n    left:0;\n    bottom:0;\n    width:150px;\n    position:relative;\n    margin-right:0;\n    display:inline-block;\n"]);return v=function(){return n},n}var k=m.b.div(v()),y=m.b.ul(g()),x=m.b.li(f()),j=Object(m.a)(h());function O(){var n=Object(p.a)(["\n    font-size: 15px;\n    display:inline-block;\n    margin-left:5%;\n    @media (max-width:720px) {\n        font-size:10px;\n    }\n"]);return O=function(){return n},n}function w(){var n=Object(p.a)(["\n    width: 100%;\n    display:block;\n    z-index:2;\n\n"]);return w=function(){return n},n}function E(){var n=Object(p.a)(["\n\n    display:inline-block;\n    margin-left: 10px;\n    border-radius:50%;\n    border: none;\n    background-color: blue;\n\n\n"]);return E=function(){return n},n}function N(){var n=Object(p.a)(["\n    display:block;\n"]);return N=function(){return n},n}function B(){var n=Object(p.a)(["\n    display:block;\n    width: 90%;\n    margin: auto;\n    z-index:2;\n"]);return B=function(){return n},n}function D(){var n=Object(p.a)(["\n    resize: none;\n    display:block;\n    width: 90%;\n    margin: auto;\n"]);return D=function(){return n},n}function F(){var n=Object(p.a)(["\n    display:block;\n    width: 90%;\n    margin: auto;\n    \n"]);return F=function(){return n},n}function S(){var n=Object(p.a)(["\n    display:block;\n    z-index:2;\n    background-color:grey;\n    position:relative;\n"]);return S=function(){return n},n}var z=m.b.div(S()),C=m.b.input.attrs((function(n){return{placeholder:"Type of todolist"}}))(F()),M=m.b.textarea.attrs((function(n){return{placeholder:"Description of this todolist"}}))(D()),_=m.b.input.attrs((function(n){return{placeholder:"Name of todolist"}}))(B()),A=m.b.div(N()),I=m.b.button(E()),J=m.b.form.attrs((function(n){return{id:"AddForm"}}))(w()),T=m.b.label(O());function U(){var n=Object(p.a)(["\n    border-bottom:1px solid black;\n    &:hover{\n        cursor:pointer;\n        background-color:blue;\n    }\n"]);return U=function(){return n},n}function W(){var n=Object(p.a)(["\n    list-style:none;\n    margin:0;\n    padding:0;\n\n\n"]);return W=function(){return n},n}function L(){var n=Object(p.a)(["\n    position:absolute;\n    background:grey;\n    z-index: 5;\n    visibility: 0;\n    height:auto;\n    width:auto;\n    text-align:center;\n    display:none;\n"]);return L=function(){return n},n}var X=m.b.div.attrs({id:"menuDiv"})(L()),Y=m.b.ul(W()),$=m.b.li(U()),q=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this,n))).state={contextMenu:!1,x:0,y:0},e}return Object(b.a)(t,n),Object(l.a)(t,[{key:"componentDidMount",value:function(){var n=this;document.addEventListener("contextmenu",(function(t){var e=t.clientX,o=t.clientY,a=t.target,r=t.target.parentNode,i=document.getElementsByClassName("content");a!==i&&r!==i&&r.parent!==i||(t.preventDefault(),n.setState((function(n){return{contextMenu:!n.contextMenu,x:e,y:o}})))}))}},{key:"componentDidUpdate",value:function(){var n=document.getElementById("menuDiv");console.log(this.state.contextMenu),this.state.contextMenu?(n.style.left=this.state.x+"px",n.style.top=this.state.y+"px",n.style.display="inline-block"):n.style.display="none"}},{key:"render",value:function(){return a.a.createElement(X,null,a.a.createElement(Y,null,a.a.createElement($,null,"Add"),a.a.createElement($,null,"Delete"),a.a.createElement($,null,"Expand")))}}]),t}(o.Component),G=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this,n))).state={open:!1,contextMenu:!1},e.createBook=e.createBook.bind(Object(d.a)(e)),e}return Object(b.a)(t,n),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"createBook",value:function(n){return a.a.createElement(x,{key:n.key,className:"content"},a.a.createElement("h2",null,n.text[0]),a.a.createElement("i",null,"type:",n.text[1]))}},{key:"render",value:function(){var n=this,t=this.props.entries,e=t.map(this.createBook);return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null,a.a.createElement("div",{className:"todoBook",onClick:function(){return n.props.toggleNotes(t.key)}},e)))}}]),t}(o.Component),H=e(9),K=e.n(H),P=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this,n))).expandForm=function(){e.setState((function(n){return{open:!n.open}}))},e.addStack=function(n){if(""!==e._nameBox.value)var t={text:[e._nameBox.value,e._typeBox.value,e._descBox.value],key:Date.now()};e.setState((function(n){return{items:n.items.concat(t)}})),n.preventDefault()},e.state={items:[],open:!1},e.expandForm=e.expandForm.bind(Object(d.a)(e)),e.addStack=e.addStack.bind(Object(d.a)(e)),e}return Object(b.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){var n=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,null,a.a.createElement(T,null,"Add Todo Books"),a.a.createElement(I,{onClick:this.expandForm},"+"),a.a.createElement(K.a,{open:this.state.open},a.a.createElement(z,null,a.a.createElement(J,{onSubmit:this.addStack},a.a.createElement(_,{ref:function(t){return n._nameBox=t}}),a.a.createElement(C,{ref:function(t){return n._typeBox=t}}),a.a.createElement(M,{ref:function(t){return n._descBox=t}}),a.a.createElement(I,null,"Add"))))),a.a.createElement(G,{entries:this.state.items,toggleNotes:this.props.toggleNotes}))}}]),t}(o.Component);function Q(){var n=Object(p.a)(["\n    height:100%;\n    position:absolute;\n    display:inline-block;\n    margin:10px;\n    top:50px;\n"]);return Q=function(){return n},n}var R=m.b.div(Q()),V=function(n){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(b.a)(t,n),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){console.log(this.props.showNotes)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,null,a.a.createElement(K.a,{open:this.props.showNotes})))}}]),t}(o.Component),Z=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this,n))).toggleNotes=function(n){e.setState((function(n){return{showNotes:!n.showNotes}}))},e.state={showBooks:!1},e.toggleNotes=e.toggleNotes.bind(Object(d.a)(e)),e}return Object(b.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null),a.a.createElement(q,null),a.a.createElement(k,null,a.a.createElement(P,{toggleNotes:this.toggleNotes})),a.a.createElement(V,{showNotes:this.state.showNotes}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.498d2efc.chunk.js.map