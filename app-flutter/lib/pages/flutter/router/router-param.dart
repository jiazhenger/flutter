import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class RouterParam extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    final String name;
    Map<String, int> map;

    RouterParam({ Key key, this.title, this.name, this.map }) : super(key: key);

    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<RouterParam> {
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
                    Text(widget.name),
                    Divider(color: Colors.white),
                    Text(widget.map.toString()),
                    RaisedButton(
                        child: Text("Navigator.pop(context,'参数')"),
                        color: Colors.red,
                        textColor: Colors.white,
                        padding:EdgeInsets.all(10.0),
                        onPressed: (){
                            Navigator.pop(context,'返回的携带的参数');
                        }
                    ),
                ],
            )
        );
    }
}