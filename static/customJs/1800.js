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
            let texts = newData.components[1].texts[0].split('\n');
            let textDiv = document.querySelector('.texts');
            textDiv.innerHTML = '';
            texts.forEach(text => {
                textDiv.innerHTML += `<p>${text}</p>`
            })
            let node = document.querySelector(".data-choice");
            node.innerHTML = "";
            buttons.forEach(btn => {
                node.innerHTML += `<div class="col-sm-4">
                    <button type="button" class=" button"
                        data-choice="${btn.type},command(${btn.name}),${btn.actions}">${btn.name}</button>
                    </div>`
            })
        }
    }
});