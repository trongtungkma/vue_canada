<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
html {
  display: flex;
  height: 100%;
}

body {
  display: flex;
  flex: 1;
  margin-top: 100px;
  background-color: #F5F5F5;
}

.container {
  margin-top: 100px;
}

.button {
  background-color: #4CAF50;
  /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button {
  background-color: white;
  color: black;
  border: 2px solid #555555;
  height: 130px;
  width: 160px;
  border-radius: 16%;
}

.general-body {
  margin-top: 80px;
}

.general-body p {
  margin-bottom: 7rem;
  font-size: 30px;
}

.general-body textarea {
  border: 1px solid #000;
  margin-top: -25px;
  width: 100%;
  margin-left: 170px !important;
}

.button:hover {
  background-color: #555555;
  color: white;
}

.btn-back {
  height: 80px;
  border-radius: 0%;
}

.btn-next {
  float: right;
  height: 80px;
  border-radius: 0%;
}

.btn-accept {
  border-radius: 50%;
  height: 150px;
  float: right;
  width: 100px;
  margin-bottom: -50px;
}


/* screen 0100 */

.top-title {
  text-align: center;
  margin-bottom: 80px;
}

.top-title h3 {
  font-size: 2.75rem ;
}

.top-title p {
  font-size: 2.15rem;
  text-align: center;
}
.btn-top {
  height: 200px;
  width: 220px;
}

/* screen 1000 */
.row-advisory {
margin-left: 40px !important;
}
.speech-bubble {
  position: relative;
  border-radius: 2.4em;
  border: 1px solid #000;
}

.speech-bubble:after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-left-color: #000;
  border-right: 0;
  border-bottom: 0;
  margin-top: 100px;
  margin-right: -20px;
}

.advisory-text-1000 {
  height: auto;
  padding: 10px;
  font-size: 30px;
}

.advisory-img {
  margin-top: 260px;
}

.btn-advisory .btn {
  height: 140px;
  margin-left: 25px;
}

/* screen 1100 */

.body-1100 button {
  margin-right: 87px;
}


/* screen 1200 */

.row-1200 {
  padding-right: 100px;
  margin-left: -100px !important;
}

.title-1200 {
  text-align: center;
  font-size: 30px;
}
/* screen 1300 */
.title-1300,
.title-1400,
.title-1500,
.title-1600,
.title-2100,
.title-2200,
.title-2300,
.title-2400 {
  margin-top: 2%;
  text-align: center;
  font-size: 30px;
}

/* 1700 */

#box-1700 {
  margin-left: 40px !important;
  border-radius: 20%;
  border: 1px solid;
  padding: 10px;
}

.title-1700 {
  margin-top: 30px;
  text-align: center;
  font-size: 30px;
}


.table-1700 th {
  width: 200px;
  text-align: center;
  color: #fff;
  background: rgb(85, 77, 77);
}
/* 1800 */
.btn-advisory {
  margin-top: 70px;
  margin-left: 100px !important;
}
.advisory-text-1800 {
  height: 450px;
  padding: 35px;
  line-height: 40px;
  font-size: 30px;
}

.advisory-text-1800 p {
  padding: 10px;
  margin-right: 100px;
  line-height: 0px;
}
/* 2000 */
.row-2000 div button,
.row-0100 div button {
  margin-left: 50px;
}

/* 2110 2210 2310*/
.staff-type-list,
.sickness-list,
.patient-list,
.expert-list,
.expert-list-2,
.free-search-list {
  margin-left: 60px !important;
}

.staff-type-list li,
.sickness-list li,
.patient-list li,
.expert-list li,
.expert-list-2 li,
.free-search-list li {
  text-align: center;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid;
  list-style: none;
  margin: 15px;
  width: 300px;
  height: 80px;

}

.sickness-title,
.patient-title,
.expert-title,
.expert-title-2,
.free-search-title,
.help-title {
  background: rgb(175, 174, 173);
  text-align: center !important;
  margin: 0 !important;
}

.first-key-word {
  background: rgb(175, 174, 173);
  text-align: center !important;
  margin-left: 150px !important;
  margin-right: 150px !important;
  margin-top: 10px;
}


/* 2120 */

.sickness-name,
.patient-name,
.expert-name,
.expert-name-2,
.free-search-name {
  padding: 5px;
  border: 1px solid #000;
  margin-top: -25px;
  border-radius: 15px;
  font-size: 30px;
  height: 50px;
}

.sickness-detail ,
.patient-detail ,
.expert-detail ,
.expert-detail-2 ,
.free-search-detail {
  height: 230px;
  padding: 15px;
  border: 1px solid #000;
  overflow: scroll;
  margin-left: 80px;
  font-size: 23px;
  border-radius: 15px;
}

.sickness-button,
.patient-button,
.expert-button,
.free-search-button {
  margin-left: 65px;
}

.btn-end {
  margin-left: 200px;
  margin-top: 15px;
  margin-bottom: 50px;
}
/* 3000 4000*/

.btn-sort-new,.btn-sort-view {
  height: 75px;
  float: left;
  width: 200px;
  margin-left: 88px;
  border-radius: 40px;
}

.box-qa {
  border: 1px solid;
  padding: 20px;
  margin-left: 90px;
  border-radius: 15px;
}

.box-qa hr {
  border: 1px dotted;
}

.box-qa li {
  padding: 10px;
  list-style: none;
}

.box-qa li p {
  text-align: center;
}


/* 3100 */
.question-area img{
  margin-bottom: -15%;
}
.answer-area img{
  float: right;
  margin-top: -15%;
}

.box-question {
  height: 150px;
  margin-bottom: 30px;
  padding: 10px;
  margin-left: 225px;
  overflow: scroll;
  position: relative;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #000;
  font-size: 30px;
}


.box-answer {
  height: 300px;
  margin-bottom: 10px;
  margin-top: 30px;
  padding: 10px;
  margin-left: 100px;
  overflow: scroll;
  position: relative;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #000;
  font-size: 30px;
}

/* .top-title-detail-answer {
  margin-top: -65px;

} */

/* 4000 */
.box-qa-mysefl {
  margin-bottom: 100px;
}
/* 5000 */
.btn-help {
  width: 100px;
  height: auto;
}
.row-help {
  margin-bottom: 40px;
}
.help-title {
  margin-right: 80px !important;
  margin-left: -40px !important;
  margin-top: 30px !important;
}

.help-text,
.help-text-bottom {
  text-align: center;
  border: 1px solid;
  padding: 40px;
  border-radius: 15px;
  margin-left: 140px !important;
  margin-right: 30px;
}

.hepl-qr {
  margin-left: 240px;
}

.hepl-qr-title {
  text-align: center;
}

</style>
