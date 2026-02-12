<template>
  <div class="blog">
    <router-link to="/" tag="a" class="back standard-button">&laquo; Back</router-link>

    <router-view />
  </div>
</template>
<style lang="scss">
.blog {
  width: 1200px;
  max-width: 90vw;
  margin: 3rem auto;

  body {
    h1, p {
      text-align: center;
    }
  }
  
}
</style>
