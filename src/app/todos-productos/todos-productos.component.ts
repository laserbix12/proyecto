import { Component } from '@angular/core';

@Component({
  selector: 'app-todos-productos',
  templateUrl: './todos-productos.component.html',
  styleUrls: ['./todos-productos.component.css']
})
export class TodosProductosComponent {

  // Creamos un arreglo básico con objetos que representan nuestros artículos deportivos
  // Aquí estamos simulando lo que más adelante traerás de una base de datos
  productos = [
    {
      id: 1,
      nombre: 'Mesa de Ping Pong Pro',
      precio: 250,
      imagen: '' // Como está vacío, tu HTML usará el placeholder automáticamente
    },
    {
      id: 2,
      nombre: 'Raqueta Profesional',
      precio: 45,
      imagen: ''
    },
    {
      id: 3,
      nombre: 'Set de Pelotas x6',
      precio: 10,
      imagen: ''
    },
    {
      id: 4,
      nombre: 'Red de Repuesto',
      precio: 15,
      imagen: ''
    }
  ];

  // 2. Creamos la función 'comprar' que tu botón llama al hacer (click)
  comprar(producto: any) {
    // Imprimimos en la consola para verificar que funciona
    console.log('Agregando al carrito:', producto.nombre);

    // Mostramos una alerta temporal al usuario
    alert(`¡Has añadido ${producto.nombre} a tu carrito!`);
  }

}
