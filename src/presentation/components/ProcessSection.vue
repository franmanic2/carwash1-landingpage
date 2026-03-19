<template>
  <section class="process-section section">
    <div class="container text-center">
      <h2 class="section-title">Tu Auto Impecable en <span>3 Pasos</span></h2>
      <p class="subtitle">Sin complicaciones ni esperas innecesarias.</p>

      <div class="stepper">
        <div class="step">
          <div class="step-circle">1</div>
          <h3>Agenda por WhatsApp</h3>
          <p>Escríbenos y reserva tu turno al instante. Sin llamadas ni formularios.</p>
        </div>

        <div class="step-connector"></div>

        <div class="step">
          <div class="step-circle accent">2</div>
          <h3>Trae tu auto o lo recogemos</h3>
          <p>Llega a nuestro centro en el horario acordado, o solicita recojo a domicilio.</p>
        </div>

        <div class="step-connector"></div>

        <div class="step">
          <div class="step-circle finish">3</div>
          <h3>Recíbelo como nuevo</h3>
          <p>Te avisamos cuando esté listo. Calidad showroom y garantía de servicio.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-section {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-surface-light);
  border-bottom: 1px solid var(--color-surface-light);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  margin-bottom: 4rem;
  margin-top: -1.5rem;
}

.stepper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 0 1rem;
}

.step-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--color-primary-dark);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  border: 4px solid var(--color-bg);
  box-shadow: 0 0 20px rgba(0, 122, 255, 0.4);
}

.step-circle.accent {
  background-color: var(--color-accent-dark);
  box-shadow: 0 0 20px rgba(255, 42, 42, 0.4);
}

.step-circle.finish {
  background-color: var(--color-success);
  box-shadow: 0 0 20px rgba(37, 211, 102, 0.4);
}

.step h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.step p {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.step-connector {
  flex-grow: 1;
  height: 4px;
  background: var(--color-surface-light);
  margin-top: 40px;
  z-index: 1;
}

@media (max-width: 768px) {
  .stepper {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  .step-connector {
    display: none;
  }
  .step {
    width: 100%;
  }
}
</style>
