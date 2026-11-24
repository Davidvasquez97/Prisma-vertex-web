#!/usr/bin/env bash
# Publica el sitio en el VPS de Contabo.
#   bash scripts/publicar-vps.sh
#
# 1. Compila las páginas estáticas (npm run build:estatico → out/).
# 2. Las sube a /var/www/prismavertex en una carpeta nueva y cambia el enlace
#    de golpe: nadie ve una página a medio subir.
# 3. Instala deploy/Caddyfile y recarga Caddy sin cortar el servicio.
#
# Entra con la llave ~/.ssh/prismavertex_vps (sin contraseña).
set -euo pipefail

SERVIDOR="root@185.176.253.22"
LLAVE="$HOME/.ssh/prismavertex_vps"
SSH="ssh -i $LLAVE -o IdentitiesOnly=yes -o BatchMode=yes"
VERSION="$(date +%Y%m%d-%H%M%S)"

cd "$(dirname "$0")/.."

if [ "${1:-}" != "--sin-build" ]; then
  npm run build:estatico
fi
test -f out/index.html || { echo "No existe out/index.html: falló el build."; exit 1; }

echo "→ Subiendo versión $VERSION"
tar -C out -czf - . | $SSH "$SERVIDOR" "
  set -e
  mkdir -p /var/www/versiones/$VERSION
  tar -xzf - -C /var/www/versiones/$VERSION
  chown -R caddy:caddy /var/www/versiones/$VERSION
  ln -sfn /var/www/versiones/$VERSION /var/www/prismavertex.nuevo
  mv -Tf /var/www/prismavertex.nuevo /var/www/prismavertex
  # Se guardan las 5 versiones más recientes, por si hay que volver atrás.
  ls -1dt /var/www/versiones/* | tail -n +6 | xargs -r rm -rf
"

echo "→ Configurando Caddy"
$SSH "$SERVIDOR" "cat > /etc/caddy/Caddyfile.nuevo" < deploy/Caddyfile
$SSH "$SERVIDOR" "
  set -e
  caddy validate --config /etc/caddy/Caddyfile.nuevo --adapter caddyfile >/dev/null
  mv /etc/caddy/Caddyfile.nuevo /etc/caddy/Caddyfile
  systemctl reload caddy
"

echo "✓ Publicado: versión $VERSION"
