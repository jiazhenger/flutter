(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[32],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(9),r=a(10),s=a(12),c=a(11),o=a(13),l=a(0),i=a.n(l),p=a(309),d={title:"\u57fa\u7840\u9009\u62e9\u5668",data:[{keyword:"*{ }",pro:"\u9009\u62e9\u4efb\u4f55\u5143\u7d20",code:[{path:"css/selector/base/any"}]},{keyword:"div{ }",pro:"html \u5143\u7d20\u9009\u62e9\u5668",code:[{path:"css/selector/base/tag"}]},{keyword:".class{ }",pro:"lass \u7c7b\u9009\u62e9\u5668",code:[{path:"css/selector/base/class"}]},{keyword:"#id{ }",pro:"id \u7c7b\u9009\u62e9\u5668",code:[{path:"css/selector/base/id"}]},{keyword:"[attr]{ }",pro:"\u5c5e\u6027\u9009\u62e9\u5668",code:[{path:"css/selector/base/attr"}]},{keyword:"div,p,span{ }",pro:"\u5206\u7ec4\u9009\u62e9\u5668",code:[{path:"css/selector/base/group"}]},{keyword:"div.class{ }\u3001.class.class{ }",pro:"\u9650\u5236\u9009\u62e9\u5668",code:[{path:"css/selector/base/limit"}]},{keyword:"div span{ }",pro:"\u5305\u542b\u9009\u62e9\u5668",code:[{path:"css/selector/base/child-all"}]},{keyword:"div>span{ }",pro:"\u5b50\u5bf9\u8c61\u9009\u62e9\u5668",code:[{path:"css/selector/base/child"}]},{keyword:"div+p{ }\u3001div~p{ }",pro:"\u5144\u5f1f\u9009\u62e9\u5668",code:[{path:"css/selector/base/brother"}]}]},u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:d},this.props))}}]),t}(i.a.Component)},308:function(e,t,a){"use strict";a(310);var n=a(311),r=(a(101),a(21)),s=a(9),c=a(10),o=a(12),l=a(11),i=a(13),p=a(0),d=a.n(p),u=function(e){var t=e.children,a=e.hasArrow,n=e.show,s=e.order,c=e.onClick;return d.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:c},d.a.createElement("div",{className:"fxm"},s?d.a.createElement("span",null,s,"\u3001"):d.a.createElement(r.a,{className:"f14",type:"share-alt"}),d.a.createElement("span",{className:"ml10"},t)),a&&d.a.createElement("span",{className:"c0"},d.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},m=window.$http,h=window.$fn,y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),d.a.createElement("section",null,e.length>0?d.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},d.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return d.a.createElement("dt",{key:t},t+1)})),d.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return d.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):d.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(d.a.Component);a.d(t,"a",function(){return b});var f=window.$fn,b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,s=t.type,c=t.children,o=t.pro,l=t.keyword,i=t.code,p=t.isGray,m=t.link,h=t.url,b=t.order,w=t.noOrder,k=this.state.show;return d.a.createElement("section",null,d.a.createElement(u,{show:k,hasArrow:!0,order:w?null:b,onClick:this.onClick},l&&d.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(p?"gray":"")},l),a&&d.a.createElement("span",{className:"c0"},a),o&&(a||l)?d.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,s&&[d.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),d.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},s)],o&&d.a.createElement("span",{className:"g6 f13",key:2},o)),d.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:f.hasArray(m)?"10px 0 5px":"10px 0"},onClick:f.stop},void 0!==k&&f.hasArray(i)&&i.map(function(e,t){return d.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&d.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),d.a.createElement(y,{type:"text",url:e.path}))}),c,h&&d.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},d.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(m)&&d.a.createElement("div",{className:"mt10"},m.map(function(t,a){return d.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},d.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(d.a.Component)},309:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),r=a(10),s=a(12),c=a(11),o=a(13),l=a(0),i=a.n(l),p=a(71),d=a(308),u=window.$fn,m=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return i.a.createElement(p.a,{className:"page-content"},u.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(i.a.Component)}}]);