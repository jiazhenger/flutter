(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[14],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var r=a(5),n=a(6),o=a(8),c=a(7),s=a(9),l=a(0),i=a.n(l),d=a(86),u=a(484),p=a(488),m=window.$fn,h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){m.setTitle("\u8fb9\u6846"),m.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(d.a,{className:"page-content"},i.a.createElement(u.a,{order:1,keyword:"border-width",pro:"\u8fb9\u6846\u5bbd\u5ea6",code:[{path:"css/style/border/border/border-width"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({borderWidth:t})},data:{radio:["medium","thin","thick",".5px","1px","2px","1px 2px 3px 4px"]}},i.a.createElement("div",{style:{borderStyle:"solid",height:"50px",borderWidth:this.state.borderWidth}}))),i.a.createElement(u.a,{order:2,keyword:"border-style",pro:"\u8fb9\u6846\u6837\u5f0f",code:[{path:"css/style/border/border/border-style"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({borderStyle:t})},data:{radio:["none","solid","dotted","dashed","double","groove","ridge","inset","outset","groove ridge inset outset"]}},i.a.createElement("div",{style:{height:"50px",borderStyle:this.state.borderStyle}}))),i.a.createElement(u.a,{order:3,keyword:"border-color",pro:"\u8fb9\u6846\u989c\u8272",code:[{path:"css/style/border/border/border-color"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({borderColor:t})},data:{radio:["transparent","yellowgreen","green","#ff0000","rgba(0,0,0,.1)","red blue green yellow"]}},i.a.createElement("div",{style:{borderStyle:"solid",height:"50px",borderColor:this.state.borderColor}}))),i.a.createElement(u.a,{keyword:"border",pro:"[border-width] [border-style] [border-color] ",code:[{path:"css/style/border/border/border"}]}))}}]),t}(i.a.Component)},484:function(e,t,a){"use strict";a(485);var r=a(486),n=(a(116),a(22)),o=a(5),c=a(6),s=a(8),l=a(7),i=a(9),d=a(0),u=a.n(d),p=function(e){var t=e.children,a=e.hasArrow,r=e.show,o=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},u.a.createElement("div",{className:"fxm"},o?u.a.createElement("span",null,o,"\u3001"):u.a.createElement(n.a,{className:"f14",type:"share-alt"}),u.a.createElement("div",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),c&&u.a.createElement("span",{className:"c0"},u.a.createElement(n.a,{className:"f24",type:"right-circle"})))},m=window.$http,h=window.$fn,y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),u.a.createElement("section",null,e.length>0?u.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},u.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return u.a.createElement("dt",{key:t},t+1)})),u.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return u.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):u.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(u.a.Component);a.d(t,"a",function(){return f});var b=window.$fn,f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(b.hasArray(t)||n)&&a.setState({show:!a.state.show}),b.isString(r)&&a.props.history.push(r)},a.onShow=function(){b.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,o=t.type,c=t.children,s=t.pro,l=t.keyword,i=t.code,d=t.isGray,m=t.link,h=t.url,f=t.order,E=t.noOrder,v=t.isValue,w=t.hasShow,g=this.state.show;return u.a.createElement("section",null,u.a.createElement(p,{show:g,hasArrow:b.hasArray(i)||w,hasClick:b.isString(m),order:E?null:f,onClick:this.onClick},l&&u.a.createElement("span",{className:"title-keyword ar f16 ".concat(d?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},l),a&&u.a.createElement("span",{className:"c0"},a),l&&!v?u.a.createElement("i",{className:"mlr10"},":"):u.a.createElement("i",{className:"ml10"}),o&&l&&[u.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},o)],s&&u.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==g&&(b.hasArray(i)||w)?u.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:b.hasArray(m)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(i)&&i.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),u.a.createElement(y,{type:"text",url:e.path}))}),c,h&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(m)&&u.a.createElement("div",{className:"mt10"},m.map(function(t,a){return u.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},u.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(u.a.Component)},488:function(e,t,a){"use strict";a.d(t,"a",function(){return m});a(489);var r=a(490),n=a(28),o=a(5),c=a(6),s=a(8),l=a(7),i=a(9),d=a(0),u=a.n(d),p=window.$fn,m=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,o=a.data,c=a.children,s=a.styleName;return u.a.createElement("section",{className:"bor1 r5px p10 mtb10"},u.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(n.a)(e,s,t),Object(n.a)(e,"color","#888"),e)},c||"\u6d4b\u8bd5\u6837\u4f8b test case"),u.a.createElement(r.a.Group,{onChange:this.onChange,value:t},p.hasArray(o.radio)&&o.radio.map(function(e,t){return u.a.createElement(r.a,{key:t,value:e},u.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(u.a.Component)}}]);