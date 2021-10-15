<template>
  <div class="modal">
    <div class="modal-wrap shadow">
      <button @click="$emit('closeModal')">
        <img src="@/assets/close.svg" alt="Закрыть" />
      </button>

      <!-- FORM -->
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSewhXl-_hlNtu15ATKj3IIqJQlRksXpbUsZUeV4Upvnj3QXPg/viewform?embedded=true"
        width="640"
        height="729"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Загрузка…</iframe>
    </div>
  </div>
</template>


<style lang="scss">
@keyframes fade {
  from {
    background: transparent;
  }
  to {
    background: rgba(0, 0, 0, 0.479);
  }
}

.modal {
  animation: fade 0.5s ease-in-out forwards;
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
    // max-width: 1200px;
    // width: 100%;
    background: #ffffff;
    border-radius: 15px;
    padding: 50px 0 30px 0;
    // height: calc(100vh - 80px);
    overflow-y: hidden;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    iframe {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    button {
      background: transparent;
      outline: 0;
      border: 0;
      position: absolute;
      top: 15px;
      right: 5px;
      z-index: 100000;
      transform: scale(0.6);

      &:hover {
        img {
          transform: scale(0.95);
          filter: brightness(50%);
        }
      }
      img {
        width: 25px;
        height: 25px;
        transition: 0.2s;
      }
    }
  }
}

@media (max-width: 1200px) {
  .modal {
    &-wrap {
      padding: 50px 0 30px 0;
      button {
        top: 10px;
        right: 5px;
        transform: scale(0.6);
      }
    }
  }
}

@media (max-width: 480px) {
  .modal {
    &-wrap {
      padding: 50px 0 30px 0;
    }
  }
}
</style>