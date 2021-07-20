<template>
  <div class="news-content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown">Последние новости:</h1>
      <div class="row fd-c ai-s mt-5">
        <div v-for="(item, idx) in news" :key="idx" class="card shadow fd-r ai-c w-80 mt-4">
          <img :src="item.img" :alt="item.name" />
          <div class="content px-2 py-2">
            <h3 class="h3 t-brown">{{ item.name }}</h3>
            <div class="t-gray text my-1">{{ item.date }}</div>
            <p class="t-gray text mb-4">{{ item.text }}</p>
            <app-link :to="`/news?${item.id}`" text="Подробнее" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newExample from "@/assets/news/newExample.jpg";

export default {
  data: () => ({
    news: [
      {
        name: "С праздником навруз!",
        date: "21.03.2021",
        text: "Уважаемые гости столицы! Гостиница Навруз поздравляет вас и ваших близких с прекрасным весенним праздником – Навруз!",
        id: 1,
        img: newExample,
      },
      {
        name: "С праздником навруз!",
        date: "21.03.2021",
        text: "Уважаемые гости см праздником – Навруз!",
        id: 2,
        img: newExample,
      },
      {
        name: "С праздником навруз!",
        date: "21.03.2021",
        text: "Уважаемые гости столицы! Гостиница Навруз поздравляет вас и ваших близких с прекрасным весенним праздником – Навруз!",
        id: 3,
        img: newExample,
      },
      {
        name: "С праздником навруз!",
        date: "21.03.2021",
        text: "Уважаемые гости столицы! Гостиница Навруз поздравляет вас и ваших близких с прекрасным весенним праздником – Навруз!",
        id: 4,
        img: newExample,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.news-content {
  .row {
    .card {
      border-radius: 10px;
      overflow: hidden;
      transition: .2s;
      &:hover {
        transform: scale(.99);
        box-shadow: 0px 5px 10px rgba(97, 97, 97, 0.25);
        img {
          filter: brightness(90%);
        }
      }
      &:first-child {
        margin-top: 0;
      }
      img {
        transition: .2s;
        max-width: 457px;
        max-height: 300px;
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>