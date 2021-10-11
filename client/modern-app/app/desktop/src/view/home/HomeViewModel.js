Ext.define('ModernApp.view.home.HomeViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.homeviewmodel',
	data: {
		name: 'homeview',
		style: '',
		type: 'text',
		round: false,
		disabled: false
	},
	fields: [
		'name', 'email', 'phone'
	],
	formulas: {
		type: function(getter) {
			return getter('buttonType.value');
		},
		style: function(getter) {
			return getter('buttonStyle.value');
		}
	}
});
