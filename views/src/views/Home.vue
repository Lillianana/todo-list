<template>
  <div class="home">
    <Input v-model="addValue" placeholder="请输入要做的内容" style="width: 300px" />
    <Button type="primary" @click="add">新增</Button>
      <div v-for="item in list" :key="item._id" >
        <Checkbox :label="item.detail"  @onchange="status => checkEvent(item._id, status)"></Checkbox>
        <Button @click="deleteEvent(item._id)">删除</Button>
      </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data: () => {
    return {
      list: [],
      addValue: ''
    }
  },
  components: {

  },
  created: async function () {
    this.query()
  },
  methods: {
    async query() {
      const res = await axios.get('http://localhost:3000/query');
      try {
        this.list = res.data.data;
      } catch (e) {
        console.log(e)
      }
    },
    async checkEvent (id, status) {
      await axios.post('http://localhost:3000/update', {'_id': id, status});
      try {
        this.$Message.success({ desc: '修改成功' })
        await this.query()
      } catch (e) {
        this.$Message.error(e)
      }
    },
    async add () {
      await axios.post('http://localhost:3000/add', {detail: this.addValue});
      try {
        this.$Message.success({ desc: '添加成功' })
        await this.query()
      } catch (e) {
        this.$Message.error(e)
      }
    },
    async deleteEvent(id) {
      await axios.post('http://localhost:3000/delete', {'_id': id});
      try {
        this.$Message.success({ desc: '删除成功' })
        await this.query()
      } catch (e) {
        this.$Message.error(e)
      }
    }
  }
}
</script>
