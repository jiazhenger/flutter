(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[344],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(4),s=a(6),i=a(5),c=a(0),o=a.n(c),l=a(82),m=a(590),u=a(599),p=window.$fn,d=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){p.setTitle("\u52a8\u753b"),p.hidePhone()}},{key:"render",value:function(){var e=this;return o.a.createElement(l.a,{className:"page-content"},o.a.createElement(m.a,{order:1,keyword:"transition-property",pro:"CSS\u5c5e\u6027",code:[{path:"css/style/transition/transition-property"}]}),o.a.createElement(m.a,{order:2,keyword:"transition-duration",pro:"\u8fc7\u6e21\u65f6\u95f4",code:[{path:"css/style/transition/transition-duration"}]}),o.a.createElement(m.a,{order:3,keyword:"transition-delay",pro:"\u5ef6\u8fdf\u65f6\u95f4",code:[{path:"css/style/transition/transition-delay"}]}),o.a.createElement(m.a,{order:4,keyword:"transition-timing-function",pro:"\u8fc7\u6e21\u6548\u679c",code:[{path:"css/style/transition/transition-timing-function"}]}),o.a.createElement(m.a,{keyword:"transition",pro:"\u590d\u5408\u5c5e\u6027",code:[{path:"css/style/transition/transition"}]}),o.a.createElement(m.a,{pro:"\u793a\u4f8b",hasShow:!0},o.a.createElement("div",{className:"transition-case",style:{height:"50px",background:"red",transitionProperty:this.state.transitionProperty,transitionDuration:this.state.transitionDuration,transitionDelay:this.state.transitionDelay,transitionTimingFunction:this.state.transitionTimingFunction}}),o.a.createElement(u.a,{getValue:function(t){return e.setState({transitionProperty:t})},data:{radio:["all","background","width","height","background,width,height"]}},o.a.createElement("b",{className:"c1 mr10"},"transition-property:")),o.a.createElement(u.a,{getValue:function(t){return e.setState({transitionDuration:t})},data:{radio:["0s",".5s","2s","3s","5s"]}},o.a.createElement("b",{className:"c1 mr10"},"transition-duration:")),o.a.createElement(u.a,{getValue:function(t){return e.setState({transitionDelay:t})},data:{radio:["0s",".5s","2s"]}},o.a.createElement("b",{className:"c1 mr10"},"transition-delay:")),o.a.createElement(u.a,{getValue:function(t){return e.setState({transitionTimingFunction:t})},data:{radio:["ease","linear","ease-in","ease-out","ease-in-out"]}},o.a.createElement("b",{className:"c1 mr10"},"transition-timing-function:"))))}}]),a}(o.a.Component)},590:function(e,t,a){"use strict";a(591);var n=a(592),r=a(3),s=a(4),i=a(6),c=a(5),o=a(0),l=a.n(o),m=a(594),u=a(595),p=a(596),d=a(597),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,r=e.order,s=e.hasClick,i=e.onClick;e.hasGo;return l.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:i},l.a.createElement("div",{className:"fxm"},r?l.a.createElement("span",null,r,"\u3001"):l.a.createElement(m.a,{className:"f14"}),l.a.createElement("div",{className:"ml10"},t)),a&&l.a.createElement("span",{className:"c0"},n?l.a.createElement(u.a,{className:"f24"}):l.a.createElement(p.a,{className:"f24"})),s&&l.a.createElement("span",{className:"c0"},l.a.createElement(d.a,{className:"f24"})))},y=window.$http,f=window.$fn,E=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={data:[]},e.getText=function(t){y.getText(t).then((function(t){e.setState({data:t.split("\n")})}))},e.getDart=function(t){y.getDart(t).then((function(t){e.setState({data:t.split("\n")})}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return f.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),l.a.createElement("section",{className:"oxys",style:{maxHeight:"400px"}},e.length>0?l.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},l.a.createElement("dl",{className:"code-number"},e.map((function(e,t){return l.a.createElement("dt",{key:t},t+1)}))),l.a.createElement("dl",{className:"code-content"},e.map((function(e,t){return l.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})})))):l.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),a}(l.a.Component),b=a(598);a.d(t,"a",(function(){return w}));var v=window.$fn,w=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={},e.onClick=function(){var t=e.props,a=t.code,n=t.link,r=t.hasShow,s=t.children;(v.hasArray(a)||r||s)&&e.setState({show:!e.state.show}),v.isString(n)&&e.props.history.push(n)},e.onShow=function(){v.showPhone(e.props.url)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,r=t.type,s=t.children,i=t.pro,c=t.keyword,o=t.code,m=t.deviceTitle,u=t.isGray,p=t.link,d=t.url,y=t.order,f=t.noOrder,w=t.isValue,g=t.hasShow,k=this.state.show;return l.a.createElement(l.a.Fragment,null,m&&l.a.createElement("h2",{className:"ptb10 c1 bbor1"},m),l.a.createElement("section",{className:"box"},l.a.createElement(h,{show:k,hasArrow:v.hasArray(o)||g||s,hasClick:v.isString(p),order:f?null:y,onClick:this.onClick},c&&l.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(w?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:v.stop},c),a&&l.a.createElement("span",{className:"c0"},a),c&&!w?l.a.createElement("i",{className:"mlr10"},":"):l.a.createElement("i",{className:"ml10"}),r&&c&&[l.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),l.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},r)],i&&l.a.createElement("span",{className:"g6 f13",key:2},i)),void 0!==k&&(v.hasArray(o)||g||s)?l.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:v.hasArray(p)?"10px 0 5px":"10px 0"},onClick:v.stop},v.hasArray(o)&&o.map((function(e,t){return l.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&l.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),l.a.createElement(E,{type:"text",url:e.path}))})),s,d&&l.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},l.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),v.hasArray(p)&&l.a.createElement("div",{className:"mt10"},p.map((function(t,a){return l.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},l.a.createElement("span",{className:"c0"},t.title))})))):null))}}]),a}(l.a.Component)},599:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a(601);var n=a(602),r=a(117),s=a(3),i=a(4),c=a(6),o=a(5),l=a(0),m=a.n(l),u=window.$fn,p=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onChange=function(t){var a=t.target.value;e.setState({value:a},(function(){e.props.getValue&&e.props.getValue(a)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,s=a.data,i=a.children,c=a.styleName;return m.a.createElement("section",{className:"bor1 r5px p10 mtb10"},m.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,c,t),Object(r.a)(e,"color","#888"),e)},i||"\u6d4b\u8bd5\u6837\u4f8b test case"),m.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(s.radio)&&s.radio.map((function(e,t){return m.a.createElement(n.a,{key:t,value:e},m.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))}))))}}]),a}(m.a.Component)}}]);