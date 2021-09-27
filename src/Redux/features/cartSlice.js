import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 value:
 [
    {
      id: 9381375293,
      productName:"JESSIE THUNDER SHOES",
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
      color:"gray",
      size:"37.5",
      price:"30",
      amount:3
    }, {
      id: 93813718223,
      productName:"HAKURA T-SHIRT",
      img: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
      color:"red",
      size:"37.5",
      price:"30",
      amount:1
    }, {
      id: 93813744293,
      productName:"JESSIE THUNDER SHOES",
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
      color:"black",
      size:"37.5",
      price:"30",
      amount:2
    },
    
  ]
 }


export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  
  reducers: {
    addToCart: (state,action) => {
        state.value.push(action.payload);
      },
    deleteFromCart: (state,action) => {
        state.value.splice(action.payload,1);
      },
  }
})

// Action creators are generated for each case reducer function
export const { addToCart,deleteFromCart } = CartSlice.actions

export default CartSlice.reducer;