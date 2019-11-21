import 'package:flutter_web/material.dart';
import 'package:flutter_web/gestures.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ListViewPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ListViewPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ListViewPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                cacheExtent:300.0,
                dragStartBehavior:DragStartBehavior.down,
                children: <Widget>[
                    Container( height: 200.0,color: Colors.yellow),
                    Container( height: 200.0,color: Colors.blue),
                    Container( height: 200.0,color: Colors.red),
                ],
            )
        );
    }
}