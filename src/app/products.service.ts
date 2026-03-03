import { Injectable } from '@angular/core';

export interface Product {
  id?: number;
  name: string;
  price: string;
  image: string;
  category: string;
  originalPrice?: string;
  discount?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    // --- Air Hockey ---
    {
      name: 'Air Hockey Compacto',
      price: '199,99 €',
      image: 'data:image/jpeg;base64,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',
      category: 'Air Hockey'
    },
    {
      name: 'Air Hockey Estándar',
      price: '399,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMan9MfwXM-swxziTHuVsZfGUxZXmN2dNOw&s',
      category: 'Air Hockey'
    },
    {
      name: 'Air Hockey Premium',
      price: '799,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICwbw8dJLKI7a2sAuYHiyKC-XTgw_hLbsdw&s',
      category: 'Air Hockey'
    },
    // --- Billares ---
    {
      name: 'Mesa de Billar Clásica',
      price: '1.299,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_3yd1lm_WvuxoZIdBQQYi0KhF71Q5EPZaA&s',
      category: 'Billares'
    },
    {
      name: 'Mesa de Billar Profesional',
      price: '2.499,99 €',
      image: 'https://marben.net/image/cache/catalog/catalogo/mesas_de_billar/nebraska/mesa_de_billar_nebraska_cherry_01-1200x900.webp',
      category: 'Billares'
    },
    {
      name: 'Mesa de Billar Madera Premium',
      price: '3.999,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cZvCOUAZU9pqiBMLMMx9L2WszkOUIxss1g&s',
      category: 'Billares'
    },
    // --- Canastas ---
    {
      name: 'Canasta Infantil',
      price: '79,99 €',
      image: 'https://i5.walmartimages.com/asr/7f8c443f-6978-487a-b140-c2ce9c98b6f4.5542e16543c201d41d80963040b200bf.jpeg',
      category: 'Canastas'
    },
    {
      name: 'Canasta Estándar',
      price: '149,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCbd7YB3PHKAS0OfLGVW9g5s14o7l4sDOvQ&s',
      category: 'Canastas'
    },
    {
      name: 'Canasta Profesional',
      price: '299,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCck5sTTpEu5lujH4pI2-zjt7hm0cktNpmw&s',
      category: 'Canastas'
    },
    // --- Futbolines ---
    {
      name: 'Futbolín Modelo Premium',
      price: '299,99 €',
      image: 'https://media.cgtrader.com/variants/871ZYHo1TMTHMDNHgR9VTsBT/78add9c2f02fbd73a43ffb3970be38683c5f15eff6ca849dc78c644f4ff9ce1b/001.webp',
      category: 'Futbolines'
    },
    {
      name: 'Futbolín Modelo Profesional',
      price: '449,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffKB_Y1iCYr4x3pVytX4K0n8WJ1-9d5dhmg&s',
      category: 'Futbolines'
    },
    {
      name: 'Futbolín Modelo Competición',
      price: '599,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpcuOngjGvBcMFwVt9BGi7STQAe2ypMQsrQ&s',
      category: 'Futbolines'
    },
    // --- Ping Pong ---
    {
      name: 'Mesa Enebe New Lander Indoor',
      price: '359,95 €',
      originalPrice: '420,00 €',
      discount: '-60,05 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzTo43eJYMadQ55vZEDxaRg2KQ8CO-t_Q5A&s',
      category: 'Ping Pong'
    },
    {
      name: 'Mesa Enebe Game X3 Outdoor',
      price: '569,00 €',
      originalPrice: '645,00 €',
      discount: '-76,00 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzTo43eJYMadQ55vZEDxaRg2KQ8CO-t_Q5A&s',
      category: 'Ping Pong'
    },
    {
      name: 'Mesa Enebe Master Indoor',
      price: '599,00 €',
      originalPrice: '670,00 €',
      discount: '-71,00 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITQmZWbUByIraqHNKS8jVrOZXcdb2s9FcZA&s',
      category: 'Ping Pong'
    },
    // --- Porterías ---
    {
      name: 'Portería Infantil',
      price: '59,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqDXOin16Km2v_VXP0qylsg59BtG9gfsfkg&s',
      category: 'Porterías'
    },
    {
      name: 'Portería Estándar',
      price: '99,99 €',
      image: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=400&auto=format&fit=crop',
      category: 'Porterías'
    },
    {
      name: 'Portería Profesional',
      price: '199,99 €',
      image: 'https://sportmaster.mx/wp-content/uploads/porterias-futbol-7.jpg',
      category: 'Porterías'
    },
    // --- Trampolines ---
    {
      name: 'Minitrampolín',
      price: '89,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjf0AOgaSh2vFGwjvs0Is81xC2UjFU5r9aA&s',
      category: 'Trampolines'
    },
    {
      name: 'Trampolín Compacto',
      price: '179,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-AXzc6g35ZYz1wtYr7ezh7uy2d3zVi-eSw&s',
      category: 'Trampolines'
    },
    {
      name: 'Trampolín Grande',
      price: '349,99 €',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyouybAIpJqiL_8vV1Ee1bFj00reuzrhbXEg&s',
      category: 'Trampolines'
    },
    // --- Ofertas (Multijuegos) ---
    {
      name: 'Mesa Enebe New Lander Indoor',
      price: '359,95 EUR',
      originalPrice: '420,00 EUR',
      discount: '-60,05 EUR',
      image: 'https://juguetelandia.co/tienda/5124-large_default/multijuegos-x-12-caja.jpg',
      category: 'Ofertas'
    },
    {
      name: 'Futbolin Pro Competicion',
      price: '249,95 EUR',
      originalPrice: '294,95 EUR',
      discount: '-45,00 EUR',
      image: 'https://m.media-amazon.com/images/I/91T8DfSm3HL.jpg',
      category: 'Ofertas'
    },
    {
      name: 'Mesa Billar Elite Outdoor',
      price: '595,00 EUR',
      originalPrice: '684,00 EUR',
      discount: '-89,00 EUR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJyfUmf7eK4qXrQCnEFOxLBz1i2VRyZ5LijQ&s',
      category: 'Ofertas'
    },
    {
      name: 'Air Hockey Profesional',
      price: '189,99 EUR',
      originalPrice: '224,99 EUR',
      discount: '-35,00 EUR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKkPW5uhPVBT-AnwBSfKy_MC24Fb3VEYu-xA&s',
      category: 'Ofertas'
    },
    {
      name: 'Canasta de Aire Pro',
      price: '119,99 EUR',
      originalPrice: '147,99 EUR',
      discount: '-28,00 EUR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4I0zkmuvbxloBahyl86ytMGC3eA9Mo_KAA&s',
      category: 'Ofertas'
    },
    {
      name: 'Porteria Futbol Mesa',
      price: '348,00 EUR',
      originalPrice: '400,00 EUR',
      discount: '-52,00 EUR',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWGWDRgzGogxv2Rd0VYgUU5tcRm5nkGciuQ&s',
      category: 'Ofertas'
    },
    {
      name: 'Trampolin Profesional',
      price: '425,00 EUR',
      originalPrice: '500,00 EUR',
      discount: '-75,00 EUR',
      image: 'https://dam.elcorteingles.es/producto/www-001059766300020-00.jpg?impolicy=Resize&width=1200&height=1200',
      category: 'Ofertas'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
