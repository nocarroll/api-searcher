<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
/* Import Initial Bulma Theme Variables  */
@import '../node_modules/bulma/sass/utilities/initial-variables';
/* Overwrite with Custom Variables */
@import './styles/variables.sass';
/* Import Bulma CSS */
@import '../node_modules/bulma/bulma.sass';
/* Import Font Awesome  */
@import '../node_modules/font-awesome/css/font-awesome.css';

html {
  overflow-y: auto;
}

#app {
  background: #333;
  background: linear-gradient(to bottom right, $primary,  $primary-alt);
  min-height: 100%;
  min-height: 100vh;
  max-height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
