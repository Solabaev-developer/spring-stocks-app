Ext.define('ModernApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    addRow: async function () {
        var url = Ext.getCmp('addRowField').rawValue;
        Ext.Ajax.request({
            url: 'http://localhost:8082/stocks/add',
            method: 'PUT',
            timeout: 300000,
            jsonData: {
                url: url
            },
            success: function () {
                console.log('Успешно');
            },
            failure: function (responce) {
                console.log(responce);
            }
        })
        debugger;
        await this.sleep(1500);
        Ext.getCmp('personnelView').getStore().reload();
    },


    showForm: function (isShow) {
        var window = Ext.getCmp('personnelWindow');

        if (Ext.isEmpty(window)) {
            window = Ext.create('ModernApp.view.personnel.Window', {
                controller: this,
            })
        }
        if (isShow)
            window.show();
        else
            window.hide();
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
                    var store = Ext.getCmp('personnelView').getStore();
                    store.remove(selection);
                    this.showForm(false);
                    Ext.Ajax.request({
                        url: 'http://localhost:8082/stocks/delete/' + selection.data.id,
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
        Ext.getCmp('name').setValue(model.get('name'));
        Ext.getCmp('priceUsd').setValue(model.get('priceUsd'));
        Ext.getCmp('priceEur').setValue(model.get('priceEur'));
        Ext.getCmp('priceRub').setValue(model.get('priceRub'));
        Ext.getCmp('dateUpd').setValue(model.get('dateUpd'));
    },

    onSave: async function () {
        var selection = this.getSelectedModel();
        var items = Ext.getCmp('personnelWindow').getItems().items[0].items;
        var name = items.items[1].rawValue;
        var usd = items.items[2].rawValue;
        var eur = items.items[3].rawValue;
        var rub = items.items[4].rawValue;
        var date = items.items[5].rawValue;
        var id = selection.data.id;

        Ext.Ajax.request({
            url: 'http://localhost:8082/stocks/update/' + id,
            method: 'PUT',
            timeout: 300000,
            jsonData: {
                id: id,
                priceUsd: usd,
                dateUpd: date,
                name: name,
                priceRub: rub,
                priceEur: eur,
            },
            success: function () {
                console.log('Успешно');
            },
            failure: function (responce) {
                console.log(responce);
            }
        })
        await this.sleep(1000);
        this.showForm(false);
        Ext.getCmp('personnelView').getStore().reload()
    },

    onShowFilters: function () {
        if (this.getViewModel().get('showFilter') === false) {
            this.getViewModel().set('showFilter', true);
        } else this.getViewModel().set('showFilter', false);
    },

    doFilter: function () {
        var value = this.getViewModel().get('filterName');
        var store = Ext.getCmp('personnelView').getStore();
        var fields = store.getData().items;
        var fieldsAfterSort = 0;
        for (var i = 0; i < fields.length; i++) {
            if(fields[i].data.name === value || fields[i].data.name.toLocaleUpperCase() === value) {
                store.filter('name', fields[i].data.name)
            } else fieldsAfterSort++;
        }
        if (fields.length === fieldsAfterSort) {
            Ext.Msg.alert('Неверное значение', 'Значения не найдены!')
        }
    },

    onClearFilters: function () {
        Ext.getCmp('personnelView').getStore().clearFilter();
    },

    sleep: function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    },

    privates: {
        pressEnter: function (textField, e, eOpts) {
            if (e.getKey() === e.ENTER) {
                this.doFilter();
            }
        },

        getSelectedModel: function () {
            return Ext.getCmp('personnelView').getViewModel().get('item.selected').clone();
        },

        onCancel: function () {
            this.showForm(false);
            this.setModel(null);
        },

        setModel: function (model) {
            return Ext.getCmp('personnelView').getViewModel().set('item', model);
        }
    }
});
