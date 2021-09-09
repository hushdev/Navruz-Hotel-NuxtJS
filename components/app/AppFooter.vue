<template>
  <footer class="footer b-white p2">
    <div class="container map">
      <iframe
        v-if="$i18n.locale === 'en'"
        src="https://yandex.com/map-widget/v1/?um=constructor%3A54443d9c17e6197972dc953895b5af34a9a27dd779003239eb9a470ae8e218a0&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
        class="shadow border"
      ></iframe>
      <iframe
        v-if="$i18n.locale === 'ru'"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A54443d9c17e6197972dc953895b5af34a9a27dd779003239eb9a470ae8e218a0&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
        class="shadow border"
      ></iframe>
      <iframe
        v-if="$i18n.locale === 'uz'"
        src="https://yandex.uz/map-widget/v1/?um=constructor%3A54443d9c17e6197972dc953895b5af34a9a27dd779003239eb9a470ae8e218a0&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
        class="shadow border"
      ></iframe>
    </div>

    <div class="container">
      <!-- <div class="news fd-c ai-c">
        <h3 class="h3 fw-b ta-c">Новостная рассылка</h3>
        <p class="text t-gray mt-2 ta-c">
          Подпишитесь чтобы оставаться в курсе последних событий
        </p>
        <form @submit.prevent class="mt-2 fd-r jc-c">
          <input
            type="email"
            placeholder="Email"
            autocomplete="email"
            class="input mr-1 px-2 py-1 text-S t-gray fs-2"
          />
          <app-btn text="Подписаться" class="b-brown" />
        </form>
      </div>-->
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