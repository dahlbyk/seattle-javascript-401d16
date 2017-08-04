const BSTNode = require('../bst-node.js')

describe('BSTNode', () => {
  test('constructor should init correct values', () => {
    let node = new BSTNode(6)
    expect(node.value).toEqual(6)
    expect(node.left).toEqual(null)
    expect(node.right).toEqual(null)
  })

  test('#addNode expects a node', () => {
    let node = new BSTNode(4)
    expect(() => node.addNode(3)).toThrow()
  })

  test('#addNode should follow bst rules', () => {
    let root = new BSTNode(15)
    let rootLeft = new BSTNode(7)
    let rootRight = new BSTNode(20)
    let rootLeftLeft = new BSTNode(3)
    let rootLeftRight = new BSTNode(9)
    let rootRightLeft = new BSTNode(17)
    let rootRightRight = new BSTNode(32)

    root.addNode(rootLeft)
    root.addNode(rootRight)
    root.addNode(rootLeftLeft)
    root.addNode(rootLeftRight)
    root.addNode(rootRightLeft)
    root.addNode(rootRightRight)

    expect(root).toEqual(root)
    expect(root.left).toEqual(rootLeft)
    expect(root.right).toEqual(rootRight)
    expect(root.left.left).toEqual(rootLeftLeft)
    expect(root.left.right).toEqual(rootLeftRight)
    expect(root.right.left).toEqual(rootRightLeft)
    expect(root.right.right).toEqual(rootRightRight)

    BSTNode.print(root)
  })
})
