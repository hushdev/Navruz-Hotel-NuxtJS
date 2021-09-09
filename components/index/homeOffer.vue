<template>
  <div class="offer fd-c pt-6 pb-4">
    <div class="container card fd-c ai-s pt-6">
      <h1 class="h1 h1-offer t-gray">
        <span class="d-iblock">{{$t('home.offer.title[0]')}}</span>
        <br />
        <span class="d-iblock">{{$t('home.offer.title[1]')}}</span>
        <br />
        <span class="d-iblock">{{$t('home.offer.title[2]')}}</span>
      </h1>
      <h1 class="h1 h1-mobile t-gray">
        {{$t('home.offer.title[0]')}}
        {{$t('home.offer.title[1]')}}
        {{$t('home.offer.title[2]')}}
      </h1>
      <app-btn :text="$t('home.offer.button')" :to="localePath('/booking')" class="b-brown mt-3" />
    </div>
    <div class="container socials container mt-6 pt-6">
      <div class="text t-white mb-1">{{$t('home.offer.text')}}</div>
      <div class="fd-r">
        <a href="https://www.instagram.com/navruzhotel/" target="_blank">
          <img src="@/assets/index/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/hotelnavruz/" target="_blank" class="mx-2">
          <img src="@/assets/index/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://t.me/navruzhotel" target="_blank">
          <img src="@/assets/index/telegram.svg" alt="Telegram" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import AppBtn from "@/components/app/AppBtn.vue";

export default {
  components: { AppBtn },
};
</script>

<style lang="scss" scoped>
.offer {
  min-height: calc(100vh - 134px);
  background: url("@/assets/index/bg2.jpg") center no-repeat;
  justify-content: center;
  background-size: cover;
  position: relative;
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
}

@media (max-width: 834px) {
  .offer {
    min-height: 100vh;
    .socials {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .text {
        margin-bottom: 0;
        margin-right: 15px;
      }
    }
  }
}
</style>
