Ext.define('ModernApp.view.personnel.Window', {
    extend: 'Ext.window.Window',
    xtype: 'personnel-window',
    id: 'personnelWindow',
    viewModel: {type: 'personnelviewmodel'},
    requires: [
        'ModernApp.view.personnel.FormBase',
        'ModernApp.view.personnel.PersonnelViewModel'
    ],
    height: 330,
    width: 550,
    resizable: true,
    layout: 'fit',
    modal: true,
    floating: true,
    closable: false,
    closeAction: 'destroy',
    items: { xtype: 'personnel-form', id: 'personnelForm' }
});