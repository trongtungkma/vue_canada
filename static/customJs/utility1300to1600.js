let idScreen = "1300";
text1300 = "";
text1400 = "";
text1500 = "";
text1600 = "";

interactiveCanvas.ready({
    onUpdate(data) {
        console.log(data);
        if (data.data) {
            let newData = data.data;
            idScreen = newData.id;
            let buttons = newData.components[0].buttons;
            document.querySelector(`.title-1300`).innerHTML = newData.components[1].texts[0];
            document.querySelectorAll(".button").forEach((btn, index) => {
                btn.innerHTML = buttons[index].name;
                let dataChoice = buttons[index].type + ",command()," +
                    buttons[index].actions;
                btn.setAttribute("data-choice", dataChoice);
            });
            if (idScreen == "1300") {
                document.querySelector(".input-text").value = text1300;
            } else if (idScreen == "1400") {
                document.querySelector(".input-text").value = text1400;
            } else if (idScreen == "1500") {
                document.querySelector(".input-text").value = text1500;
            } else if (idScreen == "1600") {
                document.querySelector(".input-text").value = text1600;
            }

            document.querySelectorAll(".data-choice").forEach(btn => {
                btn.addEventListener("click", elem => {
                    interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
                });
            });

        }
        if (data.listInputForm) {
            if (idScreen == "1300") {
                text1300 = data.listInputForm[1300] || '';
                document.querySelector(".input-text").value = text1300;
            } else if (idScreen == "1400") {
                text1400 = data.listInputForm[1400] || '';
                document.querySelector(".input-text").value = text1400;
            } else if (idScreen == "1500") {
                text1500 = data.listInputForm[1500] || '';
                document.querySelector(".input-text").value = text1500;
            } else if (idScreen == "1600") {
                text1600 = data.listInputForm[1600] || '';
                document.querySelector(".input-text").value = text1600;
            }
        }

    }
});