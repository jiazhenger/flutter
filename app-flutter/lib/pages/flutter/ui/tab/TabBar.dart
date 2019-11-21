import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class TabBarPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    TabBarPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}
// SingleTickerProviderStateMixin
class _PageState extends State<TabBarPage> with TickerProviderStateMixin{
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                children: <Widget>[
                    Container(
                        width: double.infinity,
                        color: Colors.white,
                        child: TabBar(
                            isScrollable: false,
                            indicatorColor: Colors.red,
                            indicatorSize: TabBarIndicatorSize.label,
                            indicatorWeight: 3.0,
                            labelPadding: EdgeInsets.all(10.0),
                            labelColor: Colors.red,
                            unselectedLabelColor: Color(0xffaaaaaa),
                            tabs: <Widget>[
                                Tab(text: '标题一',icon: Icon(Icons.tab),),
                                Tab(text: '标题二',icon: Icon(Icons.edit)),
                                Text('自定义')
                            ],
                            controller: TabController(vsync: this, length: 4),
                        ),
                    ),
                    Container(
                        margin: EdgeInsets.only(top:10.0),
                        width: double.infinity,
                        color: Colors.yellow,
                        child: TabBar(
                            isScrollable: true,
                            indicatorColor: Colors.red,
                            indicatorSize: TabBarIndicatorSize.tab,
                            labelColor: Colors.black,
                            tabs: <Widget>[
                                Tab(text: '标题一',icon: Icon(Icons.tab),),
                                Tab(text: '标题二',icon: Icon(Icons.edit)),
                                Tab(text: '标题三',icon: Icon(Icons.announcement)),
                                Tab(text: '标题四',icon: Icon(Icons.verified_user),),
                                Tab(text: '标题五',icon: Icon(Icons.satellite)),
                                Tab(text: '标题六',icon: Icon(Icons.mail)),
                            ],
                            controller: TabController(vsync: this, length: 6),
                        ),
                    )
                ],
            )
        );
    }
}