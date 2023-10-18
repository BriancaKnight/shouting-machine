let fontSize = 12
function getUserSub() {
    let form = document.querySelector("form");
    form.onsubmit = function(e) {
        e.preventDefault();
        fontSize = fontSize + 5;
        const userSub = document.getElementById("userSub").value;
        const result = userSub.toUpperCase();
        document.querySelector("span#result").innerText = result;
        let sizestring = fontSize.toString();
        document.querySelector("span#result").style.fontSize = sizestring + "px";
    }
}

window.onload = function(){
  getUserSub();
}

// sizestring.style.fontsize
// document.getElementById("demo").style.fontsize = fontsize;