Ext.define('ModernApp.view.personnel.PersonnelView', {
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    id: 'personnelView',
    listeners: {
        childdoubletap: 'editHeadRow'
    },
    bind: {
        selection: '{item.selected}'
    },
    plugins: {
        gridfilters: true
    },
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
        bind: {value: '{stocksAdd}'}
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
        }, {
            text: 'Фильтры',
            margin: '5 5 5 15',
            tooltip: 'Show filter data for the store',
            handler: 'onShowFilters',
            ui: 'action'
        }, {
            text: 'Очистить фильтры',
            margin: '5 5 5 15',
            tooltip: 'Clear all filters',
            handler: 'onClearFilters',
            ui: 'action'
        }]
    }, {
        xtype: 'container',
        docked: 'top',
        layout: {
            type: 'vbox'
        },
        bind: {hidden: '{showFilter}'},
        items: [{
            xtype: 'textfield',
            width: 300,
            ui: 'raised',
            placeholder: 'Введите наименование',
            bind: { value: '{filterName}'},
            listeners: {
                specialKey: 'pressEnter',
            },
            style: {
                'padding-left': '15px',
                'padding-top': '5px'
            }
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
            dataIndex: 'dateUpd',
            editable: true,
            width: 150
        }
    ],
});
