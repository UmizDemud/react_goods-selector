(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),o=c(4),s=c(5),r=c(7),l=c(6),i=c(1),d=c.n(i),u=(c(12),c(13),function(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];return e.reduce((function(t,e){return"string"===typeof e?"".concat(t," ").concat(e):"".concat(t).concat(Object.keys(e).reduce((function(t,c){return"".concat(t).concat(e[c]&&" ".concat(c))}),""))}),"").trim()}),b=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(r.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={allGoods:j,selectedGood:"Jam"},t.handleClearButtonClick=function(){t.setState({selectedGood:""})},t}return Object(s.a)(c,[{key:"render",value:function(){var t=this,e=this.state,c=e.allGoods,n=e.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[n?"".concat(n," is "):"No goods ","selected",n&&Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleClearButtonClick,"aria-label":"Clear"})]}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:c.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"Good",className:u({"has-background-success-light":n===e}),children:[Object(b.jsx)("td",{children:n===e?Object(b.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return t.setState({selectedGood:""})},children:"-"}):Object(b.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return t.setState({selectedGood:e})},children:"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]},e)}))})})]})}}]),c}(d.a.Component);a.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.58be4d71.chunk.js.map