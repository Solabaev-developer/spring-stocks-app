Ext.define('ModernApp.view.personnel.PersonnelViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.personnelviewmodel',
	data: {
		showFilter: true,
		filterName: '',
	},
	fields: [
		{ name: 'name'},
		{ name: 'priceUsd'},
		{ name: 'priceEur'},
		{ name: 'priceRub'},
		{ name: 'dateUpd'}
	],
});
