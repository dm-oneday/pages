<template>
  <div class="wrap" id="wrap">
    <div class="logGet">
      <!-- 头部提示信息 -->
      <div class="logD logDtip">
        <p class="p1">登录</p>
      </div>
      <!-- 输入框 -->
      <div class="lgD">
        <!-- <img src="assets/logo.png" width="20" height="20" alt="" /> -->
        <input type="text" placeholder="输入用户名" v-model="info.name" />
      </div>
      <div class="lgD">
        <!-- <img src="img/logPwd.png" width="20" height="20" alt="" /> -->
        <input type="text" placeholder="输入用户密码" v-model="info.psw" />
      </div>
      <div class="logC">
        <a>
          <button @click="login" @keyup.enter="login">登 录</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      info: {
        name: "",
        psw: ""
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    login() {
      if (
        this.info.name == "" ||
        this.info.psw.length == 0 ||
        isNaN(this.info.psw)
      ) {
        console.log("输入有误，请重新输入");
        return;
      } else if (this.info.name == "admin" && this.info.psw == 123) {
        // 請求成功，將用戶信息進行緩存處理
        var storage = window.localStorage;
        storage.setItem("user", JSON.stringify(this.info));
          this.$router.push({
          path: "/home",
          name: "home", 
        })
      } else {
        console.log("再试一下吧");
      }
    }
  }
};
</script>

<style scoped >
</style>
