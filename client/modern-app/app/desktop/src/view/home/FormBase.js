Ext.define('ModernApp.view.home.FormBase', {
    xtype: 'homeview-form',
    id: 'configForm',
    extend: 'Ext.form.Panel',
    modelValidation: true,
    viewModel: {type: 'homeviewmodel'},
    bodyPadding: 10,
    scrollable: 'y',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    requires: ['ModernApp.view.home.HomeViewModel'],
    defaults: {
        labelWidth: 110
    },
    items: [{
        text: 'Дата'
    }, {
        xtype: 'textfield',
        id: 'date',
        editable: true,
        bind: { value: '{currencies.item.date}' }
    }, {
        xtype: 'textfield',
        id: 'usd',
        editable: true,
        bind: { value: '{currencies.item.usd}' }
    }, {
        xtype: 'textfield',
        id: 'eur',
        editable: true,
        bind: { value: '{currencies.item.eur}' }
    }],
    buttons: [{
        text: 'Сохранить',
        handler: 'onSave'
    }, {
        text: 'Удалить',
        id: 'delete',
        handler: 'onDelete'
    }, {
        text: 'Закрыть',
        handler: 'onCancel'
    }
    ]
});