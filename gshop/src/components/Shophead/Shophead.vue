<template>
  <div>
     <div @click="$router.back(-1)" class="avatar" :style="{backgroundImage:`url(${info.bgImg})`}">
       <i class="iconfont icon-ios-arrow-back"></i>
     </div>
		 <div class="logo">
			 <img :src="info.avatar" alt="" >
		 </div>
		 <div class="shop-content" >
        <div @click="shopHandler">
				<h1>{{info.name}}</h1>
				<div class="adresss">
					<span>{{info.score}}</span>
					<span>月售{{info.sellCount}}</span>
					<span>{{info.description}}</span>
					<span>约{{info.deliveryTime}}分钟</span>
					<span>距离{{info.distance}}</span>
				</div>
			</div>
			<div class="shoudan" v-if="info.supports" @click="shade">
				<div class="shoudan-title">{{info.supports[0].content}}</div>
				<div class="shoudan-youhui">{{info.supports.length}}个优惠</div>
			</div>
		 </div>
		 <transition name="close">
		 <ShadeBox v-if="closeShow" @closes="closes" :info="info"/>
		 </transition>
		 <transition name="fade">
		  <Supports v-if="showAlert"  :supports="info.supports" @alertHandler="alertHandler"/>
		 </transition>
  </div>
</template>

<script>

import Supports from  'components/Supports/Supports'
import ShadeBox from 'components/shadeBox/shadeBox'
import {mapState,mapActions} from 'vuex'
export default {
data() {
return {
	showAlert:false,
	closeShow:false
}
},
mounted () {
	this.getInfo()
	
},
methods: {
	...mapActions(['getInfo']),
	alertHandler(){
	   this.showAlert=!this.showAlert
	},
	shade(){

     this.showAlert=!this.showAlert
		
	},
	shopHandler(){
		this.closeShow=!this.closeShow
	},
	closes(){
    this.closeShow=!this.closeShow
	}
},
computed: {
	...mapState(['info'])
},
components:{
	Supports,
	ShadeBox
}

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.avatar
	height 1.333333rem
	width 100%
	background-size cover
	background-repeat  no-repeat
	position relative
	&::before
		content ''
		display block
		position absolute
		left 0
		right 0
		top 0
		bottom 0
		background-color rgba(119, 103, 137, .43)
	.icon-ios-arrow-back
		color #fff
		position absolute
		font-size .666667rem
		display inline-block
		width 1.333333rem
		height 1.333333rem
		line-height 1.333333rem
.logo
	width 1.76rem
	height 1.76rem	
	position absolute
	top .533333rem
	left 50%
	transform translateX(-50%)
	img 
		width 100%
		height 100%
.shop-content	
	padding-top .666667rem
	display flex
	flex-flow column
	background #fff
	h1
		display flex
		justify-content center
		position relative
		font-weight 700
		font-size .533333rem
		height .933333rem
		align-items center
		&::before
			content '品牌'
			display inline-block
			font-size .32rem
			width 1.066667rem
			height .533333rem
			text-align center
			line-height .533333rem
			margin-right .133333rem
			background #FFEF09
		&::after
			content ''
			border-left .213333rem solid #545454	
			border-top  .213333rem solid transparent	
			border-bottom  .213333rem solid transparent
			margin-left .266667rem
	.adresss
		font-size .373333rem
		padding 0 .8rem
		box-sizing border-box		
		white-space nowrap
		height .32rem
		font-size .32rem
		color #545454
		text-align center
		span:not(:last-child):after
			content "\21E0"
			opacity 0.1
	.shoudan
		font-size .48rem
		display flex
		justify-content center
		align-items center
		margin .266667rem 0rem
		height .8rem
		font-size .373333rem
		border 1px solid #F5F5F5
 		.shoudan-title
			width 6.666667rem
			position relative
			overflow hidden
			text-overflow ellipsis
			white-space nowrap
			color #545454
			&::before
				content "首单"
				background #70BC46
				font-size .373333rem
				padding .08rem
				display inline-block
				color #fff
				margin-right .133333rem
		.shoudan-youhui
			color #545454
			position relative
			&:after
				content ""
				display inline-block
				border-top 5px solid #545454
				border-left 5px solid  transparent
				border-right   5px solid  transparent
				width 0
				height 0
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}			

.close-enter-active, .close-leave-active {
  transition: opacity .5s
}
.close-enter, .close-leave-active {
  opacity: 0
}			





				
			



			
			
			

			




</style>