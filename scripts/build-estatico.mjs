// Compila el sitio como lo publica Cloudflare: páginas estáticas en out/.
//   npm run build:estatico     (es también el comando de build en Cloudflare)
//   npx serve out              (para mirarlo en este computador)
import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';

const r = spawnSync('npx', ['next', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, EXPORTAR_ESTATICO: '1' },
});
if (r.status !== 0) process.exit(r.status ?? 1);

/*
 * Arreglo de las precargas de Next.js 16 en exportación estática.
 *
 * Next guarda cada precarga en una carpeta, por ejemplo
 *   out/diagnostico/__next.diagnostico/__PAGE__.txt
 * pero el navegador la pide con puntos en vez de barras:
 *   out/diagnostico/__next.diagnostico.__PAGE__.txt
 * Sin este paso esas peticiones dan 404: la página funciona, pero la
 * navegación no se precarga y la consola se llena de errores. Aquí se copia
 * cada archivo a la ruta que se pide. Si una versión futura de Next lo
 * corrige, este paso no hace nada (las copias ya existirían).
 */
const OUT = 'out';
let copias = 0;

function recorrer(carpeta) {
  for (const nombre of readdirSync(carpeta)) {
    const ruta = join(carpeta, nombre);
    if (statSync(ruta).isDirectory()) {
      if (nombre.startsWith('__next.')) aplanar(ruta);
      else recorrer(ruta);
    }
  }
}

function aplanar(raiz) {
  const padre = dirname(raiz);
  const pila = [raiz];
  while (pila.length) {
    const actual = pila.pop();
    for (const nombre of readdirSync(actual)) {
      const ruta = join(actual, nombre);
      if (statSync(ruta).isDirectory()) {
        pila.push(ruta);
      } else {
        const plano = relative(padre, ruta).split(sep).join('.');
        const destino = join(padre, plano);
        if (!existsSync(destino)) {
          copyFileSync(ruta, destino);
          copias++;
        }
      }
    }
  }
}

recorrer(OUT);
console.log(`\n✓ Precargas acomodadas para Cloudflare: ${copias} archivos.`);
