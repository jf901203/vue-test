<template>
<div>
  <div class="shopgoods">
    <div class="menu-wrapper" ref="menu_wrapper">
			 <ul class="menu-content">
				 <li class="menu-item" 
				 :class="index===currentIndex?'bg':''"
				  v-for="(item,index) in goods" 
					:key="index"
					@click="handleItem(index)"
					>
					 <span v-if="item.icon">
						 <img :src="item.icon" alt="" class="icon">
					 </span>
					 <span>{{item.name}}</span>
				 </li>
			 </ul>
		</div>
		<div class="food-wrapper" ref="food_wrapper">
        <ul class="food-content" >
				 <li class="food-item" v-for="(good,index) in goods" :key="index" >
					 <h3 class="food-title">{{good.name}}</h3>
					  <ul class="food-list"  v-for="(food,index) in good.foods" :key="index" @click="handelDetail(food)">
						 <li class="food-avatar">
							 <img  :src="food.image" alt="">
						 </li>
						 <li class="food-text" >
							 <ul class="food-line">
								 <li class="line-title">{{food.name}}</li>
								 <li class="line-des">{{food.description}}</li>
								 <li class="line-num">
									 <span>月售{{food.sellCount}}份</span>
									 <span>好评率{{food.rating}}%</span>
								 </li>
								 <li class="line-order">
									 ￥{{food.price}}
								 </li>
							 </ul>
							 <div >
								 <!-- 把整个当前整个商品的信息都添加进购物车 添加购物车组件 -->
								 <!-- shopCart组件对象 -->
								<shopCart :food="food" class="shopCart" ref="shopCart" @click="shopCart"/>
							 </div>
						 </li>
						 
					 </ul>
				 </li>
			 </ul>
		
		</div>
		<!-- 食品详情 -->
    <!-- shopDetail组件对象 -->
		<shopDetail ref="detail" :food="food"/>
   
  </div>
	<CartControl/>
	
</div>	
</template>
<script>
import {mapState,mapActions} from 'vuex'
import CartControl from 'components/CartControl/CartControl'
import shopCart from 'components/shopCart/shopCart'
import shopDetail from 'components/shopDetail/shopDetail'
import BScroll from 'better-scroll'
export default {
    data() {
      return {
				isshow:'',
				listHeight:[],//右边每个盒子的高度数组
				scrollY:0,//时时获取当前Y轴的高度
				food:{}
        
      }
		},
  
	mounted(){
		// getGoods这个函数内部会去发ajax请求异步获取数据
		this.getGoods()

	},
	methods:{
   
	  ...mapActions(['getGoods']),
		// better-scroll的实现原理是监听了touchStart touchend事件 所以阻止了默认的事件(PrenvetDefault)
		// 所以在这里点击的话 需要在初始的时候传递click，派发一个点击事件
		_scroll(){
		this.scroll=new BScroll(this.$refs.menu_wrapper,{
			scrollY:true,
			click:true,
			probeType:1
		})
			// 把BScroll添加到当前的页面实例对象上
			this.rScroll=new BScroll(this.$refs.food_wrapper,{
			probeType:3,  //探针的效果时时获取滚动的高度
			click:true
		})
		// this.rScroll这个对象监听事件 时时获取位置 获取到滚到的高度 scrollTop
		this.rScroll.on('scroll',(pos)=>{
			this.scrollY=Math.abs(Math.round(pos.y))
		})

		},
		// 事件相关的回调函数
		handleItem(index){
			const scrollTop=this.listHeight[index]
			this.scrollY=scrollTop
		  this.rScroll.scrollTo(0,-scrollTop,300)
		},
	//获取右边滚动盒子的高度
  _getHeight(){
		// $refs是获取DOM元素对象的
		// const 声明可以让变量在其作用域上受限于它所在的块 语句 表达式式中
		// 常量在函数调用的时候函数内部的变量才初始化
		// 每次调用都是在不同的栈堆里
		// const声明的变量 必须初始化值 且不可以修改
		// 在这里函数调用就会初始化 每次调用一次就会初始化一次
		// 都是在不同的栈堆执行
		const itemArr=this.$refs.food_wrapper.getElementsByClassName('food-item')
		let height=0
		const listHeight=[]
		listHeight.push(height)
	  Array.prototype.slice.call(itemArr).forEach((item)=>{
		 height+=item.clientHeight
		 listHeight.push(height)
		})
		this.listHeight=listHeight
	},

	// 事件的回调函数
	handelDetail(food){
   this.food=food
   this.$refs.detail.handleHead()
	},

	shopCart(){
		this.$refs.shopCart.handleAdd()
	}



	
	},
	// 监听到数据已经发生了变换
watch: {
	goods(value){
		 this.$nextTick(()=>{
			this._getHeight()
			this._scroll()
		})
	}
},
	computed: {

		...mapState(['goods']),
		// 计算出当前滑动的下标
		currentIndex(){
			let {listHeight,scrollY} =this
      // findeIndex遍历循坏数组中的每一项 并把满足条件的索引返回出来
		  const index=listHeight.findIndex((item,index)=>{
         return scrollY>=item && scrollY<listHeight[index+1]
			})
			return index
		},

	},
	components:{
		CartControl,
		shopCart,
		shopDetail
	}
	

}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
.shopgoods
	width 100%
	position absolute
	top 5.866667rem
	bottom 1.226667rem
	display flex
	overflow hidden
	.menu-wrapper
		flex-basis 2.133333rem
		ul
			background #ccc
			.menu-item
				display flex
				font-size .32rem
				width 100%
				height 1.333333rem
				justify-content center
				align-items center
				position relative
				background #F3F5F7
				&.bg
					background #fff
				&:not(:last-child):after
					content ''
					width 70%
					height .026667rem
					background #EBEDEF
					position absolute
					bottom 0
				.icon
					width .32rem
					height .32rem
					margin-right .133333rem

	.food-wrapper
		flex 1
		.food-item
			display flex
			flex-flow column
			.food-title
				background  #F3F5F7
				height .693333rem
				font-size .32rem
				position relative
				display flex
				align-items center
				text-indent .4rem
				&:after
					content ''
					width .053333rem
					height 70%
					background #ccc
					position absolute
					left 0
			.food-list
				padding .533333rem .4rem
				box-sizing border-box
				display flex
				position relative
				background #fff
				&:not(:last-child):after
					content ''
					width 90%
					position absolute
					height .026667rem
					background #F7F7F7
					bottom 0
					
				.food-avatar
					flex-basis 1.52rem
					height 1.52rem
					img 
						width 100%
						height 100%
				.food-text
					flex 1
					position relative
					.food-line
						width 100%
						display flex
						flex-flow column
						font-size .32rem
						margin-left .133333rem
						>li:not(:last-child)
							margin-bottom .133333rem
						.line-title
							font-weight 700
						.line-des
							color #ADB1B6
						.line-num
							font-size .266667rem
							color #ADB1B6
						.line-order
							color red	
					.shopCart	
						position absolute
						right 0rem
						bottom -0.4rem
						
							
						





		
		
</style>