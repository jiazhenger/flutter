(window["webpackJsonph5-operation"]=window["webpackJsonph5-operation"]||[]).push([[19],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(9),r=a(10),c=a(12),o=a(11),l=a(13),i=a(0),s=a.n(i),m=a(71),p=a(309),u=a(313),d=window.$fn,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){d.setTitle("\u5916\u8865\u4e01"),d.hidePhone()}},{key:"render",value:function(){var e=this;return s.a.createElement(m.a,{className:"page-content"},s.a.createElement(p.a,{order:1,keyword:"margin-top",pro:"\u4e0a\u8fb9\u8ddd",code:[{path:"css/style/margin/margin-top"}]},s.a.createElement(u.a,{getValue:function(t){return e.setState({marginTop:t})},data:{radio:["auto","10px","20px","30px"]}},s.a.createElement("div",{style:{height:"5px",background:"red"}}),s.a.createElement("div",{className:"p10",style:{height:"20px",background:"yellow",marginTop:this.state.marginTop}}))),s.a.createElement(p.a,{order:2,keyword:"margin-right",pro:"\u53f3\u8fb9\u8ddd",code:[{path:"css/style/margin/margin-right"}]},s.a.createElement(u.a,{getValue:function(t){return e.setState({marginRight:t})},data:{radio:["auto","50px","100px","50%"]}},s.a.createElement("div",{className:"p10",style:{height:"20px",background:"yellow",marginRight:this.state.marginRight}}))),s.a.createElement(p.a,{order:3,keyword:"margin-bottom",pro:"\u4e0b\u8fb9\u8ddd",code:[{path:"css/style/margin/margin-bottom"}]},s.a.createElement(u.a,{getValue:function(t){return e.setState({marginBottom:t})},data:{radio:["auto","10px","20px","30px"]}},s.a.createElement("div",{className:"p10",style:{height:"20px",background:"yellow",marginBottom:this.state.marginBottom}}),s.a.createElement("div",{style:{height:"5px",background:"red"}}))),s.a.createElement(p.a,{order:4,keyword:"margin-left",pro:"\u5de6\u8fb9\u8ddd",code:[{path:"css/style/margin/margin-left"}]},s.a.createElement(u.a,{getValue:function(t){return e.setState({marginLeft:t})},data:{radio:["auto","50px","100px","50%"]}},s.a.createElement("div",{className:"p10",style:{height:"20px",background:"yellow",marginLeft:this.state.marginLeft}}))),s.a.createElement(p.a,{keyword:"margin",pro:"[margin-top] [margin-right] [margin-bottom] [margin-left]",code:[{path:"css/style/margin/margin"}]},s.a.createElement(u.a,{getValue:function(t){return e.setState({margin:t})},data:{radio:["20px","50px","10%","10px 20px 30px 40px","20px 0","0 20px","10px 20px 30px"]}},s.a.createElement("div",{style:{height:"20px",background:"yellow",margin:this.state.margin}})),s.a.createElement(u.a,{getValue:function(t){return e.setState({margin2:t})},data:{radio:["0","auto","0 auto"]}},s.a.createElement("div",{style:{width:"200px",height:"20px",background:"yellow",margin:this.state.margin2}}))))}}]),t}(s.a.Component)},309:function(e,t,a){"use strict";a(311);var n=a(312),r=(a(101),a(21)),c=a(9),o=a(10),l=a(12),i=a(11),s=a(13),m=a(0),p=a.n(m),u=function(e){var t=e.children,a=e.hasArrow,n=e.show,c=e.order,o=e.onClick;return p.a.createElement("div",{className:"f14 bbor1 ptb10 fxmj ".concat(a?"cp":""),style:{userSelect:"none"},onClick:o},p.a.createElement("div",{className:"fxm"},c?p.a.createElement("span",null,c,"\u3001"):p.a.createElement(r.a,{className:"f14",type:"share-alt"}),p.a.createElement("span",{className:"ml10"},t)),a&&p.a.createElement("span",{className:"c0"},p.a.createElement(r.a,{className:"f24",type:n?"up-circle":"down-circle"})))},d=window.$http,h=window.$fn,g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getText=function(e){d.getText(e).then(function(e){a.setState({data:e.split("\n")})})},a.getDart=function(e){d.getDart(e).then(function(e){a.setState({data:e.split("\n")})})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.data,t=this.props,a=t.type,n=t.url;return h.hasArray(this.state.data)||this.props.async||("text"===a?this.getText(n):"dart"===a&&this.getDart(n)),p.a.createElement("section",null,e.length>0?p.a.createElement("div",{className:"code-list-container ".concat(window.$fn.platform().isPc?"":"mobile")},p.a.createElement("dl",{className:"code-number"},e.map(function(e,t){return p.a.createElement("dt",{key:t},t+1)})),p.a.createElement("dl",{className:"code-content"},e.map(function(e,t){return p.a.createElement("dd",{key:t,dangerouslySetInnerHTML:{__html:e}})}))):p.a.createElement("div",{className:"p20 g9"},"\u6b63\u5728\u52a0\u8f7d\u4e2d......"))}}]),t}(p.a.Component);a.d(t,"a",function(){return f});var y=window.$fn,f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onClick=function(){a.setState({show:!a.state.show})},a.onShow=function(){y.showPhone(a.props.url)},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.title,c=t.type,o=t.children,l=t.pro,i=t.keyword,s=t.code,m=t.isGray,d=t.link,h=t.url,f=t.order,E=t.noOrder,b=this.state.show;return p.a.createElement("section",null,p.a.createElement(u,{show:b,hasArrow:!0,order:E?null:f,onClick:this.onClick},i&&p.a.createElement("span",{className:"title-keyword c0 ar f16 ".concat(m?"gray":"")},i),a&&p.a.createElement("span",{className:"c0"},a),l&&(a||i)?p.a.createElement("i",{className:"mlr10 g9",key:0},":"):null,c&&[p.a.createElement(r.a,{key:"arrow",type:"arrow-right",style:{color:"#999",fontSize:"12px"}}),p.a.createElement("span",{key:"type",className:"f14 mlr10 c0",style:{color:"pink"}},c)],l&&p.a.createElement("span",{className:"g6 f13",key:2},l)),p.a.createElement("div",{className:"rel bbor1 ".concat(b?"":"dn"),style:{padding:y.hasArray(d)?"10px 0 5px":"10px 0"},onClick:y.stop},void 0!==b&&y.hasArray(s)&&s.map(function(e,t){return p.a.createElement("div",{key:t,className:"sub-title-wrap"},e.title&&p.a.createElement("h2",{className:"sub-title ptb10 b",key:"title"},e.title,": "),p.a.createElement(g,{type:"text",url:e.path}))}),o,h&&p.a.createElement("div",{className:"abs",style:{right:"2px",top:"12px"}},p.a.createElement(n.a,{className:"ml5",type:"primary",size:"small",onClick:this.onShow,style:{fontSize:"12px"}},"\u9884\u89c8")),y.hasArray(d)&&p.a.createElement("div",{className:"mt10"},d.map(function(t,a){return p.a.createElement(n.a,{key:a,className:"mr5 mb5",size:"small",onClick:function(){return e.props.history.push(t.url)},style:{fontSize:"12px"}},p.a.createElement("span",{className:"c0"},t.title))}))))}}]),t}(p.a.Component)},313:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(314);var n=a(315),r=a(28),c=a(9),o=a(10),l=a(12),i=a(11),s=a(13),m=a(0),p=a.n(m),u=window.$fn,d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.onChange=function(e){var t=e.target.value;a.setState({value:t},function(){a.props.getValue&&a.props.getValue(t)})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this.state.value,a=this.props,c=a.data,o=a.children,l=a.styleName;return p.a.createElement("section",{className:"bor1 r5px p10 mtb10"},p.a.createElement("div",{className:"bbor1 pb10 mb10",style:(e={},Object(r.a)(e,l,t),Object(r.a)(e,"color","#888"),e)},o||"\u6d4b\u8bd5\u6837\u4f8b test case"),p.a.createElement(n.a.Group,{onChange:this.onChange,value:t},u.hasArray(c.radio)&&c.radio.map(function(e,t){return p.a.createElement(n.a,{key:t,value:e},p.a.createElement("span",{className:"f12 ar",style:{color:"green"}},e))})))}}]),t}(p.a.Component)}}]);