<template>
  <div>
    <SiteHeader />

    <main class="content">
      <div class="content__wrapper">
        <div id="top"/>
        <nuxt/>
      </div>
    </main>

    <SvgIcons />
  </div>
</template>

<script>
import SiteHeader from "~/components/SiteHeader.vue"
import SvgIcons from "~/components/SvgIcons.vue"

export default {
  components: {
    SiteHeader,
    SvgIcons
  }
}
</script>
