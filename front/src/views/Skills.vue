<template>
  <div class="skills">
      <div class="skill-item" v-for="(skill,i) in skills" :key="i">
        <img :src="require(`../assets/img/${skill}.svg`)" :alt="skill"/>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      skills: [
        'html',
        'css',
        'sass',
        'bootstrap',
        'javascript',
        'typescript',
        'react',
        'redux',
        'vuejs',
        'nuxtjs',
        'jquery',
        'php',
        'laravel',
        'mysql',
        'git'
      ]
    }
  }

}
</script>

<style scoped>
.skills{
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 90px;
  left: 0;
  right: 0;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
.skills .skill-item{
  flex: 0 0 10%;
  width: 100%;
}
.skills .skill-item img{
  width: 100%;
  height: 100%;
}
@media(max-width: 1440px){
  .skills .skill-item{
    flex: 0 0 12%;
  }
}
@media(max-width: 1220px){
  .skills{
    gap: 30px;
  }
  .skills .skill-item{
    flex: 0 0 14%;
  }
}
</style>