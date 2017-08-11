<template>
  <transition-group name="flip-list" tag="section" class="results-box">
    <list-item
      v-for="item, index in items"
      :key="item.Link"
      :index="index"
      :item="item"
      ></list-item>
  </transition-group>
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
@import '../styles/variables.sass';
.results-box {
  max-width: 100%;
  margin: 2em;
  margin-top: 0;
  padding: 2em;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: none;
  box-shadow: $inset-z2-shadow;
  .flip-list-enter-active, .flip-list-leave-active {
    transition: all 1s;
  }
  .flip-list-enter, .flip-list-leave-to {
    transition: all 1s;
    opacity: 0;
  }

  .flip-list-move {
    transition: transform 1s;
  }
}



</style>