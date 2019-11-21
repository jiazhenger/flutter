import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class TextPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    TextPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<TextPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Text(
                        '文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter文本 Flutter',
                        textAlign: TextAlign.center,
                        textDirection:TextDirection.rtl,
                        softWrap:true,
                        textScaleFactor:2.0,
                        overflow:TextOverflow.fade,
                        maxLines: 3,
                        semanticsLabel: 'text' ,
                    )
                ],
            )
        );
    }
}