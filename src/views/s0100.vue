<template>
  <div class="container">
    <div class="top-title">
      <h3></h3>
      <div>
        <p></p>
      </div>
    </div>
    <div class="row row-0100 col-md-11 data-choice"></div>
  </div>
</template>
<script>
export default {
  name: "s0100",
  created() {
    let nextScreen = a => {
      this.$router.push("/" + a);
    };
    window.interactiveCanvas.ready({
      onUpdate(data) {
        document.querySelectorAll(".data-choice").forEach(btn => {
          btn.addEventListener("click", elem => {
            let str = elem.target.dataset.choice;
            window.interactiveCanvas.sendTextQuery(str);
            if (str.indexOf("nextscreen")) {
              let n = str.indexOf("nextscreen");
              let res = str.slice(n + 11, n + 15);
              nextScreen(res);
            }
          });
        });
        let newData = data.data;
        if (newData) {
          let buttons = newData.components[0].buttons;
          document.querySelector(".top-title h3").innerHTML =
            newData.components[1].texts[0];
          document.querySelector(".top-title div > p").innerHTML =
            newData.components[1].texts[1];
          let node = document.querySelector(".row-0100");
          node.innerHTML = "";
          buttons.forEach(btn => {
            node.innerHTML += `<div class="col-md-4 ">
            <button type="button" data-choice="${btn.type},command(${btn.name}),${btn.actions}" class="button btn-top">
              ${btn.name}
            </button>
          </div >`;
          });
        }
      }
    });
  }
};
</script>
