// this sets the background color of the master UIView (when there are no windows/tab groups on it)
var win1 = Ti.UI.currentWindow;
win1.backgroundColor = "blue";

var tableData = [];
var arrIDs = [];


var dbrows;
var row;
var myview = Ti.UI.createView({
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
    //layout:'horizontal'
});
win1.add(myview);

var delbut = Ti.UI.createButton({
    title: 'REMOVE',
    top: 10,
    left: 20
});
myview.add(delbut);

var table = Ti.UI.createTableView({
    top: 110
});
myview.add(table);

loadDB();

delbut.addEventListener('click', function (e) {
	
    for (var i = 0; i < arrIDs.length; i++) {
    	 var db = Ti.Database.install('shukran.sqlite', 'shukran');
        dbrows = db.execute("DELETE FROM bookmark WHERE id = ?", arrIDs[i]);
        
        db.close()
    }
    loadDB();
    
});

var tickBox;
var image;
var nameLabel;
var descLabel;
var ddateLabel;
var branddLabel;

function loadDB() {
    tableData = [];
    table.setData(tableData);
    var db = Ti.Database.install('shukran.sqlite', 'shukran');
    dbrows = db.execute('SELECT * FROM bookmark');
    while (dbrows.isValidRow()) {
    	//alert(" dbrows.fieldByName('iurl') = "+dbrows.fieldByName('iurl'));
        var row = Ti.UI.createTableViewRow({
            height: 'auto'
        });

        tickBox = Ti.UI.createButton({
            backgroundImage: 'tick_unchecked.png',
            width: 25,
            height: 25,
            checkBok: "tick",
            rowid: dbrows.fieldByName('id'),
            checked: false,
            left: 5,
            top: 15
        });

        var image = Titanium.UI.createImageView({
            image: dbrows.fieldByName('iurl'),
            top: 5,
            left: 35,
            height: 60,
            width: 60
        });
        nameLabel = Ti.UI.createLabel({
            text: dbrows.fieldByName('dname'),
            font: {
                fontSize: '12dp',
                fontWeight: 'bold'

            },
            height: 'auto',
            left: 70,
            top: 0,
            color: '#f00',
            touchEnabled: false
        });

        descLabel = Ti.UI.createLabel({
            text: dbrows.fieldByName('description'),
            font: {
                fontSize: '8dp'
            },
            height: 'auto',
            left: 80,
            top: '15dp',
            color: '#00f',
            touchEnabled: false
        });

        ddateLabel = Ti.UI.createLabel({
            text: dbrows.fieldByName('ddate'),
            font: {
                fontSize: '8dp',
                textAlign: 'right'
            },
            height: 'auto',
            left: 110,
            bottom: '2dp',
            color: '#999',
            touchEnabled: false
        });
        branddLabel = Ti.UI.createLabel({
            text: dbrows.fieldByName('ddate'),
            font: {
                fontSize: '8dp',
                textAlign: 'right'
            },
            height: 'auto',
            right: 10,
            bottom: '2dp',
            color: '#999',
            touchEnabled: false
        });

        row.add(tickBox);
        row.add(image);
        row.add(nameLabel);
        row.add(descLabel);
        row.add(ddateLabel);
        row.add(branddLabel);
        
        tableData.push(row);
        dbrows.next();
    }

    dbrows.close();
    table.setData(tableData);
    //table.appendRow(row);
    
    db.close();
    
};

table.addEventListener('click', function (e) {
    if (e.source.checkBok) {
        if (e.source.checked) {
            e.source.backgroundImage = 'tick_unchecked.png';
            e.source.checked = false;
        } else {
            e.source.backgroundImage = 'tick-checked.png';
            e.source.checked = true;

            arrIDs.push(e.source.rowid);

        }
    }
});

win1.open();
