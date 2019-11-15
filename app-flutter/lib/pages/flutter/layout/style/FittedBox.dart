import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class FittedBoxPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    FittedBoxPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<FittedBoxPage> {
    Widget WidgetFittedBox (fit)=> Container(
        margin: EdgeInsets.only(top:10.0),
        height: 50.0,
        color: Colors.yellow,
        child: FittedBox(
            fit: fit,
            child: Image.asset(Config.staticUrl),
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
                    Text('BoxFit.none'),
                    WidgetFittedBox(BoxFit.none),
                    Text('BoxFit.contain'),
                    WidgetFittedBox(BoxFit.contain),
                    Text('BoxFit.cover'),
                    WidgetFittedBox(BoxFit.cover),
                    Text('BoxFit.scaleDown'),
                    WidgetFittedBox(BoxFit.scaleDown),
                    Text('BoxFit.fill'),
                    WidgetFittedBox(BoxFit.fill),
                    Text('BoxFit.fitWidth'),
                    WidgetFittedBox(BoxFit.fitWidth),
                    Text('BoxFit.fitHeight'),
                    WidgetFittedBox(BoxFit.fitHeight),
                ],
            )
        );
    }
}