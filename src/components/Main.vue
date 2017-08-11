<template>
  <main class="main">
    <search-box 
      @onSearch="handleSearch"
    ></search-box>
    <transition name="fade" mode="out-in">
      <results-box
        v-if="loaded" 
        key="results"   
        :items="apisFilteredBySearchTerm"
      ></results-box>      
      <loader-box
        v-else
      ></loader-box>
    </transition>

  </main>
</template>

<script>
import api from '@/api/api'
import SearchBox from './SearchBox'
import ResultsBox from './ResultsBox'
import LoaderBox from './LoaderBox'

export default {
  name: 'main',
  data () {
    return {
      loaded: false,
      count: 0,
      query: '',
      keyword: '',
      publicAPIs: []
    }
  },
  computed: {
    apisFilteredBySearchTerm () {
      const apis = this.publicAPIs
      const keyword = this.keyword
      if (keyword) {
        return apis.filter(item => {
          const contents = `${item.API} ${item.Description} ${item.Section}`
          return contents.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
      }
      return apis
    }
  },
  mounted () {
    api.getData()
      .then(data => {
        this.count = data.count
        this.publicAPIs = data.entries
        this.loaded = true
      })
  },
  methods: {
    handleSearch (payload) {
      this.query = payload.query
      this.keyword = payload.keyword
    }
  },
  components: {
    SearchBox,
    ResultsBox,
    LoaderBox
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