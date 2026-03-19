<template>
  <section class="benefits-section section">
    <div class="container">
      <h2 class="section-title">¿Por Qué Elegir <span>ProCar</span>?</h2>
      
      <div class="benefits-grid">
        <div class="benefit-item">
          <div class="check-icon">✔️</div>
          <div class="benefit-content">
            <h3>Protege la pintura de tu auto</h3>
            <p>Usamos ceras y selladores que crean una capa protectora contra el sol y la lluvia.</p>
          </div>
        </div>
        
        <div class="benefit-item">
          <div class="check-icon">✔️</div>
          <div class="benefit-content">
            <h3>Ahorra tiempo (Servicio rápido)</h3>
            <p>Optimizamos cada proceso para entregarte resultados impecables en tiempo récord.</p>
          </div>
        </div>

        <div class="benefit-item">
          <div class="check-icon">✔️</div>
          <div class="benefit-content">
            <h3>Productos profesionales</h3>
            <p>No usamos detergentes comunes. Solo marcas premium que cuidan los componentes de tu vehículo.</p>
          </div>
        </div>

        <div class="benefit-item">
          <div class="check-icon">✔️</div>
          <div class="benefit-content">
            <h3>Garantía de satisfacción</h3>
            <p>Si no quedas conforme con el nivel de limpieza o el servicio mecánico, lo arreglamos sin costo extra.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits-section {
  background-color: var(--color-bg);
  padding: 6rem 1rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background-color: var(--color-surface);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-surface-light);
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
}

.check-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  flex-shrink: 0;
  line-height: 1;
}

.benefit-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text);
}

.benefit-content p {
  color: var(--color-text-muted);
  line-height: 1.6;
}
</style>
