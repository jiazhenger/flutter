import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class EdgeInsetsLerp extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    EdgeInsetsLerp({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<EdgeInsetsLerp> {
    // 组件
    Widget MyWidget ({EdgeInsets a,EdgeInsets b,double value:0.0, String text}) => Container(
        color:Colors.yellow,
        padding: EdgeInsets.lerp(a,b,value),
        child: Container(
            color:Colors.red,
            height:50.0,
            alignment:Alignment.center,
            child: Text(text, style:TextStyle(color: Colors.white)),
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
                    MyWidget(a:EdgeInsets.all(20.0),b:EdgeInsets.all(20.0),text:'all(20) all(20) 0.0'),
                ],
            )
        );
    }
}