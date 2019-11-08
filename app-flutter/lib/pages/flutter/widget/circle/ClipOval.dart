import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ClipOvalPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ClipOvalPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ClipOvalPage> {
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
                    Container(
                        color: Colors.yellow,
                        height: 150.0,
                        margin: EdgeInsets.only(top:10.0),
                        child: ClipOval(
                            clipBehavior:Clip.hardEdge,
                            child: Container(
                                width: 200.0,
                                height: 200.0,
                                color:Colors.yellow
                            ),
                        ),
                    )
                ],
            )
        );
    }
}