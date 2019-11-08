import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class TextSpanPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    TextSpanPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<TextSpanPage> {
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
                    Text.rich(
                        TextSpan(
                            text: 'Text.rich( )',
                            children: <TextSpan>[
                                TextSpan(text:'一个',style: TextStyle(fontSize: 20.0,color: Colors.blue)),
                                TextSpan(text:'文本',style: TextStyle(fontSize: 30.0,color: Colors.green)),
                            ],
                        )
                    ),
                ],
            )
        );
    }
}