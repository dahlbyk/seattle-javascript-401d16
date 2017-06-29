'use strict'

class Queue {
  enqueue(){
    return Array.prototype.push.apply(this, arguments)
  }
  dequeue(){
    return Array.prototype.shift.apply(this, arguments)
  }
}

class Promise {
  constructor(callback){
    this.successCallbacks = new Queue()
    this.failureCallbacks = new Queue()

    let handleNext = (handlers, data) => {
      try {
        let nextCallback = handlers.dequeue()
        if(!nextCallback) 
          return 
        let result = nextCallback(data)
        if(result instanceof Promise){
          result
          .then(data => handleNext(this.successCallbacks, data))
          .catch(err => handleNext(this.failureCallbacks, err))
          return 
        }
        handleNext(this.successCallbacks, result)
      } catch (err) {
        handleNext(this.failureCallbacks, err)
      }
    }

    setTimeout(() => {
      try {
        callback(
          data => handleNext(this.successCallbacks, data) , 
          err => handleNext(this.failureCallbacks, err)
        )
      } catch(err){
        nextCallback(this.failureCallbacks, err)
      }
    }, 0)
  }

  then(callback){
    this.successCallbacks.enqueue(callback)
    return this
  }

  catch(callback){
    this.failureCallbacks.enqueue(callback)
    return this
  }
}

new Promise((resolve, reject) => {
  resolve(3)
})
.then(value => {
  console.assert(value == 3)
  console.log('booyea', value)
  throw "hahha"
})
.catch((err) => {
  console.log(err)
  console.assert(err == 'hahha')
  return new Promise(resolve => resolve(123))
})
.then(val => {
  console.assert(val == 123)
  console.log('double booyea', val )
  return new Promise((resolve, reject) => reject('whoops'))
})
.catch(err => {
  console.log('err say whoops:', err == 'whoops')
})
