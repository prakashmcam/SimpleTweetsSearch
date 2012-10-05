Ti.UI.backgroundColor = '#dddddd';

var win = Ti.UI.createWindow({
    navbarHidden: false,
    title: 'Tweeter Search'
});

var head = Ti.UI.createView({
    top: 0,
    height: 70
});

var stext = Ti.UI.createTextField({
    height: 70,
    width: 400,
    left: 0
});

var sbutton = Ti.UI.createButton({
    title: "Search",
    height: 70,
    right: 0
});

head.add(stext);
head.add(sbutton);
win.add(head);
var table = Ti.UI.createTableView({
    top: 100,
    editable: true
});
win.add(table);
sbutton.addEventListener('click', function () {
    win.remove(table);
    var url = "http://search.twitter.com/search.json?q=" + stext.value;

    table = Ti.UI.createTableView({
        top: 100,
        editable: true,
        hasChild: true
    });
    var tableData = [];

    var json, tweets, fighter, i, row, nameLabel, nickLabel, textLabel;
    var count;

    var xhr = Ti.Network.createHTTPClient({
        onload: function () {
            // Ti.API.debug(this.responseText);

            json = JSON.parse(this.responseText);

            if (json.results.length < 10) count = json.results.length;
            else count = 10;
            for (i = 0; i < count; i++) {
                tweets = json.results[i];
                row = Ti.UI.createTableViewRow({
                    height: 'auto',
                    hasChild: true,
                    url: 'resultwindow.js',
                    iurl: tweets.profile_image_url,
                    iname: tweets.from_user,
                    itext: tweets.text,
                    idate: tweets.created_at,
                    id: tweets.from_user_id_str
                });


                var image = Titanium.UI.createImageView({
                    image: tweets.profile_image_url,
                    top: 5,
                    left: 5,
                    height: 60,
                    width: 60
                });
                nameLabel = Ti.UI.createLabel({
                    text: tweets.from_user,
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

                textLabel = Ti.UI.createLabel({
                    text: tweets.text,
                    font: {
                        fontSize: '8dp'
                    },
                    height: 'auto',
                    left: 80,
                    top: '15dp',
                    color: '#00f',
                    touchEnabled: false
                });

                nickLabel = Ti.UI.createLabel({
                    text: '"' + tweets.created_at + '"',
                    font: {
                        fontSize: '8dp',
                        textAlign: 'right'
                    },
                    height: 'auto',
                    right: 0,
                    bottom: '2dp',
                    color: '#999',
                    touchEnabled: false
                });

                row.add(image);
                row.add(nameLabel);
                row.add(textLabel);
                row.add(nickLabel);

                tableData.push(row);
            }

            table.setData(tableData);
        },
        onerror: function (e) {
            Ti.API.debug("STATUS: " + this.status);
            Ti.API.debug("TEXT:   " + this.responseText);
            Ti.API.debug("ERROR:  " + e.error);
            alert('There was an error retrieving the remote data. Try again.');
        },
        timeout: 5000
    });

    xhr.open("GET", url);
    xhr.send();

    win.add(table);
    table.addEventListener('click', function (e) {

        if (e.rowData.url) {

            var win1 = Titanium.UI.createWindow({
                //title:e.rowData.nameLabel.value,

                url: e.rowData.url,
                //navbarHidden: false,
                modal: true, // 'back' goes to previous window but no OptionMenu
                iurl: e.rowData.iurl,
                iname: e.rowData.iname,
                itext: e.rowData.itext,
                idate: e.rowData.idate,
                id: e.rowData.id
            });
		 var image = Titanium.UI.createImageView({
                    image: tweets.profile_image_url,
                    top: 5,
                    left: 5,
                    height: 150,
                    width: 150
                });
                var nameLabel = Ti.UI.createLabel({
                    text: tweets.from_user,
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

                var textLabel = Ti.UI.createLabel({
                    text: tweets.text,
                    font: {
                        fontSize: '8dp'
                    },
                    height: 'auto',
                    left: 80,
                    top: '15dp',
                    color: '#00f',
                    touchEnabled: false
                });

               var nickLabel = Ti.UI.createLabel({
                    text: '"' + tweets.created_at + '"',
                    font: {
                        fontSize: '8dp',
                        textAlign: 'right'
                    },
                    height: 'auto',
                    right: 0,
                    bottom: '2dp',
                    color: '#999',
                    touchEnabled: false
                });
		win1.add(image);
		win1.add(nameLabel);
		win1.add(textLabel);
		win1.add(nickLabel);
		// you may create your own design or forward the data to another window.
            win1.open();
        }

    });


});

win.open();
