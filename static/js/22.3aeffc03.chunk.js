(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[22],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(3),r=a(4),c=a(6),s=a(5),l=a(0),o=a.n(l),i=a(86),m=a(581),u=a(585),p=window.$fn,h=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){p.setTitle("\u900f\u660e"),p.hidePhone()}},{key:"render",value:function(){var e=this;return o.a.createElement(i.a,{className:"page-content"},o.a.createElement(m.a,{keyword:"opacity",pro:"\u900f\u660e",code:[{path:"css/style/opacity/opacity"}]},o.a.createElement(u.a,{getValue:function(t){return e.setState({opacity:t})},data:{radio:["0",".2",".4",".6",".8","1"]}},o.a.createElement("div",{className:"p10",style:{height:"50px",background:"yellow",margin:"0 auto",opacity:this.state.opacity}},"\u900f\u660e"))))}}]),a}(o.a.Component)},581:function(e,t,a){"use strict";a(582);var n=a(583),r=a(3),c=a(4),s=a(6),l=a(5),o=a(0),i=a.n(o),m=a(598),u=a(599),p=a(600),h=a(601),d=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(u.a,{className:"f24"}):i.a.createElement(p.a,{className:"f24"})),c&&i.a.createElement("span",{className:"c0"},i.a.createElement(h.a,{className:"f24"})))},y=window.$http,f=window.$fn,v=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e.getText=function(t){y.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){y.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),E=a(602);a.d(t,"a",(function(){return w}));var b=window.$fn,w=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,c=t.children;(b.hasArray(a)||r||c)&&e.setState({show:!e.state.show}),b.isString(n)&&e.props.history.push(n)},e.onShow=function(){b.showPhone(e.props.url)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,s=t.pro,l=t.keyword,o=t.code,m=t.deviceTitle,u=t.isGray,p=t.link,h=t.url,y=t.order,f=t.noOrder,w=t.isValue,k=t.hasShow,N=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(d,{show:N,hasArrow:b.hasArray(o)||k||c,hasClick:b.isString(p),order:f?null:y,onClick:this.onClick},l&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(w?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:b.stop},l),a&&i.a.createElement("span",{className:"c0"},a),l&&!w?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&l&&[i.a.createElement(E.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&i.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==N&&(b.hasArray(o)||k||c)?i.a.createElement("div",{className:"rel bbor1 ".concat(N?"":"dn"),style:{padding:b.hasArray(p)?"10px 0 5px":"10px 0"},onClick:b.stop},b.hasArray(o)&&o.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(v,{type:"text",url:e.path}))})),c,h&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),b.hasArray(p)&&i.a.createElement("div",{className:"mt10"},p.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)},585:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(587);var n=a(588),r=a(119),c=a(3),s=a(4),l=a(6),o=a(5),i=a(0),m=a.n(i),u=window.$fn,p=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){var a=t.target.value;e.setState({value:a},(function(){e.props.getValue&&e.props.getValue(a)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,s=a.children,l=a.styleName;return m.a.createElement("section",{className:"bor1 r5px p10 mtb10"},m.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,l,t),Object(r.a)(e,"color","#888"),e)},s||"\u6d4b\u8bd5\u6837\u4f8b test case"),m.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(c.radio)&&c.radio.map((function(e,t){return m.a.createElement(n.a,{key:t,value:e},m.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))}))))}}]),a}(m.a.Component)}}]);