<template>
  <nuxt-link :to="to" class="app-link h3 t-brown fd-r ai-c fw-b" :class="{ reverse }">
    <span> {{ text }}</span>
    <img
      src="@/assets/brown-arrow.svg"
      :class="[{ 'ml-1': !reverse }, { 'mr-1': reverse }]"
      :alt="text"
    />
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
      type: String,
    },
    reverse: {
      required: false,
      type: Boolean,
    },
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
.reverse {
  display: flex;
  flex-direction: row-reverse;
  &:hover {
    img {
      transform: rotate(180deg) translateX(20px);
    }
  }
  img {
    transform: rotate(180deg);
  }
}
</style>