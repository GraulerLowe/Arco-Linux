#!/usr/bin/env bash

# Termina todas las instancias de Polybar
killall -q polybar

# Espera hasta que las instancias sean terminadas
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Lanza Polybar usando la configuración predeterminada
polybar mybar &
polybar top &
