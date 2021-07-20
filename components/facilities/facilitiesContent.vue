<template>
  <div class="content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown mb-4">Удобства отеля</h1>
      <div class="row fd-r fw-w jc-c">
        <div v-for="(item, idx) in items" :key="idx" class="item m-2">
          <img :src="item.img" :alt="item.name" class="card shadow" />
          <span class="fs-6 t-white fw-b">{{ item.name }}</span>
        </div>
      </div>
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
      { name: "Бассейн", img: poolImg },
      { name: "Бар", img: barImg },
      { name: "Фитнес зал", img: fitnesImg },
      { name: "Бильярд", img: billiardImg },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.content {
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
      transform: translate(-50%, -50%);
      transition: 0.2s;
    }
  }
}
</style>