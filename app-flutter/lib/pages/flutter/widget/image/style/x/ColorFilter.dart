import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ColorFilterPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ColorFilterPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ColorFilterPage> {
    // 组件
    Widget MyWidget (ColorFilter colorFilter,String text) => Container(
        margin: EdgeInsets.only(bottom: 10.0),
        child: Column(
            children: <Widget>[
                Text(text),
                Container(
                    height: 100.0,
                    width: double.infinity,
                    margin: EdgeInsets.only(top:10.0),
                    decoration:BoxDecoration(
                        color:Colors.yellow,
                        image: DecorationImage(
                            image: AssetImage(Config.staticUrl),
                            colorFilter: colorFilter
                        ),
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
                    MyWidget(ColorFilter.linearToSrgbGamma(),'ColorFilter.linearToSrgbGamma()'),
                    MyWidget(ColorFilter.srgbToLinearGamma(),'ColorFilter.srgbToLinearGamma()'),
                    MyWidget(ColorFilter.mode(Colors.blue,BlendMode.color),'ColorFilter.mode(Colors.blue,BlendMode.color)'),
                    MyWidget(ColorFilter.matrix( [ 5.0, 6.0, 7.0, 8.0 ] ),'ColorFilter.matrix( [ 5.0, 6.0, 7.0, 8.0 ] )'),

                ],
            )
        );
    }
}