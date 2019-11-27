import React from 'react'
// ===================================================================== public component
import ListComponent from '@cpt/list.component'
// ===================================================================== component
const data = {
	title:'国际化实例', 
	keyword:'MaterialLocalizations.of(context).x', 
	type:'String',
	data:[
		{ deviceTitle:'属性', keyword:'collapsedIconTapHint', type:'String',  pro:' 显示文本 => Expand' },
		{ keyword:'alertDialogLabel', type:'String',  pro:'alert 弹窗显示文本  => Alert' },
		{ keyword:'backButtonTooltip', type:'String',  pro:' 回退按钮显示提示文本 => Back' },
		{ keyword:'cancelButtonLabel', type:'String',  pro:' 取消按钮显示文本 => CANCEL' },
		{ keyword:'closeButtonLabel', type:'String',  pro:' 关闭按钮显示文本 => CLOSE' },
		{ keyword:'closeButtonTooltip', type:'String',  pro:' 关闭按钮显示提示文本 => Close' },
		{ keyword:'continueButtonLabel', type:'String',  pro:' 继续按钮显示文本 => CONTINUE' },
		{ keyword:'copyButtonLabel', type:'String',  pro:' 复制按钮显示文本 => COPY' },
		{ keyword:'cutButtonLabel', type:'String',  pro:' 剪切按钮显示文本 => CUT' },
		{ keyword:'pasteButtonLabel', type:'String',  pro:'粘贴按钮显示文本 => PASTE' },
		{ keyword:'deleteButtonTooltip', type:'String',  pro:' 删除按钮显示文本 => Delete' },
		{ keyword:'dialogLabel', type:'String',  pro:' 弹窗显示文本 => Dialog' },
		{ keyword:'drawerLabel', type:'String',  pro:' 抽屉显示文本 => Navigation menu' },
		{ keyword:'expandedIconTapHint', type:'String',  pro:'显示文本 => Collapse' },
		{ keyword:'hideAccountsLabel', type:'String',  pro:'显示文本 => Hide accounts' },
		{ keyword:'licensesPageTitle', type:'String',  pro:'Licenses 显示标题文本 => Licenses' },
		{ keyword:'modalBarrierDismissLabel', type:'String',  pro:'显示文本 => Dismiss' },
		{ keyword:'okButtonLabel', type:'String',  pro:'确定按钮显示文本 => OK' },
		{ keyword:'openAppDrawerTooltip', type:'String',  pro:'打开抽屉显示提示文本 => Open navigation menu' },
		{ keyword:'popupMenuLabel', type:'String',  pro:'弹窗菜单显示文本 => Popup menu' },
		{ keyword:'rowsPerPageTitle', type:'String',  pro:'每页多少行显示文本 => Rows per page:' },
		{ keyword:'scriptCategory', type:'String',  pro:'显示文本 => ScriptCategory.englishLike' },
		{ keyword:'refreshIndicatorSemanticLabel', type:'String',  pro:'刷新显示文本 => Refresh' },
		{ keyword:'searchFieldLabel', type:'String',  pro:'搜索显示文本 => Search' },
		{ keyword:'selectAllButtonLabel', type:'String',  pro:'选择全部显示文本 => SELECT ALL' },
		{ keyword:'showAccountsLabel', type:'String',  pro:'显示账号显示文本 => Show accounts' },
		{ keyword:'showMenuTooltip', type:'String',  pro:'显示菜单显示文本 => Show menu' },
		{ keyword:'signedInLabel', type:'String',  pro:'登录显示文本 => Signed in' },
		{ keyword:'timePickerHourModeAnnouncement', type:'String',  pro:'选择小时显示文本 => Select hours' },
		{ keyword:'timePickerMinuteModeAnnouncement', type:'String',  pro:'选择分钟显示文本 => Select minutes' },
		{ keyword:'viewLicensesButtonLabel', type:'String',  pro:'查看许可显示文本 => VIEW LICENSES' },
		
		{ keyword:'nextMonthTooltip', type:'String',  pro:'下一个月显示文本 => Next month' },
		{ keyword:'previousMonthTooltip', type:'String',  pro:'上一个月显示文本 => Previous month' },
		
		{ keyword:'nextPageTooltip', type:'String',  pro:'下一页显示文本 => Next page' },
		{ keyword:'previousPageTooltip', type:'String',  pro:'上一页显示文本 => Previous page' },
		
		{ keyword:'anteMeridiemAbbreviation', type:'String',  pro:'上午显示文本 => AM' },
		{ keyword:'postMeridiemAbbreviation', type:'String',  pro:'下午显示文本 => PM' },
		
		{ keyword:'reorderItemUp', type:'String',  pro:'上移显示文本 => Move up' },
		{ keyword:'reorderItemDown', type:'String',  pro:'下移显示文本 => Move down' },
		{ keyword:'reorderItemLeft', type:'String',  pro:'左移显示文本 => Move left' },
		{ keyword:'reorderItemRight', type:'String',  pro:'右移显示文本 => Move right' },
		
		{ keyword:'reorderItemToStart', type:'String',  pro:'移到最前显示文本 => Move to the start' },
		{ keyword:'reorderItemToEnd', type:'String',  pro:'移到最后显示文本 => Move to the end' },
		
		{ keyword:'firstDayOfWeekIndex', type:'int',  pro:' => 0' },
		{ keyword:'narrowWeekdays', type:'List<String>',  pro:'星期文字 => [S, M, T, W, T, F, S]' },
		
		{ deviceTitle:'方法', keyword:'aboutListTileTitle( )', type:'String Function( String )',  pro:'' },
		{ keyword:'formatDecimal( )', type:'String Function( int )',  pro:'将数字转为字符串', code:[{path:'flutter/style/locale/MaterialLocalizations/formatDecimal'}] },
		{ keyword:'formatFullDate( )', type:'String Function( DateTime )',  pro:'将时间转为完整时间字符串', code:[{path:'flutter/style/locale/MaterialLocalizations/formatFullDate'}] },
		{ keyword:'formatMediumDate( )', type:'String Function( DateTime )',  pro:'将时间转为简写时间字符串', code:[{path:'flutter/style/locale/MaterialLocalizations/formatMediumDate'}] },
		{ keyword:'formatMinute( )', type:'String Function( DateTime )',  pro:'将时间转为分钟字符串' },
		{ keyword:'formatMonthYear( )', type:'String Function( DateTime )',  pro:'将时间转为年月字符串', code:[{path:'flutter/style/locale/MaterialLocalizations/formatMonthYear'}] },
		{ keyword:'formatYear( )', type:'String Function( DateTime )',  pro:'将时间转为年字符串' },
		{ keyword:'formatHour( )', type:'String Function( TimeOfDay, {alwaysUse24HourFormat: bool} )',  pro:'将时间转为小时字符串', code:[{path:'flutter/style/locale/MaterialLocalizations/formatHour'}] },
		{ keyword:'formatTimeOfDay( )', type:'String Function( TimeOfDay, {alwaysUse24HourFormat: bool} )',  pro:'将时间转为时分字符串', code:[{path:'flutter/style/locale/MaterialLocalizations/formatTimeOfDay'}] },
	
		{ keyword:'pageRowsInfoTitle( )', type:'String Function( int firstRow, int lastRow, int rowCount, bool rowCountIsApproximate )',  pro:'', code:[{path:'flutter/style/locale/MaterialLocalizations/pageRowsInfoTitle'}] },
		{ keyword:'remainingTextFieldCharacterCount( )', type:'String Function( int )',  pro:'', code:[{path:'flutter/style/locale/MaterialLocalizations/remainingTextFieldCharacterCount'}] },
		{ keyword:'selectedRowCountTitle( )', type:'String Function( int )',  pro:'', code:[{path:'flutter/style/locale/MaterialLocalizations/selectedRowCountTitle'}] },
		{ keyword:'tabLabel( )', type:'String Function( {tabIndex: int, tabCount: int} )',  pro:'', code:[{path:'flutter/style/locale/MaterialLocalizations/tabLabel'}] },
		{ keyword:'timeOfDayFormat( )', type:'TimeOfDayFormat Function( {alwaysUse24HourFormat: bool} )',  pro:'', code:[{path:'flutter/style/locale/MaterialLocalizations/timeOfDayFormat'}] },
		 
	]
}
export default class Index extends React.Component{ render(){ return <ListComponent data={data} {...this.props}/> } }