import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class BaselinePage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    BaselinePage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BaselinePage> {
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
                        color:Colors.yellow,
                        child: Baseline(
                            baseline: 50.0,
                            baselineType: TextBaseline.alphabetic,
                            child: Text('12313'),
                        ),
                    ),
                    Container(
                        color:Colors.yellow,
                        margin: EdgeInsets.only(top:10.0),
                        child: Baseline(
                            baseline: 100.0,
                            baselineType: TextBaseline.ideographic,
                            child: Image(image: AssetImage(Config.staticUrl) ),
                        ),
                    )
                ],
            )
        );
    }
}