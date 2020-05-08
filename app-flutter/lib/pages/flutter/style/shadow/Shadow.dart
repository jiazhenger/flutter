import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class ShadowPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ShadowPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ShadowPage> {
    // 组件
    Widget MyWidget () => Container(
        height: 50,
        margin: EdgeInsets.only(bottom:30.0,top:30.0),
        alignment:Alignment.center,
        child: Text('文字阴影',style: TextStyle(
            shadows: [
                Shadow(color: Colors.red, offset:Offset(10.0, 10.0), blurRadius: 5.0),
                Shadow(color: Colors.red, offset:Offset(20.0, 10.0), blurRadius: 5.0)
            ]
        ))
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