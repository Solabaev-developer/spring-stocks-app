Ext.define('ModernApp.view.home.HomeViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.homeviewmodel',

	fields: [
		{ name: 'id'},
		{ name: 'date'},
		{ name: 'usd'},
		{ name: 'eur'}
	],
});
