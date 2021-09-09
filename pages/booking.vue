<template>
  <div>
    <div class="booking-offer">
      <div class="offer fd-r ai-c jc-c pt-6"></div>
    </div>
    <div class="content b-white">
      <div class="container py-6">
        <h1 class="h1 t-brown mb-6">{{$t('booking.title')}}</h1>
        <booking-form/>
      </div>
    </div>
  </div>
</template>

<script>
import BookingForm from '@/components/travelline/bookingForm.vue'

export default {
  layout: "defaultLayout",
  components: {BookingForm}
};
</script>

<style lang="scss" scoped>
.booking-offer {
  .offer {
    background: url("@/assets/rooms/bg.jpg") no-repeat center;
    background-size: cover;
    height: 400px;
    width: 100%;
  }
}
</style>