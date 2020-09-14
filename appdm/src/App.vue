<template>
  <div id="app">
    <div ><Hello  /></div>
    
  
    <router-view />
  </div>
</template>
<script>
import Hello from "./components/footernav";
export default {
  components: {
    Hello
  }
};
</script>
<style>
a{
  text-decoration: none;
  color: black;
  font-size: 14px;
}
</style>
