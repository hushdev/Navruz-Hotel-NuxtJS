<template>
  <footer class="footer b-white p2">
    <div class="map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A12d7b74f622bf778838e54df31a9fe3829e6da5b592a29d1590bcf4505e53e66&amp;source=constructor"
        width="100%"
        height="500"
        frameborder="0"
      ></iframe>
    </div>

    <div class="container">
      <div class="news fd-c ai-c">
        <h3 class="h3 fw-b ta-c">Новостная рассылка</h3>
        <p class="text t-gray mt-2 ta-c">
          Подпишитесь чтобы оставаться в курсе последних событий
        </p>
        <form @submit.prevent class="mt-2 fd-r jc-c">
          <input
            type="email"
            placeholder="Email"
            autocomplete="email"
            class="mr-1 px-2 py-1 text-S t-gray fs-2"
          />
          <app-btn text="Подписаться" class="b-brown"/>
          <!-- <button>Подписаться</button> -->
        </form>
      </div>
      <div class="credentials text-S t-gray fd-r jc-b ta-c mt-1 fd-c-XS">
        <span class="">© 2018—{{ year }} Navruz hotel</span>
        <div class="fd-r aic fd-c-XS">
          <span class="py-1-XS"
            >Разработано
            <a
              href="https://www.upwork.com/freelancers/~01aa7aa6602c9494dc"
              target="_blank"
              class="t-brown"
              >an.ildar</a
            ></span
          >
          <span class="ml-2"
            >Дизайн
            <a
              href="https://kwork.ru/user/zednight13"
              class="t-brown"
              target="_blank"
              >zednight</a
            ></span
          >
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
  .map {
    iframe {
      filter: grayscale(100%);
    }
  }
  .news {
    form {
      input {
        min-height: 100%;
        max-width: 300px;
        width: 100%;
        border-radius: 5px;
        background: #f0f0f0;
        border: 1px solid #c6c6c6;
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
</style>