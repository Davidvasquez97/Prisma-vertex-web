import PaginaCiudad from '@/components/PaginaCiudad';
import { metaDe, migasJsonLd } from '@/lib/seo';

export const metadata = metaDe({
  titulo: 'Consultoría de procesos en Bogotá',
  descripcion:
    'Consultoría de procesos en Bogotá: medimos tu operación, te mostramos cuánto puedes ganar y lo implementamos. Remoto, con visitas cuando hacen falta.',
  ruta: '/consultoria-procesos-bogota',
});

const migas = migasJsonLd([
  { nombre: 'Consultoría en Bogotá', ruta: '/consultoria-procesos-bogota' },
]);

export default function Bogota() {
  return (
    <PaginaCiudad
      migas={migas}
      h1="Consultoría de procesos en Bogotá"
      entrada="Trabajamos con empresas de Bogotá en remoto, y viajamos cuando el proceso hay que verlo en piso."
      parrafos={[
        'En Bogotá el problema rara vez es falta de herramientas: es que hay demasiadas y ninguna se habla con la otra. Tres sistemas, cinco hojas de cálculo y un grupo de WhatsApp haciendo de pegamento.',
        'Nuestro trabajo empieza por medir, no por instalar. Sesiones en video con las personas que ejecutan el proceso, cifras de horas y costos antes de proponer nada, y visita presencial cuando lo que hay que entender está en la planta o en la bodega.',
      ]}
    />
  );
}
