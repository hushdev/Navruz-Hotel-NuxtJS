<template>
  <div class="home-about b-white py-3">
    <div class="container">
      <h2 class="h2-decor">{{$t('home.about.title')}}</h2>
      <div class="row fd-r ai-s">
        <img src="@/assets/index/about-bg.png" class="img-item" alt="Гостиница navruz hotel" />
        <div class="card ml-6 pt-2 w-50">
          <h3 class="h2 fw-b mb-2" v-html="$t('home.about.title2')"></h3>
          <p v-for="(p, idx) in $t('home.about.text')" :key="idx" class="text t-gray mt-4">{{p}}</p>
          <app-link :to="localePath('about')" :text="$t('home.about.link')" class="mt-6" />
        </div>
      </div>
      <div class="card shadow panel py-3 px-2 fd-r jc-c mt-6 mx-1-XS fw-w">
        <div class="item fd-r ai-c m-2">
          <img src="@/assets/index/medal.svg" alt="Доступные цены на номера" />
          <span class="t-brown text fw-b ml-2">{{$t('home.about.item1')}}</span>
        </div>
        <div class="item fd-r ai-c m-2">
          <img src="@/assets/index/snow.svg" alt="Доступные цены на номера" />
          <span class="t-brown text fw-b ml-2">{{$t('home.about.item2')}}</span>
        </div>
        <div class="item fd-r ai-c m-2">
          <img src="@/assets/index/wifi.svg" alt="Доступные цены на номера" />
          <span class="t-brown text fw-b ml-2">{{$t('home.about.item3')}}</span>
        </div>
        <div class="item fd-r ai-c m-2">
          <img src="@/assets/index/bonfire.svg" alt="Доступные цены на номера" />
          <span class="t-brown text fw-b ml-2">{{$t('home.about.item4')}}</span>
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
      border-radius: 20px;
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