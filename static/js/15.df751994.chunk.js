(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[15],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(7),r=a(8),l=a(10),o=a(9),s=a(11),c=a(0),i=a.n(c),u=a(75),p=a(351),d=a(355),m=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){m.setTitle("\u8fb9\u6846"),m.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{className:"page-content"},i.a.createElement(p.a,{order:1,keyword:"outline-width",pro:"\u8fb9\u6846\u5bbd\u5ea6",code:[{path:"css/style/border/outline/outline-width"}]},i.a.createElement(d.a,{getValue:function(t){return e.setState({outlineWidth:t})},data:{radio:["medium","thin","thick",".5px","1px","2px","1px 2px 3px 4px"]}},i.a.createElement("div",{style:{outlineStyle:"solid",height:"50px",outlineWidth:this.state.outlineWidth}}))),i.a.createElement(p.a,{order:2,keyword:"outline-style",pro:"\u8fb9\u6846\u6837\u5f0f",code:[{path:"css/style/border/outline/outline-style"}]},i.a.createElement(d.a,{getValue:function(t){return e.setState({outlineStyle:t})},data:{radio:["none","solid","dotted","dashed","double","groove","ridge","inset","outset","groove ridge inset outset"]}},i.a.createElement("div",{style:{height:"50px",outlineWidth:"1px",outlineStyle:this.state.outlineStyle}}))),i.a.createElement(p.a,{order:3,keyword:"outline-color",pro:"\u8fb9\u6846\u989c\u8272",code:[{path:"css/style/border/outline/outline-color"}]},i.a.createElement(d.a,{getValue:function(t){return e.setState({outlineColor:t})},data:{radio:["transparent","yellowgreen","green","#ff0000","rgba(0,0,0,.1)","red blue green yellow"]}},i.a.createElement("div",{style:{height:"50px",outlineWidth:"2px",outlineStyle:"solid",outlineColor:this.state.outlineColor}}))),i.a.createElement(p.a,{keyword:"outline",pro:"[outline-width] [outline-style] [outline-color] ",code:[{path:"css/style/border/outline/outline"}]}),i.a.createElement(p.a,{order:4,keyword:"outline-offset",pro:"\u5b9a\u4e49\u8f6e\u5ed3\u8ddd\u79bb\u5bb9\u5668\u7684\u503c",code:[{path:"css/style/border/outline/outline-offset"}]},i.a.createElement(d.a,{getValue:function(t){return e.setState({outlineOffset:t})},data:{radio:["2px","3px","5px","-5px","-10px"]}},i.a.createElement("div",{style:{height:"50px",outlineColor:"red",outlineWidth:"1px",outlineStyle:"solid",outlineOffset:this.state.outlineOffset}},"\u5b9a\u4e49\u8f6e\u5ed3\u8ddd\u79bb\u5bb9\u5668\u7684\u503c"))))}}]),t}(i.a.Component)},351:function(e,t,a){"use strict";a(352);var n=a(353),r=(a(105),a(22)),l=a(7),o=a(8),s=a(10),c=a(9),i=a(11),u=a(0),p=a.n(u),d=function(e){var t=e.children,a=e.hasArrow,n=e.show,l=e.order,o=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},l?p.a.createElement("span",null,l,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),o&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:"right-circle"})))},m=window.$http,h=window.$fn,y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return E});var f=window.$fn,E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(f.hasArray(t)||r)&&a.setState({show:!a.state.show}),f.isString(n)&&a.props.history.push(n)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,o=t.children,s=t.pro,c=t.keyword,i=t.code,u=t.isGray,m=t.link,h=t.url,E=t.order,b=t.noOrder,v=t.isValue,w=t.hasShow,g=this.state.show;return p.a.createElement("section",null,p.a.createElement(d,{show:g,hasArrow:f.hasArray(i)||w,hasClick:f.isString(m),order:b?null:E,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},c),a&&p.a.createElement("span",{className:"c0"},a),c&&!v?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),l&&c&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==g&&(f.hasArray(i)||w)?p.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:f.hasArray(m)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(y,{type:"text",url:e.path}))}),o,h&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},355:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(356);var n=a(357),r=a(28),l=a(7),o=a(8),s=a(10),c=a(9),i=a(11),u=a(0),p=a.n(u),d=window.$fn,m=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,l=a.data,o=a.children,s=a.styleName;return p.a.createElement("section",{className:"bor1 r5px p10 mtb10"},p.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,s,t),Object(r.a)(e,"color","#888"),e)},o||"\u6d4b\u8bd5\u6837\u4f8b test case"),p.a.createElement(n.a.Group,{onChange:this.onChange,value:t},d.hasArray(l.radio)&&l.radio.map(function(e,t){return p.a.createElement(n.a,{key:t,value:e},p.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(p.a.Component)}}]);