Ext.define('ModernApp.view.home.Window', {
    extend: 'Ext.window.Window',
    xtype: 'homeview-window',
    id: 'configWindow',
    viewModel: {type: 'homeviewmodel'},
    requires: [
        'ModernApp.view.home.FormBase',
        'ModernApp.view.home.HomeViewModel'
    ],
    height: 330,
    width: 550,
    resizable: true,
    layout: 'fit',
    modal: true,
    floating: true,
    closable: false,
    closeAction: 'destroy',
    items: { xtype: 'homeview-form', id: 'ConfigForm' }
});