<template>
  <section class="field search-box">
    <div class="container">
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
    </div>
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
      let query = ''
      let keyword = value
      // split search into query if there is a colon in the string
      if (value.indexOf(':') > -1) {

      }
      this.$emit('onSearch', {
        query,
        keyword
      })
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