package main

import "fmt"

type Number interface {
	int64 | float64
}

func GenericSum[T string, S Number](m map[T]S) S {
	var s S
	for _, num := range m {
		s += num
	}
	fmt.Print(s, "\n")
	return s
}

func main() {
	ints := map[string]int64{
		"first":  24,
		"second": 13,
	}
	floats := map[string]float64{
		"first":  1.2,
		"second": 2.3,
	}

	GenericSum(ints)
	GenericSum(floats)
}
