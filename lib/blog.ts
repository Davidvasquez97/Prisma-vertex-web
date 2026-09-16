import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

/**
 * Colección de contenido del blog, leída del disco en el build.
 *
 * Cada artículo es un archivo .md en `contenido/blog/` con una cabecera
 * sencilla entre dos líneas de tres guiones:
 *
 *     ---
 *     titulo: Cómo saber si tu equipo está perdiendo horas
 *     descripcion: Tres señales que se ven antes de medir nada.
 *     fecha: 2026-10-02
 *     ---
 *
 *     El cuerpo, en Markdown normal.
 *
 * El nombre del archivo es la URL: `mi-articulo.md` queda en
 * `/blog/mi-articulo`. No hay que registrar nada en ningún índice.
 */

const CARPETA = path.join(process.cwd(), 'contenido', 'blog');

export type Articulo = {
  slug: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  cuerpoHtml: string;
};

/** Lee la cabecera y el cuerpo de un archivo .md. */
function separar(bruto: string): { cabecera: Record<string, string>; cuerpo: string } {
  const cabecera: Record<string, string> = {};
  const texto = bruto.replace(/^﻿/, '');

  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { cabecera, cuerpo: texto };

  for (const linea of m[1].split(/\r?\n/)) {
    const dosPuntos = linea.indexOf(':');
    if (dosPuntos === -1) continue;
    const clave = linea.slice(0, dosPuntos).trim();
    const valor = linea
      .slice(dosPuntos + 1)
      .trim()
      .replace(/^["']|["']$/g, '');
    if (clave) cabecera[clave] = valor;
  }

  return { cabecera, cuerpo: texto.slice(m[0].length) };
}

/** Todos los artículos, del más nuevo al más viejo. */
export function articulos(): Articulo[] {
  if (!fs.existsSync(CARPETA)) return [];

  return fs
    .readdirSync(CARPETA)
    .filter((f) => f.endsWith('.md'))
    .map((archivo) => {
      const bruto = fs.readFileSync(path.join(CARPETA, archivo), 'utf8');
      const { cabecera, cuerpo } = separar(bruto);
      const slug = archivo.replace(/\.md$/, '');

      return {
        slug,
        titulo: cabecera.titulo ?? slug,
        descripcion: cabecera.descripcion ?? '',
        fecha: cabecera.fecha ?? '',
        cuerpoHtml: marked.parse(cuerpo, { async: false }) as string,
      };
    })
    .sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function articulo(slug: string): Articulo | undefined {
  return articulos().find((a) => a.slug === slug);
}

/** Fecha legible en español, sin depender de una librería. */
export function fechaLarga(iso: string): string {
  if (!iso) return '';
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
