<script setup lang="ts">
import { computed } from 'vue';
import { servicesList } from '../../domain/services/ServicesData';
import { WhatsAppService } from '../../domain/booking/WhatsAppService';

const carwashServices = computed(() => servicesList.filter(s => s.category === 'carwash'));
const tallerServices = computed(() => servicesList.filter(s => s.category === 'taller'));

const getLink = (serviceName: string) => WhatsAppService.generateBookingLink(serviceName);
</script>

<template>
  <section id="services" class="services-section section">
    <div class="container">
      <h2 class="section-title">Nuestros <span>Servicios</span></h2>

      <div class="services-wrapper">
        <!-- Carwash Category -->
        <div class="category-block">
          <h3 class="category-title">Carwash Profesional</h3>
          <div class="cards-grid">
            <div 
              class="service-card" 
              v-for="service in carwashServices" 
              :key="service.id"
            >
              <div class="icon">{{ service.icon }}</div>
              <h4 class="card-title">{{ service.title }}</h4>
              <p class="price">Desde <strong>S/ {{ service.priceStart }}</strong></p>
              <a :href="getLink(service.title)" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-full">Reservar</a>
            </div>
          </div>
        </div>

        <!-- Taller Category -->
        <div class="category-block mt-5">
          <h3 class="category-title accent">Taller Mecánico</h3>
          <div class="cards-grid">
            <div 
              class="service-card border-accent" 
              v-for="service in tallerServices" 
              :key="service.id"
            >
              <div class="icon">{{ service.icon }}</div>
              <h4 class="card-title">{{ service.title }}</h4>
              <p class="price">Desde <strong>S/ {{ service.priceStart }}</strong></p>
              <a :href="getLink(service.title)" target="_blank" rel="noopener noreferrer" class="btn btn-accent w-full">Reservar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background-color: var(--color-bg);
}

.category-block {
  margin-bottom: 4rem;
}

.category-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  border-left: 5px solid var(--color-primary);
  padding-left: 1rem;
  text-transform: uppercase;
}

.category-title.accent {
  border-left-color: var(--color-accent);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  background-color: var(--color-surface);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--color-surface-light);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 122, 255, 0.15);
  border-color: var(--color-primary);
}

.service-card.border-accent:hover {
  box-shadow: 0 10px 30px rgba(255, 42, 42, 0.15);
  border-color: var(--color-accent);
}

.icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.price {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
}

.price strong {
  font-size: 1.5rem;
  color: var(--color-text);
}

.w-full {
  width: 100%;
}

.mt-5 {
  margin-top: 5rem;
}

@media (max-width: 768px) {
  .category-title {
    font-size: 1.5rem;
  }
}
</style>
