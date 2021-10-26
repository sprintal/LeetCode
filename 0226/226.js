/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) {
        return root;
    }
    invertTree(root.left);
    invertTree(root.right);
    [root.left, root.right] = [root.right, root.left];
    return root;
};

// Runtime: 60 ms, faster than 68.89% of JavaScript online submissions for Invert Binary Tree.
// Memory Usage: 33.6 MB, less than 100.00% of JavaScript online submissions for Invert Binary Tree.