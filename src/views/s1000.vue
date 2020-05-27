<template>
  <div id="1000">
    <div class="container">
      <div class="row row-advisory">
        <div class="col-sm-9 advisory-text-1000 speech-bubble">
          <div class="texts"></div>
          <div>
            <div class="btn-advisory data-choice"></div>
          </div>
        </div>
        <div class="col-sm-3">
          <img class="advisory-img" src="static/images/operator.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
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
            window.interactiveCanvas.sendTextQuery(elem.target.dataset.choice);
          });
        });
        let newData = data.data;
        if (newData) {
          let buttons = newData.components[0].buttons;
          let texts = newData.components[1].texts[0].split("\n");
          document.querySelector(".texts").innerHTML = "";
          texts.forEach(text => {
            document.querySelector(".texts").innerHTML += `<p>${text}</p>`;
          });
          document.querySelector(".data-choice").innerHTML = "";
          buttons.forEach(btn => {
            document.querySelector(".data-choice").innerHTML += `
                <button type="button" data-choice="${btn.type},command(${btn.name}),${btn.actions}" class="col-sm-5 button">
                    ${btn.name}
                </button>`;
          });
        }
      }
    });
  },
};
</script>
