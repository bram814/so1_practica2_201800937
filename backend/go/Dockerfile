# Version GOLANG
FROM golang

# Creando el espacio de trabajo
WORKDIR /backend-go

# Copiando todo el codigo
COPY . .

# Ejecutando para crear dependencias
RUN go mod download

EXPOSE 4000

# Levantando la aplicacion
CMD ["go", "run", "main.go"]