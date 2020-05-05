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
            let btnBack = document.querySelector(".btn-back");
            btnBack.innerHTML = newData.components[0].buttons[0].name;
            btnBack.setAttribute("data-choice", buttons[0].type
                + `,command(${buttons[0].name}),` + buttons[0].actions);
            buttons.shift();
            //
            document.querySelector(".top-title div p").innerHTML = newData.components[1].texts[0];
            let node = document.querySelector(".row-2000");
            node.innerHTML = '';
            buttons.forEach(btn => {
                node.innerHTML += `<div class="col-sm-4">
                    <button type="button" class="button btn-top"
                    data-choice="${btn.type},command(${btn.name}),${btn.actions}">${btn.name}</button>
                    </div>`;
            })
        }
    }
});