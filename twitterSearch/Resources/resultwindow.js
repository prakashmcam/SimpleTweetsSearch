var win = Ti.UI.currentWindow;

Titanium.UI.setBackgroundColor('red');



var dbrows;


var view = Ti.UI.createView({
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
    //layout:'horizontal'
});
win.add(view);

var back = Ti.UI.createButton({
    title: 'Back',
    top: 0,
    left: 0

});
view.add(back);

var image = Titanium.UI.createImageView({
    image: win.iurl,
    top: 100,
    left: 50,
    height: 200,
    width: 350,

});
view.add(image);

nameLabel = Ti.UI.createLabel({
    text: win.iname,
    color: '#4878A9',
    font: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue'
    },
    height: 'auto',
    left: 50,
    top: 310,
    touchEnabled: false
});
view.add(nameLabel);


desLabel = Ti.UI.createLabel({
    text: win.itext,
    color: '#4878A9',
    font: {
        fontSize: 16,
        fontFamily: 'Helvetica Neue'
    },
    height: 'auto',
    left: 100,
    top: 370,
    touchEnabled: false
});
view.add(desLabel);


dateLabel = Ti.UI.createLabel({
    text: win.idate,
    color: '#000',
    font: {
        fontSize: '12dp',
        fontFamily: 'Helvetica Neue'
    },
    height: 'auto',
    left: 10,
    bottom: 250,
    touchEnabled: false
});
view.add(dateLabel);

brandLabel = Ti.UI.createLabel({
    text: 'Brand Name',
    color: '#000',
    font: {
        fontSize: '12dp',
        fontFamily: 'Helvetica Neue'
    },
    height: 'auto',
    right: 10,
    bottom: 250,
    touchEnabled: false
});
view.add(brandLabel);


var bmrk = Ti.UI.createButton({
    title: 'Bookmark',
    bottom: 100,
    left: 10

});
view.add(bmrk);
bmrk.addEventListener('click', function (e) {
	var db = Ti.Database.install('shukran.sqlite', 'shukran');
    dbrows = db.execute("insert into bookmark values( ?, ?, ?, ?, ?, ?)", win.id, win.iname, win.itext, win.idate, 'brandname', win.iurl);
    db.close();
    alert('success');
});
var bookmark1 = Ti.UI.createButton({
    title: 'Manage Bookmark',
    bottom: 100,
    left: 200

});
view.add(bookmark1);
bookmark1.addEventListener('click', function (e) {
    var win1 = Titanium.UI.createWindow({
        url: 'Bookmark.js'
    });
    win1.open();
});
var opt = Ti.UI.createButton({
    title: 'optionspage',
    bottom: 10,
    left: 200

});
view.add(opt);
opt.addEventListener('click', function (e) {
    var win1 = Titanium.UI.createWindow({
        url: 'option.js'
    });
    win1.open();
});


win.leftNavButton = back;
back.addEventListener('click', function () {
    // navGroup.close(win);
    win.close();
});

