var i = 0;
function reset() {
    i = 0;
    var count = document.getElementById("count");
    count.innerHTML = i;
};

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
