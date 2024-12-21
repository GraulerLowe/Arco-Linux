#!/bin/bash
 networks=$(nmcli device wifi list | awk 'NR>1 {print $2 " - " >
 selected=$(echo "$networks" | rofi -dmenu -i -p "Select Networ>
 
  if [ -n "$selected" ]; then
    ssid=$(echo $selected | awk '{print $1}')
    nmcli device wifi connect "$ssid"
  fi