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
      btnBack.innerHTML = "";
      btnBack.innerHTML = buttons[0].name;
      btnBack.setAttribute("data-choice", buttons[0].type
        + `,command(${buttons[0].name}),` + buttons[0].actions);
      buttons.shift();
      //
      document.querySelector(".title-1100").value = "";
      document.querySelector(".title-1100").innerHTML = newData.components[1].texts[0];
      document.querySelector('.buttons').innerHTML = '';
      buttons.forEach((btn) => {
        document.querySelector('.buttons').innerHTML += `<button type="button" class="col-sm-3 button" 
        data-choice="${btn.type},command(${btn.name}),${btn.actions}">${btn.name}</button>`
      })
    }
  }
});