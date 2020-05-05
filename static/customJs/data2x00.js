interactiveCanvas.ready({
    onUpdate(data) {
        document.querySelectorAll(".data-choice").forEach(btn => {
            btn.addEventListener("click", elem => {
                interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
            });
        });
        if (data.data) {
            let newData = data.data;
            let buttons = newData.components[0].buttons;
            document.querySelector("#title").innerHTML = newData.components[1].texts[0];
            document.querySelectorAll(".button").forEach((btn, index) => {
                btn.innerHTML = buttons[index].name;
                let dataChoice = buttons[index].type + ",common(),"
                    + buttons[index].actions;
                btn.setAttribute("data-choice", dataChoice);
            });
        }
        if(document.querySelector(".input-text-2400")) {
            document.querySelector(".input-text-2400").value = data.listInputForm[2400] != undefined ? data.listInputForm[2400] : null;
        }
       if (document.querySelector(".input-text-2300")) {
        document.querySelector(".input-text-2300").value = data.listInputForm[2300] != undefined ? data.listInputForm[2300] : null;
       }
       if(document.querySelector(".input-text-2200")) {
        document.querySelector(".input-text-2200").value = data.listInputForm[2200] != undefined ? data.listInputForm[2200] : null;
       }
       if( document.querySelector(".input-text-2100")) {
        document.querySelector(".input-text-2100").value = data.listInputForm[2100] != undefined ? data.listInputForm[2100] : null;
       }
    }
});