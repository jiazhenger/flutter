(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[83],{226:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(5),n=a(6),l=a(8),o=a(7),c=a(9),s=a(0),i=a.n(s),p=a(372),y={title:"\u652f\u6491\u6837\u5f0f",keyword:"StrutStyle( )",isGroup:!0,data:[{title:"\u7981\u7528",keyword:"StrutStyle.disabled",type:"StrutStyle"},{title:"\u652f\u6491\u6837\u5f0f",keyword:"StrutStyle( )",type:"StrutStyle",data:[{type:"String",keyword:"fontFamily",pro:"\u5b57\u4f53",code:[{path:"flutter/style/TextStyle/font/fontFamily"},{title:"\u81ea\u5b9a\u4e49\u5b57\u4f53 ",path:"flutter/style/TextStyle/font/fontFamily-my"}]},{keyword:"fontFamilyFallback",type:"List<String>",pro:"\u5b57\u4f53\u5217\u8868",code:[{path:"flutter/style/TextStyle/font/fontFamilyFallback"}]},{keyword:"fontSize",type:"double",pro:"\u5b57\u4f53\u5927\u5c0f",code:[{path:"flutter/style/TextStyle/font/fontSize"}]},{keyword:"fontWeight",type:"FontWeight",pro:"\u52a0\u7c97",code:[{path:"flutter/style/TextStyle/font/fontWeight"}]},{keyword:"fontStyle",type:"FontStyle",pro:"\u503e\u659c",code:[{path:"flutter/style/TextStyle/font/fontStyle"}]},{keyword:"height",type:"double",pro:"\u884c\u9ad8"},{keyword:"forceStrutHeight",type:"double",pro:"\u5f3a\u5236\u9ad8\u5ea6"},{keyword:"leading",type:"double",pro:"\u81ea\u5b9a\u4e49\u591a\u4e2a\u5b57\u4f53\u5927\u5c0f"},{keyword:"debugLabel",type:"String",pro:"\u6587\u672c\u6837\u5f0f\u7684\u53ef\u8bfb\u63cf\u8ff0",code:[{path:"flutter/public/debugLabel"}]},{keyword:"package",type:"String",pro:"\u5305"}]},{title:"\u7981\u7528",keyword:"StrutStyle.fromTextStyle( )",type:"StrutStyle",data:[{keyword:"textStyle",type:"TextStyle",pro:"\u6587\u672c\u6837\u5f0f",isValue:!0,link:"/flutter/style/TextStyle"},{noOrder:!0,pro:"\u5176\u5b83\u5c5e\u6027\u540c\u4e0a"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,Object.assign({data:y},this.props))}}]),t}(i.a.Component)},369:function(e,t,a){"use strict";a(370);var r=a(371),n=(a(107),a(22)),l=a(5),o=a(6),c=a(8),s=a(7),i=a(9),p=a(0),y=a.n(p),u=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,o=e.hasClick,c=e.onClick;e.hasGo;return y.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a||o?"cp tap":""),style:{userSelect:"none"},onClick:c},y.a.createElement("div",{className:"fxm"},l?y.a.createElement("span",null,l,"\u3001"):y.a.createElement(n.a,{className:"f14",type:"share-alt"}),y.a.createElement("div",{className:"ml10"},t)),a&&y.a.createElement("span",{className:"c0"},y.a.createElement(n.a,{className:"f24",type:r?"up-circle":"down-circle"})),o&&y.a.createElement("span",{className:"c0"},y.a.createElement(n.a,{className:"f24",type:"right-circle"})))},m=window.$http,d=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return d.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),y.a.createElement("section",null,e.length>0?y.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},y.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return y.a.createElement("dt",{key:t},t+1)})),y.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return y.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):y.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(y.a.Component);a.d(t,"a",function(){return k});var f=window.$fn,k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onClick=function(){var e=a.props,t=e.code,r=e.link,n=e.hasShow;(f.hasArray(t)||n)&&a.setState({show:!a.state.show}),f.isString(r)&&a.props.history.push(r)},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,o=t.children,c=t.pro,s=t.keyword,i=t.code,p=t.isGray,m=t.link,d=t.url,k=t.order,w=t.noOrder,b=t.isValue,S=t.hasShow,E=this.state.show;return y.a.createElement("section",null,y.a.createElement(u,{show:E,hasArrow:f.hasArray(i)||S,hasClick:f.isString(m),order:w?null:k,onClick:this.onClick},s&&y.a.createElement("span",{className:"title-keyword ar f16 ".concat(p?"gray":""," ").concat(b?"c2":"c0"),style:{cursor:"text",userSelect:"text"},onClick:f.stop},s),a&&y.a.createElement("span",{className:"c0"},a),s&&!b?y.a.createElement("i",{className:"mlr10"},":"):y.a.createElement("i",{className:"ml10"}),l&&s&&[y.a.createElement(n.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),y.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],c&&y.a.createElement("span",{className:"g6 f13",key:2},c)),void 0!==E&&(f.hasArray(i)||S)?y.a.createElement("div",{className:"rel bbor1 ".concat(E?"":"dn"),style:{padding:f.hasArray(m)?"10px 0 5px":"10px 0"},onClick:f.stop},f.hasArray(i)&&i.map(function(e,t){return y.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&y.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),y.a.createElement(h,{type:"text",url:e.path}))}),o,d&&y.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},y.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(m)&&y.a.createElement("div",{className:"mt10"},m.map(function(t,a){return y.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},y.a.createElement("span",{className:"c0"},t.title))}))):null)}}]),t}(y.a.Component)},372:function(e,t,a){"use strict";a.d(t,"a",function(){return h});a(370);var r=a(371),n=(a(107),a(22)),l=a(5),o=a(6),c=a(8),s=a(7),i=a(9),p=a(0),y=a.n(p),u=a(77),m=a(369),d=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={},a.onShow=function(e,t){a.setState({show:!a.state.show})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data,a=t.isGroup,l=function(t){var a=t.data,l=t.index;return y.a.createElement("div",null,d.hasObject(a)&&a.keyword&&y.a.createElement("header",{className:"fxm",style:{borderBottom:"1px solid red",padding:"10px 0",flexWrap:"wrap"}},l&&y.a.createElement("b",{className:"f16 c1"},l,"\u3001"),a.grayText&&y.a.createElement("span",{className:"mr5 g9"},a.grayText),y.a.createElement("h2",{className:"b f16 mr10",style:{margin:0}},a.keyword),a.type&&a.keyword&&[y.a.createElement(n.a,{key:"arrow",className:"ml10",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),y.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},a.type)],y.a.createElement("h3",{className:"g9 ex",style:{margin:"0 0 0 15px"}},a.title),a.url&&y.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:function(){return d.showPhone(a.url)},style:{fontSize:"12px"}},"\u9884\u89c8")),y.a.createElement("div",null,d.hasArray(a.data)&&a.data.map(function(t,a){return[t.deviceTitle?y.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,y.a.createElement(m.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray,isValue:t.isValue},e.props))]})))};return y.a.createElement(u.a,{className:"page-content"},a?t.data.map(function(e,t){return y.a.createElement(l,{key:t,data:e,index:t+1})}):y.a.createElement(l,{data:t}))}}]),t}(y.a.Component)}}]);