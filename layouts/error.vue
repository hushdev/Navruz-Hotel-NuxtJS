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
// import AppBtn from '~/components/app/AppBtn.vue';
// import AppLink from '~/components/app/AppLink.vue';
export default {
  // components: { AppBtn },
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
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
</style>

