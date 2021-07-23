<template>
  <div class="news-content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown">Последние новости:</h1>
      <div class="row fd-c ai-s mt-5 fw-w">
        <div
          v-for="(item, idx) in news"
          :key="idx"
          class="card shadow fd-r ai-c w-80 mt-4"
        >
          <img :src="item.img" :alt="item.name" />
          <div class="content px-2 py-2 py-4-XS">
            <h3 class="h3 t-gray">{{ item.name }}</h3>
            <div class="t-gray text my-1">{{ item.date }}</div>
            <p class="t-gray text mb-4">{{ item.text }}</p>
            <app-link :to="`news/news-single`" text="Подробнее" />
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
      transition: 0.2s;
      &:hover {
        transform: scale(0.99);
        box-shadow: 0px 5px 10px rgba(97, 97, 97, 0.25);
        img {
          filter: brightness(90%);
        }
      }
      &:first-child {
        margin-top: 0;
      }
      img {
        transition: 0.2s;
        max-width: 457px;
        max-height: 300px;
        width: 100%;
        height: auto;
      }
    }
  }
}

@media (max-width: 1051px) {
  .news-content {
    .row {
      .card {
        width: 100%;
        img {
          max-width: 400px;
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .news-content {
    .row {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: stretch;
      .card {
        flex-direction: column;
        max-width: 300px;
        margin: 10px;
 py-4-XS        img {
          max-width: 100%;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .news-content {
    .row {
      .card {
        max-width: 100%;
      }
    }
  }
}
</style>