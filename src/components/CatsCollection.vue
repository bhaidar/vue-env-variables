<template>
  <section class="cats-collection">
    <h4>My Best Collection!</h4>
    <section class="cats-collection__favorites">
      <favorite-cat :index="1" />
      <favorite-cat :index="2" />
    </section>
  </section>
</template>

<script>
import FavoriteCat from './FavoriteCat';

export default {
  name: 'CatsCollection',
  components: {
    'favorite-cat': FavoriteCat,
  },
};
</script>

<style lang="scss" scoped>
.cats-collection {
  width: 90%;
  margin: 0px auto;
  border-radius: 5px 5px 0 0;
  padding: 20px 0;
  background: lightblue;

  &__favorites {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
}
</style>
