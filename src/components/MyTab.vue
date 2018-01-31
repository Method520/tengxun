<template>
  <div class="my-tab-wrap" id="myTab">
    <div class="mytab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="个人目标" name="first">
          <div class="personBg">
            <img src="../assets/img/home_img.png" class="homeImage"/>
          </div>
        </el-tab-pane>
        <el-tab-pane label="团队目标" name="second">12222222222222</el-tab-pane>
      </el-tabs>
    </div>
    <div class="setting">
      <img src="../assets/img/titlebar_set.png"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      num: 0
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss">
  #myTab{
    .el-tabs__nav-wrap{
      background-color:#fff;
    }
    .el-tabs__nav-wrap:after{
      background:#fff;
    }
    .el-tabs__header{
      margin-bottom:0;
    }
    .el-tabs__nav {
      width: 96%;
      height: 44px;
    }
    .el-tabs__item{
      width:42%;
      color:#ACACAC;
      font-size: 16px;
      text-align:center;
    }
    .el-tabs__item.is-active{
      color:#333;
    }
  }
</style>
<style lang="scss" scoped>
  .my-tab-wrap{
    position:relative;
  }
 .mytab{
   .personBg{
     img{
       width:100%;
     }
   }
 }
  .setting{
    position:absolute;
    right:2px;
    top:0px;
    img{
      width: 54px;
      height: 43px;
    }
  }
</style>
