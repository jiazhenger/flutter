import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class CircleAvatarPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    CircleAvatarPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<CircleAvatarPage> {
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
                        child: CircleAvatar(
                           backgroundColor: Colors.red,
                            child: Text('圆形',style: TextStyle(color:Colors.white)),
                        ),
                    ),
                    Container(
                        color: Colors.yellow,
                        height: 150.0,
                        margin: EdgeInsets.only(top:10.0),
                        child: CircleAvatar(
                            backgroundImage: AssetImage(Config.staticUrl),
                            backgroundColor: Colors.blue,

                            minRadius: 10.0,
                            maxRadius: 30.0,
                            foregroundColor: Colors.blue,
                        ),
                    ),
                ],
            )
        );
    }
}