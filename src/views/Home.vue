<template>
  <div class="home">
    <div class="headline">
      <span class="icon"><img src="static/img/ned.jpg"></span>
      <span class="headline-text"><h1>Ned Mahon</h1>
      Waterford based writer, focused primarily on poetry and spoken word</span>
      <router-link to="/about" tag="a" class="aboutLink standard-button">About me</router-link>
      <a href="https://www.instagram.com/ned_mahon_poet/" class="instaLink standard-button">
        <img src="static/img/insta.svg">
      </a>
    </div>
    
    <div class="group">
      <h2>My work</h2>
      <p>Here is a sample of my work, for more visit <a href="https://www.instagram.com/ned_mahon_poet/">ned_mahon_poet</a> on Instagram.</p>
      <div v-for="entry in entries" :key="entry.id" 
        class="entry col-sm-12 col-md-6 col-lg-4" 
        @click="$router.push({name: entry.id})" 
        v-bind:style="{ backgroundImage: 'url(' + entry.featured_image + ')' }">
        <h2 class="title">{{entry.title}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from '@/assets/posts.json'

export default {
  name: 'home',
  computed: {
    entries () {
      return Posts.posts
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
    .headline-text {
      h1{
        font-size: 4rem;
      }
      width: auto;
      display: inline-block;
      vertical-align: middle;
    }
    .icon {
      overflow: hidden;
      display: inline-block;
      margin-right: 1rem;
      border-radius: 50%;
      vertical-align: middle;
      img {
        vertical-align: middle;
        border-style: none;
        height: 15rem;
      }
    }
  }

  .group {
    margin-top: 3rem;
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
      height: 100%;
      text-align: left;
      padding: 10px;
      margin: 0;
      bottom: 0;
      right: 0;
      font-size: 1.5rem;
      vertical-align: bottom;
    }
    
    &:hover {    
      opacity: 1;
    }
  }

  .aboutLink, .instaLink {
    float: right;
  }
  .instaLink {
    margin-right: .5rem;
    padding: 0;
    background: none;
    border: none;
    img {
      width: 3rem;
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
