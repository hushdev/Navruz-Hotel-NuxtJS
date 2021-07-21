<template>
  <div>
    <news-single-offer />
    <news-single-content />
  </div>
</template>

<script>
import NewsSingleOffer from "@/components/news-single/newsSingleOffer.vue";
import NewsSingleContent from "@/components/news-single/newsSingleContent.vue";

export default {
  layout: "defaultLayout",
  components: { NewsSingleOffer, NewsSingleContent },
};
</script>