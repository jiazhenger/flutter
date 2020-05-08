import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class FractionalOffsetPosition extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    FractionalOffsetPosition({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<FractionalOffsetPosition> {
    // 组件
    Widget MyWidget (FractionalOffset alignment, String text) => Container(
        color:Colors.black12,
        height: 50,
        margin: EdgeInsets.only(bottom: 10.0),
        alignment: alignment,
        child: Container(
            color:Colors.red,
            height: 30.0,
            width:100.0,
            alignment: Alignment.center,
            child: Text(text, style:TextStyle(color: Colors.white,fontSize:10.0)),
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
                    MyWidget(FractionalOffset.topLeft,'topLeft'),
                    MyWidget(FractionalOffset.topCenter,'topCenter'),
                    MyWidget(FractionalOffset.topRight,'topRight'),

                    MyWidget(FractionalOffset.centerLeft,'topLeft'),
                    MyWidget(FractionalOffset.center,'center'),
                    MyWidget(FractionalOffset.centerRight,'centerRight'),

                    MyWidget(FractionalOffset.bottomLeft,'bottomLeft'),
                    MyWidget(FractionalOffset.bottomCenter,'bottomCenter'),
                    MyWidget(FractionalOffset.bottomRight,'bottomRight')
                ],
            )
        );
    }
}