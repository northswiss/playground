"use strict"

let activeInput = document.getElementById("active"),
    container = document.querySelector("#container"),
    del = document.createElement("span")

del.innerHTML = "X"

activeInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        let $this = e.currentTarget,
            dupe = $this.cloneNode(true)

        dupe.classList.remove("empty")
        dupe.id = ""
        dupe.classList.add("filled")
        container.insertBefore(dupe, activeInput)
        $this.value = ""
    }
});