<template>
  <div>
    
    <div class="start" :class="'start-'+size">
			<span class="item-start" :class="item" v-for="(item,index) in filteCode" :key="index"></span>
			
		</div>

  </div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {

props:['size','code'],

computed:{
 filteCode(){
	let arr=[]

	const {code}=this
	let int=Math.floor(code)
  let flo=code*10-int*10
	for(let i=0;i<int;i++){
	   arr.push(CLASS_ON)
	}
	if(flo>5){
		 arr.push(CLASS_HALF)
	}
	while(arr.length<5){
		arr.push(CLASS_OFF)
	}
  return arr
 }


}


}

</script>
<style lang='stylus' rel='stylesheet/stylus'>
 @import '../../common/stylus/mixins.styl'
	.start-24
		float left
		font-size 0
		.item-start
			width .266667rem
			height .266667rem
			display inline-block
			margin-right .053333rem
			background-size .266667rem .266667rem
			background-repeat no-repeat
			&:last-child
				margin 0
			&.on
				bg-image('./image/stars/star24_on')
			&.half
				bg-image('./image/stars/star24_half')
			&.off
				bg-image('./image/stars/star24_off')	
	.start-36
		float left
		font-size 0
		.item-start
			width .4rem
			height .4rem
			display inline-block
			margin-right .053333rem
			background-size .4rem .4rem
			background-repeat no-repeat
			&:last-child
				margin 0
			&.on
				bg-image('./image/stars/star36_on')
			&.half
				bg-image('./image/stars/star36_half')
			&.off
				bg-image('./image/stars/star36_off')
	.start-48
		float left
		font-size 0
		.item-start
			width .533333rem
			height .533333rem
			display inline-block
			margin-right .053333rem
			background-size .533333rem .533333rem
			background-repeat no-repeat
			&:last-child
				margin 0
			&.on
				bg-image('./image/stars/star48_on')
			&.half
				bg-image('./image/stars/star48_half')
			&.off
				bg-image('./image/stars/star48_off')									
				
			
		

</style>