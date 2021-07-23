<template>
  <div class="rooms py-3 b-white">
    <div class="container">
      <h2 class="h2-decor">Комнаты</h2>
      <div class="row fd-r fw-w jc-c">
        <nuxt-link to="/rooms" v-for="(room, idx) in rooms" :key="idx" class="card shadow pb-5 m-1">
          <img :src="room.img" class="mb-4" alt="Standart twin" />
          <h3 class="h3 h3-decor t-brown ml-3">{{ room.name }}</h3>
        </nuxt-link>
      </div>
      <div class="ta-c h3 t-brown mt-6">BOOKING ENGINE HERE</div>
    </div>
  </div>
</template>

<script>
import room1 from "@/assets/index/twin-room.png";
import room2 from "@/assets/index/king-room.png";
import room3 from "@/assets/index/suite-room.png";
import room4 from "@/assets/index/econom-room.png";

export default {
  data: () => ({
    rooms: [
      { name: "Standart Twin", img: room1 },
      { name: "Standart King", img: room2 },
      { name: "Suite", img: room3 },
      { name: "Econom Standart", img: room4 },
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
  h3:after {
    transition: .3s;
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