const fs = require('fs')

const promisify = (fn) => (...args) => {
  return new Promise((res, rej) => {
    fn(...args, (err, data) => {
      if(err){
        rej(err)
      }
      res(data)
    })
  })
}



const promisified = promisify(fs.readFile)

promisified('./texts.txt')
  .then((data) => {
    const text = data.toString()
    console.log(text)
  })
  .catch(() => {
    console.log('got an error')
  })

