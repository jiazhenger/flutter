(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[23],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a(7),r=a(8),c=a(10),o=a(9),s=a(11),l=a(0),i=a.n(l),m=a(75),p=a(351),u=a(355),h=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={width:"50px",height:"50px"},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){h.setTitle("\u900f\u660e"),h.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(m.a,{className:"page-content"},i.a.createElement(p.a,{order:1,keyword:"position",pro:"\u5b9a\u4f4d",code:[{path:"css/style/position/position"}]}),i.a.createElement(p.a,{order:2,keyword:"left",pro:"\u5de6\u79fb",code:[{path:"css/style/position/left"}]}),i.a.createElement(p.a,{order:3,keyword:"top",pro:"\u4e0a\u79fb",code:[{path:"css/style/position/top"}]}),i.a.createElement(p.a,{order:4,keyword:"right",pro:"\u53f3\u79fb",code:[{path:"css/style/position/right"}]}),i.a.createElement(p.a,{order:5,keyword:"bottom",pro:"\u4e0b\u79fb",code:[{path:"css/style/position/bottom"}]}),i.a.createElement(p.a,{order:6,keyword:"z-index",pro:"\u5c42\u53e0\u987a\u5e8f",code:[{path:"css/style/position/z-index"}]}),i.a.createElement(p.a,{pro:"\u793a\u4f8b",hasShow:!0},i.a.createElement("div",{className:"rel",style:{height:"100px",background:"red",border:"1px solid #666",boxSizing:"border-box"}},i.a.createElement("div",{style:{width:"50px",height:"50px",background:"green"}}),i.a.createElement("div",{style:{width:this.state.width,height:this.state.height,background:"yellow",position:this.state.position,left:this.state.left,top:this.state.top,right:this.state.right,bottom:this.state.bottom,zIndex:this.state.zIndex}})),i.a.createElement(u.a,{getValue:function(t){return e.setState({width:t})},data:{radio:["auto","50px","100%"]}},i.a.createElement("b",{className:"c1"},"width:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({height:t})},data:{radio:["auto","50px","100%"]}},i.a.createElement("b",{className:"c1"},"height:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({position:t})},data:{radio:["static","relative","absolute","fixed"]}},i.a.createElement("b",{className:"c1"},"position:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({left:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},i.a.createElement("b",{className:"c1"},"left:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({top:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},i.a.createElement("b",{className:"c1"},"top:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({right:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},i.a.createElement("b",{className:"c1"},"right:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({bottom:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},i.a.createElement("b",{className:"c1"},"bottom:")),i.a.createElement(u.a,{getValue:function(t){return e.setState({zIndex:t})},data:{radio:["0","1","-1","null"]}},i.a.createElement("b",{className:"c1"},"z-index:"))))}}]),t}(i.a.Component)},351:function(e,t,a){"use strict";a(352);var n=a(353),r=(a(105),a(22)),c=a(7),o=a(8),s=a(10),l=a(9),i=a(11),m=a(0),p=a.n(m),u=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,o=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},c?p.a.createElement("span",null,c,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),o&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:"right-circle"})))},h=window.$http,d=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){h.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){h.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return E});var f=window.$fn,E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(f.hasArray(t)||r)&&a.setState({show:!a.state.show}),f.isString(n)&&a.props.history.push(n)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,o=t.children,s=t.pro,l=t.keyword,i=t.code,m=t.isGray,h=t.link,d=t.url,E=t.order,b=t.noOrder,g=t.isValue,w=t.hasShow,v=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:v,hasArrow:f.hasArray(i)||w,hasClick:f.isString(h),order:b?null:E,onClick:this.onClick},l&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(g?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},l),a&&p.a.createElement("span",{className:"c0"},a),l&&!g?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),c&&l&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==v&&(f.hasArray(i)||w)?p.a.createElement("div",{className:"rel bbor1 ".concat(v?"":"dn"),style:{padding:f.hasArray(h)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(y,{type:"text",url:e.path}))}),o,d&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(h)&&p.a.createElement("div",{className:"mt10"},h.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},355:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(356);var n=a(357),r=a(28),c=a(7),o=a(8),s=a(10),l=a(9),i=a(11),m=a(0),p=a.n(m),u=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,o=a.children,s=a.styleName;return p.a.createElement("section",{className:"bor1 r5px p10 mtb10"},p.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,s,t),Object(r.a)(e,"color","#888"),e)},o||"\u6d4b\u8bd5\u6837\u4f8b test case"),p.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(c.radio)&&c.radio.map(function(e,t){return p.a.createElement(n.a,{key:t,value:e},p.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(p.a.Component)}}]);