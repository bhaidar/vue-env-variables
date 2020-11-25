<template>
  <div>{{ envVariables2 }}</div>
</template>

<script>
import { inject } from 'vue';
import { useEnv, envSymbol } from './install';

export default {
  name: 'App',
  created() {
    console.log({ optionsApi: this.$env });
  },
  setup() {
    const envVariables = inject(envSymbol);
    console.log(envVariables);

    const envVariables2 = useEnv();
    return { envVariables2 };
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
