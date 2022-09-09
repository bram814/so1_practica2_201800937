package config


import (

	/* MySql */
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	
	/* import */
	"fmt"
	"os"
)


func Conn() *sql.DB {
    connString := fmt.Sprintf("%s:%s@tcp(%s:3306)/%s", os.Getenv("DB_USER"), os.Getenv("DB_PASS"), os.Getenv("DB_HOST"), os.Getenv("DB_NAME"))
	conn, err := sql.Open("mysql", connString)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("Conn MySQL")
	
	return conn
}
