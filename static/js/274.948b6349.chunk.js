(window["webpackJsonpjia-study"]=window["webpackJsonpjia-study"]||[]).push([[274],{436:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(4),n=a(5),l=a(7),s=a(6),c=a(8),o=a(0),i=a.n(o),p=a(560),m={title:"\u6587\u672c",keyword:"Text( )",type:"Text",url:"TextPage",data:[{keyword:"data",type:"String",pro:"\u6587\u672c",isValue:!0},{deviceTitle:"\u516c\u5171\u5c5e\u6027",keyword:"style",type:"TextStyle",pro:"\u6587\u672c\u6837\u5f0f",link:"/flutter/style/TextStyle"},{keyword:"strutStyle",type:"StrutStyle",pro:"\u652f\u6491\u6837\u5f0f",link:"/flutter/style/StrutStyle"},{keyword:"textAlign",type:"TextAlign",pro:"\u5bf9\u9f50\u65b9\u5f0f",code:[{path:"flutter/widget/text/TextAlign"}]},{keyword:"softWrap",type:"bool",pro:"\u81ea\u52a8\u6362\u884c"},{keyword:"textScaleFactor",type:"double",pro:"\u5b57\u4f53\u663e\u793a\u500d\u7387"},{keyword:"overflow",type:"TextOverflow",pro:"\u5904\u7406\u6ea2\u51fa\u6587\u5b57, \u4e0e maxLines \u914d\u5408\u4f7f\u7528",code:[{path:"flutter/widget/text/TextOverflow"}]},{keyword:"maxLines",type:"int",pro:"\u6700\u5927\u884c\u6570, \u4e0e overflow \u914d\u5408\u4f7f\u7528"},{keyword:"textDirection",type:"TextDirection",pro:"\u6392\u5217\u987a\u5e8f",code:[{path:"flutter/widget/text/TextDirection"}]},{keyword:"textWidthBasis",type:"TextWidthBasis",pro:"\u6587\u672c\u957f\u4f9d\u636e",code:[{path:"flutter/widget/text/TextWidthBasis"}]},{keyword:"semanticsLabel",type:"String",pro:"\u6587\u672c\u7684\u8bed\u4e49\u63cf\u8ff0",code:[{path:"flutter/public/semanticsLabel"}]},{keyword:"locale",type:"Locale",pro:"\u8bed\u8a00",link:"/flutter/style/locale/Locale"}]},u=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:m},this.props))}}]),t}(i.a.Component)},557:function(e,t,a){"use strict";a(558);var r=a(559),n=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),m=a(574),u=a(575),d=a(576),y=a(577),h=function(e){var t=e.children,a=e.hasArrow,r=e.show,n=e.order,l=e.hasClick,s=e.onClick;e.hasGo;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||l?"cp tap":""),style:{userSelect:"none"},onClick:s},p.a.createElement("div",{className:"fxm"},n?p.a.createElement("span",null,n,"\u3001"):p.a.createElement(m.a,{className:"f14"}),p.a.createElement("div",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},r?p.a.createElement(u.a,{className:"f24"}):p.a.createElement(d.a,{className:"f24"})),l&&p.a.createElement("span",{className:"c0"},p.a.createElement(y.a,{className:"f24"})))},f=window.$http,w=window.$fn,k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={data:[]},a.getText=function(e){f.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){f.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return w.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component),b=a(578);a.d(t,"a",function(){return E});var x=window.$fn,E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(x.hasArray(t)||n)&&a.setState({show:!a.state.show}),x.isString(r)&&a.props.history.push(r)},a.onShow=function(){x.showPhone(a.props.url)},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.type,l=t.children,s=t.pro,c=t.keyword,o=t.code,i=t.isGray,m=t.link,u=t.url,d=t.order,y=t.noOrder,f=t.isValue,w=t.hasShow,E=this.state.show;return p.a.createElement("section",null,p.a.createElement(h,{show:E,hasArrow:x.hasArray(o)||w,hasClick:x.isString(m),order:y?null:d,onClick:this.onClick},c&&p.a.createElement("span",{className:"title-keyword ar f16 ".concat(i?"gray":""," ").concat(f?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:x.stop},c),a&&p.a.createElement("span",{className:"c0"},a),c&&!f?p.a.createElement("i",{className:"mlr10"},":"):p.a.createElement("i",{className:"ml10"}),n&&c&&[p.a.createElement(b.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},n)],s&&p.a.createElement("span",{className:"g6 f13",key:2},s)),void 0!==E&&(x.hasArray(o)||w)?p.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:x.hasArray(m)?"10px 0 5px":"10px 0"},onClick:x.stop},x.hasArray(o)&&o.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(k,{type:"text",url:e.path}))}),l,u&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),x.hasArray(m)&&p.a.createElement("div",{className:"mt10"},m.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(p.a.Component)},560:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(558);var r=a(559),n=a(4),l=a(5),s=a(7),c=a(6),o=a(8),i=a(0),p=a.n(i),m=a(88),u=a(557),d=a(578),y=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,n=function(t){var a=t.data,n=t.index;return p.a.createElement("div",null,y.hasObject(a)&&a.keyword&&p.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},n&&p.a.createElement("b",{className:"f16 c1"},n,"\u3001"),a.grayText&&p.a.createElement("span",{className:"mr5 g9"},a.grayText),p.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[p.a.createElement(d.a,{key:"arrow",className:"ml10",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],p.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return y.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),p.a.createElement("div",null,y.hasArray(a.data)&&a.data.map(function(t,a){return[t.title?p.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 bbor1"},t.title,":"):null,t.deviceTitle?p.a.createElement("h2",{key:"c"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,p.a.createElement(u.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return p.a.createElement(m.a,{className:"page-content"},a?t.data.map(function(e,t){return p.a.createElement(n,{key:t,data:e,index:t+1})}):p.a.createElement(n,{data:t}))}}]),t}(p.a.Component)}}]);