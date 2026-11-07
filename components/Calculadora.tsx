'use client';

import { useState } from 'react';
import Boton from './Boton';
import Revelar from './Revelar';
import { CALCULADORA as C } from '@/lib/contenido';
import estilos from './Calculadora.module.css';

const pesos = (n: number) => '$' + Math.round(n).toLocaleString('es-CO');
const redondeo = (n: number) => Math.round(n / 10_000) * 10_000;

type Rango = { min: number; max: number; paso: number; inicial: number };

function Barra({
  id,
  etiqueta,
  rango,
  valor,
  texto,
  onChange,
}: {
  id: string;
  etiqueta: string;
  rango: Rango;
  valor: number;
  texto: string;
  onChange: (v: number) => void;
}) {
  const lleno = ((valor - rango.min) / (rango.max - rango.min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-menudo font-semibold">
          {etiqueta}
        </label>
        <output
          htmlFor={id}
          className={`text-azul text-cuerpo shrink-0 font-semibold whitespace-nowrap ${estilos.cifra}`}
        >
          {texto}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={rango.min}
        max={rango.max}
        step={rango.paso}
        value={valor}
        aria-valuetext={texto}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`${estilos.barra} mt-2`}
        style={{ '--lleno': `${lleno}%` } as React.CSSProperties}
      />
    </div>
  );
}

export default function Calculadora() {
  const [personas, setPersonas] = useState<number>(C.personas.inicial);
  const [horas, setHoras] = useState<number>(C.horas.inicial);
  const [salario, setSalario] = useState<number>(C.salario.inicial);

  // Valor legal de la hora más lo que le cuesta al empleador por encima del salario.
  const costoHora = (salario * C.factorPrestacional) / C.divisorHoras;
  const horasMes = Math.round(personas * horas * C.semanasPorMes);
  const mes = redondeo(horasMes * costoHora);
  const anio = redondeo(mes * 12);

  return (
    <section id="calculadora" className="bloque bg-perla">
      <div className="lienzo">
        <Revelar>
          <h2 className="text-d1 max-w-[24ch]">{C.titulo}</h2>
          <p className="text-guia text-gris medida mt-6">{C.subtitulo}</p>
        </Revelar>

        <Revelar retraso={80}>
          <div className="mt-11 grid gap-5 md:mt-14 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
            <div className="tarjeta grid gap-8 px-6 py-8 md:px-9 md:py-10">
              <Barra
                id="calc-personas"
                etiqueta="Personas que hacen tareas repetitivas"
                rango={C.personas}
                valor={personas}
                texto={`${personas} ${personas === 1 ? 'persona' : 'personas'}`}
                onChange={setPersonas}
              />
              <Barra
                id="calc-horas"
                etiqueta="Horas a la semana que cada una les dedica"
                rango={C.horas}
                valor={horas}
                texto={`${horas} ${horas === 1 ? 'hora' : 'horas'}`}
                onChange={setHoras}
              />
              <Barra
                id="calc-salario"
                etiqueta="Salario mensual promedio"
                rango={C.salario}
                valor={salario}
                texto={pesos(salario)}
                onChange={setSalario}
              />
            </div>

            <div
              className="tarjeta border-azul flex flex-col px-6 py-8 md:px-9 md:py-10"
              aria-live="polite"
            >
              <p className="text-menudo text-gris">Tu empresa pierde cerca de</p>
              <p className={`text-d0 text-azul mt-2 leading-none font-semibold ${estilos.cifra}`}>
                {pesos(mes)}
              </p>
              <p className="text-cuerpo text-gris mt-2">al mes</p>

              <dl className="filete mt-7 grid grid-cols-2 gap-5 pt-6">
                <div>
                  <dt className="text-menudo text-gris">Horas al mes</dt>
                  <dd className={`text-d3 mt-1 ${estilos.cifra}`}>
                    {horasMes.toLocaleString('es-CO')}
                  </dd>
                </div>
                <div>
                  <dt className="text-menudo text-gris">Al año</dt>
                  <dd className={`text-d3 mt-1 ${estilos.cifra}`}>{pesos(anio)}</dd>
                </div>
              </dl>

              <div className="mt-8 md:mt-auto md:pt-8">
                <Boton href="/diagnostico" variante="calma" className="w-full">
                  {C.boton}
                </Boton>
              </div>

              <p className="text-menudo text-gris mt-4">{C.nota}</p>
            </div>
          </div>
        </Revelar>
      </div>
    </section>
  );
}
