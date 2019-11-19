import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class  LinearProgressIndicatorPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    LinearProgressIndicatorPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<LinearProgressIndicatorPage> {
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
                    LinearProgressIndicator(
                        value: 0.5,
                        backgroundColor: Colors.yellow,
                        valueColor: AlwaysStoppedAnimation<Color>(Colors.red),
                        semanticsLabel: '132',
                        semanticsValue: '456',
                    )
                ],
            )
        );
    }
}