Ext.define('ModernApp.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [
		'Ext.layout.HBox',
		'Ext.layout.VBox',
		'Ext.Button',
		'Ext.Panel'
	],
	extend: 'Ext.Container',
 	scrollable: true,

	items: [{
		xtype: 'panel',
		title: 'Биржевые инвестиционные фонды',
		flex: 1,
	}, {

	}]




});