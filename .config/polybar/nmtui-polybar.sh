#!/bin/bash

# Registro para depuración
echo "$(date): Script ejecutado" >> /tmp/polybar-nmtui.log

# Abrir nmtui en tu emulador de terminal preferido
alacritty -e nmtui


# Exportar DISPLAY si no está definido
export DISPLAY=:0