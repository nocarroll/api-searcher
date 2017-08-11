<template>
  <main class="main">
    <search-box 
      @onSearch="handleSearch"
    ></search-box>
    <results-box
      :items="apisFilteredBySearchTerm"
    ></results-box>
  </main>
</template>

<script>
import api from '@/api/api'
import SearchBox from './SearchBox'
import ResultsBox from './ResultsBox'

export default {
  name: 'main',
  data () {
    return {
      count: 0,
      search: '',
      publicAPIs: []
    }
  },
  computed: {
    apisFilteredBySearchTerm () {
      const apis = this.publicAPIs
      if (this.search) {
        return apis.filter(item => item.API.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
      }
      return apis
    }
  },
  mounted () {
    api.getData()
      .then(data => {
        this.count = data.count
        this.publicAPIs = data.entries
      })
  },
  methods: {
    handleSearch (value) {
      this.search = value
    }
  },
  components: {
    SearchBox,
    ResultsBox
  }
}

</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>