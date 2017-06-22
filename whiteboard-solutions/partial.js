'use strict';


let partial = (fn, ...defaults) => (...args) => 
  fn(...defaults, ...args)

try {
  console.log('testing partial')

  let toToThePowerOf = partial(Math.pow, 2)
  console.assert(toToThePowerOf(2) == 4) 
  console.assert(toToThePowerOf(2) == 4) 

  let stringify = (...args) => args.join(' ')
  let greet = partial(stringify, 'hello', 'there,')
  let message = greet('slug!', 'whats', 'up?')
  console.assert(message == 'hello there, slug! whats up?')

  console.log('success')
} catch(e){
  console.error('failed', e)
}
