<template>
  <div class="projects">
      <div class="project-item">
          <div class="project-image">
              <img src="../assets/img/test.png"/>
          </div>
          <div class="project-desc"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.projects{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    left: 0;
    right: 0;
    height: 500px;
    width: 40%;
}
.projects .project-item{
    height: 460px;
    width: 430px;
    display: grid;
    grid-template-rows: 60% 40%;
    border-radius: 2px;
    overflow: hidden;
}
.project-image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.project-desc{
    background: yellow;
}
</style>