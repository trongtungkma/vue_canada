let input='';
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
      document.querySelector(".title-1200").innerHTML = newData.components[1].texts[0];
      let btnBack = document.querySelector(".btn-back")
      btnBack.innerHTML = buttons[0].name;
      btnBack.setAttribute("data-choice", buttons[0].type + `,command(${buttons[0].name}),` + buttons[0].actions);
      buttons.shift();
      let node = document.querySelector(".row-1200");
      node.innerHTML = "";
      buttons.forEach(btn => {
        node.innerHTML += `<div class="col-sm-3 ">
            <button type="button" data-choice="${btn.type},command(${btn.name}),${btn.actions}" class="button">
              ${btn.name}
            </button>
          </div >`;
      })
    }
  }
});