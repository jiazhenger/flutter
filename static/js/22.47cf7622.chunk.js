(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[22],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(7),r=a(8),c=a(10),l=a(9),o=a(11),s=a(0),i=a.n(s),d=a(75),p=a(351),u=a(355),m=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){m.setTitle("\u5185\u8865\u4e01"),m.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(d.a,{className:"page-content"},i.a.createElement(p.a,{order:1,keyword:"padding-top",pro:"\u4e0a\u8fb9\u8ddd",code:[{path:"css/style/padding/padding-top"}]},i.a.createElement(u.a,{getValue:function(t){return e.setState({paddingTop:t})},data:{radio:["0","10px","20px","30px"]}},i.a.createElement("div",{style:{background:"yellow",paddingTop:this.state.paddingTop}},"padding"))),i.a.createElement(p.a,{order:2,keyword:"padding-right",pro:"\u53f3\u8fb9\u8ddd",code:[{path:"css/style/padding/padding-right"}]},i.a.createElement(u.a,{getValue:function(t){return e.setState({paddingRight:t})},data:{radio:["0","50px","100px","50%"]}},i.a.createElement("div",{style:{display:"inline-block",background:"yellow",paddingRight:this.state.paddingRight}},"padding"))),i.a.createElement(p.a,{order:3,keyword:"padding-bottom",pro:"\u4e0b\u8fb9\u8ddd",code:[{path:"css/style/padding/padding-bottom"}]},i.a.createElement(u.a,{getValue:function(t){return e.setState({paddingBottom:t})},data:{radio:["0","10px","20px","30px"]}},i.a.createElement("div",{style:{background:"yellow",paddingBottom:this.state.paddingBottom}},"padding"))),i.a.createElement(p.a,{order:4,keyword:"padding-left",pro:"\u5de6\u8fb9\u8ddd",code:[{path:"css/style/padding/padding-left"}]},i.a.createElement(u.a,{getValue:function(t){return e.setState({paddingLeft:t})},data:{radio:["0","50px","100px","50%"]}},i.a.createElement("div",{style:{background:"yellow",paddingLeft:this.state.paddingLeft}},"padding"))),i.a.createElement(p.a,{keyword:"padding",pro:"[padding-top] [padding-right] [padding-bottom] [padding-left]",code:[{path:"css/style/padding/padding"}]},i.a.createElement(u.a,{getValue:function(t){return e.setState({padding:t})},data:{radio:["20px","50px","10%","10px 20px 30px 40px","20px 0","0 20px","10px 20px 30px"]}},i.a.createElement("div",{style:{display:"inline-block",background:"yellow",padding:this.state.padding}},"padding"))))}}]),t}(i.a.Component)},351:function(e,t,a){"use strict";a(352);var n=a(353),r=(a(105),a(22)),c=a(7),l=a(8),o=a(10),s=a(9),i=a(11),d=a(0),p=a.n(d),u=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,l=e.hasClick,o=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:o},p.a.createElement("div",{className:"fxm"},c?p.a.createElement("span",null,c,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:"right-circle"})))},m=window.$http,h=window.$fn,g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return f});var y=window.$fn,f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(y.hasArray(t)||r)&&a.setState({show:!a.state.show}),y.isString(n)&&a.props.history.push(n)},a.onShow=function(){y.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,l=t.children,o=t.pro,s=t.keyword,i=t.code,d=t.isGray,m=t.link,h=t.url,f=t.order,E=t.noOrder,b=t.isValue,w=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:v,hasArrow:y.hasArray(i)||w,hasClick:y.isString(m),order:E?null:f,onClick:this.onClick},s&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(d?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:y.stop},s),a&&p.a.createElement("span",{className:"c0"},a),s&&!b?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),c&&s&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],o&&p.a.createElement("span",{className:"g6 f13",key:2},o)),void 0!==v&&(y.hasArray(i)||w)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:y.hasArray(m)?"10px 0 5px":"10px 0"},onClick:y.stop},y.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(g,{type:"text",url:e.path}))}),l,h&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},355:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(356);var n=a(357),r=a(28),c=a(7),l=a(8),o=a(10),s=a(9),i=a(11),d=a(0),p=a.n(d),u=window.$fn,m=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,l=a.children,o=a.styleName;return p.a.createElement("section",{className:"bor1 r5px p10 mtb10"},p.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,o,t),Object(r.a)(e,"color","#888"),e)},l||"\u6d4b\u8bd5\u6837\u4f8b test case"),p.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(c.radio)&&c.radio.map(function(e,t){return p.a.createElement(n.a,{key:t,value:e},p.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(p.a.Component)}}]);