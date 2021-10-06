<template>
  <div class="content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown">{{$t('facilities.title')}}</h1>

      <div v-for="(item, idx) in $t('facilities.items')" :key="idx" class="row pt-6" :id="item.id">
        <h2 class="h2">{{ item.name }}</h2>
        <p v-html="item.text" class="text t-gray"></p>
        <p v-if="item.text2" v-html="item.text2" class="text t-gray mt-1"></p>
        <client-only>
          <VueSlickCarousel v-bind="settings" class="facilities-carousel fd-r mt-5 w-100 m-c">
            <img
              v-for="(image, idx) in item.img"
              :key="idx"
              :alt="item.name"
              :src="require(`assets/facilities/${image}.jpg`)"
              class="pb-1"
            />
          </VueSlickCarousel>
        </client-only>
      </div>
      <search-form :locale="$i18n.locale" class="mt-6" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import SearchForm from "@/components/travelline/searchForm";

export default {
  components: { SearchForm, VueSlickCarousel },
  data: () => ({
    settings: {
      centerMode: true,
      centerPadding: "20px",
      focusOnSelect: true,
      infinite: true,
      variableWidth: true,
      variableHeight: true,
      slidesToScroll: 1,
      dots: true,
      arrow: true,
    },
  }),
};
</script>

<style lang="scss" >
.facilities-carousel {
  .slick-arrow {
    width: 50px;
    z-index: 1 !important;
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
  .slick-slide {
    div {
      img {
        width: auto;
        max-height: 300px;
        height: 100%;
        padding-right: 15px;
      }
    }
  }
}

@media (max-width: 834px) {
  .facilities-carousel {
    .slick-slide {
      div {
        img {
          padding-right: 10px;
          max-height: 250px;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .facilities-carousel {
    .slick-slide {
      div {
        img {
          padding-right: 5px !important;
          max-height: 170px;
        }
      }
    }
  }
}
</style>