<template>
  <nuxt-link :to="to" class="app-link h3 t-brown fd-r aic fw-b"
    >{{text}}
    <img src="@/assets/brown-arrow.svg" class="ml-1" alt="." />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String
    }
  },
};
</script>

<style lang="scss" scoped>
.app-link {
  text-decoration: none;
  img {
    transition: ease-in-out 0.2s;
  }
  &:hover {
    img {
      transform: translateX(20px);
    }
  }
}
</style>