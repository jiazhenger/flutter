import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class SweepGradientPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    SweepGradientPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<SweepGradientPage> {
    // 组件
    Widget MyWidget () => Container(
        height: 50,
        margin: EdgeInsets.only(bottom:30.0,top:10.0),
        alignment:Alignment.center,
        decoration:BoxDecoration(
            shape:BoxShape.circle,
            gradient: SweepGradient(
                colors: [Colors.red,Colors.yellow,Colors.blue],
                center: Alignment.center,
                startAngle: 0.5,
                endAngle: 0.0,
                stops: [0.0,0.0,0.0],
                tileMode:TileMode.clamp
            )
        ),
        child: Text('123132'),
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