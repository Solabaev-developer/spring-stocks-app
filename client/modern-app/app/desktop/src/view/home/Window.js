Ext.define('ModernApp.view.home.Window', {
    extend: 'Ext.window.Window',
    xtype: 'homeview-window',
    id: 'configWindow',
    requires: [
        'ModernApp.view.home.FormBase'
    ],
    height: 330,
    width: 550,
    resizable: true,
    layout: 'fit',
    modal: true,
    floating: true,
    closable: false,
    closeAction: 'hide',
    items: { xtype: 'homeview-form' }
});