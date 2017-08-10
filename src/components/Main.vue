<template>
  <main class="main columns">
    <section class="column is-half is-offset-one-quarter">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input is-medium is-primary" type="text" placeholder="Search APIs...">
          <span class="icon is-left">
            <i class="fa fa-search"></i>
          </span>
        </p>
      </div>
      <!-- <div v-for="entry in publicAPIs" class="notification">
        {{ entry }}
      </div> -->
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
  flex-grow: 1;
  padding: 2em; 
  overflow-y: auto; 
}
</style>