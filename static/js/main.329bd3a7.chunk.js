(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),s=(n(12),n(1)),i=n(2),l=n(4),h=n(3),u=function(e){e.robots;throw new Error("NOOOO!!!!")},d=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooooops. That is not good."):this.props.children}}]),n}(r.Component),b=(n(13),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"Robofriends"),a.a.createElement(d,{searchChange:this.onSearchChange}),a.a.createElement(f,null,a.a.createElement(m,null,a.a.createElement(u,{robots:t}))))}}]),n}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.329bd3a7.chunk.js.map