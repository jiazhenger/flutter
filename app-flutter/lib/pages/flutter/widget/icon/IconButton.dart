import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class IconButtonPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    IconButtonPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}
final _formKey = GlobalKey();
class _PageState extends State<IconButtonPage> {
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
                    IconButton(
                        icon: Text('12'),
                        onPressed: null,
                    ),
                    IconButton(
                        key:_formKey,
                        icon: Text('12'),
                        onPressed: (){
                            var x = _formKey.currentState;
                        },
                    ),
                    IconButton(
                        icon: Image.asset(Config.staticUrl),
                        onPressed: (){},
                    ),
                    IconButton(
                        icon: Icon(Icons.error),
                        onPressed: (){},
                    )
                ],
            )
        );
    }
}