<template>
  <div class="contacts-content b-white">
    <div class="container py-6">
      <h1 class="h1 t-brown">Контакты</h1>
      <div class="row fd-r ai-c">
        <form class="w-35 fd-c mt-5 card shadow pt-3 pb-5 px-5">
          <h2 class="h3 h3-decor t-gray">Отправить сообщение</h2>
          <p class="t-gray text mt-3 mb-3">
            У вас есть что-нибудь в уме, чтобы рассказать нам? Пожалуйста, не
            стесняйтесь обращаться к нам через нашу контактную форму.
          </p>
          <input
            class="input px-2 py-1 mb-3 t-gray"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            class="input px-2 py-1 mb-3 t-gray"
            type="email"
            autocomplete="email"
            placeholder="Ваше E-Mail"
          />
          <input
            class="input px-2 py-1 mb-3 t-gray"
            type="phone"
            autocomplete="phone"
            placeholder="Номер телефона"
          />
          <textarea
            class="input px-2 py-1 mb-3 t-gray"
            placeholder="Сообщение"
          ></textarea>
          <app-btn
            type="submit"
            text="Отправить"
            class="b-brown"
            style="width: 100%"
          />
        </form>
        <div class="content w-50 ml-6">
          <h2 class="h2 h2-decor-brown">Контактные данные</h2>
          <p class="text t-black mb-3">
            100000, 1-1А, 2й тупик, улица Шивли, Юнусабадский район, Ташкент,
            Узбекистан.
          </p>
          <p class="text t-black mb-3">
            Тел.:
            <a href="tel:+998781501090" class="t-brown">(+998) 78 150 10 90</a>
          </p>
          <p class="text t-black">
            <a href="mailto:info@navruzhotel.uz" class="t-brown"
              >info@navruzhotel.uz</a
            >
          </p>
          <ul class="socials fd-r ai-c mt-3">
            <li>
              <a href="https://www.instagram.com/navruzhotel/">
                <img src="@/assets/index/instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li class="mx-2">
              <a href="https://www.facebook.com/hotelnavruz/" class="mx-1">
                <img src="@/assets/index/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/index/telegram.svg" alt="Telegram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.contacts-content {
  .content {
    .socials {
      li {
        &:hover {
          img {
            filter: brightness(60%);
          }
        }
        img {
          transition: 0.2s;
          filter: brightness(40%);
        }
      }
    }
  }
}
</style>