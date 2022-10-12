function onClick(){
var kolvo=document.getElementById("kolvo").value;
var stoim=document.getElementById("stoim").value;
var result=document.getElementById("result");
var a;
var b;
 result.innerHTML = "";
a = kolvo;
b = stoim;
if (a>0 && a!=NaN && b>0 && b!=NaN)
result.innerHTML=a*b;    
else result.innerText="Данные введены неверно";    
}
window.document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    var b = document.getElementById("btn");
    b.addEventListener("click", onClick);
});
