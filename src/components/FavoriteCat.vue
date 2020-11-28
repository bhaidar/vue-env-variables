<template>
  <section class="favorite-cat">
    <p>Favorite Cat {{ index }}</p>
    <img v-if="imageUrl" :src="imageUrl" alt="Cat" />
  </section>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useEnv, envSymbol } from '../install';

export default {
  name: 'CatsCollection',
  props: {
    index: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const env = useEnv(envSymbol);
    let imageUrl = ref('');

    const loadNextImage = async () => {
      try {
        const { CATSAPIKEY, CATSSEARCHAPI } = env;
        axios.defaults.headers.common['x-api-key'] = CATSAPIKEY;

        let response = await axios.get(CATSSEARCHAPI, {
          params: { limit: 1, size: 'full' },
        });

        const { url } = response.data[0];
        imageUrl.value = url;
      } catch (err) {
        console.log(err);
      }
    };

    onMounted(() => {
      loadNextImage();
    });

    return {
      imageIndex: computed(() => props.index),
      imageUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
.favorite-cat {
  img {
    max-width: 200px;
    border-radius: 5px;
  }
}
</style>
