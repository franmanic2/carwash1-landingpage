<script setup lang="ts">
import { WhatsAppService } from '../../domain/booking/WhatsAppService';
const wppLinkPromo = WhatsAppService.generateBookingLink('Promo 10% Descuento');
</script>

<template>
  <section class="promo-section section">
    <div class="promo-banner container text-center">
      <h2 class="promo-title">10% de Descuento<br/>en tu Primera Visita</h2>
      <p class="promo-subtitle">⏳ Solo válido por esta semana</p>
      
      <div class="promo-cta">
        <a :href="wppLinkPromo" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-large animate-float">
          Aprovechar Oferta Ahora
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.promo-section {
  background-color: var(--color-bg);
  padding: 4rem 1rem;
}

.promo-banner {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, #001f46 100%);
  padding: 4rem 2rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 122, 255, 0.3);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-primary);
}

.promo-banner::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,42,42,0.15) 0%, transparent 60%);
  z-index: 0;
  pointer-events: none;
}

.promo-title, .promo-subtitle, .promo-cta {
  position: relative;
  z-index: 1;
}

.promo-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1rem;
  text-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

.promo-subtitle {
  font-size: 1.5rem;
  color: #ffd700;
  font-weight: 700;
  margin-bottom: 3rem;
  letter-spacing: 1px;
}

.btn-large {
  font-size: 1.3rem;
  padding: 20px 40px;
  border-radius: 50px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
  .promo-banner {
    padding: 3rem 1.5rem;
  }
}
</style>
