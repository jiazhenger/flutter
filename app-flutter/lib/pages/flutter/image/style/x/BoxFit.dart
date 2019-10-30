import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class BoxFitPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    BoxFitPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BoxFitPage> {
    // 组件
    Widget MyWidget (BoxFit fit) => Container(
        margin: EdgeInsets.only(bottom: 10.0),
        child: Column(
            children: <Widget>[
                Text(fit.toString()),
                Container(
                    color: Colors.yellow,
                    height: 150.0,
                    width:150.0,
                    margin: EdgeInsets.only(top:10.0),
                    child: Image(
                        image: AssetImage(Config.staticUrl),
                        fit: fit
                    ),
                )
            ],
        ),
    );
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
                    MyWidget(BoxFit.none),
                    MyWidget(BoxFit.scaleDown),
                    MyWidget(BoxFit.contain),
                    MyWidget(BoxFit.cover),
                    MyWidget(BoxFit.fill),
                    MyWidget(BoxFit.fitWidth),
                    MyWidget(BoxFit.fitHeight ),
                ],
            )
        );
    }
}