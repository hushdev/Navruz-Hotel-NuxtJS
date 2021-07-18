<template>
  <button class="text t-white">
    {{ text }}
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
  transition: .2s;
  &:hover {
    background: #FFCF3E;
  }
  &:focus {
    background: #E9B10B;
  }
}
</style>