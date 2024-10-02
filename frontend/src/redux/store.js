import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";
import { eventReducer } from "./reducers/event";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";
import { orderReducer } from "./reducers/order";
import userSlice from './reducers/usertk';
import sellerSlice from './reducers/sellertk';
import productSlice from './reducers/producttk';
import allproductSlice from './reducers/allproducttk';
import eventSlice from './reducers/eventtk'
const Store = configureStore({
  reducer: {
    user: userSlice,
    seller: sellerSlice,
    products: productSlice,
    allproducts: allproductSlice,
    events: eventSlice,
    cart: cartReducer,
    wishlist: wishlistReducer,
    order: orderReducer,
  },
});

export default Store;
