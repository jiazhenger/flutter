import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class WrapPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    WrapPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<WrapPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title:Config.appBar(widget.title),
                centerTitle:true,
            ),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Container(
                        height: 200.0,
                        color: Colors.black26,
                        child: Wrap(
                            spacing:10.0,
                            runSpacing: 10.0,
                            direction: Axis.horizontal,
                            crossAxisAlignment: WrapCrossAlignment.end,
                            runAlignment:  WrapAlignment.center,
                            alignment: WrapAlignment.center,
                            children: <Widget>[
                                Container(width:100.0,height: 50.0,color: Colors.red),
                                Container(width:100.0,height: 50.0,color: Colors.yellow),
                                Container(width:100.0,height: 50.0,color: Colors.blue),
                                Container(width:100.0,height: 50.0,color: Colors.black),
                                Container(width:100.0,height: 50.0,color: Colors.pink),
                                Container(width:100.0,height: 50.0,color: Colors.green)
                            ],
                        ),
                    ),
                ],
            )
        );
    }
}