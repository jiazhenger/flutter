import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class AlertDialogPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    AlertDialogPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<AlertDialogPage> {
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
                                    return AlertDialog(
                                        title: Text('温馨提示'),
                                        content: Container(
                                            child: Text('你确定提交此数据吗？'),
                                        ),
                                        actions: <Widget>[
                                            MaterialButton(child: Text('关闭'),onPressed: (){ Navigator.of(context).pop(); },),
                                            MaterialButton(child: Text('确认'),onPressed: (){  Navigator.of(context).pop(); }),
                                        ]
                                    );
                                }
                            ).then((dynamic value){
                                print(value);
                            },onError: (dynamic err){

                            });
                        },
                    )
                ],
            )
        );
    }
}