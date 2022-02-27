<template>
  <div class="content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown">{{$t('rooms.title')}}</h1>
      <div v-for="(item, idx) in $t('rooms.items')" :key="idx" class="row pt-6" :id="item.id">
        <div class="room">
          <h2 class="h2">{{ item.name }}</h2>
          <p class="text t-gray">{{ item.text }}</p>
          <client-only>
            <VueSlickCarousel v-bind="settings" class="rooms-carousel fd-r mt-5 w-100 m-c">
              <img
                v-for="(img, idx) in item.img"
                :key="idx"
                :alt="item.name"
                :src="require(`@/assets/rooms/${img}.jpg`)"
                class="pb-1"
              />
            </VueSlickCarousel>
          </client-only>
          <app-btn :text="$t('rooms.button')" :to="item.link" class="b-brown mt-5" />
        </div>
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
import checkIcon from "@/assets/rooms/check.svg";

export default {
  components: { SearchForm, VueSlickCarousel },
  data: () => ({
    checkIcon,
    settings: {
      centerMode: false,
      centerPadding: "20px",
      focusOnSelect: true,
      infinite: true,
      variableWidth: true,
      variableHeight: true,
      slidesToScroll: 1,
      arrow: true,
    },
  }),
};
</script>

<style lang="scss">
//carousel
.rooms-carousel {
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
        max-height: 270px;
        height: 100%;
        padding-right: 15px;
      }
    }
  }
}

@media (max-width: 834px) {
  .rooms-carousel {
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
  .rooms-carousel {
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