const array = Array.from({length: 100}, (_, id) => id + 1)

export const obj = {
    current: 0,
    last: array.length,
    [Symbol.asyncIterator](){
        let time = performance.now()
        return {
          next: () => {
          const now = performance.now();
          const diff = now - time;
          if (diff > 10) {
            time = now;
            return new Promise(resolve => {
              setTimeout(() => {
                resolve({
                  done: this.current == this.last,
                  value: this.current 
                });
              }, 0);
            });
          }
          return Promise.resolve({
            done: this.current == this.last,
            value: this.current++
          });
        }
    };
    }
};
const interval = setInterval(function timeout(){
  console.log('interval');
}, 10);
(async function start(){
    var t0 = performance.now();
    for await (let i of obj){
        if(i == array.length - 1){
            var t1 = performance.now();
            console.log(t1 - t0)
            clearInterval(interval)
        }
    }
})()
