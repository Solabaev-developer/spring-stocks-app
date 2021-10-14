Ext.define('ModernApp.view.home.Store', {
    extend: 'Ext.data.Store',
    alias: 'store.homegridstore',
    autoLoad: true,
    storeId: 'currenciesStore',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8081/currencies/all',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
