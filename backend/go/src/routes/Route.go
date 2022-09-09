package routes

import (
	/* Fiber */
	"github.com/gofiber/fiber/v2"
	/* DB */
	"S1P2/src/config"
	/* Entity */
	"S1P2/src/entity"

	/* import */
	"fmt"
)

func GetStudent(c *fiber.Ctx) error {
	
	var listUsr []entity.Estudiante

	query := "SELECT * FROM ESTUDIANTE;"
	result, err := config.Conn().Query(query)

	if err != nil {
		fmt.Println(err)
	}
	for result.Next() {
		var usr entity.Estudiante
		err = result.Scan(&usr.Name, &usr.Carnet)
		if err != nil {
			fmt.Println(err)
		}
		listUsr = append(listUsr, usr)
	}

	return c.Status(200).JSON(listUsr)
}