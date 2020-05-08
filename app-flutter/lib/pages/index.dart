import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import '../config.dart';
import 'dart:math' as math;
// ======================================================================================================== Widget 控件
class IndexPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    IndexPage({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<IndexPage> {
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding: EdgeInsets.all(10.0),
                children: <Widget>[
                    RaisedButton(child: Text('Button'),onPressed: (){
                        Navigator.pushNamed(context,'/SweepGradientPage');
                    })
                ]
            )
        );
    }
}