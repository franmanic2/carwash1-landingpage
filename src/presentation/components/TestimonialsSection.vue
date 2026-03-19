<template>
  <section class="testimonials-section section">
    <div class="container text-center">
      <h2 class="section-title">Lo que dicen <span>Nuestros Clientes</span></h2>
      <p class="subtitle">La confianza no se compra, se gana con resultados reales en cada servicio.</p>
      
      <div class="testimonials-grid">
        <!-- Testimonial 1 -->
        <div class="testimonial-card">
          <div class="avatar">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Cliente 1" />
          </div>
          <div class="t-content">
            <span class="stars">★★★★★</span>
            <p class="t-text">"Tenía el auto lleno de manchas de agua dura y pensé que tendría que pulir todo con un costo enorme. Aquí me hicieron un detallado impecable. Mi auto parece recién salido de la concesionaria. ¡Excelente inversión!"</p>
            <h4 class="t-name">Ricardo Gómez</h4>
            <span class="t-service">Servicio: Detallado Completo</span>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="testimonial-card accent-border">
          <div class="avatar">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Cliente 2" />
          </div>
          <div class="t-content">
            <span class="stars">★★★★★</span>
            <p class="t-text">"Vine por un cambio de aceite rápido porque estaba apurada. Me atendieron en el momento exacto que agendé por WhatsApp. Sala de espera muy cómoda y los mecánicos fueron súper transparentes con el diagnóstico."</p>
            <h4 class="t-name">Ana Fernández</h4>
            <span class="t-service">Servicio: Cambio de Aceite</span>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="testimonial-card">
          <div class="avatar">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Cliente 3" />
          </div>
          <div class="t-content">
            <span class="stars">★★★★★</span>
            <p class="t-text">"Dejé mi camioneta llena de barro y arena después de un viaje. El lavado premium sí valió la pena; lograron sacar la mugre de lugares que otros lavaderos ignoran. Totalmente recomendados."</p>
            <h4 class="t-name">Martín López</h4>
            <span class="t-service">Servicio: Lavado Premium</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  background-color: var(--color-bg);
  padding: 6rem 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  margin-bottom: 4rem;
  margin-top: -1.5rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
}

.testimonial-card {
  background-color: var(--color-surface);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  position: relative;
  text-align: center;
  border-top: 4px solid var(--color-primary);
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 122, 255, 0.2);
}

.testimonial-card.accent-border {
  border-top-color: var(--color-accent);
}

.testimonial-card.accent-border:hover {
  box-shadow: 0 15px 30px rgba(255, 42, 42, 0.2);
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin: -4rem auto 1rem;
  border: 4px solid var(--color-bg);
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.t-content .stars {
  color: #ffc107;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: block;
}

.t-text {
  font-size: 1.05rem;
  color: var(--color-text);
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.t-text::before {
  content: '“';
  font-size: 3rem;
  color: var(--color-surface-light);
  line-height: 0;
  vertical-align: middle;
  margin-right: 5px;
}

.t-name {
  font-size: 1.2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.t-service {
  font-size: 0.85rem;
  color: var(--color-primary);
  font-weight: 600;
}

.accent-border .t-service {
  color: var(--color-accent);
}
</style>
