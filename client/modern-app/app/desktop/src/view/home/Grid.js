Ext.define('ModernApp.view.home.Grid', {
    extend: 'Ext.grid.Grid',
    xtype: 'homegrid',
    id: "homeGrid",
    store: {data: [
        { name: 'Lisa',  email:"lisa@simpsons.com",  phone:"555-111-1224"  },
        { name: 'Bart',  email:"bart@simpsons.com",  phone:"555-222-1234" },
        { name: 'Homer', email:"home@simpsons.com",  phone:"555-222-1244"  },
        { name: 'Marge', email:"marge@simpsons.com", phone:"555-222-1254"  }
    ]},
    fields: ['name', 'email', 'phone'],
    columns: [
        { text: 'Name',  dataIndex: 'name'},
        { text: 'Email', dataIndex: 'email' },
        { text: 'Phone', dataIndex: 'phone'}
    ],
})