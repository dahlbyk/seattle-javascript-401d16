class BSTNode {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }

  addNode(node){
    if(!(node instanceof BSTNode))
      throw new Error('VALIDATION ERROR: addNode expects a BSTNode')
    if(node.value === this.value)
      return 
    if(node.value < this.value){
      if(!this.left){
        this.left = node
        return
      }
      this.left.addNode(node)
      return 
    }
    if(!this.right){
      this.right = node;
      return 
    }
    this.right.addNode(node)
  }

}

BSTNode.printDepth= function(node, pad=''){
  if(!node) return
  console.log(`${pad}${node.value}`)
  BSTNode.print(node.left, `${pad} `)
  BSTNode.print(node.right, `${pad} `)
}

BSTNode.printBredth = function(node){
  let queue = [node]
  while(queue.length){
    let current = queue.shift()
    if(!current) return
    console.log(current.value)
    if(current.left)
      queue.push(current.left)
    if(current.right)
      queue.push(current.right)
  }
}

module.exports = BSTNode







//let root = new BSTNode(15)
//let rootLeft = new BSTNode(7)
//let rootRight = new BSTNode(20)
//let rootLeftLeft = new BSTNode(3)
//let rootLeftRight = new BSTNode(9)
//let rootRightLeft = new BSTNode(17)
//let rootRightRight = new BSTNode(32)
    //root.addNode(rootLeft)
    //root.addNode(rootRight)
    //root.addNode(rootLeftLeft)
    //root.addNode(rootLeftRight)
    //root.addNode(rootRightLeft)
    //root.addNode(rootRightRight)

//BSTNode.printDepth(root)
//BSTNode.printBredth(root)
