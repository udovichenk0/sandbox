function func(x){
  return (f) => {
    if(f && x){
      return func(f(x))
    }
    return f(null)
  }
}


const test = func(5)

test((value) => value * 5)((value) => console.log(value * 10))