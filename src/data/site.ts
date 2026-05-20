/*
  Datos del sitio — Abogada Polastri
  Fuente: notas de la reunión de kickoff (12 may 2026).
  Los campos marcados con PENDIENTE deben completarse cuando la clienta
  envíe la información por el grupo de WhatsApp.
*/

export const site = {
  nombre: 'Abogada Polastri',
  abogada: 'María Laura Polastri',
  // PENDIENTE: confirmar dominio con la clienta (studiopolastri vs estudiopolastri).
  dominio: 'studiopolastri.com.ar',
  tagline: 'Asesoramiento legal con compromiso y resultados.',
  descripcion:
    'Estudio jurídico especializado en sucesiones y derecho de familia. ' +
    'Acompañamiento cercano y personalizado en cada caso.',
  trayectoriaAnios: 24,
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
    horario: 'Resto de la semana, con horario a convenir',
  },
];
