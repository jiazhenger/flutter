(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[15],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(9),r=a(10),o=a(12),l=a(11),c=a(13),i=a(0),s=a.n(i),u=a(71),p=a(277),d=a(280),m=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){m.setTitle("\u8fb9\u6846"),m.hidePhone()}},{key:"render",value:function(){var e=this;return s.a.createElement(u.a,{className:"page-content"},s.a.createElement(p.a,{order:1,keyword:"outline-width",pro:"\u8fb9\u6846\u5bbd\u5ea6",code:[{path:"css/style/border/outline/outline-width"}]},s.a.createElement(d.a,{getValue:function(t){return e.setState({outlineWidth:t})},data:{radio:["medium","thin","thick",".5px","1px","2px","1px 2px 3px 4px"]}},s.a.createElement("div",{style:{outlineStyle:"solid",height:"50px",outlineWidth:this.state.outlineWidth}}))),s.a.createElement(p.a,{order:2,keyword:"outline-style",pro:"\u8fb9\u6846\u6837\u5f0f",code:[{path:"css/style/border/outline/outline-style"}]},s.a.createElement(d.a,{getValue:function(t){return e.setState({outlineStyle:t})},data:{radio:["none","solid","dotted","dashed","double","groove","ridge","inset","outset","groove ridge inset outset"]}},s.a.createElement("div",{style:{height:"50px",outlineWidth:"1px",outlineStyle:this.state.outlineStyle}}))),s.a.createElement(p.a,{order:3,keyword:"outline-color",pro:"\u8fb9\u6846\u989c\u8272",code:[{path:"css/style/border/outline/outline-color"}]},s.a.createElement(d.a,{getValue:function(t){return e.setState({outlineColor:t})},data:{radio:["transparent","yellowgreen","green","#ff0000","rgba(0,0,0,.1)","red blue green yellow"]}},s.a.createElement("div",{style:{height:"50px",outlineWidth:"2px",outlineStyle:"solid",outlineColor:this.state.outlineColor}}))),s.a.createElement(p.a,{keyword:"outline",pro:"[outline-width] [outline-style] [outline-color] ",code:[{path:"css/style/border/outline/outline"}]}),s.a.createElement(p.a,{order:4,keyword:"outline-offset",pro:"\u5b9a\u4e49\u8f6e\u5ed3\u8ddd\u79bb\u5bb9\u5668\u7684\u503c",code:[{path:"css/style/border/outline/outline-offset"}]},s.a.createElement(d.a,{getValue:function(t){return e.setState({outlineOffset:t})},data:{radio:["2px","3px","5px","-5px","-10px"]}},s.a.createElement("div",{style:{height:"50px",outlineColor:"red",outlineWidth:"1px",outlineStyle:"solid",outlineOffset:this.state.outlineOffset}},"\u5b9a\u4e49\u8f6e\u5ed3\u8ddd\u79bb\u5bb9\u5668\u7684\u503c"))))}}]),t}(s.a.Component)},276:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(9),r=a(10),o=a(12),l=a(11),c=a(13),i=a(0),s=a.n(i),u=window.$http,p=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){u.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){u.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),s.a.createElement("section",null,e.length>0?s.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},s.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return s.a.createElement("dt",{key:t},t+1)})),s.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return s.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):s.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(s.a.Component)},277:function(e,t,a){"use strict";a(278);var n=a(279),r=(a(101),a(21)),o=a(9),l=a(10),c=a(12),i=a(11),s=a(13),u=a(0),p=a.n(u),d=function(e){var t=e.children,a=e.hasArrow,n=e.show,o=e.order,l=e.onClick;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),onClick:l},p.a.createElement("div",{className:"fxm"},o?p.a.createElement("span",null,o,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("span",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},m=a(276);a.d(t,"a",function(){return y});var h=window.$fn,y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){h.showPhone(a.props.url)},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,o=t.type,l=t.children,c=t.pro,i=t.keyword,s=t.code,u=t.isGray,y=t.link,f=t.url,b=t.order,E=t.noOrder,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(d,{show:v,hasArrow:!0,order:E?null:b,onClick:this.onClick},i&&p.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(u?"gray":""),style:{cursor:"text"}},i),a&&p.a.createElement("span",{className:"c0"},a),c&&(a||i)?p.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,o&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},o)],c&&p.a.createElement("span",{className:"g6 f13",key:2},c)),p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:h.hasArray(y)?"10px 0 5px":"10px 0"}},void 0!==v&&h.hasArray(s)&&s.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10",key:"title"},e.title,": "),p.a.createElement(m.a,{type:"text",url:e.path}))}),l,f&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),h.hasArray(y)&&p.a.createElement("div",{className:"mt10"},y.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},"\u5173\u8054 ",p.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(p.a.Component)},280:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(282);var n=a(283),r=a(28),o=a(9),l=a(10),c=a(12),i=a(11),s=a(13),u=a(0),p=a.n(u),d=window.$fn,m=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,o=a.data,l=a.children,c=a.styleName;return p.a.createElement("section",{className:"bor1 r5px p10 mtb10"},p.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,c,t),Object(r.a)(e,"color","#888"),e)},l||"\u6d4b\u8bd5\u6837\u4f8b test case"),p.a.createElement(n.a.Group,{onChange:this.onChange,value:t},d.hasArray(o.radio)&&o.radio.map(function(e,t){return p.a.createElement(n.a,{key:t,value:e},p.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(p.a.Component)}}]);