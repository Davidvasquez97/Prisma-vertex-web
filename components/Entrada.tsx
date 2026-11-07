import Image from 'next/image';
import logo from '@/assets/prisma-logo.png';
import estilos from './Entrada.module.css';

/**
 * Se ejecuta antes de que se dibuje la cortina (va justo encima en el HTML).
 *
 * - Si ya se vio en esta visita, o el sistema pide menos movimiento, la
 *   cortina no llega a aparecer.
 * - Un clic o una tecla la saltan.
 * - A los 3,1 s queda marcada como vista: si el visitante sale a otra página
 *   y vuelve al inicio sin recargar, no se repite.
 *
 * Todo va envuelto en try/catch porque sessionStorage puede estar bloqueado
 * (navegación privada en algunos navegadores). En ese caso se ve igual.
 */
const GUION = `(function(){
var d=document.documentElement;
try{
if(sessionStorage.getItem('pv-entrada')||matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('sin-entrada');return;}
sessionStorage.setItem('pv-entrada','1');
}catch(e){}
var fin=function(){d.classList.add('entrada-sale');setTimeout(function(){d.classList.add('sin-entrada');},300);};
addEventListener('pointerdown',fin,{once:true});
addEventListener('keydown',fin,{once:true});
setTimeout(function(){d.classList.add('sin-entrada');},3100);
})();`;

export default function Entrada() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: GUION }} />

      <div className={estilos.cortina} aria-hidden="true">
        <div className={estilos.escena}>
          <div className={estilos.centro}>
            <span className={estilos.haz} />
            <span className={estilos.espectro} />

            {/* El logo real, como moneda de dos caras: al girar nunca se ve
                en espejo. */}
            <div className={estilos.giro}>
              <div className={estilos.moneda}>
                <Image src={logo} alt="" priority sizes="150px" className={estilos.cara} />
                <Image
                  src={logo}
                  alt=""
                  sizes="150px"
                  loading="eager"
                  className={`${estilos.cara} ${estilos.dorso}`}
                />
              </div>
            </div>

            <span className={estilos.destello} />
          </div>

          <p className={estilos.nombre}>Prisma Vertex</p>
        </div>
      </div>
    </>
  );
}
