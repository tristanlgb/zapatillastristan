type Props = {
  compact?: boolean
}

export function SneakerVisual({ compact = false }: Props) {
  return (
    <figure className={`product-visual${compact ? ' product-visual--compact' : ''}`}>
      <img src="/zapatillas-coleccion.png" alt="Colección de zapatillas urbanas en azul, negro, gris y rojo" />
      <div className="image-shade" />
      <figcaption className="visual-badge">
        <span>6 colores disponibles</span>
        <strong>35—44</strong>
      </figcaption>
    </figure>
  )
}
