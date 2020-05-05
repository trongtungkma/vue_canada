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
    document.querySelector(".back").innerHTML = `<button type="button" class="button btn-back " data-choice="${backType},command(${backTitle}),${backAction}">${backTitle}</button>`;
    //title
    let newTitle = dataNew.title;
    document.querySelector('#title').innerText = newTitle;

    // data search 2210
    if (document.getElementById('sickness-list') && document.getElementById("first-key-word-2200")) {
      if (data.listInputForm[2200]) {
        let searchKey = data.listInputForm[2200].slice(1);
        let dataSymptom = [];
        data.dataDummy.sickName.forEach(ele => {
          if (ele.name.includes(searchKey)) {
            let element = ele;
            element.type = "sickName";
            dataSymptom.push(element);
          }
        })
        data.dataDummy.symptom.forEach(ele => {
          if (ele.name.includes(searchKey)) {
            let element = ele;
            element.type = "symtom";
            dataSymptom.push(element);
          }
        })
        let symptom = dataSymptom.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2220),search(${ele.type};${ele.id})">${ele.name}</li>`).join("");
        document.getElementById('sickness-list').innerHTML = symptom;
        document.getElementById("first-key-word-2200").innerText = data.listInputForm[2200] != undefined ? data.listInputForm[2200] : null;
      } else {
        let symptom = data.dataDummy.symptom.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2220),search(symptom;${ele.id})">${ele.name}</li>`).join("") +
          data.dataDummy.sickName.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2220),search(sickName;${ele.id})">${ele.name}</li>`).join("");
        document.getElementById("first-key-word-2200").innerText = data.listInputForm[2200] != undefined ? data.listInputForm[2200] : null;
        document.getElementById('sickness-list').innerHTML = symptom;
      }
    }
    //data search 2310
    var expertName = data.dataDummy.expert.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2320),search(expert;${ele.id})" id="expert-name">${ele.name}</li>`).join("");
    if (document.getElementById('staff-type-list') && document.getElementById("first-key-word-2300")) {
      document.getElementById('staff-type-list').innerHTML = expertName;
      document.getElementById("first-key-word-2300").innerText = data.listInputForm[2300] != undefined ? data.listInputForm[2300] : null;
    }
    if (document.getElementById('staff-type-list') && document.getElementById("first-key-word-2300")) {
      if (data.listInputForm[2300]) {
        let searchKey = data.listInputForm[2300].slice(1);
        let dataType = [];
        data.dataDummy.staffType.forEach(ele => {
          if (ele.name.includes(searchKey)) {
            dataType.push(ele);
          }
        })
        let staffType = dataType.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(${ele.id}),nextscreen(2320),search(staffType;${ele.id})" >${ele.name}</li>`).join("");
        document.getElementById('staff-type-list').innerHTML = staffType;
        document.getElementById("first-key-word-2300").innerText = data.listInputForm[2300] != undefined ? data.listInputForm[2300] : null;
      } else {
        let staffType = data.dataDummy.staffType.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(${ele.id}),nextscreen(2320),search(staffType;${ele.id})" >${ele.name}</li>`).join("");
        document.getElementById('staff-type-list').innerHTML = staffType;
        document.getElementById("first-key-word-2300").innerText = data.listInputForm[2300] != undefined ? data.listInputForm[2300] : null;
      }
    }


    //data search 2320
    var expertName = data.dataDummy.expert.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2330),search(expert;${ele.id})" id="expert-name">${ele.name}</li>`).join("");
    if (document.getElementById('expert-list') && document.getElementById("first-key-word-2300")) {
      document.getElementById('expert-list').innerHTML = expertName;
      document.getElementById("first-key-word-2300").innerText = data.listInputForm[2300] != undefined ? data.listInputForm[2300] : null;
    }
    if (document.getElementById('expert-list') && document.getElementById("first-key-word-2300")) {
      let choiceType = data.dataSearch.detail;
      let expert = data.dataDummy[choiceType].map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2330),search(expert;${ele.id})" >${ele.name}</li>`).join("");
      document.getElementById('expert-list').innerHTML = expert;
      document.getElementById("first-key-word-2300").innerText = data.listInputForm[2300] != undefined ? data.listInputForm[2300] : null;
    }


    //data search 2410
    var freeSearchName = data.dataDummy.expert.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2420),search(expert;${ele.id})" id="expert-name">${ele.name}</li>`).join("");
    if (document.getElementById('free-search-list') && document.getElementById("first-key-word-2400")) {
      document.getElementById('free-search-list').innerHTML = freeSearchName;
      document.getElementById("first-key-word-2400").innerText = data.listInputForm[2400] != undefined ? data.listInputForm[2400] : null;

    }
    if (document.getElementById('free-search-list') && document.getElementById("first-key-word-2400")) {
      if (data.listInputForm[2400]) {
        let searchKey = data.listInputForm[2400].slice(1);
        let dataFree = [];
        data.dataDummy.sickName.forEach(ele => {
          if (ele.name.includes(searchKey)) {
            let element = ele;
            element.type = "sickName";
            dataFree.push(element);
          }
        })
        data.dataDummy.symptom.forEach(ele => {
          if (ele.name.includes(searchKey)) {
            let element = ele;
            element.type = "symptom";
            dataFree.push(element);
          }
        })
        data.dataDummy.expert.forEach(ele => {
          if (ele.name.includes(searchKey)) {
            let element = ele;
            element.type = "expert";
            dataFree.push(element);
          }
        })
        let free = dataFree.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2420),search(${ele.type};${ele.id})" >${ele.name}</li>`).join("");
        document.getElementById('free-search-list').innerHTML = free;
        document.getElementById("first-key-word-2400").innerText = data.listInputForm[2400] != undefined ? data.listInputForm[2400] : null;
      } else {
        let free = data.dataDummy.symptom.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2420),search(symptom;${ele.id})">${ele.name}</li>`).join("")
          + data.dataDummy.sickName.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2420),search(sickName;${ele.id})">${ele.name}</li>`).join("")
          + data.dataDummy.expert.map(ele => `<li class="col-sm-5 button btn-back" type="button" data-choice="isTap,command(),nextscreen(2420),search(expert;${ele.id})">${ele.name}</li>`).join("");
        document.getElementById('free-search-list').innerHTML = free;
        document.getElementById("first-key-word-2400").innerText = data.listInputForm[2400] != undefined ? data.listInputForm[2400] : null;
      }
    }
  }
});