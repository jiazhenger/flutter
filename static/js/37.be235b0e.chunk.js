(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[37],{180:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(5),n=a(6),c=a(8),s=a(7),l=a(9),o=a(0),i=a.n(o),m=a(389),p={title:"\u7c7b\u57fa\u7840",data:[{pro:"\u7c7b\u58f0\u660e",code:[{path:"dart/grammar/class/base/format"}]},{pro:"\u516c\u5171\u5c5e\u6027\uff1a\u5185\u5916\u90e8\u8bbf\u95ee",code:[{path:"dart/grammar/class/base/public-var"}]},{pro:"\u516c\u5171\u65b9\u6cd5\uff1a\u5185\u5916\u90e8\u8bbf\u95ee",code:[{path:"dart/grammar/class/base/public-fn"}]},{pro:"\u79c1\u6709\u5c5e\u6027\uff1a\u4ec5\u5185\u90e8\u8bbf\u95ee",code:[{path:"dart/grammar/class/base/private-var"}]},{pro:"\u79c1\u6709\u65b9\u6cd5\uff1a\u4ec5\u5185\u90e8\u8bbf\u95ee",code:[{path:"dart/grammar/class/base/private-fn"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},386:function(e,t,a){"use strict";a(387);var r=a(388),n=(a(110),a(22)),c=a(5),s=a(6),l=a(8),o=a(7),i=a(9),m=a(0),p=a.n(m),u=function(e){var t=e.children,a=e.hasArrow,r=e.show,c=e.order,s=e.hasClick,l=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:l},p.a.createElement("div",{className:"fxm"},c?p.a.createElement("span",null,c,"\u3001"):p.a.createElement(n.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),s&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:"right-circle"})))},d=window.$http,h=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return b});var f=window.$fn,b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,s=t.children,l=t.pro,o=t.keyword,i=t.code,m=t.isGray,d=t.link,h=t.url,b=t.order,w=t.noOrder,E=t.isValue,k=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:v,hasArrow:f.hasArray(i)||k,hasClick:f.isString(d),order:w?null:b,onClick:this.onClick},o&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(E?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&p.a.createElement("span",{className:"c0"},a),o&&!E?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),c&&o&&[p.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],l&&p.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==v&&(f.hasArray(i)||k)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(d)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(y,{type:"text",url:e.path}))}),s,h&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(d)&&p.a.createElement("div",{className:"mt10"},d.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},389:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(387);var r=a(388),n=(a(110),a(22)),c=a(5),s=a(6),l=a(8),o=a(7),i=a(9),m=a(0),p=a.n(m),u=a(80),d=a(386),h=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,c=function(t){var a=t.data,c=t.index;return p.a.createElement("div",null,h.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},c&&p.a.createElement("b",{className:"f16 c1"},c,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(c,{key:t,data:e,index:t+1})}):p.a.createElement(c,{data:t}))}}]),t}(p.a.Component)}}]);