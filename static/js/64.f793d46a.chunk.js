(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[64],{208:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var r=a(9),o=a(10),l=a(12),n=a(11),c=a(13),i=a(0),s=a.n(i),y=a(307),p={title:"\u6587\u672c\u6837\u5f0f",data:[{deviceTitle:"\u989c\u8272\u8bbe\u7f6e",keyword:"color",type:"Color",pro:"\u6587\u672c\u989c\u8272",code:[{path:"flutter/style/TextStyle/color/color"}],link:[{title:"Color",url:"/flutter/style/Colors"}]},{keyword:"backgroundColor",pro:"\u80cc\u666f\u989c\u8272",type:"Color",code:[{path:"flutter/style/TextStyle/color/backgroundColor"}],link:[{title:"Color",url:"/flutter/style/Colors"}]},{keyword:"foreground",type:"Paint",pro:"\u524d\u666f",code:[{path:"flutter/style/TextStyle/color/foreground"}],link:[{title:"Color",url:"/flutter/style/Colors"},{title:"Paint( )",url:"/flutter/style/Colors"},{title:"ui.Gradient.linear( )",url:"/flutter/style/Colors"}]},{keyword:"background",type:"Paint",pro:"\u80cc\u666f",code:[{path:"flutter/style/TextStyle/color/background"}],link:[{title:"Color",url:"/flutter/style/Colors"},{title:"Paint( )",url:"/flutter/style/Colors"},{title:"ui.Gradient.linear( )",url:"/flutter/style/Colors"}]},{deviceTitle:"\u5b57\u4f53\u8bbe\u7f6e",type:"String",keyword:"fontFamily",pro:"\u5b57\u4f53",code:[{path:"flutter/style/TextStyle/font/fontFamily"},{title:"\u81ea\u5b9a\u4e49\u5b57\u4f53 ",path:"flutter/style/TextStyle/font/fontFamily-my"}]},{keyword:"fontFamilyFallback",type:"List<String>",pro:"\u5b57\u4f53\u5217\u8868",code:[{path:"flutter/style/TextStyle/font/fontFamilyFallback"}]},{keyword:"fontSize",type:"double",pro:"\u5b57\u4f53\u5927\u5c0f",code:[{path:"flutter/style/TextStyle/font/fontSize"}]},{keyword:"fontWeight",type:"FontWeight",pro:"\u52a0\u7c97",code:[{path:"flutter/style/TextStyle/font/fontWeight"}]},{keyword:"fontStyle",type:"FontStyle",pro:"\u503e\u659c",code:[{path:"flutter/style/TextStyle/font/fontStyle"}]},{keyword:"height",type:"double",pro:"\u884c\u9ad8",code:[{path:"flutter/style/TextStyle/font/height"}]},{keyword:"package",type:"String",pro:"\u5f15\u7528\u5b57\u4f53\u5305",code:[{path:"flutter/style/TextStyle/font/package"}]},{keyword:"fontFeatures",type:"List<FontFeature>",pro:"\u5f71\u54cd\u5b57\u4f53\u7684\u5b57\u4f53\u7279\u6027\u5217\u8868",code:[{path:"flutter/style/TextStyle/font/fontFeatures"}]},{deviceTitle:"\u6587\u672c\u95f4\u8ddd",type:"double",keyword:"letterSpacing",pro:"\u5b57\u7b26\u95f4\u8ddd",code:[{path:"flutter/style/TextStyle/spacing/letterSpacing"}]},{keyword:"wordSpacing",type:"double",pro:"\u5355\u8bcd\u95f4\u8ddd",code:[{path:"flutter/style/TextStyle/spacing/letterSpacing"}]},{deviceTitle:"\u6587\u672c\u88c5\u9970",type:"TextDecoration",keyword:"decoration",pro:"\u88c5\u9970",code:[{path:"flutter/style/TextStyle/decoration/decoration"}]},{keyword:"decorationColor",type:"Color",pro:"\u88c5\u9970\u5668\u989c\u8272",code:[{path:"flutter/style/TextStyle/decoration/decorationColor"}],link:[{title:"Color",url:"/flutter/style/Colors"}]},{keyword:"decorationStyle",type:"TextDecorationStyle",pro:"\u88c5\u9970\u5668\u6837\u5f0f",code:[{path:"flutter/style/TextStyle/decoration/decorationStyle"}]},{keyword:"decorationThickness",type:"double",pro:"\u88c5\u9970\u5668\u539a\u5ea6",code:[{path:"flutter/style/TextStyle/decoration/decorationThickness"}]},{deviceTitle:"\u5176\u5b83",type:"TextBaseline",keyword:"textBaseline",pro:"\u6587\u672c\u7ed8\u5236\u57fa\u7ebf",code:[{path:"flutter/style/TextStyle/textBaseline"}]},{keyword:"shadows",type:"List<Shadow>",pro:"\u9634\u5f71",code:[{path:"flutter/style/TextStyle/shadows"}],link:[{title:"Shadow( )",url:"/flutter/style-common/Shadow"}]},{keyword:"locale",type:"Locale",pro:"\u8bed\u8a00",code:[{path:"flutter/style/TextStyle/locale"}]},{keyword:"inherit",type:"bool",pro:"\u7ee7\u627f",code:[{path:"flutter/style/TextStyle/inherit"}]},{keyword:"debugLabel",type:"String",pro:"\u6587\u672c\u6837\u5f0f\u7684\u53ef\u8bfb\u63cf\u8ff0",code:[{path:"flutter/style/TextStyle/debugLabel"}]}]},u=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(n.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(y.a,Object.assign({data:p},this.props))}}]),t}(s.a.Component)},303:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var r=a(9),o=a(10),l=a(12),n=a(11),c=a(13),i=a(0),s=a.n(i),y=window.$http,p=window.$fn,u=function(e){function t(){var e,a;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(n.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getText=function(e){y.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){y.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,r=t.url;return p.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(r):"dart"===a&&this.getDart(r)),s.a.createElement("section",null,e.length>0?s.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},s.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return s.a.createElement("dt",{key:t},t+1)})),s.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return s.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):s.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(s.a.Component)},304:function(e,t,a){"use strict";a(305);var r=a(306),o=(a(101),a(21)),l=a(9),n=a(10),c=a(12),i=a(11),s=a(13),y=a(0),p=a.n(y),u=function(e){var t=e.children,a=e.hasArrow,r=e.show,l=e.order,n=e.onClick;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:n},p.a.createElement("div",{className:"fxm"},l?p.a.createElement("span",null,l,"\u3001"):p.a.createElement(o.a,{className:"f14",type:"share-alt"}),p.a.createElement("span",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(o.a,{className:"f24",type:r?"up-circle":"down-circle"})))},d=a(303);a.d(t,"a",function(){return h});var f=window.$fn,h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){f.showPhone(a.props.url)},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,l=t.type,n=t.children,c=t.pro,i=t.keyword,s=t.code,y=t.isGray,h=t.link,m=t.url,k=t.order,w=t.noOrder,b=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:b,hasArrow:!0,order:w?null:k,onClick:this.onClick},i&&p.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(y?"gray":"")},i),a&&p.a.createElement("span",{className:"c0"},a),c&&(a||i)?p.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,l&&[p.a.createElement(o.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},l)],c&&p.a.createElement("span",{className:"g6 f13",key:2},c)),p.a.createElement("div",{className:"rel bbor1 ".concat(b?"":"dn"),style:{padding:f.hasArray(h)?"10px 0 5px":"10px 0"},onClick:f.stop},void 0!==b&&f.hasArray(s)&&s.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(d.a,{type:"text",url:e.path}))}),n,m&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(r.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),f.hasArray(h)&&p.a.createElement("div",{className:"mt10"},h.map(function(t,a){return p.a.createElement(r.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(p.a.Component)},307:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(9),o=a(10),l=a(12),n=a(11),c=a(13),i=a(0),s=a.n(i),y=a(71),p=a(304),u=window.$fn,d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(n.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.$fn.setTitle(this.props.data.title)}},{key:"render",value:function(){var e=this,t=this.props.data.data;return s.a.createElement(y.a,{className:"page-content"},u.hasArray(t)&&t.map(function(t,a){return[t.deviceTitle?s.a.createElement("h2",{key:"a"+a,className:"sub-title ptb10 c1 bbor1"},t.deviceTitle,":"):null,s.a.createElement(p.a,Object.assign({key:"b"+a,type:t.type,order:a+1,noOrder:t.noOrder,keyword:t.keyword,pro:t.pro,code:t.code,link:t.link,url:t.url,isGray:t.isGray},e.props))]}))}}]),t}(s.a.Component)}}]);