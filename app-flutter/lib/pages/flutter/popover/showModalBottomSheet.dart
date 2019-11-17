import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ShowModalBottomSheetPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ShowModalBottomSheetPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ShowModalBottomSheetPage> {
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
                    RaisedButton(
                        color: Colors.blue,
                        child: new Text('点击上滑弹窗', style:TextStyle(color:Colors.white),),
                        onPressed: () {
                            showModalBottomSheet(
                                context: context,
                                builder: (BuildContext context) {
                                    return Container(
                                        height: 300.0,
                                        child: Container(
                                            height: 40.0,
                                            padding: EdgeInsets.all(8.0),
                                            child: Text('上滑弹窗', textAlign: TextAlign.center,style: TextStyle(fontWeight: FontWeight.bold,fontSize: 16.0),),
                                        )
                                    );
                                },
                            ).then((val) {
                                print(val);
                            },onError:(){
                                print('错误');
                            });
                        },
                    )
                ],
            )
        );
    }
}