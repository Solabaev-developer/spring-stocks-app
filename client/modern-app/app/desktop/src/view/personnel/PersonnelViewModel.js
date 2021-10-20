Ext.define('ModernApp.view.personnel.PersonnelViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.personnelviewmodel',

	fields: [
		{ name: 'name'},
		{ name: 'priceUsd'},
		{ name: 'priceEur'},
		{ name: 'priceRub'},
		{ name: 'date'}
	],
});
