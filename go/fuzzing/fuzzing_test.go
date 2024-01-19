package main

import (
	"testing"
	"unicode/utf8"
)

// func TestReverse(f *testing.T) {
// 	testcases := []struct {
// 		in, want string
// 	}{
// 		{"Hello world", "dlrow olleH"},
// 	}

// 	for _, tc := range testcases {
// 		rev := Reverse(tc.in)
// 		if tc.want != rev {
// 			f.Errorf("%s is not equal to %s", rev, tc.want)
// 		}
// 	}
// }

func FuzzReverse(f *testing.F) {
	testcases := []string{"Hello world", " ", "!123456"}

	for _, tc := range testcases {
		f.Add(tc)
	}
	f.Fuzz(func(t *testing.T, orig string) {
		rev := Reverse(orig)
		doubleRev := Reverse(rev)
		t.Logf("Number of runes: orig=%d, rev=%d, doubleRev=%d", utf8.RuneCountInString(orig), utf8.RuneCountInString(rev), utf8.RuneCountInString(doubleRev))
		if orig != doubleRev {
			t.Errorf("Before: %s, After: %s", orig, rev)
		}
		if utf8.ValidString(orig) && !utf8.ValidString(rev) {
			t.Errorf("Reverse produced invalid UTF-8 string %q", rev)

		}
	})
}
