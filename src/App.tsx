import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from 'lucide-react'
import { BrandMark } from './components/BrandMark'
import { ProductCard } from './components/ProductCard'
import { SneakerVisual } from './components/SneakerVisual'
import { featuredProduct } from './data/product'

function App() {
  const goToProduct = () => {
    document.getElementById('producto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <BrandMark />
        <nav aria-label="Navegación principal">
          <a href="#producto">Producto</a>
          <a href="#calidad">Calidad</a>
          <a href="#confianza">Confianza</a>
        </nav>
        <button className="header-cta" type="button" onClick={goToProduct}>
          Comprar
          <ArrowRight size={16} />
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="kicker">
              <Sparkles size={16} />
              Nueva colección 2026
            </div>
            <h2>
              Pisá fuerte.
              <span>Sentite cómodo.</span>
            </h2>
            <p>
              Zapatillas urbanas para todos los días. Elegí entre seis combinaciones y
              encontrá tu talle del 39 al 44.
            </p>
            <div className="hero-actions">
              <button className="primary-action" type="button" onClick={goToProduct}>
                Elegir mi par
                <ArrowRight size={18} />
              </button>
              <div className="rating">
                <span className="stars" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </span>
                <small>Tu próximo favorito está acá</small>
              </div>
            </div>
          </div>

          <SneakerVisual />
        </section>

        <section className="trust-strip" aria-label="Beneficios">
          <div>
            <ShieldCheck />
            <span>
              <strong>Compra protegida</strong>
              Operación vía MercadoLibre
            </span>
          </div>
          <div>
            <PackageCheck />
            <span>
              <strong>Talles 39 al 44</strong>
              Consultá disponibilidad
            </span>
          </div>
          <div>
            <Truck />
            <span>
              <strong>Envío gestionado</strong>
              Según condiciones de MercadoLibre
            </span>
          </div>
          <div>
            <LockKeyhole />
            <span>
              <strong>Pago seguro</strong>
              Sin datos sensibles en este sitio
            </span>
          </div>
        </section>

        <section className="product-section" id="producto">
          <div className="section-heading">
            <p>COLECCIÓN URBAN RUN</p>
            <h2>Un color para cada forma de moverte.</h2>
            <span>
              Seis combinaciones, el mismo nivel de comodidad. Miralas de cerca y elegí la tuya.
            </span>
          </div>

          <div className="product-showcase">
            <SneakerVisual compact />
            <ProductCard product={featuredProduct} />
          </div>
        </section>

        <section className="quality-section" id="calidad">
          <div className="quality-copy">
            <p className="section-label">POR QUÉ ELEGIRNOS</p>
            <h2>Comodidad que se nota.</h2>
            <p>
              Una selección pensada para acompañar jornadas largas, planes espontáneos y
              todo lo que pasa entre medio.
            </p>

            <div className="quality-points">
              <div>
                <CheckCircle2 />
                <span>
                  <strong>Selección cuidada</strong>
                  Seis combinaciones fáciles de sumar a tu estilo.
                </span>
              </div>
              <div>
                <CheckCircle2 />
                <span>
                  <strong>Tu talle, más fácil</strong>
                  Numeración disponible del 39 al 44.
                </span>
              </div>
            </div>
          </div>

          <div className="quality-panel">
            <span className="panel-number">39—44</span>
            <div>
              <small>HECHAS PARA TU RITMO</small>
              <p>Elegí el color. Encontrá tu talle. Salí a estrenarlas.</p>
            </div>
          </div>
        </section>

        <section className="confidence-section" id="confianza">
          <div>
            <p className="section-label">COMPRA CON CONFIANZA</p>
            <h2>Vos elegís. MercadoLibre procesa la compra.</h2>
          </div>
          <p>
            Cuando presionás “Comprar”, te dirigimos a la publicación correspondiente en
            MercadoLibre. El pago y las condiciones finales de la operación se realizan
            dentro de su plataforma.
          </p>
          <a
            className="secondary-action"
            href={featuredProduct.mercadoLibreUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ir a MercadoLibre
            <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer>
        <BrandMark />
        <p>© 2026 Zapatillas Tristan. Todos los derechos reservados.</p>
        <span>Calidad · Estilo · Confianza</span>
      </footer>
    </div>
  )
}

export default App
