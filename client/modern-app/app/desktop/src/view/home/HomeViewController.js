Ext.define('ModernApp.view.home.HomeViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.homeviewcontroller',
    requires: 'ModernApp.view.home.HomeViewModel',

    addRow: async function () {
        Ext.Ajax.request({
            url: 'http://localhost:8082/currencies/add',
            method: 'GET',
            timeout: 300000,
        })
        await this.sleep(100);
        Ext.getCmp('homeGrid').getStore().reload();
    },

    onDelete: function () {
        var selection = this.getSelectedModel();
        Ext.Msg.show({
            scope: this,
            title: 'Удалить?',
            message: 'Вы действительно хотите удалить запись?',
            buttons: [{
                text: "Да",
                itemId: 'ok'
            }, {
                text: "Нет",
                itemId: 'cancel'
            }],
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'ok') {
                    var store = Ext.getCmp('homeGrid').getStore();
                    store.remove(selection);
                    this.showForm(false);
                    Ext.Ajax.request({
                        url: 'http://localhost:8082/currencies/delete/'+ selection.data.id,
                        method: 'DELETE',
                        timeout: 300000,
                    })
                }
            }
        });
    },

    editHeadRow: function (list, location, eOpts) {
        var model = this.getSelectedModel();
        this.showForm(true);
        Ext.getCmp('date').setValue(model.get('date'));
        Ext.getCmp('usd').setValue(model.get('usd'));
        Ext.getCmp('eur').setValue(model.get('eur'));
    },

    showForm: function (isShow) {
        var window = Ext.getCmp('configWindow');

        if (Ext.isEmpty(window)) {
            window = Ext.create('ModernApp.view.home.Window', {
                controller: this,
            })
        }
        if (isShow)
            window.show();
        else
            window.hide();
    },

    getSelectedModel: function () {
        return Ext.getCmp('homeGrid').getViewModel().get('item.selected').clone();
    },

    onCancel: function () {
        this.showForm(false);
        this.setModel(null);
    },

    setModel: function (model) {
        return Ext.getCmp('homeGrid').getViewModel().set('currencies.item', model);
    },

    onSave: async function () {
        var selection = this.getSelectedModel();
        var items = Ext.getCmp('configWindow').getItems().items[0].items;
        var date = items.map.date.rawValue;
        var id = selection.data.id;
        var usd = items.map.usd.rawValue;
        var eur = items.map.eur.rawValue;
        Ext.Ajax.request({
            url: 'http://localhost:8082/currencies/update/' + id,
            method: 'PUT',
            timeout: 300000,
            jsonData: {
                id: id,
                date: date,
                usd: usd,
                eur: eur,
            },
            success: function (){
                console.log('Успешно');
            },
            failure: function(){console.log('failure');}
        })
        this.showForm(false);
        await this.sleep(1000);
        Ext.getCmp('homeGrid').getStore().reload()
    },

    sleep: function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    },

    loadMask: function () {
        var myMask = new Ext.LoadMask({
            msg    : 'Please wait...',
            target : myPanel
        });
        return myMask;
    }

});
