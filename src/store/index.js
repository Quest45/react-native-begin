// import { types } from "mobx-state-tree";
//
// const Product = types
//     .model({
//         id: types.identifierNumber,
//         title: types.string,
//         price: types.number,
//         description: types.string,
//         category: types.string,
//         image: types.string
//     });
// export const Data = types
//     .model({
//         products: types.optional(types.array(Product), [])
//     })
//     .actions(self => {
//         function addProduct(data) {
//             self.products = data;
//         }
//         return { addProduct };
//     });
//
// const CartItem = types
//     .model({
//         id: types.identifierNumber,
//         nom: types.string,
//         price: types.number,
//         quantity: types.integer
//     });
// export const Cart = types
//     .model({
//         cartList: types.optional(types.array(CartItem), [])
//     })
//     .actions(self => {
//         function addToCart (element) {
//             let tab = self.cartList;
//             if(tab.length === 0){
//                 self.cartList = [element];
//             }else{
//                 const findElement = tab.find(current => current.id === element.id);
//                 if(findElement === undefined){
//                     self.cartList = [...self.cartList, element];
//                 }else{
//                     let index = tab.indexOf(findElement);
//                     findElement.quantity += element.quantity;
//                     self.cartList[index] = findElement;
//                 }
//             }
//         }
//         function deleteOne (element) {
//             const index = self.cartList.indexOf(element);
//             self.cartList.splice(index, 1);
//         }
//         function deleteAll (element) {
//             self.cartList.splice(0, self.cartList.length);
//         }
//         return { addToCart, deleteOne, deleteAll };
//     })



import {action, observable, computed, makeAutoObservable} from 'mobx';

class Store {
    @observable  data = [];
    @observable  cart = 0;
    @observable  cartElement = [];
     constructor() {
         makeAutoObservable(this);
     }
    @action setData (data) {
        this.data = data;
    }
    @action changeCart(){
        this.cart ++;
    }
    @action addToCart (element) {
        // this.cart ++;
        let tab = this.cartElement;
        if(tab.length === 0){
            this.cartElement = [element];
        }else{
            const findElement = tab.find(current => current.id === element.id);
            if(findElement === undefined){
                this.cartElement = [...this.cartElement, element];
            }else{
                let index = tab.indexOf(findElement);
                findElement.quantity += element.quantity;
                this.cartElement[index] = findElement;
            }
        }
        console.log('my cart', this.cartElement);
    }
    @action deleteToCart (element){
        const index = this.cartElement.indexOf(element);
        this.cartElement.splice(index, 1);
    }
    @action deleteAll (){
        this.cartElement.splice(0, this.cartElement.length);
    }
    @computed get getData() {
        return this.data;
    }
    @computed get getCart (){
        return this.cartElement;
    }

}

export default new Store();