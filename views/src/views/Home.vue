<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios'

export default {
  name: 'Home',
  data: () => {
    return {
      list: []
    }
  },
  components: {
    HelloWorld
  },
  created: async () => {
    const data = await axios.get('http://localhost:3000/');
    this.list = data;
    console.log(data);
  }
}
</script>
