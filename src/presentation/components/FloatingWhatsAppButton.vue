<script setup lang="ts">
import { WhatsAppService } from '../../domain/booking/WhatsAppService';

const link = WhatsAppService.generateBookingLink();
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="floating-whatsapp">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
    <span class="tooltip">Agenda por WhatsApp</span>
  </a>
</template>

<style scoped>
.floating-whatsapp {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: var(--color-success);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
  z-index: 1000;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.floating-whatsapp:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
}

.floating-whatsapp svg {
  width: 32px;
  height: 32px;
}

.tooltip {
  position: absolute;
  right: 75px;
  background-color: #333;
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  white-space: nowrap;
}

.floating-whatsapp:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
</style>
