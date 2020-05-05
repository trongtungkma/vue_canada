interactiveCanvas.ready({
    onUpdate(data) {
        document.querySelectorAll(".data-choice").forEach(btn => {
            btn.addEventListener("click", elem => {
                interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
            });
        });
        let newData = data.data;
        if (newData) {
            let buttons = newData.components[0].buttons;
            document.querySelector(".title-1700").innerHTML = newData.components[1].texts[0];
            document.querySelectorAll(".button").forEach((btn, index) => {
                btn.innerHTML = buttons[index].name;
                let dataChoice = buttons[index].type + `,command(${buttons[index].name}),`
                    + buttons[index].actions;
                btn.setAttribute("data-choice", dataChoice);
            });
            document.getElementById("box-1700").innerText=data.listCommand[1200];
            document.getElementById("box-input-1300").innerText = data.listInputForm[1300];
            document.getElementById("box-input-1400").innerText = data.listInputForm[1400];
            document.getElementById("box-input-1500").innerText = data.listInputForm[1500];
            document.getElementById("box-input-1600").innerText = data.listInputForm[1600];
        }
    }
});