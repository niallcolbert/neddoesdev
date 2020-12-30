<template>
  <div class="blog">
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>

    <router-view />
  </div>
</template>
<style lang="scss" scoped>
.blog {
  width: 1200px;
  max-width: 90vw;
  margin: 3rem auto;

  .back {
    background-color: #639;
    color: white;
    margin-bottom: 1rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    border-radius: .5rem;
    display: inline-block;
    transition: all .3s ease;
    &:hover {
      background-color: transparent;
      color: #639;
    }
  }
}

/deep/
img {
  max-width: 100%;
}
</style>
