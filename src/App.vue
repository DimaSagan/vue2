<template>
  <div class="wrapper">
    <HeaderComponent></HeaderComponent>
    <main class="wrapper__page">
      <RouterView />
    </main>
    <FooterComponent></FooterComponent>
  </div>

</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  // .wrapper__page

  &__page {
    flex-grow: 1;
    padding-top: toRem(20);
  }
}
</style>
