const fs = require('fs')
class Thenable {
  fn
  then(fn){
    this.fn = fn
    const next = new Thenable()
    this.next = next
  }
  resolve(data){
    if(this.fn){
      const next = this.fn(data)
      if(next){
        next.then((value) => {
          return next.resolve(value)
        })
      }
    }
  }
}

const readFile = () => {
  const thenable = new Thenable()
  fs.readFile('./text.txt', (err, data) => {
    if(err) return null
    return thenable.resolve(data)
  })
  return thenable
}

(async () => {
  const result = await readFile()
  console.log(result)
})()
