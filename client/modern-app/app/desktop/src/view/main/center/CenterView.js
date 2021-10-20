Ext.define('ModernApp.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	viewModel: {type: 'homeviewmodel'},
	requires: [
		'ModernApp.view.home.HomeViewModel'
	],
	cls: 'centerview',
	layout: 'card'
});
