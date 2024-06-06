import { Injectable } from '@angular/core';
import { Product } from '../../mocks/product.model';
import { ProductService } from '../../services/product/product.service';

// interface qui correspond à un produit du panier avec deux propriétes product (objet) et quantité
export interface CartProduct {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  // deux propriétes du service du panier de type number initialisées à 0
  cartTotalPrice: number = 0;
  productQuantity: number = 0 ;
  
  constructor(private productService : ProductService) { }


//CREATE CART
private createCart() {
  //je transforme mon panier qui est un objet en chaine de caractères
  const newCart = JSON.stringify([]);
  //j'enregistre le panier avec setItem (clé, valeur) qui sont tous les deux des string
  localStorage.setItem('Panier : ', newCart);
}


//SAVE CART (add total price + total quantity)
private saveCart(cart: CartProduct[]) {
  localStorage.setItem('Panier : ', JSON.stringify(cart));
  this.getCartTotalPrice();
  this.getTotalQuantity();
}


//GET CART (or create a cart if it doesn't exist)
getCart(){
  //on recupere le panier dans localStorage avec getItem avec la clé 'basket'
  const cart = localStorage.getItem('Panier');
  //si le panier existe
  if(cart) {
  // on transforme le panier en objet
    return JSON.parse(cart);
  //sinon
  } else {
    // on appelle la fonction creer un panier et on fait une recursivité sur notre fonction getBasket()
    this.createCart();
    this.getCart();
  }
}


// ADD TO CART (prend en parametre un produit de type BasketProduct
addToCart(cartProduct : CartProduct) {
  //recuperation du panier
  const cart = this.getCart();
  // on cherche dans le panier si le produit existe en comparant l'id du panier et id du mock
  const productExists = cart.find((product: CartProduct) => cartProduct.product.id === product.product.id);
   if (productExists) {
   // on recupere l'index du produit
   const cartProductId = cart.indexOf(productExists);
   // on incremente la quantité du produit dans le panier
   cart[cartProductId].quantity += cartProduct.quantity;
  } else {
    // sinon on ajoute le produit dans le panier
    cart.push(cartProduct);
  }
 this.saveCart(cart);
}


// GET CART TOTAL PRICE
getCartTotalPrice(): void {
  // on recupere le panier
  const cart = this.getCart();
  // on utilise la méthode reduce avec accumulator et current value pour avoir le prix total du panier
  const totalPrice = cart.reduce((accumulator:number, currentValue: CartProduct) =>{
    // je recupere mon produit par id dans mon mock
    const product = this.productService.getProducts();
    //si le produit n'existe pas je retourne juste la valeur de l'accumulateur
    if(!product) return accumulator;
    // si le produit existe, on retourne le produit de l'accumulateur et le prix du prouit : on calcule prix total
    //return accumulator + (currentValue.quantity * product!.price);
    // initialisation de l'accumulateur à 0
  },0);
  // on donne la valeur du total du panier à la propriété basketTotal du basket Service
  this.cartTotalPrice = totalPrice;
}


//GET PRODUCT TOTAL QUANTITY IN CART
getTotalQuantity(): void {
  // on recupere le panier
  const cart = this.getCart();
  // on calcule le nombre de produits
  const total = cart.reduce((accumulator:number, currentValue: CartProduct) => {
    return accumulator += currentValue.quantity;
  },0);
  // on assigne la quantité total à la propriété productQuantity du basket service
  this.productQuantity = total;
}


//DELETE A PRODUCT FROM CART
removeProduct(index: number) {
  // on recupere le panier
const cart= this.getCart();
//fonction angular sur un tableau pour pouvoir retirer un element avec son index et le nombre d'elements à retirer
cart.splice(index,1);
//j'affiche ma nouvelle quantité
this.getTotalQuantity();
//j'affiche mon nouveau prix total
this.getCartTotalPrice();
//j'enregistre mon panier
this.saveCart(cart);
}

}
