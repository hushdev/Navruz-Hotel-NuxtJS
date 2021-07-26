<template>
  <div class="facilities py-3 b-white">
    <div class="container">
      <h2 class="h2-decor t-gray">Наши удобства</h2>
      <div class="row fd-r fw-w jc-c">
        <nuxt-link
          :to="`/facilities${item.anchor}`"
          v-for="(item, idx) in items"
          :key="idx"
          class="item m-2"
        >
          <img :src="item.img" :alt="item.name" class="card shadow" />
          <span class="fs-6 t-white fw-b h2 t-white">{{ item.name }}</span>
        </nuxt-link>
      </div>
      <app-btn text="Ещё" class="b-yellow m-c mt-3" />
    </div>
  </div>
</template>

<script>
import poolImg from "@/assets/index/pool.png";
import barImg from "@/assets/index/bar.png";
import fitnesImg from "@/assets/index/fitnes.png";
import billiardImg from "@/assets/index/billiard.png";

export default {
  data: () => ({
    items: [
      { name: "Бассейн", img: poolImg, anchor: "#pool" },
      { name: "Бар", img: barImg, anchor: "#bar" },
      { name: "Фитнес зал", img: fitnesImg, anchor: "#fitness" },
      { name: "Бильярд", img: billiardImg, anchor: "#billiard" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.facilities {
  .item {
    max-width: 450px;
    width: 100%;
    height: auto;
    position: relative;
    cursor: pointer;
    &:hover {
      span {
        transform: translate(-40%, -50%);
        opacity: 0;
      }
      img {
        filter: brightness(100%);
      }
    }
    img {
      width: 100%;
      height: auto;
      filter: brightness(70%);
      transition: 0.2s;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      transition: 0.2s;
    }
  }
}

@media (max-width: 480px) {
  .item {
    margin: 1rem 0;
  }
}
</style>