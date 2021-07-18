<template>
  <div>
    <home-offer />
    <home-about />
    <home-rooms />
    <home-facilities />
    <home-reviews />
    <home-news />
  </div>
</template>

<script>
import HomeAbout from "@/components/index/homeAbout.vue";
import HomeOffer from "@/components/index/homeOffer.vue";
import HomeRooms from "@/components/index/homeRooms.vue";
import HomeFacilities from "@/components/index/homeFacilities.vue";
import HomeReviews from "@/components/index/homeReviews.vue";
import HomeNews from "@/components/index/homeNews.vue";

export default {
  components: {
    HomeOffer,
    HomeAbout,
    HomeRooms,
    HomeFacilities,
    HomeReviews,
    HomeNews,
  },
  layout: "defaultLayout",
};
</script>

