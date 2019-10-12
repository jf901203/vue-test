
export default{
  getCount(state){
  
    return state.cartFood.reduce((x,food)=>x+food.count,0)
    
    },
  getPrice(state){

    return state.cartFood.reduce((total,food)=>total+food.count*food.price,0)
  },
  reDuceRatings(state){

    return state.ratings.reduce((total,rating)=>total + (rating.rateType=== 0 ? 1 : 0 ),0)

  }

}


