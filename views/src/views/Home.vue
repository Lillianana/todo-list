<template>
  <div class="home">
    <Checkbox-group>
      <Checkbox v-for="item in list" :key="item.id" :label="item.detail"></Checkbox>
    </Checkbox-group>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data: () => {
    return {
      list: []
    }
  },
  components: {

  },
  created: async function () {
    const res = await axios.get('http://localhost:3000/');
    this.list = res.data;
  }
}
</script>
