<template>
  <div>
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <button type="button" class="button btn-back data-choice"></button>
            </div>
            <p class="col-sm-6 title-1700"></p>
            <div class="col-sm-3">
                <button type="button" class="button btn-back data-choice"></button>
            </div>
            <div class="row body-1700">
                <p class="col-sm-13" id="box-1700"></p>
            </div>
            <div class="row col-sm-12">
                <table class="table table-bordered table-1700 data-choice">
                    <tbody>
                        <tr>
                            <th scope="row" data-choice="isTap,command(タイトル),nextscreen(1300)">場所</th>
                            <td id="box-input-1300"></td>
                        </tr>
                        <tr>
                            <th scope="row" data-choice="isTap,command(場所),nextscreen(1400)">いつから</th>
                            <td id="box-input-1400"></td>
                        </tr>
                        <tr>
                            <th scope="row" data-choice="isTap,command(いつから),nextscreen(1500)">具体的な症状</th>
                            <td id="box-input-1500"></td>
                        </tr>
                        <tr>
                            <th scope="row" data-choice="isTap,command(具体的な症状),nextscreen(1600)">タイトル</th>
                            <td id="box-input-1600"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "s1700",
  created() {
    let script = document.createElement("script");
    script.setAttribute("src", "customJs/1700.js");
    document.head.appendChild(script);
  }
};
</script>