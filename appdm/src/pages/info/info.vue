<template>
  <div>
    個人中心
    <div @click="rem">注銷登錄</div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    rem() {
      window.localStorage.removeItem("user");
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped >
</style>
