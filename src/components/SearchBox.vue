<template>
  <section class="field search-box">
    <p class="control has-icons-left has-icons-right">
      <input 
        class="input is-medium is-primary" 
        type="text" 
        :placeholder="placeholder"
        v-model="search"
      >
      <span class="icon is-left">
        <i class="fa fa-search"></i>
      </span>
    </p>
  </section>
</template>

<script>
export default {
  name: 'search-box',
  data () {
    return {
      placeholder: 'Search APIs...',
      search: ''
    }
  },
  watch: {
    search (value) {
      this.$emit('onSearch', value)
    }
  }
}

</script>

<style lang="scss">
@import '../../node_modules/bulma/sass/utilities/variables.sass';
@import '../styles/variables.sass';

.search-box {
  margin: 2em;
  .input {
    transition: all 0.2s ease-out;
    &:focus {
          border: 1px solid $yellow; 
      box-shadow: $highlight-shadow;
    }
  }
}
</style>