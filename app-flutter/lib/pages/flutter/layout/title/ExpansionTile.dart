import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ExpansionTilePage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ExpansionTilePage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ExpansionTilePage> {
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
                    ExpansionTile(
                        title: Text('title'),
                        children: <Widget>[
                            Container(height: 50, color: Colors.red),
                            Container(height: 50, color: Colors.yellow),
                            Container(height: 50, color: Colors.blue),
                            Container(height: 50, color: Colors.green)
                        ],
                        leading: Text('leading'),
                        trailing:Text('trailing'),
                        initiallyExpanded:true,
                        onExpansionChanged: (bool){
                            print(bool);
                        },
                    )
                ],
            )
        );
    }
}