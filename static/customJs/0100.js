interactiveCanvas.ready({
  onUpdate(data) {
    console.log("updating");
    document.querySelectorAll(".data-choice").forEach(btn => {
      btn.addEventListener("click", elem => {
        // interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
        console.log(elem.target.dataset.choice);
        if (elem.target.dataset.choice.includes("nextscreen")) {
          console.log("true");
        }
        router.push('/1000');

      });
    })
    let newData = data.data;
    if (newData) {
      let buttons = newData.components[0].buttons;
      document.querySelector(".top-title h3").innerHTML = newData.components[1].texts[0];
      document.querySelector(".top-title div > p").innerHTML = newData.components[1].texts[1];
      let node = document.querySelector(".row-0100");
      node.innerHTML = '';
      buttons.forEach(btn => {
        node.innerHTML += `<div class="col-sm-4 ">
            <button type="button" data-choice="${btn.type},command(${btn.name}),${btn.actions}" class="button btn-top">
              ${btn.name}
            </button>
          </div >`;
      })
    }
  }
});
