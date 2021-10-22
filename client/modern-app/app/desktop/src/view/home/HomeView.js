Ext.define('ModernApp.view.home.HomeView', {
    xtype: 'homeview',
    cls: 'homeview',
    id: 'homeGrid',
    controller: {type: 'homeviewcontroller'},
    viewModel: {type: 'homeviewmodel'},
    requires: [
        'Ext.layout.HBox',
        'Ext.Button',
        'Ext.Panel',
        'ModernApp.view.home.Store',
        'ModernApp.view.home.Window',
        'ModernApp.view.home.FormBase',
        'ModernApp.view.home.HomeViewModel'
    ],
    extend: 'Ext.grid.Grid',
    scrollable: true,
    store: {type: 'homegridstore'},
    listeners: {
        childdoubletap: 'editHeadRow'
        },
    bind: {
        selection: '{item.selected}'
    },
    items: [{
        xtype: 'panel',
        title: 'Текущий курс валют',
        flex: 1,
        docked: 'top'
    }, {
        xtype: 'container',
        cls: 'button',
        flex: 1,
        minHeight: 20,
        docked: 'top',
        defaultType: 'button',
        defaults: {
            margin: '0 10'
        },
        layout: {
            type: 'hbox',
        },
        items: [{
            margin: '5 5 5 15',
            text: 'Добавить',
            ui: 'action',
            handler: 'addRow',
        },]
    }],
    columns: [{
        text: 'Дата', dataIndex: 'date', editable: true, width: 200
    }, {
        text: 'USD', dataIndex: 'usd', editable: true, width: 200
    }, {
        text: 'Eur', dataIndex: 'eur', editable: true, width: 200
    }]


});