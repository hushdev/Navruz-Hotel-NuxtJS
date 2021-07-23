<template>
  <div class="content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown">Комнаты</h1>
      <div class="row fd-r jc-c mt-5 fw-w">
        <div v-for="(room, idx) in rooms" :key="idx" class="card shadow m-1">
          <img :src="room.img" class="mb-4" alt="Standart twin" />
          <h3 class="h3 h3-decor t-brown ml-3">{{ room.name }}</h3>
          <ul class="mx-3 mt-3">
            <li
              v-for="facility in room.facilities"
              :key="facility"
              class="fd-r ai-c text-small t-gray fw-b mb-1"
            >
              <img :src="checkIcon" :alt="facility" class="checkIcon mr-1" />
              {{ facility }}
            </li>
          </ul>
          <nuxt-link
            to="/"
            class="t-white fw-b text b-brown w-100 d-iblock mt-3 ta-c py-1"
            >Забронировать</nuxt-link
          >
        </div>
      </div>
      <div
        v-for="(room, idx) in rooms"
        :key="idx"
        class="row pt-6"
        :id="room.id"
      >
        <div class="room">
          <h2 class="h2">{{ room.name }}</h2>
          <p class="text t-gray">{{ room.text }}</p>
          <div class="carousel fd-r mt-5">
            <img
              v-for="(img, idx) in room.images"
              :key="idx"
              :alt="room.text"
              :src="img"
              class="pb-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import room1 from "@/assets/index/twin-room.png";
import room2 from "@/assets/index/king-room.png";
import room3 from "@/assets/index/suite-room.png";
import room4 from "@/assets/index/econom-room.png";
import checkIcon from "@/assets/rooms/check.svg";

import king1 from "@/assets/rooms/king1.jpg";
import king2 from "@/assets/rooms/king2.jpg";
import king3 from "@/assets/rooms/king3.jpg";
import king4 from "@/assets/rooms/king4.jpg";
import king5 from "@/assets/rooms/king5.jpg";

export default {
  data: () => ({
    checkIcon,
    rooms: [
      {
        name: "Standart Twin",
        img: room1,
        facilities: ["Кондиционер", "Холодильник", "Душ"],
        text: "Все номера данной категории оснащены удобной кроватью размером king-size, смарт ТВ, телефоном, мини холодильником с бесплатными безалкогольными напитками, сейфом, шкафом для хранения одежды, отдельной рабочей зоной, мягким халатом и индивидуальными разовыми принадлежностями.",
        images: [king1, king2, king3, king4, king5],
        id: "twin",
      },
      {
        name: "Standart King",
        img: room2,
        facilities: ["Кондиционер", "Холодильник", "Душ"],
        text: "Все номера данной категории оснащены удобной кроватью размером king-size, смарт ТВ, телефоном, мини холодильником с бесплатными безалкогольными напитками, сейфом, шкафом для хранения одежды, отдельной рабочей зоной, мягким халатом и индивидуальными разовыми принадлежностями.",
        images: [king1, king2, king3, king4, king5],
        id: "king",
      },
      {
        name: "Suite",
        img: room3,
        facilities: ["Кондиционер", "Холодильник", "Душ"],
        text: "Все номера данной категории оснащены удобной кроватью размером king-size, смарт ТВ, телефоном, мини холодильником с бесплатными безалкогольными напитками, сейфом, шкафом для хранения одежды, отдельной рабочей зоной, мягким халатом и индивидуальными разовыми принадлежностями.",
        images: [king1, king2, king3, king4, king5],
        id: "suite",
      },
      {
        name: "Econom Standart",
        img: room4,
        facilities: ["Кондиционер", "Холодильник", "Душ"],
        text: "Все номера данной категории оснащены удобной кроватью размером king-size, смарт ТВ, телефоном, мини холодильником с бесплатными безалкогольными напитками, сейфом, шкафом для хранения одежды, отдельной рабочей зоной, мягким халатом и индивидуальными разовыми принадлежностями.",
        images: [king1, king2, king3, king4, king5],
        id: "econom",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  img {
    transition: 0.3s;
    width: 100%;
    height: auto;
  }
  .checkIcon {
    width: 20px;
    height: 20px;
  }
  a {
    transition: 0.2s;
    &:hover {
      background: #8f7357;
    }
  }
  h3:after {
    transition: 0.3s;
  }
  &:hover {
    h3:after {
      transform: translateX(20px);
      opacity: 0;
    }
    img {
      transform: scale(1.1);
      filter: brightness(70%);
    }
  }
}
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
  }
}
@media (max-width: 480px) {
  .card {
    width: 100%;
  }
}
</style>