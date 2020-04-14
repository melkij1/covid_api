<template>
  <div id="app">
    <Header/>
    <div class="wrapper">
      <div class="container">
        <GlobalInfo/>
      </div>
      <Countries/>
    </div>
    


  </div>
</template>

<script>
import Header from './components/Header.vue';
import GlobalInfo from './components/GlobalInfo.vue';
import Countries from './components/Countries.vue';

export default {
  name: 'App',
  components: {
    Header,
    GlobalInfo,
    Countries
  }
}
</script>

<style lang="scss">
@import './assets/style/style.scss';
</style>
