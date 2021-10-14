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
        'ModernApp.view.home.Store'
    ],
    plugins: [{
        type: 'grideditable'
    }],
    extend: 'Ext.grid.Grid',
    scrollable: true,
    store: {type: 'homegridstore'},
    items: [{
        xtype: 'panel',
        title: 'Текущий курс валют',
        flex: 1,
        docked: 'top'
    }, {
        text: 'Добавить:'
    }, {
        xtype: 'textfield',
        width: 200,
        ui: 'raised',
        docked: 'top',
        placeholder: 'Дата обновления',
        style: {
            'padding-left': '15px',
            'padding-top': '5px'
        },
        bind: {
            value: '{grid.item.name}'
        }
    }, {
        xtype: 'textfield',
        width: 200,
        ui: 'raised',
        docked: 'top',
        placeholder: 'Евро, руб',
        style: {
            'padding-left': '15px',
            'padding-top': '5px'
        },
        bind: {
            value: '{grid.item.username}'
        }
    }, {
        xtype: 'textfield',
        width: 200,
        ui: 'raised',
        docked: 'top',
        placeholder: 'Доллар, руб',
        style: {
            'padding-left': '15px',
            'padding-top': '5px'
        },
        bind: {
            value: '{grid.item.email}'
        }
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
        }, {
            xtype: 'button',
            text: 'Обновить данные',
            tooltip: 'Загрузить данные с единого портала бюджетной системы',
            handler: 'loadData'
        }]
    }],

    columns: [{
        text: 'Id', dataIndex: 'id', editable: true,
    }, {
        text: 'Дата', dataIndex: 'date', editable: true
    }, {
        text: 'USD', dataIndex: 'usd', editable: true
    }, {
        text: 'Eur', dataIndex: 'Eur', editable: true
    }]


});