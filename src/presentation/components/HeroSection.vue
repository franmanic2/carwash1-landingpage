<script setup lang="ts">
import { WhatsAppService } from '../../domain/booking/WhatsAppService';

const wppLink = WhatsAppService.generateBookingLink();

const scrollToServices = () => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <section class="hero-section">
    <div class="video-background">
      <div class="overlay"></div>
      <img src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Carwash Background" class="bg-media" />
    </div>

    <div class="hero-content container animate-fade-up">
      <div class="hero-text-area">
        <h1 class="headline">
          Deja tu auto <span class="text-gradient">como nuevo</span> <br/> en menos de 1 hora
        </h1>
        <p class="subheadline">Lavado profesional y mantenimiento automotriz con garantía.</p>
        
        <div class="cta-group">
          <a :href="wppLink" target="_blank" rel="noopener noreferrer" class="btn btn-primary cta-main">
            Reservar Ahora (WhatsApp)
          </a>
          <button @click="scrollToServices" class="btn btn-secondary cta-secondary">
            Ver Servicios
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  overflow: hidden;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bg-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.05); /* slightly zoomed to allow subtle animations */
  animation: slowZoom 20s infinite alternate;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.6) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.hero-text-area {
  max-width: 700px;
}

.headline {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.subheadline {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: var(--color-text-muted);
  margin-bottom: 2.5rem;
  font-weight: 400;
  border-left: 4px solid var(--color-primary);
  padding-left: 1rem;
}

.cta-group {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-main {
  font-size: 1.2rem;
  padding: 16px 32px;
}

@keyframes slowZoom {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1.15);
  }
}

@media (max-width: 768px) {
  .hero-section {
    text-align: center;
    justify-content: center;
  }
  .subheadline {
    border-left: none;
    border-bottom: 4px solid var(--color-primary);
    padding-left: 0;
    padding-bottom: 1rem;
    display: inline-block;
  }
  .cta-group {
    justify-content: center;
    flex-direction: column;
  }
  .cta-main, .cta-secondary {
    width: 100%;
  }
}
</style>
