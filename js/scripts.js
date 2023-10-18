function getUserSub() {
    let form = document.querySelector("form");
    form.onsubmit = function(e) {
        e.preventDefault();
        const userSub = document.getElementById("userSub").value;
        result = userSub.toUpperCase();
        document.querySelector("span#result").innerText = result;
    }
}

window.onload = function(){
  getUserSub();
}