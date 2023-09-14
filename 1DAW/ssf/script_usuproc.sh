#!/bin/bash
if grep -q "$1" /etc/passwd
then 
	grep "$1" /etc/passwd | cut -d: -f3 
else
	echo "El usuario $1 no existe"
fi


