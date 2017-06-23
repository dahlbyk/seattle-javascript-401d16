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


try {
  console.log('testing reduce')
  console.log('success')
} catch (e) {
  console.error('failed', e)
}
