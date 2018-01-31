<template>
  <div class="header">
    <div class="back_icon"><i class="el-icon-arrow-left"></i>返回</div>
    <h1>{{title}}</h1>
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
    width:100%;
    background: #1C1C20;
    .el-icon-arrow-left{
      font-size:20px;
    }
    .back_icon{
      color:#fff;
      font-size:16px;
      float:left;
      line-height:44px;
      padding-left:10px;
    }
    h1{
      font-size:18px;
      color:#fff;
      margin-left:40%;
      line-height:44px;
      font-weight:500;
    }
    .more{
     img {
       width: 30px;
       height: 30px;
       float: right;
       margin-top:-35px;
       padding-right:10px;
     }
    }
  }
</style>
