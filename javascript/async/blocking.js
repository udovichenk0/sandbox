const array = Array.from({length: 10}, (_, id) => id + 1)
const exec = (array, fn) => {
  let i = 0;
  const timeout = () => {
    if(i < array.length){
      fn(i++)
      timeout()
    }
  }
  timeout()
}

const interval = setTimeout(() => {
  console.log("timer triggered")
}, 10)

exec(array, (id) => {
  console.log(id)
})