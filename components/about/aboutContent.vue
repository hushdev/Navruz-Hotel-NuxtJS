<template>
  <div class="content b-white py-6">
    <div class="container">
      <h2 class="h1 t-brown mb-4">О нас</h2>
      <p class="text t-gray mb-3">
        <span class="fw-b">Трёхзвёздочная</span> гостиница Navruz Hotel Tashkent
        расположена в центре города и в шаговой доступности имеются все
        необходимые инфраструктуры (банки, кофейни, рестораны, продуктовые
        супермаркеты и магазины одежды).
      </p>
      <p class="text t-gray mb-3">
        <span class="fw-b">Отель</span> предлагает для удобного проживания 38
        номеров различной категории, оборудованных современной техникой. В
        каждой комнате установлен смарт ТВ, мини холодильник, кондиционер, Wi-Fi
        и надежный сейф.
      </p>
      <p class="text t-gray mb-3">
        <span class="fw-b">Для деловых встреч</span> в гостинице имеется удобный
        зал переговоров на 16 персон со всеми необходимыми составляющими. Наши
        гости могут отдохнуть в гостином уголке или патио, а благоустроенный сад
        и терраса позволят расслабиться после напряженного дня.
      </p>
      <p class="text t-gray">
        <span class="fw-b">Отель удобен</span> как для туристов, которые могут
        посетить значимые места пешей прогулкой, так и для деловых людей,
        благодаря хорошей транспортной развязке и близости основных
        бизнес-центров.
      </p>

      <h2 class="h1 t-brown mt-6 mb-4">Почему выбирают нас?</h2>
      <div class="fd-r jc-c fd-c-XS mb-6">
        <ul>
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Доступные цены</span>
          </li>
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Управление бронированиями онлайн </span>
          </li>
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Персонал говорит на русском языке </span>
          </li>
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Безопасность</span>
          </li>
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Номера для некурящих </span>
          </li>
        </ul>
        <ul class="ml-3 ml-0-XS">
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Бесплатный Wi-Fi </span>
          </li>
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Трансфер от/до аэропорта </span>
          </li>
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Семейные номера </span>
          </li>
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Бесплатная парковка </span>
          </li>
          <li class="text m-2 fw-b t-brown">
            <span class="t-black">Круглосуточная стойка регистрации </span>
          </li>
        </ul>
      </div>
      <search-form />
    </div>
  </div>
</template>

<script>
import SearchForm from '@/components/travelline/searchForm.vue'

export default {
  components: {SearchForm}
}
</script>

<style lang="scss" scoped>
.content {
  ul {
    list-style-type: disc;
  }
}
</style>