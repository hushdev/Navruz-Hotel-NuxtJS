<template>
  <div>
    <div class="error container fd-c ai-c jc-c">
      <h1 class="h1 t-brown ta-c">404</h1>
      <p class="text g-gray ta-c mt-3">{{$t('errors.404')}}</p>
      <app-btn :text="$t('errors.button')" class="b-brown mt-3" :to="localePath('/')" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
  p {
    max-width: 700px;
  }
}
</style>

