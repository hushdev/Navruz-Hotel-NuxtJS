<template>
  <div>
    <facilities-offer />
    <facilities-content />
  </div>
</template>

<script>
import FacilitiesOffer from "@/components/facilities/facilitiesOffer.vue";
import FacilitiesContent from "@/components/facilities/facilitiesContent.vue";

export default {
  layout: "defaultLayout",
  components: { FacilitiesOffer, FacilitiesContent },
};
</script>
    FacilitiesContent