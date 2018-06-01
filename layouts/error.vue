<template>
  <div class="error">
    <h3>Error 404: Page Not Found</h3>
    <h2>Sorry, the page was not found</h2>
    <p>This is a portfolio site of Ivan Pik - Front-End Developer 
      <br>
      <a href="/">Go to the home page</a>
    </p>
  </div>
</template>

<script>
export default {
  layout: "error-layout" // you can set a custom layout for the error page
}
</script>

<style lang="scss">
.error {
  @extend %main-wrapper;

  padding-top: 2rem;

  h3 {
    @extend %font-size--x-small;
    @extend %highlight;
  }

  h2 {
    @extend %font-size--h2;
    @extend %separate;
    margin: 0.2em 0;
  }
}
</style>
