(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[81],{223:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return y});var n=a(6),r=a(7),l=a(9),o=a(8),c=a(10),s=a(0),i=a.n(s),p=a(363),m={title:"\u652f\u6491\u6837\u5f0f",keyword:"StrutStyle( )",data:[{type:"String",keyword:"fontFamily",pro:"\u5b57\u4f53",code:[{path:"flutter/style/TextStyle/font/fontFamily"},{title:"\u81ea\u5b9a\u4e49\u5b57\u4f53 ",path:"flutter/style/TextStyle/font/fontFamily-my"}]},{keyword:"fontFamilyFallback",type:"List<String>",pro:"\u5b57\u4f53\u5217\u8868",code:[{path:"flutter/style/TextStyle/font/fontFamilyFallback"}]},{keyword:"fontSize",type:"double",pro:"\u5b57\u4f53\u5927\u5c0f",code:[{path:"flutter/style/TextStyle/font/fontSize"}]},{keyword:"fontWeight",type:"FontWeight",pro:"\u52a0\u7c97",code:[{path:"flutter/style/TextStyle/font/fontWeight"}]},{keyword:"fontStyle",type:"FontStyle",pro:"\u503e\u659c",code:[{path:"flutter/style/TextStyle/font/fontStyle"}]},{keyword:"height",type:"double",pro:"\u884c\u9ad8"},{keyword:"forceStrutHeight",type:"double",pro:"\u5f3a\u5236\u9ad8\u5ea6"},{keyword:"leading",type:"double",pro:"\u81ea\u5b9a\u4e49\u591a\u4e2a\u5b57\u4f53\u5927\u5c0f"},{keyword:"debugLabel",type:"String",pro:"\u6587\u672c\u6837\u5f0f\u7684\u53ef\u8bfb\u63cf\u8ff0",code:[{path:"flutter/public/debugLabel"}]},{keyword:"package",type:"String",pro:"\u5305"}]},y=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},360:function(e,t,a){"use strict";a(361);var n=a(362),r=(a(106),a(22)),l=a(6),o=a(7),c=a(9),s=a(8),i=a(10),p=a(0),m=a.n(p),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,l=e.order,o=e.hasClick,c=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:c},m.a.createElement("div",{className:"fxm"},l?m.a.createElement("span",null,l,"\u3001"):m.a.createElement(r.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),o&&m.a.createElement("span",{className:"c0"},m.a.createElement(r.a,{className:"f24",type:"right-circle"})))},u=window.$http,d=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return w});var f=window.$fn,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(f.hasArray(t)||r)&&a.setState({show:!a.state.show}),f.isString(n)&&a.props.history.push(n)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,o=t.children,c=t.pro,s=t.keyword,i=t.code,p=t.isGray,u=t.link,d=t.url,w=t.order,k=t.noOrder,b=t.isValue,E=t.hasShow,g=this.state.show;return m.a.createElement("section",null,m.a.createElement(y,{show:g,hasArrow:f.hasArray(i)||E,hasClick:f.isString(u),order:k?null:w,onClick:this.onClick},s&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},s),a&&m.a.createElement("span",{className:"c0"},a),s&&!b?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),l&&s&&[m.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],c&&m.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==g&&(f.hasArray(i)||E)?m.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:f.hasArray(u)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(h,{type:"text",url:e.path}))}),o,d&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(u)&&m.a.createElement("div",{className:"mt10"},u.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},363:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(361);var n=a(362),r=(a(106),a(22)),l=a(6),o=a(7),c=a(9),s=a(8),i=a(10),p=a(0),m=a.n(p),y=a(76),u=a(360),d=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return m.a.createElement("div",null,d.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&m.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(r.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,d.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(y.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(l,{key:t,data:e,index:t+1})}):m.a.createElement(l,{data:t}))}}]),t}(m.a.Component)}}]);