(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[330],{442:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(4),c=a(6),s=a(5),o=a(0),l=a.n(o),i=a(86),m=a(581),p=window.$fn,u=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){p.setTitle("\u51fd\u6570\u7c7b\u578b"),p.hidePhone()}},{key:"render",value:function(){return l.a.createElement(i.a,{className:"page-content"},l.a.createElement(m.a,{order:1,pro:"\u51fd\u6570\u58f0\u660e",code:[{path:"js/grammar/data-type/function/declare"}]}),l.a.createElement(m.a,{order:2,pro:"\u51fd\u6570\u8868\u8fbe\u5f0f",code:[{path:"js/grammar/data-type/function/expression"}]}),l.a.createElement(m.a,{order:3,pro:"\u7bad\u5934\u51fd\u6570\u8868\u8fbe\u5f0f",code:[{path:"js/grammar/data-type/function/arrow"}]}),l.a.createElement(m.a,{order:4,pro:"\u521b\u5efa\u51fd\u6570\u76843\u79cd\u65b9\u5f0f",code:[{path:"js/grammar/data-type/function/create"}]}),l.a.createElement(m.a,{order:5,pro:"\u51fd\u6570\u53c2\u6570",code:[{path:"js/grammar/data-type/function/param"}]}),l.a.createElement(m.a,{order:6,pro:"\u51fd\u6570\u8c03\u7528",code:[{path:"js/grammar/data-type/function/use"}]}),l.a.createElement(m.a,{order:7,pro:"\u51fd\u6570\u8fd4\u56de\u503c",code:[{path:"js/grammar/data-type/function/return"}]}),l.a.createElement(m.a,{order:8,pro:"\u5c40\u90e8\u53d8\u91cf",code:[{path:"js/grammar/data-type/function/partvar"}]}),l.a.createElement(m.a,{order:9,pro:"\u533f\u540d\u51fd\u6570",code:[{path:"js/grammar/data-type/function/noname"}]}),l.a.createElement(m.a,Object.assign({pro:"Arguments \u5bf9\u8c61",link:"/js/object/function/arguments"},this.props)),l.a.createElement(m.a,Object.assign({pro:"\u5168\u5c40\u5c5e\u6027",link:"/js/object/function/property"},this.props)),l.a.createElement(m.a,Object.assign({pro:"\u5168\u5c40\u65b9\u6cd5",link:"/js/object/function/method"},this.props)))}}]),a}(l.a.Component)},581:function(e,t,a){"use strict";a(582);var n=a(583),r=a(3),c=a(4),s=a(6),o=a(5),l=a(0),i=a.n(l),m=a(598),p=a(599),u=a(600),d=a(601),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return i.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},i.a.createElement("div",{className:"fxm"},r?i.a.createElement("span",null,r,"\u3001"):i.a.createElement(m.a,{className:"f14"}),i.a.createElement("div",{className:"ml10"},t)),a&&i.a.createElement("span",{className:"c0"},n?i.a.createElement(p.a,{className:"f24"}):i.a.createElement(u.a,{className:"f24"})),c&&i.a.createElement("span",{className:"c0"},i.a.createElement(d.a,{className:"f24"})))},y=window.$http,f=window.$fn,E=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:[]},e.getText=function(t){y.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){y.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return i.a.createElement("dt",{key:t},t+1)}))),i.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(i.a.Component),b=a(602);a.d(t,"a",(function(){return g}));var w=window.$fn,g=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,c=t.children;(w.hasArray(a)||r||c)&&e.setState({show:!e.state.show}),w.isString(n)&&e.props.history.push(n)},e.onShow=function(){w.showPhone(e.props.url)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,c=t.children,s=t.pro,o=t.keyword,l=t.code,m=t.deviceTitle,p=t.isGray,u=t.link,d=t.url,y=t.order,f=t.noOrder,g=t.isValue,k=t.hasShow,j=this.state.show;return i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),i.a.createElement("section",{className:"box"},i.a.createElement(h,{show:j,hasArrow:w.hasArray(l)||k||c,hasClick:w.isString(u),order:f?null:y,onClick:this.onClick},o&&i.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(g?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:w.stop},o),a&&i.a.createElement("span",{className:"c0"},a),o&&!g?i.a.createElement("i",{className:"mlr10"},":"):i.a.createElement("i",{className:"ml10"}),r&&o&&[i.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),i.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],s&&i.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==j&&(w.hasArray(l)||k||c)?i.a.createElement("div",{className:"rel bbor1 ".concat(j?"":"dn"),style:{padding:w.hasArray(u)?"10px 0 5px":"10px 0"},onClick:w.stop},w.hasArray(l)&&l.map((function(e,t){return i.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&i.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),i.a.createElement(E,{type:"text",url:e.path}))})),c,d&&i.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},i.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),w.hasArray(u)&&i.a.createElement("div",{className:"mt10"},u.map((function(t,a){return i.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},i.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(i.a.Component)}}]);