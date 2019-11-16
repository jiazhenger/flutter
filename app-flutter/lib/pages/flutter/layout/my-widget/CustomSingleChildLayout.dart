import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class CustomSingleChildLayoutPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    CustomSingleChildLayoutPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}
// ======================================================================================================== 自定义 Widget 控件
class _MyDelegate extends SingleChildLayoutDelegate {
    _MyDelegate(this.size);

    final Size size;

    @override
    Size getSize(BoxConstraints constraints) => size;

    @override
    BoxConstraints getConstraintsForChild(BoxConstraints constraints) {
        return new BoxConstraints.tight(size);
    }

    @override
    bool shouldRelayout(_MyDelegate oldDelegate) {
        return size != oldDelegate.size;
    }
}

class _PageState extends State<CustomSingleChildLayoutPage> {
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
                    CustomSingleChildLayout(
                        delegate: _MyDelegate(Size(200.0, 200.0)),
                        child: Container(
                            color: Colors.red,
                            width: 100.0,
                            height: 300.0,
                        )
                    )
                ],
            )
        );
    }
}