#!/bin/bash

# Obtener el nombre de la interfaz conectada (wlan0 o eth0)
wifi_interface="wlan0"
eth_interface="eth0"

# Verificar si hay conexión de red y cuál está activa
if ip link show $wifi_interface | grep -q "state UP"; then
    # Wi-Fi está conectado: obtener SSID
    ssid=$(iwgetid -r)  # obtiene el SSID de la red conectada
    echo "Wi-Fi: $ssid"
elif ip link show $eth_interface | grep -q "state UP"; then
    # Ethernet está conectado: obtener la IP local
    ip_address=$(ip -4 addr show $eth_interface | grep -oP '(?<=inet\s)\d+(\.\d+){3}')
    echo "Ethernet: $ip_address"
else
    # Ninguna conexión activa
    echo "Disconnected"
fi
