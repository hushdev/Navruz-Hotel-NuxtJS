<template>
  <div class="reviews pb-3 b-white">
    <div class="container">
      <h2 class="h2 h2-decor t-gray">Отзывы наших гостей</h2>
      <div class="row w-90 w-100-XS m-c">
        <client-only>
          <VueSlickCarousel v-bind="settings">
            <div
              v-for="(item, idx) in reviews"
              :key="idx"
              class="px-6 my-4 px-3-XS"
            >
              <div class="wrap b-white card shadow py-4 px-3">
                <div class="fd-r jc-l">
                  <img :src="item.img" :alt="item.text" />
                  <div class="title fd-c ml-1">
                    <span class="t-black text fw-b">{{ item.name }}</span>
                    <img
                      class="review-img"
                      src="@/assets/index/stars.svg"
                      alt="5 stars!"
                    />
                  </div>
                </div>
                <p class="text t-gray mt-3">{{ item.text }}</p>
              </div>
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

//images
import Review1 from "@/assets/index/review-1.png";
import Review2 from "@/assets/index/review-2.png";

export default {
  components: { VueSlickCarousel },
  data: () => ({
    settings: {
      centerMode: true,
      centerPadding: "20px",
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 834,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    },
    reviews: [
      {
        name: "Ольга Россия",
        text: "Все полностью соответствует фотографиям на сайте. Очень чисто, все новое. Персонал очень приветливый. ",
        img: Review1,
      },
      {
        name: "Sergeynsk Россия",
        text: "Останавливаюсь второй раз, все супер, лучшее сочетание в Ташкенте, рекомендую!!",
        img: Review2,
      },
      {
        name: "Ольга Россия",
        text: "Все полностью соответствует фотографиям на сайте. Очень чисто, все новое. Персонал очень приветливый. ",
        img: Review1,
      },
      {
        name: "Sergeynsk Россия",
        text: "Останавливаюсь второй раз, все супер, лучшее сочетание в Ташкенте, рекомендую!!",
        img: Review2,
      },
      {
        name: "Ольга Россия",
        text: "Все полностью соответствует фотографиям на сайте. Очень чисто, все новое. Персонал очень приветливый. ",
        img: Review1,
      },
      {
        name: "Sergeynsk Россия",
        text: "Останавливаюсь второй раз, все супер, лучшее сочетание в Ташкенте, рекомендую!!",
        img: Review2,
      },
    ],
  }),
};
</script>

<style lang="scss">
.reviews {
  * {
    outline: 0;
  }
  .review-img {
    max-width: 100px;
  }
  .slick-arrow {
    width: 50px;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #b99470 !important;
    font-size: 30px;
  }
  .card {
    display: block;
    max-width: 457px;
    width: 100%;
    margin: 0 auto;
    transition: 0.2s;
    &:hover {
      transform: scale(0.98);
      box-shadow: 0px 5px 10px rgba(97, 97, 97, 0.25);
    }
  }
}
</style>