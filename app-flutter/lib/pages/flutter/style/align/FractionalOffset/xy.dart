import 'package:flutter/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web/config.dart';
// ======================================================================================================== Widget 控件
class FractionalOffsetXY extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    FractionalOffsetXY({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<FractionalOffsetXY> {
    // 组件
    Widget MyWidget ({double x,double y}) => Container(
        color:Colors.black12,
        height: 50,
        margin: EdgeInsets.only(bottom: 10.0),
        alignment: FractionalOffset(x,y),
        child: Container(
            color:Colors.red,
            height: 30.0,
            width:100.0,
            alignment: Alignment.center,
            child: Text('${x.toString()},${y.toString()}', style:TextStyle(color: Colors.white)),
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
                    MyWidget(x:0.0,y:0.0),
                    MyWidget(x:0.5,y:0.0),
                    MyWidget(x:1.0,y:0.0),

                    MyWidget(x:0.0,y:0.5),
                    MyWidget(x:0.5,y:0.5),
                    MyWidget(x:1.0,y:0.5),

                    MyWidget(x:0.0,y:1.0),
                    MyWidget(x:0.5,y:1.0),
                    MyWidget(x:1.0,y:1.0),

                    MyWidget(x:-0.2,y:-0.2)
                ],
            )
        );
    }
}