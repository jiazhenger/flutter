(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[91],{243:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var r=a(5),n=a(6),l=a(8),o=a(7),s=a(9),c=a(0),i=a.n(c),p=a(487),m={title:"\u9650\u5236\u9ad8\u5bbd",isGroup:!0,data:[{title:"\u9650\u5236\u9ad8\u5bbd",keyword:"BoxConstraints( )",data:[{keyword:"minWidth",type:"double",pro:"\u6700\u5c0f\u5bbd\u5ea6"},{keyword:"maxWidth",type:"double",pro:"\u6700\u5927\u5bbd\u5ea6"},{keyword:"minHeight",type:"double",pro:"\u6700\u5927\u9ad8\u5ea6"},{keyword:"maxHeight",type:"double",pro:"\u6700\u5927\u9ad8\u5ea6"},{noOrder:!0,pro:"\u793a\u4f8b",code:[{path:"flutter/style/BoxConstraints/BoxConstraints"}]}]},{title:"\u9650\u5236\u9ad8\u5bbd",keyword:"BoxConstraints.tight( )",data:[{keyword:"size",type:"Size",pro:"\u5c3a\u5bf8",isValue:!0,link:"/flutter/style/Size"}]},{title:"\u9650\u5236\u9ad8\u5bbd",keyword:"BoxConstraints.expand( )",data:[{keyword:"width",type:"double",pro:"\u5bbd\u5ea6"},{keyword:"height",type:"double",pro:"\u9ad8\u5ea6"}]},{title:"\u9650\u5236\u9ad8\u5bbd",keyword:"BoxConstraints.tightForFinite( )",data:[{keyword:"width",type:"double",pro:"\u5bbd\u5ea6\uff0c\u9ed8\u8ba4 = double.infinity"},{keyword:"height",type:"double",pro:"\u9ad8\u5ea6\uff0c\u9ed8\u8ba4 = double.infinity"}]},{title:"\u9650\u5236\u9ad8\u5bbd",keyword:"BoxConstraints.tightFor( )",data:[{keyword:"width",type:"double",pro:"\u5bbd\u5ea6"},{keyword:"height",type:"double",pro:"\u9ad8\u5ea6"}]}]},d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},484:function(e,t,a){"use strict";a(485);var r=a(486),n=(a(116),a(22)),l=a(5),o=a(6),s=a(8),c=a(7),i=a(9),p=a(0),m=a.n(p),d=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,o=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},l?m.a.createElement("span",null,l,"\u3001"):m.a.createElement(n.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),o&&m.a.createElement("span",{className:"c0"},m.a.createElement(n.a,{className:"f24",type:"right-circle"})))},u=window.$http,y=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return y.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return w});var f=window.$fn,w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,o=t.children,s=t.pro,c=t.keyword,i=t.code,p=t.isGray,u=t.link,y=t.url,w=t.order,k=t.noOrder,b=t.isValue,E=t.hasShow,g=this.state.show;return m.a.createElement("section",null,m.a.createElement(d,{show:g,hasArrow:f.hasArray(i)||E,hasClick:f.isString(u),order:k?null:w,onClick:this.onClick},c&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},c),a&&m.a.createElement("span",{className:"c0"},a),c&&!b?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),l&&c&&[m.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==g&&(f.hasArray(i)||E)?m.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:f.hasArray(u)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(h,{type:"text",url:e.path}))}),o,y&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(u)&&m.a.createElement("div",{className:"mt10"},u.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},487:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(485);var r=a(486),n=(a(116),a(22)),l=a(5),o=a(6),s=a(8),c=a(7),i=a(9),p=a(0),m=a.n(p),d=a(86),u=a(484),y=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return m.a.createElement("div",null,y.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&m.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(d.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(l,{key:t,data:e,index:t+1})}):m.a.createElement(l,{data:t}))}}]),t}(m.a.Component)}}]);