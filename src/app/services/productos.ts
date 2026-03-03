import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Productos {
  private router = inject(Router);

  addToCart(product: any) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    const products = this.getProducts();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    console.log('Producto agregado:', product);
    this.router.navigate(['/todos-los-productos']);
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }

  addProduct(product: any) {
    const products = this.getProducts();
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    this.router.navigate(['/todos-los-productos']);
  }
}
