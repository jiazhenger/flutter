import 'package:flutter_web/material.dart';
// ======================================================================================================== 路由
// ======================================================================================================== Image widget
import 'package:flutter_web_study.app/pages/flutter/widget/image/widget/Image.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/image/widget/ImageAsset.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/image/widget/ImageNetwork.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/image/widget/FadeInImage.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/image/widget/FadeInImage_assetNetwork.dart';
// ======================================================================================================== x
import 'package:flutter_web_study.app/pages/flutter/widget/image/style/x/BoxFit.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/image/style/x/ImageRepeat.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/image/style/x/BlendMode.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/image/style/x/ColorFilter.dart';
import 'package:flutter_web_study.app/pages/flutter/widget/image/style/x/FilterQuality.dart';
// ======================================================================================================== 路由类
class ImageRouter{
	final Map<String,WidgetBuilder> router = <String,WidgetBuilder>{
		// ======================================================================================================== Image
		'/ImagePage': (BuildContext context) => ImagePage(title:'Image( )'),
		'/ImageAssetPage': (BuildContext context) => ImageAssetPage(title:'Image.asset( )'),
		'/ImageNetworkPage': (BuildContext context) => ImageNetworkPage(title:'Image.network( )'),
		'/FadeInImagePage': (BuildContext context) => FadeInImagePage(title:'FadeInImage( )'),
		'/FadeInImageAssetNetworkPage': (BuildContext context) => FadeInImageAssetNetworkPage(title:'FadeInImage.assetNetwork( )'),

		// ======================================================================================================== x
		'/BoxFitPage': (BuildContext context) => BoxFitPage(title:'BoxFit.x'),
		'/ImageRepeatPage': (BuildContext context) => ImageRepeatPage(title:'ImageRepeat.x'),
		'/BlendModePage': (BuildContext context) => BlendModePage(title:'BlendMode.x'),
		'/ColorFilterPage': (BuildContext context) => ColorFilterPage(title:'ColorFilter.x'),
		'/FilterQualityPage': (BuildContext context) => FilterQualityPage(title:'FilterQuality.x'),
	};
}