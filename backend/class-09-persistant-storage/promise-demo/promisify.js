'use strict';

const fs = require('fs')

//// the old way
//let readFile = (...args) => {
  //return new Promise((resolve, reject) => {
    //fs.readFile(...args, (err, data) => {
      //if(err) return reject(err)
      //resolve(data)
    //})
  //})
//}

// create a function that takes in a function wich uses the (...args, (err,dat) =>) pattern (a nodejs function) and return a promise that uses that function
let promisify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, data) => {
      if(err) return reject(err)
      resolve(data)
    })
  })
}

let readFile = promisify(fs.readFile)
let writeFile = promisify(fs.writeFile)


readFile(`${__dirname}/index.js`)
.then(buf => {
  let upper = buf.toString().toUpperCase()
  return writeFile(`${__dirname}/output.txt`, upper)
})
.then(() => {
  console.log('success')
})
.catch(err => {
  console.log('err', err)
})
