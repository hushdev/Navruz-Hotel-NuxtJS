<template>
  <div class="home-about b-white py-3">
    <div class="container">
      <h2 class="h2-decor">Немного о нас</h2>
      <div class="row fd-r ai-s">
        <img
          src="@/assets/index/about-bg.png"
          class="img-item"
          alt="Гостиница navruz hotel"
        />
        <div class="card ml-6 pt-2 w-50">
          <h3 class="h2 fw-b mb-2">
            Гостиница <span class="t-brown">Navruz Hotel</span>
          </h3>
          <p class="text t-gray mt-4">
            Трёхзвёздочная гостиница Navruz Hotel Tashkent расположена в центре
            города и в шаговой доступности имеются все необходимые
            инфраструктуры (банки, кофейни, рестораны, продуктовые супермаркеты
            и магазины одежды).
          </p>
          <p class="text t-gray mt-3 mb-4 mb-6">
            Отель предлагает для удобного проживания 38 номеров различной
            категории, оборудованных современной техникой. В каждой комнате
            установлен смарт ТВ, мини холодильник, кондиционер, Wi-Fi и надежный
            сейф.
          </p>
          <app-link to="/about" text="Узнать больше" />
        </div>
      </div>
      <div class="card shadow panel py-3 px-2 fd-r jc-c mt-6 fw-w">
        <div class="item fd-r ai-c m-2">
          <img src="@/assets/index/medal.svg" alt="Доступные цены на номера" />
          <span class="t-brown text fw-b ml-2">Доступные цены на номера</span>
        </div>
        <div class="item fd-r ai-c m-2">
          <img src="@/assets/index/snow.svg" alt="Доступные цены на номера" />
          <span class="t-brown text fw-b ml-2"
            >Зеленая зона, где можно отдохнуть</span
          >
        </div>
        <div class="item fd-r ai-c m-2">
          <img src="@/assets/index/wifi.svg" alt="Доступные цены на номера" />
          <span class="t-brown text fw-b ml-2"
            >Бесплатный Wi-Fi на территории отеля</span
          >
        </div>
        <div class="item fd-r ai-c m-2">
          <img
            src="@/assets/index/bonfire.svg"
            alt="Доступные цены на номера"
          />
          <span class="t-brown text fw-b ml-2"
            >Грамотный персонал к вашим услугам</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from "../app/AppLink.vue";
export default {
  components: { AppLink },
};
</script>

<style lang="scss" scoped>
.home-about {
  .row {
    .img-item {
      max-width: 500px;
      width: 100%;
      height: auto;
    }
    .shadow {
      border-radius: 10px;
      .item {
        width: 25%;
      }
    }
  }
  .panel {
    .item {
      width: 272px;
    }
  }
}

@media (max-width: 1030px) {
  .home-about {
    .row {
      .img-item {
        max-width: 300px;
        max-height: 300px;
      }
    }
  }
}

@media (max-width: 834px) {
  .home-about {
    .row {
      .img-item {
        display: none;
      }
      .card {
        margin-left: 0;
        width: 100%;
      }
    }
  }
}
</style>