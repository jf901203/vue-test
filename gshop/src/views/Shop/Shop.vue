<template>
  <div>
     <Shophead/>
     <section class="navgator">

			 <div><router-link to="/shop/good" replace>点餐</router-link></div>
			 <div><router-link to="/shop/rating" replace>评论</router-link></div>
			 <div><router-link to="/shop/info" replace>商家</router-link></div>
			 
		 </section>
		 <!-- 给路由组件做缓存 -->
		 <keep-alive>
			 <!-- 渲染路由组件 -->
		    <router-view></router-view>
		 </keep-alive>
  </div>
</template>

<script>
import Shophead from 'components/Shophead/Shophead'
export default {
data() {
  return {

  }
},
components:{
  Shophead
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.navgator	
	width 100%
	display flex
	& > div
		width 100%
		display flex
		justify-content center
		align-items center		
		font-size .426667rem
		height .933333rem
		background #fff
		padding-bottom .16rem
		position relative
		&:after
			position absolute
			content ''
			width 100%
			height .026667rem
			bottom 0
			background #F7F7F7
		a
			height 100%
			display flex
			justify-content center
			align-items center
			width 100%
		.router-link-active
			position relative
			&::after
				content ''
				display inline-block
				width 30%
				height .053333rem
				position absolute
				bottom 0
				background #545454
</style>