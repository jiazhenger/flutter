(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[17],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a(7),r=a(8),c=a(10),l=a(9),s=a(11),o=a(0),i=a.n(o),u=a(75),m=a(351),h=a(355),p=window.$fn,d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){p.setTitle("\u900f\u660e"),p.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(u.a,{className:"page-content"},i.a.createElement(m.a,{order:1,keyword:"float",pro:"\u6d6e\u52a8",code:[{path:"css/style/float/float"}]}),i.a.createElement(m.a,{order:2,keyword:"clear",pro:"\u6e05\u9664\u6d6e\u52a8",code:[{path:"css/style/float/clear"}]}),i.a.createElement(m.a,{pro:"\u793a\u4f8b",hasShow:!0},i.a.createElement("div",{style:{height:"220px",border:"1px solid #666",boxSizing:"border-box"}},i.a.createElement("div",{className:this.state.clearfix,style:{background:"red",overflow:this.state.overflow,height:this.state.height}},i.a.createElement("div",{style:{width:"50px",height:"50px",background:"yellow",float:this.state.float}},"1"),i.a.createElement("div",{style:{width:"50px",height:"50px",background:"pink",float:this.state.float}},"2"),i.a.createElement("div",{style:{width:"50px",height:"50px",background:"yellow",float:this.state.float}},"3"),i.a.createElement("div",{style:{width:"50px",height:"50px",background:"pink",float:this.state.float}},"4"),"left"===this.state.clear||"right"===this.state.clear||"both"===this.state.clear?i.a.createElement("div",{style:{clear:this.state.clear,height:"18px",background:"blue",color:"#fff",textAlign:"center"}},"\u5b50\u7ea7\u5360\u4f4d clear"):null)),i.a.createElement(h.a,{getValue:function(t){return e.setState({float:t})},data:{radio:["none","left","right"]}},i.a.createElement("b",{className:"c1"},"float:")),i.a.createElement(h.a,{getValue:function(t){return e.setState({clear:t})},data:{radio:["none","left","right","both"]}},i.a.createElement("b",{className:"c1"},"\u6e05\u9664\u6d6e\u52a8:\u5b50\u7ea7\u5360\u4f4d clear:")),i.a.createElement(h.a,{getValue:function(t){return e.setState({height:t})},data:{radio:["auto","100px","150px"]}},i.a.createElement("b",{className:"c1"},"\u6e05\u9664\u6d6e\u52a8:\u7236\u7ea7\u8bbe\u9ad8 height:")),i.a.createElement(h.a,{getValue:function(t){return e.setState({overflow:t})},data:{radio:["hidden","visible"]}},i.a.createElement("b",{className:"c1"},"\u6e05\u9664\u6d6e\u52a8:\u7236\u7ea7\u6dfb\u52a0\u9690\u85cf\u5143\u7d20 overflow:")),i.a.createElement(h.a,{getValue:function(t){return e.setState({clearfix:t})},data:{radio:["clearfix","none"]}},i.a.createElement("b",{className:"c1"},"\u6e05\u9664\u6d6e\u52a8:\u7236\u7ea7\u6dfb\u52a0clearfix\u6837\u5f0f:"))))}}]),t}(i.a.Component)},351:function(e,t,a){"use strict";a(352);var n=a(353),r=(a(105),a(22)),c=a(7),l=a(8),s=a(10),o=a(9),i=a(11),u=a(0),m=a.n(u),h=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},m.a.createElement("div",{className:"fxm"},c?m.a.createElement("span",null,c,"\u3001"):m.a.createElement(r.a,{className:"f14",type:"share-alt"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},m.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),l&&m.a.createElement("span",{className:"c0"},m.a.createElement(r.a,{className:"f24",type:"right-circle"})))},p=window.$http,d=window.$fn,f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){p.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){p.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component);a.d(t,"a",function(){return b});var y=window.$fn,b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(y.hasArray(t)||r)&&a.setState({show:!a.state.show}),y.isString(n)&&a.props.history.push(n)},a.onShow=function(){y.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,l=t.children,s=t.pro,o=t.keyword,i=t.code,u=t.isGray,p=t.link,d=t.url,b=t.order,E=t.noOrder,v=t.isValue,g=t.hasShow,w=this.state.show;return m.a.createElement("section",null,m.a.createElement(h,{show:w,hasArrow:y.hasArray(i)||g,hasClick:y.isString(p),order:E?null:b,onClick:this.onClick},o&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(u?"gray":""," ").concat(v?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:y.stop},o),a&&m.a.createElement("span",{className:"c0"},a),o&&!v?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),c&&o&&[m.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&m.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==w&&(y.hasArray(i)||g)?m.a.createElement("div",{className:"rel bbor1 ".concat(w?"":"dn"),style:{padding:y.hasArray(p)?"10px 0 5px":"10px 0"},onClick:y.stop},y.hasArray(i)&&i.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(f,{type:"text",url:e.path}))}),l,d&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},355:function(e,t,a){"use strict";a.d(t,"a",function(){return p});a(356);var n=a(357),r=a(28),c=a(7),l=a(8),s=a(10),o=a(9),i=a(11),u=a(0),m=a.n(u),h=window.$fn,p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,l=a.children,s=a.styleName;return m.a.createElement("section",{className:"bor1 r5px p10 mtb10"},m.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,s,t),Object(r.a)(e,"color","#888"),e)},l||"\u6d4b\u8bd5\u6837\u4f8b test case"),m.a.createElement(n.a.Group,{onChange:this.onChange,value:t},h.hasArray(c.radio)&&c.radio.map(function(e,t){return m.a.createElement(n.a,{key:t,value:e},m.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(m.a.Component)}}]);