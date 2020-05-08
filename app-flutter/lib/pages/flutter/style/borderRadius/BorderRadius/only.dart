import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class BorderRadiusOnly extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    BorderRadiusOnly({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BorderRadiusOnly> {
    // 组件
    Widget MyWidget ({double topLeft,double topRight,double bottomLeft,double bottomRight}) => Container(
        height: 80,
        margin: EdgeInsets.only(bottom:10.0),
        alignment:Alignment.center,
        decoration:BoxDecoration(
            color:Colors.red,
            borderRadius: BorderRadius.only(topLeft: Radius.circular(topLeft),topRight: Radius.circular(topRight),bottomLeft: Radius.circular(bottomLeft),bottomRight: Radius.circular(bottomRight),),
            border: Border.all(width: 5.0, color: Colors.red, style: BorderStyle.solid)
        ),
        child: Text('topLeft=${topLeft} topRight=${topRight} bottomLeft=${bottomLeft} bottomRight=${bottomRight}', style:TextStyle(color: Colors.white)),
    );
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    MyWidget(topLeft: 10.0, topRight: 20.0, bottomLeft: 30.0, bottomRight: 50.0),
                ],
            )
        );
    }
}