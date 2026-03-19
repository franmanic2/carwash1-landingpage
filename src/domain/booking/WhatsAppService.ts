// Environment variables could be injected, but we'll use a constant for the landing MVP.
export const WHATSAPP_NUMBER = '51987654321'; // Replace with the real number

export class WhatsAppService {
  /**
   * Generates a WhatsApp API link with a prefilled message.
   * @param serviceName Optional specific service name to query.
   * @returns The generated url string.
   */
  static generateBookingLink(serviceName?: string): string {
    let message = 'Hola, quiero dejar mi auto como nuevo. Quiero más información sobre sus servicios.';
    
    if (serviceName) {
      message = `Hola, quiero agendar el servicio de *${serviceName}*. ¿Tienen disponibilidad?`;
    }

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }
}
