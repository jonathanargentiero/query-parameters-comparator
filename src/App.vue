<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">{{ title }}</span>
      </div>
    </header>
    <main id="app" class="mdl-layout__content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Comparator from './components/Comparator';

export default {
  name: 'app',
  components: {
    Comparator,
  },
  data: () => ({
    title: 'Query Parameters Comparator',
  }),
};
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
