Ext.define('ModernApp.view.home.HomeView', {
    xtype: 'homeview',
    cls: 'homeview',
    controller: {type: 'homeviewcontroller'},
    viewModel: {type: 'homeviewmodel'},
    requires: [
        'Ext.layout.HBox',
        'Ext.layout.VBox',
        'Ext.Button',
        'Ext.Panel'
    ],
    extend: 'Ext.Container',
    scrollable: true,

    items: [{
        xtype: 'panel',
        title: 'Биржевые инвестиционные фонды',
        flex: 1,
    }, {
        text: 'Добавить:'
    }, {
        xtype: 'textfield',
        width: 400,
        ui: 'raised',
        placeholder: 'Вставьте ссылку',
        style: {
            'padding-left': '15px'
        }
    }, {
        xtype: 'container',
        cls: 'button',
        flex: 1,
        minHeight: 20,
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
        }]
    }, {
        xtype: 'homegrid',
    }, {
        xtype: 'button'
    }]


});