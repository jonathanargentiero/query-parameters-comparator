<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-phone">
      <inputs />
    </div>
    <div class="mdl-cell mdl-cell--8-col mdl-cell--8-col-tablet mdl-cell--12-col-phone">
      <results />
    </div>
  </div>
</template>

<script>
import Inputs from './Inputs';
import Results from './Results';

export default {
  name: 'Comparator',
  components: {
    Inputs,
    Results,
  },
};
</script>

<style scoped>
.mdl-card {
  max-width: 100%;
  width: 100%;
}
</style>
