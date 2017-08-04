class HashTable {
  constructor(size){
    this.buckets = new Array(size).fill(0).map(() => [])
  }

  set(key, value){
    let hash = HashTable.hash(key)
    let data = { key, value }
    this.buckets[hash % this.buckets.length].push(data)
  }
  
  get(key){
    let hash = HashTable.hash(key)
    let bucket = this.buckets[hash % this.buckets.length]
    let result = null;
    for(let i=0; i<bucket.length; i++){
      if(bucket[i].key == key)
        result = bucket[i]
    }
    if(result)
      return result.value
    return null
  }

}

HashTable.hash = function(key){
  let chars = key.split('')
  return chars.reduce((result, next) => result + next.charCodeAt(0), 0)
}


module.exports = HashTable
