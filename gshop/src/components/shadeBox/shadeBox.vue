<template>
  <div class="shade">
     <div class="shade-box">
			 <h1 class="shade-title">{{info.name}}</h1>
			 <ul class="shade-list">
				 <li>{{info.score}}</li>
				 <li>{{info.ratingCount}}</li>
				 <li>{{info.description}}</li>
				 <li>{{info.deliveryPrice}}元</li>
				 <li>{{info.distance}}</li>
			 </ul>
			  <ul class="shade-lists">
				 <li>评分</li>
				 <li>月售</li>
				 <li>约28分钟</li>
				 <li>配送费用</li>
				 <li>距离</li>
			 </ul>
			 <h2 class="shade-gonggao">
				 <span>公告</span>
			 </h2>
			 <div class="shade-des">
				 是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，
				 不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”
			 </div>

			 <div class="close" @click="closeHandler">
				 <span class="iconfont icon-guanbi"></span>
			 </div>
		 </div>
		 
  </div>
</template>

<script>
export default {
data() {
return {

}
},
mounted () {
	console.log(this.info)
},
props:['info'],
methods: {
	closeHandler(){
		this.$emit('closes')
	}
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shade
	position fixed
	left 0
	right 0
	top 0
	bottom 0
	background rgba(0,0,0,.5)
	z-index 111
	.shade-box
		position absolute
		background #fff
		width 90%
		left 50%
		top 50%
		transform translate(-50%,-50%)
		border-radius .08rem
		.shade-title
			font-size .533333rem
			font-weight 700
			text-align center
			margin .266667rem 0rem
			position relative
			&:before
				content "品牌"
				display inline-block
				font-size .32rem
				line-height .586667rem
				margin-right .133333rem
				padding 0 .133333rem
				background #FFEF09
				vertical-align middle				
		.shade-list
			width 100%
			display flex
			margin-top .133333rem
			
			li
				font-size .373333rem
				font-weight 700
				flex 1
				display flex
				justify-content center
				align-items center
		.shade-lists
			width 100%
			display flex
			margin-top .266667rem
			li
				font-size .373333rem
				flex 1
				display flex
				justify-content center
				align-items center		
				color #999
		.shade-gonggao
			font-size .426667rem
			width 100%		
			text-align center
			margin-top .666667rem
			background-image linear-gradient(90deg, #fff, #333 50%, #fff)
			background-size 100% .026667rem
			background-repeat no-repeat
			background-position 50%
			width 2.266667rem
			margin .4rem auto 0rem
			span
				background #fff
		.shade-des
			font-size .373333rem
			line-height .533333rem
			padding .266667rem
			box-sizing border-box
			text-indent .533333rem
			
		.close
			color red
			position fixed
			left 50%
			transform translateX(-50%)
			color #fff
			padding .533333rem
			.icon-guanbi
				border .026667rem solid #fff
				display inline-block
				width .8rem
				height .8rem
				text-align center
				line-height .8rem
				border-radius 50%

			
</style>