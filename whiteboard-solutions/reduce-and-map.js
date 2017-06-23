'use strict'

let reduce = (list, callback, result) => {
  let start = result ? 0 : 1
  result = result || list [0]
  for(i=start; i<list.length; i++){
    result = callback(result, list[i], i, list)
  }
  return result
}


let map = (list, callback) => 
  reduce(list, (prev, next, i, list) => {
    prev.push(callback(next, i , list))
    return prev
  }, [])

// alternatives using call and map
//map = (list, callback) => 
  //return Array.prototype.map.call(list, callback)

//reduce = (list, ...args) => 
  //return Array.prototype.reduce.apply(list, args)

try {
  console.log('testing reduce')
  console.log('success')
} catch (e) {
  console.error('failed', e)
}
