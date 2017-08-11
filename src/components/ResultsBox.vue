<template>
  <section class="results-box">
     <div v-for="entry in items" class="notification is-dark">
      {{ entry }}
    </div> 
  </section>
</template>

<script>
export default {
  name: 'results-box',
  props: {
    items: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss">
.results-box {
  background: rgba(255, 255, 255, 0.2);
  margin: 2em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
}

</style>