(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),s=n(3),l=n(4),i=n(6),u=n(5),d=(n(12),function(t){var e=t.goods;return a.a.createElement("ul",{className:"good__list"},e.map((function(t){return a.a.createElement("li",{style:{color:"".concat(t.color)},key:t.id},t.name)})))}),f=function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))},m={color:"red",count:"sort 5",showAll:"all"},h=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[],isLoaded:!1},t.filterGoods=function(e){switch(t.setState({isLoaded:!0}),e){case m.color:f().then((function(e){t.setState({goods:e.filter((function(t){return t.color===m.color}))})}));break;case m.count:f().then((function(e){t.setState({goods:e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,6)})}));break;default:f().then((function(e){t.setState({goods:e})}))}},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("ul",{className:"filters"},Object.values(m).map((function(e){return a.a.createElement("li",{className:"filters__button"},a.a.createElement("a",{className:"filters__link",href:"#/".concat(e),onClick:function(){return t.filterGoods(e)}},e))}))),this.state.isLoaded?a.a.createElement(d,{goods:this.state.goods}):"")}}]),n}(a.a.Component);c.a.render(a.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.f411b5a6.chunk.js.map