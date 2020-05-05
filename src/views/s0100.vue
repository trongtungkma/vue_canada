<template>
  <div>
    <div class="container">
      <div class="top-title">
        <h3></h3>
        <div>
          <p>01</p>
        </div>
      </div>
      <div class="row row-0100 col-sm-11 data-choice"></div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "s0100",
  beforeCreate() {
    let scriptnn = document.createElement("script");
    scriptnn.setAttribute("src", "customJs/interactive_canvas.min.js");
    document.head.appendChild(scriptnn);
    let script = document.createElement("script");
    script.setAttribute("src", "customJs/0100.js");
    document.head.appendChild(script);
    // interactiveCanvas.ready({
    //   onUpdate(data) {
    //     console.log("updating");
    //   }
    // });
  }
};
</script>
