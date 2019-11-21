import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class DropdownButtonPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    DropdownButtonPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<DropdownButtonPage> {
    String dropdownValue = 'Flutter';
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    DropdownButton(
                        value: dropdownValue == '' ? null : dropdownValue,
                        items:['Flutter', 'Dart', 'Javascript', 'Java'].map<DropdownMenuItem<String>>((String value) {
                            return DropdownMenuItem<String>(
                                value: value,
                                child: Text(value),
                            );
                        }).toList(),
                        onChanged: (String value) {
                            setState((){
                                dropdownValue = value;
                            });
                        },
                        isExpanded:true,
                    ),
                    DropdownMenuItem<String>(
                        value: '12321',
                        child: Text('12313'),
                    )
                ],
            )
        );
    }
}