import 'package:flutter_web/material.dart';
import 'package:flutter_web/gestures.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class RichTextPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    RichTextPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RichTextPage> {
    String str = '手势事件 onTap';
    // page
    @override
    Widget build(BuildContext context) {
        final TapGestureRecognizer recognizer = new TapGestureRecognizer();

        recognizer.onTap = () {
            setState(() {
                str = '文本事件';
            });
        };
        recognizer.onTapUp = (TapUpDetails details){

        };
        return Scaffold(
            appBar: AppBar(
                title:Config.appBar(widget.title),
                centerTitle:true,
            ),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    RichText(
                        text:TextSpan(
                            text: 'RichText( )',
                            children: <TextSpan>[
                                TextSpan(text:'一个',style: TextStyle(fontSize: 20.0,color: Colors.blue)),
                                TextSpan(text:'文本',style: TextStyle(fontSize: 30.0,color: Colors.green)),
                            ],
                            recognizer:recognizer
                        )
                    ),
                    Text('$str')
                ],
            )
        );
    }
}