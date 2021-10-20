Ext.define('ModernApp.view.personnel.PersonnelView', {
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    id: 'personnelView',
    items: [{
        xtype: 'panel',
        title: 'Биржевые инвестиционные фонды',
        flex: 1,
        docked: 'top'
    }, {
        text: 'Добавить:'
    }, {
        xtype: 'textfield',
        width: 400,
        ui: 'raised',
        docked: 'top',
        id: 'addRowField',
        placeholder: 'Вставьте ссылку',
        style: {
            'padding-left': '15px',
            'padding-top': '5px'
        },
        bind: { value: '{stocksAdd}' }
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
            handler: 'addRow'
        }]
    },
    ],
    columns: [
        {
            text: 'Наименование',
            dataIndex: 'name',
            editable: true,
            width: 100,
            flex: 1,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Цена, доллар',
            dataIndex: 'priceUsd',
            editable: true,
            width: 230
        },
        {
            text: 'Цена, евро',
            dataIndex: 'priceEur',
            editable: true,
            width: 150
        },
        {
            text: 'Цена, рубль',
            dataIndex: 'priceRub',
            editable: true,
            width: 150
        },
        {
            text: 'Дата обновления',
            dataIndex: 'date',
            editable: true,
            width: 150
        }
    ],
});
