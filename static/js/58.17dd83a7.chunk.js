(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[58],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(9),r=a(10),c=a(12),o=a(11),s=a(13),l=a(0),i=a.n(l),p=a(307),u={title:"\u4e00\u6bb5\u65f6\u95f4",data:[{pro:"\u5b9a\u4e49\u4e00\u6bb5\u65f6\u95f4",code:[{path:"dart/time/Duration/Duration"}]},{pro:"\u8fd0\u7b97",code:[{path:"dart/time/Duration/operation"}]},{pro:"\u5c5e\u6027",code:[{path:"dart/time/Duration/property"}]},{pro:"\u65b9\u6cd5",code:[{path:"dart/time/Duration/method"}]}]},m=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(i.a.Component)},303:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(9),r=a(10),c=a(12),o=a(11),s=a(13),l=a(0),i=a.n(l),p=window.$http,u=window.$fn,m=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){p.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){p.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return u.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component)},304:function(e,t,a){"use strict";a(305);var n=a(306),r=(a(101),a(21)),c=a(9),o=a(10),s=a(12),l=a(11),i=a(13),p=a(0),u=a.n(p),m=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,o=e.onClick;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:o},u.a.createElement("div",{className:"fxm"},c?u.a.createElement("span",null,c,"\u3001"):u.a.createElement(r.a,{className:"f14",type:"share-alt"}),u.a.createElement("span",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},d=a(303);a.d(t,"a",function(){return y});var h=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){h.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,o=t.children,s=t.pro,l=t.keyword,i=t.code,p=t.isGray,y=t.link,f=t.url,b=t.order,w=t.noOrder,k=this.state.show;return u.a.createElement("section",null,u.a.createElement(m,{show:k,hasArrow:!0,order:w?null:b,onClick:this.onClick},l&&u.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(p?"gray":"")},l),a&&u.a.createElement("span",{className:"c0"},a),s&&(a||l)?u.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,c&&[u.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&u.a.createElement("span",{className:"g6 f13",key:2},s)),u.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:h.hasArray(y)?"10px 0 5px":"10px 0"},onClick:h.stop},void 0!==k&&h.hasArray(i)&&i.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(d.a,{type:"text",url:e.path}))}),o,f&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),h.hasArray(y)&&u.a.createElement("div",{className:"mt10"},y.map(function(t,a){return u.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(u.a.Component)},307:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(9),r=a(10),c=a(12),o=a(11),s=a(13),l=a(0),i=a.n(l),p=a(71),u=a(304),m=window.$fn,d=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return i.a.createElement(p.a,{className:"page-content"},m.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(i.a.Component)}}]);