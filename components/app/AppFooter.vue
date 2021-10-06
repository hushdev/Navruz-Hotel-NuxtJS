<template>
  <footer class="footer b-white p2">
    <div class="container map">
      <iframe
        :src='`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.799345849854!2d69.28380981495592!3d41.334976407206355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf49b954dd3%3A0x8b6b32b227cbe29e!2sNavruz%20Hotel%20Tashkent!5e0!3m2!1s${$i18n.locale}!2spl!4v1633181354135!5m2!1s${$i18n.locale}!2spl`'
        width="100%"
        height="400"
        style="border:0;"
        class="shadow border"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
    <div class="container">
      <div class="credentials text-S t-gray fd-r jc-b mt-2 ta-c fd-c-XS">
        <span class>© 2018—{{ year }} Navruz hotel</span>
        <div class="fd-r aic fd-c-XS">
          <span v-html="$t('footer.coder')" class="py-1-XS"></span>
          <span v-if="$i18n.locale !== 'uz'" v-html="$t('footer.design')" class="ml-2"></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import AppBtn from "@/components/app/AppBtn.vue";
export default {
  components: { AppBtn },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  .map {
    iframe {
      border-radius: 15px;
      overflow: hidden;
    }
  }
  .container {
    .news {
      form {
        .input {
          max-width: 300px;
        }
      }
    }
    .credentials {
      div {
        span a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>