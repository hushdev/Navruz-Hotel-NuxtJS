<template>
  <div class="nav b-white">
    <div class="menu b-white">
      <!-- DESKTOP MENU -->
      <ul class="desktop-menu container fd-r jc-b">
        <li v-for="(item, idx) in menu" :key="idx">
          <nuxt-link
            :to="item.to"
            exact-active-class="fw-b t-brown"
            class="decor-n t-gray fd-r ai-c"
            >{{ item.name }}
            <img v-if="item.sub" class="ml-1" src="@/assets/triangle.svg" />
          </nuxt-link>
        </li>
        <li class="fw-b t-black lang">RU</li>
      </ul>
      <!-- TABLET-MOBILE MENU -->
      <ul v-if="mobile" class="mobile-menu container fd-c jc-b">
        <li v-for="(item, idx) in menu" :key="idx">
          <nuxt-link
            :to="item.to"
            @click="mobile = !mobile"
            exact-active-class="fw-b t-brown"
            class="decor-n t-gray fs-6-S"
            >{{ item.name }}</nuxt-link
          >
        </li>
        <li class="fw-b t-black lang">RU</li>
      </ul>
    </div>
    <div class="info">
      <div class="container fd-r jc-b ai-c">
        <nuxt-link to="/"
          ><img
            src="@/assets/logo.svg"
            alt="Navruz Hotel Tashkent"
            class="logo"
        /></nuxt-link>
        <a href="tel:+998781501090" class="decor-n t-brown h3 fw-b phone"
          >+998 78 150-10-90</a
        >
        <div @click="mobile = !mobile" class="burger fd-c z-20">
          <span class="b-brown"></span>
          <span class="b-brown"></span>
          <span class="b-brown"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shouldMenuShow: true,
      mobile: false,
      menu: [
        { name: "Главная", to: "/" },
        { name: "О нас", to: "/about" },
        { name: "Комнаты", to: "/rooms", sub: {} },
        { name: "Удобства", to: "/facilities", sub: {} },
        { name: "Новости", to: "/news" },
        { name: "Контакты", to: "/contacts" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  .menu {
    border-bottom: 2px solid #d9d9d9;
    .mobile-menu {
      display: none;
    }
  }
  .info {
    .burger {
      display: none;
    }
    .logo {
      max-width: 159px;
      width: 100%;
      height: auto;
    }
  }
}

@media screen and (max-width: 834px) {
  .nav {
    position: relative;

    .menu {
      z-index: 20;
      padding: 0;
      display: flex;
      align-items: center;
      border-bottom: 0;
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
          padding: 30px 0;
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
        li {
          padding: 20px 0;
        }
      }
    }
    .info {
      border-radius: 10px;
      box-shadow: 0px 5px 29px rgba(97, 97, 97, 0.25);
      overflow: hidden;
    }
  }
}
</style>