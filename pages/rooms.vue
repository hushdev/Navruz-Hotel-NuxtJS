<template>
  <div>
    <rooms-offer />
    <rooms-content />
  </div>
</template>

<script>
import RoomOffer from "@/components/rooms/roomsOffer.vue";
import RoomsContent from "@/components/rooms/roomsContent.vue";

export default {
  layout: "defaultLayout",
  components: { RoomOffer, RoomsContent },
};
</script>