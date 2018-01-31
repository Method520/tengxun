<template>
  <div class="app-wrapper">
    <article class="main-container">
      <Header :title="title"/>
      <MyTab/>
      <Footer/>
    </article>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import MyTab from '@/components/MyTab'
  import Footer from '@/components/Footer'

  export default {
    name: 'index',
    data() {
      return {
        title: '我的目标'
      }
    },
    created () {
    },
    methods: {
    },
    components: {
      Header,
      MyTab,
      Footer
    }
  }
</script>

<style lang="scss">
</style>
