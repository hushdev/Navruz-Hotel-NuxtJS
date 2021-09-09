<template>
  <button class="text t-white">
    <nuxt-link v-if="to" :to="to">{{ text }}</nuxt-link>
    <template v-if="!to">{{ text }}</template>
  </button>
</template>

<script>
export default {
  name: "AppBtn",
  props: {
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: block;
  width: 240px;
  height: 50px;
  text-transform: to-upper-case($string: "");
  border-radius: 5px;
  border: 0;
  outline: 0;
  transition: 0.2s;
  a {
    color: #ffffff;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  &:hover {
    background: #ffcf3e;
  }
  &:focus {
    background: #e9b10b;
  }
}
</style>