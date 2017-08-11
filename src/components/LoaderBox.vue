<template>
  <div class="loader-box">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'loader-box'
}

</script>

<style lang="scss">
@import '../../node_modules/bulma/sass/utilities/variables.sass';
@import '../styles/variables.sass';

.loader-box {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.spinner {
  pointer-events: none;
  width: 3em;
  height: 3em;
  border: 0.4em solid transparent;
  border-color: transparent;
  border-top-color: $yellow;
  border-radius: 50%;
  animation: loadingspin 0.5s linear infinite;
}

@-webkit-keyframes loadingspin {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes loadingspin {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

</style>