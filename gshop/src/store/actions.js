
import {
	reqAddress,
	reqShop,
	reqShoplist,
	reqUserInfo,
	reqLogOut,
	reqInfo,
	reqGoods,
	reqRatings,
	reqSearchShop

} from 'api'
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

export default{
 async getAddress({state,commit}){
    const geohash=state.latitude+','+state.longitude
    const res=await reqAddress(geohash)
    if(res.code===0){
			 const  address=res.data
       commit(RECIVE_ADDRESS,{address})
    }


 },
async getShop({state,commit}) {
	
	const la=state.latitude
	const lo=state.longitude
	const res=await reqShop({la,lo})
	if(res.code===0){
	const	shoplist=res.data
		commit(RECIVE_SHOP,{shoplist})
	}
},
async getFood({state,commit},callback){
	const res =await reqShoplist()
	if(res.code===0){
	const	foodlist=res.data
	// 提交commit证明去更新了state中的foodlist
	commit(RECIVE_FOOD,{foodlist})
  // 数据已经更新 执行回调函数 相等于watch监视到了数据的变化
	callback && callback ()
	}
	
},
// 同步记录用户信息 因为我在登入组件中已经发送请求 获取到了用户的信息 

recordUserInfo({commit},userinfo){
	commit(RECIVE_USER_INFO,{userinfo})
},

// 异步获取session中的用户信息去更新state中的 userinfo

async getUserInfo({commit}){
const res=await reqUserInfo()
if(res.code===0){
 const	userinfo=res.data
	commit(RECIVE_USER_INFO,{userinfo})
}


},

async getLoginOut({commit}){
	const res=await reqLogOut()
	if(res.code===0){
		commit(RESET_USER_INFO)
	}
},

async getGoods({commit},callback){
	const res = await reqGoods()
	if(res.code===0){
		const goods=res.data
		commit(RECIVE_GOODS,{goods})
		// 数据已经发生改变 调用回调函数
		callback && callback()
	}
},

async getInfo({commit}){

 const res=await reqInfo()
 if(res.code===0){
	 const info=res.data
	 commit(RECIVE_INFO,{info})
 }


},


handleAdd({commit},{isAdd,food}){
	
	if(isAdd){
	
		commit(INCREMENT_COUNT,{food})
	}else{

		commit(RECREMENT_COUNT,{food})

	}
	

},
// 清空购物车
clearCart({commit},callback){

	commit(CLEAR_CART)

	callback && callback()

},

// 获取商家信息
async getRatings({commit},callback){

	const res= await reqRatings()

	if(res.code===0){
		
		const ratings=res.data
		
		commit(RECIVE_RATINGS,{ratings})

    callback && callback()
	}
  

},

async getSearchShop({state,commit},keyword){
	const {latitude,longitude}=state
	const geohash=`${latitude},${longitude}`
	const res=await reqSearchShop({keyword,geohash})
	if(res.code===0){
		const searchList=res.data
		commit(RECIVE_SEARCH_SHOP,{searchList})
		
	}
	
}

}


