(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[75],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(9),r=a(10),o=a(12),c=a(11),l=a(13),s=a(0),i=a.n(s),p=a(309),u={title:"\u989c\u8272\u6837\u5f0f",data:[{keyword:"Colors.red",pro:"\u5185\u7f6e\u989c\u8272",code:[{path:"flutter/style/Colors/Colors"}],url:"Colors"},{keyword:"Color(0xffffff)",pro:"\u5341\u516d\u8fdb\u5236\u989c\u8272",code:[{path:"flutter/style/Colors/color16"}],url:"color16"},{keyword:"Color.fromRGBO()",pro:"rgba\u989c\u8272",code:[{path:"flutter/style/Colors/fromRGBO"}],url:"rgba"},{keyword:"Color.fromARGB()",pro:"argb\u989c\u8272",code:[{path:"flutter/style/Colors/fromARGB"}],url:"rgba"}]},m=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(i.a.Component)},308:function(e,t,a){"use strict";a(310);var n=a(311),r=(a(101),a(21)),o=a(9),c=a(10),l=a(12),s=a(11),i=a(13),p=a(0),u=a.n(p),m=function(e){var t=e.children,a=e.hasArrow,n=e.show,o=e.order,c=e.onClick;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:c},u.a.createElement("div",{className:"fxm"},o?u.a.createElement("span",null,o,"\u3001"):u.a.createElement(r.a,{className:"f14",type:"share-alt"}),u.a.createElement("span",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},d=window.$http,f=window.$fn,h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component);a.d(t,"a",function(){return b});var y=window.$fn,b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){y.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,o=t.type,c=t.children,l=t.pro,s=t.keyword,i=t.code,p=t.isGray,d=t.link,f=t.url,b=t.order,w=t.noOrder,k=this.state.show;return u.a.createElement("section",null,u.a.createElement(m,{show:k,hasArrow:!0,order:w?null:b,onClick:this.onClick},s&&u.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(p?"gray":"")},s),a&&u.a.createElement("span",{className:"c0"},a),l&&(a||s)?u.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,o&&[u.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},o)],l&&u.a.createElement("span",{className:"g6 f13",key:2},l)),u.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:y.hasArray(d)?"10px 0 5px":"10px 0"},onClick:y.stop},void 0!==k&&y.hasArray(i)&&i.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(h,{type:"text",url:e.path}))}),c,f&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(d)&&u.a.createElement("div",{className:"mt10"},d.map(function(t,a){return u.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(u.a.Component)},309:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(9),r=a(10),o=a(12),c=a(11),l=a(13),s=a(0),i=a.n(s),p=a(71),u=a(308),m=window.$fn,d=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return i.a.createElement(p.a,{className:"page-content"},m.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(i.a.Component)}}]);