import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class EdgeInsetsAll extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    EdgeInsetsAll({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<EdgeInsetsAll> {
    // 组件
    Widget MyWidget (double padding) => Container(
        color:Colors.yellow,
        padding: EdgeInsets.all(padding),
        child: Container(
            color:Colors.red,
            height:50.0,
            alignment:Alignment.center,
            child: Text(padding.toString(), style:TextStyle(color: Colors.white)),
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
                    MyWidget(5.0),
                    Divider(),
                    MyWidget(10.0),
                    Divider(),
                    MyWidget(15.0),
                    Divider(),
                    MyWidget(20.0),
                    Divider(),
                ],
            )
        );
    }
}