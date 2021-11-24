<template>
  <div class="admin">
      <input type="email" placeholder="email"/>
      <input type="password" placeholder="password"/>
      <button>Submit</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.admin{
    width: 30%;
    min-width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
}
input,button{
    margin-top: 20px;
    height: 30px;
}
</style>