<template>
  <div>
    <app-nav />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
export default {
  name: "defaultLayout",
  async created() {
    await this.$store.dispatch("fetchPosts", "ru");
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
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


.menu-enter-active,
.menu-leave-active {
  transition: opacity .15s ease-in-out, transform 0.25s ease-in-out;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}

.x-tl-booking-widget-9249 {
  display: none;
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