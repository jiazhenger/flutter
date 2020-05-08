import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class BorderSideMerge extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    BorderSideMerge({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BorderSideMerge> {
    // 组件
    Widget MyWidget () => Container(
        height: 50,
        decoration:BoxDecoration(
            color:Colors.yellow,
            border: Border(
                bottom: BorderSide.merge(
                    BorderSide(width: 5.0, color: Colors.red, style: BorderStyle.solid),
                    BorderSide(width: 5.0, color: Colors.red, style: BorderStyle.solid)
                ),
            )
        ),
    );
    // page
    @override
    Widget build(BuildContext context) {
        var x = BorderSide.canMerge(
            BorderSide(width: 5.0, color: Colors.red, style: BorderStyle.solid),
            BorderSide(width: 5.0, color: Colors.blue, style: BorderStyle.solid)
        );
        print(x);
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