(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[18],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var n=a(5),r=a(6),o=a(8),c=a(7),s=a(9),l=a(0),i=a.n(l),m=a(77),p=a(369),u=a(373),h=window.$fn,d=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){h.setTitle("\u5b57\u4f53\u6837\u5f0f"),h.hidePhone()}},{key:"render",value:function(){return i.a.createElement(m.a,{className:"page-content"},i.a.createElement(p.a,{order:1,keyword:"font-family",pro:"\u5b57\u4f53\u540d\u79f0",code:[{path:"css/style/font/font-family"}]},i.a.createElement(u.a,{styleName:"fontFamily",data:{radio:["SimSum","SimHei","Microsoft YaHei","Arial","Tahoma,Verdana,Arial,sans-serif"]}})),i.a.createElement(p.a,{order:2,keyword:"font-size",pro:"\u5b57\u4f53\u5927\u5c0f",code:[{path:"css/style/font/font-size"}]}),i.a.createElement(p.a,{order:3,keyword:"font-style",pro:"\u503e\u659c",code:[{path:"css/style/font/font-style"}]}),i.a.createElement(p.a,{order:4,keyword:"font-weight",pro:"\u52a0\u7c97",code:[{path:"css/style/font/font-weight"}]},i.a.createElement(u.a,{styleName:"fontWeight",data:{radio:["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"]}})),i.a.createElement(p.a,{order:5,keyword:"font-variant",pro:"\u5c06\u5c0f\u5199\u5b57\u6bcd\u8f6c\u4e3a\u5927\u5199",code:[{path:"css/style/font/font-variant"}]},i.a.createElement(u.a,{styleName:"fontVariant",data:{radio:["normal","small-caps"]}})),i.a.createElement(p.a,{order:6,keyword:"line-height",pro:"\u884c\u9ad8",code:[{path:"css/style/font/line-height"}]},i.a.createElement(u.a,{styleName:"lineHeight",data:{radio:["normal","30px","50px","1em","2em","100%","200%"]}})),i.a.createElement(p.a,{keyword:"font",pro:"[font-weight] [font-style] [font-variant] [font-size]/[line-height] [font-family]",code:[{path:"css/style/font/font"}]}))}}]),t}(i.a.Component)},369:function(e,t,a){"use strict";a(370);var n=a(371),r=(a(107),a(22)),o=a(5),c=a(6),s=a(8),l=a(7),i=a(9),m=a(0),p=a.n(m),u=function(e){var t=e.children,a=e.hasArrow,n=e.show,o=e.order,c=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||c?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},o?p.a.createElement("span",null,o,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})),c&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:"right-circle"})))},h=window.$http,d=window.$fn,f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){h.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){h.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return E});var y=window.$fn,E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){var e=a.props,t=e.code,n=e.link,r=e.hasShow;(y.hasArray(t)||r)&&a.setState({show:!a.state.show}),y.isString(n)&&a.props.history.push(n)},a.onShow=function(){y.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,o=t.type,c=t.children,s=t.pro,l=t.keyword,i=t.code,m=t.isGray,h=t.link,d=t.url,E=t.order,w=t.noOrder,b=t.isValue,v=t.hasShow,k=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:k,hasArrow:y.hasArray(i)||v,hasClick:y.isString(h),order:w?null:E,onClick:this.onClick},l&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(m?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:y.stop},l),a&&p.a.createElement("span",{className:"c0"},a),l&&!b?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),o&&l&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},o)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==k&&(y.hasArray(i)||v)?p.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:y.hasArray(h)?"10px 0 5px":"10px 0"},onClick:y.stop},y.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(f,{type:"text",url:e.path}))}),c,d&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(h)&&p.a.createElement("div",{className:"mt10"},h.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},373:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(374);var n=a(375),r=a(28),o=a(5),c=a(6),s=a(8),l=a(7),i=a(9),m=a(0),p=a.n(m),u=window.$fn,h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,o=a.data,c=a.children,s=a.styleName;return p.a.createElement("section",{className:"bor1 r5px p10 mtb10"},p.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,s,t),Object(r.a)(e,"color","#888"),e)},c||"\u6d4b\u8bd5\u6837\u4f8b test case"),p.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(o.radio)&&o.radio.map(function(e,t){return p.a.createElement(n.a,{key:t,value:e},p.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(p.a.Component)}}]);