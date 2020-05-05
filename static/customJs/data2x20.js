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
    // screen 2330
    let valueSearchId = data.listCommand[2310];
    if(document.getElementById('screen-2330-back')){
      document.querySelector(".back").innerHTML = `<button type="button" class="button btn-back " data-choice="${backType},command(${backTitle}),${backAction},search(staffType;${valueSearchId})">${backTitle}</button>`;
    }else{
      // screen 2x20 other
      document.querySelector(".back").innerHTML = `<button type="button" class="button btn-back " data-choice="${backType},command(${backTitle}),${backAction}">${backTitle}</button>`;
    } 
    //title
    let newTitle = dataNew.title;
    document.querySelector('#title').innerText = newTitle;
    
    // data search 2x20
    var valueSearchName = data.dataSearch.name;
    var valueSearchDetail = data.dataSearch.detail;
    if(document.getElementById('name') && document.getElementById('detail')){
      document.getElementById('name').innerText = valueSearchName;
      document.getElementById('detail').innerText = valueSearchDetail;
    }    
  }
});