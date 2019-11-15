import 'package:flutter_web/material.dart';
import 'package:flutter_web/gestures.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class GridViewCountPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    GridViewCountPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<GridViewCountPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: AppBar(
                title:Config.appBar(widget.title),
                centerTitle:true,
            ),
            body: GridView.count(
                padding:EdgeInsets.all(10.0),
                cacheExtent:300.0,
                crossAxisCount: 2, //每行2个
                mainAxisSpacing: 10.0, //主轴(竖直)方向间距
                crossAxisSpacing: 10.0, //纵轴(水平)方向间距
                childAspectRatio: 1.0, //纵轴缩放比例
                children: <Widget>[
                    Container( height: 200.0,color: Colors.yellow),
                    Container( height: 200.0,color: Colors.blue),
                    Container( height: 200.0,color: Colors.red),
                    Container( height: 200.0,color: Colors.yellow),
                    Container( height: 200.0,color: Colors.blue),
                    Container( height: 200.0,color: Colors.red),
                    Container( height: 200.0,color: Colors.yellow),
                    Container( height: 200.0,color: Colors.blue),
                    Container( height: 200.0,color: Colors.red),
                ],
            )
        );
    }
}