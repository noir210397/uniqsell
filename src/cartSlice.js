import { createSlice } from '@reduxjs/toolkit'
import products from './assets/data/products'
import { toast } from 'react-toastify';



const storeFunction = (cart, quantity, total) => {
    let data = {
        cart: cart,
        quantity: quantity,
        total: total
    }
    sessionStorage.setItem("uniqsell", JSON.stringify(data))
}

const initialState = {
    cart: [],
    cartQuantity: 0,
    saved: [],
    total: 0
}
const uniqsell = () => {
    let data = sessionStorage.getItem("uniqsell")
    if (data) {
        let real = JSON.parse(data)
        initialState.cart = real.cart
        initialState.cartQuantity = real.quantity
        initialState.total = real.total
    }
    // console.log('uniqsell function ran')

}
uniqsell()

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let inCart = state.cart.find((item) => item.id === action.payload)
            if (!inCart) {
                let cartItem = products.find((item) => item.id === action.payload)
                let updateCartItem = { ...cartItem, quantity: 1 }
                cartItem = updateCartItem
                state.cart.push(cartItem)
                state.cartQuantity = state.cart.reduce((acc, obj) => { return acc + obj.quantity }, 0)
                state.total = state.cart.reduce((acc, obj) => { return acc + (obj.quantity * obj.price) }, 0)
                toast.success("Product Added to Cart");
                storeFunction(state.cart, state.cartQuantity, state.total)

            }
            else {
                let cartItem = state.cart.find((item) => item.id === action.payload)
                cartItem.quantity += 1
                state.cartQuantity = state.cart.reduce((acc, obj) => { return acc + obj.quantity }, 0)
                state.total = state.cart.reduce((acc, obj) => { return acc + (obj.quantity * obj.price) }, 0)
                toast.success("Product Added to Cart");
                storeFunction(state.cart, state.cartQuantity, state.total)



            }
        },
        clearCart: (state) => {
            state.cart = []
            state.cartQuantity = 0
            state.total = 0
            storeFunction(state.cart, state.cartQuantity, state.total)
        },
        removeFromCart: (state, action) => {
            let itemId = action.payload
            state.cart = state.cart.filter((item) => item.id !== itemId)
            state.cartQuantity = state.cart.reduce((acc, obj) => { return acc + obj.quantity }, 0)
            state.total = state.cart.reduce((acc, obj) => { return acc + (obj.quantity * obj.price) }, 0)
            storeFunction(state.cart, state.cartQuantity, state.total)
        },
        increaseByOne: (state, action) => {
            let itemId = action.payload
            let cartItem = state.cart.find((item) => item.id === itemId)
            cartItem.quantity += 1
            state.cartQuantity = state.cart.reduce((acc, obj) => { return acc + obj.quantity }, 0)
            state.total = state.cart.reduce((acc, obj) => { return acc + (obj.quantity * obj.price) }, 0)
            storeFunction(state.cart, state.cartQuantity, state.total)
        },
        decreaseByOne: (state, action) => {
            let itemId = action.payload
            let cartItem = state.cart.find((item) => item.id === itemId)
            if (cartItem.quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== itemId)
                state.cartQuantity = state.cart.reduce((acc, obj) => { return acc + obj.quantity }, 0)
                state.total = state.cart.reduce((acc, obj) => { return acc + (obj.quantity * obj.price) }, 0)
                storeFunction(state.cart, state.cartQuantity, state.total)
            }
            else {
                cartItem.quantity -= 1
                state.cartQuantity = state.cart.reduce((acc, obj) => { return acc + obj.quantity }, 0)
                state.total = state.cart.reduce((acc, obj) => { return acc + (obj.quantity * obj.price) }, 0)
                storeFunction(state.cart, state.cartQuantity, state.total)
            }
        }

    },
})
export const { addToCart, increaseByOne, decreaseByOne, clearCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer