Ext.define('ModernApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    addRow: function () {
        var url = Ext.getCmp('addRowField').rawValue;
        Ext.Ajax.request({
            url: 'http://localhost:8082/stocks/add',
            method: 'PUT',
            timeout: 300000,
            jsonData: {
                url: url
            },
            success: function (){
                console.log('Успешно');
            },
            failure: function(responce){console.log(responce);}
        })
        Ext.getCmp('personnelView').getStore().reload();
    },
});
