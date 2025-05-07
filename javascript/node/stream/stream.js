const http = require('node:http')
const { pipeline, finished } = require('node:stream/promises')
const fs = require('fs')
const lowercase = fs.createReadStream('lowercase.txt')
const uppercase = fs.createWriteStream('uppercase.txt', {{ highWaterMark: }})


async function run(){
  await finished(uppercase)
  console.log('lowercase is finished')
}

async function* transform ({ signal }){
  for await (let i of lowercase){
    console.log('here')
    yield i.toString()
  }
}
run()
pipeline(transform, uppercase)