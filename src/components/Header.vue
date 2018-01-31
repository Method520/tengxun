<template>
  <div class="header">

    <div class="back_icon"><i class="el-icon-arrow-left"></i>返回</div>
    {{title}}
    <div class="more">
      <!--<img src="../assets/img/see_head_more.png"/>-->
    </div>
  </div>

</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header{
    font-size:18px;
    color:#fff;
    line-height:44px;
    font-weight:500;
    text-align:center;
    width:100%;
    position: relative;
    height:44px;
    background: #1C1C20;
    .el-icon-arrow-left{
      font-size:20px;
    }
    .back_icon{
      position:absolute;
      color:#fff;
      font-size:16px;
      left:10px;
      line-height:44px;
    }
    .more{
     img {
       position:absolute;
       width: 30px;
       height: 30px;
       right:10px;
     }
    }
  }
</style>
