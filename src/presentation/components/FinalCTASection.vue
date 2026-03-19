<script setup lang="ts">
import { WhatsAppService } from '../../domain/booking/WhatsAppService';
const wppLink = WhatsAppService.generateBookingLink();
</script>

<template>
  <section class="final-cta-section section text-center">
    <div class="container animate-fade-up">
      <h2 class="cta-heading">Tu auto merece verse <span class="text-gradient">como nuevo</span></h2>
      <p class="cta-subheading">Agenda tu cita hoy y experimenta el nivel <strong>ProCar</strong>.</p>
      
      <a :href="wppLink" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-massive animate-float">
        Reservar por WhatsApp
      </a>
    </div>
  </section>
</template>

<style scoped>
.final-cta-section {
  background: linear-gradient(180deg, var(--color-bg) 0%, rgba(0, 122, 255, 0.1) 100%);
  padding: 8rem 1rem;
  border-top: 1px solid var(--color-surface-light);
  position: relative;
  overflow: hidden;
}

.final-cta-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}

.cta-heading {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  color: #fff;
  text-transform: uppercase;
}

.cta-subheading {
  font-size: 1.3rem;
  color: var(--color-text-muted);
  margin-bottom: 3.5rem;
  font-weight: 300;
}

.btn-massive {
  font-size: 1.5rem;
  padding: 24px 48px;
  border-radius: 50px;
  font-weight: 800;
  letter-spacing: 1px;
  box-shadow: 0 10px 40px rgba(37, 211, 102, 0.5);
  background-color: var(--color-success);
  color: white;
}

.btn-massive:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(37, 211, 102, 0.7);
}
</style>
