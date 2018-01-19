<template>
  <div class="mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Results</h2>
    </div>
    <div class="mdl-card__supporting-text mdl-typography--text-left">
      <p v-if="Object.keys(results).length === 0">Please enter two url addresses.</p>
      <table v-mdl class="mdl-data-table mdl-shadow--2dp" v-if="Object.keys(results).length > 0">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric" width="30px">Check</th>
            <th class="mdl-data-table__cell--non-numeric">Parameter name</th>
            <th class="mdl-data-table__cell--non-numeric">Original [A]</th>
            <th class="mdl-data-table__cell--non-numeric">Modified [B]</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="paramData,paramName in results">
            <td class="mdl-data-table__cell--non-numeric">
              <i v-if="paramData.a === paramData.b" class="material-icons material-icons--success" title="identical">check</i>
              <i v-if="paramData.a !== paramData.b && !!paramData.a && !!paramData.b" class="material-icons material-icons--warning" title="different">warning</i>
              <i v-if="!paramData.a || !paramData.b" class="material-icons material-icons--fail" title="missing">clear</i>
            </td>
            <td class="mdl-data-table__cell--non-numeric" v-bind:title="paramName">{{ paramName }}</td>
            <td class="mdl-data-table__cell--non-numeric" v-bind:title="paramData.a">{{ paramData.a }}</td>
            <td class="mdl-data-table__cell--non-numeric" v-bind:title="paramData.b">{{ paramData.b }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Results',
  computed: {
    ...mapState({
      results: state => state.results,
    }),
  },
};
</script>

<style scoped>
.mdl-data-table {
  max-width: 100%;
  width: 100%;
}
.mdl-data-table td {
  max-width: 3rem;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
.material-icons--success {
  color: green;
}
.material-icons--warning {
  color: orange;
}
.material-icons--fail {
  color: red;
}
</style>
