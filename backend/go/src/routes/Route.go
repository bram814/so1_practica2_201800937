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
	"os/exec"
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


func GetRam(c *fiber.Ctx) error {

	fmt.Println("Datos obtenidos desde el Módulo:")
	fmt.Println("")

	cmd := exec.Command("sh", "-c", "cat /proc/ram_201800937")
	out, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Println(err)
	}
	output := string(out[:])
	fmt.Println(output)

	return c.SendString("Succes")
}


func GetCpu(c *fiber.Ctx) error {

	fmt.Println("Datos obtenidos desde el Módulo:")
	fmt.Println("")

	cmd := exec.Command("sh", "-c", "cat /proc/cpu_201800937")
	out, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Println(err)
	}
	output := string(out[:])
	fmt.Println(output)

	return c.SendString("Succes")
}