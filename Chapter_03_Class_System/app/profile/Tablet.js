Ext.define('Chapter3ClassSystem.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        models: [],
        views: ['AkoLib.view.SplitView'],
        controllers: ['TabletController']
    },
    isActive: function () {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'akosplitview',
            screenTitle: 'Class System',
            menuButtonTitle: 'Demos',
            masterView: { 
                xtype: 'indexview'
            },
            detailView: {
                xtype: 'panel',
                html: 'Choose a demo from the menu'
            }
        });
    }
});

