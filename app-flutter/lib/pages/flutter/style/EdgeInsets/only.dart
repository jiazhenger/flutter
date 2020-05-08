import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class EdgeInsetsOnly extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    EdgeInsetsOnly({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<EdgeInsetsOnly> {
    // 组件
    Widget MyWidget ({double left:0.0,double top:0.0,double right:0.0,double bottom:0.0}) => Container(
        color:Colors.yellow,
        padding: EdgeInsets.only(left:left,top:top,right:right,bottom: bottom),
        child: Container(
            color:Colors.red,
            height:50.0,
            alignment:Alignment.center,
            child: Text('${left != 0.0 ?'left=$left':''} ${top != 0.0 ?'top=$left':''} ${right != 0.0 ?'right=$right':''} ${bottom != 0.0 ?'bottom=$bottom':''}', style:TextStyle(color: Colors.white)),
        ),
    );
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    MyWidget(left:5.0),
                    Divider(),
                    MyWidget(top:10.0),
                    Divider(),
                    MyWidget(right:15.0),
                    Divider(),
                    MyWidget(bottom:20.0),
                    Divider(),
                    MyWidget(left:5.0,top:10.0,right:15.0,bottom:20.0),
                    Divider()
                ],
            )
        );
    }
}