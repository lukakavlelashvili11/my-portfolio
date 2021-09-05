<template>
  <div>
      <div class="header">
          <ul class="nav">
              <li>
                  <router-link to="/">About me</router-link>
              </li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.header{
    max-width: 100%;
    display: flex;
    justify-content: flex-end;
}
.nav{
    list-style: none;
    padding: 0px;
    display: flex;
    justify-content: space-between;
}
.nav li{
    padding: 10px;
    background: linear-gradient(to right,#8EC5FC,#E0C3FC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
}
.nav li a{
    text-decoration: none;
}
</style>