<template>
  <header id="app-header" class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
      <a class="navbar-item" href="https://github.com/nocarroll/api-searcher">
        <span class="icon brand">
          <i class="fa fa-globe"></i>
        </span>
        &nbsp;
        <span>api-searcher</span>
      </a>

      <nav class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </nav>
    </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'app-header'
  }

</script>

<style lang="scss">
  @import '../../node_modules/bulma/sass/utilities/variables.sass';
  @import '../styles/variables.sass';
  #app-header {
    background: $primary;
    background: rgba(255, 255, 255, 0.05); 
    .navbar-item {
      color: #FFF;
    }
    .brand {
      color: $yellow;
    }
    box-shadow: $drop-z0-shadow;
  }
</style>