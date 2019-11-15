import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class FlowPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    FlowPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}
class TestFlowDelegate extends FlowDelegate {
    EdgeInsets margin = EdgeInsets.zero;	// magin
    int num = 2;								// 每排元素个数

    // 构造函数
    TestFlowDelegate({this.margin,this.num});

    //child的绘制控制代码，可以调整尺寸位置，写起来比较的繁琐
    @override
    void paintChildren(FlowPaintingContext context) {
        var x = margin.left;
        var y = margin.top;
        for (int i = 0; i < context.childCount; i++) {
            var w = context.getChildSize(i).width + x + margin.right;
            var n = this.num is int ? this.num : 2;
            if((i+1)% n == 0){
                w = context.getChildSize(i).width + x;
            }

            if (w < context.size.width) {
                context.paintChild(i,transform: new Matrix4.translationValues(x, y, 0.0));
                x = w + margin.left;
            } else {
                x = margin.left;
                y += context.getChildSize(i).height + margin.top + margin.bottom;
                context.paintChild(i,transform: new Matrix4.translationValues(x, y, 0.0));
                x += context.getChildSize(i).width + margin.left + margin.right;
            }
        }
    }
    // 是否需要重绘
    @override
    bool shouldRepaint(FlowDelegate oldDelegate) {
        return oldDelegate != this;
    }
}
class _PageState extends State<FlowPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title:Config.appBar(widget.title),
                centerTitle:true,
            ),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Container(
                        height: 200.0,
                        color: Colors.black26,
                        child: Flow(
                            delegate: TestFlowDelegate(margin: EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 10.0),num:3),
                            children: <Widget>[
                                Container(width:100.0,height: 50.0,color: Colors.red),
                                Container(width:100.0,height: 50.0,color: Colors.yellow),
                                Container(width:100.0,height: 50.0,color: Colors.blue),
                                Container(width:100.0,height: 50.0,color: Colors.black),
                                Container(width:100.0,height: 50.0,color: Colors.pink),
                                Container(width:100.0,height: 50.0,color: Colors.green)
                            ],
                        ),
                    ),
                ],
            )
        );
    }
}