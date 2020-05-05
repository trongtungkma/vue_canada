<template>
  <div>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 advisory-text-1800 speech-bubble">
                <div class="texts">

                </div>
                <div>
                    <div class="row btn-advisory data-choice">
                        
                    </div>
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
  name: "s1800",
  created() {
    let script = document.createElement("script");
    script.setAttribute("src", "customJs/1800.js");
    document.head.appendChild(script);
  }
};
</script>