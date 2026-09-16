import PaginaCiudad from '@/components/PaginaCiudad';
import { metaDe, migasJsonLd } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Consultoría empresarial en Popayán',
  descripcion:
    'Consultoría de procesos en Popayán: encontramos dónde se va el tiempo y el dinero de tu empresa y lo optimizamos. Diagnóstico presencial en el Cauca.',
  ruta: '/consultoria-procesos-popayan',
});

const migas = migasJsonLd([
  { nombre: 'Consultoría en Popayán', ruta: '/consultoria-procesos-popayan' },
]);

export default function Popayan() {
  return (
    <PaginaCiudad
      migas={migas}
      h1="Consultoría de procesos en Popayán"
      entrada="Somos de acá. El diagnóstico lo hacemos en tu oficina, viendo trabajar a tu equipo."
      parrafos={[
        'En Popayán la mayoría de las empresas medianas crecieron sumando personas, no procesos. Funciona hasta que deja de funcionar: el mismo dato se escribe tres veces, nadie sabe en qué va un pedido y las decisiones se toman por memoria.',
        'Trabajamos sobre esa realidad, no sobre un manual. Recorremos la operación contigo, medimos horas y costos reales, y te mostramos en pesos qué se puede ganar. Atendemos todo el Cauca de forma presencial.',
      ]}
    />
  );
}
