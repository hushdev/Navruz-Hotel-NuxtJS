<template>
  <div class="content b-white py-6">
    <div class="container">
      <h2 class="h1 t-brown mb-4">{{$t('about.title')}}</h2>
      <p v-for="(item, idx) in $t('about.items')" :key="idx" v-html="item" class="text t-gray mb-3"></p>

      <h2 v-if="$i18n.locale === 'ru' || $i18n.locale === 'en'" class="h1 t-brown mt-6 mb-4">{{$t('about.title2')}}</h2>
      <div class="fd-r jc-c fd-c-XS mb-6">
        <ul v-if="$i18n.locale === 'ru' || $i18n.locale === 'en'">
          <li v-for="item in $t('about.ul')" :key="item" class="text m-2 fw-b t-brown">
            <span class="t-black">{{item}}</span>
          </li>
        </ul>
        <ul v-if="$i18n.locale === 'ru' || $i18n.locale === 'en'" class="ml-3 ml-0-XS">
          <li v-for="item in $t('about.ul2')" :key="item" class="text m-2 fw-b t-brown">
            <span class="t-black">{{item}}</span>
          </li>
        </ul>
      </div>
      <search-form />
    </div>
  </div>
</template>

<script>
import SearchForm from "@/components/travelline/searchForm.vue";

export default {
  components: { SearchForm },
};
</script>

<style lang="scss" scoped>
.content {
  ul {
    list-style-type: disc;
  }
}
</style>