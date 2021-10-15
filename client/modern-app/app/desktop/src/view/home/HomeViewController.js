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

    editHeadRow: function (list, location, eOpts) {
        var model = this.getSelectedModel();
        debugger;
        console.log(model);
        this.getViewModel().set('currencies.item', model);
        this.showForm(true);
    },

    showForm: function(isShow) {
        var window = Ext.getCmp('configWindow');

        if (Ext.isEmpty(window)) {
            window = Ext.create('ModernApp.view.home.Window', {
                controller: this
            })
        }
        if (isShow)
            window.show();
        else
            window.hide();
    },

    getSelectedModel: function () {
        return this.getViewModel().get('item.selected').clone();
    },

    onCancel: function () {
        this.showForm(false);
    },
});
