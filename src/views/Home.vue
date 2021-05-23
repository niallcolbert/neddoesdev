<template>
  <div class="home">
    <h1 class="headline"><span class="icon"><img src="static/img/nedDoesDev.png"></span>nedDoesDev</h1>
    <router-link v-show="false" to="/about" tag="a" class="aboutLink">About &raquo;</router-link>
    <div class="group">
      <h2>[Recent]</h2>
      <div v-for="entry in recentEntries" :key="entry.id" 
        class="entry col-sm-12 col-md-6 col-lg-4" 
        @click="$router.push({name: entry.id})" 
        v-bind:style="{ backgroundImage: 'url(' + entry.featured_image + ')' }">
        <h2 class="title">[{{entry.title}}]</h2>
      </div>
    </div>
    <div class="group archive-list" v-if="olderEntries.length">
      <h2>[Archive]</h2>
      <div v-for="entry in olderEntries" :key="entry.id"
        class="archive-item">
        <h3 class="title" @click="$router.push({name: entry.id})">[{{entry.title}}]</h3>
        <span>{{entry.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from '@/assets/posts.json'

export default {
  name: 'home',
  computed: {
    recentEntries () {
      return Posts.posts.slice(0, 6)
    },
    olderEntries () {
      return Posts.posts.slice(6)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 1200px;
  max-width: 90vw;
  margin: 3rem auto;
  .headline {
    font-size: 4rem;
    margin: 0 0 3rem 0;
    width: auto;
    display: inline-block;
    line-height: 5rem;
    text-transform: none;
    .icon {
      height: 5rem;
      width: 5rem;
      overflow: hidden;
      display: inline-block;
      margin-right: 1rem;
      border-radius: 50%;
      border: 2px solid #00ffde;
      vertical-align: bottom;
      img {
        vertical-align: middle;
        border-style: none;
        height: 6rem;
        margin-left: -.5rem;
        margin-top: -.2rem;
      }
    }
  }
    
  .entry {
    cursor: pointer;
    opacity: 0.8;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    &:before{
      content: "";
      display: block;
      padding-top: 100%; 	/* ratio of 1:1*/
    }

    h2.title {
      color: #fff;
      position: absolute;
      background: #000C;
      width: 100%;
      text-align: right;
      padding: 10px;
      margin: 0;
      bottom: 0;
      right: 0;
      font-size: 1.5rem;
    }
    
    &:hover {    
      opacity: 1;
    }
  }

  .aboutLink {
    background-color: #639;
    color: white;
    margin-bottom: 1rem;
    text-decoration: none;
    padding: 10px 15px;
    border: 1px solid currentColor;
    border-radius: .5rem;
    transition: all .3s ease;
    display: inline-block;
    float: right;
    &:hover {
      background-color: transparent;
      color: #639;
    }
  }

  .archive-list {
    margin-top: 3rem;
    .archive-item {
      padding: 1.5rem 0;
    }
  }
}
</style>
