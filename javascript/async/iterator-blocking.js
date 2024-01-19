const array = Array.from({length: 100}, (_, id) => id)
const obj = {
  current: 0,
  last: array.length,

  [Symbol.asyncIterator](){
    return {
      current: this.current,
      last: this.last,
      async next(){
        return await new Promise((res) => {
          res({done: this.current == this.last, value: this.current++})
        })
      }
    }
  }
};

const timer = setTimeout(() => {
  console.log("timer triggered")
}, 10);

(async () => {
  for await ( const item of obj ){
    console.log(item)
  }
})()
