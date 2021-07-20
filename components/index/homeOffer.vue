<template>
  <div class="offer fd-c jc-b pt-6 pb-4">
    <div class="container card fd-c ai-s pt-6">
      <h1 class="h1 t-gray">
        <span>Уютный отель для</span>
        <br />
        <span class="d-iblock mt-2"> бизнеса и отдыха</span>
        <br />
        <span class="d-iblock mt-1 fs-5">Номер один в Ташкенте</span>
      </h1>
      <app-btn text="Забронировать" class="b-yellow mt-3" />
    </div>
    <div class="container socials mt-10">
      <div class="text t-white mb-3">Мы в соц. сетях</div>
      <a href="https://www.instagram.com/navruzhotel/">
        <img src="@/assets/index/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/hotelnavruz/" class="mx-1">
        <img src="@/assets/index/facebook.svg" alt="Facebook" />
      </a>
      <a href="#">
        <img src="@/assets/index/telegram.svg" alt="Telegram" />
      </a>
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
  background: url("@/assets/index/bg.jpg") center no-repeat;
  background-size: cover;
  .socials a img {
    transition: 0.2s;
  }
  .socials a:hover {
    img {
      filter: brightness(85%);
    }
  }
}
</style>
