 / var initialParams = function (fn) {
//     return function (/*...args, callback*/) {
//         var args = slice(arguments);
//         var callback = args.pop();
//         fn.call(this, args, callback);
//     };
// };

function testFunction(){
  
  slice(() => {
    const a = 22
  })
}

const slice = (cb) => {
  console.log(cb)
}

testFunction()
