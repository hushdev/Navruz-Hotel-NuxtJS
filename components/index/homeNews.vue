<template>
  <div class="news b-white pb-3">
    <div class="container">
      <h2 class="h2 h2-decor t-gray">Последние новости</h2>
      <div class="row fd-r jc-b ai-s">
        <div
          v-for="(item, idx) in news"
          :key="idx"
          class="card shadow mx-4 w-33"
        >
          <img :src="item.img" :alt="item.name" />
          <div class="content py-4 px-3">
            <h3 class="h3 t-gray mb-2">{{ item.name }}</h3>
            <p class="text t-black mb-3">
              {{ item.text }}
            </p>
            <app-link :to="item.to" text="Подробнее" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newExample from "@/assets/index/news-example.png";
export default {
  data: () => ({
    news: [
      {
        name: "Поздравляем с весенним праздником Навруз!",
        text: "Уважаемые гости столицы! Гостиница Навруз поздравляет вас и ваших близких с прекрасным весенним праздником – Навруз!",
        img: newExample,
        to: "news/news-single",
      },
      {
        name: "Поздравляем с весенним праздником Навруз!",
        text: "Уважаемые гости столицы! Гостиница Навруз поздравляет вас и ваших близких с прекрасным весенним праздником – Навруз!",
        img: newExample,
        to: "news/news-single",
      },
      {
        name: "Поздравляем с весенним праздником Навруз!",
        text: "Уважаемые гости столицы! Гостиница Навруз поздравляет вас и ваших близких с прекрасным весенним праздником – Навруз!",
        img: newExample,
        to: "news/news-single",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.news {
  .row {
    .card {
      overflow: hidden;
      max-width: 364px;
      width: 100%;
      img {
        transition: 0.2s;
        width: 100%;
        height: auto;
      }
      &:hover {
        img {
          transform: scale(1.1);
          filter: brightness(70%);
        }
      }
    }
  }
}
</style>