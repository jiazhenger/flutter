import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class TabBarViewPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    TabBarViewPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}
// SingleTickerProviderStateMixin
class _PageState extends State<TabBarViewPage> with TickerProviderStateMixin{
    int _index = 0;

    // page
    @override
    Widget build(BuildContext context) {
        TabController _controller = TabController(vsync: this, length: 3);
        _controller.index = 0;
        var _fn = (){
            int index = _controller.index;
            int prev = _controller.previousIndex;
        };
        _controller.addListener(_fn);

        _controller.animateTo(2,curve: Curves.bounceIn);

        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: Column(
                children: <Widget>[
                    TabBar(
                        isScrollable: false,
                        indicatorColor: Colors.red,
                        indicatorWeight: 3.0,
                        labelColor: Colors.red,
                        unselectedLabelColor: Color(0xffaaaaaa),
                        tabs: <Widget>[
                            Tab(text: '标题一',icon: Icon(Icons.tab),),
                            Tab(text: '标题二',icon: Icon(Icons.edit)),
                            Tab(text: '标题三',icon: Icon(Icons.new_releases)),
                        ],
                        controller: _controller
                    ),
                    Expanded(
                        flex: 1,
                        child: TabBarView(
                            children: <Widget>[
                                Container(height: double.infinity, color: Colors.yellow),
                                Container(height: double.infinity, color: Colors.blue),
                                Container(height: double.infinity, color: Colors.green)
                            ],
                            controller: _controller,
                        ),
                    )
                ],
            )
        );
    }
}