<template>
  <div>
      <div class="header">
          <ul class="nav">
              <li>
                  <router-link to="/">About me</router-link>
              </li>
              <li>
                  <router-link to="/skills">Skills</router-link>
              </li>
              <li>
                  <router-link to="/projects">Projects</router-link>
              </li>
              <li>
                  <router-link to="/contact">Contact</router-link>
              </li>
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
    margin-right: 10px;
}
.nav li{
    padding: 10px;
    font-size: 23px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
}
.nav li a{
    text-decoration: none;
    color: black;
}
</style>