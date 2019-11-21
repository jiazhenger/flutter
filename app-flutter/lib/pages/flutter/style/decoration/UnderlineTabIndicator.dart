import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class UnderlineTabIndicatorPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    UnderlineTabIndicatorPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<UnderlineTabIndicatorPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Container(
                        color: Colors.yellow,
                        margin: EdgeInsets.only(bottom: 10.0,top:10.0),
                        child: Container(
                            height: 40,
                            decoration:UnderlineTabIndicator(
                                borderSide: BorderSide( width:2.0, color:Colors.red, style: BorderStyle.solid),
                                insets: EdgeInsets.all(0.0)
                            ),
                        ),
                    )
                ],
            )
        );
    }
}