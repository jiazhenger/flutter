(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[40],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),n=a(5),s=a(7),c=a(6),l=a(8),o=a(0),i=a.n(o),m=a(562),p={title:"\u7c7b\u57fa\u7840",data:[{keyword:"MyClass( ){ }",pro:"\u6807\u51c6",code:[{title:"\u6709\u53c2\u6570",path:"dart/grammar/class/constructor/base"}]},{keyword:"MyClass( )",pro:"\u7b80\u5199",code:[{path:"dart/grammar/class/constructor/simple"}]},{keyword:"MyClass.createInstance(value)",pro:"\u521b\u5efa\u65b0\u7684\u6784\u9020\u51fd\u6570",code:[{title:"\u5355\u4e2a\u53c2\u6570",path:"dart/grammar/class/constructor/createInstance/one-param"},{title:"\u591a\u4e2a\u53c2\u6570",path:"dart/grammar/class/constructor/createInstance/many-param"}]},{keyword:"const MyClass( )",pro:"\u5e38\u91cf\u6784\u9020\u51fd\u6570\uff0c\u521b\u5efa\u6c38\u4e0d\u6539\u53d8\u7684\u7c7b",code:[{path:"dart/grammar/class/constructor/const"}]},{keyword:"MyClass.fromJson( )",pro:"\u547d\u540d\u6784\u9020\u51fd\u6570",code:[{title:"\u57fa\u7840\u7528\u6cd5\uff08\u6539\u53d8\u4f20\u53c2\u7ed3\u6784,\u4f7f\u6570\u636e\u7ed3\u6784\u66f4\u6e05\u6670\uff09",path:"dart/grammar/class/constructor/fromJson/base"},{title:"\u7236\u7c7b\u6ca1\u6709\u9ed8\u8ba4\u6784\u9020\u51fd\u6570",path:"dart/grammar/class/constructor/fromJson/extends"}]},{keyword:"MyClass.alongXAxis(int x):this(x,0)",pro:"\u91cd\u5b9a\u5411\u6784\u9020\u51fd\u6570",code:[{path:"dart/grammar/class/constructor/alongXAxis"}]},{keyword:"factory MyClass( ){ }",pro:"\u5de5\u5382\u6784\u9020\u51fd\u6570",code:[{path:"dart/grammar/class/constructor/factory"}]},{noOrder:!0,pro:"\u7efc\u5408",code:[{path:"dart/grammar/class/constructor/format"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},559:function(e,t,a){"use strict";a(560);var r=a(561),n=a(4),s=a(5),c=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),p=a(576),u=a(577),d=a(578),y=a(579),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,s=e.hasClick,c=e.onClick;e.hasGo;return m.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||s?"cp tap":""),style:{userSelect:"none"},onClick:c},m.a.createElement("div",{className:"fxm"},n?m.a.createElement("span",null,n,"\u3001"):m.a.createElement(p.a,{className:"f14"}),m.a.createElement("div",{className:"ml10"},t)),a&&m.a.createElement("span",{className:"c0"},r?m.a.createElement(u.a,{className:"f24"}):m.a.createElement(d.a,{className:"f24"})),s&&m.a.createElement("span",{className:"c0"},m.a.createElement(y.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),m.a.createElement("section",null,e.length>0?m.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},m.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return m.a.createElement("dt",{key:t},t+1)})),m.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return m.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):m.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(m.a.Component),b=a(580);a.d(t,"a",function(){return g});var E=window.$fn,g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(E.hasArray(t)||n)&&a.setState({show:!a.state.show}),E.isString(r)&&a.props.history.push(r)},a.onShow=function(){E.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,s=t.children,c=t.pro,l=t.keyword,o=t.code,i=t.isGray,p=t.link,u=t.url,d=t.order,y=t.noOrder,f=t.isValue,w=t.hasShow,g=this.state.show;return m.a.createElement("section",null,m.a.createElement(h,{show:g,hasArrow:E.hasArray(o)||w,hasClick:E.isString(p),order:y?null:d,onClick:this.onClick},l&&m.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:E.stop},l),a&&m.a.createElement("span",{className:"c0"},a),l&&!f?m.a.createElement("i",{className:"mlr10"},":"):m.a.createElement("i",{className:"ml10"}),n&&l&&[m.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],c&&m.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==g&&(E.hasArray(o)||w)?m.a.createElement("div",{className:"rel bbor1 ".concat(g?"":"dn"),style:{padding:E.hasArray(p)?"10px 0 5px":"10px 0"},onClick:E.stop},E.hasArray(o)&&o.map(function(e,t){return m.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&m.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),m.a.createElement(k,{type:"text",url:e.path}))}),s,u&&m.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),E.hasArray(p)&&m.a.createElement("div",{className:"mt10"},p.map(function(t,a){return m.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},m.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(m.a.Component)},562:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(560);var r=a(561),n=a(4),s=a(5),c=a(7),l=a(6),o=a(8),i=a(0),m=a.n(i),p=a(88),u=a(559),d=a(580),y=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return m.a.createElement("div",null,y.hasObject(a)&&a.keyword&&m.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&m.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&m.a.createElement("span",{className:"mr5 g9"},a.grayText),m.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[m.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),m.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],m.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&m.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),m.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?m.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?m.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,m.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return m.a.createElement(p.a,{className:"page-content"},a?t.data.map(function(e,t){return m.a.createElement(n,{key:t,data:e,index:t+1})}):m.a.createElement(n,{data:t}))}}]),t}(m.a.Component)}}]);