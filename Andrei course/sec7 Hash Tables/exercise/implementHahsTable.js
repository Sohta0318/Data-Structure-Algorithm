class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, val){
const bucket = [key, val]
const hash = this._hash(key)
    this.data[hash] = bucket
    console.log(this.data);
  }

  get(key){
    const hash = this._hash(key)
    console.log(this.data[hash][1]);
    return this.data[hash]
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
