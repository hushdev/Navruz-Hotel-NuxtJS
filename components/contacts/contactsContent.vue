<template>
  <div class="contacts-content b-white">
    <transition name="page">
      <contact-modal v-if="showModal" @closeModal="showModal = false" />
    </transition>
    <div class="container py-6">
      <div class="row fd-r ai-c">
        <!-- <form @submit.prevent="submitHandler" class="w-35 fd-c card shadow pt-3 pb-5 px-5">
          <h2 class="h3 h3-decor t-gray">{{$t('contacts.form.title')}}</h2>
          <p class="t-gray text mt-3">{{$t('contacts.form.sub')}}</p>
          <input
            v-model="$v.form.name.$model"
            class="input px-2 py-1 mt-3 t-gray"
            type="text"
            :placeholder="$t('contacts.form.name')"
          />
          <span
            v-if="$v.form.name.$dirty && !$v.form.name.required"
            class="text-error t-error mt-1"
          >Заполните поле</span>
          <span
            v-if="$v.form.name.$dirty && !$v.form.name.minLength"
            class="text-error t-error mt-1"
          >Имя должно содержать хотя бы 2 символа</span>
          <span
            v-if="$v.form.name.$dirty && !$v.form.name.maxLength"
            class="text-error t-error mt-1"
          >Имя не может содержать более 50 символов</span>

          <input
            v-model="$v.form.email.$model"
            class="input px-2 py-1 mt-3 t-gray"
            type="email"
            autocomplete="email"
            :placeholder="$t('contacts.form.email')"
          />
          <span
            v-if="$v.form.email.$dirty && !$v.form.email.email"
            class="text-error t-error mt-1"
          >Проверьте правильность написания почты</span>

          <input
            v-model="$v.form.phone.$model"
            class="input px-2 py-1 mt-3 t-gray"
            type="phone"
            autocomplete="phone"
            :placeholder="$t('contacts.form.phone')"
          />
          <span
            v-if="$v.form.phone.$dirty && !$v.form.phone.required"
            class="text-error t-error mt-1"
          >Заполните поле</span>
          <span
            v-if="$v.form.phone.$dirty && !$v.form.phone.numeric"
            class="text-error t-error mt-1"
          >Поле может содержать только цифры</span>
          <span
            v-if="$v.form.phone.$dirty && !$v.form.phone.minLength"
            class="text-error t-error mt-1"
          >Телефон должен содержать хотя бы 5 символа</span>
          <span
            v-if="$v.form.phone.$dirty && !$v.form.phone.maxLength"
            class="text-error t-error mt-1"
          >Телефон не может содержать более 17 символов</span>

          <textarea
            v-model="$v.form.message.$model"
            class="input px-2 py-1 mt-3 t-gray"
            :placeholder="$t('contacts.form.message')"
          ></textarea>
          <span
            v-if="$v.form.message.$dirty && !$v.form.message.maxLength"
            class="text-error t-error mt-1"
          >Сообщение не может содержать более 500 символов</span>

          <app-btn
            type="submit"
            :text="$t('contacts.form.button')"
            class="b-brown mt-3"
            style="width: 100%"
          />
        </form>-->
        <div class="content w-50">
          <h2 class="h2 h2-decor-brown">{{$t('contacts.title')}}</h2>
          <p class="text t-black mb-3">{{$t('contacts.adress')}}</p>
          <p class="text t-black mb-3">
            {{$t('contacts.phone')}}
            <a href="tel:+998781501090" class="t-brown">(+998) 78 150 10 90</a>
          </p>
          <p class="text t-black">
            <a href="mailto:info@navruzhotel.uz" class="t-brown">info@navruzhotel.uz</a>
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
          <app-btn @click.native="showModal = true" :text="$t('contacts.contact')" class="b-brown mt-3" />
        </div>
      </div>
      <search-form :locale="$i18n.locale" class="mt-6" />
    </div>
  </div>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

import AppBtn from "@/components/app/AppBtn";
import SearchForm from "@/components/travelline/searchForm";
import ContactModal from '@/components/modals/ContactModal'

export default {
  components: { SearchForm, AppBtn, ContactModal },
  data: () => ({
    showModal: false,
    form: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  }),
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      email: {
        email,
      },
      phone: {
        required,
        numeric,
        minLength: minLength(5),
        maxLength: maxLength(17),
      },
      message: {
        maxLength: maxLength(500),
      },
    },
  },
  methods: {
    async submitHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        const formData = {
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          message: this.form.message,
        };

        await fetch("serverMiddleware/mailer.js", {
          method: "POST",
          body: JSON.stringify(formData),
        });
      }
    },
  },
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