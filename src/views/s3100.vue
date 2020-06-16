<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 back data-choice " @click="onClickItem">
        <!-- backbutton -->
      </div>
      <div class="top-title col-md-9">
        <p id="title">{{ title }}</p>
      </div>
    </div>
    <div class="row row-top data-choice" id="row-qa">
      <ul class="col-md-10 box-qa">
        <li class="buble-question">
          <p id="circle"></p>
          &nbsp; 患者
          <p id="time">16:35 28/10/2020</p>
        </li>
        <hr />
        <li class="buble-answer"><b>Q: </b>{{ question }}</li>
      </ul>
      <ul class="col-md-10 box-qa">
        <li class="buble-question">
          <p id="circle"></p>
          &nbsp;医師
          <p id="time">16:35 28/10/2020</p>
        </li>
        <hr />
        <li class="buble-answer"><b>A: </b>{{ answer }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "s3100",
  data() {
    return {
      title: "",
      question: "",
      answer: ""
    };
  },
  created() {
    var vm = this;
    interactiveCanvas.ready({
      onUpdate(data) {
        let dataNew = data.data;
        //back button
        let backActions = dataNew.components[0].buttons[0];
        let backTitle = backActions.name;
        let backAction = backActions.actions;
        let backType = backActions.type;
        document.querySelector(
          ".back"
        ).innerHTML = `<button type="button" class="button btn-back-new " data-choice="${backType},command(${backTitle}),${backAction}">${backTitle}</button>`;
        //qa title
        vm.title = dataNew.title;

        //dom data qa 3100
        vm.question = data.dataSearch.question;
        vm.answer = data.dataSearch.answer;
      }
    });
  },
  methods: {
    nextScreen(a) {
      this.$router.push("/" + a);
    },
    onClickItem(elem) {
      let str = elem.target.dataset.choice;
      interactiveCanvas.sendTextQuery(str);
      if (str.indexOf("nextscreen")) {
        let n = str.indexOf("nextscreen");
        let res = str.slice(n + 11, n + 15);
        this.nextScreen(res);
      }
    }
  }
};
</script>
