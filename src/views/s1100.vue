<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <button type="button" class="button btn-back data-choice"></button>
      </div>
      <div class="col-sm-9 general-body data-choice body-1100">
        <p class="title-1100"></p>
        <div class="buttons">

        </div>
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
    let script = document.createElement("script");
    script.setAttribute("src", "customJs/1100.js");
    document.head.appendChild(script);
  }
};
</script>
