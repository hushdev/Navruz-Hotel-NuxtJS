<template>
  <div class="content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown mb-4">{{$t('facilities.title')}}</h1>
      <div
        v-for="(item, idx) in $t('facilities.items')"
        :key="idx"
        class="row pt-6"
        :id="item.id"
      >
        <h2 class="h2">{{ item.name }}</h2>
        <p v-html="item.text" class="text t-gray"></p>
        <p v-if="item.text2" v-html="item.text2" class="text t-gray mt-1"></p>
        <div class="carousel fd-r mt-5">
          <img
            v-for="(image, idx) in item.img"
            :key="idx"
            :alt="item.name"
            :src="require(`assets/facilities/${image}.jpg`)"
            class="pb-1"
          />
        </div>
      </div>
      <search-form :locale="$i18n.locale" class="mt-6" />
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/travelline/searchForm";

export default {
  components: { SearchForm },
};
</script>

<style lang="scss" scoped>
.carousel {
  overflow-x: scroll;
  img {
    width: auto;
    max-height: 350px;
    margin-right: 30px;
  }
}

@media (max-width: 834px) {
  .carousel img {
    margin-right: 10px;
    max-height: 250px;
  }
}
@media (max-width: 480px) {
  .carousel img {
    margin-right: 10px;
    max-height: 200px;
  }
}
</style>