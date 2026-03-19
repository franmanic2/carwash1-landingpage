<script setup lang="ts">
// Using static data for the MVP proof. Can be moved to domain later if complex.
const stats = [
  { value: '500+', label: 'Clientes Satisfechos' },
  { value: '1,200', label: 'Autos Lavados' },
  { value: '4.9/5', label: 'Estrellas Promedio' }
];
</script>

<template>
  <section class="social-proof-section section">
    <div class="container animate-fade-up">

      <div class="stars-box">
        <span class="stars">★★★★★</span>
        <span class="clients-text">Más de 500 clientes satisfechos</span>
      </div>

      <div class="mini-reviews">
        <div class="review-badge">
          <p>"Me dejaron el auto impecable en 40 min."</p>
          <span>- Juan P.</span>
        </div>
        <div class="review-badge">
          <p>"Excelente servicio, muy rápidos."</p>
          <span>- María G.</span>
        </div>
        <div class="review-badge hidden-mobile">
          <p>"El lavado de motor es espectacular."</p>
          <span>- Carlos L.</span>
        </div>
      </div>

      <div class="stats-grid mt-4">
        <div class="stat-item" v-for="(stat, index) in stats" :key="index">
          <h3 class="stat-value text-gradient">{{ stat.value }}</h3>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.social-proof-section {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-surface-light);
  padding: 3rem 1rem;
}

.stars-box {
  text-align: center;
  margin-bottom: 2rem;
}

.stars {
  color: #ffc107;
  font-size: 2rem;
  letter-spacing: 5px;
}

.clients-text {
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 0.5rem;
  color: var(--color-text);
  text-transform: uppercase;
}

.mini-reviews {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.review-badge {
  background: var(--color-surface-light);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border-left: 3px solid var(--color-primary);
  font-style: italic;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

.review-badge p {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #e4e4e7;
}

.review-badge span {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.stats-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  border-top: 1px solid var(--color-surface-light);
  padding-top: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hidden-mobile {
    display: none;
  }
}
</style>
