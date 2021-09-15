<template>
  <div class="rooms py-3 b-white">
    <div class="container">
      <h2 class="h2-decor">{{$t('home.rooms.title')}}</h2>
      <div class="row fd-r fw-w jc-c">
        <nuxt-link
          v-for="(room, idx) in rooms"
          :key="idx"
          :to="room.link"
          class="card shadow pb-5 m-1"
        >
          <img :src="room.img" class="mb-4" alt="Standart twin" />
          <h3 class="h3 h3-decor t-brown ml-3">{{ room.name }}</h3>
        </nuxt-link>
      </div>
      <!-- <div class="ta-c h3 t-brown mt-6">
        <search-form :locale="$i18n.locale"/>
      </div>-->
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/travelline/searchForm.vue";

import room1 from "@/assets/index/twin-room.png";
import room2 from "@/assets/index/king-room.png";
import room3 from "@/assets/index/suite-room.png";
import room4 from "@/assets/index/econom-room.png";
import room5 from "@/assets/index/superior-room.png";

export default {
  components: { SearchForm },
  data: () => ({
    rooms: [
      {
        name: "Standart Twin",
        img: room1,
        anchor: "#twin",
        link: "/booking?room-type=139604",
      },
      {
        name: "Standart King",
        img: room2,
        anchor: "#king",
        link: "/booking?room-type=139605",
      },
      {
        name: "Suite",
        img: room3,
        anchor: "#suite",
        link: "/booking?room-type=139607",
      },
      {
        name: "Econom Standart",
        img: room4,
        anchor: "#econom",
        link: "/booking?room-type=139606",
      },
      {
        name: "Superior King",
        img: room5,
        anchor: "#superior",
        link: "/booking?room-type=139609",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  max-width: 234px;
  img {
    transition: 0.3s;
    width: 100%;
    height: auto;
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

@media (max-width: 480px) {
  .card {
    max-width: 250px;
    img {
      // min-width: 100%;
    }
  }
}
</style>