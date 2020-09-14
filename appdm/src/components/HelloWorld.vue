<template>
  <div class="hello">
    <div v-for="(item,index) in list" :key="index">
      <div>{{item.title}}</div>
      <img :src="item.url" alt="图片无法显示，抱歉" />
    </div>
    <button @click="add">点击查看更多</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      list: [],
      reqnum: 4
    };
  },
  created() {
      if(this.$route.params.name!='admin'||this.$route.params.psw!=123){
        console.log('请登录');
        
        this.$router.push('/')
      }
    this.$common
      .GET(`https://fakerapi.it/api/v1/images?_quantity=${this.reqnum}`)
      .then(res => {
        console.log(res);
        this.list = res.data.data;
      });
  },
  methods: {
    add() {
      this.reqnum++;
      this.$common
        .GET(`https://fakerapi.it/api/v1/images?_quantity=${this.reqnum}`)
        .then(res => {
          console.log(res);
          this.list = res.data.data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
