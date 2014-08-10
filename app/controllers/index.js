var win = Ti.UI.createWindow({backgroundColor: 'white', fullscreen: true, title: 'Search'});
var navWin = Ti.UI.iOS.createNavigationWindow({window: win});

var listView = Ti.UI.createListView();
if (OS_IOS) {
	listView.style = Titanium.UI.iPhone.ListViewStyle.GROUPED;
}

var sections = [];
var fromSection = Ti.UI.createListSection({ headerTitle: 'From'});
var fromDataSet = [
    {properties: { title: 'Coppell', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}, template: Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT}
];
fromSection.setItems(fromDataSet);
sections.push(fromSection);

var toSection = Ti.UI.createListSection({ headerTitle: 'To'});
var toDataSet = [
    {properties: { title: 'Addison', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}, template: Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT}
];
toSection.setItems(toDataSet);
sections.push(toSection);

listView.sections = sections;
listView.addEventListener('itemclick', function(e){
    var item = e.section.getItemAt(e.itemIndex);
    if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        item.properties.color = 'red';
    }
    else {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        item.properties.color = 'black';
    }
    e.section.updateItemAt(e.itemIndex, item);
});


win.add(listView);
navWin.open();