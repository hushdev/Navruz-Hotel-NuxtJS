<template>
  <div class="content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown">Комнаты</h1>
      <div class="row fd-r jc-b mt-5">
        <div v-for="(room, idx) in rooms" :key="idx" class="card shadow">
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
          <nuxt-link to="/" class="t-white fw-b text b-brown w-100 d-iblock mt-3 ta-c py-1">Забронировать</nuxt-link>
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

export default {
  data: () => ({
    checkIcon,
    rooms: [
      {
        name: "Standart Twin",
        img: room1,
        facilities: ["Кондиционер", "Холодильник", "Душ"],
      },
      {
        name: "Standart King",
        img: room2,
        facilities: ["Кондиционер", "Холодильник", "Душ"],
      },
      {
        name: "Suite",
        img: room3,
        facilities: ["Кондиционер", "Холодильник", "Душ"],
      },
      {
        name: "Econom Standart",
        img: room4,
        facilities: ["Кондиционер", "Холодильник", "Душ"],
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
    transition: .2s;
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
</style>