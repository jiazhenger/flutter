(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[262],{424:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});var n=a(4),r=a(5),l=a(7),c=a(6),s=a(8),o=a(0),i=a.n(o),m=a(533),u={title:"\u8868\u683c <table>",keyword:"Table( )",type:"Table",url:"TablePage",data:[{keyword:"border",type:"TableBorder",pro:"\u8fb9\u6846\u6837\u5f0f",link:"/flutter/style/border/TableBorder"},{keyword:"columnWidths",type:"Map<int, TableColumnWidth>",pro:"\u5217\u5bbd\u5ea6\uff0c\u76f8\u5f53\u4e8e <colgroup>",code:[{path:"flutter/widget/table/Table/columnWidths"}],link:[{title:"FixedColumnWidth",url:"/flutter/table/FixedColumnWidth"}]},{keyword:"defaultColumnWidth",type:"TableColumnWidth",pro:"\u9ed8\u8ba4\u7684\u6bcf\u5217\u5bbd\u5ea6\u503c,\u4e00\u822c\u4e0d\u53d8\u5316",code:[{path:"flutter/widget/table/Table/defaultColumnWidth"}],link:[{title:"FixedColumnWidth",url:"/flutter/table/FixedColumnWidth"}]},{keyword:"defaultVerticalAlignment",type:"TableCellVerticalAlignment",pro:"\u5782\u76f4\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/widget/table/Table/TableCellVerticalAlignment"}]},{keyword:"textDirection",type:"TextDirection",pro:"\u6392\u5217\u987a\u5e8f",code:[{path:"flutter/widget/text/TextDirection"}]},{keyword:"textBaseline",type:"TextBaseline",pro:"\u6587\u672c\u7ed8\u5236\u57fa\u7ebf",code:[{path:"flutter/public/TextBaseline"}]},{keyword:"children",type:"List<TableRow> ",pro:"\u5217\u8868\u63a7\u4ef6",code:[{path:"flutter/widget/table/Table/children"}],link:[{title:"TableRow",url:"/flutter/table/TableRow"},{title:"TableCell",url:"/flutter/table/TableCell"}]}]},p=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:u},this.props))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),l=a(5),c=a(7),s=a(6),o=a(8),i=a(0),m=a.n(i),u=a(547),p=a(548),d=a(549),h=a(550),y=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,l=e.hasClick,c=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:c},m.a.createElement("div",{className:"fxm"},r?m.a.createElement("span",null,r,"\u3001"):m.a.createElement(u.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},n?m.a.createElement(p.a,{className:"f24"}):m.a.createElement(d.a,{className:"f24"})),l&&m.a.createElement("span",{className:"c0"},m.a.createElement(h.a,{className:"f24"})))},f=window.$http,b=window.$fn,w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return b.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),k=a(551);a.d(t,"a",function(){return x});var E=window.$fn,x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(E.hasArray(t)||r)&&a.setState({show:!a.state.show}),E.isString(n)&&a.props.history.push(n)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,l=t.children,c=t.pro,s=t.keyword,o=t.code,i=t.isGray,u=t.link,p=t.url,d=t.order,h=t.noOrder,f=t.isValue,b=t.hasShow,x=this.state.show;return m.a.createElement("section",null,m.a.createElement(y,{show:x,hasArrow:E.hasArray(o)||b,hasClick:E.isString(u),order:h?null:d,onClick:this.onClick},s&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},s),a&&m.a.createElement("span",{className:"c0"},a),s&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),r&&s&&[m.a.createElement(k.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],c&&m.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==x&&(E.hasArray(o)||b)?m.a.createElement("div",{className:"rel bbor1 ".concat(x?"":"dn"),style:{padding:E.hasArray(u)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(w,{type:"text",url:e.path}))}),l,p&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(u)&&m.a.createElement("div",{className:"mt10"},u.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},533:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(531);var n=a(532),r=a(4),l=a(5),c=a(7),s=a(6),o=a(8),i=a(0),m=a.n(i),u=a(88),p=a(530),d=a(551),h=window.$fn,y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,r=function(t){var a=t.data,r=t.index;return m.a.createElement("div",null,h.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},r&&m.a.createElement("b",{className:"f16 c1"},r,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return h.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,h.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(r,{key:t,data:e,index:t+1})}):m.a.createElement(r,{data:t}))}}]),t}(m.a.Component)}}]);