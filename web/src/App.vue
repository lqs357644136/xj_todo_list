<template>
  <div id="app">
    <div class="container">
      <!-- 操作栏 -->
      <div class="ctrl">
        <Input class="inputs" v-model="forms.name" placeholder="请输入名称" />
        <Button type="primary" @click="handlerAdd" :disabled="loading"
          >添加</Button
        >
      </div>
      <!-- 表格 -->

      <Table border :columns="columns" :data="list" :loading="loading">
        <template slot-scope="{ row }" slot="action">
          <Button type="primary" size="small" @click="handlerDelete(row)"
            >删除</Button
          >
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const baseurl = "http://127.0.0.1:3000";
export default {
  name: "Home",
  data() {
    return {
      forms: {
        name: null,
      },
      list: [],
      loading: false,
      columns: [
        {
          title: "序号",
          type: "index",
          width: 80,
          align: "center",
        },
        {
          title: "名称",
          key: "name",
          align: "left",
        },
        {
          title: "操作",
          slot: "action",
          width: 80,
          align: "center",
        },
      ],
    };
  },
  created() {
    this.queryList();
  },
  methods: {
    async handlerDelete(row) {
      const { id } = row;
      const params = {
        id,
      };
      await axios.post(`${baseurl}/api/users/del`, params);
      this.queryList();
    },
    async handlerAdd() {
      const params = {
        name: this.forms.name,
      };
      await axios.post(`${baseurl}/api/users/add`, params);
      this.forms.name = null;
      this.queryList();
    },
    async queryList() {
      this.loading = true;
      const result = await axios.get(`${baseurl}/api/users/find`, {});
      if (result.data) {
        this.list = result.data.map((item) => {
          return {
            id: item.id,
            name: item.name,
          };
        });
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dedede;
  .container {
    background: #fff;
    width: 50%;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #7a7a7a;
    padding: 20px 10px;
  }
  .ctrl {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .inputs {
      flex: 1;
      margin-right: 30px;
    }
  }
}
</style>
