Ext.define('ModernApp.view.home.HomeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.homeviewcontroller',
    requires: 'ModernApp.view.home.HomeViewModel',

    addRow: function () {
        Ext.Ajax.request({
            url: 'http://localhost:8082/currencies/add',
            method: 'GET'
        })
        Ext.getCmp('homeGrid').getStore().reload()
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
