
<template>
  <div>
    <div class="container">
  <div class="row" >
    <div class="col-sm-2">
      <button type="button" class="button btn-back data-choice"></button>
    </div>
    <div class="col-sm-10 general-body">
      <p class="title-1200"></p>
      <div class="row row-1200 data-choice" >
        
      </div>
    </div>
  </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "s1200",
  created() {
    let script = document.createElement("script");
    script.setAttribute("src", "customJs/1200.js");
    document.head.appendChild(script);
  }
};
</script>

