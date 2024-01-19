const promisifySync = (fn) => (...args) => {
  return new Promise((res, rej) => {
    try {
      const result = fn(...args)
      if(result instanceof Error){
        rej(result)
      }
      res(result)
    } catch (error) {
      rej(error)
    }
  })
}


const syncFunction = (num) => {
  return num / 2
}
const promisified = promisifySync(syncFunction)

promisified(10)
.then((value) => {
  console.log(value)
})
