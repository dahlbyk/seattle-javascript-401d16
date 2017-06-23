'use strict';

const printLinkedList = (current) => {
  while(current){
    console.log(current.value)
    current = current.next
  }
}

// alternative 
//const printLinkedList = (current) => {
  //if(current){
    //console.log(current.value)
    //printLinkedList(current.next)
  //}
//}


let head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3, 
      next: {
        value: 4,
        next: null,
      },
    },
  },
}

printLinkedList(head)


