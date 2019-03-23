var i = 0;
function plus() {
    i++;
    var count = document.getElementById("count");
    count.innerHTML = i;
};

function minus() {
    i--;
    var count = document.getElementById("count");
    count.innerHTML = i;
};

function reset() {
    i = 0;
    var count = document.getElementById("count");
    count.innerHTML = i;
};
