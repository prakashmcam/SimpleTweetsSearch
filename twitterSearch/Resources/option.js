var win1 = Ti.UI.currentWindow;

var myview = Ti.UI.createView({
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'

});
win1.add(myview);
var donebutton = Ti.UI.createButton({
    title: 'Done',
    bottom: 200,
    left: 20,
    width:200
});
myview.add(donebutton);

var optA = Ti.UI.createButton({
    backgroundImage: 'tick_unchecked.png',
    width: 25,
    height: 25,
    checkBok: "tick",
    value: 'Option A',
    checked: false,
    left: 5,
    top: 50
});
myview.add(optA);
var optALabel = Ti.UI.createLabel({
    text: 'Option A',
    color: '#000',
    font: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue'
    },
    height: 'auto',
    left: 35,
    top: 50,
    touchEnabled: false
});
myview.add(optALabel);

var optB = Ti.UI.createButton({
    backgroundImage: 'tick_unchecked.png',
    width: 25,
    height: 25,
    checkBok: "tick",
    value: 'Option B',
    checked: false,
    left: 5,
    top: 80
});
myview.add(optB);
var optBLabel = Ti.UI.createLabel({
    text: 'Option B',
    color: '#000',
    font: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue'
    },
    height: 'auto',
    left: 35,
    top: 80,
    touchEnabled: false
});
myview.add(optBLabel);

var optC = Ti.UI.createButton({
    backgroundImage: 'tick_unchecked.png',
    width: 25,
    height: 25,
    checkBok: "tick",
    value: 'Option C',
    checked: false,
    left: 5,
    top: 120
});
myview.add(optC);
var optCLabel = Ti.UI.createLabel({
    text: 'Option C',
    color: '#000',
    font: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue'
    },
    height: 'auto',
    left: 35,
    top: 120,
    touchEnabled: false
});
myview.add(optCLabel);

var optD = Ti.UI.createButton({
    backgroundImage: 'tick_unchecked.png',
    width: 25,
    height: 25,
    checkBok: "tick",
    value: 'Option D',
    checked: false,
    left: 5,
    top: 150
});
myview.add(optD);
var optDLabel = Ti.UI.createLabel({
    text: 'Option D',
    color: '#000',
    font: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue'
    },
    height: 'auto',
    left: 35,
    top: 150,
    touchEnabled: false
});
myview.add(optDLabel);
var svalues=[];
var sv;

optA.addEventListener('click', test);
optB.addEventListener('click', test);
optC.addEventListener('click', test);
optD.addEventListener('click', test);

function test(e) {

    if (e.source.checkBok) {
        if (e.source.checked) {
            e.source.backgroundImage = 'tick_unchecked.png';
            e.source.checked = false;
            svalues.pop(e.source.value);
        } else {
            e.source.backgroundImage = 'tick-checked.png';
            e.source.checked = true;
            svalues.push(e.source.value);
        }
    }
 }
    donebutton.addEventListener('click', function (e) {
 	
		alert(svalues.length);
       

    });