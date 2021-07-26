<template>
  <div class="content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown mb-4">Удобства отеля</h1>
      <div v-for="(item, idx) in items" :key="idx" class="row pt-6" :id="item.id">
        <h2 class="h2">{{ item.name }}</h2>
        <div class="text-small t-gray my-2 fw-b">{{ item.time }}</div>
        <p class="text t-gray">{{ item.text }}</p>
        <div class="carousel fd-r mt-5">
          <img
            v-for="(img, idx) in item.images"
            :key="idx"
            :alt="item.text"
            :src="img"
            class="pb-1"
          />
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

import pool1 from "@/assets/facilities/pool1.jpg";
import pool2 from "@/assets/facilities/pool2.jpg";
import pool3 from "@/assets/facilities/pool3.jpg";
import pool4 from "@/assets/facilities/pool4.jpg";
import pool5 from "@/assets/facilities/pool5.jpg";

export default {
  data: () => ({
    items: [
      {
        name: "Бассейн",
        img: poolImg,
        time: "Время работы: 9:00 - 18:00",
        text: "Все номера данной категории оснащены удобной кроватью размером king-size, смарт ТВ, телефоном, мини холодильником с бесплатными безалкогольными напитками, сейфом, шкафом для хранения одежды, отдельной рабочей зоной, мягким халатом и индивидуальными разовыми принадлежностями.",
        images: [pool1, pool2, pool3, pool4, pool5],
        id: "pool"
      },
      {
        name: "Бар",
        img: barImg,
        time: "Время работы: 9:00 - 18:00",
        text: "Все номера данной категории оснащены удобной кроватью размером king-size, смарт ТВ, телефоном, мини холодильником с бесплатными безалкогольными напитками, сейфом, шкафом для хранения одежды, отдельной рабочей зоной, мягким халатом и индивидуальными разовыми принадлежностями.",
        images: [pool1, pool2, pool3, pool4, pool5],
        id: "bar"
      },
      {
        name: "Фитнес зал",
        img: fitnesImg,
        time: "Время работы: 9:00 - 18:00",
        text: "Все номера данной категории оснащены удобной кроватью размером king-size, смарт ТВ, телефоном, мини холодильником с бесплатными безалкогольными напитками, сейфом, шкафом для хранения одежды, отдельной рабочей зоной, мягким халатом и индивидуальными разовыми принадлежностями.",
        images: [pool1, pool2, pool3, pool4, pool5],
        id: 'fitness'
      },
      {
        name: "Бильярд",
        img: billiardImg,
        time: "Время работы: 9:00 - 18:00",
        text: "Все номера данной категории оснащены удобной кроватью размером king-size, смарт ТВ, телефоном, мини холодильником с бесплатными безалкогольными напитками, сейфом, шкафом для хранения одежды, отдельной рабочей зоной, мягким халатом и индивидуальными разовыми принадлежностями.",
        images: [pool1, pool2, pool3, pool4, pool5],
        id: 'billiard'
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.carousel {
  overflow-x: scroll;
  img {
    width: 301px;
    height: 420px;
    margin-right: 30px;
  }
}

@media (max-width: 834px) {
  .carousel img {
    margin-right: 10px;
    width: 151px;
    height: 270px;
  }
}
</style>