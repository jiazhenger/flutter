(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[78],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(9),r=a(10),s=a(12),o=a(11),l=a(13),c=a(0),i=a.n(c),d=a(316),p={title:"\u56db\u8fb9\u504f\u79fb\u91cf",keyword:"EdgeInsets.x",data:[{keyword:"EdgeInsets.zero",type:"EdgeInsets",pro:"\u65e0",code:[{path:"flutter/style/EdgeInsets/zero"}]},{keyword:"EdgeInsets.all(double value)",type:"EdgeInsets",pro:"\u56db\u8fb9",code:[{path:"flutter/style/EdgeInsets/all"}],url:"EdgeInsetsAll"},{keyword:"EdgeInsets.only(double left:0.0, double top:0.0, double right:0.0, double bottom:0.0)",type:"EdgeInsets",pro:"\u5355\u8fb9",code:[{path:"flutter/style/EdgeInsets/only"}],url:"EdgeInsetsOnly"},{keyword:"EdgeInsets.symmetric(double vertical:0.0, double horizontal:0.0)",type:"EdgeInsets",pro:"\u6c34\u5e73\u5782\u76f4",code:[{path:"flutter/style/EdgeInsets/symmetric"}],url:"EdgeInsetsSymmetric"},{keyword:"EdgeInsets.fromLTRB(double left, double top, double right, double bottom)",type:"EdgeInsets",pro:"\u56db\u8fb9",code:[{path:"flutter/style/EdgeInsets/fromLTRB"}],url:"EdgeInsetsFromLTRB"},{keyword:"EdgeInsets.fromWindowPadding(ui.WindowPadding padding, double devicePixelRatio)",type:"EdgeInsets",pro:"\u6839\u636e\u673a\u578b\u5c4f\u5e55\u5c3a\u5bf8\u5b9a\u4e49",code:[{path:"flutter/style/EdgeInsets/fromWindowPadding"}],url:"EdgeInsetsFromWindowPadding"},{keyword:"EdgeInsets.lerp(EdgeInsets a, EdgeInsets b, double t)",type:"EdgeInsets",code:[{path:"flutter/style/EdgeInsets/lerp"}],url:"EdgeInsetsLerp"}]},u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},315:function(e,t,a){"use strict";a(317);var n=a(318),r=(a(101),a(21)),s=a(9),o=a(10),l=a(12),c=a(11),i=a(13),d=a(0),p=a.n(d),u=function(e){var t=e.children,a=e.hasArrow,n=e.show,s=e.order,o=e.onClick;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:o},p.a.createElement("div",{className:"fxm"},s?p.a.createElement("span",null,s,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("span",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},m=window.$http,y=window.$fn,h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return E});var f=window.$fn,E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,s=t.type,o=t.children,l=t.pro,c=t.keyword,i=t.code,d=t.isGray,m=t.link,y=t.url,E=t.order,b=t.noOrder,g=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:g,hasArrow:!0,order:b?null:E,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(d?"gray":"")},c),a&&p.a.createElement("span",{className:"c0"},a),l&&(a||c)?p.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,s&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},s)],l&&p.a.createElement("span",{className:"g6 f13",key:2},l)),p.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:f.hasArray(m)?"10px 0 5px":"10px 0"},onClick:f.stop},void 0!==g&&f.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(h,{type:"text",url:e.path}))}),o,y&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(p.a.Component)},316:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),r=a(10),s=a(12),o=a(11),l=a(13),c=a(0),i=a.n(c),d=a(71),p=a(315),u=window.$fn,m=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return i.a.createElement(d.a,{className:"page-content"},this.props.data.keyword&&i.a.createElement("h2",{className:"b f16",style:{borderBottom:"2px solid red",padding:"10px 0"}},this.props.data.keyword),u.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(i.a.Component)}}]);