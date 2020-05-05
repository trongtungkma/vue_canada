<template>
  <div>
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <button type="button" class="button btn-back data-choice"></button>
            </div>
            <p class="col-sm-6 title-1300"></p>
            <div class="col-sm-3">
                <button type="button" class="button btn-next data-choice"></button>
            </div>
            <div class="row data-choice general-body">
                <textarea name="input-1300" disabled id="inId1300" class="input-text" cols="70" rows="9"></textarea>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "s1300",
  created() {
    let script = document.createElement("script");
    script.setAttribute("src", "customJs/utility1300to1600.js");
    document.head.appendChild(script);
  }
};
</script>

