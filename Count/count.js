'use strict';

let count = 0;
let mod = 1;
let cost = 20;
let totalCount = count;

let countBtn = document.querySelector("#countBtn");
let saveBtn = document.querySelector("#saveBtn");
let modBtn = document.querySelector("#modBtn");

let valueC = document.querySelector("#counter");
let saveTop = document.querySelector('#saveTop');
let modValue = document.querySelector("#modValue");

document.querySelector("#modBtn").innerHTML = "Trade " + cost + " count for 0.5 modifier";

if (sessionStorage.getItem("Saved")) {
    saveTop.value = sessionStorage.getItem("Saved");
}

saveBtn.addEventListener("click", function () {
    sessionStorage.setItem("Saved", count);
    saveTop.value = sessionStorage.getItem("Saved");
})

countBtn.addEventListener("click", function () {
    count += 1 * mod;
    updateCount();
})

function updateCount() {
    valueC.innerText = count;
}

modBtn.addEventListener("click", function () {
    if (count >= 20) {
        count -= 20;
        mod += 0.5;
        modValue.value = mod;
        cost += 5;
        document.querySelector("#modBtn").innerHTML = "Trade " + cost + " count for 0.5 modifier";
        updateCount();
    }
})



