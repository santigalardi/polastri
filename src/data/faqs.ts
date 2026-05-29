/*
  Preguntas frecuentes — fuente única.
  Las usa la sección FAQ (src/components/sections/Faq.astro) y el JSON-LD de
  schema FAQPage (src/components/SeoSchema.astro), para no duplicar el contenido.
  Las respuestas se apoyan solo en lo conversado: áreas de práctica, financiación
  de sucesiones, modalidad de atención y canal de contacto por WhatsApp.
  No se mencionan precios ni honorarios concretos.
*/
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: '¿En qué temas puede ayudarme el estudio?',
    a: 'El estudio se enfoca principalmente en sucesiones y derecho de familia —divorcios con liquidación de bienes y cuotas alimentarias—. También asesora en temas inmobiliarios y de derecho laboral.',
  },
  {
    q: '¿Cómo funciona la financiación de la sucesión?',
    a: 'Si tiene una propiedad para vender y no puede afrontar los gastos del proceso sucesorio en este momento, el estudio adelanta esos gastos. Los honorarios se abonan recién cuando la propiedad se vende. Lo ideal es conversar su caso para ver cómo aplicarlo.',
  },
  {
    q: '¿La atención es presencial o también online?',
    a: 'Ambas. Puede elegir una entrevista presencial en los puntos de atención o una consulta de forma remota, según lo que le quede más cómodo.',
  },
  {
    q: '¿Dónde atiende el estudio?',
    a: 'Hay atención en Santos Lugares (Partido de Tres de Febrero) los martes y jueves, y en la zona de Tigre los lunes, miércoles y viernes con horario a convenir.',
  },
  {
    q: '¿Cuánto tarda una sucesión en la Provincia de Buenos Aires?',
    a: 'Los tiempos varían según la complejidad del caso y la carga del juzgado, pero en términos generales un proceso sin conflictos puede resolverse en aproximadamente 4 a 7 meses. En la primera consulta le doy una estimación ajustada a su situación concreta.',
  },
  {
    q: '¿Puedo iniciar la sucesión si no tengo los documentos completos?',
    a: 'Sí. En la consulta inicial evaluamos qué documentación hay disponible y cómo suplir lo que falta. No es necesario tenerlo todo antes de dar el primer paso.',
  },
  {
    q: '¿Atiende casos en todo el país o solo en Buenos Aires?',
    a: 'Mi actuación principal es en la Provincia de Buenos Aires y CABA. Para otros distritos, en la consulta analizamos la viabilidad y, si corresponde, coordino con colegas de la jurisdicción.',
  },
  {
    q: '¿Cómo hago una consulta?',
    a: 'El canal más directo es WhatsApp. Escríbanos contando brevemente su situación y le respondemos para coordinar los próximos pasos.',
  },
];
