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