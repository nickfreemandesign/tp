/*
https://www.geeksforgeeks.org/check-binary-tree-subtree-another-binary-tree-set-2/

Given two binary trees, check if the first tree is subtree of the second one. A subtree 
of a tree T is a tree S consisting of a node in T and all of its descendants in T.The subtree 
corresponding to the root node is the entire tree; the subtree corresponding to any other 
node is called a proper subtree.

For example, in the following case, Tree1 is a subtree of Tree2.

        Tree2
          x 
        /    \
      a       b
       \
        c


        Tree1
              z
            /   \
          x      e
        /    \     \
      a       b      k
       \
        c
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
 }

 function generateTrees() {
  let output = {}
  let root = new TreeNode(6)
  let node1 = new TreeNode(1)
  let node2 = new TreeNode(9) 
  let node3 = new TreeNode(10) 
  let node4 = new TreeNode(2) 

  root.left = node1
  root.right = node2

  node1.left = node3
  node3.left = node4

  let node5 = new TreeNode(11) 
  let node6 = new TreeNode(2)
  
  node5.left = node6

  output.tree = root
  output.subtree = node5

  return output
 }

const { tree, subtree } = generateTrees()
// console.log(isSubtree(tree, subtree))


/**
 * isSubtree
 * @param {TreeNode} tree
 * @param {TreeNode} subtree
 * @return {boolean}
 */

function isSubtree(tree, subtree) {
  // check tree, compare to subtree
  // if end of subtree, means subtree has successfully been traversed
  if (!subtree) return true
  // if end of search tree, means search tree has been traversed and does not match subtree
  if (!tree) return false
  // if nodes match
  if (tree.val === subtree.val) {
    // compare next nodes between tree and subtree
    return isSubtree(tree.left, subtree.left) && isSubtree(tree.right, subtree.right)
  } else {
    // move down a node in the tree, and repeat same process matching full subtree to next tree node
    return isSubtree(tree.left, subtree) || isSubtree(tree.right, subtree)
  }

}