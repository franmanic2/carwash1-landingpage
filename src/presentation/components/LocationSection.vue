<template>
  <section class="location-section section">
    <div class="container">
      <h2 class="section-title">Encuéntranos Aquí</h2>
      
      <div class="location-grid">
        <div class="location-info">
          <h3>ProCar Wash & Taller</h3>
          <p class="address">
            📍 <strong>Dirección:</strong> Av. Motors 1234, Zona Industrial, Distrito.
          </p>
          <div class="hours">
            <p>🕒 <strong>Horarios de Atención:</strong></p>
            <ul>
              <li>Lunes a Viernes: 8:00 AM - 6:00 PM</li>
              <li>Sábados: 8:00 AM - 4:00 PM</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
          <div class="contact-details mt-4">
            <p>📞 <strong>Teléfono:</strong> +51 987 654 321</p>
            <p>✉️ <strong>Email:</strong> contacto@procar.com</p>
          </div>
        </div>

        <div class="map-container">
          <!-- Embed Google Maps MVP iframe -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2spe!4v1700000000000!5m2!1sen!2spe" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="false" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.location-section {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-surface-light);
  border-bottom: 1px solid var(--color-surface-light);
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background-color: var(--color-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  border: 1px solid var(--color-surface-light);
}

.location-info {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.location-info h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  text-transform: uppercase;
}

.location-info p {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.hours ul {
  list-style: none;
  padding-left: 2rem;
  margin-top: 0.5rem;
}

.hours li {
  color: var(--color-text-muted);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  position: relative;
}

.hours li::before {
  content: '■';
  color: var(--color-primary);
  position: absolute;
  left: -1.5rem;
  font-size: 0.8rem;
  top: 2px;
}

.map-container {
  min-height: 400px;
}

.mt-4 {
  margin-top: 2rem;
}

@media (max-width: 900px) {
  .location-grid {
    grid-template-columns: 1fr;
  }
  .location-info {
    padding: 2rem;
  }
}
</style>
