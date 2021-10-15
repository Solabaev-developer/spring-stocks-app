Ext.define('ModernApp.view.home.FormBase', {
    xtype: 'homeview-form',
    extend: 'Ext.form.Panel',
    modelValidation: true,
    viewModel: {type: 'homeviewmodel'},
    bodyPadding: 10,
    scrollable: 'y',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    requires: ['Ext.app.ViewModel'],
    defaults: {
        labelWidth: 110
    },
    items: [{
        text: 'Дата'
    }, {
        xtype: 'textfield',
        editable: true,
        bind: {
            value: '{currencies.item.date}'
        }
    }, {
        xtype: 'textfield',
        editable: true,
        bind: {
            value: '{currencies.item.usd}'
        }
    }, {
        xtype: 'textfield',
        editable: true,
        bind: {
            value: '{currencies.item.eur}'
        }
    }],
    buttons: [{
        text: 'Сохранить',
        handler: 'onSave'
    }, {
        text: 'Удалить',
        handler: 'onDelete'
    }, {
        text: 'Закрыть',
        handler: 'onCancel'
    }
    ]
});