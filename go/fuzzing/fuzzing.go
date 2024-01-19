package main

import (
	"fmt"
	"unicode/utf8"
)

func Reverse(s string) string {
	b := []rune(s)
	fmt.Println(b)
	for start, last := 0, utf8.RuneCountInString(s)-1; last >= 0; start, last = start+1, last-1 {
		b[start] = rune(s[last])
	}
	return string(b)
}

func main() {
	a := 's'
	fmt.Println(a)
}

// func TestReverse(t *testing.T) {
// 	testcases := []struct {
// 		in, want string
// 	}{
// 		{"Hello, world", "dlrow ,olleH"},
// 		{" ", " "},
// 		{"!12345", "54321!"},
// 	}
// 	for _, tc := range testcases {
// 		rev := Reverse(tc.in)
// 		if rev != tc.want {
// 			t.Errorf("Reverse: %q, want %q", rev, tc.want)
// 		}
// 	}
// }
