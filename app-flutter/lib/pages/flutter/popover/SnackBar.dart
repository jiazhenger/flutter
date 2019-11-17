import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class SnackBarPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    SnackBarPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<SnackBarPage> {
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
                    Builder(
                        builder: (BuildContext context) {
                            return RaisedButton(
                                child: Text('点击显示提示'),
                                onPressed: () {
                                    Scaffold.of(context).showSnackBar(SnackBar(
                                        content: Text('显示文本!'),
                                        backgroundColor:Colors.blue,
                                        action: SnackBarAction(
                                            onPressed: () {},
                                            label: '关闭',
                                        ),
                                    ));
                                },
                            );
                        },
                    )
                ],
            )
        );
    }
}