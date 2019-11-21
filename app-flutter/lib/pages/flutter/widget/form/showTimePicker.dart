import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ShowTimePickerPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ShowTimePickerPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ShowTimePickerPage> {

    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    MaterialButton(
                        color: Colors.red,
                        child: Text('弹出时间选择器', style: TextStyle(color:Colors.white),),
                        onPressed: (){
                            showTimePicker(
                                context: context,
                                initialTime: TimeOfDay.now()
                            ).then((TimeOfDay value){
                                print(value);
                            },onError: (dynamic err){
                                print(err);
                            }).catchError((err){
                                print(Duration.zero);
                            });
                        },
                    ),
                ],
            )
        );
    }
}