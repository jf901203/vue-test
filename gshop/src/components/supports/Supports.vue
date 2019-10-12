<template>
  <div class="supports">
     <div class="supports-container">
		   <h1>商家活动
				 <span class="iconfont icon-guanbi" @click="showAlert"></span>
			 </h1>
       <div class="supports-wrapper">
				 <ul class="uls">
					 <li v-for="(item,index) in supports" :key="index">
						 <span :class="classArr[item.type]">{{item.name}}</span>
						 {{item.content}}
					 </li>
				 </ul>
			 </div>
		 </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
           classArr:['soudan','manjian','tejia']
		}
	},
	props:['supports'],
	methods: {
		showAlert(){
			this.$emit('alertHandler')
		}
	}
}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.supports
	position fixed
	left 0
	right 0
	top 0
	bottom 0
	background rgba(0,0,0,.4)
	z-index 105
	.supports-container
		position absolute
		bottom 0
		left 0
		right 0
		z-index 100
		padding 20px 30px
		box-sizing border-box
		background red
		overflow hidden
		background #fff
		h1
			font-size .693333rem
			text-align center
			position relative
			line-height 1.333333rem
			span
				position absolute
				right -0.266667rem
				font-size .693333rem
				font-weight 700
				top -0.266667rem
		.supports-wrapper
			overflow-y scroll
			height 4.266667rem
			.uls
				width 100%
				li
					line-height .8rem
					font-size .373333rem
					span 
						padding 0 .133333rem
						color #fff 
						border-radius .053333rem
						margin-right .133333rem
						&.soudan
							background #70BC46
						&.manjian	
							background #F07373
						&.tejia
							background #F1884F

</style>