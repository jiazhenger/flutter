(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[66],{204:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var r=a(9),n=a(10),o=a(12),c=a(11),s=a(13),l=a(0),i=a.n(l),u=a(305),p={title:"\u8def\u7531\u8df3\u8f6c",data:[{keyword:"pushNamed( )",pro:"\u4e00\u822c\u8df3\u8f6c, \u53ef\u8fd4\u56de, \u5e76\u83b7\u53d6\u8fd4\u56de\u53c2\u6570",code:[{path:"flutter/app/router/router-skip/router-pushNamed"}],url:"router-pushNamed"},{keyword:"pushReplacementNamed( )",pro:"\u6e05\u9664\u5386\u53f2\u8bb0\u5f55, \u4e0d\u53ef\u8fd4\u56de",code:[{path:"flutter/app/router/router-skip/router-push"},{title:"\u58f0\u660e\u53c2\u6570",path:"flutter/app/router/router-skip/router-param"},{title:"router-dart.dart \u4f7f\u7528\u53c2\u6570",path:"flutter/app/router/router-skip/router-param-use"}],url:"router-push"},{keyword:"push(MaterialPageRoute(builder: (BuildContext context){ })",pro:"\u8df3\u8f6c\u5e76\u4f20\u53c2\u6570\u5230\u65b0\u9875\u9762, \u53ef\u8fd4\u56de, \u5e76\u83b7\u53d6\u8fd4\u56de\u53c2\u6570",code:[{path:"flutter/app/router/router-skip/router-pushNamed"}],url:"router-pushNamed"},{keyword:"pop( )",pro:"\u8fd4\u56de\u4e0a\u4e00\u4e2a\u9875\u9762",code:[{path:"flutter/app/router/router-skip/router-pop"}],url:"router-pop"}]},m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},303:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var r=a(9),n=a(10),o=a(12),c=a(11),s=a(13),l=a(0),i=a.n(l),u=window.$http,p=window.$fn,m=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component)},304:function(e,t,a){"use strict";a(306);var r=a(307),n=(a(101),a(21)),o=a(9),c=a(10),s=a(12),l=a(11),i=a(13),u=a(0),p=a.n(u),m=function(e){var t=e.children,a=e.hasArrow,r=e.show,o=e.order,c=e.onClick;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:c},p.a.createElement("div",{className:"fxm"},o?p.a.createElement("span",null,o,"\u3001"):p.a.createElement(n.a,{className:"f14",type:"share-alt"}),p.a.createElement("span",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})))},d=a(303);a.d(t,"a",function(){return f});var h=window.$fn,f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){h.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,o=t.type,c=t.children,s=t.pro,l=t.keyword,i=t.code,u=t.isGray,f=t.link,y=t.url,k=t.order,b=t.noOrder,w=this.state.show;return p.a.createElement("section",null,p.a.createElement(m,{show:w,hasArrow:!0,order:b?null:k,onClick:this.onClick},l&&p.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(u?"gray":"")},l),a&&p.a.createElement("span",{className:"c0"},a),s&&(a||l)?p.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,o&&[p.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},o)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),p.a.createElement("div",{className:"rel bbor1 ".concat(w?"":"dn"),style:{padding:h.hasArray(f)?"10px 0 5px":"10px 0"},onClick:h.stop},void 0!==w&&h.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(d.a,{type:"text",url:e.path}))}),c,y&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),h.hasArray(f)&&p.a.createElement("div",{className:"mt10"},f.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(p.a.Component)},305:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(9),n=a(10),o=a(12),c=a(11),s=a(13),l=a(0),i=a.n(l),u=a(71),p=a(304),m=window.$fn,d=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return i.a.createElement(u.a,{className:"page-content"},m.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(i.a.Component)}}]);