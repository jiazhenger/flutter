import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ButtonBarPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ButtonBarPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ButtonBarPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    ButtonBar(
                        mainAxisSize: MainAxisSize.min,
                        alignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                            MaterialButton(child: Text('click'),color: Colors.yellow,onPressed: (){}),
                            MaterialButton(child: Text('click'),color:Colors.blue,onPressed: (){}),
                            MaterialButton(child: Text('click'),color:Colors.green,onPressed: (){}),
                        ],
                    ),
                    ButtonBar(
                        mainAxisSize: MainAxisSize.min,
                        alignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                            Text('click'),
                            Text('click'),
                            Text('click'),
                            Text('click'),
                            Text('click'),
                        ],
                    )
                ],
            )
        );
    }
}