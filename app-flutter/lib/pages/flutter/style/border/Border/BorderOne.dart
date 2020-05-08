import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class BorderOne extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    BorderOne({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BorderOne> {
    // 组件
    Widget MyWidget () => Container(
        height: 50,
        decoration:BoxDecoration(
            color:Colors.yellow,
            border: Border(
                left: BorderSide(width: 5.0, color: Colors.red, style: BorderStyle.solid),
                top: BorderSide(width: 5.0, color: Colors.blue, style: BorderStyle.solid),
                right: BorderSide(width: 5.0, color: Colors.black, style: BorderStyle.solid),
                bottom: BorderSide(width: 5.0, color: Colors.purple, style: BorderStyle.solid),
            )
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
                    MyWidget(),
                ],
            )
        );
    }
}