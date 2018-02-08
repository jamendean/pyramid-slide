pyrHeight = ""
bricktype = ""

heightElem = function(height) {
    pyrHeight = height;
    showRange();
    drawPyramid();
}

function showRange() {
    var rangeValue = pyrHeight;
    document.getElementById("range-text").innerHTML = rangeValue;
}

brickSymbol = function(symbol) {
    bricktype = symbol;
    drawPyramid();
}


function drawPyramid() {

    document.getElementById("pyramid").innerHTML = "";

    height = pyrHeight
    if (bricktype == "") {
        symbol = "#";
    } else {
        symbol = bricktype;
    }

    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}