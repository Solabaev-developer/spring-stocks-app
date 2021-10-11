Ext.application({
    name: 'CarCatalog',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'panel',
                html: '<h2>Каталог автомобилей</h2>'
            }
        });
    }
});