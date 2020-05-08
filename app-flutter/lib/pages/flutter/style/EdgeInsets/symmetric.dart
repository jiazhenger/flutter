import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class EdgeInsetsSymmetric extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    EdgeInsetsSymmetric({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<EdgeInsetsSymmetric> {
    // 组件
    Widget MyWidget ({double vertical:0.0,double horizontal:0.0}) => Container(
        color:Colors.yellow,
        padding: EdgeInsets.symmetric(vertical:vertical,horizontal:horizontal),
        child: Container(
            color:Colors.red,
            height:50.0,
            alignment:Alignment.center,
            child: Text('${vertical != 0.0 ?'vertical=$vertical':''} ${horizontal != 0.0 ?'horizontal=$horizontal':''}', style:TextStyle(color: Colors.white)),
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
                    MyWidget(vertical:20.0),
                    Divider(),
                    MyWidget(horizontal:20.0),
                    Divider(),
                    MyWidget(vertical:20.0,horizontal:20.0),
                    Divider()
                ],
            )
        );
    }
}