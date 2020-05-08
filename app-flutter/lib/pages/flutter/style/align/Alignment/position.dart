import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class AlignmentPosition extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    AlignmentPosition({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<AlignmentPosition> {
    // 组件
    Widget MyWidget (Alignment alignment) => Container(
        color:Colors.black12,
        height: 50,
        margin: EdgeInsets.only(bottom: 10.0),
        alignment: alignment,
        child: Container(
            color:Colors.red,
            height: 30.0,
            width:100.0,
            alignment: Alignment.center,
            child: Text(alignment.toString(), style:TextStyle(color: Colors.white)),
        )
    );
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    MyWidget(Alignment.topLeft),
                    MyWidget(Alignment.topCenter),
                    MyWidget(Alignment.topRight),

                    MyWidget(Alignment.centerLeft),
                    MyWidget(Alignment.center),
                    MyWidget(Alignment.centerRight),

                    MyWidget(Alignment.bottomLeft),
                    MyWidget(Alignment.bottomCenter),
                    MyWidget(Alignment.bottomRight)
                ],
            )
        );
    }
}