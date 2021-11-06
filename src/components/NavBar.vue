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

         <select v-model="currentSource" name="category" id="category" class="drop_down search" @change="onChangeMethod($event)">
          <option :value="''">Select category</option>
          <option v-for="{ name, id, url } in getAllSources" :key="id" :value="url">{{ name }}</option>
        </select>   
      </ul>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    data() {
        return {
            currentSource: '',
            currentSourceId: ''
        }
    },
    watch: {
        currentSource(source) {
        const { query: { q }, params } = this.$route;
        const name = this.$route.name
        this.$route.push({ name , params, query: { source, q }});
        }
    },
    computed: {
        ...mapGetters(['getAllSources'])
    },
    mounted() {
        const { params : { category } } = this.$route
        this.fetchAllSources({category}) 
    },
    methods: {
        ...mapActions(['fetchAllSources']),

        onChangeMethod(event){
            window.open(event.target.value, '_blank');
        }
  }
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