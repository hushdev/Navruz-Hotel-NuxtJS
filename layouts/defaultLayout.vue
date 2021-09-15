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
  metaInfo() {
    return {
      title: this.$t("meta.title"),
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "../favicon.png" }],
    };
  },
  async created() {
    await this.$store.dispatch("fetchPosts", "ru");
  },
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
  transition: opacity 0.15s ease-in-out, transform 0.25s ease-in-out;
}
.menu-enter,
.menu-leave-to {
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