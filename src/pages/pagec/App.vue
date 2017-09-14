<template>
  <div id="app">
   <kka></kka>
   
    <h2>{{ msg }}ccc</h2>
     <router-view></router-view>
     

   
  </div>
</template>

<script>
import kka from '../../components/kka.vue'
export default {
  name: 'app',
  components: {kka},
  data () {
    return {
      msg: 'ttttt',
      msg2: '2222'
    }
  },
  watch: {
    msg (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
