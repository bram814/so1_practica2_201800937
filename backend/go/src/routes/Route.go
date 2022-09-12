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

	str2 := "{\n\t\"data\":" + output +"\n}"
	
	queryDelete := `DELETE FROM RAM;`
	_, errDelete := config.Conn().Exec(queryDelete)
	if errDelete != nil {
		fmt.Println(errDelete)
	}

	
	var data map[string]interface{}
	err_convert := json.Unmarshal([]byte(str2), &data)
	if err_convert != nil {
		fmt.Println(err_convert)
	}
	query := `INSERT INTO RAM (total, free, used) VALUES (?,?,?);`

	for _, value := range data {
		for _, s := range value.([]interface {}){
			fmt.Println("---------- RAM ----------")
			total := s.(map[string]interface {})["total"]	
			free  := s.(map[string]interface {})["free"]
			used  := s.(map[string]interface {})["used"]
			
			fmt.Println(total.(float64))
			fmt.Println(free.(float64))
			fmt.Println(used.(float64))

			_, err := config.Conn().Exec(query, total, free, used)
			if err != nil {
				fmt.Println(err)
			}
		}
	}

	return c.Status(200).JSON(data)
}


func GetProceso(c *fiber.Ctx) error {

	fmt.Println("Datos obtenidos desde el Módulo:")
	fmt.Println("")

	cmd := exec.Command("sh", "-c", "cat /proc/cpu_201800937")
	out, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Println(err)
	}
	output := string(out[:])

	queryDelete := `DELETE FROM PROCESO;`
	_, errDelete := config.Conn().Exec(queryDelete)
	if errDelete != nil {
		fmt.Println(errDelete)
	}
	
	str2 := "{\n\t\"data\":" + output +"\n}"
	
	var data map[string]interface{}
	err_convert := json.Unmarshal([]byte(str2), &data)
	if err != nil {
		fmt.Println(err_convert)
	}

	
	for _, value := range data {
		for _, s := range value.([]interface {}){

			pid    := s.(map[string]interface {})["pid"]
			name   := s.(map[string]interface {})["name"]
			state  := s.(map[string]interface {})["state"]
			user   := s.(map[string]interface {})["user"]
			ram    := s.(map[string]interface {})["ram"]
			parent := s.(map[string]interface {})["parent"]

			query := `INSERT INTO PROCESO (pid, name, state, user, ram, parent) VALUES (?, ?, ?, ?, ?, ?);`

			_, err_task := config.Conn().Exec(query, pid, name, state, user, ram, parent)
			if err_task != nil {
				fmt.Println(err_task)
			}

			for _, i := range s.(map[string]interface {})["childs"].([]interface {}) {

				pid_child 	 := i.(map[string]interface {})["pid"]
				name_child 	 := i.(map[string]interface {})["name"]
				state_child := i.(map[string]interface {})["state"]
				user_child   := i.(map[string]interface {})["user"]
				ram_child  	 := i.(map[string]interface {})["ram"]
				parent_child := i.(map[string]interface {})["parent"]

				query_child := `INSERT INTO PROCESO (pid, name, state, user, ram, parent) VALUES (?, ?, ?, ?, ?, ?);`
				_, err_child := config.Conn().Exec(query_child, pid_child, name_child, state_child, user_child, ram_child, parent_child)
				if err_child != nil {
					fmt.Println(err_child)
				}

			}

		}
	}
	

	return c.Status(200).JSON(data)
}




func GetCpu(c *fiber.Ctx) error {

	fmt.Println("Datos obtenidos desde el Módulo:")
	fmt.Println("")

	cmd := exec.Command("sh", "-c", "mpstat")
	out, err := cmd.CombinedOutput()
	if err != nil {
		fmt.Println(err)
	}
	output := string(out[:])

	queryDelete := `DELETE FROM CPU;`
	_, errDelete := config.Conn().Exec(queryDelete)
	if errDelete != nil {
		fmt.Println(errDelete)
	}
	
	str2 := "{\n\t\"data\":" + output +"\n}"
	fmt.Println(output)

	var data map[string]interface{}
	err_convert := json.Unmarshal([]byte(str2), &data)
	if err != nil {
		fmt.Println(err_convert)
	}

	// query := `INSERT INTO CPU (pid, name, state, user, ram, parent) VALUES (?, ?, ?, ?, ?, ?);`

	for _, value := range data {
		for _, s := range value.([]interface {}){
			fmt.Println("---------- CPU ----------")
			// total := s.(map[string]interface {})["total"]	
			// free  := s.(map[string]interface {})["free"]
			// used  := s.(map[string]interface {})["used"]
			fmt.Println(s.(map[string]interface {}))

		}
	}
	

	return c.Status(200).JSON(data)
}