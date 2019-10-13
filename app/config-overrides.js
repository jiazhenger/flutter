/* ====================================== 自定义 webpack 配置  ====================================== */
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const resolve = dir => require('path').join(__dirname,dir)

process.env.GENERATE_SOURCEMAP = false; // 关闭 css sourceMap 打包

//module.exports = function override(config, env) {
//	// 关闭 js sourceMap 打包
//	config.devtool = false
//	// 自定义文件目录
//	config.resolve.alias['@'] = resolve('src')
//	config.resolve.alias['@common'] = resolve('src/common')
//	config.resolve.alias['@cpt'] = resolve('src/components')
//	config.resolve.alias['@cpx'] = resolve('src/components-x')
//	
//	config.resolve.alias['@assets'] = resolve('src/assets')
//	config.resolve.alias['@css'] = resolve('src/assets/css')
//	config.resolve.alias['@images'] = resolve('src/assets/images')
//	config.resolve.alias['@js'] = resolve('src/assets/js')
//	config.resolve.alias['@pages'] = resolve('src/pages')
//	
//	config.resolve.alias['@redux'] = resolve('src/redux')
//	
//	return config
//}

module.exports = override(
	 // 关闭 css sourceMap 打包
	addWebpackAlias({
		['@'] 		: resolve('src'),
	  	['@common'] : resolve('src/common'),
	  	['@cpt'] 	: resolve('src/components'),
	  	['@cpx'] 	: resolve('src/components-x'),
	  	
	  	['@assets'] : resolve('src/assets'),
	  	['@css'] 	: resolve('src/assets/css'),
	  	['@images'] : resolve('src/assets/images'),
	  	['@js'] 	: resolve('src/assets/js'),
	  	['@pages'] 	: resolve('src/pages'),
	  	
		['@redux'] 	: resolve('src/redux')
	}),
	// 异步引入 antd 配置
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css',
	}),
	// 自定义主题
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: { '@primary-color': '#4da1ff' },
	})
)