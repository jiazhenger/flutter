(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[74],{214:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var r=a(7),n=a(8),s=a(10),c=a(9),l=a(11),o=a(0),i=a.n(o),p=a(354),u={title:"\u8def\u7531\u8df3\u8f6c",data:[{keyword:"pushNamed( )",pro:"\u4e00\u822c\u8df3\u8f6c, \u53ef\u8fd4\u56de, \u5e76\u83b7\u53d6\u8fd4\u56de\u53c2\u6570",code:[{path:"flutter/app/router/router-skip/router-pushNamed"}],url:"RouterPushNamed"},{keyword:"pushReplacementNamed( )",pro:"\u6e05\u9664\u5386\u53f2\u8bb0\u5f55, \u4e0d\u53ef\u8fd4\u56de",code:[{path:"flutter/app/router/router-skip/router-pushReplacementNamed"}],url:"RouterPushReplacementNamed"},{keyword:"push( )",pro:"\u8df3\u8f6c\u5e76\u4f20\u53c2\u6570\u5230\u65b0\u9875\u9762, \u53ef\u8fd4\u56de, \u5e76\u83b7\u53d6\u8fd4\u56de\u53c2\u6570",code:[{path:"flutter/app/router/router-skip/router-push"},{title:"router-param.dart \u58f0\u660e\u53c2\u6570",path:"flutter/app/router/router-skip/router-param"},{title:"router-dart.dart \u4f7f\u7528\u53c2\u6570",path:"flutter/app/router/router-skip/router-param-use"}],url:"RouterPush"},{keyword:"pop( )",pro:"\u8fd4\u56de\u4e0a\u4e00\u4e2a\u9875\u9762",code:[{path:"flutter/app/router/router-skip/router-pop"}],url:"RouterPop"},{noOrder:!0,pro:"\u83b7\u53d6\u9875\u9762\u53c2\u6570",code:[{path:"flutter/app/router/router-skip/get-param"}]}]},m=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:u},this.props))}}]),t}(i.a.Component)},351:function(e,t,a){"use strict";a(352);var r=a(353),n=(a(105),a(22)),s=a(7),c=a(8),l=a(10),o=a(9),i=a(11),p=a(0),u=a.n(p),m=function(e){var t=e.children,a=e.hasArrow,r=e.show,s=e.order,c=e.hasClick,l=e.onClick;e.hasGo;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:l},u.a.createElement("div",{className:"fxm"},s?u.a.createElement("span",null,s,"\u3001"):u.a.createElement(n.a,{className:"f14",type:"share-alt"}),u.a.createElement("div",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),c&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:"right-circle"})))},d=window.$http,h=window.$fn,y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component);a.d(t,"a",function(){return k});var f=window.$fn,k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,s=t.type,c=t.children,l=t.pro,o=t.keyword,i=t.code,p=t.isGray,d=t.link,h=t.url,k=t.order,w=t.noOrder,E=t.isValue,b=t.hasShow,N=this.state.show;return u.a.createElement("section",null,u.a.createElement(m,{show:N,hasArrow:f.hasArray(i)||b,hasClick:f.isString(d),order:w?null:k,onClick:this.onClick},o&&u.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(E?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},o),a&&u.a.createElement("span",{className:"c0"},a),o&&!E?u.a.createElement("i",{className:"mlr10"},":"):u.a.createElement("i",{className:"ml10"}),s&&o&&[u.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},s)],l&&u.a.createElement("span",{className:"g6 f13",key:2},l)),void 0!==N&&(f.hasArray(i)||b)?u.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:f.hasArray(d)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(y,{type:"text",url:e.path}))}),c,h&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(d)&&u.a.createElement("div",{className:"mt10"},d.map(function(t,a){return u.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(u.a.Component)},354:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(352);var r=a(353),n=(a(105),a(22)),s=a(7),c=a(8),l=a(10),o=a(9),i=a(11),p=a(0),u=a.n(p),m=a(75),d=a(351),h=window.$fn,y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,s=function(t){var a=t.data,s=t.index;return u.a.createElement("div",null,h.hasObject(a)&&a.keyword&&u.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},s&&u.a.createElement("b",{className:"f16 c1"},s,"\u3001"),a.grayText&&u.a.createElement("span",{className:"mr5 g9"},a.grayText),u.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[u.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],u.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),u.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?u.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,u.a.createElement(d.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return u.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return u.a.createElement(s,{key:t,data:e,index:t+1})}):u.a.createElement(s,{data:t}))}}]),t}(u.a.Component)}}]);