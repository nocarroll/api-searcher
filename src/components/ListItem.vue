<template>
  <div class="list-item box">
    <h3 class="title api-name">
      {{ item.API }} 
      <span class="tag is-info">{{ item.Section }}</span>
    </h3>
    <hr>
    <p class="api-description">
      <h5 class="title is-5 has-text-danger">Info</h5>
      {{ item.Description }}
    </p>
    <a class="button is-fullwidth is-warning" :href="item.Link" target="_blank">
      <i>See docs for {{ item.API.split(' ')[0] }}...</i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'list-item',
  props: {
    index: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../node_modules/bulma/sass/utilities/variables.sass';
@import '../styles/variables.sass';
@import '../styles/functions.scss';

.list-item {
  color: #FFF;
  margin: 1em;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  box-shadow: $drop-z1-shadow;
  transition: box-shadow 0.2s linear;
  &:hover {
    box-shadow: $drop-z3-shadow;
  }
  .api-name {
    color: $white;
  }
  .api-link {
    a {
      color: shade($yellow, 20%);
      &:hover {
        color: $yellow;
      }
    }
  }
  .api-description {
  }
}

</style>