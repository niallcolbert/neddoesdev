<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
  </div>
</template>
<style lang="scss">
html, body, #app {
  background-color: #c1b597!important;
}
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 90vw;
  width: 1200px;
  margin: 0 auto;
}

h1, h2, h3, h4 {
  font-family: sans-serif;
  text-transform: capitalize;
  color: #2c3e50;
}

.standard-button {
    background-color: #639;
    color: white;
    margin-bottom: 1rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid #639;
    border-radius: .5rem;
    transition: all .3s ease;
    display: inline-block;
    &:hover {
      background-color: transparent;
      color: #639;
    }
  }
</style>