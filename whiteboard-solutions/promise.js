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
    this.handleReject = this.handleReject.bind(this)
    this.handleResolve = this.handleResolve.bind(this)
    setTimeout(() => {
      try {
        callback(this.handleResolve, this.handleReject)
      } catch(err){
        this.handleReject(err)
      }
    }, 0)
  }

  handleResolve(data) {
    console.log('handleResolve', data)
    try {
      let nextCallback = this.successCallbacks.dequeue()
      if(!nextCallback) 
        return 
      let result = nextCallback(data)
      if(result instanceof Promise){
        result
        .then(this.handleResolve)
        .catch(this.handleReject)
        return 
      }
      this.handleResolve(result)
    } catch (err) {
      this.handleReject(err)
    }
  }

  handleReject(data) {
    console.log('handleReject', data)
    try {
      let nextCallback = this.failureCallbacks.dequeue()
      if(!nextCallback) 
        return 
      let result = nextCallback(data)
      if(result instanceof Promise){
        result
        .then(this.handleResolve)
        .catch(this.handleReject)
        return 
      }
      this.handleResolve(result)
    } catch (err) {
      this.handleReject(err)
    }
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
