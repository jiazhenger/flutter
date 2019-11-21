import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class AboutListTilePage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    AboutListTilePage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<AboutListTilePage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    AboutListTile(
                        icon:  CircleAvatar(child: new Text('icon')),
                        child: new Text('flutter'),
                        aboutBoxChildren:<Widget>[
                            Text('aboutBoxChildren'),
                            Text('aboutBoxChildren'),
                            Text('aboutBoxChildren'),
                        ],
                        applicationName:'applicationName',
                        applicationIcon: CircleAvatar(backgroundImage: AssetImage(Config.staticUrl) ),
                        applicationVersion:'applicationVersion',
                        applicationLegalese: "applicationLegalese",
                    ),
                    AboutListTile(
                        icon:  CircleAvatar(child: new Text('2')),
                    )
                ],
            )
        );
    }
}