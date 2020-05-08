import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class BorderRadiusAll extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    BorderRadiusAll({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BorderRadiusAll> {
    // 组件
    Widget MyWidget (Radius radius) => Container(
        height: 50,
        margin: EdgeInsets.only(bottom:10.0),
        alignment:Alignment.center,
        decoration:BoxDecoration(
            color:Colors.red,
            borderRadius: BorderRadius.all(radius),
            border: Border.all(width: 5.0, color: Colors.red, style: BorderStyle.solid)
        ),
        child: Text(radius.toString(), style:TextStyle(color: Colors.white)),
    );
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    MyWidget(Radius.circular(10.0)),
                    MyWidget(Radius.circular(50.0)),
                    MyWidget(Radius.elliptical(10.0,20.0)),
                    MyWidget(Radius.lerp(Radius.elliptical(10.0,20.0),Radius.circular(20.0),50.0)),
                ],
            )
        );
    }
}