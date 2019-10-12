import Vue from 'vue'
import {
	RECIVE_ADDRESS,
	RECIVE_SHOP,
	RECIVE_FOOD,
	RECIVE_USER_INFO,
	RESET_USER_INFO,
	RECIVE_GOODS,
	RECIVE_INFO,
	RECIVE_RATINGS,
	INCREMENT_COUNT,
	RECREMENT_COUNT,
	CLEAR_CART,
	RECIVE_SEARCH_SHOP
} from './mutations-types'
import { stat } from 'fs'

export default{
  [RECIVE_ADDRESS](state,{address}){
      state.address=address
		},
	[RECIVE_SHOP](state,{shoplist}){
		state.shoplist=shoplist
	},
	[RECIVE_FOOD](state,{foodlist}){
		state.foodlist=foodlist
	},
	[RECIVE_USER_INFO](state,{userinfo}){
		state.userInfo=userinfo
	},
	[RESET_USER_INFO](state){

		state.userInfo={}
	},
	[RECIVE_GOODS](state,{goods}){

		state.goods=goods

	},
	[RECIVE_INFO](state,{info}){

		state.info=info

	},

	[INCREMENT_COUNT](state,{food}){
		if(!food.count){
			// goods数组中的每一个food对象添加一个属性
			Vue.set(food,'count',1)
			// 把商品添加进购物车
			state.cartFood.push(food)
		}else{
			food.count++
		}
	},
	
	[RECREMENT_COUNT](state, {food}) {
    if(food.count) {// 只有有值才去减
      food.count--
      if(food.count===0) {
        // 将food从cartFoods中移除
        state.cartFood.splice(state.cartFood.indexOf(food), 1)
      }
    }
  },


// 先清空商品的数量
	[CLEAR_CART](state){
		// 多个引用类型的变量 同时指向一个对象 
		state.cartFood.forEach((food)=>{
			food.count=0
		})
		// 再清空购物车中的商品
		state.cartFood=[]
	},
	
	[RECIVE_RATINGS](state,{ratings}){
		state.ratings=ratings
	},
	[RECIVE_SEARCH_SHOP](state,{searchList}){

		state.searchList=searchList
		
	}

}