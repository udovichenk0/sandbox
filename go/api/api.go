package main

import (
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
)

type Person struct {
	Name    string `form:"name"`
	Address string `form:"address"`
}

type Person2 struct {
	ID   string `uri:"id" binding:"required,uuid"`
	Name string `uri:"name" binding:"required"`
}

func main() {
	gin.ForceConsoleColor()
	router := gin.Default()
	router.Use(gin.LoggerWithFormatter(func(param gin.LogFormatterParams) string {
		return fmt.Sprintf("ip: %s \"%s %s %s %d %s \"%s\" %s\"\n",
			param.ClientIP,
			param.Method,
			param.Path,
			param.Request.Proto,
			param.StatusCode,
			param.Latency,
			param.Request.UserAgent(),
			param.ErrorMessage,
		)
	}))
	router.Use(gin.Recovery())
	router.GET("/albums", getAlbums)
	router.GET("/a/:name/:id", bindUri)
	router.Run(":8080")
}

func getAlbums(c *gin.Context) {
	var person Person

	if c.ShouldBind(&person) == nil {
		log.Println(person.Name)
		log.Println(person.Address)
	}
	c.String(200, "Lul")
}

func bindUri(c *gin.Context) {
	var person Person2
	err := c.ShouldBindUri(&person)
	if err != nil {
		c.IndentedJSON(400, err)
		return
	}
	c.String(200, "pong")
	c.IndentedJSON(200, gin.H{
		"id":   person.ID,
		"name": person.Name,
	})
}
