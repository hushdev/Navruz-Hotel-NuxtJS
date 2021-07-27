<template>
  <div class="contacts-content b-white">
    <div class="container py-6">
      <div class="row fd-r ai-c">
        <form class="w-35 fd-c card shadow pt-3 pb-5 px-5">
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
      <search-form class="mt-6" />
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
.contacts-content {
  textarea {
    resize: none;
    height: 100px;
  }
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

@media (max-width: 930px) {
  .contacts-content {
    .row {
      flex-direction: column-reverse;
      padding-top: 50px;
      form {
        max-width: 526px;
        width: 100%;
        margin-top: 3rem;
      }
      .content {
        width: 100%;
        margin-left: 0;
      }
    }
  }
}
@media (max-width: 480px) {
  .contacts-content {
    .row {
      form {
        padding: 35px 20px 20px 20px;
      }
    }
  }
}
</style>