import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice'
import categoriesSlice from './features/categoriesSlice'
import popularProductsSlice from './features/popularProductsSlice'

import sliderItemsReducer from './features/sliderItemsSlice'



export const store = configureStore({
  reducer: {
  sliderItems: sliderItemsReducer,
  categories:categoriesSlice ,
  popularProducts:popularProductsSlice,
  cart:cartSlice
  },
})