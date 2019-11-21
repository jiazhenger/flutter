import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class ShowDatePickerPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    ShowDatePickerPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<ShowDatePickerPage> {
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
                            showDatePicker(
                                context: context,
                                initialDate: DateTime.now(),
                                firstDate: DateTime(2018),
                                lastDate: DateTime(2030),
                                builder: (BuildContext context, Widget child) {
                                    return Theme(
                                        data: ThemeData.dark(),
                                        child: child,
                                    );
                                },
                                selectableDayPredicate:(DateTime time){
//                                    print(time);
                                    return true;
                                },
                            ).then((DateTime val) {
                                print(val);   // 2018-07-12 00:00:00.000
                            }).catchError((err) {
                                print(err);
                            });
                        },
                    ),
                    MaterialButton(
                        color: Colors.blue,
                        child: Text('弹出时间选择器', style: TextStyle(color:Colors.white),),
                        onPressed: (){
                            showDatePicker(
                                context: context,
                                initialDate: DateTime.now(),
                                firstDate: DateTime(2018),
                                lastDate: DateTime(2030),
                                builder: (BuildContext context, Widget child) {
                                    return Theme(
                                        data: ThemeData.light(),
                                        child: child,
                                    );
                                },
                                initialDatePickerMode: DatePickerMode.year,
                            ).then((DateTime val) {
                                print(val);   // 2018-07-12 00:00:00.000
                            }).catchError((err) {
                                print(err);
                            });
                        },
                    )
                ],
            )
        );
    }
}