import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class BlendModePage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    BlendModePage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<BlendModePage> {
    // 组件
    Widget MyWidget (BlendMode blendMode) => Container(
        margin: EdgeInsets.only(bottom: 10.0),
        child: Column(
            children: <Widget>[
                Text(blendMode.toString()),
                Container(
                    color: Colors.yellow,
                    height: 100.0,
                    margin: EdgeInsets.only(top:10.0),
                    child: Image(
                        image: AssetImage(Config.staticUrl),
                        colorBlendMode:blendMode
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
                    MyWidget(BlendMode.color),
                    MyWidget(BlendMode.clear),
                    MyWidget(BlendMode.colorBurn),
                    MyWidget(BlendMode.colorDodge),
                    MyWidget(BlendMode.darken),
                    MyWidget(BlendMode.difference),
                    MyWidget(BlendMode.dst),
                    MyWidget(BlendMode.dstATop),
                    MyWidget(BlendMode.dstIn),
                    MyWidget(BlendMode.dstOut),

                    MyWidget(BlendMode.dstOver),
                    MyWidget(BlendMode.exclusion),
                    MyWidget(BlendMode.hardLight),
                    MyWidget(BlendMode.hue),
                    MyWidget(BlendMode.lighten),
                    MyWidget(BlendMode.luminosity),
                    MyWidget(BlendMode.modulate),
                    MyWidget(BlendMode.multiply),
                    MyWidget(BlendMode.overlay),
                    MyWidget(BlendMode.plus),

                    MyWidget(BlendMode.srcOver),
                    MyWidget(BlendMode.src),
                    MyWidget(BlendMode.saturation),
                    MyWidget(BlendMode.screen),
                    MyWidget(BlendMode.softLight),
                    MyWidget(BlendMode.srcATop),
                    MyWidget(BlendMode.srcIn),
                    MyWidget(BlendMode.srcOut),
                    MyWidget(BlendMode.xor),
                ],
            )
        );
    }
}