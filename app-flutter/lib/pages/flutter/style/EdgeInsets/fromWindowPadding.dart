import 'package:flutter/material.dart';
//import 'dart:ui';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class EdgeInsetsFromWindowPadding extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    EdgeInsetsFromWindowPadding({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<EdgeInsetsFromWindowPadding> {
    // 组件
    Widget MyWidget ({padding,double value:0.0, String text}) => Container(
        color:Colors.yellow,
//        padding: EdgeInsets.fromWindowPadding(padding,value),
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
                    MyWidget(text:'web 不支持'),
                ],
            )
        );
    }
}