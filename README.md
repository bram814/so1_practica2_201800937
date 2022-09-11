# so1_practica2_201800937
SISTEMAS OPERATIVOS 1 SECCIÓN N


# Frontend

___________

## REACT
_______


##### How to install Nodejs on Ubuntu
____


Install Nodejs and npm
```bash
sudo apt install nodejs npm
```

Version Nodejs and npm

```bash
sudo node -v && npm -v
# v18.7.0
# 8.17.0
```


Create React App
```bash
npx create-react-app my-app
cd my-app
npm start
```


Dependencias
```bash
npm i react-router-dom
npm i materialize-css
```


### Modulo


Dependecias en la VM
```bash
sudo apt install build-essential
sudo apt-get install manpages-dev
```


Compilar archivo
```bash
make all
```

Limpiar el archivo
```bash
make clean
```

Insertar módulo
```bash
sudo insmod <<nombre_modulo>>.ko
```

Obtener los mensajes de entrada y salida del módulo
```bash
sudo dmesg -C
```

Verificar informacion de los procesos en el directorio proc/
```bash
cd /proc
```

Listar módulos
```bash
ls
```

Leer archivo escrito
```bash
cat <<nombre_archivo>>
```

Eliminar modulo
```bash
sudo rmmod <<nombre_modulo>>.ko
```