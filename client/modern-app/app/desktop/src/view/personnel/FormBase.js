Ext.define('ModernApp.view.personnel.FormBase', {
    xtype: 'personnel-form',
    id: 'personnelForm',
    extend: 'Ext.form.Panel',
    modelValidation: true,
    viewModel: {type: 'personnelviewmodel'},
    bodyPadding: 10,
    controller: 'personnelviewcontroller',
    scrollable: 'y',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    requires: [
        'ModernApp.view.personnel.PersonnelViewModel',
        'ModernApp.view.personnel.PersonnelViewController'],
    defaults: {
        labelWidth: 110
    },
    items: [{
        text: 'Дата'
    }, {
        xtype: 'textfield',
        id: 'name',
        editable: true,

    }, {
        xtype: 'textfield',
        id: 'priceUsd',
        editable: true,

    }, {
        xtype: 'textfield',
        id: 'priceEur',
        editable: true,

    }, {
        xtype: 'textfield',
        id: 'priceRub',
        editable: true,

    }, {
        xtype: 'textfield',
        id: 'dateUpd',
        editable: true,

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