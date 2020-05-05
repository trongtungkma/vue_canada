let arrayQA;
interactiveCanvas.ready({
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
    //qa title
    let newTitle = dataNew.title;
    document.querySelector('#title').innerText = newTitle;
    // dom data qa 3000
    arrayQA = data.dataDummy.qa;
    showQuestion(arrayQA);
    //dom data qa 3100
    let question = data.dataSearch.question != undefined ? data.dataSearch.question : null;
    let answer = data.dataSearch.answer != undefined ? data.dataSearch.answer : null;
    if (document.getElementById('question') && document.getElementById('answer')) {
      document.getElementById('question').innerText = question;
      document.getElementById('answer').innerText = answer;
    }
  }
});
sort = async (type) => {
  // type == 1 sort by view
  // type == 2 sort by id
  right = arrayQA.length;
  await quickSort(arrayQA, 0, right - 1, type);
  showQuestion(arrayQA);
}

const showQuestion = (arrayQA) => {
  dataQa = arrayQA.map(ele => `    
            <ul class="col-sm-10 box-qa " type="button" data-choice="isTap,command(),nextscreen(3100),search(qa;${ele.id})">    
                <li class="buble-question" data-choice="isTap,command(),nextscreen(3100),search(qa;${ele.id})">${ele.question.substr(0, 40) + '...'}</li>
                <hr>
                <li class="buble-answer" data-choice="isTap,command(),nextscreen(3100),search(qa;${ele.id})">${ele.answer.substr(0, 40) + '...'}</li>
            </ul>`).join("");
  if (document.getElementById('row-qa')) {
    document.getElementById('row-qa').innerHTML = '';
    document.getElementById('row-qa').innerHTML = dataQa;
  }
}

const quickSort = async (arr, low, high, type) => {

  if (low <= high) {
    let pivot;
    if (type == 1) {
      pivot = arr[Math.floor((high + low) / 2)].view;
    } else {
      pivot = arr[Math.floor((high + low) / 2)].id;
    }
    let left = low;
    let right = high;

    while (left <= right) {
      if (type == 1) {
        while (arr[left].view > pivot)
          left++;
        while (arr[right].view < pivot)
          right--;

        if (left <= right) {
          temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
        }
      } else if (type == 2) {
        while (arr[left].id > pivot)
          left++;
        while (arr[right].id < pivot)
          right--;

        if (left <= right) {
          temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
        }
      }
    }
    if (low < right)
      quickSort(arr, low, right, type);
    if (high > left)
      quickSort(arr, left, high, type);
  }
}