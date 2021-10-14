Ext.define('ModernApp.view.home.HomeViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.homeviewcontroller',

	addRow: function () {
		console.log('привет');
		var model = Ext.create('ModernApp.view.home.HomeViewModel');
		this.getViewModel().set('grid.item', model);
		var store = Ext.getCmp('homeGrid').getStore();
		var currentData = this.getViewModel().get('grid.item');
		console.log(this.getViewModel().get('grid.item'));
		store.add(currentData)
		var officeDataStore = new Ext.data.JsonStore({
			proxy: new Ext.data.HttpProxy({
				url: 'https://jsonplaceholder.typicode.com/posts',
				method: 'POST'
			}),
			data: 'grid.item',
			autoLoad: true
		});
		console.log(officeDataStore.getData().getSource());
	},

	deleteRow: function () {
		var store = Ext.getCmp('homeGrid').getStore(),
			grid = Ext.getCmp('homeGrid'),
			sm = grid.getSelectionModel(),
			cp = sm.getCurrentPosition();
		if (!Ext.isEmpty(cp)) {
			var index = cp.rowIdx;
			store.removeAt(index);
		}
	},
});
