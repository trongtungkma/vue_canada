<template>
  <div>
    <div class="container">
        <div class="col-sm-3">
            <button type="button" class="button btn-back data-choice"></button>
        </div>
        <div class="top-title">
            <div>
                <p></p>
            </div>
        </div>
        <div class="row row-2000 col-sm-11 data-choice">
        </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "s2000",
  created() {
    let script = document.createElement("script");
    script.setAttribute("src", "customJs/2000.js");
    document.head.appendChild(script);
  }
};
</script>