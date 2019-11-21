import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class BottomNavigationBarPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    BottomNavigationBarPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}
class _PageState extends State<BottomNavigationBarPage> {
    int _currentIndex = 0;
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: Column(
                mainAxisAlignment:MainAxisAlignment.spaceBetween,
                children: <Widget>[
                    Expanded(
                        flex: 1,
                        child: ListView(
                            children: <Widget>[
                                Container(height: 100.0, color: Colors.yellow,child: Text('内容')),
                                Container(height: 100.0, color: Colors.blue,child: Text('内容')),
                                Container(height: 100.0, color: Colors.green,child: Text('内容')),
                                Container(height: 100.0, color: Colors.pink,child: Text('内容')),
                                Container(height: 100.0, color: Colors.yellow,child: Text('内容')),
                                Container(height: 100.0, color: Colors.blue,child: Text('内容')),
                                Container(height: 100.0, color: Colors.green,child: Text('内容')),
                                Container(height: 100.0, color: Colors.pink,child: Text('内容')),
                            ],
                        )
                    ),
                    BottomNavigationBar(
                        currentIndex: _currentIndex,
//                        fixedColor:Colors.red,
                        backgroundColor: Colors.white30,
                        selectedItemColor: Colors.red,
                        unselectedItemColor: Colors.black12,
                        selectedIconTheme:IconThemeData.fallback(),
                        selectedLabelStyle: TextStyle(color:Colors.red),
                        items: <BottomNavigationBarItem>[
                            BottomNavigationBarItem(
                                icon:  CircleAvatar(child: Icon(Icons.home, color: Colors.white),backgroundColor: Colors.black12),
                                title: Text('Home'),
                                activeIcon: CircleAvatar(child: Icon(Icons.home, color: Colors.white),backgroundColor: Colors.red,),
                            ),
                            BottomNavigationBarItem(
                                icon:  CircleAvatar(child: Icon(Icons.nature, color: Colors.white),backgroundColor: Colors.black12),
                                title: Text('News'),
                                activeIcon: CircleAvatar(child: Icon(Icons.nature, color: Colors.white),backgroundColor: Colors.red,),
                            ),
                            BottomNavigationBarItem(
                                icon:  CircleAvatar(child: Icon(Icons.center_focus_strong, color: Colors.white),backgroundColor: Colors.black12),
                                title: Text('Center'),
                                activeIcon: CircleAvatar(child: Icon(Icons.center_focus_strong, color: Colors.white),backgroundColor: Colors.red,),
                            ),
                        ],
                        showSelectedLabels:true,
                        type: BottomNavigationBarType.fixed,
                        onTap: (int index){
                            print(index);
                            setState(() {
                                _currentIndex = index;
                            });
                        },
                    ),
                ],
            )
        );
    }
}