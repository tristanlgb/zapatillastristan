import { ArrowUpRight, BadgeCheck, ShieldCheck, ShoppingBag } from 'lucide-react'
import type { Product } from '../data/product'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  return (
    <article className="product-card">
      <div className="eyebrow">
        <BadgeCheck size={18} />
        Producto destacado
      </div>

      <h1>{product.name}</h1>
      <p className="product-subtitle">{product.subtitle}</p>
      <p className="product-description">{product.description}</p>

      <div className="size-callout" aria-label="Talles disponibles del 35 al 44">
        <span>Talles</span>
        <strong>35 al 44</strong>
      </div>

      <div className="product-meta">
        <span>{product.condition}</span>
        <span className="dot" />
        <span>{product.stockLabel}</span>
      </div>

      <ul className="feature-list">
        {product.features.map((feature) => (
          <li key={feature}>
            <ShieldCheck size={17} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        className="buy-button"
        href={product.mercadoLibreUrl}
        target="_blank"
        rel="noreferrer"
      >
        <ShoppingBag size={20} />
        Comprar en MercadoLibre
        <ArrowUpRight className="buy-arrow" size={20} />
      </a>

      <p className="price-note">{product.priceLabel}</p>
    </article>
  )
}
