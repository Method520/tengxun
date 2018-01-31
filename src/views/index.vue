<template>
  <div class="app-wrapper">
    <article class="main-container">
      <Header :title="title"/>
      <MyTab  :isShowIndexImage="isShowIndexImage"/>
      <Footer @getPersoninfo="getPersonInfo"/>
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
        title: '我的目标',
        isShowIndexImage: true
      }
    },
    created () {
    },
    methods: {
      getPersonInfo () {
        if (this.title === '我的目标') {
          this.$router.push('/addPersonTarget')
        }
      }
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
