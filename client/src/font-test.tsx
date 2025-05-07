// Define a FontFace
const font = new FontFace("myfont", "url(Anta-Regular.ttf)");

// Load the font
//load fonts conditionally
//for instance if user have slow internet(navigator.connection.effectiveType) or he turn on to saveData (navigator.connection.saveData)
font.load();
document.fonts.ready.then((font1) => {
  document.fonts.add(font);
  // document.body.style.fontFamily
})

// var font = new FontFace("Awesome Font", "url(/fonts/awesome.woff2)", {
//   style: 'normal', unicodeRange: 'U+000-5FF', weight: '400'
// });

// // don't wait for the render tree, initiate an immediate fetch!
// font.load().then(function() {
//   // apply the font (which may re-render text and cause a page reflow)
//   // after the font has finished downloading
//   document.fonts.add(font);
//   document.body.style.fontFamily = "Awesome Font, serif";

//   // OR... by default the content is hidden,
//   // and it's rendered after the font is available
//   var content = document.getElementById("content");
//   content.style.visibility = "visible";

//   // OR... apply your own render strategy here...
// });


//!css
//*local means if the user has font dowloaded then its not gonna download it but just use it
// @font-face {
//   font-family: 'Awesome Font';
//   font-style: italic;
//   font-weight: 400;
//   src: local('Awesome Font Italic'),
//        url('/fonts/awesome-i.woff2') format('woff2'),
//        url('/fonts/awesome-i.woff') format('woff');
// }

// the order of the src fonts matters. The the modern fonts should be at the top and for legacy should be at the bottom 

//! should write unicode-range to sptil large unicode font into smaller subsets(ex. latin, cyrillic) 
// @font-face {
//   font-family: 'Awesome Font';
//   font-style: normal;
//   font-weight: 400;
//   src: local('Awesome Font'),
//        url('/fonts/awesome-jp.woff2') format('woff2');
//   /* Japanese glyphs */
//   unicode-range: U+3000-9FFF, U+ff??;
// }
//! https://github.com/fonttools/fonttools tool if the browser doesn't support unicode-range