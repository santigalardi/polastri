/*
  Datos del sitio — Abogada Polastri
  Fuente: notas de la reunión de kickoff (12 may 2026).
  Los campos marcados con PENDIENTE deben completarse cuando la clienta
  envíe la información por el grupo de WhatsApp.
*/

export const site = {
  nombre: 'Abogada Polastri',
  abogada: 'María Laura Polastri',
  // Dominio propio en producción. Al cambiarlo, actualizar también `site` en
  // astro.config.mjs.
  dominio: 'estudiopolastri.com',
  tagline: 'Asesoramiento legal con compromiso y resultados.',
  descripcion:
    'Estudio jurídico especializado en sucesiones y derecho de familia. ' +
    'Acompañamiento cercano y personalizado en cada caso.',
  trayectoriaAnios: 24,
  // Teléfono / WhatsApp oficial (NAP — debe coincidir en todos los directorios).
  telefono: '+5491165635552',
  // PENDIENTE: email profesional propio (ej. consultas@polastri.com.ar). Por ahora
  // sin definir; no se publica un @gmail por recomendación del doc de SEO.
  email: '',
  // Reserva de turnos presenciales por Google Calendar (link enviado por la clienta).
  agendaTurnosUrl: 'https://calendar.app.google/8q5xxUcC2h2Af5487',
};

/* ───────── SEO por página ─────────
   Títulos y descripciones optimizados según el documento de estrategia SEO
   (mayo 2026): keywords primarias + geolocalización + diferencial + CTA.
   Title ≤ 60 car. ideal; description ≤ 160 car. */
export const seo = {
  home: {
    title: 'Abogada Polastri | Sucesiones y Familia · Tigre y Tres de Febrero',
    description:
      'Abogada con 24 años de ejercicio en sucesiones, divorcio y cuota ' +
      'alimentaria. Atención en Tigre y Santos Lugares. Posibilidad de financiar ' +
      'los gastos de la sucesión. Consultá sin cargo ni compromiso.',
  },
  publicaciones: {
    title: 'Publicaciones | Abogada Polastri',
    description:
      'Notas y artículos jurídicos sobre sucesiones, divorcios, cuota ' +
      'alimentaria y despidos en Argentina, en lenguaje claro y sin tecnicismos.',
  },
};

/* ───────── Redes sociales ─────────
   Enlaces confirmados por la clienta. */
export const redes = {
  instagram: 'https://www.instagram.com/abogadapolastri/',
  facebook: 'https://www.facebook.com/profile.php?id=61561715285332',
  linkedin: 'https://www.linkedin.com/in/abogadapolastri/',
};

/* ───────── Ubicaciones ─────────
   Las notas indican: no publicar la dirección exacta de Tigre (es domicilio
   particular). Solo se muestra la zona. */
export const ubicaciones = [
  {
    zona: 'Santos Lugares',
    partido: 'Partido de Tres de Febrero',
    horario: 'Martes y jueves de 10:00 a 16:30 h',
  },
  {
    zona: 'Tigre',
    partido: 'Provincia de Buenos Aires',
    horario: 'Lunes, miércoles y viernes, con horario a convenir',
  },
];
