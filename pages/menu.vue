<template>
  <div>
    <menu-offer />
    <menu-content />
  </div>
</template>

<script>
import MenuOffer from "@/components/menu/menuOffer";
import MenuContent from "@/components/menu/menuContent";

export default {
  layout: "defaultLayout",
  components: {MenuOffer, MenuContent}
};
</script>