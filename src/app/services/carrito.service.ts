import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  agregarProducto(producto: any) {
    // Obtenemos el carrito actual o iniciamos uno vacío
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Agregamos el producto
    cart.push(producto);

    // Guardamos en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log('Agregando al carrito:', producto.nombre || producto.name);
    alert(`¡Has añadido ${producto.nombre || producto.name} a tu carrito!`);
  }

  obtenerCarrito(): any[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
