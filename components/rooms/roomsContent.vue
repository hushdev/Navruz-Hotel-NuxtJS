<template>
  <div class="content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown">{{$t('rooms.title')}}</h1>
      <!-- <div class="row fd-r jc-c mt-5 fw-w">
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
            :to="room.link"
            class="t-white fw-b text b-brown w-100 d-iblock mt-3 ta-c py-1"
            >Забронировать</nuxt-link
          >
        </div>
      </div>-->
      <div v-for="(item, idx) in $t('rooms.items')" :key="idx" class="row pt-6" :id="item.id">
        <div class="room">
          <h2 class="h2">{{ item.name }}</h2>
          <p class="text t-gray">{{ item.text }}</p>
          <div class="carousel fd-r mt-5">
            <img
              v-for="(img, idx) in item.img"
              :key="idx"
              :alt="item.name"
              :src="require(`@/assets/rooms/${img}.jpg`)"
              class="pb-1"
            />
          </div>
          <app-btn :text="$t('rooms.button')" :to="item.link" class="b-brown mt-2" />
        </div>
      </div>
      <search-form :locale="$i18n.locale" class="mt-6" />
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/travelline/searchForm";
import checkIcon from "@/assets/rooms/check.svg";

export default {
  components: { SearchForm },
  data: () => ({
    checkIcon,
  }),
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
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
    align-self: stretch;
    position: absolute;
    bottom: 0;
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
    max-width: 301px;
    width: 100%;
    height: auto;
    margin-right: 30px;
  }
}

@media (max-width: 834px) {
  .carousel img {
    margin-right: 10px;
    max-width: 200px;
  }
}
@media (max-width: 480px) {
  .card {
    width: 100%;
  }
}
</style>