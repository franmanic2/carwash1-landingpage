<script setup lang="ts">
import { ref, computed } from 'vue';

const sliderValue = ref(50);
const clipPathStyle = computed(() => `inset(0 0 0 ${sliderValue.value}%)`);
</script>

<template>
  <section class="before-after-section section">
    <div class="container text-center">
      <h2 class="section-title">Resultados Reales en <span>Cada Servicio</span></h2>
      <p class="subtitle">Desliza para ver la magia de un detallado profesional.</p>
      
      <div class="comparison-slider">
        <!-- After Image (Clean) - Base layer -->
        <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Auto Limpio" class="image-after" />
        
        <!-- Before Image (Dirty) - Clipped via CSS -->
        <img 
          src="https://images.unsplash.com/photo-1596541656837-de12282ad5b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Auto Sucio" 
          class="image-before" 
          :style="{ clipPath: clipPathStyle }" 
        />
        
        <!-- Range input to control the slide -->
        <input 
          type="range" 
          min="0" max="100" 
          v-model="sliderValue" 
          class="slider"
        >

        <div class="labels">
          <span class="label-after">Despues</span>
          <span class="label-before">Antes</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.before-after-section {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-surface-light);
  border-bottom: 1px solid var(--color-surface-light);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  margin-bottom: 3rem;
  margin-top: -1.5rem;
}

.comparison-slider {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 50vh;
  min-height: 400px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.image-after, .image-before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
}

.image-before {
  z-index: 1;
  /* Darken or add a sepia to pretend it's dirty since unsplash might not have exact matches */
  filter: sepia(0.6) brightness(0.6) contrast(1.2);
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  appearance: none;
  background: transparent;
  outline: none;
  margin: 0;
  cursor: ew-resize;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 6px;
  height: 500px;
  background: #fff;
  cursor: ew-resize;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  position: relative;
}

.slider::-moz-range-thumb {
  width: 6px;
  height: 100%;
  background: #fff;
  cursor: ew-resize;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  border: none;
}

/* Custom handles for webkit */
.slider::-webkit-slider-thumb::after {
  content: '◄►';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  border: 3px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}

.labels {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none;
  z-index: 1;
}

.label-before, .label-after {
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
