interactiveCanvas.ready({
    onUpdate(data) {
        document.querySelectorAll(".data-choice").forEach(btn => {
            btn.addEventListener("click", elem => {
                interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
            });
        })
        let newData = data.data;
        if (newData) {
            let buttons = newData.components[0].buttons;

            let texts = newData.components[1].texts[0].split('\n');
            document.querySelector(".texts").innerHTML = "";
            texts.forEach((text) => {
                document.querySelector(".texts").innerHTML += `<p>${text}</p>`
            });
            document.querySelector(".data-choice").innerHTML = '';
            buttons.forEach((btn) => {
                document.querySelector(".data-choice").innerHTML += `
                <button type="button" data-choice="${btn.type},command(${btn.name}),${btn.actions}" class="col-sm-5 button">
                    ${btn.name}
                </button>`;
            });
        }
    }
});
