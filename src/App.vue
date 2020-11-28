<template>
  <div class="app">
    <h2>My Cats App!</h2>
    <cats-collection />
  </div>
</template>

<script>
import CatsCollection from './components/CatsCollection';

export default {
  name: 'App',
  components: {
    'cats-collection': CatsCollection,
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
