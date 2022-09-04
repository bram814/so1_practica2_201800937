package main

import (
	/* Fiber */
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/cors"
	/* Fiber - Template */
	"github.com/gofiber/template/html"

	/* ENV */
	"github.com/joho/godotenv"
	"os"

	/* import */
	"fmt"
	"log"

	/* Route */
	// "S1P2/src/config"
)




func main() {

	err := godotenv.Load("src/config/.env")
  	if err != nil {
    	log.Fatal("Error loading .env file")
  	}

  	ENV_PORT := os.Getenv("ENV_PORT")

	engine := html.New("./views", ".html")
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Use(cors.New())
	app.Use(logger.New())


	app.Get("/", func(c *fiber.Ctx) error {
		fmt.Println(ENV_PORT)
		return c.Render("index", fiber.Map{})
	})


	_ = app.Listen(":" + ENV_PORT)
}
