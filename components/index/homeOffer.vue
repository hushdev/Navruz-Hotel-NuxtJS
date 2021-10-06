<template>
  <div class="offer fd-c pt-6 pb-4 px-1 pt-6">
    <div class="container fd-r ai-c jc-b pt-6">
      <div class="card fd-c ai-c ta-c mr-3">
        <h1 class="h1 h1-mobile t-gray">{{$t('home.offer.title')}}</h1>
        <app-btn :text="$t('home.offer.button')" :to="localePath('/booking')" class="b-brown mt-3" />
      </div>
      <div class="module ta-c h3 t-brown">
        <search-form :locale="$i18n.locale" />
      </div>
    </div>
  </div>
</template>

<script>
import AppBtn from "@/components/app/AppBtn.vue";
import SearchForm from "@/components/travelline/searchForm.vue";

export default {
  components: { AppBtn, SearchForm },
};
</script>

<style lang="scss" scoped>
.offer {
  min-height: calc(100vh - 134px);
  background: url("@/assets/index/bg2.jpg") center no-repeat;
  justify-content: center;
  background-size: cover;
  position: relative;
  .container {
    .card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .socials {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
    .socials a img {
      transition: 0.2s;
    }
    .socials a:hover {
      img {
        filter: brightness(85%);
      }
    }
    .module {
      max-width: 320px;
      width: 100%;
    }
  }
}

@media (max-width: 834px) {
  .offer {
    min-height: 100vh;
    .container {
      flex-direction: column;
      align-items: center;
      .card {
        text-align: center;
        h1 {
          text-align: center;
        }
        button {
          display: none;
        }
      }
      .module {
        margin-top: 30px;
      }
    }
  }
}

@media (max-width: 480px) {
  .offer {
    .module {
      margin-top: 20px !important;
    }
  }
}
</style>
