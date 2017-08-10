<template>
  <main class="main columns">
    <section class="column is-half is-offset-one-quarter">
      <div v-for="entry in publicAPIs" class="notification">
        {{ entry }}
      </div>
    </section>
  </main>
</template>

<script>
import api from '@/api/api'

export default {
  name: 'main',
  data () {
    return {
      count: 0,
      publicAPIs: []
    }
  },
  mounted () {
    api.getData()
      .then(data => {
        this.count = data.count
        this.publicAPIs = data.entries
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.main {
  padding: 2em;
  overflow-y: auto;
}
</style>