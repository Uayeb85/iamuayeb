<template>
  <div class="layout">
    <header>
      <nav>
        <NavBar />
      </nav>
    </header>
    <slot/>
    <Footer class="foot" />
  </div>
</template>



<script>
import NavBar from '~/components/NavBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components:{
    NavBar,
    Footer
  }
}
</script>

<style>
</style>
