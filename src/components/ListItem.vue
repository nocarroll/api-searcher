<template>
  <div class="list-item box">
    <h3 class="title is-marginless api-name">
      {{ item.API }}
      <span class="tag is-info">{{ item.Section }}</span>   
    </h3>
    <hr>
    <nav class="level">
      <section class="level-left">
        <span class="level-item">
        <div v-if="item.HTTPS" class="tags has-addons">          
        <span class="tag is-success">
          HTTPS
        </span>
        <span class="tag">
          <span class="icon is-small">
            <i class="fa fa-lock"></i>
          </span>
        </span>
      </div>
      </span>
      </section>
    </nav>
    <h5 class="title is-5 is-marginless has-text-danger">Info</h5>
    <p class="api-description">      
      {{ item.Description }}
    </p>
    <a class="button is-fullwidth is-warning api-link" :href="item.Link" target="_blank">
      <span class="icon has-text-dark">
        <i class="fa fa-book"></i>
      </span>
      <strong class="has-text-dark">Go to API Docs</strong>
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

.list-item {
  color: #FFF;
  margin: 1em;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: $drop-z2-shadow;
  transition: box-shadow 0.2s linear, border 0.2s linear;
  &:hover {
    box-shadow: $drop-z4-shadow;
    border: 1px solid $yellow;
  }
  .api-name {
    color: $white;
  }
  .api-link {
    align-self: flex-end;
  }
  .api-description {
    flex-grow: 1;
  }
}

</style>