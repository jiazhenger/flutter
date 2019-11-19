import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class SimpleDialogPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    SimpleDialogPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<SimpleDialogPage> {
    String _v = '选择列表';
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
                    MaterialButton(
                        child: Text('点击弹出弹窗'),
                        onPressed: (){
                            showDialog(
                                context: context,
                                barrierDismissible: true,
                                builder: (BuildContext context) {
                                    return SimpleDialog(
                                        title: Text('温馨提示'),
                                        children: <Widget>[
                                            SimpleDialogOption(
                                                onPressed: () { Navigator.pop(context,'列表一'); },
                                                child: const Text('列表一'),
                                            ),
                                            SimpleDialogOption(
                                                onPressed: () { Navigator.pop(context,'列表二'); },
                                                child: const Text('列表二'),
                                            ),
                                        ],
                                    );
                                }
                            ).then((dynamic value){
                                print(value);
                                if(value is String){
                                    setState(() {
                                        _v = value;
                                    });
                                }
                            },onError: (dynamic err){

                            });
                        },
                    ),
                    Text(_v)
                ],
            )
        );
    }
}