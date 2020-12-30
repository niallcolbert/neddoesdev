<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
  </div>
</template>
<style lang="scss">
#app {
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 90vw;
  width: 1200px;
  margin: 0 auto;
}

h1, h2, h3, h4 {
  font-family: 'Inconsolata';
  text-transform: capitalize;
  color: #639;
}
</style>