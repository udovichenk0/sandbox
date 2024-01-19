package main

import (
	"fmt"
	"io"
	"os"
	"regexp"
	"strings"

	"golang.org/x/tour/tree"
)

type mystruct struct {
	value int
}

type User struct {
	name string
	age  uint8
}

func Insert[T int | uint8](slice []T, i int, el T) []T {
	n := len(slice)
	if cap(slice) == len(slice) {
		newSlice := make([]T, len(slice), cap(slice)*2+1)
		copy(newSlice, slice)
		slice = newSlice
	}
	slice = slice[0 : n+1]
	slice[n] = el
	return slice
}

func SubtractOneFromLength(slice *[]int) []int {
	var s = *slice
	fmt.Printf("%+v", slice)
	*slice = s[2:4]
	return s
}

var digitRegexp = regexp.MustCompile("[0-9]+")

func FindDigits(filename string) []byte {
	b, _ := os.ReadFile(filename)
	bytes := digitRegexp.Find(b)
	newSlice := make([]byte, len(bytes))
	copy(newSlice, bytes)
	return newSlice
}

func IncreaseUserAge(user *User) {
	*user = User{name: "Denis", age: 23}
}

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": {40.68433, -74.39967},
	"Google":    {37.42202, -122.08408},
}

func WordCount(s string) map[string]int {
	stringSlice := strings.Split(s, " ")
	myMap := make(map[string]int)
	for _, word := range stringSlice {
		myMap[word]++
	}
	return myMap
}

type MyType []byte
type I interface {
	Read(b []byte) (n int, err error)
}

func (l MyType) Read(b []byte) (n int, err error) {
	copy(b, l)
	return len(b), nil
}

// func rot13Reader(r io.Reader) I {
// 	a, err := io.ReadAll(r)
// 	var by = MyType{}
// 	// var b []byte
// 	for _, n := range a {
// 		if n >= 97 && n <= 122 {
// 			next := math.Mod(float64(n+13), 122)
// 			if next < 97 {
// 				by = append(by, byte(next+97))
// 			} else {
// 				by = append(by, byte(next))
// 			}
// 		}
// 	}

// 	if err != nil {
// 		fmt.Println(err)
// 	}
// 	fmt.Println(a)
// 	fmt.Println(by)
// 	return by
// }

// type rot13Reader struct {
// 	r io.Reader
// }

func ReadFile(filename string) (string, error) {
	f, err := os.Open(filename)
	defer f.Close()

	if err != nil {
		return "", err
	}

	var bytes []byte

	b := make([]byte, 5)

	for {
		_, err := io.ReadFull(f, b)
		if err != nil {
			if err == io.EOF {
				break
			}
			return "", err
		}
		fmt.Println(bytes)
		bytes = append(bytes, b...)
	}
	return string(bytes), nil
}

func sum(s []int, c chan int) {
	sum := 0
	fmt.Println(len(s))
	for _, v := range s {
		sum += v
		c <- sum
	}
}
func Walk(n *tree.Tree, ch chan int) {
	if n.Left != nil {
		go Walk(n.Left, ch)
		ch <- n.Value
		if n.Right != nil {
			go Walk(n.Right, ch)
			return
		}
		return
	}
	if n.Left == nil && n.Right == nil {
		ch <- n.Value
		return
	}
	if n.Right != nil {
		ch <- n.Value
		go Walk(n.Right, ch)
		return
	}
}

type L int

func main() {

	// var a MyInterface = IntType(2)
	var a L = 2
	Test(a)
}
func Test[T ~int](p T) {
	fmt.Println(p)
}

// func (i IntType) IntMethod() {
// 	fmt.Println("I am int method", i)
// }
