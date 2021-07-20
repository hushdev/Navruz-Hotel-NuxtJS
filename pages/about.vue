<template>
  <div>
    <about-offer />
    <about-content />
  </div>
</template>

<script>
import AboutOffer from "@/components/about/aboutOffer.vue";
import AboutContent from "@/components/about/aboutContent.vue";

export default {
  layout: "defaultLayout",
  components: { AboutOffer, AboutContent },
};
</script>