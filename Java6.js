function onClick(){
var kolvo=document.getElementById("kolvo").value;
var stoim=document.getElementById("stoim").value;
var resul=document.getElementById("resul");
var a;
var b;
 resul.innerHTML = "";
a = kolvo;
b = stoim;
if (a>0 && a!=NaN && b>0 && b!=NaN)
resul.innerHTML=a*b;    
else resul.innerText="Данные введены неверно";    
}
window.document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    var b = document.getElementById("btn");
    b.addEventListener("click", onClick);
});



var document;
var window;
var alert;
var console;

function updatePrice() {
    var kol = document.getElementById("kol").value;
    var s = document.getElementsByName("prodType");
    var select = s[0];
    var price = 0;
    var optionPrice;
    var checkDiv;
    var propPrice;
    var prodPrice;
    var checkboxes;
    var prices = getPrices();
    var priceIndex = parseInt(select.value) - 1;
    var radioDiv = document.getElementById("radios");
    var radios = document.getElementsByName("prodOptions");
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }
    if (select.value === "3" || select.value === "1") {
        radioDiv.style.display = "none";
    } else {
        radioDiv.style.display = "block";
    }
    radios.forEach(function (radio) {
        if (radio.checked) {
            optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });


    checkDiv = document.getElementById("checkboxes");
    if (select.value === "2" || select.value === "1") {
        checkDiv.style.display = "none";
    } else {
        checkDiv.style.display = "block";
    }


    checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {
                price += propPrice;
            }
        }
    });

    prodPrice = document.getElementById("result");
    prodPrice.innerHTML = (price * kol) + " рублей";
    if (/\D/.test(kol)) {
        prodPrice.innerHTML = "Неверные данные";
    }
}

function getPrices() {
    return {
        prodOptions: {
            option2: 20,
            option3: 30
        },
        prodProperties: {
            prop1: 10
        },
        prodTypes: [200, 300, 400]
    };
}

window.addEventListener("DOMContentLoaded", function () {

    var radioDiv = document.getElementById("radios");
    var s;
    var select;
    var radios;
    var checkboxes;
    var kol;
    radioDiv.style.display = "none";


    s = document.getElementsByName("prodType");
    select = s[0];

    select.addEventListener("change", function () {
        updatePrice();
    });


    radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            updatePrice();
        });
    });


    checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            updatePrice();
        });
    });

    kol = document.getElementById("kol");
    kol.oninput = function () {
        updatePrice();
    };

    updatePrice();
});



