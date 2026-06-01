import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Colección "publicaciones" — el blog jurídico del estudio.
  Cada publicación es un archivo Markdown en src/content/publicaciones/.
  Laura las crea/edita desde el panel /admin (Decap CMS), que escribe estos
  mismos archivos y los commitea al repositorio.

  Modelo inspirado en la referencia (Beccar Varela): la nota web muestra una
  introducción y, en "Seguir leyendo", enlaza al PDF con el artículo completo.
*/
const publicaciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publicaciones' }),
  schema: () =>
    z.object({
      titulo: z.string(),
      fecha: z.date(),
      // Categoría visible en la pill (ej. "Artículos", "Sucesiones", "Familia").
      categoria: z.string().default('Artículos'),
      // Resumen corto para el listado y los metadatos SEO.
      resumen: z.string(),
      // Autor/a — por defecto la abogada del estudio.
      autor: z.string().default('María Laura Polastri'),
      // Imagen de portada opcional. Es una ruta pública (ej. /uploads/foto.jpg)
      // porque el CMS (Decap) sube los archivos a public/uploads/ y los
      // referencia así. Se muestra con un <img> normal, sin procesar por el build.
      portada: z.string().optional(),
      // Fuente/publicación de origen, opcional (ej. "Revista Derecho del Trabajo").
      fuente: z.string().optional(),
      // PDF con el artículo completo — el enlace de "Seguir leyendo".
      pdf: z.string().optional(),
      // Permite ocultar borradores del listado público.
      borrador: z.boolean().default(false),
    }),
});

export const collections = { publicaciones };
