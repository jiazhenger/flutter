(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[37],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(9),n=a(10),c=a(12),s=a(11),o=a(13),l=a(0),i=a.n(l),m=a(305),p={title:"\u7c7b\u57fa\u7840",data:[{keyword:"MyClass( ){ }",pro:"\u6807\u51c6",code:[{title:"\u6709\u53c2\u6570",path:"dart/grammar/class/constructor/base"}]},{keyword:"MyClass( )",pro:"\u7b80\u5199",code:[{path:"dart/grammar/class/constructor/simple"}]},{keyword:"MyClass.createInstance(value)",pro:"\u521b\u5efa\u65b0\u7684\u6784\u9020\u51fd\u6570",code:[{title:"\u5355\u4e2a\u53c2\u6570",path:"dart/grammar/class/constructor/createInstance/one-param"},{title:"\u591a\u4e2a\u53c2\u6570",path:"dart/grammar/class/constructor/createInstance/many-param"}]},{keyword:"const MyClass( )",pro:"\u5e38\u91cf\u6784\u9020\u51fd\u6570\uff0c\u521b\u5efa\u6c38\u4e0d\u6539\u53d8\u7684\u7c7b",code:[{path:"dart/grammar/class/constructor/const"}]},{keyword:"MyClass.fromJson( )",pro:"\u547d\u540d\u6784\u9020\u51fd\u6570",code:[{title:"\u57fa\u7840\u7528\u6cd5\uff08\u6539\u53d8\u4f20\u53c2\u7ed3\u6784,\u4f7f\u6570\u636e\u7ed3\u6784\u66f4\u6e05\u6670\uff09",path:"dart/grammar/class/constructor/fromJson/base"},{title:"\u7236\u7c7b\u6ca1\u6709\u9ed8\u8ba4\u6784\u9020\u51fd\u6570",path:"dart/grammar/class/constructor/fromJson/extends"}]},{keyword:"MyClass.alongXAxis(int x):this(x,0)",pro:"\u91cd\u5b9a\u5411\u6784\u9020\u51fd\u6570",code:[{path:"dart/grammar/class/constructor/alongXAxis"}]},{keyword:"factory MyClass( ){ }",pro:"\u5de5\u5382\u6784\u9020\u51fd\u6570",code:[{path:"dart/grammar/class/constructor/factory"}]},{noOrder:!0,pro:"\u7efc\u5408",code:[{path:"dart/grammar/class/constructor/format"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,Object.assign({data:p},this.props))}}]),t}(i.a.Component)},303:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var r=a(9),n=a(10),c=a(12),s=a(11),o=a(13),l=a(0),i=a.n(l),m=window.$http,p=window.$fn,u=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component)},304:function(e,t,a){"use strict";a(306);var r=a(307),n=(a(101),a(21)),c=a(9),s=a(10),o=a(12),l=a(11),i=a(13),m=a(0),p=a.n(m),u=function(e){var t=e.children,a=e.hasArrow,r=e.show,c=e.order,s=e.onClick;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},c?p.a.createElement("span",null,c,"\u3001"):p.a.createElement(n.a,{className:"f14",type:"share-alt"}),p.a.createElement("span",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})))},d=a(303);a.d(t,"a",function(){return h});var y=window.$fn,h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){y.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,s=t.children,o=t.pro,l=t.keyword,i=t.code,m=t.isGray,h=t.link,f=t.url,w=t.order,b=t.noOrder,k=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:k,hasArrow:!0,order:b?null:w,onClick:this.onClick},l&&p.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(m?"gray":"")},l),a&&p.a.createElement("span",{className:"c0"},a),o&&(a||l)?p.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,c&&[p.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],o&&p.a.createElement("span",{className:"g6 f13",key:2},o)),p.a.createElement("div",{className:"rel bbor1 ".concat(k?"":"dn"),style:{padding:y.hasArray(h)?"10px 0 5px":"10px 0"},onClick:y.stop},void 0!==k&&y.hasArray(i)&&i.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(d.a,{type:"text",url:e.path}))}),s,f&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(h)&&p.a.createElement("div",{className:"mt10"},h.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(p.a.Component)},305:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(9),n=a(10),c=a(12),s=a(11),o=a(13),l=a(0),i=a.n(l),m=a(71),p=a(304),u=window.$fn,d=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return i.a.createElement(m.a,{className:"page-content"},u.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?i.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,i.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(i.a.Component)}}]);