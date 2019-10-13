import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class RouterPushReplacementNamed extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;

    RouterPushReplacementNamed({ Key key, this.title }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RouterPushReplacementNamed> {
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
                    RaisedButton(
                        child: Text("Navigator.of(context).pushReplacementNamed('/')"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.of(context).pushReplacementNamed('/router-pop-param').then((value){
                                print(value);
                            });
                        }
                    ),
                    Divider(),
                    RaisedButton(
                        child: Text("Navigator.pushReplacementNamed(context,'/')"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.pushReplacementNamed(context,'/router-pop-param').then((value){
                                print(value);
                            });
                        }
                    ),
                ],
            )
        );
    }
}