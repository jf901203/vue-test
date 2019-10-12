<template>
  <div class="footer">
          <router-link to="miste" class="item">
			 <span class="iconfont icon-zhuye1"></span>
			 <span>首页</span>
		 </router-link>
		 <router-link to="search" class="item">
			 <span class="iconfont icon-sousuo"></span>
			 <span>搜索</span>
		 </router-link>
		 <router-link to="order" class="item">
			 <span class="iconfont icon-file"></span>
			 <span>订单</span>
		 </router-link>
		 <router-link to="profile" class="item">
			 <span class="iconfont icon-yonghu"></span>
			 <span>我的</span>
		 </router-link>
		 
  </div>
	
</template>

<script>
export default {
data() {
	return {
    
	}
},

}

</script>
<style lang="stylus" rel="stylesheet/stylus">
.footer
	width 100%
	height 1.333333rem
	background red
	position fixed
	bottom 0
	background  #fff
	display  flex
	z-index 999
	.item 
		flex 1
		display flex
		flex-flow column
		justify-content center
		align-items center
		font-size .32rem
		&>span 
			color #009475
			font-size .32rem
		&>span:first-child
			margin-bottom .133333rem
			font-size .426667rem
	.router-link-active
		background #f1f1ff


			


</style>