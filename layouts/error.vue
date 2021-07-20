<template>
  <div>404
    <nuxt-link to='/'>HOME</nuxt-link>
    <nuxt-link @click.native="goBack" to="">Back</nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>