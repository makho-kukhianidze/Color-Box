var greenID = document.getElementById('greenID');
var redID = document.getElementById('redID');
var blueID = document.getElementById('blueID');
var pinkID = document.getElementById('pinkID');
var orangeID = document.getElementById('orangeID');

redID.addEventListener('click', function () {
    var x = document.getElementById("coloBox").querySelectorAll("div");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#ff5353c2";
        x[i].innerHTML = "<span> I am red box </span>";
    }
});

greenID.addEventListener('click', function () {
    var x = document.getElementById("coloBox").querySelectorAll("div");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#4db94d";
        x[i].innerHTML = "<span> I am green box </span>";

    }
});

blueID.addEventListener('click', function () {
    var x = document.getElementById("coloBox").querySelectorAll("div");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#7e7eff";
        x[i].innerHTML = "<span> I am blue box </span>";
    }
});

pinkID.addEventListener('click', function () {
    var x = document.getElementById("coloBox").querySelectorAll("div");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#df7ad0db";
        x[i].innerHTML = "<span> I am pink box </span>";
    }
});

orangeID.addEventListener('click', function () {
    var x = document.getElementById("coloBox").querySelectorAll("div");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#f3b138";
        x[i].innerHTML = "<span> I am orange box </span>";
    }
});

