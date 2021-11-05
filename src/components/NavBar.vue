<template>
    <div id="app">
    <div id="nav">
      <img src="../assets/news-arena.png" alt="news-arena-logo" />
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link :to="{ name: 'Category', params: {category:'business'} }">Business</router-link></li>
        <li><router-link :to="{ name: 'Category', params: {category:'entertainment'} }">Entertainment</router-link></li>
        <li><router-link :to="{ name: 'Category', params: {category:'sports'} }">Sports</router-link></li>
        <li><router-link :to="{ name: 'Category', params: {category:'technology'} }">Technology</router-link></li>

        <div class="search-wrapper">
          <input class="search" type="search" placeholder="Search" />
      </div>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
    padding: 24px;
    background-color: rgb(90, 9, 138);
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    
}

a {
    font-weight: normal;
    color: cornsilk;
    text-decoration: none;
}

.router-link-exact-active {
    color: #b2faf0;
}
ul {
    display: flex;
    flex-direction: row;
}
li {
    list-style-type: none;
    margin-right: 30px;
    text-decoration: none;
    margin-top: auto;
    margin-bottom: auto;
    padding: 13px;
}
.search {
    padding: 16px;
    border: none;
    outline: none;
    border-radius: 6px;
    width: 260px;
    margin-left: 30px;
    margin-top: auto;
    margin-bottom: auto;
}
</style>