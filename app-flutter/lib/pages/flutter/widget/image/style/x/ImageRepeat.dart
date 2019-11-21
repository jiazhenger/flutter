import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ImageRepeatPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ImageRepeatPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ImageRepeatPage> {
    // 组件
    Widget MyWidget (ImageRepeat repeat) => Container(
        margin: EdgeInsets.only(bottom: 10.0),
        child: Column(
            children: <Widget>[
                Text(repeat.toString()),
                Container(
                    color: Colors.yellow,
                    height: 100.0,
                    width: double.infinity,
                    margin: EdgeInsets.only(top:10.0),
                    child: Image(
                        image: AssetImage(Config.staticUrl),
                        repeat: repeat,
                    ),
                )
            ],
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
                    MyWidget(ImageRepeat.noRepeat),
                    MyWidget(ImageRepeat.repeatX),
                    MyWidget(ImageRepeat.repeatY),
                    MyWidget(ImageRepeat.repeat),
                ],
            )
        );
    }
}