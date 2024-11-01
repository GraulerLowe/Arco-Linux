#!/bin/bash

# Verifica si audtool está instalado
if ! command -v audtool &> /dev/null; then
    echo "audtool is not installed."
    exit 1
fi

get_audacious_song_linux() {
  artist=$(audtool --current-song-tuple-data artist)
  title=$(audtool --current-song-tuple-data title)
  echo "$artist - $title"
}

# Verifica si audacious está corriendo
if pgrep -x "audacious" > /dev/null; then
  status=$(audtool --playback-status)

  # Definir íconos según el estado
  if [ "$status" = "playing" ]; then
    icon=""  # Ícono de pausa
  elif [ "$status" = "paused" ]; then
    icon=""  # Ícono de play
  else
    icon=""  # Ícono de stop
  fi

  song=$(get_audacious_song_linux)

  # Acortar el nombre de la canción si es muy largo
  if [[ -n "$song" ]]; then
      if [ ${#song} -gt 30 ]; then
      song="${song:0:30}..."
    fi
    echo "$icon $song"  # Mostrar ícono y canción
  else
    echo "Paused."
  fi
else
  echo " -"
fi
