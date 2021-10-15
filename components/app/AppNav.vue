<template>
  <div class="nav b-white">
    <div class="menu b-white">
      <!-- DESKTOP MENU -->
      <ul class="desktop-menu container fd-r jc-b">
        <li v-for="(item, idx) in menu" :key="idx">
          <nuxt-link
            :to="localePath(item.to)"
            active-class="fw-b t-brown"
            class="decor-n t-gray fd-r ai-c"
            :exact="item.exact"
          >{{ item.name }}</nuxt-link>
        </li>
        <li class="fw-b t-black lang">
          <span @click="showLangs = !showLangs" class="fd-r ai-c">
            {{ $i18n.locale }}
            <img src="@/assets/triangle.svg" class="ml-1" />
          </span>
          <transition name="menu">
            <div v-if="showLangs" class="langs fd-c shadow py-2 px-1">
              <nuxt-link
                @click.native="
                    showLangs = !showLangs;
                    fetchPosts();
                  "
                :to="switchLocalePath('ru')"
                class="fd-r ai-c"
              >
                <img src="@/assets/ru.svg" alt="RU" /> RU
              </nuxt-link>
              <nuxt-link
                @click.native="
                    showLangs = !showLangs;
                    fetchPosts();
                  "
                :to="switchLocalePath('uz')"
                class="mt-2 fd-r ai-c"
              >
                <img src="@/assets/uz.svg" alt="UZ" />UZ
              </nuxt-link>
              <nuxt-link
                @click.native="
                    showLangs = !showLangs;
                    fetchPosts();
                  "
                :to="switchLocalePath('en')"
                class="mt-2 fd-r ai-c"
              >
                <img src="@/assets/en.svg" alt="EN" />EN
              </nuxt-link>
            </div>
          </transition>
        </li>
      </ul>
      <!-- TABLET-MOBILE MENU -->
      <transition name="menu">
        <ul v-if="mobile" class="mobile-menu container fd-c jc-b">
          <li v-for="(item, idx) in menu" :key="idx">
            <nuxt-link
              :to="localePath(item.to)"
              @click.native="mobile = !mobile;fetchPosts();"
              active-class="fw-b t-brown"
              :exact="item.exact"
              class="decor-n t-gray fs-6-S"
            >{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </transition>
    </div>
    <div class="info">
      <div class="container fd-r jc-b ai-c">
        <nuxt-link @click.native="mobile = false" :to="localePath('/')">
          <img src="@/assets/logo.svg" alt="Navruz Hotel Tashkent" class="logo" />
        </nuxt-link>
        <a href="tel:+998781501090" class="decor-n t-brown h3 fw-b phone">+998 78 150-10-90</a>
        <div class="menu-func fd-r ai-c">
          <li class="fw-b t-black lang">
            <span @click="showLangs = !showLangs" class="fd-r ai-c">
              {{ $i18n.locale }}
              <img src="@/assets/triangle.svg" class="ml-1" />
            </span>
            <transition name="menu">
              <div v-if="showLangs" class="langs fd-c shadow py-2 px-1">
                <nuxt-link
                  @click.native="
                    showLangs = !showLangs;
                    fetchPosts();
                  "
                  :to="switchLocalePath('ru')"
                  class="fd-r ai-c"
                >
                  <img src="@/assets/ru.svg" alt="RU" /> RU
                </nuxt-link>
                <nuxt-link
                  @click.native="
                    showLangs = !showLangs;
                    fetchPosts();
                  "
                  :to="switchLocalePath('uz')"
                  class="mt-2 fd-r ai-c"
                >
                  <img src="@/assets/uz.svg" alt="UZ" />UZ
                </nuxt-link>
                <nuxt-link
                  @click.native="
                    showLangs = !showLangs;
                    fetchPosts();
                  "
                  :to="switchLocalePath('en')"
                  class="mt-2 fd-r ai-c"
                >
                  <img src="@/assets/en.svg" alt="EN" />EN
                </nuxt-link>
              </div>
            </transition>
          </li>
          <div @click="mobile = !mobile" class="burger fd-c z-20 ml-2">
            <span class="b-brown"></span>
            <span class="b-brown"></span>
            <span class="b-brown"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menu() {
      return this.$t("menu");
    },
  },
  methods: {
    fetchPosts() {
      setTimeout(() => {
        this.$store.dispatch("fetchPosts", this.$i18n.locale);
      }, 100);
    },
  },
  data() {
    return {
      shouldMenuShow: true,
      mobile: false,
      showLangs: false,
      menu1: [
        { name: "Главная", to: "/", exact: true },
        { name: "Бронирование", to: "/booking", exact: false },
        { name: "О нас", to: "/about", exact: false },
        { name: "Комнаты", to: "/rooms", exact: false },
        { name: "Удобства", to: "/facilities", exact: false },
        { name: "Новости", to: "/news", exact: false },
        { name: "Контакты", to: "/contacts", exact: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.lang {
  position: relative;
  cursor: pointer;
  text-transform: uppercase;

  .langs {
    position: absolute;
    background: #fff;
    z-index: 50;
    right: 0;
    bottom: -140px;
    display: flex;
    width: 67px;
    a {
      cursor: pointer;
      color: #000000;
      img {
        max-width: 20px;
        height: auto;
        margin-right: 5px;
      }
    }
  }
}
.nav {
  .menu {
    border-bottom: 2px solid #d9d9d9;
    .mobile-menu {
      display: none;
    }
  }
  .info {
    .logo {
      max-width: 159px;
      width: 100%;
      height: auto;
    }
    .menu-func {
      display: none;
    }
  }
}
@media screen and (max-width: 834px) {
  .nav {
    position: relative;
    .info {
      .menu-func {
        display: flex;
        li {
          list-style-type: none;
        }
      }
    }
    .menu {
      z-index: 20;
      padding: 0;
      display: flex;
      align-items: center;
      border-bottom: 0;
      position: relative;
      .desktop-menu {
        display: none;
      }
      .mobile-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 73px;
        left: 0;
        height: calc(100vh - 73px);
        width: 100vw;
        background: #ffffff;
        li {
          padding: 20px 0;
          width: 100%;
          text-align: center;
          border-bottom: 1px solid #dedede;
          &:last-child {
            border-bottom: 0;
          }
        }
      }
    }
    .info {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      background: #ffffff;
      z-index: 20;
      .logo {
        max-width: 120px;
      }
      .phone {
        display: none;
      }
      .burger {
        display: flex;
        width: 42px;
        height: 29px;
        justify-content: space-between;
        span {
          width: 100%;
          height: 4.2px;
          border-radius: 7px;
        }
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .nav {
    .menu {
      .mobile-menu {
        height: 100vh;
        top: 0;
        padding-top: 73px;
        li {
          padding: 20px 0;
        }
      }
    }
    .info {
      border-radius: 10px;
      margin: 5px;
      width: calc(100% - 10px);
      box-shadow: 0px 5px 29px rgba(97, 97, 97, 0.25);
    }
  }
}
</style>