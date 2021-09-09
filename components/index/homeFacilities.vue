<template>
  <div class="facilities py-3 b-white">
    <div class="container">
      <h2 class="h2-decor t-gray">{{$t('home.facilities.title')}}</h2>
      <div class="row fd-r fw-w jc-c">
        <button
          @click="redirect(item.anchor)"
          v-for="(item, idx) in items"
          :key="idx"
          class="item m-2"
        >
          <img :src="require(`assets/index/${item.img}`)" :alt="item.name" class="card shadow" />
          <span class="fs-6 t-white fw-b h2 t-white">{{ item.name }}</span>
        </button>
      </div>
      <app-btn :text="$t('home.facilities.button')" :to="localePath('/facilities')" class="b-yellow m-c mt-3" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$t('home.facilities.items')
    },
  },
  methods: {
    redirect(anchor) {
      const path = this.localePath("facilities");
      this.$router.push(path + anchor);
    },
  },
};
</script>

<style lang="scss" scoped>
.facilities {
  .item {
    max-width: 400px;
    width: 100%;
    height: auto;
    position: relative;
    cursor: pointer;
    border: 0;
    outline: 0;
    background: transparent;
    padding: 0;
    &:hover {
      span {
        transform: translate(-40%, -50%);
        opacity: 0;
      }
      img {
        filter: brightness(100%);
      }
    }
    img {
      width: 100%;
      height: auto;
      filter: brightness(70%);
      transition: 0.2s;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      transition: 0.2s;
    }
  }
}

@media (max-width: 480px) {
  .item {
    margin: 1rem 0;
  }
}
</style>