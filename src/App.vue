<template>
  <div id="app">
    {{mes}}
  </div>
</template>

<script>
import { login } from './network/api.js'
export default {
  data () {
    return {
      mes: '2111'
    }
  },
  mounted () {
    login({
      username: 'admin',
      password: '123456'
    }).then((res) => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
  div {
    color: red;
  }
</style>
