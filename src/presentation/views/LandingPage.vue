<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import SocialProofSection from '../components/SocialProofSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import BeforeAfterSection from '../components/BeforeAfterSection.vue';
import BenefitsSection from '../components/BenefitsSection.vue';
import ProcessSection from '../components/ProcessSection.vue';
import PromotionSection from '../components/PromotionSection.vue';
import LocationSection from '../components/LocationSection.vue';
import TestimonialsSection from '../components/TestimonialsSection.vue';
import FinalCTASection from '../components/FinalCTASection.vue';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton.vue';
</script>

<template>
  <main class="landing-page">
    <HeroSection />
    <SocialProofSection />
    <ServicesSection />
    <BeforeAfterSection />
    <BenefitsSection />
    <ProcessSection />
    <PromotionSection />
    <TestimonialsSection />
    <LocationSection />
    <FinalCTASection />
    
    <FloatingWhatsAppButton />
  </main>
</template>

<style scoped>
.landing-page {
  /* Using standard global variables from main.css */
  width: 100%;
}
</style>
