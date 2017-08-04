const HashTable = require('../hash-table.js')

describe('HashTable', () => {
  test('intial values', () => {
    let h = new HashTable(100)
    expect(h.buckets.length).toEqual(100)
    h.buckets.forEach(bucket => {
      expect(bucket).toEqual([])
    })
  })

  test('HashTable.hash', () => {
    expect(HashTable.hash('abc')).toEqual(294)
  })
  
  test('HashTable.set', () => {
    let h = new HashTable(5)
    h.set('abc', 'hello world')
    h.set('cba', 'goodbye')
    expect(h.buckets[4][0].key).toEqual('abc')
    expect(h.buckets[4][0].value).toEqual('hello world')
    expect(h.buckets[4][1].key).toEqual('cba')
    expect(h.buckets[4][1].value).toEqual('goodbye')
    h.set('cool beans', 'awesome')
    expect(h.buckets[2][0].key).toEqual('cool beans')
    expect(h.buckets[2][0].value).toEqual('awesome')
  })

  test('HashTable.get', () => {
    let h = new HashTable(5)
    h.set('abc', 'hello world')
    expect(h.get('abc')).toEqual('hello world')
  })

})
