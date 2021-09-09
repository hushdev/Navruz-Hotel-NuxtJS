<template>
  <div class="modal">
    <div class="modal-wrap shadow">
      <button @click="$emit('closeModal')">
        <img src="@/assets/close.svg" alt="Закрыть" />
      </button>
      <ul v-if="data.list">
        <li v-for="(item,idx) in data.list" :key="idx">
          <div class="fd-r jc-b ai-c">
            <span class="h2 t-brown">{{item.name}}</span>
            <span class="h2 t-gray">{{item.price}} {{$t('bar.currency')}}</span>
          </div>
          <p v-if="item.desc" class="text-s t-gray">{{item.desc}}</p>
        </li>
      </ul>
      <template v-if="data.multiList">
        <ul v-for="(item, idx) in data.multiList" :key="idx" class="multilist">
          <h2 class="h2-decor">{{item.category}}</h2>
          <li v-for="(li,idx) in item.list" :key="idx">
            <div class="fd-r jc-b ai-c">
              <span class="h2 t-brown">{{li.name}}</span>
              <span class="h2 t-gray">{{li.price}} {{$t('bar.currency')}}</span>
            </div>
            <p v-if="li.desc" class="text-s t-gray">{{li.desc}}</p>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes fade {
  from {
    background: transparent;
  }
  to {
    background: rgba(0, 0, 0, 0.479);
  }
}

.modal {
  animation: fade .5s ease-in-out forwards;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 40px 10px;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.479);
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  &-wrap {
    max-width: 1200px;
    width: 100%;
    background: #ffffff;
    border-radius: 15px;
    padding: 70px 90px;
    position: relative;
    button {
      background: transparent;
      outline: 0;
      border: 0;
      position: absolute;
      top: 30px;
      right: 30px;
      &:hover {
        img {
          transform: scale(0.95);
          filter: brightness(50%);
        }
      }
      img {
        width: 35px;
        height: 35px;
        transition: 0.2s;
      }
    }
    ul {
      li {
        margin-top: 50px;
        &:first-child {
          margin-top: 0;
        }
        div {
          span:nth-child(1) {
            margin-right: 20px;
            font-size: 30px;
          }
          span:nth-child(2) {
            font-size: 25px;
          }
        }
      }
    }
    .multilist {
      margin-bottom: 50px;
    }
  }
}

@media (max-width: 1200px) {
  .modal {
    &-wrap {
      padding: 60px 20px 30px 20px;
      button {
        top: 10px;
        right: 5px;
        transform: scale(0.6);
      }
      ul li {
        margin-top: 20px;
        span {
          &:nth-child(1) {
            font-size: 25px !important;
          }
          &:nth-child(2) {
            font-size: 20px !important;
            min-width: 117px;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .modal {
    &-wrap {
      padding: 60px 15px 30px 15px;

      ul li {
        margin-top: 20px;
        span {
          &:nth-child(1) {
            font-size: 18px !important;
          }
          &:nth-child(2) {
            font-size: 16px !important;
            min-width: 100px;
          }
        }
      }
    }
  }
}
</style>