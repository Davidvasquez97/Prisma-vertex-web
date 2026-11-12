'use client';

import { useState } from 'react';
import Boton from './Boton';
import Revelar from './Revelar';
import {
  CALCULADORA,
  type CampoCalculadora,
  type DatosCalculadora,
} from '@/lib/contenido';
import estilos from './Calculadora.module.css';

const pesos = (n: number) => '$' + Math.round(n).toLocaleString('es-CO');
/* La pérdida se escribe en negativo («−$2.350.000») para que nadie la lea
   como un precio. Es el signo menos tipográfico, no un guion. */
const perdida = (n: number) => (n > 0 ? '−' : '') + pesos(n);
const redondeo = (n: number) => Math.round(n / 10_000) * 10_000;

/** El valor de una barra, escrito como se lee: «5 personas», «$2.500.000», «15 %». */
function texto(campo: CampoCalculadora, v: number) {
  if (campo.formato === 'pesos') return pesos(v);
  if (campo.formato === 'porcentaje') return `${v} %`;
  const [uno, varios] = campo.unidad ?? ['', ''];
  return `${v.toLocaleString('es-CO')} ${v === 1 ? uno : varios}`.trim();
}

/**
 * Los dos cálculos. Devuelve la pérdida del mes en pesos y la cifra que la
 * explica (horas al mes, o citas perdidas al mes).
 */
function calcular(d: DatosCalculadora, [a, b, c]: number[]) {
  if (d.tipo === 'horas') {
    // Valor legal de la hora más lo que le cuesta al empleador por encima del salario.
    const costoHora = (c * (d.factorPrestacional ?? 1.52)) / (d.divisorHoras ?? 210);
    const horasMes = Math.round(a * b * (d.semanasPorMes ?? 4.33));
    return { mes: redondeo(horasMes * costoHora), metrica: horasMes };
  }
  // Inasistencia: citas al día × días hábiles × porcentaje que no llega × valor.
  const perdidas = Math.round(a * (d.diasAlMes ?? 22) * (b / 100));
  return { mes: redondeo(perdidas * c), metrica: perdidas };
}

function Barra({
  id,
  campo,
  valor,
  onChange,
}: {
  id: string;
  campo: CampoCalculadora;
  valor: number;
  onChange: (v: number) => void;
}) {
  const lleno = ((valor - campo.min) / (campo.max - campo.min)) * 100;
  const leido = texto(campo, valor);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-menudo font-semibold">
          {campo.etiqueta}
        </label>
        <output
          htmlFor={id}
          className={`text-azul text-cuerpo shrink-0 font-semibold whitespace-nowrap ${estilos.cifra}`}
        >
          {leido}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={campo.min}
        max={campo.max}
        step={campo.paso}
        value={valor}
        aria-valuetext={leido}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`${estilos.barra} mt-2`}
        style={{ '--lleno': `${lleno}%` } as React.CSSProperties}
      />
    </div>
  );
}

/**
 * Calculadora de cuánto pierde un negocio. Sin argumentos es la del inicio
 * (tareas repetitivas); las páginas de nicho le pasan sus propios supuestos.
 */
export default function Calculadora({
  datos = CALCULADORA,
  href = '/diagnostico',
}: {
  datos?: DatosCalculadora;
  href?: string;
}) {
  const [valores, setValores] = useState<number[]>(datos.campos.map((c) => c.inicial));
  const cambia = (i: number) => (v: number) =>
    setValores((vs) => vs.map((x, j) => (j === i ? v : x)));

  const { mes, metrica } = calcular(datos, valores);
  const anio = redondeo(mes * 12);

  return (
    <section id="calculadora" className="bloque bg-perla">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1 max-w-[24ch]">{datos.titulo}</h2>
          <p className="text-guia text-gris medida mt-6">{datos.subtitulo}</p>
        </Revelar>

        <Revelar retraso={80}>
          <div className="mt-11 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
            <div className="tarjeta grid gap-8 px-6 py-8 md:px-9 md:py-10">
              {datos.campos.map((campo, i) => (
                <Barra
                  key={campo.etiqueta}
                  id={`calc-${i}`}
                  campo={campo}
                  valor={valores.at(i) ?? campo.inicial}
                  onChange={cambia(i)}
                />
              ))}
            </div>

            <div
              className={`tarjeta flex flex-col px-6 py-8 md:px-9 md:py-10 ${estilos.resultado}`}
              aria-live="polite"
            >
              <p className="text-rojo text-menudo flex items-center gap-2 font-semibold uppercase" style={{ letterSpacing: '0.08em' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 6l6 6 4-4 8 8" />
                  <path d="M21 10v6h-6" />
                </svg>
                Pérdida estimada
              </p>
              <p className="text-d2 mt-3 font-semibold">{datos.resultado}</p>
              <p
                className={`text-rojo mt-4 leading-none font-semibold whitespace-nowrap ${estilos.cifra} ${estilos.monto}`}
                style={{ '--largo': perdida(mes).length } as React.CSSProperties}
              >
                {perdida(mes)}
              </p>
              <p className="text-cuerpo text-gris mt-3">{datos.sufijo}</p>

              <dl className="filete mt-7 grid grid-cols-2 gap-5 pt-6">
                <div>
                  <dt className="text-menudo text-gris">{datos.metrica}</dt>
                  <dd className={`text-d3 mt-1 ${estilos.cifra}`}>
                    {metrica.toLocaleString('es-CO')}
                  </dd>
                </div>
                <div>
                  <dt className="text-menudo text-gris">Al año</dt>
                  <dd className={`text-d3 text-rojo mt-1 whitespace-nowrap ${estilos.cifra}`}>
                    {perdida(anio)}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 md:mt-auto md:pt-8">
                <Boton href={href} variante="calma" className="w-full">
                  {datos.boton}
                </Boton>
              </div>

              <p className="text-menudo text-gris mt-4">{datos.nota}</p>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
