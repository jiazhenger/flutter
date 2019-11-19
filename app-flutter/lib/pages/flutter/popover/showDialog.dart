import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ShowDialogPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ShowDialogPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ShowDialogPage> {
    String _s = '选择';
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
                                    return Container(
                                        child: Align(
                                            child: Container(
                                                width: 200.0,
                                                height: 50.0,
                                                alignment: Alignment.center,
                                                color: Colors.white,
                                                child: MaterialButton(
                                                    child: Text('确定'),
                                                    onPressed: (){
                                                        Navigator.of(context).pop('100');
                                                    }
                                                ),
                                            ),
                                        )
                                    );
                                },
                            ).then((dynamic value){
                                print(value);
                                if(value is String){
                                    setState(() {
                                        _s = value;
                                    });
                                }
                            },onError: (dynamic err){

                            });
                        },
                    ),
                    Text(_s)
                ],
            )
        );
    }
}