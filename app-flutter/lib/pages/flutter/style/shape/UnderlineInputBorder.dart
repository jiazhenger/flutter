import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class UnderlineInputBorderPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    UnderlineInputBorderPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<UnderlineInputBorderPage> {
    // 组件
    Widget MyWidget () => Container(
        height: 80,
        margin: EdgeInsets.only(bottom: 10.0),
        decoration:ShapeDecoration(
            color:Colors.yellow,
            shape: UnderlineInputBorder(
                borderSide:BorderSide(color:Colors.red,style: BorderStyle.solid,width:5),
                borderRadius: const BorderRadius.only( topLeft: Radius.circular(20.0), topRight: Radius.circular(20.0))
            )
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
                    MyWidget(),
                ],
            )
        );
    }
}