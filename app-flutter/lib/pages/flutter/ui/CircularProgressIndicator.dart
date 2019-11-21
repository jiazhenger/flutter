import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class  CircularProgressIndicatorPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    CircularProgressIndicatorPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<CircularProgressIndicatorPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: Container(
                alignment: Alignment.center,
                child: SizedBox(
                    width: 100.0,
                    height: 100.0,
                    child: CircularProgressIndicator(
                        value: 0.2,
                        backgroundColor: Colors.black87,
                        valueColor: AlwaysStoppedAnimation<Color>(Colors.yellow),
                        semanticsLabel: '132',
                        semanticsValue: '456',
                        strokeWidth: 10.0,
                    ),
                ),
            )
        );
    }
}