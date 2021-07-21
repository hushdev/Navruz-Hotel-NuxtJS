<template>
  <div>
    <div class="error container fd-c ai-c jc-c">
      <h1 class="h1 t-brown ta-c">404</h1>
      <p class="text g-gray ta-c mt-3">
        Добро пожаловать на страницу 404! Вы находитесь здесь, потому что ввели
        адрес страницы, которая уже не существует или была перемещена по другому
        адресу.
      </p>
      <app-btn text="Вернуться на главную" class="b-brown mt-3" to="/" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    AppLink() {
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

