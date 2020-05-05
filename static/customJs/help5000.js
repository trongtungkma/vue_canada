'use strict';
window.onload = interactiveCanvas.ready({ 
  onUpdate(data) {
    document.querySelectorAll(".data-choice").forEach(btn => {
      btn.addEventListener("click", elem => {
          interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
      });
  });
    let dataNew = data.data;
    //back button
    let backActions = dataNew.components[0].buttons[0];
    let backTitle = backActions.name;
    let backAction = backActions.actions;
    let backType = backActions.type;
      document.querySelector(".back").innerHTML = `<button type="button" class="button btn-back btn-help" data-choice="${backType},command(${backTitle}),${backAction}">${backTitle}</button>`;
    //help title
    let helpTitle1 = dataNew.components[1].texts[0];
    let helpTitle2 = dataNew.components[1].texts[1];
    let helpTitle3 = dataNew.components[1].texts[2];
    document.querySelector('.help-title').innerText = helpTitle1;
    document.querySelector('.help-text').innerText = helpTitle2;
    document.querySelector('.hepl-qr-title').innerText = helpTitle3;
    document.querySelector('.help-text-bottom').innerText = helpTitle2;
} 
});