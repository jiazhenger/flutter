import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ClipRRectPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ClipRRectPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ClipRRectPage> {
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
                        height: 150.0,
                        margin: EdgeInsets.only(top:10.0),
                        child: ClipRRect(
                            borderRadius: BorderRadius.circular(150.0),
                            child: Image(
                                image: AssetImage(Config.imgUrl)
                            )
                        ),
                    )
                ],
            )
        );
    }
}