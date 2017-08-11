<template>
  <section class="results-box">
     <template v-for="item, index in items">
       <list-item
        :index="index"
        :item="item"
       ></list-item>
     </template>
  </section>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'results-box',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    ListItem
  }
}
</script>

<style lang="scss">
.results-box {
  max-width: 100%;
  margin: 2em;
  padding: 2em;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: none;
}

</style>