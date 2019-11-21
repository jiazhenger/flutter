import 'package:flutter_web/material.dart';
// ======================================================================================================== 全局配置
import 'package:flutter_web_study.app/config.dart';
// ======================================================================================================== Widget 控件
class StepperPage extends StatefulWidget { // 有状态的控件，控件的状态、文字等属性存在变化的可能
    final String title;
    StepperPage({ Key key, this.title }) : super(key: key);
    @override
    _PageState createState() => _PageState(); // === createState()  => _PageState();
}

class _PageState extends State<StepperPage> {
    // page
    @override
    Widget build(BuildContext context) {
        return Scaffold(
            appBar: Config.appBar(widget.title),
            body: ListView(
                padding:EdgeInsets.all(10.0),
                children: <Widget>[
                    Stepper(
                        type: StepperType.vertical,
                        steps: <Step>[
                            Step(
                                title: new Text('第一步'),
                                subtitle: new Text('complete'),
                                content: new Text('第一步内容'),
                                state: StepState.complete,
                                isActive: true,
                            ),
                            Step(
                                title: new Text('第二步'),
                                subtitle: new Text('disabled'),
                                isActive: true,
                                state: StepState.disabled,
                                content: new Text('第二步内容'),
                            ),
                            Step(
                                title: new Text('第三步'),
                                subtitle: new Text('error'),
                                state: StepState.error,
                                content: new Text('第三步内容'),
                            ),
                            Step(
                                title: new Text('第四步'),
                                subtitle: new Text('editing'),
                                state: StepState.editing,
                                content: new Text('第四步内容'),
                            ),
                            Step(
                                title: new Text('第五步'),
                                subtitle: new Text('indexed'),
                                state: StepState.indexed,
                                content: new Text('第五步内容'),
                            ),
                        ],
                        controlsBuilder:(BuildContext context, {VoidCallback onStepContinue, VoidCallback onStepCancel}) {
                            return Row(
                                children: <Widget>[
                                    FlatButton(
                                        onPressed: onStepContinue,
                                        child: const Text('继续'),
                                    ),
                                    FlatButton(
                                        onPressed: onStepCancel,
                                        child: const Text('取消'),
                                    ),
                                ],
                            );
                        },
                        onStepTapped: (int index){
                            print(index);
                        },
                        onStepContinue: (){
                            print('onStepContinue');
                        },
                        onStepCancel: (){
                            print('onStepCancel');
                        },
                    ),
                ],
            )
        );
    }
}