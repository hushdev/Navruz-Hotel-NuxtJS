<template>
  <div>
    <article-offer />
    <article-content />
  </div>
</template>

<script>
import ArticleOffer from "@/components/article/articleOffer.vue";
import ArticleContent from "@/components/article/articleContent.vue";

export default {
  layout: "defaultLayout",
  components: { ArticleOffer, ArticleContent },
};
</script>