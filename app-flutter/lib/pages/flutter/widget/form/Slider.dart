import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class SliderPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    SliderPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<SliderPage> {
    double _d = 0.5;
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Slider(
                        value: _d,
                        activeColor: Colors.red,
                        inactiveColor: Colors.green,
                        onChanged: (v){
                            setState((){
                                _d = v;
                            });
                        },
                        semanticFormatterCallback: (double value){
                            print(value);
                            return '123132';
                        },
                        onChangeEnd: (double value){
                            print(value);
                        },
                    ),
                ],
            )
        );
    }
}