<template>
  <div class="mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Url addresses</h2>
    </div>
    <div class="mdl-card__supporting-text mdl-typography--text-left">
      <div v-mdl class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <textarea v-model="a" class="mdl-textfield__input" type="text" step="0.01" pattern="(\b(https?|ftp|file)://)?[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]"></textarea>
        <label class="mdl-textfield__label">Original [A]</label>
        <span class="mdl-textfield__error">Please enter a valid url</span>
      </div>
    </div>
    <div class="mdl-card__supporting-text mdl-typography--text-left">
      <div v-mdl class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <textarea v-model="b" class="mdl-textfield__input" type="text" step="0.01" pattern="(\b(https?|ftp|file)://)?[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]"></textarea>
        <label class="mdl-textfield__label">Modified [B]</label>
        <span class="mdl-textfield__error">Please enter a valid url</span>
      </div>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect" v-on:click="clear">
        Clear
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inputs',
  methods: {
    clear() {
      window.location.href = '/';
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('update');
    });
  },
  updated() {
    this.$nextTick(() => {
      this.$store.dispatch('update');
    });
  },
  computed: {
    a: {
      get() {
        return this.$store.state.route.query.a || '';
      },
      set(value) {
        const { $router, $store } = this;
        const { currentRoute = {} } = $router;
        const { query: currentQuery = {} } = currentRoute;
        const query = Object.assign({}, currentQuery, {
          a: value,
        });
        $router.push({ query });
        $store.dispatch('update');
      },
    },
    b: {
      get() {
        return this.$store.state.route.query.b || '';
      },
      set(value) {
        const { $router, $store } = this;
        const { currentRoute = {} } = $router;
        const { query: currentQuery = {} } = currentRoute;
        const query = Object.assign({}, currentQuery, {
          b: value,
        });
        $router.push({ query });
        $store.dispatch('update');
      },
    },
  },
  data: () => ({}),
};
</script>

<style scoped>
textarea {
  min-height: 200px;
  padding: 1rem 0;
}
</style>
