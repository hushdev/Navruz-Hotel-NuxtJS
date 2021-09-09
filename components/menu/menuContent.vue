<template>
  <div class="menu-content b-white">
    <transition name="page">
      <menu-modal :data="modalData" v-if="showModal" @closeModal="showModal = false"/>
    </transition>
    <div class="container py-6 fd-c ai-c">
      <h1 class="h1 t-brown">{{$t('bar.title')}}</h1>
      <div class="row fd-r fw-w jc-c mt-3">
        <!-- MENU -->
        <div
          v-for="(item, idx) in $t('bar.items')"
          :key="idx"
          @click="showModalHandler(item)"
          class="item m-2"
        >
          <img :src="require(`assets/menu/${item.img}.jpg`)" :alt="item.name" class="card shadow" />
          <span class="fs-6 t-white fw-b h2 t-white">{{ item.title }}</span>
        </div>
      </div>
      <h1 class="h1 t-brown mt-6">{{$t('bar.title2')}}</h1>
      <div class="row fd-r fw-w jc-c mt-5">
        <!-- BAR CARD -->
         <div
          v-for="(item, idx) in $t('bar.items2')"
          :key="idx"
          @click="showModalHandler(item)"
          class="item m-2"
        >
          <img :src="require(`assets/menu/${item.img}.jpg`)" :alt="item.name" class="card shadow" />
          <span class="fs-6 t-white fw-b h2 t-white">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//components
import MenuModal from "@/components/modals/MenuModal";

//menu items
import item1 from "@/assets/menu/salads.jpg";
import item2 from "@/assets/menu/hot.jpg";
import item3 from "@/assets/menu/soups.jpg";
import item4 from "@/assets/menu/pasta.jpg";
import item5 from "@/assets/menu/hot2.jpg";
import item6 from "@/assets/menu/pizza.jpg";

// bar-map items
import item7 from "@/assets/menu/hotDrinks.jpg";
import item8 from "@/assets/menu/iceDrinks.jpg";
import item9 from "@/assets/menu/alcoDrinks.jpg";
import item10 from "@/assets/menu/milkShakes.jpg";
export default {
  components: { MenuModal },
  methods: {
    showModalHandler(value) {
      this.modalData = value
      this.showModal = true
    },
  },
  data: () => ({
    modalData: null,
    showModal: false,
    images: [
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      item9,
      item10,
    ],
  }),
};
</script>

<style lang="scss" scoped>
.menu-content {
  .row {
    .item {
      max-width: 400px;
      width: 100%;
      height: auto;
      position: relative;
      cursor: pointer;
      border: 0;
      outline: 0;
      background: transparent;
      padding: 0;
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
}
</style>