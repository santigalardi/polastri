// Número de WhatsApp del estudio: +54 9 11 6563-5552
// Formato wa.me: solo dígitos, sin signos ni espacios.
export const PHONE_NUMBER = '5491165635552';

const DEFAULT_MESSAGE = 'Hola María Laura, me gustaría hacerle una consulta.';

export const getWhatsAppLink = (customMessage?: string) => {
  const text = customMessage || DEFAULT_MESSAGE;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
};
