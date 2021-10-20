Ext.define('ModernApp.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    autoLoad: true,
    storeId: 'stocksStore',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8082/stocks/all',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        headers: {'Content-Type': "text/plain" },
        useDefaultXhrHeader: false
    }
});
