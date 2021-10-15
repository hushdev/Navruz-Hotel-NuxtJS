<template>
  <div class="content b-white">
    <div class="container py-6">
      <div v-if="getArticle.date && getArticle.title && getArticle.content" class="row">
        <h1 class="h1 t-brown">{{getArticle.title.rendered}}</h1>
        <div class="t-gray text-S mt-2">{{ getArticle.date.slice(0, 10) }}</div>
        <div class="text t-black mt-6" v-html="getArticle.content.rendered"></div>
      </div>
      <div class="nav fd-r jc-b mt-6">
        <app-link :to="localePath('/news')" :text="$t('article.button')" reverse />
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  computed: { ...mapGetters(["getArticle"]) },
};
</script>