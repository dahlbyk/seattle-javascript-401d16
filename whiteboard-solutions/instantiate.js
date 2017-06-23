'use strict'

// replacement for new keyword
const instantiate = (fn, ...args) => {
  let result = Object.create(fn.prototype || {}) 
  fn.apply(result, args)
  return result
}

try {
  console.log('testing instantiate')

  function Note(id, content){
    this.id = id
    this.content = content
  }
  Note.prototype.createTemplate = function(){
    return `<p> ${this.content} </p>`
  }

  let note = instantiate(Note, 1234, 'example content')
  console.assert(note.id === 1234)
  console.assert(note.content === 'example content')
  console.assert(note.__proto__ === Note.prototype)
  console.assert(note.createTemplate() == '<p> example content </p>')

  console.log('success')
} catch (err) {
  console.error('failed\n', err)
}
