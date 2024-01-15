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
const a = obj

  return number / 2
}

const promisified = promisifySync(syncFunction)

promisified(10)
.then((value) => {
  console.log(value)
}
