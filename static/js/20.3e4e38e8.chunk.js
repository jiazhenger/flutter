(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[20],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(4),r=a(5),o=a(7),s=a(6),c=a(8),l=a(0),i=a.n(l),m=a(88),p=a(530),u=a(534),d=window.$fn,h=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){d.setTitle("\u5b57\u4f53\u6837\u5f0f"),d.hidePhone()}},{key:"render",value:function(){return i.a.createElement(m.a,{className:"page-content"},i.a.createElement(p.a,{order:1,keyword:"font-family",pro:"\u5b57\u4f53\u540d\u79f0",code:[{path:"css/style/font/font-family"}]},i.a.createElement(u.a,{styleName:"fontFamily",data:{radio:["SimSum","SimHei","Microsoft YaHei","Arial","Tahoma,Verdana,Arial,sans-serif"]}})),i.a.createElement(p.a,{order:2,keyword:"font-size",pro:"\u5b57\u4f53\u5927\u5c0f",code:[{path:"css/style/font/font-size"}]}),i.a.createElement(p.a,{order:3,keyword:"font-style",pro:"\u503e\u659c",code:[{path:"css/style/font/font-style"}]}),i.a.createElement(p.a,{order:4,keyword:"font-weight",pro:"\u52a0\u7c97",code:[{path:"css/style/font/font-weight"}]},i.a.createElement(u.a,{styleName:"fontWeight",data:{radio:["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"]}})),i.a.createElement(p.a,{order:5,keyword:"font-variant",pro:"\u5c06\u5c0f\u5199\u5b57\u6bcd\u8f6c\u4e3a\u5927\u5199",code:[{path:"css/style/font/font-variant"}]},i.a.createElement(u.a,{styleName:"fontVariant",data:{radio:["normal","small-caps"]}})),i.a.createElement(p.a,{order:6,keyword:"line-height",pro:"\u884c\u9ad8",code:[{path:"css/style/font/line-height"}]},i.a.createElement(u.a,{styleName:"lineHeight",data:{radio:["normal","30px","50px","1em","2em","100%","200%"]}})),i.a.createElement(p.a,{keyword:"font",pro:"[font-weight] [font-style] [font-variant] [font-size]/[line-height] [font-family]",code:[{path:"css/style/font/font"}]}))}}]),t}(i.a.Component)},530:function(e,t,a){"use strict";a(531);var n=a(532),r=a(4),o=a(5),s=a(7),c=a(6),l=a(8),i=a(0),m=a.n(i),p=a(547),u=a(548),d=a(549),h=a(550),f=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,o=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},r?m.a.createElement("span",null,r,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},n?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(d.a,{className:"f24"})),o&&m.a.createElement("span",{className:"c0"},m.a.createElement(h.a,{className:"f24"})))},y=window.$http,E=window.$fn,w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={data:[]},a.getText=function(e){y.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){y.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return E.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),b=a(551);a.d(t,"a",function(){return k});var v=window.$fn,k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(v.hasArray(t)||r)&&a.setState({show:!a.state.show}),v.isString(n)&&a.props.history.push(n)},a.onShow=function(){v.showPhone(a.props.url)},a}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,o=t.children,s=t.pro,c=t.keyword,l=t.code,i=t.isGray,p=t.link,u=t.url,d=t.order,h=t.noOrder,y=t.isValue,E=t.hasShow,k=this.state.show;return m.a.createElement("section",null,m.a.createElement(f,{show:k,hasArrow:v.hasArray(l)||E,hasClick:v.isString(p),order:h?null:d,onClick:this.onClick},c&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(y?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},c),a&&m.a.createElement("span",{className:"c0"},a),c&&!y?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),r&&c&&[m.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==k&&(v.hasArray(l)||E)?m.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:v.hasArray(p)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(l)&&l.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(w,{type:"text",url:e.path}))}),o,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},534:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(535);var n=a(536),r=a(117),o=a(4),s=a(5),c=a(7),l=a(6),i=a(8),m=a(0),p=a.n(m),u=window.$fn,d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,o=a.data,s=a.children,c=a.styleName;return p.a.createElement("section",{className:"bor1 r5px p10 mtb10"},p.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,c,t),Object(r.a)(e,"color","#888"),e)},s||"\u6d4b\u8bd5\u6837\u4f8b test case"),p.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(o.radio)&&o.radio.map(function(e,t){return p.a.createElement(n.a,{key:t,value:e},p.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(p.a.Component)}}]);