<template>
  <div class="footer" v-show="$route.meta.istrun">
    <div @click="tol(item.id)" v-for="(item,index) in reoutepath" :key="index" class="routers">
      <router-link :to="item.path"  :class="{'sky':num==index}">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      num: 0,
      reoutepath: [
        { title: "美團", path: "/home", id: 0 },
        { title: "購物車", path: "/cart", id: 1 },
        { title: "消息", path: "/news", id: 2 },
        { title: "我的", path: "/info", id: 3 }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    tol(id) {
      this.num = id;
    }
  }
};
</script>

<style scoped >
.footer {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 50px;
  justify-items: center;
  align-items: center;
  
}
.routers {
  flex: 1;
}
.sky {
  color: skyblue;
  font-size: 18px;
   transition:font-size 0.1s;
}
</style>
