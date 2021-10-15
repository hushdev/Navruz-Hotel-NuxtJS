<template>
  <div class="news-content b-white">
    <div v-if="getPosts.length" class="container py-6">
      <h1 class="h1 t-brown">{{$t('news.title')}}</h1>
      <div class="row fd-r ai-s jc-c mt-3 fw-w">
        <div
          v-for="(item, idx) in getPosts"
          :key="idx"
          class="card shadow fd-c ai-t jc-b w-40 w-100-XS mt-2 mr-1 ml-1 px-4 py-4"
        >
          <div>
            <h3 class="h3 t-gray">{{ item.title.rendered }}</h3>
            <div class="t-gray text-S my-1">{{ item.date.slice(0, 10) }}</div>
            <p v-html="item.content.rendered.substr(0, 50)" class="t-gray text mb-4"></p>
          </div>
          <app-link
            :to="`news/article`"
            @click.native="setArticle(item)"
            :text="$t('news.button')"
            class="text"
          />
        </div>
      </div>
      <search-form :locale="$i18n.locale" class="travel-search mt-6" />
    </div>
    <div v-else class="container py-6">
      <h1 class="h1 t-brown">{{$t('news.title')}}</h1>

      <p class="h3 t-gray mt-3">{{$t('article.error')}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import SearchForm from "@/components/travelline/searchForm";

export default {
  components: { SearchForm },
  methods: { ...mapMutations(["setArticle"]) },
  computed: { ...mapGetters(["getPosts"]) },
};
</script>

<style lang="scss" scoped>
.news-content {
  .row {
    .card {
      border-radius: 10px;
      overflow: hidden;
      transition: 0.2s;
      &:hover {
        transform: scale(0.99);
        box-shadow: 0px 5px 10px rgba(97, 97, 97, 0.25);
        img {
          filter: brightness(90%);
        }
      }
      &:first-child {
        margin-top: 0;
      }
      img {
        transition: 0.2s;
        max-width: 457px;
        max-height: 300px;
        width: 100%;
        height: auto;
      }
    }
  }
}

@media (max-width: 834px) {
  .news-content {
    .row {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: stretch;
      .card {
        flex-direction: column;
        width: 47%;
      }
    }
  }
}
@media (max-width: 610px) {
  .news-content {
    .row {
      .card {
        width: 100%;
        margin-right: 0;
        margin-left: 0;
      }
    }
  }
}
</style>