var text = ["a Motion Designer", "a Graphic Designer", "an Illustrator"];
var counter = 0;
var inst = setInterval(change, 2000);

var elem = document.getElementById("nav-tagline");
var elemVal = "";
if (elem) {
    elemVal = elem.value;
}

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}

