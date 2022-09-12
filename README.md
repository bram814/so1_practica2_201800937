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
npm i chart.js
npm i react-chartjs-2
npm i react-minimal-pie-chart
```


### Modulo


Dependecias en la VM
```bash
sudo apt install build-essential
sudo apt-get install manpages-dev
sudo apt install sysstat
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



# Fiber

Create App
```bash
$ go mod init [nombre]
--------------------
-     Ejemplo      - 
- go mod init S1P2 -
--------------------
```

Install Dependencies
```bash
go get github.com/gofiber/fiber
go get -u github.com/gofiber/fiber/v2
go get -u github.com/gofiber/template
```

Library

```bash
go get github.com/joho/godotenv
```

go >= 1.17

```bash
go install github.com/joho/godotenv/cmd/godotenv@latest
```

go < 1.17

```bash
go get github.com/joho/godotenv/cmd/godotenv
````



### Ejecutar Proyecto
```bash
$ go build main.go
$ go run main.go
```



### Mysql

```bash
go get -u gorm.io/gorm
go get -u gorm.io/driver/mysql
go mod tidy
````

# Backend en Nodejs


CREAR package.json

```bash
npm init -y
```

Dependencias

```bash
npm install express morgan oracledb cors
````

Por último instalar la libería nodemon para que cada vez que se actualice en tiempo real.

```bash
npm i nodemon
````


## Install Mysql en Nodejs

```bash
npm i mysql
```


install dotenv, para archivos .env

```bash
npm i dotenv
````