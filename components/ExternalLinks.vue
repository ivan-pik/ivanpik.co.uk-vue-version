<template>
  <div class="external-links">
    <ul class="external-links__list">
      <li class="external-links__item">
        <a href="//codepen.io/ivan_pik/" class="external-links__link external-links__link--codepen">
          <svg class="icon icon--codepen"><use xlink:href="#icon-codepen"/></svg>
          CodePen
        </a>
      </li>
      <li class="external-links__item">
        <a href="//dribbble.com/ivan-pik" class="external-links__link external-links__link--dribbble">
          <svg class="icon icon--dribbble"><use xlink:href="#icon-dribbble"/></svg>
          Dribbble
        </a>
      </li>
      <li class="external-links__item">
        <a href="//github.com/ivan-pik" class="external-links__link external-links__link--github">
          <svg class="icon icon--github"><use xlink:href="#icon-github"/></svg>
          GitHub
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.external-links {
  @extend %font-size--small;
  margin: 1rem 0 0 0;
  @include media-query(min, $bp-full-width) {
    margin: 3.5rem 0 0 0;
  }
  @include media-query(max, $bp-full-width) {
    padding: 1rem 0 0 0;
  }

  .icon {
    @extend %icon;
    fill: $color-font--body;
  }
}

.external-links__item {
  display: inline-block;
  margin-right: 0.7rem;

  @include media-query(min, $bp-small) {
    margin-right: 2rem;
  }
}

.external-links__link {
  padding-bottom: 1.2em;
  &:hover .icon {
    fill: $color-font--link-hover;
  }
}
</style>
