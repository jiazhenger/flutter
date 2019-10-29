import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class AlignmentXY extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    AlignmentXY({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<AlignmentXY> {
    // 组件
    Widget MyWidget ({double x,double y}) => Container(
        color:Colors.black12,
        height: 50,
        margin: EdgeInsets.only(bottom: 10.0),
        alignment: Alignment(x,y),
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
            appBar: AppBar(
                title:Config.appBar(widget.title),
                centerTitle:true,
            ),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    MyWidget(x:-1.0,y:-1.0),
                    MyWidget(x:0.0,y:-1.0),
                    MyWidget(x:1.0,y:-1.0),

                    MyWidget(x:-1.0,y:0.0),
                    MyWidget(x:0.0,y:0.0),
                    MyWidget(x:1.0,y:0.0),

                    MyWidget(x:-1.0,y:1.0),
                    MyWidget(x:0.0,y:1.0),
                    MyWidget(x:1.0,y:1.0),

                    MyWidget(x:-0.5,y:0.5)
                ],
            )
        );
    }
}