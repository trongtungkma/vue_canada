<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2 back data-choice " @click="onClickItem">
        <!-- backbutton -->
      </div>
      <div class="top-title col-md-9">
        <p id="title">{{ title }}</p>
        <button type="button" class="button btn-sort-new" @click="sortById">
          新しい順
        </button>
        <button type="button" class="button btn-sort-view" @click="sortByView">
          閲覧数順
        </button>
      </div>
    </div>
    <div
      class="row row-top data-choice"
      id="row-qa"
      v-for="item in arrayQA"
      :key="item.id"
    >
      <ul
        class="col-md-10 box-qa data-choice"
        type="button"
        @click="onClickItem"
        :data-choice="
          'isTap,command(),nextscreen(3100),search(qa;' + item.id + ')'
        "
      >
        <li
          class="buble-question"
          :data-choice="
            'isTap,command(),nextscreen(3100),search(qa;' + item.id + ')'
          "
        >
          <b>Q: </b> {{ item.question.substr(0, 20) + "..." }}
        </li>
        <hr />
        <li
          class="buble-answer"
          :data-choice="
            'isTap,command(),nextscreen(3100),search(qa;' + item.id + ')'
          "
        >
          {{ item.answer.substr(0, 20) + "..." }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "s3000",
  data() {
    return {
      arrayQA: [],
      title: ""
    };
  },

  created() {
    var vm = this;
    window.interactiveCanvas.ready({
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
        // dom data qa 3000
        vm.arrayQA = data.dataDummy.qa;
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
    },
    sortById: function() {
      return this.arrayQA.sort((a, b) => b.id - a.id);
    },
    sortByView: function() {
      return this.arrayQA.sort((a, b) => {
        return b.view - a.view;
      });
    }
  }
};
</script>
