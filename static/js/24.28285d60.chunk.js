(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[24],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(9),r=a(10),c=a(12),l=a(11),s=a(13),o=a(0),i=a.n(o),m=a(71),u=a(277),p=a(280),d=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){d.setTitle("\u5c3a\u5bf8"),d.hidePhone()}},{key:"render",value:function(){var e=this;return i.a.createElement(m.a,{className:"page-content"},i.a.createElement(u.a,{order:1,keyword:"width",pro:"\u5bbd\u5ea6",code:[{path:"css/style/size/width"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({width:t})},data:{radio:["auto","100px","200px","50%","100%"]}},i.a.createElement("div",{style:{height:"50px",background:"yellow",width:this.state.width}}))),i.a.createElement(u.a,{order:2,keyword:"min-width",pro:"\u6700\u5c0f\u5bbd\u5ea6",code:[{path:"css/style/size/min-width"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({minWidth:t})},data:{radio:["auto","100px","200px","50%","100%"]}},i.a.createElement("div",{style:{display:"inline-block",height:"50px",background:"yellow",minWidth:this.state.minWidth}},"\u6700\u5c0f\u5bbd\u5ea6\u6700\u5c0f\u5bbd\u5ea6\u6700\u5c0f\u5bbd\u5ea6"))),i.a.createElement(u.a,{order:3,keyword:"max-width",pro:"\u6700\u5927\u5bbd\u5ea6",code:[{path:"css/style/size/max-width"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({maxWidth:t})},data:{radio:["100px","200px","50%","100%"]}},i.a.createElement("div",{style:{display:"inline-block",height:"50px",background:"yellow",maxWidth:this.state.maxWidth}},"\u6700\u5c0f\u5bbd\u5ea6\u6700\u5c0f\u5bbd\u5ea6\u6700\u5c0f\u5bbd\u5ea6"))),i.a.createElement(u.a,{order:4,keyword:"height",pro:"\u9ad8\u5ea6",code:[{path:"css/style/size/height"}]}),i.a.createElement(u.a,{order:5,keyword:"min-height",pro:"\u6700\u5c0f\u9ad8\u5ea6",code:[{path:"css/style/size/min-height"}]}),i.a.createElement(u.a,{order:6,keyword:"max-height",pro:"\u6700\u5927\u9ad8\u5ea6",code:[{path:"css/style/size/max-height"}]}),i.a.createElement(u.a,{keyword:"calc()",pro:"\u54cd\u5e94\u5f0f\u8ba1\u7b97\u51fd\u6570",code:[{path:"css/style/size/calc"}]},i.a.createElement(p.a,{getValue:function(t){return e.setState({calc:"calc(100% - "+t+")"})},data:{radio:["100px","200px","300px","50%"]}},i.a.createElement("div",{style:{height:"50px",background:"yellow",width:this.state.calc}}))))}}]),t}(i.a.Component)},276:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(9),r=a(10),c=a(12),l=a(11),s=a(13),o=a(0),i=a.n(o),m=window.$http,u=window.$fn,p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={data:[]},a.getText=function(e){m.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){m.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return u.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),i.a.createElement("section",null,e.length>0?i.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},i.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return i.a.createElement("dt",{key:t},t+1)})),i.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return i.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):i.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(i.a.Component)},277:function(e,t,a){"use strict";a(278);var n=a(279),r=(a(101),a(21)),c=a(9),l=a(10),s=a(12),o=a(11),i=a(13),m=a(0),u=a.n(m),p=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,l=e.onClick;return u.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),onClick:l},u.a.createElement("div",{className:"fxm"},c?u.a.createElement("span",null,c,"\u3001"):u.a.createElement(r.a,{className:"f14",type:"share-alt"}),u.a.createElement("span",{className:"ml10"},t)),a&&u.a.createElement("span",{className:"c0"},u.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},d=a(276);a.d(t,"a",function(){return y});var h=window.$fn,y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){h.showPhone(a.props.url)},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,l=t.children,s=t.pro,o=t.keyword,i=t.code,m=t.isGray,y=t.link,f=t.url,w=t.order,E=t.noOrder,b=this.state.show;return u.a.createElement("section",null,u.a.createElement(p,{show:b,hasArrow:!0,order:E?null:w,onClick:this.onClick},o&&u.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(m?"gray":""),style:{cursor:"text"}},o),a&&u.a.createElement("span",{className:"c0"},a),s&&(a||o)?u.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,c&&[u.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),u.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],s&&u.a.createElement("span",{className:"g6 f13",key:2},s)),u.a.createElement("div",{className:"rel bbor1 ".concat(b?"":"dn"),style:{padding:h.hasArray(y)?"10px 0 5px":"10px 0"}},void 0!==b&&h.hasArray(i)&&i.map(function(e,t){return u.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&u.a.createElement("h2",{className:"sub-title ptb10",key:"title"},e.title,": "),u.a.createElement(d.a,{type:"text",url:e.path}))}),l,f&&u.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},u.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),h.hasArray(y)&&u.a.createElement("div",{className:"mt10"},y.map(function(t,a){return u.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},"\u5173\u8054 ",u.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(u.a.Component)},280:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(282);var n=a(283),r=a(28),c=a(9),l=a(10),s=a(12),o=a(11),i=a(13),m=a(0),u=a.n(m),p=window.$fn,d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,l=a.children,s=a.styleName;return u.a.createElement("section",{className:"bor1 r5px p10 mtb10"},u.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,s,t),Object(r.a)(e,"color","#888"),e)},l||"\u6d4b\u8bd5\u6837\u4f8b test case"),u.a.createElement(n.a.Group,{onChange:this.onChange,value:t},p.hasArray(c.radio)&&c.radio.map(function(e,t){return u.a.createElement(n.a,{key:t,value:e},u.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(u.a.Component)}}]);