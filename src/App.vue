<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">
          <a title="Query Parameters Comparator Github repository" href="https://github.com/jonathanargentiero/query-parameters-comparator">
            <img alt="github logo" src="static/GitHub-Mark-Light-64px.png" width="32" height="32">
            <i>{{ title }}</i>
          </a>
        </span>
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
  a {
    display: block;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    text-decoration: none;
    color: white;
    font-weight: 400;
  }
  img {
    display: inline-block;
    margin-right: 7px;
    margin-left: 2px;
    margin-top: -2px;
  }
  img + i {
    display: inline-block;
    font-style: normal;
  }
  @media screen and (max-width: 1024px) {
    .mdl-layout__header-row {
      padding: 0 16px;
    }
  }
</style>
