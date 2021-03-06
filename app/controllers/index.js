var win = Ti.UI.createWindow({backgroundColor: 'white', fullscreen: true, title: 'Search'});
var navWin = Ti.UI.iOS.createNavigationWindow({window: win});

var listView = Ti.UI.createListView();
if (OS_IOS) {
	listView.style = Titanium.UI.iPhone.ListViewStyle.GROUPED;
}

var sections = [];
var fromSection = Ti.UI.createListSection({ headerTitle: 'From'});
var fromDataSet = [
    {properties: { title: 'Point A', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}, template: Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT}
];
fromSection.setItems(fromDataSet);
sections.push(fromSection);

var toSection = Ti.UI.createListSection({ headerTitle: 'To'});
var toDataSet = [
    {properties: { title: 'Point B', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE}, template: Ti.UI.LIST_ITEM_TEMPLATE_DEFAULT}
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

var searchButton = Titanium.UI.createButton({
   title: 'Search',
   top: 225,
   width: 100,
   height: 50
});
searchButton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked search button");
   var newWindow = Titanium.UI.createWindow({
        title:'New Window',
        backgroundColor:'#AAA',
    });
    /*
    newWindow.addEventListener('click',function(eventObject){
            alert("Window is Clicked");
        });*/
    
    var backButton = Ti.UI.createButton({
    //backgroundImage: 'images/back.png',
    font: { fontSize: 13, fontWeight: 'bold' },
    height: 28,
    title: " Back",
    width: 51
	});
    newWindow.leftNavButton = backButton;
    backButton.addEventListener('click', function()
    {
    	Titanium.API.info('Back button was clicked'); // to confirm its being called
        // do the stuff here
        newWindow.close();
     });
    newWindow.open({modal:true});
});

win.add(listView);
win.add(searchButton);
navWin.open();