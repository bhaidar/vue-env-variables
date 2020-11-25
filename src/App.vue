<template>
  <div></div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'App',
  inject: ['env'],
  created() {
    console.log({ optionsApi: this.$env, provider: this.env });
  },
  setup() {
    const envVariables = inject('env');
    console.log({ compositionApi: envVariables });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
