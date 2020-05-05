<template>
  <div>
    <div class="container">
        <div class="row row-advisory">
            <div class="col-sm-9 advisory-text-1000 speech-bubble">
                <div class="texts">1000</div>
                <div>
                    <div class="btn-advisory data-choice"></div>
                </div>
            </div>
            <div class="col-sm-3">
                <img class=" advisory-img" src="images/operator.png" alt="">
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
    script.setAttribute("src", "customJs/1000.js");
    document.head.appendChild(script);
  }
};
</script>
