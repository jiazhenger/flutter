(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[334],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(4),s=a(6),c=a(5),o=a(0),l=a.n(o),i=a(82),m=a(585),u=a(594),p=window.$fn,d=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={width:"50px",height:"50px"},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){p.setTitle("\u900f\u660e"),p.hidePhone()}},{key:"render",value:function(){var e=this;return l.a.createElement(i.a,{className:"page-content"},l.a.createElement(m.a,{order:1,keyword:"position",pro:"\u5b9a\u4f4d",code:[{path:"css/style/position/position"}]}),l.a.createElement(m.a,{order:2,keyword:"left",pro:"\u5de6\u79fb",code:[{path:"css/style/position/left"}]}),l.a.createElement(m.a,{order:3,keyword:"top",pro:"\u4e0a\u79fb",code:[{path:"css/style/position/top"}]}),l.a.createElement(m.a,{order:4,keyword:"right",pro:"\u53f3\u79fb",code:[{path:"css/style/position/right"}]}),l.a.createElement(m.a,{order:5,keyword:"bottom",pro:"\u4e0b\u79fb",code:[{path:"css/style/position/bottom"}]}),l.a.createElement(m.a,{order:6,keyword:"z-index",pro:"\u5c42\u53e0\u987a\u5e8f",code:[{path:"css/style/position/z-index"}]}),l.a.createElement(m.a,{pro:"\u793a\u4f8b",hasShow:!0},l.a.createElement("div",{className:"rel",style:{height:"100px",background:"red",border:"1px solid #666",boxSizing:"border-box"}},l.a.createElement("div",{style:{width:"50px",height:"50px",background:"green"}}),l.a.createElement("div",{style:{width:this.state.width,height:this.state.height,background:"yellow",position:this.state.position,left:this.state.left,top:this.state.top,right:this.state.right,bottom:this.state.bottom,zIndex:this.state.zIndex}})),l.a.createElement(u.a,{getValue:function(t){return e.setState({width:t})},data:{radio:["auto","50px","100%"]}},l.a.createElement("b",{className:"c1"},"width:")),l.a.createElement(u.a,{getValue:function(t){return e.setState({height:t})},data:{radio:["auto","50px","100%"]}},l.a.createElement("b",{className:"c1"},"height:")),l.a.createElement(u.a,{getValue:function(t){return e.setState({position:t})},data:{radio:["static","relative","absolute","fixed","sticky"]}},l.a.createElement("b",{className:"c1"},"position:")),l.a.createElement(u.a,{getValue:function(t){return e.setState({left:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},l.a.createElement("b",{className:"c1"},"left:")),l.a.createElement(u.a,{getValue:function(t){return e.setState({top:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},l.a.createElement("b",{className:"c1"},"top:")),l.a.createElement(u.a,{getValue:function(t){return e.setState({right:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},l.a.createElement("b",{className:"c1"},"right:")),l.a.createElement(u.a,{getValue:function(t){return e.setState({bottom:t})},data:{radio:["auto","0","50px","50%","-50%","100%"]}},l.a.createElement("b",{className:"c1"},"bottom:")),l.a.createElement(u.a,{getValue:function(t){return e.setState({zIndex:t})},data:{radio:["0","1","-1","null"]}},l.a.createElement("b",{className:"c1"},"z-index:")),l.a.createElement("div",{style:{height:"500px"}})))}}]),a}(l.a.Component)},585:function(e,t,a){"use strict";a(586);var n=a(587),r=a(3),s=a(4),c=a(6),o=a(5),l=a(0),i=a.n(l),m=a(589),u=a(590),p=a(591),d=a(592),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,s=e.hasClick,c=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:c},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(u.a,{className:"f24"}):i.a.createElement(p.a,{className:"f24"})),s&&i.a.createElement("span",{className:"c0"},i.a.createElement(d.a,{className:"f24"})))},y=window.$http,f=window.$fn,E=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.getText=function(t){y.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){y.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),b=a(593);a.d(t,"a",(function(){return v}));var g=window.$fn,v=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,s=t.children;(g.hasArray(a)||r||s)&&e.setState({show:!e.state.show}),g.isString(n)&&e.props.history.push(n)},e.onShow=function(){g.showPhone(e.props.url)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,s=t.children,c=t.pro,o=t.keyword,l=t.code,m=t.deviceTitle,u=t.isGray,p=t.link,d=t.url,y=t.order,f=t.noOrder,v=t.isValue,w=t.hasShow,k=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(h,{show:k,hasArrow:g.hasArray(l)||w||s,hasClick:g.isString(p),order:f?null:y,onClick:this.onClick},o&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:g.stop},o),a&&i.a.createElement("span",{className:"c0"},a),o&&!v?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&o&&[i.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],c&&i.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==k&&(g.hasArray(l)||w||s)?i.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:g.hasArray(p)?"10px 0 5px":"10px 0"},onClick:g.stop},g.hasArray(l)&&l.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(E,{type:"text",url:e.path}))})),s,d&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),g.hasArray(p)&&i.a.createElement("div",{className:"mt10"},p.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},594:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(596);var n=a(597),r=a(117),s=a(3),c=a(4),o=a(6),l=a(5),i=a(0),m=a.n(i),u=window.$fn,p=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){var a=t.target.value;e.setState({value:a},(function(){e.props.getValue&&e.props.getValue(a)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,s=a.data,c=a.children,o=a.styleName;return m.a.createElement("section",{className:"bor1 r5px p10 mtb10"},m.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,o,t),Object(r.a)(e,"color","#888"),e)},c||"\u6d4b\u8bd5\u6837\u4f8b test case"),m.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(s.radio)&&s.radio.map((function(e,t){return m.a.createElement(n.a,{key:t,value:e},m.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))}))))}}]),a}(m.a.Component)}}]);