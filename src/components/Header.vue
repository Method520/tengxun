<template>
  <div class="header">
    <div class="back_icon">返回</div>
    <h1>我的目标</h1>
    <div class="more">
      <img src="../assets/img/see_head_more.png"/>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header{
    height:rem(44);
    width:100%;
    background: #1C1C20;
    .back_icon{
      color:#fff;
      font-size:18px;
      float:left;
      line-height:44px;
      padding-left:10px;
    }
    h1{
      font-size:18px;
      color:#fff;
      margin-left:40%;
      line-height:44px;
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
