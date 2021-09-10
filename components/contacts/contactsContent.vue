<template>
  <div class="contacts-content b-white">
    <div class="container py-6">
      <div class="row fd-r ai-c">
        <form class="w-35 fd-c card shadow pt-3 pb-5 px-5">
          <h2 class="h3 h3-decor t-gray">{{$t('contacts.form.title')}}</h2>
          <p class="t-gray text mt-3 mb-3">
            {{$t('contacts.form.sub')}}
          </p>
          <input
            class="input px-2 py-1 mb-3 t-gray"
            type="text"
            :placeholder="$t('contacts.form.name')"
          />
          <input
            class="input px-2 py-1 mb-3 t-gray"
            type="email"
            autocomplete="email"
            :placeholder="$t('contacts.form.email')"
          />
          <input
            class="input px-2 py-1 mb-3 t-gray"
            type="phone"
            autocomplete="phone"
            :placeholder="$t('contacts.form.phone')"
          />
          <textarea
            class="input px-2 py-1 mb-3 t-gray"
            :placeholder="$t('contacts.form.message')"
          ></textarea>
          <app-btn
            type="submit"
            :text="$t('contacts.form.button')"
            class="b-brown"
            style="width: 100%"
          />
        </form>
        <div class="content w-50 ml-6">
          <h2 class="h2 h2-decor-brown">{{$t('contacts.title')}}</h2>
          <p class="text t-black mb-3">
            {{$t('contacts.adress')}}
          </p>
          <p class="text t-black mb-3">
            {{$t('contacts.phone')}}
            <a href="tel:+998781501090" class="t-brown">(+998) 78 150 10 90</a>
          </p>
          <p class="text t-black">
            <a href="mailto:info@navruzhotel.uz" class="t-brown"
              >info@navruzhotel.uz</a
            >
          </p>
          <ul class="socials fd-r ai-c mt-3">
            <li>
              <a href="https://www.instagram.com/navruzhotel/" target="_blank">
                <img src="@/assets/index/instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li class="mx-2">
              <a href="https://www.facebook.com/hotelnavruz/" class="mx-1" target="_blank">
                <img src="@/assets/index/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://t.me/navruzhotel" target="_blank">
                <img src="@/assets/index/telegram.svg" alt="Telegram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <search-form :locale="$i18n.locale" class="mt-6" />
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
  .container {
    .form {
      .row {
        
      }
    }
  }
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