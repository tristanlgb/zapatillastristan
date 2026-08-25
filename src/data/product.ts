export type Product = {
  id: string
  name: string
  subtitle: string
  description: string
  priceLabel: string
  condition: string
  stockLabel: string
  mercadoLibreUrl: string
  features: string[]
}

export const featuredProduct: Product = {
  id: 'zt-001',
  name: 'Urban Run 2026',
  subtitle: 'Livianas · Versátiles · Listas para todos los días',
  description:
    'Comodidad que acompaña tu ritmo y una combinación para cada estilo. Elegí tu color favorito y estrená un par pensado para el uso diario.',
  priceLabel: 'Ver precio en MercadoLibre',
  condition: 'Producto nuevo',
  stockLabel: 'Stock disponible',
  mercadoLibreUrl:
    'https://www.mercadolibre.com.ar/up/MLAU4880470127?attributes=COLOR:MLAU4880470127&matt_tool=89488245&pdp_filters=item_id:MLA2026792649&ua=iOFucSei7K-VRH12Di9yrVmHKRf_7bF0HEZ1Zd7TBTBEUw#origin=share&sid=share&wid=MLA2026792649&action=copy',
  features: [
    'Talles disponibles: 39 al 44',
    'Terminaciones cuidadas',
    'Diseño cómodo y versátil',
    'Compra protegida por MercadoLibre',
  ],
}
