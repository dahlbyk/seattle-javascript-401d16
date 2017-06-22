'use strict'

const deepCopy = (data) => {
  return Object.keys(data).reduce((result, key) => {
    if(typeof data[key] === 'object')
      result[key] = deepCopy(data[key])
    else 
      result[key] = data[key]
    return result
  }, {})
}


console.log('TESTING deepCopy')
try {
  let data = {
    nested: {
      a: 'one',
      doubleNested: {
        b: 'two',
      },
    },
  }

  let copy = deepCopy(data)
  console.assert(data.nested.a == copy.nested.a)
  console.assert(data.nested.doubleNested.b == copy.nested.doubleNested.b)
  
  copy.changed = 'example change'
  console.assert(data.changed == undefined)

  copy.nested.a = 'example changed'
  console.assert(data.nested.a == 'one')

  copy.nested.doubleNested.b = 'example changed'
  console.assert(data.nested.doubleNested.b == 'two')

  console.log('success')
} catch (e) {
  console.log(e)
}



