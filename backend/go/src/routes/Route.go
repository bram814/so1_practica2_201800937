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
	// "reflect"
	"os/exec"
	"encoding/json"
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
	
	str2 := "{\n\t\"data\":" + output +"\n}"
	
	var data map[string]interface{}
	err_convert := json.Unmarshal([]byte(str2), &data)
	if err != nil {
		fmt.Println(err_convert)
	}

	
	for _, value := range data {
		for _, s := range value.([]interface {}){
			fmt.Println("---------- TASK ----------")
			fmt.Println(s.(map[string]interface {})["pid"])
			fmt.Println(s.(map[string]interface {})["name"])
			fmt.Println(s.(map[string]interface {})["state"])
			fmt.Println(s.(map[string]interface {})["user"])
			fmt.Println(s.(map[string]interface {})["parent"])
			fmt.Println(s.(map[string]interface {})["childs"].([]interface {}))

			fmt.Println("---------- CHILD ----------")
			for _, i := range s.(map[string]interface {})["childs"].([]interface {}) {
				fmt.Println(i.(map[string]interface {})["pid"])
				fmt.Println(i.(map[string]interface {})["name"])
				fmt.Println(i.(map[string]interface {})["state"])
				fmt.Println(i.(map[string]interface {})["user"])
				fmt.Println(i.(map[string]interface {})["parent"])
				fmt.Println("_________________________")

			}

		}
	}
	

	return c.SendString("Succes")
}