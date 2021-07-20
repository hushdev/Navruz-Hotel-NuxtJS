<template>
  <div>
    <news-offer />
    <news-content />
  </div>
</template>

<script>
import NewsOffer from "@/components/news/newsOffer.vue";
import NewsContent from "@/components/news/newsContent.vue";
export default {
  layout: "defaultLayout",
  components: { NewsOffer, NewsContent },
};
</script>
