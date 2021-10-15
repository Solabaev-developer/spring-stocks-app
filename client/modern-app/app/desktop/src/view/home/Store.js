Ext.define('ModernApp.view.home.Store', {
    extend: 'Ext.data.Store',
    alias: 'store.homegridstore',
    autoLoad: true,
    storeId: 'currenciesStore',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8082/currencies/all',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        headers: {'Content-Type': "text/plain" },
        useDefaultXhrHeader: false
    }
});
