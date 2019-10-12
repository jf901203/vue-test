<template>
  <div class="header">
    <slot name="left"></slot>
		<span class="center">{{title}}</span>
		<slot name="right"></slot>
  </div>
</template>

<script>
export default {
data() {
	return {
       
	}
},

props:{
	title:{
		type:String
	}
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.header
	width 100%
	height 1.2rem
	background  #009475
	position fixed
	left  0
	right 0
	top 0
	z-index 10
	display flex
	.left
		flex-basis 15%
		font-size .48rem
		display flex
		justify-content center
		align-items center
		color #fff
	.center
		flex 1
		display flex
		justify-content center
		align-items center
		font-size .48rem
		font-weight 700
		color #fff
	.right
		flex-basis 20%	
		display flex
		justify-content center
		align-items center
		color #ffffff
		font-size .266667rem
	
</style>