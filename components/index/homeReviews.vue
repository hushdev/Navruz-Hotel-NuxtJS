<template>
  <div class="reviews pb-6 b-white">
    <div class="container">
      <h2 class="h2 h2-decor t-gray">{{$t('home.reviews.title')}}</h2>
    </div>
    <client-only>
      <VueSlickCarousel v-bind="settings" class="w-100 m-c" style="max-width: 1280px">
        <div v-for="(item, idx) in reviews" :key="idx" class="px-6 mb-4 mt-3 px-1-XS">
          <div class="wrap b-white card shadow py-4 px-3">
            <div class="fd-r jc-l">
              <img
                :src="require(`@/assets/index/${item.img}`)"
                class="review-avatar"
                :alt="item.text"
              />
              <div class="title fd-c ml-1">
                <span class="t-black text fw-b">{{ item.name }}</span>
                <img class="review-img" src="@/assets/index/stars.svg" alt="5 stars!" />
              </div>
            </div>
            <p class="text t-gray mt-3">{{ item.text }}</p>
          </div>
        </div>
      </VueSlickCarousel>
    </client-only>
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
  computed: {
    reviews() {
      return this.$t("home.reviews.items");
    },
  },
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
    reviews1: [
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
  h2 {
    margin-bottom: 3rem;
  }
  .review-avatar {
    border-radius: 50%;
    width: 68px;
    height: 68px;
  }
  .review-img {
    max-width: 100px;
  }
  .slick-prev:before,
  .slick-next:before {
    background: #b99470;
    border-radius: 50%;
    display: block;
    width: 30px;
    height: 30px;
    opacity: 1;
    color: #ffffff;
    content: 0;
    font-size: 17px;
    position: absolute;
    left: calc(50% - 15px);
    top: -5px;
    padding: 7px;
    padding-top: 8px;
    box-shadow: 0px 2px 5px rgba(97, 97, 97, 0.25);
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