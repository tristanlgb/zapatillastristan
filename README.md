# Zapatillas Tristan

Ecommerce frontend realizado con React + TypeScript + Vite.

## Características

- Diseño premium, moderno y responsive.
- Producto destacado con CTA principal.
- Redirección de compra a MercadoLibre.
- Secciones de confianza, calidad y beneficios.
- Arquitectura preparada para agregar más productos.
- Sin checkout propio: el pago se procesa fuera del sitio.

## Ejecutar localmente

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Personalizar el producto

Editá `src/data/product.ts` para cambiar:

- nombre
- descripción
- link de MercadoLibre
- características
- estado/stock

La ilustración actual de la zapatilla es un SVG local y se encuentra en
`src/components/SneakerVisual.tsx`.
