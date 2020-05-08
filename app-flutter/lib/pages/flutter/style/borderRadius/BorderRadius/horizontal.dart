import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class BorderRadiusHorizontal extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    BorderRadiusHorizontal({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BorderRadiusHorizontal> {
    // 组件
    Widget MyWidget (double left,double right) => Container(
        height: 50,
        margin: EdgeInsets.only(bottom:10.0),
        alignment:Alignment.center,
        decoration:BoxDecoration(
            color:Colors.red,
            borderRadius: BorderRadius.horizontal(left: Radius.circular(left),right: Radius.circular(right)),
            border: Border.all(width: 5.0, color: Colors.red, style: BorderStyle.solid)
        ),
        child: Text('left=${left} right=${right}', style:TextStyle(color: Colors.white)),
    );
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    MyWidget(20.0,50.0),
                    MyWidget(200.0,20.0),
                    MyWidget(50.0,20.0),
                ],
            )
        );
    }
}