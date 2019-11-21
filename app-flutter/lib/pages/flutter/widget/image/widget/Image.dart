import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ImagePage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ImagePage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ImagePage> {
    // 组件
    Widget MyWidget () => Container(
        margin: EdgeInsets.only(bottom: 10.0),
        child: Container(
            color: Colors.yellow,
            height: 150.0,
            margin: EdgeInsets.only(top:10.0),
            child: Image(
                width: double.infinity,
                height: 50.0,
                image: AssetImage(Config.staticUrl),
            ),
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
                    MyWidget(),
                ],
            )
        );
    }
}