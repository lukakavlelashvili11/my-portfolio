<template>
  <div>
      <div class="name">
          <span>Hi there! i'm</span>
          <h1>Luka</h1>
          <h1>Kavlelashvili</h1>
          <span>The full stack web developer</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.name h1,span{
    /* background: linear-gradient(to right,#8EC5FC,#E0C3FC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: black;
    line-height: 20px;
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
}
h1{
    font-size: 45px !important;
}
.name{
    margin-left: 100px;
    margin-top: 100px;
}
</style>