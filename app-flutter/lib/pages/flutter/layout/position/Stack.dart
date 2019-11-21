import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class StackPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    StackPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<StackPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Stack(
                        overflow: Overflow.visible,
                        textDirection: TextDirection.ltr,
                        children: <Widget>[
                            Container(
                                height:50.0,
                                color: Colors.red,
                            ),
                            Container(
                                height: 20.0,
                                margin: EdgeInsets.only(top:15.0),
                                color: Colors.blue,
                            ),
                       ],
                    )
                ],
            )
        );
    }
}