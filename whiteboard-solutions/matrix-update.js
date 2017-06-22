'use strict'

let matrixUpdate = (m, x, y, val) => {
	let copy = [...m]
	copy[y] = copy[y].map((v, i) => i == x ? val : v)
	return copy 
}

// alternative
//matrixUpdate = (m, x, y, val) => 
	//m.map((row, indexY) => 
		//row.map((item, indexX) => 
			//x == indexX && y == indexY ? val : item))

// alternative
//matrixUpdate = (m, x, y, val) => {
	//return Object.assign([], m, {[y]: Object.assign([], m[y], {[x]: val})}) 
//}

try {
  console.log('testing matrixUpdate')
  let data = [
    [0,0],
    [0,0],
  ];

  let result = matrixUpdate(data, 0, 0, 1)
  console.assert(data[0][0] == 0)
  console.assert(result[0][0] == 1) 

  result = matrixUpdate(data, 1, 0, 1)
  console.assert(data[0][1] == 0)
  console.assert(result[0][1] == 1) 

  result = matrixUpdate(data, 0, 1, 1)
  console.assert(data[1][0] == 0)
  console.assert(result[1][0] == 1) 

  result = matrixUpdate(data, 1, 1, 1)
  console.assert(data[1][1] == 0)
  console.assert(result[1][1] == 1) 

  console.log('success')
} catch (e) {
  console.error('failed', e)
}
