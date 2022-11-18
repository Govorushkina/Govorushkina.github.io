document.addEventListener("DOMContentLoaded", function () {

     const popup = document.getElementById("popup");
     popup.style.display = "none";


    window.addEventListener("popstate", function (e) {
      if (e.state.popup === "close") {
        hidePopUp();
      }
      if (e.state.popup === "open") {
        showPopUp();
      }
    });
    const closeBtn = document.getElementById("close-popup");
    closeBtn.addEventListener("click", hidePopUp);
    const popbtn = document.getElementById("popup-btn");
    popbtn.addEventListener("click", showPopUp);
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msg = document.getElementById("msg");
    const check = document.getElementById("check");
    const form = document.getElementById("send-form");
    const URL = "https://formcarry.com/s/HhDnMI-5UW_";
    name.value = localStorage.getItem("name");
    email.value = localStorage.getItem("email");
    msg.value = localStorage.getItem("msg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      toLocalStorage();
      let xhr = new XMLHttpRequest();
      let formData = new FormData(form);
      name.value = "";
      email.value = "";
      msg.value = "";
      check.checked = false;
      xhr.open("POST", URL, true);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.responseType = "json";
      xhr.send(formData);
      xhr.onload = function () {
        if (xhr.status !== 200) {
          alert(
            `Ошибка при выполнении запроса: ${xhr.status} - ${xhr.response.message}`
          );
        } else {
          alert(`Запрос удачно обработан!`);
          console.log(xhr.response);
        }
      };
      xhr.onerror = function () {
        alert("Вызвать запрос не удалось");
      };
    });
  });
  
  function toLocalStorage() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msg = document.getElementById("msg");
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("msg", msg.value);
  }
  function hidePopUp() {
    window.history.replaceState({ popup: "close" }, "popup", "./");
    const popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  function showPopUp() {
    window.history.pushState({ popup: "open" }, "popup", "?form");
    const popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
 
