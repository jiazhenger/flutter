import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class FadeInImageAssetNetworkPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    FadeInImageAssetNetworkPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<FadeInImageAssetNetworkPage> {
    // 组件
    Widget MyWidget () => Container(
        margin: EdgeInsets.only(bottom: 10.0),
        child: Container(
            color: Colors.yellow,
            height: 100.0,
            margin: EdgeInsets.only(top:10.0),
            child:FadeInImage.assetNetwork(
                height: 100.0,
                placeholder:Config.staticUrl,
                image:Config.imgUrl,
            ),
        )
    );
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
                    MyWidget(),
                ],
            )
        );
    }
}