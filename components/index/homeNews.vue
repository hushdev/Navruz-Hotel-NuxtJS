<template>
  <div class="news b-white pb-3">
    <div v-if="getPosts.length" class="container">
      <h2 class="h2 h2-decor t-gray">{{$t('home.news.title')}}</h2>
      <div class="row fd-r ai-s jc-c mt-3 fw-w">
        <div
          v-for="(item, idx) in getPosts.slice(0, 3)"
          :key="idx"
          class="card shadow fd-c ai-t jc-b w-40 w-100-XS mt-2 mr-1 ml-1 px-4 py-4"
        >
          <div>
            <h3 class="h3 t-gray">{{ item.title.rendered }}</h3>
            <div class="t-gray text-S my-1">{{ item.date.slice(0, 10) }}</div>
            <p v-html="item.content.rendered.substr(0, 50)" class="t-gray text mb-4"></p>
          </div>
          <app-link :to="`news/article`" @click.native="setArticle(item)" :text="$t('news.button')" class="text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: { ...mapGetters(["getPosts"]) },
  methods: {...mapMutations(['setArticle'])}
};
</script>

<style lang="scss" scoped>
.news {
  .row {
    .card {
      overflow: hidden;
      max-width: 350px;
      width: 100%;
      img {
        transition: 0.2s;
        width: 100%;
        height: auto;
      }
      &:hover {
        img {
          transform: scale(1.1);
          filter: brightness(70%);
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .news {
    .row {
      .card {
        width: 47%;
      }
    }
  }
}
@media (max-width: 610px) {
  .news {
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