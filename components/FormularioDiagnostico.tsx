'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { FORMULARIO_ENDPOINT, MODO_VISTA_PREVIA } from '@/lib/config';
import estilos from './FormularioDiagnostico.module.css';

type Campos = {
  nombre: string;
  empresa: string;
  whatsapp: string;
  reto: string;
  autoriza: boolean;
};

const VACIO: Campos = {
  nombre: '',
  empresa: '',
  whatsapp: '',
  reto: '',
  autoriza: false,
};

/**
 * El formulario está apagado si no hay a dónde enviar, o si el sitio todavía
 * es una maqueta. Nunca finge: si no puede enviar, lo dice antes de que
 * alguien se tome el trabajo de llenarlo.
 */
const ACTIVO = !MODO_VISTA_PREVIA && FORMULARIO_ENDPOINT !== '';

function validar(c: Campos): Partial<Record<keyof Campos, string>> {
  const e: Partial<Record<keyof Campos, string>> = {};

  if (c.nombre.trim().length < 2) e.nombre = 'Escribe tu nombre.';
  if (c.empresa.trim().length < 2) e.empresa = 'Escribe el nombre de tu empresa.';

  // Colombia: 10 dígitos, o 12 si viene con el 57 adelante.
  const digitos = c.whatsapp.replace(/[^0-9]/g, '');
  const bien = digitos.length === 10 || (digitos.length === 12 && digitos.startsWith('57'));
  if (!bien) e.whatsapp = 'Un número de WhatsApp de 10 dígitos.';

  if (c.reto.trim().length < 10) e.reto = 'Cuéntanos en una frase, aunque sea corta.';

  if (!c.autoriza) e.autoriza = 'Necesitamos tu autorización para contactarte.';

  return e;
}

export default function FormularioDiagnostico() {
  const [campos, setCampos] = useState<Campos>(VACIO);
  const [errores, setErrores] = useState<Partial<Record<keyof Campos, string>>>({});
  const [estado, setEstado] = useState<'quieto' | 'enviando' | 'listo' | 'falla'>('quieto');
  const formRef = useRef<HTMLFormElement>(null);

  function cambia<K extends keyof Campos>(clave: K, valor: Campos[K]) {
    setCampos((c) => ({ ...c, [clave]: valor }));
    // El error de un campo se borra en cuanto lo tocas: no se regaña dos veces.
    if (errores[clave]) setErrores((e) => ({ ...e, [clave]: undefined }));
  }

  async function enviar(ev: React.FormEvent) {
    ev.preventDefault();

    const e = validar(campos);
    setErrores(e);

    const fallos = Object.keys(e);
    if (fallos.length > 0) {
      // El foco va al primer campo con problema, no al principio del formulario.
      const selector = '[name="' + fallos[0] + '"]';
      formRef.current?.querySelector<HTMLElement>(selector)?.focus();
      return;
    }

    setEstado('enviando');
    try {
      const r = await fetch(FORMULARIO_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: campos.nombre,
          empresa: campos.empresa,
          whatsapp: campos.whatsapp,
          reto: campos.reto,
        }),
      });
      if (!r.ok) throw new Error(String(r.status));
      setEstado('listo');
      setCampos(VACIO);
    } catch {
      setEstado('falla');
    }
  }

  if (estado === 'listo') {
    return (
      <div className={'tarjeta ' + estilos.confirma + ' px-6 py-9 md:px-9'} role="status">
        <p className="text-d3">Recibimos tu solicitud.</p>
        <p className="text-cuerpo text-gris mt-3">
          Te escribimos por WhatsApp para coordinar el diagnóstico.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={enviar} noValidate className="max-w-[34rem]">
      <fieldset disabled={!ACTIVO} className="grid gap-5">
        <legend className="sr-only">Solicitud de diagnóstico</legend>

        <Campo
          nombre="nombre"
          etiqueta="Tu nombre"
          valor={campos.nombre}
          error={errores.nombre}
          onChange={(v) => cambia('nombre', v)}
          autoComplete="name"
        />

        <Campo
          nombre="empresa"
          etiqueta="Tu empresa"
          valor={campos.empresa}
          error={errores.empresa}
          onChange={(v) => cambia('empresa', v)}
          autoComplete="organization"
        />

        <Campo
          nombre="whatsapp"
          etiqueta="Tu WhatsApp"
          tipo="tel"
          marcador="300 123 4567"
          valor={campos.whatsapp}
          error={errores.whatsapp}
          onChange={(v) => cambia('whatsapp', v)}
          autoComplete="tel-national"
        />

        <Campo
          nombre="reto"
          etiqueta="¿Qué le quita más tiempo a tu equipo?"
          area
          valor={campos.reto}
          error={errores.reto}
          onChange={(v) => cambia('reto', v)}
        />

        <div>
          <label className="text-menudo text-gris flex items-start gap-3">
            <input
              type="checkbox"
              name="autoriza"
              checked={campos.autoriza}
              onChange={(ev) => cambia('autoriza', ev.target.checked)}
              aria-invalid={errores.autoriza ? true : undefined}
              aria-describedby={errores.autoriza ? 'error-autoriza' : undefined}
              className="accent-azul mt-1 h-[18px] w-[18px] shrink-0"
            />
            <span>
              Autorizo a Prisma Vertex a tratar mis datos para contactarme, según la
              Ley 1581 de 2012.{' '}
              <Link
                href="/politica-de-datos"
                className="text-azul underline underline-offset-4"
              >
                Política de datos
              </Link>
              .
            </span>
          </label>
          {errores.autoriza && (
            <p id="error-autoriza" role="alert" className="text-menudo mt-2 text-[#c0392b]">
              {errores.autoriza}
            </p>
          )}
        </div>

        <div className="mt-1">
          <button
            type="submit"
            className={'boton w-full sm:w-auto ' + (ACTIVO ? 'boton-solido' : 'boton-espera')}
          >
            {estado === 'enviando' ? 'Enviando…' : 'Enviar solicitud'}
          </button>
        </div>
      </fieldset>

      {estado === 'falla' && (
        <p role="alert" className="text-cuerpo mt-5 text-[#c0392b]">
          No pudimos enviar la solicitud. Inténtalo otra vez o escríbenos por WhatsApp.
        </p>
      )}

      {!ACTIVO && (
        <p className="text-menudo text-gris mt-5 max-w-[44ch]">
          {MODO_VISTA_PREVIA
            ? 'El formulario está completo pero apagado: el sitio es una vista previa y todavía no recibe solicitudes.'
            : 'Falta conectar el destino del formulario. Se habilita al definir el endpoint de envío.'}
        </p>
      )}
    </form>
  );
}

/* ------------------------------------------------------------------ */

function Campo({
  nombre,
  etiqueta,
  valor,
  error,
  onChange,
  tipo = 'text',
  marcador,
  area = false,
  autoComplete,
}: {
  nombre: string;
  etiqueta: string;
  valor: string;
  error?: string;
  onChange: (v: string) => void;
  tipo?: string;
  marcador?: string;
  area?: boolean;
  autoComplete?: string;
}) {
  const idError = 'error-' + nombre;
  const comun = {
    id: nombre,
    name: nombre,
    value: valor,
    placeholder: marcador,
    autoComplete,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? idError : undefined,
    onChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(ev.target.value),
  };

  return (
    <div>
      <label htmlFor={nombre} className="text-menudo block font-semibold">
        {etiqueta}
      </label>
      <div className="mt-2">
        {area ? (
          <textarea {...comun} rows={4} className={estilos.campo + ' ' + estilos.area} />
        ) : (
          <input {...comun} type={tipo} className={estilos.campo} />
        )}
      </div>
      {error && (
        <p id={idError} role="alert" className="text-menudo mt-2 text-[#c0392b]">
          {error}
        </p>
      )}
    </div>
  );
}
