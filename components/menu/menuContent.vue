<template>
  <div class="menu-content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown">Меню</h1>
      <div class="row fd-c ai-s mt-5 fw-w"></div>
      <h1 class="h1 t-brown">Барная карта</h1>
      <div class="row fd-c ai-s mt-5 fw-w"></div>
    </div>
  </div>
</template>

<script>
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
  data: () => ({
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